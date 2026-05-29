import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export interface FAQItem {
  question: string;
  /** Plain text or HTML (used for SEO FAQs with internal links). */
  answer: string;
}

interface FAQSectionProps {
  /** Booking-related FAQs (transfer, payment, schedule, etc.). */
  faqs: FAQItem[];
  /** SEO / travel-intent FAQs appended after booking FAQs. May contain HTML in answers. */
  seoFaqs?: FAQItem[];
}

const isHtml = (s: string) => /<\/?[a-z][\s\S]*>/i.test(s);

const TRUST_FAQS: FAQItem[] = [
  {
    question: "Do I get instant confirmation after booking?",
    answer:
      "Yes. This activity is instantly confirmed by email and WhatsApp the moment your payment is successful — no waiting for operator approval. Show the voucher on your phone at the venue.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Free cancellation up to 2 days (48 hours) before the start of the activity — get a 100% refund to your original payment method. Cancellations within 48 hours of the activity are non-refundable.",
  },
];

const FAQSection = ({ faqs = [], seoFaqs = [] }: FAQSectionProps) => {
  const mergedBookingFaqs = [...TRUST_FAQS, ...faqs];
  const all: { item: FAQItem; group: "booking" | "seo"; idx: number }[] = [
    ...mergedBookingFaqs.map((item, idx) => ({ item, group: "booking" as const, idx })),
    ...seoFaqs.map((item, idx) => ({ item, group: "seo" as const, idx })),
  ];

  if (all.length === 0) return null;


  // Combined JSON-LD (booking + SEO) so both surface as rich snippets.
  // Strip HTML from SEO answers for the schema text.
  const jsonLdFaqs = all.map(({ item }) => ({
    question: item.question,
    answer: isHtml(item.answer) ? item.answer.replace(/<[^>]+>/g, "") : item.answer,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.length > 0 && (
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Booking & Tour Information
            </div>
          )}
          {faqs.map((faq, idx) => (
            <AccordionItem key={`b-${idx}`} value={`booking-${idx}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {isHtml(faq.answer) ? (
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}

          {seoFaqs.length > 0 && (
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mt-6 mb-2">
              Travel Tips & Destination Guide
            </div>
          )}
          {seoFaqs.map((faq, idx) => (
            <AccordionItem key={`s-${idx}`} value={`seo-${idx}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {isHtml(faq.answer) ? (
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <FaqJsonLd faqs={jsonLdFaqs} />
      </CardContent>
    </Card>
  );
};

export default FAQSection;
