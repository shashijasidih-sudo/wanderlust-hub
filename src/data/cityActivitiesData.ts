export interface RecommendedActivity {
  title: string;
  desc: string;
  price: number;
  img: string;
  slug: string;
}

export const cityActivities: Record<string, RecommendedActivity[]> = {
  bangkok: [
    {
      title: "Chao Phraya Princess Dinner Cruise",
      desc: "Iconic Bangkok river dinner cruise with live music, Indian & international buffet.",
      price: 3150,
      img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop",
      slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise",
    },
    {
      title: "Three Temples Bangkok City Tour with Transfer",
      desc: "Private guided tour of Wat Arun, Wat Pho and Wat Traimit with hotel transfers.",
      price: 4915,
      img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&auto=format&fit=crop",
      slug: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer",
    },
    {
      title: "Maeklong Railway & Damnoen Saduak Floating Market",
      desc: "Iconic railway market plus the Damnoen Saduak floating market in one day.",
      price: 3405,
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop",
      slug: "/thailand/bangkok/maeklong-floating-market-tour",
    },
    {
      title: "Mahanakhon Skywalk Admission Ticket",
      desc: "360° Bangkok views from the city's tallest glass-floor observation deck.",
      price: 4536,
      img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop",
      slug: "/thailand/bangkok/mahanakhon-skywalk-tickets",
    },
  ],
  pattaya: [
    {
      title: "Coral Island Tour by Speedboat from Pattaya",
      desc: "Day-trip to Koh Larn with snorkeling, lunch and round-trip transfer.",
      price: 2415,
      img: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&auto=format&fit=crop",
      slug: "/thailand/pattaya/coral-island-pattaya-tour",
    },
    {
      title: "Nong Nooch Tropical Garden with Transfer",
      desc: "Visit Pattaya's iconic gardens with cultural show and elephant performances.",
      price: 2295,
      img: "https://images.unsplash.com/photo-1545569310-12d97d3ff5ee?w=800&auto=format&fit=crop",
      slug: "/thailand/pattaya/nong-nooch-tropical-garden-tour",
    },
    {
      title: "Pattaya Floating Market Tour with Transfer",
      desc: "Pattaya's famous 4-region floating market with shopping and street food.",
      price: 1995,
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop",
      slug: "/thailand/pattaya/pattaya-floating-market-tour",
    },
    {
      title: "Alcazar Cabaret Show Pattaya Tickets",
      desc: "Pattaya's most famous transgender cabaret show — colourful, world-class entertainment.",
      price: 1380,
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop",
      slug: "/thailand/pattaya/alcazar-cabaret-show-pattaya",
    },
  ],
  phuket: [
    {
      title: "Phi Phi Islands Tour by Speedboat from Phuket",
      desc: "Maya Bay, Pileh Lagoon and Monkey Beach with snorkeling, lunch & transfer.",
      price: 3450,
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop",
      slug: "/thailand/phuket/phi-phi-island-tour-by-speedboat-with-transfer",
    },
    {
      title: "James Bond Island Tour with Sea Canoe",
      desc: "Phang Nga Bay with sea canoeing, James Bond Island and Thai lunch.",
      price: 4140,
      img: "https://images.unsplash.com/photo-1518631046bcb1c-9b3c1c4ee69e?w=800&auto=format&fit=crop",
      slug: "/thailand/phuket/james-bond-island-with-sea-canoe-tour-with-transfer",
    },
    {
      title: "Simon Cabaret Show Phuket with Transfer",
      desc: "Phuket's iconic transgender cabaret show with hotel pickup and drop.",
      price: 1725,
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop",
      slug: "/thailand/phuket/simon-cabaret-show-with-transfer",
    },
    {
      title: "Phuket City Night Market Tour with Transfer",
      desc: "Old Phuket Town walking tour, viewpoints and the famous weekend night market.",
      price: 2070,
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop",
      slug: "/thailand/phuket/phuket-city-night-market-tour-with-transfer",
    },
  ],
  krabi: [
    {
      title: "4 Islands Tour by Longtail Boat with Transfer",
      desc: "Krabi's iconic 4 islands tour with longtail boat, lunch, snorkeling & transfer.",
      price: 4589,
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop",
      slug: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer",
    },
    {
      title: "Hong Island Tour by Speedboat with Transfer",
      desc: "Hong Island's hidden lagoon by speedboat — lunch and transfer included.",
      price: 4347,
      img: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&auto=format&fit=crop",
      slug: "/thailand/krabi/hong-island-tour-speedboat-with-transfer",
    },
    {
      title: "Phi Phi Island Tour from Krabi by Speedboat",
      desc: "Day-trip from Krabi to Phi Phi Island with lunch, snorkeling and transfer.",
      price: 4830,
      img: "https://images.unsplash.com/photo-1518631046bcb1c-9b3c1c4ee69e?w=800&auto=format&fit=crop",
      slug: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer",
    },
    {
      title: "Emerald Pool, Hot Springs & Tiger Cave Temple",
      desc: "Full-day inland Krabi tour — Emerald Pool, hot springs and Tiger Cave Temple.",
      price: 3140,
      img: "https://images.unsplash.com/photo-1545569310-12d97d3ff5ee?w=800&auto=format&fit=crop",
      slug: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer",
    },
  ],
  singapore: [
    {
      title: "Universal Studios Singapore Weekday Tickets",
      desc: "7 themed zones at USS — Hollywood blockbuster movies come to life.",
      price: 6762,
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop",
      slug: "/singapore/universal-studios-singapore-weekday-tickets",
    },
    {
      title: "Gardens by the Bay Tickets and Transfers",
      desc: "Cloud Forest and Flower Dome at Singapore's iconic futuristic garden.",
      price: 2660,
      img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop",
      slug: "/singapore/gardens-by-the-bay-tickets-and-transfers",
    },
    {
      title: "Night Safari Singapore Tickets and Transfers",
      desc: "World's first nocturnal wildlife park — tram safari with 900+ animals.",
      price: 4470,
      img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&fit=crop",
      slug: "/singapore/night-safari-singapore-tickets-and-transfers",
    },
    {
      title: "Sentosa Cable Car Tickets and Transfers",
      desc: "Cable car between Mount Faber and Sentosa with stunning harbour views.",
      price: 2180,
      img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop",
      slug: "/singapore/sentosa-cable-car-tickets-and-transfers",
    },
  ],
};

const cityDisplayNames: Record<string, string> = {
  bangkok: "Bangkok",
  pattaya: "Pattaya",
  phuket: "Phuket",
  krabi: "Krabi",
  singapore: "Singapore",
};

export const getCityActivities = (city?: string) => {
  if (!city) return null;
  const key = city.toLowerCase().trim();
  const activities = cityActivities[key];
  if (!activities) return null;
  return { city: cityDisplayNames[key] || city, activities };
};
