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
  { title: "Desert Safari with Sharing", location: "Lahbab Desert", image: dubaiDesertCouple2, slug: "/dubai/desert-safari-sharing" },
  { title: "Desert Safari with Shisha", location: "Lahbab Desert", image: dubaiDesertWoman, slug: "/dubai/desert-safari-shisha" },
  { title: "Dhow Creek Cruise - Lower", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-creek-lower-deck" },
  { title: "Dhow Creek Cruise - Upper", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-creek-upper-deck" },
  { title: "Dhow Marina Cruise - Lower", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-marina-lower-deck" },
  { title: "Dhow Marina Cruise - Upper", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-marina-upper-deck" },
  { title: "Dubai City Tour", location: "Dubai", image: dubaiCityNight, slug: "/dubai/city-tour" },
  { title: "Dubai City Tour with Mall", location: "Dubai", image: dubaiSkylineSunset, slug: "/dubai/city-tour-mall" },
  { title: "Global Village Dubai", location: "Dubai", image: dubaiGlobalVillage, slug: "/dubai/global-village" },
  { title: "Abu Dhabi City Tour", location: "Abu Dhabi", image: dubaiSkylineSunset, slug: "/dubai/abu-dhabi-city-tour" },
  { title: "Burj Khalifa Non-Prime", location: "Downtown Dubai", image: dubaiSkylineSunset, slug: "/dubai/burj-khalifa-non-prime" },
  { title: "Burj Khalifa Prime Time", location: "Downtown Dubai", image: dubaiSkyline, slug: "/dubai/burj-khalifa-prime" },
  { title: "Dubai Aquarium + Penguin", location: "Dubai Mall", image: dubaiAquariumFish, slug: "/dubai/aquarium-penguin" },
  { title: "Dubai Fountain Show + Ride", location: "Downtown Dubai", image: dubaiFountainShow, slug: "/dubai/fountain-show" },
  { title: "Miracle Garden Dubai", location: "Dubai", image: dubaiGlobalVillage2, slug: "/dubai/miracle-garden" },
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

const BlogDubaiFoodExperiences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Complete Guide to Dubai Food Experiences — Best Culinary Adventures 2026"
      description="Discover the best Dubai food experiences — from shawarma to luxury dining, desert BBQ to traditional Emirati cuisine. Plan your unforgettable culinary journey in Dubai."
      heroImage={dubaiSkyline}
      heroAlt="Dubai skyline at night with dining and entertainment districts"
      author="Yellodae Travel Expert"
      date="Mar 7, 2026"
      readTime="10 min read"
      category="Dubai Travel Guide"
      keywords={["Dubai food experiences", "Dubai food tours", "best Dubai food", "Dubai culinary guide", "Emirati cuisine", "Dubai street food", "Dubai dining", "Yellodae Dubai"]}
      guidesLink="/dubai/destination-guides"
      guidesLabel="Dubai Guides"
      relatedLinks={[
        { title: "Top Dubai Activities to Book Online", link: "/blog/best-dubai-activities" },
        { title: "Dubai Shopping Tours Guide", link: "/blog/dubai-shopping-tours" },
        { title: "Best Dubai Desert Safari Packages", link: "/blog/desert-safari-deals-dubai" },
        { title: "Dubai Marina Cruise Experience", link: "/blog/dubai-marina-cruise" },
      ]}
      sections={[
        { type: "paragraph", content: "Dubai is not only famous for its luxury shopping, futuristic skyline, and desert adventures, but also for its incredible food culture. From traditional Emirati dishes to world-class international cuisine, the city offers unforgettable culinary adventures for every type of food lover." },
        { type: "paragraph", content: "Whether it's dining in the sky, enjoying street food in traditional souks, or experiencing luxury restaurants with Burj Khalifa views, Dubai food experiences have become one of the most exciting things travellers look forward to." },
        { type: "heading", content: "Why Dubai is a Paradise for Food Lovers" },
        { type: "paragraph", content: "Dubai is a multicultural city where more than 200 nationalities live together. This diversity reflects beautifully in its food scene — authentic Middle Eastern dishes, Indian spices, Asian delicacies, and European gourmet cuisine all in one city." },
        { type: "list", items: [
          "Dining in luxury restaurants with skyline views",
          "Desert dinner experiences with cultural shows",
          "Traditional Emirati cuisine tasting",
          "Street food tours in old Dubai",
          "Fine dining in celebrity chef restaurants",
        ]},
        { type: "heading", content: "10 Best Foods in Dubai You Must Try" },
        { type: "subheading", content: "1. Shawarma" },
        { type: "paragraph", content: "One of the most loved street foods in Dubai. Made with marinated chicken or lamb wrapped in soft pita bread with garlic sauce, pickles, and vegetables. Quick, delicious, and available everywhere." },
        { type: "subheading", content: "2. Al Harees" },
        { type: "paragraph", content: "A traditional Emirati dish made with wheat and slow-cooked meat. It has a soft texture and rich flavour, making it one of the most authentic dishes to try during your Dubai trip." },
        { type: "subheading", content: "3. Machboos" },
        { type: "paragraph", content: "A flavourful rice dish cooked with spices, dried lemon, and meat or seafood. Similar to biryani but with its own unique Emirati taste." },
        { type: "subheading", content: "4. Luqaimat" },
        { type: "paragraph", content: "Sweet dumplings that are crispy on the outside and soft on the inside, topped with date syrup and sesame seeds — a perfect dessert after a meal." },
        { type: "image", src: dubaiDhowCruise, alt: "Dubai dhow cruise dining experience", caption: "Dhow cruise dining — enjoy traditional cuisine on the waters of Dubai Creek and Marina" },
        { type: "subheading", content: "5. Falafel" },
        { type: "paragraph", content: "A popular vegetarian street food made from ground chickpeas and spices, usually served inside pita bread with hummus and vegetables." },
        { type: "subheading", content: "6. Manakish" },
        { type: "paragraph", content: "Often called the Middle Eastern pizza — a flatbread topped with cheese, zaatar herbs, or minced meat. A popular breakfast snack in Dubai." },
        { type: "subheading", content: "7. Grilled Kebabs" },
        { type: "paragraph", content: "Dubai is famous for juicy kebabs made from lamb, chicken, or beef, grilled over charcoal and served with rice, bread, and sauces." },
        { type: "subheading", content: "8. Stuffed Camel (Traditional Dish)" },
        { type: "paragraph", content: "A rare and luxurious Emirati dish often served during special occasions and festivals. One of the most unique food experiences in the region." },
        { type: "subheading", content: "9. Arabic Mezze" },
        { type: "paragraph", content: "A platter of small dishes including hummus, baba ghanoush, tabbouleh, and olives. Perfect for sharing and tasting different flavors together." },
        { type: "subheading", content: "10. Camel Milk Ice Cream" },
        { type: "paragraph", content: "A must-try dessert in Dubai — creamy, slightly salty, and offers a unique taste you won't find anywhere else." },
        { type: "heading", content: "Best Places to Enjoy Dubai Food Experiences" },
        { type: "list", items: [
          "Old Dubai Food Streets — authentic street food and traditional dishes",
          "Global Village — international cuisines from different countries",
          "Dubai Marina Restaurants — luxury dining with waterfront views",
          "Desert Safari Dinner Experience — traditional BBQ and Arabic dishes under the stars",
          "Burj Khalifa Dining — one of the most luxurious food experiences in the world",
        ]},
        { type: "heading", content: "Tips for Enjoying Dubai Food Experiences" },
        { type: "list", items: [
          "Try both luxury restaurants and street food for the real flavors of Dubai",
          "Visit traditional souks for authentic Emirati snacks",
          "Book food tours in advance for popular experiences",
          "Explore night food markets for local delicacies",
          "Don't miss dessert spots for Arabic sweets",
        ]},
        { type: "tip-box", content: "💡 Pro Tip: Combine a desert safari dinner with a dhow cruise dining experience for the ultimate Dubai food day — traditional BBQ under the stars followed by a river cruise feast!" },
        { type: "heading", content: "Why Choose Yellodae for Dubai Food Experiences?" },
        { type: "list", items: [
          "Curated food experiences showcasing the true flavors of Dubai",
          "Easy and hassle-free booking for food tours",
          "Trusted travel experts ensuring smooth planning",
          "Exclusive deals & combo packages at the best prices",
          "Complete travel assistance for your trip",
        ]},
        { type: "cta", content: "Ready to taste the best of Dubai? Browse all activities and book at the best prices!", link: "/dubai", linkText: "🇦🇪 Explore Dubai Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogDubaiFoodExperiences;
