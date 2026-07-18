import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-longtail-boats-1.jpg";

const BlogKrabi4IslandTourGuide = () => (
  <BlogArticleLayout
    title="4 Island Tour Krabi Guide: What to Expect + Hidden Tips (2026)"
    description="Complete 2026 guide to the Krabi 4 Island Tour — Phra Nang, Chicken, Tup and Poda Island, longtail vs speedboat, INR cost, inclusions and insider tips."
    heroImage={heroImg}
    heroAlt="Krabi longtail boats lined up on a tropical island beach"
    author="Yellodae Travel Expert"
    date="May 16, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["4 island tour krabi","krabi 4 island guide","phra nang cave beach","tup island sandbar","krabi island hopping"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/krabi/destination-guides#activity" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do/", transfersLink: "/thailand/krabi/budget-airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "The 4 Island Tour in Krabi is one of the most iconic experiences in Thailand. It offers a perfect combination of beaches, snorkeling and scenic landscapes — all in one day. If you're planning this tour in 2026, here's everything you need to know." },
      { type: "heading", content: "What is the 4 Island Tour?" },
      { type: "paragraph", content: "The tour covers four major islands near Ao Nang — Phra Nang Cave Beach, Chicken Island, Tup Island and Poda Island. It's typically done via longtail boat or speedboat." },
      { type: "heading", content: "What to Expect" },
      { type: "list", items: ["Hotel pickup from Ao Nang or Krabi Town","Phra Nang Cave Beach — limestone cliffs, cave shrine and crystal-clear water","Chicken Island — snorkeling around the famous chicken-shaped rock","Tup Island Sandbar — walkable sandbar appears at low tide (perfect for photos)","Poda Island — final stop for relaxation, swimming and lunch"] },
      { type: "heading", content: "Tour Types" },
      { type: "list", items: ["Longtail Boat — affordable, authentic, slower","Speedboat — faster, covers more spots, slightly expensive"] },
      { type: "heading", content: "What's Included" },
      { type: "list", items: ["Hotel transfers","Lunch (veg/non-veg options)","Snorkeling gear","Drinking water"] },
      { type: "heading", content: "Best Time to Go" },
      { type: "list", items: ["Morning tours — less crowded","Afternoon tours — better lighting for photos"] },
      { type: "heading", content: "Hidden Tips (Very Important)" },
      { type: "list", items: ["Avoid peak hours — start before 8 AM","Choose weekdays — weekends are packed","Carry waterproof bags for phones and valuables","Wear reef-safe sunscreen to protect marine life","Bring cash — national park fees may not be included"] },
      { type: "heading", content: "Cost in 2026 (INR)" },
      { type: "list", items: ["Longtail boat — ₹1,200–₹2,000 per person","Speedboat — ₹2,500–₹4,000 per person"] },
      { type: "cta", content: "Book the Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do/", linkText: "Book 4 Island Tour" },
      { type: "heading", content: "Is It Worth It?" },
      { type: "paragraph", content: "Absolutely. The 4 Island Tour offers maximum value for money, multiple islands in one day and a perfect introduction to Krabi." },
      { type: "heading", content: "Who Should Skip It?" },
      { type: "list", items: ["Travelers looking for less crowded experiences","People prone to seasickness"] },
      { type: "heading", content: "Pro Itinerary Integration" },
      { type: "list", items: ["Day 2 — Phi Phi Tour","Day 3 — Jungle Tour"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "If it's your first time in Krabi, the 4 Island Tour is non-negotiable. It's the easiest way to experience the region's beauty in a single day." },
    ]}
    relatedActivities={[
      { title: "Krabi 4 Island Tour by Longtail", link: "/thailand/krabi/things-to-do/" },
      { title: "Krabi 4 Island Tour by Speedboat", link: "/thailand/krabi/things-to-do/" },
      { title: "Hong Island Tour", link: "/thailand/krabi/things-to-do/" },
      { title: "Phi Phi Island Tour", link: "/thailand/krabi/things-to-do/" },
    ]}
    relatedLinks={[
      { title: "15 Best Things to Do in Krabi", link: "/thailand/krabi/destination-guides/activity/15-best-things-to-do-in-krabi/" },
      { title: "Hong Island Tour Krabi", link: "/thailand/krabi/destination-guides/activity/hong-island-tour-krabi/" },
      { title: "Phi Phi Island Tour from Krabi", link: "/thailand/krabi/destination-guides/activity/phi-phi-island-tour-from-krabi/" },
      { title: "4 Island vs Hong Island Tour Krabi", link: "/thailand/krabi/destination-guides/comparison/4-island-vs-hong-island-tour-krabi/" },
      { title: "Longtail vs Speedboat in Krabi", link: "/thailand/krabi/destination-guides/comparison/longtail-vs-speedboat-in-krabi/" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/activity/4-island-tour-krabi-guide")}
  />
);

export default BlogKrabi4IslandTourGuide;
