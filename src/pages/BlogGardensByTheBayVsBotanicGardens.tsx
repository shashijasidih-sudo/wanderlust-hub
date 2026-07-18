import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-gardens-bay-night-1.jpg";

const LINK = "/singapore/destination-guides/comparison/gardens-by-the-bay-vs-singapore-botanic-gardens";

const Blog = () => (
  <BlogArticleLayout
    title="Gardens by the Bay vs Singapore Botanic Gardens — Which Garden Should You Visit? (2026)"
    description="Gardens by the Bay vs Singapore Botanic Gardens — concept, attractions, duration, INR cost and which to pick for families, couples and first-time travelers."
    heroImage={heroImg}
    heroAlt="Supertree Grove at Gardens by the Bay compared with green pathways of Singapore Botanic Gardens"
    author="Yellodae Travel Expert"
    date="May 19, 2026"
    readTime="10 min read"
    category="Comparison Blogs"
    keywords={["gardens by the bay vs botanic gardens","singapore gardens comparison","cloud forest singapore","singapore botanic gardens guide","best garden singapore"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Comparison Guides", link: "/singapore/destination-guides#comparison" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do/" }}
    sections={[
      { type: "paragraph", content: "Singapore is famously a 'city in a garden', and two attractions define that identity — the futuristic Gardens by the Bay and the UNESCO-listed Singapore Botanic Gardens. Both are stunning but completely different in concept. This 2026 guide compares them side-by-side so you can decide which one (or both) fits your Singapore itinerary." },
      { type: "heading", content: "Quick Overview" },
      { type: "subheading", content: "Gardens by the Bay" },
      { type: "paragraph", content: "A futuristic nature park near Marina Bay — home to the Supertree Grove, Cloud Forest, Flower Dome and the nightly Garden Rhapsody light show. High-tech, dramatic and Insta-friendly." },
      { type: "subheading", content: "Singapore Botanic Gardens" },
      { type: "paragraph", content: "Singapore's only UNESCO World Heritage Site — 160+ years of tropical horticulture, sprawling lawns, the National Orchid Garden and quiet rainforest trails. Calm, classic, and free to enter." },
      { type: "heading", content: "Concept & Experience" },
      { type: "list", items: ["Gardens by the Bay — futuristic, themed, ticketed conservatories","Botanic Gardens — traditional, heritage, mostly free public park","Verdict — different vibes, both worth doing"] },
      { type: "heading", content: "Top Attractions" },
      { type: "subheading", content: "Gardens by the Bay" },
      { type: "list", items: ["Supertree Grove (free outdoor area)","Cloud Forest (indoor waterfall + misty walk)","Flower Dome (largest glass greenhouse in the world)","Garden Rhapsody light & sound show (free, 7:45 PM & 8:45 PM)","Floral Fantasy + OCBC Skyway"] },
      { type: "subheading", content: "Singapore Botanic Gardens" },
      { type: "list", items: ["National Orchid Garden (1,000+ orchid species)","Swan Lake & Eco Lake","Healing Garden + Ginger Garden","Rainforest walking trails","UNESCO heritage zone"] },
      { type: "heading", content: "Best For" },
      { type: "list", items: ["First-time visitors — Gardens by the Bay (iconic)","Couples — Gardens by the Bay (Supertree show)","Families with kids — Gardens by the Bay","Nature lovers — Botanic Gardens","Photography / heritage seekers — Botanic Gardens","Morning walkers / quiet escape — Botanic Gardens"] },
      { type: "heading", content: "Duration Required" },
      { type: "list", items: ["Gardens by the Bay — 3–4 hours (with conservatories + show)","Botanic Gardens — 2–3 hours (more if you walk slowly)"] },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["Gardens by the Bay — late afternoon → stay for the 7:45 PM Garden Rhapsody show","Botanic Gardens — early morning (7–9 AM) for cool weather and birdsong"] },
      { type: "heading", content: "Cost Comparison (2026 INR)" },
      { type: "list", items: ["Gardens by the Bay — outdoor areas + Supertree show are FREE","Gardens by the Bay Cloud Forest + Flower Dome combo — ₹3,000–₹3,800","OCBC Skyway — ₹800–₹1,200","Singapore Botanic Gardens — FREE (entire park)","National Orchid Garden — ₹300–₹500"] },
      { type: "tip-box", content: "On a tight budget? Walk the Botanic Gardens for free in the morning, then catch the free Supertree light show at Gardens by the Bay at night." },
      { type: "cta", content: "Plan your Singapore sightseeing day", link: "/singapore/things-to-do/", linkText: "See Singapore Activities" },
      { type: "heading", content: "Crowd Levels" },
      { type: "list", items: ["Gardens by the Bay — very crowded, especially evenings","Botanic Gardens — calm, even on weekends"] },
      { type: "heading", content: "Photography" },
      { type: "list", items: ["Gardens by the Bay — dramatic Supertrees, neon-lit Cloud Forest, Marina Bay backdrop","Botanic Gardens — orchids, lakes, lush greens, soft natural light"] },
      { type: "heading", content: "Pros & Cons" },
      { type: "subheading", content: "Gardens by the Bay" },
      { type: "list", items: ["✔ Iconic + photogenic","✔ Free outdoor zones + free show","✔ All-weather (indoor domes)","❌ Crowded","❌ Conservatories are paid"] },
      { type: "subheading", content: "Singapore Botanic Gardens" },
      { type: "list", items: ["✔ Completely free","✔ Peaceful + heritage","✔ Great for morning walks","❌ Less 'wow' factor","❌ Limited indoor shelter on rainy days"] },
      { type: "heading", content: "Can You Visit Both in One Day?" },
      { type: "paragraph", content: "Yes — and we recommend it. Morning: Botanic Gardens + National Orchid Garden. Afternoon rest. Evening: Gardens by the Bay → Cloud Forest → Flower Dome → Garden Rhapsody show at 7:45 PM. This single day captures both sides of Singapore's garden identity." },
      { type: "heading", content: "Final Verdict" },
      { type: "list", items: ["🥇 Best overall — Gardens by the Bay","🌿 Most peaceful — Singapore Botanic Gardens","💰 Best free experience — Both (combined smartly)"] },
      { type: "paragraph", content: "If you only have one slot, choose Gardens by the Bay — it's the modern face of Singapore and a must-do. If you have an extra morning, the Botanic Gardens adds heritage, calm and beautiful walking trails for free." },
    ]}
    relatedActivities={[
      { title: "Gardens by the Bay Combo Tickets", link: "/singapore/things-to-do/" },
      { title: "Singapore City Tour with Shared Transfer", link: "/singapore/singapore-city-tour/" },
      { title: "Big Bus Singapore Hop-On Hop-Off", link: "/singapore/things-to-do/" },
      { title: "Singapore Flyer Tickets", link: "/singapore/things-to-do/" },
    ]}
    relatedLinks={[
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide/" },
      { title: "Singapore Flyer Observation Wheel Experience", link: "/singapore/destination-guides/activity/singapore-flyer-observation-wheel/" },
      { title: "Singapore River Cruise Experience", link: "/singapore/destination-guides/activity/singapore-river-cruise-guide/" },
      { title: "Singapore City Tour with Shared Transfer", link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer/" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default Blog;
