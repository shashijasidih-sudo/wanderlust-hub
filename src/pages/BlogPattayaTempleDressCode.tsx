import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/pattaya-temple-woman-1.jpg";

const BlogPattayaTempleDressCode = () => (
  <BlogArticleLayout
    title="What to Wear in Pattaya Temples 2026: Complete Dress Code Guide"
    description="Exact temple dress code for Pattaya — what men and women should wear at Big Buddha, Sanctuary of Truth and Wat Chaimongkol, plus pro tips."
    heroImage={heroImg}
    heroAlt="Woman dressed modestly visiting a Pattaya temple"
    author="Yellodae Travel Expert"
    date="May 7, 2026"
    readTime="7 min read"
    category="Micro Guides"
    keywords={["Pattaya temple dress code","what to wear Pattaya temples","Big Buddha dress code","Sanctuary of Truth dress code","Thai temple dress"]}
    guidesLink="/thailand/pattaya/destination-guides"
    guidesLabel="Pattaya Destination Guides"
    subCategory={{ label: "Micro Guides", link: "/thailand/pattaya/destination-guides#micro" }}
    cityHub={{
      city: "Pattaya",
      thingsToDoLink: "/thailand/pattaya/things-to-do",
      transfersLink: "/thailand/pattaya",
    }}
    sections={[
      { type: "paragraph", content: "Pattaya is best known for beaches and nightlife, but its temples are sacred sites with proper dress codes. If you're visiting Big Buddha, Sanctuary of Truth or Wat Chaimongkol, you'll be turned away (or made to rent a sarong) if you arrive in beachwear. This 2026 guide tells you exactly what to wear." },
      { type: "heading", content: "Popular Pattaya Temples" },
      { type: "list", items: ["Big Buddha Temple (Wat Phra Yai)","Sanctuary of Truth","Wat Chaimongkol"] },
      { type: "paragraph", content: "All three follow similar dress guidelines. Sanctuary of Truth is the strictest — they enforce it at the entrance." },
      { type: "heading", content: "Basic Temple Dress Code Rules" },
      { type: "list", items: ["Cover shoulders — no tank tops or sleeveless","Cover knees — no short shorts or mini skirts","No see-through clothing","Remove shoes before entering main halls","No beachwear, swimwear or revealing tops"] },
      { type: "heading", content: "What Women Should Wear" },
      { type: "list", items: ["Long skirt, palazzo, leggings or full-length pants","T-shirt, kurta or shirt with sleeves","Light scarf/dupatta to cover shoulders if needed","Easy-to-remove flat sandals"] },
      { type: "heading", content: "What Men Should Wear" },
      { type: "list", items: ["Full-length trousers or jeans (no shorts above the knee)","T-shirt or shirt with sleeves","Closed or easy-to-remove shoes","Cap or hat — remove before entering"] },
      { type: "tip-box", content: "Carry a thin scarf or sarong in your day bag. It instantly converts beachwear into temple-appropriate clothing and saves you the rental fee at the entrance." },
      { type: "mid-activities", destination: "pattaya", heading: "Plan Your Pattaya Activities" },
      { type: "heading", content: "What NOT to Wear" },
      { type: "list", items: ["Tank tops, sleeveless tops, crop tops","Shorts above the knee, mini skirts, hot pants","Bikinis, beach cover-ups","See-through or very tight clothing","Shoes inside main shrine halls"] },
      { type: "heading", content: "Sarong Rentals at Temples" },
      { type: "paragraph", content: "Most major temples rent sarongs and shawls at the entrance for ₹100–₹200 (refundable deposit). Useful as backup, but bringing your own scarf is faster, free and looks better in photos." },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "list", items: ["Indian ethnic wear (kurta + leggings, salwar kameez) is perfect","Light cotton works best in Pattaya humidity","Carry socks if you're shy about bare feet","Remove sunglasses and caps inside shrine halls"] },
      { type: "heading", content: "Cultural Etiquette Inside Temples" },
      { type: "list", items: ["Walk clockwise around the main Buddha","Don't point feet toward Buddha statues","Speak softly, no loud calls or videos","Don't climb on or pose disrespectfully with statues","Women should not touch monks or hand items directly"] },
      { type: "heading", content: "Photography Rules" },
      { type: "list", items: ["Photos allowed in most outdoor areas","No flash inside main shrine halls","Don't pose for selfies in front of Buddha","Always check signage at entry"] },
      { type: "heading", content: "Final Verdict" },
      { type: "paragraph", content: "Pattaya temple dress codes are simple — cover shoulders and knees, no beachwear, remove shoes inside halls. Carry a light scarf in your bag, plan temple visits in cotton clothing and you'll get smooth entry, better photos and respectful interactions everywhere." },
      { type: "cta", content: "Explore Pattaya temples & tours", link: "/thailand/pattaya/things-to-do", linkText: "View Pattaya Activities" }
    ]}
    relatedActivities={[
      { title: "Coral Island Pattaya Guide 2026", link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide" },
      { title: "Sanctuary of Truth Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide" },
      { title: "Alcazar Cabaret Show Pattaya Guide", link: "/thailand/pattaya/destination-guides/activity/alcazar-show-pattaya-guide" },
      { title: "Nong Nooch Tropical Garden Pattaya", link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide" },
    ]}
    relatedLinks={[
      { title: "Pattaya 3 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary" },
      { title: "Pattaya 2 Days Itinerary 2026", link: "/thailand/pattaya/destination-guides/itinerary/pattaya-2-days-itinerary" },
      { title: "Bangkok to Pattaya Transfer Guide", link: "/thailand/pattaya/destination-guides/transfer/bangkok-to-pattaya-transfer" },
      { title: "Suvarnabhumi to Pattaya Cost & Time", link: "/thailand/pattaya/destination-guides/transfer/suvarnabhumi-to-pattaya" },
      { title: "Explore All Pattaya Tours & Activities", link: "/thailand/pattaya" },
    ]}
  />
);

export default BlogPattayaTempleDressCode;
