import { ReactNode } from "react";
import type { TransferFAQ, TransferGalleryImage } from "@/components/TransferBooking";

import sgCityscape from "@/assets/singapore-cityscape-woman-1.jpg";
import sgMarinaDay from "@/assets/singapore-marina-bay-sands-day-1.jpg";
import sgMarinaNight from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import sgMerlionNight from "@/assets/singapore-merlion-night-1.jpg";
import sgGardensNight from "@/assets/singapore-gardens-bay-night-1.jpg";
import sgCouple from "@/assets/singapore-couple-walking-1.jpg";
import sgFlyerTwilight from "@/assets/singapore-flyer-twilight-1.jpg";
import sgTourists from "@/assets/singapore-tourists-city-1.jpg";

// ---------- Galleries ----------
const airportPickupGallery: TransferGalleryImage[] = [
  { src: sgCityscape, alt: "Singapore Changi Airport pickup heading to city hotel" },
  { src: sgMarinaDay, alt: "Marina Bay Sands daytime arrival via private transfer" },
  { src: sgTourists, alt: "Singapore tourists arriving at hotel from Changi airport" },
  { src: sgCouple, alt: "Couple arriving at Singapore hotel after airport pickup" },
];

const airportDropoffGallery: TransferGalleryImage[] = [
  { src: sgCouple, alt: "Singapore hotel pickup heading to Changi airport" },
  { src: sgMarinaDay, alt: "Marina Bay area drive to Changi airport" },
  { src: sgFlyerTwilight, alt: "Singapore Flyer twilight on the way to airport" },
  { src: sgCityscape, alt: "Singapore Changi airport drop-off" },
];

const airportNightPickupGallery: TransferGalleryImage[] = [
  { src: sgMarinaNight, alt: "Marina Bay Sands night pickup from Singapore Changi airport" },
  { src: sgMerlionNight, alt: "Singapore Merlion night view en route from airport" },
  { src: sgGardensNight, alt: "Gardens by the Bay night arrival to Singapore hotel" },
  { src: sgCityscape, alt: "Singapore late night airport private transfer to hotel" },
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
      <li>Drop-off at Indian-friendly hotels in Little India, Geylang, Bugis</li>
    </ul>
  </>
);

const KeywordsBlock = ({ items }: { items: string[] }) => (
  <>
    <h3>Top Search Keywords Covered</h3>
    <p className="text-sm">{items.join(" • ")}</p>
  </>
);

