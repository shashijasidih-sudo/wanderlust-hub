import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/koh-samui-beach-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="What Happens at a Full Moon Party in Thailand? Real Experience Breakdown"
    description="Hour-by-hour Full Moon Party breakdown — arrival, music zones, midnight peak, fire shows, sunrise on Haad Rin Beach."
    heroImage={heroImg}
    heroAlt="Crowd dancing at Haad Rin Beach Full Moon Party"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["Full Moon Party experience","Haad Rin","Koh Phangan party","Thailand beach rave","what to expect Full Moon Party"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    sections={[
      { type: "paragraph", content: "The Full Moon Party at Haad Rin Beach is one of the most iconic nightlife experiences on the planet. But what actually happens once you're there? Here's the real, unfiltered breakdown." },
      { type: "heading", content: "Arrival Vibe" },
      { type: "paragraph", content: "By 9 PM the beach is already pulsing — neon paint stalls, food carts and thousands of people. It's chaotic, but exciting." },
      { type: "cta", content: "Lock in your Samui → Koh Phangan transfer + party entry before peak dates sell out", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Reserve My Spot" },
      { type: "heading", content: "The Party Atmosphere" },
      { type: "subheading", content: "Music Everywhere" },
      { type: "list", items: ["EDM & techno zones","Hip-hop and reggae corners","Live drum & bass stages"] },
      { type: "subheading", content: "Bucket Culture" },
      { type: "paragraph", content: "Cheap cocktail buckets are sold everywhere. Iconic, but pace yourself — they're stronger than you think." },
      { type: "heading", content: "Midnight Peak" },
      { type: "list", items: ["Beach is fully packed","Music intensifies","Energy reaches its peak"] },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Koh Samui Stay" },
      { type: "heading", content: "Fire Shows & Performances" },
      { type: "paragraph", content: "Professional fire dancers light up the beach with skipping ropes, poi and limbo bars — usually around midnight." },
      { type: "heading", content: "Sunrise Experience" },
      { type: "list", items: ["Crowd starts thinning around 5 AM","Survivors gather to watch sunrise","First ferries back to Koh Samui leave from 6 AM"] },
      { type: "tip-box", content: "If you enjoy nightlife, this should be on your Thailand bucket list — but go in with realistic expectations." },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "The Full Moon Party is loud, messy, beautiful and unlike anything else. Once is enough for most — but those who love it go back month after month." },
      { type: "cta", content: "Book Full Moon Party with transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "First-Time Full Moon Party Beginner Guide", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide" },
      { title: "Hidden Costs of Full Moon Party 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026" },
      { title: "Full Moon vs Half Moon Party Thailand", link: "/thailand/koh-samui/destination-guides/activity/full-moon-vs-half-moon-party-thailand" },
      { title: "How to Reach Full Moon Party from Phuket and Bangkok", link: "/thailand/koh-samui/destination-guides/activity/how-to-reach-full-moon-party-from-phuket-and-bangkok" },
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
