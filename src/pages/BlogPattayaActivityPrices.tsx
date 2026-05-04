import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-tropical-beach-1.jpg";

const BlogPattayaActivityPrices = () => (
  <BlogArticleLayout
    title="Pattaya Activity Prices 2026: Full List (Shows, Islands, Parks)"
    description="Updated 2026 list of Pattaya activity prices — Coral Island, Alcazar, Tiffany, Nong Nooch, Sanctuary of Truth, Ramayana Water Park and more."
    heroImage={heroImg}
    heroAlt="Tropical beach view in Pattaya with palm trees and clear water"
    author="Yellodae Travel Expert"
    date="May 2, 2026"
    readTime="9 min read"
    category="Price / Cost Blogs"
    keywords={[
      "pattaya activity prices",
      "pattaya tour cost 2026",
      "pattaya attraction ticket price",
      "pattaya shows price",
      "ramayana water park price",
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
      { title: "Alcazar Cabaret Show", link: "/thailand/pattaya/alcazar-show" },
      { title: "Tiffany's Cabaret Show", link: "/thailand/pattaya/tiffany-show" },
      { title: "Nong Nooch Tropical Garden", link: "/thailand/pattaya/nong-nooch-garden" },
      { title: "Sanctuary of Truth Tickets", link: "/thailand/pattaya/sanctuary-of-truth" },
    ]}
    sections={[
      { type: "paragraph", content: "Pattaya is affordable, but activity pricing varies a lot depending on where and how you book. Here's the complete 2026 price list — shows, island tours, water parks, gardens and cultural attractions — so you can plan your day without overpaying." },
      { type: "heading", content: "1. Island Tours & Beach Activities" },
      { type: "list", items: [
        "Coral Island basic tour: ₹1,200 – ₹1,800",
        "Coral Island standard (with lunch): ₹1,800 – ₹2,500",
        "Coral Island premium (water sports + lunch): ₹2,500 – ₹3,500",
      ]},
      { type: "heading", content: "2. Water Sports" },
      { type: "list", items: [
        "Parasailing: ₹800 – ₹1,500",
        "Jet ski: ₹1,000 – ₹1,500",
        "Banana boat: ₹500 – ₹800",
        "Sea walking: ₹1,500 – ₹2,500",
      ]},
      { type: "heading", content: "3. Cabaret Shows" },
      { type: "list", items: [
        "Alcazar — Standard: ₹800–₹1,200 / Deluxe: ₹1,200–₹1,800 / VIP: ₹1,800–₹2,500",
        "Tiffany's — Standard: ₹1,200–₹1,800 / Deluxe: ₹1,800–₹2,500 / VIP: ₹2,500–₹3,500",
      ]},
      { type: "mid-activities", destination: "pattaya", heading: "Top-Rated Pattaya Experiences" },
      { type: "heading", content: "4. Gardens & Cultural Attractions" },
      { type: "list", items: [
        "Nong Nooch — Entry only: ₹500–₹800",
        "Nong Nooch — Entry + cultural shows: ₹800–₹1,200",
        "Nong Nooch — Full package with lunch: ₹1,200–₹1,800",
        "Sanctuary of Truth: ₹1,200–₹1,500",
      ]},
      { type: "heading", content: "5. Water Parks & Theme Parks" },
      { type: "list", items: [
        "Ramayana Water Park — Adults: ₹1,800–₹2,500",
        "Ramayana Water Park — Kids: ₹1,200–₹1,800",
        "Locker: ₹300–₹500, food extra: ₹500–₹1,000",
      ]},
      { type: "heading", content: "6. Indoor Attractions" },
      { type: "list", items: [
        "Underwater World Pattaya: ₹700–₹1,000",
        "Pattaya Floating Market entry: ₹200–₹400",
        "Floating Market boat ride: ₹300–₹600",
      ]},
      { type: "heading", content: "7. Local Transport on Activity Days" },
      { type: "list", items: [
        "Songthaew (shared): ₹20–₹50",
        "Taxi / Grab: ₹100–₹400",
        "Private transfers: ₹800–₹2,000",
      ]},
      { type: "heading", content: "Total Activity Budget Per Day" },
      { type: "list", items: [
        "Budget traveler: ₹1,500 – ₹3,000",
        "Mid-range: ₹3,000 – ₹6,000",
        "Luxury: ₹6,000 – ₹12,000+",
      ]},
      { type: "tip-box", content: "Combo packages (Coral Island + water sports, or city tour + attractions) cut your spend by 25–40% versus booking individually." },
      { type: "heading", content: "How to Save Money" },
      { type: "list", items: [
        "Pre-book online — cheaper than spot prices",
        "Negotiate water-sport rates politely (20–40% room)",
        "Avoid December–New Year peak pricing",
        "Skip duplicate experiences (only need one cabaret)",
      ]},
      { type: "heading", content: "Final Activity Budget Recommendation" },
      { type: "list", items: [
        "Budget: ₹5,000 – ₹8,000 total",
        "Mid-range: ₹8,000 – ₹15,000 total",
        "Luxury: ₹15,000+ total",
      ]},
      { type: "cta", content: "Browse all Pattaya experiences", link: "/thailand/pattaya/things-to-do", linkText: "Explore Pattaya" },
    ]}
    relatedLinks={[
      { title: "Coral Island Pattaya Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/coral-island-pattaya-price-guide" },
      { title: "Pattaya Water Sports Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-water-sports-price-guide" },
      { title: "Sanctuary of Truth Ticket Price + Hidden Costs", link: "/thailand/pattaya/destination-guides/price-cost/sanctuary-of-truth-ticket-price" },
      { title: "Alcazar vs Tiffany Show Price Comparison", link: "/thailand/pattaya/destination-guides/price-cost/alcazar-vs-tiffany-show-price" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
    ]}
  />
);

export default BlogPattayaActivityPrices;
