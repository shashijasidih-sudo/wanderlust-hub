import { Link } from "react-router-dom";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import kohsamuiImg from "@/assets/city-kohsamui.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";

const cities = [
  { name: "Bangkok", image: bangkokImg, link: "/bangkok" },
  { name: "Phuket", image: phuketImg, link: "/phuket" },
  { name: "Krabi", image: krabiImg, link: "/krabi" },
  { name: "Pattaya", image: pattayaImg, link: "/pattaya" },
  { name: "Koh Samui", image: kohsamuiImg, link: "/thailand" },
];

interface CityNavigationProps {
  currentCity?: string;
}

const CityNavigation = ({ currentCity }: CityNavigationProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">Explore Thailand Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cities.map((city) => (
          <Link
            key={city.name}
            to={city.link}
            className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all ${
              currentCity === city.name ? "ring-2 ring-primary" : ""
            }`}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-bold text-xl">{city.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CityNavigation;
