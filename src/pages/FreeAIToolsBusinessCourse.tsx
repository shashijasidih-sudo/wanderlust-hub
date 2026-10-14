import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDown,
  CheckCircle2,
  Lightbulb,
  PlayCircle,
  Sparkles,
  Youtube,
} from "lucide-react";
import heroImage from "@/assets/ai-business-course-hero.jpg";

const PAGE_PATH = "/free-business-course/ai-tools-in-business-course/";
const CANONICAL = `https://yellodae.com${PAGE_PATH}`;
const PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLS72vyqIlkPM";

const lectures = [
  {
    number: 1,
    title:
      "Build a Business Website with AI: No Coding! ChatGPT, Perplexity, Lovable & Canva",
    description:
      "Explore how ChatGPT, Perplexity, Lovable and Canva can work together to help create a business website without writing code.",
    url: "https://youtu.be/bOnH3AGlTdo",
  },
  {
    number: 2,
    title: "AI Marketing: Create a Complete Campaign with AI Tools in Minutes",
    description:
      "See how AI tools can support the creation of a marketing campaign, from shaping the idea to preparing campaign materials.",
    url: "https://youtu.be/pGsV3LScG-Q",
  },
  {
    number: 3,
    title: "20 AI Tools Every Business Owner Should Know in 2026",
    description:
      "Discover practical AI tools for business, with examples of automation and prompts that can support everyday work.",
    url: "https://youtu.be/lKtGh_n1u_s",
  },
  {
    number: 4,
    title: "Lecture 4",
    description: "Coming soon.",
    url: "",
  },
];

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
  return match?.[1] ?? null;
};

const scrollToCurriculum = () => {
  document
    .getElementById("course-curriculum")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FreeAIToolsBusinessCourse = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "AI Tools in Business Course",
      description:
        "A practical video course about using AI tools for business websites, marketing campaigns and everyday workflows.",
      url: CANONICAL,
      inLanguage: "en",
      isAccessibleForFree: true,
      provider: {
        "@type": "Organization",
        name: "Yellodae Trails",
        url: "https://yellodae.com/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://yellodae.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Tools in Business Course",
          item: CANONICAL,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AI Tools in Business Course | Practical AI for Business"
        description="Learn practical ways to use AI tools in business with video lessons on building a website, creating a marketing campaign, automation and useful AI tools."
        path={PAGE_PATH}
        type="website"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/[0.12] via-background to-orange-500/[0.10]">
          <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 text-center lg:order-1 lg:text-left">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm md:text-sm">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  Yellodae presents
                </span>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary md:text-sm">
                  <Lightbulb className="h-4 w-4" /> 4 AI Business Lectures
                </span>
                <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                  AI Tools in Business Course
                </h1>
                <p className="mb-4 text-lg font-medium text-primary md:text-xl lg:text-2xl">
                  Put practical AI tools to work in your business
                </p>
                <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg lg:mx-0">
                  Learn through approachable video lessons on creating a
                  business website, building a marketing campaign and exploring
                  useful AI tools for everyday work.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button
                    size="lg"
                    className="h-12 w-full text-base font-semibold sm:w-auto"
                    onClick={scrollToCurriculum}
                  >
                    <ArrowDown className="mr-2 h-4 w-4" /> Start Learning
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 w-full text-base sm:w-auto"
                  >
                    <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4 text-red-600" />
                      Open YouTube Playlist
                    </a>
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground lg:justify-start">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    Watch at your own pace
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    New lessons added here
                  </span>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-lg border bg-card shadow-xl">
                  <img
                    src={heroImage}
                    alt="Business owner exploring digital tools at a laptop"
                    width={1280}
                    height={960}
                    fetchPriority="high"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b bg-muted/30 py-8 md:py-10">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "4", label: "Video Lectures" },
                { value: "3", label: "Available to Watch" },
                { value: "AI", label: "Business Use Cases" },
                { value: "YouTube", label: "Video Lessons" },
              ].map(({ value, label }) => (
                <Card key={label} className="border-0 bg-card/80 text-center shadow-sm">
                  <CardContent className="p-4 md:p-5">
                    <div className="mb-1 text-xl font-bold text-primary md:text-2xl">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground md:text-sm">
                      {label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-10 text-center md:mb-12">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600">
                <Lightbulb className="h-3.5 w-3.5" /> Course Overview
              </span>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                Practical AI for Everyday Business
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                Explore ways AI tools can support common business tasks, from
                setting up a website to preparing marketing materials and
                streamlining everyday work. The lessons are video-based and
                can be watched in order or revisited whenever you need them.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                "Build a business website with AI tools",
                "Create marketing campaigns with AI support",
                "Discover practical AI tools and workflows",
              ].map((topic, index) => (
                <div key={topic} className="flex items-start gap-3 border-t-2 border-primary/30 pt-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm font-medium md:text-base">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="course-curriculum"
          className="scroll-mt-20 bg-muted/40 py-12 md:py-16"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-10 text-center md:mb-12">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <PlayCircle className="h-3.5 w-3.5" /> Course Curriculum
              </span>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                AI in Business: 4 Video Lectures
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Start with the first lesson or follow the playlist on YouTube. {" "}
                <a
                  href={PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2"
                >
                  View the full AI in Business playlist
                </a>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lectures.map((lecture) => {
                const videoId = getYouTubeId(lecture.url);
                return (
                  <Card
                    key={lecture.number}
                    className="flex h-full flex-col overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {videoId ? (
                      <a
                        href={lecture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block aspect-video w-full overflow-hidden bg-muted"
                        aria-label={`Watch lecture ${lecture.number}: ${lecture.title}`}
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                          alt={`${lecture.title} — YouTube video thumbnail`}
                          loading="lazy"
                          width={480}
                          height={360}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                          <PlayCircle className="h-12 w-12 text-white drop-shadow-lg" />
                        </span>
                      </a>
                    ) : (
                      <div className="flex aspect-video w-full items-center justify-center bg-muted">
                        <PlayCircle className="h-10 w-10 text-muted-foreground/40" />
                      </div>
                    )}
                    <CardContent className="flex flex-1 flex-col p-4 md:p-5">
                      <div className="mb-2 flex items-start gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {String(lecture.number).padStart(2, "0")}
                        </span>
                        <h3 className="break-words text-sm font-semibold leading-snug md:text-base">
                          {lecture.title}
                        </h3>
                      </div>
                      <p className="mb-4 flex-1 text-xs text-muted-foreground md:text-sm">
                        {lecture.description}
                      </p>
                      {lecture.url ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full self-start sm:w-auto"
                        >
                          <a
                            href={lecture.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <PlayCircle className="mr-2 h-4 w-4" /> Watch Lecture
                          </a>
                        </Button>
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground">
                          Video coming soon
                        </span>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              3 of 4 lectures are available now. The fourth lecture will appear
              here when it is published.
            </p>
          </div>
        </section>

        <section className="border-t py-10 md:py-12">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="mb-3 text-xl font-bold md:text-2xl">
              Keep Exploring Business Courses
            </h2>
            <p className="mb-5 text-sm text-muted-foreground md:text-base">
              Continue learning with the Yellodae Digital Marketing in Business Course.
            </p>
            <Button asChild variant="outline">
              <Link to="/free-business-course/free-digital-marketing-course-for-businesses/">
                Explore Digital Marketing Course
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeAIToolsBusinessCourse;