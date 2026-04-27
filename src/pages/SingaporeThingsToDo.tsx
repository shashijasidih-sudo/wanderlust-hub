import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

import singaporeMarinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import singaporeCityTour from "@/assets/singapore-city-tour.jpg";
import singaporeNightSafari from "@/assets/singapore-night-safari.jpg";
import singaporeSentosa4d from "@/assets/singapore-sentosa-4d.jpg";
import singaporeCableCar from "@/assets/singapore-cable-car.jpg";
import singaporeWingsTime from "@/assets/singapore-wings-time.jpg";
import singaporeSkyHelix from "@/assets/singapore-sky-helix.jpg";
import singaporeRiverCruise from "@/assets/singapore-river-cruise.jpg";
import singaporeGardensBay from "@/assets/singapore-gardens-bay-night-1.jpg";
import singaporeAdventureCove from "@/assets/singapore-adventure-cove.jpg";
import singaporeFlyer from "@/assets/singapore-flyer.jpg";
import singaporeRiverSafari from "@/assets/singapore-river-safari.jpg";
import singaporeUniversalStudios from "@/assets/singapore-universal-studios.jpg";
import singaporeZoo from "@/assets/singapore-zoo.jpg";
import singaporeBigBus from "@/assets/singapore-big-bus.jpg";

type Category =
  | "Sentosa Island Attractions"
  | "Theme Parks & Water Parks"
  | "Wildlife & Safari"
  | "City Tours & Sightseeing"
  | "Iconic Landmarks";

interface Activity {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category: Category;
}

const activities: Activity[] = [
  // Sentosa Island Attractions
  {
    title: "SkyHelix Sentosa Tickets",
    description: "Experience Singapore's highest open-air panoramic ride, 79m above sea level on Sentosa Island.",
    price: 1811.25,
    image: singaporeSkyHelix,
    slug: "/singapore/skyhelix-sentosa-tickets",
    category: "Sentosa Island Attractions",
  },
  {
    title: "Sentosa 4D AdventureLand Tickets",
    description: "Two thrilling 4D rides at Sentosa's interactive AdventureLand — perfect for families.",
    price: 2060,
    image: singaporeSentosa4d,
    slug: "/singapore/sentosa-4d-adventureland-tickets",
    category: "Sentosa Island Attractions",
  },
  {
    title: "Sentosa Cable Car Tickets and Transfers",
    description: "Sky-high cable car ride between Mount Faber and Sentosa Island with stunning harbour views.",
    price: 2180,
    image: singaporeCableCar,
    slug: "/singapore/sentosa-cable-car-tickets-and-transfers-tickets-and-transfers",
    category: "Sentosa Island Attractions",
  },
  {
    title: "Wings of Time Show Sentosa Tickets",
    description: "Open-air night show at Siloso Beach with water, lasers, fire and live music.",
    price: 2656.5,
    image: singaporeWingsTime,
    slug: "/singapore/wings-of-time-show-sentosa-tickets",
    category: "Sentosa Island Attractions",
  },

  // Theme Parks & Water Parks
  {
    title: "Universal Studios Singapore Weekday Tickets",
    description: "Hollywood blockbuster movies come to life — 7 themed zones at USS on weekdays.",
    price: 6762,
    image: singaporeUniversalStudios,
    slug: "/singapore/universal-studios-singapore-weekday-tickets",
    category: "Theme Parks & Water Parks",
  },
  {
    title: "Universal Studios Singapore Weekend Tickets",
    description: "Same iconic Universal Studios experience with weekend access — perfect for short trips.",
    price: 7872.9,
    image: singaporeUniversalStudios,
    slug: "/singapore/universal-studios-singapore-weekend-tickets",
    category: "Theme Parks & Water Parks",
  },
  {
    title: "Adventure Cove Waterpark Tickets",
    description: "Thrilling water slides, snorkeling with 20,000 fish and a lazy river at RWS.",
    price: 2656.5,
    image: singaporeAdventureCove,
    slug: "/singapore/adventure-cove-waterpark-tickets-waterpark-tickets",
    category: "Theme Parks & Water Parks",
  },

  // Wildlife & Safari
  {
    title: "Night Safari Singapore Tickets and Transfers",
    description: "World's first nocturnal wildlife park — tram safari with 900+ animals after dark.",
    price: 4470,
    image: singaporeNightSafari,
    slug: "/singapore/night-safari-singapore-tickets-and-transfers-singapore-tickets-and-transfers",
    category: "Wildlife & Safari",
  },
  {
    title: "Singapore Zoo Tickets",
    description: "Award-winning open-concept zoo with tram ride and 2,800+ animals across 11 zones.",
    price: 3743.25,
    image: singaporeZoo,
    slug: "/singapore/singapore-zoo-tickets",
    category: "Wildlife & Safari",
  },
  {
    title: "River Wonders Singapore Tickets",
    description: "Asia's first river-themed wildlife park featuring Giant Pandas and the Amazon River Quest.",
    price: 4468,
    image: singaporeRiverSafari,
    slug: "/singapore/river-wonders-singapore-tickets",
    category: "Wildlife & Safari",
  },
  {
    title: "Rainforest Wild Asia Tickets",
    description: "Singapore's newest immersive wildlife park exploring South-East Asia's rainforest habitats.",
    price: 3441.375,
    image: singaporeZoo,
    slug: "/singapore/rainforest-wild-asia-tickets-tickets",
    category: "Wildlife & Safari",
  },

  // City Tours & Sightseeing
  {
    title: "Singapore City Tour",
    description: "Half-day guided Singapore city tour covering Merlion, Chinatown, Little India and more.",
    price: 1815,
    image: singaporeCityTour,
    slug: "/singapore/singapore-city-tour",
    category: "City Tours & Sightseeing",
  },
  {
    title: "Big Bus Hop-On Hop-Off Singapore City Tour",
    description: "Flexible hop-on hop-off open-top bus pass covering Singapore's top attractions.",
    price: 4709.25,
    image: singaporeBigBus,
    slug: "/singapore/big-bus-hop-on-hop-off-singapore-city-tour",
    category: "City Tours & Sightseeing",
  },
  {
    title: "Big Bus Night City Tour Singapore",
    description: "See Singapore's iconic landmarks beautifully lit up on this open-top night bus tour.",
    price: 4709.25,
    image: singaporeBigBus,
    slug: "/singapore/big-bus-night-city-tour-singapore-city-tour-singapore",
    category: "City Tours & Sightseeing",
  },
  {
    title: "Singapore River Cruise Tickets and Transfers",
    description: "Scenic bumboat cruise along the Singapore River past Marina Bay and Clarke Quay.",
    price: 2173.5,
    image: singaporeRiverCruise,
    slug: "/singapore/singapore-river-cruise-tickets-and-transfers",
    category: "City Tours & Sightseeing",
  },

  // Iconic Landmarks
  {
    title: "Gardens by the Bay Tickets and Transfers",
    description: "Visit the iconic Cloud Forest and Flower Dome at Singapore's futuristic garden park.",
    price: 2660,
    image: singaporeGardensBay,
    slug: "/singapore/gardens-by-the-bay-tickets-and-transfers-tickets-and-transfers",
    category: "Iconic Landmarks",
  },
  {
    title: "Singapore Flyer Tickets and Transfers",
    description: "Asia's largest observation wheel — 165m high panoramic views over Marina Bay.",
    price: 3381,
    image: singaporeFlyer,
    slug: "/singapore/singapore-flyer-tickets-and-transfers",
    category: "Iconic Landmarks",
  },
];

