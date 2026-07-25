-- =========================================================
-- profiles
-- =========================================================
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_admin(_uid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = _uid AND role IN ('admin','super_admin')
  );
$$;

CREATE POLICY "profiles self select" ON public.profiles
  FOR SELECT TO authenticated USING (id = auth.uid() OR public.is_admin(auth.uid()));
CREATE POLICY "profiles self insert" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "profiles self update" ON public.profiles
  FOR UPDATE TO authenticated USING (id = auth.uid() OR public.is_admin(auth.uid()));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER trg_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =========================================================
-- bookings
-- =========================================================
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_number TEXT UNIQUE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  contact_name TEXT NOT NULL DEFAULT '',
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  total_price NUMERIC NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'INR',
  status TEXT NOT NULL DEFAULT 'pending',
  payment_status TEXT NOT NULL DEFAULT 'pending',
  tour_name TEXT NOT NULL DEFAULT '',
  tour_slug TEXT NOT NULL DEFAULT '',
  tour_date DATE,
  adults INT NOT NULL DEFAULT 1,
  children INT NOT NULL DEFAULT 0,
  special_requests TEXT,
  item_details JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_bookings_user_id ON public.bookings(user_id);
CREATE INDEX idx_bookings_created_at ON public.bookings(created_at DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bookings owner select" ON public.bookings
  FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_admin(auth.uid()));
CREATE POLICY "bookings owner insert" ON public.bookings
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);
CREATE POLICY "bookings owner update" ON public.bookings
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR public.is_admin(auth.uid()));
CREATE POLICY "bookings admin delete" ON public.bookings
  FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));

CREATE TRIGGER trg_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Booking number generator: only fills when NULL/empty
CREATE OR REPLACE FUNCTION public.generate_booking_number()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
DECLARE
  yy TEXT; mm TEXT; dd TEXT; rand TEXT;
BEGIN
  IF NEW.booking_number IS NULL OR btrim(NEW.booking_number) = '' THEN
    yy := to_char(now() AT TIME ZONE 'UTC', 'YY');
    mm := to_char(now() AT TIME ZONE 'UTC', 'MM');
    dd := to_char(now() AT TIME ZONE 'UTC', 'DD');
    rand := upper(substr(replace(gen_random_uuid()::text,'-',''),1,8));
    NEW.booking_number := 'YL-' || yy || mm || dd || '-' || rand;
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER trg_bookings_booking_number
  BEFORE INSERT ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.generate_booking_number();

-- =========================================================
-- booking_items
-- =========================================================
CREATE TABLE public.booking_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  product_id TEXT,
  product_type TEXT NOT NULL DEFAULT 'activity',
  activity_name TEXT NOT NULL,
  activity_slug TEXT,
  image_url TEXT,
  destination TEXT,
  travel_date DATE,
  quantity INT NOT NULL DEFAULT 1,
  adults INT NOT NULL DEFAULT 1,
  children INT NOT NULL DEFAULT 0,
  price NUMERIC NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'INR',
  status TEXT NOT NULL DEFAULT 'confirmed',
  pickup_required BOOLEAN NOT NULL DEFAULT false,
  pickup_type TEXT,
  hotel_name TEXT,
  pickup_location TEXT,
  country TEXT,
  meeting_point TEXT,
  pickup_time TEXT,
  drop_location TEXT,
  flight_number TEXT,
  airline TEXT,
  terminal TEXT,
  special_requests TEXT,
  voucher_number TEXT,
  voucher_url TEXT,
  supplier_reference TEXT,
  item_details JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_booking_items_booking_id ON public.booking_items(booking_id);
CREATE INDEX idx_booking_items_travel_date ON public.booking_items(travel_date);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.booking_items TO authenticated;
GRANT ALL ON public.booking_items TO service_role;

ALTER TABLE public.booking_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "booking_items owner select" ON public.booking_items
  FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_items.booking_id AND b.user_id = auth.uid())
    OR public.is_admin(auth.uid())
  );
CREATE POLICY "booking_items owner insert" ON public.booking_items
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_items.booking_id AND (b.user_id = auth.uid() OR b.user_id IS NULL))
    OR public.is_admin(auth.uid())
  );
CREATE POLICY "booking_items owner update" ON public.booking_items
  FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_items.booking_id AND b.user_id = auth.uid())
    OR public.is_admin(auth.uid())
  );
CREATE POLICY "booking_items owner delete" ON public.booking_items
  FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_items.booking_id AND b.user_id = auth.uid())
    OR public.is_admin(auth.uid())
  );

CREATE TRIGGER trg_booking_items_updated_at
  BEFORE UPDATE ON public.booking_items
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();