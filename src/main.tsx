import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Capture the static prerendered shell before React clears #root, so the
// Suspense fallback can keep showing it while the lazy route chunk loads.
const shell = document.getElementById("pp-shell");
if (shell) {
  window.__PP_SHELL_HTML__ = shell.outerHTML;
  window.__PP_SHELL_PATH__ = window.location.pathname;
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
