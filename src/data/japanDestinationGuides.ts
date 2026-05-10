import imgFuji from "@/assets/japan-mount-fuji-1.jpg";
import imgTokyo from "@/assets/japan-tokyo-city-1.jpg";
import imgKyoto from "@/assets/japan-kyoto-temple-1.jpg";
import imgDisney from "@/assets/japan-disneyland-1.jpg";

export type JapanBlogCategory = "activity" | "price-cost";

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
  {
    key: "price-cost",
    label: "Price / Cost Blogs",
    short: "Price & Cost",
    description:
      "Japan trip costs from India, Mount Fuji tour pricing and Tokyo Disneyland ticket guides — full INR budget breakdowns.",
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
  {
    title: "Japan Trip Cost from India (2026): Full Budget Breakdown with Flights, Hotels & Tours",
    description:
      "Complete Japan trip cost from India for 2026 — flights, hotels, JR Pass, food, activities and a sample 7-day budget breakdown in INR.",
    category: "price-cost",
    image: imgTokyo,
    date: "May 10, 2026",
    readTime: "11 min read",
    link: "/japan/destination-guides/price-cost/japan-trip-cost-from-india",
  },
  {
    title: "Mount Fuji Tour Cost from Tokyo: Budget vs Premium Options Compared (2026)",
    description:
      "Mount Fuji tour cost from Tokyo — group vs private tour pricing in INR, DIY vs guided, Kawaguchiko vs Hakone routes and money-saving tips.",
    category: "price-cost",
    image: imgFuji,
    date: "May 10, 2026",
    readTime: "9 min read",
    link: "/japan/destination-guides/price-cost/mount-fuji-tour-cost-from-tokyo",
  },
  {
    title: "Tokyo Disneyland Ticket Price Guide: Latest Costs, Offers & Money-Saving Tips (2026)",
    description:
      "Tokyo Disneyland ticket prices in 2026 — 1-day, multi-day and DisneySea passes in INR, discounts for Indian travelers and money-saving tips.",
    category: "price-cost",
    image: imgDisney,
    date: "May 10, 2026",
    readTime: "9 min read",
    link: "/japan/destination-guides/price-cost/tokyo-disneyland-ticket-price-guide",
  },
];

export const getJapanBlogsByCategory = (category: JapanBlogCategory) =>
  japanBlogs.filter((b) => b.category === category);
