import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-tour-boat-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Best Krabi Packages for Indian Couples (2026 Guide)"
    description="Compare Krabi tour packages for Indian couples in 2026 — budget, mid-range, honeymoon and luxury options with INR pricing, inclusions and smart booking tips."
    heroImage={heroImg}
    heroAlt="Indian couple enjoying a Krabi boat tour"
    author="Yellodae Travel Expert"
    date="May 12, 2026"
    readTime="10 min read"
    category="Indian Audience Blogs"
    keywords={["krabi packages for indian couples","krabi honeymoon package 2026","krabi tour package india","krabi couple package inr","best krabi package"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Indian Audience Guides", link: "/thailand/krabi/destination-guides#indian-audience" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do/", transfersLink: "/thailand/krabi/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Planning a romantic getaway to Krabi? One of the easiest ways to travel stress-free is by booking a Krabi tour package designed for Indian couples. These packages bundle flights, hotels, transfers and tours — saving time, money and effort. The real question is: which Krabi package gives the best value for Indian couples in 2026? This guide breaks down types of packages, price ranges, what's included and how to avoid overpaying." },
      { type: "heading", content: "Why Choose a Krabi Package?" },
      { type: "list", items: ["Hassle-free planning","Fixed budget upfront","Pre-arranged transfers","Guided tours","Better deals than booking separately","Especially useful for first-time international travelers"] },
      { type: "heading", content: "Types of Krabi Packages for Indian Couples" },
      { type: "heading", content: "1. Budget Couple Packages — ₹45,000–₹70,000 pp" },
      { type: "list", items: ["Flights (sometimes)","Budget 3-star hotel","Shared transfers","1–2 tours","Best for short trips and first-time travelers"] },
      { type: "heading", content: "2. Mid-Range Romantic Packages — ₹70,000–₹1,20,000 pp" },
      { type: "list", items: ["3–4 star hotels","Airport transfers","2–3 island tours","Breakfast included","Best for couples seeking comfort + value"] },
      { type: "heading", content: "3. Honeymoon Packages (Most Popular) — ₹90,000–₹1,80,000 pp" },
      { type: "list", items: ["Romantic room setup","Candlelight dinner","Island tours","Private transfers","Best for newly married couples"] },
      { type: "heading", content: "4. Luxury Krabi Packages — ₹1,50,000–₹3,00,000+ pp" },
      { type: "list", items: ["5-star resorts","Private pool villas","Private island tours","Spa sessions","Best for premium travelers and anniversaries"] },
      { type: "cta", content: "See all curated Krabi tours and combos for Indian couples", link: "/thailand/krabi/things-to-do/", linkText: "Explore Krabi Tours" },
      { type: "heading", content: "What's Usually Included" },
      { type: "list", items: ["Hotel stay","Airport transfers","Breakfast","Selected tours","Optional add-ons: flights, visa assistance, candlelight dinner, spa"] },
      { type: "heading", content: "Popular Krabi Couple Package Itinerary" },
      { type: "list", items: ["Day 1 — Arrival + hotel + beach walk","Day 2 — 4 Island Tour","Day 3 — Phi Phi Islands","Day 4 — Leisure + sunset dinner","Day 5 — Departure"] },
      { type: "heading", content: "Best Areas to Stay in a Package" },
      { type: "list", items: ["Ao Nang — budget + convenience, included in most packages","Railay Beach — premium and romantic, ideal for honeymoon/luxury","Tubkaek Beach — ultra-private luxury"] },
      { type: "heading", content: "Cost Breakdown — Mid-Range 5-Day Package" },
      { type: "list", items: ["Flights — ₹25,000","Hotel — ₹20,000","Tours — ₹15,000","Transfers — ₹5,000","Total — ₹65,000–₹90,000 per person"] },
      { type: "heading", content: "How to Choose the Best Package" },
      { type: "list", items: ["Compare multiple providers — don't book the first option","Check hotel location — prefer Ao Nang or Railay","Confirm that major tours (4 Island + Phi Phi) are included","Read recent Google/TripAdvisor reviews","Customise — add or remove activities to fit your style"] },
      { type: "heading", content: "How to Save Money on Packages" },
      { type: "list", items: ["Travel off-season (May–October)","Book 2–3 months early","Avoid peak Indian holidays (Diwali, Christmas, New Year)","Choose shared tours over private when budget is tight"] },
      { type: "tip-box", content: "Hidden costs to watch — national park fees, lunch on tours, extra activities and tips. Always confirm what is and isn't included in writing." },
      { type: "heading", content: "DIY vs Package — Which is Better?" },
      { type: "list", items: ["Package pros — easy planning, fixed cost, no stress","DIY pros — more flexibility, sometimes cheaper","For couples and first-time travelers — packages are recommended"] },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Choose 4–5 day duration — ideal for Krabi","Include the Phi Phi tour — must-have experience","Add a candlelight dinner or sunset cruise","Avoid an overpacked itinerary — keep relaxation time","Always check the cancellation policy"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Krabi packages for Indian couples offer great value, convenience and peace of mind in 2026. Whether you choose budget or luxury, a well-planned package ensures smooth travel, romantic moments and zero planning stress." },
      { type: "cta", content: "Get a customised Krabi package for your dates and budget", link: "/thailand/krabi/things-to-do/", linkText: "Plan My Krabi Trip" },
    ]}
    relatedActivities={[
      { title: "4 Island Tour from Krabi", link: "/thailand/krabi/4-island-tour-speedboat-with-transfer/" },
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer/" },
      { title: "Hong Island Speedboat Tour", link: "/thailand/krabi/hong-island-tour-speedboat-with-transfer/" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers/" },
    ]}
    relatedLinks={[
      { title: "5 Days Krabi Honeymoon Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary/" },
      { title: "5 Days Krabi Itinerary with Phi Phi", link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary/" },
      { title: "4 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-4-days-itinerary/" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary/" },
      { title: "Phuket vs Krabi for Indian Travelers", link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians/" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/indian-audience/best-krabi-packages-for-indian-couples")}
  />
);

export default Blog;
