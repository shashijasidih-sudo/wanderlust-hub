import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/bangkok-temple-3.jpg";
import grandPalace from "@/assets/grand-palace-temple-1.jpg";
import threeTemples from "@/assets/bangkok-temple-4.jpg";
import watArun from "@/assets/wat-arun-twilight-1.jpg";
import gemsGallery from "@/assets/gems-gallery-temple-1.jpg";
import safariWorld from "@/assets/elephant-safari-hero.jpg";
import skywalk from "@/assets/bangkok-skywalk-hero.jpg";
import floatingMarket from "@/assets/floating-market-1.jpg";
import tukTuk from "@/assets/bangkok-city-night-1.jpg";
import dreamWorld from "@/assets/bangkok-city-2.jpg";
import cruise from "@/assets/cruise-night-1.jpg";
import vivaAlangka from "@/assets/valentine-cruise-1.jpg";
import ayutthaya from "@/assets/ayutthaya-sunset-1.jpg";
import baiyoke from "@/assets/bangkok-city-1.jpg";
import seaLife from "@/assets/bangkok-city-purple-1.jpg";
import massage from "@/assets/massage-coupon-hero.jpg";

const activityCards = [
  { title: "Grand Palace & Emerald Buddha Temple", location: "Bangkok", image: grandPalace, slug: "/bangkok-grand-palace-emerald" },
  { title: "Bangkok Three Temples City Tour", location: "Bangkok", image: threeTemples, slug: "/bangkok-three-temples" },
  { title: "Wat Arun, Pho & Traimit Tour", location: "Bangkok", image: watArun, slug: "/bangkok-wat-arun-pho-traimit" },
  { title: "Bangkok City & Gems Gallery Tour", location: "Bangkok", image: gemsGallery, slug: "/bangkok-city-gems-gallery" },
  { title: "Safari World & Marine Park", location: "Bangkok", image: safariWorld, slug: "/safari-world" },
  { title: "King Power Mahanakhon Skywalk", location: "Bangkok", image: skywalk, slug: "/bangkok-skywalk" },
  { title: "Floating Market & Railway Market Tour", location: "Bangkok", image: floatingMarket, slug: "/maeklong-floating-market" },
  { title: "Bangkok Tuk Tuk Night Tour", location: "Bangkok", image: tukTuk, slug: "/bangkok-tuk-tuk-night" },
  { title: "Dream World Bangkok", location: "Bangkok", image: dreamWorld, slug: "/dream-world-bangkok" },
  { title: "Chao Phraya Princess Dinner Cruise", location: "Bangkok", image: cruise, slug: "/chao-phraya-princess-join" },
  { title: "Viva Alangka Dinner Cruise", location: "Bangkok", image: vivaAlangka, slug: "/viva-alangka-cruise" },
  { title: "Ayutthaya Temple Tour", location: "Bangkok", image: ayutthaya, slug: "/ayutthaya-temple-tour" },
  { title: "Baiyoke Sky Buffet", location: "Bangkok", image: baiyoke, slug: "/baiyoke-buffet" },
  { title: "Sea Life & Madame Tussauds", location: "Bangkok", image: seaLife, slug: "/sea-life-madame-tussauds" },
  { title: "Thai Massage Coupon Packages", location: "Bangkok", image: massage, slug: "/massage-coupons" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Bangkok Activities to Book Now</h2>
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

const BlogBangkokActivitiesGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Bangkok Activities Booking Guide — 15 Best Things to Do in 2026"
      description="The ultimate Bangkok activities booking guide for tourists. Discover 15 must-do experiences including temple tours, dinner cruises, night markets, and wildlife safaris."
      heroImage={heroImg}
      heroAlt="Bangkok temple with golden spires and intricate architecture"
      author="Yellodae Bangkok Expert"
      date="Mar 5, 2026"
      readTime="13 min read"
      category="Bangkok Travel Guide"
      keywords={["Bangkok activities booking", "things to do in Bangkok", "Bangkok temple tour", "Bangkok dinner cruise", "Bangkok safari world", "Bangkok travel guide 2026", "Bangkok tours for Indians", "Yellodae Bangkok"]}
      guidesLink="/thailand-smart-guides"
      guidesLabel="Thailand Guides"
      relatedLinks={[
        { title: "Best Thailand Activities to Book Online", link: "/blog/best-thailand-activities" },
        { title: "Top Phuket Island Tours for Indian Travelers", link: "/blog/top-phuket-island-tours" },
        { title: "Best Pattaya Activities for First-Time Visitors", link: "/blog/best-pattaya-activities" },
        { title: "Airport Transfer Booking Guide Thailand", link: "/blog/airport-transfer-booking-thailand" },
      ]}
      sections={[
        { type: "paragraph", content: "Bangkok, Thailand's vibrant capital, is a city that perfectly blends ancient traditions with modern excitement. From glittering golden temples to world-class rooftop bars, bustling street markets to serene river cruises — Bangkok is a destination that never fails to amaze. This guide covers the 15 best activities to book in Bangkok, helping you plan the perfect trip." },
        { type: "heading", content: "Top 15 Bangkok Activities" },
        { type: "subheading", content: "1. Grand Palace & Emerald Buddha Temple Tour" },
        { type: "paragraph", content: "Bangkok's crown jewel and most important landmark. The Grand Palace complex houses the sacred Emerald Buddha and showcases centuries of Thai royal architecture. A guided tour helps you understand the rich history behind every golden spire and intricate mural." },
        { type: "subheading", content: "2. Bangkok Three Temples City Tour" },
        { type: "paragraph", content: "Visit the three most iconic temples in one tour — Wat Pho (Reclining Buddha), Wat Arun (Temple of Dawn), and Wat Traimit (Golden Buddha). Each temple offers unique architectural beauty and spiritual significance." },
        { type: "image", src: watArun, alt: "Wat Arun temple at twilight in Bangkok", caption: "Wat Arun — the stunning Temple of Dawn on the Chao Phraya River" },
        { type: "subheading", content: "3. Wat Arun, Pho & Traimit Tour" },
        { type: "paragraph", content: "A slightly different temple combination focusing on Wat Arun's riverside beauty, Wat Pho's massive reclining Buddha, and Wat Traimit's pure gold Buddha statue weighing 5.5 tons." },
        { type: "subheading", content: "4. Bangkok City & Gems Gallery Tour" },
        { type: "paragraph", content: "Combine sightseeing with shopping at Thailand's famous Gems Gallery. See stunning gemstone displays and learn about Thailand's jewelry craftsmanship alongside city highlights." },
        { type: "subheading", content: "5. Safari World & Marine Park" },
        { type: "paragraph", content: "Bangkok's premier wildlife attraction features an open safari drive-through, spectacular animal shows, and marine park experiences. Perfect for families — kids love the dolphin and sea lion performances." },
        { type: "subheading", content: "6. King Power Mahanakhon Skywalk" },
        { type: "paragraph", content: "Stand 314 meters above Bangkok on the glass-floor skywalk. The panoramic views of the sprawling cityscape are especially magical during golden hour and after sunset." },
        { type: "subheading", content: "7. Floating Market & Railway Market" },
        { type: "paragraph", content: "Experience two of Thailand's most unique markets — the train that passes through vendors' stalls at Maeklong, and the colorful boats laden with fresh produce at Damnoen Saduak Floating Market." },
        { type: "image", src: floatingMarket, alt: "Floating market in Bangkok with boats and vendors", caption: "The legendary floating markets — a must-do Bangkok experience" },
        { type: "subheading", content: "8. Tuk Tuk Night Tour" },
        { type: "paragraph", content: "Explore Bangkok after dark in a traditional tuk-tuk. Visit illuminated temples, bustling night markets, street food stalls, and hidden local gems that most tourists miss." },
        { type: "subheading", content: "9. Dream World Bangkok" },
        { type: "paragraph", content: "Bangkok's premier theme park featuring thrilling rides, snow town, fantasy gardens, and adventure land. Great fun for families with children of all ages." },
        { type: "subheading", content: "10. Chao Phraya Princess Dinner Cruise" },
        { type: "paragraph", content: "Glide along the Chao Phraya River while enjoying a lavish buffet dinner, live music, and stunning views of Bangkok's illuminated landmarks including Wat Arun and the Grand Palace." },
        { type: "subheading", content: "11. Viva Alangka Dinner Cruise" },
        { type: "paragraph", content: "A premium dinner cruise experience on a beautifully decorated vessel. Enjoy Thai and international cuisine while cruising past Bangkok's most iconic riverside landmarks." },
        { type: "subheading", content: "12. Ayutthaya Temple Tour" },
        { type: "paragraph", content: "A day trip to Thailand's ancient capital, a UNESCO World Heritage Site. Explore magnificent temple ruins, learn about the Ayutthaya Kingdom's golden era, and see the iconic Buddha head entwined in tree roots." },
        { type: "subheading", content: "13. Baiyoke Sky Buffet" },
        { type: "paragraph", content: "Dine at Bangkok's revolving rooftop restaurant atop the Baiyoke Sky Tower. The international buffet features Thai, Japanese, and Western cuisine with 360-degree city views." },
        { type: "subheading", content: "14. Sea Life Bangkok & Madame Tussauds" },
        { type: "paragraph", content: "A dual-attraction combo ticket for Bangkok's underwater world at Siam Paragon and the famous wax museum. See sharks, penguins, and pose with lifelike celebrity wax figures." },
        { type: "subheading", content: "15. Thai Massage Coupon Packages" },
        { type: "paragraph", content: "Pre-book discounted massage sessions at Bangkok's top-rated spas. Choose from traditional Thai massage, oil massage, foot massage, and aromatherapy — all at amazing pre-booked prices." },
        { type: "tip-box", content: "💡 Bangkok Tip: Many Bangkok tours offer hotel pickup from Sukhumvit, Silom, and Khao San Road areas. BTS Skytrain is excellent for getting around the city independently." },
        { type: "heading", content: "Best Time to Visit Bangkok" },
        { type: "paragraph", content: "November to February is ideal with cooler, drier weather (25-32°C). March–May is very hot (35°C+). June–October sees occasional rain but fewer crowds and better prices." },
        { type: "cta", content: "Ready to explore Bangkok? Book your activities at the best prices!", link: "/bangkok", linkText: "🏯 Browse Bangkok Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
);

export default BlogBangkokActivitiesGuide;
