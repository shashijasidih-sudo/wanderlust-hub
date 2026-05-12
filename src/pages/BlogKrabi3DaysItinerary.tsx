import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-island-viewpoint-1.jpg";

const BlogKrabi3DaysItinerary = () => (
  <BlogArticleLayout
    title="3 Days Krabi Itinerary 2026: Short Trip Plan for Phi Phi & Islands"
    description="Quick 3-day Krabi itinerary — Ao Nang, 4 Island Tour, Phi Phi or jungle, INR cost breakdown and what you can realistically cover."
    heroImage={heroImg}
    heroAlt="Krabi limestone island viewpoint over turquoise water"
    author="Yellodae Travel Expert"
    date="May 9, 2026"
    readTime="9 min read"
    category="Itinerary Blogs"
    keywords={["3 days krabi itinerary","krabi short trip","krabi 3 day plan","krabi itinerary indian travelers","krabi weekend trip"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/krabi/destination-guides#itinerary" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Short on time but still want to experience the magic of Krabi? This 3-day Krabi itinerary is built for travelers who only have a long weekend — covering Ao Nang, the famous 4 Island Tour and a choice between Phi Phi Islands or a relaxed jungle trip before departure." },
      { type: "heading", content: "Quick Overview (3 Days Plan)" },
      { type: "list", items: ["Day 1 — Arrival + Ao Nang + Night Market","Day 2 — 4 Island Tour","Day 3 — Phi Phi OR Jungle Tour + Departure"] },
      { type: "heading", content: "Day 1: Arrival + Ao Nang Exploration" },
      { type: "paragraph", content: "Land at Krabi Airport and transfer to Ao Nang (30–40 minutes). Best base: Ao Nang (central + affordable). Afternoon — relax at Ao Nang Beach, enjoy ocean views and try local cafes. Evening — visit Ao Nang Night Market for Thai street food and souvenirs." },
      { type: "heading", content: "Day 2: 4 Island Tour" },
      { type: "paragraph", content: "Highlights — Phra Nang Cave Beach, Chicken Island, Tup Island sandbar and Poda Island. Activities — snorkeling, swimming, beach hopping and photography. Tips — start early (7–8 AM), choose speedboat if short on time, carry sunscreen and a waterproof bag. Evening — return relaxed to Ao Nang." },
      { type: "cta", content: "Book the famous Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do", linkText: "Book 4 Island Tour" },
      { type: "heading", content: "Day 3: Phi Phi OR Jungle Tour + Departure" },
      { type: "paragraph", content: "Option 1: Phi Phi Islands Tour — Maya Bay, Pileh Lagoon, Viking Cave and Phi Phi Don. A bucket-list experience. Option 2: Jungle Tour — Emerald Pool, Hot Springs and optional Tiger Cave Temple. Less tiring, unique inland experience and great for families. Afternoon — return to hotel and head to airport." },
      { type: "heading", content: "Budget Breakdown (3 Days)" },
      { type: "list", items: ["Budget Traveler — ₹20,000–₹30,000 (excluding flights)","Mid-Range Traveler — ₹30,000–₹55,000"] },
      { type: "heading", content: "What to Pack" },
      { type: "list", items: ["Swimwear","Sunscreen","Flip-flops","Waterproof bag","Light clothes"] },
      { type: "heading", content: "Pro Tips (Very Important)" },
      { type: "list", items: ["Stay in Ao Nang — best location for short trips","Prioritize island tours — that's what Krabi is famous for","Start early to beat crowds","Pre-book tours to skip queues"] },
      { type: "heading", content: "Who Is This For?" },
      { type: "list", items: ["Weekend travelers","Couples","Friends","Travelers stopping by from Phuket"] },
      { type: "heading", content: "What You'll Miss in 3 Days" },
      { type: "list", items: ["Hong Island","Kayaking","Railay overnight stay","Sunset cruise"] },
      { type: "paragraph", content: "You won't cover everything — but you'll still nail the core Krabi experience." },
      { type: "heading", content: "Upgrade Option (If You Get 1 Extra Day)" },
      { type: "list", items: ["Add Hong Island Tour","Or add Railay rock climbing + sunset"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 3-day Krabi itinerary is perfect for time-pressed travelers who want a meaningful taste of Krabi — beaches, islands and one big highlight tour, all without feeling rushed." },
      { type: "cta", content: "Plan your full Krabi trip with curated activities", link: "/thailand/krabi/things-to-do", linkText: "Explore Krabi Tours" },
    ]}
    relatedActivities={[
      { title: "Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi Jungle & Emerald Pool Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers" },
    ]}
    relatedLinks={[
      { title: "4 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-4-days-itinerary" },
      { title: "5 Days Krabi Itinerary with Phi Phi", link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary" },
      { title: "Krabi Honeymoon Itinerary (5 Days)", link: "/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary" },
      { title: "Phuket vs Krabi for Indian Travelers", link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/itinerary/krabi-3-days-itinerary")}
  />
);

export default BlogKrabi3DaysItinerary;
