import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";
import van from "@/assets/chiang-mai-transfer-van-1.jpg";
import CityExploreLinks from "@/components/CityExploreLinks";


const transfers = [
  {
    title: "Chiang Mai Town to Chiang Mai Airport (Mini Van, 3–9 Pax)",
    desc: "Private mini-van transfer from your Chiang Mai hotel to Chiang Mai International Airport (CNX).",
    price: 2600,
    slug: "/thailand/chiang-mai/chiang-mai-town-to-airport-mini-van",
  },
  {
    title: "Chiang Mai Town to Chiang Mai Airport (Sedan, 1–2 Pax)",
    desc: "Comfortable sedan car transfer from your Chiang Mai hotel to Chiang Mai airport.",
    price: 3000,
    slug: "/thailand/chiang-mai/chiang-mai-town-to-airport-sedan",
  },
  {
    title: "Chiang Mai Airport to Chiang Mai Town (Mini Van, 3–9 Pax)",
    desc: "Hassle-free CNX airport pickup with meet & greet, straight to your Chiang Mai hotel.",
    price: 2900,
    slug: "/thailand/chiang-mai/chiang-mai-airport-to-town-mini-van",
  },
  {
    title: "Chiang Mai Airport to Chiang Mai Town (Sedan, 1–2 Pax)",
    desc: "Private sedan CNX airport pickup straight to your Chiang Mai hotel.",
    price: 3000,
    slug: "/thailand/chiang-mai/chiang-mai-airport-to-town-sedan",
  },
];

const ChiangMaiTransfers = () => {
  const { formatPrice } = useCurrency();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Chiang Mai Airport Transfers (CNX)</h1>
        <p className="text-muted-foreground max-w-3xl">
          Private and comfortable transfers between Chiang Mai International Airport (CNX) and your Chiang Mai hotel — choose sedan or mini van.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {transfers.map((t) => (
            <article key={t.slug} className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition">
              <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
                <img src={van} alt={t.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition" />
              </Link>
              <div className="flex flex-col flex-1 gap-3 p-4">
                <h3 className="font-semibold text-base leading-snug line-clamp-2"><Link to={t.slug} className="hover:text-primary">{t.title}</Link></h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{t.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-sm"><span className="text-muted-foreground">From </span><span className="font-bold text-primary">{formatPrice(t.price)}</span></div>
                  <Button asChild size="sm"><Link to={t.slug}>Book Now</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CityExploreLinks city="chiang-mai" />
      <Footer />
    </div>
  );
};

export default ChiangMaiTransfers;
