import { useEffect } from "react";

interface CanonicalUrlProps {
  /** Path beginning with `/`, e.g. "/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer" */
  path: string;
  /** Origin override; defaults to https://yellodae.com */
  origin?: string;
}

/**
 * Adds (or updates) a <link rel="canonical"> tag in <head>.
 * Use a stable absolute URL pointing to the SEO-friendly slug for each page.
 */
const CanonicalUrl = ({ path, origin = "https://yellodae.com" }: CanonicalUrlProps) => {
  useEffect(() => {
    const href = `${origin}${path}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [path, origin]);

  return null;
};

export default CanonicalUrl;
