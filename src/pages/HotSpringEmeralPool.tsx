import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import emerald1 from "@/assets/emerald-1.jpg";

const HotSpringEmeralPool = () => {
  const baseTourData = toursData["hot-spring-emerald-pool"] || {
    id: "hot-spring-emerald-pool",
    title: "Hot Spring & Emerald Pool Tour from Krabi",
    shortDescription: "Relax in natural thermal waters and swim in the stunning crystal-clear Emerald Pool surrounded by rainforest.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 2500,
    childPrice: 1500,
    duration: "Half Day",
    rating: 4.7,
    reviews: 892,
    highlights: [
      "Natural hot spring relaxation",
      "Crystal-clear Emerald Pool",
      "Rainforest nature walk",
      "Therapeutic thermal waters"
    ],
    description: {
      overview: "Discover the stunning Emerald Pool (Sa Morakot), a natural crystal-clear pool in the heart of the tropical rainforest.",
      whatToExpect: "Relax in therapeutic hot spring pools and swim in the magical blue-green waters of the Emerald Pool. Perfect for nature lovers."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pickup from Krabi hotel" },
      { time: "09:30 AM", title: "Hot Springs", description: "Relax in natural hot springs" },
      { time: "11:00 AM", title: "Nature Walk", description: "Trek through rainforest" },
      { time: "12:00 PM", title: "Emerald Pool", description: "Swim in crystal-clear waters" },
      { time: "01:30 PM", title: "Return", description: "Hotel drop-off" }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Hotel Transfer", "Entrance Fees", "Guide"],
    exclusions: ["Lunch", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "What should I bring?", answer: "Swimwear, towel, comfortable walking shoes." }
    ]
  };
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: emerald1, title: "Hot Spring & Emerald Pool" },
      { src: phuketIslandView, title: "Natural Thermal Waters" },
      { src: phuketMayaBay, title: "Rainforest Paradise" }
    ],
    galleryImages: [
      { src: phuketBoatTour, alt: "Crystal-clear Emerald Pool" },
      { src: phuketKayaks, alt: "Hot spring relaxation" },
      { src: phuketLongtailBoat, alt: "Rainforest nature walk" },
      { src: emerald1, alt: "Therapeutic waters" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default HotSpringEmeralPool;
