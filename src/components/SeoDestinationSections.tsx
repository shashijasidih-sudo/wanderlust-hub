import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CardLink {
  title: string;
  href: string;
  image: string;
}

interface Section {
  id: string;
  heading: string;
  description: string;
  cards: CardLink[];
}

import krabiImg from "@/assets/city-krabi.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import bangkokImg from "@/assets/bangkok-city-1.jpg";
import kohSamuiImg from "@/assets/koh-samui-beach-1.jpg";
import fourIslandImg from "@/assets/krabi-boat-tour-1.jpg";
import phiPhiImg from "@/assets/phi-phi-1.jpg";
import hongIslandImg from "@/assets/krabi-island-viewpoint-1.jpg";
import jungleImg from "@/assets/krabi-temple-woman-1.jpg";
import jamesBondImg from "@/assets/james-bond-1.jpg";
import singaporeImg from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import universalImg from "@/assets/singapore-universal-studios.jpg";
import singaporeCityImg from "@/assets/singapore-city-tour.jpg";
import tokyoImg from "@/assets/japan-tokyo-city-1.jpg";
import kyotoImg from "@/assets/japan-kyoto-temple-1.jpg";
import fujiImg from "@/assets/japan-mount-fuji-1.jpg";

const sections: Section[] = [
  {
    id: "thailand-travel",
    heading: "Thailand Travel",
    description:
      "Explore Thailand itineraries, island tours, honeymoon packages and budget travel guides curated for Indian travelers.",
    cards: [
      { title: "Krabi Guide", href: "/thailand/krabi/destination-guides", image: krabiImg },
      { title: "Phuket Guide", href: "/thailand/phuket/destination-guides", image: phuketImg },
      { title: "Bangkok Guide", href: "/thailand/bangkok/destination-guides", image: bangkokImg },
      { title: "Koh Samui Guide", href: "/thailand/koh-samui/destination-guides", image: kohSamuiImg },
    ],
  },
  {
    id: "krabi-activities",
    heading: "Krabi Activities",
    description:
      "Top Krabi tours and activities for Indian travelers — island hopping, Phi Phi day trips, Hong Island and rainforest adventures.",
    cards: [
      { title: "4 Island Tour", href: "/thailand/krabi/krabi-four-island-tour-with-transfer", image: fourIslandImg },
      { title: "Phi Phi Tour", href: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer", image: phiPhiImg },
      { title: "Hong Island", href: "/thailand/krabi/hong-island-tour-with-transfer", image: hongIslandImg },
      { title: "Jungle Tour", href: "/thailand/krabi/krabi-jungle-tour-with-transfer", image: jungleImg },
    ],
  },
  {
    id: "phuket-tours",
    heading: "Phuket Tours",
    description:
      "Best Phuket tours — Phi Phi speed boat tours, James Bond Island adventures and Phuket city sightseeing for Indian travelers.",
    cards: [
      { title: "Phi Phi from Phuket", href: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer", image: phiPhiImg },
      { title: "James Bond Island", href: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer", image: jamesBondImg },
      { title: "Phuket City Guide", href: "/thailand/phuket/destination-guides", image: phuketImg },
      { title: "Elephant Safari", href: "/thailand/phuket/elephant-safari", image: jungleImg },
    ],
  },
  {
    id: "singapore-travel",
    heading: "Singapore Travel",
    description:
      "Plan your Singapore trip — curated itineraries, Universal Studios tickets and budget travel guides for Indian families and honeymooners.",
    cards: [
      { title: "Singapore Itinerary", href: "/singapore/destination-guides", image: singaporeImg },
      { title: "Universal Studios", href: "/singapore/universal-studios-singapore", image: universalImg },
      { title: "Budget Guide", href: "/blog/singapore-combo-pass", image: singaporeCityImg },
      { title: "Night Safari", href: "/blog/night-safari-singapore-guide", image: kohSamuiImg },
    ],
  },
  {
    id: "japan-travel",
    heading: "Japan Travel",
    description:
      "Discover Japan with Yellodae — Tokyo and Osaka itineraries, Mount Fuji day trips and complete Japan budget guides in INR for Indian travelers.",
    cards: [
      { title: "Tokyo Itinerary", href: "/japan/destination-guides/activity/tokyo-city-tour-guide", image: tokyoImg },
      { title: "Osaka Guide", href: "/japan/destination-guides/activity/kyoto-temple-tour-guide", image: kyotoImg },
      { title: "Japan Budget Guide", href: "/japan/destination-guides/price-cost/japan-trip-cost-from-india", image: fujiImg },
      { title: "Mount Fuji Day Tour", href: "/japan/destination-guides/activity/mount-fuji-day-tour-from-tokyo", image: fujiImg },
    ],
  },
];

const SeoDestinationSections = () => {
  return (
    <section className="py-10 md:py-14 bg-background" aria-label="Featured destinations for Indian travelers">
      <div className="container px-4 md:px-6 space-y-12">
        {sections.map((s) => (
          <article key={s.id} id={s.id}>
            <header className="mb-6 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{s.heading}</h2>
              <p className="text-muted-foreground text-base md:text-lg">{s.description}</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {s.cards.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  aria-label={`${s.heading} — ${c.title}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={`${c.title} - ${s.heading}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-white font-semibold text-sm md:text-base">{c.title}</h3>
                      <ArrowRight className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SeoDestinationSections;
