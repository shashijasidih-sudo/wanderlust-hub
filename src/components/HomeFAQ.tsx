import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Which international destinations does Yellodae Trails cover for Indian travelers?",
    answer:
      "Yellodae Trails specializes in Thailand (Bangkok, Pattaya, Phuket, Krabi, Koh Samui, Chiang Mai), Singapore, Dubai and Japan — offering curated tours, activities, itineraries and private airport transfers designed specifically for Indian travelers.",
  },
  {
    question: "Do I need a visa to visit Thailand, Singapore, Dubai or Japan from India?",
    answer:
      "Indian passport holders currently enjoy visa-free entry to Thailand (up to 60 days) and visa-on-arrival/eVisa for Singapore, Dubai (UAE) and Japan depending on the latest government rules. We recommend checking the official embassy website before booking your trip.",
  },
  {
    question: "Can I pay in Indian Rupees (INR) for international tours and activities?",
    answer:
      "Yes. All bookings on Yellodae Trails can be paid in INR through Razorpay (UPI, cards, net banking, wallets). Prices are GST-inclusive and there are no hidden currency conversion charges.",
  },
  {
    question: "Is vegetarian and Jain food available on Thailand, Singapore, Dubai and Japan tours?",
    answer:
      "Yes. We arrange vegetarian, Jain and Indian meal options on most tours and cruises. Please mention your dietary preference at the time of booking and we'll coordinate with the operator.",
  },
  {
    question: "What is the best time for Indians to visit Thailand, Singapore, Dubai and Japan?",
    answer:
      "Thailand and Singapore are best from November to February. Dubai is most pleasant between October and March. Japan is ideal during cherry blossom season (late March to early April) and autumn (October–November).",
  },
  {
    question: "Are airport transfers included in the tour packages?",
    answer:
      "Private airport transfers are available as add-ons or bundled within package deals. You can book one-way or round-trip transfers in Bangkok, Phuket, Krabi, Pattaya, Singapore, Dubai and major Japanese cities directly from the Transfers section.",
  },
  {
    question: "Does Yellodae Trails offer 24/7 support during the trip?",
    answer:
      "Yes. Our team provides 24/7 WhatsApp support on +91 7061710810 throughout your trip for any changes, emergencies or on-ground assistance.",
  },
  {
    question: "Can I customize my Thailand, Singapore, Dubai or Japan itinerary?",
    answer:
      "Absolutely. Share your travel dates, group size and interests via the Plan My Trip form or WhatsApp, and our experts will design a customized itinerary curated for Indian travelers within 24 hours.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const HomeFAQ = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything Indian travelers ask about Thailand, Singapore, Dubai & Japan trips
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFAQ;
