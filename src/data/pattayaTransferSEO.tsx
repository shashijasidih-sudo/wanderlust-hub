import { ReactNode } from "react";
import type { TransferFAQ, TransferGalleryImage } from "@/components/TransferBooking";

// Pattaya & Bangkok themed gallery imagery (reusing existing assets)
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";
import bangkokCityNight1 from "@/assets/bangkok-city-night-1.jpg";
import bangkokBridgeDay from "@/assets/bangkok-bridge-day-1.jpg";
import bangkokBridgeTwilight from "@/assets/bangkok-bridge-twilight-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokRiverside from "@/assets/bangkok-riverside-temple-1.jpg";
import grandPalaceBuddha from "@/assets/grand-palace-buddha.jpg";
import grandPalacePagoda from "@/assets/grand-palace-pagoda.jpg";
import grandPalaceWatArun from "@/assets/grand-palace-wat-arun.jpg";
import grandPalaceTemple from "@/assets/grand-palace-temple-1.jpg";
import elephantSafari from "@/assets/elephant-safari-hero.jpg";
import pattayaBeach from "@/assets/pattaya-tropical-beach-1.jpg";
import pattayaBoats from "@/assets/pattaya-boats-beach-1.jpg";
import pattayaNightlife from "@/assets/pattaya-nightlife-1.jpg";
import cityPattaya from "@/assets/city-pattaya.jpg";

// ---------- Common gallery presets ----------
const bkkToPattayaGallery: TransferGalleryImage[] = [
  { src: bangkokCityNight1, alt: "Suvarnabhumi Airport arrival ready for Pattaya transfer" },
  { src: bangkokBridgeDay, alt: "Bangkok motorway en route to Pattaya beach hotels" },
  { src: pattayaBeach, alt: "Pattaya tropical beach welcomes Bangkok arrivals" },
  { src: cityPattaya, alt: "Pattaya city skyline drop-off point" },
];

const dmkToPattayaGallery: TransferGalleryImage[] = [
  { src: bangkokCity1, alt: "Don Mueang Airport pickup for Pattaya travelers" },
  { src: bangkokBridgeDay, alt: "Bangkok-Pattaya highway from DMK Airport" },
  { src: pattayaBoats, alt: "Pattaya boats and beachfront resort area" },
  { src: pattayaBeach, alt: "Pattaya hotel drop-off at the beach" },
];

const tigerTopiaGallery: TransferGalleryImage[] = [
  { src: bangkokTemple3, alt: "Tiger Topia Sriracha Zoo stop on the way to Pattaya" },
  { src: elephantSafari, alt: "Wildlife sightings during Sriracha Tiger Topia stop" },
  { src: bangkokBridgeDay, alt: "Highway from Bangkok airport to Sriracha and Pattaya" },
  { src: pattayaBeach, alt: "Pattaya hotel arrival after Tiger Topia visit" },
];

const pattayaToBkkGallery: TransferGalleryImage[] = [
  { src: pattayaNightlife, alt: "Pattaya hotel pickup heading to Bangkok airport" },
  { src: bangkokBridgeTwilight, alt: "Twilight drive from Pattaya to Suvarnabhumi" },
  { src: bangkokCityNight1, alt: "Bangkok skyline at night en route to BKK" },
  { src: bangkokRiverside, alt: "Bangkok riverside on the way to airport" },
];

const pattayaToDmkGallery: TransferGalleryImage[] = [
  { src: cityPattaya, alt: "Pattaya hotel departure for Don Mueang Airport" },
  { src: bangkokBridgeTwilight, alt: "Bangkok highway towards Don Mueang Airport" },
  { src: bangkokCity2, alt: "Don Mueang district approaching the airport" },
  { src: bangkokBridgeDay, alt: "Smooth Bangkok expressway to DMK terminal" },
];

const templeBkkGallery: TransferGalleryImage[] = [
  { src: pattayaBeach, alt: "Pattaya hotel pickup before Bangkok temple tour" },
  { src: grandPalaceWatArun, alt: "Wat Arun temple tour stop in Bangkok" },
  { src: bangkokTemple1, alt: "Wat Pho reclining Buddha in Bangkok" },
  { src: bangkokCityNight1, alt: "Suvarnabhumi airport drop after temple tour" },
];

const templeDmkGallery: TransferGalleryImage[] = [
  { src: pattayaBoats, alt: "Pattaya hotel pickup heading to Bangkok temples" },
  { src: grandPalaceBuddha, alt: "Bangkok Golden Buddha temple tour" },
  { src: bangkokTemple2, alt: "Marble temple visit en route to DMK" },
  { src: bangkokCity1, alt: "Don Mueang airport drop-off after temple tour" },
];

const safariBkkGallery: TransferGalleryImage[] = [
  { src: pattayaBeach, alt: "Pattaya hotel pickup heading to Safari World" },
  { src: elephantSafari, alt: "Safari World Bangkok wildlife park" },
  { src: bangkokTemple3, alt: "Safari Park animals open zoo Bangkok" },
  { src: bangkokCityNight1, alt: "Suvarnabhumi airport drop after Safari World" },
];

const indraSquareGallery: TransferGalleryImage[] = [
  { src: pattayaNightlife, alt: "Pattaya hotel departure for Indra Square shopping" },
  { src: bangkokCity2, alt: "Indra Square Pratunam Bangkok shopping district" },
  { src: bangkokCity1, alt: "Bangkok shopping bags loaded for airport drop" },
  { src: bangkokBridgeDay, alt: "Don Mueang Airport approach after shopping" },
];

