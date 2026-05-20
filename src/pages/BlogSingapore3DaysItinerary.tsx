import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-universal-studios.jpg";

const BlogSingapore3DaysItinerary = () => (
  <BlogArticleLayout
    title="3 Days Singapore Itinerary with Universal Studios & Sentosa (2026)"
    description="Perfect 3-day Singapore itinerary covering Marina Bay, Gardens by the Bay, Universal Studios Singapore, Sentosa highlights and Wings of Time with INR cost tips."
    heroImage={heroImg}
    heroAlt="Universal Studios Singapore globe entrance"
    author="Yellodae Travel Expert"
    date="May 20, 2026"
    readTime="10 min read"
    category="Itinerary Blogs"
    keywords={["3 days singapore itinerary","singapore itinerary with universal studios","singapore short trip","sentosa 3 day plan","singapore first time itinerary"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Itinerary Guides", link: "/singapore/destination-guides#itinerary" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do", transfersLink: "/singapore/airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Planning a short trip to Singapore? A 3 days Singapore itinerary with Universal Studios and Sentosa is perfect for first-time visitors who want to experience the city’s top highlights without feeling rushed. Singapore is compact, well-connected and packed with world-class attractions — in just three days you can cover iconic landmarks, thrilling theme parks, scenic views and unforgettable night experiences." },
      { type: "heading", content: "Quick Overview (3 Days Plan)" },
      { type: "list", items: [
        "Day 1 — Arrival + Marina Bay + Gardens by the Bay",
        "Day 2 — Universal Studios Singapore (Full Day on Sentosa)",
        "Day 3 — Sentosa Highlights (Cable Car, Beach, Wings of Time) + Departure",
      ] },
      { type: "heading", content: "Day 1: Arrival + Marina Bay + Gardens by the Bay" },
      { type: "paragraph", content: "Arrive at Changi Airport and transfer to your hotel (private or shared transfer recommended). Pick a hotel near Marina Bay, Little India or Orchard Road for easy connectivity. After freshening up, head out to Singapore’s most iconic area — Merlion Park for the classic photo stop, an external view of Marina Bay Sands and a relaxed walk across the Helix Bridge." },
      { type: "paragraph", content: "In the evening, explore Gardens by the Bay — Cloud Forest with its indoor waterfall, the Flower Dome and the Supertree Grove. Stay back for the free Garden Rhapsody light and sound show that happens twice every evening. Wrap up with dinner at Marina Bay Sands restaurants or head to Clarke Quay for a livelier nightlife scene." },
      { type: "cta", content: "Pre-book Gardens by the Bay tickets", link: "/singapore/things-to-do", linkText: "Book Gardens by the Bay" },
      { type: "heading", content: "Day 2: Universal Studios Singapore (Full Day)" },
      { type: "paragraph", content: "Head to Sentosa Island early via Cable Car, Sentosa Express monorail or taxi and spend the entire day at Universal Studios Singapore. Don’t miss the marquee rides — Transformers, Battlestar Galactica (Human + Cylon), Revenge of the Mummy and Jurassic Park Rapids Adventure. Catch the WaterWorld stunt show, street performances and character meet-and-greets between rides." },
      { type: "list", items: [
        "Arrive at park opening for the shortest queues",
        "Buy an Express Pass if visiting on weekends or holidays",
        "Start with the most popular rides first, then loop back to shows",
        "Lunch inside USS — multiple cuisines including Indian-friendly options",
      ] },
      { type: "paragraph", content: "In the evening you can relax at the hotel, explore Sentosa beaches or add an optional SkyHelix Sentosa ride for sunset views." },
      { type: "cta", content: "Book Universal Studios Singapore with Express Pass", link: "/singapore/things-to-do", linkText: "Book USS Tickets" },
      { type: "heading", content: "Day 3: Sentosa Highlights + Departure" },
      { type: "paragraph", content: "Start your day with a scenic Sentosa Cable Car ride on the Mount Faber Line for stunning aerial views and great photo opportunities. For midday, choose between Adventure Cove Waterpark (water rides + snorkeling with fish) or a relaxed beach session at Siloso or Palawan Beach." },
      { type: "paragraph", content: "In the afternoon, hop on a 40-minute Singapore River Cruise from Clarke Quay to Marina Bay for skyline views from the water. End the trip with Wings of Time — a spectacular laser, fire and water show on Sentosa beach — before transferring to Changi Airport for departure." },
      { type: "heading", content: "Why This 3-Day Itinerary Works" },
      { type: "list", items: [
        "Covers Singapore’s top must-see attractions",
        "Balanced pace — sightseeing + theme park + relaxation",
        "Combines Sentosa Island and the city in one trip",
        "Perfect for first-time travelers, couples and families",
      ] },
      { type: "heading", content: "Estimated Cost from India (Per Person, 2026)" },
      { type: "list", items: [
        "Budget — ₹45,000 to ₹60,000 (3-star, shared transfers)",
        "Mid-range — ₹65,000 to ₹95,000 (4-star, Express Pass, key tickets)",
        "Luxury — ₹1,20,000+ (5-star, private transfers, premium experiences)",
      ] },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "list", items: [
        "Book USS, Gardens by the Bay and Wings of Time tickets in advance",
        "Use MRT or Grab for easy, affordable travel",
        "Stay hydrated and wear comfortable shoes for Sentosa walking",
        "Carry a light jacket — most malls and indoor attractions are heavily air-conditioned",
      ] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 3 days Singapore itinerary with Universal Studios and Sentosa is ideal for travelers who want to experience the best of Singapore in a short time — skyline views, light shows, thrilling rides and island experiences, all without feeling rushed." },
      { type: "cta", content: "Plan your full Singapore trip with curated activities", link: "/singapore/things-to-do", linkText: "Explore Singapore Tours" },
    ]}
    relatedActivities={[
      { title: "Universal Studios Singapore Tickets", link: "/singapore/things-to-do" },
      { title: "Gardens by the Bay Combo Ticket", link: "/singapore/things-to-do" },
      { title: "Sentosa Cable Car Ride", link: "/singapore/things-to-do" },
      { title: "Wings of Time Sentosa Show", link: "/singapore/things-to-do" },
    ]}
    relatedLinks={[
      { title: "4 Days Singapore Itinerary with Night Safari", link: "/singapore/destination-guides/itinerary/singapore-4-days-itinerary-with-night-safari" },
      { title: "5 Days Singapore Itinerary (Complete Plan)", link: "/singapore/destination-guides/itinerary/singapore-5-days-complete-itinerary" },
      { title: "Singapore Honeymoon Itinerary (5 Days)", link: "/singapore/destination-guides/itinerary/singapore-honeymoon-itinerary" },
      { title: "Universal Studios Singapore Full Guide", link: "/singapore/destination-guides/activity/universal-studios-singapore-guide" },
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide" },
    ]}
    internalLinks={getSingaporeInternalLinks("/singapore/destination-guides/itinerary/singapore-3-days-itinerary-with-uss-sentosa")}
  />
);

export default BlogSingapore3DaysItinerary;
