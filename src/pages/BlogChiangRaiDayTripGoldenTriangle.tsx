import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Chiang Rai Day Trip Guide: Golden Triangle & Long Neck Tribe Experience"
    description="Full Chiang Rai day trip from Chiang Mai — White Temple, Blue Temple, Golden Triangle viewpoint, Long Neck Karen village, costs and travel tips."
    heroImage={heroImg}
    heroAlt="Mekong River at the Golden Triangle viewpoint"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["Chiang Rai day trip","Golden Triangle","White Temple","Blue Temple","Long Neck tribe","Chiang Mai day trips"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do", transfersLink: "/thailand/chiang-mai/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "A day trip to Chiang Rai is one of the most rewarding excursions from Chiang Mai. In a single day you'll see the iconic Golden Triangle, the surreal White and Blue Temples, and the Long Neck Karen tribe village — best done as a full-day Chiang Rai & Golden Triangle tour with hotel pickup so you don't waste hours on logistics." },
      { type: "cta", content: "Skip the planning — book the full-day Chiang Rai, Golden Triangle & Long Neck tribe tour", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip", linkText: "Book Chiang Rai Day Trip" },
      { type: "heading", content: "What is the Golden Triangle?" },
      { type: "paragraph", content: "The Golden Triangle is where Thailand, Laos and Myanmar meet along the Mekong River. Once known for the opium trade, today it's a peaceful viewpoint where you can literally see three countries at once." },
      { type: "heading", content: "Key Highlights" },
      { type: "subheading", content: "White Temple (Wat Rong Khun)" },
      { type: "paragraph", content: "Designed by Thai artist Chalermchai Kositpipat — an all-white temple with mirrored glass symbolising purity and enlightenment." },
      { type: "subheading", content: "Blue Temple (Wat Rong Suea Ten)" },
      { type: "paragraph", content: "A modern, deeply spiritual temple with cobalt-blue interiors and a large white Buddha statue." },
      { type: "subheading", content: "Long Neck Karen Village" },
      { type: "paragraph", content: "Home to the Karen tribe, known for women wearing brass neck rings — a window into a unique cultural tradition." },
      { type: "heading", content: "Travel Distance & Duration" },
      { type: "list", items: ["Distance: ~190 km from Chiang Mai","Travel time: 3–4 hours one way","Total duration: 12–14 hours"] },
      { type: "heading", content: "Tour Options" },
      { type: "list", items: ["Join tour: budget-friendly, fixed itinerary, ideal for solo travelers","Private tour: flexible, comfortable, higher cost"] },
      { type: "heading", content: "Cost Breakdown" },
      { type: "list", items: ["Join tour: ₹2,500 – ₹4,500","Private tour: ₹8,000 – ₹15,000","Includes transport, guide and entry fees"] },
      { type: "cta", content: "Lock in a comfortable join-tour seat with hotel pickup for the Chiang Rai day trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip", linkText: "Reserve Day Trip" },
      { type: "mid-activities", destination: "thailand", heading: "More Chiang Mai Day Trips" },
      { type: "heading", content: "Things to Expect" },
      { type: "list", items: ["Early morning departure (6–7 AM)","Multiple stops along the way","Scenic countryside views","Long travel time but comfortable breaks"] },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "list", items: ["Carry vegetarian snacks","Exchange currency in advance","Light cotton clothes recommended","Keep a passport copy handy"] },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["November – February: cool, ideal","March – May: hot","June – October: rainy but scenic"] },
      { type: "tip-box", content: "Short on time? Compare this trip with a closer nature day in our Chiang Rai vs Doi Inthanon comparison before deciding." },
      { type: "cta", content: "Ready to see three countries in one day? Book your Chiang Rai Golden Triangle tour", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "Chiang Rai & Golden Triangle Day Trip from Chiang Mai", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour" },
      { title: "Chiang Mai City Temple Tour (Doi Suthep + Chedi Luang)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer" },
    ]}
    relatedLinks={[
      { title: "Chiang Rai vs Doi Inthanon: Which Day Trip to Choose?", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-vs-doi-inthanon-day-trip" },
      { title: "Chiang Rai Day Trip for Indian Travelers", link: "/thailand/chiang-mai/destination-guides/activity/chiang-rai-day-trip-for-indian-travelers" },
      { title: "Best Day Trips from Chiang Mai", link: "/thailand/chiang-mai/destination-guides/activity/best-day-trips-from-chiang-mai" },
      { title: "Explore All Chiang Mai Tours", link: "/thailand/chiang-mai/things-to-do" },
    ]}
  />
);
export default Blog;
