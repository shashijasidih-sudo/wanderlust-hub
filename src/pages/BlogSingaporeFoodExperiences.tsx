import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gardensBay from "@/assets/singapore-gardens-bay.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";
import cableCar from "@/assets/singapore-cable-car.jpg";
import wingsTime from "@/assets/singapore-wings-time.jpg";
import skyHelix from "@/assets/singapore-sky-helix.jpg";
import riverCruise from "@/assets/singapore-river-cruise.jpg";
import adventureCove from "@/assets/singapore-adventure-cove.jpg";
import flyer from "@/assets/singapore-flyer.jpg";
import zoo from "@/assets/singapore-zoo.jpg";
import cityTour from "@/assets/singapore-city-tour.jpg";
import marinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import bigBus from "@/assets/singapore-big-bus.jpg";
import merlion from "@/assets/singapore-merlion-night-1.jpg";
import gardensBayNight from "@/assets/singapore-gardens-bay-night-1.jpg";

const activityCards = [
  { title: "Singapore City Tour", location: "Singapore", image: cityTour, slug: "/singapore/city-tour" },
  { title: "Gardens by the Bay", location: "Marina Bay", image: gardensBay, slug: "/singapore/gardens-by-the-bay" },
  { title: "Universal Studios Weekday", location: "Sentosa", image: universalStudios, slug: "/singapore/universal-studios-weekday" },
  { title: "Night Safari with Dinner", location: "Mandai", image: nightSafari, slug: "/singapore/night-safari-dinner" },
  { title: "Singapore River Cruise", location: "Clarke Quay", image: riverCruise, slug: "/singapore/river-cruise" },
  { title: "Sentosa Cable Car", location: "Sentosa", image: cableCar, slug: "/singapore/sentosa-cable-car" },
  { title: "Singapore Flyer Ticket", location: "Marina Bay", image: flyer, slug: "/singapore/flyer" },
  { title: "Adventure Cove Water Park", location: "Sentosa", image: adventureCove, slug: "/singapore/adventure-cove" },
  { title: "Singapore Zoo + Tram", location: "Mandai", image: zoo, slug: "/singapore/zoo" },
  { title: "Wings of Time Show", location: "Sentosa", image: wingsTime, slug: "/singapore/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", location: "Sentosa", image: skyHelix, slug: "/singapore/sentosa-sky-helix" },
  { title: "Big Bus Singapore", location: "Singapore", image: bigBus, slug: "/singapore/big-bus-discover" },
  { title: "Night Safari with Transfer", location: "Mandai", image: nightSafari, slug: "/singapore/night-safari-transfer" },
  { title: "Universal Studios Weekend", location: "Sentosa", image: universalStudios, slug: "/singapore/universal-studios-weekend" },
  { title: "Big Bus Night Tour", location: "Singapore", image: bigBus, slug: "/singapore/big-bus-night" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Singapore Activities to Book</h2>
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

const BlogSingaporeFoodExperiences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Complete Guide to Singapore Food Experiences — Best Culinary Adventures 2026"
      description="Discover the best Singapore food experiences — from hawker centres to Chinatown food tours, Little India flavors to night food markets. Plan your culinary journey."
      heroImage={merlion}
      heroAlt="Singapore Merlion at night with illuminated cityscape"
      author="Yellodae Travel Expert"
      date="Mar 6, 2026"
      readTime="10 min read"
      category="Singapore Travel Guide"
      keywords={["Singapore food experiences", "Singapore food tours", "hawker centre Singapore", "best Singapore food", "Singapore culinary tour", "Chinatown food Singapore", "Little India food", "Yellodae Singapore"]}
      guidesLink="/singapore/destination-guides"
      guidesLabel="Singapore Guides"
      relatedLinks={[
        { title: "Best Singapore Attraction Tickets", link: "/blog/best-singapore-attractions" },
        { title: "Singapore Combo Pass Guide", link: "/blog/singapore-combo-pass" },
        { title: "Top Things to Do in Singapore", link: "/blog/top-things-singapore" },
        { title: "Sentosa Island Activities Guide", link: "/blog/sentosa-activities-singapore" },
      ]}
      sections={[
        { type: "paragraph", content: "Singapore is known as one of the world's best food destinations, where cultures blend together to create unforgettable flavors. From street food at hawker centres to fine dining restaurants, the city offers endless opportunities for travellers to enjoy authentic dishes and unique culinary adventures." },
        { type: "paragraph", content: "Whether you want to try famous local dishes, join guided food tours, or discover hidden eateries, Singapore food experiences booking has become easier than ever with platforms like Yellodae." },
        { type: "heading", content: "Why Singapore is Famous for Food Experiences" },
        { type: "list", items: [
          "World-famous hawker centres serving affordable and authentic food",
          "A wide variety of cuisines from across Asia",
          "Michelin-starred street food stalls",
          "Unique fusion dishes you won't find anywhere else",
          "Vibrant night food markets and culinary districts",
        ]},
        { type: "heading", content: "Best Singapore Food Experiences" },
        { type: "subheading", content: "1. Hawker Centre Food Tour" },
        { type: "paragraph", content: "Hawker centres are the heart of Singapore's food culture. Popular places like Maxwell Food Centre, Lau Pa Sat, and Chinatown Complex offer dozens of stalls serving authentic Hainanese chicken rice, laksa, satay, and chili crab. A guided food tour helps you discover the most famous stalls and learn the stories behind each dish." },
        { type: "subheading", content: "2. Singapore Night Food Tours" },
        { type: "paragraph", content: "Singapore becomes even more exciting at night when food markets and late-night eateries come alive. Night food tours include sampling local street food, exploring night markets, trying traditional desserts and drinks, and visiting iconic food streets like Satay Street." },
        { type: "image", src: marinaBay, alt: "Singapore Marina Bay at night — vibrant food scene", caption: "Singapore's vibrant nightscape — home to incredible food experiences along the waterfront" },
        { type: "subheading", content: "3. Chinatown Culinary Experience" },
        { type: "paragraph", content: "Chinatown is one of the best places to explore traditional Singaporean flavours. Food tours in this area include tastings of dumplings, noodles, dim sum, and herbal teas while exploring historic streets and markets." },
        { type: "subheading", content: "4. Little India Food Exploration" },
        { type: "paragraph", content: "Little India offers a completely different culinary journey — authentic Indian curries, fresh dosas and rotis, sweet treats like jalebi and gulab jamun, and spiced teas and traditional beverages." },
        { type: "subheading", content: "5. Cooking Classes with Local Chefs" },
        { type: "paragraph", content: "For travellers who want to do more than just taste food, Singapore offers hands-on cooking classes. Learn how to cook local dishes like laksa or chicken rice with professional chefs. You'll not only enjoy the meal but also learn recipes you can recreate at home." },
        { type: "heading", content: "Best Areas in Singapore for Food Lovers" },
        { type: "list", items: [
          "Chinatown — famous for traditional Chinese cuisine",
          "Little India — best place for Indian food",
          "Kampong Glam — known for Middle Eastern and fusion dishes",
          "Orchard Road — great for cafes and modern dining",
          "Clarke Quay — perfect for nightlife and riverside dining",
        ]},
        { type: "heading", content: "Tips for Enjoying Singapore Food Experiences" },
        { type: "list", items: [
          "Try food from different cultures to experience the diversity",
          "Visit hawker centres early to avoid long queues",
          "Carry cash for small food stalls",
          "Don't hesitate to ask locals for food recommendations",
          "Join guided food tours to discover hidden gems",
        ]},
        { type: "tip-box", content: "💡 Pro Tip: Combine a food tour with a Singapore River Cruise for the ultimate evening experience — taste amazing food, then enjoy the stunning waterfront views!" },
        { type: "heading", content: "Why Choose Yellodae for Your Singapore Trip?" },
        { type: "list", items: [
          "Easy online booking for food tours and activities",
          "Trusted travel platform with thousands of happy travellers",
          "Curated experiences showcasing the best of Singapore",
          "Instant confirmation — no waiting",
          "Affordable pricing with competitive rates",
          "Hassle-free travel planning in one place",
        ]},
        { type: "cta", content: "Ready to explore Singapore's incredible food scene? Browse all activities and book at the best prices!", link: "/singapore", linkText: "🇸🇬 Explore Singapore Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogSingaporeFoodExperiences;
