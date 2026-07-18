import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TravelEssentials from "@/components/TravelEssentials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useCurrency } from "@/contexts/CurrencyContext";

import chiangMaiCity from "@/assets/city-chiang-mai.jpg";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import goldenTriangle from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import inthanon from "@/assets/chiang-mai-doi-inthanon-1.jpg";
import watChediLuang from "@/assets/chiang-mai-wat-chedi-luang-1.jpg";
import CityExploreLinks from "@/components/CityExploreLinks";
import RelatedArticles from "@/components/RelatedArticles";

interface Activity {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

// Reuses the activities already shown on the Chiang Mai city page.
const activities: Activity[] = [
  {
    title: "Chiang Mai City Temple Tour: Doi Suthep, Chedi Luang & Pha Lat with Transfer",
    description:
      "Half-day private temple tour covering Doi Suthep, Wat Chedi Luang and the hidden Wat Pha Lat with hotel transfers.",
    price: 3900,
    image: doiSuthep,
    slug: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/",
  },
  {
    title: "Doi Inthanon National Park Full Day Tour from Chiang Mai",
    description:
      "Full-day tour to Thailand's highest peak with twin pagodas, Karen tribal village and waterfalls.",
    price: 4900,
    image: inthanon,
    slug: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/",
  },
  {
    title: "Chiang Rai Day Trip: Golden Triangle with Long Neck Tribe",
    description:
      "Visit the White Temple, Black House, Golden Triangle and Long Neck Karen village on a full-day Chiang Rai trip.",
    price: 6000,
    image: goldenTriangle,
    slug: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/",
  },
];

const faqs = [
  {
    question: "What are the top things to do in Chiang Mai?",
    answer:
      "The most popular things to do in Chiang Mai include the Doi Suthep temple tour, Doi Inthanon National Park day trip, and a full-day Chiang Rai trip to the White Temple and Golden Triangle. Indian travelers also love elephant sanctuaries, Old City temple walks and the Sunday Walking Street night market.",
  },
  {
    question: "How many days are enough for Chiang Mai?",
    answer:
      "3 to 4 days is ideal for Chiang Mai — one day for Old City temples and Doi Suthep, one full day for Doi Inthanon, one day for Chiang Rai, and an extra day for an elephant sanctuary or Mae Taeng adventures.",
  },
  {
    question: "What is the best time to visit Chiang Mai?",
    answer:
      "November to February is the best time to visit Chiang Mai — cool, dry weather perfect for temple tours and Doi Inthanon. Avoid March-April for the burning-season haze. The Yi Peng lantern festival in November is a bucket-list experience.",
  },
  {
    question: "Is Chiang Mai good for Indian travelers?",
    answer:
      "Yes. Chiang Mai is very Indian-friendly with vegetarian / Jain meal options, English-speaking guides and easy Visa-on-Arrival. It's calmer than Bangkok or Pattaya and pairs well with a Bangkok or Phuket trip.",
  },
  {
    question: "Can I book Chiang Mai tours and transfers online with Yellodae?",
    answer:
      "Yes. You can pre-book Chiang Mai temple tours, Doi Inthanon, Chiang Rai day trips and private airport transfers on Yellodae with INR pricing, instant confirmation and Indian-friendly support.",
  },
];

const PAGE_PATH = "/thailand/chiang-mai/things-to-do";
const META_TITLE = "Top Things to Do in Chiang Mai (2026) | Tours & Activities";
const META_DESC =
  "Best things to do in Chiang Mai — Doi Suthep, Doi Inthanon, Chiang Rai Golden Triangle & Long Neck Tribe day trips. Book Chiang Mai tours online with Yellodae.";

const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const ChiangMaiThingsToDo = () => {
  const { formatPrice } = useCurrency();

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = META_TITLE;
    upsertMeta('meta[name="description"]', "name", "description", META_DESC);
    upsertMeta('meta[property="og:title"]', "property", "og:title", META_TITLE);
    upsertMeta('meta[property="og:description"]', "property", "og:description", META_DESC);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", META_TITLE);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", META_DESC);
    return () => { document.title = prevTitle; };
  }, []);

  const sortedActivities = useMemo(
    () => [...activities].sort((a, b) => a.price - b.price),
    []
  );

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Thailand", url: "/thailand/" },
    { name: "Chiang Mai", url: "/thailand/chiang-mai/" },
    { name: "Things to Do", url: PAGE_PATH },
  ];

  const Card = ({ a }: { a: Activity }) => (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={a.image}
          alt={`${a.title} – Chiang Mai activity`}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">
          <Link to={a.slug} className="hover:text-primary">{a.title}</Link>
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{a.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="text-sm">
            <span className="text-muted-foreground">From </span>
            <span className="text-base font-bold text-primary">{formatPrice(a.price)}</span>
          </div>
          <Button asChild size="sm"><Link to={a.slug}>Book Now</Link></Button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-background">
      <CanonicalUrl path={PAGE_PATH} />
      <BreadcrumbJsonLd items={breadcrumbItems} id="chiang-mai-things-to-do-breadcrumb" />
      <FaqJsonLd faqs={faqs} id="chiang-mai-things-to-do-faq" />

      <Header />

      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand/">Thailand</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand/chiang-mai/">Chiang Mai</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Things to Do</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${chiangMaiCity})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Best Things to Do in Chiang Mai (2026 Guide for Indian Travelers)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked Chiang Mai tours and day trips — Doi Suthep temple tour,
            Doi Inthanon National Park, and the famous Chiang Rai Golden Triangle
            with Long Neck Tribe village. Book online with INR pricing and
            Indian-friendly support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#all-activities">Explore Activities</a></Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/thailand/chiang-mai/">Chiang Mai City Page</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold md:text-3xl">Why Chiang Mai is a Top Pick for Indian Travelers</h2>
          <p>
            Chiang Mai is northern Thailand's cultural capital — home to over 300
            ancient temples, lush mountain landscapes, vibrant night markets and
            easy day trips to Chiang Rai and the Golden Triangle. Indian
            travelers love Chiang Mai for its calm pace, cool weather, friendly
            locals and excellent <strong>vegetarian and Jain meal options</strong>.
          </p>
          <p>
            Whether you want a half-day{" "}
            <strong>Doi Suthep temple tour</strong>, a full-day{" "}
            <strong>Doi Inthanon National Park</strong> adventure or a
            once-in-a-lifetime{" "}
            <strong>Chiang Rai Golden Triangle and Long Neck Tribe</strong> day
            trip, our curated <strong>things to do in Chiang Mai</strong>{" "}
            include hotel transfers, lunch and English-speaking guides.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section id="all-activities" className="container mx-auto px-4 py-8 scroll-mt-20">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">All Chiang Mai Activities</h2>
            <p className="mt-1 text-muted-foreground">Browse every Chiang Mai tour available on Yellodae.</p>
          </div>
          <Button variant="outline" asChild><Link to="/thailand/chiang-mai/">View Chiang Mai City Page</Link></Button>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedActivities.map((a) => <Card key={a.slug} a={a} />)}
        </div>
      </section>

      {/* Plan Your Trip */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <div className="flex items-start gap-4">
            <img
              src={watChediLuang}
              alt="Wat Chedi Luang Chiang Mai"
              className="hidden h-20 w-20 rounded-lg object-cover sm:block"
              loading="lazy"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Plan Your Chiang Mai Trip</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Combine Chiang Mai tours with reliable airport transfers and explore other Thailand destinations.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild variant="default"><Link to="/thailand/chiang-mai/">Chiang Mai City Guide</Link></Button>
                <Button asChild variant="outline"><Link to="/thailand/bangkok/things-to-do/">Things to Do in Bangkok</Link></Button>
                <Button asChild variant="outline"><Link to="/thailand/phuket/things-to-do/">Things to Do in Phuket</Link></Button>
                <Button asChild variant="outline"><Link to="/thailand/">Thailand Destinations</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Essentials */}
      <section className="container mx-auto px-4 py-8">
        <TravelEssentials />
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Chiang Mai Travel FAQs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to the most common questions Indian travelers ask about things to do in Chiang Mai.
        </p>
        <div className="mt-6 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left">
                  <h3 className="text-base font-semibold">{f.question}</h3>
                </AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CityExploreLinks city="chiang-mai" />
      
      <section className="container mx-auto px-4">
        <RelatedArticles city="chiang-mai" />
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ChiangMaiThingsToDo;
