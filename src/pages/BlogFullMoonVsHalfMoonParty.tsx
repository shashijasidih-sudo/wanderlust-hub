import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/koh-samui-beach-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Full Moon Party vs Half Moon Party Thailand: Key Differences Explained"
    description="Full Moon vs Half Moon Party — location, vibe, crowd size, music, ticket prices and which Koh Phangan party suits you better."
    heroImage={heroImg}
    heroAlt="Full Moon Party beach scene with moon and neon sign"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="7 min read"
    category="Activity Blogs"
    keywords={["Full Moon vs Half Moon","Half Moon Party Koh Phangan","Thailand parties","Full Moon Party","jungle party Thailand"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do/", transfersLink: "/thailand/koh-samui/" }}
    comparisonItems={[
      { name: "Full Moon Party (Haad Rin)", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/" },
      { name: "Half Moon Party (Jungle)" },
    ]}
    sections={[
      { type: "paragraph", content: "Thailand's party scene isn't just about the Full Moon Party. The Half Moon Party in Koh Phangan is gaining popularity as a more organized, festival-style alternative. Here's how they compare." },
      { type: "heading", content: "Full Moon Party Overview" },
      { type: "list", items: ["Location: Haad Rin Beach","Frequency: Monthly (full moon)","Style: Beach rave"] },
      { type: "heading", content: "Half Moon Party Overview" },
      { type: "list", items: ["Location: Jungle in Koh Phangan","Frequency: Twice a month","Style: Festival-style jungle party"] },
      { type: "heading", content: "1. Location & Setting" },
      { type: "paragraph", content: "Full Moon = beach. Half Moon = jungle. Totally different vibes." },
      { type: "heading", content: "2. Crowd Size" },
      { type: "list", items: ["Full Moon: 10,000–30,000 people","Half Moon: 3,000–5,000 people — less crowded"] },
      { type: "heading", content: "3. Music Experience" },
      { type: "list", items: ["Full Moon: Mixed genres","Half Moon: Primarily EDM"] },
      { type: "heading", content: "4. Ticket Prices" },
      { type: "list", items: ["Full Moon: ₹200–₹500","Half Moon: ₹2,000–₹4,000"] },
      { type: "cta", content: "Going for Full Moon? Bundle the Samui → Koh Phangan transfer + party entry in one booking", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/", linkText: "Book Bundle" },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Koh Phangan Trip" },
      { type: "heading", content: "5. Safety & Organization" },
      { type: "paragraph", content: "Half Moon is more premium and better organized; Full Moon is rawer and more chaotic." },
      { type: "heading", content: "Which One is Better?" },
      { type: "list", items: ["Full Moon: Iconic experience, budget matters, you love massive crowds","Half Moon: Premium vibe, prefer less crowd, festival-style events"] },
      { type: "tip-box", content: "Insider tip: Many travelers attend both for a complete Thailand nightlife experience." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Full Moon = legendary & wild. Half Moon = premium & organized. Best choice depends on your vibe." },
      { type: "cta", content: "Book Full Moon Party with transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "First-Time Full Moon Party Beginner Guide", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide/" },
      { title: "Hidden Costs of Full Moon Party 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026/" },
      { title: "Koh Samui Full Moon vs Phuket Nightlife", link: "/thailand/koh-samui/destination-guides/activity/koh-samui-full-moon-party-vs-phuket-nightlife/" },
      { title: "How to Reach Full Moon Party from Phuket and Bangkok", link: "/thailand/koh-samui/destination-guides/activity/how-to-reach-full-moon-party-from-phuket-and-bangkok/" },
    ]}
    relatedLinks={[
      { title: "Book Full Moon Party + Samui–Koh Phangan Transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/" },
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary/" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer/" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer/" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui/" },
    ]}
  />
);
export default Blog;
