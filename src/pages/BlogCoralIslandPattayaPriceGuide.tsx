import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-islands-boats-1.jpg";

const BlogCoralIslandPattayaPriceGuide = () => (
  <BlogArticleLayout
    title="Coral Island Pattaya Price Guide: Tours vs Self-Planning (2026)"
    description="Coral Island (Koh Larn) Pattaya cost breakdown — tour packages vs self-planning, water sports, ferry, hidden charges and money-saving tips."
    heroImage={heroImg}
    heroAlt="Long-tail boats and turquoise water at Koh Larn Coral Island Pattaya"
    author="Yellodae Travel Expert"
    date="May 2, 2026"
    readTime="8 min read"
    category="Price / Cost Blogs"
    keywords={[
      "coral island pattaya price",
      "koh larn cost",
      "coral island tour package price",
      "coral island self planning cost",
      "pattaya day trip cost",
    ]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Price & Cost Guides", link: "/thailand/pattaya/destination-guides#price-cost" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do/",
      transfersLink: "/thailand/pattaya/bangkok-airport-to-pattaya-transfer/",
    }}
    relatedActivities={[
      { title: "Coral Island Pattaya Guide 2026", link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide/" },
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide/" },
      { title: "Alcazar Cabaret Show Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/alcazar-show-pattaya-guide/" },
      { title: "Nong Nooch Tropical Garden Pattaya", link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide/" },
    ]}
    sections={[
      { type: "paragraph", content: "Coral Island (Koh Larn) is the most popular day trip from Pattaya — but pricing can swing from ₹300 (budget ferry) to ₹3,000+ (premium speedboat tours). This guide breaks down the real cost so you can pick the right option." },
      { type: "heading", content: "Option 1: Booked Tour Package" },
      { type: "list", items: [
        "Basic shared speedboat tour: ₹1,200 – ₹1,800",
        "Standard tour with lunch: ₹1,800 – ₹2,500",
        "Premium tour (water sports + lunch + pickup): ₹2,500 – ₹3,500",
        "Includes: hotel pickup & drop, speedboat transfer, often parasailing",
      ]},
      { type: "heading", content: "Option 2: Self-Planning" },
      { type: "list", items: [
        "Public ferry (one way): ₹100 – ₹150",
        "Songthaew to Bali Hai pier: ₹20 – ₹50",
        "Beach chair + umbrella: ₹100 – ₹200",
        "Lunch at the beach: ₹400 – ₹800",
        "Water sports add-ons (pay individually)",
      ]},
      { type: "heading", content: "Water Sports Costs at Coral Island" },
      { type: "list", items: [
        "Parasailing: ₹800 – ₹1,500",
        "Jet ski: ₹1,000 – ₹1,500",
        "Banana boat: ₹500 – ₹800",
        "Sea walking: ₹1,500 – ₹2,500",
      ]},
      { type: "tip-box", content: "Prices are rarely fixed — always confirm duration in writing and negotiate when paying on the beach." },
      { type: "mid-activities", destination: "pattaya", heading: "Pair With Other Pattaya Experiences" },
      { type: "heading", content: "Hidden Costs Travelers Forget" },
      { type: "list", items: [
        "Locker rental: ₹100 – ₹200",
        "Beach photographer: ₹200 – ₹500 per photo",
        "Shower / changing room: ₹50 – ₹100",
        "Drinks at the beach (priced higher than mainland)",
      ]},
      { type: "heading", content: "Sample Self-Planning Day Budget" },
      { type: "list", items: [
        "Transport (return): ₹400",
        "Beach setup + lunch: ₹1,100",
        "1 water sport: ₹2,000",
        "Snacks + water: ₹400",
      ]},
      { type: "paragraph", content: "Total: roughly ₹3,900 per person — competitive with a mid-tier tour, but you handle logistics yourself." },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "list", items: [
        "Paying for activities individually on the spot (40–50% premium)",
        "Skipping written confirmation on water-sport timings",
        "Booking on Bali Hai pier without comparing online rates",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "If you want a hassle-free day with everything sorted, a ₹2,000–₹2,500 standard tour wins. If you're a budget traveler with time, self-planning at ₹1,500–₹2,000 is fine. Either way, Coral Island is worth visiting." },
      { type: "cta", content: "Book a Coral Island speedboat tour", link: "/thailand/pattaya/coral-island-tour/", linkText: "View Coral Island Tours" },
    ]}
    relatedLinks={[
      { title: "Pattaya 3 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary/" },
      { title: "Pattaya 2 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-2-days-itinerary/" },
      { title: "Bangkok to Pattaya Transfer Guide", link: "/thailand/pattaya/destination-guides/transfer/bangkok-to-pattaya-transfer/" },
      { title: "Suvarnabhumi to Pattaya Cost & Time", link: "/thailand/pattaya/destination-guides/transfer/suvarnabhumi-to-pattaya/" },
      { title: "Explore All Pattaya Tours & Activities", link: "/thailand/pattaya/" },
    ]}
  />
);

export default BlogCoralIslandPattayaPriceGuide;
