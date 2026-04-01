import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import esimThailand1 from "@/assets/esim-thailand-1.jpg";
import esimThailand2 from "@/assets/esim-thailand-2.jpg";
import esimThailand3 from "@/assets/esim-thailand-3.jpg";

const EsimThailandAis = () => {
  const tourData = {
    ...toursData["esim-thailand-ais"],
    heroImages: [
      { src: esimThailand1, title: "eSIM Thailand Activation" },
      { src: esimThailand2, title: "Thailand eSIM Coverage Map" },
      { src: esimThailand3, title: "Stay Connected in Thailand" }
    ],
    galleryImages: [
      { src: esimThailand1, alt: "eSIM Thailand Setup" },
      { src: esimThailand2, alt: "Thailand Travel Connectivity" },
      { src: esimThailand3, alt: "Using Phone in Bangkok" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default EsimThailandAis;
