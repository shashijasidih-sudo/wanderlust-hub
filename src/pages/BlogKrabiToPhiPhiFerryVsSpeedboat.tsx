import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/phi-phi-boat.jpeg";

const Blog = () => (
  <BlogArticleLayout
    title="Krabi to Phi Phi Transfer: Ferry vs Speedboat (2026 Guide)"
    description="Complete 2026 guide for Krabi to Phi Phi transfers — ferry vs speedboat compared on cost (INR), travel time, comfort, timings and tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="Ferry and speedboat options for Krabi to Phi Phi island transfer"
    author="Yellodae Travel Expert"
    date="May 14, 2026"
    readTime="9 min read"
    category="Transfer Blogs"
    keywords={["krabi to phi phi","krabi to phi phi ferry","krabi to phi phi speedboat","phi phi transfer cost","ao nang to phi phi"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Transfer Blogs", link: "/thailand/krabi/destination-guides#transfer" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do/", transfersLink: "/thailand/krabi/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Planning a day trip or stay on Phi Phi from Krabi? You have two main transfer options — ferry and speedboat. Each has its own pros, cons and ideal traveler profile. This 2026 guide breaks down cost in INR, travel time, comfort, timings and booking tips so you can pick the right one." },
      { type: "heading", content: "Distance & Travel Time" },
      { type: "list", items: ["Distance — approximately 45 km across the Andaman Sea","Ferry — 1.5 to 2 hours","Speedboat — 45 to 60 minutes"] },
      { type: "heading", content: "Ferry Experience" },
      { type: "list", items: ["Cost — ₹1,000–₹2,000 per person","Large boat with indoor and outdoor seating","Smooth, stable ride suitable for families","Pros — affordable, stable, good for families","Cons — slower, fixed schedule, less flexible"] },
      { type: "heading", content: "Speedboat Experience" },
      { type: "list", items: ["Cost — ₹2,500–₹4,000 per person","Faster travel in smaller groups","More flexible departure times","Pros — saves time, flexible, often includes island stops","Cons — bumpy ride, more expensive, motion sickness possible"] },
      { type: "tip-box", content: "If you have only one day for Phi Phi, take the speedboat — you'll get 2–3 extra hours on the islands compared to the ferry." },
      { type: "heading", content: "Typical Ferry Timings" },
      { type: "list", items: ["Morning — 9:00 AM departure","Midday — 11:00 AM departure","Afternoon — 2:00 PM departure","Timings vary seasonally — confirm before booking"] },
      { type: "heading", content: "What to Expect" },
      { type: "list", items: ["Hotel pickup (often included with speedboat tours)","Boarding from Krabi/Ao Nang pier","Scenic sea journey with limestone cliff views","Drop at Tonsai Pier (Phi Phi Don)"] },
      { type: "cta", content: "Book a Krabi → Phi Phi tour with hotel pickup and lunch", link: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer/", linkText: "Book Phi Phi Tour from Krabi" },
      { type: "heading", content: "Tips for a Smooth Journey" },
      { type: "list", items: ["Arrive 30 minutes before departure","Choose morning trips for calmer seas","Sit outside for views — but carry sunscreen","Carry motion sickness medicine, especially for speedboats","Book early in peak season (Dec–Feb) — boats fill fast"] },
      { type: "heading", content: "Best Option by Traveler Type" },
      { type: "list", items: ["Budget travelers — ferry","Families with kids/elders — ferry","Couples — either, depending on time","Time-constrained travelers — speedboat","Day-trippers — speedboat (more island time)"] },
      { type: "heading", content: "Cost Comparison (2026)" },
      { type: "list", items: ["Ferry — ₹1,000–₹2,000 per person","Speedboat — ₹2,500–₹4,000 per person","Speedboat day tour with lunch & snorkeling — ₹3,500–₹5,500"] },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: ["Booking the cheapest option without checking inclusions","Missing the last return ferry/speedboat","Not pre-booking during peak season","Skipping motion sickness medicine on rough days"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Both ferry and speedboat are great options — your choice depends on time, budget and comfort. For relaxed family travel, choose the ferry. For day-trippers and couples wanting maximum island time, the speedboat is worth the extra rupees." },
      { type: "cta", content: "Book your Krabi airport transfer for a smooth arrival before your Phi Phi day", link: "/thailand/krabi/budget-airport-transfers/", linkText: "Book Krabi Transfer" },
    ]}
    relatedActivities={[
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer/" },
      { title: "4 Island Tour by Speedboat", link: "/thailand/krabi/4-island-tour-speedboat-with-transfer/" },
      { title: "Hong Island Tour by Speedboat", link: "/thailand/krabi/hong-island-tour-speedboat-with-transfer/" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers/" },
    ]}
    relatedLinks={[
      { title: "Krabi Speedboat vs Ferry: Which is Faster?", link: "/thailand/krabi/destination-guides/transfer/krabi-speedboat-vs-ferry-which-is-faster/" },
      { title: "Is 4 Island Tour in Krabi Worth It?", link: "/thailand/krabi/destination-guides/micro/is-4-island-tour-krabi-worth-it/" },
      { title: "5 Days Krabi Itinerary with Phi Phi", link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary/" },
      { title: "Best Time for Island Hopping in Krabi", link: "/thailand/krabi/destination-guides/micro/best-time-for-island-hopping-in-krabi/" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/transfer/krabi-to-phi-phi-ferry-vs-speedboat")}
  />
);

export default Blog;
