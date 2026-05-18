import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-big-bus.jpg";

const LINK = "/singapore/destination-guides/activity/big-bus-singapore-hop-on-hop-off";

const BlogBigBusSingaporeHopOnHopOff = () => (
  <BlogArticleLayout
    title="Big Bus Singapore Hop-On Hop-Off Experience — Routes, Tips & Cost"
    description="Big Bus Singapore hop-on hop-off guide — Red heritage route, Yellow city route, 24/48-hour passes and how to plan your stops efficiently."
    heroImage={heroImg}
    heroAlt="Big Bus Singapore red double-decker driving past Marina Bay Sands"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["big bus singapore","singapore hop on hop off","singapore sightseeing bus","singapore bus tour","big bus tickets"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Big Bus Singapore is a hop-on hop-off sightseeing service that lets you explore Singapore at your own pace — informative commentary, panoramic views from an open-top double-decker and complete flexibility to get off at any attraction you like." },
      { type: "heading", content: "How the Hop-On Hop-Off System Works" },
      { type: "list", items: ["Purchase a 24- or 48-hour ticket","Board at any designated stop","Get off at attractions you want to explore","Reboard another bus later — unlimited rides during validity"] },
      { type: "heading", content: "Routes Covered" },
      { type: "subheading", content: "Red Route (Heritage Route)" },
      { type: "list", items: ["Chinatown","Little India","Kampong Glam","Clarke Quay"] },
      { type: "subheading", content: "Yellow Route (City Route)" },
      { type: "list", items: ["Marina Bay Sands","Gardens by the Bay","Orchard Road","Singapore Flyer"] },
      { type: "heading", content: "Key Attractions You Can Access" },
      { type: "list", items: ["Marina Bay Sands","Gardens by the Bay","Merlion Park","Singapore Flyer","Orchard Road","Chinatown","Little India"] },
      { type: "heading", content: "Ticket Options & Cost (2026 INR)" },
      { type: "list", items: ["24-hour pass — ₹3,200–₹3,800 (best for short trips)","48-hour pass — ₹4,500–₹5,200 (relaxed exploration)","Night Tour add-on — ₹1,800+"] },
      { type: "cta", content: "Plan Your Big Bus Day", link: "/singapore/things-to-do", linkText: "Book Singapore Activities" },
      { type: "heading", content: "What to Expect Onboard" },
      { type: "list", items: ["Open-top upper deck — best for views and photos","Audio commentary in multiple languages","Air-conditioned lower deck for hot weather"] },
      { type: "heading", content: "Tips for the Best Experience" },
      { type: "list", items: ["Start early in the day to maximise ticket value","Sit on the upper deck for best views","Carry sunscreen and water","Plan your stops in advance","Use both routes for full city coverage"] },
      { type: "heading", content: "Big Bus vs Other Transport Options" },
      { type: "list", items: ["MRT — cheapest, but requires planning","Taxi / private transfer — most convenient, expensive","Big Bus — balanced: combines transport with guided sightseeing"] },
      { type: "heading", content: "How to Include in Your Itinerary" },
      { type: "list", items: ["Day 1 — Yellow Route: Marina Bay + Orchard","Day 2 — Red Route: Chinatown + Little India + Kampong Glam"] },
      { type: "heading", content: "Is Big Bus Singapore Worth It?" },
      { type: "paragraph", content: "Yes — especially for first-time visitors, families and short-stay travellers who want a stress-free guided overview of the city. It's not just transport, it's a complete sightseeing experience in itself." },
    ]}
    relatedActivities={[
      { title: "Singapore City Tour", link: "/singapore/singapore-city-tour" },
      { title: "Sentosa Cable Car Tickets", link: "/singapore/sentosa-cable-car-tickets-and-transfers" },
    ]}
    relatedLinks={[
      { title: "Singapore City Tour with Shared Transfer", link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer" },
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide" },
      { title: "Singapore Flyer Observation Wheel", link: "/singapore/destination-guides/activity/singapore-flyer-observation-wheel" },
      { title: "Singapore River Cruise Experience", link: "/singapore/destination-guides/activity/singapore-river-cruise-guide" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogBigBusSingaporeHopOnHopOff;
