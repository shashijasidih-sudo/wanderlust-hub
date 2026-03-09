import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import dubaiSkylineImg from "@/assets/dubai-skyline-night-1.jpg";
import desertCoupleImg from "@/assets/dubai-desert-couple-1.jpg";
import dubaiCityImg from "@/assets/dubai-city-night-1.jpg";
import fountainImg from "@/assets/dubai-fountain-show-1.jpg";
import dhowImg from "@/assets/dubai-dhow-cruise-1.jpg";
import globalVillageImg from "@/assets/dubai-global-village-1.jpg";
import aquariumImg from "@/assets/dubai-aquarium-fish-1.jpg";
import dubaiSkylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import dubaiGlobalVillage2 from "@/assets/dubai-global-village-2.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";

const heroSlides = [
  { image: dubaiSkylineImg, title: "Discover Dubai", subtitle: "From towering skyscrapers to ancient souks" },
  { image: desertCoupleImg, title: "Desert Adventures", subtitle: "Dune bashing, camel rides & starlit dinners" },
  { image: fountainImg, title: "Iconic Landmarks", subtitle: "Burj Khalifa, Dubai Fountain & Palm Jumeirah" },
  { image: dhowImg, title: "Dhow Cruise Dining", subtitle: "Savor gourmet cuisine on traditional boats" },
];

const blogArticles = [
  {
    id: -5,
    title: "Dubai Shopping Tours Experience — Complete Guide",
    description: "Complete guide to the best Dubai shopping tours — from Dubai Mall to Gold Souk, Mall of Emirates to Global Village.",
    category: "Dubai Shopping",
    image: dubaiSkylineSunset,
    author: "Yellodae Travel Expert",
    date: "Mar 4, 2026",
    readTime: "12 min read",
    slug: "/blog/dubai-shopping-tours"
  },
  {
    id: -6,
    title: "Complete Guide to Dubai Food Experiences",
    description: "Discover the best Dubai food experiences — from shawarma to luxury dining, desert BBQ to traditional Emirati cuisine.",
    category: "Food Tours",
    image: dubaiCityImg,
    author: "Yellodae Travel Expert",
    date: "Mar 7, 2026",
    readTime: "10 min read",
    slug: "/blog/dubai-food-experiences"
  },
  {
    id: 0,
    title: "Complete Guide to Airport Transfer Booking in Dubai",
    description: "Everything about Dubai airport transfers — types, popular drop locations, pricing, step-by-step booking, and tips for a smooth arrival.",
    category: "Dubai Transfers",
    image: dubaiSkylineImg,
    author: "Yellodae Travel Expert",
    date: "Feb 17, 2026",
    readTime: "9 min read",
    slug: "/blog/airport-transfer-booking-dubai"
  },
  {
    id: -1,
    title: "Complete Guide to Desert Safari Deals in Dubai",
    description: "Discover the best desert safari deals — morning, evening, overnight & VIP options. Dune bashing, camel rides, BBQ dinner, and live entertainment.",
    category: "Desert Adventures",
    image: desertCoupleImg,
    author: "Yellodae Desert Expert",
    date: "Feb 20, 2026",
    readTime: "12 min read",
    slug: "/blog/desert-safari-deals-dubai"
  },
  {
    id: -2,
    title: "Complete Guide to Dubai Marina Cruise in Dubai",
    description: "Everything about Dubai Marina cruise booking — types of cruises, what to expect onboard, best timings, and tips for the best experience.",
    category: "Dubai Cruises",
    image: dhowImg,
    author: "Yellodae Travel Expert",
    date: "Feb 26, 2026",
    readTime: "9 min read",
    slug: "/blog/dubai-marina-cruise"
  },
  {
    id: -3,
    title: "Complete Guide to Burj Khalifa Tickets in Dubai",
    description: "Ticket types, step-by-step booking guide, best viewing times, and tips for visiting the world's tallest building.",
    category: "Dubai Landmarks",
    image: fountainImg,
    author: "Yellodae Travel Expert",
    date: "Feb 27, 2026",
    readTime: "8 min read",
    slug: "/blog/burj-khalifa-tickets-dubai"
  },
  {
    id: 1,
    title: "Ultimate Guide to Dubai's Desert Safari",
    description: "Experience the thrill of dune bashing, camel rides, and traditional Bedouin camps under the stars.",
    category: "Adventure",
    image: dubaiCityImg,
    author: "Desert Expert",
    date: "Nov 25, 2024",
    readTime: "8 min read",
    slug: "/desert-safari"
  },
  {
    id: 2,
    title: "Burj Khalifa: Everything You Need to Know",
    description: "Complete guide to visiting the world's tallest building, from ticket tips to best viewing times.",
    category: "Landmarks",
    image: fountainImg,
    author: "Architecture Buff",
    date: "Nov 22, 2024",
    readTime: "10 min read",
    slug: "/dubai"
  },
  {
    id: 3,
    title: "Dubai Creek and Old Dubai Walking Tour",
    description: "Discover the historic heart of Dubai with its traditional souks, museums, and waterfront charm.",
    category: "Cultural Sites",
    image: globalVillageImg,
    author: "History Guide",
    date: "Nov 20, 2024",
    readTime: "12 min read",
    slug: "/dubai"
  },
  {
    id: 4,
    title: "Best Dhow Cruise Dinner Experiences",
    description: "Sail along Dubai Marina or Creek while enjoying a sumptuous dinner with stunning city views.",
    category: "Dining",
    image: dhowImg,
    author: "Food Critic",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    slug: "/dhow-cruise"
  },
  {
    id: 5,
    title: "Shopping Guide: From Souks to Malls",
    description: "Navigate Dubai's world-class shopping scene from traditional gold souks to mega malls.",
    category: "Shopping",
    image: aquariumImg,
    author: "Style Expert",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    slug: "/dubai"
  },
  {
    id: 6,
    title: "Dubai Theme Parks: Complete Guide",
    description: "From IMG Worlds to Dubai Parks, discover the best theme parks for family fun.",
    category: "Family Fun",
    image: desertCoupleImg,
    author: "Family Travel",
    date: "Nov 12, 2024",
    readTime: "11 min read",
    slug: "/dubai"
  },
  {
    id: 7,
    title: "Palm Jumeirah & Atlantis Experience",
    description: "Explore the iconic palm-shaped island and its world-famous resort attractions.",
    category: "Landmarks",
    image: dubaiSkylineImg,
    author: "Island Explorer",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    slug: "/atlantis-palm"
  },
  {
    id: 8,
    title: "Dubai Marina: Day & Night Guide",
    description: "The best activities, restaurants, and experiences in Dubai's stunning marina district.",
    category: "Neighborhoods",
    image: dubaiCityImg,
    author: "Local Guide",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    slug: "/dubai"
  },
  {
    id: 9,
    title: "Abu Dhabi Day Trip from Dubai",
    description: "Visit Sheikh Zayed Mosque, Louvre Abu Dhabi, and more on a perfect day trip.",
    category: "Day Trips",
    image: globalVillageImg,
    author: "Day Tripper",
    date: "Nov 5, 2024",
    readTime: "10 min read",
    slug: "/dubai"
  },
  {
    id: 10,
    title: "Best Beaches in Dubai",
    description: "From JBR to La Mer, find the perfect beach for swimming, water sports, or relaxation.",
    category: "Adventure",
    image: fountainImg,
    author: "Beach Lover",
    date: "Nov 2, 2024",
    readTime: "7 min read",
    slug: "/dubai"
  },
  {
    id: 11,
    title: "Dubai Food Scene: A Culinary Journey",
    description: "From street shawarma to Michelin-starred restaurants, explore Dubai's diverse food culture.",
    category: "Dining",
    image: dhowImg,
    author: "Food Explorer",
    date: "Oct 30, 2024",
    readTime: "9 min read",
    slug: "/dubai"
  },
  {
    id: 12,
    title: "Dubai Nightlife: Clubs & Rooftop Bars",
    description: "Experience the glamorous nightlife scene with the best clubs and rooftop venues.",
    category: "Nightlife",
    image: aquariumImg,
    author: "Night Owl",
    date: "Oct 28, 2024",
    readTime: "8 min read",
    slug: "/dubai"
  }
];

