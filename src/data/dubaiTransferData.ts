import { TransferData } from "@/components/TransferBooking";

// Dubai vehicle images
const vehicleImages = {
  sedan: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&auto=format&fit=crop",
  suv: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&auto=format&fit=crop",
  van: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
};

// Zone data with areas covered
export const dubaiZones = {
  zone1: {
    name: "Zone 1",
    areas: "DEIRA / BURDUBAI / AL NAHDA / Qusais"
  },
  zone2: {
    name: "Zone 2",
    areas: "DIFC, Sh. Zayed Rd, Downtown, Jumeirah 1,2,3, Al Safa, Business Bay"
  },
  zone3: {
    name: "Zone 3",
    areas: "Al Barsha, Jumeirah Beach Park, Tcom, Media City, JLT, Marina, JBR, Bluewaters Island, The Palm"
  },
  zone4: {
    name: "Zone 4",
    areas: "Jabel Ali, Dubai Parks, DIP, DWC, Dubai Expo, LAPITA"
  },
  zone5: {
    name: "Zone 5",
    areas: "Bab Al Shams / Al Maha"
  }
};

const commonDescription = `Book our flawless and best-priced Airport Pick Up services to eliminate all expenses and tensions of finding a cab as you touch down the Dubai International Airport. This ensures a perfect start of your Dubai vacation or business trip. Whether it's for individuals, groups or families, we've a spectrum of vehicles to cater to all your travel requirements.

All you need to do is to provide us your details including flight landing time and hotel or accommodation address at the time of booking, which will be confirmed instantly. You can be now assured that as soon as you clear the immigration formalities and come out of the airport, a friendly, neatly dressed driver will greet you at the arrival area. Settle into our clean, air-conditioned vehicle and enjoy a smooth and unworried transfer to your hotel, private residence or preferred location in Dubai.`;

const commonDropoffDescription = `Book our flawless and best-priced Hotel Drop Off services to eliminate all expenses and tensions of finding a cab for your airport transfer. This ensures a perfect end to your Dubai vacation or business trip.

All you need to do is to provide us your details including hotel address and flight departure time at the time of booking, which will be confirmed instantly. Our driver will meet you at your hotel lobby and ensure you reach the airport on time with a comfortable, stress-free journey.`;

const commonHighlights = [
  "Eliminates all confusion and stress locating a safe and reliable transport option",
  "Following meet and greet, your friendly and experienced driver will escort you to your vehicle",
  "Fully air-conditioned and comfortable vehicles",
  "Receive help with the baggage and settle yourself for a relaxed drive",
  "Direct transfer to your hotel or desired location anywhere in Dubai"
];

const commonDropoffHighlights = [
  "Stress-free hotel pickup for your airport transfer",
  "Professional driver meets you at hotel lobby",
  "Fully air-conditioned and comfortable vehicles",
  "Assistance with baggage loading",
  "Direct transfer to Dubai International Airport"
];

const commonBaggagePolicy = [
  "4 Seater Sedan: Maximum capacity – 2 large bags and 2 hand bags",
  "7 Seater SUV: Maximum capacity – 4 large bags and 4 hand bags",
  "12 Seater Mini Bus: Maximum capacity – 10 large bags and 10 hand bags",
  "⚠️ Important: If you are carrying more baggage than the allowed limit, additional charges may apply."
];

const commonCancellationPolicy = [
  "For all cancellations made 72 hours prior to the tour departure time NO charges will be applicable.",
  "If cancellation made within 72 hours of your tour departure time 100% charges will be applicable.",
  "If eligible for a refund your amount will be returned back to you within 7 working days."
];

const commonTermsConditions = [
  "Transfers in Air conditioned, well maintained and comfortable vehicle.",
  "Airport parking charges are included. This is a one-way transfer service.",
  "Please carry a valid ID/Passport along with you during the transfer.",
  "You are required to provide us with detailed information on your Flight timings for an easy Pickup.",
  "Oversize and excess baggage is subject to the availability of storage space.",
  "If guests fail to report within the given time it will be a NO Show and there will be no Rescheduling or Refund for it.",
  "Limousine and Luxury transfers are available at extra charges.",
  "Our terms and conditions prohibit eating, drinking, and smoking inside the vehicle.",
  "Special Note: Kindly keep 3 hrs difference in between your arrival and Pickup to avoid any inconvenience."
];

