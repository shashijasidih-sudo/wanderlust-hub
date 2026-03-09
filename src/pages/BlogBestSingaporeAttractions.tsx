import { useEffect } from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gardensBay from "@/assets/singapore-gardens-bay.jpg";
import gardensBayNight from "@/assets/singapore-gardens-bay-night-1.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";
import sentosa4d from "@/assets/singapore-sentosa-4d.jpg";
import cableCar from "@/assets/singapore-cable-car.jpg";
import wingsTime from "@/assets/singapore-wings-time.jpg";
import skyHelix from "@/assets/singapore-sky-helix.jpg";
import riverCruise from "@/assets/singapore-river-cruise.jpg";
import adventureCove from "@/assets/singapore-adventure-cove.jpg";
import flyer from "@/assets/singapore-flyer.jpg";
import riverSafari from "@/assets/singapore-river-safari.jpg";
import zoo from "@/assets/singapore-zoo.jpg";
import bigBus from "@/assets/singapore-big-bus.jpg";
import cityTour from "@/assets/singapore-city-tour.jpg";
import marinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";

const activityCards = [
  { title: "Gardens by the Bay Tickets", location: "Marina Bay", image: gardensBay, slug: "/gardens-by-the-bay" },
  { title: "Universal Studios Singapore Weekday", location: "Sentosa", image: universalStudios, slug: "/universal-studios-weekday" },
  { title: "Night Safari Singapore with Dinner", location: "Mandai", image: nightSafari, slug: "/night-safari-dinner" },
  { title: "Singapore City Tour with Guide", location: "Singapore", image: cityTour, slug: "/singapore-city-tour" },
  { title: "Sentosa Cable Car Ride", location: "Sentosa", image: cableCar, slug: "/sentosa-cable-car" },
  { title: "Singapore Flyer Ticket", location: "Marina Bay", image: flyer, slug: "/singapore-flyer" },
  { title: "Adventure Cove Water Park", location: "Sentosa", image: adventureCove, slug: "/adventure-cove" },
  { title: "Singapore River Cruise", location: "Clarke Quay", image: riverCruise, slug: "/singapore-river-cruise" },
  { title: "Singapore Zoo + Tram Ride", location: "Mandai", image: zoo, slug: "/singapore-zoo" },
  { title: "Sentosa Wings of Time Show", location: "Sentosa", image: wingsTime, slug: "/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", location: "Sentosa", image: skyHelix, slug: "/sentosa-sky-helix" },
  { title: "Sentosa 4D Adventureland", location: "Sentosa", image: sentosa4d, slug: "/sentosa-4d-2rides" },
  { title: "Singapore River Safari", location: "Mandai", image: riverSafari, slug: "/river-safari" },
  { title: "Big Bus Singapore Discover", location: "Singapore", image: bigBus, slug: "/big-bus-discover" },
  { title: "Rainforest Wild Asia with Transfer", location: "Mandai", image: zoo, slug: "/rainforest-wild-asia" },
];

const ActivityCards = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Singapore Attractions to Book</h2>
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