const sectionsOrder: Category[] = [
  "Sentosa Island Attractions",
  "Theme Parks & Water Parks",
  "Wildlife & Safari",
  "City Tours & Sightseeing",
  "Iconic Landmarks",
];

const sectionDescriptions: Record<Category, string> = {
  "Sentosa Island Attractions":
    "Singapore's island playground — SkyHelix, 4D AdventureLand, Cable Car and the iconic Wings of Time night show.",
  "Theme Parks & Water Parks":
    "Universal Studios Singapore weekday and weekend tickets plus Adventure Cove Waterpark for family thrills.",
  "Wildlife & Safari":
    "World-class wildlife — Night Safari, Singapore Zoo, River Wonders and the new Rainforest Wild Asia.",
  "City Tours & Sightseeing":
    "Discover Singapore by guided city tour, hop-on hop-off bus, night bus or a Singapore River cruise.",
  "Iconic Landmarks":
    "Visit Singapore's signature attractions — Gardens by the Bay and the Singapore Flyer observation wheel.",
};

const faqs = [
  {
    question: "What are the best things to do in Singapore?",
    answer:
      "Top things to do in Singapore include visiting Universal Studios Singapore, Gardens by the Bay, Sentosa Island (SkyHelix, Cable Car, Wings of Time), Night Safari, Singapore Zoo, the Singapore Flyer and a Singapore River cruise.",
  },
  {
    question: "Is Singapore good for Indian tourists?",
    answer:
      "Yes — Singapore is one of the most popular international destinations for Indian travelers. It offers visa-on-arrival, direct flights from major Indian cities, plenty of vegetarian and Indian food options across Little India, and English-speaking guides.",
  },
  {
    question: "How many days are enough for Singapore?",
    answer:
      "3 to 4 days is ideal to cover Singapore's main attractions — one day for Sentosa Island, one for Universal Studios, one for Gardens by the Bay and Marina Bay, and one for the Night Safari and city tour.",
  },
  {
    question: "What are the top attractions in Singapore?",
    answer:
      "Top Singapore attractions include Universal Studios Singapore, Gardens by the Bay, Sentosa Island, Marina Bay Sands, Night Safari, Singapore Zoo, River Wonders, Singapore Flyer, Sentosa Cable Car and the Wings of Time show.",
  },
  {
    question: "Are Singapore tours worth it?",
    answer:
      "Guided Singapore tours and skip-the-line tickets are highly recommended — they save queueing time at popular attractions like Universal Studios and Gardens by the Bay, include hotel transfers for many tours and are often cheaper than walk-in prices.",
  },
  {
    question: "What is the best time to visit Singapore?",
    answer:
      "Singapore is a year-round destination. February to April typically has the least rainfall and pleasant weather. June to August is great for the Great Singapore Sale, while December offers festive lights across Orchard Road and Marina Bay.",
  },
];

