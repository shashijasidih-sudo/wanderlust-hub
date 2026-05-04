import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-boats-beach-1.jpg";

const BlogPattayaWaterSportsPrice = () => (
  <BlogArticleLayout
    title="Pattaya Water Sports Price Guide 2026: Parasailing, Jet Ski & More"
    description="Updated 2026 prices for Pattaya water sports — parasailing, jet ski, banana boat, sea walking. Where to do them, hidden charges and how to avoid scams."
    heroImage={heroImg}
    heroAlt="Speedboats and water-sport craft on Pattaya Beach"
    author="Yellodae Travel Expert"
    date="May 2, 2026"
    readTime="8 min read"
    category="Price / Cost Blogs"
    keywords={[
      "pattaya water sports price",
      "parasailing pattaya cost",
      "jet ski pattaya price",
      "coral island water sports price",
      "pattaya activity scam guide",
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
      { title: "Pattaya Parasailing & Water Sports", link: "/thailand/pattaya/water-sports" },
      { title: "Coral Island Speedboat Tour", link: "/thailand/pattaya/coral-island-tour" },
    ]}
    sections={[
      { type: "paragraph", content: "Water sports are the highlight of any Pattaya day at the beach — but pricing on the sand is rarely transparent. This guide gives you the real 2026 rates, the best location for each activity and how to avoid the common scams." },
      { type: "heading", content: "Where to Do Water Sports in Pattaya" },
      { type: "list", items: [
        "Pattaya Beach (main road) — easy access, maximum vendors, more haggling",
        "Coral Island (Koh Larn) — better water clarity, fixed-ish pricing through tour operators",
        "Jomtien Beach — quieter, slightly cheaper",
      ]},
      { type: "heading", content: "Activity-Wise Price List (2026)" },
      { type: "list", items: [
        "Parasailing — ₹800 – ₹1,500 (1 round, ~10–12 minutes)",
        "Jet ski — ₹1,000 – ₹1,500 (15 minutes)",
        "Banana boat — ₹500 – ₹800 (~10 minutes per ride)",
        "Sea walking — ₹1,500 – ₹2,500 (best done at Coral Island)",
        "Speedboat charter (private) — ₹3,000+ per hour",
      ]},
      { type: "tip-box", content: "Always confirm timing in writing or with a stopwatch — short rides cut to 5–7 minutes are the most common scam." },
      { type: "mid-activities", destination: "pattaya", heading: "Combine Water Sports with These Activities" },
      { type: "heading", content: "Mainland vs Coral Island — Which Is Better?" },
      { type: "list", items: [
        "Coral Island: slightly more expensive, much better experience and water quality",
        "Mainland: cheaper, more vendor pressure, more disputes",
      ]},
      { type: "heading", content: "Hidden Charges to Watch For" },
      { type: "list", items: [
        "Extra charges added 'after' the activity (claims of damage to jet ski)",
        "Locker / shower / chair rental: ₹100–₹200",
        "Photographer fees: ₹200–₹500 per photo",
      ]},
      { type: "heading", content: "Best Time of Day" },
      { type: "list", items: [
        "8–10 AM: calm sea, fewer crowds",
        "Avoid 12–2 PM noon heat",
        "3–5 PM: golden-hour photos, but choppier water",
      ]},
      { type: "heading", content: "Who Should Try What?" },
      { type: "list", items: [
        "First-timers / families: parasailing or banana boat",
        "Adventure seekers: jet ski + sea walking combo",
        "Couples: tandem parasailing at Coral Island",
      ]},
      { type: "heading", content: "Sample Water-Sports Day Budget" },
      { type: "list", items: [
        "Parasailing: ₹1,200",
        "Jet ski: ₹1,200",
        "Banana ride: ₹600",
      ]},
      { type: "paragraph", content: "Total: about ₹3,000 per person — book through a Coral Island combo to keep it predictable." },
      { type: "heading", content: "What to Carry" },
      { type: "list", items: [
        "Swimwear & quick-dry towel",
        "Reef-safe sunscreen",
        "GoPro / waterproof phone pouch",
        "Cash in small denominations",
      ]},
      { type: "paragraph", content: "Plan smart, pre-book where you can, and Pattaya water sports turn out to be one of the best-value beach experiences in Asia." },
      { type: "cta", content: "Book Pattaya water sports", link: "/thailand/pattaya/water-sports", linkText: "View Water Sports" },
    ]}
    relatedLinks={[
      { title: "Coral Island Pattaya Price Guide", link: "/thailand/pattaya/destination-guides/price-cost/coral-island-pattaya-price-guide" },
      { title: "Pattaya Activity Prices: Full List", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
      { title: "Pattaya 3 Days Trip Cost", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-3-days-trip-cost" },
    ]}
  />
);

export default BlogPattayaWaterSportsPrice;
