import { MapPin, Clock, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TourDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Tour Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About The Experience</TabsTrigger>
            <TabsTrigger value="inclusion">Inclusion</TabsTrigger>
            <TabsTrigger value="important">Important Information</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-sm text-muted-foreground">Full Day (8-9 hours)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Group Type</p>
                  <p className="text-sm text-muted-foreground">Join Transfer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Pickup</p>
                  <p className="text-sm text-muted-foreground">Hotel Pickup Included</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Rating</p>
                  <p className="text-sm text-muted-foreground">4.5/5 (1,247 reviews)</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Experience Highlights</h3>
              <ul className="space-y-2">
                <li>Explore Safari World's open zoo with over 8,000 animals from around the world</li>
                <li>Watch spectacular shows: Dolphin Show, Sea Lion Show, Orangutan Boxing, and Cowboy Stunt Show</li>
                <li>Drive through different safari zones and spot tigers, lions, zebras, and giraffes</li>
                <li>Enjoy a delicious buffet lunch with international and Thai cuisine</li>
                <li>Visit Marine Park with fascinating aquatic animal performances</li>
                <li>Photo opportunities with exotic birds and animals</li>
                <li>Air-conditioned coach transfers from your Bangkok hotel</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Itinerary</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">08:00 AM</span>
                  <p>Hotel pickup from central Bangkok</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">09:00 AM</span>
                  <p>Arrive at Safari World and begin Safari Park tour</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">11:00 AM</span>
                  <p>Marine Park shows and attractions</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">12:30 PM</span>
                  <p>Buffet lunch at the park</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">02:00 PM</span>
                  <p>Continue exploring and watch remaining shows</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">04:30 PM</span>
                  <p>Depart Safari World</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-primary min-w-[80px]">05:30 PM</span>
                  <p>Drop-off at your hotel</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inclusion" className="space-y-4 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">✓ Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Round-trip hotel transfers in air-conditioned coach</li>
                <li>• Safari World entrance ticket</li>
                <li>• Marine Park entrance ticket</li>
                <li>• International buffet lunch</li>
                <li>• English-speaking guide</li>
                <li>• All shows and attractions admission</li>
                <li>• Insurance during the tour</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-600">✗ Not Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Personal expenses</li>
                <li>• Food and drinks (except buffet lunch)</li>
                <li>• Tips and gratuities</li>
                <li>• Optional activities (animal feeding, photos with animals)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="important" className="space-y-4 mt-6">
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Important Notes</h3>
              <ul className="space-y-2 text-sm">
                <li>• Please wear comfortable walking shoes and light clothing</li>
                <li>• Bring sunscreen, hat, and sunglasses</li>
                <li>• Show schedules may change without notice</li>
                <li>• Pickup time may vary depending on your hotel location</li>
                <li>• Children under 3 years old are free but without lunch</li>
                <li>• Not recommended for pregnant women or people with mobility issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">What to Bring</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Comfortable clothing and walking shoes</li>
                <li>• Sun protection (hat, sunglasses, sunscreen)</li>
                <li>• Camera for photos</li>
                <li>• Cash for optional purchases</li>
                <li>• Voucher (mobile or printed)</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TourDetails;
