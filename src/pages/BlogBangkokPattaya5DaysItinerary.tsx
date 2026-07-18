import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-vs-pattaya.jpg";

const BlogBangkokPattaya5DaysItinerary = () => (
  <BlogArticleLayout
    title="Bangkok + Pattaya 5 Days Itinerary 2026: Most Popular Route"
    description="The most popular 5-day Thailand itinerary — 2 days Bangkok culture & shopping + 3 days Pattaya beaches, Coral Island and nightlife."
    heroImage={heroImg}
    heroAlt="Bangkok and Pattaya combo route map for 5-day Thailand itinerary"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="12 min read"
    category="Itinerary Blogs"
    keywords={["Bangkok Pattaya 5 day itinerary","Thailand 5 days plan","Bangkok Pattaya combo","Thailand itinerary from India","5 day Thailand trip"]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/pattaya/destination-guides#itinerary" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do/",
      transfersLink: "/thailand/pattaya/",
    }}
    sections={[
      { type: "paragraph", content: "If you're flying into Thailand from India for the first time and have 5 days, the Bangkok + Pattaya combo is the route locals quietly recommend. Bangkok gives you culture, shopping and food. Pattaya gives you beaches, Coral Island and nightlife. Together they cover 80% of what most first-time visitors actually want — without flights between cities. Here's the day-by-day plan." },
      { type: "heading", content: "5-Day Overview" },
      { type: "list", items: ["Day 1: Arrival in Bangkok + Shopping","Day 2: Bangkok sightseeing + culture","Day 3: Transfer to Pattaya + nightlife","Day 4: Coral Island + water sports","Day 5: Sanctuary of Truth + departure"] },
      { type: "heading", content: "Day 1: Arrival in Bangkok + Pratunam Shopping" },
      { type: "paragraph", content: "Land at Suvarnabhumi (BKK) or Don Mueang (DMK), check into a Sukhumvit hotel, eat lunch (Thai street food or Indian) and head to Pratunam or Siam for first-day shopping. Light pace — recover from the flight." },
      { type: "heading", content: "Day 2: Bangkok Cultural Day" },
      { type: "paragraph", content: "Big Bangkok day — Grand Palace + Wat Pho (Reclining Buddha) in the morning, Wat Arun (Temple of Dawn) in the afternoon. Evening: Chao Phraya dinner cruise to end the Bangkok leg with the city skyline lit up." },
      { type: "tip-box", content: "Always book the Bangkok→Pattaya private transfer the night before — morning rates spike and shared vans on weekends often run delayed." },
      { type: "heading", content: "Day 3: Transfer to Pattaya + First Night" },
      { type: "paragraph", content: "Morning transfer (1.5–2 hours, ₹300 shared / ₹2000 private). Check into a Central Pattaya hotel by lunch. Afternoon: relax / pool. Evening: pick one — cabaret (Alcazar / Tiffany), pub crawl on Soi Buakhao or Walking Street. Sleep early — Day 4 is intense." },
      { type: "mid-activities", destination: "pattaya", heading: "Plan Your Pattaya Activities" },
      { type: "heading", content: "Day 4: Coral Island Full Day" },
      { type: "paragraph", content: "7–9 AM pickup → Bali Hai Pier → speedboat to Coral Island. Full day of water sports: parasailing (₹800–₹1500), jet ski, banana boat, sea walking. Tour packages include lunch and 1–2 water sports. Back to Pattaya by 4 PM. Evening: massage, beach road shopping or a quiet dinner." },
      { type: "heading", content: "Day 5: Sanctuary of Truth + Departure" },
      { type: "paragraph", content: "Morning: Sanctuary of Truth (2–3 hours, ₹1200–₹1500 entry) — Pattaya's most iconic photograph. Afternoon: light shopping, late lunch and private transfer back to Suvarnabhumi (Bangkok airport, 1.5–2 hours). Aim for a flight after 7 PM to avoid stress." },
      { type: "heading", content: "5-Day Bangkok + Pattaya Budget (per person)" },
      { type: "list", items: ["Budget: ₹50,000","Mid-range: ₹70,000","Luxury: ₹90,000+","All-inclusive of flights from major Indian metros, hotels, transfers and 4–5 paid activities"] },
      { type: "heading", content: "Alternative Plan (Luxury Travelers)" },
      { type: "paragraph", content: "Upgrade to 5-star hotels in both cities (Lebua / The Sukhothai in Bangkok, Hilton / Royal Cliff in Pattaya), use private speedboats for Coral Island and add a private Chao Phraya cruise. Same itinerary, premium experience." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Bangkok + Pattaya in 5 days is the most efficient Thailand route from India — no domestic flights, balanced city/beach mix and total cost that beats Phuket. If you've got 7 days, add a 2-night Krabi extension at the end. If you've got 4 days, drop the Sanctuary of Truth day and finish from Pattaya directly." },
      { type: "cta", content: "Plan your Bangkok + Pattaya trip", link: "/thailand/pattaya/things-to-do/", linkText: "Explore Tours" }
    ]}
    relatedActivities={[
      { title: "Coral Island Pattaya Guide 2026", link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide/" },
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide/" },
      { title: "Alcazar Cabaret Show Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/alcazar-show-pattaya-guide/" },
      { title: "Nong Nooch Tropical Garden Pattaya", link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide/" },
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

export default BlogBangkokPattaya5DaysItinerary;
