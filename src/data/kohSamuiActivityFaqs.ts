/**
 * Koh Samui activity FAQs — city-specific questions Indian travellers ask most.
 */

export interface FAQ {
  question: string;
  answer: string;
}

const baseFaqs: FAQ[] = [
  {
    question: "Is hotel pickup from Koh Samui included?",
    answer:
      "Yes, round-trip hotel pickup and drop-off within main Koh Samui areas such as Chaweng, Lamai, Bophut and Maenam is included in selected packages.",
  },
  {
    question: "Is vegetarian or Jain food available?",
    answer:
      "Yes. Vegetarian meals are available on request and Jain or no-onion-no-garlic meals can be arranged if you inform us at least 24 hours in advance.",
  },
  {
    question: "Can Indian travellers pay in INR?",
    answer:
      "Yes. You can book and pay online in INR before you travel, so there is no need to carry large amounts of Thai baht for the activity itself.",
  },
  {
    question: "How do I get around Koh Samui?",
    answer:
      "Songthaew shared taxis, metered taxis and Grab are widely available. Roads are hilly and narrow at night, so pre-booked transfers are the safest option.",
  },
  {
    question: "What should I wear?",
    answer:
      "Light cotton clothing, sunscreen and comfortable sandals. Carry a light shawl for boat rides and air-conditioned venues in the evening.",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const kohSamuiFullMoonPartyFaqs: FAQ[] = extend([
  {
    question: "How do I reach the Full Moon Party from Koh Samui?",
    answer:
      "The package includes a hotel transfer to the pier and a return speedboat or ferry to Haad Rin beach on Koh Phangan, with the return boat operating around sunrise.",
  },
  {
    question: "What time does the Full Moon Party peak?",
    answer:
      "Boats usually depart Koh Samui between 8:00 PM and 10:00 PM. The party builds through midnight and peaks between 1:00 AM and 4:00 AM.",
  },
  {
    question: "Is there an age limit?",
    answer:
      "Yes, this is an adults-only (18+) experience. A passport or valid photo ID may be checked at the beach entry gate.",
  },
  {
    question: "How much cash should I carry?",
    answer:
      "Carry Thai baht cash for drinks, food stalls and the beach entry fee — most Haad Rin vendors do not accept cards and ATMs run out on party nights.",
  },
  {
    question: "Is it safe for solo travellers and couples?",
    answer:
      "Yes, if you stay with your group, wear sturdy closed sandals because of broken glass on the sand, keep your phone in a waterproof pouch, and never accept drinks from strangers.",
  },
]);

export const kohSamuiLoyKrathongCruiseFaqs: FAQ[] = extend([
  {
    question: "What is Loy Krathong and why is this cruise special?",
    answer:
      "Loy Krathong is Thailand's festival of lights, where decorated krathongs are floated on the water on the full moon night. The White Orchid cruise lets you float yours from the deck with dinner and a live show.",
  },
  {
    question: "Is dinner included on the cruise?",
    answer:
      "Yes, a buffet dinner with Thai and international dishes is included, along with a krathong for each guest and live on-board entertainment.",
  },
  {
    question: "What are the boarding timings?",
    answer:
      "Boarding usually begins 30 minutes before departure in the early evening, and the cruise runs for approximately two hours including the krathong floating ceremony.",
  },
  {
    question: "Is it suitable for children and elderly guests?",
    answer:
      "Yes. The cruise is calm, seated and family friendly, with easy pier access and no swimming or physically demanding activity involved.",
  },
]);
