import sentosa from "@/assets/singapore-sentosa-4d.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";
import universal from "@/assets/singapore-universal-studios.jpg";
import marina from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import gardens from "@/assets/singapore-gardens-bay-night-1.jpg";
import flyer from "@/assets/singapore-flyer-twilight-1.jpg";
import river from "@/assets/singapore-river-cruise.jpg";
import cityTour from "@/assets/singapore-city-tour.jpg";

export interface SingaporeGuide {
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

export const singaporeGuides: SingaporeGuide[] = [
  { id: 1, title: "Best Singapore Attractions You Must Visit", description: "From Marina Bay Sands to Sentosa — top-rated Singapore experiences for every traveler.", category: "City Highlights", image: marina, author: "Yellodae Travel Expert", date: "Mar 1, 2026", readTime: "9 min read", slug: "/blog/best-singapore-attractions" },
  { id: 2, title: "Top Things to Do in Singapore", description: "Curated list of must-do experiences in the Lion City for first-time visitors.", category: "City Highlights", image: cityTour, author: "Yellodae Travel Expert", date: "Mar 2, 2026", readTime: "8 min read", slug: "/blog/top-things-singapore" },
  { id: 3, title: "Universal Studios Singapore Complete Guide", description: "Rides, shows, dining, and money-saving tips for USS Sentosa.", category: "Theme Parks", image: universal, author: "Theme Park Pro", date: "Feb 26, 2026", readTime: "10 min read", slug: "/blog/universal-studios-singapore-guide" },
  { id: 4, title: "Night Safari Singapore Guide", description: "World's first nocturnal zoo — tickets, tram safari, and trail tips.", category: "Wildlife", image: nightSafari, author: "Wildlife Guide", date: "Feb 24, 2026", readTime: "7 min read", slug: "/blog/night-safari-singapore-guide" },
  { id: 5, title: "Sentosa Activities & Combo Pass Guide", description: "Plan a perfect Sentosa day with cable car, beaches, and rides.", category: "Sentosa", image: sentosa, author: "Yellodae Travel Expert", date: "Feb 22, 2026", readTime: "9 min read", slug: "/blog/sentosa-activities-singapore" },
  { id: 6, title: "Singapore Combo Pass: Save Big on Attractions", description: "Bundle deals for Universal Studios, S.E.A. Aquarium, Skyline Luge and more.", category: "Deals", image: flyer, author: "Yellodae Deals Team", date: "Feb 20, 2026", readTime: "8 min read", slug: "/blog/singapore-combo-pass" },
  { id: 7, title: "Singapore Food Experiences You Can't Miss", description: "Hawker centres, Michelin street food, rooftop dining and more.", category: "Food Tours", image: gardens, author: "Food Blogger", date: "Feb 18, 2026", readTime: "10 min read", slug: "/blog/singapore-food-experiences" },
  { id: 8, title: "Singapore Airport Transfer Booking Guide", description: "Changi to city — taxis, private transfers, MRT options compared.", category: "Transfers", image: river, author: "Yellodae Travel Expert", date: "Feb 15, 2026", readTime: "7 min read", slug: "/blog/airport-transfer-booking-singapore" },
];
