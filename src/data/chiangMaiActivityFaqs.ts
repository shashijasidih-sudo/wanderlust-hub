/**
 * Chiang Mai activity FAQs — city-specific questions Indian travellers ask most.
 */

export interface FAQ {
  question: string;
  answer: string;
}

const baseFaqs: FAQ[] = [
  {
    question: "Is hotel transfer from Chiang Mai included?",
    answer:
      "Yes, hotel pickup and drop-off within Chiang Mai Old City, Nimman and the Night Bazaar area is included in selected packages.",
  },
  {
    question: "Is vegetarian or Jain food available?",
    answer:
      "Yes. Chiang Mai has excellent vegetarian and Indian restaurants, and vegetarian or Jain meals can be arranged on tours if requested 24 hours in advance.",
  },
  {
    question: "Can Indian travellers pay in INR?",
    answer:
      "Yes, you can book and pay online in INR before travelling. Carry some Thai baht cash for temple entry fees, markets and snacks.",
  },
  {
    question: "What is the temple dress code in Chiang Mai?",
    answer:
      "Shoulders and knees must be covered at all temples. Carry a scarf or sarong, and be ready to remove your shoes before entering prayer halls.",
  },
  {
    question: "What is the best time of day for these tours?",
    answer:
      "Mornings are cooler and far less crowded. November to February is the most pleasant season; March and April can be hazy due to regional burning.",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const chiangMaiCityTempleTourFaqs: FAQ[] = extend([
  {
    question: "Which temples are covered in this tour?",
    answer:
      "The tour covers Wat Phra That Doi Suthep on the mountain, the ancient Wat Chedi Luang in the Old City, and the forest temple Wat Pha Lat.",
  },
  {
    question: "How many steps are there at Doi Suthep?",
    answer:
      "There are 306 naga staircase steps to the temple. A cable car is available for a small extra fee if you prefer not to climb.",
  },
  {
    question: "How long does the temple tour take?",
    answer:
      "The guided half-day tour takes approximately 4 to 5 hours including transfers, with morning departures recommended.",
  },
  {
    question: "Are entry fees included?",
    answer:
      "Temple entry fees are usually paid on site in Thai baht cash and are modest. Your guide will assist with ticketing at each temple.",
  },
]);

export const chiangMaiDoiInthanonFaqs: FAQ[] = extend([
  {
    question: "How cold does Doi Inthanon get?",
    answer:
      "As Thailand's highest peak, the summit can drop below 10°C even during the day in winter. Carry a jacket or warm layer.",
  },
  {
    question: "What does the full-day tour cover?",
    answer:
      "The summit viewpoint, the royal twin pagodas and gardens, Wachirathan waterfall, a nature trail and a Karen hill tribe village with coffee plantations.",
  },
  {
    question: "How much walking is involved?",
    answer:
      "The nature trail involves an easy 30 to 45 minutes of walking. Waterfall viewpoints can be slippery, so wear grippy closed shoes.",
  },
  {
    question: "Are national park fees included?",
    answer:
      "National park entry fees are typically paid on site in Thai baht cash unless your selected package states they are included.",
  },
]);

export const chiangMaiChiangRaiGoldenTriangleFaqs: FAQ[] = extend([
  {
    question: "How long is the Chiang Rai day trip?",
    answer:
      "It is a long full-day trip — pickup is around 6:30 AM and return to Chiang Mai is late evening, roughly 13 to 14 hours including driving time.",
  },
  {
    question: "What does the day trip include?",
    answer:
      "The White Temple (Wat Rong Khun), the Blue Temple (Wat Rong Suea Ten), the Golden Triangle where Thailand, Laos and Myanmar meet, and a Long Neck Karen village visit.",
  },
  {
    question: "Is there a dress code at the White Temple?",
    answer:
      "Yes, the White Temple enforces a strict dress code — shoulders and knees must be covered. Sarongs may be rented at the entrance if needed.",
  },
  {
    question: "Can I photograph the Long Neck village?",
    answer:
      "Yes, but always ask permission first. Carry Thai baht cash for the village entry contribution and for handicrafts made by the community.",
  },
  {
    question: "Is the trip suitable for children or elderly travellers?",
    answer:
      "It is suitable but tiring due to the long drive. Families with small children or elderly guests may prefer a private vehicle option for flexible breaks.",
  },
]);
