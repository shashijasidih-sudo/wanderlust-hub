import { ReactNode } from "react";
import type { TransferFAQ, TransferGalleryImage } from "@/components/TransferBooking";

import cityKrabi from "@/assets/city-krabi.jpg";
import cityPhuket from "@/assets/city-phuket.jpg";
import krabiBeach from "@/assets/krabi-beach-woman-1.jpg";
import krabiBoat from "@/assets/krabi-boat-tour-1.jpg";
import krabiLongtail from "@/assets/krabi-longtail-boats-1.jpg";
import krabiViewpoint from "@/assets/krabi-island-viewpoint-1.jpg";
import krabiTemple from "@/assets/krabi-temple-woman-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";
import krabiSailboat from "@/assets/krabi-sailboat-1.jpg";
import phuketMaiKhao from "@/assets/phuket-mai-khao-beach-plane.jpg";
import phuketTiger from "@/assets/phuket-tiger-1.jpg";
import phuketViewpoint from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketLongtailBeach from "@/assets/phuket-longtail-boats-beach-1.jpg";
import phuketBigBoat from "@/assets/phuket-big-boat-1.jpg";

// ---------- Galleries ----------
const kbvToPhuketGallery: TransferGalleryImage[] = [
  { src: krabiSpeedboat, alt: "Krabi International Airport KBV pickup heading to Phuket" },
  { src: krabiBeach, alt: "Krabi coast en route to Phuket hotel" },
  { src: phuketLongtailBeach, alt: "Phuket beach hotel arrival" },
  { src: cityPhuket, alt: "Phuket city hotel drop-off after KBV airport pickup" },
];

const krabiHotelKbvGallery: TransferGalleryImage[] = [
  { src: cityKrabi, alt: "Krabi hotel pickup heading to KBV airport" },
  { src: krabiLongtail, alt: "Ao Nang area drive to Krabi airport" },
  { src: krabiViewpoint, alt: "Krabi viewpoint en route to airport" },
  { src: krabiSpeedboat, alt: "Krabi International Airport KBV drop-off" },
];

const krabiToPhuketGallery: TransferGalleryImage[] = [
  { src: cityKrabi, alt: "Krabi hotel pickup for direct Phuket transfer" },
  { src: krabiBeach, alt: "Krabi Ao Nang departure to Phuket" },
  { src: phuketLongtailBeach, alt: "Phuket beach hotel arrival" },
  { src: cityPhuket, alt: "Phuket hotel drop-off after Krabi to Phuket transfer" },
];

const krabiPhuketCityTourGallery: TransferGalleryImage[] = [
  { src: cityKrabi, alt: "Krabi hotel pickup for Phuket city tour combo" },
  { src: phuketTiger, alt: "Tiger Kingdom Phuket city tour stop" },
  { src: phuketViewpoint, alt: "Karon viewpoint Phuket city tour" },
  { src: cityPhuket, alt: "Phuket hotel drop-off after city tour" },
];

const krabiToHktGallery: TransferGalleryImage[] = [
  { src: cityKrabi, alt: "Krabi hotel pickup heading to HKT Phuket airport" },
  { src: krabiBoat, alt: "Krabi coast on way to Phuket airport" },
  { src: phuketBigBoat, alt: "Phang Nga drive en route to Phuket airport" },
  { src: phuketMaiKhao, alt: "Phuket International Airport HKT drop-off" },
];

const kbvToAoNangGallery: TransferGalleryImage[] = [
  { src: krabiSpeedboat, alt: "Krabi International Airport KBV pickup for Ao Nang" },
  { src: krabiKayaks, alt: "Drive to Ao Nang Krabi from airport" },
  { src: krabiSailboat, alt: "Ao Nang sailboat coastline arrival" },
  { src: cityKrabi, alt: "Ao Nang Krabi hotel drop-off" },
];

// ---------- Reusable SEO blocks ----------
const IndianTravelersBlock = () => (
  <>
    <h3>Why Indian Travelers Prefer This Transfer</h3>
    <ul>
      <li>INR pricing for easy budgeting before travel</li>
      <li>Pre-trip WhatsApp support on +91 7061710810</li>
      <li>No language barrier — driver briefed for Indian families</li>
      <li>Comfortable for elderly parents, kids and honeymoon couples</li>
      <li>Plenty of luggage space for shopping bags</li>
      <li>Vegetarian-friendly stop suggestions on long routes</li>
    </ul>
  </>
);

