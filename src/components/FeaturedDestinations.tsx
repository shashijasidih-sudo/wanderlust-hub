import DestinationCard from "./DestinationCard";
import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import newyorkImage from "@/assets/destination-newyork.jpg";

const destinations = [
  {
    image: parisImage,
    name: "Paris",
    country: "France",
    activities: 250,
  },
  {
    image: tokyoImage,
    name: "Tokyo",
    country: "Japan",
    activities: 180,
  },
  {
    image: maldivesImage,
    name: "Maldives",
    country: "Maldives",
    activities: 120,
  },
  {
    image: newyorkImage,
    name: "New York",
    country: "USA",
    activities: 300,
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the world's most breathtaking locations and create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
