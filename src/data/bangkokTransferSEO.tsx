import { ReactNode } from "react";
import type { TransferFAQ, TransferGalleryImage } from "@/components/TransferBooking";

// Bangkok-themed gallery imagery (reusing existing high-quality local assets)
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";
import bangkokCityNight1 from "@/assets/bangkok-city-night-1.jpg";
import bangkokBridgeDay from "@/assets/bangkok-bridge-day-1.jpg";
import bangkokBridgeTwilight from "@/assets/bangkok-bridge-twilight-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokTemple4 from "@/assets/bangkok-temple-4.jpg";
import bangkokBuddha from "@/assets/bangkok-buddha-1.jpg";
import bangkokRiverside from "@/assets/bangkok-riverside-temple-1.jpg";
import bangkokPagodaSunset from "@/assets/bangkok-pagoda-sunset-1.jpg";
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
const airportGallery: TransferGalleryImage[] = [
  { src: bangkokCityNight1, alt: "Bangkok skyline at night welcoming arriving travelers" },
  { src: bangkokBridgeDay, alt: "Bangkok expressway en route to city hotels" },
  { src: bangkokCity1, alt: "Modern Bangkok cityscape near Sukhumvit" },
  { src: bangkokRiverside, alt: "Riverside Bangkok hotel district along Chao Phraya" },
];

const dropoffGallery: TransferGalleryImage[] = [
  { src: bangkokBridgeTwilight, alt: "Bangkok highway at twilight on the way to the airport" },
  { src: bangkokCity2, alt: "Bangkok hotel pickup point in central business district" },
  { src: bangkokCityNight1, alt: "Late-night Bangkok ride to Suvarnabhumi" },
  { src: bangkokBridgeDay, alt: "Smooth airport-bound expressway from Bangkok" },
];

const templeGallery: TransferGalleryImage[] = [
  { src: grandPalaceWatArun, alt: "Wat Arun temple by the Chao Phraya River" },
  { src: bangkokTemple1, alt: "Wat Pho reclining Buddha temple in Bangkok" },
  { src: grandPalaceBuddha, alt: "Golden Buddha statue in a Bangkok temple" },
  { src: bangkokTemple2, alt: "Marble Temple ornate Thai architecture" },
];

const safariGallery: TransferGalleryImage[] = [
  { src: elephantSafari, alt: "Safari World Bangkok wildlife experience" },
  { src: bangkokTemple3, alt: "Safari Park animals open zoo Bangkok" },
  { src: bangkokCity1, alt: "Private vehicle transfer through Bangkok suburbs" },
  { src: bangkokBridgeDay, alt: "Bangkok road network leading to Safari World" },
];

const hourlyGallery: TransferGalleryImage[] = [
  { src: bangkokCity2, alt: "Bangkok hotel-to-hotel private car transfer" },
  { src: bangkokCity1, alt: "Driving past Bangkok shopping centers like CentralWorld" },
  { src: bangkokTemple4, alt: "Sightseeing stops on Bangkok hotel transfers" },
  { src: bangkokRiverside, alt: "Riverside Bangkok hotel drop-off" },
];

const pattayaGallery: TransferGalleryImage[] = [
  { src: pattayaBeach, alt: "Pattaya tropical beach welcomes Bangkok arrivals" },
  { src: pattayaBoats, alt: "Pattaya beach boats and resort area" },
  { src: cityPattaya, alt: "Pattaya city skyline after Bangkok transfer" },
  { src: pattayaNightlife, alt: "Walking Street nightlife in central Pattaya" },
];

const cityTourPattayaGallery: TransferGalleryImage[] = [
  { src: grandPalaceTemple, alt: "Bangkok Grand Palace city tour stop" },
  { src: grandPalacePagoda, alt: "Wat Pho stop on Bangkok city tour to Pattaya" },
  { src: bangkokPagodaSunset, alt: "Bangkok pagoda sightseeing en route to Pattaya" },
  { src: pattayaBeach, alt: "Final drop-off at Pattaya beach hotel" },
];

const tigerTopiaGallery: TransferGalleryImage[] = [
  { src: bangkokTemple3, alt: "Tiger Topia Sriracha Zoo visit before Pattaya" },
  { src: elephantSafari, alt: "Wildlife sightings during Sriracha stop" },
  { src: bangkokBridgeDay, alt: "Highway from Bangkok to Sriracha and Pattaya" },
  { src: pattayaBeach, alt: "Arrival at Pattaya beach hotel after zoo visit" },
];

// ---------- Reusable SEO building blocks ----------
const KeywordsBlock = ({ items }: { items: string[] }) => (
  <>
    <h3>Top Search Keywords Covered</h3>
    <p className="text-sm">
      {items.join(" • ")}
    </p>
  </>
);

const IndianTravelersBlock = () => (
  <>
    <h3>Why Indian Travelers Prefer This Transfer</h3>
    <ul>
      <li>INR pricing for easy budgeting</li>
      <li>Pre-trip WhatsApp support on +91 7061710810</li>
      <li>No language barrier — driver briefed for Indian families</li>
      <li>Comfortable for elderly parents, kids and honeymoon couples</li>
      <li>Plenty of luggage space for shopping bags returning from Bangkok</li>
      <li>Vegetarian-friendly stop suggestions on long routes</li>
    </ul>
  </>
);

