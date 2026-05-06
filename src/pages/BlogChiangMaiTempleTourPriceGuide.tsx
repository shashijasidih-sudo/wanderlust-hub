import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-wat-chedi-luang-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Chiang Mai Temple Tour Price Guide: What Does It Cost in 2026?"
    description="2026 cost breakdown of Chiang Mai temple tours — join vs private, Doi Suthep entry fees, transport, hidden costs and budget vs luxury plans."
    heroImage={heroImg}
    heroAlt="Wat Chedi Luang ancient brick chedi in Chiang Mai"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["Chiang Mai temple tour cost","Doi Suthep price","Wat Chedi Luang","Wat Pha Lat","Chiang Mai tour price 2026"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do", transfersLink: "/thailand/chiang-mai/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "If you're planning a cultural trip to Chiang Mai, visiting Wat Phra That Doi Suthep, Wat Chedi Luang and the hidden jungle sanctuary of Wat Pha Lat is a must — and the most cost-effective way is a single Chiang Mai city temple tour with hotel transfer that bundles all three." },
      { type: "cta", content: "Get all 3 temples + transfer in one fixed-price tour (no surprise costs)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Book Temple Tour" },
      { type: "heading", content: "Average Temple Tour Cost in 2026" },
      { type: "subheading", content: "Join Tours (Shared)" },
      { type: "list", items: ["Price: ₹1,200 – ₹2,500 per person","Duration: 4–6 hours","Includes hotel pickup, transport, English-speaking guide, temple visits","Ideal for solo travelers and backpackers"] },
      { type: "subheading", content: "Private Tours" },
      { type: "list", items: ["Price: ₹4,500 – ₹10,000 per group","Duration: flexible (half or full day)","Private car, driver, guide and customisable stops","Ideal for couples, families and luxury travelers"] },
      { type: "heading", content: "Detailed Cost Breakdown" },
      { type: "subheading", content: "Temple Entry Fees" },
      { type: "list", items: ["Doi Suthep: 50 THB (~₹120)","Wat Chedi Luang: 40 THB (~₹100)","Wat Pha Lat: Free"] },
      { type: "subheading", content: "Transportation Costs" },
      { type: "list", items: ["Songthaew (red truck): ₹100–₹300","Grab/taxi: ₹500–₹1,500","Private car rental: ₹2,000–₹3,500"] },
      { type: "subheading", content: "Guide Fees" },
      { type: "list", items: ["Included in join tours","Private guide: ₹1,000–₹2,000 extra"] },
      { type: "mid-activities", destination: "thailand", heading: "Compare Chiang Mai Tours" },
      { type: "heading", content: "Hidden Costs to Watch" },
      { type: "list", items: ["Tips (₹200–₹500)","Food and drinks","Cable car at Doi Suthep (~20 THB)","Souvenirs"] },
      { type: "heading", content: "Budget vs Luxury Experience" },
      { type: "list", items: ["Budget (~₹1,500): join tour, shared transport, basic guide","Mid-range (~₹4,000): semi-private tour, better vehicle","Luxury (~₹10,000+): private SUV, dedicated guide, flexible itinerary"] },
      { type: "heading", content: "How to Save Money" },
      { type: "list", items: ["Choose join tours","Combine multiple temples in one trip","Avoid last-minute bookings","Compare prices online"] },
      { type: "cta", content: "Save up to 30% with a bundled Doi Suthep + Chedi Luang + Pha Lat tour", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Book Bundled Tour" },
      { type: "tip-box", content: "Pair the temple tour with a Chiang Rai or Doi Inthanon day trip for a 2-day cultural + nature combo — see our Chiang Rai vs Doi Inthanon guide." },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Whether you're a backpacker or luxury traveler, Chiang Mai temple tours fit every budget. With the right booking, you'll explore the city's heritage without overspending." },
    ]}
    relatedActivities={[
      { title: "Chiang Mai City Temple Tour (Doi Suthep + Chedi Luang + Pha Lat)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour" },
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip" },
    ]}
    relatedLinks={[
      { title: "Doi Suthep Complete Guide", link: "/thailand/chiang-mai/destination-guides/activity/doi-suthep-temple-complete-guide" },
      { title: "Visit Doi Suthep Without Climbing 300 Steps", link: "/thailand/chiang-mai/destination-guides/activity/visit-doi-suthep-without-climbing-steps" },
      { title: "Chiang Rai vs Doi Inthanon Day Trip", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-vs-doi-inthanon-day-trip" },
      { title: "Explore All Chiang Mai Tours", link: "/thailand/chiang-mai/things-to-do" },
    ]}
  />
);
export default Blog;
