import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokThreeTemples = () => {
  const baseTourData = toursData["bangkok-three-temples"];
  
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
      { src: "/placeholder.svg", title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour" },
      { src: "/placeholder.svg", title: "Grand Palace & Emerald Buddha" },
      { src: "/placeholder.svg", title: "Wat Arun Temple of Dawn" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Grand Palace golden spires and ornate architecture" },
      { src: "/placeholder.svg", alt: "Emerald Buddha in Wat Phra Kaew" },
      { src: "/placeholder.svg", alt: "Reclining Buddha at Wat Pho" },
      { src: "/placeholder.svg", alt: "Wat Arun porcelain spires along Chao Phraya River" },
      { src: "/placeholder.svg", alt: "Traditional Thai attire photo shoot" },
      { src: "/placeholder.svg", alt: "Pak Khlong Talat Flower Market" },
      { src: "/placeholder.svg", alt: "Bangkok canal tour with long-tail boat" },
      { src: "/placeholder.svg", alt: "Grand Palace courtyard and golden structures" }
    ]
  };

  return <TourBooking tourData={tourData} />;
};

export default BangkokThreeTemples;
