import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "image" | "cta" | "tip-box";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  link?: string;
  linkText?: string;
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
  relatedLinks?: { title: string; link: string }[];
  relatedActivities?: RelatedActivity[];
  cityHub?: CityHub;
  guidesLink?: string;
  guidesLabel?: string;
  children?: React.ReactNode;
}

const BlogArticleLayout = ({
  title, description, heroImage, heroAlt, author, date,
  readTime, category, keywords, sections, relatedLinks,
  relatedActivities, cityHub,
  guidesLink = "/thailand/destination-guides", guidesLabel = "Thailand Guides",
  children,
}: BlogArticleProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, text: description, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin || "/" },
        { "@type": "ListItem", position: 2, name: guidesLabel, item: abs(guidesLink) },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ];

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
              <BreadcrumbItem><BreadcrumbPage>{title}</BreadcrumbPage></BreadcrumbItem>
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
                  {relatedLinks.map((rl) => (
                    <Link key={rl.link} to={rl.link} className="p-4 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{rl.title}</span>
                    </Link>
                  ))}
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
                  {relatedActivities.map((a) => (
                    <Link
                      key={a.link}
                      to={a.link}
                      className="group rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
                    >
                      {a.image && (
                        <div className="aspect-[4/3] overflow-hidden bg-muted">
                          <img
                            src={a.image}
                            alt={a.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <p className="text-foreground font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {a.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* City Hub callout */}
            {cityHub && (
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Explore {cityHub.city}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to={cityHub.thingsToDoLink}
                    className="p-4 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all bg-secondary/30"
                  >
                    <span className="text-foreground font-semibold">
                      Top Things to Do in {cityHub.city} →
                    </span>
                  </Link>
                  {cityHub.transfersLink && (
                    <Link
                      to={cityHub.transfersLink}
                      className="p-4 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all bg-secondary/30"
                    >
                      <span className="text-foreground font-semibold">
                        {cityHub.city} Airport Transfers →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticleLayout;
