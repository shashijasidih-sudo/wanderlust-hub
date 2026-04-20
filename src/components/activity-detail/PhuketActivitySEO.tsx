interface SEOSectionProps {
  title: string;
  whyBook: string[];
  included: string[];
  bestTime: string[];
  tips: string[];
}

const SEOSection = ({ title, whyBook, included, bestTime, tips }: SEOSectionProps) => (
  <section className="space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

    <div className="space-y-3">
      <h3 className="text-xl font-semibold">Why Book This Experience</h3>
      {whyBook.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
      ))}
    </div>

    <div className="space-y-3">
      <h3 className="text-xl font-semibold">What's Included</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        {included.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="space-y-3">
      <h3 className="text-xl font-semibold">Best Time to Visit</h3>
      {bestTime.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
      ))}
    </div>

    <div className="space-y-3">
      <h3 className="text-xl font-semibold">Tips for Indian Travelers</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  </section>
);

export const PhiPhiMayaKhaiSpeedboatSEO = () => (
  <SEOSection
    title="Phi Phi Islands, Maya Bay & Khai Island Speedboat Tour from Phuket"
    whyBook={[
      "A full-day speedboat tour to the Phi Phi Islands is one of the most iconic experiences in southern Thailand and easily the most popular excursion from Phuket — combining adventure, sightseeing, snorkeling, beach relaxation and photography in a single unforgettable day.",
      "Maya Bay, made globally famous by the movie The Beach, is surrounded by towering cliffs and turquoise water. Snorkeling near the coral reefs around Phi Phi Leh adds an accessible underwater highlight, while Khai Island offers powdery white sand and shallow turquoise waters perfect for swimming.",
      "Speedboats let you visit multiple islands efficiently, avoiding long ferry rides. With hotel pickup, meals and guided support, this tour is ideal for couples, families, honeymooners and first-time visitors to Phuket.",
    ]}
    included={[
      "Hotel pickup and drop-off (with transfer option)",
      "Phi Phi National Park entry fee",
      "Professional English-speaking guide",
      "Lunch at a beachfront restaurant on Phi Phi Don (vegetarian on request)",
      "Snorkeling equipment, life jackets and seasonal fruits",
      "Speedboat transfers between Maya Bay, Pileh Lagoon, Viking Cave and Khai Island",
    ]}
    bestTime={[
      "November to April offers calm seas and excellent snorkeling visibility. December to February is peak season with cooler, pleasant weather — ideal for photography.",
      "March to May is warmer but still suitable. From June to October the monsoon brings rougher seas and itineraries may be adjusted for safety.",
      "Morning departures are recommended for more island time and better photo lighting.",
    ]}
    tips={[
      "Wear quick-dry clothing and swimwear under your clothes for easy water access.",
      "Apply reef-safe sunscreen and carry sunglasses, hats and flip-flops.",
      "Vegetarian food is available — confirm preferences while booking; carrying snacks like theplas or biscuits helps on long travel hours.",
      "Use a waterproof phone pouch to safely capture photos on boats and beaches.",
      "Keep a copy of your passport and booking confirmation handy for hotel pickup.",
      "Carry seasickness tablets if you're sensitive to boat motion.",
    ]}
  />
);

