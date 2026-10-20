import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SafeImage from "@/components/SafeImage";
import Footer from "@/components/Footer";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PlayCircle,
  GraduationCap,
  CheckCircle2,
  Clock,
  Users,
  Award,
  ExternalLink,
  Sparkles,
  BookOpen,
  Youtube,
  FileCheck,
} from "lucide-react";
import {
  COURSE_MODULES,
  ASSESSMENT_FORM_URL,
  COURSE_PLAYLIST_URL,
} from "@/data/digitalMarketingCourse";
import heroImage from "@/assets/digital-marketing-course-hero.jpg";
import playlistImage from "@/assets/dm-course-playlist.jpg";

const PAGE_PATH = "/free-digital-marketing-course-for-businesses/";
const CANONICAL = `https://yellodae.com${PAGE_PATH}`;

const faqs = [
  {
    q: "Is this Digital Marketing course free?",
    a: "Yes. Every lecture and the final assessment are completely free. There is no fee, subscription or payment of any kind.",
  },
  {
    q: "How many lectures are included?",
    a: "The course covers 28 lectures across 5 modules, from digital marketing fundamentals through to practical application.",
  },
  {
    q: "Who can take this course?",
    a: "Students, complete beginners, entrepreneurs, small business owners, marketing professionals and anyone curious about digital marketing.",
  },
  {
    q: "Do I need previous digital marketing knowledge?",
    a: "No. The course starts from the basics and explains each concept in simple language before moving to practical examples.",
  },
  {
    q: "How do I take the final assessment?",
    a: 'Watch all 28 lectures, then click any "Take Final Assessment" button on this page. It opens the 28-question assessment in a new tab.',
  },
  {
    q: "Where is the assessment hosted?",
    a: "The assessment is hosted securely through Google Forms. You enter your name and email there, answer all 28 questions and submit.",
  },
  {
    q: "Is there a certificate?",
    a: "Completing the course and the final assessment makes you eligible for the course certificate, subject to the assessment requirements. This is a course completion certificate and is not an accredited or government-recognised qualification.",
  },
  {
    q: "How can I access the course lectures?",
    a: "All lectures are published on our YouTube channel. Open the full course playlist from the Course Curriculum section and watch the videos in order, at your own pace, on any device. New lectures are added to the playlist as they are released.",
  },
];

const highlights = [
  { icon: PlayCircle, text: "28 Free Lectures" },
  { icon: Users, text: "Beginner Friendly" },
  { icon: CheckCircle2, text: "Practical Concepts" },
  { icon: Clock, text: "Learn at Your Own Pace" },
  { icon: GraduationCap, text: "Final 28-Question Assessment" },
  { icon: Award, text: "Certificate Eligibility" },
];

const audience = [
  "Students",
  "Beginners",
  "Entrepreneurs",
  "Small business owners",
  "Marketing professionals",
  "Anyone interested in learning digital marketing",
];

const stats = [
  { icon: PlayCircle, value: "28", label: "Free Video Lectures" },
  { icon: BookOpen, value: "5", label: "Core Modules" },
  { icon: FileCheck, value: "28", label: "Assessment Questions" },
  { icon: Youtube, value: "100%", label: "Free on YouTube" },
];

const getYouTubeId = (url: string): string | null => {
  const match =
    url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
    url.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  return match?.[1] ?? null;
};

