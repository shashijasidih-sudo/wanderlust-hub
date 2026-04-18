import TourBooking from "@/components/TourBooking";
import { BangkokCityBoatTourSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { toursData } from "@/data/tourData";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";

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
      { src: bangkokCity1, title: "Bangkok City Tour by Boat" },
      { src: bangkokTemple2, title: "Chao Phraya River Cruise" },
      { src: bangkokCity2, title: "Canal Exploration" }
    ],
    galleryImages: [
      { src: bangkokCity1, alt: "Bangkok cityscape with river" },
      { src: bangkokTemple2, alt: "Wat Arun temple at night" },
      { src: bangkokCity2, alt: "Bangkok highway and cityscape" }
    ]
  };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<BangkokCityBoatTourSEO />} />;
};

export default BangkokCityBoatTour;
