import TourBooking from "@/components/TourBooking";
import { WatArunPhoPhraKaewSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { toursData } from "@/data/tourData";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";

const BangkokWatArunPhoTraimit = () => {
  const baseTourData = toursData["bangkok-wat-arun-pho-traimit"];
  
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
      { src: bangkokTemple3, title: "Wat Arun Temple at Twilight" },
      { src: bangkokCity1, title: "Bangkok City and River" },
      { src: bangkokTemple1, title: "Golden Pagoda Temple" }
    ],
    galleryImages: [
      { src: bangkokTemple3, alt: "Wat Arun at sunset" },
      { src: bangkokCity1, alt: "Bangkok cityscape" },
      { src: bangkokTemple1, alt: "Golden pagoda" }
    ]
  };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<WatArunPhoPhraKaewSEO />} />;
};

export default BangkokWatArunPhoTraimit;
