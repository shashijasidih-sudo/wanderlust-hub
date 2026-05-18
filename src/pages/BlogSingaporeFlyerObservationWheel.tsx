import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-flyer.jpg";

const LINK = "/singapore/destination-guides/activity/singapore-flyer-observation-wheel";

const BlogSingaporeFlyerObservationWheel = () => (
  <BlogArticleLayout
    title="Singapore Flyer Observation Wheel Experience — Complete 2026 Guide"
    description="Singapore Flyer guide — 165m capsule ride, sunset vs night timing, ticket options, Flyer vs SkyHelix comparison and INR ticket cost from India."
    heroImage={heroImg}
    heroAlt="Singapore Flyer giant observation wheel illuminated at night"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["singapore flyer","observation wheel singapore","marina bay flyer","singapore flyer tickets","singapore sunset views"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Rising 165 metres above Marina Bay, the Singapore Flyer is one of the largest observation wheels in the world. Its fully enclosed, air-conditioned glass capsules offer a slow, smooth 30-minute rotation with uninterrupted 360° views of Singapore's skyline — and even Malaysia and Indonesia on a clear day." },
      { type: "heading", content: "What Makes the Singapore Flyer Special?" },
      { type: "list", items: ["Panoramic views of Marina Bay Sands, Gardens by the Bay, Singapore River and Esplanade","Smooth, calm ride — perfect for families and senior travellers","Spacious glass capsules ideal for photography","Wide visibility — see neighbouring countries on a clear day"] },
      { type: "heading", content: "The Capsule Experience" },
      { type: "list", items: ["Fully air-conditioned","Large glass windows","Spacious interior with seating","Walk around freely for different angles"] },
      { type: "heading", content: "What You'll See During the Ride" },
      { type: "list", items: ["Marina Bay Sands rooftop infinity pool","Gardens by the Bay Supertrees","Singapore River winding through the city","Financial district skyscrapers","F1 race track (during event season)"] },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["Sunset (highly recommended) — golden hour, dramatic skyline","Night — city lights, romantic ambience","Daytime — clearest views, fewer crowds"] },
      { type: "heading", content: "Duration, Timings & Cost (2026 INR)" },
      { type: "list", items: ["Ride duration: ~30 minutes per full rotation","Operating hours: ~10 AM – 10 PM (check before visiting)","Standard adult ticket — ₹2,200–₹2,800","Premium / dining capsule — ₹6,500+"] },
      { type: "cta", content: "Book Singapore Flyer Tickets", link: "/singapore/things-to-do", linkText: "Book Singapore Flyer" },
      { type: "heading", content: "Singapore Flyer vs SkyHelix Sentosa" },
      { type: "list", items: ["Singapore Flyer — enclosed capsule, higher altitude, longer ride","SkyHelix — open-air, shorter ride, located in Sentosa","Flyer offers a more comprehensive skyline experience"] },
      { type: "heading", content: "Tips for the Best Experience" },
      { type: "list", items: ["Visit during sunset for the best views","Avoid peak hours for a quieter ride","Bring a camera with good low-light capability","Stay for the full rotation — don't rush the experience","Combine with nearby Marina Bay attractions"] },
      { type: "heading", content: "Suggested Itinerary" },
      { type: "list", items: ["Visit Gardens by the Bay","Walk around Marina Bay","Ride the Singapore Flyer at sunset","Dinner nearby at Marina Bay or Clarke Quay"] },
      { type: "heading", content: "Is It Worth It?" },
      { type: "paragraph", content: "Yes — especially for first-time visitors and travellers who enjoy scenic, relaxed experiences. While it isn't a thrill attraction, the Flyer delivers a premium sightseeing experience that's hard to match elsewhere in Singapore." },
    ]}
    relatedActivities={[
      { title: "Singapore City Tour", link: "/singapore/singapore-city-tour" },
      { title: "Sentosa Cable Car Tickets", link: "/singapore/sentosa-cable-car-tickets-and-transfers" },
    ]}
    relatedLinks={[
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide" },
      { title: "Singapore River Cruise Experience", link: "/singapore/destination-guides/activity/singapore-river-cruise-guide" },
      { title: "Sentosa Cable Car Ride Guide (Mount Faber Line)", link: "/singapore/destination-guides/activity/sentosa-cable-car-mount-faber-line" },
      { title: "Big Bus Singapore Hop-On Hop-Off", link: "/singapore/destination-guides/activity/big-bus-singapore-hop-on-hop-off" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogSingaporeFlyerObservationWheel;
