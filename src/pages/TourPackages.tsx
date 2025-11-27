import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourBookingForm from "@/components/TourBookingForm";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Star, Utensils, Hotel, Plane, Ship, Tent, Building2, Fish, Camera, Droplet, Castle, TreePine, Ticket, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beach.jpg";

const TourPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<{
    title: string;
    location: string;
  } | null>(null);

  const packages = [
    {
      id: 1,
      title: "4N/5D Phuket & Krabi",
      price: 16000,
      duration: "4 Nights / 5 Days",
      location: "Phuket & Krabi, Thailand",
      rating: 4.8,
      image: "/src/assets/phi-phi-1.jpg",
      highlights: [
        "Phi Phi Island Tour",
        "James Bond Island Visit",
        "Phuket City Tour",
        "Beach Activities",
        "Hotel & Breakfast Included"
      ],
      activities: [
        { name: "Phi Phi Island by Speedboat", link: "/phi-phi-island" },
        { name: "James Bond Island Tour", link: "/james-bond-island" },
        { name: "Four Islands Tour", link: "/four-islands-speedboat" },
        { name: "Hot Spring & Emerald Pool", link: "/hot-spring" }
      ]
    },
    {
      id: 2,
      title: "4N/5D Dubai",
      price: 19000,
      duration: "4 Nights / 5 Days",
      location: "Dubai, UAE",
      rating: 4.9,
      image: "/src/assets/destination-dubai.jpg",
      highlights: [
        "Desert Safari",
        "Burj Khalifa Visit",
        "Dhow Cruise Dinner",
        "Dubai Mall Tour",
        "Hotel & Breakfast Included"
      ],
      activities: [
        { name: "Desert Safari", link: "/desert-safari" },
        { name: "Dhow Night Cruise", link: "/dhow-cruise" },
        { name: "Atlantis, The Palm", link: "/atlantis-palm" }
      ]
    },
    {
      id: 3,
      title: "5N/6D Singapore",
      price: 18000,
      duration: "5 Nights / 6 Days",
      location: "Singapore",
      rating: 4.7,
      image: "/src/assets/destination-singapore.jpg",
      highlights: [
        "Sentosa Island",
        "Universal Studios",
        "Gardens by the Bay",
        "Marina Bay Sands",
        "Hotel & Breakfast Included"
      ],
      activities: [
        { name: "Sentosa Island Tour", link: "/sentosa-island" }
      ]
    },
    {
      id: 4,
      title: "5N/6D Phuket & Bangkok",
      price: 18000,
      duration: "5 Nights / 6 Days",
      location: "Phuket & Bangkok, Thailand",
      rating: 4.8,
      image: "/src/assets/hero-beach.jpg",
      highlights: [
        "Bangkok City Tour",
        "Phi Phi Island",
        "Grand Palace Visit",
        "Phuket Beach Time",
        "Hotel & Breakfast Included"
      ],
      activities: [
        { name: "Bangkok Skywalk", link: "/bangkok-skywalk" },
        { name: "Grand Palace & Emerald Buddha", link: "/bangkok-grand-palace-emerald" },
        { name: "Phi Phi Island Tour", link: "/phi-phi-island" },
        { name: "Phuket City Night Market", link: "/phuket-city-night-market" }
      ]
    },
    {
      id: 5,
      title: "6N/7D Bali",
      price: 22000,
      duration: "6 Nights / 7 Days",
      location: "Bali, Indonesia",
      rating: 4.9,
      image: "/src/assets/destination-paris.jpg",
      highlights: [
        "Ubud Rice Terraces",
        "Tanah Lot Temple",
        "Water Sports Activities",
        "Traditional Balinese Spa",
        "Hotel & Breakfast Included"
      ],
      activities: [
        { name: "Ubud Cultural Tour", link: "#" },
        { name: "Water Sports Package", link: "#" },
        { name: "Sunset at Tanah Lot", link: "#" }
      ]
    },
    {
      id: 6,
      title: "4N/5D Maldives",
      price: 35000,
      duration: "4 Nights / 5 Days",
      location: "Maldives",
      rating: 5.0,
      image: "/src/assets/destination-maldives.jpg",
      highlights: [
        "Overwater Villa Stay",
        "Snorkeling & Diving",
        "Sunset Cruise",
        "Beach Activities",
        "All Meals Included"
      ],
      activities: [
        { name: "Scuba Diving Experience", link: "#" },
        { name: "Island Hopping Tour", link: "#" },
        { name: "Dolphin Watching", link: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Tour Packages" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          <div className="relative container px-4 md:px-6 h-full flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Tour Packages</h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                Explore our carefully curated tour packages with amazing destinations and unforgettable experiences
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Best Value Guaranteed
              </Badge>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Tour Packages</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                      <Star className="h-3 w-3 mr-1 fill-white" />
                      {pkg.rating}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{pkg.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          per person
                        </div>
                      </div>
                    </div>

                    {/* Package Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Hotel className="h-4 w-4" />
                        Package Highlights
                      </h4>
                      <ul className="space-y-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Plane className="h-4 w-4" />
                        Included Activities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.activities.map((activity, idx) => (
                          <Link key={idx} to={activity.link}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                              {activity.name}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        className="flex-1"
                        onClick={() => setSelectedPackage({
                          title: pkg.title,
                          location: pkg.location
                        })}
                      >
                        Book Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Different Tour Activities Section */}
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Different Tour Activities</h2>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Ship className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Island Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore stunning islands with guided tours
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Tent className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Desert Safari</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience thrilling desert adventures
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">City Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover iconic landmarks and culture
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Fish className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Marine Life</h3>
                  <p className="text-sm text-muted-foreground">
                    Swim with dolphins and marine animals
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Wildlife Safari</h3>
                  <p className="text-sm text-muted-foreground">
                    Get close to exotic wildlife
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Droplet className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Nature Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Hot springs, waterfalls & natural pools
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Castle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Theme Parks</h3>
                  <p className="text-sm text-muted-foreground">
                    Fun-filled attractions for all ages
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Ship className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Dinner Cruises</h3>
                  <p className="text-sm text-muted-foreground">
                    Romantic cruises with entertainment
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <TreePine className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Jungle Adventures</h3>
                  <p className="text-sm text-muted-foreground">
                    Elephant rides and jungle exploration
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Ticket className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Shows & Entertainment</h3>
                  <p className="text-sm text-muted-foreground">
                    Cultural shows and live performances
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Palmtree className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Beach Activities</h3>
                  <p className="text-sm text-muted-foreground">
                    Water sports and beach relaxation
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Utensils className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Food Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore local cuisine and markets
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <Testimonials />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Packages?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <Hotel className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Premium Hotels</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay in handpicked 3-4 star hotels with breakfast included
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Utensils className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Meals Included</h3>
                  <p className="text-sm text-muted-foreground">
                    Daily breakfast and select meals during tours
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Expert Guides</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional local guides for all activities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <TourBookingForm
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        packageTitle={selectedPackage?.title || ""}
        destination={selectedPackage?.location || ""}
      />
    </div>
  );
};

export default TourPackages;
