import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getPhuketInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/dolphin-show-1.jpg";

const BlogDolphinShowPhuket = () => (
  <BlogArticleLayout
    title="Dolphin Show Phuket: Tickets, Timing & Honest Review (2026)"
    description="Phuket Dolphin Show 2026 — ticket price in INR, seat types, timings, what to expect and is it worth it for families."
    heroImage={heroImg}
    heroAlt="Dolphin Show Phuket"
    author="Yellodae Travel Expert"
    date="May 7, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={["dolphin show phuket", "phuket dolphin tickets", "phuket family activity", "dolphin show review"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/phuket/destination-guides#activity" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "The Phuket Dolphin Show is one of the city's most popular family activities — a 45-minute high-energy performance with trained dolphins, jumps, ball acts and audience interaction." },
      { type: "heading", content: "Show Highlights" },
      { type: "list", items: ["High jumps and acrobatic flips", "Ball balancing acts", "Dolphin painting demos", "Audience interaction segments"] },
      { type: "heading", content: "Ticket Types & Pricing" },
      { type: "list", items: ["Standard: ₹1,200 – ₹1,800", "Premium (middle): ₹1,800 – ₹2,400", "VIP (front): ₹2,500 – ₹3,200", "Photo session: extra ₹500–₹800"] },
      { type: "cta", content: "Book Phuket Dolphin Show tickets in INR", link: "/thailand/phuket/dolphin-show", linkText: "Book Dolphin Show" },
      { type: "heading", content: "Show Timings (2026)" },
      { type: "list", items: ["Daily shows: 12:00 PM, 3:00 PM, 5:00 PM, 7:30 PM", "Duration: 45 minutes", "Reach 30 mins before showtime"] },
      { type: "heading", content: "Pros" },
      { type: "list", items: ["Great for kids and families", "Indoor venue — weather-proof", "Affordable vs other Phuket attractions"] },
      { type: "heading", content: "Cons" },
      { type: "list", items: ["Short duration (45 mins)", "Photography restricted during show", "May feel limited for adventure seekers"] },
      { type: "tip-box", content: "Pair the dolphin show with Big Buddha or Phuket City Tour the same day to get full value from your transfer." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Worth it for couples and families — easy, comfortable, and a fun cultural break between island days. Skip if you only want adventure activities." },
    ]}
    relatedActivities={[
      { title: "Phuket Dolphin Show", link: "/thailand/phuket/dolphin-show" },
      { title: "Phuket FantaSea Show", link: "/thailand/phuket/phuket-fanta-sea-show" },
      { title: "Simon Cabaret Show", link: "/thailand/phuket/simon-cabaret-show" },
    ]}
    relatedLinks={[
      { title: "Phuket Dolphin vs Safari World Bangkok", link: "/thailand/phuket/destination-guides/comparison/phuket-dolphin-show-vs-safari-world-bangkok" },
      { title: "Phuket City vs Island Tour", link: "/thailand/phuket/destination-guides/comparison/phuket-city-tour-vs-island-tour" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do" },
    ]}
      internalLinks={getPhuketInternalLinks("/thailand/phuket/destination-guides/activity/dolphin-show-phuket")}
  />
);
export default BlogDolphinShowPhuket;
