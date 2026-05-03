import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-tipping.jpg";

const BlogBangkokTippingGuide = () => (
  <BlogArticleLayout
    title="Bangkok Tipping Guide 2026: How Much to Tip Where"
    description="Bangkok tipping etiquette — how much to tip taxis, restaurants, hotels, spas, tours and tour guides in 2026."
    heroImage={heroImg}
    heroAlt="Bangkok tipping etiquette Thai baht notes left on restaurant table"
    author="Yellodae Travel Expert"
    date="May 1, 2026"
    readTime="10 min read"
    category="Micro Blogs"
    keywords={["Bangkok tipping","Thailand tipping guide","Tipping in Bangkok","How much to tip Thailand","Bangkok tipping etiquette"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Quick Tips & Micro Guides", link: "/thailand/bangkok/destination-guides#micro" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    sections={[
      { type: "paragraph", content: "Tipping in Bangkok isn't mandatory like in the US, but it's appreciated almost everywhere — and small tips genuinely improve service. The amounts are tiny by Indian standards (20–50 baht goes a long way) and the etiquette is simple. Here's exactly how much to tip in every common situation." },
      { type: "heading", content: "Restaurants" },
      { type: "paragraph", content: "Mid-range restaurants without service charge: 20–50 baht (round up the bill). High-end restaurants with 10% service charge already added: optional, leave 20–50 baht extra cash if service was excellent. Street food stalls and food courts: no tip needed, ever. Most Bangkok restaurants don't expect tips, but a small one is welcomed." },
      { type: "heading", content: "Taxis & Grab" },
      { type: "paragraph", content: "Round up to the nearest 10 baht — that's it. If the meter says 87 baht, hand over 100. No tipping is expected on Grab (the app handles fare). Tuk-tuks: pre-negotiate the fare, no tip needed. If a metered taxi helps with luggage, 20 baht is courteous." },
      { type: "heading", content: "Hotels" },
      { type: "paragraph", content: "Bellboy carrying bags: 20–40 baht (per trip, not per bag). Housekeeping: 20–40 baht per day, leave on the pillow. Concierge for major help (booking restaurants, fixing problems): 100 baht. Doorman: not required." },
      { type: "tip-box", content: "Carry 20-baht and 50-baht notes specifically for tipping — pulling out a 1,000-baht note for a 50-baht tip looks awkward. Most Bangkok ATMs only dispense 1,000-baht notes, so break them at 7-Eleven on day 1." },
      { type: "mid-activities", destination: "bangkok", heading: "Plan Your Bangkok Activities" },
      { type: "heading", content: "Spas & Massages" },
      { type: "paragraph", content: "60-minute Thai massage at a basic shop (300 baht): 50 baht tip. 90-minute oil massage at a mid-range spa (800 baht): 100 baht. Luxury spa packages (3,000+ baht): 200–300 baht. Tipping is genuinely appreciated at small massage shops where therapists earn modest wages." },
      { type: "heading", content: "Tour Guides & Drivers" },
      { type: "paragraph", content: "Half-day private tour guide: 200–300 baht. Full-day private guide: 400–600 baht. Group tour guide: 100 baht per person. Private cab driver for a full day: 200–300 baht. Cruise staff: optional, 50–100 baht for the waiter who served your table well." },
      { type: "heading", content: "What NOT to Tip" },
      { type: "paragraph", content: "Street food stalls — never. Counter service at malls — never. McDonald's, Starbucks etc — never. 7-Eleven cashiers — never. Massage chains where service charge is built in — already covered. When in doubt, ask politely \"is service included?\"" },
      { type: "list", items: ["Restaurants: round up + 20–50 baht extra","Hotels: 20–40 baht per bag/day","Spas: 50–100 baht per session","Private tour guide: 200–600 baht/day","Street food: NO tip needed"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Tipping in Bangkok is low-pressure compared to Western cities — 20–50 baht in most situations, slightly more for excellent personal service. It's not expected at street food or taxis (beyond rounding up). Carry small notes, tip when service was genuinely good and you'll fit right in." },
      { type: "cta", content: "Plan your Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok Tours" }
    ]}
    relatedActivities={[
      { title: "Chao Phraya Princess Dinner Cruise", link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer" },
      { title: "Thai Couple Spa & Massage Deals", link: "/thailand/bangkok/thai-massage-spa-deals-bangkok" },
      { title: "Bangkok Tuk Tuk Night Food Tour", link: "/thailand/bangkok/tuk-tuk-night-tour-bangkok" },
      { title: "Baiyoke Sky Buffet Dinner", link: "/thailand/bangkok/baiyoke-buffet" },
    ]}
    relatedLinks={[
      { title: "All Bangkok Things to Do", link: "/thailand/bangkok/things-to-do" },
      { title: "Suvarnabhumi Airport Transfer", link: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer" },
      { title: "INR to Thai Baht Guide", link: "/thailand/bangkok/destination-guides/indian-audience/inr-to-thai-baht-guide" },
      { title: "Bangkok Food Cost", link: "/thailand/bangkok/destination-guides/price-cost/bangkok-food-cost" },
    ]}
  />
);

export default BlogBangkokTippingGuide;
