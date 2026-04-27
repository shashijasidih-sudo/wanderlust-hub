import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/hero-thailand-adventure.jpg";
import phiPhi from "@/assets/phi-phi-3.jpg";
import jamesBond from "@/assets/james-bond-1.jpg";
import bangkokTemple from "@/assets/bangkok-temple-3.jpg";
import safariWorld from "@/assets/elephant-safari-hero.jpg";
import coralIsland from "@/assets/pattaya-boats-beach-1.jpg";
import floatingMarket from "@/assets/floating-market-1.jpg";
import alcazar from "@/assets/alcazar-show-1.jpg";
import grandPalace from "@/assets/grand-palace-temple-1.jpg";
import dolphinShow from "@/assets/dolphin-show-1.jpg";
import tigerSelfie from "@/assets/tiger-selfie-hero.jpg";
import bangkokSkywalk from "@/assets/bangkok-skywalk-hero.jpg";
import hotSpring from "@/assets/hot-spring-emerald-hero.jpg";
import massage from "@/assets/massage-coupon-hero.jpg";
import nongNooch from "@/assets/pattaya-tropical-beach-1.jpg";
import cruiseNight from "@/assets/cruise-night-1.jpg";

const activityCards = [
  { title: "Phi Phi Island, Maya Bay & Khai Island Speedboat", location: "Phuket", image: phiPhi, slug: "/thailand/phuket/phi-phi-island-tour" },
  { title: "James Bond Island & Phang Nga Bay Tour", location: "Phuket", image: jamesBond, slug: "/thailand/phuket/james-bond-island-tour" },
  { title: "Grand Palace & Emerald Buddha Temple Tour", location: "Bangkok", image: grandPalace, slug: "/thailand/bangkok/grand-palace-emerald" },
  { title: "Safari World & Marine Park", location: "Bangkok", image: safariWorld, slug: "/thailand/bangkok/safari-world" },
  { title: "Coral Island & Water Sports Pattaya", location: "Pattaya", image: coralIsland, slug: "/thailand/pattaya/coral-island" },
  { title: "Floating Market & Railway Market Tour", location: "Bangkok", image: floatingMarket, slug: "/thailand/bangkok/maeklong-floating-market" },
  { title: "Alcazar Cabaret Show Pattaya", location: "Pattaya", image: alcazar, slug: "/thailand/pattaya/alcazar-show" },
  { title: "Dolphin Show Phuket", location: "Phuket", image: dolphinShow, slug: "/thailand/bangkok/dolphin-show" },
  { title: "Selfie with Tigers", location: "Phuket", image: tigerSelfie, slug: "/thailand/phuket/selfie-with-tigers" },
  { title: "Bangkok King Power Mahanakhon Skywalk", location: "Bangkok", image: bangkokSkywalk, slug: "/thailand/bangkok/skywalk" },
  { title: "Hot Spring & Emerald Pool with Tiger Cave", location: "Krabi", image: hotSpring, slug: "/thailand/phuket/hot-spring-emerald-pool" },
  { title: "Thai Massage Coupon Packages", location: "Bangkok", image: massage, slug: "/thailand/bangkok/massage-coupons" },
  { title: "Nong Nooch Tropical Garden", location: "Pattaya", image: nongNooch, slug: "/thailand/pattaya/nong-nooch-garden" },
  { title: "Chao Phraya Princess Dinner Cruise", location: "Bangkok", image: cruiseNight, slug: "/thailand/bangkok/chao-phraya-princess-with-transfer" },
  { title: "Bangkok Three Temples City Tour", location: "Bangkok", image: bangkokTemple, slug: "/thailand/bangkok/three-temples-tour" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Thailand Activities to Book</h2>
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

const BlogBestThailandActivities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Best Thailand Activities to Book Online in 2026"
      description="Discover the top 15 Thailand activities — from island hopping to temple tours, night markets to wildlife safaris. Book online for the best prices with instant confirmation."
      heroImage={heroImg}
      heroAlt="Thailand adventure — temples, beaches and islands"
      author="Yellodae Travel Expert"
      date="Mar 5, 2026"
      readTime="12 min read"
      category="Thailand Travel Guide"
      keywords={["Thailand activities booking online", "best things to do in Thailand", "Thailand tour booking", "Thailand island tours", "Bangkok temple tours", "Phuket activities", "Pattaya tours", "Krabi tours", "Thailand travel guide 2026", "Yellodae Thailand"]}
      guidesLink="/thailand/destination-guides"
      guidesLabel="Thailand Guides"
      relatedLinks={[
        { title: "Top Phuket Island Tours for Indian Travelers", link: "/blog/top-phuket-island-tours" },
        { title: "Bangkok Activities Booking Guide", link: "/blog/bangkok-activities-guide" },
        { title: "Best Pattaya Activities for First-Time Visitors", link: "/blog/best-pattaya-activities" },
        { title: "Phi Phi Island Tours Complete Guide", link: "/blog/phi-phi-island-tours-thailand" },
      ]}
      sections={[
        { type: "paragraph", content: "Thailand is one of the most popular travel destinations in the world, and for good reason. From stunning tropical islands to ancient temples, vibrant night markets to thrilling wildlife encounters — Thailand offers something for every traveler. Whether you're visiting Bangkok, Phuket, Pattaya, or Krabi, there are incredible activities waiting for you at every turn." },
        { type: "heading", content: "Why Book Thailand Activities Online?" },
        { type: "list", items: [
          "Get the best prices with exclusive online discounts — often 20-40% cheaper than walk-in rates",
          "Instant confirmation — no waiting, no uncertainty about availability",
          "Skip the queues with e-tickets and fast-track entry at popular attractions",
          "Read verified reviews from thousands of real travelers before you book",
          "Flexible cancellation policies give you peace of mind",
          "Compare multiple tour operators and packages side by side",
        ]},
        { type: "heading", content: "Top 15 Thailand Activities You Must Try" },
        { type: "subheading", content: "1. Phi Phi Island, Maya Bay & Khai Island Speedboat Tour" },
        { type: "paragraph", content: "Visit Thailand's most iconic island group. Swim in crystal-clear turquoise waters at Maya Bay (famous from the movie 'The Beach'), snorkel among vibrant coral reefs, and relax on pristine white-sand beaches. The speedboat tour covers multiple stunning stops in one unforgettable day." },
        { type: "subheading", content: "2. James Bond Island & Phang Nga Bay Tour" },
        { type: "paragraph", content: "Cruise through the dramatic limestone karsts of Phang Nga Bay and visit the famous James Bond Island. Explore sea caves by canoe, visit a floating village, and enjoy some of the most spectacular scenery in Southeast Asia." },
        { type: "image", src: jamesBond, alt: "James Bond Island in Phang Nga Bay", caption: "The iconic James Bond Island — a must-visit in Phuket" },
        { type: "subheading", content: "3. Grand Palace & Emerald Buddha Temple Tour" },
        { type: "paragraph", content: "Bangkok's most revered landmark, the Grand Palace complex houses the sacred Emerald Buddha temple. A guided tour takes you through centuries of Thai royal history, intricate architecture, and stunning golden spires. An absolute must for first-time Bangkok visitors." },
        { type: "subheading", content: "4. Safari World & Marine Park Bangkok" },
        { type: "paragraph", content: "Thailand's largest open zoo features a drive-through safari with giraffes, zebras and lions, plus spectacular dolphin shows, orangutan boxing, and bird performances. Perfect for families and wildlife enthusiasts." },
        { type: "subheading", content: "5. Coral Island & Water Sports Pattaya" },
        { type: "paragraph", content: "Escape to Koh Larn (Coral Island) for a day of parasailing, jet-skiing, banana boat rides, and snorkelling in clear blue waters. Just 45 minutes from Pattaya by speedboat." },
        { type: "subheading", content: "6. Floating Market & Railway Market Tour" },
        { type: "paragraph", content: "Experience the unique Maeklong Railway Market where vendors fold their stalls as trains pass through, then cruise the colorful Damnoen Saduak Floating Market. A quintessential Thai cultural experience." },
        { type: "image", src: floatingMarket, alt: "Thailand floating market with traditional boats", caption: "The famous floating markets — a unique Thai cultural experience" },
        { type: "subheading", content: "7. Alcazar Cabaret Show Pattaya" },
        { type: "paragraph", content: "One of Southeast Asia's most spectacular cabaret shows featuring dazzling costumes, impressive choreography, and international music performances. A must-see evening entertainment in Pattaya." },
        { type: "subheading", content: "8. Dolphin Show Phuket" },
        { type: "paragraph", content: "Watch incredible dolphin performances including acrobatic jumps, hoop tricks, and audience interactions. Great fun for families traveling with children." },
        { type: "subheading", content: "9. Selfie with Tigers Phuket" },
        { type: "paragraph", content: "Get up close with magnificent tigers at Tiger Kingdom. Choose from baby, small, medium, or giant tiger encounters with professional photographers to capture the moment." },
        { type: "subheading", content: "10. Bangkok King Power Mahanakhon Skywalk" },
        { type: "paragraph", content: "Stand on the glass floor of Thailand's highest observation deck at 314 meters. The 360-degree panoramic views of Bangkok's skyline are absolutely breathtaking, especially at sunset." },
        { type: "subheading", content: "11. Hot Spring & Emerald Pool with Tiger Cave Temple" },
        { type: "paragraph", content: "Krabi's natural wonders in one tour — soak in natural hot springs, swim in the stunning emerald-green pool surrounded by jungle, and climb 1,237 steps to Tiger Cave Temple for panoramic views." },
        { type: "subheading", content: "12. Thai Massage Coupon Packages" },
        { type: "paragraph", content: "Pre-book authentic Thai massage sessions at top-rated spas for heavily discounted prices. Available across Bangkok, Pattaya, and Phuket." },
        { type: "subheading", content: "13. Nong Nooch Tropical Garden Pattaya" },
        { type: "paragraph", content: "A stunning 500-acre botanical garden featuring Thai cultural shows, elephant performances, and beautifully landscaped themed gardens. One of Pattaya's top attractions." },
        { type: "subheading", content: "14. Chao Phraya Princess Dinner Cruise" },
        { type: "paragraph", content: "Cruise along the Chao Phraya River while enjoying a lavish international buffet dinner. See Bangkok's illuminated temples and landmarks from the water — pure magic." },
        { type: "image", src: cruiseNight, alt: "Bangkok dinner cruise on the Chao Phraya River", caption: "A magical dinner cruise along Bangkok's river of kings" },
        { type: "subheading", content: "15. Bangkok Three Temples City Tour" },
        { type: "paragraph", content: "Visit Bangkok's three most important temples — Wat Pho (Reclining Buddha), Wat Arun (Temple of Dawn), and Wat Traimit (Golden Buddha) — in one comprehensive guided tour with hotel transfers." },
        { type: "heading", content: "Best Time to Visit Thailand" },
        { type: "paragraph", content: "The ideal time to visit Thailand is November to April when the weather is dry and pleasant. December to February offers the coolest temperatures, perfect for temple tours and city exploration. For beach and island activities, November to March provides the best sea conditions." },
        { type: "tip-box", content: "💡 Pro Tip: Book your activities 2-3 days in advance to secure the best prices and availability, especially during peak season (December-January)." },
        { type: "heading", content: "Why Book with Yellodae?" },
        { type: "list", items: [
          "Lowest price guarantee on all Thailand activities",
          "Instant e-ticket confirmation",
          "24/7 customer support via WhatsApp",
          "Free hotel pickup included in most tours",
          "Trusted by 50,000+ Indian travelers",
          "Flexible rescheduling options",
        ]},
        { type: "cta", content: "Ready to explore Thailand? Browse all activities and book at the best prices!", link: "/thailand", linkText: "🇹🇭 Explore Thailand Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogBestThailandActivities;
