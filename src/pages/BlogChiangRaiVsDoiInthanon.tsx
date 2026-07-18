import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Chiang Rai vs Doi Inthanon Tour: Which Day Trip Should You Choose?"
    description="Side-by-side comparison of Chiang Rai and Doi Inthanon day trips from Chiang Mai — culture vs nature, cost, duration and which suits your style."
    heroImage={heroImg}
    heroAlt="Dragon-railed bridge leading to a white temple in Chiang Rai"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["Chiang Rai vs Doi Inthanon","Chiang Mai day trips","Doi Inthanon tour","Chiang Rai tour","Northern Thailand"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do/", transfersLink: "/thailand/chiang-mai/budget-airport-transfers/" }}
    comparisonItems={[
      { name: "Chiang Rai Day Trip (Golden Triangle + Long Neck)", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/" },
      { name: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/" },
    ]}
    sections={[
      { type: "paragraph", content: "When visiting Chiang Mai, two day trips dominate every itinerary — the Chiang Rai Golden Triangle tour and the Doi Inthanon National Park tour. If you only have time for one, this comparison will help you decide based on your travel style." },
      { type: "heading", content: "Quick Comparison" },
      { type: "list", items: ["Distance: Chiang Rai 190 km vs Doi Inthanon 70 km","Travel time: 3–4 hrs vs 1.5–2 hrs","Theme: Culture vs Nature","Duration: 12–14 hrs vs 8–10 hrs"] },
      { type: "heading", content: "Chiang Rai Tour Experience" },
      { type: "subheading", content: "Highlights" },
      { type: "list", items: ["Golden Triangle (Thailand-Laos-Myanmar)","White Temple (Wat Rong Khun)","Blue Temple","Long Neck Karen Village"] },
      { type: "subheading", content: "Why Choose Chiang Rai?" },
      { type: "list", items: ["Unique temples unlike anywhere else","See three countries at once","Rich cultural exposure"] },
      { type: "subheading", content: "Downsides" },
      { type: "list", items: ["Long travel time","Tiring full day"] },
      { type: "cta", content: "Want culture, art and the Golden Triangle? Book the Chiang Rai day trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/", linkText: "Book Chiang Rai Tour" },
      { type: "heading", content: "Doi Inthanon Experience" },
      { type: "subheading", content: "Highlights" },
      { type: "list", items: ["Thailand's highest peak","Wachirathan Waterfall","Twin Royal Pagodas","Nature trails"] },
      { type: "subheading", content: "Why Choose Doi Inthanon?" },
      { type: "list", items: ["Cooler climate","Relaxing nature","Shorter, less tiring journey"] },
      { type: "subheading", content: "Downsides" },
      { type: "list", items: ["Less cultural variety","Weather-dependent views"] },
      { type: "cta", content: "Prefer cool weather and waterfalls? Book the Doi Inthanon full-day tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/", linkText: "Book Doi Inthanon Tour" },
      { type: "mid-activities", destination: "thailand", heading: "Other Chiang Mai Tours" },
      { type: "heading", content: "Cost Comparison" },
      { type: "list", items: ["Chiang Rai: ₹2,500 – ₹4,500","Doi Inthanon: ₹2,000 – ₹3,500"] },
      { type: "heading", content: "Which One Should You Choose?" },
      { type: "list", items: ["Chiang Rai if: first-time visitor, love temples & culture, want iconic landmarks","Doi Inthanon if: nature lover, prefer shorter trips, want relaxed pace"] },
      { type: "heading", content: "Expert Recommendation" },
      { type: "list", items: ["3–4 day trip → choose one","5+ days → do both"] },
      { type: "tip-box", content: "Final verdict: Culture lovers → Chiang Rai. Nature lovers → Doi Inthanon. Limited time → Doi Inthanon. Either way, pair it with a Chiang Mai temple tour for a complete itinerary." },
    ]}
    relatedActivities={[
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/" },
      { title: "Chiang Mai City Temple Tour (Doi Suthep)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/" },
    ]}
    relatedLinks={[
      { title: "Chiang Rai Day Trip — Full Guide", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-day-trip-golden-triangle-long-neck-tribe/" },
      { title: "Best Day Trips from Chiang Mai", link: "/thailand/chiang-mai/destination-guides/activity/best-day-trips-from-chiang-mai/" },
      { title: "Chiang Mai Temple Tour Price Guide 2026", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-temple-tour-price-guide-2026/" },
      { title: "Explore All Chiang Mai Tours", link: "/thailand/chiang-mai/things-to-do/" },
    ]}
  />
);
export default Blog;
