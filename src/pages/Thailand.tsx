import { useState, useEffect } from "react";
import { Search, Grid3x3, List, Star, MapPin, Clock, ChevronDown } from "lucide-react";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import kohsamuiImg from "@/assets/city-kohsamui.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";
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

const activities = [
  {
    id: 1,
    title: "Phi Phi Island Day Tour",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 234,
    price: 3500,
    duration: "Full Day",
    category: "Adventure",
    description: "Explore the stunning Phi Phi Islands with snorkeling, swimming, and beach activities.",
    availability: "Available",
  },
  {
    id: 2,
    title: "Bangkok Night Food Tour",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 567,
    price: 1200,
    duration: "Half Day",
    category: "Food & Dining",
    description: "Experience authentic Thai street food in Bangkok's bustling night markets.",
    availability: "Available",
  },
  {
    id: 3,
    title: "Chiang Mai Elephant Safari",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 189,
    price: 4500,
    duration: "Full Day",
    category: "Wildlife",
    description: "Ethical elephant sanctuary experience with feeding and bathing.",
    availability: "Limited Slots",
  },
  {
    id: 4,
    title: "Phuket Sunset Cruise",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 342,
    price: 2800,
    duration: "Half Day",
    category: "Cruises",
    description: "Luxury yacht cruise with dinner and stunning Andaman Sea views.",
    availability: "Available",
  },
  {
    id: 5,
    title: "Ayutthaya Historical Park Tour",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 156,
    price: 1800,
    duration: "Full Day",
    category: "Sightseeing",
    description: "Explore ancient temples and ruins of the UNESCO World Heritage site.",
    availability: "Available",
  },
  {
    id: 6,
    title: "Krabi Rock Climbing Adventure",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 98,
    price: 3200,
    duration: "Half Day",
    category: "Adventure",
    description: "Climb the famous limestone cliffs of Railay Beach with expert guides.",
    availability: "Available",
  },
];

const cities = [
  { name: "Bangkok", image: bangkokImg },
  { name: "Phuket", image: phuketImg },
  { name: "Krabi", image: krabiImg },
  { name: "Koh Samui", image: kohsamuiImg },
  { name: "Pattaya", image: pattayaImg },
];

const placeholderCities = ["Phuket", "Krabi", "Chiang Mai", "Pattaya", "Bangkok"];

const Thailand = () => {
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
              <Card key={city.name} className="group cursor-pointer overflow-hidden hover:shadow-card-hover transition-all">
                <div className="relative aspect-video">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-3">{city.name}</p>
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
                ? "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" 
                : "flex flex-col gap-4 mb-8"
              }>
                {displayedActivities.map((activity) => (
                  <Card 
                    key={activity.id} 
                    className={`group cursor-pointer hover:shadow-card-hover transition-all duration-300 ${
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
                            ₹{activity.price.toLocaleString('en-IN')}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">🏖️ Beach Adventures</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Explore pristine beaches and islands
                      </p>
                      <Button variant="outline" size="sm">View All</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">🍜 Food Tours</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Taste authentic Thai cuisine
                      </p>
                      <Button variant="outline" size="sm">View All</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-secondary to-secondary/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">🏛️ Cultural Sites</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Discover ancient temples and history
                      </p>
                      <Button variant="outline" size="sm">View All</Button>
                    </CardContent>
                  </Card>
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
