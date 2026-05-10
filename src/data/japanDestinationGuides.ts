import imgFuji from "@/assets/japan-mount-fuji-1.jpg";
import imgTokyo from "@/assets/japan-tokyo-city-1.jpg";
import imgKyoto from "@/assets/japan-kyoto-temple-1.jpg";

export type JapanBlogCategory = "activity";

export interface JapanCategoryMeta {
  key: JapanBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const JAPAN_CATEGORIES: JapanCategoryMeta[] = [
  {
    key: "activity",
    label: "Activities",
    short: "Activities",
    description:
      "Mount Fuji day tours, Tokyo city experiences and Kyoto temple guides — Japan's must-do activities for 2026.",
  },
];

export interface JapanBlogEntry {
  title: string;
  description: string;
  category: JapanBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export const japanBlogs: JapanBlogEntry[] = [
  {
    title: "Mount Fuji Day Tour from Tokyo: Best Views, Routes & Insider Tips (2026 Guide)",
    description:
      "Plan the perfect Mount Fuji day trip from Tokyo in 2026 — Kawaguchiko vs Hakone, transport options, costs in INR, best season and insider tips.",
    category: "activity",
    image: imgFuji,
    date: "May 10, 2026",
    readTime: "10 min read",
    link: "/japan/destination-guides/activity/mount-fuji-day-tour-from-tokyo",
  },
  {
    title: "Tokyo City Tour Guide: Top Attractions, Hidden Gems & Local Experiences You Can't Miss",
    description:
      "Tokyo city tour guide for 2026 — Shibuya, Senso-ji, Skytree, hidden Yanaka and Shimokitazawa, sushi classes, hop-on-hop-off and one-day itinerary.",
    category: "activity",
    image: imgTokyo,
    date: "May 10, 2026",
    readTime: "9 min read",
    link: "/japan/destination-guides/activity/tokyo-city-tour-guide",
  },
  {
    title: "Kyoto Temple Tour Guide: Fushimi Inari, Arashiyama & Golden Pavilion Explained",
    description:
      "Kyoto temple tour guide — Fushimi Inari torii gates, Kinkaku-ji Golden Pavilion and Arashiyama bamboo grove with itinerary, etiquette and tips.",
    category: "activity",
    image: imgKyoto,
    date: "May 10, 2026",
    readTime: "9 min read",
    link: "/japan/destination-guides/activity/kyoto-temple-tour-guide",
  },
];

export const getJapanBlogsByCategory = (category: JapanBlogCategory) =>
  japanBlogs.filter((b) => b.category === category);
