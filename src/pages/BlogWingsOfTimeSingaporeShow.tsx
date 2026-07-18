import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-wings-time.jpg";

const LINK = "/singapore/destination-guides/activity/wings-of-time-singapore-show";

const BlogWingsOfTimeSingaporeShow = () => (
  <BlogArticleLayout
    title="Wings of Time Singapore Show — Seating, Timings & Tips (2026)"
    description="Wings of Time Sentosa night show guide — story, show timings, premium vs standard seating, fireworks finale and INR ticket price."
    heroImage={heroImg}
    heroAlt="Wings of Time Singapore night show with water fountains, lasers and fireworks"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["wings of time singapore","sentosa night show","siloso beach show","wings of time tickets","singapore evening attractions"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do/" }}
    sections={[
      { type: "paragraph", content: "When the sun sets over Sentosa, the energy shifts from daytime adventure to magical night-time entertainment — and nothing captures this transformation better than Wings of Time. Set against the open sea at Siloso Beach, this award-winning outdoor night show combines water, fire, lasers, music and fireworks into one immersive experience." },
      { type: "heading", content: "What is Wings of Time?" },
      { type: "list", items: ["3D projection mapping","Laser lights","Fire effects","Water fountains","Fireworks finale","Music and storytelling"] },
      { type: "paragraph", content: "The show follows Shahbaz, a mythical bird, and his friends as they travel through time and space, exploring civilizations and landscapes." },
      { type: "heading", content: "Show Timings & Duration" },
      { type: "list", items: ["Show duration: 20–25 minutes","Daily shows: typically 7:40 PM and 8:40 PM","First show — less crowded","Second show — better night-time ambience"] },
      { type: "heading", content: "Seating Options" },
      { type: "list", items: ["Standard Seating — affordable, good overall view","Premium Seating — closer to the stage, better angles, ideal for photography"] },
      { type: "heading", content: "Cost in 2026 (INR)" },
      { type: "list", items: ["Standard seat — ₹1,400–₹1,800","Premium seat — ₹2,200–₹2,800"] },
      { type: "cta", content: "Book Wings of Time Tickets", link: "/singapore/things-to-do/", linkText: "Book Wings of Time" },
      { type: "heading", content: "How to Reach Wings of Time" },
      { type: "list", items: ["Location: Siloso Beach, Sentosa Island","Cable Car — most scenic","Sentosa Express Monorail — fastest and cheapest","Taxi / private transfer — easiest for families"] },
      { type: "heading", content: "Tips for the Best Experience" },
      { type: "list", items: ["Book tickets in advance, especially in peak season","Arrive 20–30 minutes early","Premium seating gives much better views","Sit in the centre for the best angle","Carry a light jacket — the beach gets breezy"] },
      { type: "heading", content: "How to Include in Your Itinerary" },
      { type: "list", items: ["Afternoon: Cable Car Ride","Visit USS or Adventure Cove","Dinner at Sentosa","8:40 PM — Wings of Time finale"] },
      { type: "heading", content: "Is Wings of Time Worth It?" },
      { type: "paragraph", content: "Yes — it's one of the few attractions that delivers a complete sensory experience in just 25 minutes. Even on a tight schedule, it's worth slotting in as the perfect end to your Sentosa day." },
    ]}
    relatedActivities={[
      { title: "Sentosa Cable Car Tickets", link: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
      { title: "Sentosa 4D Adventureland", link: "/singapore/sentosa-4d-adventureland-tickets/" },
    ]}
    relatedLinks={[
      { title: "Sentosa Cable Car Ride Guide (Mount Faber Line)", link: "/singapore/destination-guides/activity/sentosa-cable-car-mount-faber-line/" },
      { title: "Sentosa 4D Adventureland Complete Experience", link: "/singapore/destination-guides/activity/sentosa-4d-adventureland-guide/" },
      { title: "Universal Studios Singapore Full Experience", link: "/singapore/destination-guides/activity/universal-studios-singapore-guide/" },
      { title: "Night Safari Singapore Experience Guide", link: "/singapore/destination-guides/activity/night-safari-singapore-guide/" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogWingsOfTimeSingaporeShow;
