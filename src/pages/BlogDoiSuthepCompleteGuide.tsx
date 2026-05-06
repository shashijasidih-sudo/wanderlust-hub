import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-doi-suthep-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Complete Guide to Doi Suthep Temple: History, Views & Travel Tips"
    description="Wat Phra That Doi Suthep guide — history, golden chedi, the 306-step Naga staircase, panoramic views, dress code and how to reach the mountain temple."
    heroImage={heroImg}
    heroAlt="Doi Suthep Temple golden chedi against blue sky"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["Doi Suthep","Wat Phra That Doi Suthep","Chiang Mai temples","Naga staircase","Lanna Kingdom"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do", transfersLink: "/thailand/chiang-mai/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "If one place defines the spiritual soul of Chiang Mai, it is Wat Phra That Doi Suthep. Sitting at 1,073 metres above sea level, this sacred temple blends history, panoramic beauty and Thai spirituality — and it pairs perfectly with a guided Chiang Mai city temple tour to Doi Suthep, Chedi Luang and Wat Pha Lat for first-time visitors." },
      { type: "cta", content: "Visit Doi Suthep, Chedi Luang & Wat Pha Lat in one comfortable half-day with hotel transfers", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Book the Doi Suthep Temple Tour" },
      { type: "heading", content: "History of Doi Suthep Temple" },
      { type: "paragraph", content: "Founded in 1383 during the Lanna Kingdom under King Keo Naone, the temple was built where a sacred white elephant carrying a Buddha relic stopped, trumpeted three times and died — a sign interpreted as divine. It remains one of Northern Thailand's most important pilgrimage sites." },
      { type: "heading", content: "Architectural Highlights" },
      { type: "subheading", content: "The Golden Chedi" },
      { type: "paragraph", content: "The centerpiece is a stunning gold-leaf chedi housing the sacred relic, surrounded by smaller shrines and offerings." },
      { type: "subheading", content: "The Naga Staircase" },
      { type: "paragraph", content: "Visitors climb a 306-step staircase lined with serpent Naga sculptures — symbolising the spiritual journey toward enlightenment." },
      { type: "subheading", content: "Bells & Murals" },
      { type: "paragraph", content: "Rows of bells and detailed Buddhist murals surround the complex. Ringing the bells is believed to bring good luck." },
      { type: "heading", content: "Panoramic Views of Chiang Mai" },
      { type: "list", items: ["Sunrise: peaceful and less crowded","Sunset: golden hues over the city skyline","Night: sparkling city lights"] },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["Early Morning (6 AM – 9 AM): cool weather, fewer crowds","Late Afternoon (4 PM – 7 PM): best lighting for photos","Avoid midday heat and tour-bus crowds"] },
      { type: "heading", content: "How to Reach Doi Suthep" },
      { type: "list", items: ["Shared songthaew (red truck) — cheapest, 50–100 THB","Private taxi or car — comfortable for couples and families","Guided tour with hotel pickup — recommended (combines Wat Pha Lat and city temples)"] },
      { type: "cta", content: "Skip the songthaew haggling — pre-book your Doi Suthep + city temple tour with hotel pickup", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Reserve Temple Tour" },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Chiang Mai Experience" },
      { type: "heading", content: "Dress Code & Etiquette" },
      { type: "list", items: ["Shoulders and knees must be covered","Avoid sleeveless tops and shorts","Remove shoes before entering prayer areas","Maintain silence and respect"] },
      { type: "heading", content: "Nearby Attractions" },
      { type: "paragraph", content: "Pair Doi Suthep with hidden jungle temple Wat Pha Lat halfway up the mountain, and the seasonal Bhubing Palace gardens." },
      { type: "heading", content: "Travel Tips" },
      { type: "list", items: ["Carry water and sunscreen","Wear comfortable shoes for climbing","Visit early to beat crowds","Combine with a Chiang Mai city temple tour for best value"] },
      { type: "tip-box", content: "Verdict: Doi Suthep is a must-visit symbol of Chiang Mai — culture, calmness and panoramic views in a single half-day. For step-free access, see our short guide to visiting Doi Suthep without climbing 300 steps." },
      { type: "cta", content: "Ready to go? Lock in your Doi Suthep + Chedi Luang + Pha Lat tour with transfer", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "Chiang Mai City Temple Tour (Doi Suthep + Chedi Luang + Pha Lat)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer" },
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour" },
    ]}
    relatedLinks={[
      { title: "Visit Doi Suthep Without Climbing 300 Steps", link: "/thailand/chiang-mai/destination-guides/activity/visit-doi-suthep-without-climbing-steps" },
      { title: "Chiang Mai Temple Tour Price Guide 2026", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-temple-tour-price-guide-2026" },
      { title: "Chiang Mai Tour Guide for Indians", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-tour-guide-for-indians" },
      { title: "Explore All Chiang Mai Tours & Activities", link: "/thailand/chiang-mai/things-to-do" },
    ]}
  />
);
export default Blog;
