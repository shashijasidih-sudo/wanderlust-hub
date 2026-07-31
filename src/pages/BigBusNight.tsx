import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const BigBusNight = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "big-bus-night",
      path: "/singapore/big-bus-night-city-tour-singapore/",
      seoTitle: "Big Bus Singapore Night City Tour Tickets | Book in INR",
      seoDescription:
        "Book the Big Bus Singapore Night City Tour — open-top evening drive past Marina Bay, Merlion Park, Chinatown and the illuminated CBD skyline. Instant confirmation.",
      whatsappTopic: "Big Bus Singapore night city tour tickets",
      audience: "Great for Couples & Families",
      area: "city",
      ctaHeadline: "See Singapore Light Up on the Night City Tour",
      companionIntro:
        "A relaxed open-top evening drive through Singapore's illuminated landmarks — ideal for Indian travellers on a short trip who want a full city overview after dark.",
      tables: [
        {
          heading: "Route Highlights",
          columns: ["Landmark", "What You See", "Photo Worthy?"],
          rows: [
            ["Marina Bay Sands", "Illuminated skyline over the bay", "Must-shoot"],
            ["Merlion Park", "Singapore's icon lit up at night", "Must-shoot"],
            ["Helix Bridge", "Neon-lit double-helix walkway", "Yes"],
            ["Chinatown", "Lantern-lit streets and temples", "Yes"],
            ["Civic District", "Colonial buildings under floodlights", "Yes"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Detail", "Information"],
          rows: [
            ["Departure", "Evening slot (approx. 7:30 PM)"],
            ["Duration", "~3 hours"],
            ["Seating", "Open-top upper deck with commentary"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Carry a light jacket — the open deck gets breezy at night.",
        "Sit on the upper deck's left side for the best Marina Bay views.",
        "Have dinner at Little India or Clarke Quay before the tour.",
        "Pair it with the Singapore River Cruise for a complete evening.",
      ],
    }}
  />
);

export default BigBusNight;
