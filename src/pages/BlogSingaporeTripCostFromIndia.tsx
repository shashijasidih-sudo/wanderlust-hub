import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-tourists-city-1.jpg";

const LINK = "/singapore/destination-guides/indian-audience/singapore-trip-cost-from-india-with-activities";

const Blog = () => (
  <BlogArticleLayout
    title="Singapore Trip Cost from India with Activities (2026 Complete Breakdown)"
    description="Realistic Singapore trip cost from India for 2026 — flights, hotels, food, transfers and activity pricing in INR, plus budget, mid-range and luxury sample plans."
    heroImage={heroImg}
    heroAlt="Indian travelers exploring downtown Singapore skyline"
    author="Yellodae Travel Expert"
    date="May 20, 2026"
    readTime="11 min read"
    category="Indian Audience Blogs"
    keywords={["singapore trip cost from india","singapore budget for indians","singapore tour package cost","singapore family trip budget","singapore activities cost inr"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "For Indian Travelers", link: "/singapore/destination-guides#indian-audience" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Singapore is one of the most popular international destinations for Indian travelers, thanks to its clean environment, world-class attractions and easy visa process. But the single most-asked question is: how much does a Singapore trip cost from India with activities included? Here is a realistic 2026 breakdown in INR — flights, hotels, transfers, food and the must-do attractions." },
      { type: "heading", content: "Flight Cost from India to Singapore" },
      { type: "list", items: ["Budget airlines (Scoot, AirAsia, IndiGo): ₹18,000 – ₹30,000 return","Full-service (Singapore Airlines, Vistara, Air India): ₹30,000 – ₹50,000 return","Direct flights from Delhi, Mumbai, Bangalore, Chennai, Hyderabad and Kolkata","Pro tip: Book 6–10 weeks in advance for best fares"] },
      { type: "heading", content: "Accommodation Cost in Singapore (Per Night)" },
      { type: "list", items: ["Budget hotels — ₹4,000 – ₹7,000 (Little India, Geylang, Bugis)","Mid-range — ₹7,000 – ₹15,000 (Orchard Road, Clarke Quay)","Luxury — ₹15,000 – ₹40,000+ (Marina Bay, Sentosa)","Recommended for Indians: Little India — close to Indian food, MRT and Mustafa Centre"] },
      { type: "heading", content: "Local Transport & Transfers" },
      { type: "list", items: ["MRT (Singapore's metro) — ₹100 – ₹300 per ride","Bus — ₹100 – ₹200 per ride","Grab/Taxi — ₹500 – ₹1,500 per trip","Airport transfer — ₹1,500 – ₹3,000","Total transport for 4–5 days: ₹3,000 – ₹7,000"] },
      { type: "cta", content: "Pre-book your Changi airport transfer to skip taxi queues", link: "/blog/airport-transfer-booking-singapore", linkText: "See Airport Transfer Options" },
      { type: "heading", content: "Activity Cost in Singapore (Per Person, 2026 INR)" },
      { type: "list", items: ["Universal Studios Singapore — ₹5,500 – ₹7,000","Night Safari — ₹3,500 – ₹4,500","Gardens by the Bay (Cloud Forest + Flower Dome) — ₹1,500 – ₹2,500","Singapore Flyer — ₹2,500 – ₹3,500","Sentosa Cable Car — ₹2,500 – ₹3,500","Adventure Cove Waterpark — ₹4,500 – ₹6,000","Singapore River Cruise — ₹1,500 – ₹2,500","Average activity spend per person: ₹12,000 – ₹25,000"] },
      { type: "mid-activities", destination: "singapore", heading: "Popular Singapore Activities to Pre-Book" },
      { type: "heading", content: "Food Cost for Indian Travelers" },
      { type: "list", items: ["Hawker centre / Little India meal — ₹500 – ₹800","Mid-range restaurant — ₹800 – ₹1,500","Fine dining — ₹2,000+","Daily food budget: ₹1,000 – ₹2,000 per person"] },
      { type: "heading", content: "Shopping (Optional)" },
      { type: "list", items: ["Souvenirs and gifts — ₹2,000 – ₹5,000","Branded shopping (Orchard Road) — ₹10,000 – ₹30,000+","Mustafa Centre for value buys — perfect for Indians"] },
      { type: "heading", content: "Total Singapore Trip Cost from India (4–5 Days)" },
      { type: "subheading", content: "Budget Trip" },
      { type: "list", items: ["Flights — ₹20,000","Hotel — ₹20,000","Activities — ₹12,000","Food — ₹6,000","Transport — ₹4,000","Total: ₹60,000 – ₹75,000 per person"] },
      { type: "subheading", content: "Mid-Range Trip" },
      { type: "list", items: ["Flights — ₹30,000","Hotel — ₹40,000","Activities — ₹20,000","Food — ₹8,000","Transport — ₹5,000","Total: ₹80,000 – ₹1,20,000 per person"] },
      { type: "subheading", content: "Luxury Trip" },
      { type: "list", items: ["Marina Bay / Sentosa stays, premium activities and fine dining","Total: ₹1,50,000+ per person"] },
      { type: "tip-box", content: "Family of 4 from India: budget trip ≈ ₹2.5L – ₹3L, mid-range ≈ ₹3.5L – ₹5L (including USS, Sentosa and Night Safari)." },
      { type: "heading", content: "Ways to Save Money" },
      { type: "list", items: ["Book flights 6–10 weeks early","Pre-book attractions online to skip walk-in surcharges","Pick combo passes (USS + Cable Car, GBTB + Flyer)","Stay in Little India or Bugis instead of Marina Bay","Use MRT instead of taxis","Eat at hawker centres — cheap, clean, vegetarian-friendly"] },
      { type: "cta", content: "Plan your Singapore trip with Yellodae — INR pricing, instant confirmation", link: "/singapore/things-to-do", linkText: "Explore Singapore Tours" },
      { type: "heading", content: "Final Word" },
      { type: "paragraph", content: "A Singapore trip from India can be done on ₹60K or stretched to ₹1.5L+ depending on your style. With smart planning — book flights early, pick the right hotel area and pre-book activities — you can comfortably cover all the must-do experiences within budget." },
    ]}
    relatedActivities={[
      { title: "Universal Studios Singapore Tickets", link: "/singapore/universal-studios-singapore-tickets-and-transfers/" },
      { title: "Night Safari Tickets & Transfers", link: "/singapore/night-safari-singapore-tickets-and-transfers" },
      { title: "Sentosa Cable Car Tickets", link: "/singapore/sentosa-cable-car-tickets-and-transfers" },
    ]}
    relatedLinks={[
      { title: "Singapore Visa + Tour Planning Guide for Indians", link: "/singapore/destination-guides/indian-audience/singapore-visa-and-tour-planning-guide-for-indians" },
      { title: "Is Singapore Expensive for Indian Travelers?", link: "/singapore/destination-guides/indian-audience/is-singapore-expensive-for-indian-travelers" },
      { title: "Best Singapore Attractions for Indian Families", link: "/singapore/destination-guides/indian-audience/best-singapore-attractions-for-indian-families" },
      { title: "Universal Studios Singapore Full Experience", link: "/singapore/destination-guides/activity/universal-studios-singapore-guide" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default Blog;
