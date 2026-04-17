import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { thailandGuides } from "@/data/thailandGuides";

interface TravelGuidesSectionProps {
  count?: number;
  title?: string;
}

const TravelGuidesSection = ({ count = 4, title = "Travel Guides" }: TravelGuidesSectionProps) => {
  const picks = useMemo(() => {
    const shuffled = [...thailandGuides].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, [count]);

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground mt-1">
            Handpicked Thailand travel guides to plan your trip like a local
          </p>
        </div>
        <Link
          to="/thailand/destination-guides"
          className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {picks.map((guide) => (
          <Card
            key={guide.id}
            className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden"
          >
            <Link to={guide.slug}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <span className="text-primary font-semibold text-xs uppercase tracking-wide">
                  {guide.category}
                </span>
                <h3 className="font-bold text-base mt-2 mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {guide.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TravelGuidesSection;
