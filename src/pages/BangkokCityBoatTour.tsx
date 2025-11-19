import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokCityBoatTour = () => {
  const baseTourData = toursData["bangkok-city-boat-tour"];
  
  if (!baseTourData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Configuration Error</h1>
          <p className="text-muted-foreground">Tour data not found.</p>
        </div>
      </div>
    );
  }
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: "/placeholder.svg", title: "Bangkok City Tour by Boat" },
      { src: "/placeholder.svg", title: "Chao Phraya River Cruise" },
      { src: "/placeholder.svg", title: "Canal Exploration" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Long-tail boat on river" },
      { src: "/placeholder.svg", alt: "Riverside temples" },
      { src: "/placeholder.svg", alt: "Canal houses" },
      { src: "/placeholder.svg", alt: "Bangkok waterways" }
    ]
  };

  return <TourBooking tourData={tourData} />;
};

export default BangkokCityBoatTour;
