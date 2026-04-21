/**
 * Singapore Activity SEO content sections — derived from singapore_info.docx.
 * Each named export renders extra "Why Book / What's Included / Best Time / Tips"
 * content above the customer reviews section on the activity page.
 */
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="space-y-3">
    <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Wrap = ({ children }: { children: ReactNode }) => (
  <div className="space-y-8 border-t border-border pt-8">{children}</div>
);

export const SingaporeCityTourSEO = () => (
  <Wrap>
    <Section title="Why Book Singapore City Tour with Guide">
      <p>
        The Singapore City Tour with Guide is the smartest way to begin exploring the Lion City,
        especially if you are visiting for the first time. The tour provides structured orientation
        so travelers can confidently plan the rest of their trip after understanding the city's
        geography and attractions.
      </p>
      <p>
        Expert narration brings Singapore's rapid development, multicultural identity and
        architectural achievements to life — from colonial-era buildings to futuristic skyscrapers.
        Photo stops at Merlion Park capture the national symbol against the Marina Bay skyline,
        while Chinatown and Little India offer rich cultural experiences for Indian travelers.
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Air-conditioned transportation between landmarks</li>
        <li>Professional English-speaking guide with cultural commentary</li>
        <li>Visits to Merlion Park, Chinatown, Little India and Marina Bay waterfront</li>
        <li>Optional photo stops at Orchard Road, Parliament House and the Esplanade</li>
        <li>Hotel pickup and drop-off (transfer variant only)</li>
      </ul>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Morning tours offer cooler temperatures and clearer skyline visibility for photography.
        Evening tours showcase Singapore's beautifully illuminated skyline around Marina Bay.
        Singapore is a year-round destination thanks to its consistent tropical climate.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Wear lightweight cotton clothing and comfortable walking shoes. Carry sunglasses, sunscreen
        and a refillable water bottle. Vegetarian and Jain-friendly food is widely available in
        Little India and Chinatown. Carry a small umbrella for sudden tropical showers and respect
        Singapore's strict civic regulations on cleanliness and pedestrian signals.
      </p>
    </Section>
  </Wrap>
);

export const NightSafariTicketsSEO = () => (
  <Wrap>
    <Section title="Why Book Night Safari Singapore Tickets Only">
      <p>
        Night Safari Singapore is the world's first nocturnal zoo, located inside the Mandai
        Wildlife Reserve. The tickets-only option is perfect for travelers who want freedom to
        explore at their own pace and combine the visit with nearby Singapore Zoo or River Wonders.
      </p>
      <p>
        Highlights include the guided tram ride through open habitats, walking trails (Leopard,
        Fishing Cat, East Lodge, Wallaby), the Creatures of the Night presentation and the famous
        Thumbuakar Fire Show. Over 900 animals from nearly 100 species roam in naturalistic
        moonlit habitats.
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Park entry to Night Safari</li>
        <li>Guided tram safari ride across all wildlife zones</li>
        <li>Access to four walking trails</li>
        <li>Entry to scheduled live shows (subject to availability)</li>
      </ul>
      <p className="text-sm">Hotel transfers and food are not included with this tickets-only package.</p>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Arrive shortly after park opening to avoid peak crowds and secure better tram and show
        seating. Weekdays are quieter than weekends. Festive seasons like Christmas or Chinese New
        Year add decorative themes across Mandai.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Wear lightweight cotton with comfortable walking shoes; carry insect repellent. Vegetarian
        food is available inside Mandai Wildlife Reserve. Flash photography is prohibited — use a
        low-light camera. Reach the park via MRT to Khatib Station and the Mandai Shuttle.
      </p>
    </Section>
  </Wrap>
);

export const NightSafariTransferSEO = () => (
  <Wrap>
    <Section title="Why Book Night Safari Singapore with Transfer">
      <p>
        Night Safari is located about 30 minutes from the city center — round-trip hotel transfers
        eliminate the hassle of arranging late-night transportation back from Mandai Wildlife
        Reserve. This is especially helpful for families, seniors and first-time visitors.
      </p>
      <p>
        Highlights include the open-concept tram safari through Himalayan, Southeast Asian and
        African habitats, the Creatures of the Night animal presentation, and the iconic
        Thumbuakar Fire Performance.
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Round-trip hotel pickup and drop-off in air-conditioned vehicle</li>
        <li>Night Safari entry tickets</li>
        <li>Guided tram safari ride</li>
        <li>Access to four walking trails</li>
        <li>Entry to scheduled live shows (subject to availability)</li>
      </ul>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Arrive shortly after park opening for the best tram seats and most active animal viewing.
        Weekdays are less crowded. Singapore's stable tropical climate keeps the safari running
        year-round.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Wear lightweight cotton; carry insect repellent. Indian-friendly vegetarian meals are
        available at Mandai dining outlets. Arrive on time for hotel pickup. Prioritise the tram
        ride early in the evening to avoid longer queues.
      </p>
    </Section>
  </Wrap>
);

