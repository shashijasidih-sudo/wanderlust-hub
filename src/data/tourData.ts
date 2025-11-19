import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhi6 from "@/assets/phi-phi-6.jpg";
import phiPhi7 from "@/assets/phi-phi-7.jpg";
import phiPhi8 from "@/assets/phi-phi-8.jpg";
import jamesBond1 from "@/assets/james-bond-1.jpg";
import jamesBond2 from "@/assets/james-bond-2.jpg";
import jamesBond3 from "@/assets/james-bond-3.jpg";
import jamesBond4 from "@/assets/james-bond-4.jpg";
import bangkokSkywalk1 from "@/assets/bangkok-skywalk-1.jpg";
import bangkokSkywalk2 from "@/assets/bangkok-skywalk-2.jpg";
import bangkokSkywalk3 from "@/assets/bangkok-skywalk-3.jpg";
import emerald1 from "@/assets/emerald-1.jpg";

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
  },
  // New Phuket Tours
  "dolphin-bay-phuket": {
    id: "dolphin-bay-phuket",
    title: "Dolphin Bay Phuket Admission Ticket with Transfer",
    shortDescription: "Interactive dolphin and seal shows with meet-and-greet opportunities. Perfect family entertainment experience in Phuket.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 3300,
    childPrice: 1650,
    duration: "4-5 Hours",
    rating: 4.6,
    reviews: 289,
    heroImages: [
      { src: phiPhi1, title: "Dolphin Bay Phuket - Marine Show" },
      { src: phiPhi2, title: "Interactive Dolphin Performance" },
      { src: phiPhi3, title: "Seal Show Entertainment" }
    ],
    galleryImages: [
      { src: phiPhi4, alt: "Dolphin jumping performance" },
      { src: phiPhi5, alt: "Seal show entertainment" },
      { src: phiPhi6, alt: "Meet and greet with dolphins" },
      { src: phiPhi7, alt: "Family enjoying dolphin show" }
    ],
    highlights: [
      "Interactive dolphin and seal shows",
      "Meet and greet with dolphins",
      "Photo opportunities with marine animals",
      "Hotel pickup and drop-off included"
    ],
    description: {
      overview: "Experience an unforgettable day at Dolphin Bay Phuket, where you can watch amazing dolphin and seal performances. This family-friendly attraction offers interactive shows and photo opportunities with these intelligent marine mammals.",
      whatToExpect: "Enjoy spectacular dolphin shows featuring jumps, tricks, and synchronized swimming. Watch entertaining seal performances, and get up close with these amazing animals during the meet-and-greet session. Professional handlers ensure a safe and enjoyable experience for all visitors."
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Comfortable air-conditioned vehicle pickup from your hotel" },
      { time: "10:00 AM", title: "Arrive at Dolphin Bay", description: "Check-in and introduction to the facility" },
      { time: "10:30 AM", title: "Dolphin Show", description: "Watch amazing dolphin performance and tricks" },
      { time: "11:30 AM", title: "Seal Show", description: "Enjoy entertaining seal performances" },
      { time: "12:00 PM", title: "Meet & Greet", description: "Photo opportunity with dolphins and seals" },
      { time: "01:00 PM", title: "Return Transfer", description: "Drop-off back at your hotel" }
    ],
    tourTimings: ["10:00 AM Show", "02:00 PM Show"],
    inclusions: ["Round-trip hotel transfer", "Admission ticket", "All shows", "English-speaking guide"],
    exclusions: ["Personal expenses", "Food and beverages", "Swimming with dolphins (extra cost)", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Children must be accompanied by adults"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "Late cancellations are non-refundable"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free"],
    faqs: [
      { question: "Can I swim with the dolphins?", answer: "Swimming with dolphins is available at an additional cost and must be booked separately." },
      { question: "Are photos allowed?", answer: "Yes, you can take photos during the shows. Professional photos with animals are available for purchase." }
    ]
  },
  "phuket-city-night-market": {
    id: "phuket-city-night-market",
    title: "Phuket City Tour: Sightseeing and Night Market Everyday",
    shortDescription: "Explore Phuket's iconic landmarks and vibrant night markets. Experience local culture, street food, and shopping.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 1800,
    childPrice: 900,
    duration: "5-6 Hours",
    rating: 4.4,
    reviews: 312,
    heroImages: [
      { src: bangkokSkywalk1, title: "Phuket City Night Market Tour" },
      { src: bangkokSkywalk2, title: "Big Buddha Sunset Views" },
      { src: bangkokSkywalk3, title: "Vibrant Night Market" }
    ],
    galleryImages: [
      { src: phiPhi1, alt: "Phuket Old Town architecture" },
      { src: phiPhi2, alt: "Big Buddha landmark" },
      { src: phiPhi3, alt: "Night market stalls" },
      { src: phiPhi4, alt: "Street food vendors" }
    ],
    highlights: [
      "Visit Phuket's iconic landmarks",
      "Explore vibrant night markets",
      "Try authentic Thai street food",
      "Experience local culture and shopping"
    ],
    description: {
      overview: "Discover the best of Phuket on this comprehensive city and night market tour. Visit famous landmarks including Big Buddha and Wat Chalong, then immerse yourself in the vibrant atmosphere of Phuket's bustling night markets.",
      whatToExpect: "Enjoy panoramic views from viewpoints, explore historic temples, witness stunning sunsets, and experience the excitement of night markets with their colorful stalls, delicious street food, and unique shopping opportunities."
    },
    itinerary: [
      { time: "02:00 PM", title: "Hotel Pickup", description: "Start your afternoon city exploration" },
      { time: "02:30 PM", title: "Big Buddha", description: "Visit the iconic 45-meter marble statue" },
      { time: "03:30 PM", title: "Wat Chalong", description: "Explore Phuket's most important Buddhist temple" },
      { time: "04:30 PM", title: "Promthep Cape", description: "Enjoy stunning sunset views" },
      { time: "06:00 PM", title: "Phuket Town", description: "Discover old town's Sino-Portuguese architecture" },
      { time: "07:00 PM", title: "Night Market", description: "Experience vibrant night market atmosphere" },
      { time: "08:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["02:00 PM – 08:30 PM"],
    inclusions: ["Hotel pickup and drop-off", "English-speaking guide", "Entrance fees", "Air-conditioned transport"],
    exclusions: ["Food and beverages", "Personal shopping expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Dress modestly for temples", "Tour operates daily"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free"],
    faqs: [
      { question: "What time does the night market close?", answer: "Most night markets operate until 10-11 PM, but we'll return earlier to ensure comfortable transfer." },
      { question: "Can I bargain at the night market?", answer: "Yes, bargaining is common and expected at night markets." }
    ]
  },
  "phuket-simon-cabaret": {
    id: "phuket-simon-cabaret",
    title: "Phuket Simon Cabaret Show Ticket with Join Roundtrip Transfer",
    shortDescription: "World-famous cabaret show featuring spectacular costumes, choreography, and talented performers in Phuket.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 2000,
    childPrice: 1000,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 456,
    heroImages: [
      { src: phiPhi5, title: "Simon Cabaret Show" },
      { src: phiPhi6, title: "Spectacular Costumes" },
      { src: phiPhi7, title: "World-Class Performance" }
    ],
    galleryImages: [
      { src: phiPhi8, alt: "Cabaret performers" },
      { src: phiPhi1, alt: "Elaborate stage production" },
      { src: phiPhi2, alt: "Costume showcase" },
      { src: phiPhi3, alt: "Photo with performers" }
    ],
    highlights: [
      "World-famous cabaret show",
      "Spectacular costumes and choreography",
      "Photo opportunities with performers",
      "Round-trip hotel transfer included"
    ],
    description: {
      overview: "Experience the glitz and glamour of Phuket's most famous cabaret show at Simon Cabaret. This spectacular production features stunning costumes, professional choreography, and talented performers in a state-of-the-art theater.",
      whatToExpect: "Enjoy a 70-minute show filled with dazzling performances, vibrant costumes, and impressive stage production. After the show, take photos with the beautiful performers in their elaborate costumes."
    },
    itinerary: [
      { time: "06:00 PM", title: "Hotel Pickup", description: "Pick up from your hotel in Phuket" },
      { time: "06:45 PM", title: "Arrive at Simon Cabaret", description: "Check-in and seat assignment" },
      { time: "07:00 PM", title: "Cabaret Show", description: "Enjoy 70 minutes of spectacular performance" },
      { time: "08:15 PM", title: "Optional Photos", description: "Take photos with performers" },
      { time: "09:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["06:00 PM Show", "07:45 PM Show", "09:30 PM Show"],
    inclusions: ["Simon Cabaret admission", "Round-trip transfer", "Reserved seating"],
    exclusions: ["Photo session with performers (extra cost)", "Food and beverages", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Children of all ages welcome"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Same pricing for all ages", "Children must be accompanied by adults"],
    faqs: [
      { question: "Can I take photos during the show?", answer: "Photography during the show is not allowed, but you can take photos with performers after the show." },
      { question: "How long is the show?", answer: "The show duration is approximately 70 minutes." }
    ]
  },
  "phuket-carnival-magic": {
    id: "phuket-carnival-magic",
    title: "Phuket Carnival Magic Admission Ticket with Hotel Transfer",
    shortDescription: "Thailand's first theme park carnival with spectacular parade shows, themed zones, and unique cultural entertainment.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 5000,
    childPrice: 2500,
    duration: "4-5 Hours",
    rating: 4.8,
    reviews: 523,
    heroImages: [
      { src: phiPhi4, title: "Carnival Magic Theme Park" },
      { src: phiPhi5, title: "Carnival Parade Show" },
      { src: phiPhi6, title: "Kingdom of Lights" }
    ],
    galleryImages: [
      { src: phiPhi7, alt: "Carnival parade floats" },
      { src: phiPhi8, alt: "Bird Paradise zone" },
      { src: phiPhi1, alt: "Fun fair attractions" },
      { src: phiPhi2, alt: "Evening carnival lights" }
    ],
    highlights: [
      "Thailand's first theme park carnival",
      "Spectacular carnival parade show",
      "Multiple themed zones to explore",
      "Unique cultural entertainment experience"
    ],
    description: {
      overview: "Step into a magical world at Phuket Carnival Magic, Thailand's first theme park carnival. Experience spectacular parades, explore themed zones including Bird Paradise and Kingdom of Lights, and enjoy unique cultural entertainment.",
      whatToExpect: "Marvel at the grand carnival parade with elaborate floats and costumes, explore beautifully designed themed zones, enjoy carnival games and attractions, and shop for unique souvenirs in this one-of-a-kind destination."
    },
    itinerary: [
      { time: "04:00 PM", title: "Hotel Pickup", description: "Comfortable transfer to Carnival Magic" },
      { time: "05:00 PM", title: "Arrive at Carnival", description: "Enter the magical carnival world" },
      { time: "05:30 PM", title: "Explore Zones", description: "Visit Bird Paradise, Kingdom of Lights, Carnival Fun Fair" },
      { time: "07:30 PM", title: "Carnival Parade", description: "Watch the spectacular parade show" },
      { time: "08:30 PM", title: "Free Time", description: "Continue exploring and shopping" },
      { time: "09:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["04:00 PM – 09:30 PM (Wed-Sun)"],
    inclusions: ["Round-trip transfer", "Carnival admission", "Access to all themed zones", "Carnival parade show"],
    exclusions: ["Food and beverages", "Games and activities", "Shopping expenses", "Photo packages"],
    bookingPolicy: ["Confirmation within 24 hours", "Operates Wednesday to Sunday", "Arrive early to explore all zones"],
    cancellationPolicy: ["Free cancellation up to 48 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free"],
    faqs: [
      { question: "What days does the carnival operate?", answer: "Carnival Magic operates Wednesday through Sunday." },
      { question: "Are there food options inside?", answer: "Yes, various food stalls and restaurants are available throughout the carnival." }
    ]
  },
  "phuket-muslim-friendly-tour": {
    id: "phuket-muslim-friendly-tour",
    title: "Muslim-Friendly Phuket Tour: A Halal Travel Experience",
    shortDescription: "Comprehensive Muslim-friendly tour with halal dining, prayer accommodations, and visits to important mosques and attractions.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 8500,
    childPrice: 4250,
    duration: "8 Hours",
    rating: 4.9,
    reviews: 187,
    heroImages: [
      { src: bangkokSkywalk1, title: "Muslim-Friendly Phuket Tour" },
      { src: bangkokSkywalk2, title: "Masjid Mukaram Mosque" },
      { src: bangkokSkywalk3, title: "Phuket Cultural Sites" }
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Historic mosque visit" },
      { src: phiPhi4, alt: "Phuket Old Town" },
      { src: phiPhi5, alt: "Halal dining experience" },
      { src: phiPhi6, alt: "Scenic viewpoints" }
    ],
    highlights: [
      "Halal-certified dining experiences",
      "Prayer time accommodations",
      "Visit important mosques",
      "Muslim-friendly tour guide"
    ],
    description: {
      overview: "Explore Phuket with confidence on this specially designed Muslim-friendly tour. Enjoy halal meals, prayer accommodations, visits to important mosques, and modest dress-friendly locations with a knowledgeable Muslim guide.",
      whatToExpect: "Experience the best of Phuket while adhering to Islamic practices. Visit Masjid Mukaram, explore cultural sites, enjoy halal Thai cuisine, and shop at Muslim-friendly stores, all with flexible prayer breaks throughout the day."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Start your Muslim-friendly Phuket exploration" },
      { time: "08:30 AM", title: "Masjid Mukaram", description: "Visit Phuket's oldest mosque" },
      { time: "09:30 AM", title: "Phuket Old Town", description: "Explore Sino-Portuguese architecture" },
      { time: "11:00 AM", title: "Viewpoint", description: "Panoramic views of Phuket" },
      { time: "12:00 PM", title: "Halal Lunch", description: "Authentic Thai halal cuisine" },
      { time: "01:30 PM", title: "Big Buddha", description: "Visit the iconic landmark" },
      { time: "03:00 PM", title: "Wat Chalong", description: "Explore famous temple (external viewing)" },
      { time: "04:00 PM", title: "Halal Shopping", description: "Muslim-friendly souvenir shops" },
      { time: "05:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["08:00 AM – 05:00 PM"],
    inclusions: ["Private air-conditioned vehicle", "Muslim guide (English/Arabic)", "Halal lunch and refreshments", "All entrance fees", "Hotel transfers"],
    exclusions: ["Personal shopping", "Optional activities", "Travel insurance", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Prayer breaks provided", "All food is halal-certified", "Customizable for prayer times"],
    cancellationPolicy: ["Free cancellation up to 48 hours before", "50% refund within 48 hours"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free", "Family-friendly tour"],
    faqs: [
      { question: "Are prayer mats provided?", answer: "Yes, prayer mats are provided if needed." },
      { question: "Can the itinerary be adjusted for prayer times?", answer: "Yes, the tour is flexible and can be customized to accommodate prayer times." }
    ]
  },
  // Pattaya Tours
  "pattaya-floating-market-tour": {
    id: "pattaya-floating-market-tour",
    title: "Discovery Pattaya City Tours with Floating Market and Lunch",
    shortDescription: "Comprehensive Pattaya city tour visiting floating market, cultural sites, and landmarks with authentic Thai lunch included.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 1800,
    childPrice: 900,
    duration: "6-7 Hours",
    rating: 4.5,
    reviews: 342,
    heroImages: [
      { src: phiPhi7, title: "Pattaya Floating Market" },
      { src: phiPhi8, title: "Traditional Thai Market" },
      { src: phiPhi1, title: "Sanctuary of Truth" }
    ],
    galleryImages: [
      { src: phiPhi2, alt: "Floating market vendors" },
      { src: phiPhi3, alt: "Traditional boats" },
      { src: phiPhi4, alt: "Big Buddha Hill view" },
      { src: phiPhi5, alt: "Thai cultural site" }
    ],
    highlights: [
      "Visit authentic floating market",
      "Explore Pattaya's cultural sites",
      "Traditional Thai lunch included",
      "Experience local lifestyle"
    ],
    description: {
      overview: "Discover the best of Pattaya on this comprehensive city tour. Visit the famous four-regions floating market, explore the magnificent Sanctuary of Truth, enjoy panoramic views from Big Buddha Hill, and savor authentic Thai cuisine.",
      whatToExpect: "Experience the charm of Thailand's floating market with vendors selling goods from boats, marvel at the intricate wooden architecture of Sanctuary of Truth, and enjoy stunning views of Pattaya Bay from the hilltop Big Buddha temple."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Start your Pattaya discovery tour" },
      { time: "08:30 AM", title: "Floating Market", description: "Explore the four-regions floating market" },
      { time: "10:30 AM", title: "Sanctuary of Truth", description: "Visit the impressive wooden temple" },
      { time: "12:00 PM", title: "Thai Lunch", description: "Enjoy authentic local cuisine" },
      { time: "01:00 PM", title: "Big Buddha Hill", description: "Panoramic views of Pattaya Bay" },
      { time: "02:00 PM", title: "Wat Phra Yai", description: "Visit the golden Buddha temple" },
      { time: "03:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["08:00 AM – 03:00 PM"],
    inclusions: ["Hotel transfers", "English-speaking guide", "Entrance fees", "Thai lunch", "Air-conditioned transport"],
    exclusions: ["Personal expenses", "Boat rides at floating market", "Shopping expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Dress modestly for temples", "Tour operates daily"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free"],
    faqs: [
      { question: "Is the floating market authentic?", answer: "Yes, vendors sell authentic Thai products and food from traditional boats." },
      { question: "What type of food is included in lunch?", answer: "Traditional Thai cuisine including rice, curry, stir-fry, and fresh fruits." }
    ]
  },
  "pattaya-big-buddha-gems": {
    id: "pattaya-big-buddha-gems",
    title: "Pattaya City Tour: Big Buddha Hill, Gems Museum and Gallery with Round Trip Transfer",
    shortDescription: "Half-day tour visiting Big Buddha Hill for panoramic views and exploring the world's largest gem and jewelry center.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 1200,
    childPrice: 600,
    duration: "4-5 Hours",
    rating: 4.3,
    reviews: 256,
    heroImages: [
      { src: bangkokSkywalk1, title: "Big Buddha Hill Pattaya" },
      { src: bangkokSkywalk2, title: "Panoramic City Views" },
      { src: bangkokSkywalk3, title: "Gems Gallery Museum" }
    ],
    galleryImages: [
      { src: phiPhi6, alt: "Golden Buddha statue" },
      { src: phiPhi7, alt: "Pattaya Bay view" },
      { src: phiPhi8, alt: "Gems and jewelry showcase" },
      { src: phiPhi1, alt: "Museum exhibition" }
    ],
    highlights: [
      "Visit Big Buddha on Pratumnak Hill",
      "Explore Gems Gallery and Museum",
      "Panoramic city views",
      "Learn about Thai gemstones"
    ],
    description: {
      overview: "Experience Pattaya's spiritual and cultural highlights on this half-day tour. Visit the iconic Big Buddha temple with its golden statue and breathtaking views, then explore the fascinating Gems Gallery, the world's largest gem and jewelry center.",
      whatToExpect: "Enjoy panoramic views of Pattaya Bay from Pratumnak Hill, learn about Thai Buddhism at Wat Phra Yai, and discover the world of precious gems and jewelry at the impressive Gems Gallery with its museum and showroom."
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Comfortable transfer from your hotel" },
      { time: "09:30 AM", title: "Big Buddha Hill", description: "Visit Wat Phra Yai temple and golden Buddha" },
      { time: "10:30 AM", title: "Viewpoint", description: "Enjoy panoramic views of Pattaya Bay" },
      { time: "11:00 AM", title: "Gems Gallery", description: "Tour the world's largest gem center" },
      { time: "12:30 PM", title: "Free Time", description: "Browse and shop at Gems Gallery" },
      { time: "01:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["09:00 AM – 01:30 PM"],
    inclusions: ["Round-trip hotel transfer", "English-speaking guide", "Entrance fees", "Bottled water"],
    exclusions: ["Meals and beverages", "Purchases at Gems Gallery", "Optional activities", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Dress modestly for temple", "No purchase obligation at gallery"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free"],
    faqs: [
      { question: "Do I have to buy anything at Gems Gallery?", answer: "No, browsing is free and there's no obligation to purchase." },
      { question: "Is the Gems Gallery tour informative?", answer: "Yes, professional guides explain the gem creation process and Thai jewelry craftsmanship." }
    ]
  },
  "coral-island-pattaya": {
    id: "coral-island-pattaya",
    title: "Coral Island Join Tour with Indian Lunch",
    shortDescription: "Full-day beach excursion to Coral Island with pristine beaches, crystal clear waters, and optional water sports activities.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 650,
    childPrice: 325,
    duration: "6-7 Hours",
    rating: 4.4,
    reviews: 489,
    heroImages: [
      { src: phiPhi2, title: "Coral Island Paradise" },
      { src: phiPhi3, title: "Crystal Clear Waters" },
      { src: phiPhi4, title: "Beach Activities" }
    ],
    galleryImages: [
      { src: phiPhi5, alt: "White sandy beach" },
      { src: phiPhi6, alt: "Snorkeling adventure" },
      { src: phiPhi7, alt: "Water sports activities" },
      { src: phiPhi8, alt: "Tropical paradise" }
    ],
    highlights: [
      "Pristine white sandy beaches",
      "Crystal clear waters",
      "Optional water sports activities",
      "Indian lunch included"
    ],
    description: {
      overview: "Escape to the beautiful Coral Island (Koh Larn) for a day of sun, sand, and sea. Enjoy pristine beaches, crystal clear waters perfect for swimming and snorkeling, and optional exciting water sports activities.",
      whatToExpect: "Relax on white sandy beaches, swim in turquoise waters, try optional water sports like parasailing, banana boat, and jet skiing. Enjoy a delicious Indian buffet lunch at a beachside restaurant."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "09:00 AM", title: "Depart to Coral Island", description: "Speedboat ride to the island" },
      { time: "09:30 AM", title: "Free Time at Beach", description: "Relax, swim, or enjoy water sports" },
      { time: "12:00 PM", title: "Indian Lunch", description: "Buffet lunch at beach restaurant" },
      { time: "01:00 PM", title: "More Beach Time", description: "Continue enjoying the island" },
      { time: "03:00 PM", title: "Return Journey", description: "Speedboat back to Pattaya" },
      { time: "04:00 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["08:00 AM – 04:00 PM"],
    inclusions: ["Round-trip hotel transfer", "Speedboat to Coral Island", "Indian lunch buffet", "Life jacket", "Basic insurance"],
    exclusions: ["Water sports (parasailing, banana boat, jet ski)", "Beach chair rental", "Personal expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Subject to weather conditions", "Vegetarian options available"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Not suitable for infants"],
    faqs: [
      { question: "Are water sports included?", answer: "No, water sports are optional and available at additional cost on the island." },
      { question: "Is the lunch vegetarian-friendly?", answer: "Yes, both vegetarian and non-vegetarian options are available in the buffet." }
    ]
  },
  "nong-nooch-garden": {
    id: "nong-nooch-garden",
    title: "Nong Nooch Admission Fees with Show, Lunch and Round Trip Transfer from Pattaya",
    shortDescription: "Visit beautiful tropical botanical gardens featuring cultural shows, elephant performances, and international buffet lunch.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 3000,
    childPrice: 1500,
    duration: "5-6 Hours",
    rating: 4.7,
    reviews: 612,
    heroImages: [
      { src: phiPhi1, title: "Nong Nooch Tropical Garden" },
      { src: phiPhi2, title: "Elephant Show" },
      { src: phiPhi3, title: "Thai Cultural Performance" }
    ],
    galleryImages: [
      { src: phiPhi4, alt: "Beautiful botanical gardens" },
      { src: phiPhi5, alt: "Elephant performance" },
      { src: phiPhi6, alt: "Traditional Thai dance" },
      { src: phiPhi7, alt: "Garden landscapes" }
    ],
    highlights: [
      "Beautiful tropical botanical gardens",
      "Traditional Thai cultural show",
      "Elephant show",
      "Buffet lunch included"
    ],
    description: {
      overview: "Discover the spectacular Nong Nooch Tropical Botanical Garden, one of Thailand's most beautiful gardens. Enjoy stunning landscaped gardens, traditional Thai cultural performances, exciting elephant shows, and a delicious international buffet.",
      whatToExpect: "Explore beautifully manicured gardens with themed sections, watch amazing elephant performances showcasing their intelligence and skills, enjoy traditional Thai dance and martial arts demonstrations, and savor an international buffet lunch."
    },
    itinerary: [
      { time: "08:30 AM", title: "Hotel Pickup", description: "Comfortable transfer to Nong Nooch" },
      { time: "09:30 AM", title: "Garden Tour", description: "Explore the stunning botanical gardens" },
      { time: "10:30 AM", title: "Elephant Show", description: "Watch amazing elephant performances" },
      { time: "11:30 AM", title: "Cultural Show", description: "Traditional Thai dance and martial arts" },
      { time: "12:30 PM", title: "Buffet Lunch", description: "International and Thai cuisine buffet" },
      { time: "01:30 PM", title: "Free Time", description: "Explore gardens or optional activities" },
      { time: "02:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["08:30 AM – 02:30 PM"],
    inclusions: ["Round-trip transfer", "Nong Nooch admission", "Cultural and elephant shows", "Buffet lunch", "Garden tour"],
    exclusions: ["Elephant riding (extra cost)", "Personal expenses", "Optional activities", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Shows run at scheduled times", "Wheelchair accessible"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Family-friendly"],
    faqs: [
      { question: "Can I ride elephants?", answer: "Elephant riding is available at an additional cost. Please inquire on-site." },
      { question: "How much time should I allocate?", answer: "The full tour takes about 5-6 hours including shows, lunch, and garden exploration." }
    ]
  },
  "pattaya-dolphinarium": {
    id: "pattaya-dolphinarium",
    title: "Pattaya Dolphinarium Admission Ticket with Transfer",
    shortDescription: "Interactive dolphin and seal shows in an air-conditioned venue with photo opportunities and educational presentations.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 3100,
    childPrice: 1550,
    duration: "3-4 Hours",
    rating: 4.6,
    reviews: 378,
    heroImages: [
      { src: phiPhi8, title: "Pattaya Dolphinarium" },
      { src: phiPhi1, title: "Dolphin Performance" },
      { src: phiPhi2, title: "Marine Life Show" }
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Dolphin jumping tricks" },
      { src: phiPhi4, alt: "Seal show" },
      { src: phiPhi5, alt: "Interactive experience" },
      { src: phiPhi6, alt: "Family entertainment" }
    ],
    highlights: [
      "Interactive dolphin show",
      "Educational marine life presentation",
      "Photo opportunities",
      "Air-conditioned venue"
    ],
    description: {
      overview: "Experience the wonder of dolphins and seals at Pattaya Dolphinarium. Watch entertaining and educational shows featuring intelligent dolphins performing amazing tricks and playful seals showcasing their talents in a comfortable, air-conditioned theater.",
      whatToExpect: "Enjoy a 45-minute interactive dolphin show with jumps, spins, and synchronized swimming, followed by an entertaining seal performance. Learn about marine mammal conservation and have the opportunity to take photos with these incredible animals."
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "09:30 AM", title: "Arrive at Dolphinarium", description: "Check-in and seat selection" },
      { time: "10:00 AM", title: "Dolphin Show", description: "45-minute interactive dolphin performance" },
      { time: "11:00 AM", title: "Seal Show", description: "Entertaining seal performance" },
      { time: "11:30 AM", title: "Photo Session", description: "Optional photos with dolphins" },
      { time: "12:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["11:00 AM Show", "03:00 PM Show"],
    inclusions: ["Round-trip hotel transfer", "Dolphinarium admission", "Dolphin show", "Seal show"],
    exclusions: ["Swimming with dolphins (extra cost)", "Professional photos", "Food and beverages", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Children must be supervised", "No flash photography during show"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free"],
    faqs: [
      { question: "Can I swim with the dolphins?", answer: "Yes, swimming with dolphins is available at extra cost and requires advance booking." },
      { question: "How long is the show?", answer: "The dolphin show is approximately 45 minutes, followed by a 20-minute seal show." }
    ]
  },
  "muay-thai-pattaya": {
    id: "muay-thai-pattaya",
    title: "Muay Thai Pattaya Admission Ticket",
    shortDescription: "Experience authentic Muay Thai matches with professional fighters in an electric stadium atmosphere.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 4000,
    childPrice: 2000,
    duration: "2-3 Hours",
    rating: 4.8,
    reviews: 523,
    heroImages: [
      { src: phiPhi7, title: "Muay Thai Boxing Match" },
      { src: phiPhi8, title: "Traditional Wai Kru Ritual" },
      { src: phiPhi1, title: "Stadium Atmosphere" }
    ],
    galleryImages: [
      { src: phiPhi2, alt: "Professional fighters" },
      { src: phiPhi3, alt: "Boxing ring action" },
      { src: phiPhi4, alt: "Pre-fight ceremony" },
      { src: phiPhi5, alt: "Audience excitement" }
    ],
    highlights: [
      "Authentic Muay Thai matches",
      "Professional fighters",
      "Electric stadium atmosphere",
      "Experience Thai martial arts culture"
    ],
    description: {
      overview: "Witness the power and grace of Muay Thai, Thailand's national sport, at a professional stadium in Pattaya. Experience multiple fight matches featuring skilled fighters, traditional pre-fight rituals, and the electric atmosphere of live combat sports.",
      whatToExpect: "Watch professional Muay Thai bouts between trained fighters, experience the traditional Wai Kru ritual, feel the energy of the crowd, and immerse yourself in this important aspect of Thai culture and martial arts heritage."
    },
    itinerary: [
      { time: "06:30 PM", title: "Arrive at Stadium", description: "Check-in and find your seat" },
      { time: "07:00 PM", title: "Opening Ceremony", description: "Traditional Wai Kru ritual" },
      { time: "07:15 PM", title: "Fight Matches Begin", description: "Watch professional Muay Thai bouts" },
      { time: "09:30 PM", title: "End of Event", description: "Matches conclude" }
    ],
    tourTimings: ["Monday, Wednesday, Friday, Saturday 07:00 PM"],
    inclusions: ["Stadium admission ticket", "Reserved seating", "Multiple fight matches"],
    exclusions: ["Hotel transfer", "Food and beverages", "Betting", "Souvenirs"],
    bookingPolicy: ["Confirmation within 24 hours", "Stadium can get loud", "Betting at own risk"],
    cancellationPolicy: ["Tickets are non-refundable once purchased"],
    childPolicy: ["Same pricing for all ages", "Not recommended for children under 6"],
    faqs: [
      { question: "Is betting allowed?", answer: "Betting is legal in Thailand but is at your own risk." },
      { question: "How many fights are there?", answer: "Typically 6-8 fights per evening, ranging from amateur to professional levels." }
    ]
  },
  "alcazar-show-pattaya": {
    id: "alcazar-show-pattaya",
    title: "Alcazar Show Pattaya Ticket with Transfer",
    shortDescription: "World-famous cabaret show with stunning costumes, professional performers, and spectacular stage production.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 1500,
    childPrice: 750,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 445,
    heroImages: [
      { src: phiPhi6, title: "Alcazar Cabaret Show" },
      { src: phiPhi7, title: "Stunning Stage Production" },
      { src: phiPhi8, title: "Talented Performers" }
    ],
    galleryImages: [
      { src: phiPhi1, alt: "Cabaret dancers" },
      { src: phiPhi2, alt: "Elaborate costumes" },
      { src: phiPhi3, alt: "Stage performance" },
      { src: phiPhi4, alt: "Photo session" }
    ],
    highlights: [
      "World-famous cabaret show",
      "Stunning costumes and sets",
      "Professional performers",
      "Photo opportunities"
    ],
    description: {
      overview: "Experience the glamour and spectacle of Alcazar Show, one of Thailand's most famous cabaret performances. Enjoy world-class entertainment featuring elaborate costumes, professional choreography, and talented performers in a stunning theater.",
      whatToExpect: "Watch a 70-minute spectacular show featuring singing, dancing, and comedy performances. Marvel at the intricate costumes and impressive stage sets. After the show, take photos with the beautiful performers."
    },
    itinerary: [
      { time: "05:30 PM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "06:15 PM", title: "Arrive at Alcazar", description: "Check-in and seat assignment" },
      { time: "06:30 PM", title: "Cabaret Show", description: "70-minute spectacular performance" },
      { time: "07:45 PM", title: "Photo Session", description: "Optional photos with performers" },
      { time: "08:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["06:00 PM", "07:30 PM", "09:00 PM"],
    inclusions: ["Round-trip transfer", "Alcazar show admission", "Reserved seating"],
    exclusions: ["Photo session with performers (extra)", "Food and beverages", "Personal expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "No photography during performance", "Shows operate daily"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Suitable for all ages"],
    faqs: [
      { question: "Can I take photos during the show?", answer: "No photography during the performance, but you can take photos with performers after the show." },
      { question: "How often do shows run?", answer: "Shows run daily at 6:00 PM, 7:30 PM, and 9:00 PM." }
    ]
  },
  "pattaya-floating-market-guided": {
    id: "pattaya-floating-market-guided",
    title: "Pattaya Floating Market Guided Tour with Transfer",
    shortDescription: "Explore the four-regions floating market with traditional architecture, local handicrafts, and cultural performances.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 2800,
    childPrice: 1400,
    duration: "4 Hours",
    rating: 4.4,
    reviews: 289,
    heroImages: [
      { src: phiPhi5, title: "Pattaya Floating Market" },
      { src: phiPhi6, title: "Traditional Market Boats" },
      { src: phiPhi7, title: "Four Regions Concept" }
    ],
    galleryImages: [
      { src: phiPhi8, alt: "Market canal boats" },
      { src: phiPhi1, alt: "Traditional architecture" },
      { src: phiPhi2, alt: "Local handicrafts" },
      { src: phiPhi3, alt: "Cultural performances" }
    ],
    highlights: [
      "Four regions floating market",
      "Traditional Thai architecture",
      "Local handicrafts and food",
      "Cultural performances"
    ],
    description: {
      overview: "Discover Pattaya's unique four-regions floating market on this guided tour. Explore traditional Thai architecture representing the North, Northeast, Central, and South regions, shop for local handicrafts, and enjoy authentic Thai street food.",
      whatToExpect: "Take a boat ride through the market canals, explore shops showcasing products from different Thai regions, watch cultural performances, sample delicious local foods, and shop for unique souvenirs in this authentic Thai market setting."
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Start your floating market adventure" },
      { time: "09:30 AM", title: "Arrive at Market", description: "Introduction to four regions concept" },
      { time: "10:00 AM", title: "Boat Ride", description: "Explore market canals by traditional boat" },
      { time: "11:00 AM", title: "Walking Tour", description: "Visit shops representing four Thai regions" },
      { time: "12:00 PM", title: "Cultural Show", description: "Watch traditional Thai performances" },
      { time: "12:30 PM", title: "Free Time", description: "Shopping and refreshments" },
      { time: "01:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["09:00 AM – 01:00 PM"],
    inclusions: ["Round-trip transfer", "English-speaking guide", "Entrance fee", "Boat ride within market"],
    exclusions: ["Food and beverages", "Shopping expenses", "Optional activities", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Best to visit in morning", "Bring cash for purchases"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for no-shows"],
    childPolicy: ["Children age 3-11 years at discounted rate", "Children under 3 are free"],
    faqs: [
      { question: "What time does the market operate?", answer: "The floating market operates daily from 9:00 AM to 7:00 PM." },
      { question: "Can I bargain at the market?", answer: "Yes, bargaining is expected and part of the experience." }
    ]
  },
  // Krabi Tours
  "hong-islands-longtail": {
    id: "hong-islands-longtail",
    title: "Hong Islands by Longtail Boat",
    shortDescription: "Traditional longtail boat tour to pristine Hong Islands with snorkeling, beach relaxation, and lagoon exploration.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 2600,
    childPrice: 1300,
    duration: "6-7 Hours",
    rating: 4.5,
    reviews: 423,
    heroImages: [
      { src: jamesBond1, title: "Hong Islands Krabi" },
      { src: jamesBond2, title: "Pristine Beach Paradise" },
      { src: jamesBond3, title: "Longtail Boat Journey" }
    ],
    galleryImages: [
      { src: jamesBond4, alt: "Hong Island beach" },
      { src: phiPhi1, alt: "Hong Lagoon kayaking" },
      { src: phiPhi2, alt: "Snorkeling activity" },
      { src: phiPhi3, alt: "Crystal clear waters" }
    ],
    highlights: [
      "Visit pristine Hong Islands",
      "Snorkeling in crystal clear waters",
      "Explore Hong Lagoon",
      "Traditional longtail boat experience"
    ],
    description: {
      overview: "Experience the natural beauty of Hong Islands on a traditional longtail boat tour. Visit pristine beaches, snorkel in crystal clear waters, explore the stunning Hong Lagoon, and relax on some of Krabi's most beautiful islands.",
      whatToExpect: "Enjoy the authentic experience of traveling by traditional longtail boat, swim and snorkel in turquoise waters, kayak through the emerald Hong Lagoon, and relax on white sandy beaches surrounded by dramatic limestone cliffs."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick up from Krabi hotels" },
      { time: "09:00 AM", title: "Depart to Hong Islands", description: "Scenic longtail boat journey" },
      { time: "10:00 AM", title: "Hong Island Beach", description: "Relax on white sandy beach" },
      { time: "11:00 AM", title: "Hong Lagoon", description: "Kayak through the stunning lagoon" },
      { time: "12:00 PM", title: "Lunch Break", description: "Enjoy lunch box on the beach" },
      { time: "01:00 PM", title: "Snorkeling", description: "Explore colorful coral reefs" },
      { time: "02:30 PM", title: "Return Journey", description: "Boat back to shore" },
      { time: "03:30 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["08:00 AM – 03:30 PM"],
    inclusions: ["Hotel transfers", "Longtail boat", "National park fees", "Snorkeling equipment", "Life jacket", "Lunch box", "Guide", "Insurance"],
    exclusions: ["Personal expenses", "Underwater camera rental", "Tips", "Additional activities"],
    bookingPolicy: ["Confirmation within 24 hours", "Subject to weather conditions", "Bring seasickness medicine if needed"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Not suitable for infants"],
    faqs: [
      { question: "Is kayaking included?", answer: "Yes, kayaking in Hong Lagoon is included in the tour." },
      { question: "What's the difference between longtail and speedboat?", answer: "Longtail boats are slower but offer a more traditional, authentic experience. Speedboats are faster and allow more time at destinations." }
    ]
  },
  "hong-islands-speedboat": {
    id: "hong-islands-speedboat",
    title: "Hong Island Tour (By Speed Boat)",
    shortDescription: "Fast speedboat tour to Hong Islands visiting multiple locations with extended time for activities and snorkeling.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 3500,
    childPrice: 1750,
    duration: "6-7 Hours",
    rating: 4.6,
    reviews: 512,
    heroImages: [
      { src: jamesBond1, title: "Hong Islands Speedboat Tour" },
      { src: jamesBond2, title: "Multiple Island Destinations" },
      { src: jamesBond3, title: "Premium Island Hopping" }
    ],
    galleryImages: [
      { src: jamesBond4, alt: "Speedboat adventure" },
      { src: phiPhi4, alt: "Island hopping" },
      { src: phiPhi5, alt: "Pakbia Island snorkeling" },
      { src: phiPhi6, alt: "Hong Lagoon exploration" }
    ],
    highlights: [
      "Fast speedboat to Hong Islands",
      "More time for activities",
      "Visit multiple islands",
      "Excellent snorkeling spots"
    ],
    description: {
      overview: "Explore Hong Islands efficiently on a modern speedboat tour. Visit more locations including Hong Island, Pakbia Island, Hong Lagoon, and Lading Island. Enjoy extended time for swimming, snorkeling, and beach relaxation.",
      whatToExpect: "Travel quickly between islands on a comfortable speedboat, maximizing your time at each location. Snorkel at pristine coral reefs, explore the emerald Hong Lagoon, relax on stunning beaches, and enjoy a buffet lunch with fresh fruit."
    },
    itinerary: [
      { time: "07:30 AM", title: "Hotel Pickup", description: "Pick up from Krabi hotels" },
      { time: "08:30 AM", title: "Speedboat Depart", description: "Fast journey to Hong Islands" },
      { time: "09:15 AM", title: "Hong Island", description: "Beach relaxation and swimming" },
      { time: "10:30 AM", title: "Pakbia Island", description: "Snorkeling at coral reef" },
      { time: "11:30 AM", title: "Hong Lagoon", description: "Explore the beautiful lagoon" },
      { time: "12:30 PM", title: "Lunch", description: "Buffet lunch on Hong Island beach" },
      { time: "01:30 PM", title: "Lading Island", description: "Final snorkeling stop" },
      { time: "02:30 PM", title: "Return Journey", description: "Speedboat back to shore" },
      { time: "03:30 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["07:30 AM – 03:30 PM"],
    inclusions: ["Hotel transfers", "Speedboat", "National park fees", "Snorkeling equipment", "Life jacket", "Buffet lunch", "Fruit and drinks", "Guide", "Insurance"],
    exclusions: ["Personal expenses", "Underwater camera rental", "Tips", "Additional water activities"],
    bookingPolicy: ["Confirmation within 24 hours", "Maximum 25 passengers per boat", "Life jackets mandatory"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Not suitable for infants or pregnant women"],
    faqs: [
      { question: "How many islands will we visit?", answer: "The tour visits Hong Island, Pakbia Island, Hong Lagoon, and Lading Island." },
      { question: "Is the speedboat safe?", answer: "Yes, all speedboats are safety-certified with life jackets for all passengers and experienced captains." }
    ]
  },
  "seven-islands-longtail": {
    id: "seven-islands-longtail",
    title: "7 Islands Sunset Tour BBQ with Longtail boat",
    shortDescription: "Afternoon sunset tour visiting seven islands with BBQ dinner on beach and seasonal bioluminescent plankton viewing.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 3000,
    childPrice: 1500,
    duration: "5-6 Hours",
    rating: 4.7,
    reviews: 356,
    heroImages: [
      { src: phiPhi7, title: "Seven Islands Sunset Tour" },
      { src: phiPhi8, title: "Stunning Sunset Views" },
      { src: phiPhi1, title: "BBQ Beach Dinner" }
    ],
    galleryImages: [
      { src: phiPhi2, alt: "Tup Island sandbar" },
      { src: phiPhi3, alt: "Chicken Island snorkeling" },
      { src: phiPhi4, alt: "Sunset cruise" },
      { src: phiPhi5, alt: "BBQ seafood dinner" }
    ],
    highlights: [
      "Visit 7 beautiful islands",
      "Stunning sunset views",
      "BBQ dinner on beach",
      "Bioluminescent plankton (seasonal)"
    ],
    description: {
      overview: "Experience a magical sunset tour visiting seven stunning islands around Krabi. Enjoy snorkeling, beach hopping, spectacular sunset views, and a BBQ seafood dinner on the beach. During certain seasons, witness the amazing bioluminescent plankton.",
      whatToExpect: "Visit Tup Island's sandbar, snorkel at Chicken Island, relax at Poda Island, explore Railay Beach, watch a beautiful sunset, enjoy fresh BBQ seafood, and possibly see glowing plankton in the water during October to May."
    },
    itinerary: [
      { time: "01:00 PM", title: "Hotel Pickup", description: "Afternoon pick up from hotels" },
      { time: "02:00 PM", title: "Depart to Islands", description: "Start your island adventure" },
      { time: "02:30 PM", title: "Tup Island", description: "Walk on sandbar connecting islands" },
      { time: "03:30 PM", title: "Chicken Island", description: "Snorkeling session" },
      { time: "04:30 PM", title: "Poda Island", description: "Beach relaxation" },
      { time: "05:30 PM", title: "Railay Beach", description: "Explore famous beach" },
      { time: "06:30 PM", title: "Sunset & BBQ", description: "Watch sunset while enjoying BBQ dinner" },
      { time: "07:30 PM", title: "Return Journey", description: "Boat back under the stars" },
      { time: "08:30 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["01:00 PM – 08:30 PM"],
    inclusions: ["Hotel transfers", "Longtail boat", "Snorkeling equipment", "Life jacket", "BBQ seafood dinner", "Soft drinks and water", "Guide", "Insurance"],
    exclusions: ["National park fees (400 THB)", "Kayak rental", "Underwater camera", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Bring cash for national park fees", "Subject to weather conditions"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free"],
    faqs: [
      { question: "When can we see bioluminescent plankton?", answer: "Bioluminescent plankton is typically visible from October to May, weather and moon phase dependent." },
      { question: "What's included in the BBQ dinner?", answer: "Fresh grilled seafood, chicken, pork, vegetables, rice, and fruits." }
    ]
  },
  "seven-islands-speedboat": {
    id: "seven-islands-speedboat",
    title: "7 Islands Sunset Tour BBQ with Speedboat",
    shortDescription: "Premium speedboat sunset tour visiting seven islands with more activities, BBQ dinner, and sunset cruise.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 4000,
    childPrice: 2000,
    duration: "5-6 Hours",
    rating: 4.8,
    reviews: 478,
    heroImages: [
      { src: phiPhi6, title: "Seven Islands Speedboat Sunset" },
      { src: phiPhi7, title: "Premium Island Experience" },
      { src: phiPhi8, title: "Magical Sunset Cruise" }
    ],
    galleryImages: [
      { src: phiPhi1, alt: "Speedboat to islands" },
      { src: phiPhi2, alt: "Phra Nang Cave beach" },
      { src: phiPhi3, alt: "Railay Beach views" },
      { src: phiPhi4, alt: "Sunset BBQ feast" }
    ],
    highlights: [
      "Fast speedboat to 7 islands",
      "More time at each location",
      "Spectacular sunset cruise",
      "BBQ seafood dinner"
    ],
    description: {
      overview: "Enjoy a premium seven-islands sunset tour by speedboat. Visit more locations in less time, allowing extended activities at each stop. Experience breathtaking sunset views from the speedboat and enjoy a delicious BBQ seafood dinner on the beach.",
      whatToExpect: "Efficiently visit Chicken Island, Tup Island, Poda Island, Phra Nang Cave, and Railay Beach. Enjoy multiple snorkeling stops, beach activities, stunning sunset cruise, and fresh seafood BBQ dinner. More comfortable and faster than longtail boat."
    },
    itinerary: [
      { time: "01:00 PM", title: "Hotel Pickup", description: "Pick up from Krabi hotels" },
      { time: "02:00 PM", title: "Speedboat Depart", description: "Fast journey begins" },
      { time: "02:20 PM", title: "Chicken Island", description: "Snorkeling and swimming" },
      { time: "03:00 PM", title: "Tup Island", description: "Sandbar and beach walk" },
      { time: "03:45 PM", title: "Poda Island", description: "Beach activities" },
      { time: "04:30 PM", title: "Phra Nang Cave", description: "Explore famous cave beach" },
      { time: "05:30 PM", title: "Railay Beach", description: "Relax on stunning beach" },
      { time: "06:15 PM", title: "Sunset Cruise", description: "Watch sunset from speedboat" },
      { time: "06:45 PM", title: "BBQ Dinner", description: "Enjoy seafood BBQ on beach" },
      { time: "08:00 PM", title: "Return Journey", description: "Speedboat back to shore" },
      { time: "08:45 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["01:00 PM – 08:45 PM"],
    inclusions: ["Hotel transfers", "Speedboat", "Snorkeling equipment", "Life jacket", "BBQ seafood dinner", "Soft drinks and water", "Fresh fruit", "Guide", "Insurance"],
    exclusions: ["National park fees (400 THB)", "Personal expenses", "Underwater camera", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Bring cash for park fees", "Not suitable for pregnant women"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Not suitable for infants"],
    faqs: [
      { question: "Why choose speedboat over longtail?", answer: "Speedboat allows you to visit more islands with more time at each stop, providing a more comfortable and efficient experience." },
      { question: "Is the sunset guaranteed?", answer: "Sunset views depend on weather conditions, but the tour operates rain or shine." }
    ]
  },
  "four-islands-longtail": {
    id: "four-islands-longtail",
    title: "4 Islands by Longtail Boat (With National Park Fee)",
    shortDescription: "Classic four-islands tour by traditional longtail boat with national park fees included. Visit Krabi's most iconic islands.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 2000,
    childPrice: 1000,
    duration: "7-8 Hours",
    rating: 4.4,
    reviews: 589,
    heroImages: [
      { src: jamesBond1, title: "Four Islands Longtail Tour" },
      { src: jamesBond2, title: "Classic Krabi Experience" },
      { src: jamesBond3, title: "Traditional Boat Journey" }
    ],
    galleryImages: [
      { src: jamesBond4, alt: "Phra Nang Cave Beach" },
      { src: phiPhi5, alt: "Tup Island sandbar" },
      { src: phiPhi6, alt: "Chicken Island" },
      { src: phiPhi7, alt: "Poda Island beach" }
    ],
    highlights: [
      "Visit 4 iconic Krabi islands",
      "Traditional longtail boat",
      "Snorkeling and swimming",
      "National park fees included"
    ],
    description: {
      overview: "Experience Krabi's classic four-islands tour by traditional longtail boat. Visit the famous Phra Nang Cave Beach, walk on Tup Island's connecting sandbar, snorkel at Chicken Island, and relax at beautiful Poda Island. All national park entrance fees are included.",
      whatToExpect: "Enjoy an authentic Thai boat experience visiting four of Krabi's most beautiful islands. Explore stunning beaches, swim in crystal clear waters, snorkel among colorful fish, and walk on the unique sandbar connecting Tup and Mor islands."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Morning pick up from hotels" },
      { time: "09:00 AM", title: "Depart to Islands", description: "Traditional longtail boat journey" },
      { time: "09:45 AM", title: "Phra Nang Cave Beach", description: "Explore the famous cave and beach" },
      { time: "11:00 AM", title: "Tup Island", description: "Walk on the connecting sandbar" },
      { time: "12:00 PM", title: "Lunch Break", description: "Lunch box on the beach" },
      { time: "01:00 PM", title: "Chicken Island", description: "Snorkeling session" },
      { time: "02:30 PM", title: "Poda Island", description: "Beach relaxation and swimming" },
      { time: "03:30 PM", title: "Return Journey", description: "Boat back to mainland" },
      { time: "04:30 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["08:00 AM – 04:30 PM"],
    inclusions: ["Hotel transfers", "Longtail boat", "National park entrance fees", "Snorkeling equipment", "Life jacket", "Lunch box", "Drinking water and fruit", "Guide", "Basic insurance"],
    exclusions: ["Personal expenses", "Kayak rental", "Underwater camera", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "National park fee already included", "Suitable for all ages"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Family-friendly tour"],
    faqs: [
      { question: "Are national park fees really included?", answer: "Yes, all national park entrance fees are included in the tour price." },
      { question: "How many people per longtail boat?", answer: "Longtail boats typically accommodate 8-10 passengers comfortably." }
    ]
  },
  "four-islands-speedboat": {
    id: "four-islands-speedboat",
    title: "4 Islands by Speedboat",
    shortDescription: "Premium four-islands speedboat tour with buffet lunch, extended activities, and comfortable fast travel between islands.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 2700,
    childPrice: 1350,
    duration: "6-7 Hours",
    rating: 4.6,
    reviews: 634,
    heroImages: [
      { src: jamesBond1, title: "Four Islands Speedboat Tour" },
      { src: jamesBond2, title: "Fast Island Hopping" },
      { src: jamesBond3, title: "Premium Krabi Tour" }
    ],
    galleryImages: [
      { src: jamesBond4, alt: "Speedboat island hopping" },
      { src: phiPhi8, alt: "Phra Nang Cave exploration" },
      { src: phiPhi1, alt: "Chicken Island snorkeling" },
      { src: phiPhi2, alt: "Poda Island lunch" }
    ],
    highlights: [
      "Fast speedboat to 4 islands",
      "Extended time at each stop",
      "Premium snorkeling spots",
      "Comfortable and efficient"
    ],
    description: {
      overview: "Explore Krabi's four iconic islands efficiently by speedboat. Enjoy more time at each destination with faster travel between islands. Visit Phra Nang Cave, Chicken Island, Tup & Mor Islands, and Poda Island with premium snorkeling and beach activities.",
      whatToExpect: "Travel comfortably on a modern speedboat, maximizing your time at each island. Enjoy extended snorkeling sessions, beach relaxation, and exploration. Buffet lunch with fresh fruit and drinks included. Perfect for those wanting efficiency without sacrificing experience."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick up from Krabi hotels" },
      { time: "09:00 AM", title: "Speedboat Depart", description: "Fast journey to the islands" },
      { time: "09:30 AM", title: "Phra Nang Cave", description: "Explore stunning cave beach" },
      { time: "10:45 AM", title: "Chicken Island", description: "Snorkeling at coral reef" },
      { time: "12:00 PM", title: "Tup & Mor Islands", description: "Sandbar walk and swimming" },
      { time: "01:00 PM", title: "Lunch", description: "Buffet lunch on Poda Island" },
      { time: "02:00 PM", title: "Poda Island", description: "Beach time and relaxation" },
      { time: "03:00 PM", title: "Return Journey", description: "Speedboat back to shore" },
      { time: "03:45 PM", title: "Hotel Drop-off", description: "Return to your hotel" }
    ],
    tourTimings: ["08:00 AM – 03:45 PM"],
    inclusions: ["Hotel transfers", "Speedboat", "Snorkeling equipment", "Life jacket", "Buffet lunch", "Soft drinks and fresh fruit", "Guide", "Insurance"],
    exclusions: ["National park fees (400 THB)", "Personal expenses", "Underwater camera rental", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "Bring 400 THB cash for park fees", "Not suitable for pregnant women or infants"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Not suitable for infants"],
    faqs: [
      { question: "Why should I choose speedboat over longtail?", answer: "Speedboat offers a smoother, faster ride allowing more time at each island and better for those prone to seasickness." },
      { question: "Do I need to bring cash?", answer: "Yes, bring 400 THB in cash for national park entrance fees which are not included in the tour price." }
    ]
  }
};
