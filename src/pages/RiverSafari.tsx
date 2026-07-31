import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const RiverSafari = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "river-safari",
      path: "/singapore/river-wonders-singapore-tickets/",
      seoTitle: "River Wonders Singapore Tickets | Giant Pandas & Amazon Flooded Forest",
      seoDescription:
        "Book River Wonders Singapore tickets at Mandai — giant pandas, manatees, Amazon Flooded Forest and the Amazon River Quest. Instant confirmation, INR pricing.",
      whatsappTopic: "River Wonders Singapore tickets",
      audience: "Perfect for Families & Kids",
      area: "mandai",
      ctaHeadline: "Meet Giant Pandas at River Wonders Singapore",
      companionIntro:
        "Asia's first river-themed wildlife park at Mandai — here's how Indian families should plan the route, feeding times and vegetarian food stops.",
      tables: [
        {
          heading: "Top Zones",
          columns: ["Zone", "Highlight", "Best For", "Duration"],
          rows: [
            ["Giant Panda Forest", "Kai Kai, Jia Jia & red pandas", "Everyone", "30 min"],
            ["Amazon Flooded Forest", "World's largest freshwater aquarium", "Photography", "30 min"],
            ["Squirrel Monkey Forest", "Free-ranging monkeys overhead", "Kids", "20 min"],
            ["Mekong River", "Giant catfish & stingrays", "Wildlife lovers", "20 min"],
            ["Amazon River Quest", "Boat ride past jaguars & tapirs", "Families", "10 min"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "10:00 AM – 7:00 PM daily"],
            ["Recommended time", "3–4 hours"],
            ["Best entry slot", "Right at opening — pandas are most active"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Visit the Giant Panda Forest first — it gets crowded by mid-morning.",
        "The Amazon River Quest boat ride is often ticketed separately; check on arrival.",
        "Combine with Singapore Zoo or Night Safari on the same Mandai day.",
        "Ulu Ulu Safari Restaurant serves vegetarian-friendly meals on-site.",
      ],
    }}
  />
);

export default RiverSafari;
