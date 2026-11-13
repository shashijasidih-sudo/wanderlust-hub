CREATE OR REPLACE FUNCTION public.create_booking_with_items(_booking jsonb, _items jsonb)
RETURNS public.bookings
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  v_booking      public.bookings%ROWTYPE;
  v_payment_id   text;
  v_user_id      uuid;
  v_tour_date    date;
  v_item         jsonb;
  v_item_name    text;
  v_item_date    date;
  v_item_count   integer;
BEGIN
  v_payment_id := NULLIF(_booking->'item_details'->>'payment_id', '');
  v_user_id    := NULLIF(_booking->>'user_id', '')::uuid;
  v_item_count := jsonb_array_length(COALESCE(_items, '[]'::jsonb));

  ---------------------------------------------------------------
  -- (A) Required-field validation — BEFORE any insert.
  -- No silent empty-string substitution for required business data.
  ---------------------------------------------------------------
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'booking_owner_missing: a signed-in user_id is required to create a booking'
      USING ERRCODE = '23502';
  END IF;

  IF NULLIF(trim(COALESCE(_booking->>'contact_name', '')), '') IS NULL THEN
    RAISE EXCEPTION 'contact_name_required: the lead traveller name is required'
      USING ERRCODE = '23502';
  END IF;

  IF NULLIF(trim(COALESCE(_booking->>'contact_email', '')), '') IS NULL THEN
    RAISE EXCEPTION 'contact_email_required: a contact email is required'
      USING ERRCODE = '23502';
  END IF;

  IF NULLIF(trim(COALESCE(_booking->>'tour_name', '')), '') IS NULL THEN
    RAISE EXCEPTION 'tour_name_required: a booking title is required'
      USING ERRCODE = '23502';
  END IF;

  IF v_item_count IS NULL OR v_item_count = 0 THEN
    RAISE EXCEPTION 'items_required: at least one booking item is required'
      USING ERRCODE = '23514';
  END IF;

  IF v_item_count > 10 THEN
    RAISE EXCEPTION 'too_many_items: a booking may contain at most 10 items'
      USING ERRCODE = '23514';
  END IF;

  ---------------------------------------------------------------
  -- (B) Per-item validation + parent date derivation.
  -- eSIM is treated as a regular activity: EVERY item, whatever
  -- its product_type, must carry a travel_date. The parent
  -- bookings.tour_date is derived as the EARLIEST item travel_date
  -- (the day the trip begins) — never NULL, never invented.
  ---------------------------------------------------------------
  FOR v_item IN SELECT * FROM jsonb_array_elements(_items) LOOP
    v_item_name := NULLIF(trim(COALESCE(v_item->>'activity_name', '')), '');
    v_item_date := NULLIF(v_item->>'travel_date', '')::date;

    IF v_item_name IS NULL THEN
      RAISE EXCEPTION 'activity_name_required: every booking item needs a name'
        USING ERRCODE = '23502';
    END IF;

    IF v_item_date IS NULL THEN
      RAISE EXCEPTION 'travel_date_required: every item requires a travel/pickup date (item: %)',
        COALESCE(v_item->>'activity_name', '?') USING ERRCODE = '23514';
    END IF;

    IF v_tour_date IS NULL OR v_item_date < v_tour_date THEN
      v_tour_date := v_item_date;
    END IF;
  END LOOP;

  -- Parent tour_date: explicit value wins only if supplied; otherwise
  -- the derived earliest item date. Both paths are non-NULL by now.
  v_tour_date := COALESCE(NULLIF(_booking->>'tour_date', '')::date, v_tour_date);

  ---------------------------------------------------------------
  -- (C) Idempotency: one booking per Razorpay payment,
  -- safe under retries, duplicate callbacks and concurrency.
  ---------------------------------------------------------------
  IF v_payment_id IS NOT NULL THEN
    PERFORM pg_advisory_xact_lock(hashtext(v_payment_id));
    SELECT * INTO v_booking
      FROM public.bookings
      WHERE item_details->>'payment_id' = v_payment_id;
    IF FOUND THEN
      RETURN v_booking; -- retry of an already-saved payment
    END IF;
  END IF;

  ---------------------------------------------------------------
  -- (D) Parent booking: explicit column list so defaults apply.
  ---------------------------------------------------------------
  INSERT INTO public.bookings (
    id, booking_number, user_id,
    contact_name, contact_email, contact_phone,
    total_price, currency, status,
    tour_name, tour_slug, tour_date,
    adults, children, special_requests,
    item_details, created_at, updated_at
  ) VALUES (
    COALESCE(NULLIF(_booking->>'id', '')::uuid, gen_random_uuid()),
    NULLIF(_booking->>'booking_number', ''),          -- trigger fills YL-… if NULL
    v_user_id,
    trim(_booking->>'contact_name'),
    trim(_booking->>'contact_email'),
    NULLIF(_booking->>'contact_phone', ''),
    COALESCE(NULLIF(_booking->>'total_price', '')::numeric, 0),
    COALESCE(NULLIF(_booking->>'currency', ''), 'INR'),
    COALESCE(NULLIF(_booking->>'status', ''), 'confirmed'),
    trim(_booking->>'tour_name'),
    COALESCE(_booking->>'tour_slug', ''),
    v_tour_date,
    COALESCE(NULLIF(_booking->>'adults', '')::integer, 1),
    COALESCE(NULLIF(_booking->>'children', '')::integer, 0),
    NULLIF(_booking->>'special_requests', ''),
    COALESCE(_booking->'item_details', '{}'::jsonb),
    now(), now()
  )
  RETURNING * INTO v_booking;

  ---------------------------------------------------------------
  -- (E) Items: explicit column list, booking_id from the parent.
  ---------------------------------------------------------------
  INSERT INTO public.booking_items (
    id, booking_id, product_id, product_type,
    activity_name, activity_slug, image_url, destination,
    travel_date, quantity, adults, children,
    price, currency, status,
    pickup_required, pickup_type, hotel_name, pickup_location,
    country, meeting_point, pickup_time, drop_location,
    flight_number, airline, terminal, special_requests,
    item_details, created_at, updated_at
  )
  SELECT
    COALESCE(NULLIF(it->>'id', '')::uuid, gen_random_uuid()),
    v_booking.id,
    NULLIF(it->>'product_id', ''),
    COALESCE(NULLIF(it->>'product_type', ''), 'activity'),
    trim(it->>'activity_name'),
    NULLIF(it->>'activity_slug', ''),
    NULLIF(it->>'image_url', ''),
    NULLIF(it->>'destination', ''),
    NULLIF(it->>'travel_date', '')::date,
    COALESCE(NULLIF(it->>'quantity', '')::integer, 1),
    COALESCE(NULLIF(it->>'adults', '')::integer, 1),
    COALESCE(NULLIF(it->>'children', '')::integer, 0),
    COALESCE(NULLIF(it->>'price', '')::numeric, 0),
    COALESCE(NULLIF(it->>'currency', ''), 'INR'),
    COALESCE(NULLIF(it->>'status', ''), 'confirmed'),
    COALESCE(NULLIF(it->>'pickup_required', '')::boolean, false),
    NULLIF(it->>'pickup_type', ''),
    NULLIF(it->>'hotel_name', ''),
    NULLIF(it->>'pickup_location', ''),
    NULLIF(it->>'country', ''),
    NULLIF(it->>'meeting_point', ''),
    NULLIF(it->>'pickup_time', ''),
    NULLIF(it->>'drop_location', ''),
    NULLIF(it->>'flight_number', ''),
    NULLIF(it->>'airline', ''),
    NULLIF(it->>'terminal', ''),
    NULLIF(it->>'special_requests', ''),
    COALESCE(it->'item_details', '{}'::jsonb),
    now(), now()
  FROM jsonb_array_elements(_items) AS it;

  RETURN v_booking;
END;
$function$;
