import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/koh-samui-loy-krathong-cruise-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="White Orchid River Cruise Loy Krathong Festival: Full Moon Night Experience in Bangkok"
    description="White Orchid Loy Krathong cruise — buffet dinner, Thai dance, krathong release and Chao Phraya landmarks under the November full moon."
    heroImage={heroImg}
    heroAlt="White Orchid river cruise lit up at night with floating krathongs"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["White Orchid Loy Krathong","Loy Krathong cruise Bangkok","Loy Krathong festival 2026","Chao Phraya cruise","Thailand November festival"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    sections={[
      { type: "paragraph", content: "Loy Krathong is Thailand's most magical celebration, and experiencing it aboard the White Orchid River Cruise elevates it to a whole new level. Set against the shimmering Chao Phraya under a full moon, this cruise mixes culture, cuisine and celebration in one evening." },
      { type: "heading", content: "What is Loy Krathong Festival?" },
      { type: "paragraph", content: "Loy Krathong is Thailand's iconic Festival of Lights, celebrated on the full moon night of the 12th lunar month. Locals release decorated floating baskets (krathongs) into rivers as a symbol of letting go of negativity and welcoming good fortune. In Bangkok, the Chao Phraya River becomes the heart of celebrations." },
      { type: "heading", content: "Why Choose White Orchid River Cruise?" },
      { type: "list", items: ["Full-moon party vibe with live DJ & performances","International buffet dinner with Indian options","Traditional Thai cultural dance shows","Scenic cruise past Bangkok landmarks","Floating-krathong ritual onboard"] },
      { type: "heading", content: "What to Expect Onboard" },
      { type: "subheading", content: "Boarding & Welcome" },
      { type: "paragraph", content: "Board from a central Bangkok pier and you'll be greeted with a welcome drink. Festive decor sets the mood instantly." },
      { type: "subheading", content: "Buffet Dinner" },
      { type: "list", items: ["Thai curries & noodles","Seafood dishes","Vegetarian & Indian food options","Desserts and fresh fruits"] },
      { type: "subheading", content: "Entertainment" },
      { type: "paragraph", content: "Traditional Thai dance, live music, DJ and a dance floor with full-moon party vibes. The Floating Krathong ritual midway through creates a serene, spiritual moment amid the party." },
      { type: "heading", content: "Route & Scenic Highlights" },
      { type: "list", items: ["Grand Palace lit beautifully at night","Wat Arun (Temple of Dawn)","Rama VIII Bridge"] },
      { type: "heading", content: "Price Guide (2026)" },
      { type: "list", items: ["Standard Ticket: ₹2,500 – ₹4,000","Premium Seating: ₹4,500 – ₹6,000","With Transfers: ₹5,000 – ₹7,000"] },
      { type: "cta", content: "November full-moon dates sell out fast — secure your White Orchid seats now", link: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival", linkText: "Reserve Seats" },
      { type: "tip-box", content: "Loy Krathong is peak season. Book 2–3 weeks in advance — the November full-moon cruise sells out fast." },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Loy Krathong Trip" },
      { type: "heading", content: "Pros & Cons" },
      { type: "list", items: ["Pros: Best views, less crowded than riverbanks, all-in-one experience","Cons: Costlier than street celebrations, limited 2–3 hour duration"] },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "list", items: ["Choose cruises offering Indian vegetarian food","Book transfer-inclusive packages","Carry a light jacket — deck gets breezy","Arrive early for better seating"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "The White Orchid Loy Krathong experience is more than a dinner cruise — it's a celebration of Thai culture, spirituality and nightlife combined. For first-time visitors and couples, it's absolutely worth it." },
      { type: "cta", content: "Book the White Orchid Loy Krathong cruise", link: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival", linkText: "Reserve Now" },
    ]}
    relatedActivities={[
      { title: "First-Time Full Moon Party in Koh Samui", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide" },
      { title: "What Happens at a Full Moon Party in Thailand", link: "/thailand/koh-samui/destination-guides/activity/what-happens-at-full-moon-party-thailand" },
      { title: "Loy Krathong Festival Guide for Indians", link: "/thailand/koh-samui/destination-guides/activity/loy-krathong-festival-for-indian-travelers" },
      { title: "Hidden Costs of Full Moon Party Thailand 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026" },
    ]}
    relatedLinks={[
      { title: "Book the White Orchid Loy Krathong Cruise", link: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival" },
      { title: "Book Full Moon Party + Samui–Koh Phangan Transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer" },
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui" },
    ]}
  />
);
export default Blog;
