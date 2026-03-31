import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  useEffect(() => {
    const handleAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        window.location.href = "/";
      }
    };

    handleAuth();
  }, []);

  return <p>Logging you in...</p>;
}
