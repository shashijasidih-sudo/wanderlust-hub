# Project Architecture Rules

- Keep the homepage root empty before React mounts; preload its LCP image without injecting an image-first static shell to prevent a mismatched loading flash.
