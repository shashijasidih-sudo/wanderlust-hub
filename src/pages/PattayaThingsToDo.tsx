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

// Local imagery
import pattayaCity from "@/assets/city-pattaya.jpg";
import pattayaTropicalBeach from "@/assets/pattaya-tropical-beach-1.jpg";
import pattayaBoatsBeach from "@/assets/pattaya-boats-beach-1.jpg";
import pattayaSailboat from "@/assets/pattaya-sailboat-1.jpg";
import pattayaSpeedboat from "@/assets/pattaya-speedboat-1.jpg";
import pattayaIslandsBoats from "@/assets/pattaya-islands-boats-1.jpg";
import pattayaNightlife1 from "@/assets/pattaya-nightlife-1.jpg";
import pattayaNightlife2 from "@/assets/pattaya-nightlife-2.jpg";
import floatingMarket1 from "@/assets/floating-market-daylight-1.jpg";
import floatingMarket2 from "@/assets/floating-market-daylight-2.jpg";
import muayThai1 from "@/assets/muay-thai-1.jpg";
import alcazarShow1 from "@/assets/alcazar-show-1.jpg";
import imagine79Show1 from "@/assets/imagine79-show-1.jpg";
import show69Pattaya1 from "@/assets/show69-pattaya-1.jpg";
import show89Pattaya1 from "@/assets/show89-pattaya-1.jpg";
import bigeyeShowPattaya1 from "@/assets/bigeye-show-pattaya-1.jpg";
import dolphinShow1 from "@/assets/dolphin-show-1.jpg";
import CityExploreLinks from "@/components/CityExploreLinks";


type Category =
  | "City Tours & Sightseeing"
  | "Beach & Island Tours"
  | "Floating Market Tours"
  | "Shows & Cabaret"
  | "Nightlife & Adult Shows";

interface Activity {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string; // begins with /thailand/pattaya/...
  category: Category;
}

