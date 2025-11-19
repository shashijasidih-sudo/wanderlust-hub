import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SeaLifeMadameTussauds = () => {
  const tourData = {
    ...toursData["sea-life-madame-tussauds"],
    heroImages: [
      { src: "/placeholder.svg", title: "Sea Life Ocean World" },
      { src: "/placeholder.svg", title: "Madame Tussauds Bangkok" },
      { src: "/placeholder.svg", title: "Double Attraction Pass" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Ocean tunnel" },
      { src: "/placeholder.svg", alt: "Marine life" },
      { src: "/placeholder.svg", alt: "Wax celebrities" },
      { src: "/placeholder.svg", alt: "Interactive exhibits" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default SeaLifeMadameTussauds;
