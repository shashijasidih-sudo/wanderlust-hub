import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogCityProps } from "@/data/blogCityLinks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/dubai-skyline-sunset-1.jpg";
import fountainImg from "@/assets/dubai-fountain-show-1.jpg";
import cityImg from "@/assets/dubai-city-night-1.jpg";
import dubaiDhowCruise from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiDesertCouple2 from "@/assets/dubai-desert-couple-2.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";
import dubaiSkylineNight from "@/assets/dubai-skyline-night-1.jpg";
import dubaiGlobalVillage from "@/assets/dubai-global-village-1.jpg";
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.jpg";

const burjActivityCards = [
  { title: "Burj Khalifa Non-Prime", location: "Downtown Dubai", image: heroImg, slug: "/dubai/burj-khalifa-non-prime" },
  { title: "Burj Khalifa Prime", location: "Downtown Dubai", image: dubaiSkylineNight, slug: "/dubai/burj-khalifa-prime" },
  { title: "Dubai Fountain Show + Lake Ride", location: "Downtown Dubai", image: fountainImg, slug: "/dubai/fountain-show" },
  { title: "Desert Safari with Sharing Transfer", location: "Lahbab Desert", image: dubaiDesertCouple2, slug: "/dubai/desert-safari-sharing" },
  { title: "Desert Safari with Shisha", location: "Lahbab Desert", image: dubaiDesertWoman, slug: "/dubai/desert-safari-shisha" },
  { title: "Dhow Creek Cruise - Lower Deck", location: "Dubai Creek", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-creek-lower-deck" },
  { title: "Dhow Marina Cruise - Lower Deck", location: "Dubai Marina", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-marina-lower-deck" },
  { title: "Dubai City Tour", location: "Dubai", image: cityImg, slug: "/dubai/city-tour" },
  { title: "Dubai City Tour with Mall", location: "Dubai", image: heroImg, slug: "/dubai/city-tour-mall" },
  { title: "Global Village Dubai", location: "Dubai", image: dubaiGlobalVillage, slug: "/dubai/global-village" },
  { title: "Abu Dhabi City Tour", location: "Abu Dhabi", image: heroImg, slug: "/dubai/abu-dhabi-city-tour" },
  { title: "Abu Dhabi + Ferrari World", location: "Abu Dhabi", image: dubaiSkylineNight, slug: "/dubai/abu-dhabi-ferrari-world" },
  { title: "Dubai Aquarium + Penguin Cove", location: "Dubai Mall", image: dubaiAquariumFish, slug: "/dubai/aquarium-penguin" },
  { title: "Dubai Dolphin & Seal Show", location: "Dubai", image: dubaiAquariumFish, slug: "/dubai/dolphin-show" },
  { title: "Miracle Garden Dubai", location: "Dubai", image: dubaiGlobalVillage, slug: "/dubai/miracle-garden" },
];

const BurjActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Dubai Activities to Book</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {burjActivityCards.map((a) => (
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

const BlogBurjKhalifaTickets = () => {
  return (
    <BlogArticleLayout
    {...getBlogCityProps("dubai")}
      title="Complete Guide to Burj Khalifa Tickets in Dubai"
      description="Everything about Dubai Burj Khalifa tickets booking — ticket types, timings, step-by-step booking guide, best viewing times, and tips for visiting the world's tallest building."
      heroImage={heroImg}
      heroAlt="Burj Khalifa and Dubai skyline at sunset"
      author="Yellodae Travel Expert"
      date="Feb 27, 2026"
      readTime="8 min read"
      category="Dubai Landmarks"
      guidesLink="/dubai/destination-guides"
      guidesLabel="Dubai Guides"
      keywords={[
        "Burj Khalifa tickets Dubai",
        "Dubai Burj Khalifa tickets booking",
        "best Burj Khalifa tickets in Dubai",
        "Burj Khalifa Level 124",
        "Burj Khalifa Level 148",
        "Burj Khalifa sunset tickets",
        "Burj Khalifa visit guide",
        "Dubai attractions",
        "Dubai travel tips",
        "Yellodae Dubai",
      ]}
      relatedLinks={[
        { title: "Dubai Marina Cruise Guide", link: "/blog/dubai-marina-cruise" },
        { title: "Dubai Desert Safari Guide", link: "/blog/desert-safari-deals-dubai" },
        { title: "Dubai Fountain Show", link: "/dubai/fountain-show" },
        { title: "Dubai Transfers", link: "/dubai/budget-airport-transfers" },
      ]}
      sections={[
        {
          type: "paragraph",
          content: "A trip to Dubai is incomplete without visiting the world's tallest building — the iconic Burj Khalifa. Standing tall at 828 meters, this architectural masterpiece offers breathtaking panoramic views of the city skyline, desert, and the Arabian Gulf.",
        },
        {
          type: "paragraph",
          content: "If you're planning your visit, this complete guide will help you understand everything about Dubai Burj Khalifa tickets booking, ticket types, timings, and how to get the best Burj Khalifa tickets in Dubai at the best price.",
        },
        {
          type: "heading",
          content: "Types of Burj Khalifa Tickets",
        },
        {
          type: "subheading",
          content: "At The Top (Level 124 & 125)",
        },
        {
          type: "list",
          items: [
            "Most popular and budget-friendly option",
            "Stunning 360° city views",
            "Perfect for first-time visitors",
          ],
        },
        {
          type: "subheading",
          content: "At The Top SKY (Level 148 + 124 & 125)",
        },
        {
          type: "list",
          items: [
            "Premium experience with fewer crowds",
            "Luxury lounge access",
            "Highest observation deck in the world",
          ],
        },
        {
          type: "subheading",
          content: "Sunrise & Sunset Tickets",
        },
        {
          type: "list",
          items: [
            "Best time for photography",
            "Magical golden-hour city views",
            "Sunset slots sell out quickly — book early!",
          ],
        },
        {
          type: "tip-box",
          content: "💡 For the best Burj Khalifa tickets in Dubai, sunset slots are highly recommended as they offer the most spectacular views and sell out quickly.",
        },
        {
          type: "image",
          src: fountainImg,
          alt: "Dubai Fountain near Burj Khalifa — popular tourist area",
          caption: "Combine your Burj Khalifa visit with the Dubai Fountain show",
        },
        {
          type: "heading",
          content: "Step-by-Step Guide to Burj Khalifa Tickets Booking",
        },
        {
          type: "list",
          items: [
            "1. Choose Your Date — Weekends and sunset hours get booked early, so plan in advance",
            "2. Select Ticket Type — Level 124/125 or Level 148 premium access",
            "3. Pick Time Slot — Morning for fewer crowds, sunset for scenic views, or night for sparkling city lights",
            "4. Confirm Your Booking Online — Book through Yellodae for instant confirmation and best prices",
            "5. Arrive Early — Reach at least 30 minutes before your slot. Entry is through Dubai Mall",
          ],
        },
        {
          type: "heading",
          content: "Why Visit Burj Khalifa?",
        },
        {
          type: "list",
          items: [
            "World's tallest building at 828 meters",
            "Unmatched skyline views of Dubai",
            "High-speed elevator experience",
            "Interactive displays about Dubai's growth",
            "Perfect Instagram-worthy moments",
          ],
        },
        {
          type: "image",
          src: cityImg,
          alt: "Dubai city skyline at night from Burj Khalifa",
          caption: "Spectacular night views from the world's tallest building",
        },
        {
          type: "heading",
          content: "Travel Tips for Visiting Burj Khalifa",
        },
        {
          type: "list",
          items: [
            "Carry valid ID or passport",
            "Wear comfortable clothing",
            "Keep your camera ready",
            "Visit during sunset for the best experience",
            "Combine with Dubai Fountain show for a complete evening",
          ],
        },
        {
          type: "heading",
          content: "Final Thoughts",
        },
        {
          type: "paragraph",
          content: "Visiting the Burj Khalifa in Dubai is not just about going up a building — it's about witnessing the city from the clouds. Whether you're a solo traveller, couple, or family, this iconic attraction promises unforgettable memories.",
        },
        {
          type: "cta",
          content: "Don't miss out on securing the best Burj Khalifa tickets in Dubai with easy and reliable booking.",
          link: "/dubai/burj-khalifa-non-prime",
          linkText: "🏙️ Book Burj Khalifa Tickets Now",
        },
      ]}
    >
      <BurjActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogBurjKhalifaTickets;