const KeywordsBlock = ({ items }: { items: string[] }) => (
  <>
    <h3>Top Search Keywords Covered</h3>
    <p className="text-sm">{items.join(" • ")}</p>
  </>
);

// ---------- Per-transfer SEO entries ----------
type SEOEntry = {
  newSlug: string;
  oldSlug: string;
  gallery: TransferGalleryImage[];
  faqs: TransferFAQ[];
  seoContent: ReactNode;
};

export const krabiTransferSEO: Record<string, SEOEntry> = {
  // 1 — Krabi Airport (KBV) → Phuket Hotel
  "krabi-kbv-airport-phuket-pickup": {
    newSlug: "/thailand/krabi/krabi-airport-to-phuket-hotel-transfer",
    oldSlug: "/thailand/krabi/kbv-airport-phuket-pickup",
    gallery: kbvToPhuketGallery,
    seoContent: (
      <>
        <h2>Krabi International Airport (KBV) to Phuket Hotel Private Transfer</h2>
        <p>
          A private transfer from Krabi International Airport (KBV) to your Phuket hotel is the most comfortable way to combine these two iconic Andaman destinations. Many travelers fly into Krabi but stay in Phuket — and a private cab covers the ~165 km route in roughly 3 to 3.5 hours through scenic Phang Nga countryside, mangroves and limestone karst views.
        </p>
        <p>
          Skip shared minivans, ferry transfers and luggage hassles. Your driver greets you at KBV arrivals, helps with bags and takes you directly to your Phuket hotel in Patong, Karon, Kata, Kamala, Bangtao or Phuket Town.
        </p>

        <h3>Why Choose a Private Transfer from Krabi Airport to Phuket</h3>
        <ul>
          <li>Direct meet & greet at KBV airport arrivals</li>
          <li>Door-to-door drop-off across all Phuket beach areas</li>
          <li>Air-conditioned Sedan, SUV or Mini-Van</li>
          <li>Fixed pricing with no hidden charges or fare bargaining</li>
          <li>Free flight tracking — no penalty if your flight is delayed</li>
          <li>Luggage assistance and child-friendly seating</li>
          <li>WhatsApp support before arrival in Krabi</li>
        </ul>

        <h3>KBV Airport to Phuket Hotel Distance and Travel Time</h3>
        <ul>
          <li>KBV → Patong Beach: ~180 km, ~3.5 hrs</li>
          <li>KBV → Karon / Kata: ~185 km, ~3.5 hrs</li>
          <li>KBV → Phuket Town: ~165 km, ~3 hrs</li>
          <li>KBV → Bangtao / Laguna: ~175 km, ~3.25 hrs</li>
        </ul>

        <h3>Vehicle Options</h3>
        <h4>Sedan</h4>
        <ul><li>Couples and solo travelers with 2–3 bags</li></ul>
        <h4>SUV</h4>
        <ul><li>Families with kids and 4 bags</li></ul>
        <h4>Mini-Van</h4>
        <ul><li>Groups of 6–10 with multiple suitcases</li></ul>

        <h3>Meet and Greet at Krabi Airport</h3>
        <p>Your driver waits at the KBV arrival hall with a name board displaying your name. Free waiting time is included after landing so you can clear immigration and baggage without rushing.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Krabi airport to Phuket taxi",
          "KBV to Patong private transfer",
          "Krabi airport Phuket hotel cab India",
          "KBV to Phuket price INR",
          "Krabi to Phuket airport transfer",
        ]} />
      </>
    ),
    faqs: [
      { question: "Where will the driver wait at Krabi Airport?", answer: "The driver waits at the KBV arrival hall with a name board. Free waiting time is included after landing." },
      { question: "How long does it take from KBV to Patong?", answer: "Roughly 3.5 hours depending on traffic and your hotel location." },
      { question: "Is night pickup available?", answer: "Yes, transfers run 24/7. A small night surcharge applies between 12:00 AM and 6:00 AM." },
      { question: "Can I pay in INR?", answer: "Yes, you can pay in INR online before travel — convenient for Indian families." },
      { question: "Are toilet/snack stops included?", answer: "Yes, the driver makes 1–2 brief rest stops at clean petrol stations on the way." },
    ],
  },

  // 2 — Krabi Hotel → Krabi Airport (KBV)
  "krabi-hotel-kbv-airport": {
    newSlug: "/thailand/krabi/krabi-hotel-to-krabi-airport-transfer",
    oldSlug: "/thailand/krabi/krabi-hotel-kbv-airport",
    gallery: krabiHotelKbvGallery,
    seoContent: (
      <>
        <h2>Krabi Hotel to Krabi International Airport (KBV) Private Transfer</h2>
        <p>
          End your Krabi holiday stress-free with a private hotel-to-airport drop-off to Krabi International Airport (KBV). Your driver arrives at your hotel lobby on time, helps with luggage and takes you directly to KBV without shared stops or detours. The drive is short — typically 30–60 minutes depending on your hotel area.
        </p>

        <h3>Why Pre-Book Your Departure Transfer</h3>
        <ul>
          <li>Guaranteed on-time pickup — no last-minute taxi search</li>
          <li>Fixed price even during late night and early morning hours</li>
          <li>Door-to-door comfort with luggage assistance</li>
          <li>Air-conditioned Sedan, SUV or Mini-Van</li>
          <li>Pickup time recommended 3 hours before international flight</li>
        </ul>

        <h3>Recommended Pickup Time From Major Krabi Areas</h3>
        <ul>
          <li>Ao Nang: 2.5 hours before flight (~45 min drive)</li>
          <li>Krabi Town: 2.5 hours before flight (~30 min drive)</li>
          <li>Klong Muang / Tubkaek: 3 hours before flight (~60 min drive)</li>
          <li>Railay (via boat to Ao Nang pier): 4 hours before flight</li>
        </ul>

        <h3>Vehicle Options</h3>
        <p>Sedan for couples, SUV for families up to 4, Mini-Van for groups of up to 10. All vehicles air-conditioned with luggage space for international flight baggage.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Krabi hotel to KBV airport drop",
          "Ao Nang to Krabi airport taxi",
          "Krabi airport drop private cab",
          "Krabi departure transfer India",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should the pickup be?", answer: "We recommend leaving 2.5–3 hours before international flights from Ao Nang or Krabi Town." },
      { question: "Is the driver familiar with all Krabi hotels?", answer: "Yes, drivers are local and know all major Ao Nang, Klong Muang, Tubkaek and Krabi Town hotels." },
      { question: "Can I pay in INR?", answer: "Yes, INR online payment is accepted before travel." },
      { question: "Are extra stops allowed on the way?", answer: "Quick stops (e.g., for a coffee) are fine but extended detours may incur extra charges." },
    ],
  },

  // 3 — Krabi Hotel → Phuket Hotel
  "krabi-to-phuket": {
    newSlug: "/thailand/krabi/krabi-hotel-to-phuket-hotel-transfer",
    oldSlug: "/thailand/krabi/krabi-to-phuket",
    gallery: krabiToPhuketGallery,
    seoContent: (
      <>
        <h2>Krabi Hotel to Phuket Hotel Private Transfer</h2>
        <p>
          A direct private transfer from your Krabi hotel to your Phuket hotel is the most comfortable way to switch between these two stunning Andaman destinations. The drive takes around 3 to 3.5 hours through scenic Phang Nga countryside, far more comfortable than ferries or shared minivans — especially with luggage, kids or elderly parents.
        </p>

        <h3>Why Choose Private Krabi → Phuket Transfer</h3>
        <ul>
          <li>Direct hotel-to-hotel service — no shared stops</li>
          <li>Sedan, SUV or Mini-Van for groups and families</li>
          <li>Comfortable air-conditioned ride for elderly and kids</li>
          <li>Luggage space for honeymoon and family bags</li>
          <li>Fixed price, INR payment available</li>
        </ul>

        <h3>Distance & Travel Time</h3>
        <ul>
          <li>Ao Nang Krabi → Patong Phuket: ~180 km, 3–3.5 hrs</li>
          <li>Krabi Town → Phuket Town: ~165 km, 3 hrs</li>
          <li>Krabi → Karon / Kata: ~185 km, 3.5 hrs</li>
        </ul>

        <h3>Recommended Pickup Areas in Krabi</h3>
        <p>Ao Nang, Klong Muang, Krabi Town, Tubkaek, Nopparat Thara — all major Krabi hotels covered.</p>

        <h3>Recommended Drop-off Areas in Phuket</h3>
        <p>Patong, Karon, Kata, Kamala, Bangtao, Phuket Town, Rawai, Mai Khao — including all major Phuket resorts.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Krabi to Phuket private taxi",
          "Ao Nang to Patong transfer",
          "Krabi Phuket cab price India",
          "Krabi hotel to Phuket hotel car",
        ]} />
      </>
    ),
    faqs: [
      { question: "Is the journey by car better than ferry?", answer: "Yes — car is door-to-door, faster overall and avoids the pier transfers, especially with luggage and seniors." },
      { question: "Are there toilet stops on the way?", answer: "Yes, the driver makes 1–2 quick rest stops at clean petrol stations or restaurants." },
      { question: "Can luggage fit for a family of 4?", answer: "An SUV or Mini-Van comfortably fits 4 large suitcases plus hand luggage." },
      { question: "Is the price per vehicle or per person?", answer: "Per vehicle — share with your group at no extra cost." },
    ],
  },

  // 4 — Krabi Hotel → Phuket City Tour 4hr → Phuket Hotel
  "krabi-phuket-city-tour": {
    newSlug: "/thailand/krabi/phuket-city-tour-to-phuket-hotel-transfer",
    oldSlug: "/thailand/krabi/krabi-phuket-city-tour",
    gallery: krabiPhuketCityTourGallery,
    seoContent: (
      <>
        <h2>Krabi Hotel + 4-Hour Phuket City Tour + Phuket Hotel Drop Private Transfer</h2>
        <p>
          Make your Krabi-to-Phuket transfer day even more rewarding with a built-in 4-hour Phuket city tour. Your private vehicle picks you up from your Krabi hotel, drives you to Phuket, completes a 4-hour Phuket city tour (Big Buddha, Wat Chalong, Karon Viewpoint, Old Town) and then drops you at your Phuket hotel — saving you a separate sightseeing day.
        </p>

        <h3>Why Book This Combo Transfer</h3>
        <ul>
          <li>One vehicle, one driver — full day taken care of</li>
          <li>Phuket sightseeing without a separate booking day</li>
          <li>Direct Phuket hotel drop-off after the tour</li>
          <li>Ideal for honeymoon couples and families</li>
        </ul>

        <h3>City Tour Stops Covered</h3>
        <ul>
          <li>Big Buddha Phuket — panoramic island views</li>
          <li>Wat Chalong — Phuket's largest temple</li>
          <li>Karon Viewpoint — three-bay viewpoint photo stop</li>
          <li>Phuket Old Town walk — Sino-Portuguese streets</li>
          <li>Optional: Tiger Kingdom (paid entry)</li>
        </ul>

        <h3>Total Duration</h3>
        <p>Approximately 7–8 hours including Krabi pickup, ~3-hour drive, 4-hour Phuket city tour and Phuket hotel drop. Best booked as an early morning pickup from Krabi.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Krabi to Phuket with city tour",
          "Phuket sightseeing private transfer from Krabi",
          "Big Buddha Wat Chalong Krabi combo",
        ]} />
      </>
    ),
    faqs: [
      { question: "Do I check out from the Krabi hotel before pickup?", answer: "Yes, complete checkout. Luggage stays in the private vehicle through the city tour." },
      { question: "Are entry tickets included?", answer: "Big Buddha and Wat Chalong are free. Tiger Kingdom and similar attractions are paid at the venue." },
      { question: "What time should the pickup be?", answer: "Around 7:30–8:00 AM from Krabi so the city tour finishes before sunset and you reach your Phuket hotel comfortably." },
    ],
  },

  // 5 — Krabi Hotel → HKT Phuket Airport
  "krabi-hkt-airport-dropoff": {
    newSlug: "/thailand/krabi/krabi-hotel-to-phuket-airport-transfer",
    oldSlug: "/thailand/krabi/krabi-hkt-airport-dropoff",
    gallery: krabiToHktGallery,
    seoContent: (
      <>
        <h2>Krabi Hotel to Phuket International Airport (HKT) Private Transfer</h2>
        <p>
          Flying out of Phuket International Airport (HKT) instead of Krabi? Our private transfer takes you directly from your Krabi hotel to HKT airport — about 165 km / 3 hours — so you can fly out comfortably without managing public transport with luggage. Many international airlines have better connections from Phuket, making this a popular departure option for travelers staying in Krabi.
        </p>

        <h3>Why Pre-Book This Transfer</h3>
        <ul>
          <li>Door-to-door — Krabi hotel to HKT airport directly</li>
          <li>Fixed price, INR payment available</li>
          <li>Sedan, SUV or Mini-Van based on group size</li>
          <li>Comfortable for elderly, kids and honeymoon couples</li>
          <li>Plenty of luggage space for international flights</li>
        </ul>

        <h3>Distance & Travel Time</h3>
        <ul>
          <li>Ao Nang → HKT Airport: ~165 km, ~3 hrs</li>
          <li>Krabi Town → HKT: ~150 km, ~2.5 hrs</li>
          <li>Klong Muang / Tubkaek → HKT: ~175 km, ~3.25 hrs</li>
        </ul>

        <h3>Recommended Pickup Time</h3>
        <p>Leave Krabi at least 5 hours before international flights or 4 hours before domestic flights from HKT.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Krabi hotel to Phuket airport drop",
          "Krabi to HKT airport taxi",
          "Ao Nang to Phuket airport private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should I leave Krabi for a Phuket airport flight?", answer: "At least 5 hours before international flights or 4 hours before domestic flights from HKT." },
      { question: "Are toilet/snack stops included?", answer: "Yes, the driver makes 1–2 brief rest stops at clean petrol stations on the way." },
      { question: "Can the price be paid in INR?", answer: "Yes, INR payment is available before travel." },
      { question: "Will the driver wait if I'm running late from the hotel?", answer: "A reasonable wait is included; please share your room number and contact for smooth coordination." },
    ],
  },

  // 6 — Krabi Airport (KBV) → Ao Nang Hotel
  "krabi-kbv-aonang-pickup": {
    newSlug: "/thailand/krabi/krabi-airport-to-ao-nang-hotel-transfer",
    oldSlug: "/thailand/krabi/kbv-aonang-pickup",
    gallery: kbvToAoNangGallery,
    seoContent: (
      <>
        <h2>Krabi International Airport (KBV) to Ao Nang Hotel Private Transfer</h2>
        <p>
          The shortest and most popular Krabi transfer — Krabi International Airport (KBV) to your Ao Nang hotel by private cab. Just ~25 km and 35–45 minutes, your driver greets you at arrivals, helps with luggage and takes you directly to your hotel without sharing the vehicle or making unnecessary stops.
        </p>

        <h3>Why Choose a Private Transfer from KBV to Ao Nang</h3>
        <ul>
          <li>Direct meet & greet at KBV arrivals with name board</li>
          <li>Door-to-door drop-off in Ao Nang, Nopparat Thara or Klong Muang</li>
          <li>Air-conditioned Sedan, SUV or Mini-Van</li>
          <li>Fixed pricing — no fare negotiation at airport</li>
          <li>Free flight tracking — no penalty if your flight is late</li>
          <li>WhatsApp support and English-speaking driver</li>
        </ul>

        <h3>KBV Airport to Krabi Areas — Distance & Time</h3>
        <ul>
          <li>Ao Nang Beach: ~25 km, ~40 min</li>
          <li>Nopparat Thara: ~22 km, ~35 min</li>
          <li>Klong Muang: ~40 km, ~60 min</li>
          <li>Krabi Town: ~15 km, ~25 min</li>
          <li>Tubkaek: ~45 km, ~70 min</li>
          <li>Railay (via Ao Nang pier longtail): ~45 min drive + 15 min boat</li>
        </ul>

        <h3>Vehicle Options</h3>
        <h4>Sedan</h4>
        <ul><li>Couples and solo travelers with 2–3 bags</li></ul>
        <h4>SUV</h4>
        <ul><li>Families with kids and 4 bags</li></ul>
        <h4>Mini-Van</h4>
        <ul><li>Groups of 6–10 with multiple suitcases</li></ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Krabi airport to Ao Nang taxi",
          "KBV to Ao Nang private transfer",
          "Krabi airport pickup price INR",
          "Krabi airport to Nopparat Thara cab",
          "KBV to Klong Muang transfer",
        ]} />
      </>
    ),
    faqs: [
      { question: "Where will the driver wait at Krabi Airport?", answer: "The driver waits at the KBV arrival hall (Exit Gate 15-16) with a name board displaying your name." },
      { question: "How long does it take from KBV to Ao Nang?", answer: "About 35–45 minutes depending on traffic and your hotel location." },
      { question: "Is night pickup available?", answer: "Yes, transfers run 24/7. A small night surcharge applies between 12:00 AM and 6:00 AM." },
      { question: "Can I pay in INR?", answer: "Yes, you can pay in INR online before travel." },
      { question: "What if my flight is delayed?", answer: "Free flight tracking is included with reasonable waiting time at no extra charge." },
    ],
  },
};
