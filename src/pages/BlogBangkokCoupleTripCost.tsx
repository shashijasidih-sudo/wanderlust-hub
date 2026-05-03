import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-couple-cost.jpg";

const BlogBangkokCoupleTripCost = () => (
  /* SEO — Primary: bangkok couple trip cost | Intent: Commercial */
  <BlogArticleLayout
    title="Bangkok Couple Trip Cost 2026: Honeymoon Budget from India"
    description="Bangkok couple trip cost 2026 — romantic hotels, dinner cruise, rooftop bars and honeymoon package budget for Indian couples in INR."
    heroImage={heroImg}
    heroAlt="Romantic couple on Chao Phraya river cruise at night with Bangkok skyline"
    author="Yellodae Travel Expert"
    date="Apr 27, 2026"
    readTime="8 min read"
    category="Price / Cost Blogs"
    keywords={[
      "bangkok couple trip cost",
      "bangkok honeymoon budget india",
      "bangkok romantic package price",
      "bangkok honeymoon cost in rupees",
      "couple holiday bangkok 5 days",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Price & Cost Guides", link: "/thailand/bangkok/destination-guides#price-cost" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    relatedActivities={[
      { title: "Chao Phraya Princess Dinner Cruise", link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer" },
      { title: "Mahanakhon Skywalk Sunset Tickets", link: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
      { title: "Wat Arun, Pho & Traimit Tour", link: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour" },
      { title: "Thai Couple Spa & Massage Deals", link: "/thailand/bangkok/thai-massage-spa-deals-bangkok" },
    ]}
    sections={[
      { type: "paragraph", content: "Bangkok is one of Asia's most affordable romantic getaways. Here's the 2026 budget for couples — including honeymoon-worthy hotels, dinner cruises and rooftop nights." },
      { type: "heading", content: "Total Trip Cost — Couple (5 Days)" },
      { type: "list", items: [
        "Budget couple trip: ₹70,000 – ₹95,000",
        "Romantic mid-range: ₹1,20,000 – ₹1,60,000",
        "Honeymoon luxury: ₹2,50,000+",
      ]},
      { type: "heading", content: "Romantic Hotels" },
      { type: "list", items: [
        "Boutique 3-star: ₹3,500 – ₹5,500/night",
        "4-star with rooftop pool: ₹7,000 – ₹12,000/night",
        "5-star riverside (Mandarin Oriental, Shangri-La): ₹18,000+/night",
      ]},
      { type: "heading", content: "Romantic Activities & Cost" },
      { type: "list", items: [
        "Chao Phraya Princess Dinner Cruise: ₹3,500 (couple)",
        "Couple Thai spa (2 hr): ₹4,000 – ₹8,000",
        "Mahanakhon Skywalk sunset: ₹2,000 (couple)",
        "Rooftop dinner (Sky Bar/Vertigo): ₹6,000 – ₹10,000",
      ]},
      { type: "mid-activities", destination: "bangkok", heading: "Romantic Bangkok Experiences" },
      { type: "heading", content: "Food Budget for Couples" },
      { type: "list", items: [
        "Street food + cafés: ₹1,500/day",
        "Mid-range restaurants: ₹3,000 – ₹4,500/day",
        "Fine dining experiences: ₹8,000+/night",
      ]},
      { type: "tip-box", content: "Splurge on one luxury experience — a riverside dinner cruise or rooftop bar — and save on rest of the trip with affordable boutique stays." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "A romantic Bangkok trip in 2026 starts at ₹70,000 per couple and goes up to ₹2.5L+ for a true luxury honeymoon. The sweet spot is around ₹1.4L for a 5-day mid-range stay with one big-ticket experience." },
      { type: "cta", content: "Plan a romantic Bangkok escape", link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer", linkText: "Book Dinner Cruise" },
    ]}
    relatedLinks={[
      { title: "Best Dinner Cruises in Bangkok for Couples", link: "/thailand/bangkok/destination-guides/activity/best-dinner-cruises-bangkok-couples" },
      { title: "Bangkok Trip Cost from India", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-trip-cost-from-india" },
    ]}
  />
);

export default BlogBangkokCoupleTripCost;
