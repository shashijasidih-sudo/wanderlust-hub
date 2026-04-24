import { ReactNode } from "react";
import type { TransferFAQ, TransferGalleryImage } from "@/components/TransferBooking";

import cityPhuket from "@/assets/city-phuket.jpg";
import cityKrabi from "@/assets/city-krabi.jpg";
import phuketBoat from "@/assets/phuket-boat-tour-1.jpg";
import phuketLongtail from "@/assets/phuket-longtail-boat-1.jpg";
import phuketLongtailBeach from "@/assets/phuket-longtail-boats-beach-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketViewpoint from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMaiKhao from "@/assets/phuket-mai-khao-beach-plane.jpg";
import phuketTiger from "@/assets/phuket-tiger-1.jpg";
import phuketBigBoat from "@/assets/phuket-big-boat-1.jpg";
import phuketNightMarket from "@/assets/phuket-night-market-1.jpg";
import phuketWaterfall from "@/assets/phuket-bang-pae-waterfall.jpg";
import krabiBeach from "@/assets/krabi-beach-woman-1.jpg";
import krabiBoat from "@/assets/krabi-boat-tour-1.jpg";
import krabiLongtail from "@/assets/krabi-longtail-boats-1.jpg";
import krabiViewpoint from "@/assets/krabi-island-viewpoint-1.jpg";
import krabiTemple from "@/assets/krabi-temple-woman-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";

// ---------- Gallery presets ----------
const hktToPhuketGallery: TransferGalleryImage[] = [
  { src: phuketMaiKhao, alt: "Phuket International Airport HKT arrival for hotel transfer" },
  { src: cityPhuket, alt: "Phuket city hotel district drop-off" },
  { src: phuketLongtailBeach, alt: "Phuket beach hotel area arrival" },
  { src: phuketViewpoint, alt: "Phuket island viewpoint from airport route" },
];

const hktCityTourPhuketGallery: TransferGalleryImage[] = [
  { src: phuketMaiKhao, alt: "Phuket Airport pickup before city tour" },
  { src: phuketViewpoint, alt: "Karon viewpoint stop on Phuket city tour" },
  { src: phuketTiger, alt: "Tiger Kingdom Phuket city tour stop" },
  { src: cityPhuket, alt: "Phuket Old Town hotel drop-off" },
];

const phuketToHktGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket hotel pickup heading to airport" },
  { src: phuketLongtailBeach, alt: "Phuket beachfront hotel departure" },
  { src: phuketMaiKhao, alt: "Phuket International Airport drop-off" },
  { src: phuketKayaks, alt: "Phuket coastline en route to airport" },
];

const phuketCityTourHktGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket hotel pickup before city tour and airport drop" },
  { src: phuketViewpoint, alt: "Karon viewpoint stop before HKT airport" },
  { src: phuketTiger, alt: "Tiger Kingdom city tour stop before airport" },
  { src: phuketMaiKhao, alt: "Phuket Airport drop after city tour" },
];

const phuketHourlyGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket private car hire 4 hours" },
  { src: phuketNightMarket, alt: "Phuket night market sightseeing by private car" },
  { src: phuketLongtailBeach, alt: "Phuket beach hopping by private car" },
  { src: phuketViewpoint, alt: "Phuket viewpoint visit by hourly car rental" },
];

const phuketToKrabiGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket hotel pickup heading to Krabi" },
  { src: phuketBoat, alt: "Scenic drive from Phuket to Krabi coastline" },
  { src: krabiBeach, alt: "Krabi beach hotel arrival" },
  { src: krabiLongtail, alt: "Krabi longtail boats welcome arrivals" },
];

const phuketCityTourKrabiGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket hotel pickup before city tour and Krabi drop" },
  { src: phuketTiger, alt: "Tiger Kingdom Phuket stop on city tour" },
  { src: phuketViewpoint, alt: "Karon viewpoint Phuket city tour" },
  { src: krabiBeach, alt: "Krabi beach hotel arrival after Phuket city tour" },
];

const krabiCityTourKrabiGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket hotel pickup heading to Krabi city tour" },
  { src: krabiTemple, alt: "Tiger Cave Temple Krabi city tour" },
  { src: krabiViewpoint, alt: "Krabi viewpoint stop on city tour" },
  { src: cityKrabi, alt: "Krabi hotel drop-off after city tour" },
];

const hktToKrabiGallery: TransferGalleryImage[] = [
  { src: phuketMaiKhao, alt: "Phuket Airport HKT pickup heading to Krabi" },
  { src: phuketWaterfall, alt: "Scenic Phang-Nga drive to Krabi" },
  { src: krabiBeach, alt: "Krabi Ao Nang beach hotel arrival" },
  { src: krabiLongtail, alt: "Krabi longtail boats at the beach" },
];

const phuketToKbvGallery: TransferGalleryImage[] = [
  { src: cityPhuket, alt: "Phuket hotel pickup heading to Krabi Airport" },
  { src: krabiSpeedboat, alt: "Krabi region drive towards KBV airport" },
  { src: krabiKayaks, alt: "Krabi coastal scenery en route to airport" },
  { src: phuketBigBoat, alt: "Krabi International Airport KBV drop-off" },
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

export const phuketTransferSEO: Record<string, SEOEntry> = {
  // 1
  "phuket-hkt-airport-pickup": {
    newSlug: "/phuket/phuket-airport-to-phuket-hotel-transfer",
    oldSlug: "/phuket/hkt-airport-pickup",
    gallery: hktToPhuketGallery,
    seoContent: (
      <>
        <h2>Phuket International Airport (HKT) to Phuket Hotel Private Transfer</h2>
        <p>
          A private transfer from Phuket International Airport (HKT) to your Phuket hotel is the easiest way to start your island holiday. After a long international flight, the last thing most travelers want is taxi queues, fare negotiations or shared mini-bus stops along the way. With a private door-to-door transfer, your driver greets you at arrivals, helps with your luggage and takes you directly to your hotel in Patong, Karon, Kata, Kamala, Phuket Town, Bangtao, Surin, Mai Khao or Rawai.
        </p>
        <p>
          Phuket Airport sits in the north of the island in Mai Khao, while most beach hotels are 30–60 minutes away. A private cab is far more comfortable than buses or shared vans for families, honeymoon couples, senior citizens and Indian travelers carrying multiple bags.
        </p>

        <h3>Why Choose a Private Transfer from Phuket Airport to Hotel</h3>
        <ul>
          <li>Direct meet & greet at HKT arrivals</li>
          <li>Direct hotel drop-off across all Phuket beach areas</li>
          <li>Air-conditioned Sedan, SUV or Mini-Van</li>
          <li>Fixed pricing with no hidden charges</li>
          <li>Free flight tracking — no penalty if your flight is late</li>
          <li>Luggage assistance and child-friendly seating</li>
          <li>WhatsApp support before arrival in Phuket</li>
        </ul>

        <h3>HKT Airport to Phuket Hotel Distance and Travel Time</h3>
        <ul>
          <li>Patong Beach: ~45 km, 50–60 min</li>
          <li>Karon / Kata Beach: ~50 km, 60–75 min</li>
          <li>Phuket Town: ~32 km, 40–50 min</li>
          <li>Kamala / Surin: ~30 km, 40 min</li>
          <li>Bangtao / Laguna: ~20 km, 30 min</li>
          <li>Rawai / Nai Harn: ~55 km, 75 min</li>
        </ul>

        <h3>Vehicle Options</h3>
        <h4>Sedan</h4>
        <ul><li>Couples and solo travelers with 2–3 bags</li></ul>
        <h4>SUV</h4>
        <ul><li>Families with kids and 4 bags</li></ul>
        <h4>Mini-Van</h4>
        <ul><li>Groups of 6–10 with multiple suitcases</li></ul>

        <h3>Meet and Greet at Phuket Airport</h3>
        <p>Your driver waits at the international or domestic arrival hall with a name board displaying your name. Free waiting time is included after landing so you can clear immigration and baggage without rushing.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket airport to hotel taxi",
          "HKT airport pickup Patong",
          "Phuket airport private transfer India",
          "Phuket airport to Karon Kata cab",
          "Phuket airport pickup price INR",
        ]} />
      </>
    ),
    faqs: [
      { question: "Where will the driver wait at Phuket Airport?", answer: "The driver waits at the arrival hall (international or domestic, based on your flight) with a name board." },
      { question: "How long does it take from HKT Airport to Patong?", answer: "Roughly 50–60 minutes depending on traffic and your hotel location." },
      { question: "Is night pickup available?", answer: "Yes, transfers run 24/7. A small night surcharge applies between 12:00 AM and 6:00 AM." },
      { question: "Can I pay in INR?", answer: "Yes, you can pay in INR online before travel — convenient and exchange-friendly for Indian families." },
      { question: "Will the driver wait if my flight is late?", answer: "Yes, free flight tracking is included with reasonable waiting time at no extra charge." },
    ],
  },

  // 2
  "phuket-hkt-airport-city-tour": {
    newSlug: "/phuket/phuket-airport-phuket-city-tour-to-phuket-hotel-transfer",
    oldSlug: "/phuket/hkt-airport-city-tour",
    gallery: hktCityTourPhuketGallery,
    seoContent: (
      <>
        <h2>Phuket Airport (HKT) + 4-Hour Phuket City Tour + Hotel Drop Private Transfer</h2>
        <p>
          Make the most of your arrival day in Phuket with a combo private transfer that picks you up from Phuket International Airport (HKT), takes you on a 4-hour Phuket city tour and drops you off at your hotel. Instead of resting all day, you can already explore Phuket's most photographed landmarks straight from the airport.
        </p>
        <p>
          The itinerary typically covers Big Buddha Phuket, Wat Chalong temple, Phuket Old Town, Karon Viewpoint and a stop at Tiger Kingdom or a local viewpoint, depending on traffic and your timing.
        </p>

        <h3>What Makes This Combo Worth Booking</h3>
        <ul>
          <li>Save money — single private vehicle for airport + city tour + hotel</li>
          <li>Skip the second-day half-day tour booking</li>
          <li>Same English-speaking driver throughout</li>
          <li>Flexible itinerary based on your interests</li>
          <li>Hotel drop-off after the tour, no extra cab needed</li>
        </ul>

        <h3>Typical 4-Hour City Tour Stops</h3>
        <ul>
          <li>Big Buddha Phuket — panoramic island views</li>
          <li>Wat Chalong — Phuket's largest temple</li>
          <li>Karon Viewpoint — three-bay viewpoint photo stop</li>
          <li>Phuket Old Town — Sino-Portuguese streets</li>
          <li>Tiger Kingdom (entry tickets paid directly)</li>
        </ul>

        <h3>Vehicle Options & Travel Time</h3>
        <p>Sedan, SUV or Van available depending on group size. Total journey including airport pickup, city tour and hotel drop is approximately 5–6 hours.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket airport plus city tour combo",
          "Phuket sightseeing from HKT airport",
          "Big Buddha Wat Chalong tour transfer",
          "Phuket arrival day city tour India",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are entry tickets included in the city tour?", answer: "Big Buddha and Wat Chalong are free. Tiger Kingdom or other ticketed attractions are paid directly at the venue." },
      { question: "Can I customize the tour stops?", answer: "Yes, tell the driver your preferences. Stops can be swapped within the 4-hour window." },
      { question: "Is lunch included?", answer: "Lunch is not included but the driver can suggest Indian/vegetarian restaurants on the way." },
      { question: "What if my flight is delayed?", answer: "Flight tracking is included. The city tour will proceed in the remaining available time." },
    ],
  },

  // 3
  "phuket-hkt-airport-dropoff": {
    newSlug: "/phuket/phuket-hotel-to-phuket-airport-transfer",
    oldSlug: "/phuket/hkt-airport-dropoff",
    gallery: phuketToHktGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel to Phuket International Airport (HKT) Private Transfer</h2>
        <p>
          End your Phuket holiday stress-free with a private hotel-to-airport drop-off. Your driver arrives at your hotel lobby on time, helps with luggage and takes you directly to Phuket International Airport (HKT) without shared stops or detours.
        </p>

        <h3>Why Pre-Book Your Departure Transfer</h3>
        <ul>
          <li>Guaranteed on-time pickup — no last-minute taxi search</li>
          <li>Fixed price even during late night and early morning hours</li>
          <li>Door-to-door comfort with luggage assistance</li>
          <li>Air-conditioned Sedan, SUV or Mini-Van</li>
          <li>Pickup time recommended 3 hours before international flight</li>
        </ul>

        <h3>Recommended Pickup Time From Major Areas</h3>
        <ul>
          <li>Patong Beach: 3.5 hours before flight</li>
          <li>Karon / Kata: 3.5 hours before flight</li>
          <li>Phuket Town: 3 hours before flight</li>
          <li>Bangtao / Laguna: 2.5 hours before flight</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket hotel to HKT airport drop",
          "Phuket airport drop taxi price",
          "Patong to Phuket airport private cab",
          "Phuket departure transfer India",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should the pickup be?", answer: "We recommend leaving 3.5 hours before international flights from Patong/Karon and 3 hours from Phuket Town." },
      { question: "Is the driver familiar with all Phuket hotels?", answer: "Yes, drivers are local and know all major Phuket beach hotels and resorts." },
      { question: "Can I pay in INR?", answer: "Yes, INR online payment is accepted before travel." },
      { question: "Are extra stops allowed on the way?", answer: "Quick stops (e.g., for a coffee) are fine but extended detours may incur extra charges." },
    ],
  },

  // 4
  "phuket-city-tour-hkt-airport": {
    newSlug: "/phuket/phuket-city-tour-to-phuket-airport-transfer",
    oldSlug: "/phuket/city-tour-hkt-airport",
    gallery: phuketCityTourHktGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel + 4-Hour Phuket City Tour + HKT Airport Drop Private Transfer</h2>
        <p>
          Heading home but still want to squeeze in some sightseeing? This combo private transfer picks you up from your Phuket hotel, takes you on a 4-hour Phuket city tour and drops you at Phuket International Airport (HKT) — perfect for late-evening or night flights.
        </p>

        <h3>Why This Combo Makes Sense for Departure Day</h3>
        <ul>
          <li>Use your last day productively before flying out</li>
          <li>Skip hotel checkout boredom — luggage stays in the vehicle</li>
          <li>Visit Big Buddha, Wat Chalong, Karon Viewpoint, Old Town</li>
          <li>Direct airport drop after the tour with all luggage</li>
        </ul>

        <h3>Suggested Stops</h3>
        <ul>
          <li>Big Buddha Phuket</li>
          <li>Wat Chalong</li>
          <li>Karon Viewpoint</li>
          <li>Phuket Old Town & Sino-Portuguese houses</li>
          <li>Optional: Tiger Kingdom (paid entry)</li>
        </ul>

        <h3>Total Duration</h3>
        <p>Approximately 5–6 hours including hotel pickup, sightseeing and airport drop-off. Plan checkout accordingly.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket city tour with airport drop",
          "Last day Phuket sightseeing combo",
          "Phuket hotel city tour HKT airport",
        ]} />
      </>
    ),
    faqs: [
      { question: "Where is luggage stored during the tour?", answer: "Luggage stays securely in your private vehicle throughout the city tour." },
      { question: "What time should the pickup begin for an evening flight?", answer: "About 7–8 hours before flight time so you have a relaxed tour and reach airport 3 hours early." },
      { question: "Are entry tickets included?", answer: "Big Buddha and Wat Chalong are free. Tiger Kingdom or similar attractions are paid at the venue." },
    ],
  },

  // 5
  "phuket-city-hourly-rental": {
    newSlug: "/phuket/phuket-hotel-to-hotel-transfer-4-hours",
    oldSlug: "/phuket/city-hourly-rental",
    gallery: phuketHourlyGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel to Hotel Transfer — 4 Hours Private Car Hire</h2>
        <p>
          Hire a private car with driver in Phuket for 4 hours and design your own mini sightseeing route. Whether you want to bounce between beaches, hit Phuket Old Town, shop at Central Festival, or visit Big Buddha at sunset — this hourly rental gives you full flexibility.
        </p>

        <h3>What's Included</h3>
        <ul>
          <li>4 hours of private car hire within Phuket</li>
          <li>Choice of Sedan, SUV or Mini-Van</li>
          <li>English-speaking driver</li>
          <li>Fuel and tolls included</li>
          <li>Multiple stops as per your wish</li>
        </ul>

        <h3>Popular Routes for 4-Hour Rentals</h3>
        <ul>
          <li>Patong → Karon Viewpoint → Big Buddha → Wat Chalong → back to hotel</li>
          <li>Hotel → Phuket Old Town → Naka Weekend Market → hotel</li>
          <li>Hotel → Promthep Cape sunset → Rawai → hotel</li>
          <li>Hotel → Central Festival shopping → Jungceylon → hotel</li>
        </ul>

        <h3>Vehicle Options</h3>
        <p>Sedan for couples, SUV for families up to 4, Mini-Van for groups of up to 10. Extra hours can be added at a per-hour rate paid to the driver.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket private car 4 hours",
          "Phuket hourly cab rental",
          "Phuket private driver hire",
          "Phuket sightseeing custom car",
        ]} />
      </>
    ),
    faqs: [
      { question: "Can I extend beyond 4 hours?", answer: "Yes, additional hours are available — pay the driver directly at the standard hourly rate." },
      { question: "Are entry tickets to attractions included?", answer: "No, only car and driver are included. Entry tickets are paid by you at each venue." },
      { question: "Can I do shopping with this rental?", answer: "Absolutely — many travelers use it for Central Festival, Jungceylon and night markets." },
      { question: "Can I cross to Phang Nga or Krabi?", answer: "No, this rental is within Phuket city limits only. Inter-city transfers are separately bookable." },
    ],
  },

  // 6
  "phuket-to-krabi": {
    newSlug: "/phuket/phuket-hotel-to-krabi-hotel-transfer",
    oldSlug: "/phuket/phuket-to-krabi",
    gallery: phuketToKrabiGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel to Krabi Hotel Private Transfer</h2>
        <p>
          A direct private transfer from your Phuket hotel to your Krabi hotel is the most comfortable way to combine these two stunning Andaman destinations. The drive takes around 3 to 3.5 hours through scenic Phang Nga countryside, mangroves and limestone karst views — far more comfortable than ferries or shared minivans.
        </p>

        <h3>Why Choose Private Phuket → Krabi Transfer</h3>
        <ul>
          <li>Direct hotel-to-hotel service — no shared stops</li>
          <li>Sedan, SUV or Mini-Van for groups and families</li>
          <li>Comfortable air-conditioned ride for elderly and kids</li>
          <li>Luggage space for honeymoon and family bags</li>
          <li>Fixed price, INR payment available</li>
        </ul>

        <h3>Distance & Travel Time</h3>
        <ul>
          <li>Phuket → Ao Nang Krabi: ~180 km, 3–3.5 hrs</li>
          <li>Phuket → Krabi Town: ~165 km, 3 hrs</li>
          <li>Phuket → Railay (via Ao Nang pier): ~3 hrs + boat</li>
        </ul>

        <h3>Recommended Pickup Areas in Phuket</h3>
        <p>Patong, Karon, Kata, Kamala, Bangtao, Phuket Town, Rawai, Mai Khao — all major hotels covered.</p>

        <h3>Recommended Drop-off Areas in Krabi</h3>
        <p>Ao Nang, Klong Muang, Krabi Town, Tubkaek, Nopparat Thara — including all major Krabi resorts.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket to Krabi private taxi",
          "Phuket to Ao Nang transfer",
          "Phuket Krabi cab price India",
          "Phuket hotel to Krabi hotel car",
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

  // 7
  "phuket-city-tour-krabi": {
    newSlug: "/phuket/phuket-city-tour-to-krabi-hotel-transfer",
    oldSlug: "/phuket/city-tour-krabi",
    gallery: phuketCityTourKrabiGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel + 4-Hour Phuket City Tour + Krabi Hotel Drop Private Transfer</h2>
        <p>
          Visit Phuket's top attractions on your transfer day to Krabi. Your private vehicle picks you up from your Phuket hotel, completes a 4-hour Phuket city tour (Big Buddha, Wat Chalong, Karon Viewpoint, Old Town) and then continues to your Krabi hotel — saving you a separate sightseeing day.
        </p>

        <h3>Why Book This Combo Transfer</h3>
        <ul>
          <li>One vehicle, one driver — full day taken care of</li>
          <li>Phuket sightseeing without backtracking</li>
          <li>Direct Krabi hotel drop-off after the tour</li>
          <li>Ideal for honeymoon couples and families</li>
        </ul>

        <h3>Total Duration</h3>
        <p>Approximately 7–8 hours including pickup, 4-hour city tour and onward Krabi drop. Travel time to Krabi after the tour is ~3 hours.</p>

        <h3>City Tour Stops Covered</h3>
        <ul>
          <li>Big Buddha Phuket</li>
          <li>Wat Chalong temple</li>
          <li>Karon Viewpoint photo stop</li>
          <li>Phuket Old Town walk</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket city tour plus Krabi drop",
          "Phuket sightseeing transfer to Krabi",
          "Big Buddha Wat Chalong Krabi combo",
        ]} />
      </>
    ),
    faqs: [
      { question: "Do I check out from the Phuket hotel before pickup?", answer: "Yes, complete checkout. Luggage stays in the private vehicle through the city tour." },
      { question: "Is the price higher than direct Phuket–Krabi transfer?", answer: "Yes, slightly — because of the extra 4 hours sightseeing time and additional kilometers." },
      { question: "Are entry tickets included?", answer: "Big Buddha and Wat Chalong are free. Tiger Kingdom and similar attractions are paid at the venue." },
    ],
  },

  // 8
  "phuket-krabi-city-tour": {
    newSlug: "/phuket/krabi-city-tour-to-krabi-hotel-transfer",
    oldSlug: "/phuket/krabi-city-tour",
    gallery: krabiCityTourKrabiGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel + 6-Hour Krabi City Tour + Krabi Hotel Drop Private Transfer</h2>
        <p>
          Travel from Phuket to Krabi with a 6-hour Krabi city tour added in between. After arriving in Krabi, your driver takes you to top Krabi attractions — Tiger Cave Temple, Khao Khanab Nam viewpoint, Krabi Town, and a scenic stop — before dropping you at your Krabi hotel.
        </p>

        <h3>What's Covered</h3>
        <ul>
          <li>Phuket hotel pickup</li>
          <li>Drive to Krabi (~3 hours)</li>
          <li>6-hour Krabi sightseeing tour</li>
          <li>Krabi hotel drop-off</li>
          <li>Sedan, SUV or Mini-Van options</li>
        </ul>

        <h3>Krabi Tour Stops</h3>
        <ul>
          <li>Tiger Cave Temple (Wat Tham Suea)</li>
          <li>Khao Khanab Nam viewpoint</li>
          <li>Krabi Town walking street area</li>
          <li>Ao Nang viewpoint or Nopparat Thara beach</li>
          <li>Optional Emerald Pool / Hot Spring (subject to time)</li>
        </ul>

        <h3>Total Duration</h3>
        <p>Approximately 9–10 hours including drive to Krabi, sightseeing and hotel drop-off. Best booked as an early morning pickup from Phuket.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket to Krabi with city tour",
          "Krabi sightseeing private transfer",
          "Tiger Cave Temple Krabi tour",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are entry tickets included?", answer: "Tiger Cave Temple is free. Emerald Pool / Hot Spring entry (if added) is paid at the venue." },
      { question: "What time should the pickup be?", answer: "Around 7:30–8:00 AM from Phuket so you finish in Krabi by early evening." },
      { question: "Can the tour be customized?", answer: "Yes — within the 6-hour Krabi window, stops can be swapped based on your interests." },
    ],
  },

  // 9 — uses krabi-hkt-airport-pickup data (Phuket Airport → Krabi Hotel)
  "krabi-hkt-airport-pickup": {
    newSlug: "/phuket/phuket-airport-to-krabi-hotel-transfer",
    oldSlug: "/krabi/hkt-airport-pickup",
    gallery: hktToKrabiGallery,
    seoContent: (
      <>
        <h2>Phuket International Airport (HKT) to Krabi Hotel Private Transfer</h2>
        <p>
          Many travelers fly into Phuket International Airport (HKT) and head straight to Krabi because of better international flight connections. A private transfer from HKT to your Krabi hotel is the most comfortable option — direct, air-conditioned and door-to-door — covering the ~149 km route in about 2.5–3 hours.
        </p>

        <h3>Why This Transfer Works for Indian Travelers</h3>
        <ul>
          <li>Direct meet & greet at Phuket Airport arrivals</li>
          <li>No need to find a Krabi-bound bus or shared van</li>
          <li>Drop-off at Ao Nang, Krabi Town, Klong Muang, Tubkaek</li>
          <li>Sedan, SUV or Mini-Van based on group size</li>
          <li>INR payment, WhatsApp support, kid-friendly</li>
        </ul>

        <h3>Distance & Travel Time</h3>
        <ul>
          <li>HKT Airport → Ao Nang: ~149 km, ~2.5 hrs</li>
          <li>HKT Airport → Krabi Town: ~150 km, ~2.5 hrs</li>
          <li>HKT Airport → Klong Muang / Tubkaek: ~165 km, ~3 hrs</li>
        </ul>

        <h3>Vehicle Options</h3>
        <p>Sedan (3 pax), SUV (4 pax) or Mini-Van (10 pax). Choose based on luggage and group size.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket airport to Krabi taxi",
          "HKT to Ao Nang private transfer",
          "Phuket airport Krabi cab India",
        ]} />
      </>
    ),
    faqs: [
      { question: "Is this the same as flying into Krabi Airport (KBV)?", answer: "No. Many travelers prefer Phuket Airport (HKT) due to better international flight options. Then we drive you to Krabi by private cab." },
      { question: "How long does the drive take?", answer: "About 2.5–3 hours from HKT to Ao Nang or Krabi Town." },
      { question: "Will the driver wait if my flight is delayed?", answer: "Yes, flight tracking is included with reasonable free waiting time." },
    ],
  },

  // 10 — uses krabi-phuket-kbv-airport-dropoff data (Phuket Hotel → Krabi Airport KBV)
  "krabi-phuket-kbv-airport-dropoff": {
    newSlug: "/krabi/krabi-hotel-to-krabi-airport-transfer",
    oldSlug: "/krabi/phuket-kbv-airport-dropoff",
    gallery: phuketToKbvGallery,
    seoContent: (
      <>
        <h2>Phuket Hotel to Krabi International Airport (KBV) Private Transfer</h2>
        <p>
          Flying out of Krabi International Airport (KBV) instead of Phuket? Our private transfer takes you directly from your Phuket hotel to KBV airport — about 175 km / 3 hours — so you can fly out comfortably without managing public transport with luggage.
        </p>

        <h3>Why Pre-Book This Transfer</h3>
        <ul>
          <li>Door-to-door — Phuket hotel to KBV airport directly</li>
          <li>Fixed price, INR payment available</li>
          <li>Sedan, SUV or Mini-Van based on group size</li>
          <li>Comfortable for elderly, kids and honeymoon couples</li>
          <li>Plenty of luggage space</li>
        </ul>

        <h3>Distance & Travel Time</h3>
        <ul>
          <li>Patong → KBV Airport: ~180 km, ~3.5 hrs</li>
          <li>Karon / Kata → KBV: ~185 km, ~3.5 hrs</li>
          <li>Phuket Town → KBV: ~165 km, ~3 hrs</li>
        </ul>

        <h3>Recommended Pickup Time</h3>
        <p>Leave Phuket at least 5 hours before international flights or 4 hours before domestic flights from KBV.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Phuket hotel to Krabi airport drop",
          "Phuket to KBV airport taxi",
          "Phuket Krabi airport private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should I leave Phuket for a Krabi airport flight?", answer: "At least 5 hours before international flights or 4 hours before domestic flights from KBV." },
      { question: "Are toilet/snack stops included?", answer: "Yes, the driver makes 1–2 brief rest stops at clean petrol stations on the way." },
      { question: "Can the price be paid in INR?", answer: "Yes, INR payment is available before travel." },
    ],
  },
};
