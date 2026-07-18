import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getPhuketInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/phuket-island-viewpoint-1.jpg";

const BlogBigBuddhaPhuketGuide = () => (
  <BlogArticleLayout
    title="Big Buddha Phuket: Timings, Entry & Complete Visitor Guide (2026)"
    description="Big Buddha Phuket 2026 — free entry, timings, dress code, how to reach, best photo spots and ideal half-day itinerary."
    heroImage={heroImg}
    heroAlt="Big Buddha Phuket Nakkerd Hill"
    author="Yellodae Travel Expert"
    date="May 7, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["big buddha phuket", "phuket free attractions", "nakkerd hill", "big buddha timings"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/phuket/destination-guides#activity" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do/", transfersLink: "/thailand/phuket/transfers/" }}
    sections={[
      { type: "paragraph", content: "Big Buddha Phuket — a 45-meter white marble statue on Nakkerd Hill — is one of Phuket's top free attractions, offering 360° island views and a peaceful spiritual atmosphere." },
      { type: "heading", content: "Quick Facts" },
      { type: "list", items: ["Entry: Free (donations welcome)", "Timings: 6:00 AM – 7:30 PM", "Location: Nakkerd Hill — 15 km from Patong, 10 km from Kata/Karon", "Dress code: shoulders and knees covered"] },
      { type: "cta", content: "Book a Phuket City Tour that covers Big Buddha + Wat Chalong", link: "/thailand/phuket/phuket-city-tour/", linkText: "Book Phuket City Tour" },
      { type: "heading", content: "How to Reach Big Buddha" },
      { type: "list", items: ["Taxi/Grab: ₹600–₹1,000 one-way", "Scooter rental: ~₹500/day (steep climb)", "City tour package (recommended): hassle-free + multiple stops"] },
      { type: "heading", content: "What to See on Top" },
      { type: "list", items: [
        "The 45-meter Big Buddha statue",
        "Panoramic viewpoints over Patong, Kata and Chalong Bay",
        "Smaller temple and meditation area",
        "Monks chanting and bell ceremonies",
      ]},
      { type: "tip-box", content: "Visit early morning (7–9 AM) or late afternoon (4–6 PM) — midday sun reflects off the marble and gets uncomfortably hot." },
      { type: "heading", content: "Cost Breakdown for Indian Travelers" },
      { type: "list", items: ["Entry: Free", "Transport (round trip): ₹1,200 – ₹2,000", "Combined city tour: ₹1,800 – ₹2,800"] },
      { type: "heading", content: "Pros & Cons" },
      { type: "list", items: ["Pros: Free, best viewpoint, cultural experience", "Cons: Mostly sightseeing, hot mid-day, hill climb required"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "An absolute must-do half-day trip in Phuket — best paired with Wat Chalong, Karon Viewpoint and Old Town as part of a city tour." },
    ]}
    relatedActivities={[
      { title: "Phuket City Tour", link: "/thailand/phuket/phuket-city-tour/" },
      { title: "Phuket Hourly Rental", link: "/thailand/phuket/phuket-city-hourly-rental/" },
      { title: "Phuket FantaSea Show", link: "/thailand/phuket/phuket-fanta-sea-show/" },
    ]}
    relatedLinks={[
      { title: "Phuket City Tour vs Island Tour", link: "/thailand/phuket/destination-guides/comparison/phuket-city-tour-vs-island-tour/" },
      { title: "Phuket Private vs Group Tour", link: "/thailand/phuket/destination-guides/comparison/phuket-private-vs-group-tour/" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do/" },
    ]}
      internalLinks={getPhuketInternalLinks("/thailand/phuket/destination-guides/activity/big-buddha-phuket-guide")}
  />
);
export default BlogBigBuddhaPhuketGuide;
