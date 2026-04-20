import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { TigerKingdomSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { tigerKingdomFaqs } from "@/data/phuketActivityFaqs";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import tiger1 from "@/assets/tiger-1.jpg";

const SelfieWithTigers = () => {
  const baseTourData = toursData["selfie-tigers"] || {
    id: "selfie-tigers",
    title: "Phuket City Tour and Tiger Experience: Tiger Only",
    shortDescription: "Get up close with majestic tigers in a safe environment. Professional photo opportunities included.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 4589,
    childPrice: 4589,
    duration: "Half Day",
    rating: 4.7,
    reviews: 823,
    highlights: [
      "Close encounter with tigers",
      "Professional photo session",
      "Experienced handlers",
      "Learn about tiger conservation",
      "Hotel transfer included"
    ],
    description: {
      overview: "Experience a once-in-a-lifetime opportunity to interact with tigers in a controlled and safe environment.",
      whatToExpect: "Professional trainers ensure your safety while you capture unforgettable memories with these magnificent creatures."
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Pickup from your hotel" },
      { time: "10:00 AM", title: "Arrive at Tiger Kingdom", description: "Safety briefing" },
      { time: "10:30 AM", title: "Tiger Experience", description: "Photo session with tigers" },
      { time: "12:00 PM", title: "Return", description: "Drop-off at hotel" }
    ],
    tourTimings: ["07:00 AM", "10:00 AM", "01:00 PM"],
    inclusions: ["Hotel Transfer", "Admission", "Photo Session", "Guide"],
    exclusions: ["Personal Expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Same pricing for all ages"],
    faqs: [
      { question: "Is it safe?", answer: "Yes, experienced handlers supervise all interactions." }
    ]
  };
  
  const tourData = {
    ...baseTourData,
    faqs: tigerKingdomFaqs,
    heroImages: [
      { src: tiger1, title: "Selfie with Tigers Experience" },
      { src: phuketIslandView, title: "Tiger Kingdom Phuket" },
      { src: phuketMayaBay, title: "Professional Photo Session" }
    ],
    galleryImages: [
      { src: phuketBoatTour, alt: "Tiger encounter experience" },
      { src: phuketKayaks, alt: "Safe tiger interaction" },
      { src: phuketLongtailBoat, alt: "Photo opportunities" },
      { src: tiger1, alt: "Majestic tiger" }
    ]
  };
  
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<TigerKingdomSEO />} />;
};

export default SelfieWithTigers;
