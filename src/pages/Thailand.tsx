import { useState, useEffect } from "react";
import { Search, Grid3x3, List, Star, MapPin, Clock, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import kohsamuiImg from "@/assets/city-kohsamui.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";
import bangkokSkywalkImg from "@/assets/bangkok-skywalk-1.jpg";
import phiPhiImg from "@/assets/phi-phi-1.jpg";
import jamesBondImg from "@/assets/james-bond-1.jpg";
import elephantImg from "@/assets/elephant-1.jpg";
import massageImg from "@/assets/massage-1.jpg";
import tigerImg from "@/assets/tiger-1.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import thailandNewsletterImg from "@/assets/thailand-newsletter.jpg";
import { useCurrency } from "@/contexts/CurrencyContext";

const activities = [
  // Bangkok Activities
  {
    id: 1,
    title: "Bangkok Skywalk Observation Deck",
    image: bangkokImg,
    rating: 4.8,
    reviews: 234,
    price: 880,
    duration: "Half Day",
    category: "Sightseeing",
    description: "Experience breathtaking 360° views of Bangkok from the iconic King Power MahaNakhon Skywalk.",
    availability: "Available",
    city: "Bangkok",
    slug: "/thailand/bangkok/mahanakhon-skywalk-tickets"
  },
  {
    id: 2,
    title: "Bangkok Three Temples Tour",
    image: bangkokImg,
    rating: 4.9,
    reviews: 567,
    price: 1200,
    duration: "Half Day",
    category: "Sightseeing",
    description: "Visit Bangkok's most iconic temples including Wat Pho, Wat Arun, and Wat Traimit.",
    availability: "Available",
    city: "Bangkok",
    slug: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer"
  },
  // Phuket Activities
  {
    id: 3,
    title: "Phi Phi Island Day Tour",
    image: phuketImg,
    rating: 4.7,
    reviews: 456,
    price: 1500,
    duration: "Full Day",
    category: "Adventure",
    description: "Explore the stunning Phi Phi Islands with snorkeling, swimming, and beach activities.",
    availability: "Available",
    city: "Phuket",
    slug: "/thailand/phuket/phi-phi-island-tour"
  },
  {
    id: 4,
    title: "Phuket Simon Cabaret Show",
    image: phuketImg,
    rating: 4.6,
    reviews: 342,
    price: 900,
    duration: "Half Day",
    category: "Entertainment",
    description: "Enjoy Thailand's most famous cabaret show with spectacular costumes and performances.",
    availability: "Available",
    city: "Phuket",
    slug: "/thailand/phuket/simon-cabaret"
  },
  // Krabi Activities
  {
    id: 5,
    title: "James Bond Island Tour",
    image: krabiImg,
    rating: 4.8,
    reviews: 289,
    price: 1800,
    duration: "Full Day",
    category: "Adventure",
    description: "Visit the famous James Bond Island and explore Phang Nga Bay's stunning limestone karsts.",
    availability: "Available",
    city: "Krabi",
    slug: "/thailand/phuket/james-bond-island-tour"
  },
  {
    id: 6,
    title: "Four Islands Speedboat Tour",
    image: krabiImg,
    rating: 4.9,
    reviews: 198,
    price: 1400,
    duration: "Full Day",
    category: "Adventure",
    description: "Discover Krabi's four islands including Phra Nang Beach and Tup Island by speedboat.",
    availability: "Available",
    city: "Krabi",
    slug: "/thailand/krabi/four-islands-speedboat"
  },
  {
    id: 7,
    title: "5G eSIM Thailand | AIS",
    image: bangkokImg,
    rating: 4.8,
    reviews: 3245,
    price: 60,
    duration: "1-30 Days",
    category: "Essentials",
    description: "Stay connected across Thailand with a 5G/4G eSIM from AIS. Instant digital activation, no physical SIM needed.",
    availability: "Available",
    city: "Thailand",
    slug: "/thailand/esim-ais"
  },
];

const cities = [
  { name: "Bangkok", image: bangkokImg, link: "/thailand/bangkok" },
  { name: "Phuket", image: phuketImg, link: "/thailand/phuket" },
  { name: "Krabi", image: krabiImg, link: "/thailand/krabi" },
  { name: "Koh Samui", image: kohsamuiImg, link: "/thailand" },
  { name: "Pattaya", image: pattayaImg, link: "/thailand/pattaya" },
];

const placeholderCities = ["Phuket", "Krabi", "Chiang Mai", "Pattaya", "Bangkok"];

const Thailand = () => {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderCities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = activity.price >= priceRange[0] && activity.price <= priceRange[1];
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory;
    const matchesDuration = selectedDuration === "all" || activity.duration === selectedDuration;
    
    return matchesSearch && matchesPrice && matchesCategory && matchesDuration;
  });

  const sortedActivities = [...filteredActivities].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "latest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const displayedActivities = sortedActivities.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/30">
        <div className="container px-4 py-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Thailand Activities</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Discover Thailand
            </h1>
            <p className="text-muted-foreground text-lg">
              Find and book amazing activities across Thailand
            </p>
          </div>

          <Card className="mb-6 shadow-card">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={`Find Activities in ${placeholderCities[currentPlaceholderIndex]}`}
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {cities.map((city) => (
              <Card 
                key={city.name} 
                className="group cursor-pointer overflow-hidden hover:shadow-card-hover transition-all"
                onClick={() => navigate(city.link)}
              >
                <div className="relative aspect-video">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-semibold text-sm p-2">{city.name}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-64 flex-shrink-0">
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Filters</h3>
                  
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">
                      Price Range
                    </label>
                    <p className="text-xs text-muted-foreground mb-3">
                      ₹{priceRange[0]} - ₹{priceRange[1]}
                    </p>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000}
                      step={100}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Activity Type</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Sightseeing">Sightseeing</SelectItem>
                        <SelectItem value="Airport Transfers">Airport Transfers</SelectItem>
                        <SelectItem value="Adventure">Adventure</SelectItem>
                        <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                        <SelectItem value="Cruises">Cruises</SelectItem>
                        <SelectItem value="Wildlife">Wildlife</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Duration</label>
                    <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Duration</SelectItem>
                        <SelectItem value="Half Day">Half Day</SelectItem>
                        <SelectItem value="Full Day">Full Day</SelectItem>
                        <SelectItem value="Multi-Day">Multi-Day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <p className="text-muted-foreground">
                  Showing {displayedActivities.length} of {filteredActivities.length} activities
                </p>
                
                <div className="flex gap-2 items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="min-w-[180px] justify-between">
                        Sort: {sortBy === "latest" ? "Latest" : sortBy === "price-asc" ? "Price: Low to High" : sortBy === "price-desc" ? "Price: High to Low" : sortBy === "rating" ? "Highest Rated" : "Most Relevant"}
                        <ChevronDown className="h-4 w-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSortBy("latest")}>
                        Latest
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("relevant")}>
                        Most Relevant
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                        Price: Low to High
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                        Price: High to Low
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("rating")}>
                        Highest Rated
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" 
                : "flex flex-col gap-4 mb-8"
              }>
                {displayedActivities.map((activity) => (
                  <Link key={activity.id} to={activity.slug}>
                  <Card 
                    className={`group cursor-pointer hover:shadow-card-hover transition-all duration-300 h-full ${
                      viewMode === "list" ? "flex flex-row" : ""
                    }`}
                  >
                    <div className={viewMode === "list" ? "w-72 flex-shrink-0" : "aspect-[4/3] overflow-hidden"}>
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardContent className={`${viewMode === "list" ? "flex-1" : ""} p-4`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {activity.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                          <span className="font-medium">{activity.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({activity.reviews} reviews)
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {activity.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {activity.category}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div>
                          <p className="text-xs text-muted-foreground">From</p>
                          <p className="text-xl font-bold text-foreground">
                            {formatPrice(activity.price)}
                          </p>
                          <p className="text-xs text-muted-foreground">per person</p>
                        </div>
                        <Button>Book Now</Button>
                      </div>
                      
                      {activity.availability !== "Available" && (
                        <p className="text-xs text-accent mt-2">
                          {activity.availability}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                  </Link>
                ))}
              </div>

              {visibleCount < filteredActivities.length && (
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredActivities.length))}
                  >
                    Show More Activities
                  </Button>
                </div>
              )}

              {filteredActivities.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No activities found matching your filters.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedDuration("all");
                      setPriceRange([0, 5000]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              <section className="mt-12 pt-12 border-t">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Top Picks in Thailand
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">🏖️ Beach Adventures</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Explore pristine beaches and islands
                      </p>
                      <Link to="/thailand/destination-guides">
                        <Button variant="outline" size="sm">View All</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">🍜 Food Tours</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Taste authentic Thai cuisine
                      </p>
                      <Link to="/thailand/destination-guides">
                        <Button variant="outline" size="sm">View All</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-secondary to-secondary/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">🏛️ Cultural Sites</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Discover ancient temples and history
                      </p>
                      <Link to="/thailand/destination-guides">
                        <Button variant="outline" size="sm">View All</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <Card className="overflow-hidden mb-12">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <img
                          src={thailandNewsletterImg}
                          alt="Thailand Experience"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          Get Your Perfect Thailand Package
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          Receive a curated 48-hour itinerary featuring the most iconic experiences in Bangkok, straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1"
                          />
                          <Button>Signup</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Things You Should Not Miss in Thailand
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bangkok - Skywalk */}
                  <Link to="/thailand/bangkok/mahanakhon-skywalk-tickets">
                    <Card className="group cursor-pointer hover:shadow-card-hover transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={bangkokSkywalkImg}
                          alt="Bangkok Skywalk"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs text-primary font-semibold">Bangkok</span>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          Bangkok Skywalk Observation Deck
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Experience breathtaking 360° views of Bangkok from the iconic King Power MahaNakhon Skywalk.
                        </p>
                        <Button variant="link" className="p-0">Book Now →</Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Phuket - Phi Phi Island */}
                  <Link to="/thailand/phuket/phi-phi-island-tour">
                    <Card className="group cursor-pointer hover:shadow-card-hover transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={phiPhiImg}
                          alt="Phi Phi Island"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs text-primary font-semibold">Phuket</span>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          Phi Phi Island Day Tour
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Explore the stunning Phi Phi Islands with snorkeling, swimming, and beach activities.
                        </p>
                        <Button variant="link" className="p-0">Book Now →</Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Krabi - James Bond Island */}
                  <Link to="/thailand/phuket/james-bond-island-tour">
                    <Card className="group cursor-pointer hover:shadow-card-hover transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={jamesBondImg}
                          alt="James Bond Island"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs text-primary font-semibold">Krabi</span>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          James Bond Island Tour
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Visit the famous James Bond Island and explore Phang Nga Bay's stunning limestone karsts.
                        </p>
                        <Button variant="link" className="p-0">Book Now →</Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Pattaya - Elephant Safari */}
                  <Link to="/thailand/phuket/elephant-safari">
                    <Card className="group cursor-pointer hover:shadow-card-hover transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={elephantImg}
                          alt="Elephant Safari"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs text-primary font-semibold">Pattaya</span>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          Elephant Jungle Sanctuary
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Connect with rescued elephants in their natural habitat while feeding and bathing these gentle giants.
                        </p>
                        <Button variant="link" className="p-0">Book Now →</Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Bangkok - Thai Massage */}
                  <Link to="/thailand/bangkok/thai-massage-spa-deals-bangkok">
                    <Card className="group cursor-pointer hover:shadow-card-hover transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={massageImg}
                          alt="Thai Massage"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs text-primary font-semibold">Bangkok</span>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          Traditional Thai Massage
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Experience the ancient healing art of Thai massage combining acupressure and meditation.
                        </p>
                        <Button variant="link" className="p-0">Book Now →</Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Phuket - Tiger Kingdom */}
                  <Link to="/thailand/phuket/selfie-with-tigers">
                    <Card className="group cursor-pointer hover:shadow-card-hover transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={tigerImg}
                          alt="Tiger Kingdom"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs text-primary font-semibold">Phuket</span>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          Selfie with Tigers
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Get up close with majestic tigers and capture unforgettable photos at Tiger Kingdom.
                        </p>
                        <Button variant="link" className="p-0">Book Now →</Button>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Thailand;
