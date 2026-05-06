import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/chiang-mai-doi-suthep-1.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="How to Visit Wat Phra That Doi Suthep Without Climbing 300 Steps"
    description="Skip the famous 306-step Naga staircase at Doi Suthep — cable car, drive-up access and guided tour options for seniors and accessible travel."
    heroImage={heroImg}
    heroAlt="Doi Suthep golden temple with cable car nearby"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="6 min read"
    category="Activity Blogs"
    keywords={["Doi Suthep without steps","Doi Suthep cable car","Doi Suthep accessible","Chiang Mai for seniors"]}
    guidesLink="/thailand/chiang-mai/destination-guides"
    guidesLabel="Chiang Mai Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/chiang-mai/destination-guides#activity" }}
    cityHub={{ city: "Chiang Mai", thingsToDoLink: "/thailand/chiang-mai/things-to-do", transfersLink: "/thailand/chiang-mai/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "The famous 306-step Naga staircase at Wat Phra That Doi Suthep can be challenging for seniors and travelers with limited mobility — but luckily, there are easier ways to visit. The most comfortable option is a guided Chiang Mai temple tour with door-to-door transfer that uses the cable-car entrance." },
      { type: "cta", content: "Most comfortable option — Doi Suthep + Chedi Luang + Pha Lat tour with hotel pickup", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Book Comfortable Tour" },
      { type: "heading", content: "Option 1: Cable Car (Funicular)" },
      { type: "list", items: ["Cost: ~20 THB","Fast and easy","Ideal for seniors and small kids"] },
      { type: "heading", content: "Option 2: Drive Up" },
      { type: "list", items: ["Direct vehicle access to the upper entrance","Parking available near the cable-car platform"] },
      { type: "heading", content: "Option 3: Guided Tour" },
      { type: "list", items: ["No effort needed","Hotel pickup and drop","English-speaking guide"] },
      { type: "mid-activities", destination: "thailand", heading: "More Chiang Mai Tours" },
      { type: "tip-box", content: "Want the full backstory of the temple? Read our complete Doi Suthep guide and the Chiang Mai temple tour price guide before you book." },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "You don't need to climb 300 steps to enjoy Doi Suthep — the cable car and guided tours make it accessible for all travelers." },
      { type: "cta", content: "Reserve a step-free Doi Suthep experience with hotel transfer", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer", linkText: "Book Now" },
    ]}
    relatedActivities={[
      { title: "Chiang Mai City Temple Tour (Doi Suthep + Chedi Luang + Pha Lat)", link: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer" },
      { title: "Doi Inthanon National Park Full-Day Tour", link: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour" },
      { title: "Chiang Rai & Golden Triangle Day Trip", link: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip" },
    ]}
    relatedLinks={[
      { title: "Doi Suthep Complete Guide", link: "/thailand/chiang-mai/destination-guides/activity/doi-suthep-temple-complete-guide" },
      { title: "Chiang Mai Temple Tour Price Guide 2026", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-temple-tour-price-guide-2026" },
      { title: "Chiang Mai Tour Guide for Indians", link: "/thailand/chiang-mai/destination-guides/activity/chiang-mai-tour-guide-for-indians" },
      { title: "Explore All Chiang Mai Tours", link: "/thailand/chiang-mai/things-to-do" },
    ]}
  />
);
export default Blog;
