import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DestinationCardProps {
  image: string;
  name: string;
  duration: string;
  price: number;
  link?: string;
}

const DestinationCard = ({ image, name, duration, price, link }: DestinationCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link && link.startsWith('/')) {
      navigate(link);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer" onClick={handleClick}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <p className="text-lg font-semibold text-white mb-3">INR {price.toLocaleString('en-IN')}/- per person</p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
