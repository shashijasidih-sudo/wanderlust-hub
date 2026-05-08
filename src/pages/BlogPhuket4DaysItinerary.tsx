import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/phi-phi-1.jpg";

const BlogPhuket4DaysItinerary = () => (
  <BlogArticleLayout
    title="4 Days Phuket Itinerary 2026: Phi Phi, City Tour & Activities Plan"
    description="Perfectly balanced 4-day Phuket itinerary for Indian travelers — Phi Phi Islands, city tour, adventure activities, costs in INR and smart travel tips."
    heroImage={heroImg}
    heroAlt="Turquoise water and limestone cliffs of Phi Phi Islands near Phuket"
    author="Yellodae Travel Expert"
    date="May 8, 2026"
    readTime="10 min read"
    category="Itinerary Blogs"
    keywords={["4 days phuket itinerary","phuket 4 day plan","phuket itinerary indian travelers","phi phi city tour 4 days","phuket trip plan 2026"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/phuket/destination-guides#itinerary" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "Planning a 4-day Phuket trip and wondering how to cover everything? Phuket packs island tours, cultural sights, adventure activities, beaches and nightlife — but with limited time, most Indian travelers struggle to balance it all. This itinerary gives you the perfect mix of adventure, sightseeing and relaxation for first-time visitors and couples." },
      { type: "heading", content: "Phuket 4-Day Itinerary Overview" },
      { type: "list", items: ["Day 1 — Arrival + Leisure","Day 2 — Phi Phi Island Tour","Day 3 — City Tour + Adventure Activities","Day 4 — Shopping + Departure"] },
      { type: "heading", content: "Day 1: Arrival in Phuket + Leisure" },
      { type: "paragraph", content: "Take a private airport transfer (₹1,500–₹2,500, 45–60 min). Check in at Patong (nightlife) or Kata/Karon (peaceful). Keep the evening light — relax at the beach, explore local markets and try Indian or Thai street food. Day 1 is for recovering from travel." },
      { type: "heading", content: "Day 2: Phi Phi Island Tour (Highlight Day)" },
      { type: "paragraph", content: "Speedboat pickup at 7 AM, return by 4:30 PM. Covers Maya Bay, Pileh Lagoon, Monkey Beach and Viking Cave with snorkeling, swimming and beach time. Cost ₹5,000–₹8,000 per person. Carry sunscreen, wear comfortable clothes and choose a speedboat over big boat for a better experience." },
      { type: "cta", content: "Book the most popular Phi Phi speedboat day from Phuket", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer", linkText: "Book Phi Phi Speedboat" },
      { type: "heading", content: "Day 3: City Tour + Adventure Activities" },
      { type: "paragraph", content: "Morning city tour (4–5 hours, ₹2,000–₹4,000): Big Buddha, Wat Chalong, Karon Viewpoint, Phuket Old Town. Afternoon — pick 1–2 adventures: jet ski, parasailing, ATV ride or zipline (₹3,000–₹6,000). Evening: Patong Beach and optional Bangla Road." },
      { type: "tip-box", content: "Don't try to add James Bond Island in a 4-day plan — it crushes pace. Save it for a 5-day Phuket itinerary." },
      { type: "heading", content: "Day 4: Shopping + Departure" },
      { type: "paragraph", content: "Morning shopping at Phuket Old Town, local markets and malls. Hotel checkout, private transfer to airport. Keep buffer time for your flight." },
      { type: "heading", content: "Total Cost Breakdown (4 Days)" },
      { type: "list", items: ["Hotel: ₹10K–₹25K","Activities: ₹10K–₹20K","Food: ₹5K","Transport: ₹5K","Total: ₹30K–₹60K per person"] },
      { type: "heading", content: "Smart Travel Tips" },
      { type: "list", items: ["Book island tours in advance","Don't overpack the itinerary","Mix relaxation with activities","Carry cash for small expenses"] },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: ["Skipping the Phi Phi tour","Choosing the cheapest tours","Overloading Day 1 jet-lagged"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 4-day Phuket itinerary covers the top attractions, balances the schedule and stays budget-friendly — perfect for first-time visitors, couples and families looking for a complete short Phuket trip." },
      { type: "cta", content: "Plan your full Phuket trip with curated activities", link: "/thailand/phuket/things-to-do", linkText: "Explore Phuket Tours" },
    ]}
    relatedActivities={[
      { title: "Full-Day Phi Phi Speedboat Tour", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
      { title: "Phuket City Tour with Tiger Kingdom", link: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer" },
      { title: "James Bond Island Speedboat Tour", link: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer" },
      { title: "Phuket Elephant Safari", link: "/thailand/phuket/elephant-safari" },
    ]}
    relatedLinks={[
      { title: "5 Days Phuket Itinerary with Phi Phi & James Bond", link: "/thailand/phuket/destination-guides/itinerary/phuket-5-days-itinerary" },
      { title: "Phuket Honeymoon Itinerary (4–5 Days)", link: "/thailand/phuket/destination-guides/itinerary/phuket-honeymoon-itinerary" },
      { title: "Best Phi Phi Island Tours from Phuket", link: "/thailand/phuket/destination-guides/activity/best-phi-phi-island-tours" },
      { title: "Phuket City Tour Guide", link: "/thailand/phuket/destination-guides/activity/phuket-city-tour-guide" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do" },
    ]}
  />
);

export default BlogPhuket4DaysItinerary;
