import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TourData } from "@/data/tourData";

interface TourDescriptionProps {
  tourData: TourData;
}

const TourDescription = ({ tourData }: TourDescriptionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Tour Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overview */}
        <div>
          <h3 className="text-lg font-semibold mb-3">What to Expect</h3>
          <p className="text-muted-foreground leading-relaxed">
            {tourData.description.overview}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            {tourData.description.whatToExpect}
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Tour Highlights</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {tourData.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Itinerary */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Full Itinerary</h3>
          <div className="space-y-4">
            {tourData.itinerary.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                    {idx + 1}
                  </div>
                  {idx < tourData.itinerary.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold mb-1">{item.title} ({item.time})</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  2
                </div>
                <div className="w-0.5 h-full bg-border mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-1">Board Big Boat & Departure (8:00 AM)</h4>
                <p className="text-sm text-muted-foreground">
                  Welcome aboard! Enjoy light refreshments as we cruise through the stunning Andaman Sea 
                  towards Phi Phi Islands.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  3
                </div>
                <div className="w-0.5 h-full bg-border mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-1">Maya Bay Visit (10:00 AM)</h4>
                <p className="text-sm text-muted-foreground">
                  Explore the iconic Maya Bay, swim in turquoise waters, take photos, and soak in the 
                  breathtaking scenery of this world-famous location.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  4
                </div>
                <div className="w-0.5 h-full bg-border mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-1">Snorkeling at Phi Phi Don (11:00 AM)</h4>
                <p className="text-sm text-muted-foreground">
                  Dive into vibrant coral reefs, spot colorful tropical fish, and enjoy the underwater 
                  paradise. Equipment provided.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  5
                </div>
                <div className="w-0.5 h-full bg-border mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-1">Thai Buffet Lunch (12:30 PM)</h4>
                <p className="text-sm text-muted-foreground">
                  Savor a delicious buffet lunch featuring Thai specialties, vegetarian options, fresh 
                  fruits, and refreshing drinks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  6
                </div>
                <div className="w-0.5 h-full bg-border mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-1">Viking Cave & Loh Samah Bay (2:00 PM)</h4>
                <p className="text-sm text-muted-foreground">
                  Marvel at the towering limestone cliffs of Viking Cave and swim in the emerald waters 
                  of Loh Samah Bay.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  7
                </div>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-1">Return Journey & Hotel Drop-off (4:30 PM)</h4>
                <p className="text-sm text-muted-foreground">
                  Relax on the return cruise and arrive back at your hotel by early evening, with 
                  memories to last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourDescription;
