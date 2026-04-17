import { useEffect } from "react";

interface TourJsonLdProps {
  name: string;
  description?: string;
  image?: string | string[];
  price?: number;
  priceCurrency?: string;
  url?: string;
  rating?: number;
  reviewCount?: number;
  location?: string;
  duration?: string;
  id?: string;
}

/**
 * Injects Product + TouristTrip JSON-LD structured data into <head>
 * for richer Google results (price, rating, image carousels).
 * Uses two schemas in a @graph for maximum coverage.
 */
const TourJsonLd = ({
  name,
  description,
  image,
  price,
  priceCurrency = "INR",
  url,
  rating,
  reviewCount,
  location,
  duration,
  id = "tour-jsonld",
}: TourJsonLdProps) => {
  useEffect(() => {
    if (!name) return;

    const pageUrl = url || (typeof window !== "undefined" ? window.location.href : undefined);
    const images = Array.isArray(image) ? image.filter(Boolean) : image ? [image] : [];
    // Resolve relative/asset URLs to absolute when possible
    const absImages = images.map((src) => {
      try {
        return typeof window !== "undefined" ? new URL(src, window.location.origin).href : src;
      } catch {
        return src;
      }
    });

    const aggregateRating =
      rating && reviewCount
        ? {
            "@type": "AggregateRating",
            ratingValue: rating,
            reviewCount,
            bestRating: 5,
            worstRating: 1,
          }
        : undefined;

    const offers =
      typeof price === "number"
        ? {
            "@type": "Offer",
            price,
            priceCurrency,
            availability: "https://schema.org/InStock",
            url: pageUrl,
          }
        : undefined;

    const product: Record<string, unknown> = {
      "@type": "Product",
      name,
      ...(description ? { description } : {}),
      ...(absImages.length ? { image: absImages } : {}),
      ...(pageUrl ? { url: pageUrl } : {}),
      ...(offers ? { offers } : {}),
      ...(aggregateRating ? { aggregateRating } : {}),
      brand: { "@type": "Brand", name: "Yellodae" },
    };

    const touristTrip: Record<string, unknown> = {
      "@type": "TouristTrip",
      name,
      ...(description ? { description } : {}),
      ...(absImages.length ? { image: absImages } : {}),
      ...(pageUrl ? { url: pageUrl } : {}),
      ...(offers ? { offers } : {}),
      ...(aggregateRating ? { aggregateRating } : {}),
      ...(duration ? { itinerary: { "@type": "ItemList", name: duration } } : {}),
      ...(location
        ? {
            touristType: "Leisure travelers",
            subjectOf: { "@type": "Place", name: location },
          }
        : {}),
      provider: { "@type": "Organization", name: "Yellodae" },
    };

    const schema = {
      "@context": "https://schema.org",
      "@graph": [product, touristTrip],
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
  }, [name, description, image, price, priceCurrency, url, rating, reviewCount, location, duration, id]);

  return null;
};

export default TourJsonLd;
