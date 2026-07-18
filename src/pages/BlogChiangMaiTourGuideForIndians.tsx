import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/city-chiang-mai.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Chiang Mai Tour Guide for Indians: Temples, Food & Travel Tips"
    description="Chiang Mai for Indian travelers — visa, INR budget, vegetarian and Jain food, top attractions, must-do tours and practical travel tips."
    heroImage={heroImg}
    heroAlt="Chiang Mai night bazaar with diners"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["Chiang Mai for Indians","Chiang Mai Indian travelers","Thailand visa India","Chiang Mai vegetarian","Chiang Mai budget INR"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do/", transfersLink: "/thailand/chiang-mai/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Chiang Mai is rapidly becoming a favourite destination for Indian travelers — temples, mountains, affordability and a laid-back vibe. The two highest-value bookings for Indians are the Chiang Mai city temple tour with hotel pickup and the Chiang Rai Golden Triangle day trip — both English-speaking, hassle-free and INR-friendly." },
      { type: "cta", content: "Most-booked by Indians: Doi Suthep + Chedi Luang + Pha Lat with transfer", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/", linkText: "Book Temple Tour" },
      { type: "heading", content: "Visa & Travel Basics" },
      { type: "list", items: ["Visa on Arrival available for Indians","Currency: Thai Baht","Ideal trip budget: ₹40,000 – ₹80,000"] },
      { type: "heading", content: "Top Attractions" },
      { type: "list", items: ["Wat Phra That Doi Suthep","Wat Chedi Luang & Wat Pha Lat","Night bazaars","Ethical elephant sanctuaries","Doi Inthanon National Park"] },
      { type: "cta", content: "Add a full nature day with Doi Inthanon — Thailand's highest peak", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/", linkText: "Book Doi Inthanon Tour" },
      { type: "mid-activities", destination: "thailand", heading: "Top Picks for Indian Travelers" },
      { type: "heading", content: "Indian Food in Chiang Mai" },
      { type: "list", items: ["Many Indian restaurants in the Old City and Nimman","Vegetarian and Jain food easily available","Street food has solid veg options too"] },
      { type: "heading", content: "Travel Tips" },
      { type: "list", items: ["Use the Grab app for cabs","Book transfers and tours early","Carry some cash (Thai Baht)","Light cottons + a light jacket for evenings"] },
      { type: "tip-box", content: "Doing a multi-day trip? See our best day trips from Chiang Mai and Chiang Rai vs Doi Inthanon comparison to plan smart." },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Chiang Mai is safe, budget-friendly and one of the most rewarding international destinations for Indian travelers." },
      { type: "cta", content: "Browse all Indian-friendly Chiang Mai tours and activities", link: "/thailand/chiang-mai/things-to-do/", linkText: "Explore Chiang Mai Tours" },
    ]}
    relatedActivities={[
      { title: "Chiang Mai City Temple Tour with Transfer", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/" },
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/" },
    ]}
    relatedLinks={[
      { title: "Chiang Rai Day Trip for Indian Travelers", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-day-trip-for-indian-travelers/" },
      { title: "Doi Suthep Complete Guide", link: "/thailand/chiang-mai/destination-guides/activity/doi-suthep-temple-complete-guide/" },
      { title: "Chiang Mai Temple Tour Price Guide 2026", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-temple-tour-price-guide-2026/" },
      { title: "Best Day Trips from Chiang Mai", link: "/thailand/chiang-mai/destination-guides/activity/best-day-trips-from-chiang-mai/" },
    ]}
  />
);
export default Blog;
