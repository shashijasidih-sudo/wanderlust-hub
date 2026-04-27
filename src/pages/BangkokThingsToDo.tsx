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

// Local imagery (re-using existing Bangkok assets)
import bangkokSkywalkHero from "@/assets/bangkok-skywalk-hero.jpg";
import massageHero from "@/assets/massage-coupon-hero.jpg";
import floatingMarket1 from "@/assets/floating-market-daylight-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import ayutthayaSunset1 from "@/assets/ayutthaya-sunset-1.jpg";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseNight2 from "@/assets/cruise-night-2.jpg";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";

type Category =
  | "Dinner Cruises"
  | "Temple & Cultural Tours"
  | "Theme Parks & Attractions"
  | "Floating Market Tours"
  | "Night Tours & Experiences";

interface Activity {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string; // begins with /thailand/bangkok/...
  category: Category;
}

const activities: Activity[] = [
  // Temple & Cultural Tours
  {
    title: "Three Temple Tour with Grand Palace & Canal Cruise",
    description: "Visit Wat Arun, Wat Pho and the Grand Palace with a scenic canal ride.",
    price: 10845,
    image: bangkokTemple1,
    slug: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Three Temples Bangkok City Tour with Transfer",
    description: "Private guided tour of Wat Arun, Wat Pho and Wat Traimit with hotel transfers.",
    price: 4915,
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Royal Grand Palace & Emerald Buddha Tour",
    description: "Explore Bangkok's iconic Grand Palace, Emerald Buddha and Reclining Buddha.",
    price: 2646,
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Bangkok City Tour with Gems Gallery",
    description: "Half-day Bangkok temple and city tour ending at the famous Gems Gallery.",
    price: 1960,
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/gems-gallery-bangkok-tickets",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Wat Arun Sunset & Chinatown Street Food",
    description: "Sunset at Wat Arun followed by a guided Chinatown street food walk.",
    price: 5044,
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/wat-arun-chinatown-tour",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Golden Buddha & Marble Temple City Tour",
    description: "City tour covering Golden Buddha, Marble Temple and the Reclining Buddha.",
    price: 3642,
    image: bangkokTemple1,
    slug: "/thailand/bangkok/golden-buddha-marble-temple-bangkok-city-tour",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Ayutthaya Day Tour from Bangkok",
    description: "Full-day UNESCO Ayutthaya temple tour with comfortable road transfers.",
    price: 5922,
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/ayutthaya-day-tour-from-bangkok",
    category: "Temple & Cultural Tours",
  },
  {
    title: "Bangkok City Tour by Chao Phraya River Boat",
    description: "Cruise the Chao Phraya River and explore riverside Bangkok highlights.",
    price: 3570,
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/chao-phraya-river-boat-bangkok-city-tour",
    category: "Temple & Cultural Tours",
  },

  // Dinner Cruises
  {
    title: "Chao Phraya Princess Dinner Cruise (with Private Transfer)",
    description: "Premium dinner cruise on the Chao Phraya River with private hotel transfer.",
    price: 5545,
    image: cruiseNight2,
    slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer",
    category: "Dinner Cruises",
  },
  {
    title: "Chao Phraya Princess Dinner Cruise (Join Transfer)",
    description: "Iconic Bangkok river dinner cruise with shared hotel transfer.",
    price: 4410,
    image: cruiseNight2,
    slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-transfer",
    category: "Dinner Cruises",
  },
  {
    title: "Chao Phraya Princess Dinner Cruise (No Transfer)",
    description: "Indian or international dinner buffet aboard the Chao Phraya Princess.",
    price: 3150,
    image: cruiseNight1,
    slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise",
    category: "Dinner Cruises",
  },
  {
    title: "Chao Phraya Princess Valentine's Dinner Cruise",
    description: "Special Valentine's Day celebration dinner cruise on the Chao Phraya.",
    price: 3150,
    image: cruiseNight1,
    slug: "/thailand/bangkok/chao-phraya-princess-valentine-dinner-cruise",
    category: "Dinner Cruises",
  },
  {
    title: "Viva Alangka Dinner Cruise from Asiatique",
    description: "Romantic dinner cruise on the Viva Alangka with hotel transfer included.",
    price: 4915,
    image: cruiseNight1,
    slug: "/thailand/bangkok/viva-alangka-dinner-cruise",
    category: "Dinner Cruises",
  },
  {
    title: "Ayutthaya Sunset River Cruise from Bangkok",
    description: "Sightseeing day in Ayutthaya capped with a beautiful sunset cruise back.",
    price: 5245,
    image: ayutthayaSunset1,
    slug: "/thailand/bangkok/ayutthaya-sunset-river-cruise",
    category: "Dinner Cruises",
  },

  // Theme Parks & Attractions
  {
    title: "Dream World Bangkok Super Visa Ticket",
    description: "Dream World admission with Super Visa, lunch and round-trip transfer.",
    price: 4285,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/dream-world-bangkok-tickets",
    category: "Theme Parks & Attractions",
  },
  {
    title: "Sea Life Aquarium & Madame Tussauds Combo",
    description: "Two of Bangkok's top family attractions on a single combo ticket.",
    price: 4215,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/sea-life-madame-tussauds-tickets",
    category: "Theme Parks & Attractions",
  },
  {
    title: "Mahanakhon Skywalk Admission Ticket",
    description: "Take in 360° city views from Bangkok's tallest glass-floor observation deck.",
    price: 4536,
    image: bangkokSkywalkHero,
    slug: "/thailand/bangkok/mahanakhon-skywalk-tickets",
    category: "Theme Parks & Attractions",
  },
  {
    title: "Thai Massage & Spa Deals (Health Land Voucher)",
    description: "120-minute traditional Thai massage gift voucher at Health Land.",
    price: 2775,
    image: massageHero,
    slug: "/thailand/bangkok/thai-massage-spa-deals-bangkok",
    category: "Theme Parks & Attractions",
  },

  // Floating Market Tours
  {
    title: "Maeklong Railway & Damnoen Saduak Floating Market",
    description: "Iconic railway market plus the Damnoen Saduak floating market in one tour.",
    price: 3405,
    image: floatingMarket1,
    slug: "/thailand/bangkok/maeklong-floating-market-tour",
    category: "Floating Market Tours",
  },

  // Night Tours & Experiences
  {
    title: "Bangkok Night Tour by Tuk-Tuk",
    description: "Hop on a tuk-tuk and explore Bangkok's temples, markets and street food after dark.",
    price: 5040,
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&auto=format&fit=crop",
    slug: "/thailand/bangkok/tuk-tuk-night-tour-bangkok",
    category: "Night Tours & Experiences",
  },
];