const pattayaCityGallery: TransferGalleryImage[] = [
  { src: cityPattaya, alt: "Pattaya city private car for 4 hours" },
  { src: pattayaNightlife, alt: "Walking Street Pattaya nightlife by private car" },
  { src: pattayaBoats, alt: "Pattaya beach sightseeing by private car" },
  { src: pattayaBeach, alt: "Pattaya tropical beach private car tour" },
];

const pattayaToBangkokHotelGallery: TransferGalleryImage[] = [
  { src: cityPattaya, alt: "Pattaya hotel pickup heading to Bangkok hotel" },
  { src: bangkokBridgeDay, alt: "Bangkok-Pattaya expressway transfer" },
  { src: bangkokCity1, alt: "Bangkok Sukhumvit hotel district drop-off" },
  { src: bangkokRiverside, alt: "Bangkok riverside hotel arrival" },
];

const pattayaToBangkokCityTourGallery: TransferGalleryImage[] = [
  { src: cityPattaya, alt: "Pattaya hotel pickup before Bangkok city tour" },
  { src: grandPalaceTemple, alt: "Bangkok Grand Palace stop on city tour" },
  { src: grandPalacePagoda, alt: "Wat Pho Bangkok city tour" },
  { src: bangkokCity1, alt: "Bangkok hotel drop after city tour" },
];

const bangkokSafariPattayaGallery: TransferGalleryImage[] = [
  { src: bangkokCity1, alt: "Bangkok hotel pickup heading to Safari World" },
  { src: elephantSafari, alt: "Safari World Bangkok animal park" },
  { src: bangkokBridgeDay, alt: "Bangkok-Pattaya expressway after Safari World" },
  { src: pattayaBeach, alt: "Pattaya beach hotel arrival after Safari" },
];

const utapaoGallery: TransferGalleryImage[] = [
  { src: bangkokBridgeDay, alt: "U-Tapao Rayong-Pattaya Airport pickup road" },
  { src: pattayaBeach, alt: "Pattaya beach hotel from U-Tapao airport" },
  { src: cityPattaya, alt: "Pattaya city drop-off from U-Tapao Airport" },
  { src: pattayaBoats, alt: "Pattaya beachfront resort area arrival" },
];

