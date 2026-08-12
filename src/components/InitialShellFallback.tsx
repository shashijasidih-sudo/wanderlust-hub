import { useLocation } from "react-router-dom";

/**
 * Suspense fallback that re-paints the static prerendered above-the-fold shell
 * (captured in main.tsx before React clears #root) while a lazy route chunk
 * downloads. This removes the "blank frame" between the prerendered HTML and
 * the hydrated page. It only applies to the URL the document was loaded with —
 * client-side navigations get `null`, exactly as before.
 */
declare global {
  interface Window {
    __PP_SHELL_HTML__?: string;
    __PP_SHELL_PATH__?: string;
  }
}

const InitialShellFallback = () => {
  const { pathname } = useLocation();
  if (typeof window === "undefined") return null;
  const html = window.__PP_SHELL_HTML__;
  const path = window.__PP_SHELL_PATH__;
  if (!html || !path) return null;
  const norm = (p: string) => (p.endsWith("/") ? p : p + "/");
  if (norm(path) !== norm(pathname)) return null;
  return <div aria-hidden dangerouslySetInnerHTML={{ __html: html }} />;
};

export default InitialShellFallback;
