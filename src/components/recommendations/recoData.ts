import { DestinationKey } from "./recoUtils";

export interface EssentialArticle {
  slug: string; // used as key/href
  title: string;
  description: string;
  image: string;
}

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;

export const THAILAND_ESSENTIAL: EssentialArticle = {
  slug: "https://barnip.com/packing-lists/by-destination/thailand/thailand-beach-vacation-essentials",
  title: "Thailand Beach Vacation Essentials",
  description: "Everything to pack for island days, boat transfers and humid beach evenings.",
  image: U("photo-1552465011-b4e21bf6e79a"),
};

export const SINGAPORE_ESSENTIAL: EssentialArticle = {
  slug: "https://barnip.com/packing-lists/by-destination/europe/europe-backpacking-essentials",
  title: "City Break Backpacking Essentials",
  description: "A compact packing list for walk-heavy city trips and long attraction days.",
  image: U("photo-1502602898657-3e91760cbb34"),
};

export const DUBAI_ESSENTIAL: EssentialArticle = {
  slug: "https://barnip.com/packing-lists/by-destination/dubai/dubai-summer-essentials",
  title: "Dubai Summer Essentials",
  description: "Beat the desert heat with the right fabrics, sun care and modest-wear picks.",
  image: U("photo-1512453979798-5ea266f8880c"),
};

export const GENERAL_ESSENTIALS: EssentialArticle[] = [
  {
    slug: "https://barnip.com/travel-bags/backpacks/best-backpack-for-international-travel",
    title: "Best Backpack for International Travel",
    description: "Cabin-friendly backpacks that survive airports, transfers and day tours.",
    image: U("photo-1553062407-98eeb64c6a62"),
  },
  {
    slug: "https://barnip.com/airport-essentials/flight-comfort/long-haul-flight-essentials",
    title: "Long-Haul Flight Essentials",
    description: "Sleep, comfort and hydration kit for overnight international flights.",
    image: U("photo-1436491865332-7a61a109cc05"),
  },
  {
    slug: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials",
    title: "Women Travel Safety Essentials",
    description: "Practical safety gear and habits for solo and group women travellers.",
    image: U("photo-1488646953014-85cb44e25828"),
  },
  {
    slug: "https://barnip.com/packing-lists/by-traveler/women-travelers/best-bags-for-women-travelers",
    title: "Best Bags for Women Travellers",
    description: "Anti-theft crossbody bags and day packs that still look good in photos.",
    image: U("photo-1547949003-9792a18a2601"),
  },
  {
    slug: "https://barnip.com/packing-lists/by-traveler/men-travelers/packing-list-for-men",
    title: "Packing List for Men",
    description: "A no-nonsense checklist that fits a week of travel into one cabin bag.",
    image: U("photo-1553531384-cc64ac80f931"),
  },
  {
    slug: "https://barnip.com/packing-lists/by-trip-type/solo-travel-packing-list",
    title: "Solo Travel Packing List",
    description: "Travel light and stay self-sufficient on your first solo international trip.",
    image: U("photo-1469854523086-cc02fe5d8800"),
  },
  {
    slug: "https://barnip.com/travel-gadgets/entertainment/travel-games",
    title: "Best Travel Games",
    description: "Compact games that make long transfers and airport waits fly by.",
    image: U("photo-1606092195730-5d7b9af1efc5"),
  },
];

export const DESTINATION_ESSENTIAL: Partial<Record<DestinationKey, EssentialArticle>> = {
  bangkok: THAILAND_ESSENTIAL,
  pattaya: THAILAND_ESSENTIAL,
  phuket: THAILAND_ESSENTIAL,
  krabi: THAILAND_ESSENTIAL,
  singapore: SINGAPORE_ESSENTIAL,
  dubai: DUBAI_ESSENTIAL,
};

export interface AddOnProduct {
  slug: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  badge: string;
}

/** Destination-aware trip add-ons, ordered by recommendation priority. */
export const ADD_ONS: Partial<Record<DestinationKey, AddOnProduct[]>> = {
  bangkok: [
    {
      slug: "/thailand/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer/",
      title: "Suvarnabhumi Airport Pickup",
      description: "Private meet & greet transfer from BKK airport to your Bangkok hotel.",
      image: U("photo-1436491865332-7a61a109cc05"),
      price: 2700,
      badge: "Airport Transfer",
    },
    {
      slug: "/thailand/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer/",
      title: "Hotel to BKK Airport Drop",
      description: "Punctual departure transfer so you never miss your flight home.",
      image: U("photo-1521737604893-d14cc237f11d"),
      price: 2700,
      badge: "Airport Drop",
    },
    {
      slug: "/thailand/esim-ais/",
      title: "Thailand AIS Travel eSIM",
      description: "Stay online the moment you land — instant QR activation, no SIM swap.",
      image: U("photo-1512941937669-90a1b58e7e9c"),
      badge: "eSIM",
    },
    {
      slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise/",
      title: "Chao Phraya Dinner Cruise",
      description: "Premium river cruise with buffet and live music — a perfect final night.",
      image: U("photo-1508009603885-50cf7c579365"),
      price: 3150,
      badge: "Premium Experience",
    },
  ],
  pattaya: [
    {
      slug: "/thailand/bangkok/suvarnabhumi-airport-to-pattaya-hotel-transfer/",
      title: "BKK Airport to Pattaya Transfer",
      description: "Private airport pickup straight to your Pattaya hotel, 24/7.",
      image: U("photo-1436491865332-7a61a109cc05"),
      price: 3800,
      badge: "Airport Transfer",
    },
    {
      slug: "/thailand/pattaya/pattaya-hotel-to-suvarnabhumi-airport-transfer/",
      title: "Pattaya to BKK Airport Drop",
      description: "Comfortable departure transfer with luggage assistance.",
      image: U("photo-1521737604893-d14cc237f11d"),
      price: 3800,
      badge: "Airport Drop",
    },
    {
      slug: "/thailand/esim-ais/",
      title: "Thailand AIS Travel eSIM",
      description: "Instant data on arrival — maps, WhatsApp and Grab without roaming bills.",
      image: U("photo-1512941937669-90a1b58e7e9c"),
      badge: "eSIM",
    },
    {
      slug: "/thailand/pattaya/alcazar-cabaret-show-with-transfer/",
      title: "Alcazar Cabaret Show with Transfer",
      description: "Pattaya's most famous cabaret — premium seating available.",
      image: U("photo-1514533212735-5df27d970db0"),
      badge: "Premium Experience",
    },
  ],
  phuket: [
    {
      slug: "/thailand/phuket/phuket-airport-to-phuket-hotel-transfer/",
      title: "Phuket Airport Pickup",
      description: "Private transfer from HKT airport to Patong, Karon or Kata hotels.",
      image: U("photo-1436491865332-7a61a109cc05"),
      price: 1800,
      badge: "Airport Transfer",
    },
    {
      slug: "/thailand/phuket/phuket-hotel-to-phuket-airport-transfer/",
      title: "Phuket Hotel to Airport Drop",
      description: "Timed departure transfer with meet & greet and luggage help.",
      image: U("photo-1521737604893-d14cc237f11d"),
      price: 1800,
      badge: "Airport Drop",
    },
    {
      slug: "/thailand/esim-ais/",
      title: "Thailand AIS Travel eSIM",
      description: "Data from touchdown — ideal for island-hopping and boat pickups.",
      image: U("photo-1512941937669-90a1b58e7e9c"),
      badge: "eSIM",
    },
    {
      slug: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer/",
      title: "Phi Phi Island Day Tour",
      description: "Maya Bay, snorkelling and lunch — Phuket's signature day out.",
      image: U("photo-1552465011-b4e21bf6e79a"),
      badge: "Premium Experience",
    },
  ],
  krabi: [
    {
      slug: "/thailand/krabi/krabi-airport-to-ao-nang-hotel-transfer/",
      title: "Krabi Airport to Ao Nang Transfer",
      description: "Private airport transfer to Ao Nang, Railay pier or Krabi town.",
      image: U("photo-1436491865332-7a61a109cc05"),
      price: 1700,
      badge: "Airport Transfer",
    },
    {
      slug: "/thailand/krabi/krabi-hotel-to-krabi-airport-transfer/",
      title: "Krabi Hotel to Airport Drop",
      description: "On-time departure transfer for early and late flights.",
      image: U("photo-1521737604893-d14cc237f11d"),
      price: 1700,
      badge: "Airport Drop",
    },
    {
      slug: "/thailand/esim-ais/",
      title: "Thailand AIS Travel eSIM",
      description: "Stay connected across Krabi's islands and viewpoints.",
      image: U("photo-1512941937669-90a1b58e7e9c"),
      badge: "eSIM",
    },
    {
      slug: "/thailand/krabi/hong-island-tour-speedboat-with-transfer/",
      title: "Hong Island Speedboat Tour",
      description: "Emerald lagoons and white-sand beaches on a private-style speedboat.",
      image: U("photo-1537956965359-7573183d1f57"),
      badge: "Premium Experience",
    },
  ],
  singapore: [
    {
      slug: "/singapore/singapore-airport-pickup/",
      title: "Singapore Airport Pickup",
      description: "Changi arrivals meet & greet with name board and private vehicle.",
      image: U("photo-1436491865332-7a61a109cc05"),
      badge: "Airport Pickup",
    },
    {
      slug: "/singapore/singapore-airport-dropoff/",
      title: "Singapore Airport Drop-off",
      description: "Private hotel-to-Changi transfer timed to your departure.",
      image: U("photo-1521737604893-d14cc237f11d"),
      badge: "Airport Transfer",
    },
    {
      slug: "/singapore/universal-studios-singapore-tickets-and-transfers/",
      title: "Universal Studios Tickets & Transfers",
      description: "Skip the queue with tickets plus optional hotel transfers.",
      image: U("photo-1560347876-aeef00ee58a1"),
      badge: "Premium Experience",
    },
    {
      slug: "/singapore/gardens-by-the-bay-tickets-and-transfers/",
      title: "Gardens by the Bay Tickets",
      description: "Cloud Forest and Flower Dome entry with easy transfer add-on.",
      image: U("photo-1508964942454-1a56651d54ac"),
      badge: "Premium Experience",
    },
  ],
};
