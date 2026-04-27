import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import nightSafari from "@/assets/singapore-night-safari.jpg";
import gardensBay from "@/assets/singapore-gardens-bay.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
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
import gardensBayNight from "@/assets/singapore-gardens-bay-night-1.jpg";

const activityCards = [
  { title: "Night Safari Tickets Only", location: "Mandai", image: nightSafari, slug: "/singapore/night-safari-singapore-tickets-and-transfers" },
  { title: "Night Safari with Dinner", location: "Mandai", image: nightSafari, slug: "/singapore/night-safari-singapore-tickets-and-transfers-dinner" },
  { title: "Night Safari with Transfer", location: "Mandai", image: nightSafari, slug: "/singapore/night-safari-singapore-tickets-and-transfers-transfer" },
  { title: "Singapore Zoo + Tram", location: "Mandai", image: zoo, slug: "/singapore/singapore-zoo-tickets" },
  { title: "River Safari Singapore", location: "Mandai", image: riverSafari, slug: "/singapore/river-wonders-singapore-tickets" },
  { title: "Rainforest Wild Asia", location: "Mandai", image: zoo, slug: "/singapore/rainforest-wild-asia-tickets" },
  { title: "Gardens by the Bay", location: "Marina Bay", image: gardensBay, slug: "/singapore/gardens-by-the-bay-tickets-and-transfers" },
  { title: "Universal Studios Weekday", location: "Sentosa", image: universalStudios, slug: "/singapore/universal-studios-singapore-weekday-tickets" },
  { title: "Singapore City Tour", location: "Singapore", image: cityTour, slug: "/singapore/singapore-city-tour" },
  { title: "Singapore Flyer", location: "Marina Bay", image: flyer, slug: "/singapore/singapore-flyer-tickets-and-transfers" },
  { title: "Sentosa Cable Car", location: "Sentosa", image: cableCar, slug: "/singapore/sentosa-cable-car-tickets-and-transfers" },
  { title: "Singapore River Cruise", location: "Clarke Quay", image: riverCruise, slug: "/singapore/singapore-river-cruise-tickets-and-transfers" },
  { title: "Adventure Cove Water Park", location: "Sentosa", image: adventureCove, slug: "/singapore/adventure-cove-waterpark-tickets" },
  { title: "Wings of Time Show", location: "Sentosa", image: wingsTime, slug: "/singapore/wings-of-time-show-sentosa-tickets" },
  { title: "Big Bus Night Tour", location: "Singapore", image: bigBus, slug: "/singapore/big-bus-night-city-tour-singapore" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Singapore Wildlife & Night Activities</h2>
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

const BlogNightSafariSingapore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <BlogArticleLayout
    title="Singapore Night Safari Booking Guide 2026"
    description="Complete guide to Singapore Night Safari — ticket options, what to expect, best time to visit, animal encounters, and how to book the cheapest tickets online."
    heroImage={nightSafari}
    heroAlt="Singapore Night Safari entrance with nocturnal wildlife"
    author="Yellodae Travel Expert"
    date="Mar 8, 2026"
    readTime="9 min read"
    category="Singapore Travel Guide"
    keywords={["Singapore Night Safari tickets", "Night Safari booking", "Night Safari Singapore guide", "nocturnal zoo Singapore", "Mandai wildlife", "Night Safari dinner", "Singapore wildlife park", "Night Safari review", "Yellodae Singapore"]}
    guidesLink="/singapore/smart-guides"
    guidesLabel="Singapore Guides"
    relatedLinks={[
      { title: "Best Singapore Attraction Tickets for Indian Travelers", link: "/blog/best-singapore-attractions" },
      { title: "Top Things to Do in Singapore", link: "/blog/top-things-singapore" },
      { title: "Universal Studios Singapore Ticket Guide", link: "/blog/universal-studios-singapore-guide" },
      { title: "Sentosa Island Activities Guide", link: "/blog/sentosa-activities-singapore" },
    ]}
    sections={[
      { type: "paragraph", content: "Singapore Night Safari is the world's first nocturnal wildlife park and one of Singapore's most unique attractions. Home to over 900 animals from 100 species, the Night Safari lets you observe creatures in their natural nighttime behavior — something you simply can't experience at a regular zoo. It's a must-visit for every traveler to Singapore." },
      { type: "heading", content: "What is Singapore Night Safari?" },
      { type: "paragraph", content: "Opened in 1994, the Night Safari is an open-air zoo set in 35 hectares of secondary rainforest. Using subtle moonlight lighting, the park recreates natural habitats where animals roam freely without visible barriers. The experience feels like a genuine nighttime jungle expedition." },
      { type: "heading", content: "What to Expect" },
      { type: "subheading", content: "The Tram Ride" },
      { type: "paragraph", content: "The guided tram ride is the centerpiece of the Night Safari experience. Over 40 minutes, you'll travel through 7 geographical zones — from the Himalayan Foothills to the African Savannah. You'll spot lions, elephants, giraffes, and rare species like the Malayan tiger, all in naturalistic settings illuminated by soft moonlight." },
      { type: "subheading", content: "Walking Trails" },
      { type: "paragraph", content: "Four walking trails let you explore at your own pace and get closer to animals. The Leopard Trail passes by the clouded leopard and flying squirrel habitats. The Fishing Cat Trail features otters and pangolins. Budget 60-90 minutes for all four trails." },
      { type: "subheading", content: "Creatures of the Night Show" },
      { type: "paragraph", content: "This 20-minute amphitheater show features owls, binturongs, hyenas, and other nocturnal creatures showcasing their natural behaviors. Shows run at 7:15pm, 8:15pm, and 9:15pm. Arrive 15-20 minutes early for good seats." },
      { type: "image", src: gardensBayNight, alt: "Singapore attractions at night", caption: "Singapore comes alive at night — Night Safari is the ultimate evening experience" },
      { type: "heading", content: "Ticket Options" },
      { type: "list", items: [
        "Tickets Only — entry to Night Safari with tram ride included",
        "Tickets + Dinner — includes a buffet dinner at Ulu Ulu Safari Restaurant before your visit",
        "Tickets + Transfer — includes round-trip hotel transfers for convenience",
        "Combo Tickets — combine with Singapore Zoo, River Safari, or Rainforest Wild Asia for savings",
      ]},
      { type: "heading", content: "Best Time to Visit" },
      { type: "paragraph", content: "The Night Safari opens at 6:15pm (for dinner guests) and 7:15pm for general admission. Gates close at midnight. For the best experience, arrive by 7pm to catch the first Creatures of the Night show at 7:15pm, then take the tram ride, and finish with the walking trails." },
      { type: "tip-box", content: "💡 Pro Tip: Book the dinner package to arrive early and explore the entrance area. The Thumbuakar fire performers put on a free show near the entrance starting at 6:45pm — you don't want to miss this!" },
      { type: "heading", content: "Getting to Night Safari" },
      { type: "paragraph", content: "Night Safari is located in the Mandai area, about 30 minutes from the city center. Take MRT to Khatib station and catch the Mandai Khatib Shuttle bus (free). Alternatively, book a transfer package for hotel pickup and drop-off." },
      { type: "heading", content: "Tips for Indian Travelers" },
      { type: "list", items: [
        "Wear comfortable shoes — you'll walk 2-3 km on the trails",
        "Apply mosquito repellent — it's a tropical rainforest after all",
        "Don't use flash photography — it disturbs the animals and is prohibited",
        "The buffet dinner has vegetarian options available",
        "Bring a light jacket — it can get cool in the evening",
        "Book online to avoid the long ticket queue at the gate",
      ]},
      { type: "heading", content: "Why Book with Yellodae?" },
      { type: "list", items: [
        "Lowest price guarantee on Night Safari tickets",
        "Multiple packages: tickets only, with dinner, or with transfer",
        "Instant e-ticket confirmation",
        "24/7 WhatsApp support",
        "INR pricing with no hidden charges",
        "Free cancellation up to 24 hours before",
      ]},
      { type: "cta", content: "Book your Singapore Night Safari tickets now at the best price!", link: "/singapore/night-safari-singapore-tickets-and-transfers", linkText: "🦁 Book Night Safari Tickets" },
    ]}
  >
    <ActivityCards />
  </BlogArticleLayout>
  );
};

export default BlogNightSafariSingapore;
