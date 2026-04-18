import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SEOSection {
  heading: string;
  body?: string | string[];
  bullets?: string[];
}

interface BangkokSEOProps {
  title: string;
  sections: SEOSection[];
}

const renderBody = (body?: string | string[]) => {
  if (!body) return null;
  const paras = Array.isArray(body) ? body : [body];
  return paras.map((p, i) => (
    <p key={i} className={i === 0 ? "" : "mt-3"}>
      {p}
    </p>
  ));
};

const BangkokActivitySEO = ({ title, sections }: BangkokSEOProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-8 text-muted-foreground leading-relaxed">
      {sections.map((s, i) => (
        <section key={i}>
          <h3 className="text-lg font-semibold text-foreground mb-3">{s.heading}</h3>
          {renderBody(s.body)}
          {s.bullets && (
            <ul className="list-disc pl-6 mt-2 space-y-1">
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </CardContent>
  </Card>
);

// ============== Activity-specific configurations ==============

export const ThreeTemplesGrandPalaceSEO = () => (
  <BangkokActivitySEO
    title="Bangkok Three Temple Tour with Grand Palace & Emerald Buddha – Complete Guide"
    sections={[
      {
        heading: "Why Book the Three Temple Tour with Grand Palace and Emerald Buddha",
        body: [
          "The Bangkok Three Temple Tour with Grand Palace and Emerald Buddha is one of the most recommended cultural experiences for travelers visiting Thailand for the first time. This guided sightseeing tour combines the city's most sacred temples with Thailand's most important royal landmark, making it an essential addition to any Bangkok itinerary.",
          "The tour includes visits to Wat Arun (Temple of Dawn), Wat Phra Kaew (Emerald Buddha Temple), and the Grand Palace, each representing a different aspect of Thailand's spiritual heritage and architectural brilliance. Together, these locations provide deep insight into Thai royal traditions, Buddhist culture, and historical craftsmanship.",
          "Booking this activity in advance ensures priority entry, optional hotel transfers, and a well-planned schedule that allows visitors to explore multiple attractions efficiently in one trip. Indian travelers can pay securely in INR before departure from India.",
        ],
      },
      {
        heading: "What's Included in the Three Temple and Grand Palace Tour",
        body: "Your Bangkok temple tour package typically includes entry access to some of Thailand's most famous religious and royal sites — the magnificent Grand Palace complex, the Temple of the Emerald Buddha, and the iconic Wat Arun.",
        bullets: [
          "Hotel pickup and drop-off services",
          "English-speaking guide",
          "Comfortable air-conditioned transportation",
          "Entry tickets to temple complexes",
          "Bottled drinking water during the trip",
        ],
      },
      {
        heading: "Best Time to Visit",
        body: [
          "The best time to take this tour is early in the morning between 8:30 AM and 11:00 AM, when temperatures are cooler and crowds are lighter. Morning visits offer better photography lighting on the Grand Palace's golden structures.",
          "November to February is the most pleasant season for sightseeing in Bangkok. Weekday visits are recommended for a quieter experience.",
        ],
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body: [
          "The transfer option includes shared hotel pickup and drop-off services from selected Bangkok hotels — ideal for first-time visitors unfamiliar with local transport.",
          "The no-transfer option allows guests to reach the meeting point independently, perfect for travelers staying near central Bangkok.",
        ],
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Temple dress code requires full-length pants/long skirts, covered shoulders, and comfortable walking shoes. Sleeveless tops, shorts, and short dresses are not permitted. Carry sunscreen, sunglasses, and water during warmer months. Booking online in advance helps avoid long Grand Palace queues, and INR payment makes planning easier.",
      },
      {
        heading: "Tour Timings",
        bullets: [
          "Hotel pickup: Between 7:30 AM and 9:00 AM",
          "Grand Palace entry: Around 8:30 AM onward",
          "Temple visits duration: 2 to 3 hours total",
          "Tour completion: Around 12:00 PM",
        ],
      },
    ]}
  />
);

export const WatArunPhoPhraKaewSEO = () => (
  <BangkokActivitySEO
    title="Bangkok Three Temple Tour – Wat Arun, Wat Pho & Wat Phra Kaew Guide"
    sections={[
      {
        heading: "Why Book the Wat Arun, Wat Pho & Wat Phra Kaew Tour",
        body: [
          "The Bangkok Three Temple Tour covering Wat Arun, Wat Pho, and Wat Phra Kaew is one of the most culturally enriching sightseeing experiences in Thailand. These three temples represent the spiritual heart of Bangkok and are among the most visited religious landmarks in Southeast Asia.",
          "Each temple offers a distinct experience — from the riverside beauty of Wat Arun to the majestic Emerald Buddha at Wat Phra Kaew and the massive 46-meter Reclining Buddha at Wat Pho.",
          "For Indian travelers visiting Thailand for the first time, this tour provides an excellent introduction to Bangkok's cultural highlights with secure INR payment options.",
        ],
      },
      {
        heading: "What's Included",
        body: "Your Bangkok Three Temple Tour package includes entry access to three of Thailand's most historically significant religious landmarks: Wat Phra Kaew (home to the Emerald Buddha), Wat Pho (the Reclining Buddha and birthplace of Thai massage), and Wat Arun (the Temple of Dawn).",
        bullets: [
          "Air-conditioned transportation",
          "English-speaking guide",
          "Temple entry tickets",
          "Hotel pickup and drop-off services",
          "Bottled drinking water",
        ],
      },
      {
        heading: "Best Time for the Tour",
        body: "The best time is early morning between 8:00 AM and 11:00 AM. Morning light reflects beautifully off Wat Arun's porcelain-covered structures. November to February offers the most pleasant weather; weekdays are quieter than weekends.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body: "The transfer option includes shared hotel pickup and drop-off — recommended for first-time visitors. The no-transfer option suits travelers staying near central Bangkok using BTS Skytrain, taxi, or ferry.",
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Wear full-length trousers or long skirts, covered shoulders, and comfortable footwear. Sleeveless tops and shorts are not permitted. Carry sunscreen, hats, and water. Booking online avoids long queues at Wat Phra Kaew, and INR payments are supported.",
      },
      {
        heading: "Tour Timings",
        bullets: [
          "Hotel pickup: Between 7:30 AM and 9:00 AM",
          "Temple visits begin: Around 8:30 AM",
          "Total sightseeing duration: 2 to 4 hours",
          "Tour completion: Around 12:00 PM",
        ],
      },
    ]}
  />
);

export const GrandPalaceEmeraldSEO = () => (
  <BangkokActivitySEO
    title="Bangkok Grand Palace & Emerald Buddha Temple Tour – Complete Guide"
    sections={[
      {
        heading: "Why Book the Grand Palace & Emerald Buddha Temple Tour",
        body: [
          "The Bangkok Grand Palace & Emerald Buddha Temple Tour is one of the most important cultural experiences in Thailand and a must-visit attraction for first-time visitors. The Grand Palace complex represents centuries of Thai royal heritage, architectural brilliance, and religious devotion.",
          "The highlight is Wat Phra Kaew (Temple of the Emerald Buddha), Thailand's most sacred Buddhist temple. The jade Emerald Buddha symbolizes spiritual protection for the nation.",
          "The Grand Palace itself once served as the official residence of Thai kings — its golden stupas, intricate murals, royal courtyards, and detailed mosaics make it one of the most visually impressive attractions in Bangkok. Booking online avoids long entry queues.",
        ],
      },
      {
        heading: "What's Included",
        body: "Your Grand Palace Bangkok tour package typically includes entry access to the full palace complex along with Wat Phra Kaew.",
        bullets: [
          "Grand Palace ceremonial courtyards",
          "Wat Phra Kaew temple complex",
          "Royal galleries and murals",
          "Golden stupas and statues",
          "Historic throne halls",
          "Hotel pickup and drop-off (selected packages)",
          "English-speaking guide & bottled water",
        ],
      },
      {
        heading: "Best Time for the Tour",
        body: "Visit early between 8:30 AM and 10:30 AM to avoid peak crowds and harsh heat. Morning light gives the best photography of golden temple structures and mosaic walls. November to February is the most pleasant season.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body: "Transfer packages include shared hotel pickup/drop-off — ideal for first-time visitors. No-transfer suits travelers near central Bangkok who prefer using BTS Skytrain, taxis, or ferries.",
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Strict dress code: full-length trousers or long skirts, shirts covering shoulders, comfortable footwear. Sleeveless tops and shorts are not permitted. Carry sunscreen, sunglasses, and water. INR payment is supported on trusted platforms.",
      },
      {
        heading: "Visiting Hours",
        bullets: [
          "Opening time: 8:30 AM",
          "Last entry: Around 3:30 PM",
          "Recommended visit duration: 2 to 3 hours",
        ],
      },
    ]}
  />
);

export const MaeklongFloatingMarketSEO = () => (
  <BangkokActivitySEO
    title="Maeklong Railway Market & Damnoen Saduak Floating Market Tour – Complete Guide"
    sections={[
      {
        heading: "Why Book the Maeklong Railway Market & Floating Market Tour",
        body: [
          "This is one of the most exciting cultural day trips near Bangkok, combining two of Thailand's most iconic traditional marketplaces in a single half-day or full-day experience. Visitors witness a train passing directly through a bustling market street and explore vibrant canals filled with wooden boats.",
          "The highlight is Maeklong Railway Market — the famous \"train market\" where vendors quickly fold their umbrellas and move goods aside moments before a train passes through the narrow track running across the market.",
          "The second stop is Damnoen Saduak Floating Market, Thailand's most popular floating market, where colorful wooden boats glide through canals selling tropical fruits, street food, coconut desserts, and handmade crafts.",
        ],
      },
      {
        heading: "What's Included",
        body: "Your floating market Bangkok tour package typically includes visits to both Maeklong Railway Market and Damnoen Saduak Floating Market.",
        bullets: [
          "Hotel pickup and drop-off services",
          "Air-conditioned transportation",
          "English-speaking guide",
          "Visit to Maeklong Railway Market",
          "Visit to Damnoen Saduak Floating Market",
          "Optional long-tail boat ride through canals",
          "Bottled drinking water",
        ],
      },
      {
        heading: "Best Time for the Tour",
        body: "The best time is early morning between 7:00 AM and 11:00 AM, when markets are most active and temperatures are cooler. Morning visits are essential to catch the train passing through Maeklong Railway Market and the most vibrant floating market activity.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body: "The transfer option is highly recommended because both markets are located outside the city center and public transport routes can be complicated. The no-transfer option suits travelers planning to continue exploring nearby provinces afterward.",
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Prepare for early departures (6:30 AM – 7:30 AM). Wear comfortable walking footwear. Vegetarian snacks like fresh fruits, coconut pancakes, sticky rice desserts, and vegetable noodles are widely available. Carry small Thai Baht notes for boat vendors. INR payment is supported.",
      },
      {
        heading: "Tour Timings",
        bullets: [
          "Hotel pickup: 6:30 AM – 7:30 AM",
          "Arrival at Maeklong Railway Market: ~8:30 AM",
          "Floating market visit: ~9:30 AM – 11:00 AM",
          "Return to Bangkok: ~12:30 PM – 1:30 PM",
        ],
      },
    ]}
  />
);

export const BangkokCityBoatTourSEO = () => (
  <BangkokActivitySEO
    title="Bangkok City Boat Tour on Chao Phraya River – Complete Guide"
    sections={[
      {
        heading: "Why Book the Bangkok City Boat Tour",
        body: [
          "The Bangkok City Boat Tour on the Chao Phraya River is one of the most scenic and relaxing ways to explore Thailand's capital. Known as the \"River of Kings,\" the Chao Phraya flows through the historic heart of Bangkok and passes some of the city's most iconic landmarks, temples, and royal structures.",
          "Unlike road-based tours, a river cruise lets visitors experience Bangkok from a unique perspective while avoiding city traffic. The journey offers uninterrupted views of riverside temples, traditional wooden houses, luxury hotels, and historic bridges.",
          "Travelers typically pass landmarks such as Wat Arun, the Grand Palace, and Wat Phra Kaew. INR payment options make planning convenient before arrival in Thailand.",
        ],
      },
      {
        heading: "What's Included",
        bullets: [
          "Chao Phraya River sightseeing cruise",
          "English-speaking guide",
          "Visits near major temple landmarks",
          "Long-tail boat ride through canals (selected packages)",
          "Hotel pickup and drop-off (optional)",
          "Air-conditioned transportation to pier",
          "Bottled drinking water",
        ],
      },
      {
        heading: "Best Time for the Boat Tour",
        body: [
          "Morning departures (8:30 AM – 11:30 AM) offer comfortable weather and clear views of temple architecture. Afternoon departures showcase vibrant city activity along the river.",
          "Sunset cruises are especially popular among couples and photographers because the skyline transforms beautifully as temple structures and bridges illuminate against the evening sky.",
        ],
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body: "Transfer packages include shared hotel pickup/drop-off — helpful for first-time visitors unfamiliar with pier locations. No-transfer suits guests staying near central Bangkok riverside districts.",
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Many Indian travelers include this on their first-day itinerary as it provides an excellent introduction to Bangkok's layout. Wear comfortable clothing and footwear. Vegetarian snacks are available at riverside cafes. Bring a camera with extra storage for the skyline views. INR payments are supported.",
      },
      {
        heading: "Tour Timings",
        bullets: [
          "Morning departures: 8:30 AM – 11:30 AM",
          "Afternoon departures: 12:30 PM – 3:30 PM",
          "Sunset departures (selected packages): 4:30 PM – 6:30 PM",
          "Total tour duration: 2 to 4 hours",
        ],
      },
    ]}
  />
);

export const GoldenBuddhaMarbleTempleSEO = () => (
  <BangkokActivitySEO
    title="Golden Buddha & Marble Temple Bangkok Tour – Complete Guide"
    sections={[
      {
        heading: "Why Book the Golden Buddha & Marble Temple Tour",
        body: [
          "The Golden Buddha & Marble Temple Bangkok Tour is one of the most popular half-day cultural sightseeing experiences in Thailand's capital. It allows visitors to explore two of Bangkok's most architecturally significant Buddhist temples in a short, well-structured itinerary.",
          "The first highlight is Wat Traimit, home to the world's largest solid gold Buddha statue weighing over 5.5 tons. Visitors learn the fascinating story of how the statue remained hidden beneath plaster for centuries before its true value was discovered.",
          "The second stop is Wat Benchamabophit, one of the most elegant temples in Bangkok. Built using Italian Carrara marble, it combines traditional Thai architecture with European materials to create a unique, visually striking landmark.",
        ],
      },
      {
        heading: "What's Included",
        bullets: [
          "Visit to Wat Traimit (Golden Buddha)",
          "Visit to Wat Benchamabophit (Marble Temple)",
          "Hotel pickup and drop-off (selected packages)",
          "English-speaking guide",
          "Air-conditioned transportation",
          "Bottled drinking water",
        ],
      },
      {
        heading: "Best Time for the Tour",
        body: "The best time is morning between 8:30 AM and 11:30 AM — cooler temperatures and the best lighting for photography at the white Marble Temple. November to February is the most comfortable season.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body: "Transfer packages include shared hotel pickup/drop-off — helpful for those unfamiliar with local transport. No-transfer works well for guests staying near central Bangkok districts.",
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Wear full-length trousers or long skirts, shirts covering shoulders, and comfortable footwear. Sleeveless tops and shorts are not permitted. Vegetarian-friendly restaurants are available near temple areas. INR payment is supported on trusted platforms.",
      },
      {
        heading: "Tour Timings",
        bullets: [
          "Morning hotel pickup: 7:30 AM – 9:00 AM",
          "Temple visits: 8:30 AM onward",
          "Tour completion: 11:30 AM – 12:00 PM",
          "Afternoon departures (selected): 1:00 PM – 4:00 PM",
        ],
      },
    ]}
  />
);

export const SeaLifeMadameTussaudsSEO = () => (
  <BangkokActivitySEO
    title="Sea Life Bangkok Ocean World & Madame Tussauds Combo – Complete Guide"
    sections={[
      {
        heading: "Why Book the Sea Life & Madame Tussauds Combo Tickets",
        body: [
          "The Sea Life Bangkok Ocean World & Madame Tussauds combo is one of the best indoor family-friendly attractions in Bangkok. Located inside the popular Siam Paragon shopping complex, the combo combines marine exploration with interactive celebrity encounters in a single convenient visit.",
          "At Sea Life Bangkok Ocean World, visitors walk through immersive underwater tunnels surrounded by sharks, stingrays, coral reefs, and exotic marine species. Themed zones are designed to educate and entertain visitors of all ages.",
          "Madame Tussauds Bangkok showcases lifelike wax figures of global celebrities, sports stars, movie icons, and world leaders — perfect for families, couples, and solo travelers. Booking the combo online saves money compared to separate tickets.",
        ],
      },
      {
        heading: "What's Included at Sea Life Ocean World",
        bullets: [
          "Ocean tunnel walkthrough experience",
          "Coral reef exhibits",
          "Penguin ice playground",
          "Jellyfish display zones",
          "Shark and ray habitats",
          "Rainforest adventure section",
        ],
      },
      {
        heading: "What's Included at Madame Tussauds",
        bullets: [
          "Hollywood celebrities gallery",
          "Sports legends display",
          "Music icons zone",
          "Historical personalities",
          "Political leaders",
          "Asian entertainment stars",
        ],
      },
      {
        heading: "Best Time to Visit",
        body: "Both attractions are indoor and air-conditioned, making them perfect any time of day or season. Weekday mornings offer the quietest experience, while late afternoons are popular with families. Allow 3–4 hours total to enjoy both attractions comfortably.",
      },
      {
        heading: "Tips for Indian Travelers",
        body: "Located inside Siam Paragon mall, easily reachable by BTS Skytrain (Siam Station). Family-friendly with attractions suitable for children. Vegetarian dining options are available throughout the mall food court. INR payment is supported through online booking platforms.",
      },
    ]}
  />
);

export default BangkokActivitySEO;
