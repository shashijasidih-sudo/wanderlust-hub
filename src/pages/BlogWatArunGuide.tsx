import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-wat-arun-sunset.jpg";

const BlogWatArunGuide = () => (
  <BlogArticleLayout
    /* SEO — Primary: wat arun bangkok ticket price | Intent: Informational */
    title="Wat Arun Bangkok 2026: Ticket Price, Timings & Photos"
    description="Wat Arun ticket price 2026, opening hours, dress code and the best sunset photo spots at Bangkok's Temple of Dawn — planned for Indian travellers."
    heroImage={heroImg}
    heroAlt="Wat Arun Temple of Dawn at sunset on the Chao Phraya River"
    author="Yellodae Travel Expert"
    date="Apr 26, 2026"
    readTime="7 min read"
    category="Activity Blogs"
    keywords={[
      "wat arun bangkok ticket price",
      "temple of dawn timings",
      "wat arun sunset photo spots",
      "wat arun dress code india",
      "how to reach wat arun from sukhumvit",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/bangkok/destination-guides#activity" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/bangkok-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer",
    }}
    sections={[
      {
        type: "paragraph",
        content:
          "Wat Arun — the Temple of Dawn — is one of Bangkok's most iconic landmarks, sitting right on the Chao Phraya River with its spires reflecting beautifully at sunset. This guide covers tickets, the best time to visit, dress code and the photo spots locals know.",
      },
      { type: "heading", content: "Ticket Price & Entry Info" },
      {
        type: "list",
        items: [
          "Entry fee: ~100 THB",
          "Open daily: 8:00 AM – 6:00 PM",
          "Tickets sold at the entrance",
        ],
      },
      { type: "heading", content: "Best Time to Visit" },
      {
        type: "list",
        items: [
          "Early morning — fewer crowds, cooler weather",
          "Sunset — best views and photographs",
          "Avoid midday — extremely hot and busy",
        ],
      },
      { type: "heading", content: "Photography Spots" },
      {
        type: "list",
        items: [
          "From across the river (best at sunset)",
          "Base of the central prang",
          "From a Chao Phraya cruise — golden hour magic",
        ],
      },
      { type: "tip-box", content: "Wear modest clothing — shoulders and knees covered. Sarongs are sometimes available at the entrance for a refundable deposit." },
      { type: "mid-activities", destination: "bangkok", heading: "Pair Wat Arun with a City Tour" },
      { type: "heading", content: "How Much Time Do You Need?" },
      {
        type: "paragraph",
        content:
          "Even if you're short on time, plan for at least 1–2 hours. Combine with Wat Pho and the Grand Palace for a complete temple morning, or with a Chao Phraya dinner cruise for a magical evening.",
      },
      { type: "heading", content: "Final Verdict" },
      {
        type: "paragraph",
        content:
          "Wat Arun is a must-visit Bangkok icon — affordable, photogenic and culturally significant. Best paired with a temple tour or evening cruise for the full experience.",
      },
      {
        type: "cta",
        content: "See Wat Arun and more on a guided temple tour",
        link: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour",
        linkText: "Book Temple Tour",
      },
    ]}
    relatedActivities={[
      { title: "Grand Palace Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide" },
      { title: "Mahanakhon Skywalk Tickets Guide", link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide" },
      { title: "Safari World Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide" },
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

export default BlogWatArunGuide;
