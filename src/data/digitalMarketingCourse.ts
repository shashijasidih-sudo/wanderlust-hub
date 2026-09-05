export interface Lecture {
  number: number;
  title: string;
  description: string;
  /** Full YouTube URL. Leave empty string when the video is not published yet. */
  url: string;
}

export interface CourseModule {
  title: string;
  lectures: Lecture[];
}

export const COURSE_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLXkhXCyqEnWk";

export const ASSESSMENT_FORM_URL = "https://forms.gle/TLSimCKaAeMtQV5H9";

/**
 * 28-lecture curriculum. Update the `url` field for each lecture as the
 * remaining videos are published — no other change is required.
 */
export const COURSE_MODULES: CourseModule[] = [
  {
    title: "Module 1 — Basics of Digital Marketing",
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
    title: "Module 2 — SEO & SEM",
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
      { number: 8, title: "Lecture 8", description: "Coming soon.", url: "" },
      { number: 9, title: "Lecture 9", description: "Coming soon.", url: "" },
      { number: 10, title: "Lecture 10", description: "Coming soon.", url: "" },
    ],
  },
  {
    title: "Module 3 — More Lectures Coming Soon",
    lectures: Array.from({ length: 18 }, (_, i) => ({
      number: 11 + i,
      title: `Lecture ${11 + i}`,
      description: "Coming soon.",
      url: "",
    })),
  },
];

export const ALL_LECTURES: Lecture[] = COURSE_MODULES.flatMap((m) => m.lectures);
