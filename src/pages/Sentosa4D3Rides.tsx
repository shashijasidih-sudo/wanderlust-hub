import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";
import { Sentosa4D3RidesSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosa4D3RidesFaqs } from "@/data/singaporeActivityFaqs";

const Sentosa4D3Rides = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "sentosa-4d-3rides",
      path: "/singapore/sentosa-4d-3-rides/",
      seoTitle: "Sentosa 4D Adventureland 3 Rides Tickets | Best Value | Yellodae",
      seoDescription:
        "All 3 Sentosa 4D Adventureland rides in one pass — Extreme Log Ride, Journey 2 and Haunted Mine Ride. Instant confirmation, INR pricing, Indian WhatsApp support.",
      whatsappTopic: "Sentosa 4D Adventureland 3-ride tickets",
      audience: "Great for Kids & Teens",
      area: "sentosa",
      ctaHeadline: "All 3 Rides, One Pass — Sentosa 4D Adventureland",
      companionIntro:
        "The complete 4D Adventureland line-up in about 90 minutes — a perfect air-conditioned break in the middle of a hot Sentosa day for Indian families.",
      tables: [
        {
          heading: "All 3 Rides Included",
          columns: ["Ride", "Experience", "Best For", "Duration"],
          rows: [
            ["Extreme Log Ride", "Virtual jungle rafting with water sprays", "Families", "10–15 min"],
            ["Journey 2: The Mysterious Island", "Movie-based 4D adventure", "Kids 6+", "10–15 min"],
            ["Haunted Mine Ride", "Mildly spooky underground ride", "Teens & adults", "10–15 min"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "12:00 PM – 8:00 PM daily"],
            ["Recommended visit", "1.5 hours for all 3 rides"],
            ["Best slot", "Weekday afternoon or a rainy spell"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "The 3-ride pass costs less per ride than buying two separately.",
        "Carry a light jacket for the strong air-conditioning.",
        "End with Haunted Mine Ride if kids are nervous about the dark.",
        "Combine with Wings of Time in the evening for a complete Sentosa plan.",
      ],
      tourOverrides: { faqs: sentosa4D3RidesFaqs },
      extraContentBeforeReviews: <Sentosa4D3RidesSEO />,
    }}
  />
);

export default Sentosa4D3Rides;
