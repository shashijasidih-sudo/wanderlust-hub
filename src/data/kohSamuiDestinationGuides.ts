import imgCruise from "@/assets/koh-samui-loy-krathong-cruise-1.jpg";
import imgFullMoon from "@/assets/koh-samui-full-moon-party-1.jpg";
import imgBeach from "@/assets/koh-samui-beach-1.jpg";
import imgCity from "@/assets/city-kohsamui.jpg";
import imgCruiseNight from "@/assets/bangkok-cruise-night-3.jpg";

export type KohSamuiBlogCategory = "activity";

export interface KohSamuiCategoryMeta {
  key: KohSamuiBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const KOH_SAMUI_CATEGORIES: KohSamuiCategoryMeta[] = [
  {
    key: "activity",
    label: "Activity Blogs",
    short: "Activities",
    description:
      "Full Moon Party, Loy Krathong cruises and Koh Samui must-do experiences.",
  },
];

export interface KohSamuiBlogEntry {
  title: string;
  description: string;
  category: KohSamuiBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export const kohSamuiBlogs: KohSamuiBlogEntry[] = [
  {
    title: "White Orchid River Cruise Loy Krathong Festival: Full Moon Night Experience",
    description:
      "Experience Loy Krathong on the White Orchid River Cruise — buffet dinner, Thai dance, krathong release and Chao Phraya views.",
    category: "activity",
    image: imgCruise,
    date: "May 6, 2026",
    readTime: "9 min read",
    link: "/thailand/koh-samui/destination-guides/activity/white-orchid-river-cruise-loy-krathong-festival-guide/",
  },
  {
    title: "First-Time Full Moon Party in Koh Samui: Complete Beginner Guide",
    description:
      "Everything first-timers need for the Full Moon Party — tickets, transfers from Koh Samui, what to wear, safety and survival tips.",
    category: "activity",
    image: imgFullMoon,
    date: "May 6, 2026",
    readTime: "10 min read",
    link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide/",
  },
  {
    title: "What Happens at a Full Moon Party in Thailand? Real Experience Breakdown",
    description:
      "Hour-by-hour breakdown of the Full Moon Party at Haad Rin Beach — arrival, music zones, fire shows, peak energy and sunrise.",
    category: "activity",
    image: imgBeach,
    date: "May 6, 2026",
    readTime: "8 min read",
    link: "/thailand/koh-samui/destination-guides/activity/what-happens-at-full-moon-party-thailand/",
  },
  {
    title: "Hidden Costs of Full Moon Party Thailand 2026 (Avoid These Mistakes)",
    description:
      "Real 2026 cost breakdown of the Full Moon Party — transfers, drinks, accommodation, food and the hidden expenses most travelers miss.",
    category: "activity",
    image: imgFullMoon,
    date: "May 6, 2026",
    readTime: "10 min read",
    link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026/",
  },
  {
    title: "Koh Samui Full Moon Party vs Phuket Nightlife: What's Better for Party Lovers?",
    description:
      "Side-by-side comparison of the Full Moon Party near Koh Samui vs Phuket nightlife — vibe, crowd, cost and which suits you.",
    category: "activity",
    image: imgCity,
    date: "May 6, 2026",
    readTime: "8 min read",
    link: "/thailand/koh-samui/destination-guides/activity/koh-samui-full-moon-party-vs-phuket-nightlife/",
  },
  {
    title: "Full Moon Party vs Half Moon Party Thailand: Key Differences Explained",
    description:
      "Compare the Full Moon Party (Haad Rin Beach) and Half Moon Party (jungle) — vibe, crowd size, price, music and which to pick.",
    category: "activity",
    image: imgBeach,
    date: "May 6, 2026",
    readTime: "7 min read",
    link: "/thailand/koh-samui/destination-guides/activity/full-moon-vs-half-moon-party-thailand/",
  },
  {
    title: "How to Reach Full Moon Party from Phuket and Bangkok",
    description:
      "Best routes, costs and timings to reach the Full Moon Party in Koh Phangan from Bangkok or Phuket — flights, ferries and combos.",
    category: "activity",
    image: imgCity,
    date: "May 6, 2026",
    readTime: "9 min read",
    link: "/thailand/koh-samui/destination-guides/activity/how-to-reach-full-moon-party-from-phuket-and-bangkok/",
  },
  {
    title: "Full Moon Party Thailand Guide for Indians: Tips, Costs, Transfers & Safety",
    description:
      "Complete Full Moon Party guide for Indian travelers — flights, transfers, costs in INR, food, safety and what to expect.",
    category: "activity",
    image: imgFullMoon,
    date: "May 6, 2026",
    readTime: "11 min read",
    link: "/thailand/koh-samui/destination-guides/activity/full-moon-party-thailand-guide-for-indians/",
  },
  {
    title: "Loy Krathong Festival for Indian Travelers: What You Must Know",
    description:
      "Loy Krathong for Indian travelers — meaning, best places, costs, what to wear, food and why it feels like Thailand's Diwali.",
    category: "activity",
    image: imgCruiseNight,
    date: "May 6, 2026",
    readTime: "9 min read",
    link: "/thailand/koh-samui/destination-guides/activity/loy-krathong-festival-for-indian-travelers/",
  },
];

export const getKohSamuiBlogsByCategory = (cat: KohSamuiBlogCategory) =>
  kohSamuiBlogs.filter((b) => b.category === cat);
