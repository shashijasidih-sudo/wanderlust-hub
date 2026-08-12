import SafeImage from "@/components/SafeImage";
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
import { getBlogLinkImage } from "@/lib/blogLinkImages";
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
  type: "paragraph" | "heading" | "subheading" | "list" | "image" | "cta" | "cta-prominent" | "tip-box" | "mid-activities" | "table";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  link?: string;
  linkText?: string;
  subheading?: string;
  destination?: MidDestination;
  heading?: string;
  tableHeaders?: string[];
  tableRows?: string[][];
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
  /** Images cycled into the article after every two paragraphs. */
  inlineImages?: { src: string; alt: string }[];

  relatedLinks?: { title: string; link: string; image?: string }[];
  relatedActivities?: RelatedActivity[];
  cityHub?: CityHub;
  guidesLink?: string;
  guidesLabel?: string;
  subCategory?: SubCategory;
  comparisonItems?: ComparisonItem[];
  internalLinks?: InternalLinks;
  bodyClassName?: string;
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
  readTime, category, keywords, sections, inlineImages, relatedLinks,
  relatedActivities: relatedActivitiesProp, cityHub,
  guidesLink = "/thailand/destination-guides", guidesLabel = "Thailand Guides",
  subCategory, comparisonItems, internalLinks: internalLinksProp,
  bodyClassName,
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

  // Fallback so every city guide shows the same section set as the Phuket template
  const relatedActivities = (relatedActivitiesProp && relatedActivitiesProp.length > 0)
    ? relatedActivitiesProp
    : (internalLinks?.activities ?? []).slice(0, 4).map((l) => ({ title: l.title, link: l.link }));

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

  // Inject a supporting image after every two paragraphs (cycles the pool).
  const inlineImagePlan = new Map<number, { src: string; alt: string }>();
  if (inlineImages && inlineImages.length > 0) {
    let paragraphCount = 0;
    let imgIndex = 0;
    sections.forEach((s, i) => {
      if (s.type !== "paragraph") return;
      paragraphCount += 1;
      if (paragraphCount % 2 === 0) {
        inlineImagePlan.set(i, inlineImages[imgIndex % inlineImages.length]);
        imgIndex += 1;
      }
    });
  }

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
          <SafeImage src={heroImage} alt={heroAlt} width={1600} height={900} priority decoding="async" className="w-full h-full object-cover" />
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
          <Breadcrumb className="mb-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <BreadcrumbList className="flex-nowrap whitespace-nowrap gap-1.5 sm:gap-2.5">
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
              <BreadcrumbItem className="min-w-0"><BreadcrumbPage className="block max-w-[40vw] sm:max-w-none truncate">{title}</BreadcrumbPage></BreadcrumbItem>
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
            <article className={`prose prose-lg max-w-none ${bodyClassName || ""}`}>
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
                        <SafeImage src={section.src} alt={section.alt || ""} className="w-full h-auto object-cover" loading="lazy" />
                        {section.caption && <figcaption className="text-sm text-muted-foreground text-center py-3 bg-secondary/30">{section.caption}</figcaption>}
                      </figure>
                    );
                    break;
                  case "cta":
                    rendered = (
                      <div className="my-10 p-5 md:p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center overflow-hidden">
                        <p className="text-base md:text-lg font-semibold text-foreground mb-4 break-words">{section.content}</p>
                        <Button
                          asChild
                          size="lg"
                          className="w-full sm:w-auto max-w-full h-auto min-h-11 py-3 whitespace-normal break-words"
                        >
                          <Link to={section.link || "/thailand"} className="flex items-center justify-center gap-3 text-center">
                            {section.src && (
                              <SafeImage
                                src={section.src}
                                alt=""
                                loading="lazy"
                                className="h-9 w-9 rounded-md object-cover flex-shrink-0"
                              />
                            )}
                            <span className="min-w-0">{section.linkText || "Book Now"}</span>
                          </Link>
                        </Button>
                      </div>
                    );
                    break;

                  case "cta-prominent":
                    rendered = (
                      <div className="my-10 p-5 md:p-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 shadow-lg overflow-hidden">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-5 md:gap-6">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 break-words">{section.content}</h3>
                            {section.subheading && (
                              <p className="text-black/80 mb-4 leading-relaxed">{section.subheading}</p>
                            )}
                            {section.items && section.items.length > 0 && (
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {section.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-black">
                                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <Button
                            asChild
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 w-full lg:w-auto max-w-full h-auto min-h-11 py-3 whitespace-normal break-words shadow-md hover:shadow-lg transition-all"
                          >
                            <Link to={section.link || "/singapore/singapore-airport-pickup/"} className="flex items-center justify-center gap-3 text-center">
                              {section.src && (
                                <SafeImage
                                  src={section.src}
                                  alt=""
                                  loading="lazy"
                                  className="h-9 w-9 rounded-md object-cover flex-shrink-0"
                                />
                              )}
                              <span className="min-w-0">{section.linkText || "Book Airport Transfer"}</span>
                            </Link>
                          </Button>
                        </div>
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
                  case "table":
                    rendered = (
                      <div className="my-6 overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-sm">
                          {section.tableHeaders && (
                            <thead className="bg-secondary/60">
                              <tr>
                                {section.tableHeaders.map((h, hi) => (
                                  <th key={hi} className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">{h}</th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          <tbody>
                            {section.tableRows?.map((row, ri) => (
                              <tr key={ri} className={ri % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-4 py-3 border-b border-border align-top">
                                    {renderInline(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                    break;
                  default:
                    rendered = null;
                }
                const inlineImg = inlineImagePlan.get(i);
                return (
                  <div key={i}>
                    {ytEmbed}
                    {rendered}
                    {inlineImg && (
                      <figure className="my-6 md:my-8 rounded-xl overflow-hidden shadow-md">
                        <SafeImage
                          src={inlineImg.src}
                          alt={inlineImg.alt}
                          loading="lazy"
                          className="w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                      </figure>
                    )}
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




            {/* Related Topics — full-bleed 4-column image cards */}
            <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <div className="container mx-auto px-4 md:px-6">
                <RelatedArticles city={cityHub?.city} count={4} title="Related Topics" />
              </div>
            </div>

            {/* Recommended Activities (keyword-rich internal links) — full-bleed */}
            {relatedActivities && relatedActivities.length > 0 && (
              <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                <div className="container mx-auto px-4 md:px-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Recommended Activities {cityHub ? `in ${cityHub.city}` : ""}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {relatedActivities.map((a) => {
                      const img = a.image || getBlogLinkImage(a.link);
                      return (
                        <Link
                          key={a.link}
                          to={a.link}
                          className="group rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all bg-card"
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <SafeImage
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
              </div>
            )}

            {/* Internal Links — mandatory linking block */}
            {internalLinks && (() => {
              const renderSection = (heading: string, items: InternalLinkItem[]) => (
                <section>
                  <h3 className="text-base font-semibold text-foreground mb-3">{heading}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                    {items.map((l) => (
                      <li key={l.link}>
                        <Link
                          to={l.link}
                          className="flex items-center gap-3 group rounded-lg hover:bg-muted/40 p-1.5 -m-1.5 transition-colors"
                        >
                          {l.image && (
                            <SafeImage
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
                <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-b from-secondary/30 to-background py-10">
                  <div className="container mx-auto px-4 md:px-6 space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Continue Exploring</h2>
                    {internalLinks.activities.length > 0 && renderSection("Top Activity Guides", internalLinks.activities)}
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
                </div>
              );
            })()}

            {/* Travel Essentials — full-bleed curated packing & gear guides (4 cards) */}
            <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <div className="container px-4 md:px-6">
                <TravelEssentials compact />
              </div>
            </div>

            {/* Real Traveler Experiences — full-bleed beyond the max-w-3xl article column */}
            <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <TravelerExperiences />
            </div>


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
