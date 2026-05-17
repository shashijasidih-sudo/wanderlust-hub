import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/krabi-kayaks-beach-1.jpg";

const BlogKayakingAoThalaneKrabi = () => (
  <BlogArticleLayout
    title="Kayaking in Ao Thalane Krabi: Mangrove Adventure Guide (2026)"
    description="Kayaking in Ao Thalane Krabi — mangrove forests, limestone canyons, hidden lagoons, half-day vs full-day vs sunset tours, INR cost and 2026 tips."
    heroImage={heroImg}
    heroAlt="Kayaks on a tropical beach in Krabi"
    author="Yellodae Travel Expert"
    date="May 16, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["kayaking ao thalane","krabi mangrove kayaking","ao thalane krabi","krabi eco adventure","krabi nature tour"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/krabi/destination-guides#activity" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Looking to experience a quieter, more untouched side of Krabi? Kayaking in Ao Thalane is one of the best activities you can add to your itinerary. Far from crowded island tours, this experience takes you deep into mangrove forests, limestone canyons, hidden lagoons and wildlife-rich ecosystems." },
      { type: "heading", content: "What is Ao Thalane?" },
      { type: "list", items: ["Coastal area, ~30 minutes from Ao Nang","Dense mangrove forests","Narrow water canyons","Calm, glassy waters","Dramatic limestone cliffs"] },
      { type: "heading", content: "What to Expect" },
      { type: "list", items: ["Hotel pickup from Ao Nang, Krabi Town or Klong Muang (30–40 min)","Arrival, briefing and safety instructions","Paddling — beginner-friendly calm waters","Explore hidden lagoons with no crowds and stunning reflections","Wildlife spotting — monkeys, birds, crabs"] },
      { type: "heading", content: "Types of Tours" },
      { type: "list", items: ["Half-day tour — 3–4 hours, perfect intro","Full-day tour — extended exploration, lunch included","Sunset kayaking — golden light and cooler temperatures"] },
      { type: "heading", content: "Cost (2026, INR)" },
      { type: "list", items: ["Half-day tour — ₹1,500–₹2,500","Full-day tour — ₹3,000–₹4,500"] },
      { type: "heading", content: "What to Wear" },
      { type: "list", items: ["Quick-dry clothes","Swimwear","Waterproof bag","Sunscreen, hat, water bottle"] },
      { type: "heading", content: "Is It Safe?" },
      { type: "paragraph", content: "Yes — Ao Thalane is calm and beginner-friendly. Guides provide life jackets and full briefing. Suitable for ages 6+." },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Choose a guided tour for hidden spots","Go during high tide for smoother paddling","Keep valuables in waterproof bags","Start early or go at sunset to avoid midday heat","Stay quiet to spot wildlife"] },
      { type: "cta", content: "Book the Ao Thalane Kayaking Tour", link: "/thailand/krabi/things-to-do", linkText: "Book Kayaking Tour" },
      { type: "heading", content: "Who Should Try This" },
      { type: "list", items: ["Nature lovers","Couples","Solo travelers","Photographers"] },
      { type: "heading", content: "Who Might Skip It" },
      { type: "list", items: ["People looking for fast-paced activities","Travelers with limited time","Those uncomfortable with physical activity"] },
      { type: "heading", content: "Combine With" },
      { type: "list", items: ["Hong Island tour","Jungle tour","Night market visit"] },
      { type: "heading", content: "Suggested Itinerary Placement" },
      { type: "list", items: ["Day 1 — 4 Island Tour","Day 2 — Phi Phi Islands","Day 3 — Kayaking Ao Thalane","Day 4 — Hong Island","Day 5 — Jungle Tour + Night Market"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Kayaking in Ao Thalane is one of the most peaceful and immersive experiences in Krabi — a refreshing contrast to crowded island tours and a must-do for travelers wanting something different, scenic and memorable in 2026." },
    ]}
    relatedActivities={[
      { title: "Ao Thalane Kayaking Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Hong Island Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi Jungle & Emerald Pool Tour", link: "/thailand/krabi/things-to-do" },
    ]}
    relatedLinks={[
      { title: "15 Best Things to Do in Krabi", link: "/thailand/krabi/destination-guides/activity/15-best-things-to-do-in-krabi" },
      { title: "Hong Island Tour Krabi", link: "/thailand/krabi/destination-guides/activity/hong-island-tour-krabi" },
      { title: "Krabi Emerald Pool & Hot Springs", link: "/thailand/krabi/destination-guides/activity/krabi-emerald-pool-hot-springs-guide" },
      { title: "Krabi Night Markets Guide", link: "/thailand/krabi/destination-guides/activity/krabi-night-markets-guide" },
      { title: "Best Time for Island Hopping in Krabi", link: "/thailand/krabi/destination-guides/micro/best-time-for-island-hopping-in-krabi" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/activity/kayaking-in-ao-thalane-krabi")}
  />
);

export default BlogKayakingAoThalaneKrabi;
