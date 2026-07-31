import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const BigBusDiscover = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "big-bus-discover",
      path: "/singapore/big-bus-hop-on-hop-off-singapore-city-tour/",
      seoTitle: "Big Bus Singapore Hop-On Hop-Off City Tour Tickets | Book in INR",
      seoDescription:
        "Book Big Bus Singapore Discover tickets — hop-on hop-off open-top city tour covering Marina Bay, Chinatown, Little India and Orchard Road. Instant confirmation.",
      whatsappTopic: "Big Bus Singapore hop-on hop-off tickets",
      audience: "Ideal for First-Time Visitors",
      area: "city",
      ctaHeadline: "See All of Singapore on One Hop-On Hop-Off Ticket",
      companionIntro:
        "The easiest way for first-time Indian visitors to cover Singapore's landmarks at their own pace — here's the smartest route order and boarding plan.",
      tables: [
        {
          heading: "Key Stops",
          columns: ["Stop", "Nearby Highlight", "Worth Getting Off?"],
          rows: [
            ["Marina Bay Sands", "Gardens by the Bay, ArtScience Museum", "Yes"],
            ["Merlion Park", "Waterfront promenade & photo spot", "Yes"],
            ["Chinatown", "Buddha Tooth Relic Temple, street market", "Yes"],
            ["Little India", "Sri Veeramakaliamman Temple, Indian food", "Yes"],
            ["Orchard Road", "Shopping malls", "Optional"],
            ["Clarke Quay", "Riverside dining & cruise jetty", "Yes"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "9:30 AM – 5:30 PM"],
            ["Bus frequency", "Every 20–30 minutes"],
            ["Full loop", "~1 hour 45 minutes without stops"],
            ["Recommended time", "Full day, 3–4 hop-offs"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Start by 9:30 AM to fit in three or four hop-offs comfortably.",
        "Sit on the open upper deck, but carry a cap and sunscreen.",
        "Little India is the best stop for a mid-day Indian vegetarian meal.",
        "Keep your ticket handy — you'll re-scan at every boarding.",
      ],
    }}
  />
);

export default BigBusDiscover;
