import { Button } from "@/components/ui/button";
import { Compass, Mountain, Waves, Users, Camera, Utensils } from "lucide-react";

const categories = [
  {
    icon: Mountain,
    name: "Adventure Tours",
    description: "Thrilling experiences",
    count: 150,
  },
  {
    icon: Waves,
    name: "Water Activities",
    description: "Beach & ocean fun",
    count: 120,
  },
  {
    icon: Users,
    name: "Family Activities",
    description: "Fun for all ages",
    count: 200,
  },
  {
    icon: Camera,
    name: "Cultural Experiences",
    description: "Local traditions",
    count: 180,
  },
  {
    icon: Utensils,
    name: "Food Tours",
    description: "Culinary adventures",
    count: 95,
  },
  {
    icon: Compass,
    name: "City Tours",
    description: "Urban exploration",
    count: 220,
  },
];

const ActivityCategories = () => {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore by Activity Type
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect experience for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-border hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {category.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {category.count}+ activities
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivityCategories;
