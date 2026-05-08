import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/phuket-night-market-1.jpg";

const BlogPhuketFoodCostGuide = () => (
  <BlogArticleLayout
    title="Phuket Food Cost Guide 2026: Street Food vs Restaurants vs Indian Meals (INR)"
    description="Real Phuket food cost in 2026 — street food, casual restaurants, Indian/veg meals, beach clubs and per-day food budget for Indian travelers."
    heroImage={heroImg}
    heroAlt="Phuket night market street food stalls"
    author="Yellodae Travel Expert"
    date="May 8, 2026"
    readTime="8 min read"
    category="Price / Cost Blogs"
    keywords={[
      "phuket food cost",
      "phuket food price in inr",
      "phuket street food cost",
      "phuket indian food price",
      "phuket meal budget 2026",
    ]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Price & Cost Guides", link: "/thailand/phuket/destination-guides#price-cost" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "Food in Phuket can cost ₹150 a meal — or ₹3,000. This 2026 guide gives you real INR pricing across street food, restaurants, Indian meals and beachside dining so you can budget smartly." },
      { type: "heading", content: "Phuket Food Cost — Per Meal (Per Person)" },
      { type: "list", items: [
        "Street food / local Thai stall: ₹120 – ₹300",
        "Casual local restaurant: ₹300 – ₹700",
        "Mid-range tourist restaurant: ₹700 – ₹1,500",
        "Indian restaurant (North/South Indian): ₹500 – ₹1,400",
        "Beach club / fine dining: ₹1,800 – ₹4,500",
      ]},
      { type: "heading", content: "Daily Food Budget" },
      { type: "list", items: [
        "Budget traveler: ₹600 – ₹1,000 per day",
        "Mid-range traveler: ₹1,200 – ₹2,200 per day",
        "Luxury traveler: ₹3,000 – ₹6,000+ per day",
      ]},
      { type: "heading", content: "Where to Eat Cheap in Phuket" },
      { type: "list", items: [
        "Banzaan Fresh Market (Patong) — ₹150–₹300 a meal",
        "Phuket Weekend Night Market (Naka) — pad thai, mango sticky rice",
        "Malin Plaza Patong — local Thai BBQ and seafood",
        "Chillva Market (Phuket Town) — hipster street food",
      ]},
      { type: "tip-box", content: "Pro tip — eat where locals queue. Stall meals at busy markets are usually ₹150–₹250 and far better than mid-range tourist restaurants." },
      { type: "heading", content: "Indian & Vegetarian Food Cost" },
      { type: "list", items: [
        "Veg thali / Indian set meal: ₹500 – ₹900",
        "Paneer / dal mains: ₹400 – ₹700",
        "Naan / roti: ₹100 – ₹200 each",
        "Jain food on request — ₹600 – ₹1,200 per meal",
      ]},
      { type: "paragraph", content: "Patong, Karon and Kata have multiple Indian restaurants. For Jain meals, call 1 day in advance — most kitchens accommodate." },
      { type: "mid-activities", destination: "phuket", heading: "Pair your meals with these top tours" },
      { type: "heading", content: "Drinks & Beverages" },
      { type: "list", items: [
        "Bottled water (1L): ₹30 – ₹60",
        "Fresh coconut: ₹100 – ₹180",
        "Local beer: ₹200 – ₹400",
        "Cocktail at beach club: ₹600 – ₹1,200",
      ]},
      { type: "heading", content: "Hidden Food Costs" },
      { type: "list", items: [
        "Service charge 10% + VAT 7% at sit-down restaurants",
        "Imported drinks priced 2–3x higher",
        "Hotel breakfast buffet (skip if not included): ₹800–₹2,000",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Most Indian travelers spend ₹1,200–₹1,800 per day on food in Phuket — mixing street food, one Indian meal and one casual restaurant. Beach clubs and fine dining are worth one splurge but not daily." },
      { type: "cta", content: "Plan your Phuket food + tour day", link: "/thailand/phuket/things-to-do", linkText: "Explore Phuket" },
    ]}
    relatedActivities={[
      { title: "Phuket City Tour with Big Buddha", link: "/thailand/phuket/phuket-city-tour" },
      { title: "Phi Phi Island Tour (Big Boat)", link: "/thailand/phuket/phuket-phi-phi-island-tour" },
      { title: "James Bond Island Tour from Phuket", link: "/thailand/phuket/james-bond-island-tour" },
    ]}
    relatedLinks={[
      { title: "Indian Food in Phuket: Best Restaurants", link: "/thailand/phuket/destination-guides/indian-audience/indian-food-in-phuket" },
      { title: "Phuket Trip Cost from India 2026", link: "/thailand/phuket/destination-guides/price-cost/phuket-trip-cost-from-india" },
      { title: "Phuket Budget Trip Under ₹50,000", link: "/thailand/phuket/destination-guides/indian-audience/phuket-budget-trip-50000" },
      { title: "4 Days Phuket Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-4-days-itinerary" },
    ]}
  />
);

export default BlogPhuketFoodCostGuide;
