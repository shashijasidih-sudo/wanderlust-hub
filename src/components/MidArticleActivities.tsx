import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { cityActivities, type RecommendedActivity } from "@/data/cityActivitiesData";

interface MidArticleActivitiesProps {
  /** thailand pool aggregates bangkok+pattaya+phuket+krabi; or pass a single city. */
  destination: "thailand" | "singapore" | "bangkok" | "pattaya" | "phuket" | "krabi";
  heading?: string;
}

const buildPool = (destination: MidArticleActivitiesProps["destination"]): RecommendedActivity[] => {
  if (destination === "thailand") {
    return [
      ...(cityActivities.bangkok || []),
      ...(cityActivities.pattaya || []),
      ...(cityActivities.phuket || []),
      ...(cityActivities.krabi || []),
    ];
  }
  return cityActivities[destination] || [];
};

const pickRandom = <T,>(arr: T[], n: number): T[] => {
  if (arr.length <= n) return arr;
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
};

const MidArticleActivities = ({
  destination,
  heading,
}: MidArticleActivitiesProps) => {
  const navigate = useNavigate();
  const pool = useMemo(() => buildPool(destination), [destination]);
  const [picks, setPicks] = useState<RecommendedActivity[]>(() => pickRandom(pool, 4));

  // Re-randomize on mount per page view (but stable within a render cycle)
  useEffect(() => {
    setPicks(pickRandom(pool, 4));
  }, [pool]);

  if (picks.length === 0) return null;

  const niceName =
    destination === "thailand"
      ? "Thailand"
      : destination === "singapore"
      ? "Singapore"
      : destination.charAt(0).toUpperCase() + destination.slice(1);

  return (
    <aside
      className="not-prose my-10 rounded-2xl border border-border bg-secondary/30 p-5 md:p-6"
      aria-labelledby="mid-related-activities"
    >
      <h3
        id="mid-related-activities"
        className="text-xl md:text-2xl font-bold text-foreground mb-1"
      >
        {heading || `Recommended ${niceName} Activities`}
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Hand-picked, instantly bookable experiences for your {niceName} trip.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {picks.map((a) => (
          <Card
            key={a.slug}
            className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
            onClick={() => navigate(a.slug)}
          >
            <div className="relative h-36 overflow-hidden">
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-xs">
                <MapPin className="h-3 w-3" />
                {niceName}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h4>
              <Button
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(a.slug);
                }}
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </aside>
  );
};

export default MidArticleActivities;