const activities: Activity[] = [
  // City Tours & Sightseeing
  {
    title: "Pattaya City Tour: Big Buddha Hill & Gems Gallery (with Transfer)",
    description: "Visit Big Buddha Hill and the famous Gems Gallery with round-trip Pattaya hotel transfers.",
    price: 1208,
    image: pattayaSailboat,
    slug: "/thailand/pattaya/big-buddha-gems-gallery-tour",
    category: "City Tours & Sightseeing",
  },
  {
    title: "Nong Nooch Tropical Garden Admission with Show & Lunch",
    description: "Full-day Nong Nooch Garden tour with cultural show, lunch and round-trip transfer.",
    price: 3622.5,
    image: pattayaTropicalBeach,
    slug: "/thailand/pattaya/nong-nooch-tropical-garden-tickets",
    category: "City Tours & Sightseeing",
  },

  // Beach & Island Tours
  {
    title: "Coral Island Tour with Indian Lunch & Transfer",
    description: "Speedboat day-trip to Coral Island with Indian lunch, water sports options and transfer.",
    price: 603.75,
    image: pattayaBoatsBeach,
    slug: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch",
    category: "Beach & Island Tours",
  },
  {
    title: "Pattaya Dolphinarium Show Tickets with Transfer",
    description: "Family-friendly dolphin show in Pattaya with transfers from your hotel.",
    price: 3650,
    image: dolphinShow1,
    slug: "/thailand/pattaya/pattaya-dolphinarium-show-tickets",
    category: "Beach & Island Tours",
  },

  // Floating Market Tours
  {
    title: "Discovery Pattaya City Tour with Floating Market & Lunch",
    description: "Pattaya floating market tour with city sightseeing and lunch included.",
    price: 2175,
    image: floatingMarket1,
    slug: "/thailand/pattaya/pattaya-floating-market-tour",
    category: "Floating Market Tours",
  },
  {
    title: "Pattaya Floating Market Guided Tour with Transfer",
    description: "Guided experience at Pattaya's famous Four Regions Floating Market with transfer.",
    price: 3140,
    image: floatingMarket2,
    slug: "/thailand/pattaya/pattaya-floating-market-guided-tour",
    category: "Floating Market Tours",
  },

  // Shows & Cabaret
  {
    title: "Alcazar Cabaret Show Pattaya with Transfer",
    description: "World-famous Alcazar cabaret show in Pattaya with reserved seating and transfer.",
    price: 2420,
    image: alcazarShow1,
    slug: "/thailand/pattaya/alcazar-cabaret-show-with-transfer",
    category: "Shows & Cabaret",
  },
  {
    title: "Muay Thai Boxing Show Pattaya — Admission Ticket",
    description: "Live Muay Thai boxing show experience at one of Pattaya's premier stadiums.",
    price: 4830,
    image: muayThai1,
    slug: "/thailand/pattaya/muay-thai-boxing-show-pattaya",
    category: "Shows & Cabaret",
  },

  // Nightlife & Adult Shows (18+)
  {
    title: "Pattaya Nightlife Walking, Drinking & Food Tasting Tour",
    description: "Guided walking tour of Pattaya's iconic Walking Street with drinks and food tasting.",
    price: 3745,
    image: pattayaNightlife1,
    slug: "/thailand/pattaya/pattaya-nightlife-walking-tour",
    category: "Nightlife & Adult Shows",
  },
  {
    title: "Pattaya Pub Crawl Night Tour at Walking Street",
    description: "Sunset club and pub crawling experience along Pattaya's drinking street.",
    price: 6280,
    image: pattayaNightlife2,
    slug: "/thailand/pattaya/pattaya-pub-crawl-night-tour",
    category: "Nightlife & Adult Shows",
  },
  {
    title: "69 Show Pattaya with Transfer (18+)",
    description: "Adults-only 69 Show in Pattaya with reserved seating and round-trip transfer.",
    price: 3800,
    image: show69Pattaya1,
    slug: "/thailand/pattaya/69-show-pattaya-with-transfer",
    category: "Nightlife & Adult Shows",
  },
  {
    title: "79 Show Pattaya with Transfer (18+)",
    description: "Imagine 79 Show in Pattaya — adult cabaret experience with hotel transfer.",
    price: 4000,
    image: imagine79Show1,
    slug: "/thailand/pattaya/79-show-pattaya-with-transfer",
    category: "Nightlife & Adult Shows",
  },
  {
    title: "89 Show Pattaya with Transfer (18+)",
    description: "Premium 89 Show Pattaya with VIP-style seating and hotel transfer.",
    price: 6000,
    image: show89Pattaya1,
    slug: "/thailand/pattaya/89-show-pattaya-with-transfer",
    category: "Nightlife & Adult Shows",
  },
  {
    title: "99 Big Eye Show Pattaya with Transfer (18+)",
    description: "Big Eye 99 adult show in Pattaya with round-trip transfer included.",
    price: 6000,
    image: bigeyeShowPattaya1,
    slug: "/thailand/pattaya/99-show-pattaya-big-eye-with-transfer",
    category: "Nightlife & Adult Shows",
  },
];

const sectionsOrder: Category[] = [
  "City Tours & Sightseeing",
  "Beach & Island Tours",
  "Floating Market Tours",
  "Shows & Cabaret",
  "Nightlife & Adult Shows",
];

const sectionDescriptions: Record<Category, string> = {
  "City Tours & Sightseeing":
    "Explore Pattaya's iconic landmarks — Big Buddha Hill, Gems Gallery and Nong Nooch Tropical Garden — with guided tours and hotel transfers.",
  "Beach & Island Tours":
    "Speedboat trips to Coral Island, dolphin shows and beachside experiences perfect for families and first-time visitors.",
  "Floating Market Tours":
    "Authentic floating market experiences in Pattaya with guided tours, traditional Thai street food and transfers included.",
  "Shows & Cabaret":
    "World-famous Alcazar cabaret show and high-energy Muay Thai boxing — Pattaya's most popular family-friendly shows.",
  "Nightlife & Adult Shows":
    "Adults-only (18+) Pattaya nightlife tours, pub crawls and the iconic 69, 79, 89 and 99 Big Eye shows with transfers.",
};

