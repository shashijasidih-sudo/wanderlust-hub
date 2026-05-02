import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-safari-cost.jpg";

const BlogBangkokAttractionTicketCosts = () => (
  /* SEO — Primary: bangkok attraction ticket prices | Intent: Transactional */
  <BlogArticleLayout
    title="Bangkok Ticket Prices 2026: Attractions Cost & Online Discounts"
    description="2026 Bangkok attraction ticket prices — Grand Palace, Wat Arun, Safari World, Sea Life and Mahanakhon Skywalk with online vs counter rates."
    heroImage={heroImg}
    heroAlt="Safari World Bangkok entrance with family"
    author="Yellodae Travel Expert"
    date="Apr 25, 2026"
    readTime="7 min read"
    category="Price / Cost Blogs"
    keywords={[
      "bangkok attraction ticket prices 2026",
      "safari world ticket price india",
      "grand palace entry fee",
      "mahanakhon skywalk ticket cost",
      "sea life bangkok ticket online",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    relatedActivities={[
      { title: "Safari World & Marine Park", link: "/thailand/bangkok/safari-world" },
      { title: "Sea Life & Madame Tussauds Tickets", link: "/thailand/bangkok/sea-life-madame-tussauds-tickets" },
      { title: "Mahanakhon Skywalk Tickets", link: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
      { title: "Grand Palace & Emerald Buddha Tour", link: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
    ]}
    sections={[
      { type: "paragraph", content: "Here's the complete 2026 list of Bangkok attraction ticket prices — at-the-counter rates and the much cheaper online prices, so you know exactly what to pre-book." },
      { type: "heading", content: "Temple & Cultural Tickets" },
      { type: "list", items: [
        "Grand Palace: 500 THB (~₹1,200)",
        "Wat Arun: 100 THB (~₹240)",
        "Wat Pho: 300 THB (~₹720)",
        "Wat Traimit (Golden Buddha): 100 THB (~₹240)",
      ]},
      { type: "heading", content: "Theme Parks & Wildlife" },
      { type: "list", items: [
        "Safari World + Marine Park: 1,800 THB (~₹4,300) — online ₹3,000",
        "Dream World: 1,200 THB (~₹2,900) — online ₹2,200",
        "Sea Life Bangkok: 1,090 THB (~₹2,600) — online ₹1,800",
        "Madame Tussauds: 990 THB (~₹2,400) — online ₹1,600",
      ]},
      { type: "heading", content: "Skywalks & Viewpoints" },
      { type: "list", items: [
        "Mahanakhon Skywalk: 880 THB (~₹2,100) — online ₹1,500",
        "Baiyoke Sky Tower: 400 THB (~₹950)",
      ]},
      { type: "mid-activities", destination: "bangkok", heading: "Pre-book These Attractions" },
      { type: "heading", content: "Cruises & Experiences" },
      { type: "list", items: [
        "Chao Phraya Princess Dinner Cruise: 1,800 THB (~₹4,300) — online ₹2,200",
        "White Orchid Cruise: 1,300 THB (~₹3,100) — online ₹1,800",
        "Tuk-Tuk Night Tour: 1,500 THB (~₹3,600)",
      ]},
      { type: "heading", content: "Day Tours from Bangkok" },
      { type: "list", items: [
        "Ayutthaya day trip: ₹2,500 – ₹4,500",
        "Floating Market + Maeklong: ₹2,000 – ₹3,500",
        "Erawan Falls + Bridge over River Kwai: ₹4,500 – ₹6,500",
      ]},
      { type: "tip-box", content: "Online tickets save 20–30% on average. Always book Safari World, Sea Life and the Princess Cruise online before flying." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Pre-booking your top 4 Bangkok attractions saves around ₹4,000–₹6,000 per person versus walking up to the counter. Always check Yellodae for combo discounts." },
      { type: "cta", content: "See all Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Browse Activities" },
    ]}
    relatedLinks={[
      { title: "Safari World Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide" },
      { title: "Mahanakhon Skywalk Tickets", link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide" },
      { title: "Sea Life Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide" },
    ]}
  />
);

export default BlogBangkokAttractionTicketCosts;
