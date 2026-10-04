# Fix the homepage loading flash

## Changes
- Stop injecting the temporary image-first homepage preview before the real website loads.
- Keep the homepage hero image preload so the final page remains fast once the interface renders.
- Leave blog and destination loading behavior unchanged.

## Verification
- Confirm the generated homepage no longer contains the temporary hero shell.
- Check the homepage at desktop and mobile widths for a clean first render without layout shift or duplicated hero content.
- Confirm the current build remains error-free.
