import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import ChunkErrorBoundary from "@/components/ChunkErrorBoundary";
import { recoverChunkLoad } from "@/lib/chunkRecovery";

window.addEventListener("vite:preloadError", (event) => {
  const preloadEvent = event as Event & { payload?: unknown };
  if (recoverChunkLoad(preloadEvent.payload)) event.preventDefault();
});

// Capture the static prerendered shell before React clears #root, so the
// Suspense fallback can keep showing it while the lazy route chunk loads.
const shell = document.getElementById("pp-shell");
if (shell) {
  window.__PP_SHELL_HTML__ = shell.outerHTML;
  window.__PP_SHELL_PATH__ = window.location.pathname;
}

const root = document.getElementById("root");
if (!root) throw new Error("Application root is missing");
createRoot(root).render(
  <HelmetProvider>
    <ChunkErrorBoundary><App /></ChunkErrorBoundary>
  </HelmetProvider>
);
