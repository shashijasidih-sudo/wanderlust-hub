import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-indian-food.jpg";

const BlogBangkokIndianFood = () => (
  <BlogArticleLayout
    title="Best Indian Restaurants in Bangkok 2026: Pure Veg & Jain Friendly"
    description="The best Indian restaurants in Bangkok — pure vegetarian, Jain-friendly and South Indian options across Sukhumvit, Pahurat and Silom areas."
    heroImage={heroImg}
    heroAlt="Indian thali and South Indian dishes served at Bangkok restaurant"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="10 min read"
    category="Indian Audience Blogs"
    keywords={["Indian restaurants Bangkok","vegetarian food Bangkok","Jain food Bangkok","South Indian Bangkok","Pure veg Bangkok"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{ city: "Bangkok", thingsToDoLink: "/thailand/bangkok/things-to-do" }}
    sections={[
      { type: "paragraph", content: "If you're an Indian traveler worrying \"will I find vegetarian food in Bangkok?\" — relax. Bangkok has more pure-veg, Jain-friendly and South Indian restaurants than most Tier-2 Indian cities, especially in Sukhumvit, Pahurat (Little India) and Silom. This guide rounds up the absolute best — places with idli-dosa breakfasts, sattvik Jain thalis without onion-garlic, North Indian Punjabi dhabas and even pure-veg Mughlai. Save this list before flying — your stomach will thank you." },
      { type: "heading", content: "Pahurat: Bangkok's Little India" },
      { type: "paragraph", content: "Pahurat is Bangkok's traditional Indian neighborhood — saree shops, Sikh gurdwaras and old-school Indian eateries. Top picks: Royal India (legendary Punjabi dhaba near Pahurat market — full thali for 200 baht), Saras (pure-veg South Indian, ₹350 for unlimited dosa-idli), and the Sikh Gurdwara (langar daily — free vegetarian community meal, donate generously). Auto-rickshaw or Grab from any Bangkok hotel — 30–45 minutes." },
      { type: "heading", content: "Sukhumvit: Modern Indian Restaurants" },
      { type: "paragraph", content: "Sukhumvit is where most Indian travelers stay, and luckily packed with quality options. Indian Hut (Sukhumvit Soi 11) — solid North Indian, butter chicken-style menu plus pure veg section, ₹500/meal. Saffron (Banyan Tree) — fine-dining North Indian with Bangkok skyline views, ₹2,000+/person. Bombay Brasserie (Sukhumvit Soi 21) — fancy contemporary Indian. Maharani (Soi 19) — affordable family-style, popular with Gujarati and Marwari families." },
      { type: "heading", content: "Pure Vegetarian & Jain-Friendly" },
      { type: "paragraph", content: "For strict vegetarians and Jains, Bangkok has dedicated pure-veg places: Govinda's (ISKCON-run, sattvik food, no onion-garlic on request, ₹400/thali), Tipsy Cow (surprisingly good pure-veg multi-cuisine in Sukhumvit), and most Bangkok Indian restaurants will prepare Jain meals if you call ahead. Always ask \"no onion no garlic\" — \"jain food\" — and Indian-owned places get it instantly." },
      { type: "tip-box", content: "Ask for \"jay\" food at any Thai restaurant or hawker stall — it means strict vegetarian (no meat, no fish sauce, no eggs). Look for the yellow flag with red Thai script — universal Buddhist veg sign." },
      { type: "mid-activities", destination: "bangkok", heading: "Plan Your Bangkok Activities" },
      { type: "heading", content: "South Indian: Idli, Dosa & Sambar" },
      { type: "paragraph", content: "South Indian options in Bangkok are surprisingly excellent. Saras (Pahurat) — idli, dosa, vada, uttapam, full unlimited South Indian thali. Mahesh Lunch Home (Sukhumvit) — Mangalorean food. Anjappar (multiple branches) — Chettinad cuisine if you eat non-veg. Most South Indian breakfast spots open by 7:30 AM — perfect before a temple day." },
      { type: "heading", content: "Indian Sweets & Snacks" },
      { type: "paragraph", content: "Need a chai-samosa fix? MTR (multiple branches) — full vegetarian South Indian + Indian sweets. Bombay Sweets (Pahurat) — gulab jamun, jalebi, kaju katli at near-India prices. Most Sukhumvit Indian restaurants now stock sweets too. Carry some back to your hotel for late-night cravings — Bangkok 7-Elevens don't sell Indian sweets." },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "paragraph", content: "Most Indian restaurants in Bangkok deliver via FoodPanda and Grab Food — order from your hotel after a long temple day. Vegetarian Thai food is also widely available — ask for \"jay\" (pure vegetarian, no fish sauce, no eggs) and look for the yellow \"jay\" flag at hawker stalls. Pad Thai with tofu, green curry with vegetables and mango sticky rice are 100% vegetarian when made right." },
      { type: "heading", content: "Cost Expectations" },
      { type: "paragraph", content: "Pahurat dhabas: ₹200–400 per meal. Mid-range Sukhumvit Indian: ₹500–800 per meal. Fine-dining Indian (Saffron, Indus): ₹1,500–2,500 per meal. Most Indian families spend about ₹1,200/day per person on food in Bangkok if they want a mix of Indian and Thai meals." },
      { type: "list", items: ["Pahurat (Little India) — most authentic + cheapest","Sukhumvit Soi 11/19/21 — convenient mid-range Indian","Govinda's, Saras — pure veg + Jain options","Saffron, Indus — fine dining Indian"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Bangkok is one of Asia's most vegetarian-friendly big cities — pure veg, Jain, South Indian, North Indian, Mughlai, you'll find it all. Save this list, mix Indian meals into your Bangkok itinerary 1–2 times a day if you crave home food, and use the rest of the time to safely explore Thai vegetarian dishes. You will not go hungry." },
      { type: "cta", content: "Plan your Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok Tours" }
    ]}
  />
);

export default BlogBangkokIndianFood;
