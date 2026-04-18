/**
 * Standard Bangkok activity FAQs based on uploaded brand content.
 * Used across all Bangkok temple/sightseeing/attraction pages.
 */

export interface FAQ {
  question: string;
  answer: string;
}

const baseFaqs: FAQ[] = [
  {
    question: "Is hotel transfer included?",
    answer: "Yes, hotel transfer is included in selected packages depending on the booking option.",
  },
  {
    question: "What is the difference between transfer and no transfer?",
    answer:
      "Transfer packages include hotel pickup and drop-off services, while no-transfer packages require travelers to reach the meeting point independently.",
  },
  {
    question: "Is vegetarian food available?",
    answer:
      "Yes, vegetarian food options are available at nearby restaurants and cafes around the activity location.",
  },
  {
    question: "Can Indians pay in INR?",
    answer:
      "Yes, Indian travelers can book this activity online and pay in INR through supported platforms.",
  },
  {
    question: "What should I wear?",
    answer:
      "Smart casual clothing is recommended, along with modest attire suitable for temple visits (covered shoulders, full-length trousers or long skirts).",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const threeTemplesGrandPalaceFaqs: FAQ[] = extend([
  {
    question: "What time does the tour start?",
    answer: "Hotel pickup is typically between 7:30 AM and 9:00 AM, with the Grand Palace entry around 8:30 AM.",
  },
  {
    question: "Are sleeveless tops allowed inside the Grand Palace?",
    answer: "No. Sleeveless tops, shorts, and short dresses are not permitted inside the Grand Palace and Wat Phra Kaew.",
  },
]);

export const watArunPhoPhraKaewFaqs: FAQ[] = extend([
  {
    question: "How long does the three temple tour last?",
    answer: "The total sightseeing duration is 2 to 4 hours, ending around 12:00 PM.",
  },
  {
    question: "Which three temples are included?",
    answer: "Wat Arun (Temple of Dawn), Wat Pho (Reclining Buddha), and Wat Phra Kaew (Emerald Buddha).",
  },
]);

export const grandPalaceEmeraldFaqs: FAQ[] = extend([
  {
    question: "What are the Grand Palace visiting hours?",
    answer: "The Grand Palace opens at 8:30 AM, with last entry around 3:30 PM. The recommended visit duration is 2 to 3 hours.",
  },
  {
    question: "Why is advance booking recommended?",
    answer:
      "The Grand Palace is one of Bangkok's busiest attractions. Booking online in advance helps avoid long entry queues during peak tourist seasons.",
  },
]);

export const maeklongFloatingMarketFaqs: FAQ[] = extend([
  {
    question: "Why is the train market called the Umbrella Pull-Down Market?",
    answer:
      "Vendors quickly fold their umbrellas and move goods aside moments before a train passes through the narrow track running across the market.",
  },
  {
    question: "What time does the tour start?",
    answer: "Hotel pickup is typically between 6:30 AM and 7:30 AM. Early departure is required to catch the train passing experience.",
  },
  {
    question: "Is the long-tail boat ride included?",
    answer: "An optional long-tail boat ride through the canals is included in selected packages.",
  },
]);

export const bangkokCityBoatTourFaqs: FAQ[] = extend([
  {
    question: "How long is the boat tour?",
    answer: "Total tour duration is approximately 2 to 4 hours depending on canal routes and temple stops included.",
  },
  {
    question: "Which landmarks does the cruise pass?",
    answer: "The river cruise typically passes Wat Arun, the Grand Palace, Wat Phra Kaew, and historic Thonburi district communities.",
  },
  {
    question: "Are sunset cruises available?",
    answer: "Yes, sunset departures (4:30 PM – 6:30 PM) are available in selected packages.",
  },
]);

export const goldenBuddhaMarbleTempleFaqs: FAQ[] = extend([
  {
    question: "How heavy is the Golden Buddha?",
    answer: "The Golden Buddha at Wat Traimit is the world's largest solid gold Buddha statue, weighing over 5.5 tons.",
  },
  {
    question: "Why is Wat Benchamabophit called the Marble Temple?",
    answer: "It was built using Italian Carrara marble, combining traditional Thai architecture with European materials.",
  },
]);

export const seaLifeMadameTussaudsFaqs: FAQ[] = [
  {
    question: "Where is the attraction located?",
    answer: "Both Sea Life Bangkok Ocean World and Madame Tussauds are located inside Siam Paragon shopping complex, easily reachable by BTS Skytrain (Siam Station).",
  },
  {
    question: "How much time is needed for both attractions?",
    answer: "Allow 3 to 4 hours total to enjoy both Sea Life Ocean World and Madame Tussauds comfortably.",
  },
  {
    question: "Is it suitable for children?",
    answer: "Yes, both attractions are family-friendly with interactive zones suitable for children of all ages.",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, vegetarian dining options are widely available throughout the Siam Paragon mall food court.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payment is supported through trusted online booking platforms.",
  },
  {
    question: "Is the combo ticket better than separate tickets?",
    answer: "Yes, the combo ticket offers significant savings compared to purchasing entry tickets separately.",
  },
];

export const cityGemsGalleryFaqs: FAQ[] = extend([
  {
    question: "Is there pressure to buy at the Gems Gallery?",
    answer: "No. The Gems Gallery visit is purely informational, showcasing Thai gemstone craftsmanship. There is no obligation to purchase.",
  },
  {
    question: "How long is this tour?",
    answer: "The total tour duration is approximately 4 hours, ending around 12:30 PM.",
  },
]);

// ============== Additional Bangkok activities ==============

export const safariWorldFaqs: FAQ[] = [
  {
    question: "Is hotel transfer included?",
    answer: "Yes, hotel transfer is included in selected packages.",
  },
  {
    question: "What's included in the Safari World ticket?",
    answer: "Entry to Safari Park (drive-through animal safari) and Marine Park (dolphin show, sea lion show, orangutan show, and bird shows).",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, vegetarian buffet options are available at the in-park restaurants.",
  },
  {
    question: "Is it suitable for children?",
    answer: "Yes, Safari World is one of the most family-friendly attractions in Bangkok.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, Indian travelers can pay in INR through supported booking platforms.",
  },
  {
    question: "How long does the tour take?",
    answer: "A full-day visit is recommended, typically 6 to 8 hours including transfers.",
  },
];

export const dolphinShowFaqs: FAQ[] = [
  {
    question: "Is hotel transfer included?",
    answer: "Yes, hotel transfer is included in selected packages.",
  },
  {
    question: "How long is the dolphin show?",
    answer: "The show typically lasts 45 minutes to 1 hour.",
  },
  {
    question: "Is photography allowed?",
    answer: "Yes, photography is allowed during the show without flash.",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, vegetarian snacks and meals are available at nearby cafes.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through online booking platforms.",
  },
];

export const bangkokSkywalkFaqs: FAQ[] = [
  {
    question: "How high is the Mahanakhon Skywalk?",
    answer: "The observation deck sits at 314 meters, making it one of the tallest skywalks in Thailand.",
  },
  {
    question: "What is the glass tray experience?",
    answer: "It's a transparent glass floor section where you can stand and see straight down to the streets below.",
  },
  {
    question: "What's the best time to visit?",
    answer: "Sunset (around 5:30 PM – 6:30 PM) offers the best views with both daylight and night cityscape.",
  },
  {
    question: "Is hotel transfer included?",
    answer: "Most Skywalk tickets are entry-only without transfer. Easy access via BTS Skytrain (Chong Nonsi Station).",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payment is supported on trusted booking platforms.",
  },
];

export const massageCouponsFaqs: FAQ[] = [
  {
    question: "What types of massage are included?",
    answer: "Coupon packages typically cover Traditional Thai Massage, Foot Reflexology, Aroma Oil Massage, and Herbal Compress treatments.",
  },
  {
    question: "Where can I redeem the coupons?",
    answer: "Coupons are redeemable at participating partner spas across Bangkok.",
  },
  {
    question: "How long is each massage session?",
    answer: "Sessions typically range from 60 to 120 minutes depending on the package.",
  },
  {
    question: "Do I need to book in advance?",
    answer: "Advance reservation at the chosen spa is recommended, especially during peak hours.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through trusted booking platforms.",
  },
];

export const watArunChinatownFaqs: FAQ[] = extend([
  {
    question: "Is this an evening tour?",
    answer: "Yes. The tour is designed to capture Wat Arun illuminated at sunset and Chinatown's vibrant night-market atmosphere.",
  },
  {
    question: "Is street food vegetarian-friendly?",
    answer: "Yes, Chinatown has many vegetarian-friendly stalls including the famous Yaowarat noodle and fruit vendors.",
  },
]);

export const ayutthayaTempleTourFaqs: FAQ[] = extend([
  {
    question: "How far is Ayutthaya from Bangkok?",
    answer: "Ayutthaya is approximately 80 km north of Bangkok, around 1.5 hours by road.",
  },
  {
    question: "Which temples are visited?",
    answer: "Major UNESCO World Heritage temples typically include Wat Mahathat, Wat Phra Si Sanphet, and Wat Chaiwatthanaram.",
  },
  {
    question: "Is lunch included?",
    answer: "Lunch is included in selected packages — please check your booking option.",
  },
]);

export const baiyokeBuffetFaqs: FAQ[] = [
  {
    question: "How high is Baiyoke Sky?",
    answer: "Baiyoke Sky is 309 meters tall, with the buffet on the 76th–78th floors and a 360° revolving observation deck on the 84th floor.",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, the international buffet includes a wide range of vegetarian Thai and Indian options.",
  },
  {
    question: "Is hotel transfer included?",
    answer: "Hotel transfer is included in selected packages depending on the booking option.",
  },
  {
    question: "How long is the buffet experience?",
    answer: "Guests typically enjoy 90 minutes of buffet dining plus access to the observation deck.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through online booking platforms.",
  },
];

export const vivaAlangkaCruiseFaqs: FAQ[] = [
  {
    question: "Where does the cruise depart from?",
    answer: "The Viva Alangka cruise departs from Asiatique The Riverfront pier in Bangkok.",
  },
  {
    question: "What's included in the cruise?",
    answer: "International buffet dinner, live entertainment, scenic Chao Phraya River views, and selected packages include hotel transfer.",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, the buffet includes vegetarian Thai and international dishes.",
  },
  {
    question: "How long is the cruise?",
    answer: "The cruise duration is approximately 2 hours.",
  },
  {
    question: "What should I wear?",
    answer: "Smart casual attire is recommended for the dinner cruise experience.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through trusted booking platforms.",
  },
];

export const ayutthayaSunsetCruiseFaqs: FAQ[] = [
  {
    question: "What does the Ayutthaya sunset cruise include?",
    answer: "Sightseeing of UNESCO World Heritage temples in Ayutthaya followed by a relaxing sunset river cruise back to Bangkok with dinner onboard.",
  },
  {
    question: "How long does the full tour take?",
    answer: "A full-day experience, typically 9 to 10 hours including transfers, temple visits, and the cruise.",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, vegetarian buffet options are served onboard.",
  },
  {
    question: "Is hotel transfer included?",
    answer: "Yes, hotel transfer is included in selected packages.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through online booking platforms.",
  },
];

export const tukTukNightFaqs: FAQ[] = [
  {
    question: "What does the tuk-tuk night tour cover?",
    answer: "A guided evening ride through illuminated Bangkok landmarks, flower markets, Chinatown street food, and night-time temple views.",
  },
  {
    question: "Is the tuk-tuk safe?",
    answer: "Yes, all tours use experienced drivers and follow safe, well-traveled routes.",
  },
  {
    question: "Is street food vegetarian-friendly?",
    answer: "Yes, vegetarian options are available at most street food stops on the route.",
  },
  {
    question: "How long is the tour?",
    answer: "The tour lasts approximately 4 hours during the evening.",
  },
  {
    question: "Is hotel transfer included?",
    answer: "Yes, hotel pickup and drop-off services are included in most packages.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through trusted booking platforms.",
  },
];

export const dreamWorldFaqs: FAQ[] = [
  {
    question: "What is Dream World Bangkok?",
    answer: "A large theme park about 1 hour from central Bangkok featuring rides, Snow Town, water attractions, and live shows.",
  },
  {
    question: "What is Snow Town?",
    answer: "An indoor snow-themed area with ice sculptures and snow-play activities — a popular highlight, especially for families.",
  },
  {
    question: "Is vegetarian food available?",
    answer: "Yes, vegetarian meals are available at the in-park restaurants and food courts.",
  },
  {
    question: "Is hotel transfer included?",
    answer: "Yes, hotel pickup and drop-off services are included in selected packages.",
  },
  {
    question: "How long should I plan to spend?",
    answer: "Plan a full-day visit (around 7 to 8 hours) to enjoy all the rides, shows, and Snow Town.",
  },
  {
    question: "Can Indians pay in INR?",
    answer: "Yes, INR payments are supported through trusted booking platforms.",
  },
];
