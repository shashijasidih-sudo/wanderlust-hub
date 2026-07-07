import React, { useEffect } from "react";
import Seo from "@/components/seo/Seo";

import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TravelerExperiences from "@/components/TravelerExperiences";
import TravelEssentials from "@/components/TravelEssentials";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MidArticleActivities from "@/components/MidArticleActivities";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import { getBlogLinkImage, getCityImage } from "@/lib/blogLinkImages";
import {
  getBangkokInternalLinks,
  getKrabiFullInternalLinks,
  getPattayaFullInternalLinks,
  getPhuketFullInternalLinks,
  getChiangMaiFullInternalLinks,
  getKohSamuiFullInternalLinks,
} from "@/data/blogInternalLinks";

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

import { findAutoLink } from "@/data/tourLinkMap";

// Parse [text](url) markdown-style links and auto-link known tour/activity
// phrases from TOUR_LINK_MAP. Explicit markdown links always win; auto-links
// fire at most once per phrase per text block to keep prose readable.
const renderInline = (text: string): React.ReactNode => {
  if (!text) return text;
  const linkClass = "text-primary font-semibold underline underline-offset-2 hover:text-primary/80";
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  const usedPaths = new Set<string>();
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const pushPlain = (segment: string) => {
    // Recursively scan plain-text segments for auto-link phrases.
    let remaining = segment;
    while (remaining) {
      const hit = findAutoLink(remaining);
      if (!hit || usedPaths.has(hit.path)) {
        parts.push(remaining);
        return;
      }
      if (hit.index > 0) parts.push(remaining.slice(0, hit.index));
      usedPaths.add(hit.path);
      parts.push(
        <Link key={key++} to={hit.path} className={linkClass}>{hit.label}</Link>
      );
      remaining = remaining.slice(hit.index + hit.length);
    }
  };

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) pushPlain(text.slice(lastIndex, match.index));
    const [, label, href] = match;
    const isInternal = href.startsWith("/");
    usedPaths.add(href);
    if (isInternal) {
      parts.push(
        <Link key={key++} to={href} className={linkClass}>{label}</Link>
      );
    } else {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{label}</a>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) pushPlain(text.slice(lastIndex));
  return parts.length ? parts : text;
};



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
  const deriveHubLinks = (path: string) => {
    if (path.startsWith("/thailand/bangkok/destination-guides/")) return getBangkokInternalLinks(path);
    if (path.startsWith("/thailand/krabi/destination-guides/")) return getKrabiFullInternalLinks(path);
    if (path.startsWith("/thailand/pattaya/destination-guides/")) return getPattayaFullInternalLinks(path);
    if (path.startsWith("/thailand/phuket/destination-guides/")) return getPhuketFullInternalLinks(path);
    if (path.startsWith("/thailand/chiang-mai/destination-guides/")) return getChiangMaiFullInternalLinks(path);
    if (path.startsWith("/thailand/koh-samui/destination-guides/")) return getKohSamuiFullInternalLinks(path);
    return undefined;
  };
  const internalLinks = internalLinksProp ?? deriveHubLinks(currentPath);

  // Destination -> YouTube Short mapping (auto-embedded mid-article)
  const getYouTubeShort = (path: string, ttl: string): { id: string; name: string } | null => {
    const p = (path + " " + ttl).toLowerCase();
    if (p.includes("phi-phi") || p.includes("phi phi")) return { id: "OLgqSUAOYzA", name: "Phi Phi" };
    if (p.includes("koh-samui") || p.includes("koh samui") || p.includes("full-moon") || p.includes("full moon")) return { id: "8LJJjoR5YFc", name: "Koh Samui" };
    if (p.includes("krabi") && p.includes("pattaya")) return { id: "rzvQjJRYfrs", name: "Krabi & Pattaya" };
    if (p.includes("phuket") && p.includes("pattaya")) return { id: "4IKk9s0MuIE", name: "Phuket & Pattaya" };
    if (p.includes("chiang-mai") || p.includes("chiang mai") || p.includes("chiangmai")) return { id: "ydHy61knOgg", name: "Bangkok & Chiang Mai" };
    if (p.includes("dubai")) return { id: "aKvD1PzYUac", name: "Dubai" };
    if (p.includes("phuket")) return { id: "bJ3lN2sMl8o", name: "Phuket" };
    if (p.includes("krabi")) return { id: "rzvQjJRYfrs", name: "Krabi" };
    if (p.includes("pattaya")) return { id: "4IKk9s0MuIE", name: "Pattaya" };
    if (p.includes("bangkok")) return { id: "0rh5V-q9eHQ", name: "Bangkok" };
    return null;
  };
  const ytShort = getYouTubeShort(currentPath, title);
  const ytInjectIndex = ytShort ? Math.floor(sections.length / 2) : -1;
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, text: description, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // JSON-LD + per-route SEO via <Seo /> (Helmet-based, no document.head mutation in useEffect)
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const origin = typeof window !== "undefined" ? window.location.origin : "https://yellodae.com";
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const abs = (href: string) =>
    href.startsWith("http") ? href : `${origin}${href.startsWith("/") ? "" : "/"}${href}`;
  const seoTitle = title.length > 60 ? `${title.slice(0, 57)}...` : title;
  const trimmedDesc = description.length > 158 ? `${description.slice(0, 155)}...` : description;

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      image: heroImage,
      datePublished: date,
      author: {
        "@type": "Organization",
        name: "Yellodae Trails Editorial Team",
        description: "Yellodae Trails Editorial Team researches and curates travel guides, itineraries and destination tips for Indian travelers visiting Thailand, Singapore, Dubai and Japan.",
        url: "https://yellodae.com",
        logo: { "@type": "ImageObject", url: `${origin}/yellodae-logo.png` },
      },
      publisher: {
        "@type": "Organization",
        name: "Yellodae",
        logo: { "@type": "ImageObject", url: `${origin}/favicon.ico` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl || `${origin}${pathname}` },
      keywords: keywords.join(", "),
      articleSection: category,
    },
    (() => {
      const crumbs: { name: string; url: string }[] = [
        { name: "Home", url: origin || "/" },
        { name: guidesLabel, url: abs(guidesLink) },
      ];
      if (subCategory) crumbs.push({ name: subCategory.label, url: abs(subCategory.link) });
      crumbs.push({ name: title, url: pageUrl || `${origin}${pathname}` });
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
      <Seo
        title={`${seoTitle} | Yellodae`}
        description={trimmedDesc}
        path={pathname}
        type="article"
        image={heroImage}
        jsonLd={jsonLd}
      />

      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img src={heroImage} alt={heroAlt} width={1600} height={900} fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 container">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1"><User className="h-4 w-4" />Monika Barnwal</span>
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
                const ytEmbed = i === ytInjectIndex && ytShort ? (
                  <div key={`yt-${i}`} className="my-10 flex justify-center">
                    <div className="w-full max-w-[360px]">
                      <LiteYouTubeEmbed
                        id={ytShort.id}
                        title={`${ytShort.name} — Watch on YouTube`}
                        aspect={177.78}
                      />
                      <p className="text-center text-sm text-muted-foreground mt-3">
                        Watch{" "}
                        <a
                          href={`https://youtube.com/shorts/${ytShort.id}?feature=share`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-semibold"
                        >
                          {ytShort.name}
                        </a>{" "}
                        on YouTube
                      </p>
                    </div>
                  </div>
                ) : null;


                let rendered: JSX.Element | null = null;
                switch (section.type) {
                  case "heading":
                    rendered = <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">{section.content}</h2>;
                    break;
                  case "subheading":
                    rendered = <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{section.content}</h3>;
                    break;
                  case "paragraph":
                    rendered = <p className="text-muted-foreground leading-relaxed mb-4">{renderInline(section.content || "")}</p>;
                    break;
                  case "list":
                    rendered = (
                      <ul className="space-y-2 mb-6 ml-1">
                        {section.items?.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary font-bold mt-0.5">✓</span>
                            <span>{renderInline(item)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                    break;
                  case "image":
                    rendered = (
                      <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
                        <img src={section.src} alt={section.alt || ""} className="w-full h-auto object-cover" loading="lazy" />
                        {section.caption && <figcaption className="text-sm text-muted-foreground text-center py-3 bg-secondary/30">{section.caption}</figcaption>}
                      </figure>
                    );
                    break;
                  case "cta":
                    rendered = (
                      <div className="my-10 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
                        <p className="text-lg font-semibold text-foreground mb-4">{section.content}</p>
                        <Button asChild size="lg">
                          <Link to={section.link || "/thailand"}>{section.linkText || "Book Now"}</Link>
                        </Button>
                      </div>
                    );
                    break;
                  case "tip-box":
                    rendered = (
                      <div className="my-6 p-6 bg-secondary/50 border-l-4 border-primary rounded-r-xl">
                        <p className="text-foreground font-medium">{section.content}</p>
                      </div>
                    );
                    break;
                  case "mid-activities":
                    rendered = (
                      <MidArticleActivities
                        destination={section.destination || "thailand"}
                        heading={section.heading}
                      />
                    );
                    break;
                  default:
                    rendered = null;
                }
                return (
                  <div key={i}>
                    {ytEmbed}
                    {rendered}
                  </div>
                );
              })}
            </article>

            {/* Author Box */}
            <div className="mt-10 p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-br from-secondary/40 to-background shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl md:text-2xl tracking-wide">
                  MB
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Monika Barnwal</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Travel Planning
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Destination Specialist
                    </span>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Dr. Monika Barnwal is a highly accomplished academic and entrepreneur with significant expertise in Smart Tourism, Digital Marketing, and AI applications within the tourism industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Traveler Experiences — full-bleed beyond the max-w-3xl article column */}
            <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <TravelerExperiences />
            </div>

            {/* Travel Essentials — full-bleed affiliate/partner curated packing & gear guides */}
            <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <div className="container px-4 md:px-6">
                <TravelEssentials />
              </div>
            </div>

            {/* Related Topics — full-bleed 4-column image cards */}
            <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <div className="container mx-auto px-4 md:px-6">
                <RelatedArticles city={cityHub?.city} count={4} title="Related Topics" />
              </div>
            </div>

            {/* Related Guides — full-bleed */}
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-b from-secondary/30 to-background py-10">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Keep Reading</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">Related Guides</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {relatedLinks.map((rl) => {
                      const img = rl.image || getBlogLinkImage(rl.link);
                      return (
                        <Link
                          key={rl.link}
                          to={rl.link}
                          className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-card border border-border"
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <img
                              src={img}
                              alt={rl.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                            <h3 className="text-white font-semibold text-sm md:text-base leading-snug line-clamp-3 group-hover:text-primary-foreground transition-colors">
                              {rl.title}
                            </h3>
                            <span className="mt-2 inline-flex items-center gap-1 text-xs text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              Read guide →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
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
        <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="container mx-auto px-4 md:px-6">
            <RelatedArticles city={cityHub?.city} />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default BlogArticleLayout;
