import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
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
import marinaBayImg from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import universalImg from "@/assets/singapore-universal-studios.jpg";
import gardensBayImg from "@/assets/singapore-gardens-bay.jpg";
import flyerImg from "@/assets/singapore-flyer.jpg";
import nightSafariImg from "@/assets/singapore-night-safari.jpg";
import cableCarImg from "@/assets/singapore-cable-car.jpg";
import zooImg from "@/assets/singapore-zoo.jpg";
import riverCruiseImg from "@/assets/singapore-river-cruise.jpg";
import skyHelixImg from "@/assets/singapore-sky-helix.jpg";
import adventureCoveImg from "@/assets/singapore-adventure-cove.jpg";
import cityTourImg from "@/assets/singapore-city-tour.jpg";
import bigBusImg from "@/assets/singapore-big-bus.jpg";

const blogArticles = [
  {
    id: 0,
    title: "Complete Guide to Airport Transfer Booking in Singapore",
    description: "Everything about Singapore Changi Airport transfers — types, popular areas, tips, and the best platform for hassle-free arrival.",
    category: "Singapore Transfers",
    image: marinaBayImg,
    author: "Yellodae Travel Expert",
    date: "Feb 18, 2026",
    readTime: "8 min read",
    slug: "/blog/airport-transfer-booking-singapore"
  },
  {
    id: -1,
    title: "Complete Guide to Sentosa Activities in Singapore",
    description: "Discover the best Sentosa Island activities — Universal Studios, SEA Aquarium, Adventure Cove, Sky Helix, and more.",
    category: "Theme Parks & Activities",
    image: universalImg,
    author: "Yellodae Island Expert",
    date: "Feb 21, 2026",
    readTime: "10 min read",
    slug: "/blog/sentosa-activities-singapore"
  },
  {
    id: 1,
    title: "Sentosa Island: The Ultimate Guide",
    description: "Everything you need to know about Singapore's premier resort island, from beaches to theme parks.",
    category: "Islands",
    image: adventureCoveImg,
    author: "Island Expert",
    date: "Nov 25, 2024",
    readTime: "10 min read",
    slug: "/sentosa-island"
  },
  {
    id: 2,
    title: "Marina Bay Sands: Complete Experience Guide",
    description: "From the infinity pool to the casino, discover everything Marina Bay Sands has to offer.",
    category: "Landmarks",
    image: flyerImg,
    author: "Luxury Travel",
    date: "Nov 22, 2024",
    readTime: "8 min read",
    slug: "/singapore"
  },
  {
    id: 3,
    title: "Hawker Centers: Singapore's Food Paradise",
    description: "Navigate the best hawker centers and discover must-try local dishes at affordable prices.",
    category: "Food Tours",
    image: cityTourImg,
    author: "Food Blogger",
    date: "Nov 20, 2024",
    readTime: "12 min read",
    slug: "/singapore"
  },
  {
    id: 4,
    title: "Gardens by the Bay: A Complete Guide",
    description: "Explore the Supertree Grove, Cloud Forest, and Flower Dome in this iconic attraction.",
    category: "Nature",
    image: gardensBayImg,
    author: "Nature Guide",
    date: "Nov 18, 2024",
    readTime: "9 min read",
    slug: "/singapore"
  },
  {
    id: 5,
    title: "Chinatown & Little India Walking Tour",
    description: "Discover Singapore's multicultural heritage through its vibrant ethnic neighborhoods.",
    category: "Cultural Sites",
    image: bigBusImg,
    author: "Culture Guide",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    slug: "/singapore"
  },
  {
    id: 6,
    title: "Singapore Zoo & Night Safari Guide",
    description: "Experience one of the world's best zoos and the famous night safari adventure.",
    category: "Wildlife",
    image: zooImg,
    author: "Wildlife Expert",
    date: "Nov 12, 2024",
    readTime: "11 min read",
    slug: "/singapore"
  },
  {
    id: 7,
    title: "Universal Studios Singapore Guide",
    description: "Tips, tricks, and must-ride attractions at Southeast Asia's only Universal Studios.",
    category: "Theme Parks",
    image: universalImg,
    author: "Theme Park Fan",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    slug: "/sentosa-island"
  },
  {
    id: 8,
    title: "Orchard Road Shopping Guide",
    description: "Navigate Singapore's famous shopping belt with tips on the best malls and deals.",
    category: "Shopping",
    image: riverCruiseImg,
    author: "Style Expert",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    slug: "/singapore"
  },
  {
    id: 9,
    title: "Singapore's Best Rooftop Bars",
    description: "Enjoy stunning skyline views with craft cocktails at these top rooftop venues.",
    category: "Nightlife",
    image: marinaBayImg,
    author: "Night Owl",
    date: "Nov 5, 2024",
    readTime: "7 min read",
    slug: "/singapore"
  },
  {
    id: 10,
    title: "Pulau Ubin: Singapore's Last Kampong",
    description: "Escape to this rustic island for cycling, nature trails, and a glimpse of old Singapore.",
    category: "Nature",
    image: cableCarImg,
    author: "Nature Lover",
    date: "Nov 2, 2024",
    readTime: "8 min read",
    slug: "/singapore"
  },
  {
    id: 11,
    title: "Singapore's Street Art Scene",
    description: "Discover hidden murals and colorful street art in neighborhoods across the city.",
    category: "Cultural Sites",
    image: nightSafariImg,
    author: "Art Explorer",
    date: "Oct 30, 2024",
    readTime: "6 min read",
    slug: "/singapore"
  },
  {
    id: 12,
    title: "Budget Singapore: Travel Without Breaking the Bank",
    description: "How to experience the best of Singapore on a budget with free attractions and cheap eats.",
    category: "Budget Travel",
    image: skyHelixImg,
    author: "Budget Traveler",
    date: "Oct 28, 2024",
    readTime: "10 min read",
    slug: "/singapore"
  }
];

const SingaporeSmartGuides = () => {
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
                <BreadcrumbLink asChild>
                  <Link to="/singapore">Singapore</Link>
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
              Singapore Smart Guides
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert travel guides, insider tips, and curated experiences to help you explore Singapore like a local
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
            <Button variant="outline">Islands</Button>
            <Button variant="outline">Food Tours</Button>
            <Button variant="outline">Cultural Sites</Button>
            <Button variant="outline">Nature</Button>
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Get More Singapore Tips</h2>
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

export default SingaporeSmartGuides;