const ServiceAreasBlock = () => (
  <>
    <h3>Hotel Service Areas Covered</h3>
    <p>Pickups and drop-offs are available in popular Singapore stay areas:</p>
    <ul>
      <li>Geylang lor 1–22</li>
      <li>Little India</li>
      <li>Orchard Road</li>
      <li>Tanjong Pagar</li>
      <li>Chinatown</li>
      <li>Village Hotel Bugis</li>
    </ul>
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

export const singaporeTransferSEO: Record<string, SEOEntry> = {
  // 1
  "singapore-airport-pickup": {
    newSlug: "/singapore/singapore-airport-pickup",
    oldSlug: "/singapore/airport-pickup",
    gallery: airportPickupGallery,
    seoContent: (
      <>
        <h2>Singapore Changi Airport to Hotel Private Transfer</h2>
        <p>
          A private transfer from Singapore Changi Airport to your city hotel is the easiest way to start your Singapore holiday. After a long international flight, the last thing most travelers want is taxi queues, surge pricing or shared shuttles with multiple stops. With a private door-to-door transfer, your driver greets you at arrivals, helps with your luggage and takes you directly to your hotel in Orchard, Little India, Bugis, Chinatown, Tanjong Pagar or Geylang.
        </p>
        <p>
          Choose between a 5-seater for couples and small families or a 10-seater for groups, both available throughout the day from 7:00 AM to 9:30 PM at fixed pricing in INR.
        </p>

        <h3>Why Choose a Private Transfer from Changi Airport</h3>
        <ul>
          <li>Direct meet & greet at Changi arrivals</li>
          <li>Door-to-door drop-off across all Singapore city hotels</li>
          <li>Air-conditioned 5-seater or 10-seater vehicle</li>
          <li>Fixed pricing in INR — no Grab/taxi surge surprises</li>
          <li>Free flight tracking — driver adjusts to your landing time</li>
          <li>Luggage assistance and child-friendly seating</li>
          <li>WhatsApp support before arrival in Singapore</li>
        </ul>

        <h3>Changi Airport to Hotel — Distance & Travel Time</h3>
        <ul>
          <li>Changi → Orchard Road: ~20 km, 30–35 min</li>
          <li>Changi → Marina Bay: ~22 km, 30 min</li>
          <li>Changi → Little India: ~18 km, 25–30 min</li>
          <li>Changi → Chinatown / Tanjong Pagar: ~22 km, 30 min</li>
          <li>Changi → Geylang / Bugis: ~15 km, 25 min</li>
        </ul>

        <h3>Vehicle Options</h3>
        <h4>5 Seater</h4>
        <ul><li>Couples and small families with 2–4 bags</li></ul>
        <h4>10 Seater</h4>
        <ul><li>Groups of up to 10 with multiple suitcases</li></ul>

        <h3>Meet and Greet at Changi Airport</h3>
        <p>Your driver waits at the arrival hall (Terminal 1, 2, 3 or 4 based on your flight) with a name board displaying your name. Free waiting time is included after landing so you can clear immigration and baggage without rushing. Please select a pickup time approximately 2.5 hours after your flight's scheduled landing time.</p>

        <ServiceAreasBlock />

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Singapore Changi airport pickup",
          "Changi airport to hotel taxi India",
          "Singapore airport private transfer INR",
          "Changi to Orchard Road cab",
          "Singapore airport pickup price",
        ]} />
      </>
    ),
    faqs: [
      { question: "Where will the driver wait at Changi Airport?", answer: "The driver waits at the arrival hall (Terminal 1, 2, 3 or 4 based on your flight) with a name board displaying your name." },
      { question: "What pickup time should I select?", answer: "Please select a pickup time approximately 2.5 hours after your flight's scheduled landing time to allow for immigration and baggage." },
      { question: "Which areas do you cover for hotel drop-off?", answer: "Geylang lor 1–22, Little India, Orchard, Tanjong Pagar, Chinatown and Village Hotel Bugis." },
      { question: "Can I pay in INR?", answer: "Yes, you can pay in INR online before travel — convenient for Indian families." },
      { question: "What are the vehicle options?", answer: "A 5-seater for small groups and a 10-seater for larger groups. Choose based on your group size and luggage." },
    ],
  },

  // 2
  "singapore-airport-dropoff": {
    newSlug: "/singapore/singapore-airport-dropoff",
    oldSlug: "/singapore/airport-dropoff",
    gallery: airportDropoffGallery,
    seoContent: (
      <>
        <h2>Singapore Hotel to Changi Airport Private Transfer</h2>
        <p>
          End your Singapore holiday stress-free with a private hotel-to-airport drop-off to Changi Airport. Your driver arrives at your hotel lobby on time, helps with luggage and takes you directly to Changi without shared stops or detours. Available throughout the day from 7:00 AM to 9:30 PM in 5-seater and 10-seater options.
        </p>

        <h3>Why Pre-Book Your Departure Transfer</h3>
        <ul>
          <li>Guaranteed on-time pickup — no last-minute Grab search</li>
          <li>Fixed price in INR with no surge during peak hours</li>
          <li>Door-to-door comfort with luggage assistance</li>
          <li>Air-conditioned 5-seater or 10-seater vehicle</li>
          <li>Pickup time recommended 3 hours before international flight</li>
        </ul>

        <h3>Recommended Pickup Time From Major Areas</h3>
        <ul>
          <li>Orchard Road: 3 hours before flight (~30 min drive)</li>
          <li>Marina Bay / Tanjong Pagar: 3 hours before flight (~30 min)</li>
          <li>Little India / Bugis: 3 hours before flight (~25 min)</li>
          <li>Chinatown: 3 hours before flight (~30 min)</li>
          <li>Geylang: 3 hours before flight (~25 min)</li>
        </ul>

        <h3>Vehicle Options</h3>
        <h4>5 Seater</h4>
        <ul><li>Couples and small families with 2–4 bags</li></ul>
        <h4>10 Seater</h4>
        <ul><li>Groups of up to 10 with multiple suitcases</li></ul>

        <h3>Hotel Pickup Process</h3>
        <p>Please be ready in the hotel lobby 15 minutes before the pickup time to avoid any delays. Provide accurate hotel address details during booking. The driver will wait up to 15 minutes at the lobby; failure to report within the designated time is treated as a No-Show with no refund.</p>

        <ServiceAreasBlock />

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Singapore hotel to Changi airport",
          "Singapore airport drop taxi price",
          "Orchard to Changi airport private cab",
          "Singapore departure transfer India",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should the pickup be?", answer: "We recommend leaving 3 hours before international flights from Orchard, Marina Bay or Chinatown." },
      { question: "What if I'm not in the lobby at pickup time?", answer: "Drivers wait 15 minutes at the lobby. Failure to report on time is treated as a No-Show with no refund or rescheduling." },
      { question: "Can I pay in INR?", answer: "Yes, INR online payment is accepted before travel." },
      { question: "Which areas do you cover for hotel pickup?", answer: "Geylang lor 1–22, Little India, Orchard, Tanjong Pagar, Chinatown and Village Hotel Bugis." },
    ],
  },

  // 3
  "singapore-airport-night-pickup": {
    newSlug: "/singapore/singapore-airport-night-pickup",
    oldSlug: "/singapore/airport-night-pickup",
    gallery: airportNightPickupGallery,
    seoContent: (
      <>
        <h2>Singapore Changi Airport Night Private Transfer (10:00 PM – 6:30 AM)</h2>
        <p>
          Many international flights from India land in Singapore late at night or in the early hours. Our private night transfer from Changi Airport ensures a safe, fixed-price ride to your city hotel — no late-night Grab surge, no shared shuttles and no stress. Available from 10:00 PM to 6:30 AM in 5-seater and 10-seater vehicles.
        </p>

        <h3>Why Book a Night Transfer in Advance</h3>
        <ul>
          <li>Guaranteed driver waiting at arrivals — no risk of missing rides at night</li>
          <li>Fixed INR pricing with night surcharge built in (no surprises)</li>
          <li>Air-conditioned 5-seater or 10-seater vehicle</li>
          <li>Direct hotel drop-off in Orchard, Little India, Bugis, Chinatown, Tanjong Pagar, Geylang</li>
          <li>Free flight tracking for delayed late-night arrivals</li>
          <li>Helpful for solo female travelers, families with kids and elderly parents</li>
        </ul>

        <h3>Available Pickup Time Slots</h3>
        <p>Night pickups operate at every 30-minute slot from 10:00 PM through 6:30 AM, including 12:05 AM, 12:30 AM, 1:00 AM, 2:00 AM, 3:00 AM, 4:00 AM, 5:00 AM and 6:00 AM windows — perfect for typical India-Singapore red-eye arrivals.</p>

        <h3>Changi Airport to Hotel — Travel Time at Night</h3>
        <ul>
          <li>Changi → Orchard Road: ~25 min (lighter traffic at night)</li>
          <li>Changi → Marina Bay: ~25 min</li>
          <li>Changi → Little India / Bugis: ~20 min</li>
          <li>Changi → Chinatown / Tanjong Pagar: ~25 min</li>
          <li>Changi → Geylang: ~20 min</li>
        </ul>

        <h3>Vehicle Options</h3>
        <h4>5 Seater</h4>
        <ul><li>Couples and small families with 2–4 bags</li></ul>
        <h4>10 Seater</h4>
        <ul><li>Groups of up to 10 with multiple suitcases</li></ul>

        <ServiceAreasBlock />

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Singapore airport night pickup",
          "Changi late night taxi India",
          "Singapore airport pickup midnight",
          "Changi to Orchard 2 AM transfer",
          "Singapore red-eye flight private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "What hours count as night transfers?", answer: "Night transfers operate from 10:00 PM through 6:30 AM with 30-minute pickup slots throughout." },
      { question: "Is there a night surcharge?", answer: "The fixed price already includes the night surcharge — no additional charge at the airport." },
      { question: "Will the driver wait if my flight is delayed?", answer: "Yes, free flight tracking is included with reasonable free waiting time even at night." },
      { question: "Is it safe for solo travelers?", answer: "Yes, all drivers are licensed and verified. The vehicle is private — no other passengers — making it ideal for solo female travelers and families." },
      { question: "Which areas do you cover for hotel drop-off?", answer: "Geylang lor 1–22, Little India, Orchard, Tanjong Pagar, Chinatown and Village Hotel Bugis." },
    ],
  },
};
