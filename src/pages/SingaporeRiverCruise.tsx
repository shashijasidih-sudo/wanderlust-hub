import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const SingaporeRiverCruise = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "singapore-river-cruise",
      path: "/singapore/singapore-river-cruise-tickets-and-transfers/",
      seoTitle: "Singapore River Cruise Tickets & Transfers | Clarke Quay Bumboat",
      seoDescription:
        "Book Singapore River Cruise tickets with optional hotel transfers — 40-minute bumboat ride past Clarke Quay, Boat Quay, Merlion Park and Marina Bay. Book in INR.",
      whatsappTopic: "Singapore River Cruise tickets",
      audience: "Perfect for Couples & Families",
      area: "marina-bay",
      ctaHeadline: "Sail Past Singapore's Skyline on the River Cruise",
      companionIntro:
        "A relaxed 40-minute bumboat ride that covers Singapore's most photogenic waterfront — here's the best departure point, timing and food plan for Indian travellers.",
      tables: [
        {
          heading: "Route Highlights",
          columns: ["Landmark", "What You See", "Photo Worthy?"],
          rows: [
            ["Clarke Quay", "Colourful heritage shophouses & nightlife", "Yes"],
            ["Boat Quay", "Riverside dining strip under the CBD skyline", "Yes"],
            ["Cavenagh & Anderson Bridges", "Historic colonial-era crossings", "Yes"],
            ["Merlion Park", "Singapore's national icon from the water", "Must-shoot"],
            ["Marina Bay Sands", "Full bay panorama with the ArtScience Museum", "Must-shoot"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Option", "Timings", "Duration"],
          rows: [
            ["Tickets only", "10:00 AM – 10:00 PM (every 15 min)", "40 min"],
            ["Tickets + hotel transfers", "As per selected pickup slot", "~2.5 hrs door to door"],
          ],
        },
      ],
      tips: [
        "Evening cruises after 7 PM give the best lit-up skyline shots.",
        "Board at Clarke Quay jetty for the shortest queue.",
        "Sit on the right side when departing Clarke Quay for Merlion views.",
        "Plenty of Indian restaurants at Clarke Quay and Marina Bay for dinner after.",
      ],
    }}
  />
);

export default SingaporeRiverCruise;
