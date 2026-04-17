import TourBooking from "@/components/TourBooking";
import ChaoPhrayaPrincessValentineSEO from "@/components/activity-detail/ChaoPhrayaPrincessValentineSEO";
import { toursData } from "@/data/tourData";
import valentineCruise1 from "@/assets/valentine-cruise-1.jpg";
import valentineCruise2 from "@/assets/valentine-cruise-2.jpg";
import valentineCruise3 from "@/assets/valentine-cruise-3.jpg";

const ChaoPhrayaPrincessValentine = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-valentine"],
    heroImages: [
      { src: valentineCruise1, title: "Valentine's Day Dinner Cruise" },
      { src: valentineCruise2, title: "Romantic Evening on Chao Phraya" },
      { src: valentineCruise3, title: "Special Celebration" }
    ],
    galleryImages: [
      { src: valentineCruise1, alt: "Luxury cruise ship at night" },
      { src: valentineCruise2, alt: "Chao Phraya Princess cruise" },
      { src: valentineCruise3, alt: "Night cruise experience" }
    ]
  };
  return (
    <TourBooking
      tourData={tourData}
      extraContentBeforeReviews={<ChaoPhrayaPrincessValentineSEO />}
    />
  );
};

export default ChaoPhrayaPrincessValentine;
