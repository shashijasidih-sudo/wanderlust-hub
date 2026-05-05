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
    subCategory={{ label: "Price & Cost Guides", link: "/thailand/bangkok/destination-guides#price-cost" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    relatedActivities={[
      { title: "Wat Arun Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide" },
      { title: "Grand Palace Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide" },
      { title: "Mahanakhon Skywalk Tickets Guide", link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide" },
      { title: "Safari World Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide" },
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
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Bangkok 2 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-2-day-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer" },
      { title: "Explore All Bangkok Tours & Activities", link: "/thailand/bangkok" },
    ]}
  />
);

export default BlogBangkokTripCost;
