import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-sailboat-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Krabi Honeymoon Guide for Indian Couples (2026)"
    description="Complete Krabi honeymoon guide for Indian couples in 2026 — best areas to stay, romantic experiences, ideal itinerary, INR budget and smart tips."
    heroImage={heroImg}
    heroAlt="Romantic Krabi sailboat sunset for honeymooners"
    author="Yellodae Travel Expert"
    date="May 12, 2026"
    readTime="11 min read"
    category="Indian Audience Blogs"
    keywords={["krabi honeymoon guide","krabi honeymoon for indian couples","krabi honeymoon 2026","railay honeymoon","krabi honeymoon budget inr"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Indian Audience Guides", link: "/thailand/krabi/destination-guides#indian-audience" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Looking for a dreamy, affordable and romantic honeymoon in 2026? Krabi is one of the best honeymoon destinations for Indian couples — secluded beaches, stunning limestone cliffs, sunset cruises and luxurious resorts. This complete guide covers the best places to stay, romantic experiences, budget planning, ideal itinerary and tips specifically for Indian honeymooners." },
      { type: "heading", content: "Why Krabi is Perfect for Indian Honeymooners" },
      { type: "list", items: ["Peaceful environment","Affordable luxury","Easy travel from India","Beautiful beaches and dramatic cliffs","Plenty of romantic experiences"] },
      { type: "heading", content: "Best Places to Stay for Honeymoon" },
      { type: "list", items: ["Railay Beach — most romantic, private and secluded with premium resorts","Ao Nang — best value, easy access to tours","Tubkaek Beach — quiet, exclusive, ideal for privacy"] },
      { type: "cta", content: "Book your romantic Krabi airport pickup", link: "/thailand/krabi/budget-airport-transfers", linkText: "Book Krabi Transfer" },
      { type: "heading", content: "Best Honeymoon Experiences in Krabi" },
      { type: "list", items: ["Private island tour — personalized, no crowds, flexible timing","Phi Phi Islands — Maya Bay, Pileh Lagoon, snorkeling","Sunset cruise — golden views with romantic dinner","Couple spa — Thai massage and aromatherapy","Beach candlelight dinner — private setup with ocean views"] },
      { type: "heading", content: "Ideal Honeymoon Itinerary (5 Days)" },
      { type: "list", items: ["Day 1 — Arrival, beach walk, romantic dinner","Day 2 — 4 Island Tour","Day 3 — Phi Phi Islands","Day 4 — Leisure + sunset cruise","Day 5 — Couple spa + departure"] },
      { type: "heading", content: "Honeymoon Budget (2026, per person)" },
      { type: "list", items: ["Budget honeymoon — ₹60,000–₹1,00,000","Mid-range honeymoon — ₹1,00,000–₹1,80,000","Luxury honeymoon — ₹2,00,000+"] },
      { type: "heading", content: "Best Time for Honeymoon" },
      { type: "list", items: ["Ideal months — November to April","Avoid heavy monsoon (June–September)","Best weather = best honeymoon experience"] },
      { type: "heading", content: "Food for Indian Couples" },
      { type: "list", items: ["Indian restaurants easily available in Ao Nang","Vegetarian and Jain options on request","Meal cost — ₹500–₹1,200 per person"] },
      { type: "heading", content: "Travel Tips for Indian Honeymooners" },
      { type: "list", items: ["Book early for the best hotels and rates","Choose private tours — more romantic and flexible","Don't overplan — keep time for relaxation","Carry some cash for small expenses","Stay at least 1 night in Railay for the premium cliff-side experience"] },
      { type: "heading", content: "What to Pack" },
      { type: "list", items: ["Beachwear and light dresses","Romantic outfits for photos","Sunscreen and sunglasses","Comfortable footwear","Light jacket for evening cruises"] },
      { type: "heading", content: "Romantic Add-ons Worth Booking" },
      { type: "list", items: ["Private candlelight dinner on the beach","Pool villa upgrade for one night","Photographer for a couple shoot","Floating breakfast at the resort"] },
      { type: "tip-box", content: "Common mistakes to avoid — overpacking the itinerary, booking cheap crowded tours and ignoring the weather forecast." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Krabi offers one of the best honeymoon experiences for Indian couples in 2026 — combining romance, affordability and natural beauty. With the right plan, your honeymoon becomes a stress-free, picture-perfect tropical escape." },
      { type: "cta", content: "Plan a custom Krabi honeymoon — tours, transfers and stays sorted", link: "/thailand/krabi/things-to-do", linkText: "Plan My Honeymoon" },
    ]}
    relatedActivities={[
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer" },
      { title: "4 Island Tour by Speedboat", link: "/thailand/krabi/4-island-tour-speedboat-with-transfer" },
      { title: "Hong Island Longtail Tour", link: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers" },
    ]}
    relatedLinks={[
      { title: "5 Days Krabi Honeymoon Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary" },
      { title: "Best Krabi Packages for Indian Couples", link: "/thailand/krabi/destination-guides/indian-audience/best-krabi-packages-for-indian-couples" },
      { title: "Indian Restaurants in Krabi", link: "/thailand/krabi/destination-guides/indian-audience/indian-restaurants-in-krabi" },
      { title: "Phuket Honeymoon for Indian Couples", link: "/thailand/phuket/destination-guides/indian-audience/phuket-honeymoon-for-indian-couples" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/indian-audience/krabi-honeymoon-guide-for-indian-couples")}
  />
);

export default Blog;
