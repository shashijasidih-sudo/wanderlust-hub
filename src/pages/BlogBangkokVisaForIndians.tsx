import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-visa-india.jpg";

const BlogBangkokVisaForIndians = () => (
  <BlogArticleLayout
    title="Thailand Visa for Indians 2026: Bangkok Trip Visa Guide"
    description="Complete 2026 Thailand visa guide for Indian passport holders — visa-free entry, e-Visa, visa-on-arrival, documents, costs and common mistakes."
    heroImage={heroImg}
    heroAlt="Indian passport with Thailand visa stamp at Bangkok temple"
    author="Yellodae Travel Expert"
    date="May 5, 2026"
    readTime="10 min read"
    category="Indian Audience Blogs"
    keywords={["Thailand visa for Indians","Bangkok visa India","Thailand e-visa","Thailand visa on arrival","Thailand visa free Indians"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Indian Traveller Guides", link: "/thailand/bangkok/destination-guides#indian-audience" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    sections={[
      { type: "paragraph", content: "Good news for Indian travelers planning a Bangkok trip in 2026 — Thailand has extended visa-free entry for Indian passport holders for tourism stays of up to 60 days. That makes Thailand one of the easiest international destinations for Indians right now. But \"visa-free\" doesn't mean \"document-free,\" and a few specific requirements still trip up first-timers at immigration. This complete 2026 guide covers what you need, what you don't, common myths and the exact paperwork to carry to avoid the dreaded secondary screening at Suvarnabhumi." },
      { type: "heading", content: "Visa-Free Entry: What It Means" },
      { type: "paragraph", content: "Indian passport holders can enter Thailand without applying for a visa in advance for tourism stays up to 60 days. You'll get a stamp on arrival at the airport — no application form, no fee, no embassy visit. This applies to both Bangkok airports (BKK Suvarnabhumi and DMK Don Mueang) and to Phuket, Krabi and Chiang Mai airports." },
      { type: "heading", content: "Documents You MUST Carry" },
      { type: "paragraph", content: "Even with visa-free entry, immigration can ask for proof you're a genuine tourist. Carry: passport with 6+ months validity, return flight ticket (printed), hotel booking confirmation for the entire stay, and proof of funds (₹20,000 cash equivalent or a credit card screenshot). Random checks happen — if you can't show return ticket and hotel booking, you can be denied entry. Print everything." },
      { type: "heading", content: "Other Visa Options (If Staying 60+ Days)" },
      { type: "paragraph", content: "Need to stay longer? Apply for a 60-day Tourist Visa (Single-Entry) at the Royal Thai Embassy or VFS Global in India for ~₹2,200, which can then be extended once for another 30 days inside Thailand. For multiple trips, the 6-month Multiple-Entry Tourist Visa (METV) costs ~₹11,000 and allows multiple 60-day entries within 6 months. Visa-on-arrival is no longer needed for Indians since visa-free entry is in effect." },
      { type: "tip-box", content: "Even with visa-free entry, ALWAYS carry a printed copy of your return ticket and hotel booking. Thai immigration randomly screens 1 in 10 Indian tourists for these — get caught without and you'll wait 2 hours in secondary." },
      { type: "mid-activities", destination: "bangkok", heading: "Plan Your Bangkok Activities" },
      { type: "heading", content: "E-Visa & Thailand Pass: Do You Need It?" },
      { type: "paragraph", content: "Thailand discontinued the Thailand Pass after COVID. There is no mandatory online registration as of 2026. You do not need to apply for an e-Visa if you're using visa-free entry. However, Thailand has launched an electronic Travel Authorization (ETA) similar to ETIAS for some categories — Indian tourists are currently exempt, but check the official Thai Embassy website 7 days before your trip for any updates." },
      { type: "heading", content: "Common Mistakes That Get You Denied" },
      { type: "paragraph", content: "Top reasons Indians get denied at Bangkok immigration: (1) one-way ticket — always book return, (2) no hotel booking — use a refundable Booking.com reservation if your plans are flexible, (3) less than 6 months passport validity, (4) damaged passport pages, (5) showing up tired and rude — Thai immigration is friendly but expects basic politeness." },
      { type: "heading", content: "Tips for a Smooth Immigration" },
      { type: "paragraph", content: "Have your passport, return ticket and hotel booking ready BEFORE you reach the counter. Stand in the \"Foreign Passports\" queue (not Thai Passports). Look up, smile, hand over documents quietly. Average processing is 30–60 seconds. Avoid using mobile phones at the counter. After stamping, walk straight ahead — don't loiter near immigration with documents. Welcome to Thailand." },
      { type: "heading", content: "Costs Summary (Per Person)" },
      { type: "paragraph", content: "Visa-free entry: ₹0. 60-day Tourist Visa (if needed): ~₹2,200. Multiple-Entry visa (METV, 6 months): ~₹11,000. Visa extension inside Thailand (30-day extension): 1,900 baht (~₹4,500). For 99% of Bangkok trippers, the answer is simple — visa-free entry, zero rupees." },
      { type: "list", items: ["Visa-free entry up to 60 days for Indian passport holders","Carry: passport (6+ months valid), return ticket, hotel booking, ₹20k proof of funds","No e-Visa or Thailand Pass needed in 2026","60-day Tourist Visa available for longer stays (~₹2,200)"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Thailand is currently the easiest big international destination for Indian travelers — visa-free, friendly immigration and minimal paperwork. As long as you carry the basics (passport, return ticket, hotel booking, some funds proof), Bangkok immigration takes 60 seconds. Don't overthink this one — book your flight, book your hotel and go." },
      { type: "cta", content: "Plan your Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok Tours" }
    ]}
    relatedActivities={[
      { title: "Grand Palace & Emerald Buddha Tour", link: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
      { title: "Chao Phraya Princess Dinner Cruise", link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer" },
      { title: "Safari World & Marine Park", link: "/thailand/bangkok/safari-world" },
      { title: "Mahanakhon Skywalk Tickets", link: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
    ]}
    relatedLinks={[
      { title: "All Bangkok Things to Do", link: "/thailand/bangkok/things-to-do" },
      { title: "Suvarnabhumi Airport Transfer", link: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer" },
      { title: "Bangkok Trip Cost from India", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-trip-cost-from-india" },
      { title: "INR to Thai Baht Guide", link: "/thailand/bangkok/destination-guides/indian-audience/inr-to-thai-baht-guide" },
    ]}
  />
);

export default BlogBangkokVisaForIndians;
