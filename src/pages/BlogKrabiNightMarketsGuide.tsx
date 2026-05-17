import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-temple-woman-1.jpg";

const BlogKrabiNightMarketsGuide = () => (
  <BlogArticleLayout
    title="Krabi Night Markets Guide: Food, Shopping & Timings (2026)"
    description="Best Krabi night markets in 2026 — Krabi Town Weekend Market, Ao Nang Night Market, Landmark Market, top street foods, prices in INR and timing tips."
    heroImage={heroImg}
    heroAlt="Krabi night market street food and stalls"
    author="Yellodae Travel Expert"
    date="May 16, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["krabi night markets","krabi town weekend market","ao nang night market","krabi street food","krabi shopping"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/krabi/destination-guides#activity" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Krabi isn't just about beaches and island tours — its night markets are where the destination truly comes alive after sunset. From sizzling street food and live music to budget shopping and local vibes, visiting a night market is one of the most authentic experiences in Krabi." },
      { type: "heading", content: "Why Visit Night Markets in Krabi?" },
      { type: "list", items: ["Affordable and delicious street food","Local Thai culture and atmosphere","Budget shopping options","Live performances and music"] },
      { type: "heading", content: "Top Night Markets in Krabi" },
      { type: "heading", content: "1. Krabi Town Night Market (Weekend Market)" },
      { type: "list", items: ["When — Friday, Saturday, Sunday","Where — Maharaj Soi 8, Krabi Town","Highlights — live music stage, food courts, souvenirs","Must try — mango sticky rice, grilled seafood, roti pancakes, coconut ice cream"] },
      { type: "heading", content: "2. Ao Nang Night Market (Daily Market)" },
      { type: "list", items: ["When — daily, 5 PM onwards","Where — central Ao Nang","Highlights — food court setup, international + Thai food, souvenir stalls","Best for — families, first-time visitors, easy access"] },
      { type: "heading", content: "3. Landmark Night Market" },
      { type: "list", items: ["When — Wednesday to Sunday","Where — Ao Nang main road","Highlights — smaller and quieter, great for trinkets and snacks"] },
      { type: "heading", content: "What to Eat" },
      { type: "list", items: ["Fresh grilled seafood — prawns, squid, fish","Thai street food — pad thai, satay, fried rice","Mango sticky rice","Roti and coconut ice cream"] },
      { type: "heading", content: "Prices (2026, INR)" },
      { type: "list", items: ["Street food meal — ₹150–₹400","Seafood plate — ₹300–₹800","Souvenirs — ₹200–₹1,000"] },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["Ideal — 6:30 PM to 8:30 PM","Avoid — after 10 PM (stalls start closing)"] },
      { type: "heading", content: "Night Markets vs Restaurants" },
      { type: "list", items: ["Markets — cheaper, authentic, lively","Restaurants — comfortable, slower, more expensive"] },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Visit multiple markets — each has a different vibe","Try local dishes — don't stick to familiar food","Carry cash — most stalls don't accept cards","Easy transport at night via Grab or songthaew"] },
      { type: "cta", content: "Explore curated Krabi experiences", link: "/thailand/krabi/things-to-do", linkText: "Browse Krabi Tours" },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "The Krabi Night Markets are more than just places to eat — they're a complete cultural experience. In 2026, they remain one of the best budget-friendly and authentic things to do in Krabi, especially after a day of island hopping." },
    ]}
    relatedActivities={[
      { title: "Krabi City Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi Sunset Cruise", link: "/thailand/krabi/things-to-do" },
    ]}
    relatedLinks={[
      { title: "15 Best Things to Do in Krabi", link: "/thailand/krabi/destination-guides/activity/15-best-things-to-do-in-krabi" },
      { title: "Indian Restaurants in Krabi", link: "/thailand/krabi/destination-guides/indian-audience/indian-restaurants-in-krabi" },
      { title: "Krabi Emerald Pool & Hot Springs", link: "/thailand/krabi/destination-guides/activity/krabi-emerald-pool-hot-springs-guide" },
      { title: "Best Krabi Packages for Indian Couples", link: "/thailand/krabi/destination-guides/indian-audience/best-krabi-packages-for-indian-couples" },
      { title: "Kayaking in Ao Thalane Krabi", link: "/thailand/krabi/destination-guides/activity/kayaking-in-ao-thalane-krabi" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/activity/krabi-night-markets-guide")}
  />
);

export default BlogKrabiNightMarketsGuide;
