import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const SingaporeZoo = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "singapore-zoo",
      path: "/singapore/singapore-zoo-tickets/",
      seoTitle: "Singapore Zoo Tickets with Tram Ride | Mandai | Book in INR",
      seoDescription:
        "Book Singapore Zoo tickets with tram ride — open-concept rainforest zoo with 4,200+ animals, Fragile Forest and animal shows. Instant confirmation, Indian WhatsApp support.",
      whatsappTopic: "Singapore Zoo tickets",
      audience: "Perfect for Families & Kids",
      area: "mandai",
      ctaHeadline: "A Full Day of Wildlife at Singapore Zoo",
      companionIntro:
        "The world's best rainforest zoo at Mandai — here's the ideal route, show timings and vegetarian food plan for Indian families visiting with kids.",
      tables: [
        {
          heading: "Must-See Zones & Shows",
          columns: ["Zone / Show", "Highlight", "Best For", "Duration"],
          rows: [
            ["Fragile Forest", "Walk-through biodome with lemurs & bats", "Kids", "30 min"],
            ["Great Rift Valley", "Hamadryas baboons & Ethiopian habitat", "Families", "20 min"],
            ["Frozen Tundra", "Polar bears & raccoon dogs", "Everyone", "20 min"],
            ["Splash Safari Show", "Sea lion performance", "Kids", "20 min"],
            ["Rainforest Fights Back", "Animal conservation show", "Families", "20 min"],
            ["Tram Ride", "Hop-on hop-off across the zoo", "Seniors & kids", "Unlimited"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "8:30 AM – 6:00 PM daily"],
            ["Recommended time", "4–5 hours"],
            ["Best entry slot", "8:30 AM — animals are most active early"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Use the tram ride to cover distance, then walk the zones you like most.",
        "Check show timings at the entrance and plan your route around them.",
        "Carry a poncho — the zoo is open-air and showers are common.",
        "Combine with River Wonders or Night Safari on the same Mandai day.",
      ],
    }}
  />
);

export default SingaporeZoo;
