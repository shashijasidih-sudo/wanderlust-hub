import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getKrabiInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/hot-spring-emerald-hero.jpg";

const BlogKrabiEmeraldPoolHotSprings = () => (
  <BlogArticleLayout
    title="Krabi Emerald Pool & Hot Springs Guide: Worth Visiting in 2026?"
    description="Krabi Emerald Pool & Hot Springs guide — Khao Phra Bang Khram trails, Tiger Cave Temple combo, entry fees in INR and whether it's worth visiting in 2026."
    heroImage={heroImg}
    heroAlt="Krabi Emerald Pool surrounded by rainforest"
    author="Yellodae Travel Expert"
    date="May 16, 2026"
    readTime="9 min read"
    category="Activity Blogs"
    keywords={["krabi emerald pool","krabi hot springs","khao phra bang khram","krabi jungle tour","tiger cave temple"]}
    guidesLink="/thailand/krabi/destination-guides"
    guidesLabel="Krabi Destination Guides"
    subCategory={{ label: "Activity Guides", link: "/thailand/krabi/destination-guides#activity" }}
    cityHub={{ city: "Krabi", thingsToDoLink: "/thailand/krabi/things-to-do", transfersLink: "/thailand/krabi/budget-airport-transfers" }}
    sections={[
      { type: "paragraph", content: "Looking to explore beyond Krabi's beaches and islands? The Emerald Pool and Hot Springs offer a refreshing inland escape into lush rainforest landscapes. Located within Khao Phra Bang Khram Nature Reserve, this experience combines natural mineral pools, jungle walks and therapeutic hot springs — all in one day." },
      { type: "heading", content: "What is the Emerald Pool in Krabi?" },
      { type: "paragraph", content: "The Emerald Pool (Sa Morakot) is a naturally formed freshwater pool known for its striking green-blue color. The mineral-rich water comes from underground streams flowing through limestone, giving it a unique clarity and hue. Surrounded by dense rainforest, it feels like a hidden oasis." },
      { type: "heading", content: "Trail Options" },
      { type: "list", items: ["Short Route (800m) — quick and direct","Nature Trail (1.4 km) — more scenic, recommended"] },
      { type: "paragraph", content: "Along the way, expect rare plants, birds and natural streams." },
      { type: "heading", content: "Krabi Hot Springs" },
      { type: "paragraph", content: "Just 15 minutes from the Emerald Pool, the hot springs cascade down natural rock pools at 35–40°C — perfect for soaking sore muscles after the jungle walk." },
      { type: "heading", content: "Combine with Tiger Cave Temple" },
      { type: "list", items: ["1,260-step climb to the summit","Panoramic views of Krabi","Active Buddhist monastery"] },
      { type: "heading", content: "Entry Fees (2026 Updated, INR)" },
      { type: "list", items: ["Emerald Pool — ~₹400–₹500","Hot Springs — ~₹200–₹300","Tiger Cave Temple — free (donations welcome)"] },
      { type: "heading", content: "What to Pack" },
      { type: "list", items: ["Swimwear","Quick-dry towel","Comfortable walking shoes","Sunscreen","Insect repellent"] },
      { type: "heading", content: "Pro Tips" },
      { type: "list", items: ["Start early to avoid crowds","Take the Nature Trail — more scenic and less crowded","Visit Hot Springs first if you arrive late"] },
      { type: "cta", content: "Book the Krabi Jungle & Emerald Pool Tour", link: "/thailand/krabi/things-to-do", linkText: "Book Jungle Tour" },
      { type: "heading", content: "Emerald Pool vs Island Tours" },
      { type: "list", items: ["Emerald Pool — jungle & freshwater, moderate crowd, high relaxation","Island Tours — beaches & ocean, high crowd, medium relaxation"] },
      { type: "heading", content: "Who Should Visit" },
      { type: "list", items: ["Families","Couples","Nature lovers","First-time visitors wanting variety"] },
      { type: "heading", content: "Who Should Skip" },
      { type: "list", items: ["Hardcore adventure seekers","Travelers on tight schedules","People sensitive to heat and humidity"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "The Emerald Pool and Hot Springs in Krabi offer a completely different side of Thailand — lush, peaceful and rejuvenating. A perfect contrast to island tours." },
    ]}
    relatedActivities={[
      { title: "Krabi Jungle & Emerald Pool Tour", link: "/thailand/krabi/things-to-do" },
      { title: "Tiger Cave Temple Visit", link: "/thailand/krabi/things-to-do" },
      { title: "Krabi 4 Island Tour", link: "/thailand/krabi/things-to-do" },
    ]}
    relatedLinks={[
      { title: "15 Best Things to Do in Krabi", link: "/thailand/krabi/destination-guides/activity/15-best-things-to-do-in-krabi" },
      { title: "4 Island Tour Krabi Guide", link: "/thailand/krabi/destination-guides/activity/4-island-tour-krabi-guide" },
      { title: "Hong Island Tour Krabi", link: "/thailand/krabi/destination-guides/activity/hong-island-tour-krabi" },
      { title: "Krabi Night Markets Guide", link: "/thailand/krabi/destination-guides/activity/krabi-night-markets-guide" },
      { title: "Kayaking in Ao Thalane Krabi", link: "/thailand/krabi/destination-guides/activity/kayaking-in-ao-thalane-krabi" },
    ]}
    internalLinks={getKrabiInternalLinks("/thailand/krabi/destination-guides/activity/krabi-emerald-pool-hot-springs-guide")}
  />
);

export default BlogKrabiEmeraldPoolHotSprings;
