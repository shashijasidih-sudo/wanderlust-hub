import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/floating-market-1.jpg";

const BlogPattayaFloatingMarketGuide = () => (
  <BlogArticleLayout
    title="Pattaya Floating Market Guide: Shopping, Food & Entry Tips"
    description="Pattaya Floating Market guide — entry tickets, must-try food, shopping tips, boat ride cost and how to plan a perfect 2-hour visit."
    heroImage={heroImg}
    heroAlt="Wooden boats with vendors at Pattaya Floating Market"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="7 min read"
    category="Activity Blogs"
    keywords={[
      "pattaya floating market",
      "pattaya floating market tickets",
      "pattaya floating market food",
      "pattaya shopping guide",
      "four regions floating market",
    ]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/pattaya/destination-guides#activity" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya/bangkok-airport-to-pattaya-transfer",
    }}
    relatedActivities={[
      { title: "Pattaya Floating Market Tour", link: "/thailand/pattaya/floating-market" },
      { title: "Coral Island Speedboat Tour", link: "/thailand/pattaya/coral-island-tour" },
      { title: "Sanctuary of Truth Tickets", link: "/thailand/pattaya/sanctuary-of-truth" },
    ]}
    sections={[
      { type: "paragraph", content: "The Pattaya Floating Market (Four Regions Floating Market) is a great way to experience traditional Thai food, handicrafts and culture without leaving Pattaya. It's compact, photogenic and perfect for a quick 1.5–2 hour cultural break." },
      { type: "heading", content: "Location & How to Reach" },
      { type: "list", items: [
        "Located ~10–12 km from central Pattaya",
        "Taxi / Grab: ₹300 – ₹600",
        "Most city tours include a 1-hour stop here",
      ]},
      { type: "heading", content: "Opening Hours" },
      { type: "list", items: [
        "Daily: 9:00 AM – 8:00 PM",
        "Best time to visit: 10:00 AM – 1:00 PM (cooler, livelier)",
      ]},
      { type: "heading", content: "Entry & Boat Ride Prices (2026)" },
      { type: "list", items: [
        "Entry ticket: ₹400 – ₹600",
        "Long-tail boat ride: ₹500 – ₹900 per person",
        "Cultural show: usually included in entry",
      ]},
      { type: "mid-activities", destination: "pattaya", heading: "Book Pattaya Cultural Activities" },
      { type: "heading", content: "Must-Try Food" },
      { type: "list", items: [
        "Mango sticky rice — Thailand's signature dessert",
        "Pad Thai cooked fresh on the boat",
        "Coconut ice cream served in a coconut shell",
        "Grilled seafood skewers and tom yum",
      ]},
      { type: "heading", content: "What You Can Shop For" },
      { type: "list", items: [
        "Handmade Thai souvenirs and wooden crafts",
        "Silk scarves and traditional dresses",
        "Spices, dried fruits and Thai snacks",
        "Affordable jewelry and home decor",
      ]},
      { type: "tip-box", content: "Always bargain — start at 50% of the quoted price. Vendors expect it and rarely refuse a fair counter-offer." },
      { type: "heading", content: "Suggested 2-Hour Plan" },
      { type: "list", items: [
        "Spend 30 minutes walking around all four regions",
        "Take a 30-minute boat ride for the best photos",
        "Eat at 2–3 different food stalls",
        "Catch the cultural show if timing aligns",
      ]},
      { type: "heading", content: "Pros & Cons" },
      { type: "list", items: [
        "Pros: cultural experience, great food, photogenic",
        "Pros: easy to reach, family-friendly",
        "Cons: smaller and more touristy than Bangkok's Damnoen Saduak",
        "Cons: cash-only at most stalls",
      ]},
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: [
        "Carry small Thai baht notes — most vendors don't accept cards",
        "Wear comfortable footwear — wooden walkways can be slippery",
        "Avoid weekends if you don't like crowds",
        "Combine with Sanctuary of Truth or Nong Nooch for a half-day",
      ]},
      { type: "heading", content: "Is It Worth Visiting?" },
      { type: "paragraph", content: "Yes — especially for first-time visitors who want a quick cultural experience without the long drive to Bangkok's bigger floating markets. It's compact, fun and pairs well with most other Pattaya attractions." },
      { type: "cta", content: "Book Pattaya Floating Market tour", link: "/thailand/pattaya/floating-market", linkText: "View Tour" },
    ]}
    relatedLinks={[
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide" },
      { title: "Nong Nooch Garden Guide", link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide" },
      { title: "Pattaya Activity Prices: Full List", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
    ]}
  />
);

export default BlogPattayaFloatingMarketGuide;