const sectionsOrder: Category[] = [
  "Dinner Cruises",
  "Temple & Cultural Tours",
  "Theme Parks & Attractions",
  "Floating Market Tours",
  "Night Tours & Experiences",
];

const sectionDescriptions: Record<Category, string> = {
  "Dinner Cruises":
    "Glide along the Chao Phraya River with curated dinner cruises featuring live entertainment, Indian and international menus, and stunning Bangkok skyline views.",
  "Temple & Cultural Tours":
    "Discover Bangkok's iconic temples — Wat Arun, Wat Pho, the Grand Palace and Ayutthaya — with guided cultural tours designed for first-time Indian travelers.",
  "Theme Parks & Attractions":
    "Family-friendly Bangkok attractions including Dream World, Sea Life, Madame Tussauds and the Mahanakhon Skywalk.",
  "Floating Market Tours":
    "Experience authentic Thai market culture at Damnoen Saduak and the famous Maeklong Railway Market.",
  "Night Tours & Experiences":
    "See Bangkok come alive after dark with tuk-tuk tours, night markets and street food experiences.",
};

const faqs = [
  {
    question: "What are the best things to do in Bangkok?",
    answer:
      "Top things to do in Bangkok include visiting the Grand Palace and Wat Arun, taking a Chao Phraya River dinner cruise, exploring Damnoen Saduak floating market, enjoying the Mahanakhon Skywalk views, and shopping at Chatuchak weekend market.",
  },
  {
    question: "Is Bangkok good for Indian tourists?",
    answer:
      "Yes — Bangkok is one of the most popular international destinations for Indian travelers. It offers easy visa access, direct flights from major Indian cities, plenty of vegetarian and Indian food options, halal dining, and tour operators experienced with Indian guests.",
  },
  {
    question: "How many days are enough for Bangkok?",
    answer:
      "3 to 4 days is ideal to cover Bangkok's main attractions — temples, a dinner cruise, a floating market day trip and shopping. Add 2 more days if you want to include Ayutthaya or a Pattaya extension.",
  },
  {
    question: "What are the top attractions in Bangkok?",
    answer:
      "Top Bangkok attractions include the Grand Palace, Wat Arun, Wat Pho, Chao Phraya River dinner cruises, Mahanakhon Skywalk, Sea Life Aquarium, Madame Tussauds, Dream World and the Maeklong & Damnoen Saduak markets.",
  },
  {
    question: "Are Bangkok tours worth it?",
    answer:
      "Guided Bangkok tours are highly recommended for first-time visitors. They include hotel transfers, English-speaking guides, skip-the-line entry and bundled meals — making the experience smoother and often cheaper than visiting attractions individually.",
  },
  {
    question: "What is the best time to visit Bangkok?",
    answer:
      "The best time to visit Bangkok is between November and February when the weather is cooler and drier. March to May is hot, while June to October is the rainy season but offers better hotel and tour deals.",
  },
];

const PAGE_PATH = "/thailand/bangkok/things-to-do";
const META_TITLE = "Top Things to Do in Bangkok (2025) | Tours & Activities";
const META_DESC =
  "Discover best things to do in Bangkok including cruises, temples, tours & attractions. Book Bangkok activities online with best prices.";

