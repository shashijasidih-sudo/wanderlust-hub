import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getSingaporeInternalLinks } from "@/data/blogInternalLinks";
import heroImg from "@/assets/singapore-cityscape-woman-1.jpg";

const LINK = "/singapore/destination-guides/indian-audience/singapore-visa-and-tour-planning-guide-for-indians";

const Blog = () => (
  <BlogArticleLayout
    title="Singapore Visa + Tour Planning Guide for Indians (2026 Edition)"
    description="Singapore visa for Indians 2026 — documents, fees, processing time, best time to visit, where to stay, sample 4-day plan and budget tips for Indian travelers."
    heroImage={heroImg}
    heroAlt="Indian traveler exploring Singapore cityscape"
    author="Yellodae Travel Expert"
    date="May 20, 2026"
    readTime="12 min read"
    category="Indian Audience Blogs"
    keywords={["singapore visa for indians","singapore tour planning","singapore evisa","singapore trip planning","singapore itinerary indians"]}
    guidesLink="/singapore/destination-guides"
    guidesLabel="Singapore Smart Guides"
    subCategory={{ label: "For Indian Travelers", link: "/singapore/destination-guides#indian-audience" }}
    cityHub={{ city: "Singapore", thingsToDoLink: "/singapore/things-to-do/" }}
    sections={[
      { type: "paragraph", content: "Planning a Singapore trip from India? You'll need a tourist e-Visa, the right paperwork and a solid 4–5 day plan. This 2026 guide covers everything Indian travelers need — visa documents, fees, processing time, best time to visit, where to stay, and a ready-to-use itinerary." },
      { type: "heading", content: "Singapore Visa for Indians — The Basics" },
      { type: "list", items: ["Visa type: Singapore Tourist e-Visa (single or multiple entry)","Issued by: Immigration & Checkpoints Authority (ICA), Singapore","Processing: Online only via an authorised visa agent","Validity: Usually 2 years (multiple-entry) with up to 30 days per visit"] },
      { type: "heading", content: "Required Documents" },
      { type: "list", items: ["Passport valid for 6+ months with 2 blank pages","Recent passport-size photo (white background, ICAO specs)","Filled Form 14A (visa application)","Form V39A (covering letter from Singapore sponsor / agent)","Confirmed flight tickets","Hotel booking confirmation","Bank statement (last 3–6 months)","PAN card and ITR (last 2 years) for employed/self-employed"] },
      { type: "heading", content: "Additional Documents (If Applicable)" },
      { type: "list", items: ["Employed: Leave letter + last 3 months' salary slips","Self-employed: GST/business registration + ITR","Students: Bonafide letter from college + parents' financials","Minors: Birth certificate + both parents' consent"] },
      { type: "heading", content: "Singapore Visa Cost & Processing Time" },
      { type: "list", items: ["Visa fee: ₹2,000 – ₹3,000 (ICA + agent service charge)","Processing time: 3–5 working days (normal)","Peak season (Apr–Jun, Nov–Dec): apply 3–4 weeks in advance","No interview required for Indian passport holders"] },
      { type: "tip-box", content: "Apply only through ICA-authorised Singapore visa agents in India. Direct walk-ins to the Singapore High Commission are not accepted for tourist visas." },
      { type: "heading", content: "Best Time to Visit Singapore" },
      { type: "list", items: ["February – April: pleasant weather, less rain — best overall","July – September: Great Singapore Sale + festivals","November – January: Christmas lights and Marina Bay countdown","Avoid: Heaviest monsoon spells in late Nov–Dec"] },
      { type: "heading", content: "Where to Stay in Singapore" },
      { type: "list", items: ["Little India — budget-friendly, Indian food everywhere, MRT-connected","Bugis — mid-range, central, lively street markets","Orchard Road — shopping district, mid-to-luxury hotels","Marina Bay — luxury, iconic views","Sentosa — resort stays, ideal for families with USS days"] },
      { type: "cta", content: "Pre-book your Changi airport transfer to start the trip stress-free", link: "/blog/airport-transfer-booking-singapore/", linkText: "Book Airport Transfer" },
      { type: "heading", content: "Sample 4-Day Singapore Plan (Perfect for First-Timers)" },
      { type: "list", items: ["Day 1: Arrival + City Tour + Marina Bay + Gardens by the Bay light show","Day 2: Universal Studios Singapore (full day at Sentosa)","Day 3: Singapore Zoo + Night Safari","Day 4: Sentosa Cable Car + Shopping (Orchard / Mustafa)"] },
      { type: "mid-activities", destination: "singapore", heading: "Must-Book Singapore Experiences" },
      { type: "heading", content: "Must-Visit Singapore Attractions" },
      { type: "list", items: ["Universal Studios Singapore","Gardens by the Bay","Night Safari","Singapore Zoo","Sentosa Island","Singapore Flyer","Marina Bay Sands SkyPark","Singapore River Cruise"] },
      { type: "heading", content: "Food for Indian Travelers" },
      { type: "list", items: ["Little India — full Indian, veg/non-veg, Jain options","Mustafa Centre food court — 24/7 South + North Indian","Tekka Centre hawker stalls — affordable Indian thalis","Food courts in major malls — wide veg variety"] },
      { type: "heading", content: "Budget Planning (Per Person, INR 2026)" },
      { type: "list", items: ["Flights — ₹20,000 – ₹40,000","Hotels (4 nights) — ₹20,000 – ₹50,000","Activities — ₹15,000 – ₹30,000","Food — ₹5,000 – ₹10,000","Transport — ₹3,000 – ₹7,000","Total: ₹60,000 – ₹1,20,000"] },
      { type: "heading", content: "Shopping for Indians" },
      { type: "list", items: ["Mustafa Centre — best for electronics, perfumes, gifts (24×7)","Orchard Road — luxury brands","Bugis Street — budget souvenirs","Chinatown — local crafts and tea"] },
      { type: "heading", content: "SIM & Connectivity" },
      { type: "list", items: ["Pick up a Singtel / Starhub tourist SIM at Changi","7-day prepaid plans from ~SGD 12 with unlimited data","Free Wi-Fi at MRT stations and malls"] },
      { type: "cta", content: "Browse curated Singapore tours and combos with INR pricing", link: "/singapore/things-to-do/", linkText: "See Singapore Tours" },
      { type: "heading", content: "Final Word" },
      { type: "paragraph", content: "Singapore's visa process is straightforward for Indian travelers — apply 3–4 weeks early through an authorised agent, pre-book your major attractions, and stay near MRT lines. With this plan, you'll cover all the highlights of Singapore in 4 well-paced days." },
    ]}
    relatedActivities={[
      { title: "Singapore City Tour", link: "/singapore/singapore-city-tour/" },
      { title: "Universal Studios Singapore", link: "/singapore/universal-studios-singapore-tickets-and-transfers/" },
      { title: "Singapore Cable Car & Sentosa", link: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
    ]}
    relatedLinks={[
      { title: "Singapore Trip Cost from India with Activities", link: "/singapore/destination-guides/indian-audience/singapore-trip-cost-from-india-with-activities/" },
      { title: "Is Singapore Expensive for Indian Travelers?", link: "/singapore/destination-guides/indian-audience/is-singapore-expensive-for-indian-travelers/" },
      { title: "Best Singapore Attractions for Indian Families", link: "/singapore/destination-guides/indian-audience/best-singapore-attractions-for-indian-families/" },
      { title: "Singapore City Tour Shared Transfer Itinerary", link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer/" },
    ]}
    internalLinks={getSingaporeInternalLinks(LINK)}
  />
);

export default Blog;
