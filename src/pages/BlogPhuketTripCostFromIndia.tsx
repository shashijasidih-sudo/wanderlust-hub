import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getPhuketInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/city-phuket.jpg";

const BlogPhuketTripCostFromIndia = () => (
  <BlogArticleLayout
    title="Phuket Trip Cost from India 2026: Complete Budget Breakdown (INR)"
    description="Real Phuket trip cost from India in 2026 — flights, visa, hotels, food, island tours and transfers compared for budget, mid-range and luxury Indian travelers."
    heroImage={heroImg}
    heroAlt="Phuket beach and city view — trip cost from India"
    author="Yellodae Travel Expert"
    date="May 8, 2026"
    readTime="10 min read"
    category="Price / Cost Blogs"
    keywords={[
      "phuket trip cost from india",
      "phuket budget 2026",
      "phuket package price india",
      "thailand phuket trip cost in rupees",
      "phuket travel expenses for indians",
    ]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Price & Cost Guides", link: "/thailand/phuket/destination-guides#price-cost" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "Wondering how much a Phuket trip costs from India in 2026? This guide gives you a transparent INR budget — flights, visa, stay, food, island tours and transfers — for budget, mid-range and luxury travelers." },
      { type: "heading", content: "Total Phuket Trip Cost — At a Glance (4–5 Days, Per Person)" },
      { type: "list", items: [
        "Budget: ₹40,000 – ₹55,000",
        "Mid-range: ₹60,000 – ₹90,000",
        "Luxury: ₹1,00,000 – ₹2,00,000+",
      ]},
      { type: "heading", content: "1. Flights (India → Phuket)" },
      { type: "list", items: [
        "Off-season round-trip: ₹20,000 – ₹28,000",
        "Peak season (Dec/Jan): ₹30,000 – ₹45,000",
        "Direct flights from DEL/BLR/BOM save 4–6 hours vs Bangkok-via routes",
        "Book 30–45 days in advance, mid-week travel saves 20–30%",
      ]},
      { type: "heading", content: "2. Thailand Visa for Indians (2026)" },
      { type: "list", items: [
        "Visa on Arrival: ₹2,000 – ₹2,500",
        "E-Visa (recommended): ₹2,500 – ₹4,000",
        "Visa-free schemes may apply temporarily — check the latest rules before booking",
      ]},
      { type: "heading", content: "3. Hotel Cost in Phuket (Per Night)" },
      { type: "list", items: [
        "Budget (Patong/Karon): ₹1,200 – ₹2,500",
        "Mid-range (Kata, Bangtao): ₹2,500 – ₹6,000",
        "Luxury (Surin, Kamala beachfront): ₹8,000 – ₹25,000",
      ]},
      { type: "heading", content: "4. Food Cost (Per Day)" },
      { type: "list", items: [
        "Street food / local Thai: ₹400 – ₹800",
        "Casual restaurants: ₹700 – ₹1,400",
        "Indian restaurants: ₹900 – ₹1,800",
      ]},
      { type: "mid-activities", destination: "phuket", heading: "Top Phuket Activities Worth Booking" },
      { type: "heading", content: "5. Activities & Tours" },
      { type: "list", items: [
        "Phi Phi Big Boat tour: ₹2,500 – ₹4,000",
        "Phi Phi Speedboat tour: ₹5,000 – ₹8,000",
        "James Bond Island tour: ₹3,500 – ₹6,500",
        "Phuket City Tour + Big Buddha: ₹1,500 – ₹3,000",
        "Dolphin / Cabaret show: ₹1,500 – ₹3,500",
      ]},
      { type: "heading", content: "6. Local Transport" },
      { type: "list", items: [
        "Tuk-tuk in Patong: ₹300 – ₹800 per ride",
        "Grab / taxi: ₹200 – ₹600 per ride",
        "HKT airport private transfer: ₹2,000 – ₹4,000",
      ]},
      { type: "tip-box", content: "Pro tip — book Phi Phi, James Bond and airport transfers online before flying. You'll save 15–25% vs walk-in vendors and skip scams." },
      { type: "heading", content: "Hidden Costs to Plan For" },
      { type: "list", items: [
        "National Park fees ₹900–₹1,200 per island (often excluded)",
        "Currency exchange fees and ATM charges",
        "Locker, towel rental, sea-walk and parasailing add-ons",
        "Tips and small SIM/data costs",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "A comfortable Phuket trip from India in 2026 averages ₹60,000–₹80,000 per person for 4–5 days. Pre-book flights, hotels and your top 3 island tours to lock in the best price." },
      { type: "cta", content: "Plan a custom Phuket package", link: "/thailand/phuket/things-to-do", linkText: "Explore Phuket" },
    ]}
    relatedActivities={[
      { title: "Phuket Phi Phi Island Tour (Big Boat)", link: "/thailand/phuket/phuket-phi-phi-island-tour" },
      { title: "James Bond Island Tour from Phuket", link: "/thailand/phuket/james-bond-island-tour" },
      { title: "Phuket City Tour with Big Buddha", link: "/thailand/phuket/phuket-city-tour" },
    ]}
    relatedLinks={[
      { title: "Cheapest Phi Phi Island Tour from Phuket", link: "/thailand/phuket/destination-guides/price-cost/cheapest-phi-phi-tour-from-phuket" },
      { title: "Phuket Budget Trip Under ₹50,000 for Indians", link: "/thailand/phuket/destination-guides/indian-audience/phuket-budget-trip-50000" },
      { title: "4 Days Phuket Itinerary (2026)", link: "/thailand/phuket/destination-guides/itinerary/phuket-4-days-itinerary" },
      { title: "Phuket vs Krabi for Indian Travelers", link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians" },
    ]}
      internalLinks={getPhuketInternalLinks("")}
  />
);

export default BlogPhuketTripCostFromIndia;
