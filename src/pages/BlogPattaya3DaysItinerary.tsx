import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-boat-tour-1.jpg";

const BlogPattaya3DaysItinerary = () => (
  <BlogArticleLayout
    title="Pattaya 3 Days Itinerary 2026: Activities + Island + Shows"
    description="A balanced 3-day Pattaya itinerary covering Coral Island, Sanctuary of Truth, Nong Nooch, cabaret shows and nightlife — the sweet-spot plan."
    heroImage={heroImg}
    heroAlt="Speedboat heading to Coral Island near Pattaya during 3-day itinerary"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["Pattaya 3 day itinerary","Pattaya 3 days plan","Pattaya travel itinerary","Coral Island Pattaya plan","Sanctuary of Truth itinerary"]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/pattaya/destination-guides#itinerary" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya",
    }}
    sections={[
      { type: "paragraph", content: "Three days is the sweet spot for Pattaya. You get Coral Island, water sports, cultural attractions, cabaret shows AND enough downtime to actually enjoy your hotel pool. This itinerary is the most-requested plan from Indian travelers visiting Pattaya — balanced pacing, no rushed transfers and a logical mix of adventure, culture and entertainment." },
      { type: "heading", content: "Quick 3-Day Overview" },
      { type: "list", items: ["Day 1: Arrival + city + nightlife","Day 2: Coral Island + water sports","Day 3: Gardens + culture + cabaret show"] },
      { type: "heading", content: "Day 1: Arrival + City + Nightlife" },
      { type: "paragraph", content: "Travel from Bangkok in 1.5–2 hours and check into Central Pattaya or Beach Road. After lunch, do light exploration — a Pattaya Beach walk, café hopping or the Floating Market. In the evening, choose between a cabaret show (Alcazar / Tiffany), a pub crawl on Soi Buakhao or a walk through the famous Walking Street. End by midnight." },
      { type: "heading", content: "Day 2: Coral Island + Water Sports" },
      { type: "paragraph", content: "Pickup at 7–9 AM. Reach Bali Hai Pier, speedboat to Coral Island (15 min). Spend the day on Tawaen or Samae Beach with parasailing (₹800–₹1500), jet ski (₹1000–₹1500), banana boat (₹500–₹800) and sea walking. Most packages include lunch. Back to Pattaya by 4 PM. Optional evening: shopping at Beach Road night market." },
      { type: "tip-box", content: "Book Coral Island as a package (transfers + speedboat + lunch + 2 water sports). Self-planning costs almost the same after ferry, taxi and food, with much more hassle." },
      { type: "mid-activities", destination: "pattaya", heading: "Plan Your Pattaya Activities" },
      { type: "heading", content: "Day 3 Morning: Sanctuary of Truth" },
      { type: "paragraph", content: "Reach the all-wooden Sanctuary of Truth by 10 AM (entry ₹1200–₹1500, 2–3 hours). Spectacular wood-carved temple right on the sea — Pattaya's most photographed cultural site." },
      { type: "heading", content: "Day 3 Afternoon: Nong Nooch Tropical Garden" },
      { type: "paragraph", content: "30 minutes south of Pattaya. Entry includes the cultural show, elephant show, skywalk and 600-acre botanical garden. Plan a half-day here — the best family-friendly attraction near Pattaya." },
      { type: "heading", content: "Day 3 Evening: Big Cabaret Show + Walking Street" },
      { type: "paragraph", content: "End the trip with the Alcazar or Tiffany cabaret (1 hour, world-class production), followed by an optional walk through Walking Street. Back to hotel by 11 PM." },
      { type: "heading", content: "Alternative Day 3 (Family / Kids)" },
      { type: "paragraph", content: "Swap Day 3 culture for Ramayana Water Park (full day, Asia's largest) plus shopping at Central Festival Pattaya in the evening." },
      { type: "heading", content: "3-Day Pattaya Budget" },
      { type: "list", items: ["Hotel (3 nights): ₹4,500","Food: ₹2,500","Activities: ₹6,000","Transport: ₹2,500","Total: ₹15,000–₹22,000 (excluding flights)"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "3 days is the best duration for Pattaya. You won't feel rushed, you'll cover all the icons (Coral Island, Sanctuary of Truth, Nong Nooch, cabaret) and you'll still have time to relax. If you've got a 5-day Thailand trip, combine 2 days in Bangkok with this 3-day Pattaya plan — the most popular Thailand route from India." },
      { type: "cta", content: "Plan your Pattaya activities", link: "/thailand/pattaya/things-to-do", linkText: "Explore Pattaya Tours" }
    ]}
    relatedActivities={[
      { title: "Coral Island Tour with Lunch", link: "/thailand/pattaya/coral-island-tour" },
      { title: "Sanctuary of Truth Tickets", link: "/thailand/pattaya/sanctuary-of-truth" },
      { title: "Nong Nooch Garden Tour", link: "/thailand/pattaya/nong-nooch-tropical-garden" },
      { title: "Alcazar Cabaret Show", link: "/thailand/pattaya/alcazar-show" },
    ]}
    relatedLinks={[
      { title: "Pattaya 2 Days Itinerary", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-2-days-itinerary" },
      { title: "Bangkok + Pattaya 5 Days Itinerary", link: "/thailand/pattaya/destination-guides/itinerary/bangkok-pattaya-5-days-itinerary" },
      { title: "Pattaya 3 Days Trip Cost", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-3-days-trip-cost" },
      { title: "All Pattaya Things to Do", link: "/thailand/pattaya/things-to-do" },
    ]}
  />
);

export default BlogPattaya3DaysItinerary;
