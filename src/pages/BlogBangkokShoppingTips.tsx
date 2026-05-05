import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog-bangkok-shopping-tips.jpg";

const BlogBangkokShoppingTips = () => (
  <BlogArticleLayout
    title="Bangkok Shopping Guide 2026: Best Markets, Malls & Bargaining"
    description="Best Bangkok shopping spots — Chatuchak, Platinum, MBK, Pratunam, ICONSIAM — plus bargaining tips and what to buy."
    heroImage={heroImg}
    heroAlt="Bangkok shopping bags Chatuchak market colorful stalls"
    author="Yellodae Travel Expert"
    date="Apr 30, 2026"
    readTime="10 min read"
    category="Micro Blogs"
    keywords={["Bangkok shopping","Chatuchak weekend market","Platinum Fashion Mall","MBK Bangkok","Bangkok bargaining tips"]}
    guidesLink="/thailand/bangkok/destination-guides"
    guidesLabel="Bangkok Destination Guides"
    subCategory={{ label: "Quick Tips & Micro Guides", link: "/thailand/bangkok/destination-guides#micro" }}
    cityHub={{
      city: "Bangkok",
      thingsToDoLink: "/thailand/bangkok/things-to-do",
      transfersLink: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer",
    }}
    sections={[
      { type: "paragraph", content: "Bangkok is one of the world's great shopping cities — sprawling weekend markets, multi-floor mega malls and entire streets dedicated to specific categories. From ₹200 t-shirts at Chatuchak to ₹50,000 luxury handbags at ICONSIAM, every budget gets covered. Here's the cheat sheet on where to shop, what to buy and how to bargain like a local." },
      { type: "heading", content: "Chatuchak Weekend Market" },
      { type: "paragraph", content: "The world's biggest weekend market — 15,000+ stalls open Saturday and Sunday, 9 AM to 6 PM. Best for: street fashion, souvenirs, home decor, vintage finds, accessories. Bargain hard — start at 30% of the asking price. Carry water, wear comfortable shoes and accept that you will get lost (download the Chatuchak Guide app)." },
      { type: "heading", content: "Platinum Fashion Mall" },
      { type: "paragraph", content: "6 floors of women's and men's clothing wholesale-style. Open daily 9 AM to 8 PM. Best for: cheap branded-style clothes, accessories, shoes. Buy 3+ pieces from one stall to unlock wholesale pricing (often 40% off). Pratunam Market is right next door — even cheaper but more chaotic. Take BTS to Chit Lom + 10-minute walk." },
      { type: "heading", content: "MBK Center" },
      { type: "paragraph", content: "Old-school mall famous for mobile phones, electronics, souvenirs, Indian clothes (basement) and a giant top-floor food court. Bargain at the mobile/electronics floor — 15–20% discounts are easy. Open daily 10 AM to 10 PM. BTS to National Stadium." },
      { type: "tip-box", content: "Hit Chatuchak Weekend Market early — be there by 9 AM when stalls open and crowds are still light. By noon it becomes a sweaty maze of 200,000 people and finding your way out takes another hour." },
      { type: "mid-activities", destination: "bangkok", heading: "Plan Your Bangkok Activities" },
      { type: "heading", content: "Siam Paragon, Siam Center, EmQuartier" },
      { type: "paragraph", content: "Modern luxury malls with international brands, food courts, Sea Life Aquarium (Paragon), Madame Tussauds (Siam Discovery) and Apple stores. Prices are similar to India for international brands — only buy here if it's a brand you can't get back home." },
      { type: "heading", content: "ICONSIAM" },
      { type: "paragraph", content: "Bangkok's newest luxury mall on the Chao Phraya. 7 floors, indoor floating market on Level G, stunning architecture and a free river-shuttle from Sathorn Pier. Best for: photos, the indoor floating market food, premium brands. Takes a half-day." },
      { type: "heading", content: "What's Genuinely Worth Buying" },
      { type: "paragraph", content: "Best Bangkok buys: Thai silk scarves, hand-painted umbrellas, dried mango, Thai herbal balms (Yanhee, Tiger Balm), pad thai sauce kits, branded skincare (Cathy Doll, Snail White), elephant-pant trousers, wood crafts. Skip: \"Genuine\" branded handbags, fake watches (high-quality fakes still illegal at Indian customs), local SIM cards (buy at airport instead)." },
      { type: "heading", content: "Bargaining Tips" },
      { type: "paragraph", content: "Markets (Chatuchak, Pratunam, MBK basement, night markets): bargain 30–50% off the asking price, walk away once if needed. Malls and ICONSIAM: fixed prices, no bargaining. Tuk-tuks: always negotiate before getting in. Be polite, smile and say \"lod noi dai mai?\" (can you reduce a little?)." },
      { type: "list", items: ["Chatuchak (Sat-Sun) — biggest market, bargain 30–50% off","Platinum + Pratunam — wholesale clothes shopping","MBK — electronics, mobile, basement Indian clothes","ICONSIAM — luxury mall + indoor floating market","Best buys: silk, dried mango, herbal balms, Cathy Doll"] },
      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Bangkok shopping rewards planning. Pick 1 market day (Chatuchak Saturday morning), 1 mall day (Siam Paragon + Platinum) and 1 luxury mall (ICONSIAM) for variety. Bargain at markets, accept fixed prices at malls and pack a half-empty suitcase — you'll fill it. Have fun and bring snacks for the long shopping days." },
      { type: "cta", content: "Plan your Bangkok activities", link: "/thailand/bangkok/things-to-do", linkText: "Explore Bangkok Tours" }
    ]}
    relatedActivities={[
      { title: "Wat Arun Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide" },
      { title: "Grand Palace Bangkok Guide 2026", link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide" },
      { title: "Mahanakhon Skywalk Tickets Guide", link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide" },
      { title: "Safari World Bangkok Guide", link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide" },
    ]}
    relatedLinks={[
      { title: "Bangkok 3 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-3-day-itinerary" },
      { title: "Bangkok 2 Day Itinerary 2026", link: "/thailand/bangkok/destination-guides/itinerary/bangkok-2-day-itinerary" },
      { title: "Suvarnabhumi Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/suvarnabhumi-airport-transfer" },
      { title: "Don Mueang Airport Transfer Guide", link: "/thailand/bangkok/destination-guides/transfer/don-mueang-airport-transfer" },
      { title: "Explore All Bangkok Tours & Activities", link: "/thailand/bangkok" },
    ]}
  />
);

export default BlogBangkokShoppingTips;