export const Sentosa4D2RidesSEO = () => (
  <Wrap>
    <Section title="Why Book Sentosa 4D Adventureland with 2 Rides">
      <p>
        Sentosa 4D Adventureland blends 3D visuals with motion seats, wind, water sprays and
        vibration effects so visitors feel like part of the action. The 2-ride pass offers a quick
        yet immersive entertainment break that fits perfectly into a half-day Sentosa itinerary.
      </p>
      <p>
        Choose any 2 from Extreme Log Ride (a virtual jungle rafting adventure), Journey 2: The
        Mysterious Island (inspired by the Hollywood film) and Haunted Mine Ride (a slightly
        thrilling underground experience).
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Entry access to 2 selected 4D simulation rides</li>
        <li>Air-conditioned indoor venue with pre-show waiting areas</li>
        <li>Each ride lasts approximately 10–15 minutes</li>
      </ul>
      <p className="text-sm">Hotel transfers and food are not included with this tickets-only package.</p>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Late morning or early afternoon on weekdays is ideal for shorter waits. Since the
        attraction is fully air-conditioned, it's a great backup activity during sudden rain or
        humid afternoons.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Carry a light jacket if you're sensitive to strong air-conditioning. Vegetarian food is
        widely available across Sentosa. Combine with SkyHelix Sentosa, Wings of Time or Universal
        Studios Singapore for a full Sentosa adventure day.
      </p>
    </Section>
  </Wrap>
);

export const Sentosa4D3RidesSEO = () => (
  <Wrap>
    <Section title="Why Book Sentosa 4D Adventureland with 3 Rides">
      <p>
        The 3-ride pass gives you the complete Sentosa 4D Adventureland lineup — Extreme Log Ride,
        Journey 2: The Mysterious Island and Haunted Mine Ride — for better value than the 2-ride
        option. Each ride combines high-definition 4D visuals with motion seating, wind bursts,
        water sprays and synchronized sound effects.
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Entry access to all 3 signature 4D simulation rides</li>
        <li>Air-conditioned indoor venue with pre-show lounges</li>
        <li>Each ride lasts approximately 10–15 minutes</li>
      </ul>
      <p className="text-sm">Hotel transfers and food are not included with this tickets-only package.</p>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Late morning or early afternoon on weekdays for shorter queues. Excellent indoor backup
        during sudden tropical rain. Evening visits pair well with the Wings of Time night show.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Start with Journey 2: The Mysterious Island before the more suspenseful Haunted Mine Ride
        if travelling with younger children. Vegetarian food is widely available across Sentosa
        Island restaurants.
      </p>
    </Section>
  </Wrap>
);

export const SentosaCableCarSEO = () => (
  <Wrap>
    <Section title="Why Book Sentosa Cable Ride Roundtrip Pass">
      <p>
        The Singapore Cable Car Mount Faber Line transforms travel between mainland Singapore and
        Sentosa Island into an iconic sightseeing experience. Glide above Keppel Harbour in
        spacious glass cabins with panoramic views of cruise ships, rainforest hills and the Marina
        Bay skyline.
      </p>
      <p>
        The roundtrip pass allows boarding and disembarking at Mount Faber, HarbourFront Tower or
        Sentosa stations — perfect for honeymoon couples (especially at sunset) and families
        wanting a memorable arrival to Sentosa.
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Roundtrip access on the Mount Faber Line</li>
        <li>Boarding flexibility at Mount Faber, HarbourFront or Sentosa stations</li>
        <li>Each segment lasts approximately 15 minutes</li>
        <li>Air-conditioned glass-cabin gondolas</li>
        <li>Hotel pickup and drop-off (transfer variant only)</li>
      </ul>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Late afternoon or sunset hours offer the most dramatic golden-hour photography across
        Keppel Harbour. Morning rides are best for travelers planning a full Sentosa day. Operates
        year-round thanks to Singapore's stable tropical climate.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Carry a fully charged phone or camera for aerial views. Vegetarian food is available at
        Mount Faber Peak restaurants and Sentosa Island. Board first from Mount Faber Station for
        the longest and most scenic segment. Combine with Wings of Time, SkyHelix Sentosa or
        Universal Studios Singapore.
      </p>
    </Section>
  </Wrap>
);

export const SentosaWingsTimeSEO = () => (
  <Wrap>
    <Section title="Why Book Sentosa Wings of Time Tickets with Transfers">
      <p>
        Wings of Time is Singapore's award-winning open-air night show at Siloso Beach, combining
        laser projections, water screens, 3D visual mapping, flame bursts and fireworks. The
        story follows Shahbaz, a prehistoric bird, on a journey through time.
      </p>
      <p>
        Hotel pickup and drop-off make this the most convenient way to enjoy the show — especially
        helpful for families, couples and Indian travelers who want stress-free evening
        transportation back to the city.
      </p>
    </Section>
    <Section title="What's Included">
      <ul className="list-disc pl-6 space-y-2">
        <li>Round-trip hotel transfers in air-conditioned vehicle</li>
        <li>Wings of Time show entry with reserved standard seating</li>
        <li>Approximately 20–25 minute outdoor multimedia performance</li>
      </ul>
    </Section>
    <Section title="Best Time for Visit">
      <p>
        Evening show slots after sunset deliver the most dramatic visual impact. Arrive slightly
        early to capture sunset photography at Siloso Beach. Festive seasons add decorative
        lighting across Sentosa Island.
      </p>
    </Section>
    <Section title="Tips for Indian Travelers">
      <p>
        Wear lightweight clothing with a light scarf or jacket for breezy beachside evenings.
        Vegetarian food is widely available across Sentosa restaurants. Combine with Siloso Beach
        Walk, SkyHelix Sentosa or the Singapore Cable Car earlier in the day.
      </p>
    </Section>
  </Wrap>
);
