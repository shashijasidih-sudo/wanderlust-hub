import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-boat-tour-1.jpg";

const BlogPattaya3DaysTripCost = () => (
  <BlogArticleLayout
    title="Pattaya 3 Days Trip Cost 2026: Budget vs Luxury (Day-Wise)"
    description="Day-wise Pattaya 3-day trip cost — flights, hotels, food, activities and transfers compared across budget, mid-range and luxury travelers."
    heroImage={heroImg}
    heroAlt="Pattaya boat tour with tropical hills in background"
    author="Yellodae Travel Expert"
    date="May 2, 2026"
    readTime="9 min read"
    category="Price / Cost Blogs"
    keywords={[
      "pattaya 3 days trip cost",
      "pattaya 3 day budget",
      "pattaya 3 night package price",
      "pattaya trip cost luxury",
      "pattaya itinerary cost india",
    ]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Price & Cost Guides", link: "/thailand/pattaya/destination-guides#price-cost" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya/bangkok-airport-to-pattaya-transfer",
    }}
    relatedActivities={[
      { title: "Coral Island Speedboat Tour", link: "/thailand/pattaya/coral-island-tour" },
      { title: "Alcazar Cabaret Show Tickets", link: "/thailand/pattaya/alcazar-show" },
      { title: "Nong Nooch Tropical Garden", link: "/thailand/pattaya/nong-nooch-garden" },
      { title: "Bangkok Airport to Pattaya Transfer", link: "/thailand/pattaya/bangkok-airport-to-pattaya-transfer" },
    ]}
    sections={[
      { type: "paragraph", content: "Planning 3 days in Pattaya from India? Here's a complete cost breakdown — flights, hotels, food, activities and transfers — with a real day-by-day spending plan for budget, mid-range and luxury travelers." },
      { type: "heading", content: "Flight Cost (India → Bangkok)" },
      { type: "list", items: [
        "Off-season round-trip: ₹18,000 – ₹25,000",
        "Peak (Dec/Jan): ₹25,000 – ₹40,000",
      ]},
      { type: "heading", content: "Hotel Cost (3 Nights in Pattaya)" },
      { type: "list", items: [
        "Budget: ₹2,400 – ₹6,000 total",
        "Mid-range: ₹6,000 – ₹15,000 total",
        "Luxury: ₹15,000 – ₹45,000+ total",
      ]},
      { type: "heading", content: "Food Cost for 3 Days" },
      { type: "list", items: [
        "Budget (street + casual): ₹1,000 – ₹2,000",
        "Mid-range (mix of Indian + Thai): ₹2,500 – ₹4,500",
        "Luxury (fine dining): ₹6,000+",
      ]},
      { type: "mid-activities", destination: "pattaya", heading: "Activities to Pre-Book Before You Fly" },
      { type: "heading", content: "Day 1 — Arrival + City + Cabaret" },
      { type: "list", items: [
        "Bangkok airport → Pattaya transfer",
        "Hotel check-in",
        "Evening: Alcazar or Tiffany's show",
      ]},
      { type: "paragraph", content: "Cost: ₹2,000 – ₹5,000 per person." },
      { type: "heading", content: "Day 2 — Coral Island + Water Sports" },
      { type: "list", items: [
        "Coral Island speedboat tour with lunch",
        "Parasailing + jet ski combo",
      ]},
      { type: "paragraph", content: "Cost: ₹3,500 – ₹6,500 per person." },
      { type: "heading", content: "Day 3 — Nong Nooch / Sanctuary + Departure" },
      { type: "list", items: [
        "Nong Nooch Tropical Garden or Sanctuary of Truth",
        "Lunch + souvenirs",
        "Pattaya → Bangkok airport transfer",
      ]},
      { type: "paragraph", content: "Cost: ₹2,500 – ₹5,000 per person." },
      { type: "heading", content: "Optional Nightlife (Add-On)" },
      { type: "list", items: [
        "Club entry: ₹500 – ₹1,500",
        "Drinks: ₹500 – ₹1,500",
        "Can easily add ₹3,000–₹5,000 to total",
      ]},
      { type: "tip-box", content: "Bundle Bangkok ↔ Pattaya transfers + 2 activities at booking. You'll save 15–20% versus paying per service." },
      { type: "heading", content: "Pattaya vs Other Destinations (3-Day)" },
      { type: "list", items: [
        "Dubai 3-day: ₹70,000+ — far more expensive",
        "Europe: not viable in 3 days",
        "Bali: similar to Pattaya pricing",
      ]},
      { type: "heading", content: "Final 3-Day Budget Recommendation" },
      { type: "list", items: [
        "Budget: ₹35,000 per person",
        "Mid-range: ₹55,000 – ₹70,000 per person",
        "Luxury: ₹1,00,000+ per person",
      ]},
      { type: "cta", content: "Build a custom Pattaya 3-day plan", link: "/thailand/pattaya/things-to-do", linkText: "Plan Your Trip" },
    ]}
    relatedLinks={[
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
      { title: "Coral Island Pattaya Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/coral-island-pattaya-price-guide" },
      { title: "Pattaya Activity Prices: Full List", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices" },
      { title: "Pattaya Water Sports Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-water-sports-price-guide" },
    ]}
  />
);

export default BlogPattaya3DaysTripCost;
