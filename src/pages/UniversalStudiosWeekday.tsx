import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck } from "lucide-react";

const rides = [
  { emoji: "🚀", name: "Battlestar Galactica: CYLON", thrill: "⭐⭐⭐⭐⭐", type: "Inverted Roller Coaster", best: "Thrill Seekers" },
  { emoji: "🚀", name: "Battlestar Galactica: HUMAN", thrill: "⭐⭐⭐⭐☆", type: "Seated Roller Coaster", best: "Teens & Adults" },
  { emoji: "🤖", name: "Transformers: The Ride 3D", thrill: "⭐⭐⭐⭐⭐", type: "3D Motion Simulator", best: "Everyone" },
  { emoji: "🏺", name: "Revenge of the Mummy", thrill: "⭐⭐⭐⭐⭐", type: "Indoor Roller Coaster", best: "Adventure Lovers" },
  { emoji: "🦖", name: "Jurassic Park Rapids Adventure", thrill: "⭐⭐⭐⭐☆", type: "Water Rapids Ride", best: "Families & Friends" },
];

const RidesAndTimings = () => (
  <div className="space-y-6 min-w-0">
    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
      <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-2 md:p-3 font-semibold">Ride</th>
            <th className="text-left p-2 md:p-3 font-semibold">Thrill</th>
            <th className="text-left p-2 md:p-3 font-semibold">Type</th>
            <th className="text-left p-2 md:p-3 font-semibold">Best For</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((r) => (
            <tr key={r.name} className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">{r.emoji} {r.name}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.thrill}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.type}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.best}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">Timings & Duration</h3>
      <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
        <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-2 md:p-3 font-semibold">Transfers</th>
              <th className="text-left p-2 md:p-3 font-semibold">Timings</th>
              <th className="text-left p-2 md:p-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">Sharing Transfers</td>
              <td className="p-2 md:p-3 whitespace-normal">Pickup 08:30 am · Drop 7:00 pm</td>
              <td className="p-2 md:p-3 whitespace-normal">11 hrs</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">Without Transfers</td>
              <td className="p-2 md:p-3 whitespace-normal">10:00 am – 8:00 pm</td>
              <td className="p-2 md:p-3 whitespace-normal">04 hrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const IndianTravelerCompanion = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl md:text-2xl">Indian Traveler Companion</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-sm p-4 md:p-6">
      <p className="text-muted-foreground">
        A quick handbook for Indian families visiting Universal Studios Singapore — from vegetarian
        food inside the park to currency, connectivity and prayer facilities on Sentosa.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex gap-3">
          <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Indian & vegetarian food</p>
            <p className="text-muted-foreground">Jain, Hindu and pure-veg options available at Malaysian Food Street, KT's Grill and Loui's NY Pizza Parlor. Halal-certified outlets are clearly marked.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Currency & payments</p>
            <p className="text-muted-foreground">Park uses SGD. Indian debit/credit cards, forex cards and international UPI (via PayNow QR) work at most counters. Carry small SGD notes for lockers.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plug className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Plug & power</p>
            <p className="text-muted-foreground">Singapore uses Type G (3-pin UK style) sockets, 230V. Carry a universal adapter — Indian Type D plugs will not fit.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Languages className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Language</p>
            <p className="text-muted-foreground">English is spoken everywhere. Most ride operators understand basic Hindi phrases. Signage is in English throughout the park.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Prayer & wudu facilities</p>
            <p className="text-muted-foreground">A prayer room is available near Sci-Fi City. Resorts World Sentosa has a larger Muslim prayer facility with wudu at Basement 1.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Best time from India</p>
            <p className="text-muted-foreground">Weekdays are less crowded and cheaper. Avoid Indian school-holiday weeks (May-June, Oct, Dec) if you want shorter queues.</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const UniversalStudiosWeekday = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["universal-studios-weekday"];

  return (
    <TourBooking
      tourData={tourData}
      heroVariant="collage"
      hidePhotoGallery
      hideItinerary
      forceBlackText
      extraDescriptionBeforeHighlights={<RidesAndTimings />}
      extraContentAfterPolicies={<IndianTravelerCompanion />}
    />
  );
};

export default UniversalStudiosWeekday;
