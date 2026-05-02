import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-cost-budget.jpg";

const BlogBangkokTripCost = () => (
  /* SEO — Primary: bangkok trip cost from india | Intent: Commercial */
  <BlogArticleLayout
    title="Bangkok Trip Cost from India 2026: Full Budget Breakdown"
    description="Realistic Bangkok trip cost from India 2026 — flights, visa, hotels, food, activities and shopping with budget, mid-range and luxury per-person estimates."
    heroImage={heroImg}
    heroAlt="Bangkok skyline at sunset with Thai baht currency in foreground"
    author="Yellodae Travel Expert"
    date="Apr 29, 2026"
    readTime="9 min read"
    category="Price / Cost Blogs"
    keywords={[
      "bangkok trip cost from india",
      "bangkok 5 day budget",
      "bangkok package price india 2026",
      "thailand trip cost in rupees",
      "bangkok travel expenses for indians",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    relatedActivities={[
      { title: "Grand Palace & Emerald Buddha Tour", link: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
      { title: "Chao Phraya Princess Dinner Cruise", link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer" },
      { title: "Safari World & Marine Park", link: "/thailand/bangkok/safari-world" },
      { title: "Mahanakhon Skywalk Tickets", link: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
    ]}
    sections={[
      { type: "paragraph", content: "Wondering how much a Bangkok trip from India actually costs in 2026? Here's a transparent, no-fluff breakdown across budget, mid-range and luxury travelers — including flights, visa, hotels, food, activities and shopping." },
      { type: "heading", content: "Total Trip Cost — At a Glance (5 Days / 4 Nights, Per Person)" },
      { type: "list", items: [
        "Budget: ₹35,000 – ₹45,000",
        "Mid-range: ₹55,000 – ₹75,000",
        "Luxury: ₹1,20,000+",
      ]},
      { type: "heading", content: "1. Flights (Round-trip from India)" },
      { type: "list", items: [
        "Delhi/Mumbai → Bangkok: ₹18,000 – ₹28,000",
        "Bangalore/Chennai/Kolkata: ₹15,000 – ₹25,000",
        "Book 6–8 weeks in advance for the best fares",
      ]},
      { type: "heading", content: "2. Visa" },
      { type: "list", items: [
        "Visa-free entry for Indians (60 days) — saves ₹2,500+",
        "Carry proof of return ticket and hotel booking",
      ]},
      { type: "heading", content: "3. Hotels (Per Night)" },
      { type: "list", items: [
        "Budget hostels: ₹800 – ₹1,500",
        "3-star hotels: ₹2,500 – ₹4,500",
        "4-5 star: ₹6,000 – ₹15,000+",
      ]},
      { type: "heading", content: "4. Food (Per Day)" },
      { type: "list", items: [
        "Street food: ₹400 – ₹700",
        "Mid-range restaurants: ₹1,200 – ₹2,000",
        "Fine dining / rooftop: ₹3,000+",
      ]},
      { type: "mid-activities", destination: "bangkok", heading: "Top Bangkok Activities Worth Booking" },
      { type: "heading", content: "5. Activities & Tours (For Whole Trip)" },
      { type: "list", items: [
        "Grand Palace + Temples: ₹1,500 – ₹2,500",
        "Chao Phraya Dinner Cruise: ₹1,800 – ₹3,500",
        "Safari World: ₹3,000 – ₹4,000",
        "Mahanakhon Skywalk: ₹2,000",
      ]},
      { type: "heading", content: "6. Local Transport" },
      { type: "list", items: [
        "BTS Skytrain / MRT: ₹50 – ₹150 per ride",
        "Grab taxi: ₹200 – ₹500 per trip",
        "Tuk-tuk: ₹150 – ₹400 (negotiate)",
      ]},
      { type: "heading", content: "7. Shopping & Extras" },
      { type: "list", items: [
        "Chatuchak / MBK shopping: ₹3,000 – ₹10,000",
        "Spa / Thai massage: ₹600 – ₹2,500",
        "SIM card + data: ₹600",
      ]},
      { type: "tip-box", content: "Pro tip — book activities online before flying. You'll save 15–25% versus walk-in counter prices and avoid waiting in line." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "A comfortable Bangkok trip for an Indian traveler in 2026 averages ₹55,000–₹70,000 per person for 5 days. Pre-book flights, hotels and your top 3 activities to lock in the best price." },
      { type: "cta", content: "Plan a custom Bangkok package", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok" },
    ]}
    relatedLinks={[
      { title: "Bangkok Family Trip Cost", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-family-trip-cost" },
      { title: "Bangkok Couple Trip Cost", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-couple-trip-cost" },
      { title: "Cheapest Time to Visit Bangkok", link: "/thailand/bangkok/destination-guides/price-cost/cheapest-time-to-visit-bangkok" },
    ]}
  />
);

export default BlogBangkokTripCost;
