/**
 * Dubai activity FAQs — Indian traveller focused.
 * Shared base answers plus per-activity extras.
 */

export interface FAQ {
  question: string;
  answer: string;
}

const baseFaqs: FAQ[] = [
  {
    question: "Is hotel pickup and drop-off included?",
    answer:
      "Yes, hotel transfers are included in selected packages. Sharing transfers cover most Dubai city hotels; Deira, Bur Dubai, Downtown, Marina and JBR are the standard pickup zones.",
  },
  {
    question: "Can Indians pay in INR?",
    answer:
      "Yes. You can book online and pay in INR with UPI, Indian debit/credit cards or net banking before you fly — no forex mark-up surprises at the venue.",
  },
  {
    question: "Is Indian and vegetarian food available?",
    answer:
      "Yes. Dubai has one of the largest Indian food scenes outside India — pure-veg, Jain and South Indian options are available in Karama, Bur Dubai, Al Rigga and inside most malls.",
  },
  {
    question: "What should I wear in Dubai?",
    answer:
      "Light, breathable clothing works best. Dubai is liberal but modest dressing (shoulders and knees covered) is expected at mosques, souks and heritage areas. Carry a light layer for heavily air-conditioned malls and venues.",
  },
  {
    question: "How do I get around if my package has no transfer?",
    answer:
      "Use Careem or Uber, the Dubai Metro (Red and Green lines) or a metered RTA taxi. A Nol card makes metro and bus travel easy and cheap.",
  },
];

const extend = (extra: FAQ[]): FAQ[] => [...baseFaqs, ...extra];

export const desertSafariFaqs: FAQ[] = extend([
  {
    question: "What time does the desert safari start and end?",
    answer:
      "Pickup is usually between 2:30 PM and 3:30 PM, with dune bashing at sunset, camp activities and BBQ dinner, and hotel drop-off around 9:00–9:30 PM.",
  },
  {
    question: "Is dune bashing safe for kids and senior citizens?",
    answer:
      "Dune bashing is done by licensed 4x4 drivers on marked routes. It is not recommended for pregnant women, people with back or heart conditions, or infants — you can request a gentler ride or skip it and go straight to the camp.",
  },
  {
    question: "Is vegetarian and Jain food available at the desert camp?",
    answer:
      "Yes. The BBQ dinner buffet always includes vegetarian curries, salads, breads and desserts. Jain meals can be arranged if you inform us at least 24 hours before the tour.",
  },
  {
    question: "What is included at the desert camp?",
    answer:
      "Camel rides, sandboarding, henna, Arabic coffee and dates, belly dance, tanoura and fire shows, plus unlimited soft drinks with the BBQ dinner buffet.",
  },
]);

export const dhowCruiseFaqs: FAQ[] = extend([
  {
    question: "How long is the dhow cruise?",
    answer:
      "The cruise runs for approximately 2 hours, typically boarding around 8:00 PM and returning by 10:30 PM. Arrive 20–30 minutes before departure.",
  },
  {
    question: "What is the difference between lower deck and upper deck?",
    answer:
      "The lower deck is fully air-conditioned with indoor seating — ideal in summer. The upper deck is open-air with the best skyline views and photos, and is more comfortable between November and March.",
  },
  {
    question: "Is dinner included and are there vegetarian options?",
    answer:
      "Yes, an international buffet dinner is included with plenty of vegetarian Indian, Arabic and continental dishes, plus soft drinks and water.",
  },
  {
    question: "Is there live entertainment on board?",
    answer:
      "Yes — tanoura dance, live music and a photo session are part of the cruise. Alcohol is not served on standard dhow cruises.",
  },
]);

export const burjKhalifaFaqs: FAQ[] = extend([
  {
    question: "What is the difference between prime and non-prime hours?",
    answer:
      "Prime hours (roughly 4:30 PM to 7:00 PM) cover the sunset window and cost more. Non-prime hours are morning and later-night slots — the same 124th and 125th floor access at a lower price with fewer crowds.",
  },
  {
    question: "Do I need to book a specific time slot?",
    answer:
      "Yes. Burj Khalifa entry is by timed slot. Reach the At The Top entrance on the Lower Ground floor of Dubai Mall 30 minutes before your slot.",
  },
  {
    question: "Can I see the Dubai Fountain show from the observation deck?",
    answer:
      "Yes — the fountain show runs every 30 minutes in the evening and is visible from the 124th floor terrace, though it looks best from the Dubai Mall waterfront.",
  },
  {
    question: "Are tickets refundable if I change my plans?",
    answer:
      "Free cancellation is available up to 48 hours before your slot. Within 48 hours the ticket is non-refundable as the slot is blocked with the attraction.",
  },
]);

export const dubaiCityTourFaqs: FAQ[] = extend([
  {
    question: "How long is the Dubai city tour?",
    answer:
      "The guided city tour runs approximately 4 to 5 hours with hotel pickup and drop-off, covering both old and new Dubai.",
  },
  {
    question: "What does the city tour cover?",
    answer:
      "Photo stops at Burj Al Arab and Jumeirah Mosque, the Dubai Frame, Al Fahidi heritage district, Dubai Creek abra ride, and the Gold and Spice Souks.",
  },
  {
    question: "Are attraction entry tickets included?",
    answer:
      "The tour is a guided sightseeing and photo-stop experience. Entry tickets to Burj Khalifa, Dubai Frame or the Aquarium are optional add-ons you can book with us separately.",
  },
]);

