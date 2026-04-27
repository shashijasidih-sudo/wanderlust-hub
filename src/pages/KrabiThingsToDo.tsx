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

import krabiCity from "@/assets/city-krabi.jpg";
import krabiTourBoat from "@/assets/krabi-tour-boat-1.jpg";
import krabiSailboat from "@/assets/krabi-sailboat-1.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";
import krabiIslandView from "@/assets/krabi-island-viewpoint-1.jpg";
import krabiLongtailBoats from "@/assets/krabi-longtail-boats-1.jpg";
import krabiBeachWoman from "@/assets/krabi-beach-woman-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";
import krabiBoatTour from "@/assets/krabi-boat-tour-1.jpg";
import krabiTempleWoman from "@/assets/krabi-temple-woman-1.jpg";

type Category =
  | "4 Islands & Day Tours"
  | "Hong Islands Tours"
  | "7 Islands Sunset Tours"
  | "Phi Phi & James Bond from Krabi"
  | "Nature & Adventure";

interface Activity {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category: Category;
}

const activities: Activity[] = [
  // 4 Islands & Day Tours
  {
    title: "4 Islands Tour by Longtail Boat (No National Park Fee)",
    description: "Visit Krabi's famous 4 islands with snorkeling, lunch and longtail boat — without national park fees.",
    price: 2415,
    image: krabiLongtailBoats,
    slug: "/thailand/krabi/4-island-tour-longtail-boat-no-park-fee-with-transfer",
    category: "4 Islands & Day Tours",
  },
  {
    title: "4 Islands Tour by Longtail Boat with Transfer",
    description: "Krabi's iconic 4 islands tour with longtail boat, lunch, snorkeling and round-trip transfer.",
    price: 4589,
    image: krabiKayaks,
    slug: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer",
    category: "4 Islands & Day Tours",
  },
  {
    title: "4 Islands Tour by Speedboat with Transfer",
    description: "Faster speedboat version of the famous 4 islands Krabi tour with lunch and transfer.",
    price: 4589,
    image: krabiTourBoat,
    slug: "/thailand/krabi/4-island-tour-speedboat-with-transfer",
    category: "4 Islands & Day Tours",
  },

  // Hong Islands Tours
  {
    title: "Hong Island Tour by Longtail Boat with Transfer",
    description: "Discover Hong Island's hidden lagoon and pristine beaches by longtail boat with lunch and transfer.",
    price: 3381,
    image: krabiIslandView,
    slug: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer",
    category: "Hong Islands Tours",
  },
  {
    title: "Hong Island Tour by Speedboat with Transfer",
    description: "Speedboat version of the Hong Island tour — see more in less time with lunch and transfer.",
    price: 4347,
    image: krabiSpeedboat,
    slug: "/thailand/krabi/hong-island-tour-speedboat-with-transfer",
    category: "Hong Islands Tours",
  },

  // 7 Islands Sunset Tours
  {
    title: "7 Islands Sunset Tour with BBQ by Longtail Boat",
    description: "Romantic 7 islands sunset tour with snorkeling, BBQ dinner and plankton viewing.",
    price: 3743,
    image: krabiSailboat,
    slug: "/thailand/krabi/7-islands-tour-longtail-boat-with-transfer",
    category: "7 Islands Sunset Tours",
  },
  {
    title: "7 Islands Sunset Tour with BBQ by Speedboat",
    description: "Speedboat 7 islands sunset experience with BBQ dinner, snorkeling and transfer.",
    price: 4830,
    image: krabiBoatTour,
    slug: "/thailand/krabi/7-islands-tour-speedboat-with-transfer",
    category: "7 Islands Sunset Tours",
  },

  // Phi Phi & James Bond from Krabi
  {
    title: "Phi Phi Island Tour from Krabi by Speedboat",
    description: "Day-trip to Phi Phi Island from Krabi by speedboat with lunch, snorkeling and transfer.",
    price: 4830,
    image: krabiBeachWoman,
    slug: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer",
    category: "Phi Phi & James Bond from Krabi",
  },
  {
    title: "James Bond Island (Phang Nga Bay) Tour from Krabi",
    description: "Visit James Bond Island and Phang Nga Bay from Krabi by longtail boat with lunch.",
    price: 4951,
    image: krabiLongtailBoats,
    slug: "/thailand/krabi/james-bond-island",
    category: "Phi Phi & James Bond from Krabi",
  },

  // Nature & Adventure
  {
    title: "Emerald Pool, Hot Springs & Tiger Cave Temple Tour",
    description: "Full-day tour of Krabi's Emerald Pool, natural hot springs and the Tiger Cave Temple with lunch.",
    price: 3140,
    image: krabiTempleWoman,
    slug: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer",
    category: "Nature & Adventure",
  },
];

const sectionsOrder: Category[] = [
  "4 Islands & Day Tours",
  "Hong Islands Tours",
  "7 Islands Sunset Tours",
  "Phi Phi & James Bond from Krabi",
  "Nature & Adventure",
];

