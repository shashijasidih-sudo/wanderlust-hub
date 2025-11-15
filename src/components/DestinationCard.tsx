import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  image: string;
  name: string;
  country: string;
  activities: number;
}

const DestinationCard = ({ image, name, country, activities }: DestinationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
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
          <div className="flex items-center gap-2 text-white/80 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{country}</span>
          </div>
          <p className="text-sm text-white/70 mb-3">{activities}+ Activities</p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
