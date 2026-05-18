import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-river-cruise.jpg";

const LINK = "/singapore/destination-guides/activity/singapore-river-cruise-guide";

const BlogSingaporeRiverCruiseGuide = () => (
  <BlogArticleLayout
    title="Singapore River Cruise Experience — Day vs Night & Route Guide"
    description="Singapore River Cruise complete guide — Clarke Quay to Marina Bay route, day vs night cruise, ticket cost in INR and best photo spots."
    heroImage={heroImg}
    heroAlt="Traditional bumboat cruising along Singapore River at dusk with Marina Bay skyline"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["singapore river cruise","bumboat ride singapore","clarke quay cruise","marina bay night cruise","singapore river tour"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do" }}
    sections={[
      { type: "paragraph", content: "The Singapore River Cruise — a modernised wooden bumboat ride along the historic Singapore River — is one of the most relaxing yet visually rewarding ways to experience the city. It blends sightseeing, cultural storytelling and the contrast of colonial heritage against a futuristic Marina Bay skyline." },
      { type: "heading", content: "Route & Key Highlights" },
      { type: "subheading", content: "Clarke Quay" },
      { type: "paragraph", content: "Your journey usually starts at Clarke Quay — a lively riverside hub of restaurants, bars and nightlife with photogenic colourful shophouses." },
      { type: "subheading", content: "Boat Quay" },
      { type: "paragraph", content: "Singapore's oldest trading port — restored shophouses, historic architecture and the financial district as a backdrop." },
      { type: "subheading", content: "Marina Bay" },
      { type: "list", items: ["Marina Bay Sands","Merlion Park","Esplanade Theatres on the Bay","Helix Bridge"] },
      { type: "paragraph", content: "This stretch offers the best photo opportunities of the entire cruise." },
      { type: "heading", content: "Day vs Night Cruise" },
      { type: "list", items: ["Day cruise — clearer views of architecture, better for history, smaller crowds","Night cruise (recommended) — illuminated skyline, water reflections, romantic atmosphere"] },
      { type: "heading", content: "Duration, Timing & Cost (2026 INR)" },
      { type: "list", items: ["Total duration: ~40 minutes","Best time: 7 PM – 9 PM for night views","Standard ticket — ₹1,500–₹1,900","Combo with attractions — ₹2,400+"] },
      { type: "cta", content: "Book Singapore River Cruise", link: "/singapore/things-to-do", linkText: "Book River Cruise" },
      { type: "heading", content: "What to Expect On Board" },
      { type: "list", items: ["Comfortable open-side bumboat seating","Audio commentary on history and landmarks","Plenty of photo angles unique to water level"] },
      { type: "heading", content: "Tips for the Best Experience" },
      { type: "list", items: ["Choose night timing for best views","Sit on the outer side for better photos","Keep your camera ready throughout","Avoid weekend peak hours","Combine with Gardens by the Bay and Marina Bay Sands SkyPark"] },
      { type: "heading", content: "Perfect Evening Plan" },
      { type: "list", items: ["Visit Gardens by the Bay","Walk around Marina Bay","Take the river cruise at sunset","Dinner at Clarke Quay"] },
      { type: "heading", content: "Is It Worth It?" },
      { type: "paragraph", content: "Yes — if you want a calm, scenic break from walking and a chance to see Singapore from a completely different angle. It's not a high-adrenaline attraction, but it delivers one of the most relaxing premium experiences in the city." },
    ]}
    relatedActivities={[
      { title: "Singapore City Tour", link: "/singapore/singapore-city-tour" },
      { title: "Big Bus Hop-On Hop-Off", link: "/singapore/things-to-do" },
    ]}
    relatedLinks={[
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide" },
      { title: "Singapore Flyer Observation Wheel Experience", link: "/singapore/destination-guides/activity/singapore-flyer-observation-wheel" },
      { title: "Singapore City Tour with Shared Transfer", link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer" },
      { title: "Big Bus Singapore Hop-On Hop-Off", link: "/singapore/destination-guides/activity/big-bus-singapore-hop-on-hop-off" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogSingaporeRiverCruiseGuide;
