import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-beach-woman-1.jpg";

const BlogKrabiHoneymoonItinerary = () => (
  <BlogArticleLayout
    title="5 Days Krabi Honeymoon Itinerary for Indian Couples (2026 Romantic Plan)"
    description="Romantic 5-day Krabi honeymoon — Railay, 4 Island Tour, Phi Phi, sunset cruise, spa and budget in INR for Indian couples."
    heroImage={heroImg}
    heroAlt="Couple enjoying a romantic beach moment in Krabi"
    author="Yellodae Travel Expert"
    date="May 9, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["krabi honeymoon itinerary","krabi honeymoon for indian couples","krabi 5 days romantic plan","krabi honeymoon 2026","railay honeymoon"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/krabi/destination-guides#itinerary" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Krabi is one of the most romantic destinations in Thailand — secluded beaches, dramatic limestone cliffs, sunset cruises and luxurious resorts. This 5-day Krabi honeymoon itinerary is built for Indian couples who want a perfect mix of romance, adventure and relaxation." },
      { type: "heading", content: "Quick Overview (Romantic 5-Day Plan)" },
      { type: "list", items: ["Day 1 — Arrival + Romantic Beach Evening","Day 2 — 4 Island Tour","Day 3 — Phi Phi Islands","Day 4 — Private / Leisure + Sunset Cruise","Day 5 — Spa + Departure"] },
      { type: "heading", content: "Day 1: Arrival + Romantic Beach Evening" },
      { type: "paragraph", content: "Airport pickup and check into your hotel/resort. Best honeymoon areas — Railay Beach (luxury & privacy), Ao Nang (variety) or a private resort with pool villa. Evening — candlelit dinner on the beach or your hotel's beachfront restaurant for the perfect first night." },
      { type: "heading", content: "Day 2: 4 Island Tour (Romantic + Scenic)" },
      { type: "paragraph", content: "Highlights — Phra Nang Cave Beach, Chicken Island, Tup Island sandbar and Poda Island. Walking together on sandbars, swimming in clear water and stunning photo spots make this one of the most romantic days. Tip — pick a private longtail or speedboat upgrade for an exclusive experience. Evening — dinner in Ao Nang." },
      { type: "cta", content: "Upgrade to a private 4 Island longtail for couples", link: "/thailand/krabi/things-to-do", linkText: "Book Private 4 Island Tour" },
      { type: "heading", content: "Day 3: Phi Phi Islands (Dream Destination)" },
      { type: "paragraph", content: "One of the most romantic locations in Thailand. Key stops — Maya Bay, Pileh Lagoon, Viking Cave and Phi Phi Don. Activities — snorkeling, swimming and dreamy photos. Evening — relax after a long day with a light dinner and early rest." },
      { type: "heading", content: "Day 4: Leisure + Sunset Cruise (Most Romantic Day)" },
      { type: "paragraph", content: "Morning free time — relax at the hotel, visit Railay Beach or explore cafes. Afternoon couple activities — kayaking, beach hopping or a couple's spa session. Evening — board a sunset cruise for golden views, romantic atmosphere and dinner on board." },
      { type: "tip-box", content: "A private long-tail sunset cruise from Railay is cheaper and more intimate than a big-boat cruise — ideal for couples." },
      { type: "heading", content: "Day 5: Spa + Departure" },
      { type: "paragraph", content: "Morning — couple's Thai massage and a slow breakfast (consider a floating breakfast at your resort if available). Pick up souvenirs, then airport transfer." },
      { type: "heading", content: "Honeymoon Budget (5 Days)" },
      { type: "list", items: ["Budget Couple — ₹60,000–₹1,00,000","Mid-Range Couple — ₹1,00,000–₹1,80,000","Luxury Honeymoon — ₹2,00,000+"] },
      { type: "heading", content: "Where to Stay" },
      { type: "list", items: ["Luxury — Rayavadee Railay, Phulay Bay Ritz-Carlton","Mid-Range — Centara Ao Nang, Holiday Inn Ao Nang","Budget — Ao Nang boutique hotels"] },
      { type: "heading", content: "Best Time for Honeymoon" },
      { type: "list", items: ["November–April → perfect weather","Avoid heavy monsoon (June–September)"] },
      { type: "heading", content: "What to Pack" },
      { type: "list", items: ["Light outfits","Beachwear","Sunscreen","Sunglasses","Romantic outfits for photos"] },
      { type: "heading", content: "Pro Tips (Very Important)" },
      { type: "list", items: ["Book private tours — more romantic and flexible","Stay at Railay at least one night for the cliff-side magic","Pre-book the sunset cruise for the best slot","Plan a couple spa on Day 5","Hire a photographer for at least one session"] },
      { type: "heading", content: "Who Is This Itinerary For?" },
      { type: "list", items: ["Honeymoon couples","Romantic travelers","Anniversary trips"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 5-day Krabi honeymoon itinerary is perfectly balanced between romance, adventure and relaxation — exactly what Indian couples look for in a tropical honeymoon." },
      { type: "cta", content: "Plan your dream Krabi honeymoon with curated activities", link: "/thailand/krabi/things-to-do", linkText: "Explore Krabi Tours" },
    ]}
    relatedActivities={[
      { title: "Krabi Sunset Cruise", link: "/thailand/krabi/things-to-do" },
      { title: "Private 4 Island Tour from Krabi", link: "/thailand/krabi/things-to-do" },
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers" },
    ]}
    relatedLinks={[
      { title: "4 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-4-days-itinerary" },
      { title: "5 Days Krabi Itinerary with Phi Phi", link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary" },
      { title: "3 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-3-days-itinerary" },
      { title: "Phuket Honeymoon for Indian Couples", link: "/thailand/phuket/destination-guides/indian-audience/phuket-honeymoon-for-indian-couples" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary")}
  />
);

export default BlogKrabiHoneymoonItinerary;
