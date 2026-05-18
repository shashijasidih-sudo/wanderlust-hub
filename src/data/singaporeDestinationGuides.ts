import marinaBayImg from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import sentosaImg from "@/assets/singapore-sentosa-4d.jpg";
import universalImg from "@/assets/singapore-universal-studios.jpg";
import gardensBayNightImg from "@/assets/singapore-gardens-bay-night-1.jpg";

export type SingaporeBlogCategory =
  | "indian-audience"
  | "itinerary"
  | "activity"
  | "comparison";

export interface SingaporeCategoryMeta {
  key: SingaporeBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const SINGAPORE_CATEGORIES: SingaporeCategoryMeta[] = [
  { key: "itinerary", label: "Itinerary Blogs", short: "Itineraries",
    description: "3-day, 4-day, 5-day and honeymoon Singapore itineraries with day-by-day plans." },
  { key: "indian-audience", label: "Indian Audience Blogs", short: "For Indians",
    description: "Visa, food, currency and tips for Indian travelers visiting Singapore." },
  { key: "activity", label: "Activity Blogs", short: "Activities",
    description: "Universal Studios, Sentosa, Gardens by the Bay, Night Safari and must-do experiences." },
  { key: "comparison", label: "Comparison Blogs", short: "Comparisons",
    description: "Singapore vs Bangkok, Sentosa vs city stay and side-by-side decision guides." },
];

export interface SingaporeBlogEntry {
  title: string;
  description: string;
  category: SingaporeBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

// Hero fallback images per category (used until real blogs are added).
export const SINGAPORE_CATEGORY_HERO: Record<SingaporeBlogCategory, string> = {
  itinerary: marinaBayImg,
  "indian-audience": gardensBayNightImg,
  activity: universalImg,
  comparison: sentosaImg,
};

export const singaporeBlogs: SingaporeBlogEntry[] = [
  // Blogs will be populated per category as docs are shared.
];

export const getSingaporeBlogsByCategory = (category: SingaporeBlogCategory) =>
  singaporeBlogs.filter((b) => b.category === category);
