import DestinationCard from "./DestinationCard";
import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import newyorkImage from "@/assets/destination-newyork.jpg";

const destinations = [
  {
    image: tokyoImage,
    name: "Thailand",
    duration: "6 Nights 7 Days",
    price: 22000,
  },
  {
    image: newyorkImage,
    name: "Dubai",
    duration: "4 Nights 5 Days",
    price: 25000,
  },
  {
    image: maldivesImage,
    name: "Singapore",
    duration: "4 Nights 5 Days",
    price: 23000,
  },
  {
    image: tokyoImage,
    name: "Thailand",
    duration: "4 Nights 5 Days",
    price: 15000,
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Destinations Packages in Your Budget</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore amazing destinations with affordable packages tailored to your budget
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
