import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-street-food-cost.jpg";

const BlogBangkokFoodCost = () => (
  /* SEO — Primary: bangkok food cost per day | Intent: Informational */
  <BlogArticleLayout
    title="Bangkok Food Cost 2026: Daily Budget for Indian Travellers"
    description="Bangkok food cost in 2026 — street food, mid-range and rooftop dining prices in INR with a realistic daily food budget for Indian travellers."
    heroImage={heroImg}
    heroAlt="Bangkok street food market at night with vibrant lights and stalls"
    author="Yellodae Travel Expert"
    date="Apr 26, 2026"
    readTime="6 min read"
    category="Price / Cost Blogs"
    keywords={[
      "bangkok food cost per day",
      "bangkok street food prices",
      "bangkok meal budget for indians",
      "rooftop dining cost bangkok",
      "thailand food expenses 2026",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    relatedActivities={[
      { title: "Bangkok Tuk Tuk Night Food Tour", link: "/thailand/bangkok/tuk-tuk-night-tour-bangkok" },
      { title: "Maeklong Floating Market Tour", link: "/thailand/bangkok/maeklong-floating-market-tour" },
      { title: "Baiyoke Sky Buffet Dinner", link: "/thailand/bangkok/baiyoke-buffet" },
      { title: "Chao Phraya Princess Dinner Cruise", link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer" },
    ]}
    sections={[
      { type: "paragraph", content: "Bangkok is famously cheap for food — if you eat smart. Here's exactly what you'll pay per meal in 2026 across street food, sit-down restaurants and rooftop dining." },
      { type: "heading", content: "Daily Food Budget Per Person" },
      { type: "list", items: [
        "Backpacker / street food only: ₹400 – ₹700",
        "Mixed (street + casual restaurants): ₹1,000 – ₹1,800",
        "Comfortable mid-range: ₹2,000 – ₹3,500",
        "Fine dining + rooftop: ₹5,000+",
      ]},
      { type: "heading", content: "Street Food Pricing" },
      { type: "list", items: [
        "Pad Thai: ₹100 – ₹200",
        "Tom Yum soup: ₹150 – ₹250",
        "Mango sticky rice: ₹120 – ₹200",
        "Fresh fruit smoothie: ₹80 – ₹150",
        "Grilled satay (4 sticks): ₹100 – ₹180",
      ]},
      { type: "heading", content: "Mid-Range Restaurants" },
      { type: "list", items: [
        "Mall food courts: ₹400 – ₹700/meal",
        "Casual Thai restaurants: ₹600 – ₹1,200/meal",
        "Indian restaurants in Sukhumvit: ₹800 – ₹1,500/meal",
      ]},
      { type: "heading", content: "Fine Dining & Rooftop" },
      { type: "list", items: [
        "Sky Bar at Lebua: ₹4,000 – ₹8,000/person",
        "Vertigo at Banyan Tree: ₹5,000 – ₹9,000",
        "Michelin restaurants: ₹6,000 – ₹15,000+",
      ]},
      { type: "tip-box", content: "Indian travelers — Sukhumvit Soi 11 has multiple Indian restaurants, and Pahurat (Little India) serves authentic North & South Indian food at street-food prices." },
      { type: "heading", content: "Best Areas for Cheap Eats" },
      { type: "list", items: [
        "Yaowarat (Chinatown) — legendary night food street",
        "Chatuchak Market — weekend food paradise",
        "Khao San Road — backpacker street food",
        "Soi Convent (Silom) — office-worker lunch deals",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "₹1,500/day per person comfortably covers 3 meals + drinks across street food and casual dining in Bangkok. Add ₹3,000–₹5,000 for one rooftop night during the trip." },
      { type: "cta", content: "Explore Bangkok food experiences", link: "/blog/thailand-food-experiences", linkText: "Read Food Guide" },
    ]}
    relatedLinks={[
      { title: "Bangkok Trip Cost from India", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-trip-cost-from-india" },
      { title: "Cheapest Time to Visit Bangkok", link: "/thailand/bangkok/destination-guides/price-cost/cheapest-time-to-visit-bangkok" },
    ]}
  />
);

export default BlogBangkokFoodCost;
