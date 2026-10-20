# Project Architecture Rules

- Keep the homepage root empty before React mounts; preload its LCP image without injecting an image-first static shell to prevent a mismatched loading flash.
- Keep non-article prerendered roots empty and loading placeholders invisible while reserving their layout space, so temporary skeletons never flash before the real interface.
- Keep each course as a dedicated page with its own curriculum content so distinct courses remain independently maintainable.
- Dubai activity listing and quick-book prices must read from toursData so cards and booking calculators stay synchronized.
