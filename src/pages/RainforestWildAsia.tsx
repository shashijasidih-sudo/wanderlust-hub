import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const RainforestWildAsia = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "rainforest-wild-asia",
      path: "/singapore/rainforest-wild-asia-tickets/",
      seoTitle: "Rainforest Wild Asia Tickets with Transfer | Mandai Singapore",
      seoDescription:
        "Book Rainforest Wild Asia tickets with hotel transfers — Singapore's newest immersive rainforest park at Mandai with cave trails and canopy walks. Book in INR.",
      whatsappTopic: "Rainforest Wild Asia tickets",
      audience: "Great for Families & Adventure Lovers",
      area: "mandai",
      ctaHeadline: "Explore Singapore's Newest Rainforest Adventure",
      companionIntro:
        "Mandai's newest immersive park mixes wildlife with light adventure — here's what Indian families should wear, expect and pair it with.",
      tables: [
        {
          heading: "What to Expect",
          columns: ["Zone", "Highlight", "Best For", "Duration"],
          rows: [
            ["Karst Cave Trail", "Limestone cave walkthrough", "Teens & adults", "30 min"],
            ["Canopy Walk", "Elevated rainforest treetop trail", "Everyone", "25 min"],
            ["Forest Floor", "Free-roaming Asian wildlife habitats", "Families", "40 min"],
            ["Adventure Zones", "Climbing and rope elements (optional)", "Kids 8+", "30 min"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Operating hours", "9:00 AM – 6:00 PM daily"],
            ["Recommended time", "3–4 hours"],
            ["Transfers", "Round-trip hotel pickup included in transfer option"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Wear closed walking shoes — trails are uneven in places.",
        "Carry a poncho and repellent; it's a genuine rainforest setting.",
        "Adventure elements have height and age restrictions — check before booking.",
        "Pair with Singapore Zoo or River Wonders in the same Mandai visit.",
      ],
    }}
  />
);

export default RainforestWildAsia;