const BlogBestSingaporeAttractions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <BlogArticleLayout
    title="Best Singapore Attraction Tickets for Indian Travelers 2026"
    description="Complete guide to booking Singapore attraction tickets online — from Gardens by the Bay to Universal Studios. Best prices, instant confirmation, and tips for Indian travelers."
    heroImage={gardensBayNight}
    heroAlt="Gardens by the Bay Singapore at night with Supertree Grove illuminated"
    author="Yellodae Travel Expert"
    date="Mar 8, 2026"
    readTime="10 min read"
    category="Singapore Travel Guide"
    keywords={["Singapore attraction tickets", "Singapore tickets for Indian travelers", "Gardens by the Bay tickets", "Universal Studios Singapore", "Night Safari tickets", "Singapore tour booking", "Sentosa attractions", "Singapore travel guide 2026", "Yellodae Singapore"]}
    guidesLink="/singapore/smart-guides"
    guidesLabel="Singapore Guides"
    relatedLinks={[
      { title: "Top Things to Do in Singapore", link: "/blog/top-things-singapore" },
      { title: "Universal Studios Singapore Ticket Guide", link: "/blog/universal-studios-singapore-guide" },
      { title: "Singapore Night Safari Booking Guide", link: "/blog/night-safari-singapore-guide" },
      { title: "Sentosa Island Activities Guide", link: "/blog/sentosa-activities-singapore" },
    ]}
    sections={[
      { type: "paragraph", content: "Singapore is a dream destination for Indian travelers — visa-friendly, compact, safe, and packed with world-class attractions. From the futuristic Gardens by the Bay to the thrilling Universal Studios, there's something for everyone. This guide helps you book the best Singapore attraction tickets online at the lowest prices with instant confirmation." },
      { type: "heading", content: "Why Book Singapore Tickets Online?" },
      { type: "list", items: [
        "Save 15-30% compared to walk-in ticket prices at attractions",
        "Skip long queues with e-tickets and fast-track entry",
        "Instant confirmation — no waiting or uncertainty",
        "Compare prices across multiple attractions easily",
        "Flexible cancellation and rescheduling options",
        "INR pricing with no hidden conversion charges",
      ]},
      { type: "heading", content: "Top 15 Singapore Attractions for Indian Travelers" },
      { type: "subheading", content: "1. Gardens by the Bay" },
      { type: "paragraph", content: "Singapore's iconic nature park features the stunning Supertree Grove, Cloud Forest dome with the world's tallest indoor waterfall, and the Flower Dome showcasing plants from five continents. The evening light show is absolutely magical and free to watch." },
      { type: "subheading", content: "2. Universal Studios Singapore" },
      { type: "paragraph", content: "Southeast Asia's only Universal Studios theme park features 24 rides across 7 themed zones including Transformers, Jurassic Park, and Battlestar Galactica. Book weekday tickets for shorter queues and better prices." },
      { type: "image", src: universalStudios, alt: "Universal Studios Singapore entrance", caption: "Universal Studios Singapore — Southeast Asia's only Universal theme park" },
      { type: "subheading", content: "3. Night Safari Singapore" },
      { type: "paragraph", content: "The world's first nocturnal wildlife park lets you observe 900+ animals in naturalistic habitats after dark. The tram ride through different zones and the Creatures of the Night show are unforgettable experiences." },
      { type: "subheading", content: "4. Singapore City Tour" },
      { type: "paragraph", content: "A comprehensive guided tour covering Marina Bay Sands, Merlion Park, Chinatown, Little India, and the Colonial District. Perfect for first-time visitors to get oriented and see all major landmarks." },
      { type: "subheading", content: "5. Sentosa Cable Car" },
      { type: "paragraph", content: "Enjoy breathtaking panoramic views of Sentosa Island, the harbor, and the city skyline from the cable car. The Mount Faber Line offers stunning photo opportunities." },
      { type: "subheading", content: "6. Singapore Flyer" },
      { type: "paragraph", content: "Asia's largest observation wheel stands 165 meters tall, offering 360-degree views of Marina Bay, the Singapore Strait, and even parts of Malaysia and Indonesia on clear days." },
      { type: "image", src: marinaBay, alt: "Marina Bay Sands Singapore at night", caption: "The stunning Marina Bay Sands — Singapore's most iconic landmark" },
      { type: "subheading", content: "7. Adventure Cove Water Park" },
      { type: "paragraph", content: "Sentosa's premier water park features thrilling water slides, a lazy river, wave pool, and the chance to snorkel with 20,000 tropical fish over a colorful reef." },
      { type: "subheading", content: "8. Singapore River Cruise" },
      { type: "paragraph", content: "A scenic boat ride along the Singapore River passing Clarke Quay, Boat Quay, and Marina Bay. See the city's historic trading heritage and modern skyline from the water." },
      { type: "subheading", content: "9. Singapore Zoo + Tram Ride" },
      { type: "paragraph", content: "One of the world's best zoos with open-concept enclosures. See orangutans, white tigers, and elephants in naturalistic settings. The guided tram ride covers the entire park comfortably." },
      { type: "subheading", content: "10. Sentosa Wings of Time" },
      { type: "paragraph", content: "A spectacular outdoor night show combining water, laser, fire, and music effects against the backdrop of the sea. A must-see evening experience on Sentosa." },
      { type: "subheading", content: "11. Sentosa Sky Helix" },
      { type: "paragraph", content: "Singapore's highest open-air panoramic ride gently rotates as it ascends 79 meters, offering stunning views of Sentosa and the southern coastline." },
      { type: "subheading", content: "12. Sentosa 4D Adventureland" },
      { type: "paragraph", content: "An immersive theme park with 4D motion rides, interactive shooting games, and VR experiences. Great fun for families and thrill-seekers." },
      { type: "subheading", content: "13. Singapore River Safari" },
      { type: "paragraph", content: "Explore the world's major river habitats and see giant pandas, manatees, and electric eels. The Amazon River Quest boat ride is a highlight." },
      { type: "subheading", content: "14. Big Bus Singapore Tour" },
      { type: "paragraph", content: "Hop-on hop-off double-decker bus covering all major attractions. Choose between the Discover day tour or the atmospheric Night tour with illuminated landmarks." },
      { type: "subheading", content: "15. Rainforest Wild Asia" },
      { type: "paragraph", content: "Journey through recreated Asian rainforest habitats aboard a boat, encountering Malayan tigers, elephants, and other wildlife in lush settings." },
      { type: "heading", content: "Best Time to Visit Singapore" },
      { type: "paragraph", content: "Singapore is a year-round destination with consistent tropical weather. However, December to June offers the driest conditions. Avoid November-January if you dislike rain. Weekdays are always better for shorter queues at attractions." },
      { type: "tip-box", content: "💡 Pro Tip: Buy combo tickets (e.g., Zoo + Night Safari or Universal Studios + Sentosa attractions) to save up to 25% on total costs." },
      { type: "heading", content: "Why Book with Yellodae?" },
      { type: "list", items: [
        "Lowest price guarantee on all Singapore attractions",
        "Instant e-ticket confirmation",
        "24/7 customer support via WhatsApp",
        "Prices in INR with no hidden charges",
        "Trusted by 50,000+ Indian travelers",
        "Free rescheduling on most tickets",
      ]},
      { type: "cta", content: "Ready to explore Singapore? Browse all attractions and book at the best prices!", link: "/singapore", linkText: "🇸🇬 Explore Singapore Activities" },
    ]}
  >
    <ActivityCards />
  </BlogArticleLayout>
  );
};

export default BlogBestSingaporeAttractions;
