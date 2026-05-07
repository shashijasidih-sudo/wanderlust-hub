import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/james-bond-island-hero.jpg";

const BlogJamesBondIslandTour = () => (
  <BlogArticleLayout
    title="James Bond Island Tour from Phuket: Complete Experience Guide (2026)"
    description="James Bond Island & Phang Nga Bay 2026 — speedboat vs big boat, sea canoeing, Koh Panyee floating village, cost in INR and pro tips."
    heroImage={heroImg}
    heroAlt="James Bond Island Phang Nga Bay Phuket"
    author="Yellodae Travel Expert"
    date="May 7, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["james bond island tour", "phang nga bay phuket", "sea canoe phuket", "koh panyee floating village"]}
    guidesLink="/thailand/phuket/destination-guides"
    guidesLabel="Phuket Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/phuket/destination-guides#activity" }}
    cityHub={{ city: "Phuket", thingsToDoLink: "/thailand/phuket/things-to-do", transfersLink: "/thailand/phuket/transfers" }}
    sections={[
      { type: "paragraph", content: "The James Bond Island tour from Phuket is the most scenic day trip in the Andaman — towering limestone karsts, hidden sea caves, the famous Koh Tapu, sea canoeing, and lunch at Koh Panyee floating village." },
      { type: "heading", content: "Tour Options" },
      { type: "list", items: [
        "Speedboat (most popular): 1 hr each way, more stops, smaller groups",
        "Big boat (budget): 2–3 hrs, comfortable, family-friendly",
        "Private charter: customizable, premium pricing",
      ]},
      { type: "cta", content: "Book a James Bond Island speedboat day from Phuket", link: "/thailand/phuket/james-bond-island-tour-with-transfer", linkText: "Book James Bond Tour" },
      { type: "heading", content: "Typical Itinerary" },
      { type: "list", items: [
        "7:00–8:00 AM — Hotel pickup",
        "9:00 AM — Depart for Phang Nga Bay",
        "10:30 AM — Sea canoeing inside lagoons",
        "12:30 PM — Lunch at Koh Panyee floating village",
        "2:30 PM — James Bond Island (Koh Tapu) photo stop",
        "5:00 PM — Return to Phuket",
      ]},
      { type: "heading", content: "Sea Canoe Experience" },
      { type: "paragraph", content: "Trained local paddlers navigate canoes through sea caves and hidden hongs (lagoons) — no experience needed, you just sit back and enjoy." },
      { type: "tip-box", content: "Phang Nga Bay is far calmer than the open Andaman — perfect for travelers who get seasick on Phi Phi speedboats." },
      { type: "heading", content: "Cost for Indian Travelers" },
      { type: "list", items: ["Speedboat tour: ₹3,500 – ₹6,000", "Big boat: ₹2,000 – ₹3,500", "National Park fee: ~₹900", "Total budget: ₹4,000 – ₹7,000"] },
      { type: "heading", content: "James Bond vs Phi Phi" },
      { type: "list", items: ["James Bond = scenic + cultural + calm waters", "Phi Phi = beaches + snorkeling + iconic Maya Bay"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "James Bond Island is a must-do for first-timers, families and anyone who wants stunning scenery without rough seas. Pair with Phi Phi the next day for the complete Phuket island experience." },
    ]}
    relatedActivities={[
      { title: "James Bond Island Tour", link: "/thailand/phuket/james-bond-island-tour-with-transfer" },
      { title: "Phi Phi Speedboat Tour", link: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
      { title: "Phuket City Tour", link: "/thailand/phuket/phuket-city-tour" },
    ]}
    relatedLinks={[
      { title: "James Bond vs Phi Phi", link: "/thailand/phuket/destination-guides/comparison/james-bond-island-vs-phi-phi-island" },
      { title: "Speedboat vs Big Boat", link: "/thailand/phuket/destination-guides/comparison/phi-phi-speedboat-vs-big-boat" },
      { title: "Explore All Phuket Tours", link: "/thailand/phuket/things-to-do" },
    ]}
  />
);
export default BlogJamesBondIslandTour;
