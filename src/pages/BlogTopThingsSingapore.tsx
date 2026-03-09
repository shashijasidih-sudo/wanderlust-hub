import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import marinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import marinaBayDay from "@/assets/singapore-marina-bay-sands-day-1.jpg";
import gardensBay from "@/assets/singapore-gardens-bay.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";
import cityTour from "@/assets/singapore-city-tour.jpg";
import cableCar from "@/assets/singapore-cable-car.jpg";
import flyer from "@/assets/singapore-flyer.jpg";
import riverCruise from "@/assets/singapore-river-cruise.jpg";
import adventureCove from "@/assets/singapore-adventure-cove.jpg";
import zoo from "@/assets/singapore-zoo.jpg";
import wingsTime from "@/assets/singapore-wings-time.jpg";
import skyHelix from "@/assets/singapore-sky-helix.jpg";
import sentosa4d from "@/assets/singapore-sentosa-4d.jpg";
import bigBus from "@/assets/singapore-big-bus.jpg";
import riverSafari from "@/assets/singapore-river-safari.jpg";
import merlion from "@/assets/singapore-merlion-night-1.jpg";

const activityCards = [
  { title: "Singapore City Tour with Guide", location: "Singapore", image: cityTour, slug: "/singapore-city-tour" },
  { title: "Gardens by the Bay", location: "Marina Bay", image: gardensBay, slug: "/gardens-by-the-bay" },
  { title: "Universal Studios Weekday", location: "Sentosa", image: universalStudios, slug: "/universal-studios-weekday" },
  { title: "Night Safari with Dinner", location: "Mandai", image: nightSafari, slug: "/night-safari-dinner" },
  { title: "Singapore Flyer", location: "Marina Bay", image: flyer, slug: "/singapore-flyer" },
  { title: "Sentosa Cable Car", location: "Sentosa", image: cableCar, slug: "/sentosa-cable-car" },
  { title: "Singapore River Cruise", location: "Clarke Quay", image: riverCruise, slug: "/singapore-river-cruise" },
  { title: "Adventure Cove Water Park", location: "Sentosa", image: adventureCove, slug: "/adventure-cove" },
  { title: "Singapore Zoo + Tram", location: "Mandai", image: zoo, slug: "/singapore-zoo" },
  { title: "Wings of Time Sentosa", location: "Sentosa", image: wingsTime, slug: "/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", location: "Sentosa", image: skyHelix, slug: "/sentosa-sky-helix" },
  { title: "Sentosa 4D Adventureland", location: "Sentosa", image: sentosa4d, slug: "/sentosa-4d-2rides" },
  { title: "River Safari Singapore", location: "Mandai", image: riverSafari, slug: "/river-safari" },
  { title: "Big Bus Night Tour", location: "Singapore", image: bigBus, slug: "/big-bus-night" },
  { title: "Rainforest Wild Asia", location: "Mandai", image: zoo, slug: "/rainforest-wild-asia" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Best Things to Do in Singapore</h2>
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

const BlogTopThingsSingapore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <BlogArticleLayout
    title="Top Things to Do in Singapore — Complete 2026 Guide"
    description="Discover the best things to do in Singapore from Marina Bay to Sentosa. Activities, attractions, tours & tickets — all bookable online with instant confirmation."
    heroImage={marinaBay}
    heroAlt="Marina Bay Sands and Singapore skyline at night"
    author="Yellodae Travel Expert"
    date="Mar 8, 2026"
    readTime="11 min read"
    category="Singapore Travel Guide"
    keywords={["top things to do in Singapore", "Singapore activities", "Singapore attractions 2026", "Marina Bay Sands", "Sentosa Island activities", "Singapore travel guide", "Singapore tours", "Yellodae Singapore"]}
    guidesLink="/singapore/smart-guides"
    guidesLabel="Singapore Guides"
    relatedLinks={[
      { title: "Best Singapore Attraction Tickets for Indian Travelers", link: "/blog/best-singapore-attractions" },
      { title: "Universal Studios Singapore Ticket Guide", link: "/blog/universal-studios-singapore-guide" },
      { title: "Singapore Night Safari Booking Guide", link: "/blog/night-safari-singapore-guide" },
      { title: "Sentosa Island Activities Guide", link: "/blog/sentosa-activities-singapore" },
    ]}
    sections={[
      { type: "paragraph", content: "Singapore may be small in size, but it's absolutely massive in experiences. From the futuristic skyline of Marina Bay to the tropical paradise of Sentosa Island, from world-class wildlife parks to thrilling theme parks — Singapore packs more into its compact footprint than most countries ten times its size." },
      { type: "heading", content: "Must-Do Experiences in Singapore" },
      { type: "subheading", content: "1. Explore Marina Bay" },
      { type: "paragraph", content: "Marina Bay is Singapore's crown jewel. Visit the iconic Merlion statue, gaze at the Marina Bay Sands hotel, ride the Singapore Flyer observation wheel, and stroll through Gardens by the Bay as the Supertrees light up at night. This is Singapore at its most spectacular." },
      { type: "image", src: merlion, alt: "Merlion statue with Marina Bay Sands at night", caption: "The iconic Merlion — Singapore's most famous landmark" },
      { type: "subheading", content: "2. Gardens by the Bay" },
      { type: "paragraph", content: "The Cloud Forest and Flower Dome conservatories are architectural marvels. The Supertree Grove light and sound show every evening at 7:45pm and 8:45pm is free and absolutely unmissable." },
      { type: "subheading", content: "3. Universal Studios Singapore" },
      { type: "paragraph", content: "Home to Transformers: The Ride, Battlestar Galactica, and the Jurassic World zone. Book weekday tickets for fewer crowds and lower prices. Arrive at opening for the shortest wait times." },
      { type: "subheading", content: "4. Singapore Night Safari" },
      { type: "paragraph", content: "The world's first nocturnal zoo is a truly unique experience. Take the tram ride through different habitat zones, watch the Creatures of the Night show, and walk the trails to see animals in moonlit settings." },
      { type: "subheading", content: "5. Sentosa Island Adventures" },
      { type: "paragraph", content: "Sentosa is an entertainment island with beaches, cable cars, 4D rides, Adventure Cove waterpark, Wings of Time night show, and Sky Helix. You could easily spend 2 full days here." },
      { type: "image", src: marinaBayDay, alt: "Marina Bay Sands Singapore during the day", caption: "Marina Bay Sands — the world's most expensive standalone casino property" },
      { type: "subheading", content: "6. Singapore City Tour" },
      { type: "paragraph", content: "A guided tour covering Chinatown, Little India, the Colonial District, and Marina Bay. Learn about Singapore's fascinating multicultural history and see all the major landmarks with expert commentary." },
      { type: "subheading", content: "7. Singapore River Cruise" },
      { type: "paragraph", content: "Cruise along the historic Singapore River from Clarke Quay to Marina Bay. See the city's transformation from trading port to global financial hub from the water." },
      { type: "subheading", content: "8. Singapore Zoo" },
      { type: "paragraph", content: "Consistently rated one of the world's best zoos. The open-concept design means no cages — animals roam in naturalistic habitats. Don't miss the orangutan breakfast experience." },
      { type: "subheading", content: "9. Big Bus Singapore Tour" },
      { type: "paragraph", content: "The hop-on hop-off bus is perfect for independent travelers. The night tour is particularly impressive with illuminated landmarks and live commentary." },
      { type: "subheading", content: "10. River Safari" },
      { type: "paragraph", content: "Explore eight of the world's most iconic rivers and their wildlife. The Amazon River Quest boat ride and the giant panda exhibit are star attractions." },
      { type: "heading", content: "Singapore Travel Tips for Indian Travelers" },
      { type: "list", items: [
        "Indian passport holders can get visa-on-arrival for up to 30 days",
        "Singapore uses SGD — most places accept cards and digital payments",
        "MRT (metro) is the cheapest and fastest way to get around",
        "Hawker centers offer delicious meals from SGD 3-5 with plenty of vegetarian options",
        "Best time to visit: February to April for driest weather",
        "Buy attraction combo tickets to save 20-30%",
      ]},
      { type: "tip-box", content: "💡 Pro Tip: Get a Singapore Tourist Pass for unlimited MRT and bus travel. The 3-day pass costs SGD 20 and saves you a lot on transport." },
      { type: "heading", content: "Why Book with Yellodae?" },
      { type: "list", items: [
        "Lowest price guarantee on all Singapore activities",
        "Instant e-ticket confirmation",
        "24/7 WhatsApp support",
        "INR pricing — no hidden conversion fees",
        "Trusted by 50,000+ Indian travelers",
        "Flexible cancellation policies",
      ]},
      { type: "cta", content: "Ready to explore Singapore? Browse all activities and book at the best prices!", link: "/singapore", linkText: "🇸🇬 Explore All Singapore Activities" },
    ]}
  >
    <ActivityCards />
  </BlogArticleLayout>
);

export default BlogTopThingsSingapore;
