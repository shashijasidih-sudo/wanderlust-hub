import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck } from "lucide-react";

const IndianTravelerCompanion = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl">Indian Traveler Companion</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-sm">
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
      extraContentAfterPolicies={<IndianTravelerCompanion />}
    />
  );
};

export default UniversalStudiosWeekday;
