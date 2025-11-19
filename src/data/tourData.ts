export interface TourData {
  id: string;
  title: string;
  shortDescription: string;
  location: string;
  city: string;
  basePrice: number;
  childPrice: number;
  duration: string;
  rating: number;
  reviews: number;
  heroImages: {
    src: string;
    title: string;
  }[];
  galleryImages: {
    src: string;
    alt: string;
  }[];
  highlights: string[];
  description: {
    overview: string;
    whatToExpect: string;
  };
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
  tourTimings: string[];
  inclusions: string[];
  exclusions: string[];
  bookingPolicy: string[];
  cancellationPolicy: string[];
  childPolicy: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const toursData: Record<string, TourData> = {
  "bangkok-wat-arun-pho-traimit": {
    id: "bangkok-wat-arun-pho-traimit",
    title: "Bangkok's Famous Three Temple Wat Arun, Wat Pho, and Wat Traimit Private City and Cultural Tour",
    shortDescription: "Private tour exploring three iconic temples: Wat Arun, Wat Pho, and Wat Traimit (Golden Buddha), with personalized guide and flexible itinerary.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2400,
    childPrice: 1200,
    duration: "Half Day",
    rating: 4.8,
    reviews: 1523,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Private guided temple tour",
      "Visit Wat Arun, Temple of Dawn",
      "See the Reclining Buddha at Wat Pho",
      "Marvel at the Golden Buddha at Wat Traimit",
      "Flexible timing and pace"
    ],
    description: {
      overview: "Experience Bangkok's most famous temples on this private cultural tour. Enjoy personalized attention from your guide as you explore three magnificent temples.",
      whatToExpect: "Visit the iconic Wat Arun with its stunning riverside location, the serene Wat Pho with its giant Reclining Buddha, and Wat Traimit housing the impressive 5.5-ton solid gold Buddha statue."
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Private pickup from your hotel" },
      { time: "09:30 AM", title: "Wat Arun", description: "Explore the Temple of Dawn" },
      { time: "11:00 AM", title: "Wat Pho", description: "Visit the Reclining Buddha" },
      { time: "12:30 PM", title: "Wat Traimit", description: "See the Golden Buddha" },
      { time: "01:30 PM", title: "Return", description: "Drop-off at hotel" }
    ],
    tourTimings: ["09:00 AM – 01:30 PM", "01:00 PM – 05:30 PM"],
    inclusions: ["Private guide", "Hotel transfers", "Temple entrance fees", "Bottled water"],
    exclusions: ["Meals", "Personal expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Dress modestly for temples"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children must be accompanied by adults", "Child pricing for ages 3-11"],
    faqs: [
      { question: "Is this a private tour?", answer: "Yes, this is a private tour for your group only." },
      { question: "What should I wear?", answer: "Please wear clothing that covers shoulders and knees." }
    ]
  },
  "bangkok-city-boat-tour": {
    id: "bangkok-city-boat-tour",
    title: "Bangkok City Tour by Boat from Meeting Point",
    shortDescription: "Discover Bangkok from the water on this scenic boat tour along the Chao Phraya River and canals, visiting key landmarks.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3700,
    childPrice: 1850,
    duration: "4 Hours",
    rating: 4.7,
    reviews: 982,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Cruise along Chao Phraya River",
      "Explore Bangkok's canal network",
      "See riverside temples and landmarks",
      "Experience local life along waterways",
      "Long-tail boat experience"
    ],
    description: {
      overview: "Experience Bangkok from a unique perspective on this boat tour. Cruise along the Chao Phraya River and explore the city's intricate canal system.",
      whatToExpect: "Glide past temples, traditional houses, and modern skyscrapers while learning about Bangkok's history and culture from your guide."
    },
    itinerary: [
      { time: "09:00 AM", title: "Meeting Point", description: "Meet at Saphan Taksin Pier" },
      { time: "09:15 AM", title: "River Cruise", description: "Begin Chao Phraya River tour" },
      { time: "10:30 AM", title: "Canal Tour", description: "Explore Bangkok's canals" },
      { time: "12:00 PM", title: "Temple Stops", description: "Visit riverside temples" },
      { time: "01:00 PM", title: "Return", description: "Return to starting pier" }
    ],
    tourTimings: ["09:00 AM – 01:00 PM", "02:00 PM – 06:00 PM"],
    inclusions: ["Boat cruise", "English-speaking guide", "Life jackets", "Bottled water"],
    exclusions: ["Hotel transfers", "Meals", "Personal expenses"],
    bookingPolicy: ["Meet at designated pier", "Arrive 15 minutes early"],
    cancellationPolicy: ["Free cancellation 24 hours before", "50% refund within 24 hours"],
    childPolicy: ["Children must wear life jackets", "Infant seats available"],
    faqs: [
      { question: "Where is the meeting point?", answer: "Saphan Taksin Pier, near BTS station." },
      { question: "Is the tour covered?", answer: "Boats have covered seating areas." }
    ]
  },
  "bangkok-city-gems-gallery": {
    id: "bangkok-city-gems-gallery",
    title: "Bangkok City and Temple Tours with Gems Gallery",
    shortDescription: "Explore Bangkok's famous temples and visit the world-renowned Gems Gallery on this comprehensive city tour.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1800,
    childPrice: 900,
    duration: "Half Day",
    rating: 4.6,
    reviews: 754,
    heroImages: [],
    galleryImages: [],
    highlights: ["Visit key Bangkok temples", "Tour Gems Gallery", "Learn about Thai gems", "Hotel transfers included", "English-speaking guide"],
    description: { overview: "Discover Bangkok's cultural landmarks and visit the famous Gems Gallery.", whatToExpect: "Explore beautiful temples and learn about Thailand's gem industry." },
    itinerary: [{ time: "09:00 AM", title: "Pickup", description: "Hotel pickup" }, { time: "10:00 AM", title: "Temple Tour", description: "Visit major temples" }, { time: "12:00 PM", title: "Gems Gallery", description: "Tour the Gems Gallery" }, { time: "01:30 PM", title: "Return", description: "Hotel drop-off" }],
    tourTimings: ["09:00 AM – 01:30 PM"],
    inclusions: ["Hotel transfers", "Guide", "Entrance fees", "Water"],
    exclusions: ["Meals", "Personal expenses"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years"],
    faqs: [{ question: "What is Gems Gallery?", answer: "Thailand's largest jewelry store." }]
  },
  "bangkok-wat-arun-chinatown": {
    id: "bangkok-wat-arun-chinatown",
    title: "Double World Heritage Bangkok City Tour: Sunset at Wat Arun and Chinatown Street Food Experience",
    shortDescription: "Experience sunset at Wat Arun followed by a street food adventure in Bangkok's vibrant Chinatown.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 5900,
    childPrice: 2950,
    duration: "Half Day",
    rating: 4.9,
    reviews: 1834,
    heroImages: [],
    galleryImages: [],
    highlights: ["Sunset at Wat Arun", "Chinatown street food tour", "Local food tastings", "Cultural experience", "Join-in group tour"],
    description: { overview: "Witness a magical sunset at Wat Arun and dive into Chinatown's culinary scene.", whatToExpect: "Enjoy temple views at sunset and sample authentic Thai-Chinese street food." },
    itinerary: [{ time: "04:00 PM", title: "Meeting Point", description: "Meet at designated location" }, { time: "04:30 PM", title: "Wat Arun", description: "Visit during golden hour" }, { time: "06:00 PM", title: "Chinatown", description: "Street food tour" }, { time: "08:00 PM", title: "End", description: "Tour concludes" }],
    tourTimings: ["04:00 PM – 08:00 PM"],
    inclusions: ["Guide", "Temple fee", "Food tastings", "Water"],
    exclusions: ["Hotel transfers", "Additional food", "Drinks"],
    bookingPolicy: ["Join-in tour", "Meet at location"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Children welcome", "Child rate 3-11 years"],
    faqs: [{ question: "How much food is included?", answer: "Multiple tasting portions at different stalls." }]
  },
  "bangkok-golden-marble-buddha": {
    id: "bangkok-golden-marble-buddha",
    title: "Bangkok City and Temple Tour with Golden Buddha, Marble Temple, Mini Reclining Buddha, and Gems Gallery",
    shortDescription: "Visit Bangkok's beautiful temples including Golden Buddha, Marble Temple, and Mini Reclining Buddha, plus Gems Gallery.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2000,
    childPrice: 1000,
    duration: "Half Day",
    rating: 4.7,
    reviews: 892,
    heroImages: [],
    galleryImages: [],
    highlights: ["Golden Buddha at Wat Traimit", "Marble Temple visit", "Mini Reclining Buddha", "Gems Gallery tour", "Comprehensive city tour"],
    description: { overview: "Explore Bangkok's most significant temples on this half-day tour.", whatToExpect: "Visit stunning temples showcasing Thai Buddhist architecture and artistry." },
    itinerary: [{ time: "09:00 AM", title: "Pickup", description: "Hotel pickup" }, { time: "09:30 AM", title: "Wat Traimit", description: "Golden Buddha" }, { time: "10:30 AM", title: "Marble Temple", description: "Wat Benchamabophit" }, { time: "11:30 AM", title: "Mini Reclining Buddha", description: "Temple visit" }, { time: "12:30 PM", title: "Gems Gallery", description: "Shopping tour" }, { time: "01:30 PM", title: "Return", description: "Hotel drop-off" }],
    tourTimings: ["09:00 AM – 01:30 PM"],
    inclusions: ["Transfers", "Guide", "Entrance fees", "Water"],
    exclusions: ["Meals", "Shopping"],
    bookingPolicy: ["Dress modestly"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years"],
    faqs: [{ question: "What is the Marble Temple?", answer: "Wat Benchamabophit, known for its Italian marble construction." }]
  },
  "ayutthaya-temple-tour": {
    id: "ayutthaya-temple-tour",
    title: "Ayutthaya Temple Join Tour from Bangkok by Road with Transfer",
    shortDescription: "Full-day tour to the ancient capital of Ayutthaya, exploring UNESCO World Heritage temples and historical sites.",
    location: "Ayutthaya, Thailand",
    city: "bangkok",
    basePrice: 5000,
    childPrice: 2500,
    duration: "Full Day",
    rating: 4.8,
    reviews: 2145,
    heroImages: [],
    galleryImages: [],
    highlights: ["UNESCO World Heritage Site", "Wat Mahathat", "Wat Phra Si Sanphet", "Bang Pa-In Palace", "Join-in group tour", "Lunch included"],
    description: { overview: "Journey to Ayutthaya, the former capital of Siam, and explore magnificent temple ruins.", whatToExpect: "Discover ancient temples, learn Thai history, and visit the royal summer palace." },
    itinerary: [{ time: "07:00 AM", title: "Pickup", description: "Hotel pickup in Bangkok" }, { time: "09:00 AM", title: "Ayutthaya", description: "Arrive at ancient city" }, { time: "09:30 AM", title: "Temple Tour", description: "Visit major temples" }, { time: "12:00 PM", title: "Lunch", description: "Thai buffet lunch" }, { time: "02:00 PM", title: "Bang Pa-In", description: "Summer Palace visit" }, { time: "04:00 PM", title: "Return", description: "Drive back to Bangkok" }, { time: "06:00 PM", title: "Hotel Drop-off", description: "Return to hotel" }],
    tourTimings: ["07:00 AM – 06:00 PM"],
    inclusions: ["Round-trip transfer", "Guide", "Lunch", "Entrance fees", "Water"],
    exclusions: ["Personal expenses", "Additional snacks"],
    bookingPolicy: ["Join-in tour", "Minimum 2 people"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years", "Infants free"],
    faqs: [{ question: "How long is the drive?", answer: "Approximately 1.5-2 hours each way." }]
  },
  "bangkok-grand-palace-emerald": {
    id: "bangkok-grand-palace-emerald",
    title: "The Best of Bangkok: Royal Grand Palace, Emerald Buddha and Reclining Buddha",
    shortDescription: "Visit Bangkok's top three attractions: the Grand Palace, Emerald Buddha, and Reclining Buddha at Wat Pho.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2300,
    childPrice: 1150,
    duration: "Half Day",
    rating: 4.9,
    reviews: 3156,
    heroImages: [],
    galleryImages: [],
    highlights: ["Grand Palace", "Emerald Buddha", "Wat Pho Reclining Buddha", "Professional guide", "Skip-the-line access"],
    description: { overview: "Experience Bangkok's most important cultural sites in one tour.", whatToExpect: "Explore royal architecture, sacred temples, and learn about Thai Buddhism." },
    itinerary: [{ time: "08:00 AM", title: "Pickup", description: "Hotel pickup" }, { time: "09:00 AM", title: "Grand Palace", description: "Tour the palace complex" }, { time: "10:30 AM", title: "Emerald Buddha", description: "Visit Wat Phra Kaew" }, { time: "11:30 AM", title: "Wat Pho", description: "See the Reclining Buddha" }, { time: "12:30 PM", title: "Return", description: "Hotel drop-off" }],
    tourTimings: ["08:00 AM – 12:30 PM", "01:00 PM – 05:30 PM"],
    inclusions: ["Hotel transfers", "Guide", "All entrance fees", "Water"],
    exclusions: ["Meals", "Tips"],
    bookingPolicy: ["Dress code: covered shoulders and knees"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Children under 3 free", "Child rate 3-11 years"],
    faqs: [{ question: "Can I take photos inside?", answer: "Photography allowed in most areas except inside the Emerald Buddha temple." }]
  },
  "baiyoke-buffet": {
    id: "baiyoke-buffet",
    title: "All Day Buffet at Baiyoke Floating Market on 75th floor",
    shortDescription: "Enjoy an all-day international buffet with panoramic Bangkok views from the 75th floor of Baiyoke Tower.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2200,
    childPrice: 1100,
    duration: "Flexible",
    rating: 4.5,
    reviews: 1678,
    heroImages: [],
    galleryImages: [],
    highlights: ["360-degree city views", "International buffet", "Thai and Asian cuisine", "Rotating observation deck", "75th floor dining"],
    description: { overview: "Dine at one of Bangkok's highest restaurants with spectacular views.", whatToExpect: "Enjoy unlimited buffet with diverse cuisines while taking in panoramic city views." },
    itinerary: [{ time: "10:00 AM", title: "Admission", description: "Buffet opens" }, { time: "All Day", title: "Dining", description: "Enjoy buffet and views" }, { time: "10:00 PM", title: "Closing", description: "Last admission" }],
    tourTimings: ["10:00 AM – 10:00 PM"],
    inclusions: ["Buffet meal", "Observation deck access", "Soft drinks"],
    exclusions: ["Hotel transfers", "Alcoholic beverages", "Special menu items"],
    bookingPolicy: ["Voucher must be presented", "Smart casual dress code"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child height under 90cm free", "Child rate 90-135cm"],
    faqs: [{ question: "What type of food is available?", answer: "Thai, Asian, Western, seafood, desserts, and more." }]
  },
  "sea-life-madame-tussauds": {
    id: "sea-life-madame-tussauds",
    title: "Bangkok Sea Life Aquarium and Madame Tussauds Admission Ticket (Off Peak Day Timing)",
    shortDescription: "Combo ticket for Bangkok's top attractions: Sea Life Ocean World and Madame Tussauds wax museum.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1600,
    childPrice: 800,
    duration: "Half Day",
    rating: 4.7,
    reviews: 2341,
    heroImages: [],
    galleryImages: [],
    highlights: ["Sea Life Ocean World", "Madame Tussauds Bangkok", "Interactive exhibits", "Photo with celebrities", "Off-peak pricing"],
    description: { overview: "Visit two of Bangkok's most popular attractions in one day.", whatToExpect: "Explore underwater world and meet lifelike wax figures of celebrities." },
    itinerary: [{ time: "10:00 AM", title: "Sea Life", description: "Start at aquarium" }, { time: "12:00 PM", title: "Madame Tussauds", description: "Visit wax museum" }, { time: "02:00 PM", title: "Complete", description: "Tour ends" }],
    tourTimings: ["10:00 AM – 06:00 PM"],
    inclusions: ["Admission to both attractions", "All exhibits access"],
    exclusions: ["Hotel transfers", "Meals", "Special experiences"],
    bookingPolicy: ["Off-peak days only", "Present voucher at entrance"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years", "Under 3 free"],
    faqs: [{ question: "How much time needed?", answer: "Approximately 3-4 hours for both attractions." }]
  },
  "viva-alangka-cruise": {
    id: "viva-alangka-cruise",
    title: "Viva Alangka Dinner Cruise from Asiatique with Transfer",
    shortDescription: "Romantic dinner cruise along Chao Phraya River aboard the Viva Alangka with live entertainment and buffet.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3300,
    childPrice: 1650,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 1456,
    heroImages: [],
    galleryImages: [],
    highlights: ["Dinner cruise on Chao Phraya", "International buffet", "Live music and shows", "Illuminated Bangkok views", "Hotel transfers included"],
    description: { overview: "Cruise along Bangkok's iconic river while enjoying dinner and entertainment.", whatToExpect: "Experience Bangkok's illuminated landmarks, enjoy a buffet dinner, and watch live performances." },
    itinerary: [{ time: "05:30 PM", title: "Pickup", description: "Hotel pickup" }, { time: "06:30 PM", title: "Board Cruise", description: "Board at Asiatique" }, { time: "07:00 PM", title: "Departure", description: "Cruise begins" }, { time: "07:30 PM", title: "Dinner", description: "Buffet dinner served" }, { time: "09:00 PM", title: "Return", description: "Cruise ends, transfer to hotel" }],
    tourTimings: ["07:00 PM – 09:30 PM"],
    inclusions: ["Hotel transfers", "Dinner buffet", "Live entertainment", "Welcome drink"],
    exclusions: ["Alcoholic beverages", "Tips"],
    bookingPolicy: ["Smart casual dress code", "Advance booking required"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 4-10 years", "Under 4 free"],
    faqs: [{ question: "Is vegetarian food available?", answer: "Yes, vegetarian options available at the buffet." }]
  },
  "ayutthaya-sunset-cruise": {
    id: "ayutthaya-sunset-cruise",
    title: "Ayutthaya Glittering Tours from Bangkok with Sunset Cruise Experience with transfers",
    shortDescription: "Full-day Ayutthaya tour with sunset river cruise back to Bangkok, visiting UNESCO temples and historical sites.",
    location: "Ayutthaya, Thailand",
    city: "bangkok",
    basePrice: 2600,
    childPrice: 1300,
    duration: "Full Day",
    rating: 4.9,
    reviews: 987,
    heroImages: [],
    galleryImages: [],
    highlights: ["Ayutthaya UNESCO sites", "Temple complex tour", "Sunset cruise back to Bangkok", "Lunch included", "Professional guide"],
    description: { overview: "Explore ancient Ayutthaya and return to Bangkok on a scenic sunset cruise.", whatToExpect: "Visit historical temples and enjoy a relaxing river cruise with dinner buffet." },
    itinerary: [{ time: "07:00 AM", title: "Pickup", description: "Hotel pickup Bangkok" }, { time: "09:00 AM", title: "Ayutthaya", description: "Temple tour begins" }, { time: "12:00 PM", title: "Lunch", description: "Local restaurant" }, { time: "02:00 PM", title: "More Temples", description: "Continue exploration" }, { time: "04:00 PM", title: "Board Cruise", description: "Sunset cruise begins" }, { time: "07:00 PM", title: "Bangkok Pier", description: "Arrive and transfer to hotel" }],
    tourTimings: ["07:00 AM – 08:00 PM"],
    inclusions: ["Round-trip transfer", "Guide", "Lunch", "Sunset cruise with dinner", "Entrance fees"],
    exclusions: ["Beverages", "Tips"],
    bookingPolicy: ["Full day tour", "Comfortable shoes recommended"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years"],
    faqs: [{ question: "What's included in cruise dinner?", answer: "International buffet dinner with Thai dishes." }]
  },
  "chao-phraya-princess-private": {
    id: "chao-phraya-princess-private",
    title: "Chao Phraya Princess Dinner Cruise in Bangkok with Private Transfer",
    shortDescription: "Elegant dinner cruise aboard Chao Phraya Princess with private hotel transfers and buffet dinner.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2000,
    childPrice: 1000,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 1823,
    heroImages: [],
    galleryImages: [],
    highlights: ["Luxury dinner cruise", "International buffet", "Live entertainment", "Private transfers", "Panoramic river views"],
    description: { overview: "Enjoy an elegant evening on the Chao Phraya River with dinner and entertainment.", whatToExpect: "Experience Bangkok's illuminated landmarks from the comfort of a luxury cruise ship." },
    itinerary: [{ time: "05:30 PM", title: "Pickup", description: "Private hotel pickup" }, { time: "06:30 PM", title: "Boarding", description: "Board Princess Cruise" }, { time: "07:00 PM", title: "Departure", description: "Cruise begins" }, { time: "09:30 PM", title: "Return", description: "Dock and transfer to hotel" }],
    tourTimings: ["07:00 PM – 09:30 PM"],
    inclusions: ["Private transfers", "Buffet dinner", "Live music", "Welcome drink"],
    exclusions: ["Alcoholic drinks", "Tips"],
    bookingPolicy: ["Smart casual attire", "Booking confirmation required"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 4-10 years"],
    faqs: [{ question: "What time should I be ready?", answer: "Be ready at 5:30 PM for pickup." }]
  },
  "chao-phraya-princess-valentine": {
    id: "chao-phraya-princess-valentine",
    title: "Chao Phraya Princess Dinner Cruise: Valentine's Day Celebration",
    shortDescription: "Special Valentine's Day dinner cruise with romantic setting, premium menu, and live entertainment.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1600,
    childPrice: 800,
    duration: "3 Hours",
    rating: 4.9,
    reviews: 654,
    heroImages: [],
    galleryImages: [],
    highlights: ["Valentine's special menu", "Romantic ambiance", "Live music", "Rose gift for ladies", "Premium dining experience"],
    description: { overview: "Celebrate Valentine's Day with a romantic dinner cruise on the Chao Phraya River.", whatToExpect: "Enjoy a special set menu, romantic decorations, and live entertainment on this special evening." },
    itinerary: [{ time: "06:00 PM", title: "Boarding", description: "Board at River City pier" }, { time: "07:00 PM", title: "Departure", description: "Cruise begins" }, { time: "07:30 PM", title: "Dinner", description: "Valentine's menu served" }, { time: "09:30 PM", title: "Return", description: "Cruise ends" }],
    tourTimings: ["07:00 PM – 09:30 PM"],
    inclusions: ["Valentine's set menu", "Live entertainment", "Rose for ladies", "Welcome cocktail"],
    exclusions: ["Hotel transfers", "Additional beverages"],
    bookingPolicy: ["Valentine's Day only", "Advanced booking required", "Limited seats"],
    cancellationPolicy: ["No refund within 72 hours"],
    childPolicy: ["Not recommended for children"],
    faqs: [{ question: "Is it couples only?", answer: "Open to all, but designed for romantic couples." }]
  },
  "chao-phraya-princess-join": {
    id: "chao-phraya-princess-join",
    title: "Chaophraya Princess River Dinner Cruise Over Chaophraya River with Join Transfer",
    shortDescription: "Join-in dinner cruise with shared transfers, international buffet, and entertainment on the Chao Phraya River.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4000,
    childPrice: 2000,
    duration: "3 Hours",
    rating: 4.6,
    reviews: 2134,
    heroImages: [],
    galleryImages: [],
    highlights: ["Join-in group tour", "Buffet dinner", "Live band", "Cultural show", "Hotel pickup and drop-off"],
    description: { overview: "Affordable dinner cruise experience with shared transfers and full entertainment.", whatToExpect: "Enjoy international buffet, live music, and cultural performances while cruising past Bangkok's landmarks." },
    itinerary: [{ time: "05:30 PM", title: "Pickup", description: "Join transfer pickup" }, { time: "06:30 PM", title: "Board", description: "Board Princess Cruise" }, { time: "07:00 PM", title: "Sail", description: "Cruise begins" }, { time: "09:30 PM", title: "End", description: "Return transfer to hotel" }],
    tourTimings: ["07:00 PM – 09:30 PM"],
    inclusions: ["Join transfers", "Buffet dinner", "Live entertainment", "Welcome drink"],
    exclusions: ["Premium beverages", "Tips"],
    bookingPolicy: ["Shared transfer", "Multiple pickup points"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 4-10 years"],
    faqs: [{ question: "How long is the cruise?", answer: "Approximately 2.5 hours on the water." }]
  },
  "maeklong-floating-market": {
    id: "maeklong-floating-market",
    title: "Maeklong Railway Market and Damnoensaduak Floating Market Tour in Bangkok",
    shortDescription: "Visit the famous train market at Maeklong and experience the traditional floating market at Damnoen Saduak.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4300,
    childPrice: 2150,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1876,
    heroImages: [],
    galleryImages: [],
    highlights: ["Maeklong Railway Market", "See train pass through market", "Damnoen Saduak Floating Market", "Long-tail boat ride", "Local Thai experience"],
    description: { overview: "Experience two of Thailand's most unique markets in one day.", whatToExpect: "Watch vendors quickly move their goods as the train passes, then explore the colorful floating market by boat." },
    itinerary: [{ time: "06:00 AM", title: "Pickup", description: "Early hotel pickup" }, { time: "08:00 AM", title: "Maeklong Market", description: "Witness train passing through market" }, { time: "10:00 AM", title: "Floating Market", description: "Long-tail boat to Damnoen Saduak" }, { time: "12:00 PM", title: "Market Exploration", description: "Shop and lunch" }, { time: "02:00 PM", title: "Return", description: "Drive back to Bangkok" }, { time: "04:00 PM", title: "Hotel Drop-off", description: "Arrive at hotel" }],
    tourTimings: ["06:00 AM – 04:00 PM"],
    inclusions: ["Round-trip transfer", "Guide", "Long-tail boat ride", "Water"],
    exclusions: ["Meals", "Shopping", "Additional boat rides"],
    bookingPolicy: ["Early departure required", "Bring camera"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years"],
    faqs: [{ question: "Why so early?", answer: "To catch the train passing and see markets at their busiest." }]
  },
  "bangkok-tuk-tuk-night": {
    id: "bangkok-tuk-tuk-night",
    title: "Bangkok Night Tour on TUK-TUK Minimum 2 PAX",
    shortDescription: "Explore Bangkok's nightlife and illuminated landmarks on an exciting tuk-tuk night tour.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3500,
    childPrice: 1750,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 1234,
    heroImages: [],
    galleryImages: [],
    highlights: ["Tuk-tuk adventure", "Night markets", "Illuminated temples", "Street food stops", "Local Bangkok experience"],
    description: { overview: "Experience Bangkok's vibrant nightlife from a traditional tuk-tuk.", whatToExpect: "Visit night markets, see temples lit up at night, and try local street food on this unique tour." },
    itinerary: [{ time: "06:00 PM", title: "Start", description: "Begin tuk-tuk adventure" }, { time: "06:30 PM", title: "Temples", description: "Visit illuminated temples" }, { time: "07:30 PM", title: "Night Market", description: "Explore local market" }, { time: "08:30 PM", title: "Street Food", description: "Food tasting stops" }, { time: "09:00 PM", title: "End", description: "Tour concludes" }],
    tourTimings: ["06:00 PM – 09:00 PM"],
    inclusions: ["Tuk-tuk transport", "Guide", "Some food tastings", "Water"],
    exclusions: ["Hotel transfers", "Additional food purchases", "Shopping"],
    bookingPolicy: ["Minimum 2 people", "Meeting point pickup"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Children welcome", "Child rate 3-11 years"],
    faqs: [{ question: "Is tuk-tuk safe?", answer: "Yes, experienced drivers and safe routes." }]
  },
  "dream-world-bangkok": {
    id: "dream-world-bangkok",
    title: "Dream World Bangkok Super Visa Admission Ticket with Transfer",
    shortDescription: "Full-day admission to Dream World amusement park with hotel transfers, including all rides and shows.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4100,
    childPrice: 2050,
    duration: "Full Day",
    rating: 4.6,
    reviews: 1567,
    heroImages: [],
    galleryImages: [],
    highlights: ["Dream World theme park", "Unlimited rides", "Snow Town", "4D Adventure", "Hotel transfers included"],
    description: { overview: "Spend a fun-filled day at Dream World, Bangkok's premier amusement park.", whatToExpect: "Enjoy thrilling rides, visit Snow Town, watch shows, and explore themed zones with family." },
    itinerary: [{ time: "08:00 AM", title: "Pickup", description: "Hotel pickup" }, { time: "09:00 AM", title: "Arrive", description: "Arrive at Dream World" }, { time: "09:00 AM - 04:00 PM", title: "Free Time", description: "Enjoy all attractions" }, { time: "04:00 PM", title: "Departure", description: "Return transfer begins" }, { time: "05:00 PM", title: "Hotel", description: "Drop-off at hotel" }],
    tourTimings: ["09:00 AM – 04:00 PM"],
    inclusions: ["Round-trip transfer", "Admission ticket", "Unlimited rides", "Snow Town access"],
    exclusions: ["Meals", "Locker rental", "Photos"],
    bookingPolicy: ["Suitable for all ages", "Height restrictions on some rides"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years", "Under 3 free"],
    faqs: [{ question: "What is Snow Town?", answer: "Indoor snow-themed area with ice sculptures." }]
  },
  "bangkok-three-temples": {
    id: "bangkok-three-temples",
    title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour",
    shortDescription: "Experience Bangkok's most iconic landmarks including the Grand Palace, Emerald Buddha, Reclining Buddha at Wat Pho, and the stunning Wat Arun temple on this comprehensive half-day tour.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 10020,
    childPrice: 3600,
    duration: "Half Day",
    rating: 4.9,
    reviews: 2847,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Visit the majestic Grand Palace and Emerald Buddha Temple",
      "Marvel at the 46-meter Reclining Buddha at Wat Pho",
      "Explore Wat Arun's porcelain-adorned spires",
      "Stroll through Pak Khlong Talat Flower Market",
      "Optional traditional Thai attire photo shoot with 20 HD photos",
      "Optional 60-minute Bangkok canal tour"
    ],
    description: {
      overview: "Dive into Bangkok's Rich Heritage with Our Unforgettable Temple Tour. Experience the best of Bangkok with our Half-Day, Full-Day, and Canal Tours, showcasing the city's most iconic landmarks.",
      whatToExpect: "Discover Thailand's royal heritage at the Grand Palace and marvel at the sacred Emerald Buddha. Visit Wat Pho to admire the impressive 46-meter Reclining Buddha and its serene temple grounds, known as the birthplace of traditional Thai massage. Take in the beauty of Wat Arun, with its porcelain-adorned spires standing majestically along the Chao Phraya River—especially breathtaking at sunset."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick-up from your centrally located hotel within 2 KM radius of Central Business District" },
      { time: "08:30 AM", title: "Meeting Point", description: "Meet at Saphan Taksin Skytrain Station, Exit No. 2" },
      { time: "10:30 AM", title: "Wat Arun Visit", description: "Visit the Temple of Dawn with optional traditional Thai dress and photography" },
      { time: "11:30 AM", title: "Royal Grand Palace", description: "Take a boat to Tha Tien Pier and visit the Royal Grand Palace and Emerald Buddha" },
      { time: "12:00 PM", title: "Wat Pho", description: "Walk to see the famous 46-meter Reclining Buddha" },
      { time: "12:30 PM", title: "Flower Market", description: "Take a local Tuk Tuk to Pak Khlong Talat Flower Market" },
      { time: "01:00 PM", title: "Lunch Break", description: "Learn about flower folding and enjoy lunch" },
      { time: "02:00 PM", title: "Optional Canal Tour", description: "Begin 60-minute canal tour or return to starting point" },
      { time: "03:00 PM", title: "Return", description: "Return to meeting point or hotel" }
    ],
    tourTimings: [
      "09:00 AM – 03:00 PM",
      "02:00 PM – 08:00 PM"
    ],
    inclusions: [
      "Hotel pickup and drop-off (selected hotels)",
      "Professional English-speaking guide",
      "All entrance fees to temples",
      "Boat transfer to Wat Arun",
      "Tuk Tuk ride to Flower Market",
      "Bottled water"
    ],
    exclusions: [
      "Lunch and beverages",
      "Optional traditional Thai attire photo shoot (1,500 THB)",
      "Optional canal tour (additional cost)",
      "Personal expenses",
      "Tips and gratuities"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please wear appropriate clothing (shoulders and knees covered)",
      "Grand Palace may be closed for special royal ceremonies",
      "Meeting point pickup available at reduced price"
    ],
    cancellationPolicy: [
      "Free cancellation up to 24 hours before tour start",
      "50% refund for cancellations within 12-24 hours",
      "No refund for cancellations within 12 hours",
      "No refund for no-shows"
    ],
    childPolicy: [
      "Children under 3 years are free",
      "Child rate applies for ages 3-11 years",
      "Children must be accompanied by an adult",
      "Infant seats not available"
    ],
    faqs: [
      {
        question: "What should I wear to the temples?",
        answer: "Please wear clothing that covers your shoulders and knees. Sleeveless tops, shorts, and short skirts are not permitted in the Grand Palace."
      },
      {
        question: "Is the Grand Palace always open?",
        answer: "The Royal Grand Palace and Emerald Buddha Temple will be closed from October 26 to November 9, 2025. They will reopen on November 10, 2025. The palace may also close for special royal ceremonies."
      },
      {
        question: "How much does the photo shoot cost?",
        answer: "The optional traditional Thai attire photo shoot costs 1,500 THB and includes 20 HD images delivered via Google Drive."
      },
      {
        question: "Can I join the canal tour separately?",
        answer: "Yes, you can opt for the 60-minute canal tour at 2:00 PM for an additional cost."
      }
    ]
  },
  "phi-phi-island": {
    id: "phi-phi-island",
    title: "From Phuket: Phi Phi Island Guided Tour by Big Boat with Normal Transfer",
    shortDescription: "Explore the stunning Phi Phi Islands on a comfortable big boat. Visit Maya Bay, snorkel in crystal-clear waters, and enjoy a Thai buffet lunch on this unforgettable full-day adventure.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 2900,
    childPrice: 2400,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1247,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Visit the world-famous Maya Bay",
      "Snorkel in crystal-clear turquoise waters",
      "Explore Viking Cave and Pileh Lagoon",
      "Enjoy Thai buffet lunch on the boat",
      "See monkeys at Monkey Beach",
      "Comfortable big boat with spacious seating"
    ],
    description: {
      overview: "Discover the breathtaking beauty of the Phi Phi Islands on this full-day guided tour from Phuket. Cruise through the turquoise waters of the Andaman Sea aboard a comfortable big boat, visiting iconic locations like Maya Bay, Viking Cave, and Monkey Beach.",
      whatToExpect: "Your adventure begins with hotel pickup followed by a scenic boat ride to the islands. You'll have opportunities to snorkel in pristine waters, relax on white sand beaches, and explore stunning lagoons. A delicious Thai buffet lunch is served on board, and you'll return to your hotel by late afternoon."
    },
    itinerary: [
      { time: "07:00 AM", title: "Hotel Pickup", description: "Comfortable transfer from your hotel to the pier" },
      { time: "08:30 AM", title: "Departure", description: "Board the big boat and depart for Phi Phi Islands" },
      { time: "10:00 AM", title: "Maya Bay", description: "Visit the famous Maya Bay, swim and take photos" },
      { time: "11:00 AM", title: "Pileh Lagoon", description: "Snorkel in the emerald lagoon" },
      { time: "12:00 PM", title: "Lunch", description: "Thai buffet lunch on the boat" },
      { time: "01:00 PM", title: "Viking Cave", description: "Pass by Viking Cave and Loh Samah Bay" },
      { time: "02:00 PM", title: "Monkey Beach", description: "See wild monkeys in their natural habitat" },
      { time: "03:00 PM", title: "Return Journey", description: "Cruise back to Phuket" },
      { time: "04:30 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: [
      "07:00 AM – 04:30 PM",
      "08:00 AM – 05:30 PM"
    ],
    inclusions: [
      "Round-trip hotel transfer",
      "Big boat ferry tickets",
      "Professional English-speaking guide",
      "Thai buffet lunch",
      "Snorkeling equipment",
      "Life jackets",
      "Drinking water and soft drinks",
      "Travel insurance"
    ],
    exclusions: [
      "National Park fee (400 THB per person)",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages"
    ],
    bookingPolicy: [
      "Confirmation will be received within 48 hours of booking",
      "Please provide hotel name and address for pickup",
      "Bring swimwear, sunscreen, towel, and camera",
      "Check-in closes 30 minutes before departure"
    ],
    cancellationPolicy: [
      "Free cancellation up to 24 hours before the activity",
      "50% charge for cancellations within 24 hours",
      "No refund for no-shows or late arrivals"
    ],
    childPolicy: [
      "Children age 2-11 years get discounted rate",
      "Infants under 2 years are free (no seat)",
      "Children must be accompanied by an adult"
    ],
    faqs: [
      {
        question: "What should I bring?",
        answer: "Bring swimwear, sunscreen, towel, camera, and some cash for personal expenses and National Park fees."
      },
      {
        question: "Can I swim if I don't know how to swim?",
        answer: "Yes! Life jackets are provided for all guests, and our guides are trained in water safety."
      }
    ]
  },
  "bangkok-skywalk": {
    id: "bangkok-skywalk",
    title: "Bangkok Mahanakhon Skywalk Observation Deck Ticket",
    shortDescription: "Experience Bangkok from Thailand's highest observation deck. Walk on the thrilling glass floor and enjoy 360-degree panoramic views of the city skyline.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1200,
    childPrice: 900,
    duration: "2-3 Hours",
    rating: 4.7,
    reviews: 3542,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Visit Thailand's highest observation deck at 314m",
      "Walk on the breathtaking glass floor",
      "360-degree panoramic views of Bangkok",
      "See landmarks like Chao Phraya River and temples",
      "Perfect for sunset photography",
      "Indoor and outdoor observation areas"
    ],
    description: {
      overview: "Ascend to the top of King Power Mahanakhon, Bangkok's tallest building, and experience the city from 314 meters above ground. The Skywalk features a thrilling glass floor where you can see straight down to the streets below.",
      whatToExpect: "Take the high-speed elevator to the 74th floor indoor observation deck, then head to the 78th floor rooftop Skywalk. Walk on the glass tray for an adrenaline-pumping experience while enjoying stunning 360-degree views of Bangkok's skyline, including the Chao Phraya River and iconic temples."
    },
    itinerary: [
      { time: "Anytime", title: "Arrival", description: "Present your ticket at the entrance" },
      { time: "+5 min", title: "Express Elevator", description: "High-speed elevator to 74th floor" },
      { time: "+15 min", title: "Indoor Observation", description: "Explore the 360-degree indoor viewing area" },
      { time: "+30 min", title: "Rooftop Skywalk", description: "Step onto the glass floor and outdoor deck" },
      { time: "+45 min", title: "Photography", description: "Capture stunning city views and selfies" }
    ],
    tourTimings: [
      "10:00 AM – 08:00 PM (Last entry 07:15 PM)"
    ],
    inclusions: [
      "Admission ticket to Mahanakhon Skywalk",
      "Access to 74th floor indoor observation deck",
      "Access to 78th floor rooftop Skywalk",
      "Glass tray experience"
    ],
    exclusions: [
      "Hotel transfers",
      "Food and beverages",
      "Personal expenses",
      "Photography fees (if applicable)"
    ],
    bookingPolicy: [
      "E-ticket will be sent to your email",
      "Present mobile ticket at entrance",
      "Operating hours: 10:00 AM - 08:00 PM daily",
      "Not wheelchair accessible"
    ],
    cancellationPolicy: [
      "Free cancellation up to 24 hours before visit",
      "50% refund for cancellations within 24 hours",
      "No refund for no-shows"
    ],
    childPolicy: [
      "Children age 3-11 years get discounted rate",
      "Children under 3 are free",
      "Children must be accompanied by an adult",
      "Height restrictions may apply for glass floor"
    ],
    faqs: [
      {
        question: "How long can I stay at the Skywalk?",
        answer: "There is no time limit. You can stay as long as you wish during operating hours."
      },
      {
        question: "Is it safe to walk on the glass floor?",
        answer: "Absolutely! The glass floor is made of reinforced laminated glass and can support significant weight."
      }
    ]
  },
  "james-bond-island": {
    id: "james-bond-island",
    title: "From Phuket/Khao Lak: James Bond Island Longtail Boat Tour",
    shortDescription: "Explore the iconic James Bond Island and Phang Nga Bay's stunning limestone karsts. Enjoy canoeing through sea caves and visit a floating Muslim village.",
    location: "Phang Nga Bay, Thailand",
    city: "phuket",
    basePrice: 2500,
    childPrice: 2000,
    duration: "Full Day",
    rating: 4.6,
    reviews: 2156,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Visit the famous James Bond Island (Khao Phing Kan)",
      "Canoe through stunning sea caves and lagoons",
      "Explore Panak Island's hidden caves",
      "See Hong Island's interior lagoon",
      "Visit Koh Panyi floating Muslim village",
      "Enjoy Thai lunch with sea views"
    ],
    description: {
      overview: "Discover the breathtaking beauty of Phang Nga Bay on this full-day tour from Phuket or Khao Lak. Visit the world-famous James Bond Island, made iconic by the 007 movie 'The Man with the Golden Gun', and explore magnificent limestone karst formations rising from emerald-green waters.",
      whatToExpect: "Your journey includes canoeing through mystical sea caves at Panak Island, visiting the stunning Hong Island lagoon, and exploring James Bond Island. You'll have lunch at the unique Koh Panyi floating village and witness the incredible natural beauty of Phang Nga Bay's iconic seascape."
    },
    itinerary: [
      { time: "07:00 AM", title: "Hotel Pickup", description: "Transfer from hotel to pier" },
      { time: "08:30 AM", title: "Depart by Longtail Boat", description: "Begin your Phang Nga Bay adventure" },
      { time: "09:30 AM", title: "Panak Island Canoeing", description: "Paddle through sea caves and lagoons" },
      { time: "11:00 AM", title: "Hong Island", description: "Explore the interior lagoon" },
      { time: "12:00 PM", title: "James Bond Island", description: "Visit the iconic Khao Phing Kan" },
      { time: "01:00 PM", title: "Lunch at Koh Panyi", description: "Thai lunch at floating village" },
      { time: "02:30 PM", title: "Return Journey", description: "Cruise back to mainland" },
      { time: "04:00 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: [
      "07:00 AM – 04:00 PM",
      "08:00 AM – 05:00 PM"
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Longtail boat transportation",
      "English-speaking guide",
      "Canoeing with local rower",
      "Thai buffet lunch",
      "Drinking water and snacks",
      "Life jackets",
      "Insurance"
    ],
    exclusions: [
      "National Park fee (300 THB per person)",
      "Personal expenses",
      "Tips for guide and rower",
      "Optional activities"
    ],
    bookingPolicy: [
      "Confirmation within 24 hours",
      "Provide hotel details for pickup",
      "Wear comfortable clothes and shoes",
      "Bring sunscreen and hat"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before tour",
      "50% refund for cancellations within 48 hours",
      "No refund for no-shows"
    ],
    childPolicy: [
      "Children age 4-11 years at discounted rate",
      "Children under 4 are free",
      "Must be accompanied by adult",
      "Suitable for families"
    ],
    faqs: [
      {
        question: "Do I need canoeing experience?",
        answer: "No experience needed! A local rower will paddle the canoe for you while you enjoy the scenery."
      },
      {
        question: "What should I bring?",
        answer: "Bring swimwear, sunscreen, hat, sunglasses, camera, and some cash for souvenirs and National Park fees."
      }
    ]
  }
};
