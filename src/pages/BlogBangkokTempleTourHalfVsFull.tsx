import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-temples-sunset-river.jpg";

const BlogBangkokTempleTourHalfVsFull = () => (
  <BlogArticleLayout
    /* SEO — Primary: bangkok temple tour half day or full day | Intent: Commercial */
    title="Bangkok Temple Tour: Half-Day or Full-Day? (2026)"
    description="Half-day or full-day Bangkok temple tour in 2026? Compare time, cost, energy and coverage to pick the right format for your itinerary from India."
    heroImage={heroImg}
    heroAlt="Bangkok temple complex by the river at sunset"
    author="Yellodae Travel Expert"
    date="Apr 21, 2026"
    readTime="7 min read"
    category="Activity Blogs"
    keywords={[
      "bangkok temple tour half day or full day",
      "best bangkok city tour duration",
      "three temples tour vs grand palace",
      "wat pho wat arun guided tour",
      "bangkok temple tour with hotel pickup",
    ]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/bangkok/destination-guides#activity" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do/",
      transfersLink: "/thailand/bangkok/temple-tour-airport/",
    }}
    sections={[
      {
        type: "paragraph",
        content:
          "Bangkok has dozens of temples, but most travelers cover the big three in a single guided tour. Should you book a half-day or full-day version? Here's a clear comparison so you choose right.",
      },
      { type: "heading", content: "Half-Day Tour Breakdown" },
      {
        type: "list",
        items: [
          "Duration: 3–4 hours",
          "Covers: 2–3 major temples (typically Wat Pho + Wat Arun)",
          "Pros: time-efficient, less tiring, easy on hot days",
          "Cons: skips deeper sites like Wat Traimit / Grand Palace",
        ],
      },
      { type: "heading", content: "Full-Day Tour Breakdown" },
      {
        type: "list",
        items: [
          "Duration: 7–8 hours",
          "Covers: Grand Palace + Wat Phra Kaew + Wat Pho + Wat Arun + extras",
          "Pros: complete cultural experience, deeper guidance",
          "Cons: physically tiring, full sun exposure",
        ],
      },
      { type: "tip-box", content: "Pick half-day if you have other Bangkok plans the same day. Pick full-day if temples are your main interest or it's your only Bangkok day." },
      { type: "heading", content: "Who Should Pick Which?" },
      {
        type: "list",
        items: [
          "First-time visitors with 2+ Bangkok days → Half-day",
          "History and culture lovers → Full-day",
          "Families with kids → Half-day (then pool / mall)",
          "Photographers → Full-day (golden hour at Wat Arun)",
        ],
      },
      { type: "mid-activities", destination: "bangkok", heading: "Book a Temple Tour" },
      { type: "heading", content: "Expert Tips" },
      {
        type: "list",
        items: [
          "Start early morning — coolest, fewest crowds",
          "Wear modest clothing — shoulders and knees covered",
          "Carry water and a hat — heat is intense by 11 AM",
          "Pair with a Chao Phraya cruise for the best evening",
        ],
      },
      { type: "heading", content: "Final Verdict" },
      {
        type: "paragraph",
        content:
          "There's no universal best — it depends on your trip length and energy. If you're unsure, half-day is the safer choice. You can always add Wat Arun by sunset cruise the same evening.",
      },
      {
        type: "cta",
        content: "Choose your perfect Bangkok temple experience",
        link: "/thailand/bangkok/things-to-do/",
        linkText: "See All Temple Tours",
      },
    ]}
    relatedActivities={[
      { title: "Wat Arun Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide/" },
      { title: "Grand Palace Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide/" },
      { title: "Mahanakhon Skywalk Tickets Guide", link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide/" },
      { title: "Safari World Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide/" },
    ]}
    relatedLinks={[
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary/" },
      { title: "Bangkok 2 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-2-day-itinerary/" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer/" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer/" },
      { title: "Explore All Bangkok Tours & Activities", link: "/thailand/bangkok/" },
    ]}
  />
);

export default BlogBangkokTempleTourHalfVsFull;
