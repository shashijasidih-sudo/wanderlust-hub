export interface FAQ {
  question: string;
  answer: string;
}

export const baseFaqs: FAQ[] = [
  {
    question: "Is hotel transfer included?",
    answer:
      "Yes, hotel transfer is included if you select the transfer option during booking. Pickup is available from major Phuket areas like Patong, Kata, Karon and Phuket Town.",
  },
  {
    question: "What is the difference between transfer and no transfer?",
    answer:
      "The transfer option includes hotel pickup and drop-off, while the no-transfer option requires you to reach the pier or venue independently.",
  },
  {
    question: "Is vegetarian food available?",
    answer:
      "Yes, vegetarian meals are available. It is recommended to mention dietary preferences while booking.",
  },
  {
    question: "Can Indians pay in INR?",
    answer:
      "Yes, you can pay in INR before travel — making the booking process convenient and exchange-friendly.",
  },
  {
    question: "What should I wear?",
    answer:
      "Light cotton clothing, swimwear (for water tours), comfortable footwear, sunglasses and sunscreen are recommended.",
  },
];

export const phiPhiMayaKhaiSpeedboatFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Is the national park fee included?",
    answer:
      "Yes, this package includes the Phi Phi National Park entry fee, so no extra payment is required at the pier.",
  },
  {
    question: "Is snorkeling equipment provided?",
    answer:
      "Yes, masks, snorkels and life jackets are provided. Beginners can comfortably snorkel under guide supervision.",
  },
];

export const phiPhiBigBoatFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Is this tour suitable for seniors and children?",
    answer:
      "Yes, the big boat is far more stable than a speedboat, making it ideal for families with children, senior travelers and those prone to seasickness.",
  },
  {
    question: "Where does the cruise depart from?",
    answer: "The cruise departs from Rassada Pier, Phuket's main island-tour departure hub.",
  },
];

export const jamesBondSeaCanoeFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Do I need canoeing experience?",
    answer:
      "No experience is needed. Trained local paddlers navigate the canoes through sea caves and lagoons while you relax and enjoy the scenery.",
  },
  {
    question: "Is Koh Panyee Floating Village included?",
    answer:
      "Most itineraries include a stop at Koh Panyee Floating Village, where lunch is usually served.",
  },
];

export const phuketCityTourFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Do I need to dress modestly for the temples?",
    answer:
      "Yes, Wat Chalong is a religious site. Please cover shoulders and knees, and wear footwear that's easy to remove.",
  },
  {
    question: "Which landmarks are covered?",
    answer:
      "The tour typically covers Big Buddha Phuket, Wat Chalong, Phuket Old Town and scenic viewpoints like Karon Viewpoint.",
  },
];

export const phuketFantaSeaFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Is the dinner buffet vegetarian-friendly?",
    answer:
      "Yes, the Golden Kinnaree Buffet offers vegetarian options. Please mention preferences while booking.",
  },
  {
    question: "Is photography allowed inside the show?",
    answer:
      "Photography is not allowed inside the theatre during the performance. You can take pictures in the cultural park area before the show.",
  },
];

export const simonCabaretFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Is the show family-friendly?",
    answer: "Yes, Simon Cabaret is suitable for families and children — it's a glamorous theatrical performance.",
  },
  {
    question: "How long is the show?",
    answer: "The show runs for approximately 60–75 minutes with multiple themed performance segments.",
  },
];

export const tigerKingdomFaqs: FAQ[] = [
  ...baseFaqs,
  {
    question: "Is the interaction with tigers safe?",
    answer:
      "Yes, professional trainers supervise every interaction. Visitors receive clear safety briefings before entering enclosures.",
  },
  {
    question: "Can children participate?",
    answer:
      "Children may have age or height restrictions for larger tiger enclosures. Please check eligibility while booking.",
  },
];
