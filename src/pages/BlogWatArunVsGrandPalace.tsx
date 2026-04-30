import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-wat-arun-vs-grand-palace.jpg";

const BlogWatArunVsGrandPalace = () => (
  <BlogArticleLayout
    title="Wat Arun vs Grand Palace: Which Bangkok Temple Is Worth Your Time?"
    description="If you only have time for one — Wat Arun or Grand Palace? Compare history, cost, photos, dress code and crowds in this 2026 Bangkok guide."
    heroImage={heroImg}
    heroAlt="Wat Arun Temple of Dawn next to Grand Palace Bangkok at sunset"
    author="Yellodae Travel Expert"
    date="Apr 29, 2026"
    readTime="7 min read"
    category="Comparison Blogs"
    keywords={["Wat Arun vs Grand Palace", "Bangkok temples", "best temple Bangkok", "Grand Palace tickets", "Wat Arun review"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    cityHub={{ city: "Bangkok", thingsToDoLink: "/thailand/bangkok/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Bangkok has 400+ temples but two stand out — Wat Arun (Temple of Dawn) and the Grand Palace. If you only have one morning, which should you pick? Here's the head-to-head comparison." },
      { type: "heading", content: "Ticket Price" },
      { type: "list", items: [
        "Wat Arun: ~100 THB",
        "Grand Palace: ~500 THB (includes Wat Phra Kaew & Emerald Buddha)",
        "Grand Palace is 5x pricier but covers multiple sites",
      ]},
      { type: "heading", content: "What You'll See" },
      { type: "list", items: [
        "Wat Arun: a single iconic riverside spire (78m), great for photos",
        "Grand Palace: massive complex, royal halls, Emerald Buddha, murals",
        "Grand Palace = 2–3 hours; Wat Arun = 1–1.5 hours",
      ]},
      { type: "heading", content: "Crowds" },
      { type: "list", items: [
        "Wat Arun: moderate crowd, peaks at sunset",
        "Grand Palace: very crowded by 10 AM, expect queues",
        "Tip: visit Grand Palace at opening (8:30 AM)",
      ]},
      { type: "tip-box", content: "Smart move: visit Grand Palace in the morning, then take the river ferry to Wat Pho and Wat Arun in the afternoon — all three covered in one day." },
      { type: "heading", content: "Dress Code" },
      { type: "list", items: [
        "Both require shoulders & knees covered",
        "Grand Palace is strictest — no see-through, no leggings",
        "Wat Arun more flexible; sarongs available at entry",
      ]},
      { type: "mid-activities", destination: "bangkok", heading: "Book a Combined Temple Tour" },
      { type: "heading", content: "Best For Photography" },
      { type: "list", items: [
        "Wat Arun: best at sunset (golden hour reflection)",
        "Grand Palace: best mid-morning (clear sky, golden spires)",
        "Photo hack: shoot Wat Arun from across the river",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Pick the Grand Palace if it's your only Bangkok day — it's a complete cultural experience. Pick Wat Arun if you've already seen Grand Palace before, or if you want fewer crowds and the most photogenic temple. Best answer? Do both — they're 10 minutes apart by ferry." },
      { type: "cta", content: "See both on a guided tour", link: "/thailand/bangkok/three-temples-tour-with-transfer", linkText: "Book Three Temples Tour" },
    ]}
    relatedActivities={[
      { title: "Three Temples Tour with Transfer", link: "/thailand/bangkok/three-temples-tour-with-transfer" },
      { title: "Grand Palace + Emerald Buddha Tour", link: "/thailand/bangkok/grand-palace-emerald-buddha-tour" },
      { title: "Wat Arun, Wat Pho & Golden Buddha Tour", link: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour" },
    ]}
    relatedLinks={[
      { title: "Wat Arun Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide" },
      { title: "Grand Palace Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide" },
      { title: "Half-Day vs Full-Day Temple Tour", link: "/thailand/bangkok/destination-guides/activity/bangkok-temple-tour-half-vs-full-day" },
    ]}
  />
);

export default BlogWatArunVsGrandPalace;
