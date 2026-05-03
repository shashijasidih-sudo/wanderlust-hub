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
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer",
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
      { title: "King Power Mahanakhon Skywalk Tickets", link: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
      { title: "Sea Life Bangkok + Madame Tussauds Combo", link: "/thailand/bangkok/sea-life-madame-tussauds-tickets" },
      { title: "Chao Phraya River Boat City Tour", link: "/thailand/bangkok/chao-phraya-river-boat-bangkok-city-tour" },
      { title: "Baiyoke Sky Buffet Bangkok", link: "/thailand/bangkok/baiyoke-buffet" },
    ]}
    relatedLinks={[
      { title: "All Bangkok Things to Do", link: "/thailand/bangkok/things-to-do" },
      { title: "Bangkok Hotel to Suvarnabhumi Airport Transfer", link: "/thailand/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer" },
      { title: "Sea Life Bangkok: Is It Worth It?", link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide" },
    ]}
  />
);

export default BlogMahanakhonSkywalkGuide;
