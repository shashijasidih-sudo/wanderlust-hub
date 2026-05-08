import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/krabi-longtail-boats-1.jpg";

const BlogPhuketKrabiComboItinerary = () => (
  <BlogArticleLayout
    title="Phuket + Krabi Combo Itinerary 2026: 6–7 Days Thailand Plan"
    description="The smartest 6–7 day Phuket + Krabi combo itinerary for Indian travelers — why it works, day-by-day plan, transfer tips and total cost in INR."
    heroImage={heroImg}
    heroAlt="Limestone cliffs and longtail boats on a Krabi beach"
    author="Yellodae Travel Expert"
    date="May 8, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["phuket krabi combo itinerary","phuket krabi 7 days","southern thailand itinerary","phuket krabi plan indian travelers","phuket to krabi trip"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/phuket/destination-guides#itinerary" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "Combining Phuket and Krabi isn't just popular — it's the smartest way to experience southern Thailand in one trip. Phuket = activities, nightlife and organised tours. Krabi = scenic beauty, peaceful beaches and relaxation. Choose only one and you miss half the experience." },
      { type: "heading", content: "Why Combine Phuket + Krabi?" },
      { type: "list", items: ["Phuket: Phi Phi, James Bond, adventure, nightlife, infrastructure","Krabi: limestone cliffs, quiet beaches, relaxed pace, viewpoints","Together: energetic 'doing' phase + relaxed 'slowing down' phase"] },
      { type: "heading", content: "Ideal Length: 6–7 Days" },
      { type: "paragraph", content: "5 days = rushed. 7 days = sweet spot with no travel fatigue. 10 days = too long for a combo unless you add Koh Lanta or Koh Phi Phi as a stay." },
      { type: "heading", content: "Day 1: Arrival in Phuket" },
      { type: "paragraph", content: "Direct international flights make Phuket the ideal entry point. Private transfer to hotel, light dinner, sleep early." },
      { type: "heading", content: "Day 2: Phi Phi Island Tour from Phuket" },
      { type: "paragraph", content: "Your 'wow' day — turquoise water, Maya Bay, Pileh Lagoon, snorkeling. Cost ₹5,000–₹8,500. Speedboat strongly recommended." },
      { type: "cta", content: "Book the Phi Phi day from Phuket", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer", linkText: "Book Phi Phi Tour" },
      { type: "heading", content: "Day 3: Phuket Exploration" },
      { type: "paragraph", content: "City tour — Big Buddha, Wat Chalong, Old Town and an adventure activity in the afternoon (₹3,000–₹6,000). Evening: Patong or beach club." },
      { type: "heading", content: "Day 4: Phuket → Krabi Transfer (Buffer Day)" },
      { type: "paragraph", content: "Private car transfer (2.5–3 hours, comfortable, flexible). Don't plan activities this day — travel drains energy and delays are common. Treat Day 4 as a buffer + reset day." },
      { type: "heading", content: "Day 5: Krabi 4 Islands Tour" },
      { type: "paragraph", content: "The signature Krabi experience — Tup Island sandbar, Chicken Island, Poda Island and Phra Nang Cave. Calmer, less crowded than Phuket island tours." },
      { type: "tip-box", content: "Without a leisure day in Krabi, the trip feels rushed and you'll go home tired. Plan one full slow day — Railay Beach, café, Thai massage." },
      { type: "heading", content: "Day 6: Krabi Leisure (Critical)" },
      { type: "paragraph", content: "Visit Railay Beach by longtail boat, café-hop, get a Thai massage. This is the day Phuket-only travelers always miss." },
      { type: "heading", content: "Day 7: Departure" },
      { type: "paragraph", content: "Either fly out from Krabi airport (KBV) or transfer back to Phuket (HKT). Decide your return flight city before booking." },
      { type: "heading", content: "Cost Range (Indian Travelers)" },
      { type: "list", items: ["Group + budget hotels: ~₹60K per person","Mid-range + private tours: ~₹85K per person","Premium + private transport: ~₹1.2L per person","Drivers: hotel tier, tour type, transport style"] },
      { type: "heading", content: "Why This Itinerary Works" },
      { type: "list", items: ["Variety: beaches + culture + adventure","Balanced energy: active days and relax days","Geographic logic: Phuket → Krabi (no backtracking)"] },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: ["Skipping the leisure day in Krabi","Doing too many tours back-to-back","Poor transfer planning between cities","Choosing only budget options end-to-end"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "A 6–7 day Phuket + Krabi combo gives you the complete southern Thailand experience — energy in Phuket and calm in Krabi. Follow the day-by-day plan and your trip will feel complete, relaxed and memorable." },
      { type: "cta", content: "Plan your full southern Thailand trip", link: "/thailand/krabi", linkText: "Explore Krabi Tours" },
    ]}
    relatedActivities={[
      { title: "Full-Day Phi Phi Speedboat Tour", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
      { title: "James Bond Island Speedboat Tour", link: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer" },
      { title: "Krabi Emerald Pool & Hot Springs Tour", link: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer" },
      { title: "Phuket City Tour with Tiger Kingdom", link: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer" },
    ]}
    relatedLinks={[
      { title: "5 Days Phuket Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-5-days-itinerary" },
      { title: "Phuket vs Krabi for Indian Travelers", link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians" },
      { title: "Phuket Honeymoon Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-honeymoon-itinerary" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do" },
      { title: "Explore All Krabi Tours", link: "/thailand/krabi" },
    ]}
  />
);

export default BlogPhuketKrabiComboItinerary;
