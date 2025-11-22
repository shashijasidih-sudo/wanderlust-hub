import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

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
  
  const tourData = baseTourData;

  return <TourBooking tourData={tourData} />;
};

export default BangkokWatArunPhoTraimit;
