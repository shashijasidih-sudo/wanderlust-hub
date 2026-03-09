import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gardensBay from "@/assets/singapore-gardens-bay.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";
import sentosa4d from "@/assets/singapore-sentosa-4d.jpg";
import cableCar from "@/assets/singapore-cable-car.jpg";
import wingsTime from "@/assets/singapore-wings-time.jpg";
import skyHelix from "@/assets/singapore-sky-helix.jpg";
import riverCruise from "@/assets/singapore-river-cruise.jpg";
import adventureCove from "@/assets/singapore-adventure-cove.jpg";
import flyer from "@/assets/singapore-flyer.jpg";
import zoo from "@/assets/singapore-zoo.jpg";
import cityTour from "@/assets/singapore-city-tour.jpg";
import marinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import gardensBayNight from "@/assets/singapore-gardens-bay-night-1.jpg";
import bigBus from "@/assets/singapore-big-bus.jpg";

const activityCards = [
  { title: "Gardens by the Bay Tickets", location: "Marina Bay", image: gardensBay, slug: "/gardens-by-the-bay" },
  { title: "Universal Studios Weekday", location: "Sentosa", image: universalStudios, slug: "/universal-studios-weekday" },
  { title: "Night Safari with Dinner", location: "Mandai", image: nightSafari, slug: "/night-safari-dinner" },
  { title: "Singapore City Tour", location: "Singapore", image: cityTour, slug: "/singapore-city-tour" },
  { title: "Sentosa Cable Car Ride", location: "Sentosa", image: cableCar, slug: "/sentosa-cable-car" },
  { title: "Singapore Flyer Ticket", location: "Marina Bay", image: flyer, slug: "/singapore-flyer" },
  { title: "Adventure Cove Water Park", location: "Sentosa", image: adventureCove, slug: "/adventure-cove" },
  { title: "Singapore River Cruise", location: "Clarke Quay", image: riverCruise, slug: "/singapore-river-cruise" },
  { title: "Singapore Zoo + Tram Ride", location: "Mandai", image: zoo, slug: "/singapore-zoo" },
  { title: "Sentosa Wings of Time Show", location: "Sentosa", image: wingsTime, slug: "/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", location: "Sentosa", image: skyHelix, slug: "/sentosa-sky-helix" },
  { title: "Sentosa 4D Adventureland", location: "Sentosa", image: sentosa4d, slug: "/sentosa-4d-2rides" },
  { title: "Universal Studios Weekend", location: "Sentosa", image: universalStudios, slug: "/universal-studios-weekend" },
  { title: "Big Bus Singapore Discover", location: "Singapore", image: bigBus, slug: "/big-bus-discover" },
  { title: "Night Safari with Transfer", location: "Mandai", image: nightSafari, slug: "/night-safari-transfer" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Singapore Combo Attractions to Book</h2>
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

const BlogSingaporeComboPass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogArticleLayout
      title="Complete Guide to Singapore Combo Pass — Save Up to 40%"
      description="Everything about Singapore Combo Pass — best attractions, pricing, how to book, and tips. Save up to 40% on Universal Studios, Gardens by the Bay, Night Safari & more."
      heroImage={gardensBayNight}
      heroAlt="Gardens by the Bay Singapore at night with illuminated Supertrees"
      author="Yellodae Travel Expert"
      date="Mar 2, 2026"
      readTime="9 min read"
      category="Singapore Travel Guide"
      keywords={["Singapore combo pass", "Singapore combo pass booking", "best Singapore combo pass", "Singapore attraction tickets", "Singapore travel combo", "Yellodae Singapore"]}
      guidesLink="/singapore-smart-guides"
      guidesLabel="Singapore Guides"
      relatedLinks={[
        { title: "Best Singapore Attraction Tickets", link: "/blog/best-singapore-attractions" },
        { title: "Top Things to Do in Singapore", link: "/blog/top-things-singapore" },
        { title: "Universal Studios Singapore Guide", link: "/blog/universal-studios-singapore-guide" },
        { title: "Night Safari Singapore Guide", link: "/blog/night-safari-singapore-guide" },
      ]}
      sections={[
        { type: "paragraph", content: "Planning a trip to Singapore and want to explore more while spending less? A Singapore Combo Pass is the perfect way to enjoy multiple top attractions at discounted prices with hassle-free entry. Whether you're looking for Singapore combo pass booking or searching for the best Singapore combo pass, this complete guide will help you plan smarter and travel better." },
        { type: "heading", content: "What is a Singapore Combo Pass?" },
        { type: "paragraph", content: "A Singapore Combo Pass allows you to access multiple attractions under one single ticket. Instead of buying individual tickets for each place, you can select a bundled package and enjoy discounted pricing, skip-the-line or priority entry at selected attractions, instant confirmation, and flexible validity options." },
        { type: "paragraph", content: "It's ideal for families, couples, solo travellers, and even group trips who want maximum experiences with minimum stress." },
        { type: "heading", content: "Top Attractions Included in the Best Singapore Combo Pass" },
        { type: "subheading", content: "1. Universal Studios Singapore — Sentosa" },
        { type: "paragraph", content: "Enjoy thrilling rides, movie-themed zones, live shows, and entertainment for all ages. With 24 rides across 7 themed zones including Transformers, Jurassic Park, and Battlestar Galactica, it's the highlight of any Singapore trip." },
        { type: "subheading", content: "2. S.E.A. Aquarium — Sentosa" },
        { type: "paragraph", content: "Explore one of the world's largest aquariums with thousands of marine species. Walk through the stunning underwater tunnel and witness the beauty of marine life up close." },
        { type: "image", src: marinaBay, alt: "Marina Bay Sands Singapore at night", caption: "Marina Bay Sands — Singapore's iconic landmark included in premium combo passes" },
        { type: "subheading", content: "3. Gardens by the Bay" },
        { type: "paragraph", content: "Witness the iconic Supertrees, Flower Dome with plants from five continents, and the Cloud Forest dome featuring the world's tallest indoor waterfall. The evening light show is free and absolutely magical." },
        { type: "subheading", content: "4. Singapore Flyer" },
        { type: "paragraph", content: "Enjoy breathtaking skyline views from Asia's largest observation wheel, standing 165 meters tall with 360-degree views of Marina Bay, Singapore Strait, and even parts of Malaysia." },
        { type: "subheading", content: "5. Sentosa Island Activities" },
        { type: "paragraph", content: "Add adventure activities, beaches, cable car rides, Wings of Time shows, Sky Helix, and interactive museums to your combo for the ultimate Sentosa experience." },
        { type: "heading", content: "Benefits of Singapore Combo Pass Booking" },
        { type: "list", items: [
          "Save up to 20–40% compared to individual tickets",
          "Easy online booking with instant ticket confirmation",
          "Time-saving entry — skip the queues",
          "Flexible travel plans with multiple validity options",
          "One booking covers multiple attractions",
        ]},
        { type: "paragraph", content: "With proper Singapore combo pass booking, you can explore more attractions in fewer days without worrying about separate tickets for each destination." },
        { type: "heading", content: "How to Choose the Best Singapore Combo Pass" },
        { type: "list", items: [
          "📅 Trip duration — 2–3 days or longer stays",
          "🎢 Adventure vs. sightseeing preferences",
          "👨‍👩‍👧‍👦 Family-friendly attractions with kids",
          "💰 Budget planning — compare combo vs individual pricing",
          "🚕 Need for transfers between attractions",
        ]},
        { type: "paragraph", content: "Choosing the right combo ensures you experience Singapore's highlights without missing anything important." },
        { type: "heading", content: "Who Should Buy a Singapore Combo Pass?" },
        { type: "list", items: [
          "First-time visitors to Singapore",
          "Families traveling with kids",
          "Honeymoon couples looking for romantic experiences",
          "Group travellers wanting convenience",
          "Budget-conscious explorers seeking maximum value",
        ]},
        { type: "tip-box", content: "💡 Pro Tip: Buy combo tickets that include Zoo + Night Safari or Universal Studios + Sentosa attractions to save up to 25% on total costs." },
        { type: "heading", content: "Why Choose Yellodae for Your Singapore Trip?" },
        { type: "list", items: [
          "Instant booking confirmation",
          "Best price guarantee on all combo passes",
          "Customized combo options for your travel style",
          "Easy payment process with INR pricing",
          "Reliable 24/7 customer support via WhatsApp",
          "Smooth Singapore transfers and activity planning",
        ]},
        { type: "cta", content: "Ready to explore Singapore with a combo pass? Browse all attractions and book at the best prices!", link: "/singapore", linkText: "🇸🇬 Explore Singapore Activities" },
      ]}
    >
      <ActivityCards />
    </BlogArticleLayout>
  );
};

export default BlogSingaporeComboPass;
