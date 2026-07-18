import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-marina-bay-sands-night-1.jpg";

const BlogSingapore5DaysItinerary = () => (
  <BlogArticleLayout
    title="5 Days Singapore Itinerary — Complete Plan with Sentosa, Mandai & City (2026)"
    description="Detailed 5-day Singapore itinerary — city tour, Universal Studios, Sentosa, Singapore Zoo, Night Safari, Gardens by the Bay and shopping with INR cost breakdown."
    heroImage={heroImg}
    heroAlt="Marina Bay Sands and Singapore skyline at night"
    author="Yellodae Travel Expert"
    date="May 20, 2026"
    readTime="12 min read"
    category="Itinerary Blogs"
    keywords={["5 days singapore itinerary","singapore complete itinerary","singapore 5 day plan","singapore family trip 5 days","singapore itinerary indian travelers"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Itinerary Guides", link: "/singapore/destination-guides#itinerary" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do/", transfersLink: "/singapore/airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Have a full week? This 5 days Singapore itinerary covers the city like a local — from Marina Bay and Sentosa to Mandai wildlife, cultural districts and shopping. Built for first-time Indian travelers, families and couples who want a complete experience without rushing." },
      { type: "heading", content: "Quick Overview (5 Days Plan)" },
      { type: "list", items: [
        "Day 1 — Arrival + Marina Bay + Gardens by the Bay",
        "Day 2 — Half-Day City Tour + Singapore Flyer + Clarke Quay",
        "Day 3 — Universal Studios Singapore + Wings of Time",
        "Day 4 — Sentosa Highlights + Cable Car + Beach",
        "Day 5 — Singapore Zoo + Night Safari + Departure",
      ] },
      { type: "heading", content: "Day 1: Arrival + Marina Bay + Gardens by the Bay" },
      { type: "paragraph", content: "Arrive at Changi Airport — don’t skip exploring Jewel Changi’s indoor Rain Vortex waterfall. Check in to your hotel near Marina Bay, Bugis or Little India. Evening: Merlion Park photo stop, Helix Bridge walk and the Supertree Grove + Garden Rhapsody light show at Gardens by the Bay. Optional: Cloud Forest indoor waterfall." },
      { type: "heading", content: "Day 2: City Tour + Singapore Flyer + Clarke Quay" },
      { type: "paragraph", content: "Take a guided half-day city tour covering Chinatown, Little India, Kampong Glam and Orchard Road. In the evening, ride the 165m Singapore Flyer at sunset for skyline views, then head to Clarke Quay for dinner and nightlife along the river. A short Singapore River Cruise here is a great optional add-on." },
      { type: "cta", content: "Book the Singapore Half-Day City Tour", link: "/singapore/things-to-do/", linkText: "Book City Tour" },
      { type: "heading", content: "Day 3: Universal Studios Singapore + Wings of Time" },
      { type: "paragraph", content: "Spend the full day at Universal Studios Singapore — Transformers, Battlestar Galactica, Revenge of the Mummy and Jurassic Park Rapids. Use an Express Pass on weekends. End the day with the Wings of Time laser, fire and water show on Sentosa Beach." },
      { type: "cta", content: "Book Universal Studios Singapore", link: "/singapore/things-to-do/", linkText: "Book USS Tickets" },
      { type: "heading", content: "Day 4: Sentosa Highlights — Cable Car + Beach" },
      { type: "paragraph", content: "Take the Mount Faber Line Sentosa Cable Car for aerial views, then pick between Adventure Cove Waterpark, S.E.A. Aquarium or Sentosa 4D Adventureland. Spend the afternoon at Siloso or Palawan Beach. Optional sunset ride at SkyHelix Sentosa. Indian-friendly dining is widely available at Resorts World." },
      { type: "heading", content: "Day 5: Singapore Zoo + Night Safari + Departure" },
      { type: "paragraph", content: "Morning: open-concept Singapore Zoo with orangutans, elephants and lions — use the tram for an easier visit. Add River Wonders for the Giant Panda enclosure if time permits. Evening: the world-famous Night Safari with the tram ride and Creatures of the Night show. Transfer to Changi Airport for departure." },
      { type: "cta", content: "Book Zoo + Night Safari Combo", link: "/singapore/things-to-do/", linkText: "Book Mandai Combo" },
      { type: "heading", content: "Why This 5-Day Itinerary Works" },
      { type: "list", items: [
        "Hits every Singapore icon — Marina Bay, Sentosa, Mandai, Flyer, Gardens",
        "Balanced — 1 city day, 1 culture day, 2 Sentosa days, 1 wildlife day",
        "Built-in rest evenings so you don’t burn out",
        "Ideal for families with kids and first-time Indian travelers",
      ] },
      { type: "heading", content: "Estimated Cost from India (Per Person, 2026)" },
      { type: "list", items: [
        "Budget — ₹70,000 to ₹95,000 (3-star, MRT + shared transfers)",
        "Mid-range — ₹1,00,000 to ₹1,45,000 (4-star, combo tickets, private city tour)",
        "Luxury — ₹1,80,000+ (5-star Marina Bay Sands, private guide, premium dining)",
      ] },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "list", items: [
        "Pre-book USS, Night Safari and Flyer — peak slots sell out",
        "Little India + Mustafa for affordable Indian and Jain food",
        "Use EZ-Link or contactless cards on MRT and buses",
        "Carry a light jacket for indoor attractions and cinemas",
      ] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 5 days Singapore itinerary is the most complete plan you can build without rushing — covering city icons, two days on Sentosa, Mandai wildlife and the cultural districts. The right pick if you want one polished trip that ticks every box." },
      { type: "cta", content: "Plan your full Singapore trip with curated activities", link: "/singapore/things-to-do/", linkText: "Explore Singapore Tours" },
    ]}
    relatedActivities={[
      { title: "Singapore Half-Day City Tour", link: "/singapore/things-to-do/" },
      { title: "Universal Studios Singapore Tickets", link: "/singapore/things-to-do/" },
      { title: "Singapore Flyer Observation Wheel", link: "/singapore/things-to-do/" },
      { title: "Singapore Zoo + Night Safari Combo", link: "/singapore/things-to-do/" },
    ]}
    relatedLinks={[
      { title: "3 Days Singapore Itinerary with USS & Sentosa", link: "/singapore/destination-guides/itinerary/singapore-3-days-itinerary-with-uss-sentosa/" },
      { title: "4 Days Singapore Itinerary with Night Safari", link: "/singapore/destination-guides/itinerary/singapore-4-days-itinerary-with-night-safari/" },
      { title: "Singapore Honeymoon Itinerary (5 Days)", link: "/singapore/destination-guides/itinerary/singapore-honeymoon-itinerary/" },
      { title: "Universal Studios Singapore Full Guide", link: "/singapore/destination-guides/activity/universal-studios-singapore-guide/" },
      { title: "Night Safari Singapore Experience Guide", link: "/singapore/destination-guides/activity/night-safari-singapore-guide/" },
    ]}
    internalLinks={getSingaporeInternalLinks("/singapore/destination-guides/itinerary/singapore-5-days-complete-itinerary")}
  />
);

export default BlogSingapore5DaysItinerary;
