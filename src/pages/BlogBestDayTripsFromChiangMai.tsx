import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-doi-inthanon-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Best Day Trips from Chiang Mai for First-Time Visitors"
    description="Top day trips from Chiang Mai — Doi Inthanon, Doi Suthep, Chiang Rai, ethical elephant sanctuaries and Pai. Highlights, costs and how to choose."
    heroImage={heroImg}
    heroAlt="Wachirathan Waterfall in Doi Inthanon National Park"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["Chiang Mai day trips","Doi Inthanon","Chiang Rai","elephant sanctuary","Pai","Doi Suthep"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do/", transfersLink: "/thailand/chiang-mai/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Chiang Mai is the perfect base for exploring Northern Thailand. The real magic lies in its surroundings — mountains, waterfalls, temples and tribal villages. The most popular options are the Doi Inthanon National Park full-day tour and the Chiang Rai Golden Triangle day trip, both bookable with hotel pickup." },
      { type: "heading", content: "1. Doi Inthanon National Park" },
      { type: "paragraph", content: "Thailand's highest peak — a paradise for nature lovers." },
      { type: "list", items: ["Wachirathan Waterfall","Twin Royal Pagodas","Nature trails and cloud forests"] },
      { type: "cta", content: "See Thailand's highest peak with the Doi Inthanon full-day tour (hotel pickup included)", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/", linkText: "Book Doi Inthanon Tour" },
      { type: "heading", content: "2. Doi Suthep & City Temples" },
      { type: "paragraph", content: "Visit Wat Phra That Doi Suthep along with Wat Chedi Luang and Wat Pha Lat — the perfect mix of culture and views in half a day." },
      { type: "heading", content: "3. Chiang Rai Day Trip" },
      { type: "paragraph", content: "Explore Chiang Rai including the Golden Triangle, the White and Blue Temples and the Long Neck Karen village." },
      { type: "cta", content: "Book the Chiang Rai, Golden Triangle & Long Neck tribe day trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/", linkText: "Reserve Chiang Rai Day Trip" },
      { type: "mid-activities", destination: "thailand", heading: "Top Chiang Mai Activities" },
      { type: "heading", content: "4. Elephant Sanctuary Experience" },
      { type: "list", items: ["Feed elephants","Walk with them","Learn about ethical conservation"] },
      { type: "heading", content: "5. Pai (Mini Adventure Trip)" },
      { type: "list", items: ["Hot springs","Waterfalls","Relaxed mountain vibe"] },
      { type: "heading", content: "How to Choose the Right Day Trip" },
      { type: "list", items: ["Limited time → Doi Suthep","Nature lovers → Doi Inthanon","Cultural exploration → Chiang Rai","Unique experience → ethical elephant sanctuary"] },
      { type: "heading", content: "Travel Tips" },
      { type: "list", items: ["Book tours that include transfers","Start early to beat the heat","Carry essentials — water, sunscreen, snacks"] },
      { type: "tip-box", content: "Still torn? Read our Chiang Rai vs Doi Inthanon comparison and our Chiang Mai temple tour price guide before booking." },
      { type: "cta", content: "Ready to plan? Browse all Chiang Mai day trips and tours", link: "/thailand/chiang-mai/things-to-do/", linkText: "Explore Chiang Mai Tours" },
    ]}
    relatedActivities={[
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/" },
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/" },
      { title: "Chiang Mai City Temple Tour (Doi Suthep)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/" },
    ]}
    relatedLinks={[
      { title: "Chiang Rai vs Doi Inthanon: Which to Choose?", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-vs-doi-inthanon-day-trip/" },
      { title: "Chiang Mai Temple Tour Price Guide 2026", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-temple-tour-price-guide-2026/" },
      { title: "Doi Suthep Complete Guide", link: "/thailand/chiang-mai/destination-guides/activity/doi-suthep-temple-complete-guide/" },
      { title: "Explore All Chiang Mai Tours", link: "/thailand/chiang-mai/things-to-do/" },
    ]}
  />
);
export default Blog;
