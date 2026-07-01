import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseClient";

async function resolveProfile(
  userId: string,
  metadata: any
): Promise<{ full_name?: string; role?: string }> {
  let profileName: string | undefined;
  let role: string | undefined;
  try {
    const { data } = await supabase
      .from("profiles")
      .select("full_name, role")
      .eq("id", userId)
      .maybeSingle();
    profileName = (data as any)?.full_name?.trim() || undefined;
    role = (data as any)?.role?.trim() || undefined;
  } catch {
    /* ignore */
  }
  const meta = metadata || {};
  const full_name =
    profileName ||
    meta.full_name?.trim() ||
    meta.name?.trim() ||
    meta.user_name?.trim() ||
    undefined;
  return { full_name, role };
}

export interface AppUser {
  id: string;
  email: string;
  full_name?: string;
  role?: string;
  is_admin?: boolean;
}

type AuthListener = (user: AppUser | null) => void;

const listeners: Set<AuthListener> = new Set();

function notify(user: AppUser | null) {
  listeners.forEach((fn) => fn(user));
}

export const auth = {
  getUser: async (): Promise<AppUser | null> => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;
    const { full_name, role } = await resolveProfile(data.user.id, data.user.user_metadata);
    return {
      id: data.user.id,
      email: data.user.email!,
      full_name,
      role,
      is_admin: role === "admin",
    };
  },


  signInWithPassword: async (
    email: string,
    password: string
  ): Promise<AppUser> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    const full_name = await resolveFullName(data.user.id, data.user.user_metadata, data.user.email ?? undefined);
    const user: AppUser = {
      id: data.user.id,
      email: data.user.email!,
      full_name,
    };

    notify(user);
    return user;
  },

  signUp: async (
    email: string,
    password: string,
    fullName: string
  ): Promise<AppUser> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    if (error) throw error;
    const user: AppUser = {
      id: data.user?.id || "",
      email,
      full_name: fullName,
    };
    notify(user);
    return user;
  },

  signInWithGoogle: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        skipBrowserRedirect: true,
        queryParams: {
          prompt: "select_account",
        },
      },
    });
    if (error) throw error;
    if (data.url) {
      window.top?.location.assign(data.url);
    }
  },

  resetPassword: async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback`,
    });
    if (error) throw error;
  },


  signOut: async () => {
    await supabase.auth.signOut();
    notify(null);
  },

  onAuthStateChange: (fn: AuthListener) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },
};

export function useAuth() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const syncUser = async (authUser: Awaited<ReturnType<typeof supabase.auth.getUser>>["data"]["user"]) => {
      if (!isMounted) return;

      if (authUser) {
        const full_name = await resolveFullName(authUser.id, authUser.user_metadata, authUser.email ?? undefined);
        if (!isMounted) return;
        const nextUser = {
          id: authUser.id,
          email: authUser.email!,
          full_name,
        };
        setUser(nextUser);
        notify(nextUser);
      } else {
        setUser(null);
        notify(null);
      }

      setIsLoading(false);
    };


    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      syncUser(session?.user ?? null);
    });

    supabase.auth.getUser().then(({ data }) => {
      syncUser(data.user ?? null);
    });

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsLoading(false);
  }, []);

  return { user, logout, isLoading };
}