const faqs = [
  {
    question: "What are the best things to do in Pattaya?",
    answer:
      "Top things to do in Pattaya include a Coral Island speedboat tour, the Alcazar cabaret show, Nong Nooch Tropical Garden, the Pattaya Floating Market, a Walking Street nightlife tour and the Big Buddha Hill city tour.",
  },
  {
    question: "Is Pattaya good for Indian tourists?",
    answer:
      "Yes — Pattaya is a top-rated destination for Indian travelers. It offers Indian and Jain meal options on most tours, easy accessibility from Bangkok airports, English-speaking guides, and curated family-friendly as well as adults-only experiences.",
  },
  {
    question: "How many days are enough for Pattaya?",
    answer:
      "2 to 3 days is ideal to cover Pattaya's main attractions — Coral Island, Nong Nooch Garden, the Alcazar show and Walking Street nightlife. Add another day if you want to combine it with a Bangkok extension.",
  },
  {
    question: "What are the top attractions in Pattaya?",
    answer:
      "Top Pattaya attractions include Coral Island, Nong Nooch Tropical Garden, Big Buddha Hill, Sanctuary of Truth, Pattaya Floating Market, Walking Street, the Alcazar Show and the Pattaya Dolphinarium.",
  },
  {
    question: "Are Pattaya tours worth it?",
    answer:
      "Guided Pattaya tours are highly recommended for first-time visitors. They include hotel transfers, English-speaking guides, skip-the-line entry and bundled meals — making the experience smoother and often cheaper than visiting attractions individually.",
  },
  {
    question: "What is the best time to visit Pattaya?",
    answer:
      "The best time to visit Pattaya is between November and February when the weather is cool and dry. March to May is hot, while June to October sees occasional rain but offers better hotel and tour deals.",
  },
];

const PAGE_PATH = "/thailand/pattaya/things-to-do";
const META_TITLE = "Top Things to Do in Pattaya (2025) | Tours & Activities";
const META_DESC =
  "Discover best things to do in Pattaya including Coral Island, Alcazar show, floating markets, nightlife & cabaret tours. Book Pattaya activities online.";

