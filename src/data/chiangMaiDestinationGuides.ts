import imgDoiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import imgGoldenTriangle from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import imgInthanon from "@/assets/chiang-mai-doi-inthanon-1.jpg";
import imgChediLuang from "@/assets/chiang-mai-wat-chedi-luang-1.jpg";
import imgCity from "@/assets/city-chiang-mai.jpg";
import imgVan from "@/assets/chiang-mai-transfer-van-1.jpg";

export type ChiangMaiBlogCategory = "activity";

export interface ChiangMaiCategoryMeta {
  key: ChiangMaiBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const CHIANG_MAI_CATEGORIES: ChiangMaiCategoryMeta[] = [
  {
    key: "activity",
    label: "Activity Blogs",
    short: "Activities",
    description:
      "Doi Suthep, Chiang Rai day trips, Doi Inthanon, temple tour costs and Indian traveler tips.",
  },
];

export interface ChiangMaiBlogEntry {
  title: string;
  description: string;
  category: ChiangMaiBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export const chiangMaiBlogs: ChiangMaiBlogEntry[] = [
  {
    title: "Complete Guide to Doi Suthep Temple: History, Views & Travel Tips",
    description:
      "Everything you need for Wat Phra That Doi Suthep — history, the Naga staircase, panoramic views, dress code and how to reach the mountain temple.",
    category: "activity",
    image: imgDoiSuthep,
    date: "May 6, 2026",
    readTime: "9 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/doi-suthep-temple-complete-guide/",
  },
  {
    title: "Chiang Rai Day Trip Guide: Golden Triangle & Long Neck Tribe Experience",
    description:
      "White Temple, Blue Temple, Golden Triangle viewpoint and Long Neck Karen village — full Chiang Rai day trip itinerary from Chiang Mai.",
    category: "activity",
    image: imgGoldenTriangle,
    date: "May 6, 2026",
    readTime: "10 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-day-trip-golden-triangle-long-neck-tribe/",
  },
  {
    title: "Best Day Trips from Chiang Mai for First-Time Visitors",
    description:
      "Top day trips from Chiang Mai — Doi Inthanon, Doi Suthep, Chiang Rai, ethical elephant sanctuaries and Pai for first-time travelers.",
    category: "activity",
    image: imgInthanon,
    date: "May 6, 2026",
    readTime: "8 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/best-day-trips-from-chiang-mai/",
  },
  {
    title: "Chiang Mai Temple Tour Price Guide: What Does It Cost in 2026?",
    description:
      "2026 cost breakdown of Chiang Mai temple tours — join vs private, entry fees, transport, hidden costs and budget vs luxury plans.",
    category: "activity",
    image: imgChediLuang,
    date: "May 6, 2026",
    readTime: "10 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-temple-tour-price-guide-2026/",
  },
  {
    title: "Chiang Rai vs Doi Inthanon Tour: Which Day Trip Should You Choose?",
    description:
      "Side-by-side comparison of Chiang Rai and Doi Inthanon day trips — culture vs nature, cost, duration and which suits your style.",
    category: "activity",
    image: imgGoldenTriangle,
    date: "May 6, 2026",
    readTime: "8 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-vs-doi-inthanon-day-trip/",
  },
  {
    title: "Chiang Mai Tour Guide for Indians: Temples, Food & Travel Tips",
    description:
      "Chiang Mai for Indian travelers — visa, budget in INR, Indian and Jain food options, top attractions and must-know travel tips.",
    category: "activity",
    image: imgCity,
    date: "May 6, 2026",
    readTime: "9 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-tour-guide-for-indians/",
  },
  {
    title: "Chiang Rai Day Trip from Chiang Mai for Indian Travelers",
    description:
      "Chiang Rai day trip tailored for Indians — what to expect, vegetarian food, costs in INR and tips for the long Golden Triangle journey.",
    category: "activity",
    image: imgVan,
    date: "May 6, 2026",
    readTime: "8 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-day-trip-for-indian-travelers/",
  },
  {
    title: "How to Visit Wat Phra That Doi Suthep Without Climbing 300 Steps",
    description:
      "Skip the famous 306-step Naga staircase — cable car, drive-up access and guided tour options to reach Doi Suthep comfortably.",
    category: "activity",
    image: imgDoiSuthep,
    date: "May 6, 2026",
    readTime: "6 min read",
    link: "/thailand/chiang-mai/destination-guides/activity/visit-doi-suthep-without-climbing-steps/",
  },
];

export const getChiangMaiBlogsByCategory = (cat: ChiangMaiBlogCategory) =>
  chiangMaiBlogs.filter((b) => b.category === cat);
