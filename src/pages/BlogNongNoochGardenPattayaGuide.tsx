import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-tropical-beach-1.jpg";

const BlogNongNoochGardenPattayaGuide = () => (
  <BlogArticleLayout
    title="Nong Nooch Tropical Garden Pattaya Guide: Shows, Tickets & Best Route"
    description="Complete Nong Nooch Garden Pattaya guide — entry tickets, cultural shows, elephant show, skywalk, best route, food and pro tips."
    heroImage={heroImg}
    heroAlt="Nong Nooch tropical garden landscape in Pattaya"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={[
      "nong nooch garden pattaya",
      "nong nooch tickets",
      "nong nooch elephant show",
      "nong nooch skywalk",
      "pattaya gardens guide",
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
      { title: "Nong Nooch Tropical Garden Tour", link: "/thailand/pattaya/nong-nooch-garden" },
      { title: "Sanctuary of Truth Tickets", link: "/thailand/pattaya/sanctuary-of-truth" },
      { title: "Coral Island Speedboat Tour", link: "/thailand/pattaya/coral-island-tour" },
    ]}
    sections={[
      { type: "paragraph", content: "Nong Nooch Tropical Botanical Garden is one of Pattaya's most family-friendly attractions — a 500-acre property packed with themed gardens, cultural shows, an elephant show, a skywalk and dining options. Plan a half-day to do it justice." },
      { type: "heading", content: "Location & How to Reach" },
      { type: "list", items: [
        "Located ~18–20 km from central Pattaya",
        "Taxi / Grab: ₹400 – ₹800 one way",
        "Most tour packages include round-trip transfer + guide",
      ]},
      { type: "heading", content: "Opening Hours" },
      { type: "list", items: [
        "Daily: 8:00 AM – 6:00 PM",
        "Cultural Show: 11:00 AM, 3:30 PM",
        "Elephant Show: right after the cultural show",
      ]},
      { type: "heading", content: "What Makes Nong Nooch Special" },
      { type: "list", items: [
        "Themed gardens — French, Stonehenge, Cactus, Topiary",
        "Cultural Thai dance and martial arts show",
        "Elephant show with painting and football",
        "Elevated skywalk with panoramic garden views",
        "Buffet lunch options inside the property",
      ]},
      { type: "mid-activities", destination: "pattaya", heading: "Book Nong Nooch & Pattaya Activities" },
      { type: "heading", content: "Ticket Prices (2026)" },
      { type: "list", items: [
        "Garden + Show + Elephant Show: ₹1,200 – ₹1,800",
        "Garden + Show + Lunch: ₹1,500 – ₹2,200",
        "Skywalk add-on: ₹400 – ₹600",
        "Combo with transport: ₹1,800 – ₹2,800",
      ]},
      { type: "heading", content: "Skywalk Experience" },
      { type: "paragraph", content: "The elevated skywalk lets you walk above the gardens for sweeping panoramic views — perfect for photos and a great way to start your visit before crowds build up." },
      { type: "heading", content: "Suggested Half-Day Route" },
      { type: "list", items: [
        "9:30 AM – Arrive, take the skywalk first",
        "10:30 AM – Walk through themed gardens",
        "11:00 AM – Cultural Thai show",
        "12:00 PM – Elephant show",
        "1:00 PM – Buffet lunch on-site",
        "2:30 PM – Return to Pattaya",
      ]},
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: [
        "Visit on weekdays for fewer crowds",
        "Wear comfortable shoes — there's a lot of walking",
        "Carry water, sunscreen and a hat",
        "Book combo tickets online to save 20–30%",
      ]},
      { type: "heading", content: "Is Nong Nooch Worth It?" },
      { type: "paragraph", content: "Yes — especially for families, couples and senior travelers. Nong Nooch is one of the easiest, most enjoyable half-day experiences in Pattaya and pairs beautifully with the Sanctuary of Truth or an evening cabaret show." },
      { type: "cta", content: "Book Nong Nooch Garden tickets", link: "/thailand/pattaya/nong-nooch-garden", linkText: "View Tickets" },
    ]}
    relatedLinks={[
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide" },
      { title: "Pattaya Activity Prices: Full List", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices" },
      { title: "Pattaya 3 Days Trip Cost", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-3-days-trip-cost" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
    ]}
  />
);

export default BlogNongNoochGardenPattayaGuide;
