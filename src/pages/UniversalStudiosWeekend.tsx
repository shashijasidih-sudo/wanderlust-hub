import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const UniversalStudiosWeekend = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "universal-studios-weekend",
      path: "/singapore/universal-studios-singapore-weekend-tickets/",
      seoTitle: "Universal Studios Singapore Weekend Tickets | Sentosa | Book in INR",
      seoDescription:
        "Book Universal Studios Singapore weekend tickets — 7 themed zones, Transformers, Jurassic Park and Battlestar Galactica. Instant confirmation, INR pricing, Indian support.",
      whatsappTopic: "Universal Studios Singapore weekend tickets",
      audience: "Best for Families & Teens",
      area: "sentosa",
      ctaHeadline: "Your Weekend at Universal Studios Singapore Awaits",
      companionIntro:
        "Weekends at USS are busier — here's the ride order, food plan and timing strategy Indian families should follow to cover the park comfortably in one day.",
      tables: [
        {
          heading: "Themed Zones & Star Rides",
          columns: ["Zone", "Star Ride", "Best For", "Wait (Weekend)"],
          rows: [
            ["Sci-Fi City", "Battlestar Galactica: HUMAN vs CYLON", "Thrill seekers", "45–70 min"],
            ["Transformers", "TRANSFORMERS The Ride 3D", "Everyone", "40–60 min"],
            ["The Lost World", "Jurassic Park Rapids Adventure", "Families", "35–55 min"],
            ["Ancient Egypt", "Revenge of the Mummy", "Teens & adults", "30–50 min"],
            ["Far Far Away", "Puss in Boots' Giant Journey", "Kids", "25–40 min"],
            ["Madagascar", "Madagascar: A Crate Adventure", "Young kids", "20–35 min"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "10:00 AM – 7:00 PM (Sat & Sun)"],
            ["Recommended time", "Full day (7–8 hours)"],
            ["Best strategy", "Enter at 10 AM, do Battlestar & Transformers first"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Weekends are the busiest — arrive 30 minutes before opening.",
        "Do the two big coasters first, then work anti-clockwise around the park.",
        "Lockers are mandatory for loose items on thrill rides.",
        "Vegetarian meals are available at Marrakesh Cafe and Malaysian Food Street.",
      ],
    }}
  />
);

export default UniversalStudiosWeekend;
