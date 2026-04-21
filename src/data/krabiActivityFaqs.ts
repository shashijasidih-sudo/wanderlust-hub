/**
 * Krabi activity FAQs based on the uploaded brand content (krabi_info.docx).
 * Each export is per-activity. Standard answers shared via baseFaqs.
 */
export interface FAQ {
  question: string;
  answer: string;
}

const baseFaqs: FAQ[] = [
  {
    question: "Is hotel transfer included?",
    answer:
      "Yes, hotel pickup and drop-off are included when you select the transfer option while booking the tour.",
  },
  {
    question: "What is the difference between transfer and no transfer?",
    answer:
      "The transfer option includes hotel pickup and drop-off, while the no transfer option requires travelers to reach the pier or meeting point on their own. The no-transfer option is usually slightly cheaper.",
  },
  {
    question: "Is vegetarian food available?",
    answer:
      "Yes, vegetarian meals can be arranged on request. We recommend mentioning your dietary preference at the time of booking so the operator can prepare in advance.",
  },
  {
    question: "Can Indians pay in INR?",
    answer:
      "Yes, you can book and pay in INR through Yellodae before traveling. No need to carry large amounts of Thai Baht for the tour itself.",
  },
  {
    question: "What should I wear?",
    answer:
      "Smart casual clothing is recommended. Carry swimwear, sunglasses, sunscreen and comfortable footwear suitable for boats and beach walks.",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const phiPhiKrabiSpeedboatFaqs: FAQ[] = extend([
  {
    question: "What islands and beaches are covered?",
    answer:
      "The tour covers Maya Bay, Viking Cave, Monkey Beach, Loh Samah Bay and snorkeling points around Phi Phi Don.",
  },
  {
    question: "Are national park entry fees included?",
    answer:
      "National park fees may or may not be included depending on the package selected — please check the inclusions on this page or confirm at the time of booking.",
  },
]);

export const jamesBondIslandKrabiFaqs: FAQ[] = extend([
  {
    question: "Do we visit the Koh Panyee floating village?",
    answer:
      "Yes, the long-tailed boat itinerary typically includes a stop at the famous Koh Panyee Muslim floating village where lunch is served.",
  },
  {
    question: "Is canoeing through sea caves included?",
    answer:
      "Some itineraries include canoeing through hidden lagoons and sea caves. Please check the inclusions on this page for your selected package.",
  },
]);

export const hongIslandsLongtailFaqs: FAQ[] = extend([
  {
    question: "Can we enter the Hong Island lagoon?",
    answer:
      "Yes, long-tailed boats enter the hidden Hong Island lagoon through a narrow limestone passage — one of the most photographed spots in Krabi.",
  },
  {
    question: "Are national park fees included?",
    answer:
      "Than Bok Khorani National Park fees may be included or payable separately depending on the booking option — please confirm during reservation.",
  },
]);

export const fourIslandsLongtailFaqs: FAQ[] = extend([
  {
    question: "Will we be able to walk the Tub Island sandbar?",
    answer:
      "Walking the natural sandbar between Tub, Mor and Chicken islands depends on tide timings. Morning departures generally offer the best chance to experience it.",
  },
  {
    question: "Which four islands are covered?",
    answer:
      "Phra Nang Cave Beach, Chicken Island, Tub Island and Poda Island — all reached by traditional Thai long-tailed boat.",
  },
]);

export const hotSpringEmeraldPoolFaqs: FAQ[] = extend([
  {
    question: "How many steps to climb at Tiger Cave Temple?",
    answer:
      "Approximately 1,260 steps lead to the summit viewpoint. Visitors who prefer not to climb can still enjoy the temple grounds and meditation areas at the base.",
  },
  {
    question: "Is Tiger Cave Temple a religious site?",
    answer:
      "Yes — please dress modestly with shoulders and knees covered. Carry a light scarf or shawl for temple entry.",
  },
]);

export const sevenIslandsLongtailFaqs: FAQ[] = extend([
  {
    question: "Will we see the bioluminescent plankton?",
    answer:
      "Plankton swimming is subject to sea conditions, season and moon phase. It is typically visible from October to May on darker nights.",
  },
  {
    question: "What does the BBQ dinner include?",
    answer:
      "Freshly grilled seafood, chicken, vegetables, rice and fruits served on the beach. Vegetarian BBQ options are available on request at the time of booking.",
  },
]);
