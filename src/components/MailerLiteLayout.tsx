import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MailerLiteLayout = () => {
  const location = useLocation();
  const initializedRef = useRef(false);

  useEffect(() => {
    // Full cleanup before (re-)initializing
    const existingScript = document.querySelector(
      'script[src="https://assets.mailerlite.com/js/universal.js"]'
    );
    if (existingScript) existingScript.remove();

    // Remove MailerLite-injected DOM (popups, overlays, embedded forms)
    document
      .querySelectorAll(
        '.ml-form-embedContainer, .ml-mobileButton-wrapper, .ml-overlay, .ml-error, .ml-form-successBody'
      )
      .forEach((el) => el.remove());

    // Remove MailerLite-injected stylesheets
    document
      .querySelectorAll('link[href*="mailerlite"]')
      .forEach((el) => el.remove());

    // Reset global state
    const win = window as any;
    try { delete win.ml; } catch (_) { /* noop */ }
    try { delete win.ml_account; } catch (_) { /* noop */ }
    try { delete win.ml_webform_success; } catch (_) { /* noop */ }

    // Re-initialize after a brief delay so cleanup settles
    const timer = setTimeout(() => {
      const w = window as any;
      w.ml = w.ml || function () {
        (w.ml.q = w.ml.q || []).push(arguments);
      };
      w.ml("account", "2066738");

      const script = document.createElement("script");
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.async = true;
      document.head.appendChild(script);
      initializedRef.current = true;
    }, 150);

    return () => {
      clearTimeout(timer);

      // Cleanup on unmount (leaving this region)
      const s = document.querySelector(
        'script[src="https://assets.mailerlite.com/js/universal.js"]'
      );
      if (s) s.remove();

      document
        .querySelectorAll(
          '.ml-form-embedContainer, .ml-mobileButton-wrapper, .ml-overlay, .ml-error, .ml-form-successBody'
        )
        .forEach((el) => el.remove());

      try { delete (window as any).ml; } catch (_) { /* noop */ }
      try { delete (window as any).ml_account; } catch (_) { /* noop */ }
      try { delete (window as any).ml_webform_success; } catch (_) { /* noop */ }

      initializedRef.current = false;
    };
  }, [location.pathname]);

  return <Outlet />;
};

export default MailerLiteLayout;
