import RelatedArticles from "@/components/RelatedArticles";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react";
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
import {
  BANGKOK_CATEGORIES,
  BangkokBlogCategory,
  bangkokBlogs,
  getBangkokBlogsByCategory,
} from "@/data/bangkokDestinationGuides";

const SEO_TITLE = "Bangkok Destination Guides — Activities, Cost & Itineraries";
const SEO_DESC =
  "Bangkok travel blogs across 7 categories — activities, cost, comparisons, itineraries, Indian tips, micro guides and transfers.";

const BangkokDestinationGuides = () => {
  const [active, setActive] = useState<BangkokBlogCategory | "all">("all");

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
      BANGKOK_CATEGORIES.map((c) => ({
        ...c,
        blogs: getBangkokBlogsByCategory(c.key),
      })),
    [],
  );

  const visible = active === "all" ? grouped : grouped.filter((g) => g.key === active);

  return (
    <div className="min-h-screen flex flex-col">
      <CanonicalUrl path="/thailand/bangkok/destination-guides" />
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
                <BreadcrumbLink asChild>
                  <Link to="/thailand/bangkok">Bangkok</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Destination Guides</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Bangkok Destination Guides
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Activity reviews, prices, itineraries, comparisons and transfer tips —
              everything you need before booking your Bangkok trip.
            </p>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 justify-center">
            <Button
              variant={active === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActive("all")}
            >
              All ({bangkokBlogs.length})
            </Button>
            {BANGKOK_CATEGORIES.map((c) => {
              const count = getBangkokBlogsByCategory(c.key).length;
              return (
                <Button
                  key={c.key}
                  variant={active === c.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActive(c.key)}
                  disabled={count === 0}
                >
                  {c.short}
                </Button>
              );
            })}
          </div>

          {/* Grouped sections */}
          {visible.map((group) => (
            <section key={group.key} className="mb-14">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-5 border-b border-border pb-3 gap-1">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {group.label}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {group.description}
                  </p>
                </div>
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
                          {blog.external && (
                            <span className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-1.5">
                              <ExternalLink className="h-3.5 w-3.5 text-primary" />
                            </span>
                          )}
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

      
      <section className="container mx-auto px-4">
        <RelatedArticles city="bangkok" />
      </section>
      <Footer />
    </div>
  );
};

export default BangkokDestinationGuides;
