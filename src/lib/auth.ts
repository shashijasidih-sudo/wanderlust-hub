// Lightweight auth state manager (placeholder for future backend)
import { useState, useEffect, useCallback } from "react";

export interface AppUser {
  id: string;
  email: string;
  full_name?: string;
}

type AuthListener = (user: AppUser | null) => void;

const AUTH_KEY = "app_user";
const listeners: Set<AuthListener> = new Set();

function getStoredUser(): AppUser | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setStoredUser(user: AppUser | null) {
  if (user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
  listeners.forEach((fn) => fn(user));
}

export const auth = {
  getUser: (): AppUser | null => getStoredUser(),

  signInWithPassword: async (email: string, _password: string): Promise<AppUser> => {
    // Placeholder — replace with real /api/auth/login
    const user: AppUser = { id: crypto.randomUUID(), email };
    setStoredUser(user);
    return user;
  },

  signUp: async (email: string, _password: string, fullName: string): Promise<AppUser> => {
    const user: AppUser = { id: crypto.randomUUID(), email, full_name: fullName };
    setStoredUser(user);
    return user;
  },

  signInWithGoogle: async () => {
    // Placeholder — would redirect to /api/auth/google
    console.log("Google OAuth placeholder");
  },

  resetPassword: async (_email: string) => {
    // Placeholder — POST /api/auth/reset-password
    console.log("Password reset placeholder");
  },

  signOut: () => {
    setStoredUser(null);
  },

  onAuthStateChange: (fn: AuthListener) => {
    listeners.add(fn);
    return () => { listeners.delete(fn); };
  },
};

/** React hook for auth state */
export function useAuth() {
  const [user, setUser] = useState<AppUser | null>(auth.getUser());

  useEffect(() => {
    setUser(auth.getUser());
    const unsub = auth.onAuthStateChange(setUser);
    return unsub;
  }, []);

  const logout = useCallback(() => auth.signOut(), []);

  return { user, logout };
}
