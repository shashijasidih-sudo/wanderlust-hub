import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-islands-boats-1.jpg";

const BlogPattayaCoralIslandComboItinerary = () => (
  <BlogArticleLayout
    title="Pattaya + Coral Island Itinerary 2026: Best Combo Plan"
    description="The perfect 2–3 day Pattaya + Coral Island combo plan — beaches, water sports, city sights and budget tips for a balanced trip."
    heroImage={heroImg}
    heroAlt="Speedboats and turquoise water at Coral Island near Pattaya"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="10 min read"
    category="Itinerary Blogs"
    keywords={["Pattaya Coral Island itinerary","Coral Island combo plan","Koh Larn itinerary","Pattaya island plan","Pattaya 2 3 days Coral"]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/pattaya/destination-guides#itinerary" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya",
    }}
    sections={[
      { type: "paragraph", content: "If you're heading to Pattaya, Coral Island (Koh Larn) is non-negotiable — it's the experience that turns a city trip into an actual beach holiday. Pattaya gives you nightlife, shows and city attractions; Coral Island gives you clear water, clean beaches, water sports and proper island vibes. Combining both creates the perfect balance of adventure and relaxation. Here's the optimised 2–3 day combo plan." },
      { type: "heading", content: "Quick Overview" },
      { type: "list", items: ["Day 1: Pattaya city + cabaret show","Day 2: Coral Island full day","Day 3 (optional): Sanctuary of Truth + departure"] },
      { type: "heading", content: "Day 1: Pattaya City + Show" },
      { type: "paragraph", content: "Transfer from Bangkok (1.5–2 hours), check into Central Pattaya. Lunch + light city exploration (Floating Market or Pattaya View Point). Evening: Alcazar or Tiffany cabaret show, dinner near Beach Road. Sleep early — Coral Island starts at 7 AM." },
      { type: "heading", content: "Day 2: Coral Island Full Day" },
      { type: "paragraph", content: "7–9 AM hotel pickup → Bali Hai Pier → speedboat to Coral Island (15 min). Best beaches: Tawaen (popular, all amenities) or Samae (quieter, cleaner). Water sports menu: parasailing (₹800–₹1500), jet ski (₹1000–₹1500), banana boat (₹500–₹800), sea walking (₹1500–₹2500). Lunch is included in most packages. Back to Pattaya by 4 PM. Evening: massage and shopping at Beach Road night market." },
      { type: "tip-box", content: "Pick a combo tour package (transfers + speedboat + lunch + 2 water sports) — DIY Koh Larn ferry + taxi + food usually costs the same after extras, with much more hassle." },
      { type: "mid-activities", destination: "pattaya", heading: "Plan Your Pattaya Activities" },
      { type: "heading", content: "Day 3 (Optional): Sanctuary of Truth + Departure" },
      { type: "paragraph", content: "Morning: Sanctuary of Truth (the all-wooden temple, 2–3 hours, ₹1200–₹1500). Light shopping. Late lunch and transfer back to Bangkok airport. Aim for a flight after 7 PM." },
      { type: "heading", content: "Speedboat vs Ferry to Coral Island" },
      { type: "list", items: ["Speedboat: 15 min, ₹400–₹600, included in tour packages","Public ferry: 45 min, ₹30–₹50 one-way, slower but cheaper","For day-trip itineraries, speedboat wins — saves 1+ hour on travel"] },
      { type: "heading", content: "Combo Trip Budget" },
      { type: "list", items: ["Hotel (2 nights): ₹3,000–₹6,000","Food: ₹2,000","Coral Island package: ₹1,800–₹3,500","Cabaret show: ₹1,200–₹2,500","Transfers: ₹2,000–₹4,000","Total: ₹10,000–₹18,000 per person (excluding flights)"] },
      { type: "heading", content: "Common Mistakes" },
      { type: "list", items: ["Doing Coral Island on Day 1 jet-lagged — energy crashes","Trying to fit Coral Island + city in one day","Skipping the speedboat and taking a slow ferry"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Pattaya + Coral Island in 2–3 days is the classic Thailand quick-trip from India. You get city, culture, beach, water sports and one big cabaret night — all without a domestic flight from Bangkok. Follow this combo plan exactly and you'll come back with the exact mix of adventure and relaxation a short Thailand trip should deliver." },
      { type: "cta", content: "Plan your Pattaya + Coral Island trip", link: "/thailand/pattaya/things-to-do", linkText: "Explore Pattaya Tours" }
    ]}
    relatedActivities={[
      { title: "Coral Island Tour with Lunch", link: "/thailand/pattaya/coral-island-tour" },
      { title: "Sanctuary of Truth Tickets", link: "/thailand/pattaya/sanctuary-of-truth" },
      { title: "Alcazar Cabaret Show", link: "/thailand/pattaya/alcazar-show" },
      { title: "Bangkok to Pattaya Transfer", link: "/thailand/pattaya/bangkok-airport-bkk-to-pattaya-hotel-transfer" },
    ]}
    relatedLinks={[
      { title: "Coral Island Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide" },
      { title: "Coral Island Tour vs DIY", link: "/thailand/pattaya/destination-guides/comparison/coral-island-tour-vs-koh-larn-diy" },
      { title: "Speedboat vs Ferry to Coral Island", link: "/thailand/pattaya/destination-guides/comparison/speedboat-vs-ferry-coral-island" },
      { title: "Pattaya 3 Days Itinerary", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary" },
    ]}
  />
);

export default BlogPattayaCoralIslandComboItinerary;
