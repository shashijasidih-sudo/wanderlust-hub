import { beforeEach, describe, expect, it, vi } from "vitest";
import { isChunkLoadError, recoverChunkLoad } from "@/lib/chunkRecovery";

describe("chunk loading recovery", () => {
  const reload = vi.fn();
  beforeEach(() => {
    sessionStorage.clear();
    reload.mockClear();
    vi.stubGlobal("window", { location: { reload } });
  });
  it("recognizes both reported component fetch failures", () => {
    for (const file of ["/assets/ThailandTrending-ats3yF3Q.js", "/src/components/SeoDestinationSections.tsx"]) {
      expect(isChunkLoadError(new TypeError(`Failed to fetch dynamically imported module: ${file}`))).toBe(true);
    }
  });
  it("refreshes a stale document once without creating a reload loop", () => {
    const error = new TypeError("Failed to fetch dynamically imported module: /assets/missing.js");
    expect(recoverChunkLoad(error)).toBe(true);
    expect(recoverChunkLoad(error)).toBe(false);
    expect(reload).toHaveBeenCalledTimes(1);
  });
  it("does not reload for unrelated application errors", () => {
    expect(recoverChunkLoad(new Error("Invalid booking date"))).toBe(false);
    expect(reload).not.toHaveBeenCalled();
  });
});