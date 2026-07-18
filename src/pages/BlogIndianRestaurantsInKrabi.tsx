import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/city-krabi.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Indian Restaurants in Krabi: Where to Eat Vegetarian Food (2026 Guide)"
    description="Best Indian, vegetarian and Jain food spots in Krabi for 2026 — restaurants in Ao Nang, prices in INR, breakfast options and smart food tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="Indian restaurant signage in Ao Nang, Krabi"
    author="Yellodae Travel Expert"
    date="May 12, 2026"
    readTime="9 min read"
    category="Indian Audience Blogs"
    keywords={["indian restaurants krabi","vegetarian food krabi","jain food krabi","indian food ao nang","krabi food guide indian travelers"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Indian Audience Guides", link: "/thailand/krabi/destination-guides#indian-audience" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do/", transfersLink: "/thailand/krabi/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Traveling to Krabi from India and worried about food — especially vegetarian or Jain options? You're not alone. The good news: Krabi is very Indian-friendly when it comes to food. From North Indian curries to South Indian meals and pure vegetarian options, you'll find plenty of choices, especially around Ao Nang. This 2026 guide covers the best areas, top restaurants, vegetarian and Jain options, costs and smart food tips for Indian travelers." },
      { type: "heading", content: "Why Indian Food is Easily Available in Krabi" },
      { type: "list", items: ["Krabi has been a favorite Indian destination for years","Many Indian and Nepali chefs run restaurants here","Vegetarian demand is high","Menus are customized for Indian taste","Especially in Ao Nang you'll find multiple Indian options within walking distance"] },
      { type: "heading", content: "Best Areas to Find Indian Restaurants" },
      { type: "list", items: ["Ao Nang — top choice, maximum Indian restaurants, budget to premium","Krabi Town — fewer options, more local vibe","Railay Beach — limited Indian food, mostly resort dining"] },
      { type: "heading", content: "Top Indian Restaurants in Krabi" },
      { type: "list", items: ["Namaste India (Ao Nang) — authentic North Indian, veg & non-veg","Tandoori Nights — budget-friendly with good veg options","Maharaja Restaurant — Indian + Thai fusion","Bombay Palace — authentic flavors, Jain food available","Curry Palace — family-friendly with a wide menu"] },
      { type: "tip-box", content: "Most of the best Indian restaurants are clustered in Ao Nang within a 10-minute walk of each other — staying here makes food sorted." },
      { type: "heading", content: "Vegetarian Food in Krabi" },
      { type: "list", items: ["Paneer butter masala, kadai paneer, dal makhani","Aloo paratha, chole bhature, masala dosa","Veg biryani, jeera rice, naan and roti","Many cafes also offer veg pasta, pizza and salads"] },
      { type: "heading", content: "Jain Food Availability" },
      { type: "list", items: ["Many Indian restaurants offer no-onion, no-garlic options","Meals can be customised on request","Inform staff clearly about dietary preferences before ordering"] },
      { type: "heading", content: "Indian Breakfast Options" },
      { type: "list", items: ["Paratha, poha, idli (in some places), masala chai","Cost — ₹150–₹400","Some hotels also offer Indian breakfast on request"] },
      { type: "cta", content: "Pair Indian food with island days — see the most-booked Krabi tours", link: "/thailand/krabi/things-to-do/", linkText: "Browse Krabi Tours" },
      { type: "heading", content: "Food Cost for Indian Travelers" },
      { type: "list", items: ["Daily budget — ₹800–₹1,200 (budget) or ₹1,500–₹2,500 (mid-range)","5-day food budget — ₹5,000–₹10,000","Indian restaurant meal — ₹500–₹1,200 per person"] },
      { type: "heading", content: "Vegan & Healthy Options" },
      { type: "list", items: ["Vegan cafes in Ao Nang","Smoothie bowls and fresh juices","Salads and Buddha bowls"] },
      { type: "heading", content: "Smart Food Tips for Indian Travelers" },
      { type: "list", items: ["Carry instant noodles or snacks for emergencies","Always ask before ordering — fish sauce is common in Thai food","Stay near food hubs (Ao Nang)","Eat at night markets for cheap and varied options","Check Google reviews before trying a new restaurant"] },
      { type: "heading", content: "Common Food Mistakes to Avoid" },
      { type: "list", items: ["Assuming all Thai food is vegetarian","Eating only Indian food and missing local experiences","Not checking the spice level — Thai chillies are very strong"] },
      { type: "heading", content: "Is Food Expensive in Krabi?" },
      { type: "list", items: ["Cheaper than Europe and Dubai","Similar to Bali","Affordable for most Indian travelers"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Indian food in Krabi is easily available, affordable and diverse. Whether you're vegetarian, Jain or non-veg, you'll find plenty of options — especially in Ao Nang. Plan your stay around food hubs and Krabi becomes one of the most comfortable international trips for Indian families." },
      { type: "cta", content: "Book your Krabi airport transfer for a smooth arrival", link: "/thailand/krabi/budget-airport-transfers/", linkText: "Book Krabi Transfer" },
    ]}
    relatedActivities={[
      { title: "4 Island Tour from Krabi", link: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer/" },
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer/" },
      { title: "Emerald Pool & Hot Springs Day Tour", link: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer/" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers/" },
    ]}
    relatedLinks={[
      { title: "Best Krabi Packages for Indian Couples", link: "/thailand/krabi/destination-guides/indian-audience/best-krabi-packages-for-indian-couples/" },
      { title: "Krabi Honeymoon Guide for Indian Couples", link: "/thailand/krabi/destination-guides/indian-audience/krabi-honeymoon-guide-for-indian-couples/" },
      { title: "5 Days Krabi Itinerary with Phi Phi", link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary/" },
      { title: "Indian Food in Phuket", link: "/thailand/phuket/destination-guides/indian-audience/indian-food-in-phuket/" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/indian-audience/indian-restaurants-in-krabi")}
  />
);

export default Blog;
