# Project Architecture Rules

- Keep the homepage root empty before React mounts; preload its LCP image without injecting an image-first static shell to prevent a mismatched loading flash.
- Keep non-article prerendered roots empty and loading placeholders invisible while reserving their layout space, so temporary skeletons never flash before the real interface.
- Use SafeImage for activity and curriculum cards inside fixed-size or aspect-ratio frames; decode lazy images before revealing them and reset loading state when their source changes to prevent image flashes.
- Keep each course as a dedicated page with its own curriculum content so distinct courses remain independently maintainable.
- Dubai activity listing and quick-book prices must read from toursData so cards and booking calculators stay synchronized.
- Normalize sitemap paths before deduplicating, exclude redirect aliases, and omit lastmod unless backed by page-specific content timestamps to avoid duplicate URLs and artificial freshness.
- Keep the blog root as a guide-directory page and redirect the Japan root to its existing destination-guide hub, so nested static output never masks useful content with directory access errors.
