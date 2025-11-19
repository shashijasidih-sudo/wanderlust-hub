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
