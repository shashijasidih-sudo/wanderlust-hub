import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/seo/Seo";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Headphones,
  Lock,
  Zap,
  BadgePercent,
  Plane,
  Ticket,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted by 10,000+ Indian travelers",
    description:
      "Yellodae Trails has earned a 5.0 Google rating by delivering reliable bookings, transparent pricing and on-ground support across Thailand, Singapore, Dubai and Japan.",
  },
  {
    icon: Headphones,
    title: "Customer support that travels with you",
    description:
      "Reach our travel team on WhatsApp at +91 70617 10810 before, during and after your trip. Real humans, real solutions, 24/7.",
  },
  {
    icon: Lock,
    title: "Secure booking & payments",
    description:
      "Every transaction is protected by Razorpay's PCI-compliant checkout. Your card details and personal data are never stored on our servers.",
  },
  {
    icon: Zap,
    title: "Instant confirmation",
    description:
      "No waiting for operator approval. The moment your payment is successful, your voucher and booking details are sent by email and WhatsApp.",
  },
  {
    icon: BadgePercent,
    title: "Best prices, GST included",
    description:
      "We negotiate directly with operators to offer competitive rates with no hidden fees. Prices on Yellodae Trails are GST inclusive.",
  },
  {
    icon: Plane,
    title: "Airport transfers you can count on",
    description:
      "Pre-book private airport transfers in Bangkok, Phuket, Pattaya, Krabi, Singapore, Dubai and Japan. Fixed pricing, professional drivers, flight tracking.",
  },
  {
    icon: Ticket,
    title: "Curated activities & attraction tickets",
    description:
      "Skip-the-line passes, day cruises, island hopping, shows and guided tours — handpicked for Indian travelers and instantly bookable.",
  },
  {
    icon: MapPin,
    title: "Local expertise for Indian travelers",
    description:
      "From vegetarian meal arrangements and Jain food options to Hindi-speaking drivers and India-friendly payment methods, we know what Indian travelers need abroad.",
  },
];

const highlights = [
  "Free cancellation up to 48 hours before most activities",
  "INR pricing with UPI, cards, net banking and wallets",
  "Real-time vouchers sent to WhatsApp",
  "Custom itineraries for families, couples and groups",
];

const faqs = [
  {
    question: "Why should I choose Yellodae Trails over other travel sites?",
    answer:
      "Yellodae Trails specializes in Thailand, Singapore, Dubai and Japan travel for Indian travelers. We combine instant booking, 24/7 WhatsApp support, GST-inclusive pricing and local expertise — all in one place.",
  },
  {
    question: "Is booking on Yellodae Trails safe?",
    answer:
      "Yes. Payments are processed through Razorpay's secure, PCI-compliant gateway. We do not store your card details and every booking is instantly confirmed with a valid operator voucher.",
  },
  {
    question: "Do I get instant confirmation after booking?",
    answer:
      "Absolutely. Once your payment is successful, you receive a confirmation email and WhatsApp message with your e-voucher — no manual approval needed.",
  },
  {
    question: "Can I book airport transfers separately?",
    answer:
      "Yes. You can book private airport transfers in Bangkok, Phuket, Pattaya, Krabi, Singapore, Dubai and major Japanese cities as standalone services or bundled with packages.",
  },
  {
    question: "Are the prices on Yellodae Trails the best available?",
    answer:
      "We work directly with trusted operators to offer competitive, GST-inclusive rates. Our prices are transparent and there are no hidden currency-conversion charges.",
  },
  {
    question: "What kind of customer support does Yellodae Trails provide?",
    answer:
      "Our team is available 24/7 on WhatsApp at +91 70617 10810 for booking help, itinerary changes, emergencies and on-ground assistance.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://yellodae.com/why-yellodae/#webpage",
    name: "Why choose Yellodae Trails",
    url: "https://yellodae.com/why-yellodae",
    description:
      "Discover why travelers trust Yellodae Trails for Thailand, Singapore, Dubai and Japan tours, airport transfers, attraction tickets and 24/7 customer support.",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://yellodae.com/#website" },
    about: { "@id": "https://yellodae.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
];

const WhyYellodae = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Why choose Yellodae Trails | Trusted Travel Platform for Indians"
        description="Discover why 10,000+ Indian travelers trust Yellodae Trails for Thailand, Singapore, Dubai and Japan tours, airport transfers, attraction tickets and 24/7 customer support."
        path="/why-yellodae"
        image="https://yellodae.com/yellodae-logo.png"
        jsonLd={JSON_LD}
      />
      <FaqJsonLd faqs={faqs} id="why-yellodae-faq-jsonld" />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          <div className="container mx-auto max-w-6xl px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" />
                Why Yellodae Trails
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Why choose{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Yellodae Trails
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                India's trusted travel platform for Thailand, Singapore, Dubai and Japan — with instant booking, 24/7 support and prices that make sense.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl">
                  <Link to="/thailand">
                    Explore Thailand <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/contact-us">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="py-10 md:py-14 border-y border-border/50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: "Happy Travelers", value: "10,000+" },
                { label: "Google Rating", value: "5.0" },
                { label: "Destinations", value: "20+" },
                { label: "24/7 Support", value: "WhatsApp" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything you need for a smooth trip
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                From the moment you browse to the moment you board your flight home, Yellodae Trails is built to make travel simple.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="group bg-background border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight banner */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-orange-500/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Book once, travel stress-free
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Every Yellodae Trails booking includes instant confirmation, free cancellation up to 48 hours on most activities, and round-the-clock support from our India-based team.
                  </p>
                  <ul className="space-y-3">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-2xl p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold text-foreground">Instant</div>
                    <div className="text-xs text-muted-foreground">Vouchers</div>
                  </div>
                  <div className="bg-orange-500/10 rounded-2xl p-6 text-center">
                    <Globe className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="font-bold text-foreground">4 Countries</div>
                    <div className="text-xs text-muted-foreground">Covered</div>
                  </div>
                  <div className="bg-primary/10 rounded-2xl p-6 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold text-foreground">24/7</div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                  </div>
                  <div className="bg-orange-500/10 rounded-2xl p-6 text-center">
                    <Star className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="font-bold text-foreground">5.0</div>
                    <div className="text-xs text-muted-foreground">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers about why travelers book with Yellodae Trails.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-orange-500/10">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to travel with Yellodae Trails?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of Indian travelers who book their Thailand, Singapore, Dubai and Japan trips with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl">
                <Link to="/thailand">
                  Start Exploring <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact-us">Plan My Trip</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyYellodae;
