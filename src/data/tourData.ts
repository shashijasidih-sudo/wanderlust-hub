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

// Krabi images
import krabiTourBoat from "@/assets/krabi-tour-boat-1.jpg";
import krabiSailboat from "@/assets/krabi-sailboat-1.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";
import krabiIslandView from "@/assets/krabi-island-viewpoint-1.jpg";
import krabiLongtailBoats from "@/assets/krabi-longtail-boats-1.jpg";
import krabiBeachWoman from "@/assets/krabi-beach-woman-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";
import krabiBoatTour from "@/assets/krabi-boat-tour-1.jpg";
import krabiTempleWoman from "@/assets/krabi-temple-woman-1.jpg";

// Pattaya images
import pattayaBoatTour from "@/assets/pattaya-boat-tour-1.jpg";
import pattayaSailboat from "@/assets/pattaya-sailboat-1.jpg";
import pattayaBoatsBeach from "@/assets/pattaya-boats-beach-1.jpg";
import pattayaTropicalBeach from "@/assets/pattaya-tropical-beach-1.jpg";
import pattayaLongtailBoats from "@/assets/pattaya-longtail-boats-1.jpg";
import pattayaWomanSea from "@/assets/pattaya-woman-sea-1.jpg";
import pattayaSpeedboat from "@/assets/pattaya-speedboat-1.jpg";
import pattayaLakeTour from "@/assets/pattaya-lake-tour-1.jpg";
import pattayaTempleWoman from "@/assets/pattaya-temple-woman-1.jpg";
import pattayaIslandsBoats from "@/assets/pattaya-islands-boats-1.jpg";
import alcazarShow1 from "@/assets/alcazar-show-1.jpg";
import alcazarShow2 from "@/assets/alcazar-show-2.jpg";
import alcazarShow3 from "@/assets/alcazar-show-3.jpg";
import pattayaNightlife1 from "@/assets/pattaya-nightlife-1.jpg";
import pattayaNightlife2 from "@/assets/pattaya-nightlife-2.jpg";
import pattayaNightlife3 from "@/assets/pattaya-nightlife-3.jpg";
import muayThai1 from "@/assets/muay-thai-1.jpg";
import muayThai2 from "@/assets/muay-thai-2.jpg";
import muayThai3 from "@/assets/muay-thai-3.jpg";

// Singapore images
import singaporeMarinaByNight from "@/assets/singapore-marina-bay-sands-night-1.jpg";

// Dubai images (after Singapore imports block)
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.jpg";
import dubaiGlobalVillage from "@/assets/dubai-global-village-1.jpg";
import dubaiGlobalVillage2 from "@/assets/dubai-global-village-2.jpg";
import dubaiGlobalVillage3 from "@/assets/dubai-global-village-3.jpg";
import dubaiSkylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import dubaiSkylineNight from "@/assets/dubai-skyline-night-1.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";
import dubaiDesertCouple from "@/assets/dubai-desert-couple-1.jpg";
import dubaiDesertCouple2 from "@/assets/dubai-desert-couple-2.jpg";
import dubaiCityNight from "@/assets/dubai-city-night-1.jpg";
import dubaiDhowCruise from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiFountainShow from "@/assets/dubai-fountain-show-1.jpg";
import singaporeWomanCityscape from "@/assets/singapore-cityscape-woman-1.jpg";
import singaporeGardensByNight from "@/assets/singapore-gardens-bay-night-1.jpg";
import singaporeFlyerTwilight from "@/assets/singapore-flyer-twilight-1.jpg";
import singaporeMarinaByDay from "@/assets/singapore-marina-bay-sands-day-1.jpg";
import singaporeMerlionNight from "@/assets/singapore-merlion-night-1.jpg";
import singaporeCoupleWalking from "@/assets/singapore-couple-walking-1.jpg";
import singaporeTouristsCity from "@/assets/singapore-tourists-city-1.jpg";

export interface CustomerReview {
  name: string;
  date: string;
  rating: number;
  comment: string;
  helpful: number;
}

export interface TourData {
  id: string;
  title: string;
  shortDescription: string;
  location: string;
  city: string;
  basePrice: number;
  childPrice?: number;
  singleAdultPrice?: number; // Price when only 1 adult is booking
  twoAdultPrice?: number; // Price per adult when exactly 2 adults
  minAdults?: number; // Minimum number of adults required (default 1)
  duration: string;
  rating: number;
  reviews: number;
  pricePerVehicle?: boolean;
  isAdultOnly?: boolean;
  minimumAdults?: number;
  vehicleCapacity?: number;
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
  customerReviews?: CustomerReview[];
  tourOptions?: {
    label: string;
    adultPrice: number;
    childPrice?: number;
  }[];
  tourAddOns?: {
    label: string;
    adultPrice: number;
    childPrice?: number;
  }[];
  hideChildren?: boolean;
}

export const toursData: Record<string, TourData> = {
  "bangkok-wat-arun-pho-traimit": {
    id: "bangkok-wat-arun-pho-traimit",
    title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour",
    shortDescription: "Dive into Bangkok's Rich Heritage with our Half-Day, Full-Day, and Canal Tours, showcasing the city's most iconic landmarks.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 10845,
    childPrice: 4413,
    twoAdultPrice: 13155,
    minAdults: 2,
    duration: "Half Day",
    rating: 4.8,
    reviews: 1523,
    heroImages: [
      { src: bangkokSkywalk1, title: "Grand Palace & Emerald Buddha" },
      { src: bangkokSkywalk2, title: "Wat Pho Reclining Buddha" },
      { src: bangkokSkywalk3, title: "Wat Arun Temple of Dawn" },
      { src: emerald1, title: "Canal Tour Bangkok" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Grand Palace Bangkok" },
      { src: bangkokSkywalk2, alt: "Reclining Buddha at Wat Pho" },
      { src: bangkokSkywalk3, alt: "Wat Arun porcelain spires" },
      { src: emerald1, alt: "Bangkok canal waterways" }
    ],
    highlights: [
      "Grand Palace & Wat Phra Kaew (Temple of the Emerald Buddha)",
      "Wat Pho (Temple of the Reclining Buddha)",
      "Wat Arun (Temple of Dawn)",
      "Scenic Canal Tours (Optional)"
    ],
    description: {
      overview: "Experience the best of Bangkok with our Half-Day, Full-Day, and Canal Tours, showcasing the city's most iconic landmarks.",
      whatToExpect: "Dive into Bangkok's Rich Heritage with Our Unforgettable Temple Tour Experience the best of Bangkok with our Half-Day, Full-Day, and Canal Tours, showcasing the city's most iconic landmarks.\n\nDiscover Thailand's royal heritage at the Grand Palace and marvel at the sacred Emerald Buddha. Visit Wat Pho to admire the impressive 46-meter Reclining Buddha and its serene temple grounds, known as the birthplace of traditional Thai massage. Take in the beauty of Wat Arun, with its porcelain-adorned spires standing majestically along the Chao Phraya River—especially breathtaking at sunset.\n\nStroll through the bustling Pak Khlong Talat Flower Market, where vibrant blooms and fragrant aromas captivate your senses. For a truly unique experience, elevate your tour with optional traditional Thai attire and a professional photo shoot, which includes 20 stunning photos.\n\nLooking for more adventure? Add a Canal Tour to uncover Bangkok's hidden treasures along its enchanting waterways. Glide past stilted houses, bustling local markets, and hidden temples, offering a rare glimpse into Bangkok's traditional way of life.\n\nDon't miss out on any of Bangkok's must-see locations. Book your tour now with Sun Leisure World and embark on an unforgettable adventure in the heart of Thailand!"
    },
    itinerary: [
      { time: "08:00 Hours", title: "Hotel Pick-up", description: "Pick-up from your centrally located hotel within a 2 KM radius of the Central Business District, including Silom, Pratunam, Sathorn, or Riverside areas." },
      { time: "08:30 Hours", title: "Meeting Point", description: "Meet at Saphan Taksin Skytrain Station, Exit No. 2. Our guide will hold a Sun Leisure World placard (for those selecting the 'Experience from Meeting Point' option)." },
      { time: "10:30 Hours", title: "Wat Arun Visit", description: "Visit Wat Arun, the Temple of the Sun (Duration: 45 Minutes). Optional: Dress in a traditional Thai uniform and Photography package with 20 HD images delivered via Google Drive." },
      { time: "11:30 Hours", title: "Boat to Tha Tien Pier", description: "Take a boat to Tha Tien Pier and visit the Royal Grand Palace and Emerald Buddha (15 Minutes)." },
      { time: "12:00–12:30 Hours", title: "Reclining Buddha", description: "Walk to the Reclining Buddha and admire the famous statue (30 Minutes)." },
      { time: "12:30–12:45 Hours", title: "Tuk Tuk to Flower Market", description: "Take a local Tuk Tuk to the Flower Market." },
      { time: "13:00 Hours", title: "Pak Khlong Talat", description: "Visit Pak Khlong Talat and learn about flower folding. Take a lunch break." },
      { time: "14:00 Hours", title: "Optional Canal Tour", description: "Return to the starting point or begin a 60-minute canal tour." },
      { time: "15:00 Hours", title: "Return", description: "Return to the meeting point or your hotel." }
    ],
    tourTimings: ["09:00 AM", "02:00 PM"],
    inclusions: [
      "Hotel Pick up and Drop Off",
      "Viewpoint",
      "Tickets"
    ],
    exclusions: [
      "Personal expenses",
      "Food and drinks",
      "Tips and gratuities"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please provide hotel name and address for pickup",
      "Bring swimwear, sunscreen, towel, and camera",
      "Check-in closes 30 minutes before departure",
      "Booking reference number required for check-in",
      "Please arrive at pickup point 10 minutes before departure"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity",
      "100% charge for cancellations within 48 hours",
      "No refund for no-shows or late arrivals"
    ],
    childPolicy: [
      "Free entrance for children below 100cm",
      "Child ticket is only applicable for children 100-140cm (must be between 2-12 years old)",
      "Children aged 0-2 can join the tour for free provided they do not occupy an additional seat",
      "Children aged 3-8 would be charged 75% of tours rate",
      "Children over 8 would be considered as adult"
    ],
    faqs: [
      { question: "What time does the tour start?", answer: "The tour is available at 09:00 AM or 02:00 PM. Please select your preferred timing when booking." },
      { question: "Is the Grand Palace currently open?", answer: "Note: The Royal Grand Palace and Emerald Buddha Temple will be closed from October 26 to November 9, 2025. They will reopen on November 10, 2025." },
      { question: "What should I wear?", answer: "Please wear clothing that covers shoulders and knees for temple visits. Optional traditional Thai attire is available for photo sessions." },
      { question: "Is the canal tour included?", answer: "The canal tour is optional and can be added to your itinerary for an additional 60-minute experience exploring Bangkok's waterways." }
    ]
  },
  "bangkok-city-boat-tour": {
    id: "bangkok-city-boat-tour",
    title: "Bangkok City Tour by Boat from Meeting Point",
    shortDescription: "Step aboard the boat and set off on a relaxing cruise along the Chao Phraya River—Bangkok's lifeline.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3570,
    childPrice: 3568,
    twoAdultPrice: 4685,
    minAdults: 2,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 856,
    heroImages: [
      { src: bangkokSkywalk1, title: "Chao Phraya River Cruise" },
      { src: bangkokSkywalk2, title: "Wat Arun from Water" },
      { src: bangkokSkywalk3, title: "Bangkok Waterways" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "River cruise Bangkok" },
      { src: bangkokSkywalk2, alt: "Wat Arun Temple" },
      { src: bangkokSkywalk3, alt: "Chao Phraya River" },
      { src: emerald1, alt: "Bangkok landmarks" }
    ],
    highlights: [
      "Chao Phraya River Cruise",
      "Royal Barge Museum View",
      "Wat Rakhang Visit",
      "Wat Arun Photo Stop"
    ],
    description: {
      overview: "Step aboard the boat and set off on a relaxing cruise along the Chao Phraya River—Bangkok's lifeline.",
      whatToExpect: "Step aboard the boat and set off on a relaxing cruise along the Chao Phraya River—Bangkok's lifeline. As the boat glides along, take in peaceful views of the city's iconic temples and riverside sights.\n\nAlong the way, you'll pass the Royal Barge Museum, explore the quiet charm of Wat Rakhang (may not be available due to weather conditions), and enjoy a breathtaking view of Wat Arun, the stunning Temple of Dawn (please note: entry ticket not included).\n\nThis is the perfect way to soak up Bangkok's rich temple culture—without the rush. There are no entry fees included, so you're free to explore each stop at your own pace.\n\nYou can choose to cruise in the morning or afternoon—whatever works best for your plans!"
    },
    itinerary: [
      { time: "10:30 AM / 03:30 PM", title: "Meeting Point", description: "Meet at Saphan Thaksin BTS station Exit Gate Number - 02. Climb aboard the boat and get ready for a scenic cruise along the river." },
      { time: "11:00 AM / 04:00 PM", title: "River Cruise", description: "Cruise down the Chao Phraya River and soak in the sights of Bangkok's famous riverside landmarks. You'll also catch a waterside view of the Royal Barge Museum (no stop here)." },
      { time: "11:30 AM / 04:30 PM", title: "Exploration Time", description: "Take your time to explore Bangkok and snap some great photos." },
      { time: "12:30 PM / 05:30 PM", title: "Wat Arun", description: "Arrive at Wat Arun, the iconic Temple of Dawn. From here, you're free to continue exploring on your own or head back to your hotel." }
    ],
    tourTimings: ["10:30 AM", "03:30 PM"],
    inclusions: [
      "Boat ride on the Chao Phraya River",
      "Professional English-speaking staff assistance at the boarding",
      "Drinking water on board",
      "Flexible tour ending: Option to continue sightseeing"
    ],
    exclusions: [
      "Temple entrance fees",
      "Personal expenses",
      "Food and drinks",
      "Hotel transfers"
    ],
    bookingPolicy: [
      "Meet at Saphan Thaksin BTS Station Exit 2",
      "Arrive 10 minutes before departure time"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity"
    ],
    childPolicy: [
      "No child rate available"
    ],
    faqs: []
  },
  "bangkok-city-gems-gallery": {
    id: "bangkok-city-gems-gallery",
    title: "Bangkok City and Temple Tours with Gems Gallery",
    shortDescription: "Bangkok is home to stunning temples, but choosing which ones to visit first can be overwhelming. This convenient city tour takes you to two of Bangkok's most popular temples.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1960,
    childPrice: 1850,
    duration: "4 Hours",
    rating: 4.5,
    reviews: 432,
    heroImages: [
      { src: bangkokSkywalk1, title: "Golden Buddha Temple" },
      { src: bangkokSkywalk2, title: "Mini Reclining Buddha" },
      { src: bangkokSkywalk3, title: "Gems Gallery" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Wat Traimit Golden Buddha" },
      { src: bangkokSkywalk2, alt: "Mini Reclining Buddha" },
      { src: bangkokSkywalk3, alt: "Chinatown Bangkok" },
      { src: emerald1, alt: "Gems Gallery" }
    ],
    highlights: [
      "Golden Buddha at Wat Traimit",
      "Mini Reclining Buddha at Wat Noi",
      "Chinatown & India Town Drive",
      "Gems Gallery Shopping"
    ],
    description: {
      overview: "Bangkok is home to stunning temples, but choosing which ones to visit first can be overwhelming. This convenient city tour takes you to two of Bangkok's most popular temples, accompanied by a professional English-speaking guide and shared transfers (4-hour duration).",
      whatToExpect: "Bangkok is home to stunning temples, but choosing which ones to visit first can be overwhelming. This convenient city tour takes you to two of Bangkok's most popular temples, accompanied by a professional English-speaking guide and shared transfers (4-hour duration). Designed as a group tour, it's perfect for those who enjoy exploring with others and is especially popular among Indian travelers.\n\nThe Bangkok City Tour also includes a visit to the Gems Gallery, where you can admire and purchase some of the finest gems available. This tour is an excellent choice for first-time visitors, offering a great introduction to Thailand's culture and religion. With hotel transfers and all entrance tickets included, it's ideal for travelers short on time but eager to see the city's highlights.\n\nDon't wait—join us today and experience one of the best tours in Thailand!"
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick-up from various hotels (typically 4 to 5 hotels)." },
      { time: "09:00 AM", title: "Golden Buddha", description: "Visit to Golden Buddha (Wat Traimit). The group will head to Wat Traimit, home to the Golden Buddha—a stunning 5.5-ton solid gold statue sculpted in the Sukhothai style. Drive through Chinatown (Yaowarat Road), India Town, and other vibrant areas." },
      { time: "10:00 AM", title: "Mini Reclining Buddha", description: "Visit to Mini Reclining Buddha (Wat Noi or Mahapruttaram Temple). Explore Wat Maha Phruettharam Worawihan, featuring a small reclining Buddha and a stupa reminiscent of Wat Arun." },
      { time: "11:00 AM", title: "Gems Gallery", description: "Gems Gallery for Shopping. At the Gems Gallery, admire exquisite craftsmanship and browse high-quality gems. Purchases come with a certificate and a tax refund option at the airport." },
      { time: "12:00 PM", title: "Return", description: "End of the tour with a return transfer to your hotel." }
    ],
    tourTimings: ["08:00 AM", "01:00 PM"],
    inclusions: [
      "Roundtrip transfer",
      "Entry ticket",
      "English speaking guide",
      "Air condition vehicle",
      "Experience operates every day"
    ],
    exclusions: [
      "Personal expenses",
      "Food and drinks",
      "Tips and gratuities"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please provide hotel name and address for pickup"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity"
    ],
    childPolicy: [
      "Same rate for adults and children"
    ],
    faqs: []
  },
  "bangkok-wat-arun-chinatown": {
    id: "bangkok-wat-arun-chinatown",
    title: "Double World Heritage Bangkok City Tour: Sunset at Wat Arun and Chinatown Street Food Experience",
    shortDescription: "Discover the best of Bangkok on a carefully crafted city tour designed to show you the city's top highlights and hidden gems.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 5044,
    childPrice: 1273,
    singleAdultPrice: 7356,
    duration: "Full Day",
    rating: 4.9,
    reviews: 687,
    heroImages: [
      { src: bangkokSkywalk1, title: "Wat Arun Sunset" },
      { src: bangkokSkywalk2, title: "Chinatown Street Food" },
      { src: bangkokSkywalk3, title: "Grand Palace" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Wat Arun at sunset" },
      { src: bangkokSkywalk2, alt: "Chinatown Bangkok" },
      { src: bangkokSkywalk3, alt: "Reclining Buddha" },
      { src: emerald1, alt: "Bangkok temples" }
    ],
    highlights: [
      "Wat Pho (Temple of the Reclining Buddha)",
      "Wat Arun (Temple of Dawn)",
      "Grand Palace",
      "Chinatown Street Food Experience",
      "Royal Theatre Visit"
    ],
    description: {
      overview: "Discover the best of Bangkok on a carefully crafted city tour designed to show you the city's top highlights and hidden gems.",
      whatToExpect: "Discover the best of Bangkok on a carefully crafted city tour designed to show you the city's top highlights and hidden gems. Explore iconic landmarks like Wat Pho, Wat Arun, the Grand Palace, and the Royal Theatre—each rich in history and cultural significance.\n\nThis tour also gives you a taste of local life. Wander through bustling markets, soak up the vibrant energy, and enjoy the sights, sounds, and flavors of Bangkok like a true local.\n\nWe're committed to eco-friendly travel. By using local transport and boat rides, we help reduce carbon emissions and support sustainable tourism.\n\nPerfect for first-time visitors, this tour offers a complete introduction to Bangkok's culture, history, and way of life—all in one unforgettable day."
    },
    itinerary: [
      { time: "Morning", title: "Hotel Pickup", description: "Your adventure begins with a convenient pick-up from your hotel located at the City Center. Alternatively, join us at the Novotel Silom or Novotel Ploenchit Hotel Bangkok." },
      { time: "", title: "BTS Station", description: "We'll whisk you away to Saphan Taksin BTS Station, where our knowledgeable guide awaits, holding the distinctive Sun Leisure World Pla Card." },
      { time: "", title: "River Cruise", description: "Immerse yourself in the enchanting beauty of Bangkok as we set sail on a boat, gliding along the picturesque Chaophraya River." },
      { time: "", title: "Wat Arun", description: "Our next stop takes us to the awe-inspiring Temple of Dawn, known as Wat Arun. This gem nestled on the banks of the Chaophraya River offers a mesmerizing sight with its intricate architecture." },
      { time: "", title: "Wat Pho", description: "Prepare to be awestruck as we venture to Wat Pho, home to the revered Reclining Buddha. Witness the sheer magnificence of this golden marvel, standing tall at 46 meters long and 15 meters high." },
      { time: "", title: "Tuk Tuk Ride", description: "To truly embrace the local spirit, we'll embark on a thrilling Tuk Tuk ride, winding through the bustling streets of Bangkok." },
      { time: "", title: "Grand Palace", description: "The illustrious Royal Grand Palace is an architectural masterpiece that epitomizes the grandeur of Thai history." },
      { time: "", title: "Chinatown", description: "No visit to Bangkok would be complete without tasting the local flavors. Indulge your taste buds with a visit to China Town." },
      { time: "", title: "Royal Theatre", description: "To make this tour even more wholesome, we invite you to visit the Royal Theatre." },
      { time: "Evening", title: "Return", description: "As our adventure draws to a close, we'll ensure your safe return to your pick-up location." }
    ],
    tourTimings: ["Morning"],
    inclusions: [
      "Roundtrip transfer",
      "Boat ticket",
      "English speaking guide"
    ],
    exclusions: [
      "Temple entrance fees",
      "Personal expenses",
      "Food and drinks",
      "Tips"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please provide hotel name for pickup"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity"
    ],
    childPolicy: [
      "Child rate 3-11 years"
    ],
    faqs: []
  },
  "bangkok-golden-marble-buddha": {
    id: "bangkok-golden-marble-buddha",
    title: "Bangkok City and Temple Tour with Golden Buddha, Marble Temple, Mini Reclining Buddha, and Gems Gallery",
    shortDescription: "Bangkok is home to many stunning landmarks and temples, making it easy to feel overwhelmed by the options. Our half-day Bangkok city tour simplifies your choices by taking you to the must-see spots.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3642,
    childPrice: 4410,
    twoAdultPrice: 5292,
    minAdults: 2,
    duration: "Half Day",
    rating: 4.6,
    reviews: 523,
    heroImages: [
      { src: bangkokSkywalk1, title: "Golden Buddha Temple" },
      { src: bangkokSkywalk2, title: "Marble Temple" },
      { src: bangkokSkywalk3, title: "Chinatown" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Golden Buddha" },
      { src: bangkokSkywalk2, alt: "Marble Temple architecture" },
      { src: bangkokSkywalk3, alt: "Chinatown Bangkok" },
      { src: emerald1, alt: "Flower Market" }
    ],
    highlights: [
      "Wat Traimit (Golden Buddha)",
      "Wat Benchamabophit (Marble Temple)",
      "Chinatown Photo Stop",
      "Little India Visit",
      "Flower Market",
      "Gems Gallery"
    ],
    description: {
      overview: "Bangkok is home to many stunning landmarks and temples, making it easy to feel overwhelmed by the options. Our half-day Bangkok city tour simplifies your choices by taking you to the must-see spots.",
      whatToExpect: "Bangkok is home to many stunning landmarks and temples, making it easy to feel overwhelmed by the options. Our half-day Bangkok city tour simplifies your choices by taking you to the must-see spots. Visit iconic temples like Wat Traimit and Wat Benchamabophit, and explore famous areas like Chinatown, India Town, and the Flower Market. Perfect for first-time visitors, this tour offers a great introduction to Bangkok's culture and religion. Join us for an unforgettable experience!"
    },
    itinerary: [
      { time: "", title: "Hotel Pickup", description: "Pick up from Bangkok." },
      { time: "", title: "Wat Traimit", description: "Discover Wat Traimit: Marvel at the Golden Buddha, the largest pure gold statue in the world, housed in an elegant white-and-gold temple." },
      { time: "", title: "Chinatown", description: "Chinatown Icon Photo Stop: Explore the vibrant Chinatown and capture some stunning shots at the iconic landmarks. Perfect for selfies and group photos!" },
      { time: "", title: "Little India", description: "Visit Phahurat – Little India: Step into the bustling India Town, Phahurat. Take a break to admire the famous Sikh Temple and savor delicious samosas while clicking memorable photos." },
      { time: "", title: "Flower Market", description: "Pak Khlong Talad – The Flower Market: Immerse yourself in the colorful beauty of the largest flower market in Asia. Snap some stunning selfies amidst the vibrant blooms!" },
      { time: "", title: "Marble Temple", description: "Wat Benchamabophit (Marble Temple): End your temple visit at this architectural marvel built by King Rama V in 1900. Made with Italian marble, this iconic temple features on Thailand's 5-Baht coin." },
      { time: "", title: "Gems Gallery", description: "Gems Gallery Visit: Conclude your tour with a visit to a world-class gems factory. Learn how exquisite gemstones are crafted into stunning jewelry." },
      { time: "", title: "Return", description: "As the tour comes to an end we will send you back to the initial meeting point." }
    ],
    tourTimings: ["08:30 AM"],
    inclusions: [
      "Round-trip transfer from Phaya Thai BTS Station",
      "Visit to Wat Traimit (Golden Temple)",
      "Visit to Wat Benchamabophit (Marble Temple)",
      "Gems Gallery",
      "Photo stop at Chinatown Icon",
      "Photo stop at India Town",
      "Photo stop at the Flower Market"
    ],
    exclusions: [
      "Personal expenses",
      "Food and drinks",
      "Tips"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity"
    ],
    childPolicy: [
      "Child rate 3-11 years"
    ],
    faqs: []
  },
  "bangkok-grand-palace-emerald": {
    id: "bangkok-grand-palace-emerald",
    title: "The Best of Bangkok: Royal Grand Palace, Emerald Buddha and Reclining Buddha",
    shortDescription: "Embark on a captivating journey through Bangkok's most famous temples and landmarks. This half-day tour will take you to the Royal Grand Palace, the Emerald Buddha Temple, and Wat Pho – the Temple of the Reclining Buddha.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2646,
    childPrice: 2646,
    singleAdultPrice: 4914,
    duration: "Half Day",
    rating: 4.8,
    reviews: 956,
    heroImages: [
      { src: bangkokSkywalk1, title: "Royal Grand Palace" },
      { src: bangkokSkywalk2, title: "Emerald Buddha" },
      { src: bangkokSkywalk3, title: "Reclining Buddha" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Grand Palace Bangkok" },
      { src: bangkokSkywalk2, alt: "Emerald Buddha Temple" },
      { src: bangkokSkywalk3, alt: "Wat Pho Reclining Buddha" },
      { src: emerald1, alt: "Temple architecture" }
    ],
    highlights: [
      "Royal Grand Palace",
      "Emerald Buddha Temple (Wat Phra Kaew)",
      "Reclining Buddha at Wat Pho",
      "Boat and Tuk Tuk Experience"
    ],
    description: {
      overview: "Embark on a captivating journey through Bangkok's most famous temples and landmarks. This half-day tour will take you to the Royal Grand Palace, the Emerald Buddha Temple, and Wat Pho – the Temple of the Reclining Buddha.",
      whatToExpect: "Embark on a captivating journey through Bangkok's most famous temples and landmarks. This half-day tour will take you to the Royal Grand Palace, the Emerald Buddha Temple, and Wat Pho – the Temple of the Reclining Buddha. Admire the intricate architecture, spiritual ambiance, and historical significance of these iconic locations.\n\nStarting at Saphan Taksin Station, you'll travel comfortably with an expert guide who will bring these landmarks to life with fascinating stories and cultural insights. This is an ideal experience for history enthusiasts and cultural explorers. Please note that admission tickets to the attractions are not included and must be purchased on-site.\n\nNote: The Royal Grand Palace and Emerald Buddha Temple will be closed from October 26 to November 9, 2025. They will reopen on November 10, 2025."
    },
    itinerary: [
      { time: "08:30 AM / 12:30 PM", title: "Meeting Point", description: "Meet at Saphan Taksin Station: Meet your guide at Exit Gate Number 02 for a warm welcome and briefing about the day's activities." },
      { time: "", title: "Royal Grand Palace", description: "Visit the Grand Palace, a former royal residence and one of Bangkok's most iconic landmarks. Marvel at its ornate architecture, golden stupas, and intricate murals." },
      { time: "", title: "Emerald Buddha Temple", description: "Explore the Temple of the Emerald Buddha (Wat Phra Kaew), located within the Grand Palace grounds. Learn about its spiritual significance and admire the stunning craftsmanship of the Emerald Buddha statue." },
      { time: "", title: "Wat Pho", description: "Discover Wat Pho, home to the impressive Reclining Buddha, stretching 46 meters in length. Wander through the serene temple grounds and immerse yourself in its tranquil atmosphere." },
      { time: "", title: "Return", description: "Conclude your tour with a return to Saphan Taksin Station, enriched by the historical and cultural insights of your journey." }
    ],
    tourTimings: ["08:30 AM", "12:30 PM"],
    inclusions: [
      "English Speaking Guide",
      "Boat Experience",
      "Tuk Tuk Ride",
      "Pick up from meeting point"
    ],
    exclusions: [
      "Temple entrance fees (must be purchased on-site)",
      "Personal expenses",
      "Food and drinks",
      "Tips",
      "Hotel transfers"
    ],
    bookingPolicy: [
      "Meet at Saphan Taksin Station Exit Gate Number 02",
      "Admission tickets not included - purchase on-site",
      "Price: ₹2400 (min 2 adults), ₹3900 (1 Adult)"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity"
    ],
    childPolicy: [
      "No child rate available"
    ],
    faqs: []
  },
  "baiyoke-buffet": {
    id: "baiyoke-buffet",
    title: "Baiyoke Sky Restaurant Admission Ticket",
    shortDescription: "Visit Bangkok's iconic Baiyoke Sky Hotel for panoramic city views from the Observation Deck or enjoy a delicious lunch at the Bangkok Sky Restaurant.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1478,
    childPrice: 1478,
    duration: "2-3 Hours",
    rating: 4.5,
    reviews: 1678,
    heroImages: [
      { src: bangkokSkywalk1, title: "Baiyoke Sky Hotel" },
      { src: bangkokSkywalk2, title: "75th Floor View" },
      { src: bangkokSkywalk3, title: "Buffet Dining" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Baiyoke Tower panorama" },
      { src: bangkokSkywalk2, alt: "Buffet spread" },
      { src: bangkokSkywalk3, alt: "City views" },
      { src: emerald1, alt: "Restaurant interior" }
    ],
    highlights: [
      "Observation Deck on 77th floor",
      "Revolving View Point on 84th floor",
      "Lunch at Bangkok Sky 76th/78th Floor",
      "Panoramic views of Bangkok"
    ],
    description: {
      overview: "Visit Bangkok's iconic Baiyoke Sky Hotel for panoramic city views from the Observation Deck or enjoy a delicious lunch at the Bangkok Sky Restaurant.",
      whatToExpect: "Experience stunning panoramic views of Bangkok from the 77th floor Observation Deck and the 84th floor Revolving View Point at the iconic Baiyoke Sky Hotel. Upgrade to the lunch option for a delicious meal at the Bangkok Sky Restaurant on the 76th/78th floor, featuring a wide selection of Indian, vegetarian, vegan, and Jain dishes prepared with care and without pork or lard."
    },
    itinerary: [],
    tourTimings: ["Morning"],
    tourOptions: [
      { label: "Observation Deck 77th & 84th Floor Ticket", adultPrice: 1478, childPrice: 1478 },
      { label: "Lunch at Bangkok Sky 76th/78th Floor Ticket", adultPrice: 2270, childPrice: 2270 }
    ],
    inclusions: [
      "Admission ticket",
      "Access to Observation Deck on 77th floor",
      "Access to Revolving View Point on 84th floor",
      "Service charge and government tax"
    ],
    exclusions: [
      "Hotel transfers",
      "Personal expenses",
      "Meals (unless Lunch option selected)"
    ],
    bookingPolicy: [
      "Present e-ticket at entrance",
      "Smart casual dress code recommended"
    ],
    cancellationPolicy: [
      "Free cancellation up to 24 hours before"
    ],
    childPolicy: [
      "Child price same as adult price per option"
    ],
    faqs: [
      { question: "What is the difference between the two options?", answer: "Option 1 includes Observation Deck access only. Option 2 includes lunch at Bangkok Sky Restaurant plus deck access." }
    ]
  },
  "sea-life-madame-tussauds": {
    id: "sea-life-madame-tussauds",
    title: "Bangkok Sea Life Aquarium and Madame Tussauds Admission Ticket (Off Peak Day Timing)",
    shortDescription: "Combo ticket for Bangkok's top attractions: Sea Life Ocean World and Madame Tussauds wax museum.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4215,
    childPrice: 3843,
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
    basePrice: 4915,
    childPrice: 3276,
    singleAdultPrice: 6476,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 1456,
    heroImages: [],
    galleryImages: [],
    highlights: ["Dinner cruise on Chao Phraya", "International buffet", "Live music and shows", "Illuminated Bangkok views", "Hotel transfers included"],
    description: { overview: "Cruise along Bangkok's iconic river while enjoying dinner and entertainment.", whatToExpect: "Experience Bangkok's illuminated landmarks, enjoy a buffet dinner, and watch live performances." },
    itinerary: [{ time: "05:30 PM", title: "Pickup", description: "Hotel pickup" }, { time: "06:30 PM", title: "Board Cruise", description: "Board at Asiatique" }, { time: "07:00 PM", title: "Departure", description: "Cruise begins" }, { time: "07:30 PM", title: "Dinner", description: "Buffet dinner served" }, { time: "09:00 PM", title: "Return", description: "Cruise ends, transfer to hotel" }],
    tourTimings: ["05:00 PM – 09:00 PM"],
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
    basePrice: 5245,
    childPrice: 3906,
    duration: "Full Day",
    rating: 4.9,
    reviews: 987,
    heroImages: [],
    galleryImages: [],
    highlights: ["Ayutthaya UNESCO sites", "Temple complex tour", "Sunset cruise back to Bangkok", "Lunch included", "Professional guide"],
    description: { overview: "Explore ancient Ayutthaya and return to Bangkok on a scenic sunset cruise.", whatToExpect: "Visit historical temples and enjoy a relaxing river cruise with dinner buffet." },
    itinerary: [{ time: "07:00 AM", title: "Pickup", description: "Hotel pickup Bangkok" }, { time: "09:00 AM", title: "Ayutthaya", description: "Temple tour begins" }, { time: "12:00 PM", title: "Lunch", description: "Local restaurant" }, { time: "02:00 PM", title: "More Temples", description: "Continue exploration" }, { time: "04:00 PM", title: "Board Cruise", description: "Sunset cruise begins" }, { time: "07:00 PM", title: "Bangkok Pier", description: "Arrive and transfer to hotel" }],
    tourTimings: ["12:30 PM", "01:30 PM"],
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
    basePrice: 5545,
    childPrice: 3654,
    singleAdultPrice: 8442,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 1823,
    heroImages: [],
    galleryImages: [],
    highlights: ["Luxury dinner cruise", "International buffet", "Live entertainment", "Private transfers", "Panoramic river views"],
    description: { overview: "Enjoy an elegant evening on the Chao Phraya River with dinner and entertainment.", whatToExpect: "Experience Bangkok's illuminated landmarks from the comfort of a luxury cruise ship." },
    itinerary: [{ time: "05:30 PM", title: "Pickup", description: "Private hotel pickup" }, { time: "06:30 PM", title: "Boarding", description: "Board Princess Cruise" }, { time: "07:00 PM", title: "Departure", description: "Cruise begins" }, { time: "09:30 PM", title: "Return", description: "Dock and transfer to hotel" }],
    tourTimings: ["05:00 PM – 09:00 PM"],
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
    basePrice: 3150,
    childPrice: 2898,
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
    basePrice: 4410,
    childPrice: 3780,
    duration: "3 Hours",
    rating: 4.6,
    reviews: 2134,
    heroImages: [],
    galleryImages: [],
    highlights: ["Join-in group tour", "Buffet dinner", "Live band", "Cultural show", "Hotel pickup and drop-off"],
    description: { overview: "Affordable dinner cruise experience with shared transfers and full entertainment.", whatToExpect: "Enjoy international buffet, live music, and cultural performances while cruising past Bangkok's landmarks." },
    itinerary: [{ time: "05:30 PM", title: "Pickup", description: "Join transfer pickup" }, { time: "06:30 PM", title: "Board", description: "Board Princess Cruise" }, { time: "07:00 PM", title: "Sail", description: "Cruise begins" }, { time: "09:30 PM", title: "End", description: "Return transfer to hotel" }],
    tourTimings: ["05:00 PM"],
    inclusions: ["Join transfers", "Buffet dinner", "Live entertainment", "Welcome drink"],
    exclusions: ["Premium beverages", "Tips"],
    bookingPolicy: ["Shared transfer", "Multiple pickup points"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 4-10 years"],
    faqs: [{ question: "How long is the cruise?", answer: "Approximately 2.5 hours on the water." }]
  },
  "chao-phraya-princess-no-transfer": {
    id: "chao-phraya-princess-no-transfer",
    title: "River Cruise by Chao Phraya Princess Admission Ticket With Indian or International Dinner (No Transfer)",
    shortDescription: "Enjoy an elegant dinner cruise on the Chao Phraya Princess with choice of Indian or International buffet. No transfer included - meet at the pier.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3150,
    childPrice: 2898,
    duration: "2.5 Hours",
    rating: 4.7,
    reviews: 1567,
    heroImages: [],
    galleryImages: [],
    highlights: ["Choice of Indian or International buffet", "Multiple departure piers", "Live entertainment", "Panoramic river views", "No transfer - flexible timing"],
    description: { 
      overview: "Experience Bangkok's famous Chao Phraya Princess dinner cruise with your choice of authentic Indian cuisine or international buffet. This admission-only ticket lets you choose your preferred departure point - Iconsiam, Asiatique, or Terminal 21 Rama 3.", 
      whatToExpect: "Enjoy a 2.5-hour cruise along the Chao Phraya River, passing illuminated landmarks including Wat Arun, Grand Palace, and modern Bangkok skyline. Savor delicious food, live music, and cultural performances." 
    },
    itinerary: [
      { time: "06:30 PM", title: "Arrival", description: "Arrive at your chosen pier (Iconsiam, Asiatique, or Terminal 21 Rama 3)" }, 
      { time: "07:00 PM", title: "Boarding", description: "Board the Chao Phraya Princess" }, 
      { time: "07:15 PM", title: "Departure", description: "Cruise begins along the river" }, 
      { time: "07:30 PM", title: "Dinner", description: "Indian or International buffet dinner served" },
      { time: "08:30 PM", title: "Entertainment", description: "Live music and cultural performances" },
      { time: "09:30 PM", title: "Return", description: "Cruise ends at departure pier" }
    ],
    tourTimings: ["05:00 PM"],
    tourOptions: [
      { label: "Dinner Cruise from Iconsiam - International Food for Other Nationalities", adultPrice: 3150 },
      { label: "Dinner Cruise from Asiatique - International Food for Nationalities from India, Bangladesh, Nepal, Pakistan, and Sri Lanka", adultPrice: 3530 },
      { label: "Dinner Cruise from Terminal 21 Rama 3 - Indian Food for Indian Nationality", adultPrice: 3150 }
    ],
    inclusions: ["Dinner cruise admission", "Buffet dinner (Indian or International)", "Live entertainment", "Welcome drink"],
    exclusions: ["Hotel transfers", "Alcoholic beverages", "Tips", "Personal expenses"],
    bookingPolicy: ["Self-transfer to pier", "Arrive 30 minutes before departure", "Smart casual dress code", "E-voucher accepted"],
    cancellationPolicy: ["Free cancellation 24 hours before", "No refund for no-shows"],
    childPolicy: ["Child rate 4-10 years", "Under 4 free"],
    faqs: [
      { question: "What are the pier options?", answer: "You can board at Iconsiam, Asiatique, or Terminal 21 Rama 3 depending on your ticket type." },
      { question: "Is vegetarian food available?", answer: "Yes, both Indian and International buffets have vegetarian options." },
      { question: "What is the difference between ticket types?", answer: "Iconsiam and Terminal 21 offer Indian food for Indian nationals, while Asiatique offers International buffet for other nationalities." }
    ]
  },
  "maeklong-floating-market": {
    id: "maeklong-floating-market",
    title: "Maeklong Railway Market and Damnoensaduak Floating Market Tour in Bangkok",
    shortDescription: "Visit the famous train market at Maeklong and experience the traditional floating market at Damnoen Saduak.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3405,
    childPrice: 3276,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1876,
    heroImages: [],
    galleryImages: [],
    highlights: ["Maeklong Railway Market", "See train pass through market", "Damnoen Saduak Floating Market", "Long-tail boat ride", "Local Thai experience"],
    description: { overview: "Experience two of Thailand's most unique markets in one day.", whatToExpect: "Watch vendors quickly move their goods as the train passes, then explore the colorful floating market by boat." },
    itinerary: [{ time: "06:00 AM", title: "Pickup", description: "Early hotel pickup" }, { time: "08:00 AM", title: "Maeklong Market", description: "Witness train passing through market" }, { time: "10:00 AM", title: "Floating Market", description: "Long-tail boat to Damnoen Saduak" }, { time: "12:00 PM", title: "Market Exploration", description: "Shop and lunch" }, { time: "02:00 PM", title: "Return", description: "Drive back to Bangkok" }, { time: "04:00 PM", title: "Hotel Drop-off", description: "Arrive at hotel" }],
    tourTimings: ["07:00 AM", "09:00 AM"],
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
    basePrice: 5040,
    childPrice: 0,
    minAdults: 2,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 1234,
    heroImages: [],
    galleryImages: [],
    highlights: ["Tuk-tuk adventure", "Night markets", "Illuminated temples", "Street food stops", "Local Bangkok experience"],
    description: { overview: "Experience Bangkok's vibrant nightlife from a traditional tuk-tuk.", whatToExpect: "Visit night markets, see temples lit up at night, and try local street food on this unique tour." },
    itinerary: [{ time: "05:30 PM", title: "Start", description: "Begin tuk-tuk adventure" }, { time: "06:00 PM", title: "Temples", description: "Visit illuminated temples" }, { time: "07:00 PM", title: "Night Market", description: "Explore local market" }, { time: "08:00 PM", title: "Street Food", description: "Food tasting stops" }, { time: "09:00 PM", title: "End", description: "Tour concludes" }],
    tourTimings: ["05:30 PM – 09:00 PM"],
    inclusions: ["Tuk-tuk transport", "Guide", "Some food tastings", "Water"],
    exclusions: ["Hotel transfers", "Additional food purchases", "Shopping"],
    bookingPolicy: ["Minimum 2 people", "Meeting point pickup"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Children welcome", "Child rate 3-11 years"],
    faqs: [{ question: "Is tuk-tuk safe?", answer: "Yes, experienced drivers and safe routes." }]
  },
  "dream-world-bangkok": {
    id: "dream-world-bangkok",
    title: "Dream World Bangkok Super Visa Admission Ticket with Lunch + Transfer",
    shortDescription: "Full-day admission to Dream World amusement park with hotel transfers, including all rides and shows.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4285,
    childPrice: 4284,
    duration: "Full Day",
    rating: 4.6,
    reviews: 1567,
    heroImages: [],
    galleryImages: [],
    highlights: ["Dream World theme park", "Unlimited rides", "Snow Town", "4D Adventure", "Hotel transfers included"],
    description: { overview: "Spend a fun-filled day at Dream World, Bangkok's premier amusement park.", whatToExpect: "Enjoy thrilling rides, visit Snow Town, watch shows, and explore themed zones with family." },
    itinerary: [{ time: "08:00 AM", title: "Pickup", description: "Hotel pickup" }, { time: "09:00 AM", title: "Arrive", description: "Arrive at Dream World" }, { time: "09:00 AM - 04:00 PM", title: "Free Time", description: "Enjoy all attractions" }, { time: "04:00 PM", title: "Departure", description: "Return transfer begins" }, { time: "05:00 PM", title: "Hotel", description: "Drop-off at hotel" }],
    tourTimings: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
    tourOptions: [
      { label: "Dream World Super Visa Ticket + Join Transfer", adultPrice: 4285 },
      { label: "Dream World Super Visa Ticket + Lunch + Join Transfer", adultPrice: 4410 }
    ],
    inclusions: ["Round-trip transfer", "Admission ticket", "Unlimited rides", "Snow Town access"],
    exclusions: ["Meals (unless Lunch option selected)", "Locker rental", "Photos"],
    bookingPolicy: ["Suitable for all ages", "Height restrictions on some rides"],
    cancellationPolicy: ["Free cancellation 24 hours before"],
    childPolicy: ["Child rate 3-11 years", "Under 3 free"],
    faqs: [{ question: "What is Snow Town?", answer: "Indoor snow-themed area with ice sculptures." }]
  },
  "bangkok-three-temples": {
    id: "bangkok-three-temples",
    title: "Bangkok's Famous Three Temple Wat Arun, Wat Pho, and Wat Traimit Private City and Cultural Tour",
    shortDescription: "Take part in the Bangkok City Tour, a must-do experience in Thailand! Explore three beautiful temples—Wat Traimit, Wat Pho, and Wat Arun—while learning about Buddhism and Thai culture.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4915,
    childPrice: 5379,
    twoAdultPrice: 5875,
    minAdults: 2,
    duration: "Half Day",
    rating: 4.8,
    reviews: 1523,
    heroImages: [
      { src: bangkokSkywalk1, title: "Wat Traimit Golden Buddha" },
      { src: bangkokSkywalk2, title: "Wat Pho Reclining Buddha" },
      { src: bangkokSkywalk3, title: "Wat Arun Temple" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Golden Buddha at Wat Traimit" },
      { src: bangkokSkywalk2, alt: "Reclining Buddha at Wat Pho" },
      { src: bangkokSkywalk3, alt: "Wat Arun porcelain spires" },
      { src: emerald1, alt: "Bangkok temples" }
    ],
    highlights: [
      "Wat Traimit (Golden Buddha Temple)",
      "Wat Pho (Temple of the Reclining Buddha)",
      "Wat Arun (Temple of Dawn)",
      "Chinatown, Little India, and Flower Market"
    ],
    description: {
      overview: "Take part in the Bangkok City Tour, a must-do experience in Thailand! Explore three beautiful temples—Wat Traimit, Wat Pho, and Wat Arun—while learning about Buddhism and Thai culture.",
      whatToExpect: "Take part in the Bangkok City Tour, a must-do experience in Thailand! Explore three beautiful temples—Wat Traimit, Wat Pho, and Wat Arun—while learning about Buddhism and Thai culture. Our expert guide will lead you through the vibrant local life of this amazing city. Ideal for first-time visitors, this tour covers key landmarks like Little India, Chinatown, and the Flower Market, so you won't miss any of the highlights. Book now and discover the best of Bangkok!"
    },
    itinerary: [
      { time: "08:00 AM / 01:00 PM", title: "Hotel Pickup", description: "Hotel pickup from selected Bangkok areas." },
      { time: "08:30 AM / 01:30 PM", title: "Wat Traimit", description: "Begin your journey at Wat Traimit with your guide." },
      { time: "09:00 AM / 02:00 PM", title: "City Tour", description: "Enjoy a scenic drive through Chinatown, Little India, the Flower Market, and Bangkok's lively business district." },
      { time: "09:30 AM / 02:30 PM", title: "Wat Pho", description: "Visit Wat Pho to admire the impressive reclining Buddha and capture some great photos." },
      { time: "10:30 AM / 03:30 PM", title: "Wat Arun", description: "Cross the Chao Phraya River by boat to explore the iconic Wat Arun." },
      { time: "11:30 AM / 04:30 PM", title: "Souvenir Shopping", description: "Wrap up your tour with a visit to a local shop for unique souvenirs before heading back." }
    ],
    tourTimings: ["08:00 AM", "01:00 PM"],
    inclusions: [
      "Round Trip Transfer",
      "English Speaking Guide",
      "Wat Arun - Admission Fees",
      "Wat Pho - Admission Fees",
      "Wat Traimit - Admission Fees"
    ],
    exclusions: [
      "Personal expenses",
      "Food and drinks",
      "Tips and gratuities"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please provide hotel name and address for pickup"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity",
      "100% charge for cancellations within 48 hours"
    ],
    childPolicy: [
      "Child rate 3-11 years"
    ],
    faqs: []
  },
  "ayutthaya-temple-tour": {
    id: "ayutthaya-temple-tour",
    title: "Ayutthaya Temple Join Tour from Bangkok by Road with Transfer",
    shortDescription: "Explore the ancient capital of Siam on a full-day guided tour from Bangkok. Visit UNESCO World Heritage temples and learn about Thailand's rich history.",
    location: "Ayutthaya, Thailand",
    city: "bangkok",
    basePrice: 5922,
    childPrice: 5922,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1245,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Ayutthaya UNESCO World Heritage temples",
      "Professional English-speaking guide",
      "Round-trip transfer from Bangkok",
      "Visit multiple temple complexes",
      "Learn about ancient Siam history"
    ],
    description: {
      overview: "Explore the ancient capital of Siam on a full-day guided tour from Bangkok. Visit UNESCO World Heritage temples and learn about Thailand's rich history.",
      whatToExpect: "Travel from Bangkok to the ancient city of Ayutthaya, once the thriving capital of Siam. Explore magnificent temple ruins, towering prangs, and serene Buddha statues that tell the story of a glorious past. Your expert guide will bring history to life as you visit multiple temple complexes, each with unique architectural styles and fascinating stories. The tour includes comfortable round-trip transfer from Bangkok and all entrance fees."
    },
    itinerary: [
      { time: "07:00 AM", title: "Hotel Pickup", description: "Pick-up from your Bangkok hotel" },
      { time: "09:00 AM", title: "Arrive Ayutthaya", description: "Arrive at the ancient city of Ayutthaya" },
      { time: "09:30 AM", title: "Temple Visits", description: "Begin visiting the UNESCO World Heritage temple complexes" },
      { time: "12:00 PM", title: "Lunch Break", description: "Enjoy a local Thai lunch" },
      { time: "01:00 PM", title: "More Temples", description: "Continue exploring Ayutthaya's magnificent ruins" },
      { time: "03:00 PM", title: "Return Journey", description: "Depart for Bangkok" },
      { time: "05:00 PM", title: "Hotel Drop-off", description: "Arrive back at your Bangkok hotel" }
    ],
    tourTimings: ["07:00 AM"],
    inclusions: [
      "Round-trip transfer from Bangkok",
      "Professional English-speaking guide",
      "All temple entrance fees",
      "Lunch",
      "Air-conditioned vehicle"
    ],
    exclusions: [
      "Personal expenses",
      "Additional food and drinks",
      "Tips and gratuities"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please provide hotel name and address for pickup",
      "Comfortable walking shoes recommended"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity",
      "100% charge for cancellations within 48 hours"
    ],
    childPolicy: [
      "Child rate same as adult rate"
    ],
    faqs: [
      { question: "How long is the drive to Ayutthaya?", answer: "Approximately 1.5 to 2 hours depending on traffic." },
      { question: "Is lunch included?", answer: "Yes, a local Thai lunch is included in the tour." }
    ]
  },
  "bangkok-skywalk": {
    id: "bangkok-skywalk",
    title: "Bangkok Mahanakhon Sky Walk Admission Ticket",
    shortDescription: "Experience Bangkok from Thailand's highest observation deck. Walk on the thrilling glass floor and enjoy 360-degree panoramic views of the city skyline.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4536,
    childPrice: 2520,
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
    tourTimings: ["10:00 AM"],
    tourOptions: [
      { label: "Daytime Skywalk Ticket", adultPrice: 4536 },
      { label: "Sunset Skywalk Ticket", adultPrice: 5544 }
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
  "james-bond-island-sea-canoe": {
    id: "james-bond-island-sea-canoe",
    title: "Phang Nga Bay (James Bond Island) Sea Canoe Tour by Long tail Boat",
    shortDescription: "Explore the iconic James Bond Island and Phang Nga Bay's stunning limestone karsts. Enjoy canoeing through sea caves and visit a floating Muslim village.",
    location: "Phang Nga Bay, Thailand",
    city: "phuket",
    basePrice: 4470,
    childPrice: 4230,
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
      overview: "Discover the breathtaking beauty of Phang Nga Bay on this full-day tour.",
      whatToExpect: "During the tour, you'll stop at Panyee Island, a traditional Muslim fishing village built on stilts above the sea. Here, you'll enjoy a tasty local lunch while experiencing the warm culture and unique lifestyle of the community.\n\nThis trip is the perfect mix of movie history, local culture, and stunning scenery. Join us on the James Bond Island Tour for an experience that's fun, memorable, and full of amazing views."
    },
    itinerary: [
      { time: "08:00 AM - 08:45 AM", title: "Hotel Pickup", description: "Our pick-up service will collect you from your hotel. We will then proceed to Phang Nga in a comfortable air-conditioned minibus." },
      { time: "", title: "Suwankhuha Temple", description: "Visit the enchanting Suwankhuha Temple, also known as the Monkey Cave." },
      { time: "", title: "Longtail Boat", description: "Embark on a thrilling longtail boat ride to James Bond Island." },
      { time: "", title: "James Bond Island", description: "Explore the iconic James Bond Island and its famous landmark, Khao Ping Gan." },
      { time: "", title: "Phang Nga Bay", description: "Continue the adventure with a scenic longtail boat ride around the picturesque Phang Nga Bay, where you can marvel at the expansive mangrove forest." },
      { time: "", title: "Koh Panyee", description: "Enjoy a delicious restaurant lunch at Koh Panyee, a captivating floating village." },
      { time: "", title: "Waterfall", description: "Indulge in swimming and relaxation at a refreshing waterfall." },
      { time: "05:00 PM", title: "Return", description: "We will safely transport you back to your hotel, concluding an unforgettable day of exploration and discovery." }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Hotel round-trip transfer", "Professional tour guide", "Lunch", "Accident Insurance", "Life Jacket", "Boat fee", "Entry/Admission - James Bond Island", "Entry/Admission - Waterfall", "Entry/Admission - Wat Suwan Kuha (Cave Temple)"],
    exclusions: ["Exclude National Park Fee", "Any personal expenses", "Accommodation", "Gratuities"],
    bookingPolicy: ["Confirmation will be received within 24 hours of booking", "Please provide hotel name and address for pickup", "Bring swimwear, sunscreen, towel, and camera", "Check-in closes 30 minutes before departure", "Booking reference number required for check-in", "Please arrive at pickup point 10 minutes before departure"],
    cancellationPolicy: ["Free cancellation up to 48 hours before the activity", "100% charge for cancellations within 48 hours", "No refund for no-shows or late arrivals"],
    childPolicy: ["Free entrance for children below 100cm", "Child ticket is only applicable for children 100-140cm (must be between 2-12 years old)", "Children aged 0-2 can join the tour for free provided they do not occupy an additional seat", "Children aged 3-8 would be charged 75% of tours rate", "Children over 8 would be considered as adult"],
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
  "james-bond-island": {
    id: "james-bond-island",
    title: "James Bond Island (Phang Nga Bay) Tour with Lunch By Long Tail Boat",
    shortDescription: "Explore the iconic James Bond Island and Phang Nga Bay with a traditional long-tail boat. Enjoy canoeing and visit a floating Muslim village with lunch included.",
    location: "Phang Nga Bay, Thailand",
    city: "phuket",
    basePrice: 3985,
    childPrice: 3900,
    duration: "Full Day",
    rating: 4.6,
    reviews: 2156,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Visit the famous James Bond Island",
      "Longtail boat through Phang Nga Bay",
      "Visit Koh Panyi floating village",
      "Enjoy Thai lunch with sea views",
      "Explore mangrove forests"
    ],
    description: {
      overview: "Discover the breathtaking beauty of Phang Nga Bay on this full-day long-tail boat tour with lunch.",
      whatToExpect: "Cruise through Phang Nga Bay to see spectacular limestone formations. Visit James Bond Island, explore sea caves by longtail boat and visit the unique floating village of Koh Panyee. Lunch is included at the floating village."
    },
    itinerary: [
      { time: "08:30 AM", title: "Hotel Pickup", description: "Pickup from your Phuket hotel" },
      { time: "09:30 AM", title: "Phang Nga Bay", description: "Arrive at the pier and board long-tail boat" },
      { time: "10:30 AM", title: "James Bond Island", description: "Visit the famous filming location" },
      { time: "12:00 PM", title: "Koh Panyee", description: "Lunch at the floating Muslim village" },
      { time: "03:00 PM", title: "Return", description: "Return cruise and hotel drop-off" }
    ],
    tourTimings: ["08:30 AM"],
    inclusions: ["Hotel Transfer", "Long-tail Boat", "Lunch", "English Guide", "National Park Fee"],
    exclusions: ["Personal Expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Is canoeing safe for non-swimmers?", answer: "Yes, life jackets are provided and guides paddle the canoes." }
    ]
  },
  "phi-phi-island": {
    id: "phi-phi-island",
    title: "Full Day Tour from Phuket to Phi Phi Island, Maya Bay and Khai Island by Speedboat with National Park Fee",
    shortDescription: "Explore the world-famous Phi Phi Islands with Maya Bay and Khai Island. Enjoy snorkeling, swimming, and stunning scenery.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 4951,
    childPrice: 4951,
    duration: "Full Day",
    rating: 4.9,
    reviews: 2453,
    heroImages: [
      { src: phiPhi1, title: "Maya Bay Paradise" },
      { src: phiPhi2, title: "Phi Phi Islands" },
      { src: phiPhi3, title: "Khai Island Beach" },
      { src: phiPhi4, title: "Viking Cave" }
    ],
    galleryImages: [
      { src: phiPhi5, alt: "Maya Bay white sand" },
      { src: phiPhi6, alt: "Monkey Beach" },
      { src: phiPhi7, alt: "Pileh Lagoon" },
      { src: phiPhi8, alt: "Phi Phi Don lunch" }
    ],
    highlights: [
      "Visit iconic Maya Bay featured in 'The Beach'",
      "Snorkel at multiple pristine locations",
      "See Viking Cave and Monkey Beach",
      "Explore Khai Island's coral reefs",
      "National Park fees included"
    ],
    description: {
      overview: "The Phi Phi Islands, located in the Andaman Sea, are among the world's top spots for snorkeling and diving. Positioned between Phuket and Krabi, these islands belong to Krabi province and are 48 kilometers from Phuket and 45 kilometers from Krabi.",
      whatToExpect: "Maya Bay, on Phi Phi Lay, features stunning white sandy beaches surrounded by high cliffs on three sides. This beautiful bay, with its clear water and vibrant reef, is ideal for swimming and snorkeling. Diving in Maya Bay reveals an amazing underwater world.\n\nKhai Island is a great escape from city life, offering sandy beaches and clear waters perfect for relaxing, swimming, and snorkeling. Visitors can enjoy the sun and see plenty of colorful fish in this tranquil setting."
    },
    itinerary: [
      { time: "08:00 - 08:20 AM", title: "Hotel Pickup", description: "Pick up from your hotel to the Pier at Chalong Pier (time pick up will be advised when booking). Complimentary Coffee, tea, Cookies, and Briefing by the tour guide." },
      { time: "09:00 AM", title: "Departure", description: "Departure from the pier. Visit the beautiful scenery of Maya Bay." },
      { time: "10:00 AM", title: "Viking Cave & Pileh Lagoon", description: "Depart from Phi Phi Lay Island. Sightseeing at 'Viking Cave' and swimming at Pileh Lagoon." },
      { time: "11:00 AM", title: "Monkey Beach", description: "Arrive at the 'Monkey Beach' and snorkel at the beautiful coral reef point." },
      { time: "12:00 PM", title: "Phi Phi Don Island", description: "Arrive at the Phi Phi Don Island. Lunch at the beach and relax on the beach or enjoy shopping at the famous walking street." },
      { time: "02:00 PM", title: "Khai Island", description: "Arrive at the pier to Khai Island where there's an abundance of coral reefs, the perfect spot for snorkeling." },
      { time: "05:00 PM", title: "Return", description: "Arrive at the pier and transfer back to your hotel." }
    ],
    tourTimings: ["07:30 AM"],
    inclusions: [
      "Transfer from your resort",
      "English speaking guide",
      "Mask & Snorkel",
      "Lunch",
      "Soft drinks & Fruits",
      "Insurance",
      "National Park fee (THB 400/- per person)"
    ],
    exclusions: [
      "Personal Expenses",
      "Gratuities and Tips"
    ],
    bookingPolicy: [
      "Confirmation will be received within 24 hours of booking",
      "Please provide hotel name and address for pickup",
      "Bring swimwear, sunscreen, towel, and camera",
      "Check-in closes 30 minutes before departure",
      "Booking reference number required for check-in",
      "Please arrive at pickup point 10 minutes before departure"
    ],
    cancellationPolicy: [
      "Free cancellation up to 48 hours before the activity",
      "100% charge for cancellations within 48 hours",
      "No refund for no-shows or late arrivals"
    ],
    childPolicy: [
      "Child rates are only applicable for individuals with a height under 120 cm",
      "Adult rates are only applicable for individuals with a height over 120 cm"
    ],
    faqs: [
      {
        question: "Is Maya Bay open?",
        answer: "Yes, Maya Bay has reopened with limited daily visitors to protect the environment. Visit times may vary."
      },
      {
        question: "What should I bring?",
        answer: "Bring swimwear, sunscreen, hat, sunglasses, camera, and some cash for souvenirs."
      }
    ]
  },
  // Additional Phi Phi Island Tours
  "phi-phi-big-boat": {
    id: "phi-phi-big-boat",
    title: "From Phuket: Phi Phi Island Guided Tour by Big Boat with Normal Transfer",
    shortDescription: "Experience the stunning Phi Phi Islands on a comfortable big boat tour with professional guide and hotel transfers included.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 3985,
    childPrice: 3745,
    duration: "Full Day",
    rating: 4.7,
    reviews: 1856,
    heroImages: [
      { src: phiPhi1, title: "Phi Phi Islands Big Boat Tour" },
      { src: phiPhi2, title: "Maya Bay Beach" },
      { src: phiPhi3, title: "Snorkeling Adventure" },
      { src: phiPhi4, title: "Phi Phi Don Island" }
    ],
    galleryImages: [
      { src: phiPhi5, alt: "Big boat cruise" },
      { src: phiPhi6, alt: "Phi Phi Islands panorama" },
      { src: phiPhi7, alt: "Beach relaxation" },
      { src: phiPhi8, alt: "Lunch on the island" }
    ],
    highlights: [
      "Comfortable Big Boat Experience",
      "Maya Bay Visit",
      "Phi Phi Don Island Exploration",
      "Snorkeling at Coral Reefs",
      "Lunch Included"
    ],
    description: {
      overview: "Join this comfortable big boat tour to the world-famous Phi Phi Islands from Phuket. Perfect for those who prefer a more relaxed cruise experience.",
      whatToExpect: "Stop At: Rassada Pier, Ratsada, Mueang Phuket District, Phuket 83000, Thailand\n07:00 AM - 07:20 AM - Meet at Rassada Pier\nDuration: 30 minutes\nPass By: Ko Phi Phi Lee, Ko Phi Phi Lee, Krabi Province\n08:30 AM - Departure from the pier to Phi Phi Island Group, complimentary coffee, tea, and dessert service.\n09:50 AM - Arrive at Phi Phi Don (direct to Tonsai pier) Package one-day tour.\n10:00 AM - HIGHLIGHT OF THE TOUR\nNov. - Apr. (High Season) Arrival at Phi Phi Ley Island area. Cruise passing by Phi Phi Ley Island for Sightseeing on board such as Viking Cave, Pi-Le Cove, Loh Samah Bay, and Maya Bay. **depending on sea & weather conditions.\n\n11:15 AM - Arrival at Long Beach, Phi Phi Don Island.\n11:30 AM - Swimming at Long Beach.\n12.30 PM - Buffet Lunch at Long Beach. After lunch, relax at leisure.\n02:15 PM - Time to leave the island. Transfer from the beach to Cruiser.\n02:30 PM - Return cruise to Phuket.\n16:30 PM - Arrival at Phuket Rassada Pier\nStop At: Ko Phi Phi Don, Ko Phi Phi Don, Krabi Province\nMay. - Oct. (Low season) Departs for Phi Phi Island by Cruise. Refreshments are served on board. (Please stay on board while shortstop at Phi Phi Tonsai Pier)\n\n11:15 AM - Arrival at Laemtong Beach, Phi Phi Don Island\n11:30 AM - Swimming at Laemtong Beach.\n12:30 PM - Buffet Lunch at Laemtong Beach.\n01:15 PM - Transfer from The beach to Cruiser.\n01.30 PM - Departs from Laemtong. (Please stay on board while shortstop at Tonsai Pier)\n02.30 PM - Departs from Phi Phi Tonsai Pier. Sightseeing on board at Phi Phi Ley Island. Return cruise to Phuket\n04.30 PM - Arrival at Phuket Pier National Park fee @400 THB per pax.\nDuration: 3 hours\nPass By: Viking Cave, Ko Phi Phi Don Thailand\nSightseeing on board around Phi Phi Lay Islands Please note Nov. - Apr. (High Season) Only\nPass By: Loh Samah Bay, Ko Phi Phi Lee Thailand\nSightseeing on board around Phi Phi Lay Islands Please note Nov. - Apr. (High Season) Only\nPass By: Maya Bay, Ko Phi Phi Lee Thailand\nSightseeing on board around Phi Phi Lay Islands Please note Nov. - Apr. (High Season) Only"
    },
    itinerary: [
      { time: "07:00 AM", title: "Meet at Rassada Pier", description: "Meet at Rassada Pier, complimentary coffee, tea, and dessert" },
      { time: "08:30 AM", title: "Departure", description: "Board the big boat and depart for Phi Phi Islands" },
      { time: "10:00 AM", title: "Phi Phi Ley Sightseeing", description: "Cruise passing Viking Cave, Pi-Le Cove, Loh Samah Bay, Maya Bay (High Season)" },
      { time: "11:15 AM", title: "Long Beach / Laemtong Beach", description: "Arrival and swimming at the beach" },
      { time: "12:30 PM", title: "Buffet Lunch", description: "Enjoy buffet lunch at the beach" },
      { time: "02:30 PM", title: "Return Cruise", description: "Return cruise to Phuket" },
      { time: "04:30 PM", title: "Arrival", description: "Arrival at Phuket Rassada Pier" }
    ],
    tourTimings: ["07:00 AM"],
    inclusions: ["Hotel Transfer", "Big Boat Cruise", "Lunch", "Snorkeling Equipment", "English Guide"],
    exclusions: ["National Park Fee (THB 400/- per person)", "Personal Expenses"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Is this suitable for non-swimmers?", answer: "Yes, life jackets are provided and snorkeling is optional." }
    ]
  },
  "phi-phi-royal-jet": {
    id: "phi-phi-royal-jet",
    title: "Phi Phi Island Tour by Big Boat By Royal Jet Cruiser (First Class)",
    shortDescription: "Experience luxury with our First Class Royal Jet Cruiser to Phi Phi Islands. Premium amenities and exclusive service.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 5555,
    childPrice: 4347,
    duration: "Full Day",
    rating: 4.9,
    reviews: 987,
    heroImages: [
      { src: phiPhi1, title: "Royal Jet Cruiser" },
      { src: phiPhi2, title: "First Class Experience" },
      { src: phiPhi3, title: "Phi Phi Islands" },
      { src: phiPhi4, title: "Premium Service" }
    ],
    galleryImages: [
      { src: phiPhi5, alt: "Luxury cruiser" },
      { src: phiPhi6, alt: "Premium seating" },
      { src: phiPhi7, alt: "Gourmet lunch" },
      { src: phiPhi8, alt: "VIP experience" }
    ],
    highlights: [
      "First Class Royal Jet Cruiser",
      "Premium Amenities",
      "Gourmet Lunch Included",
      "VIP Service",
      "Best Snorkeling Spots"
    ],
    description: {
      overview: "Travel in luxury to the Phi Phi Islands aboard our Royal Jet Cruiser. Enjoy first-class service, premium amenities, and an unforgettable experience.",
      whatToExpect: "High Season (Mid October - Mid April)\n\n07:00 - 07:15: Pick-up from the hotel in Phuket. (Pick-up time varies depending on the hotel location) Transfer to Phuket Rassada Pier.\n8:30: Departure for Phi Phi Island by ROYAL JET CRUISER. Refreshments are served on board.\n10:30: Arrival at Long Beach, Phi Phi Don Island. Enjoy free time at leisure. Join the boat trip to snorkel beyond the shore reef, surrounded by colorful tropical fish (National Park Fee applies), or swim and sunbathe on the white long sandy shoreline.\n11:45 - 12:00: Buffet lunch starts at the restaurant by the sea. Thai, International, and Indian Cuisine are served.\n12:45: Get ready and meet up with the guide to move on to Tonsai Pier (Entrance fee 20 THB/pax applies). Spend your afternoon exploring Tonsai, the local town center of Phi Phi Don Island. Various options of shopping booths and cafes are available, as well as multiple photogenic spots.\n14:10: Meet up with the guide @ Tonsai Pier to check in for the Ferry for the return journey.\n14:30: Leaving from Phi Phi Tonsai Pier by Royal Jet Cruiser. Cruise passing by Phi Phi Ley Island for Sightseeing on board, such as Viking Cave, Pi-Le Cove, Loh Samah Bay, Maya Bay. Depending on sea & weather conditions. Return back to Phuket.\n16:45: Arrival at Phuket Rassada Pier. Transfer to the hotel in Phuket.\n\nGreen Season (Mid April - Mid October)\n\n07:00 - 07:15: Pick up from the hotel in Phuket (Pick-up time varies depending on the hotel location). Transfer to Phuket Rassada Pier.\n08:30: Departure from Phi Phi Island by Royal Jet Cruiser, a large and comfortable boat. Refreshments are served on board.\n10:20: Arrive at Phi Phi Ley Island Area. Cruise past Phi Phi Ley Island for sightseeing on board, such as Viking Cave, Pi-Le Cove, Loh Samah Bay, and Maya Bay. (Depending on sea and weather conditions)\n11:00: Arrival at Tonsai Pier, Phi Phi Don Island (Entrance fee 20 THB/pax applies). Free time at leisure for exploring Tonsai, the local town center of Phi Phi Don Island. Various options of shopping booths and cafes are available, as well as multiple photogenic spots.\n11:50: Meet up with the guide at Tonsai Pier to transfer to Laemtong Beach.\n12:30: Arrival at Laemtong Beach, Phi Phi Don Island. Enjoy free time at leisure. Join the boat trip to snorkel beyond the shore reef, surrounded by colorful tropical fish (National Park Fee applies), or swim and sunbathe on the white long sandy shoreline.\n13:30: Buffet lunch starts at the restaurant by the sea. Thai, international, and Indian cuisine are served.\n14:30: Time to leave the island. Transfer from the beach to Royal Jet Cruiser.\n16:45: Arrival at Phuket Rassada Pier. Shared van transfer to the hotel\n\nRemark:\nThe program may be changed depending on the sea, weather, and operational conditions.\nTour price does NOT INCLUDE the National Park Fee. Customers must pay a National Park Fee of THB 400/adult and THB 200/child in cash at the local venue.\nThe tour price does NOT INCLUDE an Entrance fee of 20 THB/pax.\nSome parts of our tour programs are NOT SUITABLE for pregnant ladies, seniors, and people with health problems."
    },
    itinerary: [
      { time: "07:00 AM", title: "Hotel Pickup", description: "Pick-up from your Phuket hotel, transfer to Rassada Pier" },
      { time: "08:30 AM", title: "Departure", description: "Departure by Royal Jet Cruiser with refreshments" },
      { time: "10:30 AM", title: "Long Beach / Phi Phi Ley", description: "Arrive at beach or Phi Phi Ley sightseeing (season dependent)" },
      { time: "12:00 PM", title: "Buffet Lunch", description: "Thai, International and Indian Cuisine at seaside restaurant" },
      { time: "12:45 PM", title: "Tonsai Pier", description: "Explore Tonsai town, shopping and cafes" },
      { time: "14:30 PM", title: "Return Cruise", description: "Cruise passing Phi Phi Ley Island for sightseeing" },
      { time: "16:45 PM", title: "Arrival", description: "Arrive at Phuket Rassada Pier and hotel transfer" }
    ],
    tourTimings: ["07:00 AM"],
    inclusions: [
      "Visitors who wish to snorkel at Maya Bay must pay a national park fee of 400 THB for adults and 200 THB for children.",
      "Personal expenses and gratuities are not included",
      "Children taller than 120 cm will be charged according to the adult rate.",
      "Children under the height of 119 cm and below will not be charged."
    ],
    exclusions: [
      "Free entrance for children below 100cm",
      "Child ticket is only applicable for children 100-140cm (must be between 2-12 years old)",
      "Children aged 0-2 can join the tour for free provided they do not occupy an additional seat",
      "Children aged 3-8 would be charged 75% of tours rate.",
      "Children over 8 would be considered as adult"
    ],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "What makes this first class?", answer: "Premium seating, gourmet food, smaller groups, and VIP service." }
    ]
  },
  "phi-phi-maya-khai-speedboat": {
    id: "phi-phi-maya-khai-speedboat",
    title: "Phi Phi-Maya Bay-Khai Full day Tour by Speedboat (Excluded national marine fee)",
    shortDescription: "Fast and exciting speedboat tour to Phi Phi Islands, Maya Bay, and Khai Island. Perfect for adventure seekers.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 4347,
    childPrice: 3745,
    duration: "Full Day",
    rating: 4.6,
    reviews: 2234,
    heroImages: [
      { src: phiPhi1, title: "Speedboat Adventure" },
      { src: phiPhi2, title: "Maya Bay" },
      { src: phiPhi3, title: "Khai Island" },
      { src: phiPhi4, title: "Phi Phi Islands" }
    ],
    galleryImages: [
      { src: phiPhi5, alt: "Speedboat ride" },
      { src: phiPhi6, alt: "Maya Bay beach" },
      { src: phiPhi7, alt: "Khai Island" },
      { src: phiPhi8, alt: "Snorkeling" }
    ],
    highlights: [
      "Exciting Speedboat Experience",
      "Maya Bay Visit",
      "Khai Island Beach",
      "Multiple Snorkeling Spots",
      "Lunch Included"
    ],
    description: {
      overview: "Experience the thrill of a speedboat journey to Phi Phi Islands, Maya Bay, and beautiful Khai Island. Fast, fun, and unforgettable.",
      whatToExpect: "Zoom across the Andaman Sea on our speedboat to visit Phi Phi Islands, the famous Maya Bay, and the pristine Khai Island. Enjoy snorkeling, swimming, and beach time at multiple locations."
    },
    itinerary: [
      { time: "07:30 AM", title: "Hotel Pickup", description: "Pickup from Phuket hotel" },
      { time: "09:00 AM", title: "Speedboat Departure", description: "Board speedboat and depart" },
      { time: "10:00 AM", title: "Khai Island", description: "Beach time and snorkeling" },
      { time: "11:30 AM", title: "Maya Bay", description: "Visit iconic Maya Bay" },
      { time: "01:00 PM", title: "Lunch", description: "Lunch at Phi Phi Don" },
      { time: "03:00 PM", title: "Snorkeling", description: "Snorkel at coral reefs" },
      { time: "05:00 PM", title: "Return", description: "Return to Phuket" }
    ],
    tourTimings: ["07:30 AM"],
    inclusions: ["Hotel Transfer", "Speedboat", "Lunch", "Snorkeling Gear", "Guide"],
    exclusions: ["National Park Fee (THB 400/- per person)", "Personal Expenses"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Why is national park fee excluded?", answer: "The fee must be paid in cash at the pier on the day of the tour." }
    ]
  },
  // Selfie with Tigers + ATV
  "selfie-tigers-atv": {
    id: "selfie-tigers-atv",
    title: "Phuket City Tour and Tiger Experience: Tiger + ATV (30 Mins)",
    shortDescription: "Experience a thrilling ATV ride and get up close with majestic tigers on this exciting Phuket city tour.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 5435,
    childPrice: 4950,
    duration: "Full Day",
    rating: 4.7,
    reviews: 623,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "30-minute ATV off-road adventure",
      "Tiger selfie experience",
      "Big Buddha viewpoint",
      "Chalong Temple visit",
      "Elephant photo opportunity",
      "Cashew Factory and Honey Farm"
    ],
    description: {
      overview: "Experience a thrilling ATV ride combined with an unforgettable tiger encounter on this action-packed Phuket city tour.",
      whatToExpect: "Experience a thrilling off-the-road experience by going on a 30 minutes long ATV Ride.\nMeet the adorable giant cats and have a fun time with them, and get a chance to click interesting pictures with them!\nMake amazing memories with the elephants and do not forget to capture these memories with your camera.\nOne of the must-see locations in Phuket is the Big Buddha.\nDo not miss the jaw-dropping panoramic view from the Big Buddha Viewpoint.\nWorship and pay respect while visiting the Chalong Temple.\nThe Perfect spot for the Cashew nut lover is the Cashew Nut Factory in Phuket.\nA visit to the honey farm will give insights into how honey is created.\nCatch a coffee break and relax!\nWant to bring back some souvenirs? The next stop is the perfect place for you to get them"
    },
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Pickup from your hotel" },
      { time: "09:30 AM", title: "ATV Adventure", description: "30 minutes ATV off-road ride through jungle trails" },
      { time: "10:30 AM", title: "Tiger Experience", description: "Meet and take selfies with tigers" },
      { time: "11:30 AM", title: "Elephant Photos", description: "Photo opportunity with elephants" },
      { time: "12:00 PM", title: "Big Buddha", description: "Visit Big Buddha and viewpoint" },
      { time: "01:00 PM", title: "Chalong Temple", description: "Visit Chalong Temple" },
      { time: "02:00 PM", title: "Cashew & Honey Farm", description: "Visit Cashew Nut Factory and Honey Farm" },
      { time: "03:00 PM", title: "Return", description: "Drop-off at hotel with souvenir stop" }
    ],
    tourTimings: ["07:00 AM", "10:00 AM", "01:00 PM"],
    inclusions: [
      "Visit Tiger",
      "ATV - 30 mins",
      "Round Trip Transfer",
      "Insurance",
      "English Speaking Guide",
      "Soft Drink",
      "Big Buddha",
      "Big Buddha Viewpoint",
      "Chalong Temple",
      "Cashew Factory",
      "Honey Farm",
      "Picture with Elephant",
      "A Visit to the Souvenir Shop"
    ],
    exclusions: ["Personal Expenses", "Tips", "Meals"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Is ATV riding safe?", answer: "Yes, experienced guides lead the ride and safety equipment is provided." },
      { question: "Is it safe with tigers?", answer: "Yes, experienced handlers supervise all interactions." }
    ]
  },
  // New Phuket Tours
  "dolphin-bay-phuket": {
    id: "dolphin-bay-phuket",
    title: "Dolphin Bay Phuket Admission Ticket with Transfer",
    shortDescription: "Interactive dolphin and seal shows with meet-and-greet opportunities. Perfect family entertainment experience in Phuket.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 3410,
    childPrice: 1328,
    singleAdultPrice: 4158,
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
    tourTimings: ["11:00 AM", "02:00 PM", "05:00 PM"],
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
    basePrice: 2053,
    childPrice: 1570,
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
    basePrice: 2268,
    childPrice: 2415,
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
    tourOptions: [
      { label: "Regular Ticket with Roundtrip Transfer from Patong/Kalim", adultPrice: 2268 },
      { label: "Regular Ticket with Roundtrip Transfer from Indo Chine/Kalima Resort/Karon/Traitrang/Thavorn Palm Beach", adultPrice: 2550 }
    ],
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
    basePrice: 6426,
    childPrice: 6883,
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
    tourTimings: ["05:30 PM"],
    tourOptions: [
      { label: "Park Admission Ticket Only + Transfer from Phuket Hotel", adultPrice: 6426 },
      { label: "Park Admission Ticket + Buffet Dinner + Transfer from Phuket Hotel", adultPrice: 7185 }
    ],
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
    shortDescription: "Immersive Muslim-friendly tour with private guide, halal dining, mosque visits, and stunning natural attractions in Phuket",
    location: "Phuket, Thailand",
    city: "Phuket",
    basePrice: 8820,
    childPrice: 8820,
    minAdults: 2,
    twoAdultPrice: 11100,
    duration: "8 hours",
    rating: 4.8,
    reviews: 245,
    tourTimings: ["09:00 a.m."],
    highlights: ["Bang Pae Waterfall", "Mai Khao Beach with airplanes", "Halal dining", "Bang Tao Mukaram Mosque", "Private guide"],
    description: {
      overview: "Experience a comprehensive Muslim-friendly tour designed for travelers seeking a respectful and spiritually enriching exploration of Phuket.",
      whatToExpect: "Visit natural wonders like Bang Pae Waterfall and Mai Khao Beach, enjoy certified halal meals, and experience peaceful moments at an historic mosque with a knowledgeable Muslim guide."
    },
    heroImages: [],
    galleryImages: [],
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Private pickup from your hotel" },
      { time: "10:00 AM", title: "Bang Pae Waterfall", description: "Visit Phuket's largest waterfall with hiking and swimming opportunities" },
      { time: "12:00 PM", title: "Mai Khao Beach", description: "Experience airplanes landing overhead at this thrilling beach" },
      { time: "01:00 PM", title: "Halal Lunch", description: "Authentic Thai-Muslim meal at certified halal restaurant" },
      { time: "02:30 PM", title: "Bang Tao Mukaram Mosque", description: "Visit this beautiful historic mosque for prayer and reflection" },
      { time: "04:00 PM", title: "Hotel Dropoff", description: "Return to your hotel" }
    ],
    inclusions: [
      "Private Muslim-friendly guide",
      "Hotel pick-up and drop-off",
      "Entrance fees to all locations",
      "Halal lunch at a certified restaurant",
      "Prayer stop at Bang Tao Mukaram Mosque",
      "Comfortable, private transportation"
    ],
    exclusions: [
      "Personal expenses and additional purchases",
      "Optional snacks & drinks at the waterfall or beach",
      "Gratuities for guide (Optional)"
    ],
    bookingPolicy: ["Booking confirmation will be provided via email", "Minimum 2 adults required for this tour"],
    cancellationPolicy: ["Free cancellation up to 24 hours before tour date", "Full refund if cancelled within deadline"],
    childPolicy: [
      "Infants of age 0-3 will not be charged on this tour",
      "Child rate will be same as adult"
    ],
    faqs: [
      {
        question: "Is the food at the halal restaurant authentic?",
        answer: "Yes, we partner with certified halal restaurants that serve authentic Thai-Muslim cuisine prepared according to halal standards."
      },
      {
        question: "Can I pray at the mosque?",
        answer: "Absolutely! Bang Tao Mukaram Mosque welcomes visitors for prayer. Prayer times will be scheduled based on tour timing."
      },
      {
        question: "Is swimming at the waterfall safe?",
        answer: "Yes, Bang Pae Waterfall has designated safe swimming areas. The waterfall is family-friendly and suitable for all ages."
      },
      {
        question: "What should I wear for mosque visits?",
        answer: "We recommend modest clothing. Women may bring a hijab if preferred. The mosque provides prayer facilities and space."
      }
    ],
    customerReviews: [
      {
        name: "Fatima M.",
        date: "2 weeks ago",
        rating: 5,
        comment: "Perfect tour for Muslim travelers! The guide was knowledgeable and respectful of our faith.",
        helpful: 48
      },
      {
        name: "Ahmed K.",
        date: "1 month ago",
        rating: 5,
        comment: "The halal lunch was delicious and the mosque visit was very meaningful. Highly recommended!",
        helpful: 35
      },
      {
        name: "Aisha N.",
        date: "1 month ago",
        rating: 4.5,
        comment: "Great experience with family. The waterfall and airplane beach were amazing highlights.",
        helpful: 28
      }
    ]
  },
  // Pattaya Tours
  "pattaya-floating-market-tour": {
    id: "pattaya-floating-market-tour",
    title: "Discovery Pattaya City Tours with Floating Market and Lunch",
    shortDescription: "Comprehensive Pattaya city tour visiting floating market, cultural sites, and landmarks with authentic Thai lunch included.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 2175,
    childPrice: 1815,
    singleAdultPrice: 3385,
    duration: "6-7 Hours",
    rating: 4.5,
    reviews: 342,
    heroImages: [
      { src: pattayaBoatTour, title: "Pattaya Floating Market" },
      { src: pattayaSailboat, title: "Traditional Thai Market" },
      { src: pattayaLongtailBoats, title: "Sanctuary of Truth" }
    ],
    galleryImages: [
      { src: pattayaBoatsBeach, alt: "Floating market vendors" },
      { src: pattayaTropicalBeach, alt: "Traditional boats" },
      { src: pattayaTempleWoman, alt: "Big Buddha Hill view" },
      { src: pattayaWomanSea, alt: "Thai cultural site" }
    ],
    highlights: [
      "Walking Street",
      "Bali Hai Pier",
      "Big Buddha",
      "Viewpoint",
      "Floating Market",
      "Gems Gallery"
    ],
    description: {
      overview: "Discover the best of Pattaya on this comprehensive city tour.",
      whatToExpect: "Capture unforgettable moments with your friends and family, and make memories that will last a lifetime. Don't miss out on this incredible opportunity to discover the heart and soul of Pattaya! This tour is perfect for first-time visitors, offering a one-of-a-kind and unforgettable glimpse into the beauty and excitement of this captivating city."
    },
    itinerary: [
      { time: "08:00 AM", title: "Meet at Hotel Dusit Thani", description: "Meet us at the lobby of Hotel Dusit Thani Pattaya. Our Sun Leisure World Staff will meet you either at the hotel lobby or you can visit our office located just beside the restaurant." },
      { time: "09:45 AM", title: "Walking Street Pattaya", description: "Walking Street is an entertainment and red-light district in the city of Pattaya, Thailand. The area includes seafood restaurants, live music venues, beer bars, discothèques, sports bars, go-go bars, nightclubs, and hotels. Explore this vibrant spot, known for its nightlife." },
      { time: "10:00 AM", title: "Bali Hai Pier", description: "Bali Hai Pier, also known as Pattaya Pier, is a central feature located at the end of Walking Street, near the southernmost point of Pattaya Bay. It is a bustling hub with day-trippers, scuba divers, and fishing enthusiasts. Capture a classic image of Pattaya from here." },
      { time: "10:00 AM", title: "Pattaya City Sign - Viewpoint", description: "Pattaya City Sign is located next to Bali Hai Pier, providing an opportunity for a memorable selfie with the city's iconic signage." },
      { time: "10:30 AM", title: "Big Buddha Temple", description: "Visit the Big Buddha Temple, home to one of the largest Buddha images in the world. The 300 feet high image of Lord Buddha is a prominent landmark in Pattaya. Explore the hilltop location with stunning views of the city and bay." },
      { time: "11:30 AM", title: "Buddha Mountain", description: "Explore Khao Chi Chan, also known as Buddha Mountain, featuring a massive Buddha image carved into a limestone hill. The intricate depiction of Lord Buddha measures an impressive 109 meters in height and 70 meters in width. Enjoy the tranquil surroundings with landscaped gardens and reflecting pools." },
      { time: "12:00 PM", title: "Pattaya Floating Market", description: "Experience the colorful market with traditional Thai crafts and produce sold from boats and waterfront shops. Enjoy the exceptional lifestyle of Pattaya at the Floating Market, including a great local lunch as part of our package. Take a boat ride and savor a quick lunch with a limited 2-3 item set meal." },
      { time: "02:00 PM", title: "Gems Gallery Pattaya", description: "Visit the biggest Gems Museum and enjoy the world-class craftsmanship of Gems and Jewellery." },
      { time: "02:30 PM", title: "Tour Ends", description: "Our tour ends at the meeting point. We will drop you here or at your hotel, depending on the places you started our experience." }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Walking Street", "Bali Hai Pier", "Big Buddha", "Viewpoint", "Floating Market", "Gems Gallery", "Lunch", "Transfer by Minibus"],
    exclusions: ["Personal expense", "Tips and gratuities"],
    bookingPolicy: ["Confirmation will be received within 24 hours of booking", "Please provide hotel name and address for pickup", "Bring swimwear, sunscreen, towel, and camera", "Check-in closes 30 minutes before departure", "Booking reference number required for check-in", "Please arrive at pickup point 10 minutes before departure"],
    cancellationPolicy: ["Free cancellation up to 48 hours before the activity", "100% charge for cancellations within 48 hours", "No refund for no-shows or late arrivals"],
    childPolicy: ["Free entrance for children below 100cm", "Child ticket is only applicable for children 100-140cm (must be between 2-12 years old)", "Children aged 0-2 can join the tour for free provided they do not occupy an additional seat", "Children aged 3-8 would be charged 75% of tours rate", "Children over 8 would be considered as adult"],
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
    basePrice: 1208,
    childPrice: 1000,
    duration: "4-5 Hours",
    rating: 4.3,
    reviews: 256,
    heroImages: [
      { src: pattayaSpeedboat, title: "Big Buddha Hill Pattaya" },
      { src: pattayaTempleWoman, title: "Panoramic City Views" },
      { src: pattayaLakeTour, title: "Gems Gallery Museum" }
    ],
    galleryImages: [
      { src: pattayaBoatTour, alt: "Golden Buddha statue" },
      { src: pattayaSailboat, alt: "Pattaya Bay view" },
      { src: pattayaTropicalBeach, alt: "Gems and jewelry showcase" },
      { src: pattayaIslandsBoats, alt: "Museum exhibition" }
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
    tourTimings: ["08:00 AM"],
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
    basePrice: 603.75,
    childPrice: 603.75,
    duration: "6-7 Hours",
    rating: 4.4,
    reviews: 489,
    heroImages: [
      { src: pattayaBoatsBeach, title: "Coral Island Paradise" },
      { src: pattayaTropicalBeach, title: "Crystal Clear Waters" },
      { src: pattayaWomanSea, title: "Beach Activities" }
    ],
    galleryImages: [
      { src: pattayaIslandsBoats, alt: "White sandy beach" },
      { src: pattayaSailboat, alt: "Snorkeling adventure" },
      { src: pattayaSpeedboat, alt: "Water sports activities" },
      { src: pattayaLakeTour, alt: "Tropical paradise" }
    ],
    highlights: [
      "Pristine white sandy beaches",
      "Crystal clear waters",
      "Optional water sports activities",
      "Indian lunch included"
    ],
    description: {
      overview: "Escape to the beautiful Coral Island (Koh Larn) for a day of sun, sand, and sea.",
      whatToExpect: "Koh Larn caters to all types of tourists, whether you want to relax on the island's soft white sand or indulge in water sports activities. You can choose from parasailing, water skiing, and jet skiing. For snorkeling and deep-sea diving, it is recommended to visit the nearby islands of Koh Krok and Koh Sak, where you can explore the abundant coral and undersea life. However, it's important to note that there are no dive shops in this area, so tourists should bring their own diving equipment.\n\nCoral Island Pattaya with activity Stopover"
    },
    itinerary: [
      { time: "09:00 AM - 09:45 AM", title: "Hotel Pickup", description: "Pick up at Hotel lobby by Van and transfer to Pattaya Beach." },
      { time: "09:30 AM", title: "Depart from Coral Island", description: "Depart from Coral Island (Tawan Beach)" },
      { time: "10:00 AM", title: "Water Activities", description: "Drop off Parasailing Boat / Sea Walking Boat (optional, you must wait for others to take this activity)" },
      { time: "10:30 AM", title: "Underwater Marine", description: "Drop off underwater marine (optional, you must wait for others to take this activity)" },
      { time: "11:30 AM", title: "Ta Wan Beach", description: "Arrive at Ta Wan Beach on Coral Island for swimming, relaxing, and sunbathing on the beach" },
      { time: "01:00 PM - 01:30 PM", title: "Return", description: "The boat will take you back to Pattaya" },
      { time: "01:30 PM", title: "Indian Lunch", description: "Enjoy a delicious lunch at an Indian restaurant" },
      { time: "02:30 PM", title: "Hotel Transfer", description: "Transfer back to the Hotel." }
    ],
    tourTimings: ["09:00 AM"],
    inclusions: ["Join round trip transfer from the hotel", "PA insurance throughout the trip", "Life jacket", "Indian Lunch", "English speaking guide", "Free toilet use on the Island except for the shower room"],
    exclusions: ["Personal expenses and gratuities", "Entry for water activities"],
    bookingPolicy: ["Confirmation will be received within 24 hours of booking", "Please provide hotel name and address for pickup", "Bring swimwear, sunscreen, towel, and camera", "Check-in closes 30 minutes before departure", "Booking reference number required for check-in", "Please arrive at pickup point 10 minutes before departure"],
    cancellationPolicy: ["Free cancellation up to 48 hours before the activity", "100% charge for cancellations within 48 hours", "No refund for no-shows or late arrivals"],
    childPolicy: ["Free entrance for children below 100cm", "Child ticket is only applicable for children 100-140cm (must be between 2-12 years old)", "Children aged 0-2 can join the tour for free provided they do not occupy an additional seat", "Children aged 3-8 would be charged 75% of tours rate", "Children over 8 would be considered as adult"],
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
    basePrice: 3622.5,
    childPrice: 3018.75,
    duration: "5-6 Hours",
    rating: 4.7,
    reviews: 612,
    heroImages: [
      { src: pattayaTempleWoman, title: "Nong Nooch Tropical Garden" },
      { src: pattayaBoatTour, title: "Elephant Show" },
      { src: pattayaLakeTour, title: "Thai Cultural Performance" }
    ],
    galleryImages: [
      { src: pattayaTropicalBeach, alt: "Beautiful botanical gardens" },
      { src: pattayaIslandsBoats, alt: "Elephant performance" },
      { src: pattayaSailboat, alt: "Traditional Thai dance" },
      { src: pattayaBoatsBeach, alt: "Garden landscapes" }
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
    tourTimings: ["09:00 AM"],
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
    basePrice: 3650,
    childPrice: 1935,
    minAdults: 2,
    duration: "3-4 Hours",
    rating: 4.6,
    reviews: 378,
    heroImages: [
      { src: pattayaLakeTour, title: "Pattaya Dolphinarium" },
      { src: pattayaSpeedboat, title: "Dolphin Performance" },
      { src: pattayaBoatTour, title: "Marine Life Show" }
    ],
    galleryImages: [
      { src: pattayaTropicalBeach, alt: "Dolphin jumping tricks" },
      { src: pattayaIslandsBoats, alt: "Seal show" },
      { src: pattayaSailboat, alt: "Interactive experience" },
      { src: pattayaBoatsBeach, alt: "Family entertainment" }
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
    tourTimings: ["11:00 AM", "02:00 PM", "05:00 PM"],
    tourOptions: [
      { label: "Regular Ticket with Transfer", adultPrice: 3650 },
      { label: "Deluxe Ticket with Transfer", adultPrice: 4350 }
    ],
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
    basePrice: 4830,
    childPrice: 3381,
    duration: "2-3 Hours",
    rating: 4.8,
    reviews: 523,
    heroImages: [
      { src: muayThai1, title: "Muay Thai Boxing Match" },
      { src: muayThai2, title: "Traditional Wai Kru Ritual" },
      { src: muayThai3, title: "Stadium Atmosphere" }
    ],
    galleryImages: [
      { src: muayThai1, alt: "Professional fighters" },
      { src: muayThai2, alt: "Boxing ring action" },
      { src: muayThai3, alt: "Pre-fight ceremony" },
      { src: pattayaBoatsBeach, alt: "Audience excitement" }
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
    tourTimings: ["06:00 PM"],
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
  "imagine79-show-pattaya": {
    id: "imagine79-show-pattaya",
    title: "Imagine 79 Show Pattaya with Transfer",
    shortDescription: "The most scandalous and talked-about adult show in Pattaya. No photos or videos allowed — an experience you won't forget.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 4000,
    duration: "3 Hours",
    rating: 4.5,
    reviews: 312,
    isAdultOnly: true,
    minimumAdults: 2,
    heroImages: [
      { src: alcazarShow1, title: "Imagine 79 Show Pattaya" },
      { src: pattayaNightlife1, title: "Pattaya Nightlife Entertainment" },
      { src: pattayaNightlife2, title: "Adult Show Experience" }
    ],
    galleryImages: [
      { src: alcazarShow1, alt: "Show entrance" },
      { src: pattayaNightlife1, alt: "Nightlife district" },
      { src: pattayaNightlife2, alt: "Entertainment area" },
      { src: pattayaNightlife3, alt: "Pattaya at night" }
    ],
    highlights: [
      "The most scandalous show in Pattaya",
      "Round-trip hotel transfer included",
      "Unique adult entertainment experience",
      "Strictly no photos/videos policy"
    ],
    description: {
      overview: "This show rises the heated discussions among the audience, and the opinions are very different. It probably depends on your attitude to the intimate topics and explicit scenes shown in the public. It is impossible to find photos or videos of this show on the Internet. Taking photos and videos is strictly FORBIDDEN. You will be carefully inspected at the entrance, smartphones and photo cameras will be taken away for the time of the show.",
      whatToExpect: "Experience the most talked-about adult show in Pattaya. The show features explicit scenes and intimate topics. All electronic devices are confiscated at the entrance and returned after the show."
    },
    itinerary: [
      { time: "07:15 PM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "07:45 PM", title: "Arrive at Venue", description: "Security check and device collection" },
      { time: "08:00 PM", title: "Show Starts", description: "The Imagine 79 Show begins" },
      { time: "09:30 PM", title: "Show Ends", description: "Collect your devices" },
      { time: "10:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["08:00 PM"],
    inclusions: ["Round-trip transfer from Pattaya hotel", "Admission ticket"],
    exclusions: ["Food and beverages", "Personal expenses", "Tips"],
    bookingPolicy: ["Minimum booking for 2 people", "Confirmation within 24 hours", "Not available for citizens of China, Hong Kong, Taiwan, Vietnam and Thailand"],
    cancellationPolicy: ["Free cancellation up to 48 hours before", "No refund within 48 hours"],
    childPolicy: ["This is an adult-only show", "No children allowed"],
    faqs: [
      { question: "Can I take photos during the show?", answer: "No. Taking photos and videos is strictly forbidden. All devices are collected at the entrance." },
      { question: "Who cannot attend?", answer: "The show is not available to citizens of China, Hong Kong, Taiwan, Vietnam and Thailand." },
      { question: "What is the minimum booking?", answer: "The current price is for minimum booking of 2 people." }
    ]
  },
  "show-69-pattaya": {
    id: "show-69-pattaya",
    title: "Show 69 in Pattaya with Transfer",
    shortDescription: "Popular adult entertainment show in Pattaya running daily with round-trip hotel transfer included.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 3800,
    duration: "2.5 Hours",
    rating: 4.4,
    reviews: 287,
    isAdultOnly: true,
    minimumAdults: 2,
    heroImages: [
      { src: pattayaNightlife1, title: "Show 69 Pattaya" },
      { src: pattayaNightlife2, title: "Adult Entertainment" },
      { src: pattayaNightlife3, title: "Nightlife Show" }
    ],
    galleryImages: [
      { src: pattayaNightlife1, alt: "Show venue" },
      { src: pattayaNightlife2, alt: "Entertainment district" },
      { src: pattayaNightlife3, alt: "Nightlife scene" },
      { src: alcazarShow1, alt: "Show experience" }
    ],
    highlights: [
      "Daily adult show",
      "45-minute performance",
      "Round-trip hotel transfer",
      "Repeated shows from 6 PM to 10 PM"
    ],
    description: {
      overview: "Show 69 is one of Pattaya's popular adult entertainment shows, running daily with multiple showtimes. The show lasts 45 minutes and is repeated throughout the evening from 6:00 PM till 10:00 PM.",
      whatToExpect: "Transfer from your hotel in Pattaya around 7:00 PM (exact pickup time confirmed after booking). Return between 8:30-9:30 PM. The show lasts 45 minutes and features adult entertainment."
    },
    itinerary: [
      { time: "06:15 PM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "06:45 PM", title: "Arrive at Venue", description: "Security check and seating" },
      { time: "07:00 PM", title: "Show Starts", description: "45-minute adult show" },
      { time: "07:45 PM", title: "Show Ends", description: "Collect your belongings" },
      { time: "08:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["07:00 PM"],
    inclusions: ["Round-trip transfer from Pattaya hotel", "Admission ticket"],
    exclusions: ["Food and beverages", "Personal expenses", "Tips"],
    bookingPolicy: ["Minimum booking for 2 people", "Confirmation within 24 hours", "Not available for citizens of China, Hong Kong, Taiwan, Vietnam and Thailand"],
    cancellationPolicy: ["Free cancellation up to 48 hours before", "No refund within 48 hours"],
    childPolicy: ["This is an adult-only show", "No children allowed"],
    faqs: [
      { question: "How long is the show?", answer: "The show lasts 45 minutes and is repeated from 6:00 PM till 10:00 PM." },
      { question: "Can I take photos?", answer: "No. Taking photos and videos during the show is forbidden." },
      { question: "Who cannot attend?", answer: "The show is not available to citizens of China, Hong Kong, Taiwan, Vietnam and Thailand." }
    ]
  },
  "show-89-pattaya": {
    id: "show-89-pattaya",
    title: "Show 89 in Pattaya with Transfer",
    shortDescription: "Premium adult entertainment show in Pattaya with round-trip hotel transfer. Daily performances.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 6000,
    duration: "3 Hours",
    rating: 4.6,
    reviews: 198,
    isAdultOnly: true,
    minimumAdults: 2,
    heroImages: [
      { src: pattayaNightlife2, title: "Show 89 Pattaya" },
      { src: pattayaNightlife1, title: "Premium Adult Show" },
      { src: pattayaNightlife3, title: "Nightlife Entertainment" }
    ],
    galleryImages: [
      { src: pattayaNightlife2, alt: "Premium show venue" },
      { src: pattayaNightlife1, alt: "Entertainment area" },
      { src: pattayaNightlife3, alt: "Night district" },
      { src: alcazarShow2, alt: "Show experience" }
    ],
    highlights: [
      "Premium adult show experience",
      "Daily performances",
      "45-minute show",
      "Round-trip hotel transfer included"
    ],
    description: {
      overview: "Show 89 is a premium adult entertainment experience in Pattaya, running daily with shows from 6:00 PM till 10:00 PM. Each performance lasts 45 minutes.",
      whatToExpect: "Transfer from your hotel in Pattaya around 7:00 PM (exact pickup time confirmed after booking). Return between 8:30-9:30 PM. The show lasts 45 minutes and features premium adult entertainment."
    },
    itinerary: [
      { time: "07:15 PM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "07:45 PM", title: "Arrive at Venue", description: "Check-in and seating" },
      { time: "08:00 PM", title: "Show Starts", description: "45-minute premium adult show" },
      { time: "08:45 PM", title: "Show Ends", description: "Collect belongings" },
      { time: "09:30 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["08:00 PM"],
    inclusions: ["Round-trip transfer from Pattaya hotel", "Admission ticket"],
    exclusions: ["Food and beverages", "Personal expenses", "Tips"],
    bookingPolicy: ["Minimum booking for 2 people", "Confirmation within 24 hours", "Not available for citizens of China, Hong Kong, Taiwan, Vietnam and Thailand"],
    cancellationPolicy: ["Free cancellation up to 48 hours before", "No refund within 48 hours"],
    childPolicy: ["This is an adult-only show", "No children allowed"],
    faqs: [
      { question: "How long is the show?", answer: "The show lasts 45 minutes and is repeated from 6:00 PM till 10:00 PM." },
      { question: "Can I take photos?", answer: "No. Taking photos and videos during the show is forbidden." },
      { question: "What is the minimum booking?", answer: "The current price is for minimum booking of 2 people." }
    ]
  },
  "big-eye-show-pattaya": {
    id: "big-eye-show-pattaya",
    title: "Big Eye Show in Pattaya with Transfer",
    shortDescription: "Exciting adult entertainment show in Pattaya with 60-minute performance and round-trip hotel transfer.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 6000,
    duration: "3 Hours",
    rating: 4.5,
    reviews: 234,
    isAdultOnly: true,
    minimumAdults: 2,
    heroImages: [
      { src: pattayaNightlife3, title: "Big Eye Show Pattaya" },
      { src: pattayaNightlife1, title: "Adult Entertainment" },
      { src: pattayaNightlife2, title: "Nightlife Show" }
    ],
    galleryImages: [
      { src: pattayaNightlife3, alt: "Big Eye show venue" },
      { src: pattayaNightlife1, alt: "Entertainment district" },
      { src: pattayaNightlife2, alt: "Night scene" },
      { src: alcazarShow3, alt: "Show experience" }
    ],
    highlights: [
      "60-minute adult show",
      "Daily performances",
      "Shows from 6 PM to 10 PM",
      "Round-trip hotel transfer included"
    ],
    description: {
      overview: "Big Eye Show is an exciting adult entertainment experience in Pattaya. The show runs daily with performances from 6:00 PM to 10:00 PM, each lasting 60 minutes.",
      whatToExpect: "Departure between 7:45-8:30 PM. Return between 10:00-10:30 PM. The show starts between 6:00-10:00 PM and lasts 60 minutes. Features adult entertainment content."
    },
    itinerary: [
      { time: "07:45 PM", title: "Hotel Pickup", description: "Pick up from Pattaya hotels" },
      { time: "08:15 PM", title: "Arrive at Venue", description: "Check-in and seating" },
      { time: "08:30 PM", title: "Show Starts", description: "60-minute Big Eye Show" },
      { time: "09:30 PM", title: "Show Ends", description: "Collect belongings" },
      { time: "10:00 PM", title: "Return Transfer", description: "Drop-off at your hotel" }
    ],
    tourTimings: ["08:00 PM"],
    inclusions: ["Round-trip transfer from Pattaya hotel", "Admission ticket"],
    exclusions: ["Food and beverages", "Personal expenses", "Tips"],
    bookingPolicy: ["Minimum booking for 2 people", "Confirmation within 24 hours", "Not available for citizens of China, Hong Kong, Taiwan, Vietnam and Thailand"],
    cancellationPolicy: ["Free cancellation up to 48 hours before", "No refund within 48 hours"],
    childPolicy: ["This is an adult-only show", "No children allowed"],
    faqs: [
      { question: "How long is the show?", answer: "The Big Eye Show lasts 60 minutes." },
      { question: "Can I take photos?", answer: "No. Taking photos and videos during the show is forbidden." },
      { question: "Who cannot attend?", answer: "The show is not available to citizens of China, Hong Kong, Taiwan, Vietnam and Thailand." }
    ]
  },
  "alcazar-show-pattaya": {
    id: "alcazar-show-pattaya",
    title: "Alcazar Show Pattaya Ticket with Transfer",
    shortDescription: "World-famous cabaret show with stunning costumes, professional performers, and spectacular stage production.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 2420,
    childPrice: 2415,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 445,
    heroImages: [
      { src: alcazarShow1, title: "Alcazar Cabaret Show" },
      { src: alcazarShow2, title: "Stunning Stage Production" },
      { src: alcazarShow3, title: "Talented Performers" }
    ],
    galleryImages: [
      { src: alcazarShow1, alt: "Cabaret dancers" },
      { src: alcazarShow2, alt: "Elaborate costumes" },
      { src: alcazarShow3, alt: "Stage performance" },
      { src: pattayaIslandsBoats, alt: "Photo session" }
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
    basePrice: 3140,
    childPrice: 2052.75,
    singleAdultPrice: 6040,
    duration: "4 Hours",
    rating: 4.4,
    reviews: 289,
    heroImages: [
      { src: pattayaIslandsBoats, title: "Pattaya Floating Market" },
      { src: pattayaBoatsBeach, title: "Traditional Market Boats" },
      { src: pattayaTropicalBeach, title: "Four Regions Concept" }
    ],
    galleryImages: [
      { src: pattayaLongtailBoats, alt: "Market canal boats" },
      { src: pattayaBoatTour, alt: "Traditional architecture" },
      { src: pattayaSailboat, alt: "Local handicrafts" },
      { src: pattayaWomanSea, alt: "Cultural performances" }
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
    basePrice: 3381,
    childPrice: 3019,
    duration: "6-7 Hours",
    rating: 4.5,
    reviews: 423,
    heroImages: [
      { src: krabiIslandView, title: "Hong Islands Krabi" },
      { src: krabiLongtailBoats, title: "Pristine Beach Paradise" },
      { src: krabiKayaks, title: "Longtail Boat Journey" }
    ],
    galleryImages: [
      { src: krabiBeachWoman, alt: "Hong Island beach" },
      { src: krabiBoatTour, alt: "Hong Lagoon kayaking" },
      { src: krabiSailboat, alt: "Snorkeling activity" },
      { src: krabiTourBoat, alt: "Crystal clear waters" }
    ],
    highlights: [
      "Visit pristine Hong Islands",
      "Snorkeling in crystal clear waters",
      "Explore Hong Lagoon",
      "Traditional longtail boat experience"
    ],
    description: {
      overview: "Experience the natural beauty of Hong Islands on a traditional longtail boat tour.",
      whatToExpect: "Koh Hong (Room Island) is part of a group of islands one hour north of Krabi. Koh Hong has only one beach but it is recognized for being extremely beautiful, boasting fine white sand, coral, and lots of varieties of tropical fish. Pelay Beach is framed by limestone rock formations which gives it an enclosed feel. Coupled with the fact that there are seldom many people there, Koh Hong very much offers a 'deserted island' experience. Its name comes from an eroded group of caves in the middle of the island which harbors a large lake with a small passage to the sea. When the tide is high long tail boats can enter the 'room' and visitors can swim in the crystal clear water with a depth of around one meter. Koh Hong is another collection point for the nests that provide the ingredients for bird's nest soup. You can witness the fascinating sight of young men climbing up high bamboo poles to collect these nests, genuinely risking life and limb in pursuit of their income.\n\nDiscover the stunning Hong Island in Krabi by boat. This paradise island is belonging to the National Marine Park. Hong is translated as 'room' from Thai and for a reason as the island is secluded with a lagoon surrounded by cliffs at the center. You will be able to enjoy complete privacy, crystal clear water, and sunny sandy beaches away from crowds of tourists to spend your special moments."
    },
    itinerary: [
      { time: "08:30", title: "Hotel Pickup", description: "Hotel pick-up from your hotel or meeting point to Hong Island" },
      { time: "09:00", title: "Hong Islands", description: "Arrive at Hong Island with a professional guide. The tour guide will bring you to the best place for snorkeling together with demonstrating the best way to snorkel. Guided sightseeing to see the exotic highlight of Hong Island, including the 'Room' (Lagoon) inside the island. A special drop by at a bird's nests collecting point" },
      { time: "12:30", title: "Ko Lao La Ding", description: "A picnic lunch is served on the beach. Followed by transferring to the Lading Island (Paradise Island) for sightseeing & more snorkeling! You would get to discover the wonderful underwater stones here." },
      { time: "", title: "Pak Bia Island", description: "Then go to Pakbia Island & Rai Island. The boat will stop by on the sandy beaches for relaxing, sunbathing & more water activities!" },
      { time: "15:00", title: "Return", description: "Return to Ao nang Beach, thus transfers to your hotel. Notice: Itinerary may be subject to change depending on weather and tidal conditions" }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Hotel round-trip transfer", "Long Tailboat Transfer to Hong Island", "Snorkel Equipment", "Life Jacket", "English Speaking Guide", "Drinking Water", "Fresh fruits", "Lunch", "First Aid Kit", "Insurance", "Entry/Admission - Hong Islands", "Entry/Admission - Ko Lao La Ding", "Entry/Admission - Pak Bia Island"],
    exclusions: ["Exclude National Park Fee", "Any personal expenses", "Accommodation", "Gratuities"],
    bookingPolicy: ["Confirmation will be received within 24 hours of booking", "Please provide hotel name and address for pickup", "Bring swimwear, sunscreen, towel, and camera", "Check-in closes 30 minutes before departure", "Booking reference number required for check-in", "Please arrive at pickup point 10 minutes before departure"],
    cancellationPolicy: ["Free cancellation up to 48 hours before the activity", "100% charge for cancellations within 48 hours", "No refund for no-shows or late arrivals"],
    childPolicy: ["Free entrance for children below 100cm", "Child ticket is only applicable for children 100-140cm (must be between 2-12 years old)", "Children aged 0-2 can join the tour for free provided they do not occupy an additional seat", "Children aged 3-8 would be charged 75% of tours rate", "Children over 8 would be considered as adult"],
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
    basePrice: 4347,
    childPrice: 3743,
    duration: "6-7 Hours",
    rating: 4.6,
    reviews: 512,
    heroImages: [
      { src: krabiSpeedboat, title: "Hong Islands Speedboat Tour" },
      { src: krabiTourBoat, title: "Multiple Island Destinations" },
      { src: krabiIslandView, title: "Premium Island Hopping" }
    ],
    galleryImages: [
      { src: krabiBoatTour, alt: "Speedboat adventure" },
      { src: krabiBeachWoman, alt: "Island hopping" },
      { src: krabiKayaks, alt: "Pakbia Island snorkeling" },
      { src: krabiSailboat, alt: "Hong Lagoon exploration" }
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
    basePrice: 3743,
    childPrice: 2294,
    duration: "5-6 Hours",
    rating: 4.7,
    reviews: 356,
    heroImages: [
      { src: krabiSailboat, title: "Seven Islands Sunset Tour" },
      { src: krabiIslandView, title: "Stunning Sunset Views" },
      { src: krabiBoatTour, title: "BBQ Beach Dinner" }
    ],
    galleryImages: [
      { src: krabiLongtailBoats, alt: "Tup Island sandbar" },
      { src: krabiKayaks, alt: "Chicken Island snorkeling" },
      { src: krabiBeachWoman, alt: "Sunset cruise" },
      { src: krabiTourBoat, alt: "BBQ seafood dinner" }
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
    basePrice: 4830,
    childPrice: 3985,
    duration: "5-6 Hours",
    rating: 4.8,
    reviews: 478,
    heroImages: [
      { src: krabiSpeedboat, title: "Seven Islands Speedboat Sunset" },
      { src: krabiBoatTour, title: "Premium Island Experience" },
      { src: krabiIslandView, title: "Magical Sunset Cruise" }
    ],
    galleryImages: [
      { src: krabiTourBoat, alt: "Speedboat to islands" },
      { src: krabiBeachWoman, alt: "Phra Nang Cave beach" },
      { src: krabiLongtailBoats, alt: "Railay Beach views" },
      { src: krabiSailboat, alt: "Sunset BBQ feast" }
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
  "four-islands-longtail-no-park-fee": {
    id: "four-islands-longtail-no-park-fee",
    title: "4 Islands by Longtail Boat (No National Park Fee)",
    shortDescription: "Classic four-islands tour by traditional longtail boat. National park fees not included - pay locally.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 2415,
    childPrice: 2055,
    duration: "7-8 Hours",
    rating: 4.4,
    reviews: 589,
    heroImages: [
      { src: krabiLongtailBoats, title: "Four Islands Longtail Tour" },
      { src: krabiKayaks, title: "Classic Krabi Experience" },
      { src: krabiIslandView, title: "Traditional Boat Journey" }
    ],
    galleryImages: [
      { src: krabiBeachWoman, alt: "Phra Nang Cave Beach" },
      { src: krabiBoatTour, alt: "Tup Island sandbar" },
      { src: krabiSailboat, alt: "Chicken Island" },
      { src: krabiTourBoat, alt: "Poda Island beach" }
    ],
    highlights: [
      "Visit 4 iconic Krabi islands",
      "Traditional longtail boat",
      "Snorkeling and swimming",
      "Budget-friendly option"
    ],
    description: {
      overview: "Experience Krabi's classic four-islands tour by traditional longtail boat. Visit the famous Phra Nang Cave Beach, walk on Tup Island's connecting sandbar, snorkel at Chicken Island, and relax at beautiful Poda Island.",
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
    inclusions: ["Hotel transfers", "Longtail boat", "Snorkeling equipment", "Life jacket", "Lunch box", "Drinking water and fruit", "Guide", "Basic insurance"],
    exclusions: ["National park entrance fees (400 THB/adult, 200 THB/child)", "Personal expenses", "Kayak rental", "Underwater camera", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours", "National park fee NOT included - pay locally in cash", "Suitable for all ages"],
    cancellationPolicy: ["Free cancellation up to 24 hours before", "No refund for weather cancellations"],
    childPolicy: ["Children age 4-11 years at discounted rate", "Children under 4 are free", "Family-friendly tour"],
    faqs: [
      { question: "Are national park fees included?", answer: "No, national park entrance fees are NOT included. You must pay 400 THB per adult and 200 THB per child in cash locally." },
      { question: "How many people per longtail boat?", answer: "Longtail boats typically accommodate 8-10 passengers comfortably." }
    ]
  },
  "four-islands-longtail": {
    id: "four-islands-longtail",
    title: "4 Islands by Longtail Boat (With National Park Fee)",
    shortDescription: "Classic four-islands tour by traditional longtail boat with national park fees included. Visit Krabi's most iconic islands.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 4589,
    childPrice: 4230,
    duration: "7-8 Hours",
    rating: 4.4,
    reviews: 589,
    heroImages: [
      { src: krabiLongtailBoats, title: "Four Islands Longtail Tour" },
      { src: krabiKayaks, title: "Classic Krabi Experience" },
      { src: krabiIslandView, title: "Traditional Boat Journey" }
    ],
    galleryImages: [
      { src: krabiBeachWoman, alt: "Phra Nang Cave Beach" },
      { src: krabiBoatTour, alt: "Tup Island sandbar" },
      { src: krabiSailboat, alt: "Chicken Island" },
      { src: krabiTourBoat, alt: "Poda Island beach" }
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
    title: "4 Islands by Speedboat (With National Park Fee)",
    shortDescription: "Premium four-islands speedboat tour with buffet lunch, extended activities, and comfortable fast travel between islands.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 4589,
    childPrice: 4226,
    duration: "6-7 Hours",
    rating: 4.6,
    reviews: 634,
    heroImages: [
      { src: krabiSpeedboat, title: "Four Islands Speedboat Tour" },
      { src: krabiTourBoat, title: "Fast Island Hopping" },
      { src: krabiIslandView, title: "Premium Krabi Tour" }
    ],
    galleryImages: [
      { src: krabiBoatTour, alt: "Speedboat island hopping" },
      { src: krabiBeachWoman, alt: "Phra Nang Cave exploration" },
      { src: krabiKayaks, alt: "Chicken Island snorkeling" },
      { src: krabiLongtailBoats, alt: "Poda Island lunch" }
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
  },
  // Additional Bangkok Tours
  "safari-world-bangkok": {
    id: "safari-world-bangkok",
    title: "Safari World Bangkok Full Day Tour with Lunch and Transfer",
    shortDescription: "Experience Thailand's largest open zoo with Safari Park drive-through and Marine Park shows.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3500,
    childPrice: 2800,
    duration: "Full Day",
    rating: 4.7,
    reviews: 1567,
    heroImages: [
      { src: bangkokSkywalk1, title: "Safari World Bangkok" },
      { src: bangkokSkywalk2, title: "Safari Park" },
      { src: bangkokSkywalk3, title: "Marine Park" }
    ],
    galleryImages: [
      { src: bangkokSkywalk1, alt: "Safari drive" },
      { src: bangkokSkywalk2, alt: "Marine show" },
      { src: bangkokSkywalk3, alt: "Wildlife" },
      { src: emerald1, alt: "Animal encounters" }
    ],
    highlights: [
      "Safari Park Drive-Through",
      "Marine Park Shows",
      "Dolphin & Sea Lion Shows",
      "Feeding Sessions"
    ],
    description: {
      overview: "Thailand's largest open zoo featuring a drive-through safari and marine park with spectacular animal shows.",
      whatToExpect: "Drive through Safari Park to see African wildlife, then enjoy Marine Park's dolphin shows, sea lion performances, and more."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick up from Bangkok hotel" },
      { time: "09:30 AM", title: "Safari Park", description: "Drive through wildlife reserve" },
      { time: "11:00 AM", title: "Marine Shows", description: "Dolphin and sea lion shows" },
      { time: "12:30 PM", title: "Lunch", description: "Buffet lunch included" },
      { time: "02:00 PM", title: "More Shows", description: "Additional performances" },
      { time: "04:30 PM", title: "Return", description: "Return to hotel" }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Hotel Transfer", "Admission", "Buffet Lunch", "All Shows"],
    exclusions: ["Personal Expenses", "Feeding Tickets"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 3-11"],
    faqs: [
      { question: "Is it suitable for children?", answer: "Yes, perfect for families with children of all ages." }
    ]
  },
  // Additional Pattaya Tours
  "pattaya-nightlife-walking": {
    id: "pattaya-nightlife-walking",
    title: "Lost in Nightlight - A Walking, Drinking, and Food Tasting Experience at Pattaya's Red Light District",
    shortDescription: "An adults-only guided walking tour exploring Pattaya's famous nightlife scene with food and drinks.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 3745,
    childPrice: 0,
    singleAdultPrice: 6521,
    minAdults: 2,
    hideChildren: true,
    duration: "4 Hours",
    rating: 4.4,
    reviews: 345,
    heroImages: [
      { src: pattayaNightlife1, title: "Pattaya Nightlife" },
      { src: pattayaNightlife2, title: "Walking Street" },
      { src: pattayaNightlife3, title: "Food and Drinks" }
    ],
    galleryImages: [
      { src: pattayaNightlife1, alt: "Night scene" },
      { src: pattayaNightlife2, alt: "Street food" },
      { src: pattayaNightlife3, alt: "Local bars" },
      { src: pattayaWomanSea, alt: "Entertainment" }
    ],
    highlights: [
      "Walking Street Experience",
      "Local Food Tasting",
      "Drinks Included",
      "Knowledgeable Guide"
    ],
    description: {
      overview: "An adults-only tour exploring Pattaya's legendary nightlife with local food, drinks, and cultural insights.",
      whatToExpect: "Walk through Pattaya's famous entertainment districts, sample local street food, enjoy drinks at various venues, and learn about the area's history."
    },
    itinerary: [
      { time: "08:00 PM", title: "Meeting Point", description: "Meet at designated location" },
      { time: "08:30 PM", title: "Food Tasting", description: "Sample local street food" },
      { time: "09:30 PM", title: "Walking Tour", description: "Explore the entertainment areas" },
      { time: "11:00 PM", title: "Drinks", description: "Enjoy drinks at local venues" },
      { time: "12:00 AM", title: "End", description: "Tour concludes" }
    ],
    tourTimings: ["07:00 PM"],
    inclusions: ["Guide", "Food Tastings", "3 Drinks", "Walking Tour"],
    exclusions: ["Additional Drinks", "Personal Expenses"],
    bookingPolicy: ["Adults only (18+)", "ID required"],
    cancellationPolicy: ["Free cancellation up to 24 hours before"],
    childPolicy: ["Not suitable for children"],
    faqs: [
      { question: "Is this tour safe?", answer: "Yes, our guides ensure a safe and respectful experience." }
    ]
  },
  "pattaya-pub-crawl": {
    id: "pattaya-pub-crawl",
    title: "Sunset Club and Pub Crawling Experience at Drinking Street in Pattaya",
    shortDescription: "Ultimate Pattaya nightlife experience with sunset drinks and guided pub crawl through the best venues.",
    location: "Pattaya, Thailand",
    city: "pattaya",
    basePrice: 6280,
    childPrice: 0,
    singleAdultPrice: 9905,
    minAdults: 2,
    hideChildren: true,
    duration: "5 Hours",
    rating: 4.6,
    reviews: 278,
    heroImages: [
      { src: pattayaNightlife2, title: "Sunset Views" },
      { src: pattayaNightlife1, title: "Rooftop Bars" },
      { src: pattayaNightlife3, title: "Pub Crawl" }
    ],
    galleryImages: [
      { src: pattayaNightlife2, alt: "Sunset drinks" },
      { src: pattayaNightlife1, alt: "Club experience" },
      { src: pattayaNightlife3, alt: "Group fun" },
      { src: pattayaBoatTour, alt: "Night venues" }
    ],
    highlights: [
      "Sunset Rooftop Drinks",
      "VIP Entry to Clubs",
      "Drinks at Multiple Venues",
      "Party Atmosphere"
    ],
    description: {
      overview: "Start with sunset cocktails at a rooftop bar then explore Pattaya's best nightlife venues on this guided pub crawl.",
      whatToExpect: "Begin with sunset views and drinks, then visit 4-5 of Pattaya's hottest bars and clubs with VIP entry and drink deals."
    },
    itinerary: [
      { time: "06:00 PM", title: "Sunset Bar", description: "Rooftop sunset drinks" },
      { time: "08:00 PM", title: "Pub Crawl Begins", description: "First venue visit" },
      { time: "09:30 PM", title: "Club Hopping", description: "Visit multiple venues" },
      { time: "11:00 PM", title: "Final Venue", description: "End at top club" }
    ],
    tourTimings: ["07:00 PM"],
    inclusions: ["Welcome Drink", "VIP Entry", "Drink at Each Venue", "Guide"],
    exclusions: ["Additional Drinks", "Personal Expenses"],
    bookingPolicy: ["Adults only (18+)", "Dress code applies"],
    cancellationPolicy: ["Free cancellation up to 24 hours before"],
    childPolicy: ["Not suitable for children"],
    faqs: [
      { question: "What's the dress code?", answer: "Smart casual - no flip flops or tank tops." }
    ]
  },
  // Additional Krabi Tours
  "phi-phi-krabi-speedboat": {
    id: "phi-phi-krabi-speedboat",
    title: "Phi Phi Island by Speedboat with Transfer from Krabi",
    shortDescription: "Full day speedboat tour to Phi Phi Islands departing from Krabi with Maya Bay, snorkeling, and lunch.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 3800,
    childPrice: 2800,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1234,
    heroImages: [
      { src: phiPhi1, title: "Phi Phi from Krabi" },
      { src: phiPhi2, title: "Maya Bay" },
      { src: phiPhi3, title: "Speedboat Adventure" }
    ],
    galleryImages: [
      { src: phiPhi4, alt: "Phi Phi Islands" },
      { src: phiPhi5, alt: "Snorkeling" },
      { src: phiPhi6, alt: "Beach time" },
      { src: phiPhi7, alt: "Lunch on island" }
    ],
    highlights: [
      "Speedboat from Krabi",
      "Maya Bay Visit",
      "Phi Phi Don Exploration",
      "Snorkeling at Coral Reefs"
    ],
    description: {
      overview: "Experience the stunning Phi Phi Islands on a speedboat tour departing from Krabi, visiting Maya Bay and multiple snorkeling spots.",
      whatToExpect: "Fast speedboat journey to Phi Phi Islands, visit iconic Maya Bay, snorkel at pristine reefs, lunch at Phi Phi Don, and explore Viking Cave."
    },
    itinerary: [
      { time: "07:30 AM", title: "Hotel Pickup", description: "Pickup from Krabi hotel" },
      { time: "09:00 AM", title: "Speedboat Departs", description: "Journey to Phi Phi" },
      { time: "10:00 AM", title: "Maya Bay", description: "Visit famous beach" },
      { time: "11:30 AM", title: "Snorkeling", description: "Coral reef snorkeling" },
      { time: "01:00 PM", title: "Lunch", description: "Lunch at Phi Phi Don" },
      { time: "03:00 PM", title: "Viking Cave", description: "Sightseeing" },
      { time: "05:00 PM", title: "Return", description: "Return to Krabi" }
    ],
    tourTimings: ["07:30 AM"],
    inclusions: ["Hotel Transfer", "Speedboat", "Lunch", "Snorkeling Gear", "Guide"],
    exclusions: ["National Park Fee", "Personal Expenses"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "How long is the boat ride?", answer: "About 1 hour by speedboat from Krabi." }
    ]
  },
  "krabi-emerald-pool-tiger-cave": {
    id: "krabi-emerald-pool-tiger-cave",
    title: "Full Day Emerald Pool + Hot Springs + Tiger Cave with Lunch",
    shortDescription: "Complete nature tour including the famous Emerald Pool, natural hot springs, and challenging Tiger Cave Temple climb.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 3000,
    childPrice: 2000,
    duration: "Full Day",
    rating: 4.6,
    reviews: 567,
    heroImages: [
      { src: emerald1, title: "Emerald Pool" },
      { src: phiPhi1, title: "Hot Springs" },
      { src: phiPhi2, title: "Tiger Cave Temple" }
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Emerald Pool swimming" },
      { src: phiPhi4, alt: "Natural hot springs" },
      { src: phiPhi5, alt: "Tiger Cave stairs" },
      { src: phiPhi6, alt: "Temple views" }
    ],
    highlights: [
      "Emerald Pool Swimming",
      "Natural Hot Springs",
      "Tiger Cave Temple",
      "Rainforest Experience"
    ],
    description: {
      overview: "A full day nature adventure visiting Krabi's most famous natural attractions including Emerald Pool, hot springs, and Tiger Cave Temple.",
      whatToExpect: "Swim in the crystal-clear Emerald Pool, relax in natural hot springs, and optionally climb 1,260 steps to Tiger Cave Temple for stunning views."
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pick up from Krabi hotel" },
      { time: "09:30 AM", title: "Emerald Pool", description: "Swim in crystal waters" },
      { time: "11:00 AM", title: "Hot Springs", description: "Relax in natural springs" },
      { time: "12:30 PM", title: "Lunch", description: "Thai lunch included" },
      { time: "02:00 PM", title: "Tiger Cave", description: "Visit the temple" },
      { time: "04:30 PM", title: "Return", description: "Return to hotel" }
    ],
    tourTimings: ["08:00 AM"],
    inclusions: ["Hotel Transfer", "Park Fees", "Lunch", "Guide"],
    exclusions: ["Personal Expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 24 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Do I have to climb Tiger Cave?", answer: "No, climbing the 1,260 steps is optional. You can explore the temple grounds instead." }
    ]
  },
  // Dubai Tours
  "dhow-cruise-creek-lower": {
    id: "dhow-cruise-creek-lower",
    title: "Dhow Creek Cruise Dinner - Lower Deck with Transfers",
    shortDescription: "Experience a traditional Arabian dhow cruise on Dubai Creek with a delicious buffet dinner and live entertainment.",
    location: "Dubai Creek, Dubai",
    city: "dubai",
    basePrice: 2070.6,
    childPrice: 1948.8,
    duration: "90 Minutes",
    rating: 4.7,
    reviews: 1245,
    heroImages: [
      { src: dubaiDhowCruise, title: "Dubai Creek Cruise" },
      { src: dubaiSkylineNight, title: "Dubai Skyline" },
      { src: dubaiSkylineSunset, title: "Traditional Dhow" }
    ],
    galleryImages: [
      { src: dubaiDhowCruise, alt: "Dubai Creek Cruise" },
      { src: dubaiSkylineNight, alt: "Dubai at night" },
      { src: dubaiCityNight, alt: "Dubai City Night" }
    ],
    highlights: [
      "90-minute cruise along Dubai Creek",
      "Air-conditioned lower deck seating",
      "Welcome drink on arrival",
      "Delicious buffet dinner with vegetarian and non-vegetarian options",
      "Live entertainment including Tanura dancing",
      "Views of Dubai's historic landmarks"
    ],
    description: {
      overview: "The dhow is a traditional Bedouin boat that was used for trade and transportation. Today, these dhows have been converted into restaurants with lower (air-conditioned) and upper (open-air) decks.",
      whatToExpect: "Experience the charm of old Dubai on this enchanting dhow cruise. You are offered a welcome drink on arrival and are served delicious barbecued dishes once the dhow sets sail. While you enjoy your drink and starters, take in the prestigious buildings and structures of Dubai glittering in the night lights. Enjoy a delicious buffet spread with a variety of vegetarian and non-vegetarian dishes. Entertainment includes live music performances and mesmerizing Tanura dancing."
    },
    itinerary: [
      { time: "7:45 PM", title: "Boarding", description: "Boarding starts between 7:45 pm - 8:00 pm" },
      { time: "8:00 PM", title: "Welcome Drink", description: "Receive your welcome drink as you settle in" },
      { time: "8:15 PM", title: "Departure", description: "Dhow sets sail along Dubai Creek" },
      { time: "8:30 PM", title: "Dinner & Entertainment", description: "Enjoy buffet dinner while watching Tanura dance" },
      { time: "9:45 PM", title: "Return", description: "Cruise ends and return to starting point" }
    ],
    tourTimings: ["8:00 PM"],
    inclusions: [
      "Transfers (if option selected)",
      "Cruise Experience",
      "Welcome Drink",
      "Buffet Dinner",
      "Live Entertainment",
      "Dubai Creek Views and Landmarks",
      "Soft Drinks and Mineral Water",
      "Onboard facilities including washrooms"
    ],
    exclusions: [
      "Personal expenses on photography",
      "Alcoholic beverages",
      "Tips and gratuities"
    ],
    bookingPolicy: [
      "Please report to the venue 30 minutes prior to departure time",
      "No outside food and drinks allowed",
      "No eating, drinking, or smoking in transfer vehicle"
    ],
    cancellationPolicy: [
      "Free cancellation 72 hours prior to departure",
      "100% charge within 72 hours of departure",
      "Refund within 7 working days if eligible"
    ],
    childPolicy: [
      "Children under 3 years: Free entry",
      "Children 3-10 years: Child rate applies",
      "Above 10 years: Adult rate applies"
    ],
    tourAddOns: [
      { label: "Dhow Cruise Beverage Package- Add On", adultPrice: 1800, childPrice: 1800 }
    ],
    faqs: [
      { question: "What time does boarding start?", answer: "Boarding starts between 7:45 PM - 8:00 PM." },
      { question: "Is the cruise air-conditioned?", answer: "Yes, the lower deck is fully air-conditioned." }
    ]
  },
  "dhow-cruise-creek-upper": {
    id: "dhow-cruise-creek-upper",
    title: "Dhow Creek Cruise Dinner - Upper Deck with Transfers",
    shortDescription: "Enjoy an open-air dining experience on the upper deck of a traditional Arabian dhow cruising Dubai Creek.",
    location: "Dubai Creek, Dubai",
    city: "dubai",
    basePrice: 2436,
    childPrice: 2192.4,
    duration: "90 Minutes",
    rating: 4.8,
    reviews: 987,
    heroImages: [
      { src: dubaiDhowCruise, title: "Dubai Creek Night" },
      { src: dubaiSkylineSunset, title: "Open Air Cruise" }
    ],
    galleryImages: [
      { src: dubaiDhowCruise, alt: "Dubai Creek Cruise" },
      { src: dubaiSkylineNight, alt: "Dubai Skyline Night" },
      { src: dubaiCityNight, alt: "Dubai City Night" }
    ],
    highlights: [
      "Open-air upper deck experience",
      "Panoramic views of Dubai Creek",
      "Welcome drink and buffet dinner",
      "Live Tanura dance performance",
      "Traditional Arabian ambiance"
    ],
    description: {
      overview: "Experience Dubai Creek from the open-air upper deck of a traditional dhow.",
      whatToExpect: "Sail through the historic heart of Dubai aboard a traditional Arabian dhow on the partially open upper deck. Get astonishing views of ancient sandstone structures, Arabian bazaars and contemporary buildings along the creek. Relish an all-inclusive buffet dinner with both Vegetarian and Non-vegetarian specialties while watching the breathtaking Tanura show."
    },
    itinerary: [
      { time: "7:45 PM", title: "Boarding", description: "Boarding starts between 7:45 pm - 8:00 pm" },
      { time: "8:15 PM", title: "Departure", description: "Dhow sets sail" },
      { time: "8:30 PM", title: "Dinner & Shows", description: "Buffet dinner with live entertainment" },
      { time: "9:45 PM", title: "Return", description: "Return to dock" }
    ],
    tourTimings: ["8:00 PM"],
    inclusions: ["Transfers", "Cruise", "Welcome Drink", "Buffet Dinner", "Live Entertainment", "Soft Drinks"],
    exclusions: ["Alcoholic beverages", "Personal expenses", "Photography services"],
    bookingPolicy: ["Report 30 minutes before departure"],
    cancellationPolicy: ["Free cancellation 72 hours prior", "100% charge within 72 hours"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    tourAddOns: [
      { label: "Dhow Cruise Beverage Package- Add On", adultPrice: 1800, childPrice: 1800 }
    ],
    faqs: []
  },
  "desert-safari-shisha": {
    id: "desert-safari-shisha",
    title: "Desert Safari with Shisha on Table with Sharing Transfer",
    shortDescription: "Premium desert safari experience with private shisha service at your table and thrilling dune bashing.",
    location: "Dubai Desert, UAE",
    city: "dubai",
    basePrice: 5115.6,
    childPrice: 0,
    duration: "6 Hours",
    rating: 4.9,
    reviews: 2156,
    heroImages: [
      { src: dubaiDesertWoman, title: "Desert Safari" },
      { src: dubaiDesertCouple, title: "Dubai Desert" }
    ],
    galleryImages: [
      { src: dubaiDesertWoman, alt: "Desert Safari" },
      { src: dubaiDesertCouple, alt: "Desert Couple" },
      { src: dubaiDesertCouple2, alt: "Desert Adventure" }
    ],
    highlights: [
      "Thrilling dune bashing in 4x4 Land Cruiser",
      "Private shisha served at your table",
      "Camel riding experience",
      "BBQ buffet dinner",
      "Belly dance and fire show",
      "Sunset photography opportunity",
      "Butler service per table"
    ],
    description: {
      overview: "Discover the essence of Dubai with our captivating desert safari tour featuring premium shisha service at your table.",
      whatToExpect: "Experience the thrill of dune bashing in a 4X4 Land Cruiser as you cascade down steep sand dunes. At our desert campsite, soak in the ambiance of a traditional Bedouin-style tent. Enjoy flavored shisha served directly at your table, sip authentic Arabic coffee, and be captivated by mesmerizing performances under the starlit sky. Indulge in a delicious buffet dinner featuring Arabic delicacies."
    },
    itinerary: [
      { time: "2:30 PM", title: "Hotel Pickup", description: "Pickup from Dubai hotels" },
      { time: "4:00 PM", title: "Dune Bashing", description: "Thrilling 4x4 adventure" },
      { time: "5:00 PM", title: "Sunset Photos", description: "Capture the golden hour" },
      { time: "5:30 PM", title: "Camp Activities", description: "Camel riding, henna, shisha" },
      { time: "7:00 PM", title: "Dinner & Shows", description: "BBQ dinner with entertainment" },
      { time: "8:30 PM", title: "Return", description: "Drop-off at hotel" }
    ],
    tourTimings: ["2:30 PM - 3:00 PM"],
    inclusions: [
      "Hotel transfers",
      "Unlimited refreshments",
      "Dune bashing in AC 4x4",
      "BBQ dinner (veg & non-veg)",
      "Belly dance show",
      "Fire show",
      "Camel riding",
      "Shisha served on table",
      "Sufi dance show",
      "Khaliji show",
      "Dabka + Drummers show"
    ],
    exclusions: [
      "Personal shopping expenses",
      "Professional photography (extra charge)"
    ],
    bookingPolicy: [
      "Not recommended for pregnant women or those with back issues",
      "Infants not allowed for dune bashing",
      "Children under 16 not allowed for shisha",
      "No heavy luggage allowed"
    ],
    cancellationPolicy: ["Free cancellation 72 hours prior", "100% charge within 72 hours"],
    childPolicy: ["This experience is not suitable for children"],
    faqs: [
      { question: "Is dune bashing safe?", answer: "Yes, experienced drivers and modern vehicles ensure safety. However, it's not recommended for pregnant women or those with back problems." }
    ]
  },
  "desert-safari-sharing": {
    id: "desert-safari-sharing",
    title: "Desert Safari with Sharing Transfer",
    shortDescription: "Classic desert safari experience with dune bashing, camel riding, and BBQ dinner under the stars.",
    location: "Dubai Desert, UAE",
    city: "dubai",
    basePrice: 3532,
    childPrice: 3410,
    duration: "6 Hours",
    rating: 4.8,
    reviews: 3421,
    heroImages: [
      { src: dubaiDesertCouple2, title: "Desert Adventure" },
      { src: dubaiDesertWoman, title: "Desert Woman" }
    ],
    galleryImages: [
      { src: dubaiDesertCouple2, alt: "Desert Couple" },
      { src: dubaiDesertCouple, alt: "Desert Photography" },
      { src: dubaiDesertWoman, alt: "Desert Woman" }
    ],
    highlights: [
      "Dune bashing in AC 4x4",
      "Camel riding",
      "Sunset photography",
      "BBQ buffet dinner",
      "Live entertainment shows",
      "Shisha corner access"
    ],
    tourOptions: [
      { label: "Desert Safari with Sharing Transfer", adultPrice: 3532, childPrice: 3410 },
      { label: "Desert Safari with Shisha on Table with Sharing Transfer", adultPrice: 5116, childPrice: 3410 }
    ],
    tourAddOns: [
      { label: "Desert Safari Beverage Package (Add On Only)", adultPrice: 1400 }
    ],
    description: {
      overview: "The classic Dubai desert safari experience with all essential activities included.",
      whatToExpect: "Experience the thrill of dune bashing, enjoy camel riding, watch stunning sunset, and indulge in BBQ dinner with live entertainment including belly dance and fire shows."
    },
    itinerary: [
      { time: "2:30 PM", title: "Pickup", description: "Hotel pickup" },
      { time: "4:00 PM", title: "Dune Bashing", description: "4x4 adventure" },
      { time: "5:00 PM", title: "Sunset", description: "Photo opportunity" },
      { time: "5:30 PM", title: "Camp", description: "Activities and dinner" },
      { time: "8:30 PM", title: "Return", description: "Drop-off" }
    ],
    tourTimings: ["2:30 PM - 3:00 PM"],
    inclusions: ["Transfers", "Refreshments", "Dune bashing", "BBQ dinner", "Shows", "Camel riding", "Shisha corner access"],
    exclusions: ["Personal expenses", "Professional photography"],
    bookingPolicy: ["Not for pregnant women", "Infants not allowed for dune bashing"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "dubai-city-tour": {
    id: "dubai-city-tour",
    title: "Dubai City Tour",
    shortDescription: "Comprehensive tour of Dubai's iconic landmarks including Burj Al Arab, Dubai Frame, and traditional souks.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 1462,
    childPrice: 1827,
    duration: "6 Hours",
    rating: 4.6,
    reviews: 1876,
    heroImages: [
      { src: dubaiSkylineSunset, title: "Dubai City" },
      { src: dubaiSkylineNight, title: "Dubai Skyline Night" }
    ],
    galleryImages: [
      { src: dubaiSkylineSunset, alt: "Dubai Skyline Sunset" },
      { src: dubaiSkylineNight, alt: "Dubai Night" },
      { src: dubaiCityNight, alt: "Dubai City Night" }
    ],
    highlights: [
      "Zabeel Palace photo stop",
      "Dubai Frame photo opportunity",
      "Bastakiya neighborhood exploration",
      "Abra ride on Dubai Creek",
      "Spice and Gold Souk visit",
      "Burj Al Arab photo stop",
      "View of Atlantis The Palm"
    ],
    tourOptions: [
      { label: "Dubai City Tour", adultPrice: 1462, childPrice: 1827 },
      { label: "Dubai City Tour with Dubai Mall with Transfers", adultPrice: 2072, childPrice: 2436 }
    ],
    description: {
      overview: "Discover the best of Dubai on this comprehensive city tour covering historical and modern landmarks.",
      whatToExpect: "Begin at the iconic Zabeel Palace for a photo stop. Move to Dubai Frame for timeless snapshots. Explore the charming Bastakiya neighborhood with traditional architecture. Board an Abra for a delightful ride on Dubai Creek. Visit the Spice Souq and Gold Souq. Drive through Al Qasr and head to The Pointe for views of Atlantis The Palm."
    },
    itinerary: [
      { time: "8:30 AM", title: "Pickup", description: "Hotel pickup" },
      { time: "9:00 AM", title: "Zabeel Palace", description: "Photo stop" },
      { time: "9:30 AM", title: "Dubai Frame", description: "Photo opportunity" },
      { time: "10:30 AM", title: "Bastakiya", description: "Heritage walk" },
      { time: "11:30 AM", title: "Abra Ride", description: "Cross Dubai Creek" },
      { time: "12:00 PM", title: "Souks", description: "Spice and Gold souks" },
      { time: "1:30 PM", title: "Burj Al Arab", description: "Photo stop" },
      { time: "2:30 PM", title: "Return", description: "Drop-off" }
    ],
    tourTimings: ["8:30 AM"],
    inclusions: ["Hotel transfers", "All photo stops", "Abra ride", "Souk visits", "Air-conditioned vehicle", "English guide"],
    exclusions: ["Lunch", "Shopping expenses", "Entry tickets to attractions"],
    bookingPolicy: ["Dress modestly for religious sites", "Sharing transfers from central Dubai hotels"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "dubai-city-tour-mall": {
    id: "dubai-city-tour-mall",
    title: "Dubai City Tour with Dubai Mall",
    shortDescription: "Complete Dubai city tour including visit to the world-famous Dubai Mall.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 2070.6,
    childPrice: 2436,
    duration: "6 Hours",
    rating: 4.7,
    reviews: 1543,
    heroImages: [
      { src: dubaiSkylineNight, title: "Dubai Mall" },
      { src: dubaiGlobalVillage, title: "Dubai Mall Interior" }
    ],
    galleryImages: [
      { src: dubaiSkylineNight, alt: "Dubai Skyline Night" },
      { src: dubaiGlobalVillage, alt: "Dubai Mall" },
      { src: dubaiCityNight, alt: "Dubai City" }
    ],
    highlights: [
      "All Dubai City Tour highlights",
      "Dubai Mall visit",
      "Drive through Atlantis The Palm"
    ],
    description: {
      overview: "Experience the complete Dubai city tour with additional time at Dubai Mall.",
      whatToExpect: "All the highlights of the Dubai City Tour plus extended time at Dubai Mall, surrounded by the wonders of the city."
    },
    itinerary: [
      { time: "8:30 AM", title: "Pickup", description: "Hotel pickup" },
      { time: "9:00 AM", title: "City Tour", description: "Visit all major landmarks" },
      { time: "1:00 PM", title: "Dubai Mall", description: "Free time at mall" },
      { time: "2:30 PM", title: "Return", description: "Drop-off" }
    ],
    tourTimings: ["8:30 AM"],
    inclusions: ["Transfers", "All city tour inclusions", "Dubai Mall visit"],
    exclusions: ["Lunch", "Shopping", "Entry tickets"],
    bookingPolicy: ["Dress modestly"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "dhow-cruise-marina-lower": {
    id: "dhow-cruise-marina-lower",
    title: "Dhow Dinner Cruise Marina - Lower Deck with Transfers",
    shortDescription: "Elegant cruise along Dubai Marina's Venetian-styled canal with international cuisine and stunning views.",
    location: "Dubai Marina, UAE",
    city: "dubai",
    basePrice: 3654,
    childPrice: 3654,
    duration: "90 Minutes",
    rating: 4.8,
    reviews: 1654,
    heroImages: [
      { src: dubaiDhowCruise, title: "Dubai Marina" },
      { src: dubaiSkylineNight, title: "Dubai Marina Night" }
    ],
    galleryImages: [
      { src: dubaiDhowCruise, alt: "Dhow Cruise" },
      { src: dubaiSkylineNight, alt: "Dubai Night" },
      { src: dubaiCityNight, alt: "Dubai City" }
    ],
    highlights: [
      "Cruise along Dubai Marina",
      "Venetian-styled canal views",
      "Modern Dubai skyline",
      "International buffet dinner",
      "Live Tanura performance"
    ],
    description: {
      overview: "Experience a 90-minute classy cruise along Dubai Marina's Venetian styled canal.",
      whatToExpect: "This traditional dhow offers the best views of modern Dubai from unexpected angles. Witness the glorious architectures of Dubai while feasting on international cuisines. Entertainment arranged onboard while you enjoy savory dishes and complimentary drinks."
    },
    itinerary: [
      { time: "7:45 PM", title: "Boarding", description: "Board the dhow" },
      { time: "8:00 PM", title: "Welcome", description: "Welcome drink" },
      { time: "8:15 PM", title: "Cruise", description: "Sail Dubai Marina" },
      { time: "9:30 PM", title: "Return", description: "End of cruise" }
    ],
    tourTimings: ["8:00 PM"],
    inclusions: ["Transfers", "Cruise", "Welcome Drink", "Buffet Dinner", "Entertainment", "Soft Drinks"],
    exclusions: ["Alcoholic beverages", "Personal expenses"],
    bookingPolicy: ["Report 30 minutes early"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "dhow-cruise-marina-upper": {
    id: "dhow-cruise-marina-upper",
    title: "Dhow Dinner Cruise Marina - Upper Deck with Transfers",
    shortDescription: "Premium open-air dining experience on Dubai Marina with panoramic views of modern Dubai.",
    location: "Dubai Marina, UAE",
    city: "dubai",
    basePrice: 4384.8,
    childPrice: 4384.8,
    duration: "90 Minutes",
    rating: 4.9,
    reviews: 1234,
    heroImages: [
      { src: dubaiDhowCruise, title: "Marina Upper Deck" },
      { src: dubaiSkylineSunset, title: "Dubai Sunset" }
    ],
    galleryImages: [
      { src: dubaiDhowCruise, alt: "Dhow Cruise" },
      { src: dubaiSkylineSunset, alt: "Dubai Sunset" },
      { src: dubaiCityNight, alt: "Dubai City Night" }
    ],
    highlights: [
      "Open-air upper deck",
      "Unobstructed Marina views",
      "Premium dining experience",
      "Live entertainment"
    ],
    description: {
      overview: "Premium upper deck experience along Dubai Marina.",
      whatToExpect: "Enjoy the best views from the partially open upper deck as you cruise through modern Dubai's stunning marina with international cuisine and live entertainment."
    },
    itinerary: [
      { time: "7:45 PM", title: "Boarding", description: "Board the dhow" },
      { time: "8:15 PM", title: "Cruise", description: "Sail Dubai Marina" },
      { time: "9:30 PM", title: "Return", description: "End of cruise" }
    ],
    tourTimings: ["8:00 PM"],
    inclusions: ["Transfers", "Cruise", "Dinner", "Entertainment", "Drinks"],
    exclusions: ["Alcohol", "Personal expenses"],
    bookingPolicy: ["Report 30 minutes early"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "global-village-dubai": {
    id: "global-village-dubai",
    title: "Global Village Dubai",
    shortDescription: "Explore 32 pavilions representing 75+ countries at Dubai's largest cultural and entertainment destination.",
    location: "Global Village, Dubai",
    city: "dubai",
    basePrice: 3288.6,
    childPrice: 3166.8,
    duration: "Full Day",
    rating: 4.7,
    reviews: 2345,
    heroImages: [
      { src: dubaiGlobalVillage, title: "Global Village" },
      { src: dubaiGlobalVillage2, title: "Global Village Entertainment" },
      { src: dubaiGlobalVillage3, title: "Global Village Night" }
    ],
    galleryImages: [
      { src: dubaiGlobalVillage, alt: "Global Village" },
      { src: dubaiGlobalVillage2, alt: "Global Village Entertainment" },
      { src: dubaiGlobalVillage3, alt: "Global Village Night" }
    ],
    highlights: [
      "32 pavilions from 75+ countries",
      "Thrilling rides and attractions",
      "Diverse international cuisines",
      "Cultural shows and concerts",
      "Unique shopping experience",
      "Wheel of the World (Ferris Wheel)"
    ],
    description: {
      overview: "Dubai's iconic Global Village - the region's largest shopping and entertainment attraction.",
      whatToExpect: "Explore the world in a day at this open-air multi-cultural entertainment complex with close to 30 pavilions representing about 80 countries. Discover authentic culture, heritage and culinary flavors. Watch cultural shows and acrobatic performances. Enjoy attractions like Carnaval fun fair, Wheel of the World, and Circus! Circus!"
    },
    itinerary: [
      { time: "4:00 PM", title: "Pickup", description: "Hotel pickup" },
      { time: "5:00 PM", title: "Arrival", description: "Arrive at Global Village" },
      { time: "5:00-10:00 PM", title: "Exploration", description: "Free time to explore" },
      { time: "10:30 PM", title: "Return", description: "Drop-off" }
    ],
    tourTimings: [],
    inclusions: ["Transfers", "Entry ticket", "Access to 75+ pavilions"],
    exclusions: ["Food and shopping", "Rides and games", "Souvenirs"],
    bookingPolicy: ["Bring valid photo ID", "Children must wear safety wristband", "No pets allowed", "No outside food"],
    cancellationPolicy: ["100% charge for all cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-65: Adult rate"],
    faqs: []
  },
  "abu-dhabi-city-tour": {
    id: "abu-dhabi-city-tour",
    title: "Abu Dhabi City Tour",
    shortDescription: "Explore the UAE capital including the magnificent Sheikh Zayed Grand Mosque and cultural landmarks.",
    location: "Abu Dhabi, UAE",
    city: "dubai",
    basePrice: 3290,
    childPrice: 3290,
    duration: "Full Day",
    rating: 4.8,
    reviews: 1987,
    heroImages: [
      { src: dubaiSkylineSunset, title: "Abu Dhabi" },
      { src: dubaiSkylineNight, title: "Abu Dhabi Night" }
    ],
    galleryImages: [
      { src: dubaiSkylineSunset, alt: "Abu Dhabi Skyline" },
      { src: dubaiSkylineNight, alt: "Abu Dhabi Night" },
      { src: dubaiCityNight, alt: "City Night" }
    ],
    highlights: [
      "Sheikh Zayed Grand Mosque visit",
      "Abu Dhabi Corniche drive",
      "Emirates Palace view",
      "BAPS Mandir visit",
      "Islamic Art House"
    ],
    tourOptions: [
      { label: "Abu Dhabi City Tour", adultPrice: 3290, childPrice: 3290 },
      { label: "Abu Dhabi City Tour + Ferrari World Ticket with Transfer", adultPrice: 9745, childPrice: 9745 }
    ],
    description: {
      overview: "An unforgettable journey through the heart of the UAE capital.",
      whatToExpect: "Discover iconic landmarks, architectural marvels, and vibrant heritage that define Abu Dhabi. From modern marvels to ancient wonders, this excursion promises a comprehensive experience of this dynamic destination."
    },
    itinerary: [
      { time: "8:00 AM", title: "Pickup", description: "Dubai hotel pickup" },
      { time: "10:00 AM", title: "Grand Mosque", description: "Visit Sheikh Zayed Mosque" },
      { time: "12:00 PM", title: "Lunch Break", description: "At Marina Mall (own expense)" },
      { time: "2:00 PM", title: "City Tour", description: "Corniche, Emirates Palace" },
      { time: "5:00 PM", title: "Return", description: "Return to Dubai" }
    ],
    tourTimings: ["8:00 AM"],
    inclusions: ["Round-trip transfers from Dubai", "Abu Dhabi City Tour", "All mentioned visits"],
    exclusions: ["Lunch", "Personal expenses", "Tips"],
    bookingPolicy: ["Moderate dressing for Grand Mosque", "Physical ID required for BAPS Mandir"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "abu-dhabi-ferrari-world": {
    id: "abu-dhabi-ferrari-world",
    title: "Abu Dhabi City Tour + Ferrari World Ticket with Transfer",
    shortDescription: "Combine Abu Dhabi sightseeing with the thrill of Ferrari World theme park.",
    location: "Abu Dhabi, UAE",
    city: "dubai",
    basePrice: 9744,
    childPrice: 9744,
    duration: "Full Day",
    rating: 4.9,
    reviews: 1567,
    heroImages: [
      { src: dubaiSkylineNight, title: "Ferrari World" },
      { src: dubaiSkylineSunset, title: "Abu Dhabi" }
    ],
    galleryImages: [
      { src: dubaiSkylineNight, alt: "Dubai Skyline" },
      { src: dubaiSkylineSunset, alt: "Abu Dhabi" },
      { src: dubaiCityNight, alt: "City Night" }
    ],
    highlights: [
      "Sheikh Zayed Grand Mosque",
      "Ferrari World Abu Dhabi",
      "World's fastest roller coaster",
      "BAPS Mandir visit",
      "Abu Dhabi landmarks"
    ],
    description: {
      overview: "An extraordinary expedition combining Abu Dhabi's grandeur with Ferrari World excitement.",
      whatToExpect: "Discover the awe-inspiring Sheikh Zayed Grand Mosque, journey through Al Bateen's palaces, and experience the thrill of Ferrari World with heart-pounding rides and interactive exhibits."
    },
    itinerary: [
      { time: "8:00 AM", title: "Pickup", description: "Dubai hotel pickup" },
      { time: "10:00 AM", title: "Grand Mosque", description: "Visit the mosque" },
      { time: "12:00 PM", title: "City Tour", description: "Abu Dhabi landmarks" },
      { time: "2:00 PM", title: "Ferrari World", description: "Theme park visit" },
      { time: "6:00 PM", title: "Return", description: "Return to Dubai" }
    ],
    tourTimings: ["8:00 AM"],
    inclusions: ["Dubai transfers", "Grand Mosque visit", "Ferrari World ticket", "City tour"],
    exclusions: ["Lunch", "Personal expenses"],
    bookingPolicy: ["Dress modestly for mosque", "Physical ID required for BAPS Mandir"],
    cancellationPolicy: ["Free cancellation 72 hours prior", "100% charge within 72 hours"],
    childPolicy: ["Under 2: Free at Ferrari World", "Above 3: Paid admission required"],
    faqs: []
  },
  "dubai-aquarium-penguin": {
    id: "dubai-aquarium-penguin",
    title: "Dubai Aquarium and Underwater Zoo with Penguin Cove",
    shortDescription: "Explore one of the world's largest suspended aquariums with 30,000+ aquatic animals.",
    location: "Dubai Mall, Dubai",
    city: "dubai",
    basePrice: 4020,
    childPrice: 4020,
    duration: "2-3 Hours",
    rating: 4.7,
    reviews: 2134,
    heroImages: [
      { src: dubaiAquariumFish, title: "Dubai Aquarium" },
      { src: dubaiSkylineNight, title: "Dubai Mall" }
    ],
    galleryImages: [
      { src: dubaiAquariumFish, alt: "Aquarium Fish" },
      { src: dubaiSkylineNight, alt: "Dubai Skyline" }
    ],
    highlights: [
      "10-million liter water tank",
      "30,000+ aquatic animals",
      "Giant crocodile (750 kg)",
      "Penguin Cove experience",
      "Underwater tunnel walk",
      "Sharks and rays"
    ],
    tourOptions: [
      { label: "Dubai Aquarium and Underwater Zoo with Penguin Cove", adultPrice: 4020, childPrice: 4020 },
      { label: "Dubai Aquarium and Underwater Zoo with Penguin Cove with Transfer", adultPrice: 5360, childPrice: 5360 }
    ],
    description: {
      overview: "One of its kind center-piece of Dubai Mall, home to more than 30,000 aquatic animals.",
      whatToExpect: "See the 40-year-old giant crocodile weighing 750 kg, along with pelagic fish, piranha, penguins, lizards, snakes, rays, and sharks. Walk through the tunnel and explore the underwater zoo. The largest suspended aquarium in the world!"
    },
    itinerary: [
      { time: "Flexible", title: "Entry", description: "Enter at your convenience" },
      { time: "1 Hour", title: "Aquarium", description: "Explore main tank and tunnel" },
      { time: "1 Hour", title: "Underwater Zoo", description: "Visit all exhibits" },
      { time: "30 Min", title: "Penguin Cove", description: "See the penguins" }
    ],
    tourTimings: ["Open during Dubai Mall hours"],
    inclusions: ["Aquarium entry", "Underwater Zoo access", "Penguin Cove access"],
    exclusions: ["Transfers", "Food", "Glass boat (separate ticket)"],
    bookingPolicy: ["Arrive 15 minutes before", "Children must be accompanied by adult"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 2: Free", "2-15: Must be accompanied by adult"],
    faqs: []
  },
  "burj-khalifa-non-prime": {
    id: "burj-khalifa-non-prime",
    title: "Burj Khalifa 124th + 125th Floor: Non Prime Hours",
    shortDescription: "Visit the world's tallest building during non-prime hours for the best value.",
    location: "Downtown Dubai, UAE",
    city: "dubai",
    basePrice: 6090,
    childPrice: 4872,
    duration: "1-2 Hours",
    rating: 4.9,
    reviews: 4567,
    heroImages: [
      { src: dubaiSkylineNight, title: "Burj Khalifa" },
      { src: dubaiSkylineSunset, title: "Dubai Skyline" }
    ],
    galleryImages: [
      { src: dubaiSkylineNight, alt: "Burj Khalifa Night" },
      { src: dubaiSkylineSunset, alt: "Dubai Sunset" },
      { src: dubaiCityNight, alt: "Dubai City" }
    ],
    highlights: [
      "124th & 125th floor access",
      "Panoramic Dubai views",
      "High-speed elevator ride",
      "Interactive displays",
      "Telescopes available"
    ],
    tourOptions: [
      { label: "Burj Khalifa- 124th + 125th Floor: Non Prime Hours- Silver (Morning: 07:00 - 11:30 a.m., Night: 20:30 - 23:00 p.m.)", adultPrice: 6090, childPrice: 4872 },
      { label: "Burj Khalifa- 124th + 125th Floor: Non Prime Hours with Transfers", adultPrice: 6821, childPrice: 6699 }
    ],
    description: {
      overview: "An unforgettable journey into the heart of Dubai's skyline at the world's tallest building.",
      whatToExpect: "Enter the iconic tower through a lavish lobby. Board high-speed elevators with mesmerizing glimpses of the cityscape through glass panels. Arrive at observation decks with panoramic views from the glittering Arabian Gulf to sprawling desert landscapes."
    },
    itinerary: [
      { time: "Chosen Slot", title: "Entry", description: "Enter at your booked time" },
      { time: "5 Min", title: "Elevator", description: "High-speed ride to top" },
      { time: "1 Hour", title: "Observation", description: "Explore both floors" }
    ],
    tourTimings: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"],
    inclusions: ["Entry to 124th & 125th floor", "Observation deck access"],
    exclusions: ["Transfers", "Food", "Souvenirs"],
    bookingPolicy: ["Valid photo ID required", "Booking valid for selected date/time only", "Children must be accompanied"],
    cancellationPolicy: ["100% charge for all cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-8: Child rate", "Above 8: Adult rate"],
    faqs: []
  },
  "burj-khalifa-prime": {
    id: "burj-khalifa-prime",
    title: "Burj Khalifa 124th + 125th Floor: Prime Hours",
    shortDescription: "Experience stunning sunset views from the world's tallest building during prime hours.",
    location: "Downtown Dubai, UAE",
    city: "dubai",
    basePrice: 8526,
    childPrice: 7308,
    duration: "1-2 Hours",
    rating: 4.9,
    reviews: 3456,
    heroImages: [
      { src: dubaiSkylineSunset, title: "Burj Khalifa Sunset" },
      { src: dubaiSkylineNight, title: "Dubai Night" }
    ],
    galleryImages: [
      { src: dubaiSkylineSunset, alt: "Burj Khalifa Sunset" },
      { src: dubaiSkylineNight, alt: "Dubai Skyline Night" }
    ],
    highlights: [
      "Prime time sunset views",
      "124th & 125th floor access",
      "Golden hour photography",
      "City transformation views"
    ],
    tourOptions: [
      { label: "Burj Khalifa- 124th + 125th Floor: Prime Hours", adultPrice: 8526, childPrice: 7308 },
      { label: "Burj Khalifa- 124th + 125th Floor: Prime Hours with Transfers", adultPrice: 9623, childPrice: 9500 }
    ],
    description: {
      overview: "Experience Burj Khalifa during the magical prime hours.",
      whatToExpect: "Witness Dubai transform from day to night from the world's highest observation deck. Prime hours offer the best lighting for photography and the magical experience of watching the city light up."
    },
    itinerary: [
      { time: "Chosen Slot", title: "Entry", description: "Enter at your booked time" },
      { time: "1 Hour", title: "Observation", description: "Explore and photograph" }
    ],
    tourTimings: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Entry to 124th & 125th floor"],
    exclusions: ["Transfers", "Food"],
    bookingPolicy: ["Valid photo ID required", "Booking valid for selected date/time only"],
    cancellationPolicy: ["100% charge for all cancellations"],
    childPolicy: ["Under 3: Free", "3-8: Child rate", "Above 8: Adult rate"],
    faqs: []
  },
  "dubai-dolphin-show": {
    id: "dubai-dolphin-show",
    title: "Dubai Dolphin & Seal Show Ticket with Transfer",
    shortDescription: "Interactive dolphin and seal show at Dubai's only fully air-conditioned dolphinarium.",
    location: "Dubai Creek Park, Dubai",
    city: "dubai",
    basePrice: 3532.2,
    childPrice: 3532.2,
    duration: "2.5 Hours",
    rating: 4.6,
    reviews: 1234,
    heroImages: [
      { src: dubaiAquariumFish, title: "Dolphin Show" },
      { src: dubaiSkylineSunset, title: "Dubai" }
    ],
    galleryImages: [
      { src: dubaiAquariumFish, alt: "Marine Life" },
      { src: dubaiSkylineSunset, alt: "Dubai Skyline" }
    ],
    highlights: [
      "45-minute dolphin & seal show",
      "180-degree amphitheatre",
      "Air-conditioned venue",
      "Interactive experience",
      "Marine life education"
    ],
    description: {
      overview: "Meet intelligent dolphins and seals at Dubai's only fully air-conditioned dolphinarium.",
      whatToExpect: "The 45-minute dolphin and seal shows are held in a 180-degree amphitheatre with state-of-the-art light and sound technology. The impressive performances are enjoyed by kids and adults alike. Interact with these intelligent animals and learn about marine life from expert trainers."
    },
    itinerary: [
      { time: "10:00 AM", title: "Pickup", description: "Hotel pickup" },
      { time: "11:00 AM", title: "Show", description: "Dolphin & Seal performance" },
      { time: "12:30 PM", title: "Return", description: "Drop-off at hotel" }
    ],
    tourTimings: ["11:00 AM"],
    inclusions: ["Transfers", "Show admission", "45-minute live show"],
    exclusions: ["Photography", "Dining", "Souvenirs"],
    bookingPolicy: ["Report on time", "Children must be accompanied"],
    cancellationPolicy: ["Free cancellation 72 hours prior"],
    childPolicy: ["Under 2: Free", "2-11: Child rate", "Above 11: Adult rate"],
    faqs: []
  },
  "miracle-garden-dubai": {
    id: "miracle-garden-dubai",
    title: "Miracle Garden Dubai",
    shortDescription: "Visit the world's largest natural flower garden with over 100 million blooming flowers.",
    location: "Al Barsha South, Dubai",
    city: "dubai",
    basePrice: 2560,
    childPrice: 2560,
    duration: "3-4 Hours",
    rating: 4.8,
    reviews: 3456,
    heroImages: [
      { src: dubaiGlobalVillage, title: "Miracle Garden" },
      { src: dubaiCityNight, title: "Dubai Night" }
    ],
    galleryImages: [
      { src: dubaiGlobalVillage, alt: "Miracle Garden" },
      { src: dubaiCityNight, alt: "Dubai Night" },
      { src: dubaiSkylineSunset, alt: "Dubai Sunset" }
    ],
    highlights: [
      "72,000 square meters of gardens",
      "100+ million blooming flowers",
      "70+ rare floral species",
      "World's largest flower wall",
      "Themed garden sections",
      "Iconic floral structures"
    ],
    tourOptions: [
      { label: "Miracle Garden Dubai", adultPrice: 2560, childPrice: 2560 },
      { label: "Miracle Garden Dubai with Transfer", adultPrice: 4145, childPrice: 4020 }
    ],
    description: {
      overview: "A botanical paradise spanning 72,000 square meters in the middle of the desert.",
      whatToExpect: "Stroll along manicured themed gardens and pathways, admire unique structures and water features all decked up with vivid arrays of flowers and plants. The garden features over 100 million blooming flowers from 70+ rare, exotic and indigenous floral species. Recognized by Guinness Book of World Records for its astonishing flower wall."
    },
    itinerary: [
      { time: "Flexible", title: "Entry", description: "Enter the garden" },
      { time: "2-3 Hours", title: "Exploration", description: "Walk through themed sections" },
      { time: "", title: "Photo Ops", description: "Capture the colorful landscapes" }
    ],
    tourTimings: ["9:00 AM - 9:00 PM"],
    inclusions: ["Garden entry", "Access to all themed sections", "Photo opportunities", "Restrooms and food outlets access"],
    exclusions: ["Food and dining", "Souvenirs", "Transfers (unless selected)"],
    bookingPolicy: ["Comfortable walking shoes recommended", "Subject to weather conditions"],
    cancellationPolicy: ["100% charge for all cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: [
      { question: "When is Miracle Garden open?", answer: "The garden is seasonal, typically open from November to May. Check the official website for current dates." }
    ]
  },
  "dubai-fountain-show": {
    id: "dubai-fountain-show",
    title: "Dubai Fountain Show with Lake Ride Tickets",
    shortDescription: "Experience the world's largest choreographed fountain system with an exclusive lake ride on Burj Khalifa Lake.",
    location: "Downtown Dubai, UAE",
    city: "dubai",
    basePrice: 2071,
    childPrice: 2070,
    duration: "1 Hour",
    rating: 4.8,
    reviews: 2876,
    heroImages: [
      { src: dubaiFountainShow, title: "Dubai Fountain Show" },
      { src: dubaiSkylineNight, title: "Burj Khalifa Lake" }
    ],
    galleryImages: [
      { src: dubaiFountainShow, alt: "Dubai Fountain Show" },
      { src: dubaiSkylineNight, alt: "Dubai Skyline Night" },
      { src: dubaiCityNight, alt: "Dubai Night" }
    ],
    highlights: [
      "World's largest choreographed fountain system",
      "Traditional Abra lake ride on Burj Khalifa Lake",
      "Stunning views of Burj Khalifa",
      "Water jets shooting up to 150 meters",
      "Illuminated fountain performance synchronized with music",
      "Unique perspective from the water"
    ],
    description: {
      overview: "Witness the spectacular Dubai Fountain, the world's largest choreographed fountain system, set on the 30-acre Burj Khalifa Lake.",
      whatToExpect: "Board a traditional Abra boat and glide across the Burj Khalifa Lake for an up-close experience of the Dubai Fountain show. Watch as water jets shoot up to 150 meters high, choreographed to music and illuminated by 6,600 lights and 25 color projectors. The show creates a mesmerizing display that combines water, music, and light against the backdrop of the world's tallest building. Each show lasts approximately 5 minutes, and your lake ride gives you the best seats in the house."
    },
    itinerary: [
      { time: "Selected Time", title: "Arrival", description: "Arrive at the boarding point near Dubai Mall waterfront promenade" },
      { time: "5 Min Before Show", title: "Boarding", description: "Board the traditional Abra boat" },
      { time: "Show Time", title: "Fountain Show", description: "Enjoy the spectacular fountain performance from the lake" },
      { time: "After Show", title: "Return", description: "Return to the boarding point" }
    ],
    tourTimings: ["17:45", "18:15", "18:45", "19:15", "19:45", "20:15", "20:45", "21:15", "21:45", "22:15", "22:45"],
    inclusions: ["Lake ride on traditional Abra boat", "Dubai Fountain show viewing", "Life jackets provided", "Spectacular views of Burj Khalifa"],
    exclusions: ["Transfers to/from hotel", "Food and beverages", "Photography services", "Tips and gratuities"],
    bookingPolicy: ["Arrive 15 minutes before selected show time", "Valid photo ID required", "Children must be accompanied by an adult", "Subject to weather conditions"],
    cancellationPolicy: ["Free cancellation 72 hours prior", "100% charge within 72 hours"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: [
      { question: "How long is the fountain show?", answer: "Each fountain show lasts approximately 5 minutes. The lake ride is approximately 25 minutes total." },
      { question: "What is the best time for the show?", answer: "Evening shows after sunset offer the most spectacular views with the illuminated fountains against the night sky." },
      { question: "Is the lake ride safe?", answer: "Yes, all boats are equipped with safety gear and life jackets. Professional boatmen operate the traditional Abra boats." }
    ]
  },
  // Singapore Tours
  "singapore-city-tour": {
    id: "singapore-city-tour",
    title: "Singapore City Tour with Guide and Transfer",
    shortDescription: "Explore iconic landmarks like Suntec City, Fountain of Wealth, Merlion Park, Little India and Chinatown with guide and transfers.",
    location: "Singapore",
    city: "singapore",
    basePrice: 1815,
    childPrice: 1690.5,
    minAdults: 2,
    duration: "Half Day",
    rating: 4.7,
    reviews: 1234,
    heroImages: [
      { src: singaporeMarinaByNight, title: "Singapore Skyline" }
    ],
    galleryImages: [
      { src: singaporeMarinaByDay, alt: "Marina Bay Sands Day" },
      { src: singaporeWomanCityscape, alt: "Tourist at Singapore" },
      { src: singaporeMerlionNight, alt: "Merlion at Night" }
    ],
    highlights: [
      "Suntec City & Fountain of Wealth",
      "Merlion Park",
      "Little India exploration",
      "Chinatown & Buddha Temple",
      "Hotel transfers included"
    ],
    description: {
      overview: "Embark on a Singapore city tour with a knowledgeable guide to explore the best of this modern and diverse city.",
      whatToExpect: "Visit iconic landmarks like Suntec City, Fountain of Wealth and Merlion Park. Experience the cultural vibrancy of Little India and Chinatown. Discover the beauty of Gardens by the Bay and the historical charm of Colonial District. Enjoy a memorable journey filled with fascinating history, stunning architecture, and a taste of Singapore's rich multicultural heritage. Minimum 2 adults required."
    },
    itinerary: [
      { time: "Start", title: "Little India", description: "Begin tour from Little India" },
      { time: "", title: "Beach Road", description: "Drive through Beach Road area" },
      { time: "", title: "Suntec City", description: "Visit Suntec City and Fountain of Wealth" },
      { time: "", title: "Merlion Park", description: "See the iconic Merlion statue" },
      { time: "", title: "Chinatown", description: "Explore Chinatown and Buddha Temple" },
      { time: "End", title: "Return", description: "Return to hotel" }
    ],
    tourTimings: ["09:00 AM", "02:00 PM"],
    inclusions: ["City tour with knowledgeable guide", "Suntec City & Fountain of Wealth", "Merlion Park", "Little India & Chinatown exploration", "Hotel pick-up and drop-off"],
    exclusions: ["Personal expenses for shopping, drinks and dining"],
    bookingPolicy: ["Minimum 2 adults required", "Be ready in hotel lobby 15 minutes before pickup", "Provide accurate hotel address", "Carry valid ID/passport"],
    cancellationPolicy: ["Free cancellation 84 hours prior", "100% charge within 84 hours"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "night-safari-tickets": {
    id: "night-safari-tickets",
    title: "Night Safari Singapore",
    shortDescription: "Experience a unique adventure to witness nocturnal animals in their natural settings across 7 climate zones.",
    location: "Mandai, Singapore",
    city: "singapore",
    basePrice: 4470,
    childPrice: 4347,
    minAdults: 1,
    duration: "3-4 Hours",
    rating: 4.8,
    reviews: 2345,
    heroImages: [
      { src: singaporeGardensByNight, title: "Night Safari" }
    ],
    galleryImages: [
      { src: singaporeMerlionNight, alt: "Merlion Night" },
      { src: singaporeGardensByNight, alt: "Gardens by Night" },
      { src: singaporeWomanCityscape, alt: "City View" }
    ],
    highlights: [
      "7 climate zones",
      "Tram ride through habitats",
      "Nocturnal animals viewing",
      "Moonlit walking trails",
      "Flying squirrels & Malayan flying foxes"
    ],
    description: {
      overview: "Experience the Singapore Night Safari Tour – a unique adventure to witness nocturnal animals in their natural settings.",
      whatToExpect: "Take a tram ride or walk the moonlit trails, spotting rare creatures like flying squirrels and Malayan flying foxes. An unforgettable wildlife encounter under the stars across 7 different climate zones."
    },
    itinerary: [
      { time: "Evening", title: "Arrival", description: "Arrive at Night Safari" },
      { time: "", title: "Tram Ride", description: "Board the tram for guided tour" },
      { time: "", title: "Walking Trails", description: "Explore on foot" }
    ],
    tourTimings: ["7:15 PM onwards"],
    tourOptions: [
      {
        label: "Singapore Night Safari Ticket Only",
        adultPrice: 4470,
        childPrice: 4347
      },
      {
        label: "Singapore Night Safari with Sharing Transfers",
        adultPrice: 4955,
        childPrice: 4830
      },
      {
        label: "Night Safari Singapore with Indian Dinner & Transfer",
        adultPrice: 6500,
        childPrice: 6180
      }
    ],
    inclusions: ["Night Safari tickets", "Tram ride", "Transfers (for applicable options)"],
    exclusions: ["Personal expenses", "Food (unless Indian dinner option)"],
    bookingPolicy: ["Pre-book slots 72 hours in advance", "Valid photo ID required", "No flash photography"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "night-safari-transfer": {
    id: "night-safari-transfer",
    title: "Night Safari Singapore with Transfer",
    shortDescription: "Night Safari experience with convenient hotel transfers included.",
    location: "Mandai, Singapore",
    city: "singapore",
    basePrice: 4955,
    childPrice: 4830,
    duration: "4-5 Hours",
    rating: 4.8,
    reviews: 1890,
    heroImages: [
      { src: singaporeMerlionNight, title: "Night Safari" }
    ],
    galleryImages: [
      { src: singaporeGardensByNight, alt: "Gardens by Night" },
      { src: singaporeMarinaByNight, alt: "Marina at Night" },
      { src: singaporeWomanCityscape, alt: "City Photography" }
    ],
    highlights: [
      "Hotel pickup & drop-off",
      "7 climate zones",
      "Tram ride",
      "Nocturnal wildlife"
    ],
    description: {
      overview: "Experience the Night Safari with hassle-free hotel transfers.",
      whatToExpect: "Witness nocturnal animals in their natural settings with the convenience of round-trip hotel transfers. Minimum 2 adults required."
    },
    itinerary: [
      { time: "Evening", title: "Pickup", description: "Hotel pickup" },
      { time: "", title: "Safari", description: "Night Safari experience" },
      { time: "", title: "Return", description: "Hotel drop-off" }
    ],
    tourTimings: ["7:30 PM pickup"],
    inclusions: ["Night Safari tickets", "Tram ride", "Round-trip transfers"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Minimum 2 adults required", "Provide exact hotel address"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "night-safari-dinner": {
    id: "night-safari-dinner",
    title: "Night Safari Singapore with Indian Dinner & Transfer",
    shortDescription: "Complete Night Safari experience with Indian dinner and hotel transfers.",
    location: "Mandai, Singapore",
    city: "singapore",
    basePrice: 6500,
    childPrice: 6180,
    duration: "5-6 Hours",
    rating: 4.9,
    reviews: 1567,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", title: "Night Safari" }
    ],
    galleryImages: [],
    highlights: [
      "Indian buffet dinner",
      "Hotel transfers",
      "Night Safari entry",
      "Tram ride"
    ],
    description: {
      overview: "The complete Night Safari package with Indian dinner and transfers.",
      whatToExpect: "Enjoy a delicious Indian buffet dinner before experiencing the Night Safari. Minimum 2 adults required."
    },
    itinerary: [
      { time: "Evening", title: "Pickup", description: "Hotel pickup" },
      { time: "", title: "Dinner", description: "Indian buffet dinner" },
      { time: "", title: "Safari", description: "Night Safari experience" },
      { time: "", title: "Return", description: "Hotel drop-off" }
    ],
    tourTimings: ["6:00 PM pickup"],
    inclusions: ["Night Safari tickets", "Tram ride", "Indian dinner", "Round-trip transfers"],
    exclusions: ["Personal expenses"],
    bookingPolicy: ["Minimum 2 adults required"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-10: Child rate", "Above 10: Adult rate"],
    faqs: []
  },
  "sentosa-4d-2rides": {
    id: "sentosa-4d-2rides",
    title: "Sentosa 4D Adventureland",
    shortDescription: "Experience cutting-edge 4D technology with sensory effects for an immersive adventure.",
    location: "Sentosa Island, Singapore",
    city: "singapore",
    basePrice: 2060,
    childPrice: 2055,
    minAdults: 1,
    duration: "2-3 Hours",
    rating: 4.5,
    reviews: 876,
    heroImages: [
      { src: singaporeCoupleWalking, title: "4D Adventureland" }
    ],
    galleryImages: [
      { src: singaporeMarinaByDay, alt: "Marina Bay" },
      { src: singaporeTouristsCity, alt: "City Tourists" },
      { src: singaporeCoupleWalking, alt: "Couple Adventure" }
    ],
    highlights: [
      "3D visuals with sensory effects",
      "Wind, water sprays, motion seats",
      "Multiple thrilling rides options",
      "Action & adventure themes"
    ],
    description: {
      overview: "4D AdventureLand offers cutting-edge technology combining 3D visuals with sensory effects.",
      whatToExpect: "Experience wind, water sprays, motion seats, and scents for an immersive experience. Choose rides based on selected option."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 9:00 PM"],
    tourOptions: [
      {
        label: "Sentosa 4D Adventureland with 2 Rides Tickets Only",
        adultPrice: 2060,
        childPrice: 2055
      },
      {
        label: "Sentosa 4D Adventureland with 2 Rides with Transfers",
        adultPrice: 3750,
        childPrice: 3745
      },
      {
        label: "Sentosa 4D Adventureland with 3 Rides Tickets Only",
        adultPrice: 2900,
        childPrice: 2898
      },
      {
        label: "Sentosa 4D Adventureland with 3 Rides with Transfers",
        adultPrice: 4590,
        childPrice: 4588
      }
    ],
    inclusions: ["Sentosa 4D Adventureland admission", "Transfers (for applicable options)", "All rides included"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Valid photo ID required", "Children under 12 must be accompanied by adult", "Minimum 2 adults for transfer options"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "sentosa-4d-3rides": {
    id: "sentosa-4d-3rides",
    title: "Sentosa 4D Adventureland with 3 Rides Tickets Only",
    shortDescription: "Extended 4D adventure with 3 thrilling rides to choose from.",
    location: "Sentosa Island, Singapore",
    city: "singapore",
    basePrice: 2900,
    childPrice: 2898,
    duration: "2.5 Hours",
    rating: 4.6,
    reviews: 654,
    heroImages: [
      { src: singaporeMarinaByNight, title: "4D Adventureland" }
    ],
    galleryImages: [
      { src: singaporeTouristsCity, alt: "City Tourists" },
      { src: singaporeCoupleWalking, alt: "Couple at Marina" },
      { src: singaporeMarinaByDay, alt: "Marina Views" }
    ],
    highlights: [
      "Choose 3 thrilling rides",
      "Full sensory experience",
      "Multiple adventure themes"
    ],
    description: {
      overview: "Get more adventure with 3 rides at 4D AdventureLand.",
      whatToExpect: "Choose any three rides from Pirates 4D, Extreme Log Ride, Haunted Mine Ride, or Desperados for the ultimate immersive experience."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 9:00 PM"],
    inclusions: ["Sentosa 4D Adventureland admission", "Choice of any 3 rides"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Valid photo ID required"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "sentosa-cable-car": {
    id: "sentosa-cable-car",
    title: "Sentosa Cable Ride",
    shortDescription: "World-famous cable car offering breathtaking views of Singapore's cityscape with multiple package options.",
    location: "Mount Faber to Sentosa, Singapore",
    city: "singapore",
    basePrice: 2180,
    childPrice: 2055,
    minAdults: 1,
    duration: "30-90 Minutes",
    rating: 4.7,
    reviews: 1234,
    heroImages: [
      { src: singaporeMarinaByDay, title: "Cable Car" }
    ],
    galleryImages: [
      { src: singaporeMarinaByDay, alt: "Marina Views" },
      { src: singaporeMerlionNight, alt: "Merlion Night" },
      { src: singaporeFlyerTwilight, alt: "Flyer Twilight" }
    ],
    highlights: [
      "Mount Faber to Sentosa connection",
      "Panoramic city views",
      "Marina Bay Sands views",
      "Wings of Time show option"
    ],
    description: {
      overview: "The Singapore Cable Car is a world-famous tourist attraction offering multiple experience options.",
      whatToExpect: "Enjoy breathtaking vistas of the cityscape, lush landscapes, and picturesque waterfront spots. See iconic landmarks like Marina Bay Sands and the Merlion from above. Upgrade to include Wings of Time show and/or Indian buffet dinner."
    },
    itinerary: [],
    tourTimings: ["8:45 AM - 10:00 PM"],
    tourOptions: [
      {
        label: "Sentosa Cable Ride Roundtrip Pass Tickets Only",
        adultPrice: 2180,
        childPrice: 2055
      },
      {
        label: "Sentosa Cable Ride Roundtrip Pass With Transfer",
        adultPrice: 3390,
        childPrice: 2055
      },
      {
        label: "Sentosa Wings of Time Tickets + Roundtrip Cable car Mt. Faber Line",
        adultPrice: 2657,
        childPrice: 2055
      },
      {
        label: "Sentosa Wings of Time Tickets + Roundtrip Cable car Mt. Faber Line + Indian Buffet",
        adultPrice: 3985,
        childPrice: 2055
      },
      {
        label: "Sentosa Wings of Time Tickets + Roundtrip Cable car Mt. Faber Line + Indian Buffet with Transfer",
        adultPrice: 4106,
        childPrice: 4106
      }
    ],
    inclusions: ["Cable car access", "Wings of Time (for applicable options)", "Indian buffet (for applicable options)", "Transfers (for applicable options)"],
    exclusions: ["Personal expenses", "Food (unless included in option)"],
    bookingPolicy: ["Valid photo ID required", "Minimum 2 adults for transfer options"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "sentosa-wings-time": {
    id: "sentosa-wings-time",
    title: "Sentosa Wings of Time Tickets with Transfers",
    shortDescription: "Spectacular outdoor night show with fireworks, water jets and lasers.",
    location: "Sentosa Island, Singapore",
    city: "singapore",
    basePrice: 2656.5,
    childPrice: 2052.75,
    duration: "1 Hour",
    rating: 4.6,
    reviews: 987,
    heroImages: [
      { src: singaporeGardensByNight, title: "Wings of Time" }
    ],
    galleryImages: [
      { src: singaporeGardensByNight, alt: "Gardens Night" },
      { src: singaporeMarinaByNight, alt: "Marina Night" },
      { src: singaporeWomanCityscape, alt: "City Night" }
    ],
    highlights: [
      "Outdoor night show",
      "Fireworks display",
      "Water jets & lasers",
      "Musical storytelling"
    ],
    description: {
      overview: "Wings of Time is Sentosa's spectacular outdoor night show.",
      whatToExpect: "Experience a magical show featuring fireworks, water jets, lasers and stunning visual effects set to music."
    },
    itinerary: [],
    tourTimings: ["7:40 PM", "8:40 PM"],
    inclusions: ["Wings of Time admission"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Pre-book slot 72 hours in advance at reservation.mountfaberleisure.com"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "sentosa-sky-helix": {
    id: "sentosa-sky-helix",
    title: "Sentosa Sky Helix",
    shortDescription: "Exhilarating aerial adventure with stunning panoramic views.",
    location: "Sentosa Island, Singapore",
    city: "singapore",
    basePrice: 1811.25,
    childPrice: 1811.25,
    duration: "15 Minutes",
    rating: 4.5,
    reviews: 543,
    heroImages: [
      { src: singaporeMarinaByNight, title: "Sky Helix" }
    ],
    galleryImages: [
      { src: singaporeMarinaByNight, alt: "Marina Night" },
      { src: singaporeFlyerTwilight, alt: "Flyer Twilight" },
      { src: singaporeMarinaByDay, alt: "Marina Day" }
    ],
    highlights: [
      "Highest vantage point in Sentosa",
      "360-degree views",
      "Gentle rotating ascent",
      "Complimentary beverage or souvenir"
    ],
    description: {
      overview: "SkyHelix Sentosa is an exhilarating aerial adventure.",
      whatToExpect: "Rise above Sentosa for stunning 360-degree views. Perfect for solo travelers, friends, and families. Includes one standard non-alcoholic beverage or exclusive souvenir."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 9:30 PM"],
    inclusions: ["SkyHelix ticket", "One non-alcoholic beverage or souvenir"],
    exclusions: ["Personal expenses"],
    bookingPolicy: ["Minimum height 1.05m required", "Children 1.05-1.2m must be accompanied by adult"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "singapore-river-cruise": {
    id: "singapore-river-cruise",
    title: "Singapore River Cruise",
    shortDescription: "Delightful journey along the iconic Singapore River showcasing picturesque landmarks.",
    location: "Clarke Quay, Singapore",
    city: "singapore",
    basePrice: 2174,
    childPrice: 2415,
    minAdults: 1,
    duration: "40 Minutes",
    rating: 4.7,
    reviews: 1567,
    heroImages: [
      { src: singaporeMarinaByNight, title: "River Cruise" }
    ],
    galleryImages: [
      { src: singaporeMarinaByDay, alt: "Marina Bay Sands" },
      { src: singaporeFlyerTwilight, alt: "Flyer Twilight" },
      { src: singaporeWomanCityscape, alt: "River View" }
    ],
    highlights: [
      "Marina Bay Sands views",
      "Singapore Flyer sighting",
      "Clarke Quay & Boat Quay",
      "Audio commentary"
    ],
    description: {
      overview: "The Singapore River Cruise offers a delightful journey along the iconic Singapore River.",
      whatToExpect: "Enjoy picturesque landscapes, iconic landmarks like Marina Bay Sands and Singapore Flyer, and vibrant quays. Knowledgeable guides provide interesting commentary about the city's history."
    },
    itinerary: [
      { time: "", title: "Boarding", description: "Board at Clarke Quay Jetty" },
      { time: "40 mins", title: "Cruise", description: "Scenic river cruise with commentary" }
    ],
    tourTimings: ["9:00 AM - 11:00 PM"],
    tourOptions: [
      {
        label: "Singapore River Cruise Tickets Only",
        adultPrice: 2174,
        childPrice: 2415
      },
      {
        label: "Singapore River Cruise Tickets + Private Transfer",
        adultPrice: 5920,
        childPrice: 2415
      }
    ],
    inclusions: ["40-minute cruise", "Audio visual commentary in English", "Transfers (for applicable option)"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Report 15 minutes before", "Boarding at Clarke Quay Jetty", "No re-boarding after disembarking", "Minimum 2 adults for transfer option"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "gardens-by-the-bay": {
    id: "gardens-by-the-bay",
    title: "Gardens by the Bay",
    shortDescription: "Stunning 101-hectare oasis featuring 250,000 plants and iconic Supertree Grove with flexible package options.",
    location: "Marina Bay, Singapore",
    city: "singapore",
    basePrice: 2660,
    childPrice: 2660,
    minAdults: 1,
    duration: "3-4 Hours",
    rating: 4.9,
    reviews: 3456,
    heroImages: [
      { src: singaporeGardensByNight, title: "Gardens by the Bay" }
    ],
    galleryImages: [
      { src: singaporeGardensByNight, alt: "Gardens Night" },
      { src: singaporeMarinaByDay, alt: "Marina Views" },
      { src: singaporeCoupleWalking, alt: "Couple at Gardens" }
    ],
    highlights: [
      "Flower Dome conservatory",
      "Cloud Forest with Jurassic World",
      "Supertree Grove",
      "250,000 rare plants"
    ],
    description: {
      overview: "Gardens by the Bay is a stunning oasis in Singapore's concrete jungle, spanning 101 hectares.",
      whatToExpect: "Explore the Cloud Forest and Flower Dome showcasing rare flora from Mediterranean regions and mountain environments. The Supertree Grove features eco-friendly man-made trees with a 20-meter high walkway. Experience Jurassic World with 13 immersive zones including dinosaur encounters."
    },
    itinerary: [],
    tourTimings: ["9:00 AM - 8:00 PM"],
    tourOptions: [
      {
        label: "Gardens by the Bay + Flower Dome + Cloud Forest with Jurassic World Tickets Only",
        adultPrice: 2660,
        childPrice: 2660
      },
      {
        label: "Gardens by the Bay + Flower Dome + Cloud Forest with Jurassic World with Tickets and Transfers",
        adultPrice: 4046,
        childPrice: 3381
      }
    ],
    inclusions: ["Gardens by the Bay admission", "Flower Dome entry", "Cloud Forest with Jurassic World", "Transfers (for applicable option)"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Valid photo ID required", "No re-entry allowed", "Maximum 1 hour per conservatory", "Minimum 2 adults for transfer option"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "adventure-cove": {
    id: "adventure-cove",
    title: "Adventure Cove Water Park",
    shortDescription: "Thrilling water park with rides, snorkeling with tropical fish, and dolphin encounters.",
    location: "Resorts World Sentosa, Singapore",
    city: "singapore",
    basePrice: 2657,
    childPrice: 2657,
    minAdults: 1,
    duration: "Full Day",
    rating: 4.7,
    reviews: 2345,
    heroImages: [
      { src: singaporeCoupleWalking, title: "Adventure Cove" }
    ],
    galleryImages: [
      { src: singaporeCoupleWalking, alt: "Water Park" },
      { src: singaporeTouristsCity, alt: "Tourists" },
      { src: singaporeMarinaByDay, alt: "Marina Views" }
    ],
    highlights: [
      "Dueling Racer & Pipeline Plunge",
      "Riptide Rocket",
      "Snorkel with 20,000 fishes",
      "Ray Bay & Rainbow Reef",
      "14 themed zones"
    ],
    description: {
      overview: "Adventure Cove Water Park at Resorts World Sentosa offers thrilling water adventures.",
      whatToExpect: "Enjoy rides like Dueling Racer, Pipeline Plunge, and Riptide Rocket. Snorkel with 20,000 tropical fishes at Rainbow Reef. Experience Southeast Asia's first hydro-magnetic coaster and 14 themed zones in Adventure River."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 6:00 PM"],
    tourOptions: [
      {
        label: "Adventure Cove Water Park Tickets Only",
        adultPrice: 2657,
        childPrice: 2657
      },
      {
        label: "Adventure Cove Water Park Tickets with Transfers",
        adultPrice: 3864,
        childPrice: 3864
      }
    ],
    inclusions: ["Adventure Cove Waterpark ticket", "All rides and attractions", "Transfers (for applicable option)"],
    exclusions: ["Personal expenses", "Food", "Locker rental"],
    bookingPolicy: ["Valid photo ID required", "Children must be accompanied by adult"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "singapore-flyer": {
    id: "singapore-flyer",
    title: "Singapore Flyer Ticket Only",
    shortDescription: "Experience panoramic views from 165 meters high on this giant observation wheel.",
    location: "Marina Bay, Singapore",
    city: "singapore",
    basePrice: 3381,
    childPrice: 2173.5,
    duration: "30 Minutes",
    rating: 4.7,
    reviews: 2890,
    heroImages: [
      { src: singaporeFlyerTwilight, title: "Singapore Flyer" }
    ],
    galleryImages: [
      { src: singaporeFlyerTwilight, alt: "Flyer Twilight" },
      { src: singaporeMarinaByDay, alt: "Marina Bay Sands" },
      { src: singaporeCoupleWalking, alt: "Couple Travelers" }
    ],
    highlights: [
      "165 meters high",
      "Panoramic city views",
      "Marina Bay Sands views",
      "30-minute scenic ride"
    ],
    description: {
      overview: "The Singapore Flyer offers breathtaking panoramic views at 165 meters high.",
      whatToExpect: "Marvel at Singapore's stunning skyline and catch glimpses of the Indonesian Spice Islands and Straits of Johor. Begin with the Time Capsule for an immersive multisensory journey."
    },
    itinerary: [],
    tourTimings: ["2:00 PM - 10:00 PM"],
    inclusions: ["Singapore Flyer admission", "30-minute scenic ride"],
    exclusions: ["Personal expenses", "Food", "Transfers"],
    bookingPolicy: ["Valid photo ID required", "No bulky items in capsule"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "river-safari": {
    id: "river-safari",
    title: "Singapore River Safari",
    shortDescription: "Captivating wildlife park with river-themed exhibits and Amazon River Quest boat ride.",
    location: "Mandai, Singapore",
    city: "singapore",
    basePrice: 4468,
    childPrice: 4468,
    minAdults: 1,
    duration: "3-4 Hours",
    rating: 4.6,
    reviews: 1234,
    heroImages: [
      { src: singaporeMarinaByDay, title: "River Safari" }
    ],
    galleryImages: [
      { src: singaporeMarinaByDay, alt: "Marina Views" },
      { src: singaporeMerlionNight, alt: "Merlion Night" },
      { src: singaporeTouristsCity, alt: "City Tourists" }
    ],
    highlights: [
      "Amazon Flooded Forest",
      "Congo River exhibit",
      "Amazon River Quest boat ride",
      "Diverse aquatic animals"
    ],
    description: {
      overview: "River Safari is a captivating wildlife park and river-themed zoo.",
      whatToExpect: "Discover exhibits like the Amazon Flooded Forest and Congo River showcasing diverse aquatic and land animals. The highlight is the Amazon River Quest boat ride through the rain forest."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 7:00 PM"],
    tourOptions: [
      {
        label: "Singapore River Safari Tickets Only",
        adultPrice: 4468,
        childPrice: 4468
      },
      {
        label: "Singapore River Safari Tickets and Transfers",
        adultPrice: 5920,
        childPrice: 5676
      }
    ],
    inclusions: ["River Safari admission", "Amazon River Quest boat ride", "Animal shows", "Transfers (for applicable option)"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Pre-book slots 72 hours in advance", "Valid photo ID required", "Minimum 2 adults for transfer option"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "universal-studios-weekday": {
    id: "universal-studios-weekday",
    title: "Universal Studios Singapore Weekday Ticket",
    shortDescription: "Movie-themed experience with thrilling rides and 7 exciting zones.",
    location: "Resorts World Sentosa, Singapore",
    city: "singapore",
    basePrice: 7000,
    childPrice: 4200,
    duration: "Full Day",
    rating: 4.9,
    reviews: 5678,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1581351123004-757df051db8e?w=800&auto=format&fit=crop", title: "Universal Studios" }
    ],
    galleryImages: [],
    highlights: [
      "7 themed zones",
      "Hollywood & New York replicas",
      "Ancient Egypt adventures",
      "Far Far Away fairytale fun",
      "Sci-Fi City roller coasters",
      "Madagascar characters"
    ],
    description: {
      overview: "Universal Studios Singapore offers thrilling movie-themed experiences.",
      whatToExpect: "Explore Hollywood and New York replicas, venture into Ancient Egypt for adventure rides, visit Far Far Away for fairytale fun, dance with Madagascar's characters, and face your fears on one of the world's tallest roller coasters at Sci-Fi City."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 8:00 PM"],
    inclusions: ["Universal Studios entrance", "Access to all 7 zones", "All rides and attractions"],
    exclusions: ["Personal expenses", "Food", "Express passes"],
    bookingPolicy: ["Valid photo ID required", "Children must be accompanied by adult"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "universal-studios-weekend": {
    id: "universal-studios-weekend",
    title: "Universal Studios Singapore Weekend Ticket",
    shortDescription: "Weekend admission to the ultimate movie-themed adventure park.",
    location: "Resorts World Sentosa, Singapore",
    city: "singapore",
    basePrice: 7200,
    childPrice: 4200,
    duration: "Full Day",
    rating: 4.9,
    reviews: 4567,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1581351123004-757df051db8e?w=800&auto=format&fit=crop", title: "Universal Studios" }
    ],
    galleryImages: [],
    highlights: [
      "Weekend admission",
      "7 themed zones",
      "World-class roller coasters",
      "Minion Land attraction"
    ],
    description: {
      overview: "Universal Studios Singapore weekend ticket for the ultimate adventure.",
      whatToExpect: "Same thrilling experience as weekdays but on weekends. Peak rates apply for weekends, Singapore public holidays, and June-August & December 2025."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 8:00 PM"],
    inclusions: ["Universal Studios entrance", "Access to all zones and rides", "Minion Land"],
    exclusions: ["Personal expenses", "Food", "Express passes"],
    bookingPolicy: ["Valid photo ID required", "Peak rates on weekends and holidays"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "singapore-zoo": {
    id: "singapore-zoo",
    title: "Singapore Zoo + Tram Ride Tickets Only",
    shortDescription: "Home to 3500 animals of 300 species with unique climate zones.",
    location: "Mandai, Singapore",
    city: "singapore",
    basePrice: 3743.25,
    childPrice: 3622.5,
    duration: "4-5 Hours",
    rating: 4.8,
    reviews: 3456,
    heroImages: [
      { src: singaporeMerlionNight, title: "Singapore Zoo" }
    ],
    galleryImages: [
      { src: singaporeMerlionNight, alt: "Merlion Night" },
      { src: singaporeTouristsCity, alt: "Tourists" },
      { src: singaporeCoupleWalking, alt: "Couple at Zoo" }
    ],
    highlights: [
      "3500 animals of 300 species",
      "Frozen Tundra for polar bears",
      "Fragile Forest rainforest",
      "Wild Africa safari",
      "Tram ride included"
    ],
    description: {
      overview: "Singapore Zoo is home to 3500 animals of 300 species.",
      whatToExpect: "Visit the Frozen Tundra for polar bears, Reptile Garden for snakes, Fragile Forest for a real rainforest experience, and Wild Africa for an African safari adventure. Don't miss the Orchid Garden for beautiful tropical flowers."
    },
    itinerary: [],
    tourTimings: ["8:30 AM - 6:00 PM"],
    inclusions: ["Singapore Zoo ticket", "Tram ride within zoo"],
    exclusions: ["Personal expenses", "Food", "Transfers"],
    bookingPolicy: ["Pre-book slots 72 hours in advance", "Valid photo ID required"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "rainforest-wild-asia": {
    id: "rainforest-wild-asia",
    title: "Rainforest Wild Asia with Transfer",
    shortDescription: "Asia's first wildlife adventure park with 36 species roaming freely.",
    location: "Mandai, Singapore",
    city: "singapore",
    basePrice: 3441.375,
    childPrice: 3441.375,
    duration: "3-4 Hours",
    rating: 4.7,
    reviews: 876,
    heroImages: [
      { src: singaporeWomanCityscape, title: "Rainforest Wild Asia" }
    ],
    galleryImages: [
      { src: singaporeWomanCityscape, alt: "Safari Woman" },
      { src: singaporeTouristsCity, alt: "Tourists" },
      { src: singaporeCoupleWalking, alt: "Nature Couple" }
    ],
    highlights: [
      "36 species roaming freely",
      "The Karsts with langurs",
      "The Cavern cave experience",
      "Immersive wildlife encounters"
    ],
    description: {
      overview: "Asia's first wildlife adventure park where every journey brings unique encounters.",
      whatToExpect: "Ascend The Karsts, home to Francois' langurs making their debut in Singapore. Delve into The Cavern inspired by Mulu Caves in Sarawak. Connect with nature as 36 species roam freely."
    },
    itinerary: [],
    tourTimings: ["10:00 AM - 7:00 PM"],
    inclusions: ["Rainforest Wild Asia tickets", "Transfers"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Pre-book slots 72 hours in advance", "No flash photography"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 3: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "big-bus-discover": {
    id: "big-bus-discover",
    title: "Big Bus Singapore - Discover Ticket",
    shortDescription: "Hop-on-hop-off sightseeing experience covering top attractions.",
    location: "Singapore",
    city: "singapore",
    basePrice: 4709.25,
    childPrice: 4709.25,
    duration: "7 Hours",
    rating: 4.6,
    reviews: 1234,
    heroImages: [
      { src: singaporeMarinaByNight, title: "Big Bus" }
    ],
    galleryImages: [
      { src: singaporeMarinaByNight, alt: "Marina Night" },
      { src: singaporeGardensByNight, alt: "Gardens Night" },
      { src: singaporeCoupleWalking, alt: "City Tour" }
    ],
    highlights: [
      "Over 30 stops",
      "Yellow & Red lines",
      "Commentary in 12 languages",
      "See all top landmarks"
    ],
    description: {
      overview: "Big Bus Singapore offers convenient hop-on-hop-off sightseeing.",
      whatToExpect: "Explore the city's top attractions at your own pace. Multiple routes cover key landmarks including Marina Bay Sands, Gardens by the Bay, Chinatown, and Sentosa Island."
    },
    itinerary: [],
    tourTimings: ["Yellow Line: 9:30 AM - 5:15 PM", "Red Line: 9:40 AM - 5:05 PM"],
    inclusions: ["Big Bus admission", "Over 30 stops", "Commentary in 12 languages"],
    exclusions: ["Personal expenses", "Food"],
    bookingPolicy: ["Maximum 10 guests per booking", "Start from Suntec City Tower 2"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 2: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "big-bus-night": {
    id: "big-bus-night",
    title: "Big Bus Singapore Night City Tour",
    shortDescription: "3-hour guided night tour with satay sampling at Lau Pa Sat.",
    location: "Singapore",
    city: "singapore",
    basePrice: 4709.25,
    childPrice: 4709.25,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 987,
    heroImages: [
      { src: singaporeGardensByNight, title: "Night Tour" }
    ],
    galleryImages: [
      { src: singaporeGardensByNight, alt: "Gardens Night" },
      { src: singaporeMerlionNight, alt: "Merlion Night" },
      { src: singaporeMarinaByNight, alt: "Marina Night" }
    ],
    highlights: [
      "Open-top double-decker bus",
      "Satay sampling at Lau Pa Sat",
      "Professional English guide",
      "3-hour fully guided tour"
    ],
    description: {
      overview: "Experience Singapore at night on an open-top double-decker bus.",
      whatToExpect: "Enjoy a fully guided 3-hour night tour with satay sampling at Lau Pa Sat. See iconic sites lit up beautifully after dark."
    },
    itinerary: [
      { time: "6:15 PM", title: "Departure", description: "Tour departs (Thu-Tue)" },
      { time: "", title: "Night Tour", description: "See Singapore's landmarks at night" },
      { time: "", title: "Satay Sampling", description: "Enjoy satay at Lau Pa Sat" }
    ],
    tourTimings: ["6:15 PM (Thursday to Tuesday)"],
    inclusions: ["Open-top bus transport", "Satay sampling", "Professional English guide", "Complimentary transfer from 33 stops"],
    exclusions: ["Personal expenses", "Additional food"],
    bookingPolicy: ["Tour runs Thursday to Tuesday"],
    cancellationPolicy: ["100% charge for cancellations after booking"],
    childPolicy: ["Under 2: Free", "3-12: Child rate", "Above 12: Adult rate"],
    faqs: []
  },
  "singapore-airport-pickup-5-seater": {
    id: "singapore-airport-pickup-5-seater",
    title: "Private Singapore Airport Pick Up - 5 Seater",
    shortDescription: "Start your worry-free Singapore visit with our private airport pickup service in a comfortable 5-seater vehicle.",
    location: "Singapore",
    city: "singapore",
    basePrice: 4000,
    childPrice: 4000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 856,
    pricePerVehicle: true,
    vehicleCapacity: 5,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Private Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Airport Pick up from Changi Airport",
      "Ride in a clean comfortable 5-seater vehicle",
      "Hotel Drop off within designated areas",
      "Experienced drivers familiar with Singapore routes"
    ],
    description: {
      overview: "Start your worry-free Singapore visit with our private airport pickup service.",
      whatToExpect: "Whether you're traveling solo, with family, or in a group, we cater to your unique travel needs. Our well-trained and polite team ensures reliable transfers with experienced drivers familiar with all Singapore routes. Provide accurate flight and pick-up details for a seamless and smooth service. Enjoy a stress-free start to your Singapore journey with us."
    },
    itinerary: [],
    tourTimings: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
    inclusions: ["Airport Pick up", "Ride in a clean comfortable vehicle", "Hotel Drop off"],
    exclusions: ["All personal expenses spent for shopping, drinks and dining etc on-site during the tour"],
    bookingPolicy: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance",
      "Guests are kindly requested to be ready 15 minutes before the pickup time to avoid any delays",
      "Please ensure to provide accurate details, including the hotel address, during the booking process",
      "If the guest fails to report within the designated time, it will be considered a No Show with no refund",
      "Select pickup timing 2.5 hours after the flight landing time",
      "Transfers provided from: Geylang lor 1-22, Little India, Orchard, Tanjong Pagar, Chinatown, Village Hotel Bugis",
      "Private Transfers waiting time: 15 Minutes"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children above age 3 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Vivek Sharma", date: "3 days ago", rating: 5, comment: "Seamless pickup from Changi Terminal 3! Driver tracked our flight and was waiting right when we cleared immigration. The sedan was spotless and air-conditioned. Perfect start to our Singapore honeymoon.", helpful: 34 },
      { name: "Rashida Khan", date: "1 week ago", rating: 5, comment: "Very impressed with the professionalism. Driver greeted us warmly and helped with all our bags. Quick 25-minute ride to our Orchard Road hotel. Will definitely use again.", helpful: 27 },
      { name: "Harish Iyer", date: "2 weeks ago", rating: 5, comment: "After 8 hours of flying, this pickup was a blessing! Driver was punctual, car was comfortable, and we reached Little India smoothly. Great value for a private transfer.", helpful: 21 },
      { name: "Kavitha Subramanian", date: "3 weeks ago", rating: 4, comment: "Reliable service for our family of 4. Driver was patient while we collected baggage. Only small delay at the meeting point but communication was excellent throughout.", helpful: 16 }
    ]
  },
  "singapore-airport-pickup-10-seater": {
    id: "singapore-airport-pickup-10-seater",
    title: "Private Singapore Airport Pick Up - 10 Seater",
    shortDescription: "Start your worry-free Singapore visit with our private airport pickup service in a spacious 10-seater vehicle.",
    location: "Singapore",
    city: "singapore",
    basePrice: 8000,
    childPrice: 8000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 654,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Private Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Airport Pick up from Changi Airport",
      "Ride in a clean comfortable 10-seater vehicle",
      "Hotel Drop off within designated areas",
      "Perfect for families and groups"
    ],
    description: {
      overview: "Start your worry-free Singapore visit with our private airport pickup service.",
      whatToExpect: "Whether you're traveling solo, with family, or in a group, we cater to your unique travel needs. Our well-trained and polite team ensures reliable transfers with experienced drivers familiar with all Singapore routes. Provide accurate flight and pick-up details for a seamless and smooth service. Enjoy a stress-free start to your Singapore journey with us."
    },
    itinerary: [],
    tourTimings: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
    inclusions: ["Airport Pick up", "Ride in a clean comfortable vehicle", "Hotel Drop off"],
    exclusions: ["All personal expenses spent for shopping, drinks and dining etc on-site during the tour"],
    bookingPolicy: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance",
      "Guests are kindly requested to be ready 15 minutes before the pickup time to avoid any delays",
      "Please ensure to provide accurate details, including the hotel address, during the booking process",
      "If the guest fails to report within the designated time, it will be considered a No Show with no refund",
      "Select pickup timing 2.5 hours after the flight landing time",
      "Transfers provided from: Geylang lor 1-22, Little India, Orchard, Tanjong Pagar, Chinatown, Village Hotel Bugis",
      "Private Transfers waiting time: 15 Minutes"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children above age 3 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Ramesh Venkatesh", date: "2 days ago", rating: 5, comment: "Brilliant for our joint family trip! The 10-seater comfortably fit 9 of us with 6 large suitcases. Driver was incredibly helpful and the ride from Changi to Sentosa was smooth.", helpful: 36 },
      { name: "Lakshmi Narayanan", date: "1 week ago", rating: 5, comment: "Booked for our office team outing and everyone was impressed. Spacious van, professional driver who knew all the shortcuts. Reached Marina Bay Sands in 30 minutes flat!", helpful: 28 },
      { name: "Imran Hussain", date: "2 weeks ago", rating: 5, comment: "Excellent choice for large groups. Clean van with working AC, courteous driver who helped with heavy bags. Great value compared to booking multiple cabs.", helpful: 22 },
      { name: "Shalini Deshmukh", date: "3 weeks ago", rating: 4, comment: "Good experience overall. Van was spacious and well-maintained. Small wait at Terminal 2 but driver communicated well. Would recommend for big families.", helpful: 17 }
    ]
  },
  "singapore-airport-dropoff-5-seater": {
    id: "singapore-airport-dropoff-5-seater",
    title: "Private Singapore Airport Drop Off - 5 Seater",
    shortDescription: "Enjoy stress-free airport drop off services at the end of your Singapore holiday in a comfortable 5-seater vehicle.",
    location: "Singapore",
    city: "singapore",
    basePrice: 4000,
    childPrice: 4000,
    duration: "Transfer",
    rating: 4.8,
    reviews: 723,
    pricePerVehicle: true,
    vehicleCapacity: 5,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", title: "Airport Drop Off" }
    ],
    galleryImages: [],
    highlights: [
      "Hotel Pick up from designated areas",
      "Travel in a well-maintained private 5-seater vehicle",
      "Changi Airport Drop off",
      "Experienced and punctual drivers"
    ],
    description: {
      overview: "Enjoy stress-free airport drop off services at the end of your Singapore holiday.",
      whatToExpect: "We offer private transfers for all group sizes, with instant confirmation and printable vouchers. Provide your flight details and hotel address for a smooth booking process. An experienced driver will pick you up at your hotel and transfer you to Changi Airport on time."
    },
    itinerary: [],
    tourTimings: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
    inclusions: ["Hotel Pick up", "Travel in a well-maintained private vehicle", "Airport Drop off"],
    exclusions: ["All personal expenses spent for shopping, drinks and dining etc on-site during the tour"],
    bookingPolicy: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance",
      "Guests are kindly requested to be ready in the hotel lobby 15 minutes before the pickup time",
      "Please ensure to provide accurate details, including the hotel address, during the booking process",
      "If the guest fails to report within the designated time, it will be considered a No Show with no refund",
      "Transfers provided from: Geylang lor 1-22, Little India, Orchard, Tanjong Pagar, Chinatown, Village Hotel Bugis",
      "Private Transfers waiting time: 15 Minutes"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children above age 3 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Mahesh Chandra", date: "4 days ago", rating: 5, comment: "Punctual drop-off service! Driver arrived at our Orchard hotel 20 minutes early. Helped us load bags and got us to Changi Terminal 1 with time to spare for duty-free shopping.", helpful: 31 },
      { name: "Geeta Krishnamurthy", date: "1 week ago", rating: 5, comment: "Perfect ending to our Singapore holiday. Clean sedan, courteous driver who knew the fastest route. Reached airport in just 35 minutes from Chinatown.", helpful: 25 },
      { name: "Waseem Sheikh", date: "2 weeks ago", rating: 5, comment: "Very reliable service! Driver confirmed pickup the night before and was waiting in the lobby right on time. Smooth ride with no traffic issues.", helpful: 19 },
      { name: "Padmini Ranganathan", date: "3 weeks ago", rating: 4, comment: "Good service for airport transfer. Driver was helpful with our shopping bags from Orchard. Only minor wait in lobby but otherwise excellent experience.", helpful: 14 }
    ]
  },
  "singapore-airport-dropoff-10-seater": {
    id: "singapore-airport-dropoff-10-seater",
    title: "Private Singapore Airport Drop Off - 10 Seater",
    shortDescription: "Enjoy stress-free airport drop off services at the end of your Singapore holiday in a spacious 10-seater vehicle.",
    location: "Singapore",
    city: "singapore",
    basePrice: 8000,
    childPrice: 8000,
    duration: "Transfer",
    rating: 4.8,
    reviews: 512,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Airport Drop Off" }
    ],
    galleryImages: [],
    highlights: [
      "Hotel Pick up from designated areas",
      "Travel in a well-maintained private 10-seater vehicle",
      "Changi Airport Drop off",
      "Perfect for families and groups"
    ],
    description: {
      overview: "Enjoy stress-free airport drop off services at the end of your Singapore holiday.",
      whatToExpect: "We offer private transfers for all group sizes, with instant confirmation and printable vouchers. Provide your flight details and hotel address for a smooth booking process. An experienced driver will pick you up at your hotel and transfer you to Changi Airport on time."
    },
    itinerary: [],
    tourTimings: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
    inclusions: ["Hotel Pick up", "Travel in a well-maintained private vehicle", "Airport Drop off"],
    exclusions: ["All personal expenses spent for shopping, drinks and dining etc on-site during the tour"],
    bookingPolicy: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance",
      "Guests are kindly requested to be ready in the hotel lobby 15 minutes before the pickup time",
      "Please ensure to provide accurate details, including the hotel address, during the booking process",
      "If the guest fails to report within the designated time, it will be considered a No Show with no refund",
      "Transfers provided from: Geylang lor 1-22, Little India, Orchard, Tanjong Pagar, Chinatown, Village Hotel Bugis",
      "Private Transfers waiting time: 15 Minutes"
    ],
    cancellationPolicy: [
      "All Cancellations made 96 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 96 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children above age 3 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Naresh Agrawal", date: "3 days ago", rating: 5, comment: "Outstanding service for our extended family! The 10-seater van accommodated all 9 of us with lots of luggage from shopping. Driver was super friendly and got us to Terminal 3 on time.", helpful: 33 },
      { name: "Sarita Bhardwaj", date: "1 week ago", rating: 5, comment: "Booked for our women's group trip and everything was perfect. Van was immaculate, driver was respectful and punctual. Reached Changi with 3 hours to spare!", helpful: 26 },
      { name: "Ayesha Siddiqui", date: "2 weeks ago", rating: 5, comment: "Great for large families! Spacious and comfortable van. Driver helped load all our Mustafa Centre shopping bags. Highly recommend for groups.", helpful: 20 },
      { name: "Sudhir Menon", date: "3 weeks ago", rating: 4, comment: "Reliable drop-off service. Van was clean with good AC. Driver arrived early and was very patient while we checked out. Would book again.", helpful: 16 }
    ]
  },
  "singapore-airport-night-pickup-5-seater": {
    id: "singapore-airport-night-pickup-5-seater",
    title: "Private Singapore Airport Night Pick Up - 5 Seater",
    shortDescription: "Late night or early morning arrival? Our night transfer service ensures a smooth pickup in a comfortable 5-seater vehicle.",
    location: "Singapore",
    city: "singapore",
    basePrice: 5000,
    childPrice: 5000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 432,
    pricePerVehicle: true,
    vehicleCapacity: 5,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop", title: "Night Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Airport Pick up during night hours",
      "Ride in a clean comfortable 5-seater vehicle",
      "Hotel Drop off within designated areas",
      "Available 10 PM to 6 AM"
    ],
    description: {
      overview: "Start your worry-free Singapore visit with our night airport pickup service.",
      whatToExpect: "Whether you're traveling solo, with family, or in a group, we cater to your unique travel needs. Our well-trained and polite team ensures reliable transfers with experienced drivers familiar with all Singapore routes. Provide accurate flight and pick-up details for a seamless and smooth service. Enjoy a stress-free start to your Singapore journey with us."
    },
    itinerary: [],
    tourTimings: ["00:05", "00:30", "01:00", "01:30", "02:00", "02:30", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "22:00", "22:30", "23:00", "23:30"],
    inclusions: ["Airport Pick up", "Ride in a clean comfortable vehicle", "Hotel Drop off"],
    exclusions: ["All personal expenses spent for shopping, drinks and dining etc on-site during the tour"],
    bookingPolicy: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance",
      "Guests are kindly requested to be ready 15 minutes before the pickup time to avoid any delays",
      "Please ensure to provide accurate details, including the hotel address, during the booking process",
      "If the guest fails to report within the designated time, it will be considered a No Show with no refund",
      "Select pickup timing 2.5 hours after the flight landing time",
      "Transfers provided from: Geylang lor 1-22, Little India, Orchard, Tanjong Pagar, Chinatown, Village Hotel Bugis",
      "Private Transfers waiting time: 15 Minutes"
    ],
    cancellationPolicy: [
      "All Cancellations made 96 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 96 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children above age 3 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Anand Chakraborty", date: "2 days ago", rating: 5, comment: "Our Mumbai flight landed at 1:30 AM and the driver was already at the arrival hall! After a tiring journey, this seamless pickup was exactly what we needed. Comfortable ride to Tanjong Pagar.", helpful: 38 },
      { name: "Deepika Pillai", date: "1 week ago", rating: 5, comment: "Fantastic midnight service! Driver tracked our delayed flight and adjusted timing accordingly. So professional and the car was spotless despite the late hour.", helpful: 29 },
      { name: "Faisal Ahmed", date: "2 weeks ago", rating: 5, comment: "Best night transfer service! Landed at 3 AM and driver was waiting with a name board. Quick, comfortable ride to Bugis. Essential for red-eye flights.", helpful: 23 },
      { name: "Mridula Gopinath", date: "3 weeks ago", rating: 4, comment: "Reliable early morning pickup at 5 AM. Driver was punctual and the sedan was clean. Small confusion at Terminal 4 meeting point but resolved quickly. Good value.", helpful: 17 }
    ]
  },
  "singapore-airport-night-pickup-10-seater": {
    id: "singapore-airport-night-pickup-10-seater",
    title: "Private Singapore Airport Night Pick Up - 10 Seater",
    shortDescription: "Late night or early morning arrival? Our night transfer service ensures a smooth pickup in a spacious 10-seater vehicle.",
    location: "Singapore",
    city: "singapore",
    basePrice: 10000,
    childPrice: 10000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 321,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Night Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Airport Pick up during night hours",
      "Ride in a clean comfortable 10-seater vehicle",
      "Hotel Drop off within designated areas",
      "Perfect for families and groups"
    ],
    description: {
      overview: "Start your worry-free Singapore visit with our night airport pickup service.",
      whatToExpect: "Whether you're traveling solo, with family, or in a group, we cater to your unique travel needs. Our well-trained and polite team ensures reliable transfers with experienced drivers familiar with all Singapore routes. Provide accurate flight and pick-up details for a seamless and smooth service. Enjoy a stress-free start to your Singapore journey with us."
    },
    itinerary: [],
    tourTimings: ["00:05", "00:30", "01:00", "01:30", "02:00", "02:30", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "22:00", "22:30", "23:00", "23:30"],
    inclusions: ["Airport Pick up", "Ride in a clean comfortable vehicle", "Hotel Drop off"],
    exclusions: ["All personal expenses spent for shopping, drinks and dining etc on-site during the tour"],
    bookingPolicy: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance",
      "Guests are kindly requested to be ready 15 minutes before the pickup time to avoid any delays",
      "Please ensure to provide accurate details, including the hotel address, during the booking process",
      "If the guest fails to report within the designated time, it will be considered a No Show with no refund",
      "Select pickup timing 2.5 hours after the flight landing time",
      "Transfers provided from: Geylang lor 1-22, Little India, Orchard, Tanjong Pagar, Chinatown, Village Hotel Bugis",
      "Private Transfers waiting time: 15 Minutes"
    ],
    cancellationPolicy: [
      "All Cancellations made 96 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 96 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children above age 3 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Gopal Sundaram", date: "3 days ago", rating: 5, comment: "Lifesaver for our family! Flight from Chennai landed at 11:45 PM and the 10-seater was waiting. Fit all 8 of us plus luggage easily. Driver was so patient and helpful.", helpful: 35 },
      { name: "Usha Raghavan", date: "1 week ago", rating: 5, comment: "Excellent midnight transfer for our tour group! Van was spacious with cold AC. Driver navigated to Clarke Quay hotel perfectly. Worth every rupee for peace of mind.", helpful: 27 },
      { name: "Zaheer Abbas", date: "2 weeks ago", rating: 5, comment: "Our delayed flight landed at 2 AM and driver still waited. Amazing service! The 10-seater was comfortable for our tired group. Highly recommend for night arrivals.", helpful: 21 },
      { name: "Bhavna Kulkarni", date: "3 weeks ago", rating: 4, comment: "Good night service for large groups. Van was clean and driver was friendly. Small delay in locating the van but driver communicated well via WhatsApp.", helpful: 16 }
    ]
  },
  "dubai-airport-pickup-zone1-7-seater": {
    id: "dubai-airport-pickup-zone1-7-seater",
    title: "Dubai Airport Pick Up to Zone 1 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services for a perfect start of your Dubai vacation.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3000,
    childPrice: 3000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 856,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Eliminates all confusions and stress locating a safe and reliable transport",
      "Meet and greet by friendly and experienced driver",
      "Fully air-conditioned and comfortable vehicle",
      "Baggage assistance included"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable vehicle",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Mohammed Ali", date: "2 days ago", rating: 5, comment: "Excellent airport pickup in Dubai! Driver was waiting with my name board right outside arrivals. Clean and comfortable 7-seater, perfect for our family of 5. Smooth ride to Deira.", helpful: 34 },
      { name: "Fatima Khan", date: "1 week ago", rating: 5, comment: "Very professional service! After a long flight, having someone ready was such a relief. Driver helped with all our bags and the AC was a blessing in Dubai heat.", helpful: 28 },
      { name: "Ahmed Hassan", date: "2 weeks ago", rating: 5, comment: "Best airport transfer in Dubai. Driver was punctual, vehicle was spotless, and we reached Downtown in no time. Will definitely use again!", helpful: 21 },
      { name: "Aisha Begum", date: "3 weeks ago", rating: 4, comment: "Good service overall. Driver was friendly and professional. Car was comfortable and clean. Only small delay finding the pickup point but otherwise perfect.", helpful: 16 }
    ]
  },
  "dubai-airport-pickup-zone1-12-seater": {
    id: "dubai-airport-pickup-zone1-12-seater",
    title: "Dubai Airport Pick Up to Zone 1 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services in a spacious 12-seater vehicle for groups and families.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4000,
    childPrice: 4000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 654,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Eliminates all confusions and stress locating a safe and reliable transport",
      "Meet and greet by friendly and experienced driver",
      "Spacious 12-seater air-conditioned vehicle",
      "Perfect for large groups and families"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable mini bus or van",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Rashid Ibrahim", date: "3 days ago", rating: 5, comment: "Perfect for our large group of 10! The 12-seater van was spacious and comfortable. Driver was very helpful with all our luggage. Great value for groups traveling together!", helpful: 32 },
      { name: "Zainab Qureshi", date: "1 week ago", rating: 5, comment: "Excellent service for our family reunion group. Van was clean and driver was professional. Made our Dubai arrival stress-free!", helpful: 26 },
      { name: "Yusuf Malik", date: "2 weeks ago", rating: 5, comment: "Highly recommend for large groups! Driver was waiting right on time and the 12-seater was perfect for our group. Comfortable ride to our hotel.", helpful: 19 },
      { name: "Nadia Syed", date: "3 weeks ago", rating: 4, comment: "Good experience with the 12-seater transfer. Spacious vehicle, friendly driver. Booking was easy and confirmation was instant.", helpful: 14 }
    ]
  },
  "dubai-airport-pickup-zone1-4-seater": {
    id: "dubai-airport-pickup-zone1-4-seater",
    title: "Dubai Airport Pick Up to Zone 1 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services in a comfortable 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3300,
    childPrice: 3300,
    duration: "Transfer",
    rating: 4.8,
    reviews: 432,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Eliminates all confusions and stress locating a safe and reliable transport",
      "Meet and greet by friendly and experienced driver",
      "Comfortable 4-seater sedan",
      "Baggage assistance included"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable vehicle",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Imran Sheikh", date: "2 days ago", rating: 5, comment: "Great sedan for our small family! Clean car, professional driver, and smooth ride from Dubai Airport to Downtown. Perfect for couples or small families.", helpful: 27 },
      { name: "Salma Ansari", date: "1 week ago", rating: 5, comment: "Excellent 4-seater service! Driver was waiting at arrivals with a name board. Very comfortable sedan and quick transfer to Bur Dubai.", helpful: 22 },
      { name: "Tariq Hussain", date: "2 weeks ago", rating: 4, comment: "Good service for a solo traveler or couple. Car was clean and driver was punctual. Value for money if you don't need a larger vehicle.", helpful: 15 },
      { name: "Hiba Farooq", date: "3 weeks ago", rating: 5, comment: "Perfect for our trip! Just the two of us and the sedan was more than enough. Driver helped with luggage and got us to our hotel quickly.", helpful: 18 }
    ]
  },
  "dubai-airport-pickup-zone2-7-seater": {
    id: "dubai-airport-pickup-zone2-7-seater",
    title: "Dubai Airport Pick Up to Zone 2 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 2 (JBR, Marina, Palm Jumeirah).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3500,
    childPrice: 3500,
    duration: "Transfer",
    rating: 4.9,
    reviews: 723,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers JBR, Marina, Palm Jumeirah areas",
      "Meet and greet by friendly and experienced driver",
      "Fully air-conditioned and comfortable vehicle",
      "Baggage assistance included"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable vehicle",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Khalid Mahmood", date: "3 days ago", rating: 5, comment: "Smooth transfer to JBR! Driver was very professional and the 7-seater was perfect for our family of 5 with luggage. Loved the views on the way to Marina.", helpful: 29 },
      { name: "Mariam Nawaz", date: "1 week ago", rating: 5, comment: "Excellent service to Palm Jumeirah! Driver knew the exact location of our hotel. Clean vehicle and comfortable ride after a long flight.", helpful: 24 },
      { name: "Hassan Raza", date: "2 weeks ago", rating: 5, comment: "Great pickup to Zone 2! The journey to Marina was smooth and driver pointed out landmarks along the way. Highly recommend!", helpful: 18 },
      { name: "Sana Ahmed", date: "3 weeks ago", rating: 4, comment: "Good experience overall. Vehicle was comfortable and driver was polite. Small wait at the airport but otherwise smooth transfer to JBR.", helpful: 13 }
    ]
  },
  "dubai-airport-pickup-zone2-12-seater": {
    id: "dubai-airport-pickup-zone2-12-seater",
    title: "Dubai Airport Pick Up to Zone 2 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 2 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4200,
    childPrice: 4200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 512,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers JBR, Marina, Palm Jumeirah areas",
      "Meet and greet by friendly and experienced driver",
      "Spacious 12-seater air-conditioned vehicle",
      "Perfect for large groups and families"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable mini bus or van",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Omar Farhan", date: "4 days ago", rating: 5, comment: "Great 12-seater service to Marina! Perfect for our extended family of 10. Driver was professional and the van was very comfortable. Excellent value!", helpful: 30 },
      { name: "Layla Abbas", date: "1 week ago", rating: 5, comment: "Smooth ride to Palm Jumeirah in the big van. Plenty of space for everyone and all our luggage. Driver was friendly and helpful!", helpful: 24 },
      { name: "Bilal Rehman", date: "2 weeks ago", rating: 5, comment: "Perfect for large groups visiting JBR! The 12-seater was spacious and air-conditioned. Driver knew the best routes. Highly recommend!", helpful: 18 },
      { name: "Amina Yousuf", date: "3 weeks ago", rating: 4, comment: "Good experience with the group transfer to Zone 2. Comfortable ride and professional driver. Would book again for future trips.", helpful: 13 }
    ]
  },
  "dubai-airport-pickup-zone3-7-seater": {
    id: "dubai-airport-pickup-zone3-7-seater",
    title: "Dubai Airport Pick Up to Zone 3 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 3 (JVC, Sports City, Motor City).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4000,
    childPrice: 4000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 389,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers JVC, Sports City, Motor City areas",
      "Meet and greet by friendly and experienced driver",
      "Fully air-conditioned and comfortable vehicle",
      "Baggage assistance included"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable vehicle",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Samir Khan", date: "3 days ago", rating: 5, comment: "Excellent transfer to JVC! Driver was waiting right on time and knew exactly where our hotel was in Sports City. Comfortable 7-seater and smooth ride.", helpful: 26 },
      { name: "Reem Al-Rashid", date: "1 week ago", rating: 5, comment: "Great service to Motor City! Clean vehicle and professional driver. The ride was comfortable and we reached our destination quickly.", helpful: 21 },
      { name: "Faisal Iqbal", date: "2 weeks ago", rating: 5, comment: "Smooth pickup to Zone 3! Driver helped with all our bags and the AC was refreshing. Will definitely book again for our next visit.", helpful: 17 },
      { name: "Noura Hassan", date: "3 weeks ago", rating: 4, comment: "Good experience overall. Vehicle was clean and comfortable. Small delay at pickup but driver communicated well. Good value for Zone 3.", helpful: 12 }
    ]
  },
  "dubai-airport-pickup-zone3-12-seater": {
    id: "dubai-airport-pickup-zone3-12-seater",
    title: "Dubai Airport Pick Up to Zone 3 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 3 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4200,
    childPrice: 4200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 298,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers JVC, Sports City, Motor City areas",
      "Meet and greet by friendly and experienced driver",
      "Spacious 12-seater air-conditioned vehicle",
      "Perfect for large groups and families"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable mini bus or van",
      "Airport parking charges included",
      "One-way transfer service"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Waleed Ahmad", date: "2 days ago", rating: 5, comment: "Perfect 12-seater for our cricket team! All 11 of us fit comfortably with our gear. Smooth ride to Sports City. Driver was excellent!", helpful: 28 },
      { name: "Dania Malik", date: "1 week ago", rating: 5, comment: "Great for large groups going to JVC! The van was spacious and clean. Driver arrived right on time. Highly recommend for families!", helpful: 22 },
      { name: "Junaid Abbas", date: "2 weeks ago", rating: 5, comment: "Excellent service to Motor City. 12-seater was perfect for our group of 9 with all luggage. Professional driver and comfortable ride.", helpful: 16 },
      { name: "Hafsa Qasim", date: "3 weeks ago", rating: 4, comment: "Good value for Zone 3 group transfer. Spacious vehicle and friendly driver. Would use again for group trips.", helpful: 12 }
    ]
  },
  "dubai-airport-pickup-zone5-7-seater": {
    id: "dubai-airport-pickup-zone5-7-seater",
    title: "Dubai Airport Pick Up to Zone 5 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 5 (Abu Dhabi, Al Ain).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 7200,
    childPrice: 7200,
    duration: "Transfer",
    rating: 4.9,
    reviews: 267,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers Abu Dhabi and Al Ain areas",
      "Meet and greet by friendly and experienced driver",
      "Fully air-conditioned and comfortable vehicle",
      "Long distance transfer included"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Abu Dhabi or Al Ain."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable vehicle",
      "Airport parking charges included",
      "One-way transfer service to Zone 5"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Adil Sharif", date: "3 days ago", rating: 5, comment: "Excellent long-distance transfer to Abu Dhabi! Driver was very professional and the 7-seater was comfortable for the journey. Worth every dirham!", helpful: 31 },
      { name: "Maha Al-Suwaidi", date: "1 week ago", rating: 5, comment: "Smooth ride from Dubai Airport to Al Ain! Driver knew the route well and we arrived safely. Great service for Zone 5 transfers.", helpful: 25 },
      { name: "Rizwan Shah", date: "2 weeks ago", rating: 5, comment: "Perfect for our trip to Abu Dhabi. Vehicle was comfortable for the long journey and driver was experienced. Highly recommend!", helpful: 19 },
      { name: "Sara Khalil", date: "3 weeks ago", rating: 4, comment: "Good service for the long trip to Zone 5. Driver was punctual and vehicle was clean. Comfortable for the distance covered.", helpful: 14 }
    ]
  },
  "dubai-airport-pickup-zone5-12-seater": {
    id: "dubai-airport-pickup-zone5-12-seater",
    title: "Dubai Airport Pick Up to Zone 5 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 5 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 8900,
    childPrice: 8900,
    duration: "Transfer",
    rating: 4.8,
    reviews: 198,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers Abu Dhabi and Al Ain areas",
      "Meet and greet by friendly and experienced driver",
      "Spacious 12-seater air-conditioned vehicle",
      "Perfect for large groups traveling to Zone 5"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Abu Dhabi or Al Ain."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: [
      "Transfers in Air conditioned, well maintained and comfortable mini bus or van",
      "Airport parking charges included",
      "One-way transfer service to Zone 5"
    ],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: [
      "Please carry a valid ID/Passport along with you during the transfer",
      "Provide detailed information on your Flight timings for easy Pickup",
      "Oversize and excess baggage is subject to availability of storage space",
      "If guests fail to report within the given time it will be a NO Show with no refund",
      "Limousine and Luxury transfers available at extra charges",
      "No eating, drinking, and smoking inside the vehicle",
      "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days"
    ],
    childPolicy: [
      "Children under 3 years will be considered as infant and entry will be free of cost",
      "Children aged from 3 to 10 years will be considered as child and charged child rate",
      "Children above age 10 will be considered as an adult and charged adult rate"
    ],
    faqs: [],
    customerReviews: [
      { name: "Asad Mirza", date: "2 days ago", rating: 5, comment: "Perfect 12-seater for our extended family trip to Abu Dhabi! Everyone was comfortable during the long journey. Driver was excellent and knew the best route.", helpful: 29 },
      { name: "Fatima Zahra", date: "1 week ago", rating: 5, comment: "Great for large groups going to Zone 5! The van was spacious and AC was perfect for the long trip to Al Ain. Highly recommend!", helpful: 23 },
      { name: "Tariq Mehmood", date: "2 weeks ago", rating: 5, comment: "Excellent service for our group of 10 to Abu Dhabi. Comfortable van, professional driver, and smooth journey. Best value for Zone 5!", helpful: 18 },
      { name: "Huda Ali", date: "3 weeks ago", rating: 4, comment: "Good experience for the long-distance transfer. Spacious 12-seater and experienced driver. Would book again for Zone 5 trips.", helpful: 14 }
    ]
  },
  "dubai-airport-pickup-zone2-4-seater": {
    id: "dubai-airport-pickup-zone2-4-seater",
    title: "Dubai Airport Pick Up to Zone 2 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 2 (JBR, Marina, Palm Jumeirah) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3400,
    childPrice: 3400,
    duration: "Transfer",
    rating: 4.8,
    reviews: 356,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: [
      "Covers JBR, Marina, Palm Jumeirah areas",
      "Meet and greet by friendly and experienced driver",
      "Comfortable 4-seater sedan",
      "Baggage assistance included"
    ],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport parking charges included", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Pickup", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Arun Sharma", date: "2 days ago", rating: 5, comment: "Perfect sedan for our couple trip to Marina! Clean car and very professional driver. Reached our hotel at Palm Jumeirah quickly. Excellent service!", helpful: 26 },
      { name: "Meenakshi Iyer", date: "1 week ago", rating: 5, comment: "Great 4-seater service to JBR! Just right for two of us with luggage. Driver was waiting at arrivals and helped with bags. Will book again!", helpful: 21 },
      { name: "Ravi Krishnan", date: "2 weeks ago", rating: 5, comment: "Comfortable ride to Zone 2. Sedan was clean and well-maintained. Driver knew the fastest route to our Marina apartment.", helpful: 16 },
      { name: "Sunita Devi", date: "3 weeks ago", rating: 4, comment: "Good experience overall. Car was nice and driver was courteous. Smooth transfer from airport to Palm Jumeirah.", helpful: 12 }
    ]
  },
  "dubai-airport-pickup-zone3-4-seater": {
    id: "dubai-airport-pickup-zone3-4-seater",
    title: "Dubai Airport Pick Up to Zone 3 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 3 (JVC, Sports City, Motor City) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3900,
    childPrice: 3900,
    duration: "Transfer",
    rating: 4.8,
    reviews: 278,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Covers JVC, Sports City, Motor City areas", "Meet and greet by friendly and experienced driver", "Comfortable 4-seater sedan", "Baggage assistance included"],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport parking charges included", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Pickup", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Prakash Gupta", date: "3 days ago", rating: 5, comment: "Excellent sedan transfer to JVC! Driver was very professional and knew the exact location. Perfect for our small family of 3.", helpful: 24 },
      { name: "Lakshmi Narayanan", date: "1 week ago", rating: 5, comment: "Great service to Sports City! Clean 4-seater and punctual driver. Comfortable ride after our long flight. Highly recommend!", helpful: 19 },
      { name: "Deepak Malhotra", date: "2 weeks ago", rating: 5, comment: "Smooth pickup to Motor City. Sedan was comfortable and AC was perfect. Driver helped with all our luggage.", helpful: 15 },
      { name: "Kavitha Ramesh", date: "3 weeks ago", rating: 4, comment: "Good transfer to Zone 3. Car was clean and driver was friendly. Value for money for couples or solo travelers.", helpful: 11 }
    ]
  },
  "dubai-airport-pickup-zone4-4-seater": {
    id: "dubai-airport-pickup-zone4-4-seater",
    title: "Dubai Airport Pick Up to Zone 4 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 4 (Dubai South, DWC Area) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 5500,
    childPrice: 5500,
    duration: "Transfer",
    rating: 4.8,
    reviews: 187,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Covers Dubai South, DWC Area", "Meet and greet by friendly and experienced driver", "Comfortable 4-seater sedan", "Baggage assistance included"],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport parking charges included", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Pickup", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Mohan Pillai", date: "2 days ago", rating: 5, comment: "Perfect sedan for our trip to Dubai South! Long journey but very comfortable. Driver was experienced and got us there safely.", helpful: 23 },
      { name: "Anita Bhatia", date: "1 week ago", rating: 5, comment: "Great transfer to DWC area. Clean car and professional driver. Worth every rupee for the distance covered!", helpful: 18 },
      { name: "Suresh Menon", date: "2 weeks ago", rating: 5, comment: "Excellent service to Zone 4. Sedan was comfortable for the long ride. Driver was punctual and helpful.", helpful: 14 },
      { name: "Geeta Venkatesh", date: "3 weeks ago", rating: 4, comment: "Good experience for the Zone 4 transfer. Vehicle was nice and driver knew the route well. Recommended!", helpful: 10 }
    ]
  },
  "dubai-airport-pickup-zone4-7-seater": {
    id: "dubai-airport-pickup-zone4-7-seater",
    title: "Dubai Airport Pick Up to Zone 4 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 4 (Dubai South, DWC Area).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 5700,
    childPrice: 5700,
    duration: "Transfer",
    rating: 4.9,
    reviews: 245,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Covers Dubai South, DWC Area", "Meet and greet by friendly and experienced driver", "Fully air-conditioned and comfortable vehicle", "Baggage assistance included"],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport parking charges included", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Pickup", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Rajendra Prasad", date: "3 days ago", rating: 5, comment: "Excellent 7-seater for our family trip to Dubai South! Spacious and comfortable for all 6 of us. Driver was very professional.", helpful: 27 },
      { name: "Sarita Joshi", date: "1 week ago", rating: 5, comment: "Great service to DWC area. The 7-seater was perfect for our family with kids. Driver helped with car seats. Highly recommend!", helpful: 22 },
      { name: "Vijay Kumar", date: "2 weeks ago", rating: 5, comment: "Smooth transfer to Zone 4. Vehicle was clean and spacious. Driver was punctual and knew the best route.", helpful: 17 },
      { name: "Padma Rao", date: "3 weeks ago", rating: 4, comment: "Good experience with the 7-seater to Dubai South. Comfortable ride for our group of 5. Would book again.", helpful: 13 }
    ]
  },
  "dubai-airport-pickup-zone4-12-seater": {
    id: "dubai-airport-pickup-zone4-12-seater",
    title: "Dubai Airport Pick Up to Zone 4 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 4 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 6000,
    childPrice: 6000,
    duration: "Transfer",
    rating: 4.8,
    reviews: 178,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Covers Dubai South, DWC Area", "Meet and greet by friendly and experienced driver", "Spacious 12-seater air-conditioned vehicle", "Perfect for large groups and families"],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable mini bus or van", "Airport parking charges included", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Pickup", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Harish Chandran", date: "2 days ago", rating: 5, comment: "Perfect 12-seater for our joint family trip to Zone 4! All 10 of us fit comfortably with luggage. Driver was excellent!", helpful: 29 },
      { name: "Usha Devi", date: "1 week ago", rating: 5, comment: "Great for large groups going to Dubai South! The van was spacious and well-maintained. Smooth ride for everyone.", helpful: 23 },
      { name: "Ramesh Babu", date: "2 weeks ago", rating: 5, comment: "Excellent service for our group to DWC area. 12-seater was perfect. Professional driver and comfortable journey.", helpful: 18 },
      { name: "Shanti Priya", date: "3 weeks ago", rating: 4, comment: "Good value for Zone 4 group transfer. Spacious vehicle and friendly driver. Would use again for family trips.", helpful: 14 }
    ]
  },
  "dubai-airport-pickup-zone5-4-seater": {
    id: "dubai-airport-pickup-zone5-4-seater",
    title: "Dubai Airport Pick Up to Zone 5 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Pick Up services to Zone 5 (Abu Dhabi, Al Ain) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 7200,
    childPrice: 7200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 145,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Covers Abu Dhabi and Al Ain areas", "Meet and greet by friendly and experienced driver", "Comfortable 4-seater sedan", "Long distance transfer included"],
    description: {
      overview: "Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Abu Dhabi or Al Ain."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport parking charges included", "One-way transfer service to Zone 5"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Pickup", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your arrival and Pickup to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Ganesh Murthy", date: "2 days ago", rating: 5, comment: "Perfect sedan for our couple trip to Abu Dhabi! Long journey but very comfortable. Driver was experienced and we felt safe throughout.", helpful: 28 },
      { name: "Pooja Srinivasan", date: "1 week ago", rating: 5, comment: "Great 4-seater service for the long trip to Al Ain. Clean car and professional driver. Worth the price for Zone 5!", helpful: 22 },
      { name: "Ashok Verma", date: "2 weeks ago", rating: 5, comment: "Excellent transfer to Abu Dhabi. Sedan was comfortable for the distance. Driver knew the highway well and got us there smoothly.", helpful: 17 },
      { name: "Radha Krishnan", date: "3 weeks ago", rating: 4, comment: "Good service for Zone 5 transfer. Vehicle was nice and driver was punctual. Comfortable for the long journey.", helpful: 13 }
    ]
  },
  "dubai-airport-dropoff-zone1-4-seater": {
    id: "dubai-airport-dropoff-zone1-4-seater",
    title: "Dubai Airport Drop-Off from Zone 1 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 1 (Deira, Bur Dubai, Downtown) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3300,
    childPrice: 3300,
    duration: "Transfer",
    rating: 4.8,
    reviews: 312,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 1 (Deira, Bur Dubai, Downtown)", "Comfortable 4-seater sedan", "Baggage assistance included", "Timely airport drop-off"],
    description: {
      overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight. Provide your flight departure time and hotel address at the time of booking for a seamless experience."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Sanjay Bhatt", date: "3 days ago", rating: 5, comment: "Perfect drop-off service from Downtown! Driver arrived early and got us to the airport with plenty of time. Clean sedan and professional service.", helpful: 27 },
      { name: "Divya Agarwal", date: "1 week ago", rating: 5, comment: "Excellent airport drop from Bur Dubai. Sedan was comfortable and driver helped with all our bags. Stress-free end to our Dubai trip!", helpful: 22 },
      { name: "Manoj Tiwari", date: "2 weeks ago", rating: 5, comment: "Great 4-seater drop-off from Deira. Driver was punctual and knew the fastest route to the airport. Highly recommend!", helpful: 17 },
      { name: "Nandini Rao", date: "3 weeks ago", rating: 4, comment: "Good experience with the airport drop. Car was clean and driver was friendly. Reached terminal on time.", helpful: 13 }
    ]
  },
  "dubai-airport-dropoff-zone1-7-seater": {
    id: "dubai-airport-dropoff-zone1-7-seater",
    title: "Dubai Airport Drop-Off from Zone 1 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 1 (Deira, Bur Dubai, Downtown).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3000,
    childPrice: 3000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 723,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 1 (Deira, Bur Dubai, Downtown)", "Fully air-conditioned 7-seater vehicle", "Baggage assistance included", "Timely airport drop-off"],
    description: {
      overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight. Provide your flight departure time and hotel address at the time of booking for a seamless experience."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Vinod Kapoor", date: "2 days ago", rating: 5, comment: "Excellent 7-seater drop-off for our family from Downtown! Spacious vehicle and driver arrived 10 minutes early. Made our departure stress-free.", helpful: 29 },
      { name: "Rekha Sharma", date: "1 week ago", rating: 5, comment: "Perfect airport transfer from Bur Dubai. The 7-seater was comfortable for our family of 5 with luggage. Driver was very helpful!", helpful: 24 },
      { name: "Anil Saxena", date: "2 weeks ago", rating: 5, comment: "Great service from Deira to airport. Vehicle was clean and spacious. Driver knew the best route and we reached early.", helpful: 18 },
      { name: "Sudha Venkat", date: "3 weeks ago", rating: 4, comment: "Good drop-off experience. 7-seater was perfect for our group. Driver was punctual and professional. Would book again.", helpful: 14 }
    ]
  },
  "dubai-airport-dropoff-zone1-12-seater": {
    id: "dubai-airport-dropoff-zone1-12-seater",
    title: "Dubai Airport Drop-Off from Zone 1 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 1 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4000,
    childPrice: 4000,
    duration: "Transfer",
    rating: 4.8,
    reviews: 498,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [
      { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }
    ],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 1 (Deira, Bur Dubai, Downtown)", "Spacious 12-seater air-conditioned vehicle", "Perfect for large groups and families", "Timely airport drop-off"],
    description: {
      overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.",
      whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight. Provide your flight departure time and hotel address at the time of booking for a seamless experience."
    },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable mini bus or van", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Oversize and excess baggage is subject to availability of storage space", "If guests fail to report within the given time it will be a NO Show with no refund", "Limousine and Luxury transfers available at extra charges", "No eating, drinking, and smoking inside the vehicle", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable", "If eligible for Refund your Amount will be returned back to your Account within 7 working days"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Ramesh Choudhary", date: "3 days ago", rating: 5, comment: "Perfect 12-seater for our large family drop-off! All 10 of us with heavy luggage reached airport smoothly from Downtown. Excellent service!", helpful: 31 },
      { name: "Kiran Deshmukh", date: "1 week ago", rating: 5, comment: "Great group transfer from Bur Dubai to airport. The van was spacious and comfortable. Driver was very helpful with all our bags!", helpful: 25 },
      { name: "Mahesh Kulkarni", date: "2 weeks ago", rating: 5, comment: "Excellent 12-seater service from Deira. Perfect for our joint family. Everyone reached the airport comfortably and on time.", helpful: 19 },
      { name: "Bhavna Patel", date: "3 weeks ago", rating: 4, comment: "Good experience with group drop-off. Van was clean and driver arrived on time. Would recommend for large groups.", helpful: 15 }
    ]
  },
  "dubai-airport-dropoff-zone2-4-seater": {
    id: "dubai-airport-dropoff-zone2-4-seater",
    title: "Dubai Airport Drop-Off from Zone 2 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 2 (JBR, Marina, Palm Jumeirah) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3400,
    childPrice: 3400,
    duration: "Transfer",
    rating: 4.8,
    reviews: 289,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 2 (JBR, Marina, Palm Jumeirah)", "Comfortable 4-seater sedan", "Baggage assistance included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Vikas Reddy", date: "2 days ago", rating: 5, comment: "Great sedan drop-off from Marina! Clean car and punctual driver. Perfect for couples heading to the airport.", helpful: 25 },
      { name: "Jyoti Mishra", date: "1 week ago", rating: 5, comment: "Excellent service from Palm Jumeirah to airport. Sedan was comfortable and driver knew the fastest route. Stress-free departure!", helpful: 20 },
      { name: "Naveen Singh", date: "2 weeks ago", rating: 5, comment: "Smooth transfer from JBR to Dubai airport. 4-seater was perfect for us. Driver was professional and helpful.", helpful: 16 },
      { name: "Meghna Iyer", date: "3 weeks ago", rating: 4, comment: "Good drop-off experience from Zone 2. Car was clean and driver was on time. Would use again for future trips.", helpful: 12 }
    ]
  },
  "dubai-airport-dropoff-zone2-7-seater": {
    id: "dubai-airport-dropoff-zone2-7-seater",
    title: "Dubai Airport Drop-Off from Zone 2 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 2 (JBR, Marina, Palm Jumeirah).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3500,
    childPrice: 3500,
    duration: "Transfer",
    rating: 4.9,
    reviews: 612,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [{ src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 2 (JBR, Marina, Palm Jumeirah)", "Fully air-conditioned 7-seater vehicle", "Baggage assistance included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Pankaj Sharma", date: "3 days ago", rating: 5, comment: "Perfect 7-seater drop-off from Marina! Family of 6 reached airport comfortably with all luggage. Driver was excellent!", helpful: 28 },
      { name: "Smita Nair", date: "1 week ago", rating: 5, comment: "Excellent service from Palm Jumeirah. Spacious vehicle and professional driver. Made our airport transfer stress-free!", helpful: 23 },
      { name: "Rakesh Kumar", date: "2 weeks ago", rating: 5, comment: "Great transfer from JBR to airport. 7-seater was perfect for our family. Driver arrived early and helped with bags.", helpful: 18 },
      { name: "Anupama Devi", date: "3 weeks ago", rating: 4, comment: "Good experience with Zone 2 drop-off. Vehicle was comfortable and driver was punctual. Reached airport on time.", helpful: 14 }
    ]
  },
  "dubai-airport-dropoff-zone2-12-seater": {
    id: "dubai-airport-dropoff-zone2-12-seater",
    title: "Dubai Airport Drop-Off from Zone 2 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 2 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4200,
    childPrice: 4200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 421,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 2 (JBR, Marina, Palm Jumeirah)", "Spacious 12-seater air-conditioned vehicle", "Perfect for large groups and families", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable mini bus or van", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Gopal Krishnan", date: "2 days ago", rating: 5, comment: "Excellent 12-seater for our big group from Marina! Everyone fit comfortably with all luggage. Perfect for joint family trips!", helpful: 30 },
      { name: "Sarita Gupta", date: "1 week ago", rating: 5, comment: "Great van service from Palm Jumeirah. 10 of us reached airport smoothly. Driver was very professional and helpful!", helpful: 24 },
      { name: "Dinesh Yadav", date: "2 weeks ago", rating: 5, comment: "Perfect transfer from JBR for our group. 12-seater was spacious and comfortable. Highly recommend for large groups!", helpful: 18 },
      { name: "Pushpa Menon", date: "3 weeks ago", rating: 4, comment: "Good experience with group drop-off from Zone 2. Van was clean and driver was punctual. Would book again.", helpful: 14 }
    ]
  },
  "dubai-airport-dropoff-zone3-4-seater": {
    id: "dubai-airport-dropoff-zone3-4-seater",
    title: "Dubai Airport Drop-Off from Zone 3 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 3 (JVC, Sports City, Motor City) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 3900,
    childPrice: 3900,
    duration: "Transfer",
    rating: 4.8,
    reviews: 234,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 3 (JVC, Sports City, Motor City)", "Comfortable 4-seater sedan", "Baggage assistance included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Narayan Joshi", date: "3 days ago", rating: 5, comment: "Excellent sedan drop-off from JVC! Driver arrived early and knew the best route to the airport. Perfect for couples or small families.", helpful: 24 },
      { name: "Asha Pillai", date: "1 week ago", rating: 5, comment: "Great service from Sports City. Clean 4-seater and punctual driver. Reached airport with plenty of time. Highly recommend!", helpful: 19 },
      { name: "Kishore Babu", date: "2 weeks ago", rating: 5, comment: "Smooth transfer from Motor City to Dubai airport. Sedan was comfortable and driver was professional. Will use again!", helpful: 15 },
      { name: "Vasudha Rani", date: "3 weeks ago", rating: 4, comment: "Good drop-off experience from Zone 3. Car was nice and driver was friendly. Reached terminal on time.", helpful: 11 }
    ]
  },
  "dubai-airport-dropoff-zone3-7-seater": {
    id: "dubai-airport-dropoff-zone3-7-seater",
    title: "Dubai Airport Drop-Off from Zone 3 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 3 (JVC, Sports City, Motor City).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4000,
    childPrice: 4000,
    duration: "Transfer",
    rating: 4.9,
    reviews: 345,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [{ src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 3 (JVC, Sports City, Motor City)", "Fully air-conditioned 7-seater vehicle", "Baggage assistance included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Shekhar Reddy", date: "2 days ago", rating: 5, comment: "Perfect 7-seater drop-off from JVC! Family of 6 reached airport comfortably. Driver was excellent and arrived early.", helpful: 27 },
      { name: "Shalini Devi", date: "1 week ago", rating: 5, comment: "Great service from Sports City. Spacious 7-seater was perfect for our family. Driver helped with all luggage. Stress-free departure!", helpful: 22 },
      { name: "Murali Krishna", date: "2 weeks ago", rating: 5, comment: "Excellent transfer from Motor City. Vehicle was clean and comfortable. Driver knew the fastest route to airport.", helpful: 17 },
      { name: "Aruna Kumari", date: "3 weeks ago", rating: 4, comment: "Good experience with Zone 3 drop-off. 7-seater was spacious and driver was punctual. Would recommend!", helpful: 13 }
    ]
  },
  "dubai-airport-dropoff-zone3-12-seater": {
    id: "dubai-airport-dropoff-zone3-12-seater",
    title: "Dubai Airport Drop-Off from Zone 3 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 3 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 4200,
    childPrice: 4200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 256,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 3 (JVC, Sports City, Motor City)", "Spacious 12-seater air-conditioned vehicle", "Perfect for large groups and families", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable mini bus or van", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Balakrishnan Nair", date: "3 days ago", rating: 5, comment: "Excellent 12-seater for our big group from JVC! All 11 of us reached airport smoothly. Perfect for joint family trips!", helpful: 29 },
      { name: "Kamala Devi", date: "1 week ago", rating: 5, comment: "Great van service from Sports City. 10 of us with luggage fit perfectly. Driver was very professional and helpful!", helpful: 24 },
      { name: "Prasad Rao", date: "2 weeks ago", rating: 5, comment: "Perfect transfer from Motor City for our group. 12-seater was spacious and comfortable. Highly recommend!", helpful: 18 },
      { name: "Savitri Bai", date: "3 weeks ago", rating: 4, comment: "Good group drop-off from Zone 3. Van was clean and driver was punctual. Everyone reached airport on time.", helpful: 14 }
    ]
  },
  "dubai-airport-dropoff-zone4-4-seater": {
    id: "dubai-airport-dropoff-zone4-4-seater",
    title: "Dubai Airport Drop-Off from Zone 4 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 4 (Dubai South, DWC Area) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 5500,
    childPrice: 5500,
    duration: "Transfer",
    rating: 4.8,
    reviews: 156,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 4 (Dubai South, DWC Area)", "Comfortable 4-seater sedan", "Baggage assistance included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Jagdish Prasad", date: "2 days ago", rating: 5, comment: "Perfect sedan drop-off from Dubai South! Long journey but very comfortable. Driver was experienced and got us to airport on time.", helpful: 25 },
      { name: "Veena Sharma", date: "1 week ago", rating: 5, comment: "Great 4-seater service from DWC area. Clean car and professional driver. Worth every penny for Zone 4!", helpful: 20 },
      { name: "Rajan Menon", date: "2 weeks ago", rating: 5, comment: "Excellent transfer from Zone 4. Sedan was comfortable for the distance. Driver knew the highway well.", helpful: 16 },
      { name: "Geetha Kumari", date: "3 weeks ago", rating: 4, comment: "Good service for Zone 4 drop-off. Vehicle was nice and driver was punctual. Comfortable for couples.", helpful: 12 }
    ]
  },
  "dubai-airport-dropoff-zone4-7-seater": {
    id: "dubai-airport-dropoff-zone4-7-seater",
    title: "Dubai Airport Drop-Off from Zone 4 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 4 (Dubai South, DWC Area).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 5700,
    childPrice: 5700,
    duration: "Transfer",
    rating: 4.9,
    reviews: 212,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [{ src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 4 (Dubai South, DWC Area)", "Fully air-conditioned 7-seater vehicle", "Baggage assistance included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Venkatesh Iyer", date: "3 days ago", rating: 5, comment: "Excellent 7-seater drop-off from Dubai South! Family of 6 traveled comfortably to the airport. Driver was professional!", helpful: 28 },
      { name: "Lakshmi Priya", date: "1 week ago", rating: 5, comment: "Great service from DWC area. Spacious 7-seater was perfect for our family. Driver arrived on time and helped with bags.", helpful: 23 },
      { name: "Krishna Murthy", date: "2 weeks ago", rating: 5, comment: "Perfect transfer from Zone 4. Vehicle was clean and comfortable. Driver knew the best route to airport.", helpful: 18 },
      { name: "Padmini Rao", date: "3 weeks ago", rating: 4, comment: "Good experience with Zone 4 drop-off. 7-seater was spacious and driver was helpful. Would book again.", helpful: 14 }
    ]
  },
  "dubai-airport-dropoff-zone4-12-seater": {
    id: "dubai-airport-dropoff-zone4-12-seater",
    title: "Dubai Airport Drop-Off from Zone 4 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 4 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 6000,
    childPrice: 6000,
    duration: "Transfer",
    rating: 4.8,
    reviews: 145,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 4 (Dubai South, DWC Area)", "Spacious 12-seater air-conditioned vehicle", "Perfect for large groups and families", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable mini bus or van", "Airport drop-off service", "One-way transfer service"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Chandrasekhar Rao", date: "2 days ago", rating: 5, comment: "Perfect 12-seater for our large group from Dubai South! Everyone reached airport comfortably and on time. Excellent service!", helpful: 30 },
      { name: "Manjula Devi", date: "1 week ago", rating: 5, comment: "Great van service from DWC area. 11 of us with luggage fit perfectly. Driver was very professional!", helpful: 25 },
      { name: "Satish Kumar", date: "2 weeks ago", rating: 5, comment: "Excellent group transfer from Zone 4. 12-seater was spacious and comfortable. Highly recommend for families!", helpful: 19 },
      { name: "Vani Kumari", date: "3 weeks ago", rating: 4, comment: "Good experience with large group drop-off. Van was clean and driver was punctual. Would use again.", helpful: 15 }
    ]
  },
  "dubai-airport-dropoff-zone5-4-seater": {
    id: "dubai-airport-dropoff-zone5-4-seater",
    title: "Dubai Airport Drop-Off from Zone 5 - 4 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 5 (Abu Dhabi, Al Ain) in a 4-seater sedan.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 7200,
    childPrice: 7200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 123,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 5 (Abu Dhabi, Al Ain)", "Comfortable 4-seater sedan", "Long distance transfer included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation in Abu Dhabi or Al Ain and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service from Zone 5"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Raghunath Sharma", date: "3 days ago", rating: 5, comment: "Excellent long-distance drop-off from Abu Dhabi! Sedan was comfortable for the journey. Driver was experienced and professional.", helpful: 27 },
      { name: "Sita Devi", date: "1 week ago", rating: 5, comment: "Great service from Al Ain to Dubai airport. Clean 4-seater and punctual driver. Worth every rupee for Zone 5!", helpful: 22 },
      { name: "Naresh Gupta", date: "2 weeks ago", rating: 5, comment: "Perfect transfer from Abu Dhabi. Sedan was comfortable for the long ride. Driver knew the route well.", helpful: 17 },
      { name: "Lalitha Rani", date: "3 weeks ago", rating: 4, comment: "Good service for Zone 5 drop-off. Vehicle was nice and driver was helpful. Comfortable for the long journey.", helpful: 13 }
    ]
  },
  "dubai-airport-dropoff-zone5-7-seater": {
    id: "dubai-airport-dropoff-zone5-7-seater",
    title: "Dubai Airport Drop-Off from Zone 5 - 7 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 5 (Abu Dhabi, Al Ain).",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 7200,
    childPrice: 7200,
    duration: "Transfer",
    rating: 4.9,
    reviews: 234,
    pricePerVehicle: true,
    vehicleCapacity: 7,
    heroImages: [{ src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 5 (Abu Dhabi, Al Ain)", "Fully air-conditioned 7-seater vehicle", "Long distance transfer included", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation in Abu Dhabi or Al Ain and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable vehicle", "Airport drop-off service", "One-way transfer service from Zone 5"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Subramaniam Pillai", date: "2 days ago", rating: 5, comment: "Excellent 7-seater for our family drop-off from Abu Dhabi! Long journey but very comfortable. Driver was experienced and professional.", helpful: 29 },
      { name: "Kamakshi Devi", date: "1 week ago", rating: 5, comment: "Great service from Al Ain to Dubai airport. Spacious 7-seater was perfect for our family of 5. Driver knew the highway well!", helpful: 24 },
      { name: "Vijayaraghavan", date: "2 weeks ago", rating: 5, comment: "Perfect transfer from Abu Dhabi. Vehicle was comfortable for the long ride. Driver was punctual and helpful.", helpful: 18 },
      { name: "Uma Shankar", date: "3 weeks ago", rating: 4, comment: "Good experience with Zone 5 drop-off. 7-seater was spacious and driver was professional. Would recommend!", helpful: 14 }
    ]
  },
  "dubai-airport-dropoff-zone5-12-seater": {
    id: "dubai-airport-dropoff-zone5-12-seater",
    title: "Dubai Airport Drop-Off from Zone 5 - 12 Seater",
    shortDescription: "Book our flawless and best-priced Airport Drop-Off services from Zone 5 in a spacious 12-seater vehicle.",
    location: "Dubai, UAE",
    city: "dubai",
    basePrice: 8900,
    childPrice: 8900,
    duration: "Transfer",
    rating: 4.8,
    reviews: 167,
    pricePerVehicle: true,
    vehicleCapacity: 12,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "Dubai Airport Transfer" }],
    galleryImages: [],
    highlights: ["Hotel pickup from Zone 5 (Abu Dhabi, Al Ain)", "Spacious 12-seater air-conditioned vehicle", "Perfect for large groups traveling from Zone 5", "Timely airport drop-off"],
    description: { overview: "Book our flawless and best-priced Airport Drop-Off services to ensure a stress-free end to your Dubai vacation or business trip.", whatToExpect: "Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements. Our driver will pick you up from your hotel or accommodation in Abu Dhabi or Al Ain and ensure you reach Dubai International Airport on time for your flight." },
    itinerary: [],
    tourTimings: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    inclusions: ["Transfers in Air conditioned, well maintained and comfortable mini bus or van", "Airport drop-off service", "One-way transfer service from Zone 5"],
    exclusions: ["All personal expenses spent for tip, gratuity etc as part of this ride"],
    bookingPolicy: ["Please carry a valid ID/Passport along with you during the transfer", "Provide detailed information on your Flight timings for easy Drop-off", "Keep 3 hrs difference between your pickup and flight departure to avoid any inconvenience"],
    cancellationPolicy: ["All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable", "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable"],
    childPolicy: ["Children under 3 years will be considered as infant and entry will be free of cost", "Children aged from 3 to 10 years will be considered as child and charged child rate", "Children above age 10 will be considered as an adult and charged adult rate"],
    faqs: [],
    customerReviews: [
      { name: "Thirumalai Rajan", date: "3 days ago", rating: 5, comment: "Perfect 12-seater for our extended family from Abu Dhabi! All 10 of us traveled comfortably to Dubai airport. Excellent long-distance service!", helpful: 31 },
      { name: "Parvathi Devi", date: "1 week ago", rating: 5, comment: "Great van service from Al Ain. 11 of us with heavy luggage reached airport smoothly. Driver was very professional and knew the route well!", helpful: 26 },
      { name: "Gopalan Nair", date: "2 weeks ago", rating: 5, comment: "Excellent group transfer from Zone 5. 12-seater was spacious and comfortable for the long journey. Highly recommend for families!", helpful: 20 },
      { name: "Shobha Rani", date: "3 weeks ago", rating: 4, comment: "Good experience with large group drop-off from Abu Dhabi. Van was clean and driver was helpful. Worth the price for Zone 5.", helpful: 16 }
    ]
  },
  // Bangkok Transfers
  "bangkok-bkk-airport-pickup-sedan": {
    id: "bangkok-bkk-airport-pickup-sedan",
    title: "Suvarnabhumi Airport (BKK) to Bangkok Hotel - Sedan Car",
    shortDescription: "Private airport pickup from Suvarnabhumi International Airport (BKK) to your Bangkok hotel in a comfortable sedan car for 1-3 passengers.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2700,
    childPrice: 2700,
    duration: "Transfer",
    rating: 4.9,
    reviews: 856,
    pricePerVehicle: true,
    vehicleCapacity: 3,
    heroImages: [{ src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "BKK Airport Pickup" }],
    galleryImages: [],
    highlights: ["Reliable Pick-Up – Professional staff wait at Exit Gate 4 with your name card", "24/7 Service – Available day and night with minimal night surcharge", "Sedan Car: 2 big bags + 3 hand bags capacity", "Real-Time Support via WhatsApp at +66 6 274 30 007"],
    description: { overview: "Upon arrival at Bangkok's Suvarnabhumi International Airport, our professional driver will meet you at Exit Gate 4 holding a name card with your name.", whatToExpect: "Upon arrival at Bangkok Airport, go directly to the Immigration Department and obtain your visa. After completing immigration formalities, collect your checked baggage from the designated carousel. After collecting your luggage, proceed to Exit Gate 4. Our guide will be waiting for you inside Exit Gate 4, holding an identification card with your name on it.\n\nThe distance from Suvarnabhumi International Airport to Bangkok is 30 km and takes approximately 30 minutes by car. This is your private car; it will take you directly from the airport to your hotel in Bangkok without stopping anywhere along the way." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private sedan car transfer", "Meet & greet at Exit Gate 4", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Driver will wait at airport for up to 3 hours after flight arrival", "Please provide flight details when booking", "Extra baggage charge of 500 THB per bag if exceeding limit"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup", "100% charge for cancellations within 72 hours"],
    childPolicy: ["Same rate for adults and children", "Price is per vehicle, not per person"],
    faqs: [
      { question: "Where will the driver meet me?", answer: "Our driver will wait at Exit Gate 4 with a name card showing your name." },
      { question: "What if my flight is delayed?", answer: "If your flight is delayed, please inform us. The driver will wait up to 3 hours from your original arrival time." }
    ],
    customerReviews: [
      { name: "Vikram Sharma", date: "2 days ago", rating: 5, comment: "Excellent pickup service from BKK airport! Driver was waiting exactly at Exit Gate 4 with my name card. Clean sedan and smooth ride to hotel.", helpful: 28 },
      { name: "Priya Nair", date: "1 week ago", rating: 5, comment: "Very professional service. Flight was delayed but driver waited patiently. Reached hotel comfortably. Highly recommend!", helpful: 22 }
    ]
  },
  "bangkok-bkk-airport-pickup-suv": {
    id: "bangkok-bkk-airport-pickup-suv",
    title: "Suvarnabhumi Airport (BKK) to Bangkok Hotel - Mini SUV",
    shortDescription: "Private airport pickup from Suvarnabhumi International Airport (BKK) to your Bangkok hotel in a Mini SUV for 1-4 passengers.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2900,
    childPrice: 2900,
    duration: "Transfer",
    rating: 4.9,
    reviews: 654,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop", title: "BKK Airport Pickup SUV" }],
    galleryImages: [],
    highlights: ["Reliable Pick-Up – Professional staff wait at Exit Gate 4 with your name card", "24/7 Service – Available day and night with minimal night surcharge", "Mini SUV: 4 big bags + 4 hand bags capacity", "Real-Time Support via WhatsApp at +66 6 274 30 007"],
    description: { overview: "Upon arrival at Bangkok's Suvarnabhumi International Airport, our professional driver will meet you at Exit Gate 4 holding a name card with your name.", whatToExpect: "Upon arrival at Bangkok Airport, go directly to the Immigration Department and obtain your visa. After completing immigration formalities, collect your checked baggage from the designated carousel. After collecting your luggage, proceed to Exit Gate 4. Our guide will be waiting for you inside Exit Gate 4.\n\nThe distance from Suvarnabhumi International Airport to Bangkok is 30 km and takes approximately 30 minutes by car. This Mini SUV provides more space for luggage and passengers." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private Mini SUV transfer", "Meet & greet at Exit Gate 4", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Driver will wait at airport for up to 3 hours after flight arrival", "Please provide flight details when booking"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup", "100% charge for cancellations within 72 hours"],
    childPolicy: ["Same rate for adults and children", "Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: [
      { name: "Rahul Gupta", date: "3 days ago", rating: 5, comment: "Perfect SUV for our family of 4! Plenty of room for luggage. Driver was professional and the ride was very comfortable.", helpful: 25 }
    ]
  },
  "bangkok-bkk-airport-pickup-van": {
    id: "bangkok-bkk-airport-pickup-van",
    title: "Suvarnabhumi Airport (BKK) to Bangkok Hotel - Mini Van",
    shortDescription: "Private airport pickup from Suvarnabhumi International Airport (BKK) to your Bangkok hotel in a spacious Mini Van for 1-10 passengers.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3300,
    childPrice: 3300,
    duration: "Transfer",
    rating: 4.9,
    reviews: 523,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "BKK Airport Pickup Van" }],
    galleryImages: [],
    highlights: ["Reliable Pick-Up – Professional staff wait at Exit Gate 4 with your name card", "24/7 Service – Available day and night with minimal night surcharge", "Mini Van: 10 big bags + 10 hand bags capacity", "Perfect for large families or groups"],
    description: { overview: "Upon arrival at Bangkok's Suvarnabhumi International Airport, our professional driver will meet you at Exit Gate 4 holding a name card with your name.", whatToExpect: "The Mini Van is perfect for large families or groups traveling together. With capacity for up to 10 passengers and ample luggage space, everyone travels together comfortably.\n\nThe distance from Suvarnabhumi International Airport to Bangkok is 30 km and takes approximately 30 minutes by car." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private Mini Van transfer", "Meet & greet at Exit Gate 4", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Driver will wait at airport for up to 3 hours after flight arrival", "Please provide flight details when booking"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup", "100% charge for cancellations within 72 hours"],
    childPolicy: ["Same rate for adults and children", "Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: [
      { name: "Anil Kumar", date: "4 days ago", rating: 5, comment: "Excellent van for our group of 8! Everyone fit comfortably with all our luggage. Driver was friendly and professional.", helpful: 30 }
    ]
  },
  "bangkok-dmk-airport-pickup-sedan": {
    id: "bangkok-dmk-airport-pickup-sedan",
    title: "Don Mueang Airport (DMK) to Bangkok Hotel - Sedan Car",
    shortDescription: "Private airport pickup from Don Mueang International Airport (DMK) to your Bangkok hotel in a comfortable sedan car for 1-3 passengers.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2700,
    childPrice: 2700,
    duration: "Transfer",
    rating: 4.8,
    reviews: 445,
    pricePerVehicle: true,
    vehicleCapacity: 3,
    heroImages: [{ src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", title: "DMK Airport Pickup" }],
    galleryImages: [],
    highlights: ["International arrivals: Meet at Exit Gate 5", "Domestic arrivals: Meet at Exit Gate 11", "24/7 Service – Available day and night", "Sedan Car: 2 big bags + 3 hand bags capacity"],
    description: { overview: "Upon arrival at Don Mueang International Airport, our professional driver will meet you with a name card.", whatToExpect: "For International Arrivals: Our guide will be waiting inside Exit 5 with a name card.\nFor Domestic Arrivals: Our guide will be waiting inside Exit 11 with a name card.\n\nThe distance from Don Mueang International Airport to Bangkok is 25 km and takes approximately 30 minutes by car." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private sedan car transfer", "Meet & greet service", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Driver will wait at airport for up to 3 hours after flight arrival", "Please provide flight details when booking"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup", "100% charge for cancellations within 72 hours"],
    childPolicy: ["Same rate for adults and children", "Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: [
      { name: "Suresh Menon", date: "5 days ago", rating: 5, comment: "Great pickup from DMK airport! Driver was at Exit 5 exactly as promised. Comfortable sedan and quick ride to hotel.", helpful: 20 }
    ]
  },
  "bangkok-dmk-airport-pickup-suv": {
    id: "bangkok-dmk-airport-pickup-suv",
    title: "Don Mueang Airport (DMK) to Bangkok Hotel - Mini SUV",
    shortDescription: "Private airport pickup from Don Mueang International Airport (DMK) to your Bangkok hotel in a Mini SUV for 1-4 passengers.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2900,
    childPrice: 2900,
    duration: "Transfer",
    rating: 4.8,
    reviews: 378,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop", title: "DMK Airport Pickup SUV" }],
    galleryImages: [],
    highlights: ["International arrivals: Meet at Exit Gate 5", "Domestic arrivals: Meet at Exit Gate 11", "Mini SUV: 4 big bags + 4 hand bags capacity", "Perfect for families"],
    description: { overview: "Upon arrival at Don Mueang International Airport, our professional driver will meet you with a name card.", whatToExpect: "The Mini SUV provides extra space for luggage and comfort for up to 4 passengers.\n\nThe distance from Don Mueang International Airport to Bangkok is 25 km and takes approximately 30 minutes by car." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private Mini SUV transfer", "Meet & greet service", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Driver will wait at airport for up to 3 hours after flight arrival"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: []
  },
  "bangkok-dmk-airport-pickup-van": {
    id: "bangkok-dmk-airport-pickup-van",
    title: "Don Mueang Airport (DMK) to Bangkok Hotel - Mini Van",
    shortDescription: "Private airport pickup from Don Mueang International Airport (DMK) to your Bangkok hotel in a spacious Mini Van for 1-10 passengers.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 3300,
    childPrice: 3300,
    duration: "Transfer",
    rating: 4.8,
    reviews: 312,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "DMK Airport Pickup Van" }],
    galleryImages: [],
    highlights: ["International arrivals: Meet at Exit Gate 5", "Domestic arrivals: Meet at Exit Gate 11", "Mini Van: 10 big bags + 10 hand bags capacity", "Perfect for large groups"],
    description: { overview: "Upon arrival at Don Mueang International Airport, our professional driver will meet you with a name card.", whatToExpect: "The Mini Van is ideal for large families or groups with plenty of luggage space.\n\nThe distance from Don Mueang International Airport to Bangkok is 25 km and takes approximately 30 minutes by car." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private Mini Van transfer", "Meet & greet service", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Driver will wait at airport for up to 3 hours after flight arrival"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: []
  },
  "bangkok-bkk-airport-dropoff-sedan": {
    id: "bangkok-bkk-airport-dropoff-sedan",
    title: "Bangkok Hotel to Suvarnabhumi Airport (BKK) - Sedan Car",
    shortDescription: "Private airport drop-off from your Bangkok hotel to Suvarnabhumi International Airport (BKK) in a comfortable sedan car.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2200,
    childPrice: 2200,
    duration: "Transfer",
    rating: 4.8,
    reviews: 723,
    pricePerVehicle: true,
    vehicleCapacity: 3,
    heroImages: [{ src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", title: "BKK Airport Dropoff" }],
    galleryImages: [],
    highlights: ["Distance: ~35 km from Bangkok Hotel to BKK Airport", "Travel Time: ~40 minutes under normal traffic", "Sedan Car: 2 big bags + 3 hand bags capacity", "Driver waits 10-15 minutes at hotel lobby"],
    description: { overview: "Private airport drop-off service from your Bangkok hotel to Suvarnabhumi International Airport.", whatToExpect: "The distance from your Bangkok hotel to Suvarnabhumi International Airport is 35 km, and it takes about 40 minutes to travel. Please plan to reach the airport at least 3 hours before your flight time.\n\nPlease check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time. The driver will wait for you for 10-15 minutes only." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private sedan car transfer", "Hotel pickup", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Be ready in hotel lobby at scheduled pickup time", "Driver waits 10-15 minutes only", "Plan to reach airport 3 hours before flight"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup", "Reschedule free by contacting 36 hours in advance"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: [
      { name: "Meena Patel", date: "3 days ago", rating: 5, comment: "Smooth drop-off to BKK airport! Driver was punctual and helped with luggage. Reached airport with plenty of time.", helpful: 24 }
    ]
  },
  "bangkok-bkk-airport-dropoff-suv": {
    id: "bangkok-bkk-airport-dropoff-suv",
    title: "Bangkok Hotel to Suvarnabhumi Airport (BKK) - Mini SUV",
    shortDescription: "Private airport drop-off from your Bangkok hotel to Suvarnabhumi International Airport (BKK) in a Mini SUV.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2600,
    childPrice: 2600,
    duration: "Transfer",
    rating: 4.8,
    reviews: 512,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop", title: "BKK Airport Dropoff SUV" }],
    galleryImages: [],
    highlights: ["Distance: ~35 km from Bangkok Hotel to BKK Airport", "Travel Time: ~40 minutes under normal traffic", "Mini SUV: 4 big bags + 4 hand bags capacity", "Perfect for families with luggage"],
    description: { overview: "Private airport drop-off service from your Bangkok hotel to Suvarnabhumi International Airport in a spacious Mini SUV.", whatToExpect: "The Mini SUV provides extra comfort and luggage space for your journey to the airport." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private Mini SUV transfer", "Hotel pickup", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Be ready in hotel lobby at scheduled pickup time", "Driver waits 10-15 minutes only"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: []
  },
  "bangkok-bkk-airport-dropoff-van": {
    id: "bangkok-bkk-airport-dropoff-van",
    title: "Bangkok Hotel to Suvarnabhumi Airport (BKK) - Mini Van",
    shortDescription: "Private airport drop-off from your Bangkok hotel to Suvarnabhumi International Airport (BKK) in a spacious Mini Van.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2900,
    childPrice: 2900,
    duration: "Transfer",
    rating: 4.8,
    reviews: 432,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [{ src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", title: "BKK Airport Dropoff Van" }],
    galleryImages: [],
    highlights: ["Distance: ~35 km from Bangkok Hotel to BKK Airport", "Travel Time: ~40 minutes under normal traffic", "Mini Van: 10 big bags + 10 hand bags capacity", "Perfect for large groups"],
    description: { overview: "Private airport drop-off service from your Bangkok hotel to Suvarnabhumi International Airport in a spacious Mini Van.", whatToExpect: "The Mini Van is perfect for large groups or families traveling together with lots of luggage." },
    itinerary: [],
    tourTimings: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    inclusions: ["Private Mini Van transfer", "Hotel pickup", "All toll taxes and fuel included", "Baggage assistance"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Night surcharge (300 THB for 12:00 AM - 6:00 AM pickups)"],
    bookingPolicy: ["Be ready in hotel lobby at scheduled pickup time", "Driver waits 10-15 minutes only"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: []
  },
  "bangkok-temple-tour-airport-sedan": {
    id: "bangkok-temple-tour-airport-sedan",
    title: "Bangkok 2-Temple Tour + BKK Airport Drop - Sedan Car",
    shortDescription: "Combine a 2-temple tour (Golden Temple & Marble Temple) with airport drop-off to Suvarnabhumi in a sedan car.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 5100,
    childPrice: 5100,
    duration: "3 Hrs + Transfer",
    rating: 4.9,
    reviews: 289,
    pricePerVehicle: true,
    vehicleCapacity: 3,
    heroImages: [{ src: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", title: "Temple Tour + Airport" }],
    galleryImages: [],
    highlights: ["Visit Golden Temple (Wat Traimit)", "Visit Marble Temple (Wat Benchamabophit)", "Airport drop-off to Suvarnabhumi included", "3-hour temple tour duration"],
    description: { overview: "Make the most of your last day in Bangkok with a 2-temple tour followed by airport drop-off.", whatToExpect: "The Bangkok 2-Temple Tour includes visits to the Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit). Temple tickets are not included - please purchase directly at the temples.\n\nAfter the 3-hour temple tour, you'll be dropped off at Suvarnabhumi International Airport. With tour + 40-minute drive + 3-hour airport buffer, plan to leave your hotel 6-7 hours before flight departure." },
    itinerary: [
      { time: "Start", title: "Hotel Pickup", description: "Pickup from your Bangkok hotel" },
      { time: "1 hr", title: "Golden Temple", description: "Visit Wat Traimit - home to the world's largest solid gold Buddha" },
      { time: "2 hrs", title: "Marble Temple", description: "Explore Wat Benchamabophit, known for its beautiful Italian marble" },
      { time: "3 hrs", title: "Airport Drop", description: "Transfer to Suvarnabhumi International Airport" }
    ],
    tourTimings: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
    inclusions: ["Private sedan car for tour and transfer", "Driver/guide", "All toll taxes and fuel included"],
    exclusions: ["Temple entrance tickets", "Personal expenses", "Tips and gratuities"],
    bookingPolicy: ["Plan tour to finish 3+ hours before flight", "Temple tickets not included"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: [
      { name: "Deepak Joshi", date: "1 week ago", rating: 5, comment: "Perfect way to spend our last day in Bangkok! Visited two beautiful temples and made it to airport on time. Great value!", helpful: 32 }
    ]
  },
  "bangkok-temple-tour-airport-suv": {
    id: "bangkok-temple-tour-airport-suv",
    title: "Bangkok 2-Temple Tour + BKK Airport Drop - Mini SUV",
    shortDescription: "Combine a 2-temple tour (Golden Temple & Marble Temple) with airport drop-off to Suvarnabhumi in a Mini SUV.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 5600,
    childPrice: 5600,
    duration: "3 Hrs + Transfer",
    rating: 4.9,
    reviews: 245,
    pricePerVehicle: true,
    vehicleCapacity: 4,
    heroImages: [{ src: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", title: "Temple Tour + Airport SUV" }],
    galleryImages: [],
    highlights: ["Visit Golden Temple (Wat Traimit)", "Visit Marble Temple (Wat Benchamabophit)", "Airport drop-off included", "More luggage space in Mini SUV"],
    description: { overview: "Make the most of your last day in Bangkok with a 2-temple tour followed by airport drop-off in a comfortable Mini SUV.", whatToExpect: "Perfect for families who want to see Bangkok's temples before their flight. The Mini SUV provides extra comfort and luggage space." },
    itinerary: [
      { time: "Start", title: "Hotel Pickup", description: "Pickup from your Bangkok hotel" },
      { time: "1 hr", title: "Golden Temple", description: "Visit Wat Traimit" },
      { time: "2 hrs", title: "Marble Temple", description: "Explore Wat Benchamabophit" },
      { time: "3 hrs", title: "Airport Drop", description: "Transfer to Suvarnabhumi International Airport" }
    ],
    tourTimings: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
    inclusions: ["Private Mini SUV for tour and transfer", "Driver/guide", "All toll taxes and fuel included"],
    exclusions: ["Temple entrance tickets", "Personal expenses", "Tips and gratuities"],
    bookingPolicy: ["Plan tour to finish 3+ hours before flight"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: []
  },
  "bangkok-temple-tour-airport-van": {
    id: "bangkok-temple-tour-airport-van",
    title: "Bangkok 2-Temple Tour + BKK Airport Drop - Mini Van",
    shortDescription: "Combine a 2-temple tour (Golden Temple & Marble Temple) with airport drop-off to Suvarnabhumi in a spacious Mini Van.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 6200,
    childPrice: 6200,
    duration: "3 Hrs + Transfer",
    rating: 4.9,
    reviews: 198,
    pricePerVehicle: true,
    vehicleCapacity: 10,
    heroImages: [{ src: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", title: "Temple Tour + Airport Van" }],
    galleryImages: [],
    highlights: ["Visit Golden Temple (Wat Traimit)", "Visit Marble Temple (Wat Benchamabophit)", "Airport drop-off included", "Perfect for large groups"],
    description: { overview: "Make the most of your last day in Bangkok with a 2-temple tour followed by airport drop-off in a spacious Mini Van.", whatToExpect: "Ideal for large families or groups traveling together. Visit Bangkok's beautiful temples before catching your flight." },
    itinerary: [
      { time: "Start", title: "Hotel Pickup", description: "Pickup from your Bangkok hotel" },
      { time: "1 hr", title: "Golden Temple", description: "Visit Wat Traimit" },
      { time: "2 hrs", title: "Marble Temple", description: "Explore Wat Benchamabophit" },
      { time: "3 hrs", title: "Airport Drop", description: "Transfer to Suvarnabhumi International Airport" }
    ],
    tourTimings: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
    inclusions: ["Private Mini Van for tour and transfer", "Driver/guide", "All toll taxes and fuel included"],
    exclusions: ["Temple entrance tickets", "Personal expenses", "Tips and gratuities"],
    bookingPolicy: ["Plan tour to finish 3+ hours before flight"],
    cancellationPolicy: ["Free cancellation up to 72 hours before pickup"],
    childPolicy: ["Price is per vehicle, not per person"],
    faqs: [],
    customerReviews: []
  },
  "massage-coupons": {
    id: "massage-coupons",
    title: "Health Land Gift Voucher: Traditional Thai Massage (120 Min)",
    shortDescription: "Experience the finest traditional Thai massage at Health Land, one of Bangkok's most reputable wellness centers. Redeem your gift voucher for a blissful 2-hour session.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 2775,
    childPrice: 0,
    duration: "120 Minutes",
    rating: 4.9,
    reviews: 2156,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "120 Minutes Traditional Thai Massage",
      "Certified Professional Therapists",
      "Premium Wellness Center Environment",
      "Valid at Multiple Health Land Locations",
      "Flexible Redemption Period",
      "Complimentary Herbal Tea"
    ],
    description: {
      overview: "Health Land is Thailand's premier wellness chain, renowned for its authentic Thai massage techniques and world-class facilities. This gift voucher gives you access to a 120-minute traditional Thai massage experience.",
      whatToExpect: "Upon arrival at any Health Land branch, present your voucher to redeem your 120-minute traditional Thai massage. The session includes a combination of acupressure, stretching, and energy work that has been practiced in Thailand for centuries.\n\nYour certified therapist will guide you through a deeply relaxing experience that helps improve circulation, reduce muscle tension, and restore energy flow throughout your body. The massage is performed on a comfortable floor mat with you wearing loose-fitting clothes provided by the spa.\n\nHealth Land's facilities feature private treatment rooms, clean and serene environments, and professional staff who ensure your comfort throughout the experience. After your massage, enjoy complimentary herbal tea in the relaxation lounge.\n\nLocations are conveniently situated across Bangkok, including Asoke, Sathorn, Ekkamai, and more. This voucher makes an excellent gift for yourself or loved ones visiting Thailand."
    },
    itinerary: [
      { time: "Arrival", title: "Check-in", description: "Present your voucher at the reception desk and complete registration" },
      { time: "15 mins", title: "Preparation", description: "Change into provided loose-fitting clothes and store belongings in locker" },
      { time: "120 mins", title: "Thai Massage", description: "Enjoy your traditional Thai massage with certified therapist" },
      { time: "After", title: "Relaxation", description: "Unwind with complimentary herbal tea in the lounge" }
    ],
    tourTimings: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"],
    inclusions: [
      "120-minute Traditional Thai Massage",
      "Use of spa facilities",
      "Comfortable massage attire",
      "Complimentary herbal tea",
      "Locker and storage"
    ],
    exclusions: [
      "Transportation to spa location",
      "Additional treatments",
      "Tips for therapist",
      "Food and beverages (except herbal tea)"
    ],
    bookingPolicy: [
      "Voucher valid for 6 months from purchase date",
      "Advance booking recommended, especially on weekends",
      "Walk-ins accepted subject to availability",
      "Please arrive 15 minutes before your appointment"
    ],
    cancellationPolicy: [
      "Free rescheduling up to 24 hours before appointment",
      "No refunds for unused vouchers",
      "Voucher is transferable to another person"
    ],
    childPolicy: [
      "Massage services available for adults only (18+)",
      "No child tickets available"
    ],
    faqs: [
      { question: "Which Health Land locations can I redeem this voucher?", answer: "The voucher is valid at all Health Land branches in Bangkok including Asoke, Sathorn, Ekkamai, Pinklao, and more." },
      { question: "Do I need to book in advance?", answer: "We recommend booking 1-2 days in advance, especially for weekends and evenings. Walk-ins are accepted based on availability." },
      { question: "What should I wear?", answer: "You don't need to bring anything - comfortable loose-fitting clothes will be provided at the spa." },
      { question: "Is this suitable for first-time massage receivers?", answer: "Absolutely! Traditional Thai massage is suitable for beginners. The therapist will adjust pressure based on your preference." },
      { question: "How long is the voucher valid?", answer: "The voucher is valid for 6 months from the date of purchase." }
    ],
    customerReviews: [
      { name: "Priya S.", date: "January 15, 2026", rating: 5, comment: "Best massage experience in Bangkok! The therapist was very professional and the facility was spotless.", helpful: 45 },
      { name: "Michael T.", date: "December 28, 2025", rating: 5, comment: "Incredible value for a 2-hour massage. Health Land lives up to its reputation.", helpful: 32 },
      { name: "Sakura K.", date: "December 10, 2025", rating: 4, comment: "Very relaxing experience. The herbal tea afterwards was a nice touch.", helpful: 18 }
    ]
  },
  "hot-spring-emerald-pool": {
    id: "hot-spring-emerald-pool",
    title: "Emerald Pool + Hot Springs + Tiger Cave with Lunch",
    shortDescription: "Relax in natural thermal waters and swim in the stunning crystal-clear Emerald Pool surrounded by rainforest.",
    location: "Krabi, Thailand",
    city: "krabi",
    basePrice: 3140,
    childPrice: 3140,
    duration: "Full Day",
    rating: 4.7,
    reviews: 892,
    heroImages: [
      { src: krabiTempleWoman, title: "Hot Spring & Emerald Pool" },
      { src: emerald1, title: "Natural Thermal Waters" },
      { src: krabiIslandView, title: "Rainforest Paradise" }
    ],
    galleryImages: [
      { src: krabiBoatTour, alt: "Crystal-clear Emerald Pool" },
      { src: krabiKayaks, alt: "Hot spring relaxation" },
      { src: krabiSailboat, alt: "Rainforest nature walk" },
      { src: emerald1, alt: "Therapeutic waters" }
    ],
    highlights: [
      "Natural hot spring relaxation",
      "Crystal-clear Emerald Pool",
      "Rainforest nature walk",
      "Tiger Cave Temple (Full Day)"
    ],
    description: {
      overview: "Krabi Jungle Tour, This is one of our top suggestions for things you should do in Krabi, Thailand and the number one recommendation for enjoying the underground natural springs that flourish in Krabi province. The water is replenished by a natural streams running into the pool from freshwater sources on the hill above. Hot Springs Waterfall is another unique place with natural mineral water (30 – 40 degree) where everyone can swim and feel the real sanctuary of Rainforest Jungle.",
      whatToExpect: "Itinerary:\n\nHot Spring Waterfall\n\nRainforest Nature Walking Trail\n\nEmerald Pool\n\nBlue Pool\n\nTiger Cave Temple / Wat Tham Suea (for Full Day tour only)\n\nThai set Lunch"
    },
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup", description: "Pickup from Krabi hotel (excluding Railay)" },
      { time: "09:30 AM", title: "Hot Springs Waterfall", description: "Relax in natural hot springs with mineral water (30-40°C)" },
      { time: "10:30 AM", title: "Rainforest Nature Walk", description: "Trek through the rainforest walking trail" },
      { time: "11:30 AM", title: "Emerald Pool & Blue Pool", description: "Swim in crystal-clear emerald and blue waters" },
      { time: "12:30 PM", title: "Thai Set Lunch", description: "Enjoy Thai set lunch (vegetarian available on request)" },
      { time: "01:30 PM", title: "Tiger Cave Temple", description: "Visit Wat Tham Suea - Tiger Cave Temple (Full Day only)" },
      { time: "03:00 PM", title: "Return", description: "Hotel drop-off" }
    ],
    tourTimings: ["08:00 AM"],
    tourOptions: [
      { label: "Half Day Emerald Pool + Hot Springs with Lunch", adultPrice: 3140, childPrice: 3140 },
      { label: "Full Day Emerald Pool + Hot Springs + Tiger Cave with Lunch", adultPrice: 3505, childPrice: 3505 }
    ],
    inclusions: ["Hotel Transfer (excluding Railay)", "Accident Insurance", "English speaking Guide", "Drinking Water", "Thai set Lunch", "Vegetarian meals available by request"],
    exclusions: ["National Park Fees: Emerald Pool - Adult 400 THB, Child 200 THB", "Hot Spring - Adult 200 THB, Child 100 THB", "Tiger Cave Temple - Adult 50 THB, Child 50 THB", "National Park fees will be collected by your tour representative when needed", "The company reserves the right to modify the program depending on weather conditions without prior notice", "Personal expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child 3-10 years old"],
    faqs: [
      { question: "What should I bring?", answer: "Swimwear, towel, comfortable walking shoes, and sunscreen." },
      { question: "Is the Tiger Cave Temple included in half day?", answer: "No, Tiger Cave Temple is only included in the Full Day tour option." },
      { question: "Are National Park fees included?", answer: "No. Emerald Pool: Adult 400 THB, Child 200 THB. Hot Spring: Adult 200 THB, Child 100 THB. Tiger Cave: 50 THB per person." }
    ]
  },
  "james-bond-island-krabi": {
    id: "james-bond-island-krabi",
    title: "James Bond Island (Phang Nga Bay) Tour with Lunch By Long Tail Boat",
    shortDescription: "Explore the iconic James Bond Island and Phang Nga Bay with a traditional long-tail boat from Krabi. Enjoy canoeing and visit a floating Muslim village with lunch included.",
    location: "Phang Nga Bay, Thailand",
    city: "krabi",
    basePrice: 4951,
    childPrice: 4590,
    duration: "Full Day",
    rating: 4.6,
    reviews: 2156,
    heroImages: [
      { src: jamesBond1, title: "James Bond Island" },
      { src: jamesBond2, title: "Phang Nga Bay" },
      { src: jamesBond3, title: "Limestone Cliffs" }
    ],
    galleryImages: [
      { src: jamesBond4, alt: "James Bond Island view" },
      { src: krabiLongtailBoats, alt: "Longtail boat journey" },
      { src: krabiIslandView, alt: "Phang Nga Bay scenery" },
      { src: krabiBoatTour, alt: "Floating village" }
    ],
    highlights: [
      "Visit the famous James Bond Island",
      "Longtail boat through Phang Nga Bay",
      "Visit Koh Panyi floating village",
      "Enjoy Thai lunch with sea views",
      "Explore mangrove forests"
    ],
    description: {
      overview: "Discover the breathtaking beauty of Phang Nga Bay on this full-day long-tail boat tour with lunch from Krabi.",
      whatToExpect: "Cruise through Phang Nga Bay to see spectacular limestone formations. Visit James Bond Island, explore sea caves by longtail boat and visit the unique floating village of Koh Panyee. Lunch is included at the floating village."
    },
    itinerary: [
      { time: "07:30 AM", title: "Hotel Pickup", description: "Pickup from your Krabi hotel" },
      { time: "09:00 AM", title: "Phang Nga Bay", description: "Arrive at the pier and board long-tail boat" },
      { time: "10:30 AM", title: "James Bond Island", description: "Visit the famous filming location" },
      { time: "12:00 PM", title: "Koh Panyee", description: "Lunch at the floating Muslim village" },
      { time: "03:00 PM", title: "Return", description: "Return cruise and hotel drop-off" }
    ],
    tourTimings: ["07:30 AM"],
    inclusions: ["Hotel Transfer", "Long-tail Boat", "Lunch", "English Guide", "National Park Fee"],
    exclusions: ["Personal Expenses", "Tips"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Is canoeing safe for non-swimmers?", answer: "Yes, life jackets are provided and guides paddle the canoes." }
    ]
  },
  "esim-thailand-ais": {
    id: "esim-thailand-ais",
    title: "5G eSIM Thailand | AIS",
    shortDescription: "Stay connected across Thailand with a 5G/4G eSIM from AIS. Instant digital activation, no physical SIM needed.",
    location: "Thailand",
    city: "bangkok",
    basePrice: 60,
    childPrice: 0,
    duration: "1-30 Days",
    rating: 4.8,
    reviews: 3245,
    hideChildren: true,
    heroImages: [
      { src: "", title: "eSIM Thailand Activation" },
      { src: "", title: "Thailand eSIM Coverage Map" },
      { src: "", title: "Stay Connected in Thailand" }
    ],
    galleryImages: [
      { src: "", alt: "eSIM Thailand Setup" },
      { src: "", alt: "Thailand Travel Connectivity" },
      { src: "", alt: "Using Phone in Bangkok" }
    ],
    highlights: [
      "5G/4G high-speed data across Thailand",
      "Instant digital activation — no physical SIM required",
      "1-30 day flexible plans available",
      "15GB/Day unlimited plans (1Mbps after limit)",
      "AIS (primary) & True (alternative) network coverage",
      "Hotspot sharing supported",
      "Works with 100+ eSIM-enabled devices",
      "Keep your primary SIM number with dual SIM"
    ],
    description: {
      overview: "An eSIM Thailand is a digital SIM card that lets you add a mobile data plan to your phone without needing a physical SIM. With a Thailand eSIM, you can stay connected as you travel across cities like Bangkok, Phuket and Chiang Mai — no need to visit a SIM card store or worry about roaming fees.",
      whatToExpect: "Why Choose eSIM for Thailand:\n\n• High-Speed Data: Reliable connectivity through top local networks like AIS.\n• Instant Setup: Activate in 5 minutes — no physical SIM required.\n• Affordable Plans: Transparent pricing with no hidden expensive roaming fees.\n• Wide Compatibility: Works with 100+ eSIM-enabled devices.\n• Hotspot Sharing: You can easily share data with other devices.\n\nCoverage: All of Thailand (Excluding Pattani, Yala (e.g. Betong), Narathiwat, Chana District, Nathawi District, Thepha District and Saba Yoi District).\n\nFor Unlimited plans: 15GB/Day without a speed limit, 1Mbps after the limit.\n\nNetwork: AIS (primary), True (alternative)."
    },
    itinerary: [
      { time: "Step 1", title: "Purchase eSIM Plan", description: "Choose your preferred data plan duration (1-30 days) and complete the purchase." },
      { time: "Step 2", title: "Receive QR Code", description: "You'll receive a QR code via email instantly after purchase." },
      { time: "Step 3", title: "Scan & Activate", description: "Scan the QR code on your eSIM-compatible device to install the eSIM profile." },
      { time: "Step 4", title: "Stay Connected", description: "Enable data roaming and select the eSIM as your data line. Enjoy 5G/4G connectivity across Thailand!" }
    ],
    tourTimings: ["Instant Activation"],
    inclusions: [
      "5G/4G Data Plan",
      "AIS Network Coverage",
      "QR Code for Instant Activation",
      "Hotspot Sharing",
      "24/7 Customer Support",
      "Data Only Plan"
    ],
    exclusions: [
      "Voice calls and SMS",
      "Physical SIM card",
      "Coverage in excluded southern districts"
    ],
    bookingPolicy: [
      "eSIM QR code delivered instantly via email after purchase",
      "Ensure your device is eSIM-compatible before purchasing",
      "eSIM can be installed before or after arriving in Thailand",
      "Data plan activates upon first connection to local network"
    ],
    cancellationPolicy: [
      "Non-refundable once QR code has been delivered",
      "Contact support if you face activation issues"
    ],
    childPolicy: [
      "No age restrictions — this is a digital product"
    ],
    faqs: [
      { question: "How does eSIM Thailand work?", answer: "Thailand eSIM works by digitally adding a mobile plan to your device. After purchase, you receive a QR code which you scan to install the eSIM profile. Once activated, you'll have instant 5G/4G data connectivity across Thailand." },
      { question: "Is eSIM worth it for Thailand?", answer: "Definitely! An eSIM is the easiest way to stay connected while traveling in Thailand — no need to swap physical SIM cards. Avoid expensive roaming fees while enjoying fast and reliable coverage across Bangkok, Phuket, Chiang Mai and beyond from AIS for a seamless travel experience." },
      { question: "Can you keep your primary SIM number with a Thailand eSIM?", answer: "Yes. Thanks to the dual SIM functionality of an eSIM, you can keep your local phone number. Your local SIM card stays in your phone, and you add the eSIM Thailand plan for internet access. This lets you enjoy data in Thailand without having to swap out your physical SIM card." },
      { question: "What devices support eSIM?", answer: "Most modern smartphones support eSIM including iPhone XS and newer, Samsung Galaxy S20 and newer, Google Pixel 3 and newer, and many more. Check your device settings for eSIM compatibility." },
      { question: "What coverage areas are excluded?", answer: "Coverage is available across all of Thailand except Pattani, Yala (e.g. Betong), Narathiwat, Chana District, Nathawi District, Thepha District and Saba Yoi District." }
    ],
    tourOptions: [
      { label: "1 Day Plan", adultPrice: 60 },
      { label: "3 Day Plan", adultPrice: 150 },
      { label: "Thailand Guide", adultPrice: 1 }
    ]
  },

  // ============== Koh Samui ==============
  "koh-samui-white-orchid-loy-krathong-cruise": {
    id: "koh-samui-white-orchid-loy-krathong-cruise",
    title: "White Orchid River Cruise – Loy Krathong Festival (Full Moon Night Party) Join Tour",
    shortDescription: "Celebrate Loy Krathong Festival on the White Orchid River Cruise — buffet dinner, live music, cabaret show & floating krathong on the river.",
    location: "Koh Samui, Thailand",
    city: "koh-samui",
    basePrice: 5000,
    childPrice: 4500,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 612,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Loy Krathong full-moon evening cruise",
      "Thai, International & Seafood buffet",
      "Live music, cabaret & Thai classical dance",
      "Free soft drinks & buffet beer",
      "Floating krathong included",
    ],
    description: {
      overview: "Spend your evening celebrating the Loy Krathong Festival on the White Orchid River Cruise. Gaze at illuminated landmarks like Wat Arun, the Royal Grand Palace and Rama VIII Bridge while enjoying a fantastic buffet dinner with live entertainment.",
      whatToExpect: "Welcome on board at Icon Siam (Pier 4). Enjoy welcome drinks, a Thai/International/Seafood buffet, live music, a cabaret show and Thai classical dance, plus the chance to float your own krathong on the river. Cruise ends back at Icon Siam Pier around 22:45.",
    },
    itinerary: [
      { time: "18:00 – 19:30", title: "Arrival", description: "Arrive at the White Orchid River Cruise at Icon Siam (Pier 4)." },
      { time: "19:45", title: "Boarding", description: "Final call and welcome on board with welcome drinks and buffet open." },
      { time: "20:00 – 22:30", title: "Cruise & Dinner", description: "Live music, cabaret, Thai classical dance and panoramic views of Bangkok landmarks. Loy Krathong floating." },
      { time: "22:45", title: "Disembark", description: "Arrive back at Icon Siam Pier." },
    ],
    tourTimings: ["19:45 PM"],
    inclusions: [
      "Welcome drinks on board",
      "Thai, International & Seafood buffet",
      "Live music, cabaret show & Thai classical dance",
      "Free soft drinks and buffet beer",
      "Krathong (corn-leaf with fresh flowers) for floating",
      "Upper Deck air-conditioned ticket",
    ],
    exclusions: [
      "Personal expenses and gratuities",
      "Hotel transfers",
    ],
    bookingPolicy: ["Smart casual dress code", "Advance booking required for festival night"],
    cancellationPolicy: [
      "Before 3 days of excursion: 50% cancellation charge",
      "Before 2 days of excursion: 80% cancellation charge",
      "Before 1 day of excursion: 100% cancellation charge",
      "Activity may be canceled due to weather; full refund or date shift available",
    ],
    childPolicy: [
      "Free entrance for children below 100cm",
      "Child ticket applicable for children 100–140cm (2–12 years)",
      "Children aged 0–2 free if not occupying a separate seat",
      "Children aged 3–8 charged 75% of tour rate",
      "Children over 8 considered adult",
    ],
    faqs: [
      { question: "When does the cruise depart?", answer: "Boarding closes by 19:45 and the boat departs shortly after, returning to Icon Siam Pier around 22:45." },
      { question: "Are vegetarian options available?", answer: "Yes — the buffet includes Thai and International dishes with vegetarian options." },
    ],
  },
  "koh-samui-full-moon-party-with-transfer": {
    id: "koh-samui-full-moon-party-with-transfer",
    title: "Full Moon Party with Transfer, Koh Samui",
    shortDescription: "Join the world-famous Full Moon Party on Haad Rin Beach, Koh Phangan, with round-trip transfer from your Koh Samui hotel.",
    location: "Koh Samui, Thailand",
    city: "koh-samui",
    basePrice: 3800,
    childPrice: 3800,
    isAdultOnly: true,
    hideChildren: true,
    duration: "Overnight",
    rating: 4.7,
    reviews: 1284,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Iconic Full Moon Party on Haad Rin Beach, Koh Phangan",
      "Round-trip transfer from Koh Samui hotel",
      "International & Thai DJs across 15+ sound systems",
      "UV body paint, fire dancers and beach bars",
      "One of Asia's biggest beach parties",
    ],
    description: {
      overview: "Every full moon, 30,000–40,000 ravers descend on Haad Rin Beach, Koh Phangan for the legendary Full Moon Party. Trance, techno, drum & bass, house and reggae play across the crescent beach until sunrise — one of the world's most iconic beach parties.",
      whatToExpect: "Get picked up from your Koh Samui hotel between 17:00–17:30 or 19:00–19:30. Take the boat across to Koh Phangan, dance the night away on Haad Rin Beach, and return on the early-morning boat back to Koh Samui (return around 01:00 onwards).",
    },
    itinerary: [
      { time: "17:00 – 17:30", title: "Pickup (Option 1)", description: "Hotel pickup from Koh Samui." },
      { time: "18:00", title: "Departure", description: "Boat departure to Koh Phangan." },
      { time: "19:00 – 19:30", title: "Pickup (Option 2)", description: "Late hotel pickup option." },
      { time: "20:00", title: "Late Departure", description: "Late boat departure to Koh Phangan." },
      { time: "01:00", title: "Return", description: "Return boat from Koh Phangan to Koh Samui (varies)." },
    ],
    tourTimings: ["17:00 – 17:30", "19:00 – 19:30"],
    inclusions: ["Round-trip transfer from hotel", "Admission fee", "Boat transfer to Koh Phangan"],
    exclusions: ["Food", "Personal expenses and gratuities"],
    bookingPolicy: ["Not suitable for kids under 18", "Adult-only event", "Carry valid ID"],
    cancellationPolicy: [
      "Before 3 days of excursion: 50% cancellation charge",
      "Before 2 days of excursion: 80% cancellation charge",
      "Before 1 day of excursion: 100% cancellation charge",
    ],
    childPolicy: ["Adult-only — guests must be 18+ to attend"],
    faqs: [
      { question: "When does the Full Moon Party take place?", answer: "On the night of every full moon (dates may shift by 1 day around Buddhist holidays)." },
      { question: "Is the party suitable for children?", answer: "No. The Full Moon Party is strictly an adult-only event (18+)." },
    ],
  },

  // ============== Chiang Mai ==============
  "chiang-mai-city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer": {
    id: "chiang-mai-city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer",
    title: "Chiang Mai City Temple Tour: Wat Phra That Doi Suthep, Wat Chedi Luang & Wat Pha Lat with Transfer",
    shortDescription: "Half-day tour of Chiang Mai's three iconic temples — Doi Suthep, Chedi Luang and Pha Lat — with English-speaking guide and transfer.",
    location: "Chiang Mai, Thailand",
    city: "chiang-mai",
    basePrice: 3900,
    childPrice: 2500,
    duration: "Half Day (4–5 Hours)",
    rating: 4.9,
    reviews: 528,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Wat Phra That Doi Suthep – Chiang Mai's most sacred temple",
      "Wat Chedi Luang – ancient brick chedi in Old City",
      "Wat Pha Lat – serene jungle temple",
      "English-speaking guide and round-trip transfer",
      "Drinking water included",
    ],
    description: {
      overview: "Discover the cultural heart of Chiang Mai on this half-day temple tour visiting three of the city's most important landmarks. Travel with a knowledgeable guide as you explore historic temples and enjoy panoramic mountain views.",
      whatToExpect: "Hotel pickup, then visit Wat Pha Lat – a peaceful jungle temple en route to Doi Suthep. Continue to Wat Phra That Doi Suthep with its famous golden chedi and panoramic view of Chiang Mai. End at the historic Wat Chedi Luang in the Old City before returning to your hotel.",
    },
    itinerary: [
      { time: "08:30 AM", title: "Pickup", description: "Hotel pickup in Chiang Mai" },
      { time: "09:30 AM", title: "Wat Pha Lat", description: "Visit the serene jungle temple" },
      { time: "10:30 AM", title: "Wat Phra That Doi Suthep", description: "Sacred temple with mountain views" },
      { time: "12:30 PM", title: "Wat Chedi Luang", description: "Explore the ancient Old City temple" },
      { time: "01:30 PM", title: "Drop-off", description: "Return to your hotel" },
    ],
    tourTimings: ["08:30 AM"],
    inclusions: ["English-speaking guide", "Admission fees to temples", "Round-trip transfer", "Drinking water"],
    exclusions: ["Food and beverages", "Personal expenses", "Gratuities"],
    bookingPolicy: ["Modest dress required for temples", "Comfortable walking shoes recommended"],
    cancellationPolicy: [
      "Before 3 days of excursion: 50% cancellation charge",
      "Before 2 days of excursion: 80% cancellation charge",
      "Before 1 day of excursion: 100% cancellation charge",
    ],
    childPolicy: ["Child rate applies to ages 4–11"],
    faqs: [
      { question: "Is there a dress code for the temples?", answer: "Yes — please cover shoulders and knees. Sarongs are usually available at temple entrances if needed." },
      { question: "How long is the tour?", answer: "Approximately 4–5 hours including transfers." },
    ],
  },
  "chiang-mai-chiang-rai-golden-triangle-long-neck-tribe-day-trip": {
    id: "chiang-mai-chiang-rai-golden-triangle-long-neck-tribe-day-trip",
    title: "Chiang Rai Day Trip: Golden Triangle with Long Neck Tribe from Chiang Mai (Join Tour)",
    shortDescription: "Full-day Chiang Rai tour from Chiang Mai — White Temple, Golden Triangle (Thailand–Laos–Myanmar) and Long Neck Karen village.",
    location: "Chiang Mai, Thailand",
    city: "chiang-mai",
    basePrice: 6000,
    childPrice: 2000,
    duration: "Full Day (12 Hours)",
    rating: 4.8,
    reviews: 943,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Golden Triangle – meeting point of Thailand, Laos & Myanmar",
      "Visit the famous Long Neck Karen tribe village",
      "Mekong River boat ride",
      "Thai lunch & bottled water included",
      "Air-conditioned vehicle and English-speaking guide",
    ],
    description: {
      overview: "Join us for an incredible full-day tour from Chiang Mai to Chiang Rai — one of Thailand's most enchanting regions. Explore captivating culture, dramatic landscapes and one of Southeast Asia's most legendary borderlands at the Golden Triangle.",
      whatToExpect: "Travel north from Chiang Mai with a professional guide. Visit the iconic Long Neck Karen tribe village, then continue to the Golden Triangle viewpoint where Thailand, Laos and Myanmar meet on the Mekong River. Enjoy a Thai lunch and a Mekong boat ride before returning to Chiang Mai by evening.",
    },
    itinerary: [
      { time: "06:30 AM", title: "Pickup", description: "Hotel pickup in Chiang Mai" },
      { time: "10:30 AM", title: "Long Neck Village", description: "Visit Karen Long Neck tribe village" },
      { time: "12:30 PM", title: "Lunch", description: "Thai lunch at local restaurant" },
      { time: "02:00 PM", title: "Golden Triangle", description: "View where Thailand, Laos & Myanmar meet" },
      { time: "03:00 PM", title: "Mekong Boat Ride", description: "Boat along the Mekong River" },
      { time: "07:30 PM", title: "Return", description: "Drop-off at your Chiang Mai hotel" },
    ],
    tourTimings: ["06:30 AM"],
    inclusions: [
      "Professional English-speaking guide",
      "Round-trip transfer from hotel",
      "Air-conditioned vehicle",
      "Thai lunch",
      "Complimentary bottled water",
      "Mekong River boat ride",
    ],
    exclusions: ["Personal expenses and gratuities", "Laos land tax (50 THB per person)"],
    bookingPolicy: ["Long day trip (12+ hours)", "Carry passport for Mekong border viewing"],
    cancellationPolicy: [
      "Before 3 days of excursion: 50% cancellation charge",
      "Before 2 days of excursion: 80% cancellation charge",
      "Before 1 day of excursion: 100% cancellation charge",
    ],
    childPolicy: ["Child rate applies to ages 4–11"],
    faqs: [
      { question: "How long is the tour?", answer: "Approximately 12+ hours — full day from early morning till evening." },
      { question: "Do I need a passport?", answer: "Carry your passport — recommended for the Mekong River viewing point near the Laos border." },
    ],
  },
  "chiang-mai-doi-inthanon-national-park-full-day-tour": {
    id: "chiang-mai-doi-inthanon-national-park-full-day-tour",
    title: "Doi Inthanon National Park Full Day Tour from Chiang Mai (Join Tour)",
    shortDescription: "Full-day tour of Thailand's highest peak — twin royal pagodas, Wachirathan waterfall, Karen tribal village and lush highland forests.",
    location: "Chiang Mai, Thailand",
    city: "chiang-mai",
    basePrice: 4900,
    childPrice: 3600,
    duration: "Full Day (10 Hours)",
    rating: 4.8,
    reviews: 1106,
    heroImages: [],
    galleryImages: [],
    highlights: [
      "Doi Inthanon – Thailand's highest mountain (2,565 m)",
      "Twin Royal Pagodas (King & Queen)",
      "Wachirathan Waterfall",
      "Karen / Hmong tribal village visit",
      "Air-conditioned vehicle, guide & hotel pickup",
    ],
    description: {
      overview: "Doi Inthanon National Park is a paradise of remarkable diversity, with lush forests, dramatic waterfalls, the highest peak in Thailand and ethnic minority villages. Spend a full day surrounded by misty mountain scenery and rich highland culture.",
      whatToExpect: "Hotel pickup in Chiang Mai, then drive to Doi Inthanon National Park. Visit Wachirathan waterfall, the Twin Royal Pagodas at the summit, a local tribal village and walk a short nature trail. Enjoy lunch (own expense) and return to Chiang Mai by evening.",
    },
    itinerary: [
      { time: "07:30 AM", title: "Pickup", description: "Hotel pickup in Chiang Mai" },
      { time: "10:00 AM", title: "Wachirathan Waterfall", description: "Visit one of Thailand's most beautiful waterfalls" },
      { time: "11:30 AM", title: "Royal Pagodas", description: "Visit the King & Queen pagodas" },
      { time: "01:00 PM", title: "Lunch", description: "Lunch at local restaurant (own expense)" },
      { time: "02:30 PM", title: "Tribal Village", description: "Karen / Hmong village visit" },
      { time: "05:30 PM", title: "Return", description: "Drop-off at your Chiang Mai hotel" },
    ],
    tourTimings: ["07:30 AM"],
    inclusions: [
      "Professional English-speaking guide",
      "Bottled water",
      "Hotel pickup and drop-off (selected hotels)",
      "Air-conditioned vehicle",
      "Doi Inthanon National Park entry/admission",
    ],
    exclusions: ["Lunch", "Gratuities", "Personal expenses"],
    bookingPolicy: ["Carry warm layers — temperatures at the summit can be cold", "Comfortable walking shoes recommended"],
    cancellationPolicy: [
      "Before 3 days of excursion: 50% cancellation charge",
      "Before 2 days of excursion: 80% cancellation charge",
      "Before 1 day of excursion: 100% cancellation charge",
    ],
    childPolicy: ["Child rate applies to ages 4–11"],
    faqs: [
      { question: "How cold does it get on the summit?", answer: "Temperatures at Doi Inthanon's summit can drop to 5–10°C, especially in cool season — bring a light jacket." },
      { question: "Is lunch included?", answer: "Lunch is at your own expense — many local options are available en route." },
    ],
  }
};