// ---------- Per-transfer SEO content ----------
type SEOEntry = {
  newSlug: string;
  oldSlug: string;
  gallery: TransferGalleryImage[];
  faqs: TransferFAQ[];
  seoContent: ReactNode;
};

export const bangkokTransferSEO: Record<string, SEOEntry> = {
  "bangkok-bkk-airport-pickup": {
    newSlug: "/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer",
    oldSlug: "/bangkok/bkk-airport-pickup",
    gallery: airportGallery,
    seoContent: (
      <>
        <h2>Suvarnabhumi Airport (BKK) to Bangkok Hotel Private Transfer</h2>
        <p>
          Arriving in Bangkok after a long international flight can feel overwhelming,
          especially if it is your first time visiting Thailand. Suvarnabhumi
          International Airport (BKK) is one of the busiest airports in Southeast Asia,
          and finding a reliable taxi, dealing with luggage, understanding local
          transport systems and avoiding long queues can be stressful.
        </p>
        <p>
          A private transfer from Suvarnabhumi Airport to your Bangkok hotel is the
          easiest and most comfortable way to begin your trip. Instead of waiting in
          taxi lines or figuring out public transport, you can enjoy direct hotel
          drop-off in a clean, air-conditioned vehicle with a professional driver.
        </p>
        <p>
          This transfer service is especially popular among Indian travelers, families
          with children, honeymoon couples, senior citizens, business travelers and
          groups carrying extra luggage.
        </p>

        <h3>Why Choose a Private Transfer from Suvarnabhumi Airport to Bangkok Hotel</h3>
        <p>
          Private airport transfers are one of the most convenient ways to travel from
          Suvarnabhumi Airport to Bangkok city. After landing, you simply meet your
          driver, load your luggage and head directly to your hotel.
        </p>
        <p>Unlike public taxis or airport buses, private transfers give you:</p>
        <ul>
          <li>Door-to-door hotel drop-off</li>
          <li>No waiting in long taxi queues</li>
          <li>Fixed pricing with no hidden charges</li>
          <li>Comfortable vehicles with air conditioning</li>
          <li>Extra luggage support</li>
          <li>Flexible pickup timing based on your flight</li>
          <li>Safe and reliable service</li>
          <li>Easy communication through WhatsApp support</li>
        </ul>
        <p>
          For travelers arriving late at night, early in the morning or during busy
          holiday periods, private transfers are much more convenient than trying to
          arrange local transport after arrival.
        </p>

        <h3>Suvarnabhumi Airport to Bangkok Distance and Travel Time</h3>
        <p>
          The distance between Suvarnabhumi Airport and Bangkok city depends on your
          hotel location. Popular Bangkok hotel areas include Sukhumvit, Siam, Silom,
          Riverside, Pratunam, Sathorn, Asok and Chinatown.
        </p>
        <p>
          Travel time from Suvarnabhumi Airport to Bangkok hotels is usually between
          30 minutes and 90 minutes depending on traffic and hotel location.
        </p>
        <p>Approximate travel times:</p>
        <ul>
          <li>Sukhumvit: 35 to 50 minutes</li>
          <li>Siam: 40 to 60 minutes</li>
          <li>Silom: 45 to 60 minutes</li>
          <li>Riverside: 45 to 70 minutes</li>
          <li>Pratunam: 35 to 55 minutes</li>
        </ul>
        <p>
          Bangkok traffic can be heavy during rush hours, especially in the morning and
          evening. Choosing a private transfer helps reduce stress because your driver
          already knows the best routes and traffic conditions.
        </p>

        <h3>Hotel Drop-Off Areas Covered in Bangkok</h3>
        <p>This airport transfer service covers most major hotel zones across Bangkok.</p>
        <p>Popular hotel drop-off locations include:</p>
        <ul>
          <li>Sukhumvit hotels</li>
          <li>Siam hotels</li>
          <li>Silom hotels</li>
          <li>Riverside hotels</li>
          <li>Sathorn hotels</li>
          <li>Chinatown hotels</li>
          <li>Pratunam hotels</li>
          <li>Khao San Road hotels</li>
          <li>Ratchada hotels</li>
          <li>Asok hotels</li>
        </ul>
        <p>
          Whether you are staying in a luxury hotel, budget hotel, serviced apartment
          or family resort, private airport transfers provide direct drop-off at your
          accommodation.
        </p>

        <h3>Best Vehicle Options for Airport Transfer</h3>
        <p>
          Different travelers have different luggage and group sizes. Because of this,
          there are multiple vehicle options available.
        </p>

        <h4>Sedan Transfer</h4>
        <p>A sedan is ideal for:</p>
        <ul>
          <li>Solo travelers</li>
          <li>Couples</li>
          <li>Small families</li>
          <li>Travelers with 2 to 3 bags</li>
        </ul>
        <p>Sedans are affordable, comfortable and suitable for most hotel transfers in Bangkok.</p>

        <h4>SUV Transfer</h4>
        <p>SUVs are best for:</p>
        <ul>
          <li>Families with children</li>
          <li>Groups of 4 to 5 passengers</li>
          <li>Travelers carrying extra luggage</li>
          <li>Travelers with strollers or shopping bags</li>
        </ul>
        <p>SUVs offer more space and comfort compared to standard taxis.</p>

        <h4>Van Transfer</h4>
        <p>Vans are perfect for:</p>
        <ul>
          <li>Large families</li>
          <li>Groups of friends</li>
          <li>Corporate travelers</li>
          <li>Travelers with multiple suitcases</li>
        </ul>
        <p>
          Van transfers are especially useful for Indian families visiting Thailand
          together because they provide extra luggage space and comfortable seating.
        </p>

        <h3>Meet and Greet Service at Suvarnabhumi Airport</h3>
        <p>
          One of the main advantages of booking a private airport transfer is the meet
          and greet service. After arriving at Suvarnabhumi Airport, your driver or
          representative will usually wait at the designated meeting point with a name
          board. This makes it easier to locate your transfer quickly without confusion.
        </p>
        <p>Meet and greet service usually includes:</p>
        <ul>
          <li>Driver waiting at arrival hall</li>
          <li>Name board display</li>
          <li>Flight tracking in case of delays</li>
          <li>Waiting time after landing</li>
          <li>Luggage assistance</li>
          <li>Easy WhatsApp communication</li>
        </ul>
        <p>
          This service is especially helpful for first-time visitors to Bangkok who may
          not be familiar with airport procedures.
        </p>

        <h3>Benefits for Indian Travelers</h3>
        <p>
          Indian travelers often prefer private airport transfers because they are
          easier, safer and more reliable.
        </p>
        <p>Benefits include:</p>
        <ul>
          <li>INR pricing for easy budgeting</li>
          <li>WhatsApp support before arrival</li>
          <li>No language barrier issues</li>
          <li>No taxi fare negotiation</li>
          <li>Comfortable for elderly parents and children</li>
          <li>Suitable for honeymoon couples</li>
          <li>Better experience after long international flights</li>
        </ul>
        <p>
          Many Indian travelers arrive in Bangkok with multiple bags, shopping plans
          or family members, making private transfers much more practical than regular
          taxis or public transport.
        </p>

        <h3>Why Private Transfer is Better Than Public Transport</h3>
        <p>
          Bangkok has public transport options like the Airport Rail Link, buses and
          taxis. However, these options are not always ideal after a long flight.
        </p>
        <p>Public transport may involve:</p>
        <ul>
          <li>Carrying luggage up and down stations</li>
          <li>Long waiting times</li>
          <li>Multiple transport changes</li>
          <li>Difficulty finding your hotel</li>
          <li>Crowded trains and buses</li>
        </ul>
        <p>
          Private transfers offer a smoother experience because you travel directly
          from the airport to your hotel without any stops.
        </p>

        <h3>Best Time to Book Airport Transfer</h3>
        <p>It is always recommended to book your airport transfer in advance.</p>
        <p>Pre-booking helps you:</p>
        <ul>
          <li>Avoid last-minute stress</li>
          <li>Secure your preferred vehicle type</li>
          <li>Get fixed pricing</li>
          <li>Avoid surge pricing during holidays</li>
          <li>Ensure availability during peak travel seasons</li>
        </ul>
        <p>Peak travel seasons in Bangkok include:</p>
        <ul>
          <li>December holidays</li>
          <li>New Year</li>
          <li>Songkran Festival</li>
          <li>Summer vacations</li>
          <li>Diwali and Indian holiday periods</li>
        </ul>
        <p>
          Booking in advance is especially important for families, large groups and
          late-night arrivals.
        </p>

        <h3>Important Things to Know Before Booking</h3>
        <p>
          Before booking your Suvarnabhumi Airport to Bangkok hotel transfer, keep the
          following in mind:
        </p>
        <ul>
          <li>Share your flight number for tracking</li>
          <li>Mention the number of passengers</li>
          <li>Mention luggage count</li>
          <li>Inform if child seats are required</li>
          <li>Provide hotel address clearly</li>
          <li>Mention if you need extra waiting time</li>
          <li>Confirm whether toll charges are included</li>
        </ul>
        <p>Providing accurate information ensures a smooth airport pickup experience.</p>

        <KeywordsBlock items={[
          "Suvarnabhumi airport to Bangkok hotel transfer",
          "BKK airport pickup Bangkok",
          "Bangkok airport taxi for Indian tourists",
          "private cab Suvarnabhumi to Sukhumvit",
          "BKK to Bangkok Sedan SUV Van",
          "late night airport pickup Bangkok",
          "INR price Bangkok airport transfer",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long does it take from Suvarnabhumi Airport to Bangkok hotel?", answer: "Travel time is usually between 30 and 90 minutes depending on traffic and hotel location." },
      { question: "Is airport pickup available 24 hours?", answer: "Yes, private airport transfers are available throughout the day and night." },
      { question: "Can I book transfer for late-night arrival?", answer: "Yes, late-night and early morning airport transfers are available." },
      { question: "Are toll charges included?", answer: "Yes, expressway tolls and fuel are included in the published private transfer fare — there are no hidden charges." },
      { question: "Can I request a child seat or larger vehicle?", answer: "Yes, child seats are available on request, and you can choose Sedan, SUV or Van depending on your group size and luggage." },
      { question: "Can I pay in INR?", answer: "Yes, all Bangkok airport transfers are priced and payable in INR for Indian travelers." },
    ],
  },

  "bangkok-dmk-airport-pickup": {
    newSlug: "/bangkok/don-mueang-airport-to-bangkok-hotel-transfer",
    oldSlug: "/bangkok/dmk-airport-pickup",
    gallery: airportGallery,
    seoContent: (
      <>
        <h2>Don Mueang Airport (DMK) to Bangkok Hotel Private Transfer</h2>
        <p>
          Don Mueang International Airport is Bangkok’s second hub, used heavily by
          AirAsia, Thai Lion, IndiGo and other low-cost carriers from India. After a
          long flight the last thing you want is to negotiate with airport taxis —
          a pre-booked private DMK to Bangkok hotel transfer gives you a stress-free,
          direct ride in a private air-conditioned vehicle.
        </p>
        <h3>Why Choose a Private DMK Transfer</h3>
        <ul>
          <li>Direct hotel drop-off — no taxi queues or fare negotiation</li>
          <li>Meet &amp; greet at Exit 5 (international) or Exit 11 (domestic)</li>
          <li>Sedan, SUV and Van options for any group size</li>
          <li>Free flight tracking on delayed flights</li>
          <li>Night surcharge clearly disclosed (no surprises)</li>
          <li>WhatsApp support on +91 7061710810</li>
        </ul>
        <h3>DMK to Bangkok Distance &amp; Travel Time</h3>
        <p>
          Don Mueang Airport is roughly 25 km from central Bangkok. Travel time is
          usually 30–75 minutes depending on traffic — Pratunam and Siam (35–55 min),
          Sukhumvit (40–60 min), Silom (45–65 min), Riverside (50–70 min).
        </p>
        <h3>Hotel Drop-Off Areas Covered</h3>
        <p>
          Sukhumvit, Siam, Silom, Sathorn, Chinatown, Riverside, Khao San Road,
          Pratunam, Ratchada and Asok — covering luxury, family and budget hotels.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Don Mueang airport to Bangkok hotel transfer",
          "DMK airport pickup Bangkok taxi",
          "Bangkok airport pickup for AirAsia IndiGo",
          "private cab DMK to Sukhumvit",
          "DMK Bangkok Sedan SUV Van",
          "late night DMK pickup",
          "INR price DMK transfer",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long is the ride from Don Mueang to Bangkok hotels?", answer: "Most rides take 30 to 75 minutes depending on hotel area and traffic." },
      { question: "Where do I meet the driver at DMK?", answer: "International arrivals: inside Exit 5. Domestic arrivals: inside Exit 11. The driver holds a name card." },
      { question: "Is late-night and early-morning DMK pickup available?", answer: "Yes, 24/7. A 300 THB surcharge applies for pickups between 12:00 AM and 6:00 AM." },
      { question: "Are tolls and fuel included?", answer: "Yes, all tolls and fuel are included in the fare." },
      { question: "Can I book a 10-seater van for a family group?", answer: "Yes — the Mini Van seats up to 10 passengers and accommodates 10 large + 10 hand bags." },
      { question: "Is INR payment available?", answer: "Yes, the fare is fixed and payable in INR." },
    ],
  },

  "bangkok-bkk-airport-dropoff": {
    newSlug: "/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer",
    oldSlug: "/bangkok/bkk-airport-dropoff",
    gallery: dropoffGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel to Suvarnabhumi Airport (BKK) Private Transfer</h2>
        <p>
          Bangkok traffic is notoriously unpredictable, especially during morning
          and evening rush hours. A private hotel-to-BKK airport transfer ensures
          you are picked up directly from your hotel lobby and dropped at the
          correct departure terminal in a comfortable, air-conditioned vehicle —
          on time and stress-free.
        </p>
        <h3>Why Pre-Book Your Bangkok to BKK Airport Transfer</h3>
        <ul>
          <li>Direct hotel pickup — no waiting for street taxis</li>
          <li>Fixed INR pricing including tolls and fuel</li>
          <li>Driver knows the fastest expressway route</li>
          <li>24-hour service for early-morning and late-night flights</li>
          <li>Sedan, SUV and Van options for any luggage load</li>
        </ul>
        <h3>Bangkok to BKK Distance &amp; Recommended Departure</h3>
        <p>
          Travel time runs 35–90 minutes depending on hotel area and traffic. We
          recommend leaving the hotel at least 4 hours before international
          departures and 3 hours before domestic flights so you reach BKK with a
          comfortable buffer.
        </p>
        <h3>Bangkok Hotel Pickup Zones Covered</h3>
        <p>
          Sukhumvit, Siam, Silom, Sathorn, Pratunam, Riverside, Chinatown, Asok,
          Ratchada, Khao San Road and most other major hotel areas.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok hotel to Suvarnabhumi airport transfer",
          "BKK airport drop Bangkok",
          "private cab Sukhumvit to BKK airport",
          "Bangkok to airport SUV van",
          "early morning airport drop Bangkok",
          "INR price BKK drop transfer",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should I leave my Bangkok hotel for a BKK international flight?", answer: "Leave at least 4 hours before departure to allow for traffic and check-in. Hotel staff can confirm the fastest pickup time." },
      { question: "Is BKK drop-off available 24 hours?", answer: "Yes, including early-morning departures. Night surcharge of 300 THB applies between 12:00 AM and 6:00 AM." },
      { question: "Are tolls included for the airport drop?", answer: "Yes, all expressway tolls and fuel are included in the published fare." },
      { question: "Can I add a stop on the way to the airport?", answer: "Brief stops can usually be arranged on request — please mention them at booking time." },
      { question: "Can I book a larger vehicle for shopping luggage?", answer: "Yes, the Mini SUV (4 large bags) and Mini Van (10 large bags) options handle heavy shopping loads easily." },
    ],
  },

  "bangkok-temple-tour-airport": {
    newSlug: "/bangkok/bangkok-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer",
    oldSlug: "/bangkok/airport-transfers/temple-tour-bkk",
    gallery: templeGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel + 2 Temple Tour + BKK Airport Drop Private Transfer</h2>
        <p>
          If you have an evening or late-night flight from Suvarnabhumi, this
          combo transfer turns your last day in Bangkok into a meaningful one.
          Instead of waiting at the airport for hours, you check out from your
          hotel, visit two of Bangkok’s most iconic temples with your luggage
          safely in the vehicle, and then head straight to BKK airport.
        </p>
        <h3>Popular Temple Combinations</h3>
        <ul>
          <li><strong>Wat Arun</strong> — the Temple of Dawn beside the Chao Phraya River</li>
          <li><strong>Wat Pho</strong> — home of the giant Reclining Buddha</li>
          <li><strong>Wat Traimit</strong> — the Golden Buddha Temple</li>
          <li><strong>Wat Benchamabophit</strong> — the elegant Marble Temple</li>
        </ul>
        <h3>Recommended Schedule</h3>
        <p>
          Allow 6–8 hours from hotel checkout to flight departure: 2–4 hours
          for sightseeing plus 35–90 minutes drive to the airport. Reach BKK at
          least 3 hours before international flights.
        </p>
        <h3>What’s Included</h3>
        <ul>
          <li>Private hotel pickup with luggage support</li>
          <li>Air-conditioned Sedan, SUV or Van</li>
          <li>Visit to 2 chosen temples</li>
          <li>Direct drop at Suvarnabhumi Airport (BKK)</li>
        </ul>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok temple tour with airport drop",
          "Wat Arun Wat Pho tour with BKK transfer",
          "Bangkok last day temple tour",
          "Bangkok city tour with luggage",
          "private temple tour airport combo",
          "Bangkok 2 temple tour Indian travelers",
        ]} />
      </>
    ),
    faqs: [
      { question: "Which temples can I visit on this transfer?", answer: "Popular options include Wat Arun, Wat Pho, the Golden Buddha Temple (Wat Traimit) and the Marble Temple. You can usually pick any two." },
      { question: "How much time should I allow before my flight?", answer: "Plan for 6 to 8 hours between hotel checkout and flight departure to comfortably cover sightseeing, traffic and check-in." },
      { question: "Is luggage stored safely during the temple visits?", answer: "Yes, your luggage stays inside the private vehicle with the driver while you sightsee." },
      { question: "Can I customise the temples?", answer: "Yes, temple choices can usually be customised at booking — just let us know your preference." },
      { question: "Is this suitable for senior citizens?", answer: "Yes — the private car keeps walking distances short and your driver helps with luggage and parking." },
    ],
  },

  "bangkok-safari-world-bkk-airport": {
    newSlug: "/bangkok/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer",
    oldSlug: "/bangkok/airport-transfers/safari-world-bkk",
    gallery: safariGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel + Safari World + BKK Airport Drop Private Transfer</h2>
        <p>
          Travelling with kids and have a late evening flight? This combo turns a
          long airport wait into one of Bangkok’s best family attractions. After
          checkout, your private vehicle takes you to Safari World Bangkok,
          stores your luggage during the visit, and then heads directly to
          Suvarnabhumi Airport.
        </p>
        <h3>Two Parks in One Visit</h3>
        <ul>
          <li><strong>Safari Park</strong> — drive-through open zoo with tigers, lions, giraffes, zebras, deer, bears and exotic birds</li>
          <li><strong>Marine Park</strong> — dolphin show, sea lion show, orangutan show, bird show, elephant show and animal feeding</li>
        </ul>
        <h3>Recommended Schedule</h3>
        <p>
          Leave the hotel 7–9 hours before departure. Allow 3–5 hours at Safari
          World, plus 45–75 min drive each way. Reach BKK at least 3 hours
          before your international flight.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Safari World Bangkok with airport drop",
          "Bangkok Safari World family transfer",
          "Bangkok last day Safari World combo",
          "private transfer Safari World BKK airport",
          "Indian family Bangkok Safari World tour",
        ]} />
      </>
    ),
    faqs: [
      { question: "How much time should I keep before my flight?", answer: "Allow 7 to 9 hours between hotel checkout and departure for a relaxed Safari World visit and BKK airport drop." },
      { question: "Are Safari World entry tickets included?", answer: "No, the transfer covers private vehicle, driver, luggage support and airport drop. Park tickets are paid at the gate." },
      { question: "Is the luggage safe during the park visit?", answer: "Yes, luggage stays securely in the private vehicle with the driver." },
      { question: "Is Safari World suitable for small children?", answer: "Yes, it is one of Bangkok’s most family-friendly attractions with shows and animal feeding experiences." },
      { question: "Can a 10-seater van handle joint-family luggage?", answer: "Yes — the Mini Van fits 10 large bags and 10 hand bags comfortably." },
    ],
  },

  "bangkok-dmk-airport-dropoff": {
    newSlug: "/bangkok/bangkok-hotel-to-don-mueang-airport-transfer",
    oldSlug: "/bangkok/dmk-airport-dropoff",
    gallery: dropoffGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel to Don Mueang Airport (DMK) Private Transfer</h2>
        <p>
          Most Indian low-cost flights to and from Bangkok use Don Mueang Airport.
          A pre-booked private hotel-to-DMK transfer is the most reliable way to
          beat Bangkok traffic and reach the terminal stress-free in a comfortable,
          air-conditioned vehicle.
        </p>
        <h3>Why Choose a Private DMK Drop</h3>
        <ul>
          <li>Direct pickup from your hotel lobby</li>
          <li>Fixed INR pricing including tolls and fuel</li>
          <li>Driver familiar with the fastest expressway routes</li>
          <li>Sedan, SUV and Van options for every group size</li>
          <li>24-hour service — perfect for early IndiGo / AirAsia departures</li>
        </ul>
        <h3>Bangkok to DMK Distance &amp; Travel Time</h3>
        <p>
          DMK is about 25 km from central Bangkok. Travel time is 30–75 minutes
          depending on traffic. Leave the hotel at least 3.5 hours before
          international departures.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok to Don Mueang airport transfer",
          "DMK airport drop Bangkok",
          "Bangkok hotel to DMK private cab",
          "early morning DMK airport drop",
          "Bangkok airport transfer for IndiGo flight",
          "INR price DMK drop",
        ]} />
      </>
    ),
    faqs: [
      { question: "How early should I leave my hotel for DMK?", answer: "At least 3.5 hours before international departure and 2.5 hours before domestic — Bangkok traffic can be unpredictable." },
      { question: "Is DMK airport drop available 24 hours?", answer: "Yes, including very early IndiGo / AirAsia departures. A 300 THB night surcharge applies between 12:00 AM and 6:00 AM." },
      { question: "Are tolls and fuel included?", answer: "Yes, the price covers all expressway tolls and fuel." },
      { question: "Can I get a 10-seater van for a large family?", answer: "Yes, the Mini Van seats up to 10 with 10 large + 10 hand bags." },
      { question: "Is INR payment available?", answer: "Yes, the fare is locked in INR for Indian travellers." },
    ],
  },

  "bangkok-temple-tour-dmk-airport": {
    newSlug: "/bangkok/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer",
    oldSlug: "/bangkok/airport-transfers/temple-tour-dmk",
    gallery: templeGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel + 2 Temple Tour + DMK Airport Drop Private Transfer</h2>
        <p>
          Make the most of your last day in Bangkok before your DMK departure.
          Skip the long airport wait — instead, your private vehicle picks you
          up from your hotel with luggage, takes you to two of Bangkok’s most
          iconic temples and then drops you at Don Mueang Airport on time.
        </p>
        <h3>Popular Temple Choices</h3>
        <ul>
          <li><strong>Wat Arun</strong> — the riverside Temple of Dawn</li>
          <li><strong>Wat Pho</strong> — the Reclining Buddha temple</li>
          <li><strong>Wat Traimit</strong> — the Golden Buddha Temple</li>
          <li><strong>Wat Benchamabophit</strong> — the Marble Temple</li>
        </ul>
        <h3>Recommended Schedule</h3>
        <p>
          Plan for 6–8 hours from checkout to flight departure: 2–4 hours
          sightseeing plus the drive to DMK. Reach the airport at least 3 hours
          before international flights.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok temple tour with DMK airport drop",
          "2 temple tour Bangkok last day",
          "Wat Arun Wat Pho with DMK transfer",
          "Bangkok city tour with luggage to DMK",
          "Indian family Bangkok temple combo",
        ]} />
      </>
    ),
    faqs: [
      { question: "Which temples can I visit before DMK drop?", answer: "Pick any two — popular choices are Wat Arun, Wat Pho, the Golden Buddha Temple and the Marble Temple." },
      { question: "How much time should I keep before my DMK flight?", answer: "Plan 6 to 8 hours between hotel checkout and flight departure for sightseeing and airport drop." },
      { question: "Is my luggage safe during the temple stops?", answer: "Yes, it remains locked in the private vehicle with the driver." },
      { question: "Is airport drop included?", answer: "Yes, direct drop at Don Mueang Airport is part of the package." },
      { question: "Can I choose the temples?", answer: "Yes, your preferred two temples can be confirmed at booking." },
    ],
  },

  "bangkok-safari-world-dmk-airport": {
    newSlug: "/bangkok/bangkok-hotel-safari-world-to-don-mueang-airport-transfer",
    oldSlug: "/bangkok/airport-transfers/safari-world-dmk",
    gallery: safariGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel + Safari World + DMK Airport Drop Private Transfer</h2>
        <p>
          For families flying out of Don Mueang in the evening, this combo is a
          perfect last-day plan. Your private driver picks you up with luggage,
          takes you to Safari World for a fun-filled visit, and then drives you
          straight to Don Mueang Airport — no airport waiting room marathons.
        </p>
        <h3>What You’ll Experience at Safari World</h3>
        <ul>
          <li><strong>Safari Park</strong> — drive-through open zoo with tigers, lions, giraffes and more</li>
          <li><strong>Marine Park</strong> — dolphin, sea lion, orangutan and bird shows</li>
          <li>Animal feeding experiences popular with children</li>
        </ul>
        <h3>Recommended Schedule</h3>
        <p>
          Leave the hotel 7–9 hours before departure. Allow 3–5 hours at Safari
          World, plus 45–75 min drive each way to the park and 45–60 min drive
          to DMK afterwards.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Safari World Bangkok with DMK airport drop",
          "Bangkok last day Safari World combo",
          "private transfer Safari World DMK airport",
          "Bangkok family transfer DMK",
          "Indian family Safari World tour",
        ]} />
      </>
    ),
    faqs: [
      { question: "How much buffer time do I need before my DMK flight?", answer: "Allow 7 to 9 hours from hotel checkout for a relaxed Safari World visit plus airport drop." },
      { question: "Are Safari World tickets included?", answer: "No — the package covers vehicle, driver, luggage support and DMK drop. Park tickets are paid separately at the gate." },
      { question: "Is luggage safe during the park visit?", answer: "Yes, luggage remains in the locked private vehicle with the driver." },
      { question: "Is Safari World good for small children?", answer: "Yes — it is one of Bangkok’s most family-friendly attractions." },
      { question: "Can I get a Van for a joint family?", answer: "Yes, the Mini Van seats up to 10 passengers with 10 large bags." },
    ],
  },

  "bangkok-city-hourly-rental": {
    newSlug: "/bangkok/bangkok-hotel-to-hotel-transfer-4-hours",
    oldSlug: "/bangkok/city-hourly-rental",
    gallery: hourlyGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel-to-Hotel Transfer with 4-Hour Vehicle Use</h2>
        <p>
          Switching hotels in Bangkok between an early checkout and a late
          check-in can be stressful with luggage. This 4-hour private vehicle
          rental gives you a dedicated car and driver to move between hotels and
          fit in shopping, sightseeing or a meal stop along the way.
        </p>
        <h3>Why Book the 4-Hour Hotel Transfer</h3>
        <ul>
          <li>Pickup from your current hotel + drop at the new hotel</li>
          <li>Driver and vehicle reserved exclusively for 4 hours</li>
          <li>Flexible stops for shopping, food or temples</li>
          <li>Luggage stays safely in the car all day</li>
          <li>Perfect for families, honeymooners and senior citizens</li>
        </ul>
        <h3>Popular Stops on the Way</h3>
        <ul>
          <li><strong>Shopping:</strong> MBK, Platinum Mall, IconSiam, CentralWorld, Siam Paragon, Chatuchak Market</li>
          <li><strong>Food:</strong> Indian restaurants, mall food courts, street-food lanes</li>
          <li><strong>Sightseeing:</strong> Wat Arun, Wat Pho, Golden Buddha, Erawan Shrine, Mahanakhon Skywalk</li>
        </ul>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok hotel to hotel transfer",
          "Bangkok 4 hour car rental with driver",
          "Bangkok hourly cab with luggage",
          "Bangkok shopping transfer Sukhumvit to riverside",
          "Bangkok private car hire 4 hours",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long is the vehicle available?", answer: "The vehicle and driver are reserved for up to 4 hours from pickup time." },
      { question: "Can I make shopping or sightseeing stops?", answer: "Yes — multiple short stops are included as long as the total time stays within 4 hours." },
      { question: "Is luggage allowed throughout?", answer: "Yes, luggage stays securely in the vehicle for the full 4 hours." },
      { question: "What if I exceed 4 hours?", answer: "Additional time can be arranged at an hourly extension rate — please discuss with the driver in advance." },
      { question: "Can I request a Van for a large family?", answer: "Yes, Sedan, SUV and 10-seater Van options are available." },
    ],
  },

  "bangkok-to-pattaya": {
    newSlug: "/bangkok/bangkok-hotel-to-pattaya-hotel-transfer",
    oldSlug: "/bangkok/to-pattaya",
    gallery: pattayaGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel to Pattaya Hotel Private Transfer</h2>
        <p>
          Bangkok to Pattaya is one of Thailand’s most popular intercity routes
          for Indian travellers. A pre-booked private transfer beats crowded
          buses and shared vans — your driver picks you up from your Bangkok
          hotel and drops you directly at your Pattaya hotel in a comfortable,
          air-conditioned vehicle.
        </p>
        <h3>Why a Private Transfer Beats the Bus</h3>
        <ul>
          <li>Direct hotel-to-hotel — no bus station transfers</li>
          <li>Fixed INR pricing including tolls</li>
          <li>Comfortable for kids, elderly parents and honeymoon couples</li>
          <li>Plenty of luggage space for shopping bags</li>
          <li>Flexible departure time — leave when you want</li>
        </ul>
        <h3>Bangkok to Pattaya Distance &amp; Travel Time</h3>
        <p>
          Pattaya is about 145–160 km from Bangkok. Travel time is usually 2–3
          hours: Sukhumvit (2–2.5 hrs), Siam (2.5–3 hrs), Silom (2.5–3 hrs),
          Riverside (2.5–3.5 hrs). Avoid Friday evenings and public holidays for
          the smoothest ride.
        </p>
        <h3>Pattaya Drop-Off Areas Covered</h3>
        <p>
          Central Pattaya, North Pattaya, South Pattaya, Jomtien, Walking Street
          area, Beach Road hotels and most Pattaya resort properties.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok to Pattaya private transfer",
          "Bangkok hotel to Pattaya hotel cab",
          "Bangkok to Pattaya taxi for Indian family",
          "Bangkok Pattaya Sedan SUV Van",
          "private cab Sukhumvit to Pattaya",
          "Bangkok to Pattaya 10-seater van",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long does Bangkok to Pattaya take?", answer: "Usually 2 to 3 hours by private car depending on hotel area and traffic." },
      { question: "Is hotel pickup in Bangkok and drop in Pattaya included?", answer: "Yes — direct hotel-to-hotel service is included with no extra charges." },
      { question: "Can we stop on the way?", answer: "Yes, brief stops for food or restrooms can be arranged with the driver." },
      { question: "Can I book a van for a joint family?", answer: "Yes, the 10-seater Van fits up to 10 passengers and 10 large bags." },
      { question: "Is private cab better than bus or shared van?", answer: "Yes — it is faster, more comfortable, drops directly at your hotel and is far better for kids and elderly travellers." },
    ],
  },

  "bangkok-city-tour-pattaya": {
    newSlug: "/bangkok/bangkok-city-tour-to-pattaya-hotel-transfer",
    oldSlug: "/bangkok/city-tour-pattaya",
    gallery: cityTourPattayaGallery,
    seoContent: (
      <>
        <h2>Bangkok City Tour + Pattaya Hotel Private Transfer</h2>
        <p>
          Heading to Pattaya but still want to see Bangkok’s top sights? This
          combo transfer picks you up from your Bangkok hotel, takes you on a
          private city tour of 2–4 attractions and then drops you at your
          Pattaya hotel — all in one comfortable, air-conditioned vehicle.
        </p>
        <h3>Popular Bangkok Sightseeing Stops</h3>
        <ul>
          <li><strong>Grand Palace</strong> — former residence of the Thai royal family</li>
          <li><strong>Wat Arun</strong> — Temple of Dawn beside the Chao Phraya River</li>
          <li><strong>Wat Pho</strong> — home of the giant Reclining Buddha</li>
          <li><strong>Wat Traimit</strong> — Golden Buddha Temple</li>
          <li><strong>Gems Gallery</strong> — popular jewelry shopping stop</li>
          <li><strong>Mahanakhon Skywalk</strong> — panoramic skyline views</li>
        </ul>
        <h3>Recommended Schedule</h3>
        <p>
          Leave the Bangkok hotel in the morning, spend 2–4 hours sightseeing,
          then continue 2–3 hours to Pattaya — arriving at your beach hotel by
          evening.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Bangkok city tour with Pattaya transfer",
          "Bangkok sightseeing en route to Pattaya",
          "Grand Palace + Wat Arun + Pattaya combo",
          "Bangkok city tour Pattaya drop Indian family",
          "private cab Bangkok sightseeing Pattaya",
        ]} />
      </>
    ),
    faqs: [
      { question: "How many Bangkok attractions can I see?", answer: "You can usually choose 2–4 stops depending on time and traffic." },
      { question: "Is luggage allowed during the city tour?", answer: "Yes, luggage stays in the private vehicle with the driver throughout." },
      { question: "How long is the total day?", answer: "Plan a full day — 2–4 hours of sightseeing in Bangkok plus 2–3 hours drive to Pattaya." },
      { question: "Are entry tickets included?", answer: "No, attraction entry fees are not included. The package covers vehicle, driver and the Pattaya hotel drop." },
      { question: "Can I book a Van for a large group?", answer: "Yes, Sedan, SUV and 10-seater Van options are available." },
    ],
  },

  "bangkok-tiger-topia-pattaya": {
    newSlug: "/bangkok/tiger-topia-sriracha-zoo-to-pattaya-hotel-transfer",
    oldSlug: "/bangkok/tiger-topia-pattaya",
    gallery: tigerTopiaGallery,
    seoContent: (
      <>
        <h2>Bangkok Hotel + Tiger Topia Sriracha Zoo + Pattaya Hotel Transfer</h2>
        <p>
          Sriracha Tiger Zoo (Tiger Topia) sits conveniently between Bangkok and
          Pattaya, making it the perfect family stop on the way to your beach
          holiday. This private transfer picks you up from your Bangkok hotel,
          stops at Tiger Topia for the day, then continues to your Pattaya hotel
          with luggage stored safely in the vehicle.
        </p>
        <h3>What Makes This a Family Favourite</h3>
        <ul>
          <li>See tigers, crocodiles and other exotic wildlife</li>
          <li>Live animal shows that kids love</li>
          <li>Perfect break on the 145 km Bangkok–Pattaya drive</li>
          <li>Luggage stays in the private vehicle the entire time</li>
          <li>One booking covers sightseeing + intercity transfer</li>
        </ul>
        <h3>Recommended Schedule</h3>
        <p>
          Leave Bangkok mid-morning, spend 2–3 hours at Tiger Topia, then drive
          the remaining 30–45 minutes to your Pattaya hotel — arriving by late
          afternoon.
        </p>
        <IndianTravelersBlock />
        <KeywordsBlock items={[
          "Tiger Topia Sriracha Zoo with Pattaya transfer",
          "Sriracha Tiger Zoo from Bangkok",
          "Bangkok to Pattaya with zoo stop",
          "private transfer Bangkok Tiger Zoo Pattaya",
          "Indian family Sriracha Tiger Topia tour",
        ]} />
      </>
    ),
    faqs: [
      { question: "How long is the Tiger Topia visit?", answer: "Most families spend 2 to 3 hours at the park before continuing to Pattaya." },
      { question: "Are zoo entry tickets included?", answer: "No — the package covers vehicle, driver and Pattaya hotel drop. Entry tickets are paid at the gate." },
      { question: "Is the route convenient?", answer: "Yes — Sriracha is on the main Bangkok–Pattaya highway, so it adds only a short detour to the standard transfer." },
      { question: "Is the luggage safe during the zoo visit?", answer: "Yes, luggage remains locked in the private vehicle with the driver." },
      { question: "Is this suitable for kids?", answer: "Absolutely — Tiger Topia is one of the most popular family attractions between Bangkok and Pattaya." },
    ],
  },
};
