import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhiBoat from "@/assets/phi-phi-boat.jpeg";
import jamesBond1 from "@/assets/james-bond-1.jpg";
import krabiBoatTour from "@/assets/krabi-boat-tour-1.jpg";
import krabiLongtail from "@/assets/krabi-longtail-boats-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketPhiPhiHarbour from "@/assets/phuket-phi-phi-harbour-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketLongtailBoats from "@/assets/phuket-longtail-boats-beach-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import krabiIslandView from "@/assets/krabi-island-viewpoint-1.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";
import heroThailandIsland from "@/assets/hero-thailand-island.jpg";

const activityCards = [
  { title: "Phi Phi Island by Speedboat", location: "Phuket", image: phiPhi3, slug: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
  { title: "Phi Phi Island Big Boat", location: "Phuket", image: phiPhiBoat, slug: "/thailand/phuket/phi-phi-island-big-boat-tour-with-transfer" },
  { title: "Phi Phi Royal Jet Tour", location: "Phuket", image: phuketSpeedboat, slug: "/thailand/phuket/phi-phi-island-premium-speedboat-tour-with-transfer" },
  { title: "Phi Phi Maya Khai Speedboat", location: "Phuket", image: phuketMayaBay, slug: "/thailand/phuket/phi-phi-maya-bay-khai-island-speedboat-tour-with-transfer" },
  { title: "James Bond Island Tour", location: "Phuket", image: jamesBond1, slug: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer" },
  { title: "James Bond Island Sea Canoe", location: "Phuket", image: jamesBond1, slug: "/thailand/phuket/james-bond-island-sea-canoe-tour-with-transfer" },
  { title: "James Bond Island from Krabi", location: "Krabi", image: jamesBond1, slug: "/thailand/krabi/james-bond-island" },
  { title: "4 Islands Longtail Tour", location: "Krabi", image: krabiLongtail, slug: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer" },
  { title: "4 Islands Speedboat Tour", location: "Krabi", image: krabiSpeedboat, slug: "/thailand/krabi/4-island-tour-speedboat-with-transfer" },
  { title: "Hong Islands Longtail", location: "Krabi", image: krabiBoatTour, slug: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer" },
  { title: "Hong Islands Speedboat", location: "Krabi", image: krabiKayaks, slug: "/thailand/krabi/hong-island-tour-speedboat-with-transfer" },
  { title: "7 Islands Longtail Tour", location: "Krabi", image: krabiLongtail, slug: "/thailand/krabi/7-islands-tour-longtail-boat-with-transfer" },
  { title: "7 Islands Speedboat Tour", location: "Krabi", image: krabiSpeedboat, slug: "/thailand/krabi/7-islands-tour-speedboat-with-transfer" },
  { title: "Coral Island Pattaya", location: "Pattaya", image: phuketLongtailBoats, slug: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch" },
  { title: "Hot Spring & Emerald Pool", location: "Krabi", image: krabiIslandView, slug: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Thailand Island Tours to Book</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {activityCards.map((a) => (
            <Card key={a.slug} className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300" onClick={() => navigate(a.slug)}>
              <div className="relative h-44 overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-xs">
                  <MapPin className="h-3 w-3" />{a.location}
                </div>
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

const BlogThailandIslandCombos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Complete Guide to Thailand Island Combos — Best Tropical Getaways 2026"
      description="Discover the best Thailand island combos — Phuket + Phi Phi, Krabi combos, Koh Samui packages. Plan your dream tropical escape with expert tips and booking deals."
      heroImage={heroThailandIsland}
      heroAlt="Thailand tropical island with turquoise waters and longtail boats"
      author="Yellodae Travel Expert"
      date="Mar 3, 2026"
      readTime="10 min read"
      category="Thailand Travel Guide"
      keywords={["Thailand island combos", "Thailand island combos booking", "best Thailand island combos", "Phuket Phi Phi combo", "Krabi island tour", "Thailand beach holiday", "Yellodae Thailand"]}
      guidesLink="/thailand/destination-guides"
      guidesLabel="Thailand Guides"
      relatedLinks={[
        { title: "Best Thailand Activities to Book Online", link: "/blog/best-thailand-activities" },
        { title: "Top Phuket Island Tours Guide", link: "/blog/top-phuket-island-tours" },
        { title: "Phi Phi Island Tours Complete Guide", link: "/blog/phi-phi-island-tours-thailand" },
        { title: "Bangkok Activities Booking Guide", link: "/blog/bangkok-activities-guide" },
      ]}
      sections={[
        { type: "paragraph", content: "Thailand is a paradise of turquoise waters, white sandy beaches, vibrant nightlife, and breathtaking islands. If you're planning a tropical escape, Thailand island combos booking is the smartest way to explore multiple destinations in one trip. From lively beach parties to peaceful sunsets, the best Thailand island combos offer something for every traveller." },
        { type: "heading", content: "🌊 1. Phuket + Phi Phi Island Combo" },
        { type: "paragraph", content: "Perfect for first-time visitors who want a mix of relaxation and adventure. Enjoy stunning beaches in Phuket, snorkelling & island hopping tours, the iconic Maya Bay at Phi Phi Islands, and vibrant beach clubs & nightlife." },
        { type: "paragraph", content: "Best for: Couples, honeymooners & adventure lovers." },
        { type: "image", src: phiPhi5, alt: "Phi Phi Island aerial view with turquoise waters", caption: "The stunning Phi Phi Islands — Thailand's most famous island destination" },
        { type: "heading", content: "2. Phuket + Krabi + Phi Phi Combo" },
        { type: "paragraph", content: "The most popular and scenic Thailand island combo for nature lovers. Experience limestone cliffs at Krabi, the famous Railay Beach, vibrant Patong Beach, and incredible island hopping adventures." },
        { type: "paragraph", content: "Best for: Friends, group trips & photographers." },
        { type: "heading", content: "3. Koh Samui + Koh Phangan + Koh Tao Combo" },
        { type: "paragraph", content: "For those who love parties and peaceful escapes together. Enjoy luxury stays in Koh Samui, the legendary Full Moon Party at Koh Phangan, and world-class scuba diving at Koh Tao." },
        { type: "paragraph", content: "Best for: Party lovers & water sports enthusiasts." },
        { type: "heading", content: "4. Phuket + Bangkok Combo" },
        { type: "paragraph", content: "Experience both city life and island vibes in one trip. Explore temples & shopping in Bangkok, relax on Phuket beaches, enjoy Thai street food tours, and try water sports & dinner cruises." },
        { type: "paragraph", content: "Best for: Families & first-time Thailand travellers." },
        { type: "image", src: phuketPhiPhiHarbour, alt: "Phuket harbour with boats ready for island tours", caption: "Phuket harbour — the gateway to Thailand's best island hopping tours" },
        { type: "heading", content: "Must-Visit Places in Thailand Island Combos" },
        { type: "list", items: [
          "Maya Bay — the world-famous beach from 'The Beach' movie",
          "Railay Beach — stunning limestone cliffs and crystal-clear waters",
          "Patong Beach — vibrant nightlife and water sports",
          "Phi Phi Viewpoint — panoramic views of twin bays",
          "Koh Tao coral reefs — some of the best diving in Asia",
          "Bangkok floating markets — unique cultural experience",
          "James Bond Island — iconic limestone karst formation",
        ]},
        { type: "heading", content: "How to Plan the Best Thailand Island Combos" },
        { type: "list", items: [
          "Decide your travel duration — 5–8 days is ideal",
          "Choose 2–3 islands maximum to avoid rushing",
          "Include ferry transfers in your booking",
          "Book island tours in advance for best prices",
          "Choose beachfront stays for the best experience",
        ]},
        { type: "tip-box", content: "💡 Pro Tip: Combine Phuket + Phi Phi for a 4-day getaway, or add Krabi for a full week of island bliss. Book ferry transfers in advance to save time and money." },
        { type: "heading", content: "Why Choose Yellodae for Your Thailand Island Trip?" },
        { type: "list", items: [
          "Instant booking & confirmation",
          "Best curated Thailand island combos",
          "Affordable pricing with premium experiences",
          "Trusted support throughout your journey",
          "Customizable itineraries for any travel style",
          "Easy transfers & activity bookings",
        ]},
        { type: "cta", content: "Ready to explore Thailand's islands? Browse all island tours and book at the best prices!", link: "/thailand", linkText: "🇹🇭 Explore Thailand Island Tours" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogThailandIslandCombos;
