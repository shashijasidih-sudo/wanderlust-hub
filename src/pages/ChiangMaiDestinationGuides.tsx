import RelatedArticles from "@/components/RelatedArticles";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import {
  CHIANG_MAI_CATEGORIES, ChiangMaiBlogCategory, chiangMaiBlogs, getChiangMaiBlogsByCategory,
} from "@/data/chiangMaiDestinationGuides";

const SEO_TITLE = "Chiang Mai Destination Guides — Temples, Day Trips & Tour Costs";
const SEO_DESC =
  "Chiang Mai activity blogs — Doi Suthep, Chiang Rai day trips, Doi Inthanon, temple tour costs and Indian traveler tips.";

const ChiangMaiDestinationGuides = () => {
  const [active, setActive] = useState<ChiangMaiBlogCategory | "all">("all");

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
    return () => { document.title = prevTitle; };
  }, []);

  const grouped = useMemo(
    () => CHIANG_MAI_CATEGORIES.map((c) => ({ ...c, blogs: getChiangMaiBlogsByCategory(c.key) })),
    [],
  );
  const visible = active === "all" ? grouped : grouped.filter((g) => g.key === active);

  return (
    <div className="min-h-screen flex flex-col">
      <CanonicalUrl path="/thailand/chiang-mai/destination-guides" />
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container px-4 py-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand">Thailand</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/thailand/chiang-mai">Chiang Mai</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Destination Guides</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Chiang Mai Destination Guides
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Doi Suthep, Chiang Rai, Doi Inthanon, temple tour costs and insider tips
              — everything you need before booking your Chiang Mai trip.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 justify-center">
            <Button variant={active === "all" ? "default" : "outline"} size="sm" onClick={() => setActive("all")}>
              All ({chiangMaiBlogs.length})
            </Button>
            {CHIANG_MAI_CATEGORIES.map((c) => {
              const count = getChiangMaiBlogsByCategory(c.key).length;
              return (
                <Button key={c.key} variant={active === c.key ? "default" : "outline"} size="sm" onClick={() => setActive(c.key)}>
                  {c.short}
                </Button>
              );
            })}
          </div>

          {visible.map((group) => (
            <section key={group.key} id={group.key} className="mb-14 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-5 border-b border-border pb-3 gap-1">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{group.label}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.blogs.map((blog) => (
                  <Card key={blog.link} className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden">
                    <Link to={blog.link}>
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <CardContent className="p-5">
                        <span className="text-primary font-semibold text-xs uppercase tracking-wide">{group.short}</span>
                        <h3 className="font-bold text-base md:text-lg mt-2 mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{blog.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{blog.date}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{blog.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-3 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <section className="container mx-auto px-4">
        <RelatedArticles city="chiang-mai" />
      </section>
      <Footer />
    </div>
  );
};

export default ChiangMaiDestinationGuides;
