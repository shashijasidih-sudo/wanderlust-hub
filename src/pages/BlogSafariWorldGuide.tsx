import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-safari-world-lions.jpg";
import giraffeImg from "@/assets/blog-giraffe-feeding.jpg";

const BlogSafariWorldGuide = () => (
  <BlogArticleLayout
    /* SEO — Primary: safari world bangkok tickets | Intent: Transactional */
    title="Safari World Bangkok 2026: Tickets, Shows & Timings"
    description="Safari World Bangkok tickets 2026, combo prices with Marine Park, dolphin show timings and giraffe feeding tips for families travelling from India."
    heroImage={heroImg}
    heroAlt="Lions climbing on a safari vehicle inside Safari World Bangkok"
    author="Yellodae Travel Expert"
    date="Apr 23, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={[
      "safari world bangkok tickets",
      "safari world marine park combo",
      "safari world dolphin show timings",
      "safari world giraffe feeding deck",
      "safari world bangkok with hotel transfer",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/bangkok/destination-guides#activity" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer",
    }}
    sections={[
      {
        type: "paragraph",
        content:
          "Safari World Bangkok is one of the most popular family attractions in Thailand — combining a drive-through safari with a full-day marine park. Here's exactly what to expect, what's worth your time, and how to plan it.",
      },
      { type: "heading", content: "What's Inside Safari World" },
      { type: "subheading", content: "1. Safari Park (Drive-Through)" },
      {
        type: "list",
        items: [
          "Drive-through wildlife park",
          "Animals roam freely — lions, tigers, zebras, giraffes",
          "You stay inside the vehicle / coach",
        ],
      },
      { type: "subheading", content: "2. Marine Park (Shows & Walks)" },
      {
        type: "list",
        items: [
          "Dolphin Show — most popular",
          "Sea Lion Show — comedy + tricks",
          "Cowboy Stunt Show — explosions, fights, effects",
          "Orangutan Show — funny and unique",
        ],
      },
      { type: "image", src: giraffeImg, alt: "People feeding giraffes from elevated platform at Safari World" },
      { type: "heading", content: "Giraffe Feeding Deck (Don't Miss)" },
      {
        type: "paragraph",
        content:
          "The giraffe feeding terrace is the most loved activity at Safari World — stand on an elevated platform and feed giraffes face-to-face. Brings the wildest smile to kids and adults alike.",
      },
      { type: "heading", content: "Ticket Prices (2026)" },
      {
        type: "list",
        items: [
          "Safari Park only: ₹800 – ₹1,200",
          "Marine Park only: ₹1,000 – ₹1,500",
          "Combo ticket (best value): ₹1,500 – ₹2,500",
          "With private transfer: ₹3,000 – ₹4,500",
        ],
      },
      { type: "tip-box", content: "Always pick the combo + transfer combo. Safari World is ~40 km from central Bangkok — public transport isn't realistic with kids." },
      { type: "mid-activities", destination: "bangkok", heading: "Book Safari World Tickets" },
      { type: "heading", content: "Time Required" },
      {
        type: "list",
        items: [
          "Minimum: 5 hours",
          "Ideal: 6–8 hours (full-day)",
          "Not a half-day attraction",
        ],
      },
      { type: "heading", content: "Pros & Cons" },
      {
        type: "list",
        items: [
          "Pros: animal interaction, multiple shows, great for groups, best with kids",
          "Cons: far from city, can get crowded, full-day commitment",
        ],
      },
      { type: "heading", content: "Final Verdict" },
      {
        type: "paragraph",
        content:
          "Safari World is one of the best family attractions in Bangkok — pick the combo ticket, book transfers, and start early to make the most of it.",
      },
      {
        type: "cta",
        content: "Book Safari World with hotel transfer",
        link: "/thailand/bangkok/safari-world",
        linkText: "Book Safari World",
      },
    ]}
    relatedActivities={[
      { title: "Wat Arun Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide" },
      { title: "Grand Palace Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide" },
      { title: "Mahanakhon Skywalk Tickets Guide", link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide" },
      { title: "Sea Life Bangkok: Is It Worth It?", link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide" },
    ]}
    relatedLinks={[
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Bangkok 2 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-2-day-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer" },
      { title: "Explore All Bangkok Tours & Activities", link: "/thailand/bangkok" },
    ]}
  />
);

export default BlogSafariWorldGuide;
