import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import gardensBay from "@/assets/singapore-gardens-bay.jpg";
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
import sentosaIsland from "@/assets/singapore-sentosa-4d.jpg";

const activityCards = [
  { title: "Universal Studios Weekday Ticket", location: "Sentosa", image: universalStudios, slug: "/universal-studios-weekday" },
  { title: "Universal Studios Weekend Ticket", location: "Sentosa", image: universalStudios, slug: "/universal-studios-weekend" },
  { title: "Adventure Cove Water Park", location: "Sentosa", image: adventureCove, slug: "/adventure-cove" },
  { title: "Sentosa Cable Car", location: "Sentosa", image: cableCar, slug: "/sentosa-cable-car" },
  { title: "Wings of Time Show", location: "Sentosa", image: wingsTime, slug: "/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", location: "Sentosa", image: skyHelix, slug: "/sentosa-sky-helix" },
  { title: "Sentosa 4D Adventureland", location: "Sentosa", image: sentosa4d, slug: "/sentosa-4d-2rides" },
  { title: "Gardens by the Bay", location: "Marina Bay", image: gardensBay, slug: "/gardens-by-the-bay" },
  { title: "Night Safari Singapore", location: "Mandai", image: nightSafari, slug: "/night-safari-tickets" },
  { title: "Singapore Flyer", location: "Marina Bay", image: flyer, slug: "/singapore-flyer" },
  { title: "Singapore City Tour", location: "Singapore", image: cityTour, slug: "/singapore-city-tour" },
  { title: "Singapore River Cruise", location: "Clarke Quay", image: riverCruise, slug: "/singapore-river-cruise" },
  { title: "Singapore Zoo + Tram", location: "Mandai", image: zoo, slug: "/singapore-zoo" },
  { title: "River Safari Singapore", location: "Mandai", image: riverSafari, slug: "/river-safari" },
  { title: "Big Bus Discover Tour", location: "Singapore", image: bigBus, slug: "/big-bus-discover" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Singapore Activities to Pair with Universal Studios</h2>
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

const BlogUniversalStudiosSingapore = () => (
  <BlogArticleLayout
    title="Universal Studios Singapore Ticket Guide 2026"
    description="Everything you need to know about Universal Studios Singapore tickets — prices, best time to visit, top rides, and how to book the cheapest tickets online."
    heroImage={universalStudios}
    heroAlt="Universal Studios Singapore entrance with iconic globe"
    author="Yellodae Travel Expert"
    date="Mar 8, 2026"
    readTime="9 min read"
    category="Singapore Travel Guide"
    keywords={["Universal Studios Singapore tickets", "USS ticket price", "Universal Studios Singapore guide", "USS rides", "Sentosa attractions", "Universal Studios booking online", "USS weekday vs weekend", "Singapore theme park", "Yellodae Singapore"]}
    guidesLink="/singapore/smart-guides"
    guidesLabel="Singapore Guides"
    relatedLinks={[
      { title: "Best Singapore Attraction Tickets for Indian Travelers", link: "/blog/best-singapore-attractions" },
      { title: "Top Things to Do in Singapore", link: "/blog/top-things-singapore" },
      { title: "Singapore Night Safari Booking Guide", link: "/blog/night-safari-singapore-guide" },
      { title: "Sentosa Island Activities Guide", link: "/blog/sentosa-activities-singapore" },
    ]}
    sections={[
      { type: "paragraph", content: "Universal Studios Singapore (USS) is Southeast Asia's only Universal Studios theme park and one of the most popular attractions in Singapore. Located on Sentosa Island, USS features 24 rides, shows, and attractions across 7 uniquely themed zones. This comprehensive guide covers everything you need to know to plan your visit." },
      { type: "heading", content: "Ticket Types & Pricing" },
      { type: "subheading", content: "Weekday vs Weekend Tickets" },
      { type: "paragraph", content: "USS offers two ticket types — weekday and weekend. Weekday tickets are significantly cheaper and the park is less crowded, meaning shorter queue times for popular rides. If your schedule allows, always choose a weekday visit." },
      { type: "list", items: [
        "Weekday tickets: Available Monday to Friday (excluding public holidays)",
        "Weekend tickets: Saturday, Sunday, and Singapore public holidays",
        "Children under 4 enter free",
        "Express passes available for skip-the-line access at top rides",
      ]},
      { type: "heading", content: "Top Rides & Attractions" },
      { type: "subheading", content: "Transformers: The Ride 3D" },
      { type: "paragraph", content: "The park's most popular ride combines 3D film with physical sets and effects for an incredibly immersive experience. You'll feel like you're in the middle of an epic Autobots vs Decepticons battle. Expect the longest queues — ride this first thing in the morning." },
      { type: "subheading", content: "Battlestar Galactica" },
      { type: "paragraph", content: "Twin dueling roller coasters — HUMAN (seated) and CYLON (suspended). The CYLON coaster is one of the tallest in Southeast Asia. Both offer thrilling high-speed loops and inversions." },
      { type: "subheading", content: "Jurassic World Rapids Adventure" },
      { type: "paragraph", content: "A water ride through dinosaur-inhabited jungles ending with an 18-meter plunge. You will get wet — bring a poncho or plan to dry off!" },
      { type: "subheading", content: "Revenge of the Mummy" },
      { type: "paragraph", content: "An indoor roller coaster in complete darkness with sudden drops, fire effects, and surprising twists. One of the best themed coasters anywhere." },
      { type: "subheading", content: "Puss in Boots' Giant Journey" },
      { type: "paragraph", content: "A family-friendly suspended coaster through the world of Far Far Away. Great for kids and adults who prefer gentler rides." },
      { type: "heading", content: "The 7 Themed Zones" },
      { type: "list", items: [
        "Hollywood — shops, restaurants, and photo opportunities along the main boulevard",
        "New York — Sesame Street rides, lights show, and the iconic NYC backdrop",
        "Sci-Fi City — Transformers and Battlestar Galactica thrill rides",
        "Ancient Egypt — Revenge of the Mummy and Treasure Hunters ride",
        "The Lost World — Jurassic World rapids and WaterWorld stunt show",
        "Far Far Away — Shrek 4D, Puss in Boots coaster, and enchanted zone",
        "Madagascar — family rides and meet-and-greets with DreamWorks characters",
      ]},
      { type: "heading", content: "Tips for the Best USS Experience" },
      { type: "list", items: [
        "Arrive 15 minutes before park opening to be first in line",
        "Head to Transformers and Battlestar Galactica first — queues build up fast",
        "Download the USS app for real-time queue times and show schedules",
        "Bring a poncho for water rides or buy one inside (SGD 5)",
        "Stay for the fireworks show on weekends (timing varies)",
        "Lockers available near water rides for SGD 4-8",
      ]},
      { type: "tip-box", content: "💡 Pro Tip: Book weekday tickets online through Yellodae for the best price. You'll save up to 20% compared to gate prices and skip the ticket queue entirely." },
      { type: "heading", content: "How to Get to Universal Studios" },
      { type: "paragraph", content: "USS is on Sentosa Island. Take the MRT to HarbourFront station, then the Sentosa Express monorail to Waterfront station. The park is a 5-minute walk from there. Alternatively, book a transfer with your tickets for door-to-door convenience." },
      { type: "heading", content: "Why Book with Yellodae?" },
      { type: "list", items: [
        "Cheapest USS tickets guaranteed",
        "Instant e-ticket — scan and enter, no queuing at ticket counters",
        "Weekday and weekend options available",
        "24/7 WhatsApp support for any queries",
        "Combo deals with other Sentosa attractions",
        "Free cancellation up to 24 hours before",
      ]},
      { type: "cta", content: "Book your Universal Studios Singapore tickets now at the lowest price!", link: "/universal-studios-weekday", linkText: "🎢 Book USS Tickets Now" },
    ]}
  >
    <ActivityCards />
  </BlogArticleLayout>
);

export default BlogUniversalStudiosSingapore;
