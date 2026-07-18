import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-night-safari.jpg";

const LINK = "/singapore/destination-guides/activity/night-safari-singapore-guide";

const BlogNightSafariSingaporeGuide = () => (
  <BlogArticleLayout
    title="Night Safari Singapore Experience Guide (Tram, Trails & Tips)"
    description="Complete Night Safari Singapore guide — tram zones, walking trails, Creatures of the Night show, best timings and INR ticket cost for 2026."
    heroImage={heroImg}
    heroAlt="Night Safari Singapore tram passing illuminated animal enclosure"
    author="Yellodae Travel Expert"
    date="May 18, 2026"
    readTime="10 min read"
    category="Activity Blogs"
    keywords={["night safari singapore","mandai night safari","singapore nocturnal zoo","creatures of the night show","singapore wildlife tour"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "Activity Guides", link: "/singapore/destination-guides#activity" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do/" }}
    sections={[
      { type: "paragraph", content: "Night Safari Singapore is the world's first nocturnal zoo and one of the most unique wildlife experiences anywhere in Asia. Located in the Mandai Wildlife Reserve, it lets you observe over 900 animals in carefully recreated natural habitats lit by soft moonlight — without disturbing their behaviour." },
      { type: "heading", content: "Why Night Safari is Unique" },
      { type: "list", items: ["Nocturnal experience — animals are far more active at night than in a day zoo","Open enclosures with hidden barriers for a jungle-like feel","40-minute guided tram ride through multiple zones","Four walking trails for closer encounters"] },
      { type: "heading", content: "Tram Ride Zones" },
      { type: "list", items: ["Himalayan Foothills — tahrs and bharals","Indian Subcontinent — rhino, sloth bear, Asiatic lions (a hit with Indian travellers)","Equatorial Africa — zebras, giraffes, hyenas","Asian Riverine Forest — tapirs and elephants"] },
      { type: "heading", content: "Walking Trails for Closer Encounters" },
      { type: "list", items: ["Leopard Trail — leopards, civets, predators","Fishing Cat Trail — fishing cats, pangolins, otters","East Lodge Trail — binturongs and babirusas","Wallaby Trail — free-roaming wallabies"] },
      { type: "heading", content: "Creatures of the Night Show" },
      { type: "paragraph", content: "An interactive presentation showcasing the natural abilities of nocturnal animals — entertaining, educational and a clear favourite with families travelling with kids." },
      { type: "heading", content: "Timings & Best Time to Visit (2026)" },
      { type: "list", items: ["Opening hours: 6:30 PM – 12:00 AM","Last entry: ~11:00 PM","Best slot: arrive 6:30–7:30 PM, weekdays only","Avoid peak weekends and rainy evenings"] },
      { type: "heading", content: "Cost in 2026 (INR)" },
      { type: "list", items: ["Standard adult ticket — ₹3,200–₹3,800","With tram ride included — ₹3,800–₹4,500","Combo (Zoo + Night Safari + River Wonders) — ₹6,500+"] },
      { type: "cta", content: "Book Night Safari Tickets & Transfers", link: "/singapore/night-safari-singapore-tickets-and-transfers/", linkText: "Book Night Safari" },
      { type: "heading", content: "How to Reach Night Safari" },
      { type: "list", items: ["Taxi or private transfer (most convenient — ~30 minutes from city)","Shared shuttle from city hotels","Public bus + MRT combination (cheapest, longer)"] },
      { type: "heading", content: "Tips for the Best Experience" },
      { type: "list", items: ["Start with the tram ride, then explore trails","Carry insect repellent","Wear comfortable walking shoes","No flash photography","Keep your voice low to avoid disturbing animals"] },
      { type: "heading", content: "Is Night Safari Worth It?" },
      { type: "paragraph", content: "Absolutely — even if you've been to many zoos, this feels completely different. It's a signature Singapore experience and one of the most memorable parts of any trip to the city." },
    ]}
    relatedActivities={[
      { title: "Night Safari Tickets & Transfers", link: "/singapore/night-safari-singapore-tickets-and-transfers/" },
      { title: "Night Safari Transfer Only", link: "/singapore/night-safari-transfer/" },
      { title: "Night Safari with Dinner", link: "/singapore/night-safari-dinner/" },
    ]}
    relatedLinks={[
      { title: "Singapore City Tour with Shared Transfer", link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer/" },
      { title: "Sentosa Cable Car Ride Guide", link: "/singapore/destination-guides/activity/sentosa-cable-car-mount-faber-line/" },
      { title: "Universal Studios Singapore Full Experience", link: "/singapore/destination-guides/activity/universal-studios-singapore-guide/" },
      { title: "Gardens by the Bay Attractions Guide", link: "/singapore/destination-guides/activity/gardens-by-the-bay-guide/" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default BlogNightSafariSingaporeGuide;
