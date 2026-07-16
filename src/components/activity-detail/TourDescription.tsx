import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TourData } from "@/data/tourData";

interface TourDescriptionProps {
  tourData: TourData;
  extraBeforeHighlights?: React.ReactNode;
  hideItinerary?: boolean;
}

const TourDescription = ({ tourData, extraBeforeHighlights, hideItinerary }: TourDescriptionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">Tour Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-3 md:p-6">
        {/* Overview */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-2">What to Expect</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
            {tourData.description.overview}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 break-words">
            {tourData.description.whatToExpect}
          </p>
        </div>

        {extraBeforeHighlights}

        {/* Highlights */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-2">Tour Highlights</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {tourData.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Itinerary */}
        {!hideItinerary && tourData.itinerary && tourData.itinerary.length > 0 && (
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2">Full Itinerary</h3>
            <div className="space-y-3">
              {tourData.itinerary.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold flex-shrink-0">
                      {idx + 1}
                    </div>
                    {idx < tourData.itinerary.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-sm md:text-base font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TourDescription;