export const dubaiTransfersData: Record<string, TransferData> = {
  // ZONE 1 PICKUP
  "dubai-airport-pickup-zone1": {
    id: "dubai-airport-pickup-zone1",
    title: "Dubai Airport Pickup to Zone 1 - Deira / Bur Dubai / Al Nahda",
    shortDescription: "Private airport transfer from Dubai Airport to Zone 1 hotels",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.9,
    reviews: 856,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 3300,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 3000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 4000,
        image: vehicleImages.van
      }
    ],
    highlights: commonHighlights,
    description: commonDescription,
    about: `Dubai International Airport → Zone 1 (${dubaiZones.zone1.areas})

Your driver will greet you at the arrival area with your name card. After collecting your luggage, enjoy a comfortable ride to your hotel in Deira, Bur Dubai, Al Nahda or Qusais area.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 1 DROPOFF
  "dubai-airport-dropoff-zone1": {
    id: "dubai-airport-dropoff-zone1",
    title: "Zone 1 Hotel to Dubai Airport Drop Off - Deira / Bur Dubai / Al Nahda",
    shortDescription: "Private transfer from Zone 1 hotels to Dubai Airport",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.8,
    reviews: 623,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 3300,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 3000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 4000,
        image: vehicleImages.van
      }
    ],
    highlights: commonDropoffHighlights,
    description: commonDropoffDescription,
    about: `Zone 1 (${dubaiZones.zone1.areas}) → Dubai International Airport

Our driver will meet you at your hotel lobby and assist with your luggage for a comfortable ride to Dubai Airport.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 2 PICKUP
  "dubai-airport-pickup-zone2": {
    id: "dubai-airport-pickup-zone2",
    title: "Dubai Airport Pickup to Zone 2 - Downtown / DIFC / Business Bay",
    shortDescription: "Private airport transfer from Dubai Airport to Zone 2 hotels",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.9,
    reviews: 745,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 3400,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 3500,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 4200,
        image: vehicleImages.van
      }
    ],
    highlights: commonHighlights,
    description: commonDescription,
    about: `Dubai International Airport → Zone 2 (${dubaiZones.zone2.areas})

Your driver will greet you at the arrival area with your name card. After collecting your luggage, enjoy a comfortable ride to your hotel in Downtown, DIFC, Business Bay or Jumeirah area.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 2 DROPOFF
  "dubai-airport-dropoff-zone2": {
    id: "dubai-airport-dropoff-zone2",
    title: "Zone 2 Hotel to Dubai Airport Drop Off - Downtown / DIFC / Business Bay",
    shortDescription: "Private transfer from Zone 2 hotels to Dubai Airport",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.8,
    reviews: 534,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 3400,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 3500,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 4200,
        image: vehicleImages.van
      }
    ],
    highlights: commonDropoffHighlights,
    description: commonDropoffDescription,
    about: `Zone 2 (${dubaiZones.zone2.areas}) → Dubai International Airport

Our driver will meet you at your hotel lobby and assist with your luggage for a comfortable ride to Dubai Airport.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 3 PICKUP
  "dubai-airport-pickup-zone3": {
    id: "dubai-airport-pickup-zone3",
    title: "Dubai Airport Pickup to Zone 3 - Marina / JBR / The Palm",
    shortDescription: "Private airport transfer from Dubai Airport to Zone 3 hotels",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.9,
    reviews: 678,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 3900,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 4000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 4200,
        image: vehicleImages.van
      }
    ],
    highlights: commonHighlights,
    description: commonDescription,
    about: `Dubai International Airport → Zone 3 (${dubaiZones.zone3.areas})

Your driver will greet you at the arrival area with your name card. After collecting your luggage, enjoy a comfortable ride to your hotel in Marina, JBR, JLT, The Palm or Media City area.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 3 DROPOFF
  "dubai-airport-dropoff-zone3": {
    id: "dubai-airport-dropoff-zone3",
    title: "Zone 3 Hotel to Dubai Airport Drop Off - Marina / JBR / The Palm",
    shortDescription: "Private transfer from Zone 3 hotels to Dubai Airport",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.8,
    reviews: 489,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 3900,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 4000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 4200,
        image: vehicleImages.van
      }
    ],
    highlights: commonDropoffHighlights,
    description: commonDropoffDescription,
    about: `Zone 3 (${dubaiZones.zone3.areas}) → Dubai International Airport

