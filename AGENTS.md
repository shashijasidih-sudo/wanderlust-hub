# Project Architecture Rules

- Share the Dubai booking guide's uploaded image URL across article and discovery cards, resolving it against its verified Lovable asset-serving origin because the external custom-domain host returns HTML for relative asset paths.
- Share the international holiday planning guide's uploaded thumbnail through one image resolver across its article and Bangkok listing, using the verified asset-serving origin to avoid blank custom-domain images.

- Catch lazy-module failures at the app and homepage deferred-section boundaries; reload stale documents at most once per minute per tab and offer manual retry afterward so missing deployment chunks never blank the whole page or create reload loops.

- Keep the homepage root empty before React mounts; preload its LCP image without injecting an image-first static shell to prevent a mismatched loading flash.
- Keep non-article prerendered roots empty and loading placeholders invisible while reserving their layout space, so temporary skeletons never flash before the real interface.
- Use SafeImage for activity and curriculum cards inside fixed-size or aspect-ratio frames; decode lazy images before revealing them and reset loading state when their source changes to prevent image flashes.
- Keep each course as a dedicated page with its own curriculum content so distinct courses remain independently maintainable.
- Dubai activity listing and quick-book prices must read from toursData so cards and booking calculators stay synchronized.
- Prerender every indexable sitemap page with its own data-rh canonical (https://yellodae.com, trailing slash), title and description from src/data/seoFallbackMeta.json (wins, also used for per-path overrides of shared components), blog props or scripts/seo-meta.json; private account pages stay out of the sitemap and get only a static noindex, so crawlers get per-page head tags and Helmet replaces rather than duplicates them; CanonicalUrl renders through Helmet for the same reason.
- Normalize sitemap paths before deduplicating, exclude redirect aliases, and omit lastmod unless backed by page-specific content timestamps to avoid duplicate URLs and artificial freshness.
- Keep the blog root as a guide-directory page and redirect the Japan root to its existing destination-guide hub, so nested static output never masks useful content with directory access errors.
- Use optional exact article metadata overrides for supplied SEO titles and descriptions, preserving existing articles' defaults without truncating requested metadata.
- Treat a tour's child rate as optional in the booking calculator and keep price formatting tolerant of missing amounts, so a tour record without a child price never blanks the widget with a crash.
- Activity calculator Book Now must await the existing cart insertion before navigating to Customer Information, preserving selections without a second booking modal; share insertion with Add to Cart so both actions retain identical booking details.
