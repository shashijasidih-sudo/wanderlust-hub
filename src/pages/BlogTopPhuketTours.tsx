import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogCityProps } from "@/data/blogCityLinks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/phi-phi-1.jpg";
import phiPhi from "@/assets/phi-phi-3.jpg";
import phiPhiBigBoat from "@/assets/phi-phi-5.jpg";
import phiPhiRoyal from "@/assets/phi-phi-7.jpg";
import phiPhiMaya from "@/assets/phi-phi-9.jpg";
import jamesBond from "@/assets/james-bond-1.jpg";
import jamesBondCanoe from "@/assets/james-bond-3.jpg";
import dolphin from "@/assets/dolphin-show-1.jpg";
import dolphinBay from "@/assets/dolphin-show-2.jpg";
import tiger from "@/assets/tiger-selfie-hero.jpg";
import tigerAtv from "@/assets/phuket-atv-1.jpg";
import carnival from "@/assets/phuket-carnival-1.jpg";
import simonCabaret from "@/assets/phuket-carnival-2.jpg";
import nightMarket from "@/assets/phuket-night-market-1.jpg";
import muslimTour from "@/assets/phuket-muslim-woman-hijab.jpg";
import hotSpring from "@/assets/hot-spring-emerald-hero.jpg";

const activityCards = [
  { title: "Phi Phi Island, Maya Bay & Khai Island Speedboat", location: "Phuket", image: phiPhi, slug: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
  { title: "Phi Phi Island Big Boat Tour", location: "Phuket", image: phiPhiBigBoat, slug: "/thailand/phuket/phi-phi-island-big-boat-tour-with-transfer" },
  { title: "Phi Phi Royal Jet Speedboat Tour", location: "Phuket", image: phiPhiRoyal, slug: "/thailand/phuket/phi-phi-island-premium-speedboat-tour-with-transfer" },
  { title: "Phi Phi Maya & Khai Speedboat", location: "Phuket", image: phiPhiMaya, slug: "/thailand/phuket/phi-phi-maya-bay-khai-island-speedboat-tour-with-transfer" },
  { title: "James Bond Island & Phang Nga Bay", location: "Phuket", image: jamesBond, slug: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer" },
  { title: "James Bond Island with Sea Canoe", location: "Phuket", image: jamesBondCanoe, slug: "/thailand/phuket/james-bond-island-sea-canoe-tour-with-transfer" },
  { title: "Dolphin Show Phuket", location: "Phuket", image: dolphin, slug: "/thailand/bangkok/dolphin-show" },
  { title: "Dolphin Bay Phuket", location: "Phuket", image: dolphinBay, slug: "/thailand/phuket/dolphin-show-phuket-with-transfer" },
  { title: "Selfie with Tigers Phuket", location: "Phuket", image: tiger, slug: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer" },
  { title: "Selfie with Tigers & ATV Ride", location: "Phuket", image: tigerAtv, slug: "/thailand/phuket/tiger-kingdom-atv-experience-phuket-with-transfer" },
  { title: "Phuket Carnival Magic Show", location: "Phuket", image: carnival, slug: "/thailand/phuket/carnival-magic-show-tickets-with-transfer" },
  { title: "Phuket Simon Cabaret Show", location: "Phuket", image: simonCabaret, slug: "/thailand/phuket/simon-cabaret-show-with-transfer" },
  { title: "Phuket City Night Market Tour", location: "Phuket", image: nightMarket, slug: "/thailand/phuket/phuket-night-market-tour-with-transfer" },
  { title: "Phuket Muslim Friendly Tour", location: "Phuket", image: muslimTour, slug: "/thailand/phuket/muslim-friendly-tour" },
  { title: "Hot Spring & Emerald Pool Krabi", location: "Krabi", image: hotSpring, slug: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Phuket & Nearby Island Tours</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {activityCards.map((a) => (
            <Card key={a.slug} className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300" onClick={() => navigate(a.slug)}>
              <div className="relative h-44 overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-xs"><MapPin className="h-3 w-3" />{a.location}</div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={(e) => { e.stopPropagation(); navigate(a.slug); }}>Book Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogTopPhuketTours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
    {...getBlogCityProps("phuket")}
      title="Top Phuket Island Tours for Indian Travelers — 2026 Guide"
      description="Complete guide to the best Phuket island tours and activities for Indian travelers. From Phi Phi Island to James Bond Island, find the perfect tour with prices and booking tips."
      heroImage={heroImg}
      heroAlt="Phi Phi Island aerial view with turquoise waters"
      author="Yellodae Island Expert"
      date="Mar 5, 2026"
      readTime="14 min read"
      category="Phuket Travel Guide"
      keywords={["Phuket island tours for Indians", "Phi Phi Island tour from Phuket", "James Bond Island Phuket", "Phuket activities for Indian travelers", "best Phuket tours 2026", "Phuket tour booking online", "Yellodae Phuket"]}
      guidesLink="/thailand/destination-guides"
      guidesLabel="Thailand Guides"
      relatedLinks={[
        { title: "Best Thailand Activities to Book Online", link: "/blog/best-thailand-activities" },
        { title: "Bangkok Activities Booking Guide", link: "/blog/bangkok-activities-guide" },
        { title: "Best Pattaya Activities for First-Time Visitors", link: "/blog/best-pattaya-activities" },
        { title: "Phi Phi Island Tours Complete Guide", link: "/blog/phi-phi-island-tours-thailand" },
      ]}
      sections={[
        { type: "paragraph", content: "Phuket is Thailand's largest island and one of the most popular destinations for Indian travelers. With its stunning beaches, world-class island tours, vibrant nightlife, and delicious food, Phuket offers an unforgettable vacation experience. This comprehensive guide covers the best island tours and activities available from Phuket — all bookable online with instant confirmation." },
        { type: "heading", content: "Why Phuket is Perfect for Indian Travelers" },
        { type: "list", items: [
          "Direct flights from major Indian cities — Mumbai, Delhi, Bangalore, Chennai",
          "Indian restaurants and vegetarian food options widely available",
          "Visa-on-arrival for Indian passport holders",
          "Activities suitable for families, couples, and solo travelers",
          "Affordable pricing — great value compared to European destinations",
          "English widely spoken at tourist areas",
        ]},
        { type: "heading", content: "Best Island Tours from Phuket" },
        { type: "subheading", content: "1. Phi Phi Island, Maya Bay & Khai Island Speedboat" },
        { type: "paragraph", content: "The most popular island tour from Phuket! Visit the stunning Phi Phi Islands, swim at the iconic Maya Bay, snorkel at Khai Island, and enjoy a seafood lunch on the beach. The speedboat covers multiple stops in 7-8 hours. Includes hotel pickup, lunch, snorkelling gear, and life jackets." },
        { type: "subheading", content: "2. Phi Phi Island Big Boat Tour" },
        { type: "paragraph", content: "A budget-friendly alternative to the speedboat tour. The big boat offers more stability (great for those prone to seasickness), spacious deck areas, and covers the same beautiful destinations at a relaxed pace." },
        { type: "subheading", content: "3. Phi Phi Royal Jet Speedboat Tour" },
        { type: "paragraph", content: "The premium Phi Phi experience with a luxury speedboat, smaller group size, and VIP treatment. Perfect for couples and honeymooners who want a more exclusive island-hopping experience." },
        { type: "image", src: phiPhi, alt: "Phi Phi Island stunning turquoise waters", caption: "The breathtaking Phi Phi Islands — Thailand's most iconic island destination" },
        { type: "subheading", content: "4. James Bond Island & Phang Nga Bay" },
        { type: "paragraph", content: "Cruise through the dramatic limestone karsts of Phang Nga Bay and visit the famous James Bond Island (featured in 'The Man with the Golden Gun'). Includes sea canoeing through caves, visiting a floating Muslim village, and lunch." },
        { type: "subheading", content: "5. James Bond Island with Sea Canoe" },
        { type: "paragraph", content: "An enhanced version of the James Bond Island tour with extended sea canoeing through hidden lagoons and mangrove caves. Paddle through stunning geological formations while surrounded by pristine nature." },
        { type: "heading", content: "Best Phuket Activities & Shows" },
        { type: "subheading", content: "6. Dolphin Show Phuket" },
        { type: "paragraph", content: "Watch trained dolphins perform incredible acrobatic tricks, jumps, and audience interactions at Phuket's popular dolphin arena. A wonderful family-friendly activity that kids absolutely love." },
        { type: "subheading", content: "7. Dolphin Bay Phuket" },
        { type: "paragraph", content: "A more intimate dolphin experience where you can swim and interact with dolphins in a controlled environment. Perfect for creating unforgettable memories." },
        { type: "subheading", content: "8. Selfie with Tigers" },
        { type: "paragraph", content: "Get up close with magnificent tigers at Tiger Kingdom. Choose from baby, small, medium, or giant tiger encounters. Professional photographers ensure you get the perfect shot." },
        { type: "image", src: tiger, alt: "Tourist taking selfie with tiger in Phuket", caption: "Tiger Kingdom — an unforgettable wildlife encounter" },
        { type: "subheading", content: "9. Selfie with Tigers & ATV Ride" },
        { type: "paragraph", content: "Combine the tiger encounter with a thrilling ATV ride through Phuket's jungle trails. The perfect combo for adventure seekers." },
        { type: "subheading", content: "10. Phuket Carnival Magic Show" },
        { type: "paragraph", content: "Phuket's newest mega-attraction featuring spectacular performances, light shows, and cultural displays in a massive purpose-built entertainment complex. A must-see evening experience." },
        { type: "subheading", content: "11. Simon Cabaret Show" },
        { type: "paragraph", content: "One of Phuket's most famous shows featuring glamorous performers, dazzling costumes, and world-class choreography. A vibrant evening entertainment option." },
        { type: "subheading", content: "12. Phuket City Night Market Tour" },
        { type: "paragraph", content: "Explore Phuket's vibrant night markets with a guided tour. Sample local street food, shop for souvenirs, and experience authentic Thai nightlife culture." },
        { type: "subheading", content: "13. Muslim Friendly Tour Phuket" },
        { type: "paragraph", content: "A specially curated tour for Muslim travelers featuring halal food stops, mosque visits, and cultural experiences. Includes visits to Phuket's beautiful mosques and halal-certified restaurants." },
        { type: "heading", content: "Day Trips from Phuket" },
        { type: "subheading", content: "14. Phi Phi Maya & Khai Speedboat" },
        { type: "paragraph", content: "A condensed version of the Phi Phi tour focusing on the most photogenic spots — Maya Bay and Khai Island. Perfect if you're short on time but want the best views." },
        { type: "subheading", content: "15. Hot Spring & Emerald Pool Krabi" },
        { type: "paragraph", content: "A day trip to Krabi's natural wonders. Soak in natural hot springs, swim in the stunning emerald-green pool, and visit Tiger Cave Temple. Includes Phuket hotel transfers." },
        { type: "tip-box", content: "💡 Indian Traveler Tip: Most Phuket tours include hotel pickup from Patong, Kata, Karon, and Phuket Town areas. Always confirm your hotel zone when booking for seamless pickup." },
        { type: "heading", content: "Best Time to Visit Phuket" },
        { type: "paragraph", content: "November to April is the best season for Phuket with dry weather and calm seas — ideal for island tours and beach activities. Peak season is December–January. Avoid May–October if you want guaranteed sunny weather for island hopping." },
        { type: "heading", content: "Book with Confidence on Yellodae" },
        { type: "list", items: [
          "Prices shown in INR — no hidden currency conversion fees",
          "Instant confirmation on all Phuket tours",
          "Free cancellation on select activities",
          "Dedicated WhatsApp support for Indian travelers",
          "Genuine reviews from Indian families and couples",
        ]},
        { type: "cta", content: "Ready to explore Phuket's stunning islands? Book your tour now!", link: "/thailand/phuket", linkText: "🏝️ Browse Phuket Tours" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogTopPhuketTours;
