import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
  id?: string;
}

/**
 * Injects BreadcrumbList JSON-LD into <head> so Google can show
 * breadcrumb trails in search results.
 */
const BreadcrumbJsonLd = ({ items, id = "breadcrumb-jsonld" }: BreadcrumbJsonLdProps) => {
  useEffect(() => {
    if (!items || items.length === 0) return;

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const toAbs = (u: string) => {
      try {
        return new URL(u, origin).href;
      } catch {
        return u;
      }
    };

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: toAbs(item.url),
      })),
    };

    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [items, id]);

  return null;
};

export default BreadcrumbJsonLd;