const PAGE_PATH = "/singapore/things-to-do";
const META_TITLE = "Top Things to Do in Singapore (2026) | Tours & Tickets";
const META_DESC =
  "Discover best things to do in Singapore including Universal Studios, Gardens by the Bay, Sentosa, Night Safari & Singapore Flyer. Book Singapore activities online.";

const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const SingaporeThingsToDo = () => {
  const { formatPrice } = useCurrency();
  const [visibleAll, setVisibleAll] = useState(12);

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

  const grouped = useMemo(() => {
    const map: Record<Category, Activity[]> = {
      "Sentosa Island Attractions": [],
      "Theme Parks & Water Parks": [],
      "Wildlife & Safari": [],
      "City Tours & Sightseeing": [],
      "Iconic Landmarks": [],
    };
    activities.forEach((a) => map[a.category].push(a));
    Object.values(map).forEach((arr) => arr.sort((a, b) => a.price - b.price));
    return map;
  }, []);

  const allSorted = useMemo(() => [...activities].sort((a, b) => a.price - b.price), []);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Singapore", url: "/singapore" },
    { name: "Things to Do", url: PAGE_PATH },
  ];

  const Card = ({ a }: { a: Activity }) => (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img src={a.image} alt={`${a.title} – Singapore activity`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
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
      <BreadcrumbJsonLd items={breadcrumbItems} id="singapore-things-to-do-breadcrumb" />
      <FaqJsonLd faqs={faqs} id="singapore-things-to-do-faq" />

      <Header />

      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/singapore">Singapore</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Things to Do</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${singaporeMarinaBay})` }} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Best Things to Do in Singapore (2026 Guide for Indian Travelers)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked Singapore tours, tickets and experiences — Universal
            Studios, Gardens by the Bay, Sentosa Island, Night Safari and more.
            Book online at the best prices with Indian-friendly support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#all-activities">Explore Activities</a></Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/singapore/budget-airport-transfers">Singapore Transfers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold md:text-3xl">Why Singapore is a Top Pick for Indian Travelers</h2>
          <p>
            Singapore is one of South-East Asia's most popular destinations for
            Indian travelers — visa-friendly, English-speaking, family-safe and
            packed with world-class attractions. From the futuristic Gardens by
            the Bay to the thrills of Universal Studios Singapore, there are
            plenty of <strong>things to do in Singapore</strong> for couples,
            families, honeymooners and solo travelers alike.
          </p>
          <p>
            Our curated <strong>Singapore tours and tickets</strong> include
            skip-the-line entry, hotel transfers where applicable, English
            commentary, and Indian and vegetarian-friendly meal options. Whether
            you want a Sentosa Island day, a Night Safari adventure, or a relaxed
            Singapore River cruise — book everything in one place.
          </p>
        </div>
      </section>

      {sectionsOrder.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section key={cat} id={cat.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="container mx-auto px-4 py-8 scroll-mt-20">
            <header className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-bold md:text-3xl">{cat} in Singapore</h2>
              <p className="mt-2 text-muted-foreground">{sectionDescriptions[cat]}</p>
            </header>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((a) => <Card key={a.slug} a={a} />)}
            </div>
          </section>
        );
      })}

      <section id="all-activities" className="container mx-auto px-4 py-12">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">All Singapore Activities</h2>
            <p className="mt-1 text-muted-foreground">Browse every Singapore activity available on Yellodae.</p>
          </div>
          <Button variant="outline" asChild><Link to="/singapore">View Singapore City Page</Link></Button>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allSorted.slice(0, visibleAll).map((a) => <Card key={`all-${a.slug}`} a={a} />)}
        </div>
        {visibleAll < allSorted.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={() => setVisibleAll((v) => v + 12)} variant="outline">Show More Activities</Button>
          </div>
        )}
      </section>

      {/* You may not want to miss this — Singapore Transfers */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">You May Not Want to Miss This</h2>
          <p className="mt-2 text-muted-foreground">
            Reliable Singapore Changi airport transfers to pair with your activities — pre-book and skip the taxi queue.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Singapore Changi Airport Pickup", desc: "Private air-conditioned transfer from Changi airport to your Singapore hotel.", price: 4000, img: singaporeCityTour, slug: "/singapore/singapore-airport-pickup" },
            { title: "Singapore Hotel to Changi Airport Dropoff", desc: "Punctual hotel-to-airport transfer so you never miss your flight.", price: 4000, img: singaporeMarinaBay, slug: "/singapore/singapore-airport-dropoff" },
            { title: "Singapore Airport Night Pickup", desc: "Late-night and early-morning Changi airport pickup with meet & greet.", price: 5000, img: singaporeRiverCruise, slug: "/singapore/singapore-airport-night-pickup" },
          ].map((t) => (
            <article key={t.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
                <img src={t.img} alt={`${t.title} – Singapore transfer`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              </Link>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="line-clamp-2 text-base font-semibold leading-snug">
                  <Link to={t.slug} className="hover:text-primary">{t.title}</Link>
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">From </span>
                    <span className="text-base font-bold text-primary">{formatPrice(t.price)}</span>
                  </div>
                  <Button asChild size="sm"><Link to={t.slug}>Book Now</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Explore More in Singapore */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">Explore More in Singapore</h2>
          <p className="mt-2 text-muted-foreground">
            Jump to a top category or book one of Singapore's most popular tours directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Top Singapore Categories</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <li><Link to="/singapore/things-to-do#sentosa-island-attractions" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Sentosa Island Attractions</Link></li>
              <li><Link to="/singapore/things-to-do#theme-parks-water-parks" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Theme Parks & Water Parks</Link></li>
              <li><Link to="/singapore/things-to-do#wildlife-safari" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Wildlife & Safari</Link></li>
              <li><Link to="/singapore/things-to-do#city-tours-sightseeing" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">City Tours & Sightseeing</Link></li>
              <li><Link to="/singapore/things-to-do#iconic-landmarks" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Iconic Landmarks</Link></li>
              <li><Link to="/singapore/budget-airport-transfers" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Singapore Airport Transfers</Link></li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Popular Singapore Tours</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: "Universal Studios Weekday", to: "/singapore/universal-studios-singapore-weekday-tickets" },
                { label: "Universal Studios Weekend", to: "/singapore/universal-studios-singapore-weekend-tickets" },
                { label: "Gardens by the Bay", to: "/singapore/gardens-by-the-bay-tickets-and-transfers-tickets-and-transfers" },
                { label: "Singapore Flyer", to: "/singapore/singapore-flyer-tickets-and-transfers" },
                { label: "Night Safari Singapore", to: "/singapore/night-safari-singapore-tickets-and-transfers-singapore-tickets-and-transfers" },
                { label: "Singapore Zoo", to: "/singapore/singapore-zoo-tickets" },
                { label: "River Wonders Singapore", to: "/singapore/river-wonders-singapore-tickets" },
                { label: "SkyHelix Sentosa", to: "/singapore/skyhelix-sentosa-tickets" },
                { label: "Sentosa Cable Car", to: "/singapore/sentosa-cable-car-tickets-and-transfers-tickets-and-transfers" },
                { label: "Wings of Time Show", to: "/singapore/wings-of-time-show-sentosa-tickets" },
                { label: "Singapore River Cruise", to: "/singapore/singapore-river-cruise-tickets-and-transfers" },
                { label: "Singapore City Tour", to: "/singapore/singapore-city-tour" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-semibold">Plan Your Singapore Trip</h2>
          <p className="mt-1 text-sm text-muted-foreground">Combine activities with reliable Changi airport transfers.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="default"><Link to="/singapore">Singapore City Guide</Link></Button>
            <Button asChild variant="outline"><Link to="/singapore/budget-airport-transfers">Singapore Transfers</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand/bangkok/things-to-do">Things to Do in Bangkok</Link></Button>
            <Button asChild variant="outline"><Link to="/singapore/destination-guides">Singapore Smart Guides</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Singapore Travel FAQs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to the most common questions Indian travelers ask about things to do in Singapore.
        </p>
        <div className="mt-6 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left"><h3 className="text-base font-semibold">{f.question}</h3></AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default SingaporeThingsToDo;
