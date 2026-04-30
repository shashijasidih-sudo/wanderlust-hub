import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-safari-world-lions.jpg";
import giraffeImg from "@/assets/blog-giraffe-feeding.jpg";

const BlogSafariWorldGuide = () => (
  <BlogArticleLayout
    title="Safari World Bangkok Guide: Shows, Tickets & Timings (2026)"
    description="Drive-through safari, marine park, dolphin and orangutan shows, plus the famous giraffe feeding deck — plan a perfect family day at Safari World."
    heroImage={heroImg}
    heroAlt="Lions climbing on a safari vehicle inside Safari World Bangkok"
    author="Yellodae Travel Expert"
    date="Apr 23, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["Safari World Bangkok", "Safari World tickets", "Marine Park Bangkok", "Bangkok with kids", "dolphin show Bangkok"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
    }}
    sections={[
      {
        type: "paragraph",
        content:
          "Safari World Bangkok is one of the most popular family attractions in Thailand — combining a drive-through safari with a full-day marine park. Here's exactly what to expect, what's worth your time, and how to plan it.",
      },
      { type: "heading", content: "What's Inside Safari World" },
      { type: "subheading", content: "1. Safari Park (Drive-Through)" },
      {
        type: "list",
        items: [
          "Drive-through wildlife park",
          "Animals roam freely — lions, tigers, zebras, giraffes",
          "You stay inside the vehicle / coach",
        ],
      },
      { type: "subheading", content: "2. Marine Park (Shows & Walks)" },
      {
        type: "list",
        items: [
          "Dolphin Show — most popular",
          "Sea Lion Show — comedy + tricks",
          "Cowboy Stunt Show — explosions, fights, effects",
          "Orangutan Show — funny and unique",
        ],
      },
      { type: "image", src: giraffeImg, alt: "People feeding giraffes from elevated platform at Safari World" },
      { type: "heading", content: "Giraffe Feeding Deck (Don't Miss)" },
      {
        type: "paragraph",
        content:
          "The giraffe feeding terrace is the most loved activity at Safari World — stand on an elevated platform and feed giraffes face-to-face. Brings the wildest smile to kids and adults alike.",
      },
      { type: "heading", content: "Ticket Prices (2026)" },
      {
        type: "list",
        items: [
          "Safari Park only: ₹800 – ₹1,200",
          "Marine Park only: ₹1,000 – ₹1,500",
          "Combo ticket (best value): ₹1,500 – ₹2,500",
          "With private transfer: ₹3,000 – ₹4,500",
        ],
      },
      { type: "tip-box", content: "Always pick the combo + transfer combo. Safari World is ~40 km from central Bangkok — public transport isn't realistic with kids." },
      { type: "mid-activities", destination: "bangkok", heading: "Book Safari World Tickets" },
      { type: "heading", content: "Time Required" },
      {
        type: "list",
        items: [
          "Minimum: 5 hours",
          "Ideal: 6–8 hours (full-day)",
          "Not a half-day attraction",
        ],
      },
      { type: "heading", content: "Pros & Cons" },
      {
        type: "list",
        items: [
          "Pros: animal interaction, multiple shows, great for groups, best with kids",
          "Cons: far from city, can get crowded, full-day commitment",
        ],
      },
      { type: "heading", content: "Final Verdict" },
      {
        type: "paragraph",
        content:
          "Safari World is one of the best family attractions in Bangkok — pick the combo ticket, book transfers, and start early to make the most of it.",
      },
      {
        type: "cta",
        content: "Book Safari World with hotel transfer",
        link: "/thailand/bangkok/safari-world",
        linkText: "Book Safari World",
      },
    ]}
    relatedActivities={[
      { title: "Safari World Bangkok with Transfer", link: "/thailand/bangkok/safari-world" },
      { title: "Dream World Bangkok", link: "/thailand/bangkok/dream-world-bangkok" },
      { title: "Sea Life Bangkok + Madame Tussauds", link: "/thailand/bangkok/sea-life-bangkok-madame-tussauds" },
    ]}
    relatedLinks={[
      { title: "Sea Life Bangkok: Is It Worth It?", link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide" },
    ]}
  />
);

export default BlogSafariWorldGuide;
