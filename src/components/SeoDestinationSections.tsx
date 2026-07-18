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
import alcazarImg from "@/assets/alcazar-show-1.jpg";
import bigEyeImg from "@/assets/bigeye-show-pattaya-1.jpg";
import muayThaiImg from "@/assets/muay-thai-1.jpg";
import pattayaNightImg from "@/assets/pattaya-nightlife-1.jpg";
import pattayaDolphinImg from "@/assets/dolphin-show-1.jpg";
import bangkokCruiseImg from "@/assets/bangkok-cruise-night-3.jpg";
import bangkokSkywalkImg from "@/assets/bangkok-skywalk-1.jpg";
import bangkokTempleImg from "@/assets/bangkok-temple-1.jpg";
import dubaiDesertImg from "@/assets/dubai-desert-couple-1.jpg";
import dubaiDhowImg from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiCityImg from "@/assets/dubai-city-night-1.jpg";
import dubaiFountainImg from "@/assets/dubai-fountain-show-1.jpg";
import dubaiGlobalVillageImg from "@/assets/dubai-global-village-1.jpg";
import dubaiAquariumImg from "@/assets/dubai-aquarium-fish-1.jpg";
import dubaiSkylineImg from "@/assets/dubai-skyline-night-1.jpg";
import chiangRaiImg from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";

const sections: Section[] = [
  {
    id: "thailand-travel",
    heading: "Thailand Travel",
    description:
      "Explore Thailand itineraries, island tours, honeymoon packages and budget travel guides curated for Indian travelers.",
    cards: [
      { title: "Krabi Guide", href: "/thailand/krabi/destination-guides/", image: krabiImg },
      { title: "Phuket Guide", href: "/thailand/phuket/destination-guides/", image: phuketImg },
      { title: "Bangkok Guide", href: "/thailand/bangkok/destination-guides/", image: bangkokImg },
      { title: "Koh Samui Guide", href: "/thailand/koh-samui/destination-guides/", image: kohSamuiImg },
    ],
  },
  {
    id: "krabi-activities",
    heading: "Krabi Activities",
    description:
      "Top Krabi tours and activities for Indian travelers — island hopping, Phi Phi day trips, Hong Island and rainforest adventures.",
    cards: [
      { title: "4 Island Tour", href: "/thailand/krabi/krabi-four-island-tour-with-transfer/", image: fourIslandImg },
      { title: "Phi Phi Tour", href: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer/", image: phiPhiImg },
      { title: "Hong Island", href: "/thailand/krabi/hong-island-tour-with-transfer/", image: hongIslandImg },
      { title: "Jungle Tour", href: "/thailand/krabi/krabi-jungle-tour-with-transfer/", image: jungleImg },
    ],
  },
  {
    id: "phuket-tours",
    heading: "Phuket Tours",
    description:
      "Best Phuket tours — Phi Phi speed boat tours, James Bond Island adventures and Phuket city sightseeing for Indian travelers.",
    cards: [
      { title: "Phi Phi from Phuket", href: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer/", image: phiPhiImg },
      { title: "James Bond Island", href: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer/", image: jamesBondImg },
      { title: "Phuket City Guide", href: "/thailand/phuket/destination-guides/", image: phuketImg },
      { title: "Elephant Safari", href: "/thailand/phuket/elephant-safari/", image: jungleImg },
    ],
  },
  {
    id: "singapore-travel",
    heading: "Singapore Travel",
    description:
      "Plan your Singapore trip — curated itineraries, Universal Studios tickets and budget travel guides for Indian families and honeymooners.",
    cards: [
      { title: "Singapore Itinerary", href: "/singapore/destination-guides/", image: singaporeImg },
      { title: "Universal Studios", href: "/singapore/universal-studios-singapore/", image: universalImg },
      { title: "Budget Guide", href: "/blog/singapore-combo-pass/", image: singaporeCityImg },
      { title: "Night Safari", href: "/blog/night-safari-singapore-guide/", image: kohSamuiImg },
    ],
  },
  {
    id: "pattaya-shows",
    heading: "Pattaya Shows & Nightlife",
    description:
      "Book Pattaya's most popular cabaret shows, live entertainment and nightlife tours with private transfers.",
    cards: [
      { title: "Alcazar Cabaret Show", href: "/thailand/pattaya/alcazar-cabaret-show-with-transfer/", image: alcazarImg },
      { title: "Tiffany's 89 Show", href: "/thailand/pattaya/89-show-pattaya-with-transfer/", image: pattayaNightImg },
      { title: "Big Eye 99 Show", href: "/thailand/pattaya/99-show-pattaya-big-eye-with-transfer/", image: bigEyeImg },
      { title: "Muay Thai Live", href: "/thailand/pattaya/muay-thai-boxing-show-pattaya/", image: muayThaiImg },
      { title: "Pattaya Pub Crawl", href: "/thailand/pattaya/pattaya-pub-crawl-night-tour/", image: pattayaNightImg },
      { title: "Pattaya Dolphinarium", href: "/thailand/pattaya/pattaya-dolphinarium-show-tickets/", image: pattayaDolphinImg },
    ],
  },
  {
    id: "phuket-shows-cruises",
    heading: "Phuket Cruises & Shows",
    description:
      "Premium Phi Phi cruises, dolphin encounters and Phuket's iconic evening shows with hotel transfers.",
    cards: [
      { title: "Phi Phi Premium Speedboat", href: "/thailand/phuket/phi-phi-island-premium-speedboat-tour-with-transfer/", image: phiPhiImg },
      { title: "Maya Bay + Khai Speedboat", href: "/thailand/phuket/phi-phi-maya-bay-khai-island-speedboat-tour-with-transfer/", image: phiPhiImg },
      { title: "Dolphin Show Phuket", href: "/thailand/phuket/dolphin-show-phuket-with-transfer/", image: pattayaDolphinImg },
      { title: "Simon Cabaret Show", href: "/thailand/phuket/simon-cabaret-show-with-transfer/", image: alcazarImg },
      { title: "Carnival Magic Show", href: "/thailand/phuket/carnival-magic-show-tickets-with-transfer/", image: alcazarImg },
      { title: "Phi Phi Big Boat Tour", href: "/thailand/phuket/phi-phi-island-big-boat-tour-with-transfer/", image: phiPhiImg },
    ],
  },
  {
    id: "bangkok-cruises",
    heading: "Bangkok Cruises & Attractions",
    description:
      "Chao Phraya dinner cruises, Baiyoke Sky Buffet and iconic Bangkok attractions with easy booking.",
    cards: [
      { title: "Chao Phraya Princess Cruise", href: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-transfer/", image: bangkokCruiseImg },
      { title: "Chao Phraya Private Cruise", href: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer/", image: bangkokCruiseImg },
      { title: "Baiyoke Sky Buffet", href: "/thailand/bangkok/baiyoke-buffet/", image: bangkokSkywalkImg },
      { title: "Sea Life + Madame Tussauds", href: "/thailand/bangkok/sea-life-madame-tussauds-tickets/", image: bangkokTempleImg },
    ],
  },
  {
    id: "dubai-experiences",
    heading: "Dubai Experiences",
    description:
      "Iconic Dubai experiences — Dhow cruises, desert safari and family-favourite attractions with instant confirmation.",
    cards: [
      { title: "Dhow Cruise Marina", href: "/dubai/dhow-cruise-marina-upper-deck/", image: dubaiDhowImg },
      { title: "Dhow Cruise Creek", href: "/dubai/dhow-cruise-creek-upper-deck/", image: dubaiDhowImg },
      { title: "Dubai Miracle Garden", href: "/dubai/miracle-garden/", image: dubaiCityImg },
      { title: "Dubai Fountain Show", href: "/dubai/fountain-show/", image: dubaiFountainImg },
      { title: "Dubai Aquarium & Penguin", href: "/dubai/aquarium-penguin/", image: dubaiAquariumImg },
      { title: "Global Village Dubai", href: "/dubai/global-village/", image: dubaiGlobalVillageImg },
      { title: "Ferrari World Abu Dhabi", href: "/dubai/abu-dhabi-ferrari-world/", image: dubaiDesertImg },
      { title: "Dubai City Tour + Mall", href: "/dubai/city-tour-mall/", image: dubaiCityImg },
    ],
  },
  {
    id: "dubai-airport-transfers",
    heading: "Dubai Airport Transfers by Zone",
    description:
      "Fixed-price Dubai airport pickups and drop-offs across all 5 city zones — book by your hotel area.",
    cards: [
      { title: "Zone 1 Airport Pickup", href: "/dubai/airport-pickup-zone1/", image: dubaiSkylineImg },
      { title: "Zone 1 Airport Drop-off", href: "/dubai/airport-dropoff-zone1/", image: dubaiSkylineImg },
      { title: "Zone 2 Airport Pickup", href: "/dubai/airport-pickup-zone2/", image: dubaiSkylineImg },
      { title: "Zone 2 Airport Drop-off", href: "/dubai/airport-dropoff-zone2/", image: dubaiSkylineImg },
      { title: "Zone 3 Airport Pickup", href: "/dubai/airport-pickup-zone3/", image: dubaiSkylineImg },
      { title: "Zone 3 Airport Drop-off", href: "/dubai/airport-dropoff-zone3/", image: dubaiSkylineImg },
      { title: "Zone 4 Airport Pickup", href: "/dubai/airport-pickup-zone4/", image: dubaiSkylineImg },
      { title: "Zone 4 Airport Drop-off", href: "/dubai/airport-dropoff-zone4/", image: dubaiSkylineImg },
      { title: "Zone 5 Airport Pickup", href: "/dubai/airport-pickup-zone5/", image: dubaiSkylineImg },
      { title: "Zone 5 Airport Drop-off", href: "/dubai/airport-dropoff-zone5/", image: dubaiSkylineImg },
    ],
  },
  {
    id: "krabi-more",
    heading: "More Krabi & Chiang Mai Adventures",
    description:
      "Extra island-hopping variants from Krabi and top day trips from Chiang Mai — perfect for extended stays.",
    cards: [
      { title: "Hong Island Speedboat", href: "/thailand/krabi/hong-island-tour-speedboat-with-transfer/", image: hongIslandImg },
      { title: "Hong Island Longtail", href: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer/", image: hongIslandImg },
      { title: "James Bond Island (Krabi)", href: "/thailand/krabi/james-bond-island/", image: jamesBondImg },
      { title: "Chiang Rai + Golden Triangle", href: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/", image: chiangRaiImg },
    ],
  },
  {
    id: "japan-travel",
    heading: "Japan Travel",
    description:
      "Discover Japan with Yellodae — Tokyo and Osaka itineraries, Mount Fuji day trips and complete Japan budget guides in INR for Indian travelers.",
    cards: [
      { title: "Tokyo Itinerary", href: "/japan/destination-guides/activity/tokyo-city-tour-guide/", image: tokyoImg },
      { title: "Osaka Guide", href: "/japan/destination-guides/activity/kyoto-temple-tour-guide/", image: kyotoImg },
      { title: "Japan Budget Guide", href: "/japan/destination-guides/price-cost/japan-trip-cost-from-india/", image: fujiImg },
      { title: "Mount Fuji Day Tour", href: "/japan/destination-guides/activity/mount-fuji-day-tour-from-tokyo/", image: fujiImg },
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
