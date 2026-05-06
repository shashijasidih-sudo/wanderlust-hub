import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/city-kohsamui.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="How to Reach Full Moon Party from Phuket and Bangkok"
    description="Best routes, costs and timings to reach the Full Moon Party in Koh Phangan from Bangkok and Phuket — flights, ferries, buses and pro tips."
    heroImage={heroImg}
    heroAlt="Map and ferry routes to Koh Phangan from Bangkok and Phuket"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["how to reach Full Moon Party","Bangkok to Koh Phangan","Phuket to Koh Phangan","Koh Samui ferry","Full Moon Party transfers"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    sections={[
      { type: "paragraph", content: "Planning to attend the Full Moon Party but unsure how to get there? Since the party takes place in Koh Phangan, reaching it requires a mix of flights, ferries or buses. Here are the best routes from Bangkok and Phuket — including costs, timings and tips." },
      { type: "heading", content: "Where is the Full Moon Party?" },
      { type: "list", items: ["Location: Haad Rin Beach, Koh Phangan","Nearest airport: Koh Samui (USM)"] },
      { type: "heading", content: "From Bangkok to Full Moon Party" },
      { type: "subheading", content: "Option 1: Flight + Ferry (Fastest)" },
      { type: "list", items: ["Flight Bangkok → Koh Samui: 1 hour","Ferry Koh Samui → Koh Phangan: 30–60 mins","Cost: ₹6,000 – ₹12,000 — best for convenience"] },
      { type: "subheading", content: "Option 2: Bus + Ferry (Budget)" },
      { type: "list", items: ["Overnight bus → Surat Thani","Ferry → Koh Phangan","Cost: ₹2,000 – ₹4,000 — best for budget travelers"] },
      { type: "heading", content: "From Phuket to Full Moon Party" },
      { type: "subheading", content: "Option 1: Bus/Van + Ferry" },
      { type: "list", items: ["Bus/van → Surat Thani","Ferry → Koh Phangan","Cost: ₹2,500 – ₹5,000"] },
      { type: "subheading", content: "Option 2: Flight + Ferry" },
      { type: "list", items: ["Flight Phuket → Koh Samui","Ferry → Koh Phangan","Cost: ₹6,000 – ₹10,000"] },
      { type: "heading", content: "Koh Samui to Full Moon Party" },
      { type: "list", items: ["Speedboat: 20–30 mins","Ferry: 45–60 mins","Most travelers stay in Koh Samui and take party transfers"] },
      { type: "cta", content: "The easiest option: bundled Samui → Koh Phangan return transfer + party entry", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book Combo Transfer" },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Koh Samui Stay" },
      { type: "heading", content: "Best Timing Strategy" },
      { type: "list", items: ["Arrive before sunset","Return early morning (5–7 AM)"] },
      { type: "heading", content: "Common Mistakes" },
      { type: "list", items: ["Missing return ferry","Booking last-minute","Choosing wrong timing"] },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Book combo tickets (transfer + ferry)","Stay in Koh Samui for better hotels","Carry cash for small purchases"] },
      { type: "heading", content: "Cost Summary" },
      { type: "list", items: ["Bangkok → Koh Phangan: ₹2,000 – ₹12,000","Phuket → Koh Phangan: ₹2,500 – ₹10,000"] },
      { type: "tip-box", content: "Reaching the Full Moon Party may take effort — but it's absolutely worth it. Plan smart and book early." },
      { type: "cta", content: "Book Full Moon Party with transfer from Koh Samui", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "First-Time Full Moon Party Beginner Guide", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide" },
      { title: "What Happens at a Full Moon Party", link: "/thailand/koh-samui/destination-guides/activity/what-happens-at-full-moon-party-thailand" },
      { title: "Hidden Costs of Full Moon Party 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026" },
      { title: "Full Moon Party Guide for Indians", link: "/thailand/koh-samui/destination-guides/activity/full-moon-party-thailand-guide-for-indians" },
    ]}
    relatedLinks={[
      { title: "Book Full Moon Party + Samui–Koh Phangan Transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer" },
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui" },
    ]}
  />
);
export default Blog;
