import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getJapanInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/japan-kyoto-temple-1.jpg";

const BlogKyotoTempleTourGuide = () => (
  <BlogArticleLayout
    title="Kyoto Temple Tour Guide: Fushimi Inari, Arashiyama & Golden Pavilion Explained"
    description="Kyoto temple tour guide for 2026 — visit Fushimi Inari torii gates, Kinkaku-ji Golden Pavilion and Arashiyama bamboo grove with full itinerary, etiquette and travel tips."
    heroImage={heroImg}
    heroAlt="Fushimi Inari shrine torii gate tunnel in Kyoto Japan"
    author="Yellodae Travel Expert"
    date="May 10, 2026"
    readTime="9 min read"
    category="Activities"
    keywords={[
      "kyoto temple tour",
      "fushimi inari guide",
      "kinkaku-ji golden pavilion",
      "arashiyama bamboo grove",
      "kyoto itinerary 2026",
      "kyoto travel guide",
    ]}
    guidesLink="/japan/destination-guides"
    guidesLabel="Japan Smart Guides"
    subCategory={{ label: "Activities", link: "/japan/destination-guides#activity" }}
    sections={[
      { type: "paragraph", content: "Kyoto is Japan's cultural heart, famous for its temples, shrines, and traditional charm. A Kyoto temple tour is essential for understanding Japan's history and spirituality." },

      { type: "heading", content: "Top Temples in Kyoto" },
      { type: "subheading", content: "1. Fushimi Inari Taisha" },
      { type: "list", items: [
        "Thousands of red torii gates",
        "Iconic hiking trail up the mountain",
      ]},
      { type: "subheading", content: "2. Kinkaku-ji (Golden Pavilion)" },
      { type: "list", items: [
        "Covered in gold leaf",
        "Surrounded by scenic gardens and a reflective pond",
      ]},
      { type: "subheading", content: "3. Arashiyama Bamboo Grove" },
      { type: "list", items: [
        "Peaceful walking path through towering bamboo",
        "Nearby temples and the Hozugawa river",
      ]},

      { type: "heading", content: "Suggested Kyoto Temple Itinerary" },
      { type: "list", items: [
        "Morning: Fushimi Inari (start before 8 am to beat crowds)",
        "Midday: Kinkaku-ji",
        "Afternoon: Arashiyama bamboo grove + Tenryu-ji",
      ]},

      { type: "heading", content: "Tips for Visiting Temples" },
      { type: "list", items: [
        "Visit early morning for fewer crowds and better photos",
        "Wear comfortable walking shoes",
        "Respect temple etiquette — no loud talking, follow photo rules",
        "Carry small change for offerings",
      ]},
      { type: "tip-box", content: "Kyoto's bus pass (¥700/day) is the easiest way to hop between temples — far cheaper than taxis." },

      { type: "heading", content: "Guided Tour vs DIY" },
      { type: "subheading", content: "Guided Tour" },
      { type: "list", items: [
        "Covers multiple temples in one go",
        "Saves time and navigation hassle",
        "Includes cultural context from local guides",
      ]},
      { type: "subheading", content: "DIY" },
      { type: "list", items: [
        "Flexible pace",
        "Budget-friendly",
        "Best if you have 2+ days in Kyoto",
      ]},

      { type: "heading", content: "Why a Kyoto Temple Tour is a Must" },
      { type: "list", items: [
        "Deep cultural experience",
        "Stunning photography opportunities",
        "Spiritual atmosphere unmatched in Japan",
      ]},

      { type: "cta", content: "Want Kyoto temples bundled into a stress-free Japan itinerary?", linkText: "View Japan Tour Packages", link: "/tour-packages" },

      { type: "heading", content: "Conclusion" },
      { type: "paragraph", content: "A Kyoto temple tour is the soul of any Japan trip. From the glowing torii of Fushimi Inari to the gold of Kinkaku-ji and the green of Arashiyama, this is a side of Japan you'll never forget." },
    ]}
    relatedLinks={[
      { title: "Mount Fuji Day Tour from Tokyo: Best Views, Routes & Tips", link: "/japan/destination-guides/activity/mount-fuji-day-tour-from-tokyo" },
      { title: "Tokyo City Tour Guide: Top Attractions & Hidden Gems", link: "/japan/destination-guides/activity/tokyo-city-tour-guide" },
    ]}
      internalLinks={getJapanInternalLinks("")}
  />
);

export default BlogKyotoTempleTourGuide;
