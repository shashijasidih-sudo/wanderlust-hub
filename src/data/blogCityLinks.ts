import { cityActivities } from "./cityActivitiesData";

type CityKey =
  | "bangkok"
  | "pattaya"
  | "phuket"
  | "krabi"
  | "singapore"
  | "dubai"
  | "thailand";

const cityDisplay: Record<CityKey, string> = {
  bangkok: "Bangkok",
  pattaya: "Pattaya",
  phuket: "Phuket",
  krabi: "Krabi",
  singapore: "Singapore",
  dubai: "Dubai",
  thailand: "Thailand",
};

const cityHubLinks: Record<
  CityKey,
  { thingsToDoLink: string; transfersLink?: string }
> = {
  bangkok: {
    thingsToDoLink: "/thailand/bangkok/things-to-do",
    transfersLink: "/thailand/bangkok/budget-airport-transfers",
  },
  pattaya: {
    thingsToDoLink: "/thailand/pattaya/things-to-do",
    transfersLink: "/thailand/pattaya/budget-airport-transfers",
  },
  phuket: {
    thingsToDoLink: "/thailand/phuket/things-to-do",
    transfersLink: "/thailand/phuket/budget-airport-transfers",
  },
  krabi: {
    thingsToDoLink: "/thailand/krabi/things-to-do",
    transfersLink: "/thailand/krabi/budget-airport-transfers",
  },
  singapore: {
    thingsToDoLink: "/singapore/things-to-do",
    transfersLink: "/singapore/budget-airport-transfers",
  },
  dubai: {
    thingsToDoLink: "/dubai/things-to-do",
    transfersLink: "/dubai/budget-airport-transfers",
  },
  thailand: {
    thingsToDoLink: "/thailand",
    transfersLink: "/thailand/budget-airport-transfers",
  },
};

// Fallback activity sets for cities not in cityActivitiesData (Dubai/Thailand-wide)
const extraActivities: Partial<Record<CityKey, { title: string; link: string; image?: string; price?: number }[]>> = {
  dubai: [
    {
      title: "Burj Khalifa At The Top Tickets",
      link: "/dubai/burj-khalifa-at-the-top-prime-hours",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop",
    },
    {
      title: "Dubai Desert Safari with BBQ Dinner",
      link: "/dubai/desert-safari-bbq-dinner",
      image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&auto=format&fit=crop",
    },
    {
      title: "Dubai Marina Dhow Cruise Dinner",
      link: "/dubai/dubai-marina-dhow-cruise",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    },
    {
      title: "Atlantis The Palm Aquaventure Tickets",
      link: "/dubai/atlantis-aquaventure-waterpark",
      image: "https://images.unsplash.com/photo-1583244532610-2a234c7f7e7e?w=800&auto=format&fit=crop",
    },
  ],
  thailand: [
    {
      title: "Phi Phi Island Tour by Speedboat",
      link: "/thailand/phuket/phi-phi-island-tour-by-speedboat-with-transfer",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop",
    },
    {
      title: "Chao Phraya Princess Dinner Cruise Bangkok",
      link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop",
    },
    {
      title: "Coral Island Tour by Speedboat from Pattaya",
      link: "/thailand/pattaya/coral-island-pattaya-tour",
      image: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&auto=format&fit=crop",
    },
    {
      title: "4 Islands Tour Krabi by Longtail Boat",
      link: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer",
      image: "https://images.unsplash.com/photo-1545569310-12d97d3ff5ee?w=800&auto=format&fit=crop",
    },
  ],
};

export const getBlogCityProps = (city: CityKey) => {
  const acts = cityActivities[city] || [];
  const relatedActivities =
    acts.length > 0
      ? acts.slice(0, 6).map((a) => ({
          title: a.title,
          link: a.slug,
          image: a.img,
          price: a.price,
        }))
      : extraActivities[city] || [];

  return {
    relatedActivities,
    cityHub: {
      city: cityDisplay[city],
      ...cityHubLinks[city],
    },
  };
};
