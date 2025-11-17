import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShowTimetable = () => {
  const shows = [
    { name: "Dolphin Show", time: "11:00 AM, 03:00 PM", duration: "20 mins" },
    { name: "Sea Lion Show", time: "11:30 AM, 03:30 PM", duration: "15 mins" },
    { name: "Orangutan Boxing", time: "12:00 PM, 04:00 PM", duration: "15 mins" },
    { name: "Cowboy Stunt Show", time: "01:00 PM, 04:30 PM", duration: "30 mins" },
    { name: "Bird Show", time: "10:30 AM, 02:30 PM", duration: "20 mins" },
    { name: "Elephant Show", time: "02:00 PM", duration: "25 mins" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Show Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {shows.map((show, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
            >
              <div>
                <p className="font-semibold">{show.name}</p>
                <p className="text-sm text-muted-foreground">{show.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">{show.time}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          * Show times are subject to change. Please check with staff upon arrival.
        </p>
      </CardContent>
    </Card>
  );
};

export default ShowTimetable;