const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const PattayaThingsToDo = () => {
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
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const grouped = useMemo(() => {
    const map: Record<Category, Activity[]> = {
      "City Tours & Sightseeing": [],
      "Beach & Island Tours": [],
      "Floating Market Tours": [],
      "Shows & Cabaret": [],
      "Nightlife & Adult Shows": [],
    };
    activities.forEach((a) => map[a.category].push(a));
    Object.values(map).forEach((arr) => arr.sort((a, b) => a.price - b.price));
    return map;
  }, []);

  const allSorted = useMemo(
    () => [...activities].sort((a, b) => a.price - b.price),
    []
  );

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Thailand", url: "/thailand" },
    { name: "Pattaya", url: "/thailand/pattaya" },
    { name: "Things to Do", url: PAGE_PATH },
  ];

  const Card = ({ a }: { a: Activity }) => (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={a.image}
          alt={`${a.title} – Pattaya activity`}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">
          <Link to={a.slug} className="hover:text-primary">
            {a.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{a.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="text-sm">
            <span className="text-muted-foreground">From </span>
            <span className="text-base font-bold text-primary">{formatPrice(a.price)}</span>
          </div>
          <Button asChild size="sm">
            <Link to={a.slug}>Book Now</Link>
          </Button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-background">
      <CanonicalUrl path={PAGE_PATH} />
      <BreadcrumbJsonLd items={breadcrumbItems} id="pattaya-things-to-do-breadcrumb" />
      <FaqJsonLd faqs={faqs} id="pattaya-things-to-do-faq" />

      <Header />

      {/* Visible breadcrumb */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/thailand">Thailand</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/thailand/pattaya">Pattaya</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Things to Do</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${pattayaCity})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Best Things to Do in Pattaya (2025 Guide for Indian Travelers)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked Pattaya activities, tours and experiences — from Coral
            Island speedboat trips and Nong Nooch Garden to Alcazar cabaret,
            floating markets and Walking Street nightlife. Book online at the
            best prices with Indian-friendly support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#all-activities">Explore Activities</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/thailand/pattaya/budget-airport-transfers">Pattaya Transfers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro / SEO copy */}
      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold md:text-3xl">Why Pattaya is a Top Pick for Indian Travelers</h2>
          <p>
            Pattaya is one of Thailand's most popular beach destinations — a
            lively mix of beaches, islands, world-famous cabaret shows and
            buzzing nightlife. Indian travelers love Pattaya for its short
            transfer from Bangkok airports, abundant Indian and Jain restaurants,
            and the sheer variety of <strong>things to do in Pattaya</strong> for
            families, couples and groups.
          </p>
          <p>
            Whether you want a Coral Island speedboat day-trip, a cultural visit
            to Nong Nooch Tropical Garden, the iconic Alcazar cabaret, a guided
            floating market tour or an adults-only Walking Street experience —
            our curated <strong>Pattaya tours and activities</strong> cover
            everything in one place. From family-friendly{" "}
            <strong>Pattaya attractions for Indians</strong> like the
            Dolphinarium and Big Buddha Hill to thrilling 18+ shows, you'll find
            guided experiences with hotel transfers, reserved seating and
            English-speaking support.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {sectionsOrder.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section
            key={cat}
            id={cat.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
            className="container mx-auto px-4 py-8 scroll-mt-20"
          >
            <header className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-bold md:text-3xl">{cat} in Pattaya</h2>
              <p className="mt-2 text-muted-foreground">{sectionDescriptions[cat]}</p>
            </header>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((a) => (
                <Card key={a.slug} a={a} />
              ))}
            </div>
          </section>
        );
      })}

      {/* All activities listing */}
      <section id="all-activities" className="container mx-auto px-4 py-12">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">All Pattaya Activities</h2>
            <p className="mt-1 text-muted-foreground">
              Browse every Pattaya activity available on Yellodae.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/thailand/pattaya">View Pattaya City Page</Link>
          </Button>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allSorted.slice(0, visibleAll).map((a) => (
            <Card key={`all-${a.slug}`} a={a} />
          ))}
        </div>
        {visibleAll < allSorted.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={() => setVisibleAll((v) => v + 12)} variant="outline">
              Show More Activities
            </Button>
          </div>
        )}
      </section>

      {/* You may not want to miss this — Pattaya Transfers */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">You May Not Want to Miss This</h2>
          <p className="mt-2 text-muted-foreground">
            Reliable Pattaya airport and city transfers to pair with your activities — pre-book and skip the taxi queue.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Pattaya Hotel to Suvarnabhumi (BKK) Airport Transfer",
              desc: "Punctual private transfer from your Pattaya hotel to BKK airport — perfect for stress-free departures.",
              price: 3200,
              img: pattayaSpeedboat,
              slug: "/thailand/pattaya/pattaya-hotel-to-suvarnabhumi-airport-transfer",
            },
            {
              title: "Pattaya Hotel to Don Mueang (DMK) Airport Transfer",
              desc: "Comfortable private DMK airport transfer with professional driver and meet & greet.",
              price: 3200,
              img: pattayaIslandsBoats,
              slug: "/thailand/pattaya/pattaya-hotel-to-don-mueang-airport-transfer",
            },
            {
              title: "U-Tapao Airport to Pattaya Hotel Transfer",
              desc: "Quick private pickup from U-Tapao airport (UTP) directly to your Pattaya hotel.",
              price: 1800,
              img: pattayaBoatsBeach,
              slug: "/thailand/pattaya/u-tapao-airport-to-pattaya-hotel-transfer",
            },
            {
              title: "Pattaya Private Car (4-Hour City Rental)",
              desc: "Flexible 4-hour private vehicle rental for shopping, sightseeing or hotel-to-hotel transfers.",
              price: 4200,
              img: pattayaTropicalBeach,
              slug: "/thailand/pattaya/pattaya-private-car-4-hours",
            },
          ].map((t) => (
            <article key={t.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={t.img}
                  alt={`${t.title} – Pattaya transfer`}
                  loading="lazy"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="line-clamp-2 text-base font-semibold leading-snug">
                  <Link to={t.slug} className="hover:text-primary">
                    {t.title}
                  </Link>
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">From </span>
                    <span className="text-base font-bold text-primary">{formatPrice(t.price)}</span>
                  </div>
                  <Button asChild size="sm">
                    <Link to={t.slug}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Explore more in Pattaya — internal links */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">Explore More in Pattaya</h2>
          <p className="mt-2 text-muted-foreground">
            Jump to a top category or book one of Pattaya's most popular
            attractions directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Top categories */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Top Pattaya Categories</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <li>
                <Link to="/thailand/pattaya/things-to-do#city-tours-sightseeing" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  City Tours & Sightseeing
                </Link>
              </li>
              <li>
                <Link to="/thailand/pattaya/things-to-do#beach-island-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Beach & Island Tours
                </Link>
              </li>
              <li>
                <Link to="/thailand/pattaya/things-to-do#floating-market-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Floating Market Tours
                </Link>
              </li>
              <li>
                <Link to="/thailand/pattaya/things-to-do#shows-cabaret" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Shows & Cabaret
                </Link>
              </li>
              <li>
                <Link to="/thailand/pattaya/things-to-do#nightlife-adult-shows" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Nightlife & Adult Shows
                </Link>
              </li>
              <li>
                <Link to="/thailand/pattaya/budget-airport-transfers" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Pattaya Airport & City Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular attractions */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Popular Pattaya Attractions</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: "Coral Island Tour with Lunch", to: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch" },
                { label: "Nong Nooch Tropical Garden", to: "/thailand/pattaya/nong-nooch-tropical-garden-tickets" },
                { label: "Alcazar Cabaret Show", to: "/thailand/pattaya/alcazar-cabaret-show-with-transfer" },
                { label: "Big Buddha Hill & Gems Gallery", to: "/thailand/pattaya/big-buddha-gems-gallery-tour" },
                { label: "Pattaya Dolphinarium Show", to: "/thailand/pattaya/pattaya-dolphinarium-show-tickets" },
                { label: "Pattaya Floating Market Tour", to: "/thailand/pattaya/pattaya-floating-market-tour" },
                { label: "Muay Thai Boxing Show", to: "/thailand/pattaya/muay-thai-boxing-show-pattaya" },
                { label: "Walking Street Nightlife Tour", to: "/thailand/pattaya/pattaya-nightlife-walking-tour" },
                { label: "69 Show Pattaya (18+)", to: "/thailand/pattaya/69-show-pattaya-with-transfer" },
                { label: "99 Big Eye Show (18+)", to: "/thailand/pattaya/99-show-pattaya-big-eye-with-transfer" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Internal links block */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-semibold">Plan Your Pattaya Trip</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Combine activities with reliable airport and city transfers.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="default">
              <Link to="/thailand/pattaya">Pattaya City Guide</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/thailand/pattaya/budget-airport-transfers">Pattaya Transfers</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/thailand/bangkok/things-to-do">Things to Do in Bangkok</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/thailand">Thailand Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Pattaya Travel FAQs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to the most common questions Indian travelers ask about
          things to do in Pattaya.
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

      <CityExploreLinks city="pattaya" />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PattayaThingsToDo;
