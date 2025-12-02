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

const blogArticles = [
  {
    id: 1,
    title: "Amsterdam Canal Cruise: The Complete Guide",
    description: "Experience the magic of Amsterdam from its iconic waterways with our comprehensive canal cruise guide.",
    category: "Waterways",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    author: "Canal Expert",
    date: "Nov 25, 2024",
    readTime: "9 min read",
    slug: "/netherlands"
  },
  {
    id: 2,
    title: "Van Gogh Museum: Everything You Need to Know",
    description: "Plan your perfect visit to the world's largest collection of Van Gogh's masterpieces.",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    author: "Art Historian",
    date: "Nov 22, 2024",
    readTime: "10 min read",
    slug: "/netherlands"
  },
  {
    id: 3,
    title: "Keukenhof Gardens: Tulip Season Guide",
    description: "When to visit, what to see, and how to make the most of the world's largest flower garden.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1588005480655-f60cca5c3db6?w=800",
    author: "Garden Expert",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    slug: "/netherlands"
  },
  {
    id: 4,
    title: "Anne Frank House: A Moving Experience",
    description: "Everything you need to know about visiting this powerful historic site and museum.",
    category: "History",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    author: "History Guide",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    slug: "/netherlands"
  },
  {
    id: 5,
    title: "Dutch Cheese Markets: A Foodie's Dream",
    description: "Visit traditional cheese markets in Alkmaar, Gouda, and Edam for authentic Dutch experiences.",
    category: "Food Tours",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800",
    author: "Food Blogger",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    slug: "/netherlands"
  },
  {
    id: 6,
    title: "Cycling Through the Netherlands",
    description: "Tips for exploring the country by bike, from Amsterdam to the countryside.",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1558618047-f4b511ee370c?w=800",
    author: "Cycling Guide",
    date: "Nov 12, 2024",
    readTime: "11 min read",
    slug: "/netherlands"
  },
  {
    id: 7,
    title: "Windmills of Kinderdijk: UNESCO Wonder",
    description: "Discover the iconic windmills and learn about Dutch water management history.",
    category: "Landmarks",
    image: "https://images.unsplash.com/photo-1512470876579-de59a8a15e77?w=800",
    author: "Heritage Expert",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    slug: "/netherlands"
  },
  {
    id: 8,
    title: "Rotterdam: Architecture & Modern Art",
    description: "Explore Europe's most innovative skyline and vibrant contemporary art scene.",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1512470876579-de59a8a15e77?w=800",
    author: "Architecture Buff",
    date: "Nov 8, 2024",
    readTime: "9 min read",
    slug: "/netherlands"
  },
  {
    id: 9,
    title: "The Hague: Royal City Day Trip",
    description: "Visit the Dutch seat of government, international courts, and stunning beaches.",
    category: "Day Trips",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    author: "Day Tripper",
    date: "Nov 5, 2024",
    readTime: "7 min read",
    slug: "/netherlands"
  },
  {
    id: 10,
    title: "Dutch Stroopwafels & Street Food",
    description: "The ultimate guide to authentic Dutch snacks and where to find them.",
    category: "Food Tours",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800",
    author: "Street Food Fan",
    date: "Nov 2, 2024",
    readTime: "5 min read",
    slug: "/netherlands"
  },
  {
    id: 11,
    title: "Rijksmuseum: Masterpiece Guide",
    description: "Navigate the Dutch national museum and its world-famous art collection.",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    author: "Museum Guide",
    date: "Oct 30, 2024",
    readTime: "10 min read",
    slug: "/netherlands"
  },
  {
    id: 12,
    title: "Amsterdam Nightlife: Beyond the Basics",
    description: "Discover hidden bars, jazz clubs, and the best spots for an authentic Dutch night out.",
    category: "Nightlife",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    author: "Night Owl",
    date: "Oct 28, 2024",
    readTime: "8 min read",
    slug: "/netherlands"
  }
];

const NetherlandsSmartGuides = () => {
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
                  <Link to="/netherlands">Netherlands</Link>
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
              Netherlands Smart Guides
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert travel guides, insider tips, and curated experiences to help you explore the Netherlands like a local
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
            <Button variant="outline">Museums</Button>
            <Button variant="outline">Food Tours</Button>
            <Button variant="outline">Nature</Button>
            <Button variant="outline">History</Button>
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Get More Netherlands Tips</h2>
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

export default NetherlandsSmartGuides;