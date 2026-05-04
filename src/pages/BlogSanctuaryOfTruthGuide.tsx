import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-temple-woman-1.jpg";

const BlogSanctuaryOfTruthGuide = () => (
  <BlogArticleLayout
    title="Sanctuary of Truth Pattaya: Tickets, Architecture & Visitor Guide"
    description="Complete Sanctuary of Truth visitor guide — tickets, timings, architecture, what to see, best time to visit and insider tips for first-time travelers."
    heroImage={heroImg}
    heroAlt="Sanctuary of Truth all-wooden temple at sunset, Pattaya"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={[
      "sanctuary of truth pattaya",
      "sanctuary of truth visitor guide",
      "pattaya wooden temple",
      "sanctuary of truth architecture",
      "pattaya cultural attractions",
    ]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/pattaya/destination-guides#activity" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya/bangkok-airport-to-pattaya-transfer",
    }}
    relatedActivities={[
      { title: "Sanctuary of Truth Tickets", link: "/thailand/pattaya/sanctuary-of-truth" },
      { title: "Nong Nooch Tropical Garden", link: "/thailand/pattaya/nong-nooch-garden" },
      { title: "Coral Island Speedboat Tour", link: "/thailand/pattaya/coral-island-tour" },
    ]}
    sections={[
      { type: "paragraph", content: "While Pattaya is famous for beaches and nightlife, the Sanctuary of Truth stands out as a completely different experience — a massive hand-carved wooden monument that blends art, philosophy, religion and architecture into one breathtaking structure that's still under construction." },
      { type: "heading", content: "Location & How to Reach" },
      { type: "list", items: [
        "Located at Naklua, ~15 min from central Pattaya",
        "Taxi / Grab: ₹150 – ₹400",
        "Songthaew + walk: ₹50 – ₹100",
        "Private transfer (round-trip): ₹800 – ₹1,500",
      ]},
      { type: "heading", content: "Tickets & Timings (2026)" },
      { type: "list", items: [
        "Adults: ₹1,200 – ₹1,500",
        "Children: ₹800 – ₹1,200",
        "Open: 8:00 AM – 6:00 PM (last entry ~5:00 PM)",
        "Mandatory guided tour included with entry",
      ]},
      { type: "heading", content: "Architectural Significance" },
      { type: "list", items: [
        "Height: ~105 meters",
        "Built entirely from teak and other durable woods — no nails",
        "Construction started in 1981 and is still ongoing",
        "Carvings depict Hindu and Buddhist mythology",
      ]},
      { type: "tip-box", content: "You can actually watch the wood carvers at work — this 'living museum' feel is rare and what makes Sanctuary of Truth special." },
      { type: "mid-activities", destination: "pattaya", heading: "Pair Sanctuary of Truth with These" },
      { type: "heading", content: "Best Things to Do at Sanctuary of Truth" },
      { type: "list", items: [
        "Take the guided architecture tour",
        "Watch traditional Thai dance performances",
        "Try the elephant interaction (optional, ~₹300–₹600)",
        "Boat ride for the full sea-side view (~₹300–₹600)",
        "Photography — best at golden hour",
      ]},
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: [
        "Morning visit (8 AM – 11 AM) — fewer crowds, comfortable weather",
        "Evening visit (4 PM – 6 PM) — golden hour photos, cooler temperatures",
        "Avoid mid-day during Apr–May (very hot)",
      ]},
      { type: "heading", content: "Who Should Visit?" },
      { type: "list", items: [
        "Culture and architecture lovers",
        "Photographers",
        "Travelers who want a break from beaches and nightlife",
        "Families with school-age kids",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "The Sanctuary of Truth offers a rare architectural marvel, deep cultural value and a peaceful escape from crowded tourist spots. Pair it with Coral Island (adventure) and Alcazar/Tiffany Show (evening) for a perfectly balanced Pattaya day." },
      { type: "cta", content: "Book Sanctuary of Truth tickets", link: "/thailand/pattaya/sanctuary-of-truth", linkText: "View Tickets" },
    ]}
    relatedLinks={[
      { title: "Sanctuary of Truth Ticket Price + Hidden Costs", link: "/thailand/pattaya/destination-guides/price-cost/sanctuary-of-truth-ticket-price" },
      { title: "Pattaya Activity Prices: Full List", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
    ]}
  />
);

export default BlogSanctuaryOfTruthGuide;
