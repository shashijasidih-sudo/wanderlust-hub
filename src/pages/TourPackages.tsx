import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Star, Utensils, Hotel, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const TourPackages = () => {
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Tour Packages</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Explore our carefully curated tour packages with amazing destinations and unforgettable experiences
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Best Value Guaranteed
            </Badge>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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
                      <Button className="flex-1">
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
    </div>
  );
};

export default TourPackages;
