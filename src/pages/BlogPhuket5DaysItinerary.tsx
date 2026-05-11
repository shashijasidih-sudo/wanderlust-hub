import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getPhuketInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/james-bond-island-hero.jpg";

const BlogPhuket5DaysItinerary = () => (
  <BlogArticleLayout
    title="5 Days Phuket Itinerary 2026: Phi Phi & James Bond Island Plan"
    description="The ideal 5-day Phuket itinerary covering Phi Phi, James Bond Island, city tour, adventure and shopping — costs in INR, hotels and tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="James Bond Island and Phang Nga Bay near Phuket"
    author="Yellodae Travel Expert"
    date="May 8, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["5 days phuket itinerary","phuket james bond phi phi plan","phuket 5 day itinerary indians","phuket trip plan 2026","phuket full week plan"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/phuket/destination-guides#itinerary" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "If 4 days feels rushed and 7 days is too long, 5 days in Phuket is the sweet spot. You can comfortably fit both Phi Phi and James Bond Island, a city tour, adventure activities and proper relaxation — without burnout." },
      { type: "heading", content: "Phuket 5-Day Itinerary Overview" },
      { type: "list", items: ["Day 1 — Arrival + Leisure","Day 2 — Phi Phi Island Tour","Day 3 — James Bond Island Tour","Day 4 — City Tour + Adventure","Day 5 — Shopping + Departure"] },
      { type: "heading", content: "Day 1: Arrival in Phuket" },
      { type: "paragraph", content: "Private transfer from HKT airport (₹1,500–₹2,500, 45–60 min). Check in at Patong (nightlife) or Kata/Karon (peaceful). Evening: relax at the beach, dinner at an Indian or Thai restaurant. Sleep early — Day 2 starts at 7 AM." },
      { type: "heading", content: "Day 2: Phi Phi Island Tour" },
      { type: "paragraph", content: "Speedboat tour 7 AM–4:30 PM covering Maya Bay, Pileh Lagoon, Monkey Beach and Viking Cave with snorkeling, swimming and beach time. Cost ₹5,000–₹8,500 per person. The single most important day of your trip." },
      { type: "cta", content: "Book your Phi Phi speedboat day", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer", linkText: "Book Phi Phi Tour" },
      { type: "heading", content: "Day 3: James Bond Island Tour" },
      { type: "paragraph", content: "Day trip to Phang Nga Bay — James Bond Island, Koh Panyee floating Muslim village and sea canoeing through limestone caves. Cost ₹3,500–₹6,000. Calmer, more scenic and less crowded than Phi Phi — a relaxing contrast." },
      { type: "tip-box", content: "Don't do Phi Phi and James Bond on consecutive days without sleep. The 5-day plan exists exactly to space them out." },
      { type: "heading", content: "Day 4: City Tour + Adventure Activities" },
      { type: "paragraph", content: "Morning city tour (₹2,000–₹4,000): Big Buddha, Wat Chalong, Karon Viewpoint, Phuket Old Town. Afternoon: pick 1–2 adventure options — ATV, zipline, parasailing or jet ski (₹3,000–₹6,000). Evening: Patong Beach and Bangla Road if you're up for nightlife." },
      { type: "heading", content: "Day 5: Shopping + Departure" },
      { type: "paragraph", content: "Morning shopping at Phuket Old Town, night markets and malls. Hotel checkout, private airport transfer with buffer time for your flight." },
      { type: "heading", content: "Total Cost Breakdown (5 Days)" },
      { type: "list", items: ["Hotel: ₹15K–₹35K","Activities: ₹15K–₹28K","Food: ₹6K–₹10K","Transport: ₹5K–₹8K","Total: ₹40K–₹80K per person"] },
      { type: "heading", content: "Smart Travel Tips" },
      { type: "list", items: ["Book island tours early — best slots sell out","Avoid back-to-back tiring days (this plan fixes it)","Use private transfers, not local taxis","Carry sunscreen and small cash"] },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: ["Doing both island tours on consecutive days","Picking the cheapest tour and regretting it","Trying to add Krabi in 5 days"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "5 days in Phuket is the most balanced plan — it covers the top experiences, avoids burnout and works perfectly for Indian travelers who want both Phi Phi and James Bond Island in one trip." },
      { type: "cta", content: "Pre-book your Phuket activities", link: "/thailand/phuket/things-to-do", linkText: "Explore Phuket Tours" },
    ]}
    relatedActivities={[
      { title: "Full-Day Phi Phi Speedboat Tour", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
      { title: "James Bond Island Speedboat Tour", link: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer" },
      { title: "Phuket City Tour with Tiger Kingdom", link: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer" },
      { title: "Phuket Elephant Safari", link: "/thailand/phuket/elephant-safari" },
    ]}
    relatedLinks={[
      { title: "4 Days Phuket Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-4-days-itinerary" },
      { title: "Phuket Honeymoon Itinerary (4–5 Days)", link: "/thailand/phuket/destination-guides/itinerary/phuket-honeymoon-itinerary" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
      { title: "James Bond vs Phi Phi", link: "/thailand/phuket/destination-guides/comparison/james-bond-island-vs-phi-phi-island" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do" },
    ]}
      internalLinks={getPhuketInternalLinks("")}
  />
);

export default BlogPhuket5DaysItinerary;
