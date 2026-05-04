import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-islands-boats-1.jpg";

const BlogCoralIslandPattayaGuide = () => (
  <BlogArticleLayout
    title="Coral Island Pattaya Guide: Parasailing, Sea Walk & Full Day Itinerary"
    description="Complete Coral Island (Koh Larn) guide — how to reach, top water sports, best beaches, full-day itinerary, prices and pro tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="Speedboats and longtail boats around Coral Island, Pattaya"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={[
      "coral island pattaya",
      "koh larn guide",
      "pattaya parasailing sea walk",
      "coral island full day itinerary",
      "pattaya water sports guide",
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
      { title: "Coral Island Speedboat Tour", link: "/thailand/pattaya/coral-island-tour" },
      { title: "Pattaya Water Sports", link: "/thailand/pattaya/things-to-do" },
      { title: "Alcazar Cabaret Show", link: "/thailand/pattaya/alcazar-show" },
    ]}
    sections={[
      { type: "paragraph", content: "If you're visiting Pattaya and expecting clear blue water, white sand and adventure, Coral Island (Koh Larn) is where you actually get it. Pattaya Beach is lively but not known for crystal-clear water — which is why almost every Pattaya itinerary includes a Coral Island day trip." },
      { type: "paragraph", content: "Located just 7–8 km off the coast, Coral Island offers a perfect combo of water sports, scenic beaches and easy access — ideal for couples, families and first-time international travelers from India." },
      { type: "heading", content: "How to Reach Coral Island" },
      { type: "list", items: [
        "Speedboat (best choice): 20–30 min, ₹800–₹2,000 — usually bundled in tour packages",
        "Ferry from Bali Hai Pier: 45–60 min, ₹100–₹200 — cheap but fixed timings",
      ]},
      { type: "tip-box", content: "Choose a package that includes parasailing + island transfer + lunch — it saves both time and money versus paying on-spot." },
      { type: "heading", content: "Top Things to Do on Coral Island" },
      { type: "list", items: [
        "Parasailing — ₹800–₹1,500, done at the mid-sea platform before reaching the island",
        "Sea Walking — ₹1,500–₹2,500, walk on the seabed with an oxygen helmet (no swimming needed)",
        "Jet Ski — ₹1,000–₹1,500, confirm time and 'no damage charge' upfront",
        "Banana Boat — ₹500–₹800, fun group activity",
        "Snorkeling and underwater photo sessions",
      ]},
      { type: "mid-activities", destination: "pattaya", heading: "Book Coral Island & Pattaya Activities" },
      { type: "heading", content: "Best Beaches on Coral Island" },
      { type: "list", items: [
        "Tawaen Beach — main beach, most crowded, most activities",
        "Samae Beach — cleaner water, scenic, best for couples",
        "Tien Beach — quiet hidden gem, fewer facilities",
      ]},
      { type: "heading", content: "Perfect Full-Day Itinerary" },
      { type: "list", items: [
        "7:30 AM – Hotel pickup, transfer to Bali Hai Pier",
        "8:30 AM – Speedboat + parasailing stop",
        "10:00 AM – Arrive island, beach time + photos",
        "12:00 PM – Lunch (usually included)",
        "1:30 PM – Sea walking / jet ski / banana boat",
        "4:00 PM – Return to Pattaya, drop at hotel",
      ]},
      { type: "heading", content: "Coral Island Price Breakdown (2026)" },
      { type: "list", items: [
        "Tour package: ₹1,200 – ₹3,500",
        "Parasailing: ₹800 – ₹1,500",
        "Sea Walk: ₹1,500 – ₹2,500",
        "Jet Ski: ₹1,000 – ₹1,500",
      ]},
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: [
        "Not booking activities in advance",
        "Paying inflated on-spot prices",
        "Going on weekends (peak crowd)",
        "Forgetting cash for small vendors",
      ]},
      { type: "heading", content: "Pro Tips Most Blogs Don't Tell You" },
      { type: "list", items: [
        "Book morning tours to avoid the lunch-hour rush",
        "Pick Samae Beach over Tawaen for better photos",
        "Carry a waterproof phone pouch",
        "Wear quick-dry clothes; you'll get wet during transfers",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Coral Island offers the best mix of adventure and scenic beauty near Pattaya, and it's the easiest day trip to plan. For first-time travelers, couples and families — it's a 100% must-do." },
      { type: "cta", content: "Book a Coral Island speedboat tour", link: "/thailand/pattaya/coral-island-tour", linkText: "View Tour" },
    ]}
    relatedLinks={[
      { title: "Coral Island Pattaya Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/coral-island-pattaya-price-guide" },
      { title: "Pattaya Water Sports Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-water-sports-price-guide" },
      { title: "Pattaya Activity Prices: Full List", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
    ]}
  />
);

export default BlogCoralIslandPattayaGuide;