const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const BangkokThingsToDo = () => {
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
      "Dinner Cruises": [],
      "Temple & Cultural Tours": [],
      "Theme Parks & Attractions": [],
      "Floating Market Tours": [],
      "Night Tours & Experiences": [],
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
    { name: "Bangkok", url: "/thailand/bangkok" },
    { name: "Things to Do", url: PAGE_PATH },
  ];

  const Card = ({ a }: { a: Activity }) => (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={a.image}
          alt={`${a.title} – Bangkok activity`}
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
      <BreadcrumbJsonLd items={breadcrumbItems} id="bangkok-things-to-do-breadcrumb" />
      <FaqJsonLd faqs={faqs} id="bangkok-things-to-do-faq" />

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
              <BreadcrumbLink asChild><Link to="/thailand/bangkok">Bangkok</Link></BreadcrumbLink>
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
          style={{ backgroundImage: `url(${bangkokCity1})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Best Things to Do in Bangkok (2025 Guide for Indian Travelers)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked Bangkok activities, tours and experiences — from iconic
            temple visits and Chao Phraya dinner cruises to floating markets,
            theme parks and vibrant night tours. Book online at the best prices
            with Indian-friendly support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#all-activities">Explore Activities</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/thailand/bangkok/transfers">Bangkok Transfers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro / SEO copy */}
      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold md:text-3xl">Why Bangkok is a Top Pick for Indian Travelers</h2>
          <p>
            Bangkok is one of Asia's most exciting capital cities — a vibrant
            mix of golden temples, rooftop skylines, bustling night markets and
            world-famous street food. Indian travelers love Bangkok for its
            short flight times, easy visa-on-arrival, abundant vegetarian and
            halal-friendly restaurants, and the sheer variety of{" "}
            <strong>things to do in Bangkok</strong> for every kind of traveler.
          </p>
          <p>
            Whether you want to explore the Grand Palace and Wat Arun, take a
            sunset Chao Phraya River dinner cruise, visit the Damnoen Saduak
            floating market, ride a tuk-tuk through Chinatown, or shop at
            Chatuchak — our curated{" "}
            <strong>Bangkok tours and activities</strong> cover everything in
            one place. From family-friendly{" "}
            <strong>Bangkok attractions for Indians</strong> like Dream World
            and Sea Life Aquarium to romantic dinner cruises and adventurous
            day trips to Ayutthaya, you'll find guided experiences with hotel
            transfers, skip-the-line entry and English-speaking support.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {sectionsOrder.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section key={cat} className="container mx-auto px-4 py-8">
            <header className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-bold md:text-3xl">{cat} in Bangkok</h2>
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
            <h2 className="text-2xl font-bold md:text-3xl">All Bangkok Activities</h2>
            <p className="mt-1 text-muted-foreground">
              Browse every Bangkok activity available on Yellodae.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/thailand/bangkok">View Bangkok City Page</Link>
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

      {/* Explore more in Bangkok — internal links */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">Explore More in Bangkok</h2>
          <p className="mt-2 text-muted-foreground">
            Jump to a top category or book one of Bangkok's most popular
            attractions directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Top categories */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Top Bangkok Categories</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <li>
                <Link to="/thailand/bangkok/things-to-do#dinner-cruises" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Dinner Cruises in Bangkok
                </Link>
              </li>
              <li>
                <Link to="/thailand/bangkok/things-to-do#temple-cultural-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Temple & Cultural Tours
                </Link>
              </li>
              <li>
                <Link to="/thailand/bangkok/things-to-do#theme-parks-attractions" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Theme Parks & Attractions
                </Link>
              </li>
              <li>
                <Link to="/thailand/bangkok/things-to-do#floating-market-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Floating Market Tours
                </Link>
              </li>
              <li>
                <Link to="/thailand/bangkok/things-to-do#night-tours-experiences" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Night Tours & Experiences
                </Link>
              </li>
              <li>
                <Link to="/thailand/bangkok/transfers" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">
                  Bangkok Airport & City Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular attractions */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Popular Bangkok Attractions</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: "Grand Palace & Emerald Buddha", to: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
                { label: "Wat Arun & Chinatown Tour", to: "/thailand/bangkok/wat-arun-chinatown-tour" },
                { label: "Three Temples City Tour", to: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer" },
                { label: "Chao Phraya Princess Dinner Cruise", to: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-transfer" },
                { label: "Mahanakhon Skywalk Tickets", to: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
                { label: "Sea Life & Madame Tussauds", to: "/thailand/bangkok/sea-life-madame-tussauds-tickets" },
                { label: "Dream World Bangkok Tickets", to: "/thailand/bangkok/dream-world-bangkok-tickets" },
                { label: "Maeklong Floating Market Tour", to: "/thailand/bangkok/maeklong-floating-market-tour" },
                { label: "Ayutthaya Day Tour from Bangkok", to: "/thailand/bangkok/ayutthaya-day-tour-from-bangkok" },
                { label: "Bangkok Tuk-Tuk Night Tour", to: "/thailand/bangkok/tuk-tuk-night-tour-bangkok" },
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
          <h2 className="text-xl font-semibold">Plan Your Bangkok Trip</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Combine activities with reliable airport and city transfers.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="default">
              <Link to="/thailand/bangkok">Bangkok City Guide</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/thailand/bangkok/transfers">Bangkok Transfers</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/thailand">Thailand Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Bangkok Travel FAQs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to the most common questions Indian travelers ask about
          things to do in Bangkok.
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

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BangkokThingsToDo;