export const dubaiMallCityTourFaqs: FAQ[] = extend([
  {
    question: "How much free time do I get at Dubai Mall?",
    answer:
      "Most packages include 2 to 3 hours of free time at Dubai Mall — enough for shopping, the Aquarium facade, the ice rink and the evening Dubai Fountain show.",
  },
  {
    question: "Can I stay back at Dubai Mall after the tour?",
    answer:
      "Yes, but then the return transfer is not applicable. Let your guide know in advance; a Careem or taxi back to most city hotels costs about AED 25–60.",
  },
]);

export const dubaiAquariumFaqs: FAQ[] = extend([
  {
    question: "What are the opening hours?",
    answer:
      "Dubai Aquarium & Underwater Zoo inside Dubai Mall is open daily from 10:00 AM to 10:00 PM, with last entry about 45 minutes before closing.",
  },
  {
    question: "How long does the visit take?",
    answer:
      "Allow 1.5 to 2 hours for the tunnel walk, Underwater Zoo and Penguin Cove.",
  },
  {
    question: "Is Penguin Cove included in the ticket?",
    answer:
      "Yes, this package includes the Penguin Cove experience along with the 48-metre tunnel and Underwater Zoo levels.",
  },
]);

export const dubaiDolphinShowFaqs: FAQ[] = extend([
  {
    question: "How long is the dolphin and seal show?",
    answer:
      "The show at Dubai Dolphinarium in Creek Park lasts around 45 minutes to 1 hour in an indoor air-conditioned arena.",
  },
  {
    question: "Is it suitable for young children?",
    answer:
      "Yes — it is one of Dubai's most family-friendly indoor attractions and works well for toddlers and school-age kids.",
  },
  {
    question: "Is photography allowed?",
    answer:
      "Yes, photography without flash is allowed during the show. Paid photo opportunities with the dolphins are available afterwards.",
  },
]);

export const dubaiFountainShowFaqs: FAQ[] = extend([
  {
    question: "What are the Dubai Fountain show timings?",
    answer:
      "Shows run every 30 minutes from around 6:00 PM to 11:00 PM daily, with additional afternoon shows at 1:00 PM and 1:30 PM (except Fridays).",
  },
  {
    question: "What is the lake ride?",
    answer:
      "The Dubai Fountain Lake Ride puts you on a traditional abra on Burj Lake, right beside the fountain jets — the closest possible view of the show.",
  },
  {
    question: "Is the fountain show itself free to watch?",
    answer:
      "Watching from the Dubai Mall waterfront is free. This ticket is for the boardwalk or lake ride experience, which gives a much closer, unobstructed view.",
  },
]);

export const globalVillageFaqs: FAQ[] = extend([
  {
    question: "When is Global Village open?",
    answer:
      "Global Village is a seasonal attraction, typically open from late October to April, from 4:00 PM to midnight (later on weekends). It is closed during the summer months.",
  },
  {
    question: "What can I do at Global Village?",
    answer:
      "Explore 90+ country pavilions with shopping and street food, a Carnaval funfair, stunt shows, live concerts and a nightly fireworks display.",
  },
  {
    question: "Is there Indian food and shopping?",
    answer:
      "Yes — the India pavilion is one of the largest, with Indian street food, textiles, handicrafts and jewellery.",
  },
]);

export const miracleGardenFaqs: FAQ[] = extend([
  {
    question: "When is Miracle Garden open?",
    answer:
      "Dubai Miracle Garden is seasonal, usually open from mid-November to late May, from 9:00 AM to 9:00 PM on weekdays and until 11:00 PM on weekends.",
  },
  {
    question: "How long should I plan for the visit?",
    answer:
      "Allow 2 to 3 hours to walk the floral displays, the Emirates A380 flower structure and the heart tunnels comfortably.",
  },
  {
    question: "Is it good for kids and photos?",
    answer:
      "Yes — it is highly photogenic and stroller-friendly. Visit early morning or after sunset to avoid the midday heat.",
  },
]);

export const abuDhabiCityTourFaqs: FAQ[] = extend([
  {
    question: "How long is the Abu Dhabi day trip from Dubai?",
    answer:
      "It is a full-day tour of roughly 10 to 12 hours, with hotel pickup around 8:00 AM and return to Dubai by 8:00–9:00 PM.",
  },
  {
    question: "What is the dress code for Sheikh Zayed Grand Mosque?",
    answer:
      "Strictly modest: ankle-length loose clothing, long sleeves and a headscarf for women; long trousers and sleeved shirts for men. Abayas are available at the mosque entrance.",
  },
  {
    question: "What does the Abu Dhabi tour cover?",
    answer:
      "Sheikh Zayed Grand Mosque, the Corniche, Emirates Palace photo stop, Heritage Village and a drive past Yas Island and Saadiyat Island.",
  },
]);

export const abuDhabiFerrariWorldFaqs: FAQ[] = extend([
  {
    question: "How much time do I get at Ferrari World?",
    answer:
      "Most packages include 3 to 4 hours at Ferrari World Yas Island after the Abu Dhabi city sightseeing portion.",
  },
  {
    question: "Is Formula Rossa suitable for everyone?",
    answer:
      "Formula Rossa is the world's fastest roller coaster (240 km/h) with a minimum height requirement of 130 cm. There are 20+ gentler family rides for kids and non-thrill seekers.",
  },
  {
    question: "Is food included at Ferrari World?",
    answer:
      "Food is not included in the standard ticket, but the park has multiple restaurants with vegetarian and Indian-friendly options.",
  },
]);
