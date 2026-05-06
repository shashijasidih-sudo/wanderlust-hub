import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/koh-samui-full-moon-party-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Full Moon Party Thailand Guide for Indians: Tips, Costs, Transfers & Safety"
    description="Complete Full Moon Party guide for Indian travelers — flights, transfers, INR costs, vegetarian food, safety tips and the best travel plan."
    heroImage={heroImg}
    heroAlt="Full Moon Party beach with neon paint crowd"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="11 min read"
    category="Activity Blogs"
    keywords={["Full Moon Party for Indians","Koh Phangan Indian travelers","Full Moon Party cost India","Thailand party guide","Indian Full Moon Party tips"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    sections={[
      { type: "paragraph", content: "The Full Moon Party in Thailand is one of the most famous nightlife experiences in the world — and for Indian travelers, it has become a must-do highlight in a Thailand trip. Held monthly at Haad Rin Beach in Koh Phangan, you'll need proper planning around costs, transfers, safety and cultural expectations." },
      { type: "heading", content: "What is the Full Moon Party?" },
      { type: "list", items: ["All-night beach rave (10 PM to sunrise)","International DJs and music zones","Neon body paint culture","Fire shows and beach performances"] },
      { type: "heading", content: "How to Reach Full Moon Party from India" },
      { type: "list", items: ["Fly India → Bangkok or Phuket","Domestic flight → Koh Samui","Ferry/speedboat → Koh Phangan","Best option: flight to Koh Samui + speedboat transfer","Cost: ₹20,000 – ₹45,000 round trip depending on season"] },
      { type: "heading", content: "Transfers to Full Moon Party" },
      { type: "list", items: ["Speedboat (fastest): ₹2,000 – ₹4,000","Ferry (budget): ₹800 – ₹2,000","Always book your return transfer in advance"] },
      { type: "cta", content: "Pay in INR — bundled Samui ↔ Koh Phangan return transfer + party entry for Indian travelers", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book in INR" },
      { type: "heading", content: "Full Cost Breakdown for Indians (2026)" },
      { type: "list", items: ["Entry Fee: ₹200 – ₹500","Transfers: ₹2,000 – ₹4,000","Drinks: ₹1,000 – ₹2,000","Food: ₹300 – ₹700","Stay (1 night): ₹2,500 – ₹6,000","Total: ₹6,000 – ₹12,000"] },
      { type: "mid-activities", destination: "thailand", heading: "Build Your Koh Samui Trip" },
      { type: "heading", content: "What to Wear" },
      { type: "list", items: ["Light beachwear, shorts, tank tops or swimwear","Comfortable footwear (avoid barefoot)","For women: avoid heavy jewelry, choose breathable outfits"] },
      { type: "heading", content: "Food Options for Indians" },
      { type: "list", items: ["Koh Samui has multiple Indian restaurants","Vegetarian options widely available","Eat before the party — beach food is pricey"] },
      { type: "heading", content: "Safety Tips for Indian Travelers" },
      { type: "list", items: ["DO: Travel in groups, carry minimal cash, use waterproof phone pouches, book trusted transfers","DON'T: Accept drinks from strangers, carry passports to the party, overdrink"] },
      { type: "heading", content: "Common Mistakes Indians Make" },
      { type: "list", items: ["Underestimating total cost","Booking transfers late","Not planning return journey","Carrying valuables"] },
      { type: "heading", content: "Best Time to Attend" },
      { type: "list", items: ["Peak season: December – April","Party timing: 10 PM – 3 AM peak hours"] },
      { type: "heading", content: "Pro Travel Plan (Recommended)" },
      { type: "list", items: ["Day 1–2: Bangkok or Phuket","Day 3–4: Koh Samui stay","Day 5: Full Moon Party"] },
      { type: "tip-box", content: "Verdict: A balanced itinerary = a better experience. With the right planning, you'll enjoy one of the most iconic parties in the world stress-free." },
      { type: "cta", content: "Book Full Moon Party with transfer from Koh Samui", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "First-Time Full Moon Party Beginner Guide", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide" },
      { title: "Hidden Costs of Full Moon Party 2026", link: "/thailand/koh-samui/destination-guides/activity/hidden-costs-full-moon-party-thailand-2026" },
      { title: "How to Reach Full Moon Party from Phuket and Bangkok", link: "/thailand/koh-samui/destination-guides/activity/how-to-reach-full-moon-party-from-phuket-and-bangkok" },
      { title: "Loy Krathong Festival Guide for Indians", link: "/thailand/koh-samui/destination-guides/activity/loy-krathong-festival-for-indian-travelers" },
    ]}
    relatedLinks={[
      { title: "Book Full Moon Party + Samui–Koh Phangan Transfer", link: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer" },
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Bangkok Trip Cost from India 2026", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-trip-cost-from-india" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui" },
    ]}
  />
);
export default Blog;