const DubaiSmartGuides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/30">
        {/* Hero Carousel */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          {heroSlides.map((slide, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          ))}
          <div className="absolute inset-0 flex items-end pb-10 px-6 md:px-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{heroSlides[currentSlide].title}</h1>
              <p className="text-white/80 text-lg">{heroSlides[currentSlide].subtitle}</p>
            </div>
          </div>
          <button onClick={() => setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setCurrentSlide((s) => (s + 1) % heroSlides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-white w-6" : "bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* SEO Summary */}
        <div className="container px-4 py-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Explore our curated collection of Dubai travel guides — from desert safari tips and Burj Khalifa visit planning to dhow cruise dining experiences, airport transfers, and hidden gems across the emirate. Whether you're a first-time visitor or returning traveler, our expert guides help you make the most of every moment in Dubai.
            </p>
          </div>

          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/dubai">Dubai</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Smart Guides</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dubai Smart Guides
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert travel guides, insider tips, and curated experiences to help you explore Dubai like a local
            </p>
          </div>

          {/* Featured Article */}
          <Card className="mb-12 overflow-hidden group cursor-pointer hover:shadow-card-hover transition-all">
            <Link to={blogArticles[0].slug}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={blogArticles[0].image}
                    alt={blogArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary font-semibold text-sm mb-2">{blogArticles[0].category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{blogArticles[0].description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogArticles[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogArticles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogArticles[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Card>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <Button variant="default">All Guides</Button>
            <Button variant="outline">Adventure</Button>
            <Button variant="outline">Landmarks</Button>
            <Button variant="outline">Dining</Button>
            <Button variant="outline">Cultural Sites</Button>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogArticles.slice(1).map((article) => (
              <Card key={article.id} className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden">
                <Link to={article.slug}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-primary font-semibold text-xs uppercase tracking-wide">{article.category}</span>
                    <h3 className="font-bold text-lg mt-2 mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary mt-4 text-sm font-medium group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">Get More Dubai Tips</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Subscribe to our newsletter for exclusive travel guides, deals, and insider tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DubaiSmartGuides;