const scrollToCurriculum = () => {
  document
    .getElementById("course-curriculum")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AssessmentButton = ({
  className = "",
  size = "lg",
  label = "Take Final Assessment",
}: {
  className?: string;
  size?: "default" | "lg";
  label?: string;
}) => (
  <Button
    asChild
    size={size}
    className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold ${className}`}
  >
    <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </Button>
);

const FreeDigitalMarketingCourse = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Fundamentals of Digital Marketing",
      description:
        "A completely free 28-lecture digital marketing course covering fundamentals, channels, funnels, SEO and SEM, with a final 28-question assessment.",
      url: CANONICAL,
      inLanguage: "en",
      isAccessibleForFree: true,
      provider: {
        "@type": "Organization",
        name: "Yellodae Trails",
        url: "https://yellodae.com/",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT10H",
      },
      numberOfCredits: 0,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        category: "Free",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
          name: "Free Digital Marketing Course",
          item: CANONICAL,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Free Digital Marketing Course | Fundamentals for Beginners"
        description="Learn digital marketing free with 28 beginner-friendly video lectures covering fundamentals, channels, funnels, SEO and SEM — plus a final 28-question assessment."
        path={PAGE_PATH}
        type="website"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/[0.12] via-background to-orange-500/[0.10]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6 py-12 md:py-20 lg:py-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/10 border border-primary/20 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary mb-5 shadow-sm">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  Yellodae presents
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs md:text-sm font-semibold mb-5">
                  <GraduationCap className="h-4 w-4" /> 100% Free · 28 Lectures
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  FREE Fundamentals of Digital Marketing Course
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-primary mb-4">
                  Learn Digital Marketing from Basics to Practical Application —
                  Completely Free
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  Master the fundamentals of digital marketing through 28
                  easy-to-follow video lectures designed for beginners, students,
                  entrepreneurs and business owners.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 text-base font-semibold"
                    onClick={scrollToCurriculum}
                  >
                    Start Learning
                  </Button>
                  <AssessmentButton className="w-full sm:w-auto h-12 text-base" />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    No signup required to watch
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    Learn at your own pace
                  </span>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-card">
                  <img
                    src={heroImage}
                    alt="Free digital marketing course by Yellodae — laptop, analytics charts, SEO and social media icons"
                    width={1280}
                    height={960}
                    fetchPriority="high"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-fit">
                    <div className="flex items-center gap-2 rounded-full bg-white/95 dark:bg-black/80 backdrop-blur px-4 py-2 text-xs font-semibold shadow-lg">
                      <Youtube className="h-4 w-4 text-red-600" />
                      Free on YouTube
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="py-8 md:py-10 border-b bg-muted/30">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <Card key={label} className="text-center border-0 shadow-sm bg-card/80">
                  <CardContent className="p-4 md:p-5">
                    <Icon className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE OVERVIEW */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 text-orange-600 px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" />
                Course Overview
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Learn Digital Marketing — From Fundamentals to Practice
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                This is a completely free 28-lecture digital marketing course that
                walks you through the essential concepts of digital marketing and
                shows how they are applied in practice — search engines, social
                platforms, content, funnels and campaign thinking. Watch the
                lectures in order or jump to the topic you need. There are no
                deadlines and no fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md bg-gradient-to-br from-primary/[0.06] to-transparent">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Who this course is for
                  </h3>
                  <ul className="space-y-3">
                    {audience.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm md:text-base">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-orange-500/[0.06] to-transparent">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-orange-500" />
                    What you get
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights.map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="flex items-center gap-2 rounded-lg border bg-card p-3 text-sm"
                      >
                        <Icon className="h-5 w-5 text-orange-500 shrink-0" />
                        <span className="font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CURRICULUM — MODULES ONLY */}
        <section id="course-curriculum" className="py-12 md:py-16 bg-muted/40 scroll-mt-20">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
                <PlayCircle className="h-3.5 w-3.5" />
                Course Curriculum
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                What You'll Learn — 5 Modules
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The course is organised into five modules across 28 video
                lectures. Watch them in order on our YouTube channel, at your own
                pace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {COURSE_MODULES.map((module, index) => {
                const videoId = getYouTubeId(module.url);
                return (
                  <a
                    key={module.title}
                    href={module.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch Module ${index + 1}: ${module.title}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <SafeImage
                        src={
                          videoId
                            ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
                            : module.image
                        }
                        alt={`${module.title} — module video thumbnail`}
                        loading="lazy"
                        fallback={module.image}
                        width={480}
                        height={360}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold text-foreground shadow">
                        Module {index + 1}
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                        <PlayCircle className="h-12 w-12 text-white drop-shadow-lg" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 font-semibold leading-snug text-base md:text-lg break-words">
                        {module.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm text-muted-foreground">
                        {module.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <PlayCircle className="h-3.5 w-3.5 text-primary" />
                          {module.lectures.length} video lectures
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          Available now
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* PLAYLIST CARD */}
              <a
                href={COURSE_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg border-0 bg-primary text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
                aria-label="Open the full course playlist on YouTube"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <SafeImage
                    src={playlistImage}
                    alt="Full course playlist on YouTube — stacked video thumbnails with a play button"
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    <Youtube className="h-3.5 w-3.5" /> YouTube Playlist
                  </span>
                  <h3 className="mb-2 font-semibold leading-snug text-base md:text-lg">
                    Watch the Full Course Playlist
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-primary-foreground/80">
                    All 28 lectures live on our YouTube channel. Open the
                    playlist to watch every module in order.
                  </p>
                  <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold underline underline-offset-4">
                    Open YouTube Playlist
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </div>

            <p className="mt-8 text-center text-xs text-muted-foreground">
              All 5 modules are available now. Watch them in order on our
              YouTube channel, at your own pace.
            </p>
          </div>
        </section>

        {/* ASSESSMENT */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 text-orange-600 px-3 py-1 text-xs font-semibold mb-3">
              <FileCheck className="h-3.5 w-3.5" />
              Final Assessment
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Test Your Digital Marketing Knowledge
            </h2>
            <p className="text-muted-foreground mb-8">
              Have you completed all 28 lectures? Put your learning to the test
              with our 28-question final assessment.
            </p>

            <ol className="text-left space-y-3 mb-8 rounded-2xl border bg-card p-5 md:p-6 shadow-sm">
              {[
                "Complete all 28 lectures.",
                'Click "Take Final Assessment".',
                "Enter your name and email address in the Google Form.",
                "Answer all 28 questions.",
                "Submit the assessment.",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <AssessmentButton
              className="w-full sm:w-auto h-14 px-8 text-base md:text-lg"
              label="🎓 Take the Final Assessment"
            />
            <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
              <ExternalLink className="h-3 w-3" />
              The assessment is hosted securely through Google Forms.
            </p>
          </div>
        </section>

        {/* CERTIFICATE */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/10 mb-4">
              <Award className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Certificate
            </h2>
            <p className="text-muted-foreground mb-4">
              Complete the course and final assessment to become eligible for
              the course certificate, subject to the assessment requirements.
            </p>
            <p className="text-muted-foreground text-sm">
              To be considered, you need to watch all 28 lectures and submit the
              28-question final assessment with your name and email address.
              Certificates are issued manually after review, so allow some time
              after you submit. This is a course completion certificate from
              Yellodae — it is not an accredited, university or
              government-recognised qualification.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Have Questions?
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/[0.12] via-background to-orange-500/[0.10] border-t">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Ready to Start Learning Digital Marketing?
            </h2>
            <p className="text-muted-foreground mb-8">
              Watch all 28 lectures and complete the final assessment to test
              your knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 text-base font-semibold"
                onClick={scrollToCurriculum}
              >
                Start Learning
              </Button>
              <AssessmentButton className="w-full sm:w-auto h-12 text-base" />
            </div>

            <div className="text-sm text-muted-foreground">
              <h3 className="font-semibold text-foreground mb-2">
                Explore more from Yellodae
              </h3>
              <p className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                <Link to="/" className="text-primary hover:underline">
                  Home
                </Link>
                <Link to="/about-us/" className="text-primary hover:underline">
                  About Yellodae
                </Link>
                <Link to="/contact-us/" className="text-primary hover:underline">
                  Contact Us
                </Link>
                <Link
                  to="/thailand/destination-guides/"
                  className="text-primary hover:underline"
                >
                  Thailand Smart Guides
                </Link>
                <Link to="/faq/" className="text-primary hover:underline">
                  FAQ
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeDigitalMarketingCourse;
