import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dubaiSkyline from "@/assets/dubai-skyline-night-1.jpg";
import dubaiSkylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import dubaiDesertCouple from "@/assets/dubai-desert-couple-1.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";
import dubaiDhowCruise from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiFountainShow from "@/assets/dubai-fountain-show-1.jpg";
import dubaiGlobalVillage from "@/assets/dubai-global-village-1.jpg";
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.jpg";
import dubaiCityNight from "@/assets/dubai-city-night-1.jpg";
import dubaiDesertCouple2 from "@/assets/dubai-desert-couple-2.jpg";

const activityCards = [
  { title: "Desert Safari with Sharing Transfer", location: "Lahbab Desert", image: dubaiDesertCouple2, slug: "/desert-safari-sharing" },
  { title: "Desert Safari with Shisha", location: "Lahbab Desert", image: dubaiDesertWoman, slug: "/desert-safari-shisha" },
  { title: "Burj Khalifa 124/125 Non-Prime", location: "Downtown Dubai", image: dubaiSkylineSunset, slug: "/burj-khalifa-non-prime" },
  { title: "Burj Khalifa 124/125 Prime", location: "Downtown Dubai", image: dubaiSkyline, slug: "/burj-khalifa-prime" },
  { title: "Dhow Creek Cruise - Lower Deck", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dhow-cruise-creek-lower" },
  { title: "Dhow Creek Cruise - Upper Deck", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dhow-cruise-creek-upper" },
  { title: "Dhow Marina Cruise - Lower Deck", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dhow-cruise-marina-lower" },
  { title: "Dhow Marina Cruise - Upper Deck", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dhow-cruise-marina-upper" },
  { title: "Dubai City Tour", location: "Dubai", image: dubaiCityNight, slug: "/dubai-city-tour" },
  { title: "Dubai City Tour with Mall", location: "Dubai", image: dubaiSkylineSunset, slug: "/dubai-city-tour-mall" },
  { title: "Global Village Dubai", location: "Dubai", image: dubaiGlobalVillage, slug: "/global-village-dubai" },
  { title: "Abu Dhabi City Tour", location: "Abu Dhabi", image: dubaiSkylineSunset, slug: "/abu-dhabi-city-tour" },
  { title: "Dubai Aquarium + Penguin Cove", location: "Dubai Mall", image: dubaiAquariumFish, slug: "/dubai-aquarium-penguin" },
  { title: "Dubai Fountain Show + Lake Ride", location: "Downtown Dubai", image: dubaiFountainShow, slug: "/dubai-fountain-show" },
  { title: "Dubai Dolphin & Seal Show", location: "Dubai", image: dubaiAquariumFish, slug: "/dubai-dolphin-show" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Dubai Activities to Book</h2>
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

const BlogBestDubaiActivities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <BlogArticleLayout
    title="Top Dubai Activities to Book Online in 2026"
    description="Discover the best Dubai activities — from desert safaris to Burj Khalifa, dhow cruises to city tours. Book online for the best prices with instant confirmation."
    heroImage={dubaiSkyline}
    heroAlt="Dubai skyline at night with illuminated skyscrapers"
    author="Yellodae Travel Expert"
    date="Mar 8, 2026"
    readTime="11 min read"
    category="Dubai Travel Guide"
    keywords={["Dubai activities booking online", "best things to do in Dubai", "Dubai tour booking", "desert safari Dubai", "Burj Khalifa tickets", "Dubai dhow cruise", "Dubai city tour", "Dubai travel guide 2026", "Yellodae Dubai"]}
    guidesLink="/dubai-smart-guides"
    guidesLabel="Dubai Guides"
    relatedLinks={[
      { title: "Best Dubai Desert Safari Packages", link: "/blog/desert-safari-deals-dubai" },
      { title: "Burj Khalifa Ticket Booking Guide", link: "/blog/burj-khalifa-tickets-dubai" },
      { title: "Dubai Marina Cruise Experience Guide", link: "/blog/dubai-marina-cruise" },
      { title: "Dubai Airport Transfer Guide", link: "/blog/airport-transfer-booking-dubai" },
    ]}
    sections={[
      { type: "paragraph", content: "Dubai is a city that defies expectations at every turn. From the world's tallest building to vast golden deserts, from traditional dhow cruises to futuristic attractions — Dubai offers an extraordinary mix of luxury, adventure, and culture. Whether you're visiting for the first time or returning for more, there are incredible experiences waiting at every corner." },
      { type: "heading", content: "Why Book Dubai Activities Online?" },
      { type: "list", items: [
        "Save 20-40% compared to walk-in prices at attractions",
        "Instant confirmation with e-tickets — no queuing at counters",
        "Compare multiple packages and operators side by side",
        "Flexible cancellation and rescheduling options",
        "Read verified reviews from thousands of travelers",
        "INR pricing with no hidden conversion charges",
      ]},
      { type: "heading", content: "Top 15 Dubai Activities You Must Try" },
      { type: "subheading", content: "1. Desert Safari with BBQ Dinner" },
      { type: "paragraph", content: "The quintessential Dubai experience. Enjoy thrilling dune bashing in a 4x4 across the Lahbab desert, followed by camel rides, sandboarding, henna painting, and a traditional BBQ dinner under the stars with belly dancing and tanoura shows." },
      { type: "subheading", content: "2. Burj Khalifa Observation Deck" },
      { type: "paragraph", content: "Visit the world's tallest building and take in panoramic views from the 124th and 125th floors. Choose between non-prime hours for the best prices or prime sunset slots for magical golden-hour views over the city." },
      { type: "image", src: dubaiSkylineSunset, alt: "Dubai skyline at sunset with Burj Khalifa", caption: "The iconic Burj Khalifa — the world's tallest building at 828 meters" },
      { type: "subheading", content: "3. Dhow Creek Dinner Cruise" },
      { type: "paragraph", content: "Cruise along the historic Dubai Creek on a traditional wooden dhow while enjoying an international buffet dinner. See the illuminated old Dubai skyline, gold souk, and spice markets from the water." },
      { type: "subheading", content: "4. Dhow Marina Dinner Cruise" },
      { type: "paragraph", content: "A premium cruise through the glittering Dubai Marina with its towering skyscrapers. Enjoy a lavish buffet dinner, live music, and spectacular views of the marina's illuminated waterfront." },
      { type: "subheading", content: "5. Dubai City Tour" },
      { type: "paragraph", content: "A comprehensive guided tour covering the Gold Souk, Spice Souk, Jumeirah Mosque, Palm Jumeirah, Burj Al Arab photo stop, and Dubai Mall. Available as a half-day or full-day tour with hotel pickup." },
      { type: "subheading", content: "6. Abu Dhabi City Tour" },
      { type: "paragraph", content: "Visit the magnificent Sheikh Zayed Grand Mosque, Emirates Palace, Yas Island, and the Abu Dhabi Corniche. A day trip from Dubai that reveals the UAE's cultural capital." },
      { type: "subheading", content: "7. Global Village Dubai" },
      { type: "paragraph", content: "A massive open-air cultural entertainment destination featuring pavilions from 90+ countries, live shows, carnival rides, and street food from around the world. Open seasonally from October to April." },
      { type: "image", src: dubaiGlobalVillage, alt: "Global Village Dubai at night", caption: "Global Village — the world's largest tourism and entertainment project" },
      { type: "subheading", content: "8. Dubai Aquarium & Penguin Cove" },
      { type: "paragraph", content: "Home to one of the world's largest suspended aquariums with 33,000 aquatic animals. Walk through the underwater tunnel and visit the adorable penguin colony at the Penguin Cove exhibit." },
      { type: "subheading", content: "9. Dubai Fountain Show & Lake Ride" },
      { type: "paragraph", content: "Watch the world's largest choreographed fountain system perform to music at the base of Burj Khalifa. The lake ride takes you up close to the dancing waters — a truly magical experience." },
      { type: "subheading", content: "10. Abu Dhabi City Tour + Ferrari World" },
      { type: "paragraph", content: "Combine sightseeing with adrenaline — visit Abu Dhabi's landmarks and then hit Ferrari World for the world's fastest roller coaster, Formula Rossa, reaching 240 km/h." },
      { type: "subheading", content: "11. Desert Safari with Shisha" },
      { type: "paragraph", content: "A premium desert safari experience with private table service, shisha, and VIP seating for entertainment. Perfect for couples and groups wanting a more exclusive experience." },
      { type: "subheading", content: "12. Dubai Dolphin & Seal Show" },
      { type: "paragraph", content: "Watch incredible performances by dolphins and seals including acrobatic jumps, synchronized routines, and audience interactions. A wonderful family-friendly activity." },
      { type: "subheading", content: "13. Miracle Garden Dubai" },
      { type: "paragraph", content: "The world's largest natural flower garden featuring over 150 million flowers arranged in stunning designs including a full-size Emirates A380 aircraft covered in flowers." },
      { type: "subheading", content: "14. Burj Khalifa Prime Time" },
      { type: "paragraph", content: "Visit during sunset for the most spectacular experience — watch the city transform from golden daylight to glittering nightscape from 555 meters above ground." },
      { type: "subheading", content: "15. Dubai City Tour with Mall" },
      { type: "paragraph", content: "Combine the city tour with free time at Dubai Mall — the world's largest shopping mall with 1,200 stores, an ice rink, and the Dubai Aquarium." },
      { type: "heading", content: "Best Time to Visit Dubai" },
      { type: "paragraph", content: "The ideal time is November to March when temperatures are pleasant (20-30°C). December and January are peak season with the best weather but higher prices. Avoid June to September when temperatures exceed 45°C." },
      { type: "tip-box", content: "💡 Pro Tip: Book desert safari and dhow cruise for the same day — safari in the afternoon, cruise in the evening. It's the ultimate Dubai day!" },
      { type: "heading", content: "Why Book with Yellodae?" },
      { type: "list", items: [
        "Lowest price guarantee on all Dubai activities",
        "Instant e-ticket confirmation",
        "24/7 customer support via WhatsApp",
        "Free hotel pickup on most tours",
        "Trusted by 50,000+ Indian travelers",
        "Flexible rescheduling options",
      ]},
      { type: "cta", content: "Ready to explore Dubai? Browse all activities and book at the best prices!", link: "/dubai", linkText: "🇦🇪 Explore Dubai Activities" },
    ]}
  >
    <ActivityCards />
  </BlogArticleLayout>
);

export default BlogBestDubaiActivities;
