import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const SentosaSkyHelix = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "sentosa-sky-helix",
      path: "/singapore/skyhelix-sentosa-tickets/",
      seoTitle: "SkyHelix Sentosa Tickets | Singapore's Highest Open-Air Ride",
      seoDescription:
        "Book SkyHelix Sentosa tickets — Singapore's highest open-air panoramic ride, 79m above sea level with 360° views. Instant confirmation, INR pricing, Indian support.",
      whatsappTopic: "SkyHelix Sentosa tickets",
      audience: "Great for Couples & Thrill Seekers",
      area: "sentosa",
      ctaHeadline: "See Sentosa from 79 Metres Up",
      companionIntro:
        "A short but unforgettable open-air ride with 360° views over Sentosa and the Southern Islands — here's everything Indian travellers should plan around it.",
      tables: [
        {
          heading: "What to Expect",
          columns: ["Detail", "Information"],
          rows: [
            ["Height", "79 metres above sea level"],
            ["Ride style", "Open-air gondola seating, feet dangling"],
            ["Views", "Sentosa, Southern Islands, Keppel Harbour"],
            ["Ride duration", "~12 minutes"],
            ["Complimentary", "One drink included with the ride"],
          ],
          minWidth: 360,
        },
        {
          heading: "Timings & Duration",
          columns: ["Option", "Timings", "Total Time"],
          rows: [
            ["Standard ride", "10:00 AM – 9:30 PM", "30 min incl. queue"],
            ["Sunset slot", "6:30 – 7:30 PM", "Best for photos"],
          ],
        },
      ],
      tips: [
        "Secure loose items — phones and caps must be stowed before boarding.",
        "Sunset slots sell out first on weekends; book a day ahead.",
        "Not recommended for those with severe fear of heights.",
        "Pair with the Sentosa Cable Car and Wings of Time in the same evening.",
      ],
    }}
  />
);

export default SentosaSkyHelix;
