import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-gardens-bay.jpg";

const LINK = "/singapore/destination-guides/activity/gardens-by-the-bay-guide";

const BlogGardensByTheBayGuide = () => (
  <BlogArticleLayout
    title="Gardens by the Bay Attractions Guide — Cloud Forest, Flower Dome & Supertrees"
    description="Gardens by the Bay 2026 guide — Supertree Grove, Cloud Forest, Flower Dome, Garden Rhapsody light show, free vs paid attractions and INR cost."
    heroImage={heroImg}
    heroAlt="Gardens by the Bay Supertrees illuminated against Singapore night sky"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["gardens by the bay","supertree grove","cloud forest singapore","flower dome","garden rhapsody light show"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Spanning over 100 hectares near Marina Bay, Gardens by the Bay blends cutting-edge technology with environmental sustainability — themed gardens, climate-controlled conservatories, towering Supertrees and immersive light shows. It's one of the most iconic and rewarding attractions in Singapore." },
      { type: "heading", content: "Three Waterfront Gardens" },
      { type: "list", items: ["Bay South Garden (most popular — all main attractions are here)","Bay East Garden","Bay Central Garden"] },
      { type: "heading", content: "Top Attractions Inside" },
      { type: "subheading", content: "Supertree Grove" },
      { type: "list", items: ["Vertical gardens 25–50m tall","Covered in plants and ferns","Eco-friendly solar features","Stunning illuminated night light show"] },
      { type: "subheading", content: "Garden Rhapsody Light Show (Free)" },
      { type: "paragraph", content: "Every evening, the Supertree Grove comes alive with a synchronised music and lights show. Magical atmosphere, free entry — a must-see Singapore experience." },
      { type: "subheading", content: "OCBC Skyway" },
      { type: "paragraph", content: "A suspended walkway between two Supertrees offering elevated views of the gardens and Marina Bay skyline." },
      { type: "subheading", content: "Cloud Forest" },
      { type: "list", items: ["One of the world's tallest indoor waterfalls","Mist-filled mountain walkway","Rare tropical highland plant species"] },
      { type: "subheading", content: "Flower Dome" },
      { type: "list", items: ["Seasonal floral displays","Mediterranean and desert plant collections","Themes change throughout the year"] },
      { type: "heading", content: "Free vs Paid Attractions" },
      { type: "list", items: ["Free — Supertree Grove, Garden Rhapsody, outdoor gardens","Paid — Cloud Forest, Flower Dome, OCBC Skyway"] },
      { type: "heading", content: "Cost in 2026 (INR)" },
      { type: "list", items: ["Cloud Forest + Flower Dome combo — ₹3,000–₹3,600","OCBC Skyway — ₹700–₹900","Floral Fantasy add-on — ₹1,000+"] },
      { type: "cta", content: "Plan Your Gardens by the Bay Visit", link: "/singapore/things-to-do", linkText: "Explore Singapore Activities" },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["Afternoon — start in the conservatories (cool indoors)","Evening (highly recommended) — Supertree light show, cooler weather, skyline views","Ideal plan: afternoon visit, stay until evening for the full experience"] },
      { type: "heading", content: "How to Reach Gardens by the Bay" },
      { type: "list", items: ["MRT — Bayfront Station (most convenient)","Taxi or private transfer","Walking from Marina Bay Sands via pedestrian bridge"] },
      { type: "heading", content: "Tips for the Best Experience" },
      { type: "list", items: ["Visit Cloud Forest first (less crowded early)","Carry water and wear comfortable shoes","Stay for the evening Garden Rhapsody light show","Book conservatory tickets online to skip queues","Check seasonal displays in the Flower Dome before visiting"] },
      { type: "heading", content: "How to Include in Your Itinerary" },
      { type: "list", items: ["Afternoon: Cloud Forest + Flower Dome","Evening: Walk around Supertree Grove","Night: Garden Rhapsody show","Combine with Marina Bay Sands, Singapore River Cruise and Merlion Park"] },
    ]}
    relatedActivities={[
      { title: "Singapore City Tour", link: "/singapore/singapore-city-tour" },
      { title: "Sentosa Cable Car Tickets", link: "/singapore/sentosa-cable-car-tickets-and-transfers" },
    ]}
    relatedLinks={[
      { title: "Singapore Flyer Observation Wheel Experience", link: "/singapore/destination-guides/activity/singapore-flyer-observation-wheel" },
      { title: "Singapore River Cruise Experience", link: "/singapore/destination-guides/activity/singapore-river-cruise-guide" },
      { title: "Singapore City Tour with Shared Transfer", link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer" },
      { title: "Big Bus Singapore Hop-On Hop-Off", link: "/singapore/destination-guides/activity/big-bus-singapore-hop-on-hop-off" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogGardensByTheBayGuide;
