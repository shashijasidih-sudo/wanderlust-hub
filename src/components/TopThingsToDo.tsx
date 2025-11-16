import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const topDestinations = [
  {
    title: "Top Things to do in Singapore",
    activities: [
      "Universal Studios",
      "Garden by the Bay",
      "Night Safari and Sentosa island"
    ],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop"
  },
  {
    title: "Top Things to do in Thailand",
    activities: [
      "James Bond Island in Speedboat",
      "Blue Moon Party, Koh Samui",
      "Bangkok Safari World & Marine Park"
    ],
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop"
  },
  {
    title: "Top Things to do in Dubai",
    activities: [
      "Dubai Mall",
      "Dubai Frame",
      "Dubai Desert Safari"
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop"
  }
];

const TopThingsToDo = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Top things to do:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up">
          {topDestinations.map((destination) => (
            <Card 
              key={destination.title}
              className="group overflow-hidden hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{destination.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {destination.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopThingsToDo;
