import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-mahanakhon-skywalk.jpg";

const BlogMahanakhonSkywalkGuide = () => (
  <BlogArticleLayout
    /* SEO — Primary: mahanakhon skywalk ticket price | Intent: Transactional */
    title="Mahanakhon Skywalk 2026: Ticket Price & Sunset Tips"
    description="Mahanakhon Skywalk ticket price 2026, best sunset timing, glass-floor tips and online booking advice for Bangkok's highest observation deck."
    heroImage={heroImg}
    heroAlt="Visitors on the glass floor of Mahanakhon Skywalk overlooking Bangkok skyline"
    author="Yellodae Travel Expert"
    date="Apr 24, 2026"
    readTime="7 min read"
    category="Activity Blogs"
    keywords={[
      "mahanakhon skywalk ticket price",
      "king power mahanakhon sunset booking",
      "mahanakhon glass floor experience",
      "bangkok 78th floor observation deck",
      "mahanakhon skywalk online vs counter price",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/bangkok/destination-guides#activity" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do/",
      transfersLink: "/thailand/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer/",
    }}
    sections={[
      {
        type: "paragraph",
        content:
          "King Power Mahanakhon offers the most thrilling view of Bangkok — a 360° rooftop with a glass-floor section called the Skywalk. It's a bucket-list experience for first-timers. Here's everything you need to plan it.",
      },
      { type: "heading", content: "Ticket Price (2026)" },
      {
        type: "list",
        items: [
          "Standard ticket: ~₹1,500 – ₹2,000",
          "Sunset / VIP timing: slightly higher",
          "Combo tickets (with attractions like Sea Life): better value",
        ],
      },
      { type: "heading", content: "What Makes It Special" },
      {
        type: "list",
        items: [
          "Bangkok's highest open-air observation deck",
          "Famous glass floor — see straight down 78 floors",
          "Unique adrenaline + photography combo",
        ],
      },
      { type: "heading", content: "Photography Guide" },
      {
        type: "list",
        items: [
          "Glass-floor reflection shot",
          "Sunset skyline panorama",
          "Night city lights — best around 7 PM",
        ],
      },
      { type: "tip-box", content: "Best time to visit: arrive 30 minutes before sunset to capture daylight, golden hour, and the city lights coming on — three vibes in one ticket." },
      { type: "mid-activities", destination: "bangkok", heading: "Add Skywalk to Your Bangkok Day" },
      { type: "heading", content: "What to Wear" },
      {
        type: "list",
        items: [
          "Pants + sneakers (no loose items — risk of dropping)",
          "Avoid skirts on the glass floor",
          "Layer light — it's windy at the top",
        ],
      },
      { type: "heading", content: "Pros & Cons" },
      {
        type: "list",
        items: [
          "Pros: best Bangkok view, unique glass floor, great for photos",
          "Cons: premium pricing, queues at sunset, weather-dependent",
        ],
      },
      { type: "heading", content: "Final Verdict" },
      {
        type: "paragraph",
        content:
          "A must-do premium experience in Bangkok — especially at sunset. Worth booking online to skip the counter queues.",
      },
      {
        type: "cta",
        content: "Book your Mahanakhon Skywalk ticket",
        link: "/thailand/bangkok/king-power-mahanakhon-skywalk-tickets/",
        linkText: "Book Skywalk Tickets",
      },
    ]}
    relatedActivities={[
      { title: "Wat Arun Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide/" },
      { title: "Grand Palace Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide/" },
      { title: "Safari World Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide/" },
      { title: "Sea Life Bangkok: Is It Worth It?", link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide/" },
    ]}
    relatedLinks={[
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary/" },
      { title: "Bangkok 2 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-2-day-itinerary/" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer/" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer/" },
      { title: "Explore All Bangkok Tours & Activities", link: "/thailand/bangkok/" },
    ]}
  />
);

export default BlogMahanakhonSkywalkGuide;
