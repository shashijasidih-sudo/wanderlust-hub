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

import phuketCity from "@/assets/city-phuket.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketBigBoat from "@/assets/phuket-big-boat-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketNightMarket from "@/assets/phuket-night-market-1.jpg";
import dolphinShow1 from "@/assets/dolphin-show-1.jpg";
import phuketAtv from "@/assets/phuket-atv-1.jpg";
import phuketCarnival from "@/assets/phuket-carnival-1.jpg";
import phuketMuslimWoman from "@/assets/phuket-muslim-woman-hijab.jpg";
import CityExploreLinks from "@/components/CityExploreLinks";


type Category =
  | "Phi Phi & Island Tours"
  | "James Bond Island & Day Trips"
  | "City Tours & Tiger Experiences"
  | "Shows & Entertainment"
  | "Special Experiences";

interface Activity {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category: Category;
}

const activities: Activity[] = [
  // Phi Phi & Island Tours
  {
    title: "Full-Day Phi Phi Island, Maya Bay & Khai Island Speedboat Tour",
    description: "Visit Phi Phi, Maya Bay and Khai Island by speedboat with national park fee, lunch and transfer.",
    price: 4951,
    image: phuketSpeedboat,
    slug: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer",
    category: "Phi Phi & Island Tours",
  },
  {
    title: "Phi Phi Island Big Boat Tour with Transfer",
    description: "Relaxed Phi Phi Island day tour by big boat — perfect for families and seniors.",
    price: 3985,
    image: phuketBigBoat,
    slug: "/thailand/phuket/phi-phi-island-big-boat-tour-with-transfer",
    category: "Phi Phi & Island Tours",
  },
  {
    title: "Phi Phi Island Premium Speedboat (Royal Jet) Tour",
    description: "First-class Royal Jet cruiser experience to Phi Phi with VIP service and transfer.",
    price: 5555,
    image: phuketBoatTour,
    slug: "/thailand/phuket/phi-phi-island-premium-speedboat-tour-with-transfer",
    category: "Phi Phi & Island Tours",
  },
  {
    title: "Phi Phi, Maya Bay & Khai Island Speedboat (No Park Fee)",
    description: "Speedboat day tour to Phi Phi, Maya Bay and Khai Island excluding national marine fee.",
    price: 4347,
    image: phuketMayaBay,
    slug: "/thailand/phuket/phi-phi-maya-bay-khai-island-speedboat-tour-with-transfer",
    category: "Phi Phi & Island Tours",
  },

  // James Bond Island & Day Trips
  {
    title: "James Bond Island Sea Canoe Tour by Longtail Boat",
    description: "Phang Nga Bay sea canoe adventure visiting James Bond Island with lunch and transfer.",
    price: 4470,
    image: phuketLongtailBoat,
    slug: "/thailand/phuket/james-bond-island-sea-canoe-tour-with-transfer",
    category: "James Bond Island & Day Trips",
  },
  {
    title: "James Bond Island Speed Boat Tour with Lunch",
    description: "Phang Nga Bay James Bond Island day tour by speed boat with lunch and transfer.",
    price: 3985,
    image: phuketKayaks,
    slug: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer",
    category: "James Bond Island & Day Trips",
  },

  // City Tours & Tiger Experiences
  {
    title: "Phuket City Tour with Tiger Kingdom Tickets & Transfer",
    description: "City tour with Tiger Kingdom Phuket entry — selfie with the famous tigers.",
    price: 4589,
    image: phuketIslandView,
    slug: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer",
    category: "City Tours & Tiger Experiences",
  },
  {
    title: "Phuket Night Market & City Sightseeing Tour with Transfer",
    description: "Discover Phuket's old town and famous night market with hotel transfers included.",
    price: 2053,
    image: phuketNightMarket,
    slug: "/thailand/phuket/phuket-night-market-tour-with-transfer",
    category: "City Tours & Tiger Experiences",
  },
  {
    title: "Tiger Kingdom + ATV Experience Phuket with Transfer",
    description: "Tiger Kingdom Phuket entry combined with a 30-minute ATV ride and transfer.",
    price: 5435,
    image: phuketAtv,
    slug: "/thailand/phuket/tiger-kingdom-atv-experience-phuket-with-transfer",
    category: "City Tours & Tiger Experiences",
  },
  {
    title: "Dolphin Show Phuket Admission Ticket with Transfer",
    description: "Family-friendly Phuket dolphin show with reserved seats and transfer.",
    price: 3410,
    image: dolphinShow1,
    slug: "/thailand/phuket/dolphin-show-phuket-with-transfer",
    category: "City Tours & Tiger Experiences",
  },

  // Shows & Entertainment
  {
    title: "Phuket Simon Cabaret Show Ticket with Transfer",
    description: "Watch the world-famous Simon Cabaret in Phuket with reserved seating and transfer.",
    price: 2268,
    image: phuketSpeedboat,
    slug: "/thailand/phuket/simon-cabaret-show-with-transfer",
    category: "Shows & Entertainment",
  },
  {
    title: "Phuket Carnival Magic Show Tickets with Transfer",
    description: "Spectacular Carnival Magic show in Phuket with hotel transfer and reserved seating.",
    price: 6426,
    image: phuketCarnival,
    slug: "/thailand/phuket/carnival-magic-show-tickets-with-transfer",
    category: "Shows & Entertainment",
  },

  // Special Experiences
  {
    title: "Elephant Safari, ATV, Rafting & Monkey Caves Adventure",
    description: "5km rafting + monkey caves + ATV ride + elephant trekking + flying fox + lunch.",
    price: 7245,
    image: phuketLongtailBoat,
    slug: "/thailand/phuket/elephant-safari",
    category: "Special Experiences",
  },
  {
    title: "Muslim-Friendly Phuket Tour: A Halal Travel Experience",
    description: "Curated Halal-friendly Phuket tour with mosque visits and Halal dining options.",
    price: 8820,
    image: phuketMuslimWoman,
    slug: "/thailand/phuket/muslim-friendly-tour",
    category: "Special Experiences",
  },
];

const sectionsOrder: Category[] = [
  "Phi Phi & Island Tours",
  "James Bond Island & Day Trips",
  "City Tours & Tiger Experiences",
  "Shows & Entertainment",
  "Special Experiences",
];

const sectionDescriptions: Record<Category, string> = {
  "Phi Phi & Island Tours":
    "Speedboat and big-boat tours to Phi Phi, Maya Bay and Khai Island — Phuket's most iconic island day-trips with hotel transfers and lunch.",
  "James Bond Island & Day Trips":
    "Phang Nga Bay tours including James Bond Island by speed boat or sea canoe — perfect for first-time Phuket visitors.",
  "City Tours & Tiger Experiences":
    "Phuket city tours, dolphin shows, Tiger Kingdom selfies and ATV adventures with English-speaking guides and transfers.",
  "Shows & Entertainment":
    "Phuket's most popular evening entertainment — the legendary Simon Cabaret and the Carnival Magic show.",
  "Special Experiences":
    "Elephant safari adventures and Muslim-friendly Halal Phuket tours for travelers seeking unique, curated experiences.",
};

const faqs = [
  {
    question: "What are the best things to do in Phuket?",
    answer:
      "Top things to do in Phuket include a Phi Phi Island speedboat tour, James Bond Island day-trip, Tiger Kingdom selfie experience, the Simon Cabaret show, Phuket old town and night market, and the Carnival Magic show.",
  },
  {
    question: "Is Phuket good for Indian tourists?",
    answer:
      "Yes — Phuket is one of the most popular international destinations for Indian travelers. It offers Indian and Halal-friendly meal options on most tours, English-speaking guides, easy visa access and curated family-friendly experiences.",
  },
  {
    question: "How many days are enough for Phuket?",
    answer:
      "3 to 4 days is ideal to cover Phuket's main attractions — a Phi Phi day trip, James Bond Island, a city + night market tour and an evening cabaret show. Add 2 more days if combining with Krabi.",
  },
  {
    question: "What are the top attractions in Phuket?",
    answer:
      "Top Phuket attractions include Phi Phi Islands, Maya Bay, James Bond Island (Phang Nga Bay), Big Buddha, Tiger Kingdom, Phuket Old Town, Patong Beach, Simon Cabaret and the Carnival Magic show.",
  },
  {
    question: "Are Phuket tours worth it?",
    answer:
      "Guided Phuket tours are highly recommended — they include hotel transfers, English-speaking guides, lunch, national park fees and equipment, making the experience smoother and often cheaper than booking individually.",
  },
  {
    question: "What is the best time to visit Phuket?",
    answer:
      "The best time to visit Phuket is between November and April when the weather is dry with calm seas — ideal for island tours. May to October is the monsoon season with fewer crowds and better hotel deals.",
  },
];

const PAGE_PATH = "/thailand/phuket/things-to-do";
const META_TITLE = "Top Things to Do in Phuket (2025) | Tours & Activities";
const META_DESC =
  "Discover best things to do in Phuket including Phi Phi Island, James Bond Island, Tiger Kingdom, Simon Cabaret & more. Book Phuket activities online.";

const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const PhuketThingsToDo = () => {
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
      "Phi Phi & Island Tours": [],
      "James Bond Island & Day Trips": [],
      "City Tours & Tiger Experiences": [],
      "Shows & Entertainment": [],
      "Special Experiences": [],
    };
    activities.forEach((a) => map[a.category].push(a));
    Object.values(map).forEach((arr) => arr.sort((a, b) => a.price - b.price));
    return map;
  }, []);

  const allSorted = useMemo(() => [...activities].sort((a, b) => a.price - b.price), []);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Thailand", url: "/thailand" },
    { name: "Phuket", url: "/thailand/phuket" },
    { name: "Things to Do", url: PAGE_PATH },
  ];

  const Card = ({ a }: { a: Activity }) => (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img src={a.image} alt={`${a.title} – Phuket activity`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
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
      <BreadcrumbJsonLd items={breadcrumbItems} id="phuket-things-to-do-breadcrumb" />
      <FaqJsonLd faqs={faqs} id="phuket-things-to-do-faq" />

      <Header />

      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand">Thailand</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand/phuket">Phuket</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Things to Do</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${phuketCity})` }} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Best Things to Do in Phuket (2025 Guide for Indian Travelers)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked Phuket activities — Phi Phi & Maya Bay speedboats, James
            Bond Island day-trips, Tiger Kingdom experiences, the Simon
            Cabaret show and Carnival Magic. Book online at the best prices with
            Indian-friendly support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#all-activities">Explore Activities</a></Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/thailand/phuket/budget-airport-transfers">Phuket Transfers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold md:text-3xl">Why Phuket is a Top Pick for Indian Travelers</h2>
          <p>
            Phuket is Thailand's largest island and a top-rated destination for
            Indian travelers — famous for stunning beaches, world-class island
            tours, lively nightlife and family-friendly attractions. With direct
            flights, easy visa access, plenty of Indian and Halal restaurants,
            and English-speaking tour operators, Phuket offers the perfect mix
            of <strong>things to do in Phuket</strong> for couples, families and
            groups.
          </p>
          <p>
            Whether you want a Phi Phi Island speedboat day-trip, a James Bond
            Island sea canoe adventure, a Tiger Kingdom selfie or an evening
            with the Simon Cabaret — our curated{" "}
            <strong>Phuket tours and activities</strong> include hotel
            transfers, lunch, skip-the-line entry and English-speaking support.
          </p>
        </div>
      </section>

      {sectionsOrder.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section key={cat} id={cat.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="container mx-auto px-4 py-8 scroll-mt-20">
            <header className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-bold md:text-3xl">{cat} in Phuket</h2>
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
            <h2 className="text-2xl font-bold md:text-3xl">All Phuket Activities</h2>
            <p className="mt-1 text-muted-foreground">Browse every Phuket activity available on Yellodae.</p>
          </div>
          <Button variant="outline" asChild><Link to="/thailand/phuket">View Phuket City Page</Link></Button>
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

      {/* You may not want to miss this — Phuket Transfers */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">You May Not Want to Miss This</h2>
          <p className="mt-2 text-muted-foreground">
            Reliable Phuket airport and city transfers to pair with your activities — pre-book and skip the taxi queue.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Phuket Airport (HKT) to Phuket Hotel Transfer", desc: "Private air-conditioned transfer from HKT airport to your Phuket hotel.", price: 1800, img: phuketBoatTour, slug: "/thailand/phuket/phuket-airport-to-phuket-hotel-transfer" },
            { title: "Phuket Hotel to Phuket Airport (HKT) Transfer", desc: "Punctual hotel-to-airport transfer so you never miss your flight.", price: 1800, img: phuketSpeedboat, slug: "/thailand/phuket/phuket-hotel-to-phuket-airport-transfer" },
            { title: "Phuket 4-Hour Private Car Rental", desc: "Flexible 4-hour private vehicle for sightseeing, shopping or hotel transfers.", price: 4200, img: phuketIslandView, slug: "/thailand/phuket/phuket-hotel-to-hotel-transfer-4-hours" },
            { title: "Phuket Hotel to Krabi Hotel Transfer", desc: "Private direct transfer from Phuket to Krabi for a smooth multi-city trip.", price: 5800, img: phuketLongtailBoat, slug: "/thailand/phuket/phuket-hotel-to-krabi-hotel-transfer" },
          ].map((t) => (
            <article key={t.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
                <img src={t.img} alt={`${t.title} – Phuket transfer`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
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

      {/* Explore More in Phuket */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">Explore More in Phuket</h2>
          <p className="mt-2 text-muted-foreground">
            Jump to a top category or book one of Phuket's most popular attractions directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Top Phuket Categories</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <li><Link to="/thailand/phuket/things-to-do#phi-phi-island-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Phi Phi & Island Tours</Link></li>
              <li><Link to="/thailand/phuket/things-to-do#james-bond-island-day-trips" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">James Bond Island Tours</Link></li>
              <li><Link to="/thailand/phuket/things-to-do#city-tours-tiger-experiences" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">City Tours & Tiger Kingdom</Link></li>
              <li><Link to="/thailand/phuket/things-to-do#shows-entertainment" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Shows & Entertainment</Link></li>
              <li><Link to="/thailand/phuket/things-to-do#special-experiences" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Special Experiences</Link></li>
              <li><Link to="/thailand/phuket/budget-airport-transfers" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Phuket Airport & City Transfers</Link></li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Popular Phuket Attractions</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: "Phi Phi Island Speedboat Tour", to: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
                { label: "Phi Phi Island Big Boat Tour", to: "/thailand/phuket/phi-phi-island-big-boat-tour-with-transfer" },
                { label: "Phi Phi Premium Royal Jet Tour", to: "/thailand/phuket/phi-phi-island-premium-speedboat-tour-with-transfer" },
                { label: "James Bond Island Speed Boat", to: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer" },
                { label: "James Bond Island Sea Canoe", to: "/thailand/phuket/james-bond-island-sea-canoe-tour-with-transfer" },
                { label: "Tiger Kingdom + ATV Phuket", to: "/thailand/phuket/tiger-kingdom-atv-experience-phuket-with-transfer" },
                { label: "Phuket Night Market Tour", to: "/thailand/phuket/phuket-night-market-tour-with-transfer" },
                { label: "Simon Cabaret Show", to: "/thailand/phuket/simon-cabaret-show-with-transfer" },
                { label: "Carnival Magic Show", to: "/thailand/phuket/carnival-magic-show-tickets-with-transfer" },
                { label: "Dolphin Show Phuket", to: "/thailand/phuket/dolphin-show-phuket-with-transfer" },
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
          <h2 className="text-xl font-semibold">Plan Your Phuket Trip</h2>
          <p className="mt-1 text-sm text-muted-foreground">Combine activities with reliable airport and city transfers.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="default"><Link to="/thailand/phuket">Phuket City Guide</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand/phuket/budget-airport-transfers">Phuket Transfers</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand/krabi/things-to-do">Things to Do in Krabi</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand">Thailand Destinations</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Phuket Travel FAQs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to the most common questions Indian travelers ask about things to do in Phuket.
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

      <CityExploreLinks city="phuket" />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PhuketThingsToDo;
