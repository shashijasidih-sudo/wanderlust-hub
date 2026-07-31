import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";
import { Sentosa4D2RidesSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosa4D2RidesFaqs } from "@/data/singaporeActivityFaqs";

const Sentosa4D2Rides = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "sentosa-4d-2rides",
      path: "/singapore/sentosa-4d-adventureland-tickets/",
      seoTitle: "Sentosa 4D Adventureland Tickets (2 Rides) | Instant Confirmation",
      seoDescription:
        "Book Sentosa 4D Adventureland tickets with any 2 rides — Extreme Log Ride, Journey 2 and Haunted Mine Ride. INR pricing, mobile e-tickets, Indian WhatsApp support.",
      whatsappTopic: "Sentosa 4D Adventureland 2-ride tickets",
      audience: "Great for Kids & Teens",
      area: "sentosa",
      ctaHeadline: "Feel Every Twist at Sentosa 4D Adventureland",
      companionIntro:
        "A quick, fully air-conditioned thrill stop on Sentosa — here's how Indian families can slot 4D Adventureland into a Sentosa day, plus food, transport and kid-friendliness notes.",
      tables: [
        {
          heading: "Choose Any 2 Rides",
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
            ["Recommended visit", "1–1.5 hours for 2 rides"],
            ["Best slot", "Weekday late morning or early afternoon"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Carry a light jacket — the indoor venue is strongly air-conditioned.",
        "Start with Journey 2 if you're travelling with younger children.",
        "Pair with SkyHelix Sentosa, Wings of Time or the Cable Car for a full day.",
        "Sanjay's and Saravanaa Bhavan at VivoCity are 10 minutes away for Indian food.",
      ],
      tourOverrides: { faqs: sentosa4D2RidesFaqs },
      extraContentBeforeReviews: <Sentosa4D2RidesSEO />,
    }}
  />
);

export default Sentosa4D2Rides;
