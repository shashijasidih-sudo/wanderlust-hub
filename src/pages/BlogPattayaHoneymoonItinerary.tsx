import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-woman-sea-1.jpg";

const BlogPattayaHoneymoonItinerary = () => (
  <BlogArticleLayout
    title="Pattaya Honeymoon Itinerary 2026: 4 Days Romantic Plan"
    description="A 4-day Pattaya honeymoon plan with romantic dinners, Coral Island couple activities, scenic spots, sunset cruises and luxury options."
    heroImage={heroImg}
    heroAlt="Couple at Pattaya beach during romantic honeymoon trip"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["Pattaya honeymoon itinerary","Pattaya couple plan","Pattaya 4 days romantic","Pattaya for honeymooners","romantic Pattaya"]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/pattaya/destination-guides#itinerary" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya",
    }}
    sections={[
      { type: "paragraph", content: "Pattaya isn't the first city most people associate with honeymoons — but if you skip Walking Street and lean into the cleaner side of the city (Jomtien beach, Sanctuary of Truth at sunset, Nong Nooch garden walks, private speedboat to Coral Island), it becomes a stunning, affordable couple's destination. This 4-day Pattaya honeymoon itinerary is built specifically for couples and first-time international honeymooners from India." },
      { type: "heading", content: "Quick Overview" },
      { type: "list", items: ["Day 1: Arrival + romantic evening","Day 2: Coral Island couple activities","Day 3: Culture, scenic spots + sunset","Day 4 (optional): Luxury day + spa"] },
      { type: "heading", content: "Day 1: Arrival + Romantic Evening" },
      { type: "paragraph", content: "Transfer from Bangkok and check into a Jomtien beachfront resort or a Royal Cliff / Hilton suite (₹4,000–₹15,000/night). Light lunch, rest, then a sunset Pattaya Beach walk followed by a couple's seafood dinner at a beach-side restaurant in Jomtien. Skip Walking Street." },
      { type: "heading", content: "Day 2: Coral Island Couple Day" },
      { type: "paragraph", content: "Take an early speedboat to Coral Island (preferably a private speedboat for couples — ₹4,000–₹6,000). Shared thrills: parasailing, jet ski, sea walking. Lunch on the island. Afternoon back to Pattaya for a couple's massage. Skip the heavy nightlife." },
      { type: "tip-box", content: "Book a private speedboat instead of a shared tour for Coral Island — it costs only 30% more than 2 individual seats and turns the day into a proper honeymoon experience." },
      { type: "mid-activities", destination: "pattaya", heading: "Romantic Pattaya Experiences" },
      { type: "heading", content: "Day 3: Culture + Scenic Spots + Sunset" },
      { type: "paragraph", content: "Morning: Nong Nooch Tropical Garden — incredibly photogenic for couple photos. Afternoon: Sanctuary of Truth (the wooden temple looks unreal in golden hour). Evening: a sunset cruise or rooftop dinner at Horizon (Hilton)." },
      { type: "heading", content: "Day 4 (Optional): Luxury & Relaxation" },
      { type: "paragraph", content: "Two options: a private island day-trip with a chartered yacht, or a full spa + pool day at the resort followed by a fine-dining dinner. Either way, the last day should be slow." },
      { type: "heading", content: "Honeymoon Budget (4 Days)" },
      { type: "list", items: ["Mid-range hotels: ₹16,000–₹24,000 total","Luxury hotels: ₹40,000–₹60,000 total","Activities + dining: ₹8,000–₹15,000","Transfers: ₹4,000–₹6,000"] },
      { type: "heading", content: "Pattaya vs Phuket for Honeymoon" },
      { type: "paragraph", content: "Pattaya = budget honeymoon (lower hotel rates, faster from Bangkok, no domestic flight). Phuket = luxury honeymoon (better resorts, more dramatic beaches, longer travel). For a 4-day first-international honeymoon under ₹1.5L per couple, Pattaya wins on convenience and value." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "If you treat Pattaya like a beach + culture honeymoon (Jomtien side, not Walking Street), it's an incredibly underrated romantic destination. This 4-day plan delivers Coral Island, Sanctuary of Truth, sunset views and proper couple time without crossing your honeymoon budget." },
      { type: "cta", content: "Plan your Pattaya honeymoon", link: "/thailand/pattaya/things-to-do", linkText: "Explore Pattaya Tours" }
    ]}
    relatedActivities={[
      { title: "Coral Island Pattaya Guide 2026", link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide" },
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide" },
      { title: "Alcazar Cabaret Show Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/alcazar-show-pattaya-guide" },
      { title: "Nong Nooch Tropical Garden Pattaya", link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide" },
    ]}
    relatedLinks={[
      { title: "Pattaya 3 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary" },
      { title: "Pattaya 2 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-2-days-itinerary" },
      { title: "Bangkok to Pattaya Transfer Guide", link: "/thailand/pattaya/destination-guides/transfer/bangkok-to-pattaya-transfer" },
      { title: "Suvarnabhumi to Pattaya Cost & Time", link: "/thailand/pattaya/destination-guides/transfer/suvarnabhumi-to-pattaya" },
      { title: "Explore All Pattaya Tours & Activities", link: "/thailand/pattaya" },
    ]}
  />
);

export default BlogPattayaHoneymoonItinerary;
