/**
 * Pattaya activity FAQs based on the uploaded brand content (Pattaya_info.docx).
 * Each export is per-activity. Standard answers are shared via baseFaqs.
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
      "Transfer packages include hotel pickup and drop-off services, while no-transfer packages require visitors to reach the venue independently using taxi, tuk-tuk, or ride-hailing apps such as Grab or Bolt.",
  },
  {
    question: "Is vegetarian food available?",
    answer:
      "Yes, vegetarian food options are available at nearby restaurants, cafes and selected in-venue food courts.",
  },
  {
    question: "Can Indians pay in INR?",
    answer:
      "Yes, Indian travelers can book this activity online and pay in INR through supported booking platforms before arriving in Thailand.",
  },
  {
    question: "What should I wear?",
    answer:
      "Smart casual clothing with comfortable walking footwear is recommended.",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const coralIslandPattayaFaqs: FAQ[] = extend([
  {
    question: "What time does the Coral Island tour start?",
    answer:
      "Hotel pickup is typically between 8:00 AM and 9:00 AM, with the island visit from 10:00 AM to 3:00 PM and return around 4:00 PM.",
  },
  {
    question: "Are water sports included?",
    answer:
      "Water sports such as parasailing, jet ski and banana boat rides are optional add-ons available directly on the island.",
  },
  {
    question: "What should I carry?",
    answer:
      "Carry swimwear, sunscreen, sunglasses, an extra change of clothes for water activities, and a waterproof bag.",
  },
]);

export const alcazarShowPattayaFaqs: FAQ[] = extend([
  {
    question: "What are the show timings?",
    answer:
      "Daily shows at 6:30 PM, 8:00 PM, and 9:30 PM. The 8:00 PM show is the most popular slot.",
  },
  {
    question: "How long is the Alcazar Cabaret Show?",
    answer:
      "The performance lasts approximately 60 to 75 minutes. Arrive 15–20 minutes before showtime.",
  },
  {
    question: "Is the show family-friendly?",
    answer:
      "Yes. Alcazar is an artistic, entertainment-focused cabaret suitable for couples, families with children, and groups.",
  },
  {
    question: "Is photography allowed inside the theater?",
    answer:
      "Photography during the performance is generally restricted, but visitors can take photos with performers outside the theater after the show for a small tip.",
  },
]);

export const nongNoochGardenFaqs: FAQ[] = extend([
  {
    question: "How long should I plan to spend at Nong Nooch?",
    answer:
      "Plan 3 to 4 hours for a standard visit, or 4 to 5 hours if you include lunch and the cultural and elephant shows.",
  },
  {
    question: "What are the cultural and elephant show timings?",
    answer:
      "Thai cultural shows run around 10:30 AM and 1:30 PM. Elephant shows operate in late morning and early afternoon sessions.",
  },
  {
    question: "Are there facilities for families with children?",
    answer:
      "Yes — themed gardens, the elevated skywalk, dinosaur valley and elephant performances are especially popular with children.",
  },
]);

export const underwaterWorldPattayaFaqs: FAQ[] = extend([
  {
    question: "What are the opening hours?",
    answer:
      "Underwater World Pattaya is open daily from 9:00 AM to 6:00 PM, with last entry around 5:30 PM.",
  },
  {
    question: "How long does a visit take?",
    answer:
      "Allow 1.5 to 2 hours for a standard visit, or 2 to 3 hours if you want to attend feeding shows.",
  },
  {
    question: "When are the feeding shows?",
    answer:
      "Coral reef feeding takes place in the late morning, stingray feeding around midday, and shark feeding in the afternoon.",
  },
]);

export const ramayanaWaterParkFaqs: FAQ[] = extend([
  {
    question: "What time does Ramayana Water Park open?",
    answer:
      "The park is open daily from 10:00 AM to 6:00 PM. Plan a half-day (4–5 hours) or full-day (6–7 hours) visit.",
  },
  {
    question: "What should I bring?",
    answer:
      "Carry swimwear, sunscreen, sunglasses and waterproof footwear. Lockers and towel rentals are available inside the park.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "Yes — there is a dedicated AquaSplash children's water playground alongside the thrill rides and wave pool.",
  },
]);

export const artInParadiseFaqs: FAQ[] = extend([
  {
    question: "What are the opening hours?",
    answer:
      "Art in Paradise Pattaya is open daily from 10:00 AM to 7:00 PM, with last entry around 6:00 PM.",
  },
  {
    question: "How long does a visit take?",
    answer:
      "Plan 2 to 3 hours for a standard visit, or 3 to 4 hours if you want to take photos in every gallery.",
  },
  {
    question: "Is photography allowed?",
    answer:
      "Yes — visitors are encouraged to take unlimited photos. Bring a charged smartphone or camera with extra storage.",
  },
]);

export const sanctuaryOfTruthFaqs: FAQ[] = extend([
  {
    question: "What is special about Sanctuary of Truth?",
    answer:
      "It is a hand-carved all-wood temple over 100 meters tall, built without metal nails, featuring sculptures inspired by Hindu and Buddhist mythology.",
  },
  {
    question: "Are there optional add-on activities?",
    answer:
      "Yes — selected packages include traditional boat rides around the sanctuary, horse carriage rides, and elephant ride experiences.",
  },
  {
    question: "Is a guided tour included?",
    answer:
      "Yes, guided cultural tours are included with entry tickets and explain the meaning behind the sculptures and architecture.",
  },
]);

export const miniSiamPattayaFaqs: FAQ[] = extend([
  {
    question: "What can I see at Mini Siam?",
    answer:
      "Mini Siam features scaled replicas of Thai landmarks like Wat Arun, plus a Mini Europe zone with global icons such as the Eiffel Tower and the Statue of Liberty.",
  },
  {
    question: "Is it suitable for families?",
    answer:
      "Yes — the open-air landscaped park is a great half-day, family-friendly attraction with photo opportunities throughout.",
  },
]);

export const pattayaFloatingMarketFaqs: FAQ[] = extend([
  {
    question: "What are the opening hours?",
    answer:
      "Pattaya Floating Market is open daily from 9:00 AM to 7:00 PM. Allow 2–3 hours for a standard visit, or 3–4 hours including the boat ride and shows.",
  },
  {
    question: "Is the canal boat ride included?",
    answer:
      "A traditional long-tail boat ride is included in selected packages and is highly recommended for the best market views.",
  },
  {
    question: "What can I do at the floating market?",
    answer:
      "Explore four regional Thai cultural zones, shop for handmade souvenirs, try local street food, and watch traditional dance and craft demonstrations.",
  },
]);

export const lostInNightlightFaqs: FAQ[] = extend([
  {
    question: "What does this nightlife tour include?",
    answer:
      "A guided evening walking tour through Pattaya's Walking Street with curated street food tastings, beverage tastings, and insider commentary from a local guide.",
  },
  {
    question: "What are the timings?",
    answer:
      "The tour runs from approximately 7:30 PM to 10:00 PM. Arrive 10–15 minutes early at the meeting point for smooth check-in.",
  },
  {
    question: "Is alcohol included?",
    answer:
      "Selected packages include local Thai beer or mocktail tastings. A valid ID is required for packages with alcoholic tastings.",
  },
  {
    question: "Is this tour suitable for solo travelers?",
    answer:
      "Yes — it's especially popular with solo travelers and first-time visitors who want a safe, structured introduction to Pattaya nightlife.",
  },
]);

export const pubCrawlPattayaFaqs: FAQ[] = extend([
  {
    question: "What is the Sunset Club & Pub Crawl experience?",
    answer:
      "A guided evening experience starting at a sunset rooftop venue, followed by a curated pub crawl through Pattaya's Drinking Street with live music and entertainment.",
  },
  {
    question: "Is this tour suitable for groups?",
    answer:
      "Yes — it's ideal for solo travelers, couples and groups looking to enjoy Pattaya nightlife with a local guide and built-in safety.",
  },
  {
    question: "Are drinks included?",
    answer:
      "Selected packages include welcome drinks and venue entry. Additional drinks can be purchased at each stop.",
  },
]);

// Reused for Pattaya Big Buddha & Gems Gallery
export const pattayaBigBuddhaGemsFaqs: FAQ[] = extend([
  {
    question: "What is included in this half-day tour?",
    answer:
      "A guided visit to Big Buddha Hill (Wat Phra Yai) for panoramic views of Pattaya Bay, followed by an informational tour of the Gems Gallery and Museum.",
  },
  {
    question: "Is there pressure to buy at the Gems Gallery?",
    answer:
      "No. The Gems Gallery visit is purely informational — there is no obligation to purchase anything.",
  },
]);

// Pattaya Dolphinarium
export const pattayaDolphinariumFaqs: FAQ[] = extend([
  {
    question: "How long is the dolphin show?",
    answer:
      "The interactive dolphin and seal show typically lasts 45 minutes to 1 hour inside an air-conditioned arena.",
  },
  {
    question: "Is photography allowed?",
    answer:
      "Yes, photography is allowed during the show without flash. Photo opportunities with the dolphins are available after the performance.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "Yes — the show is designed to be entertaining and educational for the whole family.",
  },
]);

// Muay Thai live experience
export const muayThaiPattayaFaqs: FAQ[] = extend([
  {
    question: "How long is the Muay Thai performance?",
    answer:
      "The live show typically lasts around 90 minutes including the traditional Wai Kru ritual and multiple rounds.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "Yes — the show is theatrical and family-friendly. It introduces visitors to Thailand's national sport in a safe, controlled stadium setting.",
  },
  {
    question: "Where is the venue?",
    answer:
      "Performances take place at a dedicated Muay Thai stadium in Pattaya. Hotel transfer is available with selected packages.",
  },
]);
