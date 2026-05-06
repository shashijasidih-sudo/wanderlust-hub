import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/bangkok-cruise-night-3.jpg";

const Blog = () => (
  <BlogArticleLayout
    title="Loy Krathong Festival for Indian Travelers: What You Must Know"
    description="Loy Krathong for Indians — meaning, best places, costs, what to wear, food and why it feels like Thailand's Diwali."
    heroImage={heroImg}
    heroAlt="Couple holding a krathong at night during Loy Krathong"
    author="Yellodae Travel Expert"
    date="May 6, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["Loy Krathong for Indians","Loy Krathong festival","Thailand Diwali","Yi Peng lantern festival","November Thailand festival"]}
    guidesLink="/thailand/koh-samui/destination-guides"
    guidesLabel="Koh Samui Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/koh-samui/destination-guides#activity" }}
    cityHub={{ city: "Koh Samui", thingsToDoLink: "/thailand/koh-samui/things-to-do", transfersLink: "/thailand/koh-samui" }}
    sections={[
      { type: "paragraph", content: "Loy Krathong is Thailand's most beautiful and spiritual celebration — often compared to Diwali due to its connection with light, positivity and renewal. For Indian travelers visiting in November, it's a unique cultural experience that blends tradition, romance and stunning visuals." },
      { type: "heading", content: "What is Loy Krathong?" },
      { type: "paragraph", content: "Celebrated on the full moon night of the 12th lunar month. 'Loy' means to float, 'Krathong' means decorated basket. People float krathongs in rivers to let go of negativity, pray for good fortune and show gratitude to the water goddess." },
      { type: "heading", content: "Best Places to Celebrate" },
      { type: "subheading", content: "1. Bangkok" },
      { type: "list", items: ["Chao Phraya River","Dinner cruises (most popular for tourists)"] },
      { type: "subheading", content: "2. Chiang Mai" },
      { type: "list", items: ["Lantern festival (Yi Peng)","Magical sky lanterns"] },
      { type: "subheading", content: "3. Phuket & Krabi" },
      { type: "list", items: ["Beach celebrations","Less crowded than Bangkok"] },
      { type: "heading", content: "Why Indians Love Loy Krathong" },
      { type: "list", items: ["Similar spiritual vibe to Diwali","Perfect for couples & families","Instagram-worthy visuals","Cultural richness"] },
      { type: "heading", content: "Cost for Indian Travelers" },
      { type: "list", items: ["Street celebration: Free","Krathong: ₹50 – ₹200","Dinner cruise: ₹2,500 – ₹6,000","Lantern release: ₹300 – ₹1,000"] },
      { type: "mid-activities", destination: "thailand", heading: "Plan Your Loy Krathong Trip" },
      { type: "heading", content: "What to Expect" },
      { type: "list", items: ["Floating krathongs released into rivers","Cultural performances — Thai dance and traditional music","Lantern releases (Chiang Mai) — thousands of lanterns light the sky"] },
      { type: "heading", content: "What to Wear & Eat" },
      { type: "list", items: ["Traditional Thai outfits (optional)","Light, modest clothing","Comfortable footwear","Vegetarian street food and Indian restaurants in major cities"] },
      { type: "heading", content: "Important Tips" },
      { type: "list", items: ["Book cruises early — high demand","Respect local traditions","Use eco-friendly krathongs only"] },
      { type: "heading", content: "Mistakes to Avoid" },
      { type: "list", items: ["Booking last minute","Ignoring crowd management","Not checking weather"] },
      { type: "heading", content: "Best Time to Attend" },
      { type: "list", items: ["Evening: 6 PM onwards","Peak: 7 PM – 10 PM"] },
      { type: "tip-box", content: "Loy Krathong is considered a romantic festival — perfect for honeymooners. For Indian travelers, it offers a rare chance to experience Thailand's spiritual side, completely different from its party image." },
      { type: "cta", content: "Book the White Orchid Loy Krathong cruise", link: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival", linkText: "Reserve Now" },
    ]}
    relatedActivities={[
      { title: "White Orchid Loy Krathong Cruise Guide", link: "/thailand/koh-samui/destination-guides/activity/white-orchid-river-cruise-loy-krathong-festival-guide" },
      { title: "First-Time Full Moon Party Beginner Guide", link: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide" },
      { title: "What Happens at a Full Moon Party", link: "/thailand/koh-samui/destination-guides/activity/what-happens-at-full-moon-party-thailand" },
      { title: "Full Moon Party Guide for Indians", link: "/thailand/koh-samui/destination-guides/activity/full-moon-party-thailand-guide-for-indians" },
    ]}
    relatedLinks={[
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Pattaya 3 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer" },
      { title: "Explore All Koh Samui Tours & Activities", link: "/thailand/koh-samui" },
    ]}
  />
);
export default Blog;
