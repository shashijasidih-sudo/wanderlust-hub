import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogCityProps } from "@/data/blogCityLinks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/dubai-skyline-night-1.jpg";
import marinaImg from "@/assets/dubai-city-night-1.jpg";
import dhowImg from "@/assets/dubai-dhow-cruise-1.jpg";
import fountainImg from "@/assets/dubai-fountain-show-1.jpg";
import dubaiDesertCouple2 from "@/assets/dubai-desert-couple-2.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";
import dubaiSkylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import dubaiGlobalVillage from "@/assets/dubai-global-village-1.jpg";
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.jpg";

const cruiseActivityCards = [
  { title: "Dhow Creek Cruise - Lower Deck", location: "Dubai Creek", image: dhowImg, slug: "/dubai/dhow-cruise-creek-lower-deck" },
  { title: "Dhow Creek Cruise - Upper Deck", location: "Dubai Creek", image: dhowImg, slug: "/dubai/dhow-cruise-creek-upper-deck" },
  { title: "Dhow Marina Cruise - Lower Deck", location: "Dubai Marina", image: dhowImg, slug: "/dubai/dhow-cruise-marina-lower-deck" },
  { title: "Dhow Marina Cruise - Upper Deck", location: "Dubai Marina", image: dhowImg, slug: "/dubai/dhow-cruise-marina-upper-deck" },
  { title: "Desert Safari with Sharing Transfer", location: "Lahbab Desert", image: dubaiDesertCouple2, slug: "/dubai/desert-safari-sharing" },
  { title: "Desert Safari with Shisha", location: "Lahbab Desert", image: dubaiDesertWoman, slug: "/dubai/desert-safari-shisha" },
  { title: "Burj Khalifa Non-Prime", location: "Downtown Dubai", image: dubaiSkylineSunset, slug: "/dubai/burj-khalifa-non-prime" },
  { title: "Burj Khalifa Prime", location: "Downtown Dubai", image: heroImg, slug: "/dubai/burj-khalifa-prime" },
  { title: "Dubai City Tour", location: "Dubai", image: marinaImg, slug: "/dubai/city-tour" },
  { title: "Dubai City Tour with Mall", location: "Dubai", image: dubaiSkylineSunset, slug: "/dubai/city-tour-mall" },
  { title: "Global Village Dubai", location: "Dubai", image: dubaiGlobalVillage, slug: "/dubai/global-village" },
  { title: "Abu Dhabi City Tour", location: "Abu Dhabi", image: dubaiSkylineSunset, slug: "/dubai/abu-dhabi-city-tour" },
  { title: "Dubai Aquarium + Penguin Cove", location: "Dubai Mall", image: dubaiAquariumFish, slug: "/dubai/aquarium-penguin" },
  { title: "Dubai Fountain Show + Lake Ride", location: "Downtown Dubai", image: fountainImg, slug: "/dubai/fountain-show" },
  { title: "Dubai Dolphin & Seal Show", location: "Dubai", image: dubaiAquariumFish, slug: "/dubai/dolphin-show" },
];

const CruiseActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Dubai Activities to Book</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {cruiseActivityCards.map((a) => (
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

const BlogDubaiMarinaCruise = () => {
  return (
    <BlogArticleLayout
    {...getBlogCityProps("dubai")}
      title="Complete Guide to Dubai Marina Cruise in Dubai"
      description="Everything you need to know about Dubai Marina cruise booking — types of cruises, what to expect onboard, best timings, and how to choose the best Dubai Marina cruise in Dubai."
      heroImage={heroImg}
      heroAlt="Dubai Marina skyline at night — cruise destination"
      author="Yellodae Travel Expert"
      date="Feb 26, 2026"
      readTime="9 min read"
      category="Dubai Cruises"
      guidesLink="/dubai/destination-guides"
      guidesLabel="Dubai Guides"
      keywords={[
        "Dubai Marina cruise",
        "Dubai Marina cruise booking",
        "best Dubai Marina cruise in Dubai",
        "Dubai dhow cruise dinner",
        "Dubai luxury yacht cruise",
        "Dubai Marina sunset cruise",
        "Dubai cruise experience",
        "Dubai Marina nightlife",
        "Dubai travel tips",
        "Yellodae Dubai",
      ]}
      relatedLinks={[
        { title: "Dubai Desert Safari Guide", link: "/blog/desert-safari-deals-dubai" },
        { title: "Burj Khalifa Tickets Guide", link: "/blog/burj-khalifa-tickets-dubai" },
        { title: "Dubai Transfers", link: "/dubai/budget-airport-transfers" },
        { title: "Dhow Cruise Dubai", link: "/dubai/dhow-cruise" },
      ]}
      sections={[
        {
          type: "paragraph",
          content: "Dubai is known for its luxury lifestyle, iconic skyline, and unforgettable experiences — and one of the most magical ways to explore the city is through a Dubai Marina Cruise in Dubai. Whether you're visiting with family, friends, or your partner, a cruise along the stunning marina waterfront is an experience you simply cannot miss.",
        },
        {
          type: "paragraph",
          content: "In this complete guide, we'll cover everything you need to know about Dubai Marina cruise booking, types of cruises, what to expect onboard, and how to choose the best Dubai Marina cruise in Dubai.",
        },
        {
          type: "heading",
          content: "About Dubai Marina",
        },
        {
          type: "paragraph",
          content: "Dubai Marina is one of the most glamorous waterfront destinations in Dubai. Surrounded by luxury skyscrapers, fine-dining restaurants, and a vibrant nightlife scene, it offers breathtaking views — especially after sunset when the skyline lights up beautifully.",
        },
        {
          type: "list",
          items: [
            "Twinkling skyscrapers reflecting on the water",
            "Luxury yachts sailing across the marina",
            "The iconic Marina Walk atmosphere",
            "Stunning views of modern Dubai architecture",
          ],
        },
        {
          type: "image",
          src: marinaImg,
          alt: "Dubai Marina at night — popular cruise destination",
          caption: "Dubai Marina — a glamorous waterfront experience",
        },
        {
          type: "heading",
          content: "Types of Dubai Marina Cruise in Dubai",
        },
        {
          type: "subheading",
          content: "Dinner Dhow Cruise",
        },
        {
          type: "paragraph",
          content: "A traditional wooden dhow boat offering a cultural yet luxurious experience. Perfect for couples and families.",
        },
        {
          type: "list",
          items: [
            "International buffet dinner",
            "Live music & Tanoura dance performances",
            "2-hour relaxing sail",
            "Open-air upper deck & air-conditioned lower deck",
          ],
        },
        {
          type: "subheading",
          content: "Luxury Yacht Cruise",
        },
        {
          type: "paragraph",
          content: "If you want a premium experience, this is the best Dubai Marina cruise in Dubai for you. Ideal for birthdays, anniversaries, or group celebrations.",
        },
        {
          type: "list",
          items: [
            "Private or shared yacht options",
            "Red carpet welcome",
            "BBQ meals (selected packages)",
            "Instagram-worthy skyline views",
          ],
        },
        {
          type: "subheading",
          content: "Sunset Cruise",
        },
        {
          type: "paragraph",
          content: "Enjoy golden hour views with light refreshments, calm romantic ambiance, and spectacular photography moments.",
        },
        {
          type: "image",
          src: dhowImg,
          alt: "Dhow cruise experience on Dubai Marina",
          caption: "Traditional dhow cruise — a magical evening on the water",
        },
        {
          type: "heading",
          content: "What's Included in Dubai Marina Cruise Booking?",
        },
        {
          type: "list",
          items: [
            "90 minutes to 2-hour cruise",
            "Welcome drinks",
            "Buffet dinner (veg & non-veg options)",
            "Live entertainment",
            "Stunning skyline views",
            "Professional staff & hospitality",
          ],
        },
        {
          type: "heading",
          content: "Best Time to Go for a Dubai Marina Cruise",
        },
        {
          type: "list",
          items: [
            "🌅 Sunset Cruise: 5:30 PM – 7:00 PM",
            "🌃 Dinner Cruise: 7:30 PM – 10:00 PM (Most popular)",
          ],
        },
        {
          type: "tip-box",
          content: "💡 The dinner cruise is highly recommended as you can enjoy the illuminated skyline of Dubai at its most spectacular.",
        },
        {
          type: "heading",
          content: "Why Choose the Best Dubai Marina Cruise in Dubai?",
        },
        {
          type: "paragraph",
          content: "A cruise at Dubai Marina is not just a boat ride — it's an experience that combines luxury, fine dining, cultural entertainment, and breathtaking skyline views. It's one of the top romantic and family-friendly activities in Dubai.",
        },
        {
          type: "heading",
          content: "Tips Before You Go",
        },
        {
          type: "list",
          items: [
            "Arrive 30 minutes early",
            "Carry a light jacket during winter",
            "Keep your camera ready",
            "Book in advance during peak season",
          ],
        },
        {
          type: "image",
          src: fountainImg,
          alt: "Dubai skyline views from marina cruise",
          caption: "Breathtaking skyline views from a Dubai Marina cruise",
        },
        {
          type: "heading",
          content: "Final Thoughts",
        },
        {
          type: "paragraph",
          content: "A Dubai Marina Cruise in Dubai is one of the most unforgettable experiences you can enjoy in the city. Whether you choose a traditional dhow dinner or a luxury yacht experience, the magical skyline views and warm Arabian hospitality will leave you amazed.",
        },
        {
          type: "cta",
          content: "Don't miss out on the best Dubai Marina cruise experience. Book your cruise today and see Dubai like never before!",
          link: "/dubai/dhow-cruise-marina-lower-deck",
          linkText: "🚤 Book Dubai Marina Cruise Now",
        },
      ]}
    >
      <CruiseActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogDubaiMarinaCruise;
