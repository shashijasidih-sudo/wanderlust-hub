import phiPhiImg from "@/assets/phi-phi-1.jpg";
import jamesBondImg from "@/assets/james-bond-1.jpg";
import elephantImg from "@/assets/elephant-1.jpg";
import bangkokSkywalkImg from "@/assets/bangkok-skywalk-1.jpg";
import massageImg from "@/assets/massage-1.jpg";
import tigerImg from "@/assets/tiger-1.jpg";
import bangkokCityImg from "@/assets/bangkok-city-1.jpg";
import phiPhiBoatImg from "@/assets/phi-phi-boat.jpeg";

export interface ThailandGuide {
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

export const thailandGuides: ThailandGuide[] = [
  { id: -3, title: "Complete Guide to Thailand Island Combos", description: "Discover the best Thailand island combos — Phuket + Phi Phi, Krabi combos, Koh Samui packages.", category: "Island Adventures", image: phiPhiImg, author: "Yellodae Travel Expert", date: "Mar 3, 2026", readTime: "10 min read", slug: "/blog/thailand-island-combos" },
  { id: -4, title: "Complete Guide to Thailand Food Experiences", description: "From Bangkok street food to Phuket seafood, floating markets to rooftop dining.", category: "Food Tours", image: bangkokSkywalkImg, author: "Yellodae Travel Expert", date: "Mar 5, 2026", readTime: "11 min read", slug: "/blog/thailand-food-experiences" },
  { id: 0, title: "Complete Guide to Airport Transfer Booking in Thailand", description: "Routes, types, tips, and the best platform to book your Suvarnabhumi, Phuket, or Krabi transfer.", category: "Thailand Transfers", image: bangkokCityImg, author: "Yellodae Travel Expert", date: "Feb 19, 2026", readTime: "8 min read", slug: "/blog/airport-transfer-booking-thailand" },
  { id: -1, title: "Complete Guide to Phi Phi Island Tours in Thailand", description: "Plan the perfect Phi Phi Island tour — Maya Bay, snorkelling, and everything in between.", category: "Island Adventures", image: phiPhiBoatImg, author: "Yellodae Island Expert", date: "Feb 22, 2026", readTime: "10 min read", slug: "/blog/phi-phi-island-tours-thailand" },
  { id: 1, title: "Top 10 Beaches to Visit in Thailand", description: "Discover the most stunning beaches from Phuket to Krabi.", category: "Beach Adventures", image: phiPhiImg, author: "Travel Expert", date: "Nov 25, 2024", readTime: "8 min read", slug: "/thailand" },
  { id: 2, title: "A Complete Guide to Thai Street Food", description: "From Pad Thai to Som Tam, explore Thailand's vibrant street food culture.", category: "Food Tours", image: bangkokSkywalkImg, author: "Food Blogger", date: "Nov 22, 2024", readTime: "10 min read", slug: "/thailand" },
  { id: 3, title: "Ancient Temples of Bangkok: A Spiritual Journey", description: "Explore Wat Phra Kaew, Wat Arun, and Wat Pho.", category: "Cultural Sites", image: jamesBondImg, author: "Culture Guide", date: "Nov 20, 2024", readTime: "12 min read", slug: "/thailand" },
  { id: 4, title: "Island Hopping Guide: Phi Phi & Beyond", description: "Plan the perfect island-hopping adventure through Thailand's archipelagos.", category: "Beach Adventures", image: phiPhiImg, author: "Island Explorer", date: "Nov 18, 2024", readTime: "9 min read", slug: "/phuket/phi-phi-island-tour" },
  { id: 5, title: "Best Night Markets in Thailand", description: "The buzzing night markets of Bangkok, Chiang Mai, and Phuket.", category: "Food Tours", image: massageImg, author: "Night Owl", date: "Nov 15, 2024", readTime: "7 min read", slug: "/thailand" },
  { id: 6, title: "Ethical Elephant Sanctuaries in Thailand", description: "A guide to responsible elephant tourism and the best sanctuaries.", category: "Wildlife", image: elephantImg, author: "Wildlife Expert", date: "Nov 12, 2024", readTime: "11 min read", slug: "/phuket/elephant-safari" },
  { id: 7, title: "Krabi Rock Climbing: A Beginner's Guide", description: "Rock climbing at Railay Beach and Ton Sai in Krabi.", category: "Beach Adventures", image: jamesBondImg, author: "Adventure Guide", date: "Nov 10, 2024", readTime: "8 min read", slug: "/phuket/james-bond-island-tour" },
  { id: 8, title: "Thai Cooking Classes: Learn From the Masters", description: "The best cooking classes to master authentic Thai cuisine.", category: "Food Tours", image: bangkokSkywalkImg, author: "Chef Marco", date: "Nov 8, 2024", readTime: "6 min read", slug: "/thailand" },
  { id: 9, title: "Ayutthaya Day Trip: UNESCO Heritage Sites", description: "Plan your perfect day trip to the ancient capital of Ayutthaya.", category: "Cultural Sites", image: tigerImg, author: "History Buff", date: "Nov 5, 2024", readTime: "10 min read", slug: "/bangkok/ayutthaya-temple-tour" },
  { id: 10, title: "Phuket's Hidden Gems: Secret Beaches", description: "Escape the crowds and discover Phuket's lesser-known beaches.", category: "Beach Adventures", image: phiPhiImg, author: "Local Guide", date: "Nov 2, 2024", readTime: "7 min read", slug: "/phuket" },
  { id: 11, title: "Traditional Thai Massage: Complete Guide", description: "Everything about experiencing authentic Thai massage therapy.", category: "Cultural Sites", image: massageImg, author: "Wellness Expert", date: "Oct 30, 2024", readTime: "9 min read", slug: "/bangkok/massage-coupons" },
  { id: 12, title: "Bangkok to Chiang Mai: The Ultimate Road Trip", description: "An epic road trip through Thailand's heartland.", category: "Cultural Sites", image: elephantImg, author: "Road Tripper", date: "Oct 28, 2024", readTime: "14 min read", slug: "/thailand" },
];
