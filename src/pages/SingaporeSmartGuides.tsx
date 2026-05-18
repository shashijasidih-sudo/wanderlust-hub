import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import CityExploreLinks from "@/components/CityExploreLinks";
import {
  SINGAPORE_CATEGORIES,
  SingaporeBlogCategory,
  singaporeBlogs,
  getSingaporeBlogsByCategory,
} from "@/data/singaporeDestinationGuides";
import marinaBayImg from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import universalImg from "@/assets/singapore-universal-studios.jpg";
import gardensBayNightImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import merlionImg from "@/assets/singapore-merlion-night-1.jpg";

const SEO_TITLE = "Singapore Smart Guides — Itineraries, Activities & Indian Traveler Tips";
const SEO_DESC =
  "Singapore travel blogs across 4 categories — itineraries, activities, comparisons and Indian-traveler tips. Plan your 2026 Singapore trip with INR pricing.";

const heroSlides = [
  { image: marinaBayImg, title: "Explore Singapore", subtitle: "A dazzling city-state where tradition meets innovation" },
  { image: gardensBayNightImg, title: "Gardens by the Bay", subtitle: "Supertrees, Cloud Forest & Flower Dome" },
  { image: merlionImg, title: "Iconic Landmarks", subtitle: "Merlion, Marina Bay Sands & Singapore Flyer" },
  { image: universalImg, title: "Theme Park Fun", subtitle: "Universal Studios, Sentosa & Adventure Cove" },
];

const SingaporeSmartGuides = () => {
  const [active, setActive] = useState<SingaporeBlogCategory | "all">("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${SEO_TITLE} | Yellodae`;
    const upsertMeta = (sel: string, attr: string, val: string, content: string) => {
      let m = document.querySelector<HTMLMetaElement>(sel);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute(attr, val);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    upsertMeta('meta[name="description"]', "name", "description", SEO_DESC);
    upsertMeta('meta[property="og:title"]', "property", "og:title", SEO_TITLE);
    upsertMeta('meta[property="og:description"]', "property", "og:description", SEO_DESC);
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const grouped = useMemo(
    () =>
      SINGAPORE_CATEGORIES.map((c) => ({
        ...c,
        blogs: getSingaporeBlogsByCategory(c.key),
      })),
    [],
  );

  const visible = active === "all" ? grouped : grouped.filter((g) => g.key === active);

  return (
    <div className="min-h-screen flex flex-col">
      <CanonicalUrl path="/singapore-smart-guides" />
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
          <button onClick={() => setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full" aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setCurrentSlide((s) => (s + 1) % heroSlides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full" aria-label="Next slide">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-white w-6" : "bg-white/50"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>

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

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Singapore Smart Guides
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Itineraries, Sentosa & Universal Studios deep-dives, Indian-traveler tips and
              honest comparisons — everything you need before booking your Singapore trip.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 justify-center">
            <Button
              variant={active === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActive("all")}
            >
              All ({singaporeBlogs.length})
            </Button>
            {SINGAPORE_CATEGORIES.map((c) => {
              const count = getSingaporeBlogsByCategory(c.key).length;
              return (
                <Button
                  key={c.key}
                  variant={active === c.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActive(c.key)}
                >
                  {c.short}
                  <span className="ml-1.5 text-xs opacity-70">({count})</span>
                </Button>
              );
            })}
          </div>

          {visible.map((group) => (
            <section key={group.key} id={group.key} className="mb-14 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-5 border-b border-border pb-3 gap-1">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {group.label}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {group.blogs.length} {group.blogs.length === 1 ? "guide" : "guides"}
                </span>
              </div>

              {group.blogs.length === 0 ? (
                <div className="bg-card border border-dashed border-border rounded-xl p-8 text-center">
                  <p className="text-muted-foreground text-sm">
                    Coming soon — more {group.label.toLowerCase()} dropping shortly.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.blogs.map((blog) => (
                    <Card
                      key={blog.link + blog.title}
                      className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden"
                    >
                      <Link to={blog.link}>
                        <div className="aspect-[16/10] overflow-hidden relative">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-5">
                          <span className="text-primary font-semibold text-xs uppercase tracking-wide">
                            {group.short}
                          </span>
                          <h3 className="font-bold text-base md:text-lg mt-2 mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {blog.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {blog.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {blog.readTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-3 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                            Read More <ArrowRight className="h-4 w-4" />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>

      <CityExploreLinks city="singapore" />
      <Footer />
    </div>
  );
};

export default SingaporeSmartGuides;
