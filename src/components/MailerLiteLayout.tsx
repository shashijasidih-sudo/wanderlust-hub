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
  }, []);

  return <Outlet />;
};

export default MailerLiteLayout;