export const PhiPhiBigBoatSEO = () => (
  <SEOSection
    title="Phi Phi Islands Guided Tour by Big Boat from Rassada Pier"
    whyBook={[
      "The Phi Phi Island guided tour by big boat is one of the most comfortable and family-friendly ways to explore the Phi Phi archipelago. Unlike speedboats, the big boat offers a smoother journey — ideal for families with children, senior travelers and anyone who prefers a relaxed experience.",
      "Departing from Rassada Pier, the spacious ferry comes with shaded seating, restrooms, refreshments and viewing decks. You can move freely on deck, capture photos and enjoy panoramic ocean views without the splashing of a speedboat.",
      "The tour explores Phi Phi Don Island and includes sightseeing near Phi Phi Leh's dramatic cliffs and hidden lagoons. With lunch, optional transfers and professional guides, it's a structured yet relaxed day trip showcasing Thailand's most iconic islands.",
    ]}
    included={[
      "Hotel pickup and drop-off from major Phuket areas (with transfer option)",
      "Big boat ferry transfers from Rassada Pier with shaded decks and safety equipment",
      "Professional English-speaking guide",
      "Lunch at a beachfront restaurant on Phi Phi Don (vegetarian options available)",
      "Snorkeling equipment at selected stops where conditions allow",
      "Travel insurance coverage",
    ]}
    bestTime={[
      "November to April offers calm seas and excellent visibility. December to February is the most pleasant period for photography and beach relaxation.",
      "March to May is warmer; carry sunscreen, sunglasses and a hat. From June to October the monsoon may bring rough waves, but big boats are more stable than speedboats.",
      "Morning departures are recommended for maximum island time and better lighting.",
    ]}
    tips={[
      "Wear light cotton clothes and comfortable flip-flops or sandals for beach stops.",
      "Vegetarian meals are generally available — mention dietary preferences while booking.",
      "Carry motion-sickness tablets as a precaution since the ferry journey is longer than a speedboat trip.",
      "Bring sunglasses, sunscreen, hats and a waterproof pouch for phones.",
      "Keep a copy of your passport and tour confirmation for verification at pickup or check-in.",
      "Carry some Thai Baht for snacks, souvenirs or optional beach activities on Phi Phi Don.",
    ]}
  />
);

export const JamesBondSeaCanoeSEO = () => (
  <SEOSection
    title="James Bond Island & Phang Nga Bay Speedboat Tour with Canoeing"
    whyBook={[
      "A speedboat tour to James Bond Island and Phang Nga Bay is one of the most scenic and unique day trips from Phuket — exploring dramatic limestone cliffs, hidden caves, emerald lagoons and peaceful mangrove forests within sheltered waters.",
      "James Bond Island, made famous by The Man with the Golden Gun, features a tall limestone karst rising vertically from the sea. Canoeing through sea caves and hidden lagoons provides a rare opportunity to explore untouched natural beauty.",
      "The tour also visits Koh Panyee Floating Village, a traditional Muslim fishing settlement built on stilts over the sea — a perfect mix of sightseeing, cultural exploration, photography and light adventure for Indian travelers.",
    ]}
    included={[
      "Hotel pickup and drop-off (with transfer option)",
      "Modern speedboat with safety gear and life jackets",
      "Professional English-speaking guide explaining geology and culture",
      "Sea canoeing through limestone caves and lagoons (paddlers provided)",
      "Lunch at Koh Panyee Floating Village (vegetarian options on request)",
      "National park entry fees and travel insurance",
    ]}
    bestTime={[
      "November to April is ideal — dry weather and calm seas make speedboat travel and cave canoeing comfortable and safe. December to February has the most pleasant temperatures.",
      "March to May is warmer but still suitable. June to October brings monsoon rainfall, but Phang Nga Bay is sheltered, so tours typically continue with minor adjustments.",
      "Morning departures are recommended for unhurried exploration of caves, lagoons and floating villages.",
    ]}
    tips={[
      "Wear quick-dry clothing or carry an extra pair since canoeing involves water exposure.",
      "Use waterproof bags or phone pouches to protect valuables.",
      "Vegetarian meals at Koh Panyee are available — inform the operator while booking.",
      "Carry sunscreen, sunglasses and hats; sun reflection from cliffs and water is strong.",
      "Keep a copy of passport and booking confirmation for pickup verification.",
      "Carry some Thai Baht for souvenirs from the floating village vendors.",
      "Take a seasickness tablet before departure if sensitive to boat motion.",
    ]}
  />
);

