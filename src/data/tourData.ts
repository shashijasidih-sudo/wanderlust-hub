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
    title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour",
    shortDescription: "Dive into Bangkok's Rich Heritage with our Half-Day, Full-Day, and Canal Tours, showcasing the city's most iconic landmarks.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 10020,
    childPrice: 3600,
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
    basePrice: 6300,
    childPrice: 0,
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
    basePrice: 1800,
    childPrice: 1800,
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
    basePrice: 5900,
    childPrice: 1500,
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
    basePrice: 4500,
    childPrice: 3800,
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
    basePrice: 2400,
    childPrice: 0,
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
    title: "All Day Buffet at Baiyoke Floating Market on 75th floor",
    shortDescription: "Savor the flavors of India and beyond at the Baiyoke Sky Hotel's 'All Day Buffet' on the 75th floor.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 1700,
    childPrice: 1600,
    duration: "All Day",
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
      "All Day Buffet: Indian, Vegetarian, Vegan, Jain",
      "Free soft drink and tea",
      "Free entry to Observation Deck on 77th floor",
      "Free entry to Revolving View Point on 84th floor"
    ],
    description: {
      overview: "Savor the flavors of India and beyond at the Baiyoke Sky Hotel's 'All Day Buffet' on the 75th floor.",
      whatToExpect: "Savor the flavors of India and beyond at the Baiyoke Sky Hotel's 'All Day Buffet' on the 75th floor. Held at the Baiyoke Floating Market Restaurant, this buffet is a one-stop destination for authentic Indian cuisine, along with a wide selection of vegetarian, vegan, and Jain dishes.\n\nEvery dish is prepared with care and without pork or lard, making it the perfect choice for guests with specific dietary preferences. From rich curries to fresh plant-based delicacies, you'll enjoy a world of flavor high above the city of Bangkok."
    },
    itinerary: [],
    tourTimings: ["All Day"],
    inclusions: [
      "All Day Buffet: Indian, Vegetarian, Vegan, Jain",
      "Baiyoke Floating Market Restaurant on the 75th floor - Admission",
      "Free soft drink and tea",
      "Free entry to the Observation Deck on the 77th floor",
      "Free entry to the Revolving View Point on the 84th floor",
      "Service charge and government tax"
    ],
    exclusions: [
      "Hotel transfers",
      "Personal expenses"
    ],
    bookingPolicy: [],
    cancellationPolicy: [
      "Free cancellation up to 24 hours before"
    ],
    childPolicy: [
      "Child rate available"
    ],
    faqs: []
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
    title: "Bangkok's Famous Three Temple Wat Arun, Wat Pho, and Wat Traimit Private City and Cultural Tour",
    shortDescription: "Take part in the Bangkok City Tour, a must-do experience in Thailand! Explore three beautiful temples—Wat Traimit, Wat Pho, and Wat Arun—while learning about Buddhism and Thai culture.",
    location: "Bangkok, Thailand",
    city: "bangkok",
    basePrice: 4700,
    childPrice: 4300,
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
    basePrice: 4000,
    childPrice: 3900,
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
    tourTimings: [],
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
  "phi-phi-island": {
    id: "phi-phi-island",
    title: "Full Day Tour from Phuket to Phi Phi Island, Maya Bay and Khai Island by Speedboat with National Park Fee",
    shortDescription: "Explore the world-famous Phi Phi Islands with Maya Bay and Khai Island. Enjoy snorkeling, swimming, and stunning scenery.",
    location: "Phuket, Thailand",
    city: "phuket",
    basePrice: 4000,
    childPrice: 4000,
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
    basePrice: 3300,
    childPrice: 2500,
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
      whatToExpect: "Enjoy a scenic cruise to the Phi Phi Islands on a spacious big boat. Visit the iconic Maya Bay, explore Phi Phi Don Island, and snorkel in crystal-clear waters. Includes hotel transfers and delicious lunch."
    },
    itinerary: [
      { time: "07:30 AM", title: "Hotel Pickup", description: "Pickup from your Phuket hotel" },
      { time: "09:00 AM", title: "Departure", description: "Board the big boat and depart for Phi Phi Islands" },
      { time: "10:30 AM", title: "Maya Bay", description: "Visit the famous Maya Bay beach" },
      { time: "12:00 PM", title: "Lunch", description: "Enjoy lunch at Phi Phi Don Island" },
      { time: "02:00 PM", title: "Snorkeling", description: "Snorkel at beautiful coral reefs" },
      { time: "04:30 PM", title: "Return", description: "Return cruise to Phuket" }
    ],
    tourTimings: ["07:30 AM"],
    inclusions: ["Hotel Transfer", "Big Boat Cruise", "Lunch", "Snorkeling Equipment", "English Guide"],
    exclusions: ["National Park Fee", "Personal Expenses"],
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
    basePrice: 4700,
    childPrice: 3500,
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
      whatToExpect: "Board our luxury Royal Jet Cruiser for a first-class journey to Phi Phi Islands. Enjoy premium seating, gourmet lunch, and VIP treatment throughout the day. Visit Maya Bay, snorkel at pristine reefs, and explore Phi Phi Don."
    },
    itinerary: [
      { time: "07:00 AM", title: "VIP Pickup", description: "Private transfer from your hotel" },
      { time: "08:30 AM", title: "Board Cruiser", description: "Welcome aboard with refreshments" },
      { time: "10:30 AM", title: "Maya Bay", description: "Exclusive Maya Bay experience" },
      { time: "12:30 PM", title: "Gourmet Lunch", description: "Premium buffet lunch" },
      { time: "02:00 PM", title: "Snorkeling", description: "Best snorkeling locations" },
      { time: "05:00 PM", title: "Return", description: "Scenic return to Phuket" }
    ],
    tourTimings: ["07:00 AM"],
    inclusions: ["VIP Transfer", "First Class Seat", "Gourmet Lunch", "Premium Equipment", "Personal Guide"],
    exclusions: ["National Park Fee"],
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
    basePrice: 3100,
    childPrice: 2300,
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
    exclusions: ["National Marine Park Fee (฿400)"],
    bookingPolicy: ["Confirmation within 24 hours"],
    cancellationPolicy: ["Free cancellation up to 48 hours before"],
    childPolicy: ["Child rate for ages 4-11"],
    faqs: [
      { question: "Why is national park fee excluded?", answer: "The fee must be paid in cash at the pier on the day of the tour." }
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
    basePrice: 2000,
    childPrice: 1800,
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
    basePrice: 1400,
    childPrice: 0,
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
    basePrice: 700,
    childPrice: 700,
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
    basePrice: 2800,
    childPrice: 2500,
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
    basePrice: 4200,
    childPrice: 0,
    duration: "4 Hours",
    rating: 4.4,
    reviews: 345,
    heroImages: [
      { src: phiPhi1, title: "Pattaya Nightlife" },
      { src: phiPhi2, title: "Walking Street" },
      { src: phiPhi3, title: "Food and Drinks" }
    ],
    galleryImages: [
      { src: phiPhi4, alt: "Night scene" },
      { src: phiPhi5, alt: "Street food" },
      { src: phiPhi6, alt: "Local bars" },
      { src: phiPhi7, alt: "Entertainment" }
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
    tourTimings: ["08:00 PM"],
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
    basePrice: 5200,
    childPrice: 0,
    duration: "5 Hours",
    rating: 4.6,
    reviews: 278,
    heroImages: [
      { src: phiPhi1, title: "Sunset Views" },
      { src: phiPhi2, title: "Rooftop Bars" },
      { src: phiPhi3, title: "Pub Crawl" }
    ],
    galleryImages: [
      { src: phiPhi4, alt: "Sunset drinks" },
      { src: phiPhi5, alt: "Club experience" },
      { src: phiPhi6, alt: "Group fun" },
      { src: phiPhi7, alt: "Night venues" }
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
    tourTimings: ["06:00 PM"],
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
  }
};
