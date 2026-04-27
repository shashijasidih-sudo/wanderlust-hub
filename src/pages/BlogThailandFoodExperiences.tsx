import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bangkokTemple from "@/assets/bangkok-temple-3.jpg";
import bangkokSkywalk from "@/assets/bangkok-skywalk-hero.jpg";
import floatingMarket from "@/assets/floating-market-1.jpg";
import bangkokCity from "@/assets/bangkok-city-1.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";
import pattayaNightlife from "@/assets/pattaya-nightlife-1.jpg";
import krabiBeach from "@/assets/krabi-beach-woman-1.jpg";
import phiPhi from "@/assets/phi-phi-3.jpg";
import jamesBond from "@/assets/james-bond-1.jpg";
import elephantSafari from "@/assets/elephant-safari-hero.jpg";
import bangkokPagoda from "@/assets/bangkok-pagoda-sunset-1.jpg";
import grandPalace from "@/assets/grand-palace-temple-1.jpg";
import massage from "@/assets/massage-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import ayutthayaSunset from "@/assets/ayutthaya-sunset-1.jpg";

const activityCards = [
  { title: "Bangkok Three Temples Tour", location: "Bangkok", image: bangkokTemple, slug: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer" },
  { title: "Maeklong & Floating Market", location: "Bangkok", image: floatingMarket, slug: "/thailand/bangkok/maeklong-floating-market-tour" },
  { title: "Bangkok Tuk Tuk Night Tour", location: "Bangkok", image: bangkokCity2, slug: "/thailand/bangkok/tuk-tuk-night-tour-bangkok" },
  { title: "Baiyoke Sky Buffet Dinner", location: "Bangkok", image: bangkokSkywalk, slug: "/thailand/bangkok/baiyoke-buffet" },
  { title: "Ayutthaya Sunset Cruise", location: "Ayutthaya", image: ayutthayaSunset, slug: "/thailand/bangkok/ayutthaya-sunset-river-cruise" },
  { title: "Chao Phraya Princess Cruise", location: "Bangkok", image: bangkokPagoda, slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-transfer" },
  { title: "Viva Alangka Dinner Cruise", location: "Bangkok", image: bangkokCity, slug: "/thailand/bangkok/viva-alangka-dinner-cruise" },
  { title: "Pattaya Floating Market Tour", location: "Pattaya", image: floatingMarket, slug: "/thailand/pattaya/floating-market-tour" },
  { title: "Pattaya Nightlife Walking", location: "Pattaya", image: pattayaNightlife, slug: "/thailand/pattaya/nightlife-walking-tour" },
  { title: "Grand Palace & Emerald Buddha", location: "Bangkok", image: grandPalace, slug: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
  { title: "Phi Phi Island by Speedboat", location: "Phuket", image: phiPhi, slug: "/thailand/phuket/phi-phi-island-tour" },
  { title: "James Bond Island Tour", location: "Phuket", image: jamesBond, slug: "/thailand/phuket/james-bond-island-tour" },
  { title: "Elephant Safari Experience", location: "Phuket", image: elephantSafari, slug: "/thailand/phuket/elephant-safari" },
  { title: "Thai Massage Coupons", location: "Bangkok", image: massage, slug: "/thailand/bangkok/thai-massage-spa-deals-bangkok" },
  { title: "Dolphin Bay Phuket", location: "Phuket", image: phuketBoatTour, slug: "/thailand/phuket/dolphin-bay" },
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

const BlogThailandFoodExperiences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Complete Guide to Thailand Food Experiences — Best Culinary Adventures 2026"
      description="Discover the best Thailand food experiences — from Bangkok street food to Phuket seafood, floating markets to rooftop dining. Plan your delicious Thai food journey."
      heroImage={floatingMarket}
      heroAlt="Thailand floating market with vendors cooking food on traditional boats"
      author="Yellodae Travel Expert"
      date="Mar 5, 2026"
      readTime="11 min read"
      category="Thailand Travel Guide"
      keywords={["Thailand food experiences", "Thailand food experiences booking", "best Thailand food", "Bangkok street food", "Thai food tour", "Phuket seafood", "Thailand culinary guide", "Yellodae Thailand"]}
      guidesLink="/thailand/destination-guides"
      guidesLabel="Thailand Guides"
      relatedLinks={[
        { title: "Best Thailand Activities to Book Online", link: "/blog/best-thailand-activities" },
        { title: "Thailand Island Combos Guide", link: "/blog/thailand-island-combos" },
        { title: "Bangkok Activities Booking Guide", link: "/blog/bangkok-activities-guide" },
        { title: "Best Pattaya Activities Guide", link: "/blog/best-pattaya-activities" },
      ]}
      sections={[
        { type: "paragraph", content: "Thailand is one of the most exciting destinations in the world for food lovers. From vibrant street markets to authentic local restaurants, the Thailand food experiences are rich in flavour, culture, and tradition. Whether you are tasting spicy curries, fresh seafood, tropical fruits, or famous Thai street food, every meal in Thailand feels like an adventure." },
        { type: "heading", content: "Why Thailand is a Paradise for Food Lovers" },
        { type: "list", items: [
          "Authentic street food available everywhere",
          "Fresh seafood from coastal regions",
          "Unique local ingredients and spices",
          "Affordable and flavourful meals",
          "Food markets open late at night",
          "Diverse regional cuisines across Thailand",
        ]},
        { type: "heading", content: "10 Best Places for Thailand Food Experiences" },
        { type: "subheading", content: "1. Bangkok Street Food Markets" },
        { type: "paragraph", content: "Bangkok is the heart of Thailand's street food culture. The city offers endless food stalls serving iconic Thai dishes — Pad Thai, Mango Sticky Rice, Thai Basil Chicken, and Boat Noodles. Food streets like Yaowarat (Chinatown) are famous for unforgettable food tours." },
        { type: "subheading", content: "2. Phuket Seafood Restaurants" },
        { type: "paragraph", content: "Phuket offers some of the freshest seafood in Thailand. Beachside restaurants serve grilled Tiger Prawns, Spicy Seafood Soup, and Fried Crab with Curry Powder. Dining by the ocean makes this one of the best food experiences in Thailand." },
        { type: "image", src: bangkokCity, alt: "Bangkok city food scene at night", caption: "Bangkok's vibrant food streets — the heart of Thai street food culture" },
        { type: "subheading", content: "3. Chiang Mai Night Food Markets" },
        { type: "paragraph", content: "Northern Thailand has a unique food culture. Try Khao Soi (Northern curry noodle soup), Sai Ua (Thai sausage), and Sticky Rice with grilled meat. The Chiang Mai Night Bazaar is a food lover's paradise." },
        { type: "subheading", content: "4. Floating Markets in Bangkok" },
        { type: "paragraph", content: "Floating markets offer a truly unique food experience where vendors cook and sell food from boats — boat noodles, coconut pancakes, and fresh tropical fruits. These markets combine Thai culture with amazing flavors." },
        { type: "subheading", content: "5. Pattaya Night Food Streets" },
        { type: "paragraph", content: "Pattaya offers exciting nightlife along with delicious street food — Thai BBQ skewers, fried rice and noodles, and seafood platters. Night markets in Pattaya are perfect for late-night food lovers." },
        { type: "subheading", content: "6. Krabi Beach Dining Experience" },
        { type: "paragraph", content: "Krabi offers one of the most scenic dining experiences in Thailand — romantic beachside restaurants, fresh seafood dishes, and traditional Thai curries. Perfect for couples looking for memorable food experiences." },
        { type: "subheading", content: "7. Ayutthaya River Prawn Dining" },
        { type: "paragraph", content: "Ayutthaya is famous for its giant river prawns — charcoal grilled prawns with Thai seafood sauces in a beautiful riverside dining atmosphere." },
        { type: "subheading", content: "8. Thai Cooking Classes Experience" },
        { type: "paragraph", content: "One of the most interactive food experiences — learn to cook Green Curry, Pad Thai, and Tom Yum Soup. It's a fun activity for travellers who want to bring Thai flavors back home." },
        { type: "subheading", content: "9. Thai Dessert Markets" },
        { type: "paragraph", content: "Thai desserts are unique and delicious — Mango Sticky Rice, Coconut Ice Cream, and Banana Roti. Dessert markets are colourful, vibrant, and perfect for sweet lovers." },
        { type: "subheading", content: "10. Bangkok Rooftop Dining Experience" },
        { type: "paragraph", content: "For a luxury experience, Bangkok's rooftop restaurants offer stunning views of the city skyline along with gourmet Thai dishes and signature cocktails." },
        { type: "tip-box", content: "💡 Pro Tip: Combine a floating market tour with a Bangkok temple tour for the ultimate cultural and culinary day trip!" },
        { type: "heading", content: "Why Choose Yellodae for Your Thailand Food Trip?" },
        { type: "list", items: [
          "Easy Thailand food experiences booking",
          "Handpicked food tours and authentic experiences",
          "Affordable travel packages with best prices",
          "Instant confirmations and reliable service",
          "Expert travel assistance throughout your journey",
          "Perfect itineraries covering the best food spots",
        ]},
        { type: "cta", content: "Ready to explore Thailand's incredible food scene? Browse all activities and book at the best prices!", link: "/thailand", linkText: "🇹🇭 Explore Thailand Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogThailandFoodExperiences;
