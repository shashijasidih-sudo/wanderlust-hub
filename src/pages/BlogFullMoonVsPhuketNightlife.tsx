import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/city-kohsamui.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Koh Samui Full Moon Party vs Phuket Nightlife: What's Better for Party Lovers?"
    description="Full Moon Party vs Phuket nightlife — vibe, crowd, music, cost and safety compared so you can pick the right one for your trip."
    heroImage={heroImg}
    heroAlt="Aerial view of Koh Samui beach at twilight"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["Full Moon Party vs Phuket","Phuket nightlife","Bangla Road","Koh Phangan vs Phuket","Thailand party comparison"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    comparisonItems={[
      { name: "Full Moon Party Koh Phangan", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer" },
      { name: "Phuket Nightlife", link: "/thailand/phuket" },
    ]}
    sections={[
      { type: "paragraph", content: "Both offer completely different experiences. One is a wild beach rave under the moon, the other is a diverse, club-centric nightlife hub. Let's break it down for 2026." },
      { type: "heading", content: "What is the Full Moon Party Experience?" },
      { type: "paragraph", content: "Held at Haad Rin Beach in Koh Phangan, accessible from Koh Samui." },
      { type: "list", items: ["Massive beach party with 10,000+ people","Neon paint, fire shows and EDM stages","All-night party till sunrise","Budget-friendly entry"] },
      { type: "heading", content: "What is Phuket Nightlife Like?" },
      { type: "list", items: ["Bangla Road (Patong Beach)","Beach clubs","Rooftop bars","Luxury nightclubs"] },
      { type: "heading", content: "1. Party Style" },
      { type: "list", items: ["Full Moon: Wild beach rave, backpacker crowd, monthly","Phuket: Club & bar scene, mixed crowd, daily"] },
      { type: "heading", content: "2. Music & Entertainment" },
      { type: "list", items: ["Full Moon: EDM, techno, fire shows","Phuket: EDM, hip-hop, live music, shows — wider variety"] },
      { type: "heading", content: "3. Cost Comparison" },
      { type: "list", items: ["Entry — Full Moon ₹200–₹500 vs Phuket ₹500–₹2,000","Drinks — Full Moon ₹300–₹800 vs Phuket ₹500–₹1,500","Overall — Full Moon = budget, Phuket = moderate to expensive"] },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Thailand Nightlife Trip" },
      { type: "heading", content: "4. Crowd & Experience" },
      { type: "list", items: ["Full Moon: Younger, international backpackers","Phuket: Couples, groups, luxury travelers"] },
      { type: "heading", content: "5. Safety & Comfort" },
      { type: "list", items: ["Phuket: Safer and more organized","Full Moon: Fun but chaotic"] },
      { type: "heading", content: "Which One Should You Choose?" },
      { type: "list", items: ["Full Moon Party — once-in-a-lifetime, high-energy, budget-friendly","Phuket Nightlife — variety, comfort, premium clubbing"] },
      { type: "tip-box", content: "Pro tip: combine both. Start in Phuket for clubbing, end in Koh Samui for the Full Moon Party." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Full Moon Party = experience. Phuket Nightlife = lifestyle. If you're a true party lover, do both." },
      { type: "cta", content: "Book Full Moon Party with transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "First-Time Full Moon Party Beginner Guide", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide" },
      { title: "Full Moon vs Half Moon Party Thailand", link: "/thailand/koh-samui/destination-guides/activity/full-moon-vs-half-moon-party-thailand" },
      { title: "Hidden Costs of Full Moon Party 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026" },
      { title: "How to Reach Full Moon Party from Phuket and Bangkok", link: "/thailand/koh-samui/destination-guides/activity/how-to-reach-full-moon-party-from-phuket-and-bangkok" },
    ]}
    relatedLinks={[
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Pattaya 3 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui" },
    ]}
  />
);
export default Blog;