export const PhuketCityTourSEO = () => (
  <SEOSection
    title="Phuket City Tour with Big Buddha, Wat Chalong & Old Town Sightseeing"
    whyBook={[
      "A Phuket City Tour is the perfect introduction to the island's cultural, spiritual and scenic highlights. Unlike island excursions, this experience explores Phuket's heritage landmarks, temples, viewpoints and charming Old Town streets in a relaxed half-day itinerary.",
      "Visit the iconic 45-meter Big Buddha Phuket on Nakkerd Hill for breathtaking panoramic views, then explore Wat Chalong — the most revered Buddhist temple on the island. Phuket Old Town adds colorful Sino-Portuguese architecture, boutique cafés and street art reflecting Phuket's multicultural past.",
      "Many itineraries also include scenic stops like Karon Viewpoint, where you can see Kata Noi, Kata and Karon beaches from a single vantage point. Ideal for Indian travelers with limited time who want a comprehensive cultural overview.",
    ]}
    included={[
      "Hotel pickup and drop-off from major Phuket areas (with transfer option)",
      "Professional English-speaking guide",
      "Air-conditioned vehicle and bottled drinking water",
      "Visits to Big Buddha Phuket, Wat Chalong, Phuket Old Town and scenic viewpoints",
      "Stops at local product shops (cashew nuts, honey, pearls)",
    ]}
    bestTime={[
      "November to April is the best window — dry, comfortable weather for sightseeing. December to February is especially pleasant with cooler temperatures and clear skies.",
      "March to May is warmer; carry sunscreen, sunglasses and hats. June to October may bring occasional monsoon rains, but city attractions remain accessible year-round.",
      "Morning departures are ideal for fewer crowds and cooler temperatures at temples and viewpoints.",
    ]}
    tips={[
      "Dress modestly for Wat Chalong — cover shoulders and knees as it's a religious site.",
      "Wear footwear that's easy to remove; temples require shoes off before entry.",
      "Carry sunglasses, sunscreen and hats for outdoor viewpoints.",
      "Vegetarian food is widely available in Phuket Town cafés and restaurants.",
      "Carry small Thai Baht for souvenirs, snacks or temple donations.",
      "Bring a camera or smartphone — most locations are highly photogenic.",
    ]}
  />
);

export const PhuketFantaSeaSEO = () => (
  <SEOSection
    title="Phuket FantaSea Show with Optional Dinner Buffet"
    whyBook={[
      "Phuket FantaSea is one of the island's most spectacular evening attractions — a cultural theme park near Kamala Beach that combines storytelling, stage technology, music, dance, costumes and special effects into a memorable night show suitable for families, couples and groups.",
      "The highlight is the Fantasy of a Kingdom stage performance — a large-scale production with hundreds of performers, elaborate costumes, traditional Thai dance, acrobatics and visual illusions blending Thai folklore with modern theatre.",
      "Before the show, explore the cultural theme park with shopping streets, carnival games and handicraft stalls. The optional Golden Kinnaree Buffet — one of Southeast Asia's largest — serves international cuisine with vegetarian-friendly selections for Indian visitors.",
    ]}
    included={[
      "Entry ticket to the Fantasy of a Kingdom cultural stage show",
      "Reserved comfortable theatre seating",
      "Optional Golden Kinnaree Buffet dinner (with vegetarian options)",
      "Hotel pickup and drop-off (with transfer option)",
      "Access to the cultural theme park area before the show",
      "Travel insurance (depending on provider)",
    ]}
    bestTime={[
      "FantaSea operates year-round and the show is indoors, so weather rarely affects the experience. The dry season (November to April) is best for combining the show with daytime sightseeing.",
      "December and January are peak months — book in advance as seats fill quickly. The monsoon season (June–October) makes FantaSea a reliable indoor entertainment alternative.",
      "Arrive early to explore the theme park area, take photos and complete dinner before the performance.",
    ]}
    tips={[
      "Arrive 60–90 minutes before showtime to enjoy the cultural park.",
      "Vegetarian food is available at the Golden Kinnaree Buffet — confirm while booking.",
      "Carry a light jacket or shawl; the theatre is strongly air-conditioned.",
      "Photography is not allowed during the show — take pictures in the park area.",
      "Smart casual evening wear works best — avoid overly casual beachwear.",
      "Keep a copy of your booking confirmation for entry and transfer coordination.",
      "Carry some Thai Baht for souvenirs and snacks from theme park shops.",
    ]}
  />
);

