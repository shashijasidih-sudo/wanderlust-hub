import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getPhuketInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/phuket-night-market-1.jpg";

const BlogPhuketCityTourGuide = () => (
  <BlogArticleLayout
    title="Phuket City Tour: Big Buddha, Wat Chalong & Old Town Guide (2026)"
    description="Phuket City Tour 2026 — full itinerary covering Big Buddha, Wat Chalong, Karon Viewpoint, Phuket Old Town, cost in INR and tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="Phuket City Tour Old Town"
    author="Yellodae Travel Expert"
    date="May 7, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["phuket city tour", "wat chalong", "phuket old town", "karon viewpoint", "big buddha city tour"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/phuket/destination-guides#activity" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "A Phuket City Tour is the easiest way to cover Big Buddha, Wat Chalong, Karon Viewpoint and Old Town in one stress-free half-day — perfect when you want a break from beaches and boats." },
      { type: "heading", content: "Tour Highlights" },
      { type: "list", items: [
        "Big Buddha — 45m marble statue + panoramic views",
        "Wat Chalong — Phuket's most important temple",
        "Karon / Promthep Viewpoints",
        "Phuket Old Town — Sino-Portuguese streets, cafes, markets",
        "Cashew nut & local handicraft stops",
      ]},
      { type: "cta", content: "Book a guided Phuket City Tour with hotel transfer", link: "/thailand/phuket/phuket-city-tour", linkText: "Book Phuket City Tour" },
      { type: "heading", content: "Typical Itinerary" },
      { type: "list", items: [
        "8:30 AM — Hotel pickup",
        "9:30 AM — Big Buddha (60 mins)",
        "11:00 AM — Wat Chalong",
        "12:30 PM — Lunch + Old Town walk",
        "3:00 PM — Karon Viewpoint",
        "5:00 PM — Return",
      ]},
      { type: "heading", content: "Cost for Indian Travelers" },
      { type: "list", items: ["Group city tour: ₹1,500 – ₹2,500", "Private city tour: ₹4,500 – ₹7,000 per car", "Includes: transfer, guide, sightseeing"] },
      { type: "tip-box", content: "Wear modest clothing (shoulders + knees covered) — Wat Chalong is an active temple. Slip-on shoes save time at every stop." },
      { type: "heading", content: "Pros & Cons" },
      { type: "list", items: ["Pros: Budget-friendly, informative, weather-proof", "Cons: Some tours include shopping stops, limited adventure"] },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Start early to beat heat", "Carry water and sunscreen", "Skip optional shopping stops", "Pair with Phi Phi or James Bond the next day"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "The best half-day add-on to any Phuket itinerary — covers culture, viewpoints and Old Town without the cost or fatigue of an island tour." },
    ]}
    relatedActivities={[
      { title: "Phuket City Tour", link: "/thailand/phuket/phuket-city-tour" },
      { title: "Phuket City Hourly Rental", link: "/thailand/phuket/phuket-city-hourly-rental" },
      { title: "Phuket FantaSea Show", link: "/thailand/phuket/phuket-fanta-sea-show" },
    ]}
    relatedLinks={[
      { title: "Phuket City Tour vs Island Tour", link: "/thailand/phuket/destination-guides/comparison/phuket-city-tour-vs-island-tour" },
      { title: "Phuket Private vs Group Tour", link: "/thailand/phuket/destination-guides/comparison/phuket-private-vs-group-tour" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do" },
    ]}
      internalLinks={getPhuketInternalLinks("")}
  />
);
export default BlogPhuketCityTourGuide;
