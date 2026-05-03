import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-3day-itinerary.jpg";

const BlogBangkok3DayItinerary = () => (
  <BlogArticleLayout
    title="Bangkok 3-Day Itinerary 2026: The Perfect First-Time Plan"
    description="Our most-followed 3-day Bangkok itinerary — temples, cruise, Safari World and Mahanakhon Skywalk, balanced perfectly with shopping and food."
    heroImage={heroImg}
    heroAlt="Bangkok temple lit at night with dinner cruise on Chao Phraya"
    author="Yellodae Travel Expert"
    date="May 4, 2026"
    readTime="10 min read"
    category="Itinerary Blogs"
    keywords={["Bangkok 3 day itinerary","Bangkok first trip","3 days Bangkok","Bangkok travel plan","Bangkok itinerary India"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Itinerary Guides", link: "/thailand/bangkok/destination-guides#itinerary" }}
    cityHub={{ city: "Bangkok", thingsToDoLink: "/thailand/bangkok/things-to-do" }}
    sections={[
      { type: "paragraph", content: "Three days is the sweet spot for a first Bangkok trip — long enough to cover the headline attractions, short enough to keep the energy high. This is the exact 3-day Bangkok itinerary we've refined over hundreds of bookings, designed for the typical Indian first-timer who wants temples, a Chao Phraya cruise, family-friendly fun and shopping without burning out. You'll hit the Grand Palace, Wat Arun, Wat Pho, Mahanakhon Skywalk, Safari World and an evening cruise — plus enough food stops to keep everyone happy. Save it, book it, follow it." },
      { type: "heading", content: "Day 1: Cultural Bangkok (Temples & Cruise)" },
      { type: "paragraph", content: "Start at the Grand Palace by 8:30 AM, walk to Wat Pho for the Reclining Buddha, then cross by ferry to Wat Arun. Riverside lunch at Eagle Nest. Afternoon nap at the hotel. Board the Chao Phraya Princess Dinner Cruise at 7 PM for a 2-hour glide past lit-up monuments. Day 1 covers Bangkok's three biggest cultural icons in one looped route — extremely efficient and zero backtracking." },
      { type: "heading", content: "Day 2: Family & Adventure (Safari World)" },
      { type: "paragraph", content: "Hire a private cab at 8 AM to Safari World (45 minutes from central Bangkok). Spend the full day inside — drive-through African safari in the morning, lunch break, then the marine park with dolphin show, sea lion show, orangutan show and stunt show in the afternoon. Return by 5 PM. Dinner at Terminal 21 or Asok food court. Early sleep, big day tomorrow." },
      { type: "heading", content: "Day 3: Modern Bangkok (Skywalk & Shopping)" },
      { type: "paragraph", content: "Morning at Mahanakhon Skywalk for 360° city views. BTS to Siam — explore Siam Paragon (don't miss Sea Life Aquarium), Siam Center, and MBK. Lunch at Som Tam Nua. Afternoon shopping at Platinum Fashion Mall for cheap clothes or Pratunam if you want to bargain hard. Evening sunset drink at Vertigo, Banyan Tree, or stroll Asiatique Riverfront for last-minute souvenirs." },
      { type: "tip-box", content: "Book the Chao Phraya Princess cruise + Safari World combo online with Yellodae and save approximately 15–20% versus counter prices, plus skip the queues entirely." },
      { type: "mid-activities", destination: "bangkok", heading: "Plan Your Bangkok Activities" },
      { type: "heading", content: "Where to Stay (3-Day Plan)" },
      { type: "paragraph", content: "Sukhumvit area (Asok / Nana / Phrom Phong) is unbeatable. You're 1 BTS stop from every shopping mall, riverside attractions are 25 minutes by ferry, and the airport is 30–40 minutes by train. Recommended hotels: Aloft Sukhumvit 11, Holiday Inn Express Sukhumvit, Hyatt Place Sukhumvit 24 — all under ₹6,500/night." },
      { type: "heading", content: "Daily Budget Breakdown (Per Person)" },
      { type: "paragraph", content: "Plan for ₹4,500–6,500 per person per day for a comfortable mid-range Bangkok trip — that includes hotel share, all meals, all activities, all transport and a little shopping money. Budget travelers can do it for ₹3,000/day with hostel stays and street food. Luxury travelers should plan ₹12,000+/day for 5-star hotels and fine-dining." },
      { type: "heading", content: "Pro Tips for the Best 3 Days" },
      { type: "paragraph", content: "Pre-book your dinner cruise and Safari World online — both sell out 24–48 hours ahead. Use the BTS Skytrain whenever possible; taxis without meters will overcharge. Carry small change (20-baht notes) for ferries and street food. Never accept tuk-tuk \"gem shop\" tours — classic tourist scam. Drink only bottled water." },
      { type: "list", items: ["Day 1: Grand Palace + Wat Pho + Wat Arun + Dinner Cruise","Day 2: Safari World full-day with marine shows","Day 3: Mahanakhon Skywalk + Siam shopping + Asiatique","Stay in Sukhumvit, use BTS + pre-booked tours"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Three days, three completely different sides of Bangkok — culture, family adventure and modern city. This itinerary is balanced, well-paced and tested by hundreds of Indian families and couples. You'll leave with full memory cards, full stomachs and a deep urge to come back for more. Add Pattaya or Phuket on the back end if you have an extra 4 nights, but as a standalone trip these 3 days will absolutely satisfy." },
      { type: "cta", content: "Plan your Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok Tours" }
    ]}
  />
);

export default BlogBangkok3DayItinerary;
