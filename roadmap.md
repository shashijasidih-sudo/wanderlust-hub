# Approved URL audit fixes

## Production booking investigation (no deployment approved)
- [x] Inspect local booking, payment verification and confirmation code; prepare a SQL correction and verification proposal without changing application code or either database.
- [x] Inspect the supplied production column schema, complete create_booking_with_items definition and deployed save-booking source; revise the minimum correction and paid-booking reconciliation proposal.
- [ ] Verify production constraints, indexes, triggers, function grants and deployed confirmation/payment verification configuration: these were not included in the exports and live production read access is unavailable.
- [ ] Apply and verify an approved correction: blocked pending production inspection and explicit implementation approval; no deployment or publishing authorised.

## Direct activity booking
- [x] Activity Book Now adds selected dates, guests, options and add-ons to the cart and opens Customer Information without a second form; seven regression tests pass and the guest preview flow preserves the ₹9,000 two-adult booking through reload.

## International holiday packages guide
- [x] Add the supplied Word article under Bangkok Destination Guides with the attached thumbnail, exact SEO metadata and contextual travel links; verified document completeness, discovery thumbnail, article image, metadata, canonical, sitemap and transfer CTA in preview. Publication remains pending.

## Dubai activities booking guide
- [x] Add the supplied document as a Dubai destination guide with exact SEO details, relevant imagery and booking links; verified document completeness, guide discovery, metadata, sitemap, booking CTA and mobile layout in preview.

## Airport transfers article
- [x] Add the supplied article unchanged, both images, exact metadata, Thailand guide links and sitemap entry; verify the preview.
- [x] Move the article to the requested Thailand destination-guide URL, retain its old redirect, add five contextual transfer booking links and verify in preview.

- [x] Add self-referencing canonicals to eight destination listings; verified rendered production tags.
- [x] Restore intended blog and Japan destinations without deleting content; production blog 200 and Japan direct 301 to its existing guides.
- [x] Flatten existing redirects and correct affected links and breadcrumbs; 370 production permanent redirects match final targets.
- [x] Deduplicate sitemap and consolidate the preferred business course URL; 430 unique production URLs, no generation-time lastmod.
- [x] Check production page HTTP status, rendered canonicals, crawl directives, homepage and signed-out booking selection; seven safeguard tests pass.
- [x] Leave issue 7, pricing, checkout, payments, and booking backend unchanged.
- [ ] Verify authenticated checkout and payment completion: production booking requires sign-in; no usable production session available and no charge attempted.
- [ ] Verify initial-HTML canonical enhancement after the next production deployment: rendered canonicals pass, but current live initial HTML does not yet contain the added prerender tags.