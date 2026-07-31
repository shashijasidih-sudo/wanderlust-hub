import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const AdventureCove = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "adventure-cove",
      path: "/singapore/adventure-cove-waterpark-tickets/",
      seoTitle: "Adventure Cove Waterpark Tickets Singapore | Sentosa | Book in INR",
      seoDescription:
        "Book Adventure Cove Waterpark tickets at Resorts World Sentosa — water slides, Adventure River, Rainbow Reef snorkelling and wave pool. Instant confirmation, INR pricing.",
      whatsappTopic: "Adventure Cove Waterpark tickets",
      audience: "Best for Families & Kids",
      area: "sentosa",
      ctaHeadline: "Make a Splash at Adventure Cove Waterpark",
      companionIntro:
        "A full day of slides and snorkelling at Sentosa — here's what Indian families should pack, where to eat vegetarian and how to plan the day around the crowds.",
      tables: [
        {
          heading: "Top Attractions",
          columns: ["Attraction", "Type", "Best For", "Thrill Level"],
          rows: [
            ["Riptide Rocket", "Hydro-magnetic coaster", "Teens & adults", "High"],
            ["Pipeline Plunge", "Twisting tube slide", "Families", "Medium"],
            ["Adventure River", "620m lazy river through 14 zones", "Everyone", "Low"],
            ["Bluwater Bay", "Wave pool", "Families", "Low"],
            ["Rainbow Reef", "Snorkel with 20,000 fish", "Everyone", "Low"],
            ["Big Bucket Treehouse", "Kids' play structure", "Young kids", "Low"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "10:00 AM – 6:00 PM daily"],
            ["Recommended time", "Full day (5–6 hours)"],
            ["Best entry slot", "At opening on a weekday"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Carry swimwear, a towel and a change of clothes — lockers are chargeable.",
        "Reef-safe sunscreen only; oil-based lotions are not allowed in Rainbow Reef.",
        "Waterproof phone pouches are worth buying before you enter.",
        "Vegetarian meals are available at Malaysian Food Street and VivoCity nearby.",
      ],
    }}
  />
);

export default AdventureCove;
