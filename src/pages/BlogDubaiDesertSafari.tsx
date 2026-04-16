import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/dubai-desert-couple-1.jpg";
import desertImg from "@/assets/dubai-desert-woman-1.jpg";
import sunsetImg from "@/assets/dubai-skyline-sunset-1.jpg";
import villageImg from "@/assets/dubai-global-village-1.jpg";
import dubaiDhowCruise from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiSkylineNight from "@/assets/dubai-skyline-night-1.jpg";
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.jpg";
import dubaiCityNight from "@/assets/dubai-city-night-1.jpg";
import dubaiDesertCouple2 from "@/assets/dubai-desert-couple-2.jpg";
import dubaiFountainShow from "@/assets/dubai-fountain-show-1.jpg";

const desertActivityCards = [
  { title: "Desert Safari with Sharing Transfer", location: "Lahbab Desert", image: dubaiDesertCouple2, slug: "/dubai/desert-safari-sharing" },
  { title: "Desert Safari with Shisha", location: "Lahbab Desert", image: desertImg, slug: "/dubai/desert-safari-shisha" },
  { title: "Burj Khalifa Non-Prime", location: "Downtown Dubai", image: sunsetImg, slug: "/dubai/burj-khalifa-non-prime" },
  { title: "Dhow Creek Cruise - Lower Deck", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-creek-lower-deck" },
  { title: "Dhow Marina Cruise - Lower Deck", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-marina-lower-deck" },
  { title: "Dubai City Tour", location: "Dubai", image: dubaiCityNight, slug: "/dubai/city-tour" },
  { title: "Dubai City Tour with Mall", location: "Dubai", image: sunsetImg, slug: "/dubai/city-tour-mall" },
  { title: "Global Village Dubai", location: "Dubai", image: villageImg, slug: "/dubai/global-village" },
  { title: "Abu Dhabi City Tour", location: "Abu Dhabi", image: sunsetImg, slug: "/dubai/abu-dhabi-city-tour" },
  { title: "Abu Dhabi + Ferrari World", location: "Abu Dhabi", image: dubaiSkylineNight, slug: "/dubai/abu-dhabi-ferrari-world" },
  { title: "Dubai Aquarium + Penguin Cove", location: "Dubai Mall", image: dubaiAquariumFish, slug: "/dubai/aquarium-penguin" },
  { title: "Dubai Fountain Show + Lake Ride", location: "Downtown Dubai", image: dubaiFountainShow, slug: "/dubai/fountain-show" },
  { title: "Dubai Dolphin & Seal Show", location: "Dubai", image: dubaiAquariumFish, slug: "/dubai/dolphin-show" },
  { title: "Miracle Garden Dubai", location: "Dubai", image: villageImg, slug: "/dubai/miracle-garden" },
  { title: "Burj Khalifa Prime", location: "Downtown Dubai", image: dubaiSkylineNight, slug: "/dubai/burj-khalifa-prime" },
];

const DesertActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Dubai Activities to Book</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {desertActivityCards.map((a) => (
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

const BlogDubaiDesertSafari = () => {
  return (
    <BlogArticleLayout
      title="Complete Guide to Desert Safari Deals in Dubai"
      description="Discover the best desert safari deals in Dubai — morning, evening, overnight & VIP options. Dune bashing, camel rides, BBQ dinner, and live entertainment."
      heroImage={heroImg}
      heroAlt="Desert safari in Dubai — couple enjoying golden sand dunes"
      author="Yellodae Desert Expert"
      date="Feb 20, 2026"
      readTime="12 min read"
      category="Desert Adventures"
      guidesLink="/dubai/destination-guides"
      guidesLabel="Dubai Guides"
      keywords={[
        "Dubai desert safari deals booking",
        "best desert safari deals Dubai",
        "Dubai desert safari",
        "dune bashing Dubai",
        "evening desert safari Dubai",
        "overnight desert safari Dubai",
        "camel ride Dubai",
        "Dubai safari BBQ dinner",
        "Lahbab desert Dubai",
        "Yellodae desert safari",
      ]}
      relatedLinks={[
        { title: "Dubai Airport Transfer Guide", link: "/blog/airport-transfer-booking-dubai" },
        { title: "Desert Safari Evening", link: "/dubai/desert-safari" },
        { title: "Desert Safari with Shisha", link: "/dubai/desert-safari-shisha" },
        { title: "Dhow Cruise Marina", link: "/dubai/dhow-cruise" },
      ]}
      sections={[
        {
          type: "paragraph",
          content: "Dubai is famous for its luxury lifestyle, futuristic skyline, and unforgettable desert adventures. If you're planning a trip to the UAE, exploring the golden dunes is a must. With the right Dubai desert safari deals booking, you can experience thrill, culture, and luxury — all in one incredible journey.",
        },
        {
          type: "heading",
          content: "Why Desert Safari in Dubai is a Must-Do Experience",
        },
        {
          type: "paragraph",
          content: "A desert safari is not just a tour — it's an adventure filled with excitement, culture, and breathtaking natural beauty. Here's what you can enjoy:",
        },
        {
          type: "list",
          items: [
            "🚙 Dune Bashing in 4x4 Land Cruisers — thrilling rides over golden sand dunes",
            "🐪 Traditional Camel Riding across the vast desert landscape",
            "🌅 Stunning sunset photography in the golden hour",
            "🎭 Live entertainment — Belly Dance, Tanoura & Fire Shows",
            "🍖 BBQ dinner under the stars with veg & non-veg options",
            "🏄 Quad biking & sandboarding for adventure lovers",
            "Henna painting & Arabic dress photography",
          ],
        },
        {
          type: "image",
          src: desertImg,
          alt: "Woman enjoying desert safari in Dubai golden dunes",
          caption: "Experience the magic of Dubai's golden desert",
        },
        {
          type: "heading",
          content: "Types of Dubai Desert Safari Deals",
        },
        {
          type: "subheading",
          content: "Morning Desert Safari",
        },
        {
          type: "paragraph",
          content: "Perfect for adventure seekers who love cooler temperatures. Includes dune bashing, sandboarding, camel ride, and optional quad biking. Great if you have limited time but want the adrenaline rush.",
        },
        {
          type: "subheading",
          content: "Evening Desert Safari (Most Popular)",
        },
        {
          type: "paragraph",
          content: "The most recommended option and best value for money. Includes dune bashing, sunset views, camel rides, live entertainment shows, and a BBQ buffet dinner. This is the complete desert experience most tourists choose.",
        },
        {
          type: "subheading",
          content: "Premium / VIP Desert Safari",
        },
        {
          type: "paragraph",
          content: "Private seating, premium food, and exclusive services — ideal for couples, families, and those who want a luxury desert experience.",
        },
        {
          type: "subheading",
          content: "Overnight Desert Safari",
        },
        {
          type: "paragraph",
          content: "Want a magical night in the desert? This includes all evening activities plus an overnight stay in a Bedouin-style camp, stargazing experience, and morning breakfast. Truly unforgettable.",
        },
        {
          type: "tip-box",
          content: "💡 Pro Tip: Always compare inclusions before booking to ensure you're getting the best desert safari deals in Dubai. Check for transfers, dinner, activities, and insurance.",
        },
        {
          type: "heading",
          content: "Best Desert Safari Locations in Dubai",
        },
        {
          type: "subheading",
          content: "🌵 Lahbab Desert (Red Dunes)",
        },
        {
          type: "paragraph",
          content: "Famous for its dramatic high red dunes — perfect for dune bashing, quad biking, and stunning photography. The most popular location for safari tours.",
        },
        {
          type: "subheading",
          content: "🌄 Al Awir Desert",
        },
        {
          type: "paragraph",
          content: "Closer to the city and known for traditional desert safari camps with authentic Bedouin-style setups.",
        },
        {
          type: "subheading",
          content: "🦌 Dubai Desert Conservation Reserve",
        },
        {
          type: "paragraph",
          content: "Ideal for wildlife lovers. Spot Arabian oryx and experience eco-friendly safaris in a protected natural environment.",
        },
        {
          type: "image",
          src: sunsetImg,
          alt: "Dubai sunset skyline — desert safari destination",
          caption: "Dubai's stunning sunsets are a highlight of every desert safari",
        },
        {
          type: "heading",
          content: "How to Choose the Best Desert Safari Deals",
        },
        {
          type: "list",
          items: [
            "Check inclusions carefully — transfers, dinner, activities",
            "Verify pickup & drop-off service is included",
            "Look at entertainment options and meal quality",
            "Read reviews & ratings from other travellers",
            "Ensure proper safety standards are maintained",
            "Book online in advance for better prices",
          ],
        },
        {
          type: "heading",
          content: "Best Places to Visit Along with Desert Safari",
        },
        {
          type: "list",
          items: [
            "Burj Khalifa — The world's tallest building with observation decks",
            "Dubai Marina — Stunning skyline & cruise dinner options",
            "Palm Jumeirah — Luxury island experience and Atlantis resort",
            "Dubai Mall — World-class shopping & Dubai Fountain show",
            "Jumeirah Mosque — Beautiful cultural experience",
          ],
        },
        {
          type: "image",
          src: villageImg,
          alt: "Dubai Global Village — another must-visit Dubai attraction",
          caption: "Combine your desert safari with other iconic Dubai attractions",
        },
        {
          type: "heading",
          content: "Why Choose Yellodae for Desert Safari Booking?",
        },
        {
          type: "list",
          items: [
            "Instant booking confirmation — no waiting",
            "Best price guarantee on all Dubai activities",
            "Trusted & verified local tour operators",
            "Easy customization of tours & transfers",
            "24/7 customer support for any queries",
            "Secure online payments",
          ],
        },
        {
          type: "heading",
          content: "Tips Before You Go",
        },
        {
          type: "list",
          items: [
            "Wear comfortable clothes & sunglasses",
            "Avoid heavy meals before dune bashing",
            "Carry a light jacket for evening safaris",
            "Keep your camera ready for sunset views",
            "Book in advance for peak season availability",
          ],
        },
        {
          type: "heading",
          content: "Final Thoughts",
        },
        {
          type: "paragraph",
          content: "A desert safari is one of the most unforgettable experiences in Dubai. From thrilling rides over golden dunes to cultural performances under the stars, it offers something for every traveller. If you're looking for reliable Dubai desert safari deals booking, choose a platform that gives you value, safety, and convenience.",
        },
        {
          type: "cta",
          content: "Ready for the ultimate desert adventure? Plan smart, travel better, experience more!",
          link: "/dubai/desert-safari",
          linkText: "🏜️ Book Desert Safari Now",
        },
      ]}
    >
      <DesertActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogDubaiDesertSafari;
