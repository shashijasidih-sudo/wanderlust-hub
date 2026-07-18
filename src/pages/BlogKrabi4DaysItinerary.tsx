import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-longtail-boats-1.jpg";

const BlogKrabi4DaysItinerary = () => (
  <BlogArticleLayout
    title="4 Days Krabi Itinerary 2026: Islands, Beaches & Adventure (Indian Travelers Guide)"
    description="Perfectly balanced 4-day Krabi itinerary — Ao Nang, 4 Island Tour, Hong Island, jungle trip, INR budget breakdown and smart tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="Longtail boats lined up on a Krabi beach with limestone cliffs"
    author="Yellodae Travel Expert"
    date="May 9, 2026"
    readTime="10 min read"
    category="Itinerary Blogs"
    keywords={["4 days krabi itinerary","krabi 4 day plan","krabi itinerary indian travelers","krabi trip plan 2026","ao nang itinerary"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/krabi/destination-guides#itinerary" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do/", transfersLink: "/thailand/krabi/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Planning a short trip to Krabi and wondering how to cover everything in just 4 days? Krabi packs island hopping, beaches, adventure and relaxation. With the right plan you can experience the best of Krabi without feeling rushed. This 4-day Krabi itinerary is designed for Indian travelers and covers top attractions, optimal route planning and smart tips." },
      { type: "heading", content: "Quick Overview of 4 Days Plan" },
      { type: "list", items: ["Day 1 — Arrival + Ao Nang + Night Market","Day 2 — 4 Island Tour","Day 3 — Hong Island / Adventure Day","Day 4 — Jungle Tour + Departure"] },
      { type: "heading", content: "Day 1: Arrival in Krabi + Ao Nang Exploration" },
      { type: "paragraph", content: "Arrive at Krabi Airport, transfer to Ao Nang (30–40 min) and check into your hotel. Best base: Ao Nang for budget and convenience. Afternoon — relax at Ao Nang Beach, enjoy sea views and limestone cliffs and try a beachside cafe. Evening — visit the Ao Nang Night Market for Thai street food and souvenirs. Dinner: Indian restaurant if preferred, or try Pad Thai and mango sticky rice." },
      { type: "heading", content: "Day 2: 4 Island Tour (Must-Do Experience)" },
      { type: "paragraph", content: "Highlights — Phra Nang Cave Beach, Chicken Island, Tup Island sandbar walk and Poda Island. Expect snorkeling, swimming, beach hopping and great photography. Start early (7–8 AM), choose a longtail for budget or speedboat for comfort, and carry sunscreen and a waterproof bag. Return by 3–4 PM, relax with a Thai massage and have dinner near Ao Nang." },
      { type: "cta", content: "Book the most popular Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do/", linkText: "Book Krabi 4 Island Tour" },
      { type: "heading", content: "Day 3: Hong Island OR Adventure Day" },
      { type: "paragraph", content: "Option 1 (Recommended): Hong Island Tour — Hong Lagoon, crystal-clear water, viewpoint hike and a less crowded experience. Option 2: Adventure Day — rock climbing at Railay, kayaking in Ao Thalane and beach hopping in Railay. End with sunset at Railay Beach, return to Ao Nang for dinner and shopping." },
      { type: "tip-box", content: "If it's your first time, pick Hong Island over the adventure day — the lagoon view is the single best photo spot in Krabi." },
      { type: "heading", content: "Day 4: Jungle Tour + Departure" },
      { type: "paragraph", content: "Morning Jungle Tour includes Emerald Pool, Hot Springs and optional Tiger Cave Temple — a relaxing nature experience that shows a different side of Krabi. Afternoon — return to hotel, pack and transfer to airport." },
      { type: "heading", content: "Budget Breakdown (4 Days)" },
      { type: "list", items: ["Budget Traveler — Stay ₹6,000–₹12,000 + Tours ₹8,000–₹12,000 + Food ₹4,000–₹6,000 = ₹25,000–₹40,000 (excluding flights)","Mid-Range Traveler — ₹40,000–₹70,000"] },
      { type: "heading", content: "Best Time to Visit Krabi" },
      { type: "list", items: ["November–April → best weather","May–October → budget-friendly with occasional showers"] },
      { type: "heading", content: "What to Pack" },
      { type: "list", items: ["Swimwear","Sunscreen","Flip-flops","Waterproof bag","Light clothes"] },
      { type: "heading", content: "Pro Tips (Very Important)" },
      { type: "list", items: ["Stay in Ao Nang — best base for all activities","Book tours in advance to avoid last-minute price hikes","Start early every day to beat crowds and heat","Carry cash for park fees and small expenses"] },
      { type: "heading", content: "Who Is This Itinerary Best For?" },
      { type: "list", items: ["First-time travelers","Couples","Friends","Short international trips"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 4-day Krabi itinerary is fast-paced but covers all highlights efficiently — island hopping, beaches, adventure and nature in one trip." },
      { type: "cta", content: "Plan your full Krabi trip with curated activities", link: "/thailand/krabi/things-to-do/", linkText: "Explore Krabi Tours" },
    ]}
    relatedActivities={[
      { title: "Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do/" },
      { title: "Hong Island Tour from Krabi", link: "/thailand/krabi/things-to-do/" },
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/things-to-do/" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers/" },
    ]}
    relatedLinks={[
      { title: "5 Days Krabi Itinerary with Phi Phi", link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary/" },
      { title: "3 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-3-days-itinerary/" },
      { title: "Krabi Honeymoon Itinerary (5 Days)", link: "/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary/" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary/" },
      { title: "Phuket vs Krabi for Indian Travelers", link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians/" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/itinerary/krabi-4-days-itinerary")}
  />
);

export default BlogKrabi4DaysItinerary;
