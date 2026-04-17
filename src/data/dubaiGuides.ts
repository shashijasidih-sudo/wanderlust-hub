import desert from "@/assets/dubai-desert-couple-1.jpg";
import marina from "@/assets/dubai-dhow-cruise-1.jpg";
import skylineNight from "@/assets/dubai-skyline-night-1.jpg";
import skylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import fountain from "@/assets/dubai-fountain-show-1.jpg";
import globalVillage from "@/assets/dubai-global-village-1.jpg";
import cityNight from "@/assets/dubai-city-night-1.jpg";
import aquarium from "@/assets/dubai-aquarium-fish-1.jpg";

export interface DubaiGuide {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

export const dubaiGuides: DubaiGuide[] = [
  { id: 1, title: "Best Dubai Activities for Every Traveler", description: "Top-rated Dubai experiences from desert safaris to skyline tours.", category: "City Highlights", image: skylineNight, author: "Yellodae Travel Expert", date: "Mar 1, 2026", readTime: "10 min read", slug: "/blog/best-dubai-activities" },
  { id: 2, title: "Burj Khalifa Tickets: Prime vs Non-Prime Hours", description: "Everything you need to know about visiting the world's tallest tower.", category: "Landmarks", image: skylineSunset, author: "Yellodae Travel Expert", date: "Feb 28, 2026", readTime: "8 min read", slug: "/blog/burj-khalifa-tickets-dubai" },
  { id: 3, title: "Dubai Desert Safari: Best Deals & Packages", description: "Compare evening, premium, and overnight desert safari options.", category: "Adventure", image: desert, author: "Adventure Pro", date: "Feb 26, 2026", readTime: "9 min read", slug: "/blog/desert-safari-deals-dubai" },
  { id: 4, title: "Dubai Marina Cruise: Dhow vs Yacht Compared", description: "Dinner cruise options on Dubai Marina and Dubai Creek explained.", category: "Cruises", image: marina, author: "Cruise Expert", date: "Feb 24, 2026", readTime: "8 min read", slug: "/blog/dubai-marina-cruise" },
  { id: 5, title: "Dubai Shopping Tours: Malls & Souks Guide", description: "Dubai Mall, Mall of the Emirates, Gold Souk and Spice Souk tips.", category: "Shopping", image: globalVillage, author: "Shopping Guide", date: "Feb 22, 2026", readTime: "7 min read", slug: "/blog/dubai-shopping-tours" },
  { id: 6, title: "Dubai Food Experiences You Must Try", description: "From Arabic mezze to brunch at Burj Al Arab and street eats.", category: "Food Tours", image: cityNight, author: "Food Blogger", date: "Feb 20, 2026", readTime: "10 min read", slug: "/blog/dubai-food-experiences" },
  { id: 7, title: "Dubai Airport Transfer Booking Guide", description: "DXB transfers — zones, vehicle types, and price comparisons.", category: "Transfers", image: fountain, author: "Yellodae Travel Expert", date: "Feb 18, 2026", readTime: "7 min read", slug: "/blog/airport-transfer-booking-dubai" },
  { id: 8, title: "Dubai Aquarium & Underwater Zoo Guide", description: "Tickets, packages, and what to expect at Dubai Mall's iconic aquarium.", category: "Family", image: aquarium, author: "Family Travel Pro", date: "Feb 15, 2026", readTime: "6 min read", slug: "/blog/best-dubai-activities" },
];
