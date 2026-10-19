import module1Image from "@/assets/dm-module-1-basics.jpg";
import module2Image from "@/assets/dm-module-2-seo-sem.jpg";
import module3Image from "@/assets/dm-module-3-social-media.jpg";
import module4Image from "@/assets/dm-module-4-content-email.jpg";
import module5Image from "@/assets/dm-module-5-analytics.jpg";

export interface Lecture {
  number: number;
  title: string;
  description: string;
  /** Full YouTube URL. Leave empty string when the video is not published yet. */
  url: string;
}

export interface CourseModule {
  title: string;
  description: string;
  image: string;
  /** Full YouTube URL of the module's featured video. */
  url: string;
  lectures: Lecture[];
}

export const COURSE_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLXkhXCyqEnWk";

export const ASSESSMENT_FORM_URL = "https://forms.gle/TLSimCKaAeMtQV5H9";

/**
 * 5-module, 28-lecture curriculum. The course page shows modules only —
 * update the `url` field of each lecture as the remaining videos are
 * published; no other change is required.
 */
export const COURSE_MODULES: CourseModule[] = [
  {
    title: "Basics of Digital Marketing",
    description:
      "What digital marketing is, how it differs from traditional marketing, the main digital channels, and how marketing funnels turn visitors into customers.",
    image: module1Image,
    lectures: [
      {
        number: 1,
        title: "Understanding Digital Marketing",
        description:
          "What digital marketing is, how it differs from traditional marketing, and why it matters for modern businesses.",
        url: "https://youtu.be/bH6kfdtkde8",
      },
      {
        number: 2,
        title: "Basics and Cases in Digital Marketing",
        description:
          "Core concepts explained through simple, real-world case examples you can relate to.",
        url: "https://www.youtube.com/watch?v=6MbHv-U54ME&t=5s",
      },
      {
        number: 3,
        title: "Digital Marketing Channels",
        description:
          "An overview of search, social, email, content, display and other channels, and when to use each.",
        url: "https://youtu.be/HZBRo9EJSsU",
      },
      {
        number: 4,
        title: "Digital Marketing Funnels",
        description:
          "How awareness, consideration and conversion stages work together to turn visitors into customers.",
        url: "https://youtu.be/VniMobHTAmY",
      },
    ],
  },
  {
    title: "Practical Workshop on SEO & SEM",
    description:
      "A hands-on workshop covering SEO basics, keyword research, on-page and off-page optimisation, technical SEO, search engine marketing and creating your first Google Ads campaign.",
    image: module2Image,
    lectures: [
      {
        number: 5,
        title: "SEO Basics",
        description:
          "How search engines crawl, index and rank pages, and the building blocks of search visibility.",
        url: "https://youtu.be/VTk9SKxcd0Q",
      },
      {
        number: 6,
        title: "On-Page SEO & Keyword Research",
        description:
          "Finding the right keywords and optimising titles, headings, content and internal links around them.",
        url: "https://youtu.be/XVKNxb29tHY",
      },
      {
        number: 7,
        title: "Off-Page SEO & Technical SEO",
        description:
          "Backlinks, authority signals, site speed, crawlability and the technical foundations of ranking.",
        url: "https://youtu.be/YeNFGtZLxBA",
      },
      {
        number: 8,
        title: "SEM",
        description:
          "How search engine marketing works, the difference between SEO and SEM, and when to use paid search.",
        url: "https://youtu.be/ItiKMkj10bA",
      },
      {
        number: 9,
        title: "Google Ads Creation",
        description:
          "A step-by-step walkthrough of creating your first Google Ads campaign, from account setup to ad copy.",
        url: "https://youtu.be/V1bBnwSUFJo",
      },
      { number: 10, title: "Lecture 10", description: "Coming soon.", url: "" },
    ],
  },
  {
    title: "Social Media Marketing & Management",
    description:
      "Building and managing a brand presence on social platforms — content planning, posting schedules, community engagement and growing an audience organically.",
    image: module3Image,
    lectures: Array.from({ length: 6 }, (_, i) => ({
      number: 11 + i,
      title: `Lecture ${11 + i}`,
      description: "Coming soon.",
      url: "",
    })),
  },
  {
    title: "Content Marketing & Practical Email Marketing",
    description:
      "Creating content that attracts and converts, plus practical email marketing — newsletters, campaigns, list building and measuring what works.",
    image: module4Image,
    lectures: Array.from({ length: 6 }, (_, i) => ({
      number: 17 + i,
      title: `Lecture ${17 + i}`,
      description: "Coming soon.",
      url: "",
    })),
  },
  {
    title: "Web Analytics and Google Analytics",
    description:
      "Measuring what matters: website tracking, Google Analytics reports, traffic sources, conversions and using data to improve your marketing.",
    image: module5Image,
    lectures: Array.from({ length: 6 }, (_, i) => ({
      number: 23 + i,
      title: `Lecture ${23 + i}`,
      description: "Coming soon.",
      url: "",
    })),
  },
];

export const ALL_LECTURES: Lecture[] = COURSE_MODULES.flatMap((m) => m.lectures);
