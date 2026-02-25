import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MailerLiteLayout = () => {
  useEffect(() => {
    // Avoid loading the script twice
    if (document.querySelector('script[src="https://assets.mailerlite.com/js/universal.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.head.appendChild(script);

    // Initialize MailerLite
    (window as any).ml =
      (window as any).ml ||
      function () {
        ((window as any).ml.q = (window as any).ml.q || []).push(arguments);
      };
    (window as any).ml("account", "2066738");

    // Cleanup on unmount: remove script and MailerLite artifacts
    return () => {
      const scriptEl = document.querySelector(
        'script[src="https://assets.mailerlite.com/js/universal.js"]'
      );
      if (scriptEl) scriptEl.remove();

      // Remove MailerLite injected elements (popups, forms, etc.)
      document.querySelectorAll('[class*="ml-"], [id*="mlb2"]').forEach((el) => el.remove());

      // Clean up global MailerLite state
      delete (window as any).ml;
      delete (window as any).ml_account;
      delete (window as any).ml_webform_success;
    };
  }, []);

  return <Outlet />;
};

export default MailerLiteLayout;
