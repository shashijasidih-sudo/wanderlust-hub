/**
 * Singapore activity FAQs based on uploaded brand content (singapore_info.docx).
 */
export interface FAQ {
  question: string;
  answer: string;
}

const baseFaqs: FAQ[] = [
  {
    question: "Is hotel transfer included?",
    answer:
      "Hotel transfer is included only when you select the transfer variant of this experience. Tickets-only packages do not include hotel pickup and drop-off.",
  },
  {
    question: "What is the difference between transfer and no transfer?",
    answer:
      "The transfer option includes round-trip hotel pickup and drop-off in an air-conditioned vehicle from centrally located Singapore hotels. The no-transfer / tickets-only option requires you to reach the venue independently via MRT, taxi, or ride-hailing services.",
  },
  {
    question: "Is vegetarian food available?",
    answer:
      "Yes, vegetarian food options are widely available across Singapore — especially in Little India, Chinatown, Sentosa Island and Mandai Wildlife Reserve dining outlets.",
  },
  {
    question: "Can Indians pay in INR?",
    answer:
      "Yes, you can book and pay in INR through Yellodae before traveling — no need to carry large amounts of Singapore Dollars for the activity itself.",
  },
  {
    question: "What should I wear?",
    answer:
      "Smart casual clothing in lightweight cotton is recommended for Singapore's tropical climate. Wear comfortable walking shoes; carry a light scarf or jacket for strong indoor air-conditioning and a small umbrella for sudden tropical showers.",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const singaporeCityTourFaqs: FAQ[] = extend([
  {
    question: "Which landmarks are covered on the city tour?",
    answer:
      "The tour typically covers Merlion Park, Marina Bay Sands waterfront, Chinatown, Little India and scenic skyline viewpoints, with optional photo stops near Orchard Road, Parliament House and the Esplanade.",
  },
  {
    question: "Are attraction entry tickets included?",
    answer:
      "No. The city tour focuses on sightseeing stops with expert commentary; entry tickets to specific paid attractions are not included.",
  },
]);

export const nightSafariTicketsFaqs: FAQ[] = extend([
  {
    question: "Is the tram ride included with the ticket?",
    answer:
      "Yes, the guided tram safari through multiple wildlife zones (Himalayan Foothills, Southeast Asian Rainforest, African Savanna, Indo-Malayan forests) is included with your entry ticket.",
  },
  {
    question: "How do I reach Night Safari without transfer?",
    answer:
      "Take the MRT to Khatib Station, then board the Mandai Khatib Shuttle which connects directly to the Night Safari entrance. Taxis and ride-hailing services are also available.",
  },
]);

export const nightSafariTransferFaqs: FAQ[] = extend([
  {
    question: "What time will my hotel pickup be?",
    answer:
      "Pickup is scheduled in the early evening before park opening hours. Exact timing depends on your hotel location and is shared in your booking voucher.",
  },
  {
    question: "Are the live animal shows included?",
    answer:
      "Yes, entry to scheduled shows like the Creatures of the Night presentation and the Thumbuakar Fire Performance is included, subject to seating availability.",
  },
]);

export const sentosa4D2RidesFaqs: FAQ[] = extend([
  {
    question: "Which 2 rides can I choose from?",
    answer:
      "You can pick any 2 from Extreme Log Ride, Journey 2: The Mysterious Island and Haunted Mine Ride, subject to availability on the day of your visit.",
  },
  {
    question: "Is this attraction suitable for children?",
    answer:
      "Yes — Journey 2: The Mysterious Island is great for younger children, while older kids and teens enjoy the Extreme Log Ride and Haunted Mine Ride. The attraction is fully air-conditioned.",
  },
]);

export const sentosa4D3RidesFaqs: FAQ[] = extend([
  {
    question: "What is included with the 3-ride pass?",
    answer:
      "Entry to all three signature rides — Extreme Log Ride, Journey 2: The Mysterious Island and Haunted Mine Ride — at Sentosa 4D Adventureland.",
  },
  {
    question: "How long does each ride last?",
    answer:
      "Each 4D ride lasts approximately 10–15 minutes and uses synchronized motion seating with visual, sound, wind and water effects.",
  },
]);

export const sentosaCableCarFaqs: FAQ[] = extend([
  {
    question: "Which line does the cable car operate on?",
    answer:
      "The Mount Faber Line, connecting Mount Faber Peak, HarbourFront Tower and Sentosa Island. Each segment lasts about 15 minutes with panoramic glass-cabin views.",
  },
  {
    question: "Is this a one-way or roundtrip pass?",
    answer:
      "This is a roundtrip pass, allowing you to board and disembark at Mount Faber, HarbourFront or Sentosa stations and return on the same scenic route.",
  },
]);

export const sentosaWingsTimeFaqs: FAQ[] = extend([
  {
    question: "How long is the Wings of Time show?",
    answer:
      "The performance runs approximately 20–25 minutes and features lasers, water screens, 3D projections, flame bursts, music and fireworks at Siloso Beach.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "The show is held outdoors at an open-air beachside amphitheater. In case of heavy rain, timings may be adjusted by the operator — we recommend checking the weather forecast in advance.",
  },
]);
