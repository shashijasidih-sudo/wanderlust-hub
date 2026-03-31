import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseClient";

export interface AppUser {
  id: string;
  email: string;
  full_name?: string;
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
    return {
      id: data.user.id,
      email: data.user.email!,
      full_name: data.user.user_metadata?.full_name,
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
    const user: AppUser = {
      id: data.user.id,
      email: data.user.email!,
      full_name: data.user.user_metadata?.full_name,
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
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) throw error;
  },

  resetPassword: async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
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

    const syncUser = (authUser: Awaited<ReturnType<typeof supabase.auth.getUser>>["data"]["user"]) => {
      if (!isMounted) return;

      if (authUser) {
        const nextUser = {
          id: authUser.id,
          email: authUser.email!,
          full_name: authUser.user_metadata?.full_name,
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
