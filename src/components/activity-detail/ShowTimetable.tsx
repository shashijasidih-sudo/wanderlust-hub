import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShowTimetable = () => {
  const itinerary = [
    { time: "07:00 AM", activity: "Hotel pickup from Phuket", duration: "30 mins" },
    { time: "08:00 AM", activity: "Arrive at pier and boat departure", duration: "45 mins" },
    { time: "09:00 AM", activity: "Phi Phi Leh - Maya Bay visit", duration: "1 hour" },
    { time: "10:30 AM", activity: "Viking Cave & Loh Samah Bay", duration: "45 mins" },
    { time: "11:30 AM", activity: "Snorkeling at Phi Phi Don", duration: "1 hour" },
    { time: "12:30 PM", activity: "Thai buffet lunch", duration: "1 hour" },
    { time: "02:00 PM", activity: "Beach relaxation & swimming", duration: "1.5 hours" },
    { time: "04:00 PM", activity: "Return journey to Phuket", duration: "1 hour" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Tour Itinerary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="min-w-[100px]">
                <p className="font-semibold text-primary">{item.time}</p>
                <p className="text-xs text-muted-foreground">{item.duration}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.activity}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          * Times are approximate and may vary based on weather and sea conditions.
        </p>
      </CardContent>
    </Card>
  );
};

export default ShowTimetable;
