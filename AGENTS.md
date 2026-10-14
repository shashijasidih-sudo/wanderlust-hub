# Project Architecture Rules

- Keep the homepage root empty before React mounts; preload its LCP image without injecting an image-first static shell to prevent a mismatched loading flash.
- Keep each course as a dedicated page with its own curriculum content so distinct courses remain independently maintainable.
