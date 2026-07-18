import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/alcazar-show-1.jpg";

const BlogAlcazarShowPattayaGuide = () => (
  <BlogArticleLayout
    title="Alcazar Cabaret Show Pattaya: Seating, Tickets & What to Expect"
    description="Complete Alcazar Show Pattaya guide — ticket prices, seating categories, performance highlights, after-show photos and pro tips."
    heroImage={heroImg}
    heroAlt="Alcazar cabaret performers on stage in Pattaya"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="8 min read"
    category="Activity Blogs"
    keywords={[
      "alcazar show pattaya",
      "alcazar cabaret tickets",
      "alcazar show seating",
      "pattaya cabaret show review",
      "alcazar vs tiffany",
    ]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/pattaya/destination-guides#activity" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do/",
      transfersLink: "/thailand/pattaya/bangkok-airport-to-pattaya-transfer/",
    }}
    relatedActivities={[
      { title: "Coral Island Pattaya Guide 2026", link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide/" },
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide/" },
      { title: "Nong Nooch Tropical Garden Pattaya", link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide/" },
      { title: "Ramayana Water Park Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/ramayana-water-park-guide/" },
    ]}
    sections={[
      { type: "paragraph", content: "Alcazar Cabaret is one of the longest-running and most-loved evening shows in Pattaya. With elaborate costumes, international-themed performances and high-energy choreography, it's a must-do night experience — especially for first-time travelers." },
      { type: "heading", content: "Location & How to Reach" },
      { type: "list", items: [
        "Alcazar Theatre is on Pattaya 2nd Road, walking distance from most central hotels",
        "Taxi / Grab from city center: ₹150 – ₹400",
        "Most tour packages include hotel pickup and drop",
      ]},
      { type: "heading", content: "Show Timings" },
      { type: "list", items: [
        "Daily shows: 5:00 PM, 6:30 PM, 8:00 PM, 9:30 PM",
        "Each show: ~70 minutes",
        "Arrive 20–30 minutes early for seating and photos",
      ]},
      { type: "heading", content: "Ticket Categories & Prices (2026)" },
      { type: "list", items: [
        "Standard: ₹900 – ₹1,200 — back rows, decent view",
        "Deluxe: ₹1,300 – ₹1,800 — middle rows, best value",
        "VIP: ₹1,800 – ₹2,500 — front rows, immersive experience",
      ]},
      { type: "tip-box", content: "Deluxe is the sweet spot — close enough to enjoy expressions, but not so close that you miss the full stage." },
      { type: "mid-activities", destination: "pattaya", heading: "Book Pattaya Shows & Activities" },
      { type: "heading", content: "What to Expect Inside" },
      { type: "list", items: [
        "Glamorous costumes and Vegas-style stage design",
        "International-themed acts — Indian, Korean, Chinese, Thai segments",
        "Lip-sync performances by transgender (kathoey) artists",
        "Family-friendly content, no explicit material",
      ]},
      { type: "heading", content: "After-Show Photo Session" },
      { type: "paragraph", content: "Performers wait outside for photos. A 100 baht tip per photo is standard — keep small change ready." },
      { type: "heading", content: "Alcazar vs Tiffany Show" },
      { type: "list", items: [
        "Alcazar: more affordable, slightly bigger theatre, faster-paced",
        "Tiffany: more premium production, classier feel, slightly costlier",
        "Both are family-friendly and ~70 minutes long",
      ]},
      { type: "heading", content: "Who Should Attend?" },
      { type: "list", items: [
        "First-time visitors to Pattaya",
        "Couples on honeymoon",
        "Families with kids (no adult content)",
        "Group travelers wanting a fun evening",
      ]},
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: [
        "Book online — on-spot prices are 30–40% higher",
        "Avoid front-row VIP if you wear glasses (lights can dazzle)",
        "Carry small notes (₹50–₹100) for after-show photos",
        "Pair with a Coral Island day tour for a perfect Pattaya day",
      ]},
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Alcazar Cabaret Show is one of Pattaya's top evening experiences — high production quality at a very reasonable price. If you're picking only one show, Alcazar is the safest, most-loved choice." },
      { type: "cta", content: "Book Alcazar Cabaret Show tickets", link: "/thailand/pattaya/alcazar-show/", linkText: "View Tickets" },
    ]}
    relatedLinks={[
      { title: "Pattaya 3 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary/" },
      { title: "Pattaya 2 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-2-days-itinerary/" },
      { title: "Bangkok to Pattaya Transfer Guide", link: "/thailand/pattaya/destination-guides/transfer/bangkok-to-pattaya-transfer/" },
      { title: "Suvarnabhumi to Pattaya Cost & Time", link: "/thailand/pattaya/destination-guides/transfer/suvarnabhumi-to-pattaya/" },
      { title: "Explore All Pattaya Tours & Activities", link: "/thailand/pattaya/" },
    ]}
  />
);

export default BlogAlcazarShowPattayaGuide;
