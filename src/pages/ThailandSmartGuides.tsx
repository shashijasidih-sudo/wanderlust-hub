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
import phiPhiImg from "@/assets/phi-phi-1.jpg";
import jamesBondImg from "@/assets/james-bond-1.jpg";
import elephantImg from "@/assets/elephant-1.jpg";
import bangkokSkywalkImg from "@/assets/bangkok-skywalk-1.jpg";
import massageImg from "@/assets/massage-1.jpg";
import tigerImg from "@/assets/tiger-1.jpg";
import bangkokCityImg from "@/assets/bangkok-city-1.jpg";
import phiPhiBoatImg from "@/assets/phi-phi-boat.jpeg";

const blogArticles = [
  {
    id: -3,
    title: "Complete Guide to Thailand Island Combos",
    description: "Discover the best Thailand island combos — Phuket + Phi Phi, Krabi combos, Koh Samui packages. Plan your dream tropical escape.",
    category: "Island Adventures",
    image: phiPhiImg,
    author: "Yellodae Travel Expert",
    date: "Mar 3, 2026",
    readTime: "10 min read",
    slug: "/blog/thailand-island-combos"
  },
  {
    id: -4,
    title: "Complete Guide to Thailand Food Experiences",
    description: "Discover the best Thailand food experiences — from Bangkok street food to Phuket seafood, floating markets to rooftop dining.",
    category: "Food Tours",
    image: bangkokSkywalkImg,
    author: "Yellodae Travel Expert",
    date: "Mar 5, 2026",
    readTime: "11 min read",
    slug: "/blog/thailand-food-experiences"
  },
  {
    id: 0,
    title: "Complete Guide to Airport Transfer Booking in Thailand",
    description: "Everything about airport transfers in Thailand — routes, types, tips, and the best platform to book your Suvarnabhumi, Phuket, or Krabi transfer.",
    category: "Thailand Transfers",
    image: bangkokCityImg,
    author: "Yellodae Travel Expert",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    slug: "/blog/airport-transfer-booking-thailand"
  },
  {
    id: -1,
    title: "Complete Guide to Phi Phi Island Tours in Thailand",
    description: "Plan the perfect Phi Phi Island tour — speedboat, longtail, or luxury private tours. Maya Bay, snorkelling, and everything you need to know.",
    category: "Island Adventures",
    image: phiPhiBoatImg,
    author: "Yellodae Island Expert",
    date: "Feb 22, 2026",
    readTime: "10 min read",
    slug: "/blog/phi-phi-island-tours-thailand"
  },
  {
    id: 1,
    title: "Top 10 Beaches to Visit in Thailand",
    description: "Discover the most stunning beaches from Phuket to Krabi, featuring crystal-clear waters and pristine white sand.",
    category: "Beach Adventures",
    image: phiPhiImg,
    author: "Travel Expert",
    date: "Nov 25, 2024",
    readTime: "8 min read",
    slug: "/thailand"
  },
  {
    id: 2,
    title: "A Complete Guide to Thai Street Food",
    description: "From Pad Thai to Som Tam, explore the vibrant street food culture that makes Thailand a foodie paradise.",
    category: "Food Tours",
    image: bangkokSkywalkImg,
    author: "Food Blogger",
    date: "Nov 22, 2024",
    readTime: "10 min read",
    slug: "/thailand"
  },
  {
    id: 3,
    title: "Ancient Temples of Bangkok: A Spiritual Journey",
    description: "Explore the magnificent temples of Bangkok including Wat Phra Kaew, Wat Arun, and Wat Pho.",
    category: "Cultural Sites",
    image: jamesBondImg,
    author: "Culture Guide",
    date: "Nov 20, 2024",
    readTime: "12 min read",
    slug: "/thailand"
  },
  {
    id: 4,
    title: "Island Hopping Guide: Phi Phi & Beyond",
    description: "Plan the perfect island-hopping adventure through Thailand's most beautiful archipelagos.",
    category: "Beach Adventures",
    image: phiPhiImg,
    author: "Island Explorer",
    date: "Nov 18, 2024",
    readTime: "9 min read",
    slug: "/thailand/phuket/phi-phi-island-tour"
  },
  {
    id: 5,
    title: "Best Night Markets in Thailand",
    description: "Navigate the buzzing night markets of Bangkok, Chiang Mai, and Phuket for authentic local experiences.",
    category: "Food Tours",
    image: massageImg,
    author: "Night Owl",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    slug: "/thailand"
  },
  {
    id: 6,
    title: "Ethical Elephant Sanctuaries in Thailand",
    description: "A guide to responsible elephant tourism and the best sanctuaries to visit in Thailand.",
    category: "Wildlife",
    image: elephantImg,
    author: "Wildlife Expert",
    date: "Nov 12, 2024",
    readTime: "11 min read",
    slug: "/thailand/phuket/elephant-safari"
  },
  {
    id: 7,
    title: "Krabi Rock Climbing: A Beginner's Guide",
    description: "Everything you need to know about rock climbing at Railay Beach and Ton Sai in Krabi.",
    category: "Beach Adventures",
    image: jamesBondImg,
    author: "Adventure Guide",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    slug: "/thailand/phuket/james-bond-island-tour"
  },
  {
    id: 8,
    title: "Thai Cooking Classes: Learn From the Masters",
    description: "Discover the best cooking classes in Thailand to master authentic Thai cuisine.",
    category: "Food Tours",
    image: bangkokSkywalkImg,
    author: "Chef Marco",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    slug: "/thailand"
  },
  {
    id: 9,
    title: "Ayutthaya Day Trip: UNESCO Heritage Sites",
    description: "Plan your perfect day trip to the ancient capital of Ayutthaya from Bangkok.",
    category: "Cultural Sites",
    image: tigerImg,
    author: "History Buff",
    date: "Nov 5, 2024",
    readTime: "10 min read",
    slug: "/thailand/bangkok/ayutthaya-day-tour-from-bangkok"
  },
  {
    id: 10,
    title: "Phuket's Hidden Gems: Secret Beaches",
    description: "Escape the crowds and discover Phuket's lesser-known beaches and hidden coves.",
    category: "Beach Adventures",
    image: phiPhiImg,
    author: "Local Guide",
    date: "Nov 2, 2024",
    readTime: "7 min read",
    slug: "/thailand/phuket"
  },
  {
    id: 11,
    title: "Traditional Thai Massage: Complete Guide",
    description: "Everything you need to know about experiencing authentic Thai massage therapy.",
    category: "Cultural Sites",
    image: massageImg,
    author: "Wellness Expert",
    date: "Oct 30, 2024",
    readTime: "9 min read",
    slug: "/thailand/bangkok/thai-massage-spa-deals-bangkok"
  },
  {
    id: 12,
    title: "Bangkok to Chiang Mai: The Ultimate Road Trip",
    description: "Plan an epic road trip through Thailand's heartland with stops at hidden temples and local markets.",
    category: "Cultural Sites",
    image: elephantImg,
    author: "Road Tripper",
    date: "Oct 28, 2024",
    readTime: "14 min read",
    slug: "/thailand"
  }
];

const ThailandSmartGuides = () => {
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
                  <Link to="/thailand">Thailand</Link>
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
              Thailand Smart Guides
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert travel guides, insider tips, and curated experiences to help you explore Thailand like a local
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
            <Button variant="outline">Beach Adventures</Button>
            <Button variant="outline">Food Tours</Button>
            <Button variant="outline">Cultural Sites</Button>
            <Button variant="outline">Wildlife</Button>
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Get More Thailand Tips</h2>
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

export default ThailandSmartGuides;
