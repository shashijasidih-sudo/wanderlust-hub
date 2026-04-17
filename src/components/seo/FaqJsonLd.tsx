import { useEffect } from "react";

interface FaqJsonLdProps {
  faqs: { question: string; answer: string }[];
  id?: string;
}

/**
 * Injects FAQPage JSON-LD structured data into <head> for Google rich results.
 * Cleans up on unmount to avoid duplicates across route changes.
 */
const FaqJsonLd = ({ faqs, id = "faq-jsonld" }: FaqJsonLdProps) => {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(schema);

    // Remove any existing instance with the same id before appending
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [faqs, id]);

  return null;
};

export default FaqJsonLd;
