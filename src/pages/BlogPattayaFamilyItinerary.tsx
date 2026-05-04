import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-lake-tour-1.jpg";

const BlogPattayaFamilyItinerary = () => (
  <BlogArticleLayout
    title="Pattaya Family Itinerary 2026: 4 Days Plan with Kids"
    description="A kid-friendly 4-day Pattaya family itinerary — Coral Island, Nong Nooch, Ramayana Water Park, Underwater World and safe family-friendly hotels."
    heroImage={heroImg}
    heroAlt="Family enjoying a boat tour and water activities in Pattaya"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["Pattaya family itinerary","Pattaya with kids","Pattaya family trip","Ramayana water park family","Nong Nooch with kids"]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/pattaya/destination-guides#itinerary" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya",
    }}
    sections={[
      { type: "paragraph", content: "Pattaya gets a wild reputation, but for families it's actually one of the easiest and best-value international destinations from India. Stay on the Jomtien side, skip the late-night areas, and you'll find a city built for kids — Ramayana water park, Underwater World aquarium, Nong Nooch elephant shows, gentle Coral Island water sports and dozens of Indian-friendly restaurants. Here's a tested 4-day family plan." },
      { type: "heading", content: "Quick Overview" },
      { type: "list", items: ["Day 1: Arrival + light beach evening","Day 2: Coral Island (kid-safe water sports)","Day 3: Nong Nooch + Underwater World","Day 4: Ramayana Water Park + departure"] },
      { type: "heading", content: "Day 1: Arrival + Beach Evening" },
      { type: "paragraph", content: "Transfer from Bangkok (1.5–2 hours). Stay in Jomtien Beach (quiet, family-friendly) or Central Pattaya (convenience). Hotels: budget ₹2,000–₹4,000, mid-range ₹4,000–₹8,000, luxury ₹8,000+. Lunch at an Indian restaurant, then a relaxed Jomtien beach evening." },
      { type: "heading", content: "Day 2: Coral Island Family Day" },
      { type: "paragraph", content: "Speedboat to Coral Island. Stick to safe activities — banana boat (great for kids), beach play, light swimming. Skip parasailing and jet ski for younger children. Buffet lunch is included in most family packages. Back to Pattaya by 4 PM." },
      { type: "tip-box", content: "Choose a family-package Coral Island tour with shaded beach beds and a private cabana — totally worth the ₹500–₹1000 extra when traveling with small kids." },
      { type: "mid-activities", destination: "pattaya", heading: "Family-Friendly Pattaya Activities" },
      { type: "heading", content: "Day 3: Nong Nooch + Underwater World" },
      { type: "paragraph", content: "Morning: Nong Nooch Tropical Garden (30–40 min from Pattaya, entry ₹800–₹1,500). Kids love the elephant show, Thai cultural show and the skywalk. Afternoon: Underwater World Pattaya — tunnel walk, shark feeding, touch pool. A perfect aquarium for kids 3–12." },
      { type: "heading", content: "Day 4: Ramayana Water Park + Departure" },
      { type: "paragraph", content: "Ramayana is the best water park in Pattaya — slides, lazy river, wave pool and dedicated kid zones. Spend the morning + early afternoon, then late lunch and transfer back to Bangkok for the return flight." },
      { type: "heading", content: "Family Trip Budget (3–5 Days, 2 adults + 2 kids)" },
      { type: "list", items: ["Hotels (4 nights): ₹16,000–₹32,000","Food: ₹8,000","Activities + tickets: ₹15,000","Transfers: ₹6,000","Total (excluding flights): ₹45,000–₹65,000"] },
      { type: "heading", content: "Where to Stay with Kids" },
      { type: "list", items: ["Jomtien Beach — quiet, less crowded, family-friendly","Central Pattaya — convenient, walking distance to malls","Avoid Walking Street area when traveling with children"] },
      { type: "heading", content: "Pattaya vs Phuket for Families" },
      { type: "paragraph", content: "Pattaya wins on cost, drive (no domestic flight), and dedicated kid attractions (Ramayana, Underwater World, Nong Nooch). Phuket wins on beaches and resort quality. For Indian families on a 4–5 day budget trip, Pattaya is the smarter pick." },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Pattaya is a fantastic family destination if you stay on the Jomtien side and follow this plan. You'll cover the four big kid attractions, eat well, swim a lot and come back well within budget. Add 1 day for Bangkok shopping at the start if you have a 5-day trip." },
      { type: "cta", content: "Plan your Pattaya family trip", link: "/thailand/pattaya/things-to-do", linkText: "Explore Family Tours" }
    ]}
    relatedActivities={[
      { title: "Coral Island Family Tour", link: "/thailand/pattaya/coral-island-tour" },
      { title: "Nong Nooch Tropical Garden", link: "/thailand/pattaya/nong-nooch-tropical-garden" },
      { title: "Underwater World Pattaya", link: "/thailand/pattaya/underwater-world" },
      { title: "Ramayana Water Park", link: "/thailand/pattaya/ramayana-water-park" },
    ]}
    relatedLinks={[
      { title: "Ramayana vs Cartoon Network Water Park", link: "/thailand/pattaya/destination-guides/comparison/ramayana-vs-cartoon-network-water-park" },
      { title: "Pattaya 3 Days Itinerary", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary" },
      { title: "Pattaya Trip Cost from India", link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost" },
      { title: "All Pattaya Things to Do", link: "/thailand/pattaya/things-to-do" },
    ]}
  />
);

export default BlogPattayaFamilyItinerary;