// ---------- Reusable SEO blocks ----------
const IndianTravelersBlock = () => (
  <>
    <h3>Why Indian Travelers Prefer This Transfer</h3>
    <ul>
      <li>INR pricing for easy budgeting</li>
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

export const pattayaTransferSEO: Record<string, SEOEntry> = {
  // 1
  "pattaya-bkk-airport-pickup": {
    newSlug: "/thailand/bangkok/suvarnabhumi-airport-to-pattaya-hotel-transfer",
    oldSlug: "/thailand/pattaya/bkk-airport-pickup",
    gallery: bkkToPattayaGallery,
    seoContent: (
      <>
        <h2>Suvarnabhumi Airport (BKK) to Pattaya Hotel Private Transfer</h2>
        <p>
          Traveling directly from Suvarnabhumi International Airport (BKK) to Pattaya is one
          of the most popular routes for tourists arriving in Thailand. Many travelers
          choose to go directly to Pattaya after landing in Bangkok instead of staying in
          the city. Pattaya is famous for its beaches, nightlife, shopping, water sports
          and family attractions, making it one of the most visited destinations in Thailand.
        </p>
        <p>
          A private transfer from Suvarnabhumi Airport to your Pattaya hotel is one of the
          easiest and most comfortable ways to begin your trip. Instead of waiting in taxi
          queues, carrying luggage through bus terminals or dealing with multiple transport
          changes, you can enjoy direct hotel drop-off in Pattaya with a private
          air-conditioned vehicle.
        </p>
        <p>
          This transfer service is especially popular among Indian travelers, families,
          honeymoon couples, groups, senior citizens and travelers carrying extra luggage.
        </p>

        <h3>Why Choose a Private Transfer from Suvarnabhumi Airport to Pattaya Hotel</h3>
        <p>A private airport transfer saves time and gives you a stress-free start to your holiday.</p>
        <p>Benefits include:</p>
        <ul>
          <li>Direct pickup from Suvarnabhumi Airport</li>
          <li>Direct hotel drop-off in Pattaya</li>
          <li>Comfortable air-conditioned vehicle</li>
          <li>Fixed pricing with no hidden charges</li>
          <li>Flexible pickup based on flight timing</li>
          <li>Luggage assistance</li>
          <li>Safe and reliable service</li>
          <li>WhatsApp support before arrival</li>
          <li>Better for families and groups</li>
        </ul>
        <p>Private transfers are especially useful for travelers arriving after long international flights.</p>

        <h3>Suvarnabhumi Airport to Pattaya Distance and Travel Time</h3>
        <p>
          The distance from Suvarnabhumi Airport to Pattaya is approximately 120 to 150
          kilometers depending on your hotel location. Travel time is usually between 1.5
          and 2.5 hours depending on traffic and drop-off location.
        </p>
        <p>Approximate travel times:</p>
        <ul>
          <li>Central Pattaya: 1.5 to 2 hours</li>
          <li>North Pattaya: 1.5 to 2 hours</li>
          <li>South Pattaya: 2 to 2.5 hours</li>
          <li>Jomtien: 2 to 2.5 hours</li>
          <li>Na Jomtien: 2 to 2.5 hours</li>
        </ul>
        <p>Traffic can be heavier on weekends, public holidays and Friday evenings, so it is always better to allow extra time.</p>

        <h3>Popular Pattaya Hotel Drop-Off Areas</h3>
        <p>This transfer service covers most major hotel areas in Pattaya:</p>
        <ul>
          <li>Central Pattaya</li>
          <li>South Pattaya</li>
          <li>North Pattaya</li>
          <li>Jomtien and Na Jomtien</li>
          <li>Walking Street area</li>
          <li>Pattaya Beach Road</li>
          <li>Family resorts and luxury beachfront hotels</li>
        </ul>

        <h3>Vehicle Options Available</h3>
        <h4>Sedan Transfer</h4>
        <ul>
          <li>Couples and solo travelers</li>
          <li>Small families with 2-3 bags</li>
        </ul>
        <h4>SUV Transfer</h4>
        <ul>
          <li>Families with children</li>
          <li>Groups of 4 to 5 passengers with larger luggage</li>
        </ul>
        <h4>Van Transfer</h4>
        <ul>
          <li>Large families and groups of friends</li>
          <li>Travelers with multiple bags, strollers or shopping luggage</li>
        </ul>
        <p>Van transfers are especially useful for Indian families because they provide extra luggage space and comfortable seating.</p>

        <h3>Meet and Greet Service at Suvarnabhumi Airport</h3>
        <p>Your driver waits at the arrival area with a name board, making it easy to find your transfer after landing.</p>
        <ul>
          <li>Driver waiting at airport arrival hall</li>
          <li>Name board display</li>
          <li>Flight tracking in case of delays</li>
          <li>Waiting time after landing</li>
          <li>Luggage assistance</li>
          <li>Easy WhatsApp communication</li>
        </ul>

        <h3>Why Private Transfer is Better Than Bus or Taxi</h3>
        <p>Public transport often involves long taxi queues, multiple transport changes, fixed bus schedules and difficulty reaching your Pattaya hotel directly. Private transfer is easier because you travel directly from the airport to your hotel.</p>

        <IndianTravelersBlock />

        <h3>Best Time to Book Airport Transfer</h3>
        <p>Pre-book your airport transfer to avoid last-minute taxi stress, secure your preferred vehicle and lock in fixed pricing. Peak periods include December holidays, New Year, Songkran Festival, summer vacations and Indian festive periods.</p>

        <KeywordsBlock items={[
          "Suvarnabhumi to Pattaya transfer",
          "BKK airport to Pattaya hotel taxi",
          "Bangkok airport to Pattaya private cab",
          "BKK Pattaya transfer price India",
          "Suvarnabhumi Pattaya transfer for families",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long does it take from Suvarnabhumi Airport to Pattaya?", answer: "Travel time is usually between 1.5 and 2.5 hours depending on traffic and hotel location." },
      { question: "Is airport pickup available 24 hours?", answer: "Yes, transfers are available day and night. A small night surcharge applies between 12:00 AM and 6:00 AM." },
      { question: "Is hotel drop-off included?", answer: "Yes, direct Pattaya hotel drop-off is included." },
      { question: "Can I request a larger vehicle?", answer: "Yes, SUVs and vans are available for families and groups." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
      { question: "Is private transfer better than bus?", answer: "Yes, private transfer is more comfortable, faster and more convenient." },
    ],
  },

  // 2
  "pattaya-bkk-tiger-topia-pickup": {
    newSlug: "/thailand/bangkok/suvarnabhumi-airport-tiger-topia-to-pattaya-hotel-transfer",
    oldSlug: "/thailand/pattaya/bkk-tiger-topia-pickup",
    gallery: tigerTopiaGallery,
    seoContent: (
      <>
        <h2>Suvarnabhumi Airport (BKK) to Tiger Topia Sriracha Zoo to Pattaya Hotel Private Transfer</h2>
        <p>
          Combine your Bangkok arrival with a fun wildlife stop at Tiger Topia Sriracha Zoo
          on the way to your Pattaya hotel. This private transfer is perfect for families
          with children who want to make the most of the travel day instead of going straight
          to the hotel.
        </p>
        <p>
          You are picked up directly at Suvarnabhumi Airport, driven to Tiger Topia Sriracha
          Zoo for around 2-3 hours of sightseeing, and then dropped at your Pattaya hotel —
          all in one comfortable air-conditioned vehicle.
        </p>

        <h3>Why Add Tiger Topia Sriracha Zoo on the Way</h3>
        <ul>
          <li>Interactive animal experiences loved by kids</li>
          <li>Tiger photo opportunities and live shows</li>
          <li>Breaks the long airport-to-Pattaya journey into a fun day out</li>
          <li>No need for a separate Pattaya day-trip</li>
        </ul>

        <h3>Suggested Day Schedule</h3>
        <ul>
          <li>Land at Suvarnabhumi Airport and meet your driver</li>
          <li>Drive ~1 hour to Tiger Topia Sriracha</li>
          <li>Spend 2-3 hours at the zoo</li>
          <li>Continue 45-60 minutes to your Pattaya hotel</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families of 4-5 with luggage</li>
          <li>Van – large groups and travelers with strollers and extra bags</li>
        </ul>

        <h3>Why Private Transfer Beats Public Transport</h3>
        <p>Public transport would mean multiple changes, carrying luggage between buses and taxis, fixed schedules and difficulty reaching Tiger Topia and Pattaya hotel together. A private transfer keeps everything in one vehicle and one driver for the whole day.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "BKK airport Tiger Topia Pattaya transfer",
          "Suvarnabhumi to Tiger Topia Sriracha taxi",
          "Bangkok airport Pattaya zoo combo transfer",
          "Tiger Topia Sriracha Zoo private cab India",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are zoo tickets included?", answer: "No, Tiger Topia Sriracha Zoo entry tickets are paid separately at the gate." },
      { question: "Is Pattaya hotel drop included?", answer: "Yes, after the zoo your driver continues directly to your Pattaya hotel." },
      { question: "How long is the total trip?", answer: "Roughly 5-6 hours including the zoo visit and drives." },
      { question: "Is this trip good for kids?", answer: "Yes, families with children love the interactive animal experiences." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 3
  "pattaya-dmk-airport-pickup": {
    newSlug: "/thailand/bangkok/don-mueang-airport-to-pattaya-hotel-transfer",
    oldSlug: "/thailand/pattaya/dmk-airport-pickup",
    gallery: dmkToPattayaGallery,
    seoContent: (
      <>
        <h2>Don Mueang Airport (DMK) to Pattaya Hotel Private Transfer</h2>
        <p>
          Don Mueang International Airport (DMK) is the second main airport serving Bangkok
          and is heavily used by low-cost airlines from India and Southeast Asia. After
          landing, many travelers prefer to head directly to Pattaya rather than stay
          overnight in Bangkok.
        </p>
        <p>
          A private transfer from Don Mueang Airport to your Pattaya hotel saves time and
          removes the stress of arranging transport after arrival. Instead of long taxi
          queues, you simply meet your driver at the arrival hall and travel direct to your
          Pattaya hotel.
        </p>

        <h3>Benefits of a Private DMK to Pattaya Transfer</h3>
        <ul>
          <li>Direct pickup from Don Mueang Airport</li>
          <li>Direct hotel drop-off in Pattaya</li>
          <li>Air-conditioned vehicles with luggage assistance</li>
          <li>Flexible pickup based on flight timing</li>
          <li>Fixed INR-friendly pricing with no hidden charges</li>
          <li>WhatsApp support before and after arrival</li>
        </ul>

        <h3>Distance and Travel Time</h3>
        <p>The distance from Don Mueang Airport to Pattaya is approximately 160 to 180 km. Travel time is usually 2 to 2.5 hours depending on traffic and your Pattaya hotel area.</p>

        <h3>Popular Pattaya Hotel Drop-Off Areas</h3>
        <ul>
          <li>Central Pattaya</li>
          <li>North Pattaya and South Pattaya</li>
          <li>Jomtien and Na Jomtien</li>
          <li>Walking Street and Pattaya Beach Road</li>
          <li>Family resorts and luxury beachfront hotels</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families of 4-5 with extra luggage</li>
          <li>Van – large families, friends groups and travelers with multiple bags</li>
        </ul>

        <h3>Meet and Greet at Don Mueang</h3>
        <p>Your driver waits with a name board at the arrival hall. Flight tracking, waiting time after landing and luggage assistance are all included.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "DMK to Pattaya transfer",
          "Don Mueang airport Pattaya taxi",
          "Bangkok DMK Pattaya private cab",
          "Don Mueang Pattaya transfer price India",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long does it take from DMK to Pattaya?", answer: "About 2 to 2.5 hours depending on traffic and your Pattaya hotel location." },
      { question: "Is night pickup available?", answer: "Yes, transfers run 24/7. A small night surcharge applies between 12:00 AM and 6:00 AM." },
      { question: "Is the price fixed?", answer: "Yes, the price is fixed at the time of booking with no hidden charges." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 4
  "pattaya-dmk-tiger-topia-pickup": {
    newSlug: "/thailand/bangkok/don-mueang-airport-tiger-topia-to-pattaya-hotel-transfer",
    oldSlug: "/thailand/pattaya/dmk-tiger-topia-pickup",
    gallery: tigerTopiaGallery,
    seoContent: (
      <>
        <h2>Don Mueang Airport (DMK) to Tiger Topia Sriracha Zoo to Pattaya Hotel Private Transfer</h2>
        <p>
          Make the most of your travel day by combining your DMK Airport pickup with a
          family-friendly visit to Tiger Topia Sriracha Zoo before checking into your Pattaya
          hotel. One private vehicle, one driver, one stress-free day.
        </p>

        <h3>Why Travelers Love This Combo</h3>
        <ul>
          <li>Saves a separate Pattaya day-trip to the zoo</li>
          <li>Children can stretch their legs after a long flight</li>
          <li>Tiger photo opportunities and animal shows</li>
          <li>Direct hotel drop-off after the visit</li>
        </ul>

        <h3>Suggested Schedule</h3>
        <ul>
          <li>Land at Don Mueang Airport and meet your driver</li>
          <li>Drive towards Sriracha (~1.5 hours)</li>
          <li>Spend 2-3 hours at Tiger Topia Sriracha Zoo</li>
          <li>Continue 45-60 minutes to your Pattaya hotel</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families of 4-5 with luggage</li>
          <li>Van – large groups and travelers with strollers and extra bags</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "DMK Tiger Topia Pattaya combo transfer",
          "Don Mueang to Tiger Topia Sriracha taxi",
          "DMK Pattaya zoo private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are zoo tickets included?", answer: "No, Tiger Topia Sriracha Zoo tickets are paid at the gate." },
      { question: "Total trip duration?", answer: "Roughly 6 hours from DMK pickup to Pattaya hotel drop." },
      { question: "Is Pattaya hotel drop included?", answer: "Yes, hotel drop-off in Pattaya is included after the zoo visit." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 5
  "pattaya-bkk-airport-dropoff": {
    newSlug: "/thailand/pattaya/pattaya-hotel-to-suvarnabhumi-airport-transfer",
    oldSlug: "/thailand/pattaya/bkk-airport-dropoff",
    gallery: pattayaToBkkGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Suvarnabhumi Airport (BKK) Private Transfer</h2>
        <p>
          End your Pattaya holiday with a stress-free private departure transfer straight
          from your hotel to Suvarnabhumi International Airport (BKK). No taxi haggling, no
          shared minibuses and no luggage hassles — just a clean, air-conditioned vehicle
          and a professional driver.
        </p>

        <h3>Why Choose a Private Departure Transfer</h3>
        <ul>
          <li>On-time hotel pickup based on your flight</li>
          <li>Direct, non-stop drive to Suvarnabhumi Airport</li>
          <li>Comfortable air-conditioned vehicles</li>
          <li>Fixed pricing in INR/THB with no surge</li>
          <li>WhatsApp support before departure</li>
          <li>Luggage assistance and safe driving</li>
        </ul>

        <h3>Recommended Pickup Timing</h3>
        <ul>
          <li>International flights: pickup at least 4 hours before departure</li>
          <li>Domestic flights: pickup at least 3 hours before departure</li>
          <li>Allow extra time during weekends and holidays</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and solo travelers</li>
          <li>SUV – families with kids and extra bags</li>
          <li>Van – large families and groups with multiple shopping bags</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya to Suvarnabhumi transfer",
          "Pattaya to BKK airport taxi",
          "Pattaya hotel to Bangkok airport private cab",
          "Pattaya BKK drop INR price",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should the driver pick me up?", answer: "We recommend leaving Pattaya at least 4 hours before international flights." },
      { question: "Can I be picked up from any Pattaya hotel?", answer: "Yes, we cover all major Pattaya, Jomtien and Na Jomtien hotels." },
      { question: "Is night drop available?", answer: "Yes, 24/7 service is available with a small night surcharge between 12:00 AM and 6:00 AM." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 6
  "pattaya-temple-tour-bkk-airport": {
    newSlug: "/thailand/pattaya/pattaya-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer",
    oldSlug: "/thailand/pattaya/temple-tour-bkk-airport",
    gallery: templeBkkGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Bangkok 2 Temple Tour to Suvarnabhumi Airport (BKK) Private Transfer</h2>
        <p>
          Make your last day in Thailand count. This private transfer collects you from
          your Pattaya hotel, takes you on a guided visit to two iconic Bangkok temples and
          then drops you at Suvarnabhumi Airport in time for your flight — all without
          backtracking.
        </p>

        <h3>Popular Temple Choices</h3>
        <ul>
          <li><strong>Wat Arun</strong> – the Temple of Dawn on the Chao Phraya River</li>
          <li><strong>Wat Pho</strong> – home of the giant Reclining Buddha</li>
          <li><strong>Marble Temple</strong> – elegant white marble Thai architecture</li>
          <li><strong>Wat Traimit</strong> – the Golden Buddha temple in Chinatown</li>
        </ul>

        <h3>Why This Tour + Transfer Works So Well</h3>
        <ul>
          <li>Flexible sightseeing time on your last day</li>
          <li>Direct airport drop after the temples</li>
          <li>No need to book a separate Bangkok day-trip</li>
          <li>Luggage stays safely in the vehicle</li>
        </ul>

        <h3>Suggested Day Plan</h3>
        <ul>
          <li>Pattaya hotel pickup in the morning</li>
          <li>Drive to Bangkok (~2 hours)</li>
          <li>Visit two temples with photo stops</li>
          <li>Drop at Suvarnabhumi at least 3 hours before your flight</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya temple tour BKK drop",
          "Pattaya Bangkok temples Suvarnabhumi transfer",
          "Wat Arun Wat Pho Pattaya airport combo",
        ]} />
      </>
    ),
    faqs: [
      { question: "Is luggage allowed during the temple tour?", answer: "Yes, luggage stays securely in the vehicle during the trip." },
      { question: "Are temple entry tickets included?", answer: "Some temples have small entry fees paid at the gate; these are not included in the transfer price." },
      { question: "How early should we leave Pattaya?", answer: "We recommend leaving Pattaya 7-8 hours before your international flight to enjoy two temples comfortably." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 7
  "pattaya-safari-world-bkk-airport": {
    newSlug: "/thailand/pattaya/pattaya-hotel-safari-world-to-suvarnabhumi-airport-transfer",
    oldSlug: "/thailand/pattaya/safari-world-bkk-airport",
    gallery: safariBkkGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Safari World to Suvarnabhumi Airport (BKK) Private Transfer</h2>
        <p>
          Spend your last day in Thailand at Bangkok's Safari World — open zoo, marine park
          and live shows — then continue directly to Suvarnabhumi Airport without rushing
          back to your Pattaya hotel.
        </p>

        <h3>What's Included in the Day</h3>
        <ul>
          <li>Pattaya hotel pickup in the morning</li>
          <li>Drive to Safari World Bangkok (~2 hours)</li>
          <li>Time at Safari Park and Marine Park</li>
          <li>Direct drop at Suvarnabhumi Airport</li>
        </ul>

        <h3>Why Families Love This Combo</h3>
        <ul>
          <li>Kids enjoy a memorable last day in Thailand</li>
          <li>No back-and-forth to Pattaya before the airport</li>
          <li>Luggage stays safely in the vehicle</li>
          <li>One driver, one fixed price</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya Safari World BKK transfer",
          "Pattaya to Safari World to Suvarnabhumi",
          "Safari World combo airport drop",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are Safari World tickets included?", answer: "No, Safari World entry tickets are paid separately at the gate." },
      { question: "Is luggage allowed in the vehicle?", answer: "Yes, your luggage stays safely in the vehicle throughout the day." },
      { question: "When should I leave Pattaya?", answer: "We recommend leaving early morning to comfortably enjoy Safari World and reach the airport on time." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 8
  "pattaya-dmk-airport-dropoff": {
    newSlug: "/thailand/pattaya/pattaya-hotel-to-don-mueang-airport-transfer",
    oldSlug: "/thailand/pattaya/dmk-airport-dropoff",
    gallery: pattayaToDmkGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Don Mueang Airport (DMK) Private Transfer</h2>
        <p>
          Heading home on a low-cost airline from Don Mueang Airport? Skip the bus
          terminals and noisy minivans — book a comfortable private transfer straight from
          your Pattaya hotel to DMK.
        </p>

        <h3>Why Choose Private Transfer to DMK</h3>
        <ul>
          <li>Direct hotel pickup at your scheduled time</li>
          <li>Non-stop drive to Don Mueang Airport</li>
          <li>Comfortable air-conditioned vehicles</li>
          <li>Fixed pricing with no hidden costs</li>
          <li>Luggage assistance and safe driving</li>
          <li>Reliable for early morning and late-night flights</li>
        </ul>

        <h3>Distance and Travel Time</h3>
        <p>The distance from Pattaya to Don Mueang Airport is approximately 160 to 180 km, with travel time around 2 to 2.5 hours depending on traffic.</p>

        <h3>Recommended Pickup Timing</h3>
        <ul>
          <li>International flights: pickup at least 4 hours before departure</li>
          <li>Domestic flights: pickup at least 3 hours before departure</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya to DMK transfer",
          "Pattaya to Don Mueang airport taxi",
          "Pattaya hotel DMK private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long does the journey take?", answer: "About 2 to 2.5 hours depending on traffic and your hotel area." },
      { question: "Is night drop available?", answer: "Yes, 24/7 service is available with a small night surcharge between 12:00 AM and 6:00 AM." },
      { question: "Is the price fixed?", answer: "Yes, fixed pricing is confirmed at booking with no surge." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 9
  "pattaya-temple-tour-dmk-airport": {
    newSlug: "/thailand/pattaya/pattaya-hotel-two-temple-tour-to-don-mueang-airport-transfer",
    oldSlug: "/thailand/pattaya/temple-tour-dmk-airport",
    gallery: templeDmkGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to 2 Temple Tour to Don Mueang Airport (DMK) Private Transfer</h2>
        <p>
          Visit two iconic Bangkok temples on your way to Don Mueang Airport. This private
          transfer combines a relaxed cultural day with a stress-free airport drop in one
          single vehicle.
        </p>

        <h3>Popular Temple Choices</h3>
        <ul>
          <li>Wat Arun – Temple of Dawn</li>
          <li>Wat Pho – Reclining Buddha</li>
          <li>Marble Temple – elegant Thai architecture</li>
          <li>Wat Traimit – the Golden Buddha</li>
        </ul>

        <h3>Why Indian Travelers Prefer Temple Tour with Airport Drop</h3>
        <ul>
          <li>Convenient for families and elderly parents</li>
          <li>Luggage stays in the vehicle</li>
          <li>WhatsApp support and INR pricing</li>
          <li>One driver for the whole day</li>
        </ul>

        <h3>Suggested Day Plan</h3>
        <ul>
          <li>Pattaya hotel pickup in the morning</li>
          <li>Drive to Bangkok (~2 hours)</li>
          <li>Visit two temples with photo stops</li>
          <li>Drop at Don Mueang Airport at least 3 hours before your flight</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya temple tour DMK drop",
          "Pattaya Bangkok temples Don Mueang transfer",
          "Wat Arun Wat Pho Pattaya DMK combo",
        ]} />
      </>
    ),
    faqs: [
      { question: "Is luggage allowed during the temple tour?", answer: "Yes, luggage stays securely in the vehicle." },
      { question: "Are entry tickets included?", answer: "Small temple entry fees are paid at the gate and are not included in the transfer price." },
      { question: "When should I leave Pattaya?", answer: "Leave Pattaya 7-8 hours before your international flight for a comfortable day." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 10
  "pattaya-indra-square-dmk-airport": {
    newSlug: "/thailand/pattaya/pattaya-hotel-indra-square-shopping-to-don-mueang-airport-transfer",
    oldSlug: "/thailand/pattaya/indra-square-dmk-airport",
    gallery: indraSquareGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Indra Square Shopping to Don Mueang Airport (DMK) Private Transfer</h2>
        <p>
          Tick off your Bangkok shopping list before flying home. This private transfer
          takes you from your Pattaya hotel to the wholesale shopping paradise of Indra
          Square (Pratunam area), then continues to Don Mueang Airport — all in one vehicle
          with luggage on board.
        </p>

        <h3>Why Shoppers Love This Combo</h3>
        <ul>
          <li>Hands-free shopping with luggage in the vehicle</li>
          <li>Wholesale prices on clothes, accessories and souvenirs</li>
          <li>No backtracking to a Bangkok hotel</li>
          <li>Driver helps load shopping bags</li>
        </ul>

        <h3>Suggested Day Plan</h3>
        <ul>
          <li>Pattaya hotel pickup mid-morning</li>
          <li>Drive to Indra Square (~2 hours)</li>
          <li>2-3 hours of shopping</li>
          <li>Continue to Don Mueang Airport</li>
        </ul>

        <h3>Vehicle Recommendation</h3>
        <p>Choose a Mini Van if you plan to shop heavily — extra space helps a lot for last-minute purchases.</p>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya Indra Square DMK transfer",
          "Pattaya Pratunam shopping airport drop",
          "Pattaya wholesale shopping Don Mueang taxi",
        ]} />
      </>
    ),
    faqs: [
      { question: "How much time do I get for shopping?", answer: "Typically 2-3 hours at Indra Square, customizable on the day." },
      { question: "Is luggage safe in the vehicle?", answer: "Yes, luggage stays in the vehicle while you shop." },
      { question: "Is this service good for shoppers?", answer: "Yes, it is one of the best combos for travelers who want last-minute shopping before flying." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 11
  "pattaya-city-hourly-rental": {
    newSlug: "/thailand/pattaya/pattaya-private-car-4-hours",
    oldSlug: "/thailand/pattaya/city-hourly-rental",
    gallery: pattayaCityGallery,
    seoContent: (
      <>
        <h2>Pattaya City Private Car (4 Hours)</h2>
        <p>
          Hire a private car for 4 hours within Pattaya City and explore at your own pace.
          Visit temples, shopping malls, beaches, viewpoints or restaurants without
          worrying about taxis, fares or language barriers.
        </p>

        <h3>Popular Uses for Pattaya Private Car Service</h3>
        <ul>
          <li>Temples: Buddha Mountain, Big Buddha, Pattaya View Point</li>
          <li>Sightseeing: Tiger Topia, Khao Kheow Zoo, Cabaret Show, Dolphinarium</li>
          <li>Shopping: Night Bazaar, Central Festival, Terminal 21</li>
          <li>Indian food: Khodiyar Dhaba, Gordhan Thal, Alibaba, Jai Jinendra, Amritsr</li>
          <li>Nightlife: Walking Street, Soi 6, Tree Town</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families with kids</li>
          <li>Van – large groups and travelers with multiple bags</li>
        </ul>

        <h3>Why Indian Travelers Prefer This</h3>
        <ul>
          <li>WhatsApp support and INR pricing</li>
          <li>Comfortable for elderly parents</li>
          <li>Easy luggage handling</li>
          <li>Convenient for families with kids</li>
          <li>No taxi fare negotiation</li>
        </ul>

        <KeywordsBlock items={[
          "Pattaya private car 4 hours",
          "Pattaya hourly car hire",
          "Pattaya city tour private cab India",
          "Walking Street Pattaya private car",
        ]} />
      </>
    ),
    faqs: [
      { question: "Is the service available outside Pattaya City?", answer: "No, this service is valid only within Pattaya City. Travel outside Pattaya will incur an extra charge payable to the driver." },
      { question: "Are attraction tickets included?", answer: "No, the booking includes transportation only. Attraction tickets are paid at the gate." },
      { question: "What if I exceed 4 hours?", answer: "Overtime is charged at 500 THB per hour, payable directly to the driver." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 12 — NEW
  "pattaya-to-bangkok-hotel": {
    newSlug: "/thailand/pattaya/pattaya-hotel-to-bangkok-hotel-transfer",
    oldSlug: "/thailand/pattaya/pattaya-hotel-to-bangkok-hotel-transfer",
    gallery: pattayaToBangkokHotelGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Bangkok Hotel Private Transfer</h2>
        <p>
          Continuing your Thailand holiday from Pattaya to Bangkok? Skip the bus terminals
          and shared minivans — this private transfer takes you directly from your Pattaya
          hotel to your Bangkok hotel with door-to-door service.
        </p>

        <h3>Why Choose a Private Pattaya–Bangkok Transfer</h3>
        <ul>
          <li>Direct hotel-to-hotel service in both cities</li>
          <li>Air-conditioned vehicles with luggage assistance</li>
          <li>Flexible pickup time</li>
          <li>Fixed pricing with no surge</li>
          <li>Better for families, elderly parents and groups</li>
          <li>WhatsApp support throughout</li>
        </ul>

        <h3>Distance and Travel Time</h3>
        <p>The distance from Pattaya to Bangkok is approximately 150 km. Travel time is 1.5 to 2.5 hours depending on Bangkok traffic and your hotel location.</p>

        <h3>Popular Bangkok Hotel Areas Covered</h3>
        <ul>
          <li>Sukhumvit and Asok</li>
          <li>Siam and Pratunam</li>
          <li>Silom and Sathorn</li>
          <li>Riverside (Chao Phraya)</li>
          <li>Chinatown and Khao San area</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families with extra luggage</li>
          <li>Van – large groups and shopping-heavy travelers</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya to Bangkok transfer",
          "Pattaya hotel to Bangkok hotel taxi",
          "Pattaya Bangkok private cab India",
          "Pattaya to Sukhumvit transfer price",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long does the journey take?", answer: "About 1.5 to 2.5 hours depending on Bangkok traffic." },
      { question: "Is the drop directly at my Bangkok hotel?", answer: "Yes, this is a door-to-door hotel-to-hotel service." },
      { question: "Is night transfer available?", answer: "Yes, 24/7 service is available with a small night surcharge between 12:00 AM and 6:00 AM." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 13 — NEW
  "pattaya-to-bangkok-city-tour": {
    newSlug: "/thailand/pattaya/pattaya-to-bangkok-city-tour-and-hotel-transfer",
    oldSlug: "/thailand/pattaya/pattaya-to-bangkok-city-tour",
    gallery: pattayaToBangkokCityTourGallery,
    seoContent: (
      <>
        <h2>Pattaya Hotel to Bangkok City Tour to Bangkok Hotel Private Transfer</h2>
        <p>
          Combine your Pattaya–Bangkok transfer with a guided Bangkok city tour. This
          full-day private service picks you up at your Pattaya hotel, takes you on a
          sightseeing tour of Bangkok's top attractions and ends with a comfortable drop at
          your Bangkok hotel.
        </p>

        <h3>What the Tour Typically Covers</h3>
        <ul>
          <li>Wat Arun – the Temple of Dawn</li>
          <li>Wat Pho – the Reclining Buddha</li>
          <li>Grand Palace area photo stop</li>
          <li>Chinatown drive-through</li>
          <li>Chao Phraya riverside views</li>
        </ul>

        <h3>Why Travelers Love This Combo</h3>
        <ul>
          <li>No need to book a separate Bangkok day-tour</li>
          <li>Luggage stays safely in the vehicle</li>
          <li>One driver for the whole day</li>
          <li>Flexible itinerary on the day</li>
        </ul>

        <h3>Suggested Day Plan</h3>
        <ul>
          <li>Morning pickup from Pattaya hotel</li>
          <li>Drive to Bangkok (~2 hours)</li>
          <li>Sightseeing with photo stops</li>
          <li>Lunch break (Indian/Thai restaurant)</li>
          <li>Drop at your Bangkok hotel by evening</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Pattaya Bangkok city tour transfer",
          "Pattaya to Bangkok temples and hotel drop",
          "Pattaya Bangkok sightseeing private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are temple entry tickets included?", answer: "No, small entry fees are paid at the gate where applicable." },
      { question: "Is luggage allowed during the tour?", answer: "Yes, luggage stays safely in the vehicle throughout the day." },
      { question: "How long is the tour?", answer: "Typically 8-10 hours including the drive from Pattaya and the city tour." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 14 — NEW
  "bangkok-safari-world-pattaya": {
    newSlug: "/thailand/bangkok/bangkok-hotel-safari-world-to-pattaya-hotel-transfer",
    oldSlug: "/thailand/bangkok/bangkok-safari-world-pattaya",
    gallery: bangkokSafariPattayaGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel to Bangkok Safari World to Pattaya Hotel Private Transfer</h2>
        <p>
          Visit Safari World Bangkok on your way from your Bangkok hotel to Pattaya. This
          private transfer combines a fun-filled day at one of Bangkok's most popular
          family attractions with a comfortable hotel-to-hotel transfer to Pattaya — all in
          one vehicle with luggage on board.
        </p>

        <h3>Why Families Love This Combo</h3>
        <ul>
          <li>Open Safari Park drive-through with wild animals</li>
          <li>Marine Park dolphin and sea lion shows</li>
          <li>No need for a separate Bangkok day-trip</li>
          <li>Direct Pattaya hotel drop after the visit</li>
        </ul>

        <h3>Suggested Day Plan</h3>
        <ul>
          <li>Morning pickup from your Bangkok hotel</li>
          <li>Drive to Safari World (~30-45 minutes)</li>
          <li>Spend 4-5 hours at Safari Park and Marine Park</li>
          <li>Continue to Pattaya (~2 hours) and drop at your hotel</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families with kids</li>
          <li>Van – large groups and luggage-heavy travelers</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "Bangkok Safari World Pattaya transfer",
          "Safari World combo Pattaya drop",
          "Bangkok hotel Safari World Pattaya private cab",
        ]} />
      </>
    ),
    faqs: [
      { question: "Are Safari World tickets included?", answer: "No, Safari World tickets are paid separately at the gate." },
      { question: "Is luggage safe in the vehicle?", answer: "Yes, luggage stays safely in the vehicle while you enjoy Safari World." },
      { question: "How long is the total trip?", answer: "Roughly 8-10 hours from Bangkok pickup to Pattaya hotel drop." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },

  // 15 — NEW
  "utapao-airport-to-pattaya": {
    newSlug: "/thailand/pattaya/u-tapao-airport-to-pattaya-hotel-transfer",
    oldSlug: "/thailand/pattaya/utapao-airport-pickup",
    gallery: utapaoGallery,
    seoContent: (
      <>
        <h2>U-Tapao Rayong-Pattaya International Airport (UTP) to Pattaya Hotel Private Transfer</h2>
        <p>
          U-Tapao Rayong-Pattaya International Airport (UTP) is the closest airport to
          Pattaya — just 30-45 minutes away. A private transfer from U-Tapao to your
          Pattaya hotel is the fastest and most comfortable way to start your Pattaya
          holiday after a domestic or short-haul international flight.
        </p>

        <h3>Why Choose a Private UTP to Pattaya Transfer</h3>
        <ul>
          <li>Direct pickup at U-Tapao Airport with name board</li>
          <li>Direct hotel drop-off in Pattaya</li>
          <li>Air-conditioned vehicles with luggage assistance</li>
          <li>Fixed INR-friendly pricing</li>
          <li>WhatsApp support before arrival</li>
          <li>Better than airport taxis or shared shuttles</li>
        </ul>

        <h3>Distance and Travel Time</h3>
        <p>U-Tapao Airport is approximately 35-45 km from Pattaya. Travel time is just 30 to 45 minutes depending on your hotel area.</p>

        <h3>Popular Pattaya Hotel Drop-Off Areas</h3>
        <ul>
          <li>Central, North and South Pattaya</li>
          <li>Jomtien and Na Jomtien</li>
          <li>Walking Street and Pattaya Beach Road</li>
          <li>Family resorts and luxury beachfront hotels</li>
        </ul>

        <h3>Vehicle Options</h3>
        <ul>
          <li>Sedan – couples and small families</li>
          <li>SUV – families with kids and extra bags</li>
          <li>Van – large groups and travelers with multiple bags</li>
        </ul>

        <IndianTravelersBlock />

        <KeywordsBlock items={[
          "U-Tapao to Pattaya transfer",
          "UTP airport Pattaya taxi",
          "Rayong Pattaya airport private cab",
          "U-Tapao Pattaya transfer price India",
        ]} />
      </>
    ),
    faqs: [
      { question: "How far is U-Tapao Airport from Pattaya?", answer: "About 35-45 km, around 30-45 minutes by car." },
      { question: "Is night pickup available?", answer: "Yes, 24/7 service is available with a small night surcharge between 12:00 AM and 6:00 AM." },
      { question: "Is the price fixed?", answer: "Yes, fixed pricing is confirmed at booking with no surge." },
      { question: "Can I pay in INR?", answer: "Yes, INR payment options are available." },
    ],
  },
};
