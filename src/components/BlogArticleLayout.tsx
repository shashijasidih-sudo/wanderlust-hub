import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MidArticleActivities from "@/components/MidArticleActivities";
import { getBlogLinkImage, getCityImage } from "@/lib/blogLinkImages";
import { getBangkokInternalLinks } from "@/data/blogInternalLinks";

type MidDestination = "thailand" | "singapore" | "bangkok" | "pattaya" | "phuket" | "krabi";

interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "image" | "cta" | "tip-box" | "mid-activities";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  link?: string;
  linkText?: string;
  destination?: MidDestination;
  heading?: string;
}

interface RelatedActivity {
  title: string;
  link: string;
  image?: string;
  price?: number;
}

interface CityHub {
  city: string;
  thingsToDoLink: string;
  transfersLink?: string;
}

interface SubCategory {
  label: string;
  link: string;
}

interface ComparisonItem {
  name: string;
  link?: string;
}

interface InternalLinkItem { title: string; link: string; image?: string }
interface InternalLinks {
  activities: InternalLinkItem[];
  itineraries: InternalLinkItem[];
  transfers: InternalLinkItem[];
  more: InternalLinkItem[];
  pillar: { title: string; link: string };
  priceCost?: InternalLinkItem[];
  comparisons?: InternalLinkItem[];
  indianAudience?: InternalLinkItem[];
  micro?: InternalLinkItem[];
}

interface BlogArticleProps {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  sections: BlogSection[];
  relatedLinks?: { title: string; link: string; image?: string }[];
  relatedActivities?: RelatedActivity[];
  cityHub?: CityHub;
  guidesLink?: string;
  guidesLabel?: string;
  subCategory?: SubCategory;
  comparisonItems?: ComparisonItem[];
  internalLinks?: InternalLinks;
  children?: React.ReactNode;
}