export const SimonCabaretSEO = () => (
  <SEOSection
    title="Simon Cabaret Phuket Show with Optional Transfers"
    whyBook={[
      "The Simon Cabaret Phuket Show is one of the island's most famous evening performances — a glamorous blend of music, dance, theatrical storytelling and vibrant costumes. Located near Patong Beach, this internationally recognized cabaret is a must-see for travelers seeking entertainment beyond bars and clubs.",
      "The spectacular stage production features talented transgender performers presenting acts inspired by global cultures — China, Korea, India, Egypt and Western pop traditions — making it appealing for travelers from around the world.",
      "Modern, comfortable, air-conditioned theatre with excellent visibility from all sections. Ideal for families, couples and senior travelers — and a great relaxing evening option after a day of sightseeing or shopping.",
    ]}
    included={[
      "Reserved show ticket (Standard, Deluxe or VIP seating)",
      "60–75 minute themed cabaret performance",
      "Hotel pickup and drop-off from major Phuket areas (with transfer option)",
      "Air-conditioned comfortable theatre seating",
      "Optional photo opportunities with performers after the show",
      "Travel insurance (depending on provider)",
    ]}
    bestTime={[
      "Simon Cabaret operates year-round with multiple shows each evening. Indoor venue means weather doesn't affect the experience.",
      "Early evening shows suit families with children; later shows fit couples and nightlife explorers. November to April is peak season — book in advance.",
      "During monsoon (June–October), Simon Cabaret is an excellent indoor entertainment alternative. Arrive 20–30 minutes early for smooth entry.",
    ]}
    tips={[
      "Smart casual clothing is recommended — formal attire isn't required.",
      "Photography during the performance isn't allowed; you can take photos with performers afterwards.",
      "Carry small Thai Baht as tipping is customary for photos with performers.",
      "Family-friendly and suitable for children — ideal for travelers visiting with relatives.",
      "Carry a light jacket or shawl since the theatre is strongly air-conditioned.",
      "Keep a digital or printed copy of your booking confirmation for entry.",
      "Combining the show with dinner at Patong Beach makes a popular evening itinerary.",
    ]}
  />
);

export const TigerKingdomSEO = () => (
  <SEOSection
    title="Tiger Kingdom Phuket Experience with Optional Transfers"
    whyBook={[
      "Tiger Kingdom Phuket is one of the island's most unique wildlife attractions — offering visitors the rare opportunity to observe and interact closely with majestic Bengal tigers in a controlled, professionally managed environment.",
      "Choose your interaction based on tiger size and age — playful cubs, medium adolescents or fully grown adults — making the activity suitable for families, couples and adventure-seeking travelers. Professional trainers stay present throughout to ensure safety and animal comfort.",
      "An excellent photography opportunity for capturing once-in-a-lifetime pictures. The activity takes only a few hours, making it easy to combine with city tours, temple visits or evening shows on the same day.",
    ]}
    included={[
      "Entry tickets with access to selected tiger interaction zones (small/medium/large/giant)",
      "Supervised interaction sessions with trained handlers",
      "Hotel pickup and drop-off from major Phuket areas (with transfer option)",
      "Access to viewing areas to observe tigers resting and playing",
      "Onsite professional photography (purchasable separately)",
      "Travel insurance (depending on provider)",
    ]}
    bestTime={[
      "Tiger Kingdom can be visited year-round as it's a structured indoor-outdoor attraction unaffected by seasonal weather changes.",
      "Morning hours are best — temperatures are cooler, tigers are more active and crowds are smaller. November to April offers the most pleasant overall conditions.",
      "March to May is warmer; wear light clothing and stay hydrated. Even during monsoon (June–October), most interaction areas remain accessible.",
    ]}
    tips={[
      "Wear smart casual clothing without loose accessories like scarves — trainers may ask to remove them for safety.",
      "Follow trainer instructions carefully; stay calm and move slowly during interactions.",
      "Children below certain age or height limits may not enter larger tiger enclosures — check eligibility while booking.",
      "Photography is allowed; professional onsite photos often produce better results.",
      "Carry sunglasses, sunscreen and water if visiting during midday.",
      "Vegetarian food is available at nearby cafés and restaurants outside the attraction.",
      "Carry some Thai Baht for photo packages or souvenirs inside the park.",
    ]}
  />
);
