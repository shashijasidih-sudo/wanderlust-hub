import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

/**
 * Handles all Supabase auth redirects:
 *  - Google OAuth (PKCE ?code= or implicit #access_token=)
 *  - Magic link / email confirmation (#access_token=)
 *  - Password recovery (#type=recovery) → shows inline reset form
 */
export default function AuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [recovery, setRecovery] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const url = new URL(window.location.href);
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
        const code = url.searchParams.get("code");
        const errDesc = url.searchParams.get("error_description") || hash.get("error_description");
        const type = hash.get("type") || url.searchParams.get("type");

        if (errDesc) {
          setError(errDesc);
          return;
        }

        // PKCE flow (OAuth / magic-link with ?code=)
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
          if (error) throw error;
        }

        // Implicit flow puts tokens in the hash; detectSessionInUrl handles it.
        // Wait briefly for the SDK to persist the session.
        for (let i = 0; i < 10; i++) {
          const { data } = await supabase.auth.getSession();
          if (data.session) break;
          await new Promise((r) => setTimeout(r, 150));
        }

        if (type === "recovery") {
          // Clean the hash and show the reset form.
          window.history.replaceState({}, "", "/auth/callback");
          setRecovery(true);
          return;
        }

        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session) {
          navigate("/", { replace: true });
        } else {
          setError("Could not establish a session. Please try signing in again.");
        }
      } catch (e: any) {
        setError(e?.message || "Authentication failed.");
      }
    };
    run();
  }, [navigate]);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setSaving(true);
    setError(null);
    const { error } = await supabase.auth.updateUser({ password });
    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    toast({ title: "Password updated", description: "You can now use your new password." });
    navigate("/", { replace: true });
  };

  if (recovery) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        <form onSubmit={handleReset} className="w-full max-w-md space-y-4 border rounded-xl p-6 shadow-sm">
          <h1 className="text-xl font-semibold">Set a new password</h1>
          <div className="space-y-2">
            <Label htmlFor="new-pw">New password</Label>
            <Input id="new-pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-pw">Confirm password</Label>
            <Input id="confirm-pw" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required minLength={8} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={saving} className="w-full">
            {saving ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Updating…</> : "Update password"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {error ? (
          <>
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={() => navigate("/auth", { replace: true })}>Back to login</Button>
          </>
        ) : (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Signing you in…</span>
          </div>
        )}
      </div>
    </div>
  );
}
