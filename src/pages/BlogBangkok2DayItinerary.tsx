import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-2day-itinerary.jpg";

const BlogBangkok2DayItinerary = () => (
  <BlogArticleLayout
    title="Bangkok 2-Day Itinerary 2026: Perfect Short Trip Plan"
    description="A tested 2-day Bangkok itinerary covering the Grand Palace, Wat Arun, dinner cruise, shopping and rooftop bars — perfect for a quick weekend."
    heroImage={heroImg}
    heroAlt="Traveler looking at Bangkok skyline at sunset planning itinerary"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="10 min read"
    category="Itinerary Blogs"
    keywords={["Bangkok 2 day itinerary","Bangkok weekend trip","Bangkok short trip","Bangkok 48 hours","Bangkok travel plan"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/bangkok/destination-guides#itinerary" }}
    cityHub={{ city: "Bangkok", thingsToDoLink: "/thailand/bangkok/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Only 48 hours in Bangkok? You can still cover the city's biggest icons, eat phenomenally well, shop till midnight and end with a rooftop view that will live rent-free in your head forever. The trick is sequencing — start cultural and west-side, end commercial and east-side, and never schedule more than two big things in a single half-day. This 2-day Bangkok itinerary is the exact plan we've handed to hundreds of short-trip travelers from India, and it works whether you're flying in for a weekend break or stopping over en route to Phuket. Read on for a minute-by-minute plan that respects Bangkok traffic, your stomach and your jet lag." },
      { type: "heading", content: "Day 1 Morning: Grand Palace & Wat Pho" },
      { type: "paragraph", content: "Start early — be at the Grand Palace by 8:30 AM when it opens. Crowds triple by 10 AM and the Bangkok heat becomes brutal. Spend 2 hours here exploring the Emerald Buddha, the throne halls and the murals. From the Grand Palace, walk 10 minutes to Wat Pho to see the Reclining Buddha. Together they form Bangkok's holiest cultural duo and you'll have ticked two bucket-list sights before lunch." },
      { type: "heading", content: "Day 1 Afternoon: Wat Arun & Riverside Lunch" },
      { type: "paragraph", content: "Cross the Chao Phraya by ferry (4 baht) to Wat Arun — the Temple of Dawn. Climb the central prang for sweeping river views. Lunch at one of the riverside cafés with Wat Arun in the background. Try The Deck or Eagle Nest for a memorable mid-day meal. Head back to the hotel for a 2-hour nap because you'll be out late tonight." },
      { type: "heading", content: "Day 1 Evening: Chao Phraya Dinner Cruise" },
      { type: "paragraph", content: "Board the Chao Phraya Princess at Asiatique Pier by 7:00 PM. The 2-hour cruise glides past Wat Arun, the Grand Palace and Bangkok's lit-up skyline while you eat a Thai-international buffet. Live music, Thai dance performances and unbeatable photos. Reach hotel by 11 PM and crash." },
      { type: "tip-box", content: "Pre-book Grand Palace skip-the-line and your Chao Phraya cruise online before flying — both sell out 1–2 days in advance during peak season (Nov–Feb)." },
      { type: "mid-activities", destination: "bangkok", heading: "Plan Your Bangkok Activities" },
      { type: "heading", content: "Day 2 Morning: Mahanakhon Skywalk" },
      { type: "paragraph", content: "Start day 2 at the Mahanakhon Skywalk in Silom — Bangkok's highest observation deck with a glass floor 314 m above the city. Go between 10 AM and 12 PM for clear daytime views and short queues. Allow 1.5 hours including the ride up. Skip the breakfast café up top — overpriced." },
      { type: "heading", content: "Day 2 Afternoon: Shopping at MBK & Siam Paragon" },
      { type: "paragraph", content: "Take the BTS to National Stadium and start at MBK — six floors of bargain shopping with mobiles, clothes, souvenirs and a top-floor food court. Walk to Siam Paragon for premium brands, the Sea Life Aquarium and the famous Gourmet Market food hall. Late lunch at Som Tam Nua (Soi 5) — Michelin-recommended Isaan food that is genuinely worth the queue." },
      { type: "heading", content: "Day 2 Evening: Asiatique & Rooftop Drinks" },
      { type: "paragraph", content: "End the trip at Asiatique the Riverfront — open-air shopping village with the giant Ferris wheel and 1,500 stalls. Optional: head to Vertigo at Banyan Tree or Sky Bar at Lebua for a final rooftop drink (yes, the Hangover 2 bar). Reach hotel by midnight and pack." },
      { type: "heading", content: "Where to Stay for a 2-Day Trip" },
      { type: "paragraph", content: "Stay in Sukhumvit (Asok or Phrom Phong BTS stations) for the best balance of restaurants, malls and easy transport. Hotels like Aloft Bangkok Sukhumvit 11, Galleria 12 or Citadines Sukhumvit 8 give you mid-range comfort under ₹4,500/night and put you 30 minutes from everything in this itinerary." },
      { type: "list", items: ["Day 1: Grand Palace + Wat Pho + Wat Arun + Dinner Cruise","Day 2: Mahanakhon Skywalk + Siam shopping + Asiatique","Stay in Sukhumvit (Asok / Phrom Phong)","Use BTS + Grab — never struggle with traffic again"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Two days in Bangkok will leave you wanting more — and that's exactly the point. This itinerary delivers the city's biggest icons (Grand Palace, Wat Arun, Mahanakhon, Chao Phraya) without any wasted travel time, plus enough food and shopping to feel like a real holiday. Tag a 3rd day if you can squeeze it for Safari World or a floating market day trip — but if 48 hours is all you have, follow this plan exactly and you'll leave Bangkok with zero regrets." },
      { type: "cta", content: "Plan your Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok Tours" }
    ]}
  />
);

export default BlogBangkok2DayItinerary;