const BlogArticleLayout = ({
  title, description, heroImage, heroAlt, author, date,
  readTime, category, keywords, sections, relatedLinks,
  relatedActivities, cityHub,
  guidesLink = "/thailand/destination-guides", guidesLabel = "Thailand Guides",
  subCategory, comparisonItems, internalLinks: internalLinksProp,
  children,
}: BlogArticleProps) => {
  // Auto-derive internal links for Bangkok hub pages when not explicitly passed
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  const internalLinks =
    internalLinksProp ??
    (currentPath.startsWith("/thailand/bangkok/destination-guides/")
      ? getBangkokInternalLinks(currentPath)
      : undefined);
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, text: description, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // SEO: title, meta description, canonical, Open Graph, Twitter
  useEffect(() => {
    const prevTitle = document.title;
    const seoTitle = title.length > 60 ? `${title.slice(0, 57)}...` : title;
    document.title = `${seoTitle} | Yellodae`;

    const upsertMeta = (selector: string, attr: string, attrValue: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const trimmedDesc = description.length > 158 ? `${description.slice(0, 155)}...` : description;
    upsertMeta('meta[name="description"]', "name", "description", trimmedDesc);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", trimmedDesc);
    upsertMeta('meta[property="og:image"]', "property", "og:image", heroImage);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "article");
    upsertMeta('meta[property="og:url"]', "property", "og:url", window.location.href);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", trimmedDesc);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", heroImage);
    upsertMeta('meta[name="keywords"]', "name", "keywords", keywords.join(", "));

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href.split("?")[0].split("#")[0]);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, heroImage, keywords]);

  // JSON-LD: BlogPosting + BreadcrumbList + ItemList of recommended activities + Place (city hub)
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const abs = (href: string) =>
    href.startsWith("http") ? href : `${origin}${href.startsWith("/") ? "" : "/"}${href}`;

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      image: heroImage,
      datePublished: date,
      author: { "@type": "Organization", name: author },
      publisher: {
        "@type": "Organization",
        name: "Yellodae",
        logo: { "@type": "ImageObject", url: `${origin}/favicon.ico` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      keywords: keywords.join(", "),
      articleSection: category,
    },
    (() => {
      const crumbs: { name: string; url: string }[] = [
        { name: "Home", url: origin || "/" },
        { name: guidesLabel, url: abs(guidesLink) },
      ];
      if (subCategory) crumbs.push({ name: subCategory.label, url: abs(subCategory.link) });
      crumbs.push({ name: title, url: pageUrl });
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem", position: i + 1, name: c.name, item: c.url,
        })),
      };
    })(),
  ];

  if (comparisonItems && comparisonItems.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Compared in: ${title}`,
      itemListElement: comparisonItems.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        ...(c.link ? { url: abs(c.link) } : {}),
      })),
    });
  }

  if (relatedActivities && relatedActivities.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Recommended Activities${cityHub ? ` in ${cityHub.city}` : ""}`,
      itemListElement: relatedActivities.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: abs(a.link),
        name: a.title,
        ...(a.image ? { image: a.image } : {}),
      })),
    });
  }

  if (cityHub) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Place",
      name: cityHub.city,
      url: abs(cityHub.thingsToDoLink),
      ...(cityHub.transfersLink
        ? {
            subjectOf: {
              "@type": "WebPage",
              name: `${cityHub.city} Airport Transfers`,
              url: abs(cityHub.transfersLink),
            },
          }
        : {}),
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 container">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1"><User className="h-4 w-4" />{author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{readTime}</span>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to={guidesLink}>{guidesLabel}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              {subCategory && (
                <>
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to={subCategory.link}>{subCategory.label}</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
              <BreadcrumbItem><BreadcrumbPage className="line-clamp-1">{title}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto">
            {/* Share */}
            <div className="flex justify-between items-center mb-8">
              <Link to={guidesLink} className="flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                <ArrowLeft className="h-4 w-4" /> Back to Guides
              </Link>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-1" /> Share
              </Button>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {sections.map((section, i) => {
                switch (section.type) {
                  case "heading":
                    return <h2 key={i} className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">{section.content}</h2>;
                  case "subheading":
                    return <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">{section.content}</h3>;
                  case "paragraph":
                    return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>;
                  case "list":
                    return (
                      <ul key={i} className="space-y-2 mb-6 ml-1">
                        {section.items?.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  case "image":
                    return (
                      <figure key={i} className="my-8 rounded-xl overflow-hidden shadow-lg">
                        <img src={section.src} alt={section.alt || ""} className="w-full h-auto object-cover" loading="lazy" />
                        {section.caption && <figcaption className="text-sm text-muted-foreground text-center py-3 bg-secondary/30">{section.caption}</figcaption>}
                      </figure>
                    );
                  case "cta":
                    return (
                      <div key={i} className="my-10 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
                        <p className="text-lg font-semibold text-foreground mb-4">{section.content}</p>
                        <Button asChild size="lg">
                          <Link to={section.link || "/thailand"}>{section.linkText || "Book Now"}</Link>
                        </Button>
                      </div>
                    );
                  case "tip-box":
                    return (
                      <div key={i} className="my-6 p-6 bg-secondary/50 border-l-4 border-primary rounded-r-xl">
                        <p className="text-foreground font-medium">{section.content}</p>
                      </div>
                    );
                  case "mid-activities":
                    return (
                      <MidArticleActivities
                        key={i}
                        destination={section.destination || "thailand"}
                        heading={section.heading}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </article>

            {/* Keywords */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Related Topics</h4>
              <div className="flex flex-wrap gap-2">
                {keywords.map((kw) => (
                  <span key={kw} className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full">{kw}</span>
                ))}
              </div>
            </div>

            {/* Related */}
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-lg font-bold text-foreground mb-4">Related Guides</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedLinks.map((rl) => {
                    const img = rl.image || getBlogLinkImage(rl.link);
                    return (
                      <Link
                        key={rl.link}
                        to={rl.link}
                        className="group flex items-center gap-3 rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
                      >
                        <div className="w-24 h-20 flex-shrink-0 overflow-hidden bg-muted">
                          <img
                            src={img}
                            alt={rl.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition group-hover:scale-105"
                          />
                        </div>
                        <span className="flex-1 pr-3 text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2 text-sm">
                          {rl.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Recommended Activities (keyword-rich internal links) */}
            {relatedActivities && relatedActivities.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Recommended Activities {cityHub ? `in ${cityHub.city}` : ""}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedActivities.map((a) => {
                    const img = a.image || getBlogLinkImage(a.link);
                    return (
                      <Link
                        key={a.link}
                        to={a.link}
                        className="group rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-muted">
                          <img
                            src={img}
                            alt={a.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-foreground font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {a.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* City Hub callout */}
            {cityHub && (() => {
              const cityImgs = getCityImage(cityHub.city);
              return (
                <div className="mt-10 pt-8 border-t border-border">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Explore {cityHub.city}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                      to={cityHub.thingsToDoLink}
                      className="group rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={cityImgs.thingsToDo}
                          alt={`Top things to do in ${cityHub.city}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 bg-secondary/30">
                        <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                          Top Things to Do in {cityHub.city} →
                        </span>
                      </div>
                    </Link>
                    {cityHub.transfersLink && (
                      <Link
                        to={cityHub.transfersLink}
                        className="group rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
                      >
                        <div className="aspect-[16/9] overflow-hidden bg-muted">
                          <img
                            src={cityImgs.transfers}
                            alt={`${cityHub.city} airport transfers`}
                            loading="lazy"
                            className="w-full h-full object-cover transition group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 bg-secondary/30">
                          <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                            {cityHub.city} Airport Transfers →
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* Internal Links — mandatory linking block */}
            {internalLinks && (() => {
              const renderSection = (heading: string, items: InternalLinkItem[]) => (
                <section>
                  <h5 className="text-base font-semibold text-foreground mb-3">{heading}</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {items.map((l) => (
                      <li key={l.link}>
                        <Link
                          to={l.link}
                          className="flex items-center gap-3 group rounded-lg hover:bg-muted/40 p-1.5 -m-1.5 transition-colors"
                        >
                          {l.image && (
                            <img
                              src={l.image}
                              alt=""
                              loading="lazy"
                              className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                            />
                          )}
                          <span className="text-primary group-hover:underline line-clamp-2">
                            {l.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );

              return (
                <div className="mt-10 pt-8 border-t border-border space-y-8">
                  <h4 className="text-lg font-bold text-foreground">Continue Exploring</h4>
                  {internalLinks.activities.length > 0 && renderSection("Top Activity Guides", internalLinks.activities)}
                  {internalLinks.itineraries.length > 0 && renderSection("Plan Your Itinerary", internalLinks.itineraries)}
                  {internalLinks.transfers.length > 0 && renderSection("Airport & City Transfers", internalLinks.transfers)}
                  {internalLinks.priceCost && internalLinks.priceCost.length > 0 && renderSection("Price & Cost Guides", internalLinks.priceCost)}
                  {internalLinks.comparisons && internalLinks.comparisons.length > 0 && renderSection("Comparisons", internalLinks.comparisons)}
                  {internalLinks.indianAudience && internalLinks.indianAudience.length > 0 && renderSection("For Indian Travelers", internalLinks.indianAudience)}
                  {internalLinks.micro && internalLinks.micro.length > 0 && renderSection("Micro Guides & Quick Tips", internalLinks.micro)}
                  {internalLinks.more.length > 0 && renderSection("More Reads", internalLinks.more)}

                  <div className="pt-2">
                    <Link
                      to={internalLinks.pillar.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      Visit the {internalLinks.pillar.title} →
                    </Link>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticleLayout;
