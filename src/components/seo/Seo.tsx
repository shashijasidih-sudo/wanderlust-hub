import { Helmet } from "react-helmet-async";

const DEFAULT_ORIGIN = "https://yellodae.com";

export interface SeoProps {
  /** Page title — appears in <title> + OG/Twitter title. */
  title: string;
  /** Meta description — also used for OG/Twitter description. */
  description: string;
  /** Path beginning with `/` for canonical/og:url. Defaults to current pathname. */
  path?: string;
  /** Absolute image URL for social previews. */
  image?: string;
  /** "website" | "article" | "product" etc. */
  type?: string;
  /** One or more JSON-LD objects to inline in <head>. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Origin override. */
  origin?: string;
  /** When true, page should not be indexed. */
  noindex?: boolean;
  /** Absolute image URL to preload as the LCP image. */
  preloadImage?: string;
}

/**
 * Single source of truth for per-route SEO head tags.
 * Renders during React render (not useEffect) so tags land in the DOM
 * earlier and are picked up by JS-executing crawlers and prerenderers.
 */
const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  jsonLd,
  origin = DEFAULT_ORIGIN,
  noindex,
  preloadImage,
}: SeoProps) => {
  const pathname =
    path ??
    (typeof window !== "undefined" ? window.location.pathname : "/");
  // Hosting enforces trailing slash; match it so canonical == final resolved URL (no redirect hop).
  const normalizedPath =
    pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;
  const url = `${origin}${normalizedPath}`;
  const ogImage = image ?? `${origin}/favicon.png`;
  const ldArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {preloadImage && (
        <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />
      )}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Yellodae Trails" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={ogImage} />

      {ldArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
