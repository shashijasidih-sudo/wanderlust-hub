import SafeImage from "@/components/SafeImage";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CardLink {
  title: string;
  href: string;
  image: string;
  external?: boolean;
}


interface Section {
  id: string;
  heading: string;
  description: string;
  cards: CardLink[];
}

import krabiImg from "@/assets/city-krabi.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import kohSamuiImg from "@/assets/koh-samui-beach-1.webp";
import fourIslandImg from "@/assets/krabi-boat-tour-1.webp";
import phiPhiImg from "@/assets/phi-phi-1.jpg";
import hongIslandImg from "@/assets/krabi-island-viewpoint-1.jpg";
import jungleImg from "@/assets/krabi-temple-woman-1.jpg";
import jamesBondImg from "@/assets/james-bond-1.webp";
import singaporeImg from "@/assets/singapore-marina-bay-sands-night-1.webp";
import universalImg from "@/assets/singapore-universal-studios.webp";
import singaporeCityImg from "@/assets/singapore-city-tour.jpg";
import tokyoImg from "@/assets/japan-tokyo-city-1.webp";
import kyotoImg from "@/assets/japan-kyoto-temple-1.webp";
import fujiImg from "@/assets/japan-mount-fuji-1.webp";
import alcazarImg from "@/assets/alcazar-show-1.jpg";
import pattayaDolphinImg from "@/assets/dolphin-show-1.webp";
import bangkokCruiseImg from "@/assets/bangkok-cruise-night-3.webp";
import bangkokSkywalkImg from "@/assets/bangkok-skywalk-1.jpg";
import bangkokTempleImg from "@/assets/bangkok-temple-1.jpg";
import dubaiDesertImg from "@/assets/dubai-desert-couple-1.webp";
import dubaiDhowImg from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiCityImg from "@/assets/dubai-city-night-1.jpg";
import dubaiFountainImg from "@/assets/dubai-fountain-show-1.webp";
import dubaiGlobalVillageImg from "@/assets/dubai-global-village-1.jpg";
import dubaiAquariumImg from "@/assets/dubai-aquarium-fish-1.webp";
import dubaiSkylineImg from "@/assets/dubai-skyline-night-1.jpg";
import chiangRaiImg from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import packWomenSafetyImg from "@/assets/pack-women-safety.webp";
import packAntiTheftBackpackImg from "@/assets/pack-anti-theft-backpack.webp";
import packTravelAirtagImg from "@/assets/pack-travel-airtag.webp";
import packCompressionBagsImg from "@/assets/pack-compression-bags.webp";


const PattayaAdultShowsHome = lazy(() => import("@/components/PattayaAdultShowsHome"));

const sections: Section[] = [
  {
    id: "thailand-travel",
    heading: "Exciting Thailand Guides",
    description:
      "Hand-picked Thailand travel guides from Krabi, Phuket, Koh Samui and Chiang Mai — itineraries, costs in INR and insider tips for Indian travelers.",
    cards: [
      { title: "15 Best Things to Do in Krabi", href: "/thailand/krabi/destination-guides/activity/15-best-things-to-do-in-krabi/", image: krabiImg },
      { title: "25 Best Things to Do in Phuket", href: "/thailand/phuket/destination-guides/activity/25-best-things-to-do-in-phuket-2026/", image: phuketImg },
      { title: "Full Moon Party Guide for Indians", href: "/thailand/koh-samui/destination-guides/activity/full-moon-party-thailand-guide-for-indians/", image: kohSamuiImg },
      { title: "Chiang Mai Tour Guide for Indians", href: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-tour-guide-for-indians/", image: chiangRaiImg },
    ],
  },
  {
    id: "singapore-travel",
    heading: "Trending Singapore Activities & Transfers",
    description:
      "Most-booked Singapore attractions and airport transfers — Universal Studios tickets, Night Safari and fixed-price Changi pickups and drop-offs.",
    cards: [
      { title: "Universal Studios Tickets", href: "/singapore/universal-studios-singapore-tickets-and-transfers/", image: universalImg },
      { title: "Night Safari Guide", href: "/blog/night-safari-singapore-guide/", image: singaporeImg },
      { title: "Changi Airport Pickup", href: "/singapore/singapore-airport-pickup/", image: singaporeCityImg },
      { title: "Changi Airport Drop-off", href: "/singapore/singapore-airport-dropoff/", image: singaporeCityImg },
    ],
  },
  {
    id: "you-must-pack-these",
    heading: "You Must Pack These",
    description:
      "Traveller-tested packing picks — safety essentials, anti-theft backpacks, luggage trackers and compression bags.",
    cards: [
      { title: "Women Safety Essentials", href: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials", image: packWomenSafetyImg, external: true },
      { title: "Best Anti-Theft Backpacks", href: "https://barnip.com/travel-bags/backpacks/anti-theft-backpacks", image: packAntiTheftBackpackImg, external: true },
      { title: "Best Travel Airtags", href: "https://barnip.com/travel-gadgets/smart-travel-gear/airtags", image: packTravelAirtagImg, external: true },
      { title: "Must Have Compression Bags", href: "https://barnip.com/travel-bags/organizers/compression-bags", image: packCompressionBagsImg, external: true },
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
    heading: "Phuket Amazing Travel Activities",
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
    id: "dubai-travel-activities",
    heading: "Dubai Travel Activities",
    description:
      "Book Dubai's most loved experiences — desert safari, dhow cruises, Burj Khalifa views and family attractions with instant confirmation.",
    cards: [
      { title: "Dubai Desert Safari", href: "/dubai/desert-safari/", image: dubaiDesertImg },
      { title: "Dhow Cruise Marina", href: "/dubai/dhow-cruise-marina-upper-deck/", image: dubaiDhowImg },
      { title: "Dubai City Tour + Mall", href: "/dubai/city-tour-mall/", image: dubaiCityImg },
      { title: "Dubai Fountain Show", href: "/dubai/fountain-show/", image: dubaiFountainImg },
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
    id: "airport-transfers",
    heading: "Airport Transfers",
    description:
      "Fixed-price airport pickups and drop-offs with professional drivers — Bangkok, Singapore, Dubai and Phuket.",
    cards: [
      { title: "Bangkok Transfers", href: "/thailand/bangkok-airport-transfers/", image: bangkokSkywalkImg },
      { title: "Singapore Transfers", href: "/singapore/budget-airport-transfers/", image: singaporeCityImg },
      { title: "Dubai Transfers", href: "/dubai/budget-airport-transfers/", image: dubaiSkylineImg },
      { title: "Phuket Transfers", href: "/thailand/phuket-airport-transfers/", image: phuketImg },
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
              {s.cards.map((c) => {
                const inner = (
                  <>
                    <div className="aspect-[4/3] overflow-hidden">
                      <SafeImage
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
                  </>
                );
                const cls =
                  "group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300";
                return c.external ? (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={cls}
                    aria-label={`${s.heading} — ${c.title}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={c.href} to={c.href} className={cls} aria-label={`${s.heading} — ${c.title}`}>
                    {inner}
                  </Link>
                );
              })}

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SeoDestinationSections;
