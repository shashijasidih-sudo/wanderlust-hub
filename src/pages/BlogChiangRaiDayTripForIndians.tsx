import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-transfer-van-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Chiang Rai Day Trip from Chiang Mai for Indian Travelers"
    description="Chiang Rai day trip tailored for Indians — what to expect, vegetarian food tips, costs in INR and how to book the Golden Triangle tour."
    heroImage={heroImg}
    heroAlt="Chiang Mai private transfer van"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["Chiang Rai day trip Indians","Golden Triangle India","Chiang Mai for Indian families","White Temple India tour"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do/", transfersLink: "/thailand/chiang-mai/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "A Chiang Rai day trip is one of the most popular excursions for Indian travelers visiting Chiang Mai — and the easiest way to do it without logistics stress is the full-day Chiang Rai, Golden Triangle and Long Neck tribe tour with hotel pickup." },
      { type: "cta", content: "Skip the planning — book the full-day Chiang Rai Golden Triangle tour", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/", linkText: "Book Chiang Rai Tour" },
      { type: "heading", content: "What to Expect" },
      { type: "list", items: ["Early departure (6–7 AM)","Long drive (3–4 hrs each way)","Multiple stops across the day"] },
      { type: "heading", content: "Highlights" },
      { type: "list", items: ["Golden Triangle viewpoint (3 countries at once)","White Temple (Wat Rong Khun)","Blue Temple","Long Neck Karen Village"] },
      { type: "mid-activities", destination: "thailand", heading: "More Chiang Mai Picks for Indians" },
      { type: "heading", content: "Food Tips for Indians" },
      { type: "list", items: ["Limited veg options on the road — carry snacks","Pack theplas, dry snacks and biscuits","Mineral water bottles available at all stops"] },
      { type: "heading", content: "Costs in INR" },
      { type: "list", items: ["Join tour: ₹2,500 – ₹4,500","Private tour: ₹8,000 – ₹15,000","Includes transport, guide and entry fees"] },
      { type: "tip-box", content: "Doing temples too? Bundle this with our Chiang Mai temple tour price guide and the Doi Suthep complete guide for a 2-day combo." },
      { type: "cta", content: "Lock in your seat for the Chiang Rai day trip — small group, English guide", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/" },
      { title: "Chiang Mai City Temple Tour (Doi Suthep)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/" },
    ]}
    relatedLinks={[
      { title: "Chiang Mai Tour Guide for Indians", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-tour-guide-for-indians/" },
      { title: "Chiang Rai Day Trip — Full Itinerary", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-day-trip-golden-triangle-long-neck-tribe/" },
      { title: "Chiang Rai vs Doi Inthanon Day Trip", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-vs-doi-inthanon-day-trip/" },
      { title: "Explore All Chiang Mai Tours", link: "/thailand/chiang-mai/things-to-do/" },
    ]}
  />
);
export default Blog;
