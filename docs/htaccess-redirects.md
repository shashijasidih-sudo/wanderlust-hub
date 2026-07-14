# Yellodae — Apache `.htaccess` Redirect Documentation

**Hosting:** Hostinger shared hosting (Apache 2.4 with `mod_rewrite`).
**Deploy pipeline:** Lovable → GitHub → GitHub Action → build ZIP → `public_html/`.
**Redirect layer:** All permanent 301 redirects are issued by Apache **before** React ever loads. React Router only handles application navigation now — no legacy URL redirects live in the SPA anymore.

---

## File location

`public/.htaccess` is copied verbatim into the build output and ends up at `public_html/.htaccess` on Hostinger.

Verified live behaviour: `Redirect 301 /seo-test https://google.com` returned a server-side 301 immediately, confirming Apache processes this file.

---

## Structure of `.htaccess`

The file is organised in four ordered sections. Order matters — earlier blocks short-circuit later ones.

### 1) Canonical host (HTTPS + apex)

```apache
RewriteCond %{HTTP_HOST} ^www\.yellodae\.com$ [NC,OR]
RewriteCond %{HTTPS} off
RewriteRule ^ https://yellodae.com%{REQUEST_URI} [R=301,L]
```

- Forces every request onto `https://yellodae.com`.
- Single hop: `http://…` and `www.…` both go directly to the final canonical origin, so a legacy URL on `www` still resolves in **two** total hops max (canonical → legacy target). No chains.

### 2) Legacy 301 redirects (auto-generated)

245 `RedirectMatch 301` rules generated from the former `<Navigate>` routes in `src/App.tsx`, plus 4 `RedirectMatch` wildcard rules for the legacy city prefixes (`/bangkok/*`, `/pattaya/*`, `/phuket/*`, `/krabi/*`) that previously used `<LegacyCityRedirect>`.

Rule form:

```apache
RedirectMatch 301 ^/old-slug/?$   /new-canonical-slug
RedirectMatch 301 ^/bangkok(/.*)?$ /thailand/bangkok$1
```

Why `RedirectMatch` (not `Redirect`):

- Exact anchored match (`^…/?$`) prevents accidental prefix collisions (`/thailand/phuket/transfers` won't swallow unrelated paths that start with the same string).
- Trailing slash is tolerated (`/?`) so `/contact` and `/contact/` both redirect in one hop.
- Runs before the SPA rewrite in section 4, so Apache emits a real HTTP 301 without loading `index.html` first (no soft-redirect, no JS hop).

Rules are sorted longest-source-first as a defensive measure so more specific paths always match before shorter ones.

### 3) Static file passthrough

```apache
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
```

Real files and directories (JS bundles, CSS, images, `sitemap.xml`, `robots.txt`, etc.) are served as-is.

### 4) SPA fallback

```apache
RewriteRule ^ index.html [L]
```

Everything else is handed to React Router as a 200 response of `index.html`. This is the only path where React handles the URL.

---

## Guarantees

- **No redirect chains.** The generator verifies transitively that no target of a 301 is itself the source of another 301 (`chains: []` at build time).
- **No redirect loops.** Sources and targets are disjoint sets by construction.
- **No JavaScript redirects for legacy URLs.** All `<Navigate>` and `<LegacyCityRedirect>` entries were removed from `src/App.tsx`; the only remaining `<Navigate>` in the codebase is inside `NotFound.tsx`, which auto-recovers stale tour slugs after Apache has already served the shell.
- **No meta-refresh redirects.**
- **No 302s.** Every rule uses `301` explicitly.
- **Single-hop for canonicalization + legacy.** Worst case a `http://www.yellodae.com/phi-phi-island` request hits: (1) 301 → `https://yellodae.com/phi-phi-island`, (2) 301 → `/thailand/phuket/full-day-phi-phi-island-tour-with-transfer`, (3) 200 tour page.

---

## Regenerating the rules

The rules are derived directly from `src/App.tsx`. If new legacy routes are added in the future, regenerate with:

```bash
python3 <<'PY'
import re
src = open('src/App.tsx').read()
pat = re.compile(r'<Route\s+path="([^"]+)"\s+element=\{<Navigate\s+to="([^"]+)"\s+replace\s*/>\}\s*/>')
pairs = pat.findall(src)
# assert no chains
srcs = {s for s,_ in pairs}
assert not [p for p in pairs if p[1] in srcs], "redirect chain detected"
for s,t in sorted(pairs, key=lambda p: -len(p[0])):
    print(f'RedirectMatch 301 ^{re.escape(s)}/?$ {t}')
PY
```

Paste the output into section 2 of `public/.htaccess`.

---

## What was NOT changed

- `public/_redirects` (Netlify/Cloudflare Pages format) is retained but unused on Hostinger. Safe to delete in a future cleanup.
- `public/sitemap.xml`, canonical tags, page titles, meta descriptions, slugs — all untouched per sprint scope.
- `NotFound.tsx` still emits `noindex` + `prerender-status-code: 404` for genuinely unknown paths (from the previous sprint).