const sectionDescriptions: Record<Category, string> = {
  "4 Islands & Day Tours":
    "Krabi's most popular tour — visit 4 stunning islands with snorkeling, lunch and a relaxing beach day.",
  "Hong Islands Tours":
    "Discover the hidden lagoon and emerald waters of Hong Island by longtail boat or speedboat.",
  "7 Islands Sunset Tours":
    "Romantic 7 islands sunset tours with BBQ dinner, snorkeling and the magical glow of plankton.",
  "Phi Phi & James Bond from Krabi":
    "Day-trips to Phi Phi Island and James Bond Island (Phang Nga Bay) departing directly from Krabi.",
  "Nature & Adventure":
    "Inland Krabi adventures — Emerald Pool, natural hot springs and the iconic Tiger Cave Temple.",
};

const faqs = [
  {
    question: "What are the best things to do in Krabi?",
    answer:
      "Top things to do in Krabi include the famous 4 Islands tour, Hong Island day-trip, 7 Islands sunset BBQ tour, Phi Phi Island from Krabi and the Emerald Pool + Hot Springs + Tiger Cave Temple tour.",
  },
  {
    question: "Is Krabi good for Indian tourists?",
    answer:
      "Yes — Krabi is increasingly popular with Indian travelers for its laid-back beaches, stunning islands and quieter atmosphere compared to Phuket. Most tours include Indian-friendly meal options and English-speaking guides.",
  },
  {
    question: "How many days are enough for Krabi?",
    answer:
      "2 to 3 days is ideal for Krabi — one day for the 4 Islands tour, one for Hong Island or 7 Islands sunset, and one for the inland Emerald Pool + Tiger Cave temple tour.",
  },
  {
    question: "What are the top attractions in Krabi?",
    answer:
      "Top Krabi attractions include the 4 Islands (Poda, Chicken, Tup, Phra Nang), Hong Island, Railay Beach, Phi Phi Islands, James Bond Island, Emerald Pool, hot springs and the Tiger Cave Temple.",
  },
  {
    question: "Are Krabi tours worth it?",
    answer:
      "Guided Krabi tours are highly recommended — they include hotel transfers, lunch, snorkeling equipment, English-speaking guides and national park fees, making the experience smoother and often cheaper than booking individually.",
  },
  {
    question: "What is the best time to visit Krabi?",
    answer:
      "The best time to visit Krabi is between November and April when the weather is dry with calm seas — ideal for island tours. May to October is the monsoon season with fewer crowds and better hotel deals.",
  },
];

const PAGE_PATH = "/thailand/krabi/things-to-do";
const META_TITLE = "Top Things to Do in Krabi (2025) | Tours & Activities";
const META_DESC =
  "Discover best things to do in Krabi including 4 Islands tour, Hong Island, 7 Islands sunset BBQ, Phi Phi & Emerald Pool. Book Krabi activities online.";

