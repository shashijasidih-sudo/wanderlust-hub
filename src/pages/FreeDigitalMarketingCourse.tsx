import { Link } from "react-router-dom";
import Header from "@/components/Header";
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
} from "lucide-react";
import {
  COURSE_MODULES,
  ALL_LECTURES,
  ASSESSMENT_FORM_URL,
  COURSE_PLAYLIST_URL,
} from "@/data/digitalMarketingCourse";

const PAGE_PATH = "/free-digital-marketing-course-for-businesses/";
const CANONICAL = `https://yellodae.com${PAGE_PATH}`;

const faqs = [
  {
    q: "Is this Digital Marketing course free?",
    a: "Yes. Every lecture and the final assessment are completely free. There is no fee, subscription or payment of any kind.",
  },
  {
    q: "How many lectures are included?",
    a: "The course covers 28 lectures, from digital marketing fundamentals through to practical application.",
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
    a: "Watch all 28 lectures, then click any \"Take Final Assessment\" button on this page. It opens the 28-question assessment in a new tab.",
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
    a: "Each lecture below links directly to its video on our YouTube channel. You can watch them in order, at your own pace, on any device.",
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

const scrollToCurriculum = () => {
  document
    .getElementById("course-curriculum")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/** Extract a YouTube video ID from a watch/youtu.be URL. */
const getYouTubeId = (url: string): string | null => {
  const m =
    url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
    url.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
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
        <section className="bg-gradient-to-br from-primary/10 via-background to-orange-500/10 border-b">
          <div className="container px-4 md:px-6 py-12 md:py-20 text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs md:text-sm font-semibold mb-5">
              <GraduationCap className="h-4 w-4" /> 100% Free · 28 Lectures
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              FREE Fundamentals of Digital Marketing Course
            </h1>
            <p className="text-lg md:text-2xl font-medium text-primary mb-4">
              Learn Digital Marketing from Basics to Practical Application —
              Completely Free
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master the fundamentals of digital marketing through 28
              easy-to-follow video lectures designed for beginners, students,
              entrepreneurs and business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 text-base font-semibold"
                onClick={scrollToCurriculum}
              >
                Start Learning
              </Button>
              <AssessmentButton className="w-full sm:w-auto h-12 text-base" />
            </div>
          </div>
        </section>

        {/* COURSE OVERVIEW */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Learn Digital Marketing — From Fundamentals to Practice
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-3">
              This is a completely free 28-lecture digital marketing course that
              walks you through the essential concepts of digital marketing and
              shows how they are applied in practice — search engines, social
              platforms, content, funnels and campaign thinking.
            </p>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Watch the lectures in order or jump to the topic you need. There
              are no deadlines and no fees.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Who this course is for
                </h3>
                <ul className="space-y-2">
                  {audience.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm md:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">What you get</h3>
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
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="course-curriculum" className="py-12 md:py-16 bg-muted/40 scroll-mt-20">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Course Curriculum
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              All 28 lectures, grouped by module.{" "}
              <a
                href={COURSE_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                View the full YouTube playlist
              </a>
              .
            </p>

            {COURSE_MODULES.map((module) => (
              <div key={module.title} className="mb-10">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  {module.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.lectures.map((lecture) => (
                    <Card key={lecture.number} className="h-full">
                      <CardContent className="p-4 md:p-5 flex flex-col h-full">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                            {String(lecture.number).padStart(2, "0")}
                          </span>
                          <h4 className="font-semibold text-sm md:text-base leading-snug break-words">
                            {lecture.title}
                          </h4>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground mb-4 flex-1">
                          {lecture.description}
                        </p>
                        {lecture.url ? (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full sm:w-auto self-start"
                          >
                            <a
                              href={lecture.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Watch Lecture
                            </a>
                          </Button>
                        ) : (
                          <span className="text-xs font-medium text-muted-foreground">
                            Video coming soon
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground text-center">
              {ALL_LECTURES.filter((l) => l.url).length} of {ALL_LECTURES.length}{" "}
              lectures are live. The remaining videos are added to this page as
              they are published.
            </p>
          </div>
        </section>

        {/* ASSESSMENT */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Test Your Digital Marketing Knowledge
            </h2>
            <p className="text-muted-foreground mb-8">
              Have you completed all 28 lectures? Put your learning to the test
              with our 28-question final assessment.
            </p>

            <ol className="text-left space-y-3 mb-8 rounded-xl border bg-card p-5 md:p-6">
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
            <Award className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Certificate</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">
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
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-orange-500/10 border-t">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
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
