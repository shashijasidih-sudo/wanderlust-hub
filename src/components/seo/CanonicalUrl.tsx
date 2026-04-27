import { useEffect } from "react";

interface CanonicalUrlProps {
  /** Path beginning with `/`, e.g. "/thailand/bangkok/mahanakhon-skywalk-tickets" */
  path: string;
  /** Origin override; defaults to https://yellodae.com */
  origin?: string;
}

/**
 * Adds (or updates) <link rel="canonical">, <meta property="og:url">,
 * and <meta name="twitter:url"> tags in <head>, all pointing to a stable
 * absolute URL for the page.
 */
const CanonicalUrl = ({ path, origin = "https://yellodae.com" }: CanonicalUrlProps) => {
  useEffect(() => {
    const href = `${origin}${path}`;

    // Canonical link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    // Open Graph URL
    const upsertMeta = (selector: string, attr: string, attrValue: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", href);
    };
    upsertMeta('meta[property="og:url"]', "property", "og:url");
    upsertMeta('meta[name="twitter:url"]', "name", "twitter:url");
  }, [path, origin]);

  return null;
};

export default CanonicalUrl;
