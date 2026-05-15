import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-speedboat-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Phuket to Krabi Transfer Guide (Bus, Ferry, Taxi — 2026)"
    description="Complete 2026 Phuket to Krabi transfer guide — bus, ferry and private taxi compared on cost (INR), travel time, comfort and best option for Indian travelers."
    heroImage={heroImg}
    heroAlt="Speedboat travelling between Phuket and Krabi islands"
    author="Yellodae Travel Expert"
    date="May 14, 2026"
    readTime="10 min read"
    category="Transfer Blogs"
    keywords={["phuket to krabi","phuket to krabi transfer","phuket to krabi ferry","phuket to krabi taxi","phuket krabi distance"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Transfer Blogs", link: "/thailand/krabi/destination-guides#transfer" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Traveling between Phuket and Krabi is one of the most common routes in Thailand. Whether you're combining destinations or optimizing your itinerary, choosing the right transfer can save you time, money and a lot of hassle. The good news — there are multiple ways to travel from Phuket to Krabi, each suited for different budgets and travel styles. This complete 2026 guide compares bus, ferry and taxi on travel time, cost in INR, and the best option based on your needs." },
      { type: "heading", content: "Distance & Travel Overview" },
      { type: "list", items: ["Distance — approximately 160 km by road","Travel time — 2.5 to 4 hours depending on transport","Three main options — bus/van, ferry and private taxi"] },
      { type: "heading", content: "Transfer Options Summary" },
      { type: "list", items: ["Bus / Shared Van — ₹600–₹1,200, 3–4 hrs, best for budget","Ferry — ₹1,200–₹2,500, 2–3 hrs, best for scenic experience","Private Taxi — ₹4,000–₹7,000, 2.5–3 hrs, best for comfort and groups"] },
      { type: "heading", content: "1. Bus / Shared Van (Cheapest Option)" },
      { type: "list", items: ["Cost — ₹600–₹1,200 per person","Duration — 3 to 4 hours by road","Pros — cheapest, easily available, good road connectivity","Cons — less comfortable, limited luggage space, fixed schedule","Best for solo budget travelers"] },
      { type: "heading", content: "2. Ferry (Most Scenic Option)" },
      { type: "list", items: ["Cost — ₹1,200–₹2,500 per person","Duration — 2 to 3 hours via the Andaman Sea","Pros — beautiful sea route, relaxing, unique experience","Cons — weather-dependent, limited schedules, possible motion sickness","Best for couples and travelers who want experience over speed"] },
      { type: "tip-box", content: "Ferries usually run from November to April. During monsoon (May–October), services can be cancelled — book private taxi as a safer backup." },
      { type: "heading", content: "3. Private Taxi (Best Overall Option)" },
      { type: "list", items: ["Cost — ₹4,000–₹7,000 per vehicle (4–8 seater)","Duration — 2.5 to 3 hours, fastest road option","Pros — door-to-door, no waiting, ideal for families and groups","Cons — expensive for solo travelers","Best for families, couples and groups of 3+"] },
      { type: "cta", content: "Book a private Phuket → Krabi transfer at a fixed INR price", link: "/thailand/krabi/krabi-hotel-to-phuket-hotel-transfer", linkText: "Book Phuket–Krabi Transfer" },
      { type: "heading", content: "Cost Comparison (2026)" },
      { type: "list", items: ["Bus / Van — ₹600–₹1,200 per person","Ferry — ₹1,200–₹2,500 per person","Private Taxi — ₹4,000–₹7,000 per vehicle (₹1,000–₹1,750 per person for 4 pax)"] },
      { type: "heading", content: "Which Option Should You Choose?" },
      { type: "list", items: ["Budget travelers — bus or shared van","Scenic experience seekers — ferry","Comfort & speed — private taxi","Families with kids/elders — private taxi"] },
      { type: "heading", content: "Best Travel Strategy" },
      { type: "list", items: ["Solo backpacker — bus","Couple — ferry on the way in, taxi on the way back","Family of 4+ — private taxi both ways"] },
      { type: "heading", content: "Pro Tips for Smooth Journey" },
      { type: "list", items: ["Check weather before booking ferry — sea conditions matter","Book early in peak season (Dec–Feb) to avoid price surge","Carry snacks and water, especially for bus journeys","Choose private taxi for night travel — safer and easier","Keep luggage minimal for ferry / shared van"] },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: ["Booking ferry during monsoon without a backup plan","Choosing the cheapest van without checking reviews","Underestimating road travel time during weekends","Not confirming hotel pickup is included"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "For most Indian travelers, a private taxi is the best overall option for the Phuket to Krabi route — fast, comfortable and surprisingly affordable when shared. Budget solo travelers should pick the bus, while couples chasing a unique experience can take the ferry one way." },
      { type: "cta", content: "Book your Krabi airport or hotel transfer with English-speaking driver", link: "/thailand/krabi/budget-airport-transfers", linkText: "View All Krabi Transfers" },
    ]}
    relatedActivities={[
      { title: "Krabi Hotel to Phuket Hotel Transfer", link: "/thailand/krabi/krabi-hotel-to-phuket-hotel-transfer" },
      { title: "Krabi Hotel to Phuket Airport Transfer", link: "/thailand/krabi/krabi-hotel-to-phuket-airport-transfer" },
      { title: "Krabi Airport to Phuket Hotel Transfer", link: "/thailand/krabi/krabi-airport-to-phuket-hotel-transfer" },
      { title: "All Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers" },
    ]}
    relatedLinks={[
      { title: "Krabi Airport to Ao Nang Transfer Guide", link: "/thailand/krabi/destination-guides/transfer/krabi-airport-to-ao-nang-transfer-guide" },
      { title: "Krabi to Phi Phi: Ferry vs Speedboat", link: "/thailand/krabi/destination-guides/transfer/krabi-to-phi-phi-ferry-vs-speedboat" },
      { title: "Phuket vs Krabi for Indian Travelers", link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/transfer/phuket-to-krabi-transfer-guide")}
  />
);

export default Blog;
