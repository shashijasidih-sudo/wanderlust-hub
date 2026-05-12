import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-boat-tour-1.jpg";

const BlogKrabi5DaysItinerary = () => (
  <BlogArticleLayout
    title="5 Days Krabi Itinerary with Phi Phi Islands (2026 Complete Guide)"
    description="Best 5-day Krabi + Phi Phi itinerary — 4 Island Tour, Maya Bay, Hong Island, jungle and INR budget tailored for Indian travelers."
    heroImage={heroImg}
    heroAlt="Speedboat cruising past limestone cliffs near Phi Phi Islands"
    author="Yellodae Travel Expert"
    date="May 9, 2026"
    readTime="11 min read"
    category="Itinerary Blogs"
    keywords={["5 days krabi itinerary","krabi phi phi itinerary","krabi 5 day plan","krabi itinerary indian travelers","krabi trip plan 2026"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/krabi/destination-guides#itinerary" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Planning a slightly longer Krabi trip and want to include the world-famous Phi Phi Islands? This 5-day Krabi itinerary is the perfect balance of island hopping, scenic beaches, adventure and relaxation — without feeling rushed. Optimized for Indian travelers with smooth logistics, budget control and maximum experiences." },
      { type: "heading", content: "Quick Overview (5 Days Plan)" },
      { type: "list", items: ["Day 1 — Arrival + Ao Nang + Night Market","Day 2 — 4 Island Tour","Day 3 — Phi Phi Islands Tour","Day 4 — Hong Island / Adventure Day","Day 5 — Jungle Tour + Departure"] },
      { type: "heading", content: "Day 1: Arrival + Ao Nang Exploration" },
      { type: "paragraph", content: "Land at Krabi Airport, transfer to Ao Nang (30–40 min) and check in. Best base: Ao Nang (central + budget-friendly). Afternoon — walk along Ao Nang Beach, enjoy cafes and try local coconut drinks. Evening — Ao Nang Night Market for Pad Thai, pancakes and souvenir shopping." },
      { type: "heading", content: "Day 2: 4 Island Tour (Best Intro to Krabi)" },
      { type: "paragraph", content: "Highlights — Phra Nang Cave Beach, Chicken Island, Tup Island sandbar and Poda Island. Activities — snorkeling, swimming and beach hopping. Tips — start early (7–8 AM), choose speedboat for comfort, carry sunscreen. Return by 3–4 PM, relax or spa session, dinner near beach." },
      { type: "heading", content: "Day 3: Phi Phi Islands Tour (Main Highlight)" },
      { type: "paragraph", content: "Phi Phi Islands are one of the most iconic destinations in Thailand. Key stops — Maya Bay, Pileh Lagoon, Viking Cave and Phi Phi Don. Activities — snorkeling, swimming, photography. Tips — sit at the back of the speedboat (less bumpy), carry motion-sickness medicine, start early. Return by 4–5 PM, relax and enjoy a quiet dinner." },
      { type: "cta", content: "Book the most popular Phi Phi Islands tour from Krabi", link: "/thailand/krabi/things-to-do", linkText: "Book Phi Phi Tour" },
      { type: "heading", content: "Day 4: Hong Island OR Adventure Day" },
      { type: "paragraph", content: "Option 1 (Highly Recommended): Hong Island — Hong Lagoon, calm waters, viewpoint hike and a less crowded experience. Option 2: Adventure — rock climbing at Railay, beach hopping. Evening — sunset at Railay Beach, return to Ao Nang and explore cafes." },
      { type: "heading", content: "Day 5: Jungle Tour + Departure" },
      { type: "paragraph", content: "Morning Jungle Tour — Emerald Pool, Hot Springs and optional Tiger Cave Temple. A unique inland experience to wrap up the trip. Afternoon — return to hotel, pack and head to the airport." },
      { type: "heading", content: "Budget Breakdown (5 Days)" },
      { type: "list", items: ["Budget Traveler — ₹35,000–₹55,000 (excluding flights)","Mid-Range Traveler — ₹50,000–₹90,000"] },
      { type: "heading", content: "Best Time to Visit" },
      { type: "list", items: ["November–April → best weather","May–October → budget-friendly"] },
      { type: "heading", content: "What to Pack" },
      { type: "list", items: ["Swimwear","Sunscreen","Flip-flops","Waterproof bag","Light clothing"] },
      { type: "heading", content: "Pro Tips (Very Important)" },
      { type: "list", items: ["Stay in Ao Nang as your central base","Book Phi Phi + 4 Island tours in advance","Start early to beat crowds","Carry cash for park fees"] },
      { type: "heading", content: "Who Is This For?" },
      { type: "list", items: ["Couples","Families","Friends & groups","Travelers wanting the full Krabi experience"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "This 5-day Krabi itinerary with Phi Phi Islands is one of the most complete travel plans you can follow — all major island tours, scenic beaches, adventure plus relaxation and a perfect pace." },
      { type: "cta", content: "Plan your full Krabi trip with curated activities", link: "/thailand/krabi/things-to-do", linkText: "Explore Krabi Tours" },
    ]}
    relatedActivities={[
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Hong Island Tour from Krabi", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi Airport Transfers", link: "/thailand/krabi/budget-airport-transfers" },
    ]}
    relatedLinks={[
      { title: "4 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-4-days-itinerary" },
      { title: "3 Days Krabi Itinerary", link: "/thailand/krabi/destination-guides/itinerary/krabi-3-days-itinerary" },
      { title: "Krabi Honeymoon Itinerary (5 Days)", link: "/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary" },
      { title: "Phuket + Krabi Combo Itinerary", link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
      { title: "Best Phi Phi Island Tours", link: "/thailand/phuket/destination-guides/activity/best-phi-phi-island-tours" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary")}
  />
);

export default BlogKrabi5DaysItinerary;
