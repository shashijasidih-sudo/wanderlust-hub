import { createClient } from '@supabase/supabase-js';

// Hard fallbacks — the frontend must NEVER connect to the legacy Lovable Cloud
// project (ref: rjazivctunipyhkcvujf). If env vars are missing, empty, or still
// point at that project, we force the production project below.
const PRODUCTION_SUPABASE_URL = 'https://cymzgmfnhtnqledwwojt.supabase.co';
const PRODUCTION_SUPABASE_ANON_KEY = 'sb_publishable_g-zBlAMHwj9NJLvq13RjWg_BEIq-Frq';
const FORBIDDEN_PROJECT_REF = 'rjazivctunipyhkcvujf';

function resolveSupabaseUrl(): string {
  const envUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
  if (!envUrl || envUrl.includes(FORBIDDEN_PROJECT_REF)) {
    return PRODUCTION_SUPABASE_URL;
  }
  return envUrl;
}

function resolveSupabaseAnonKey(): string {
  const envKey =
    ((import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
      (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ||
      '').trim();
  // Old Lovable Cloud project used a JWT anon key issued for the forbidden ref.
  // Any legacy JWT that decodes to that ref must be replaced.
  if (!envKey) return PRODUCTION_SUPABASE_ANON_KEY;
  try {
    const parts = envKey.split('.');
    if (parts.length === 3) {
      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      if (payload?.ref === FORBIDDEN_PROJECT_REF) {
        return PRODUCTION_SUPABASE_ANON_KEY;
      }
    }
  } catch {
    /* not a JWT — treat as opaque publishable key */
  }
  return envKey;
}

const supabaseUrl = resolveSupabaseUrl();
const supabaseAnonKey = resolveSupabaseAnonKey();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
