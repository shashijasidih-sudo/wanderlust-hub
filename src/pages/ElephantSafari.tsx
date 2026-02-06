import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import elephant1 from "@/assets/elephant-1.jpg";

const ElephantSafari = () => {
  const baseTourData = toursData["elephant-safari"] || {
    id: "elephant-safari",
    title: "5 km Rafting Adventure + Monkey Caves + ATV Ride + Elephant Trekking + Flying Fox + Lunch",
    shortDescription: "Ultimate adventure combo with rafting, ATV, elephant trekking, and flying fox activities.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 7245,
    childPrice: 7245,
    duration: "Full Day",
    rating: 4.8,
    reviews: 567,
    highlights: [
      "5km white water rafting",
      "ATV jungle ride",
      "Elephant trekking experience",
      "Flying fox zipline",
      "Monkey caves visit",
      "Thai lunch included"
    ],
    description: {
      overview: "Experience the ultimate adventure day in Phuket with multiple activities including rafting, ATV, elephant trekking, and zipline.",
      whatToExpect: "Start with thrilling white water rafting, explore monkey caves, ride ATVs through the jungle, trek with elephants, and finish with an exciting zipline adventure."
    },
    itinerary: [
      { time: "07:00 AM", title: "Hotel Pickup", description: "Pickup from your hotel" },
      { time: "09:00 AM", title: "White Water Rafting", description: "5km rafting adventure" },
      { time: "10:30 AM", title: "Monkey Caves", description: "Explore the caves" },
      { time: "11:30 AM", title: "ATV Ride", description: "Jungle ATV adventure" },
      { time: "12:30 PM", title: "Lunch", description: "Thai buffet lunch" },
      { time: "01:30 PM", title: "Elephant Trekking", description: "Walk with elephants" },
      { time: "03:00 PM", title: "Flying Fox", description: "Zipline adventure" },
      { time: "04:30 PM", title: "Return", description: "Hotel drop-off" }
    ],
    tourTimings: ["07:00 AM"],
    inclusions: ["Hotel Transfer", "All Activities", "Lunch", "Equipment", "Guide", "Insurance"],
    exclusions: ["Personal Expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Same pricing for all ages", "Minimum age 6 years"],
    faqs: [
      { question: "What should I wear?", answer: "Comfortable clothes and shoes that can get wet." }
    ]
  };
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: elephant1, title: "Elephant Safari Adventure" },
      { src: phuketLongtailBoat, title: "Rafting Experience" },
      { src: phuketBoatTour, title: "ATV Jungle Ride" }
    ],
    galleryImages: [
      { src: phuketIslandView, alt: "White water rafting" },
      { src: phuketMayaBay, alt: "ATV adventure" },
      { src: phuketKayaks, alt: "Elephant trekking" },
      { src: elephant1, alt: "Flying fox zipline" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default ElephantSafari;
