import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketLongtailBoatsBeach from "@/assets/phuket-longtail-boats-beach-1.jpg";
import jamesBond1 from "@/assets/james-bond-1.jpg";
import jamesBond2 from "@/assets/james-bond-2.jpg";
import jamesBond3 from "@/assets/james-bond-3.jpg";

const JamesBondIsland = () => {
  const baseTourData = toursData["james-bond-island"] || {
    id: "james-bond-island",
    title: "Phang Nga Bay (James Bond Island) Sea Canoe Tour by Long tail Boat",
    shortDescription: "Explore Phang Nga Bay and the famous James Bond Island with sea canoeing through caves and mangroves.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 4468,
    childPrice: 4226,
    singleAdultPrice: 4468,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1245,
    highlights: [
      "Visit iconic James Bond Island",
      "Sea canoeing through limestone caves",
      "Explore mangrove forests",
      "Visit Koh Panyee floating village",
      "Thai lunch included"
    ],
    description: {
      overview: "Experience the stunning beauty of Phang Nga Bay with its dramatic limestone karsts rising from emerald waters. Visit the famous James Bond Island and enjoy sea canoeing through hidden lagoons.",
      whatToExpect: "Cruise through Phang Nga Bay to see spectacular limestone formations. Visit James Bond Island, made famous by 'The Man with the Golden Gun'. Explore sea caves by canoe and visit the unique floating village of Koh Panyee."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pickup from your Phuket hotel" },
      { time: "09:30 AM", title: "Phang Nga Bay", description: "Arrive at the pier and board long-tail boat" },
      { time: "10:30 AM", title: "Sea Canoeing", description: "Canoe through limestone caves and mangroves" },
      { time: "12:00 PM", title: "James Bond Island", description: "Visit the famous filming location" },
      { time: "01:00 PM", title: "Koh Panyee", description: "Lunch at the floating Muslim village" },
      { time: "03:00 PM", title: "Return", description: "Return cruise and hotel drop-off" }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Hotel Transfer", "Long-tail Boat", "Canoeing", "Lunch", "English Guide", "National Park Fee"],
    exclusions: ["Personal Expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Is canoeing safe for non-swimmers?", answer: "Yes, life jackets are provided and guides paddle the canoes." }
    ]
  };
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: jamesBond1, title: "James Bond Island Phang Nga Bay" },
      { src: phuketLongtailBoat, title: "Long-tail Boat Adventure" },
      { src: jamesBond2, title: "Sea Canoeing Experience" }
    ],
    galleryImages: [
      { src: jamesBond3, alt: "Famous James Bond Island rock" },
      { src: phuketKayaks, alt: "Canoeing through caves" },
      { src: phuketLongtailBoatsBeach, alt: "Traditional Thai long-tail boats" },
      { src: phuketSpeedboat, alt: "Phang Nga Bay scenery" },
      { src: phuketBoatTour, alt: "Koh Panyee floating village" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default JamesBondIsland;
