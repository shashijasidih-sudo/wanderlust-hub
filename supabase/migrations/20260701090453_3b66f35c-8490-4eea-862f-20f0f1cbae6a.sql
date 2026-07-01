-- Admin role + RLS migration (mirrors changes applied directly in production)
-- Idempotent and guarded so it is safe on any environment.

DO $mig$
BEGIN
  -- Ensure profiles.role exists
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema='public' AND table_name='profiles'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='profiles' AND column_name='role'
  ) THEN
    EXECUTE 'ALTER TABLE public.profiles ADD COLUMN role text NOT NULL DEFAULT ''customer''';
  END IF;

  -- Create/refresh is_admin() only when profiles exists
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema='public' AND table_name='profiles'
  ) THEN
    EXECUTE $fn$
      CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
      RETURNS boolean
      LANGUAGE sql
      STABLE
      SECURITY DEFINER
      SET search_path = public
      AS $body$
        SELECT EXISTS (
          SELECT 1 FROM public.profiles
          WHERE id = _user_id AND role IN ('admin','super_admin')
        );
      $body$;
    $fn$;
    EXECUTE 'REVOKE ALL ON FUNCTION public.is_admin(uuid) FROM public';
    EXECUTE 'GRANT EXECUTE ON FUNCTION public.is_admin(uuid) TO authenticated, service_role';
  END IF;
END
$mig$;

-- Admin RLS policies (only for admin-managed tables that exist)
DO $pol$
DECLARE
  tname text;
  tables text[] := ARRAY['bookings','profiles','payments','activities','wishlists','wishlist'];
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_proc WHERE proname='is_admin' AND pronamespace='public'::regnamespace) THEN
    RETURN;
  END IF;

  FOREACH tname IN ARRAY tables LOOP
    IF EXISTS (
      SELECT 1 FROM information_schema.tables
      WHERE table_schema='public' AND table_name=tname
    ) THEN
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', tname);

      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_select_all_'||tname, tname);
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_update_all_'||tname, tname);
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_delete_all_'||tname, tname);
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_insert_all_'||tname, tname);

      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR SELECT TO authenticated USING (public.is_admin(auth.uid()))',
        'admin_select_all_'||tname, tname);
      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR UPDATE TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()))',
        'admin_update_all_'||tname, tname);
      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR DELETE TO authenticated USING (public.is_admin(auth.uid()))',
        'admin_delete_all_'||tname, tname);
      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()))',
        'admin_insert_all_'||tname, tname);
    END IF;
  END LOOP;
END
$pol$;
