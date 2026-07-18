import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-city-tour.jpg";

const LINK = "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer";

const BlogSingaporeCityTourSharedTransfer = () => (
  <BlogArticleLayout
    title="Singapore City Tour with Guide & Shared Transfer Itinerary (2026)"
    description="Half-day Singapore city tour with shared transfer — Merlion Park, Marina Bay, Chinatown, Little India and Orchard Road. INR pricing, timings and tips."
    heroImage={heroImg}
    heroAlt="Singapore Merlion statue with Marina Bay Sands in the background"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["singapore city tour","shared transfer singapore","singapore sightseeing","merlion tour","chinatown little india tour"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do/" }}
    sections={[
      { type: "paragraph", content: "Singapore is one of the most organised, modern and tourist-friendly destinations in the world. A Singapore City Tour with a guide and shared transfer is the smartest way to cover the iconic landmarks in a single half-day — without worrying about navigation, transport or missed photo stops." },
      { type: "heading", content: "What is a Singapore City Tour with Shared Transfer?" },
      { type: "paragraph", content: "A guided sightseeing experience where you're picked up from your hotel in a comfortable air-conditioned vehicle along with other tourists. A fixed itinerary covers the city's major landmarks, cultural districts and iconic photo spots — at a fraction of a private tour's cost." },
      { type: "heading", content: "What's Included" },
      { type: "list", items: ["Hotel pickup and drop-off","Air-conditioned coach or van","English-speaking professional guide","Visits to major landmarks","Photo stops at iconic locations"] },
      { type: "heading", content: "Detailed Half-Day Itinerary" },
      { type: "subheading", content: "1. Merlion Park — Singapore's Iconic Landmark" },
      { type: "paragraph", content: "Your tour begins at Merlion Park with panoramic views of Marina Bay Sands, the Singapore skyline and the waterfront promenade — the perfect postcard-worthy starting point." },
      { type: "subheading", content: "2. Marina Bay Sands (Drive-By or Photo Stop)" },
      { type: "paragraph", content: "Pass by or stop briefly at the world-famous Marina Bay Sands while your guide narrates Singapore's transformation into a global luxury hub." },
      { type: "subheading", content: "3. Chinatown — Heritage Exploration" },
      { type: "list", items: ["Buddha Tooth Relic Temple","Chinatown Street Market","Traditional souvenir shops"] },
      { type: "subheading", content: "4. Little India — Favourite for Indian Travellers" },
      { type: "list", items: ["Sri Veeramakaliamman Temple","Indian restaurants and sweet shops","Local markets and souvenir stores"] },
      { type: "subheading", content: "5. Orchard Road — Singapore's Shopping Paradise" },
      { type: "paragraph", content: "A scenic drive through luxury malls and international flagship stores — a useful preview if you plan to return later for shopping." },
      { type: "subheading", content: "6. Gardens by the Bay (Optional Stop)" },
      { type: "paragraph", content: "Some tours include a quick stop at Supertree Grove; others offer it as an upgrade. Either way, you'll see Singapore's futuristic side." },
      { type: "heading", content: "Duration & Timings (2026)" },
      { type: "list", items: ["Duration: 3–4 hours","Morning tour: 8:30–9:00 AM (recommended — cooler weather, less traffic)","Afternoon tour: 1:30–2:00 PM"] },
      { type: "heading", content: "Cost in 2026 (INR)" },
      { type: "list", items: ["Shared half-day tour — ₹2,200–₹3,500 per person","Private half-day tour — ₹8,500+ per group"] },
      { type: "cta", content: "Book the Singapore City Tour", link: "/singapore/singapore-city-tour/", linkText: "Book City Tour" },
      { type: "heading", content: "Why Shared Transfer Over Private Tour?" },
      { type: "list", items: ["Cost-effective — significantly cheaper than private","Hassle-free — no routes, transport or tickets to figure out","Social — meet fellow travellers","Fixed itinerary — perfect for first-timers"] },
      { type: "heading", content: "Tips to Maximise Your Experience" },
      { type: "list", items: ["Wear comfortable walking shoes","Carry sunscreen and sunglasses","Keep a water bottle handy","Charge your phone/camera","Listen to the guide for local insights"] },
      { type: "heading", content: "Is It Worth It?" },
      { type: "paragraph", content: "Yes — especially for first-time visitors. It gives you a perfect introduction to the city's layout, culture and major attractions, helping you decide which spots to revisit in depth later." },
    ]}
    relatedActivities={[
      { title: "Singapore City Tour", link: "/singapore/singapore-city-tour/" },
      { title: "Night Safari Tickets & Transfers", link: "/singapore/night-safari-singapore-tickets-and-transfers/" },
      { title: "Sentosa Cable Car Tickets", link: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
    ]}
    relatedLinks={[
      { title: "Night Safari Singapore Experience Guide", link: "/singapore/destination-guides/activity/night-safari-singapore-guide/" },
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide/" },
      { title: "Big Bus Singapore Hop-On Hop-Off", link: "/singapore/destination-guides/activity/big-bus-singapore-hop-on-hop-off/" },
      { title: "Universal Studios Singapore Full Experience", link: "/singapore/destination-guides/activity/universal-studios-singapore-guide/" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogSingaporeCityTourSharedTransfer;
