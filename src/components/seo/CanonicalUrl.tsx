import { Helmet } from "react-helmet-async";

interface CanonicalUrlProps {
  /** Path beginning with `/`, e.g. "/thailand/bangkok/mahanakhon-skywalk-tickets/" */
  path: string;
  /** Origin override; defaults to https://yellodae.com */
  origin?: string;
}

/**
 * Sets the page's canonical, og:url and twitter:url through Helmet, so it
 * replaces (never duplicates) the prerendered canonical and any canonical
 * rendered by <Seo>. Paths are normalised to the trailing-slash form.
 */
const CanonicalUrl = ({ path, origin = "https://yellodae.com" }: CanonicalUrlProps) => {
  const normalized = path === "/" || path.endsWith("/") ? path : `${path}/`;
  const href = `${origin}${normalized}`;
  return (
    <Helmet prioritizeSeoTags>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
      <meta name="twitter:url" content={href} />
    </Helmet>
  );
};

export default CanonicalUrl;
