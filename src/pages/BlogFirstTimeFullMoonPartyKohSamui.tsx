import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/koh-samui-full-moon-party-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="First-Time Full Moon Party in Koh Samui: Complete Beginner Guide"
    description="First-timer guide to the Full Moon Party from Koh Samui — tickets, transfers, what to wear, party zones, safety tips and survival hacks."
    heroImage={heroImg}
    heroAlt="Massive crowd at the Full Moon Party with neon lights"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["Full Moon Party","Koh Samui Full Moon Party","Haad Rin Beach","Koh Phangan party","Thailand nightlife"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    sections={[
      { type: "paragraph", content: "The Full Moon Party in Koh Samui (via Koh Phangan) is one of the world's most famous beach parties. Every month thousands of travelers gather under the full moon for an unforgettable night of music, neon lights and energy. If it's your first time, this guide covers everything." },
      { type: "heading", content: "What is the Full Moon Party?" },
      { type: "paragraph", content: "A monthly beach rave held at Haad Rin Beach in Koh Phangan, easily accessible from Koh Samui." },
      { type: "list", items: ["All-night party under the full moon","Multiple music zones — EDM, techno, reggae, hip-hop","Fire shows and live performances","Neon body paint culture"] },
      { type: "heading", content: "How to Reach from Koh Samui" },
      { type: "list", items: ["Speedboat transfers — fastest option","Ferry transfers — budget friendly","Pre-booking your return is highly recommended"] },
      { type: "cta", content: "Skip the queue — pre-book your Koh Samui → Koh Phangan transfer + party entry", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Reserve Transfer + Entry" },
      { type: "heading", content: "Ticket & Cost Breakdown" },
      { type: "list", items: ["Entry Fee: ₹200 – ₹500","Transfer: ₹1,500 – ₹3,500","Drinks: ₹300 – ₹800","Total Budget: ₹3,000 – ₹7,000"] },
      { type: "heading", content: "What to Wear" },
      { type: "list", items: ["Neon outfits or beachwear","Comfortable footwear (avoid barefoot walking)","UV body paint for the full experience"] },
      { type: "mid-activities", destination: "thailand", heading: "Book Your Koh Samui Experience" },
      { type: "heading", content: "What to Expect as a First-Timer" },
      { type: "subheading", content: "1. Arrival Chaos" },
      { type: "paragraph", content: "The beach gets crowded fast — expect long queues and loud music from the start." },
      { type: "subheading", content: "2. Party Zones" },
      { type: "paragraph", content: "Different sections cater to different music styles — wander to find your vibe." },
      { type: "subheading", content: "3. Bucket Culture" },
      { type: "paragraph", content: "Drinks come in literal buckets — a must-try, but pace yourself." },
      { type: "subheading", content: "4. Fire Shows" },
      { type: "paragraph", content: "Professional performers showcase incredible fire tricks throughout the night." },
      { type: "heading", content: "Safety Tips" },
      { type: "list", items: ["Avoid over-drinking","Keep belongings minimal","Use pre-booked return transfers","Stay with your group"] },
      { type: "heading", content: "Best Time to Attend" },
      { type: "list", items: ["Peak hours: 10 PM – 3 AM","Best months: December to April"] },
      { type: "tip-box", content: "Verdict: A must-do experience in Thailand nightlife — unique, budget-friendly, and great for solo travelers and groups." },
      { type: "cta", content: "Book Full Moon Party with transfer from Koh Samui", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book Transfer + Party" },
    ]}
    relatedActivities={[
      { title: "What Happens at a Full Moon Party in Thailand", link: "/thailand/koh-samui/destination-guides/activity/what-happens-at-full-moon-party-thailand" },
      { title: "Hidden Costs of Full Moon Party Thailand 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026" },
      { title: "Koh Samui Full Moon vs Phuket Nightlife", link: "/thailand/koh-samui/destination-guides/activity/koh-samui-full-moon-party-vs-phuket-nightlife" },
      { title: "Full Moon Party Guide for Indians", link: "/thailand/koh-samui/destination-guides/activity/full-moon-party-thailand-guide-for-indians" },
    ]}
    relatedLinks={[
      { title: "Book Full Moon Party + Samui–Koh Phangan Transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer" },
      { title: "White Orchid Loy Krathong Cruise", link: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival" },
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui" },
    ]}
  />
);
export default Blog;