const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const KrabiThingsToDo = () => {
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
      "4 Islands & Day Tours": [],
      "Hong Islands Tours": [],
      "7 Islands Sunset Tours": [],
      "Phi Phi & James Bond from Krabi": [],
      "Nature & Adventure": [],
    };
    activities.forEach((a) => map[a.category].push(a));
    Object.values(map).forEach((arr) => arr.sort((a, b) => a.price - b.price));
    return map;
  }, []);

  const allSorted = useMemo(() => [...activities].sort((a, b) => a.price - b.price), []);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Thailand", url: "/thailand" },
    { name: "Krabi", url: "/thailand/krabi" },
    { name: "Things to Do", url: PAGE_PATH },
  ];

  const Card = ({ a }: { a: Activity }) => (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img src={a.image} alt={`${a.title} – Krabi activity`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
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
      <BreadcrumbJsonLd items={breadcrumbItems} id="krabi-things-to-do-breadcrumb" />
      <FaqJsonLd faqs={faqs} id="krabi-things-to-do-faq" />

      <Header />

      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand">Thailand</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand/krabi">Krabi</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Things to Do</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${krabiCity})` }} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Best Things to Do in Krabi (2025 Guide for Indian Travelers)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked Krabi tours and activities — 4 Islands and Hong Island
            day-trips, 7 Islands sunset BBQ, Phi Phi from Krabi, James Bond
            Island and the Emerald Pool + Tiger Cave temple tour. Book online
            with Indian-friendly support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#all-activities">Explore Activities</a></Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/thailand/krabi/budget-airport-transfers">Krabi Transfers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold md:text-3xl">Why Krabi is a Top Pick for Indian Travelers</h2>
          <p>
            Krabi is southern Thailand's most picturesque coastal province —
            home to the iconic Railay Beach, Phi Phi Islands, Hong Island and
            stunning limestone cliffs. Indian travelers love Krabi for its
            quieter beaches, world-class island tours and easy combination with
            Phuket. With Indian-friendly meal options, English-speaking guides
            and curated experiences, you'll find plenty of{" "}
            <strong>things to do in Krabi</strong> for every kind of traveler.
          </p>
          <p>
            Whether you want a 4 Islands longtail boat tour, a Hong Island
            speedboat day-trip, a 7 Islands sunset BBQ or an inland adventure
            to the Emerald Pool and Tiger Cave Temple — our curated{" "}
            <strong>Krabi tours and activities</strong> include hotel
            transfers, lunch, snorkeling equipment and English-speaking
            support.
          </p>
        </div>
      </section>

      {sectionsOrder.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section key={cat} id={cat.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="container mx-auto px-4 py-8 scroll-mt-20">
            <header className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-bold md:text-3xl">{cat} in Krabi</h2>
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
            <h2 className="text-2xl font-bold md:text-3xl">All Krabi Activities</h2>
            <p className="mt-1 text-muted-foreground">Browse every Krabi activity available on Yellodae.</p>
          </div>
          <Button variant="outline" asChild><Link to="/thailand/krabi">View Krabi City Page</Link></Button>
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

      {/* You may not want to miss this — Krabi Transfers */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">You May Not Want to Miss This</h2>
          <p className="mt-2 text-muted-foreground">
            Reliable Krabi airport and intercity transfers to pair with your activities — pre-book and skip the taxi queue.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Krabi Airport (KBV) to Ao Nang Hotel Transfer", desc: "Private air-conditioned transfer from KBV airport to your Ao Nang hotel.", price: 1500, img: krabiBoatTour, slug: "/thailand/krabi/krabi-airport-to-ao-nang-hotel-transfer" },
            { title: "Krabi Hotel to Krabi Airport (KBV) Transfer", desc: "Punctual hotel-to-airport transfer so you never miss your flight.", price: 1500, img: krabiTourBoat, slug: "/thailand/krabi/krabi-hotel-to-krabi-airport-transfer" },
            { title: "Krabi Hotel to Phuket Hotel Transfer", desc: "Private direct transfer from Krabi to Phuket for a smooth multi-city trip.", price: 5800, img: krabiSpeedboat, slug: "/thailand/krabi/krabi-hotel-to-phuket-hotel-transfer" },
            { title: "Krabi Airport to Phuket Hotel Transfer", desc: "Direct transfer from Krabi airport to your Phuket hotel — convenient and stress-free.", price: 6500, img: krabiSailboat, slug: "/thailand/krabi/krabi-airport-to-phuket-hotel-transfer" },
          ].map((t) => (
            <article key={t.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
                <img src={t.img} alt={`${t.title} – Krabi transfer`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
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

      {/* Explore More in Krabi */}
      <section className="container mx-auto px-4 py-10">
        <header className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">Explore More in Krabi</h2>
          <p className="mt-2 text-muted-foreground">
            Jump to a top category or book one of Krabi's most popular tours directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Top Krabi Categories</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <li><Link to="/thailand/krabi/things-to-do#4-islands-day-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">4 Islands & Day Tours</Link></li>
              <li><Link to="/thailand/krabi/things-to-do#hong-islands-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Hong Islands Tours</Link></li>
              <li><Link to="/thailand/krabi/things-to-do#7-islands-sunset-tours" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">7 Islands Sunset Tours</Link></li>
              <li><Link to="/thailand/krabi/things-to-do#phi-phi-james-bond-from-krabi" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Phi Phi & James Bond Tours</Link></li>
              <li><Link to="/thailand/krabi/things-to-do#nature-adventure" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Nature & Adventure</Link></li>
              <li><Link to="/thailand/krabi/budget-airport-transfers" className="block rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary hover:text-primary">Krabi Airport & City Transfers</Link></li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Popular Krabi Tours</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: "4 Islands Longtail (No Park Fee)", to: "/thailand/krabi/4-island-tour-longtail-boat-no-park-fee-with-transfer" },
                { label: "4 Islands Longtail Boat Tour", to: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer" },
                { label: "4 Islands Speedboat Tour", to: "/thailand/krabi/4-island-tour-speedboat-with-transfer" },
                { label: "Hong Island Longtail Tour", to: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer" },
                { label: "Hong Island Speedboat Tour", to: "/thailand/krabi/hong-island-tour-speedboat-with-transfer" },
                { label: "7 Islands Sunset BBQ Longtail", to: "/thailand/krabi/7-islands-tour-longtail-boat-with-transfer" },
                { label: "7 Islands Sunset BBQ Speedboat", to: "/thailand/krabi/7-islands-tour-speedboat-with-transfer" },
                { label: "Phi Phi Island from Krabi", to: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer" },
                { label: "James Bond Island from Krabi", to: "/thailand/krabi/james-bond-island" },
                { label: "Emerald Pool + Tiger Cave Temple", to: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer" },
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
          <h2 className="text-xl font-semibold">Plan Your Krabi Trip</h2>
          <p className="mt-1 text-sm text-muted-foreground">Combine activities with reliable airport and city transfers.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="default"><Link to="/thailand/krabi">Krabi City Guide</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand/krabi/budget-airport-transfers">Krabi Transfers</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand/phuket/things-to-do">Things to Do in Phuket</Link></Button>
            <Button asChild variant="outline"><Link to="/thailand">Thailand Destinations</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Krabi Travel FAQs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to the most common questions Indian travelers ask about things to do in Krabi.
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

export default KrabiThingsToDo;