Our driver will meet you at your hotel lobby and assist with your luggage for a comfortable ride to Dubai Airport.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 4 PICKUP
  "dubai-airport-pickup-zone4": {
    id: "dubai-airport-pickup-zone4",
    title: "Dubai Airport Pickup to Zone 4 - Dubai Parks / Expo / Jebel Ali",
    shortDescription: "Private airport transfer from Dubai Airport to Zone 4 hotels",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.9,
    reviews: 345,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 5500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 5700,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 6000,
        image: vehicleImages.van
      }
    ],
    highlights: commonHighlights,
    description: commonDescription,
    about: `Dubai International Airport → Zone 4 (${dubaiZones.zone4.areas})

Your driver will greet you at the arrival area with your name card. After collecting your luggage, enjoy a comfortable ride to your hotel near Dubai Parks, Expo, Jebel Ali or LAPITA.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 4 DROPOFF
  "dubai-airport-dropoff-zone4": {
    id: "dubai-airport-dropoff-zone4",
    title: "Zone 4 Hotel to Dubai Airport Drop Off - Dubai Parks / Expo / Jebel Ali",
    shortDescription: "Private transfer from Zone 4 hotels to Dubai Airport",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.8,
    reviews: 256,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 5500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 5700,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 6000,
        image: vehicleImages.van
      }
    ],
    highlights: commonDropoffHighlights,
    description: commonDropoffDescription,
    about: `Zone 4 (${dubaiZones.zone4.areas}) → Dubai International Airport

Our driver will meet you at your hotel lobby and assist with your luggage for a comfortable ride to Dubai Airport.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 5 PICKUP
  "dubai-airport-pickup-zone5": {
    id: "dubai-airport-pickup-zone5",
    title: "Dubai Airport Pickup to Zone 5 - Bab Al Shams / Al Maha",
    shortDescription: "Private airport transfer from Dubai Airport to Zone 5 desert resorts",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.9,
    reviews: 189,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 7200,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 7200,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 8900,
        image: vehicleImages.van
      }
    ],
    highlights: commonHighlights,
    description: commonDescription,
    about: `Dubai International Airport → Zone 5 (${dubaiZones.zone5.areas})

Your driver will greet you at the arrival area with your name card. After collecting your luggage, enjoy a comfortable ride to your luxury desert resort at Bab Al Shams or Al Maha.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  },

  // ZONE 5 DROPOFF
  "dubai-airport-dropoff-zone5": {
    id: "dubai-airport-dropoff-zone5",
    title: "Zone 5 Hotel to Dubai Airport Drop Off - Bab Al Shams / Al Maha",
    shortDescription: "Private transfer from Zone 5 desert resorts to Dubai Airport",
    location: "Dubai, UAE",
    city: "dubai",
    duration: "Transfer",
    rating: 4.8,
    reviews: 145,
    vehicles: [
      {
        id: "sedan",
        name: "4 Seater Sedan",
        capacity: "1 - 4",
        bigBags: 2,
        handBags: 2,
        price: 7200,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "7 Seater SUV",
        capacity: "1 - 7",
        bigBags: 4,
        handBags: 4,
        price: 7200,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "12 Seater Mini Bus",
        capacity: "1 - 12",
        bigBags: 10,
        handBags: 10,
        price: 8900,
        image: vehicleImages.van
      }
    ],
    highlights: commonDropoffHighlights,
    description: commonDropoffDescription,
    about: `Zone 5 (${dubaiZones.zone5.areas}) → Dubai International Airport

Our driver will meet you at your resort lobby and assist with your luggage for a comfortable ride to Dubai Airport.`,
    baggagePolicy: commonBaggagePolicy,
    cancellationPolicy: commonCancellationPolicy,
    termsConditions: commonTermsConditions
  }
};
