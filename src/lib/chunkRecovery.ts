const RECOVERY_KEY = "yellodae:chunk-recovery";
const RECOVERY_WINDOW = 60_000;

export function isChunkLoadError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /Failed to fetch dynamically imported module|Importing a module script failed|Loading chunk .* failed|Failed to load module script/i.test(message);
}

// A stale deployment requires a fresh document, not another request for the
// same removed chunk. Limit automatic navigation so outages cannot loop.
export function recoverChunkLoad(error: unknown): boolean {
  if (!isChunkLoadError(error)) return false;
  try {
    const previous = Number(sessionStorage.getItem(RECOVERY_KEY) || 0);
    const now = Date.now();
    if (previous && now - previous < RECOVERY_WINDOW) return false;
    sessionStorage.setItem(RECOVERY_KEY, String(now));
    window.location.reload();
    return true;
  } catch {
    return false;
  }
}