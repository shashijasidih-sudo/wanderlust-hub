import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TourBooking from "@/components/TourBooking";
import { safariWorldFaqs } from "@/data/bangkokActivityFaqs";
import bangkokRiversideTemple1 from "@/assets/bangkok-riverside-temple-1.jpg";
import bangkokBridgeDay1 from "@/assets/bangkok-bridge-day-1.jpg";
import bangkokTempleWoman1 from "@/assets/bangkok-temple-woman-1.jpg";

const SafariWorld = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Using placeholder data - this will need actual Safari World data
  const tourData = {
    id: "safari-world",
    title: "Safari World & Marine Park (Join Transfer)",
    shortDescription: "Experience Thailand's premier open zoo and marine park featuring exotic wildlife shows, safari adventures, and spectacular marine performances.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1800,
    childPrice: 1400,
    duration: "Full Day",
    rating: 4.6,
    reviews: 3421,
    heroImages: [
      { src: bangkokRiversideTemple1, title: "Safari World Adventure" },
      { src: bangkokBridgeDay1, title: "Bangkok Wildlife Experience" },
      { src: bangkokTempleWoman1, title: "Thailand Adventure" }
    ],
    galleryImages: [
      { src: bangkokRiversideTemple1, alt: "Riverside temple view" },
      { src: bangkokBridgeDay1, alt: "Bangkok bridge and cityscape" },
      { src: bangkokTempleWoman1, alt: "Thai temple visit" }
    ],
    highlights: [
      "Safari Park drive-through experience",
      "Marine Park spectacular shows",
      "Exotic animal encounters",
      "Bird shows and orangutan boxing",
      "Sea lion and dolphin shows"
    ],
    description: {
      overview: "Spend an exciting day at Safari World, Thailand's popular open zoo and leisure park.",
      whatToExpect: "Enjoy safari drive, marine shows, and amazing wildlife encounters."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pickup from Bangkok hotel" },
      { time: "09:00 AM", title: "Safari Park", description: "Drive-through safari experience" }
    ],
    tourTimings: ["08:00 AM - 05:00 PM"],
    inclusions: ["Hotel transfers", "Entrance tickets", "Guide"],
    exclusions: ["Lunch", "Personal expenses"],
    bookingPolicy: ["Instant confirmation"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Children 3-11 years discounted"],
    faqs: safariWorldFaqs
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 hover:bg-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Activities
        </Button>
        <TourBooking tourData={tourData} />
      </div>
    </div>
  );
};

export default SafariWorld;