import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-mahanakhon-skywalk.jpg";

const BlogMahanakhonSkywalkGuide = () => (
  <BlogArticleLayout
    title="Mahanakhon Skywalk Tickets: Price, Sunset Timing & Tips (2026)"
    description="Bangkok's highest glass-floor observation deck — pricing, the best time to go, what to wear and the most thrilling photo spots."
    heroImage={heroImg}
    heroAlt="Visitors on the glass floor of Mahanakhon Skywalk overlooking Bangkok skyline"
    author="Yellodae Travel Expert"
    date="Apr 24, 2026"
    readTime="7 min read"
    category="Activity Blogs"
    keywords={["Mahanakhon Skywalk", "King Power Mahanakhon tickets", "Bangkok observation deck", "Mahanakhon glass floor", "Bangkok views"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
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
        link: "/thailand/bangkok/king-power-mahanakhon-skywalk-tickets",
        linkText: "Book Skywalk Tickets",
      },
    ]}
    relatedActivities={[
      { title: "Mahanakhon Skywalk Tickets", link: "/thailand/bangkok/king-power-mahanakhon-skywalk-tickets" },
      { title: "Sea Life Bangkok + Madame Tussauds Combo", link: "/thailand/bangkok/sea-life-bangkok-madame-tussauds" },
      { title: "Bangkok City Tour with Boat", link: "/thailand/bangkok/city-tour-with-boat" },
    ]}
    relatedLinks={[
      { title: "Sea Life Bangkok: Is It Worth It?", link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide" },
    ]}
  />
);

export default BlogMahanakhonSkywalkGuide;
