import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-grand-palace-spires.jpg";

const BlogGrandPalaceGuide = () => (
  <BlogArticleLayout
    /* SEO — Primary: grand palace bangkok dress code | Intent: Informational */
    title="Grand Palace Bangkok 2026: Dress Code & Ticket Guide"
    description="Grand Palace Bangkok dress code, 2026 ticket price, opening hours and Indian-friendly tips so you don't get turned away at the entrance."
    heroImage={heroImg}
    heroAlt="Grand Palace Bangkok with golden spires and ornate Thai architecture"
    author="Yellodae Travel Expert"
    date="Apr 25, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={[
      "grand palace bangkok dress code",
      "grand palace 500 thb ticket",
      "wat phra kaew emerald buddha",
      "grand palace timings sunday",
      "what to wear grand palace indian",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer",
    }}
    sections={[
      {
        type: "paragraph",
        content:
          "The Grand Palace is the most iconic landmark in Bangkok — a sprawling royal complex housing the Temple of the Emerald Buddha, ornate murals and centuries of Thai history. It's also one of the most strictly enforced dress-code sites in Thailand. Here's how to plan your visit perfectly.",
      },
      { type: "heading", content: "What to See Inside" },
      {
        type: "list",
        items: [
          "Wat Phra Kaew — Temple of the Emerald Buddha",
          "The Grand Palace buildings and ceremonial halls",
          "Ramakien Murals — epic story painted across the cloister walls",
        ],
      },
      { type: "heading", content: "Tickets & Entry" },
      {
        type: "list",
        items: [
          "Entry fee: ~500 THB per person",
          "Open daily: 8:30 AM – 3:30 PM (last entry)",
          "Tickets include access to the Royal Thai Decorations & Coin Pavilion",
        ],
      },
      { type: "heading", content: "Strict Dress Code (Mandatory)" },
      {
        type: "list",
        items: [
          "Shoulders fully covered (no sleeveless or tank tops)",
          "Knees fully covered (no shorts, mini skirts or ripped jeans)",
          "No see-through, tight or revealing clothing",
          "Sandals are okay; flip-flops not recommended",
        ],
      },
      { type: "tip-box", content: "If you don't comply, you'll be turned away or forced to rent cover-up clothing outside. Come prepared — light cotton pants and a long-sleeve shirt work perfectly in the heat." },
      { type: "heading", content: "Best Time to Visit" },
      {
        type: "list",
        items: [
          "8:30 AM – 11:00 AM — coolest, fewest crowds",
          "Avoid weekends and Thai public holidays",
          "Plan 2–3 hours minimum inside",
        ],
      },
      { type: "mid-activities", destination: "bangkok", heading: "Book a Guided Grand Palace Tour" },
      { type: "heading", content: "Pros & Cons" },
      {
        type: "list",
        items: [
          "Pros: unmissable cultural icon, stunning visuals, photo gold",
          "Cons: very crowded, expensive vs other temples, hot weather",
        ],
      },
      { type: "heading", content: "Final Verdict" },
      {
        type: "paragraph",
        content:
          "A must-visit for every Bangkok traveler — but only if you're prepared for crowds, heat and the dress code. Pair with Wat Pho across the road for a perfect culture morning.",
      },
      {
        type: "cta",
        content: "See the Grand Palace + Emerald Buddha with a guide",
        link: "/thailand/bangkok/grand-palace-emerald-buddha-tour",
        linkText: "Book Palace Tour",
      },
    ]}
    relatedActivities={[
      { title: "Grand Palace & Wat Phra Kaew Tour", link: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
      { title: "Three Temples Bangkok City Tour with Transfer", link: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer" },
      { title: "Wat Arun, Wat Pho & Golden Buddha Tour", link: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour" },
      { title: "Golden Marble Buddha & Bangkok City Tour", link: "/thailand/bangkok/golden-buddha-marble-temple-bangkok-city-tour" },
    ]}
    relatedLinks={[
      { title: "All Bangkok Things to Do", link: "/thailand/bangkok/things-to-do" },
      { title: "Bangkok Hotel + Two Temple Tour to Don Mueang Transfer", link: "/thailand/bangkok/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer" },
      { title: "Wat Arun vs Grand Palace Comparison", link: "/thailand/bangkok/destination-guides/comparison/wat-arun-vs-grand-palace" },
      { title: "Bangkok Half-Day vs Full-Day Temple Tour", link: "/thailand/bangkok/destination-guides/activity/bangkok-temple-tour-half-vs-full-day" },
    ]}
  />
);

export default BlogGrandPalaceGuide;
