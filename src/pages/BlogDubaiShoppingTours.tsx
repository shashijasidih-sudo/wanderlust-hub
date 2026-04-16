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
import dubaiGlobalVillage2 from "@/assets/dubai-global-village-2.jpg";

const activityCards = [
  { title: "Dubai City Tour", location: "Dubai", image: dubaiCityNight, slug: "/dubai/city-tour" },
  { title: "Dubai City Tour with Mall", location: "Dubai", image: dubaiSkylineSunset, slug: "/dubai/city-tour-mall" },
  { title: "Global Village Dubai", location: "Dubai", image: dubaiGlobalVillage, slug: "/dubai/global-village" },
  { title: "Desert Safari with Sharing", location: "Lahbab Desert", image: dubaiDesertCouple2, slug: "/dubai/desert-safari-sharing" },
  { title: "Dhow Creek Cruise - Lower", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-creek-lower-deck" },
  { title: "Dhow Marina Cruise - Lower", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-marina-lower-deck" },
  { title: "Burj Khalifa Non-Prime", location: "Downtown Dubai", image: dubaiSkylineSunset, slug: "/dubai/burj-khalifa-non-prime" },
  { title: "Burj Khalifa Prime Time", location: "Downtown Dubai", image: dubaiSkyline, slug: "/dubai/burj-khalifa-prime" },
  { title: "Dubai Aquarium + Penguin", location: "Dubai Mall", image: dubaiAquariumFish, slug: "/dubai/aquarium-penguin" },
  { title: "Dubai Fountain Show + Ride", location: "Downtown Dubai", image: dubaiFountainShow, slug: "/dubai/fountain-show" },
  { title: "Abu Dhabi City Tour", location: "Abu Dhabi", image: dubaiSkylineSunset, slug: "/dubai/abu-dhabi-city-tour" },
  { title: "Desert Safari with Shisha", location: "Lahbab Desert", image: dubaiDesertWoman, slug: "/dubai/desert-safari-shisha" },
  { title: "Dubai Dolphin & Seal Show", location: "Dubai", image: dubaiAquariumFish, slug: "/dubai/dolphin-show" },
  { title: "Miracle Garden Dubai", location: "Dubai", image: dubaiGlobalVillage2, slug: "/dubai/miracle-garden" },
  { title: "Abu Dhabi + Ferrari World", location: "Abu Dhabi", image: dubaiDesertCouple, slug: "/dubai/abu-dhabi-ferrari-world" },
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

const BlogDubaiShoppingTours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Dubai Shopping Tours Experience — A Complete Guide 2026"
      description="Complete guide to the best Dubai shopping tours — from Dubai Mall to Gold Souk, Mall of Emirates to Global Village. Plan your ultimate shopping experience in Dubai."
      heroImage={dubaiSkyline}
      heroAlt="Dubai skyline at night with illuminated skyscrapers and shopping districts"
      author="Yellodae Travel Expert"
      date="Mar 4, 2026"
      readTime="12 min read"
      category="Dubai Travel Guide"
      keywords={["Dubai shopping tours", "Dubai shopping tours booking", "best Dubai shopping tours", "Dubai Mall shopping", "Gold Souk Dubai", "Dubai shopping guide", "Yellodae Dubai"]}
      guidesLink="/dubai/destination-guides"
      guidesLabel="Dubai Guides"
      relatedLinks={[
        { title: "Top Dubai Activities to Book Online", link: "/blog/best-dubai-activities" },
        { title: "Best Dubai Desert Safari Packages", link: "/blog/desert-safari-deals-dubai" },
        { title: "Burj Khalifa Ticket Booking Guide", link: "/blog/burj-khalifa-tickets-dubai" },
        { title: "Dubai Marina Cruise Experience", link: "/blog/dubai-marina-cruise" },
      ]}
      sections={[
        { type: "paragraph", content: "Dubai is known worldwide as a shopper's paradise, offering everything from luxury designer brands to traditional Arabian markets. A Dubai shopping tour is not just about buying products — it's an experience that combines culture, luxury, entertainment, and world-class shopping destinations." },
        { type: "paragraph", content: "Whether you are visiting for fashion, electronics, gold, perfumes, or souvenirs, the best Dubai shopping tours provide travellers with a guided and comfortable way to explore the city's most famous malls and traditional souks." },
        { type: "heading", content: "Why Dubai is the Ultimate Shopping Destination" },
        { type: "list", items: [
          "Home to the world's largest shopping malls",
          "Huge variety of international luxury brands",
          "Authentic Middle Eastern markets and souks",
          "Tax-free shopping benefits for tourists",
          "Shopping festivals with massive discounts",
        ]},
        { type: "heading", content: "10 Best Dubai Shopping Tours Experience" },
        { type: "subheading", content: "1. The Dubai Mall Luxury Shopping Tour" },
        { type: "paragraph", content: "The Dubai Mall is one of the largest malls in the world with more than 1,200 stores. Explore luxury brands like Gucci, Louis Vuitton, and Chanel. Visit the Dubai Aquarium and Underwater Zoo, watch the famous Dubai Fountain show, and enjoy international dining options." },
        { type: "subheading", content: "2. Mall of the Emirates Shopping Experience" },
        { type: "paragraph", content: "This mall offers a unique experience where you can shop and also enjoy indoor skiing at Ski Dubai. Features premium international brands, indoor ski resort experience, family entertainment and cafes, and fashion and lifestyle stores." },
        { type: "image", src: dubaiSkylineSunset, alt: "Dubai skyline at sunset with luxury shopping districts", caption: "Dubai — the world's premier shopping destination with luxury malls and traditional souks" },
        { type: "subheading", content: "3. Dubai Gold Souk Shopping Tour" },
        { type: "paragraph", content: "The Gold Souk in Deira is a must-visit destination with hundreds of gold shops offering unique handcrafted jewellery, competitive prices with bargaining opportunities, and a traditional Arabian shopping atmosphere." },
        { type: "subheading", content: "4. Spice Souk & Perfume Souk Tour" },
        { type: "paragraph", content: "Experience the traditional side of Dubai shopping — exotic spices from around the world, authentic Arabic perfumes and oud, traditional Arabian market culture, and local souvenirs and gifts." },
        { type: "subheading", content: "5. Souk Madinat Jumeirah Shopping Experience" },
        { type: "paragraph", content: "A beautiful marketplace blending traditional Arabian architecture with modern boutiques. Features stunning views of Burj Al Arab, handmade souvenirs and art pieces, restaurants with waterfront views, and a cultural shopping atmosphere." },
        { type: "subheading", content: "6. City Walk Shopping Tour" },
        { type: "paragraph", content: "A modern open-air shopping district with trendy boutiques, cafes, Instagram-worthy street art, outdoor restaurants, entertainment zones and cinemas." },
        { type: "subheading", content: "7. Global Village Shopping Experience" },
        { type: "paragraph", content: "A cultural shopping festival where you can shop from over 70 countries in one place. Enjoy cultural shows, entertainment, food from around the world, and unique handmade products." },
        { type: "image", src: dubaiGlobalVillage, alt: "Global Village Dubai at night", caption: "Global Village — shop from 70+ countries in one spectacular destination" },
        { type: "subheading", content: "8. Dubai Outlet Mall Shopping Tour" },
        { type: "paragraph", content: "Love discount shopping? Dubai Outlet Mall offers huge discounts on luxury brands, fashion, electronics, and accessories with great deals throughout the year." },
        { type: "subheading", content: "9. Ibn Battuta Mall Shopping Tour" },
        { type: "paragraph", content: "A themed mall inspired by the travels of Ibn Battuta, featuring unique architecture from different civilizations, international brands, and cultural shopping experiences." },
        { type: "subheading", content: "10. Dubai Shopping Festival Tour" },
        { type: "paragraph", content: "The Dubai Shopping Festival (DSF) is one of the biggest shopping events in the world — massive discounts across malls, live concerts and entertainment, fireworks and street shows, and exclusive shopping deals. This seasonal event attracts millions of visitors each year." },
        { type: "heading", content: "Why Choose Yellodae for Dubai Shopping Tours?" },
        { type: "list", items: [
          "Easy Dubai shopping tours booking process",
          "Handpicked experiences and best shopping destinations",
          "Reliable travel support and assistance",
          "Affordable packages for all travellers",
          "Instant confirmations and secure bookings",
          "Perfect for couples, families, and groups",
        ]},
        { type: "tip-box", content: "💡 Pro Tip: Combine your shopping tour with a Dubai City Tour for the complete experience — explore landmarks in the morning and shop in the evening!" },
        { type: "cta", content: "Ready to shop in Dubai? Browse all activities and book at the best prices!", link: "/dubai", linkText: "🇦🇪 Explore Dubai Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogDubaiShoppingTours;
