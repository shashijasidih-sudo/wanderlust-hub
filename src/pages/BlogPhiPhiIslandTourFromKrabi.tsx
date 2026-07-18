import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/phi-phi-boat.jpeg";

const BlogPhiPhiIslandTourFromKrabi = () => (
  <BlogArticleLayout
    title="Phi Phi Island Tour from Krabi: Full Day Experience Explained (2026 Guide)"
    description="Full day Phi Phi Island tour from Krabi — Maya Bay, Pileh Lagoon, Viking Cave, speedboat vs ferry, INR cost, itinerary and insider tips for 2026."
    heroImage={heroImg}
    heroAlt="Phi Phi Island longtail boats over turquoise water"
    author="Yellodae Travel Expert"
    date="May 16, 2026"
    readTime="11 min read"
    category="Activity Blogs"
    keywords={["phi phi island tour from krabi","maya bay tour","pileh lagoon","krabi to phi phi tour","phi phi 2026 guide"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/krabi/destination-guides#activity" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do/", transfersLink: "/thailand/krabi/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "The Phi Phi Islands are one of Thailand's most iconic destinations — and if you're staying in Krabi, a Phi Phi Island tour is an absolute must-do. Turquoise lagoons, dramatic limestone cliffs and world-famous beaches make this full-day trip a perfect mix of adventure and postcard scenery." },
      { type: "heading", content: "What is the Phi Phi Island Tour from Krabi?" },
      { type: "list", items: ["Phi Phi Don (main island)","Phi Phi Leh (home to Maya Bay)","Pileh Lagoon","Viking Cave","Bamboo Island (in some tours)"] },
      { type: "paragraph", content: "Choose between speedboat or ferry — most travelers prefer speedboats for flexibility and time efficiency." },
      { type: "heading", content: "Full Day Itinerary (What Actually Happens)" },
      { type: "list", items: ["Hotel pickup — 7:30 AM","Speedboat departs Ao Nang or Krabi pier","Maya Bay — swim in emerald-green water","Pileh Lagoon — snorkel and photos","Viking Cave — sightseeing pass-by","Monkey Beach — short stop","Lunch at Phi Phi Don","Bamboo Island (selected tours) for snorkeling","Return to Krabi 4:00–5:00 PM"] },
      { type: "heading", content: "Types of Phi Phi Tours" },
      { type: "list", items: ["Speedboat tour — fastest, most popular","Ferry tour — cheaper, more relaxed","Private speedboat — flexible, premium"] },
      { type: "heading", content: "Cost (2026, INR)" },
      { type: "list", items: ["Speedboat group tour — ₹3,500–₹5,500 per person","Ferry — ₹2,000–₹3,000 per person","Private speedboat — ₹35,000+ for 6 pax","Extras — National Park Fee ₹400–₹600, longtail photos ₹300–₹500"] },
      { type: "heading", content: "What's Included" },
      { type: "list", items: ["Hotel transfers","Speedboat / ferry transfer","Buffet lunch","Snorkel gear and life jacket","English-speaking guide"] },
      { type: "cta", content: "Book the Phi Phi Island Tour from Krabi", link: "/thailand/krabi/things-to-do/", linkText: "Book Phi Phi Tour" },
      { type: "heading", content: "Why It's Worth It" },
      { type: "list", items: ["Iconic locations","Stunning natural beauty","Great for first-time visitors"] },
      { type: "heading", content: "Downsides" },
      { type: "list", items: ["Can be crowded at Maya Bay","Ride can get rough in monsoon","Don't expect privacy"] },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Pre-book to skip queues","Carry motion sickness tablets","Reach Maya Bay early","Wear quick-dry clothing"] },
      { type: "heading", content: "Suggested Itinerary Integration" },
      { type: "list", items: ["Day 1 — 4 Island Tour","Day 2 — Phi Phi Tour","Day 3 — Hong Island / Jungle"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "The Phi Phi Island Tour from Krabi lives up to the hype — Maya Bay and Pileh Lagoon are unforgettable. Plan smart, start early and it's the highlight of any Krabi trip." },
    ]}
    relatedActivities={[
      { title: "Phi Phi Island by Speedboat from Krabi", link: "/thailand/krabi/things-to-do/" },
      { title: "Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do/" },
      { title: "Hong Island Tour", link: "/thailand/krabi/things-to-do/" },
    ]}
    relatedLinks={[
      { title: "4 Island Tour Krabi Guide", link: "/thailand/krabi/destination-guides/activity/4-island-tour-krabi-guide/" },
      { title: "Hong Island Tour Krabi", link: "/thailand/krabi/destination-guides/activity/hong-island-tour-krabi/" },
      { title: "Krabi to Phi Phi: Ferry vs Speedboat", link: "/thailand/krabi/destination-guides/transfer/krabi-to-phi-phi-ferry-vs-speedboat/" },
      { title: "Krabi vs Phi Phi: Where to Stay", link: "/thailand/krabi/destination-guides/comparison/krabi-vs-phi-phi-where-to-stay/" },
      { title: "15 Best Things to Do in Krabi", link: "/thailand/krabi/destination-guides/activity/15-best-things-to-do-in-krabi/" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/activity/phi-phi-island-tour-from-krabi")}
  />
);

export default BlogPhiPhiIslandTourFromKrabi;
