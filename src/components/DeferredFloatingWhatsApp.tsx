import { lazy, Suspense, useEffect, useState } from "react";

const FloatingWhatsApp = lazy(() => import("./FloatingWhatsApp"));

/**
 * Mounts FloatingWhatsApp only after the browser is idle (or after a
 * short fallback timeout). Keeps it off the critical path for
 * mobile FCP/LCP without changing behavior.
 */
const DeferredFloatingWhatsApp = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
    };
    let timer: number | undefined;
    const onReady = () => setReady(true);
    if (w.requestIdleCallback) {
      w.requestIdleCallback(onReady, { timeout: 4000 });
    } else {
      timer = window.setTimeout(onReady, 2500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <FloatingWhatsApp />
    </Suspense>
  );
};

export default DeferredFloatingWhatsApp;
