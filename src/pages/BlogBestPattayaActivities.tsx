import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/pattaya-tropical-beach-1.jpg";
import coralIsland from "@/assets/pattaya-boats-beach-1.jpg";
import alcazar from "@/assets/alcazar-show-1.jpg";
import floatingMarket from "@/assets/floating-market-1.jpg";
import nongNooch from "@/assets/pattaya-lake-tour-1.jpg";
import dolphinarium from "@/assets/dolphin-show-3.jpg";
import muayThai from "@/assets/muay-thai-1.jpg";
import nightlife from "@/assets/pattaya-nightlife-1.jpg";
import pubCrawl from "@/assets/pattaya-nightlife-2.jpg";
import bigBuddha from "@/assets/pattaya-temple-woman-1.jpg";
import floatingGuided from "@/assets/pattaya-boat-tour-1.jpg";
import speedboat from "@/assets/pattaya-speedboat-1.jpg";
import elephantSafari from "@/assets/elephant-1.jpg";
import tigerSelfie from "@/assets/tiger-1.jpg";
import safariWorld from "@/assets/elephant-safari-hero.jpg";

const activityCards = [
  { title: "Coral Island & Water Sports", location: "Pattaya", image: coralIsland, slug: "/thailand/pattaya/coral-island" },
  { title: "Alcazar Cabaret Show", location: "Pattaya", image: alcazar, slug: "/thailand/pattaya/alcazar-show" },
  { title: "Pattaya Floating Market Tour", location: "Pattaya", image: floatingMarket, slug: "/thailand/pattaya/floating-market-tour" },
  { title: "Pattaya Floating Market Guided", location: "Pattaya", image: floatingGuided, slug: "/thailand/pattaya/floating-market-guided" },
  { title: "Nong Nooch Tropical Garden", location: "Pattaya", image: nongNooch, slug: "/thailand/pattaya/nong-nooch-garden" },
  { title: "Pattaya Dolphinarium", location: "Pattaya", image: dolphinarium, slug: "/thailand/pattaya/dolphinarium" },
  { title: "Muay Thai Live Show", location: "Pattaya", image: muayThai, slug: "/thailand/pattaya/muay-thai" },
  { title: "Pattaya Big Buddha & Gems Gallery", location: "Pattaya", image: bigBuddha, slug: "/thailand/pattaya/big-buddha-gems" },
  { title: "Pattaya Nightlife Walking Tour", location: "Pattaya", image: nightlife, slug: "/thailand/pattaya/nightlife-walking-tour" },
  { title: "Pattaya Pub Crawl", location: "Pattaya", image: pubCrawl, slug: "/thailand/pattaya/pub-crawl" },
  { title: "Elephant Safari Phuket", location: "Phuket", image: elephantSafari, slug: "/thailand/phuket/elephant-safari" },
  { title: "Selfie with Tigers", location: "Phuket", image: tigerSelfie, slug: "/thailand/phuket/selfie-with-tigers" },
  { title: "Safari World & Marine Park", location: "Bangkok", image: safariWorld, slug: "/thailand/bangkok/safari-world" },
  { title: "Dolphin Show Phuket", location: "Phuket", image: speedboat, slug: "/thailand/bangkok/dolphin-show" },
  { title: "Alcazar Show + Floating Market Combo", location: "Pattaya", image: alcazar, slug: "/thailand/pattaya/floating-market-tour" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Pattaya Activities to Book Now</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {activityCards.map((a, i) => (
            <Card key={a.slug + i} className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300" onClick={() => navigate(a.slug)}>
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

const BlogBestPattayaActivities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Best Pattaya Activities for First-Time Visitors — 2026 Guide"
      description="Discover the top 15 Pattaya activities for first-time visitors. From Coral Island tours to Alcazar Show, floating markets to nightlife, plan your perfect Pattaya trip."
      heroImage={heroImg}
      heroAlt="Pattaya tropical beach with clear blue water"
      author="Yellodae Pattaya Expert"
      date="Mar 5, 2026"
      readTime="13 min read"
      category="Pattaya Travel Guide"
      keywords={["Pattaya activities for first time visitors", "best things to do in Pattaya", "Pattaya tour booking", "Coral Island Pattaya", "Alcazar Show Pattaya", "Pattaya nightlife", "Pattaya travel guide 2026", "Yellodae Pattaya"]}
      guidesLink="/thailand/destination-guides"
      guidesLabel="Thailand Guides"
      relatedLinks={[
        { title: "Best Thailand Activities to Book Online", link: "/blog/best-thailand-activities" },
        { title: "Top Phuket Island Tours for Indian Travelers", link: "/blog/top-phuket-island-tours" },
        { title: "Bangkok Activities Booking Guide", link: "/blog/bangkok-activities-guide" },
        { title: "Airport Transfer Booking Guide Thailand", link: "/blog/airport-transfer-booking-thailand" },
      ]}
      sections={[
        { type: "paragraph", content: "Pattaya, just 2 hours from Bangkok, is Thailand's ultimate beach city packed with incredible activities for every type of traveler. Whether you're looking for thrilling water sports, cultural experiences, vibrant nightlife, or family-friendly fun — Pattaya delivers it all. This guide covers the 15 best activities that every first-time visitor should experience." },
        { type: "heading", content: "Why Visit Pattaya?" },
        { type: "list", items: [
          "Just 90 minutes from Bangkok — perfect for a day trip or multi-day stay",
          "Beautiful beaches and stunning island tours",
          "World-class entertainment shows and nightlife",
          "Affordable activities — great value for families and groups",
          "Wide range of Indian restaurants and vegetarian food options",
          "Easy to combine with Bangkok for a dual-city trip",
        ]},
        { type: "heading", content: "Top 15 Pattaya Activities for First-Time Visitors" },
        { type: "subheading", content: "1. Coral Island & Water Sports" },
        { type: "paragraph", content: "The most popular Pattaya activity! Take a speedboat to Koh Larn (Coral Island) and enjoy parasailing, jet-skiing, banana boat rides, snorkelling, and swimming in crystal-clear waters. The island has beautiful beaches, restaurants, and stunning views." },
        { type: "subheading", content: "2. Alcazar Cabaret Show" },
        { type: "paragraph", content: "Pattaya's most famous entertainment! This world-renowned cabaret show features stunning performers in elaborate costumes performing to international hit songs. The show runs multiple times nightly and is suitable for all audiences." },
        { type: "image", src: alcazar, alt: "Alcazar Cabaret Show Pattaya performers", caption: "The spectacular Alcazar Cabaret Show — Pattaya's must-see entertainment" },
        { type: "subheading", content: "3. Pattaya Floating Market" },
        { type: "paragraph", content: "A unique cultural experience where vendors sell food, crafts, and souvenirs from traditional Thai boats. Take a boat ride through the market, sample local delicacies, and enjoy cultural performances." },
        { type: "subheading", content: "4. Pattaya Floating Market Guided Tour" },
        { type: "paragraph", content: "An enhanced experience with a knowledgeable guide who explains the history, culture, and best food to try. Includes hotel pickup and drop-off for convenience." },
        { type: "subheading", content: "5. Nong Nooch Tropical Garden" },
        { type: "paragraph", content: "A stunning 500-acre botanical wonderland featuring themed gardens, cultural shows, elephant performances, and beautifully landscaped grounds. One of Pattaya's most Instagram-worthy attractions." },
        { type: "subheading", content: "6. Pattaya Dolphinarium" },
        { type: "paragraph", content: "Watch amazing dolphin and seal performances in an intimate indoor arena. The shows feature acrobatic tricks, audience interactions, and educational content about marine life." },
        { type: "subheading", content: "7. Muay Thai Live Show" },
        { type: "paragraph", content: "Experience Thailand's national sport with a dramatic live performance combining real Muay Thai fighting techniques with theatrical storytelling. An adrenaline-pumping evening entertainment." },
        { type: "image", src: muayThai, alt: "Muay Thai boxing show in Pattaya", caption: "Muay Thai Live — experience Thailand's legendary martial art" },
        { type: "subheading", content: "8. Pattaya Big Buddha & Gems Gallery" },
        { type: "paragraph", content: "Visit the hilltop Big Buddha temple with panoramic views of Pattaya Bay, then explore Thailand's famous Gems Gallery for stunning jewelry and gemstone displays." },
        { type: "subheading", content: "9. Pattaya Nightlife Walking Tour" },
        { type: "paragraph", content: "Explore Pattaya's legendary Walking Street and nightlife areas with a guided walking tour. Visit rooftop bars, live music venues, and experience the vibrant energy of Pattaya after dark." },
        { type: "subheading", content: "10. Pattaya Pub Crawl" },
        { type: "paragraph", content: "A fun-filled social event visiting multiple bars and clubs in one night. Meet fellow travelers, enjoy drink specials, and experience the best of Pattaya's party scene with a group." },
        { type: "heading", content: "Bonus Activities Nearby" },
        { type: "subheading", content: "11-15: More Must-Try Experiences" },
        { type: "list", items: [
          "Elephant Safari — ethical elephant encounter with feeding and bathing experiences",
          "Selfie with Tigers — get up close with magnificent tigers at Tiger Kingdom",
          "Safari World & Marine Park (Bangkok) — easily accessible as a day trip",
          "Dolphin Show Phuket — plan a combo trip to Thailand's biggest island",
          "Floating Market + Alcazar Combo — book together for extra savings",
        ]},
        { type: "tip-box", content: "💡 First-Timer Tip: Book the Coral Island + Alcazar Show combo for the perfect Pattaya day — beach fun during the day and spectacular entertainment at night!" },
        { type: "heading", content: "Getting to Pattaya" },
        { type: "paragraph", content: "Pattaya is easily accessible from Bangkok. Book a private transfer from Suvarnabhumi (BKK) or Don Mueang (DMK) airport directly to your Pattaya hotel. The drive takes about 90 minutes on the motorway. Yellodae offers comfortable airport transfers with meet-and-greet service." },
        { type: "heading", content: "Best Time to Visit Pattaya" },
        { type: "paragraph", content: "November to February offers the best weather with pleasant temperatures and minimal rain. March–May is hot but great for water sports. June–October has occasional rain but fewer tourists and lower prices." },
        { type: "cta", content: "Ready to explore Pattaya? Book your activities at the best prices!", link: "/thailand/pattaya", linkText: "🏖️ Browse Pattaya Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogBestPattayaActivities;
