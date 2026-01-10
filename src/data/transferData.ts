import { TransferData, VehicleOption } from "@/components/TransferBooking";

// Vehicle images
const vehicleImages = {
  sedan: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&auto=format&fit=crop",
  suv: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&auto=format&fit=crop",
  van: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
};

export const transfersData: Record<string, TransferData> = {
  "bangkok-bkk-airport-pickup": {
    id: "bangkok-bkk-airport-pickup",
    title: "Suvarnabhumi International Airport {BKK} To Bangkok Hotel Drop Private",
    shortDescription: "Private airport transfer from Suvarnabhumi Airport to your Bangkok hotel",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "Transfer",
    rating: 4.9,
    reviews: 856,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 2700,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 2900,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 3300,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable Pick-Up – Always on time, professional staff wait inside exit gate no. 4 with your name card.",
      "24/7 Service – Available day and night. Night-time pick-up available (12:00 AM – 6:00 AM) with a minimal surcharge.",
      "Flexible Luggage Options – Choose from Sedan, Mini SUV, or Mini Van based on your baggage needs.",
      "Real-Time Support – Instant assistance via Call or WhatsApp at +66 6 274 30 007",
      "Easy Rescheduling – Change your pick-up date/time up to 48 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Bangkok Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
After collecting your luggage, proceed to Exit Gate 4.
Our guide will be waiting for you inside Exit Gate 4, holding an identification card with your name on it.
If you cannot find your identification card or locate our guide, please contact our support staff at +91 7061710810 (call and WhatsApp). Please send a photo of your current location via WhatsApp so our airport team can assist you immediately.
After meeting our guide, if you need to use the restroom, you will need to go to the airport. This is your private car; it will take you directly from the airport to your hotel in Bangkok without stopping anywhere along the way.
The distance from Suvarnabhumi International Airport to Bangkok is 30 km and takes approximately 30 minutes by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be held responsible during such times.
Baggage Reminder: After your journey, please ensure you unload all your luggage from your vehicle. We will not be held responsible for any luggage left behind.
No-Show Policy: If your flight is cancelled or delayed, you must inform us. If you do not inform us and do not arrive within 3 hours of the deadline, the booking will be considered a no-show and no refund will be given.
Free Cancellation: Free cancellations are available up to 48 hours before the pick-up time.
Date Changes: Any changes to the scheduled date must be made at least 48 hours before the pick-up time.
Support Staff Contact (Call/WhatsApp): +66 6 274 30 007`,
    about: `Suvarnabhumi International Airport
Address: 999, Nong Prue, Bang Phli District, Samut Prakan 10540

The distance from Suvarnabhumi International Airport to Bangkok City is 30 kilometers and it takes about 30 minutes to travel by car. Upon arrival at Bangkok Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Exit Gate No. 4.
Our guide will be waiting for you inside Exit Gate No. 4, holding a name card with your name on it.
If you do not see your name card or are unable to locate our guide, please contact our support staff at +91 7061710810 (Call & WhatsApp). Kindly send a photo of your current location via WhatsApp so that our airport team can assist you promptly.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +91 7061710810 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Bangkok, you will not get a refund."
    ]
  },
  "bangkok-dmk-airport-pickup": {
    id: "bangkok-dmk-airport-pickup",
    title: "Don Mueang International Airport {DMK} To Bangkok Hotel Drop Private",
    shortDescription: "Private airport transfer from Don Mueang Airport to your Bangkok hotel",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "Transfer",
    rating: 4.8,
    reviews: 445,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 2700,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 2900,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 3300,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable pick-up from domestic flight – Always on time, professional staff wait inside exit gate no. 11 with your name card.",
      "Reliable pick-up from international flight – Always on time, professional staff wait inside exit gate no. 3 with your name card.",
      "24/7 service – Available day and night. Night time pick-up available (12:00 AM – 6:00 AM) with minimal surcharge.",
      "Luggage options – Choose from Sedan, Mini SUV or Mini Van depending on your luggage needs.",
      "Real-time assistance – Instant assistance via call or WhatsApp on +66 6 274 30 007",
      "Easy rescheduling – Change your pick-up date/time up to 48 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Bangkok Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
After collecting your baggage, proceed to the exit gate.
International Arrivals: Our guide will be waiting inside Exit 5 with a name card.
Domestic Arrivals: Our guide will be waiting inside Exit 11 with a name card.
Our guide will be waiting for you inside the exit gate, carrying an identification card with your name on it.
If you cannot find your identification card or our guide, please contact our support staff at +91 7061710810 (call and WhatsApp). Please send a photo of your current location via WhatsApp so our airport team can assist you immediately.
After meeting our guide, if you need to use the restroom, you must go to the airport. This is your private car; It will take you directly from the airport to your hotel in Bangkok, without any stops along the way.
The distance from Don Muang International Airport to Bangkok is 25 km and takes approximately 30 minutes by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible for such delays.
Baggage Reminder: After your trip, please ensure you unload all your luggage from your vehicle. We will not be responsible for any luggage left behind.
No-Show Policy: If your flight is cancelled or delayed, you must inform us. If you do not inform us and do not arrive within 3 hours of the deadline, the booking will be considered a no-show and no refund will be given.
Free Cancellation: Free cancellation is available up to 48 hours before the pick-up time.
Date Change: Any changes to the scheduled date must be made at least 48 hours before the pick-up time.
Support Staff Contact (Call/WhatsApp): +66 6 274 30 007`,
    about: `Don Mueang International Airport
Address: 222 Vibhavadi Rangsit Rd, Sanam Bin, Don Mueang, Bangkok 10210

The distance from Don Mueang International Airport to Bangkok City is 25 kilometers and it takes about 30 minutes to travel by car. Upon arrival at Bangkok Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Domestic Flight Exit Gate No.11
Once you have your luggage, head towards International Flight Exit Gate No.5
Our guide will be waiting for you inside Exit Gate No. 3, holding a name card with your name on it.
If you do not see your name card or are unable to locate our guide, please contact our support staff at +91 7061710810 (Call & WhatsApp). Kindly send a photo of your current location via WhatsApp so that our airport team can assist you promptly.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +91 7061710810 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Bangkok, you will not get a refund."
    ]
  },
  "bangkok-bkk-airport-dropoff": {
    id: "bangkok-bkk-airport-dropoff",
    title: "Bangkok Hotel to Suvarnabhumi International Airport {BKK}",
    shortDescription: "Private transfer from your Bangkok hotel to Suvarnabhumi Airport",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "Transfer",
    rating: 4.8,
    reviews: 723,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 2200,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 2600,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 2900,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 35 km from Bangkok Hotel to Suvarnabhumi International Airport",
      "Travel Time: Around 40 minutes under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distance & Travel Time: Suvarnabhumi International Airport (BKK) is ~35 km from your Bangkok hotel and takes about 40 minutes under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight time.
Departure Planning: With a ~40-minute drive + 3-hour airport buffer, leave your hotel ~3 hrs 40 mins to 4 hrs before departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 36 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Bangkok Hotel → Suvarnabhumi International Airport {BKK}

Distance: 35 kilometers
Travel Time: Approximately 40 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Bangkok hotel to Suvarnabhumi International Airport is 35 km, and it takes about 40 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +66 63 370 1999 at least 36 hours in advance."
    ]
  },
  "bangkok-temple-tour-airport": {
    id: "bangkok-temple-tour-airport",
    title: "Bangkok Hotel to Bangkok 2 Temple Tour to Suvarnabhumi International Airport {BKK} Drop Private",
    shortDescription: "Private temple tour followed by airport drop-off to Suvarnabhumi Airport",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "3 Hrs + Transfer",
    rating: 4.9,
    reviews: 289,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5100,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5600,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 6200,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 35 km from Bangkok Hotel to Suvarnabhumi International Airport",
      "Travel Time: Around 40 minutes under normal traffic conditions.",
      "Temple Tour: Visit Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit)",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distance & Travel Time (Transfer): Suvarnabhumi International Airport (BKK) is ~35 km from central Bangkok and takes about 40 minutes under normal traffic.
Bangkok 2-Temple Tour Duration: ~3 hours total.

Temples: Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit).

Temple Tickets: Not included — please purchase directly at the temples.

Please manage time to finish both temples within 3 hours.

Airport Arrival: Plan to reach the airport at least 3 hours before your flight time.
Departure Plan (tour + flight same day): 3-hour temple tour + ~40-minute drive + 3-hour airport buffer ⇒ Leave your hotel ~6 hrs 40 mins to 7 hrs before flight departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 36 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Bangkok Hotel → Suvarnabhumi International Airport {BKK}

Distance: 35 kilometers
Travel Time: Approximately 40 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.

Temple Tour Includes:
- Golden Temple (Wat Traimit) - Home to the world's largest solid gold Buddha
- Marble Temple (Wat Benchamabophit) - One of Bangkok's most beautiful temples`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Bangkok hotel to Suvarnabhumi International Airport is 35 km, and it takes about 40 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Temple tickets are not included - please purchase directly at the temples.",
      "Please manage time to finish both temples within 3 hours.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +66 63 370 1999 at least 36 hours in advance."
    ]
  },
  "bangkok-safari-world-bkk-airport": {
    id: "bangkok-safari-world-bkk-airport",
    title: "Bangkok Hotel to Safari World to Suvarnabhumi International Airport {BKK} Drop Private",
    shortDescription: "Private transfer with Safari World visit before airport drop-off",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "Safari World + Transfer",
    rating: 4.8,
    reviews: 156,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5200,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 6100,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 6800,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 35 km from Bangkok Hotel to Suvarnabhumi International Airport",
      "Travel Time: Around 40 minutes under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distances & Travel Time (normal traffic): Hotel → Safari World: ~25 km, ~55 minutes, Safari World → BKK Airport: ~25 km, ~55 minutes
Safari World: Open: 10:00 AM – 5:00 PM, Closed: Every Monday, Safari World Tickets Not included
Airport Arrival: Plan to reach BKK at least 3 hours before your flight.
Departure Planning (tour + flight same day): Hotel → Safari World (~55 min) + Time at Safari World (your choice) + Safari World → BKK (~55 min) + 3-hour airport buffer. Example: If you plan 4 hours inside the park, leave your hotel ~8 hrs 50 mins before flight time.
Traffic & Weather: Delays can occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 36 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Bangkok Hotel → Suvarnabhumi International Airport {BKK}

Distance: 35 kilometers
Travel Time: Approximately 40 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Bangkok hotel to Suvarnabhumi International Airport is 35 km, and it takes about 40 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Safari World tickets are not included - please purchase directly at the venue.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided."
    ]
  },
  "bangkok-dmk-airport-dropoff": {
    id: "bangkok-dmk-airport-dropoff",
    title: "Bangkok Hotel to Don Mueang Airport {DMK}",
    shortDescription: "Private transfer from your Bangkok hotel to Don Mueang Airport",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "Transfer",
    rating: 4.8,
    reviews: 312,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 2700,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 3000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 3200,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 25 km from Bangkok Hotel to Don Mueang Airport",
      "Travel Time: Around 40 minutes under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distance & Travel Time: Don Mueang International Airport (DMK) is ~25 km from your Bangkok hotel and takes about 40 minutes under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight time.
Departure Planning: With ~40 minutes drive + 3-hour airport buffer, leave your hotel ~3 hrs 40 mins to 4 hrs before departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 36 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Bangkok Hotel → Don Mueang Airport {DMK}

Distance: 25 kilometers
Travel Time: Approximately 40 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Bangkok hotel to Don Mueang Airport is 25 km, and it takes about 40 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +91 7061710810 at least 36 hours in advance."
    ]
  },
  "bangkok-temple-tour-dmk-airport": {
    id: "bangkok-temple-tour-dmk-airport",
    title: "Bangkok Hotel to Bangkok 2 Temple Tour to Don Mueang International Airport {DMK} Drop Private",
    shortDescription: "Private temple tour followed by airport drop-off to Don Mueang Airport",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "3 Hrs + Transfer",
    rating: 4.9,
    reviews: 178,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5100,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5600,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 6200,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 25 km from Bangkok Hotel to Don Mueang Airport",
      "Travel Time: Around 40 minutes under normal traffic conditions.",
      "Temple Tour: Visit Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit)",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distance & Travel Time (Transfer): Don Mueang International Airport (DMK) is ~25 km from central Bangkok and takes about 40 minutes under normal traffic.
Bangkok 2-Temple Tour Duration: ~3 hours total.

Temples: Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit).

Temple Tickets: Not included — please purchase directly at the temples.

Please manage time to finish both temples within 3 hours.

Airport Arrival: Plan to reach the airport at least 3 hours before your flight time.
Departure Plan (tour + flight same day): 3-hour temple tour + ~40-minute drive + 3-hour airport buffer ⇒ Leave your hotel ~6 hrs 40 mins to 7 hrs before flight departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 36 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Bangkok Hotel → Don Mueang Airport {DMK}

Distance: 25 kilometers
Travel Time: Approximately 40 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Bangkok hotel to Don Mueang Airport is 25 km, and it takes about 40 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Temple tickets are not included - please purchase directly at the temples.",
      "Please manage time to finish both temples within 3 hours.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +91 7061710810 at least 36 hours in advance."
    ]
  },
  "bangkok-safari-world-dmk-airport": {
    id: "bangkok-safari-world-dmk-airport",
    title: "Bangkok Hotel to Safari World to Don Mueang International Airport {DMK} Drop Private",
    shortDescription: "Private transfer with Safari World visit before DMK airport drop-off",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "Safari World + Transfer",
    rating: 4.8,
    reviews: 98,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5900,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 6800,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7300,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 25 km from Bangkok Hotel to Don Mueang Airport",
      "Travel Time: Around 40 minutes under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distances & Travel Time (normal traffic): Hotel → Safari World: ~25 km, ~55 minutes, Safari World → DMK Airport: ~25 km, ~55 minutes
Safari World: Open: 10:00 AM – 5:00 PM, Closed: Every Monday, Safari World Tickets Not included
Airport Arrival: Plan to reach DMK at least 3 hours before your flight.
Departure Planning (tour + flight same day): Hotel → Safari World (~55 min) + Time at Safari World (your choice) + Safari World → DMK (~55 min) + 3-hour airport buffer. Example: If you plan 4 hours inside the park, leave your hotel ~8 hrs 50 mins before flight time.
Traffic & Weather: Delays can occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 36 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Bangkok Hotel → Don Mueang Airport {DMK}

Distance: 25 kilometers
Travel Time: Approximately 40 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Bangkok hotel to Don Mueang Airport is 25 km, and it takes about 40 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Safari World tickets are not included - please purchase directly at the venue.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +91 7061710810 at least 36 hours in advance."
    ]
  },
  "bangkok-city-hourly-rental": {
    id: "bangkok-city-hourly-rental",
    title: "Bangkok Hotel to Bangkok Hotel (4 Hrs)",
    shortDescription: "Private car hire for 4 hours within Bangkok City",
    location: "Bangkok, Thailand",
    city: "bangkok",
    duration: "4 Hours",
    rating: 4.9,
    reviews: 234,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 4500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 5700,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Temple Tour: Wat Pho – The Grand Palace & Emerald Buddha – Wat Arun (Temple of Dawn) – Chinatown (Yaowarat Road).",
      "Sightseeing: Safari World – Chao Phraya Princess Dinner Cruise – Dream World – Siam Amazing Park – Mahanakhon Skywalk – Sea Life Ocean World – Madame Tussauds Museum.",
      "Shopping: Chatuchak Weekend Market – MBK Center & Siam Paragon – Asiatique The Riverfront – Indra Square.",
      "Food: Street Food in Khao San Road & Silom – Rooftop Bars – Sky Bar at Lebua State Tower,",
      "Nightlife: Sukhumvit Soi 11, RCA for clubs, and Soi Cowboy for entertainment – Baiyoke Sky Bar."
    ],
    description: `Service – Private car hire for 4 hours within Bangkok City.
Service Area – This booking is valid only for travel within Bangkok City limits. Any travel outside Bangkok City will incur an extra charge payable directly to the driver.
Tickets – This booking includes transportation only. No attraction tickets are included.
After Booking – Please WhatsApp +91 7061710810 and share your travel plan so that we can arrange your trip efficiently and save your time.
Overtime Charges – If your tour exceeds the booked duration, an additional charge of 500 THB per hour will apply (payable directly to the driver). Please inform the driver before your time ends if you wish to extend. Otherwise, the driver will end the trip at the scheduled time.
Pickup Time – Your booking starts from the confirmed pickup time. Please be ready at the hotel lobby on time.
Weather Policy – We are not responsible if your tour cannot be completed due to bad weather or rain, as this is an hourly car rental service.
Booking Changes – If you wish to change the date or time of your booking, please email us at: booking@yellodae.com`,
    about: `Bangkok (Krung Thep Maha Nakhon) is Thailand's capital and largest city — a vibrant mix of cultural heritage, modern skyscrapers, street markets, and buzzing nightlife. It's known for ornate temples, floating markets, luxury malls, and world-class street food.

Famous Temples in Bangkok:
• Wat Phra Kaew (Temple of the Emerald Buddha)
• Wat Pho (Temple of the Reclining Buddha)
• Wat Arun (Temple of Dawn)
• Wat Saket (Golden Mount)
• Wat Benchamabophit (Marble Temple)

Sightseeing & Entertainment:
• Safari World & Marine Park – Family-friendly wildlife experience
• Chao Phraya Princess Dinner Cruise – Night views of illuminated landmarks
• Dream World & Siam Amazing Park – Theme parks for all ages
• Mahanakhon Skywalk – Glass-floored observation deck
• Sea Life Ocean World – Southeast Asia's largest aquarium

Shopping:
• Chatuchak Weekend Market – Largest outdoor market in Thailand
• MBK Center & Siam Paragon – Fashion, electronics, and luxury brands
• Asiatique The Riverfront – Night bazaar & riverside dining`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "In case of delays or no-shows, no refund will be issued.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "Available only within Bangkok City. If you wish to travel outside Bangkok City, extra charges will apply (payable directly to the driver).",
      "This is only a private taxi. No attraction tickets are included in the price.",
      "After booking, please WhatsApp us at +66 6 3370 1999 and share your tour plan so we can organize your route efficiently.",
      "If your booking exceeds the reserved time, the driver will charge 500 THB per extra hour (payable directly to the driver). Please inform the driver before your time ends if you want to extend your booking.",
      "Your booking time starts from the pick-up time. Please be ready in your hotel lobby at the scheduled time.",
      "If your tour is disrupted or shortened due to bad weather or rain, no refund will be provided as the service is on an hourly basis."
    ]
  },
  "bangkok-to-pattaya": {
    id: "bangkok-to-pattaya",
    title: "Bangkok Hotel To Pattaya Hotel Drop Private",
    shortDescription: "Private transfer from Bangkok hotel to Pattaya hotel",
    location: "Bangkok to Pattaya, Thailand",
    city: "bangkok",
    duration: "2.5 Hrs Transfer",
    rating: 4.9,
    reviews: 567,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 3800,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 4400,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 5200,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Temples: Buddha Mountain – Big Buddha – Pattaya View Point",
      "Sightseeing: Safari World – Tiger Topia – Khao Kheow Zoo – Cabaret Show – Dolphinarium",
      "Shopping: Night Bazaar – Central Festival – Terminal 21",
      "Food: Khodiyar Dhaba – Gordhan Thal – Alibaba – Jai Jinendra – Amritsr",
      "Nightlife: Walking Street – Soi 6 – Tree Town"
    ],
    description: `Driver Waiting Time: The driver will wait for 10–15 minutes only in the hotel lobby.
No-Show Policy: In case of delay or non-arrival, the booking will be considered a no-show and no refund will be applicable.
Free Cancellation: Cancellation can be done free of charge up to 48 hours before the pickup time.
Date Change: Any change to the scheduled date must be made at least 48 hours before the pickup time.
Travel Distance: Bangkok ↔ Pattaya is 150 km, and travel time is approximately 2 hours 30 minutes.
No Stopover: There is no stopover between Bangkok Hotel and Pattaya Hotel. Please finish your meal and use the toilet before departure.
Weather & Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible during such times.
Luggage Reminder: After the trip, please make sure to take all your luggage out of the vehicle. We will not be responsible for belongings left behind.
Support Staff Contact (Call/WhatsApp): +66 6 274 30 007`,
    about: `The distance from Bangkok to Pattaya is 150 kilometers and it takes about 2 hours and 30 minutes to travel by car.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 48 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 48 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Bangkok to Pattaya is 150 km and takes approximately 2 hours 30 minutes.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking and you will not get any refund.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "You can change the booking date 48 hours in advance for free.",
      "If you want to cancel the booking, you can do so 48 hours in advance. If you cancel the booking less than 48 hours in advance, no refund will be given."
    ]
  },
  "bangkok-city-tour-pattaya": {
    id: "bangkok-city-tour-pattaya",
    title: "Bangkok Hotel To Bangkok City Tour To Pattaya Hotel Drop Private",
    shortDescription: "Bangkok temple tour followed by private transfer to Pattaya",
    location: "Bangkok to Pattaya, Thailand",
    city: "bangkok",
    duration: "Temple Tour + 2.5 Hrs",
    rating: 4.9,
    reviews: 189,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5600,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 6400,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7600,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Temples: Buddha Mountain – Big Buddha – Pattaya View Point",
      "Sightseeing: Safari World – Tiger Topia – Khao Kheow Zoo – Cabaret Show – Dolphinarium",
      "Shopping: Night Bazaar – Central Festival – Terminal 21",
      "Food: Khodiyar Dhaba – Gordhan Thal – Alibaba – Jai Jinendra – Amritsr",
      "Nightlife: Walking Street – Soi 6 – Tree Town"
    ],
    description: `Driver Waiting Time: The driver will wait for 10–15 minutes only in the hotel lobby.
No-Show Policy: In case of delay or non-arrival, the booking will be considered a no-show and no refund will be applicable.
Free Cancellation: Free cancellation can be done up to 48 hours before the pick-up time.
Date Change: Any change to the scheduled date must be made at least 48 hours before the pick-up time.
Weather & Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible during such times.
Baggage Reminder: After the trip, please make sure to take all your luggage from the vehicle. We will not be responsible for any luggage left behind.
Bangkok Hotel → Bangkok Temple Tour → Pattaya Hotel
Wat Traimit (Golden Buddha) → Wat Benchamabophit (Marble Temple)
Temple entry tickets are not included in your package.
Please wear full/appropriate clothing (short clothes are not allowed in temples).
Support Staff Contact (Call/WhatsApp): +66 6 274 30 007`,
    about: `The distance from Bangkok to Pattaya is 150 kilometers and it takes about 2 hours and 30 minutes to travel by car.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 48 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 48 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Bangkok to Pattaya is 150 km and takes approximately 2 hours 30 minutes.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking and you will not get any refund.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "You can change the booking date 48 hours in advance for free.",
      "If you want to cancel the booking, you can do so 48 hours in advance. If you cancel the booking less than 48 hours in advance, no refund will be given."
    ]
  },
  "bangkok-tiger-topia-pattaya": {
    id: "bangkok-tiger-topia-pattaya",
    title: "Bangkok Hotel To Tiger Topia Sriracha Zoo To Pattaya Hotel Drop Private",
    shortDescription: "Bangkok to Tiger Topia Sriracha Zoo visit with Pattaya hotel drop",
    location: "Bangkok to Pattaya, Thailand",
    city: "bangkok",
    duration: "7 Hrs Total",
    rating: 4.8,
    reviews: 145,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 6200,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7200,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Temples: Buddha Mountain – Big Buddha – Pattaya View Point",
      "Sightseeing: Safari World – Tiger Topia – Khao Kheow Zoo – Cabaret Show – Dolphinarium",
      "Shopping: Night Bazaar – Central Festival – Terminal 21",
      "Food: Khodiyar Dhaba – Gordhan Thal – Alibaba – Jai Jinendra – Amritsr",
      "Nightlife: Walking Street – Soi 6 – Tree Town"
    ],
    description: `Driver Waiting Time: The driver will wait for 10–15 minutes only in the hotel lobby.
No-Show Policy: In the event of a delay or no-show, the booking will be treated as a no-show and no refund will be given.
Free Cancellation: Free cancellation can be made up to 48 hours before the pick-up time.
Date Change: Any change to the scheduled date must be made at least 48 hours before the pick-up time.
Weather & Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible during such times.
Luggage Reminder: After the trip, please make sure to remove all your luggage from the vehicle. We will not be responsible for any luggage left behind.
Route Information: Bangkok Hotel → Tiger Topia Sriracha Zoo → Pattaya Hotel
Entry ticket to Tiger Topia Sriracha Zoo is not included in the transfer package.
Contact Support Staff (Call/WhatsApp): +66 6 274 30 007
Trip Duration:
Bangkok Hotel → Tiger Topia Sriracha Zoo → Pattaya Hotel: 2 hours 30 minutes
Tiger Topia Sriracha Zoo: 4 hours
Total Duration: ~ 7 hours from pick-up time`,
    about: `The distance from Bangkok to Pattaya is 150 kilometers and it takes about 2 hours and 30 minutes to travel by car.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 48 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 48 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Bangkok to Pattaya is 150 km and takes approximately 2 hours 30 minutes.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking and you will not get any refund.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "You can change the booking date 48 hours in advance for free.",
      "If you want to cancel the booking, you can do so 48 hours in advance. If you cancel the booking less than 48 hours in advance, no refund will be given."
    ]
  },
  // Pattaya Transfers
  "pattaya-bkk-airport-pickup": {
    id: "pattaya-bkk-airport-pickup",
    title: "Suvarnabhumi International Airport {BKK} To Pattaya Hotel Drop Private",
    shortDescription: "Private airport transfer from Suvarnabhumi Airport to your Pattaya hotel",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "1.5 Hrs",
    rating: 4.9,
    reviews: 756,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 3600,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 4100,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 5100,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable Pick-Up – Always on time, professional staff wait inside exit gate no. 4 with your name card.",
      "24/7 Service – Available day and night. Nighttime pickup is available (12:00 AM – 6:00 AM) with a minimal surcharge.",
      "Flexible Luggage Options – Choose from Sedan, Mini SUV, or Mini Van based on your baggage needs.",
      "Real-Time Support – Instant assistance via Call or WhatsApp at +66 6 274 30 007",
      "Easy Rescheduling – Change your pick-up date/time up to 72 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Bangkok Airport, go straight to the Immigration Department and get your visa.
After completing the immigration formalities, collect your checked luggage from the designated carousel.
After collecting your luggage, proceed to Exit Gate No. 4.
Our guide will be waiting for you inside Exit Gate No. 4, holding a Name card bearing your name.
If you do not find your Name card or are unable to locate our guide, please contact our support staff at +91 7061710810 (call and WhatsApp).
After meeting our guide, if you need to go to the toilet, you must go to the airport as this is your private car, it will take you nonstop from the airport directly to your hotel in Pattaya and it will not stop anywhere on the way.
The distance from Suvarnabhumi International Airport to Pattaya is 120 km and it takes approximately 1 hour 30 minutes to travel by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible during such times.
Luggage Reminder: After the trip, please make sure to unload all your luggage from the vehicle.
No-Show Policy: You must let us know if your plane is cancelled or delayed. If you do not let us know and you do not arrive within 3 hours of the time limit, the booking will be considered a no-show and no refund will be given.
Free Cancellation: Free cancellations can be made up to 72 hours prior to pick-up time.
Date Changes: Any changes to the scheduled date must be made at least 72 hours prior to pick-up time.`,
    about: `Suvarnabhumi International Airport
Address: 999, Nong Prue, Bang Phli District, Samut Prakan 10540

The distance from Suvarnabhumi International Airport to Pattaya is 120 kilometers and it takes about 1 hour 30 minutes to travel by car.
Upon arrival at Bangkok Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Exit Gate No. 4.
Our guide will be waiting for you inside Exit Gate No. 4, holding a name card with your name on it.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Pattaya, you will not get a refund."
    ]
  },
  "pattaya-bkk-tiger-topia-pickup": {
    id: "pattaya-bkk-tiger-topia-pickup",
    title: "Suvarnabhumi International Airport {BKK} To Tiger Topia Sriracha Zoo To Pattaya Hotel Drop Private",
    shortDescription: "Airport pickup with Tiger Topia Zoo visit before Pattaya hotel drop",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "5 Hrs Total",
    rating: 4.9,
    reviews: 234,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5300,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5800,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7100,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable Pick-Up – Always on time, professional staff wait inside exit gate no. 4 with your name card.",
      "24/7 Service – Available day and night. Nighttime pickup is available (12:00 AM – 6:00 AM) with a minimal surcharge.",
      "Flexible Luggage Options – Choose from Sedan, Mini SUV, or Mini Van based on your baggage needs.",
      "Real-Time Support – Instant assistance via Call or WhatsApp at +66 6 274 30 007",
      "Easy Rescheduling – Change your pick-up date/time up to 72 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Bangkok Airport, go straight to the Immigration Department and obtain your visa.
After completing the immigration formalities, collect your checked luggage from the designated carousel.
After collecting your luggage, proceed to Exit Gate No. 4.
Our guide will be waiting for you inside Exit Gate No. 4 with a Name card in your name.
The distance from Suvarnabhumi International Airport to Tiger Topia Zoo Sriracha is 92 km and it takes about 1 hour 20 minutes to travel by car.
You will get 1 hour for breakfast and 3 hours to visit Tiger Topia Zoo, in total you will get 4 hours.
This is only private taxi booking, it does not include breakfast and zoo tickets at Tiger Topia Zoo.
The distance from Tiger Topia Zoo Sriracha to Pattaya is 38 km and it takes about 50 minutes to travel by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible for such times.
No-Show Policy: If your flight is cancelled or delayed, you must inform us.
Free cancellation: Free cancellation can be done up to 72 hours before the pick-up time.`,
    about: `Suvarnabhumi International Airport
Address: 999, Nong Prue, Bang Phli District, Samut Prakan 10540

The distance from Suvarnabhumi International Airport to Pattaya is 120 kilometers and it takes about 1 hour 30 minutes to travel by car.
Upon arrival at Bangkok Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Exit Gate No. 4.
Our guide will be waiting for you inside Exit Gate No. 4, holding a name card with your name on it.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Pattaya, you will not get a refund."
    ]
  },
  "pattaya-dmk-airport-pickup": {
    id: "pattaya-dmk-airport-pickup",
    title: "Don Mueang International Airport {DMK} To Pattaya Hotel Drop Private",
    shortDescription: "Private airport transfer from Don Mueang Airport to your Pattaya hotel",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "2.5 Hrs",
    rating: 4.8,
    reviews: 345,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5100,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5600,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 6100,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable pick-up from domestic flight – Always on time, professional staff wait inside exit gate no. 11 with your name card.",
      "Reliable pick-up from international flight – Always on time, professional staff wait inside exit gate no. 3 with your name card.",
      "24/7 service – Available day and night. Night time pick-up available (12:00 AM – 6:00 AM) with minimal surcharge.",
      "Luggage options – Choose from Sedan, Mini SUV or Mini Van depending on your luggage needs.",
      "Real-time assistance – Instant assistance via call or WhatsApp on +66 6 274 30 007",
      "Easy rescheduling – Change your pick-up date/time up to 72 hours in advance.",
      "Other charges: All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Bangkok Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
After collecting your baggage, proceed to the exit gate.
International Arrivals: Our guide will be waiting for you with a name card inside Exit 5.
Domestic Arrivals: Our guide will be waiting for you with a name card inside Exit 11.
The distance from Don Mueang International Airport to Pattaya is 166 km and it takes about 2 hour 30 minutes to travel by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible for such delays.
No-Show Policy: If your flight is cancelled or delayed, you must inform us.
Free cancellation: Free cancellation is available up to 72 hours before the pick-up time.
Date change: Any changes to the scheduled date must be made at least 72 hours before the pick-up time.
Support staff contact (call/WhatsApp): +66 6 274 30 007`,
    about: `Don Mueang International Airport
Address: 222 Vibhavadi Rangsit Rd, Sanam Bin, Don Mueang, Bangkok 10210

The distance from Don Mueang International Airport to Pattaya is 166 kilometers and it takes about 2:30 hours to travel by car.
Upon arrival at Bangkok Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Domestic Flight Exit Gate No.11 or International Flight Exit Gate No.5`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Pattaya, you will not get a refund."
    ]
  },
  "pattaya-dmk-tiger-topia-pickup": {
    id: "pattaya-dmk-tiger-topia-pickup",
    title: "Don Mueang International Airport {DMK} To Tiger Topia Sriracha Zoo To Pattaya Hotel Drop Private",
    shortDescription: "Airport pickup with Tiger Topia Zoo visit before Pattaya hotel drop",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "6 Hrs Total",
    rating: 4.8,
    reviews: 156,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6100,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7800,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable pick-up from domestic flight – Always on time, professional staff wait inside exit gate no. 11 with your name card.",
      "Reliable pick-up from international flight – Always on time, professional staff wait inside exit gate no. 3 with your name card.",
      "24/7 service – Available day and night. Night time pick-up available (12:00 AM – 6:00 AM) with minimal surcharge.",
      "Luggage options – Choose from Sedan, Mini SUV or Mini Van depending on your luggage needs.",
      "Real-time assistance – Instant assistance via call or WhatsApp on +66 6 274 30 007",
      "Easy rescheduling – Change your pick-up date/time up to 72 hours in advance.",
      "Other charges: All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Bangkok Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
After collecting your baggage, proceed to the exit gate.
International Arrivals: Our guide will be waiting for you with a name card inside Exit 5.
Domestic Arrivals: Our guide will be waiting for you with a name card inside Exit 11.
The distance from Don Mueang International Airport to Tiger Topia Zoo Sriracha is 134 km and it takes about 2 hours 30 minutes to travel by car.
You will get 1 hour for breakfast and 3 hours to visit Tiger Topia Zoo, in total you will get 4 hours.
This is only private taxi booking, it does not include breakfast and zoo tickets at Tiger Topia Zoo.
The distance from Tiger Topia Zoo Sriracha to Pattaya is 38 km and it takes about 50 minutes to travel by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays.
No-Show Policy: If your flight is cancelled or delayed, you must inform us.
Free cancellation: Free cancellation is available up to 72 hours before the pick-up time.
Date change: Any changes to the scheduled date must be made at least 72 hours before the pick-up time.
Support staff contact (call/WhatsApp): +66 6 274 30 007`,
    about: `Don Mueang International Airport
Address: 222 Vibhavadi Rangsit Rd, Sanam Bin, Don Mueang, Bangkok 10210

The distance from Don Mueang International Airport to Pattaya is 166 kilometers and it takes about 2:30 hours to travel by car.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Pattaya, you will not get a refund."
    ]
  },
  "pattaya-bkk-airport-dropoff": {
    id: "pattaya-bkk-airport-dropoff",
    title: "Pattaya Hotel to Suvarnabhumi International Airport {BKK}",
    shortDescription: "Private transfer from your Pattaya hotel to Suvarnabhumi Airport",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "1.5 Hrs",
    rating: 4.8,
    reviews: 623,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 3500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 4100,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 5000,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 121 km from Pattaya Hotel to Suvarnabhumi International Airport",
      "Travel Time: Around 1:30 hours under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time."
    ],
    description: `Distance & Travel Time: From your Pattaya hotel to Suvarnabhumi International Airport (BKK) is ~121 km and takes about 01:30 hours under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight time.
Departure Planning: With a ~01:30-hour drive + 3-hour airport buffer, leave your hotel 4.5 hours before departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 48 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Pattaya Hotel → Suvarnabhumi International Airport {BKK}

Distance: 121 kilometers
Travel Time: Approximately 1:30 hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Pattaya hotel to Suvarnabhumi International Airport is 121 km, and it takes about 01:30 hours to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided."
    ]
  },
  "pattaya-temple-tour-bkk-airport": {
    id: "pattaya-temple-tour-bkk-airport",
    title: "Pattaya Hotel to Bangkok 2 Temple Tour to Suvarnabhumi International Airport {BKK} Drop Private",
    shortDescription: "Private temple tour followed by airport drop-off to Suvarnabhumi Airport",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "Tour + 1.5 Hrs",
    rating: 4.9,
    reviews: 189,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6700,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7300,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 8000,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 121 km from Pattaya Hotel to Suvarnabhumi International Airport",
      "Travel Time: Around 1:30 hours under normal traffic conditions.",
      "Temple Tour: Visit Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit)",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays."
    ],
    description: `Distance & Travel Time (Transfer): Suvarnabhumi International Airport (BKK) is ~121 km from central Pattaya and takes about 01:30 Hours under normal traffic.
Bangkok 2-Temple Tour Duration: ~3 hours total.
Temples: Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit).
Temple Tickets: Not included — please purchase directly at the temples.
Please manage time to finish both temples within 3 hours.
Airport Arrival: Plan to reach the airport at least 3 hours before your flight time.
Departure Plan (tour + flight same day): 3-hour temple tour + 01:30 Hours drive + 3-hour airport buffer ⇒ Leave your hotel ~8 hrs to 9 hrs before flight departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Pattaya Hotel → Suvarnabhumi International Airport {BKK}

Distance: 121 kilometers
Travel Time: Approximately 1:30 hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Pattaya hotel to Suvarnabhumi International Airport is 121 km, and it takes about 01:30 hours to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided."
    ]
  },
  "pattaya-safari-world-bkk-airport": {
    id: "pattaya-safari-world-bkk-airport",
    title: "Pattaya Hotel to Safari World to Suvarnabhumi International Airport {BKK} Drop Private",
    shortDescription: "Safari World visit followed by airport drop-off to Suvarnabhumi Airport",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "Safari + Transfer",
    rating: 4.8,
    reviews: 145,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7300,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 8700,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 121 km from Pattaya Hotel to Suvarnabhumi International Airport",
      "Travel Time: Around 1:30 hours under normal traffic conditions.",
      "Safari World: Open 10:00 AM – 5:00 PM, Closed every Monday",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight.",
      "Important Note: Traffic congestion or heavy rain may cause delays."
    ],
    description: `Distances & Travel Time (normal traffic): Hotel → Safari World: 145 km, ~2 Hours & 10 minutes, Safari World → BKK Airport: ~25 km, ~50 minutes
Safari World: Open: 10:00 AM – 5:00 PM, Closed: Every Monday
Safari World Tickets Not included
Airport Arrival: Plan to reach BKK at least 3 hours before your flight.
Departure Planning (tour + flight same day): Hotel → Safari World (02:10 min) + Time Safari World (your choice) + Safari World → BKK (~55 min) + 3-hour airport buffer.
Example: If you plan 4 hours inside the park, leave your hotel ~8 hrs 50 mins before flight time.
Traffic & Weather: Delays can occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Pattaya Hotel → Suvarnabhumi International Airport {BKK}

Distance: 121 kilometers
Travel Time: Approximately 1:30 hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Pattaya hotel to Suvarnabhumi International Airport is 121 km, and it takes about 01:30 hours to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided."
    ]
  },
  "pattaya-dmk-airport-dropoff": {
    id: "pattaya-dmk-airport-dropoff",
    title: "Pattaya Hotel to Don Mueang International Airport {DMK} Drop Private",
    shortDescription: "Private transfer from your Pattaya hotel to Don Mueang Airport",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "2 Hrs",
    rating: 4.8,
    reviews: 312,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 5000,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5600,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 6500,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 161 km from Pattaya Hotel to Don Mueang Airport",
      "Travel Time: Around 2 Hours under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time."
    ],
    description: `Distance & Travel Time: From your Pattaya hotel to Don Mueang International Airport (DMK) is ~161 km and takes about 2 hours under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight time.
Departure Planning: With a ~2-hour drive + 3-hour airport buffer, leave your hotel ~5 to 5.5 hours before departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@yellodae.com at least 48 hours in advance.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Pattaya Hotel → Don Mueang Airport {DMK}

Distance: 161 kilometers
Travel Time: Approximately 2 Hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to the airport, you will not get a refund."
    ]
  },
  "pattaya-temple-tour-dmk-airport": {
    id: "pattaya-temple-tour-dmk-airport",
    title: "Pattaya Hotel → 2-Temple Tour → Don Mueang (DMK) Airport",
    shortDescription: "Private temple tour followed by airport drop-off to Don Mueang Airport",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "Tour + 2 Hrs",
    rating: 4.9,
    reviews: 134,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6700,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7400,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 8100,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 161 km from Pattaya Hotel to Don Mueang Airport",
      "Travel Time: Around 2 Hours under normal traffic conditions.",
      "Temple Tour: Visit Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit)",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays."
    ],
    description: `Distance & Travel Time (Transfer): Don Mueang International Airport (DMK) is ~161 km from central Pattaya and takes about 2 Hours under normal traffic.
Bangkok 2-Temple Tour Duration: ~3 hours total.
Temples: Golden Temple (Wat Traimit) and Marble Temple (Wat Benchamabophit).
Temple Tickets: Not included — please purchase directly at the temples.
Please manage time to finish both temples within 3 hours.
Airport Arrival: Plan to reach the airport at least 3 hours before your flight time.
Departure Plan (tour + flight same day): 3-hour temple tour + ~2-Hours drive + 3-hour airport buffer ⇒ Leave your hotel ~8 hrs to 9 hrs before flight departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Pattaya Hotel → Don Mueang Airport {DMK}

Distance: 161 kilometers
Travel Time: Approximately 2 Hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to the airport, you will not get a refund."
    ]
  },
  "pattaya-indra-square-dmk-airport": {
    id: "pattaya-indra-square-dmk-airport",
    title: "Pattaya Hotel To Indra Square Shopping To Don Mueang International Airport {DMK} Drop Private",
    shortDescription: "Shopping at Indra Square followed by airport drop-off to Don Mueang Airport",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "Shopping + 2 Hrs",
    rating: 4.8,
    reviews: 98,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 7400,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 8200,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 9800,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 161 km from Pattaya Hotel to Don Mueang Airport",
      "Travel Time: Around 2 Hours under normal traffic conditions.",
      "Indra Square Shopping: 4 hours total shopping time",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays."
    ],
    description: `Distance & Travel Time (Transfer): Don Mueang International Airport (DMK) is 161 km from central Pattaya and takes about 2 Hours under normal traffic.
Bangkok Indra Square Shopping Duration: 4 hours total, Please manage time to finish shopping within 4 hours.
Airport Arrival: Plan to reach the airport at least 3 hours before your flight time.
Departure Plan (Shopping + flight same day): 4-hour Indra Square Shopping + 2-Hours drive + 3-hour airport buffer ⇒ Leave your hotel ~9 hrs to 10 hrs before flight departure.
Traffic & Weather: Delays may occur due to traffic or rain—please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes.
Support Staff Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Pattaya Hotel → Don Mueang Airport {DMK}

Distance: 161 kilometers
Travel Time: Approximately 2 Hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to the airport, you will not get a refund."
    ]
  },
  "pattaya-city-hourly-rental": {
    id: "pattaya-city-hourly-rental",
    title: "Pattaya City Private Car (4 Hrs)",
    shortDescription: "Private car hire for 4 hours within Pattaya City",
    location: "Pattaya, Thailand",
    city: "pattaya",
    duration: "4 Hours",
    rating: 4.9,
    reviews: 267,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 4500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 5000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 5700,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Temples: Buddha Mountain – Big Buddha – Pattaya View Point",
      "Sightseeing: Safari World – Tiger Topia – Khao Kheow Zoo – Cabaret Show – Dolphinarium",
      "Shopping: Night Bazaar – Central Festival – Terminal 21",
      "Food: Khodiyar Dhaba – Gordhan Thal – Alibaba – Jai Jinendra – Amritsr",
      "Nightlife: Walking Street – Soi 6 – Tree Town"
    ],
    description: `Service – Private car hire for 4 hours within Pattaya City.
Service Area – This booking is valid only for travel within Pattaya City limits. Any travel outside Pattaya City will incur an extra charge payable directly to the driver.
Tickets – This booking includes transportation only. No attraction tickets are included.
After Booking – Please WhatsApp +66 63 370 1999 and share your travel plan so that we can arrange your trip efficiently and save your time.
Overtime Charges – If your tour exceeds the booked duration, an additional charge of 500 THB per hour will apply (payable directly to the driver).
Pickup Time – Your booking starts from the confirmed pickup time. Please be ready at the hotel lobby on time.
Weather Policy – We are not responsible if your tour cannot be completed due to bad weather or rain, as this is an hourly car rental service.
Booking Changes – If you wish to change the date or time of your booking, please email us at: booking@yellodae.com`,
    about: `Pattaya is a beautiful coastal city located just 130 kilometers from Bangkok. Famous for its picturesque beaches and calm atmosphere, it is one of the most famous destinations in the world for nightlife and entertainment.

There are malls for shopping, many restaurants for eating, street food markets and temples which add to the beauty of Pattaya.

Popular attractions include Sanctuary of Truth, Nong Nooch Tropical Garden, Coral Island (Koh Larn), Tiger Park, and Dolphinarium.

Entertainment options include Walking Street, Alcazar Cabaret Show, Colosseum Show Pattaya, and Tiffany's Show.

Shopping destinations: Central Festival Pattaya, Terminal 21 Pattaya, Royal Garden Plaza, Pattaya Floating Market, Thepprasit Night Market.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "In case of delays or no-shows, no refund will be issued.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "Service Area: Available only within Pattaya City. If you wish to travel outside Pattaya City, extra charges will apply (payable directly to the driver).",
      "This is only a private taxi. No attraction tickets are included in the price.",
      "After booking, please WhatsApp us at +66 6 3370 1999 and share your tour plan so we can organize your route efficiently.",
      "If your booking exceeds the reserved time, the driver will charge 500 THB per extra hour (payable directly to the driver).",
      "Your booking time starts from the pick-up time. Please be ready in your hotel lobby at the scheduled time.",
      "If your tour is disrupted or shortened due to bad weather or rain, no refund will be provided as the service is on an hourly basis."
    ]
  },
  // KRABI TRANSFERS
  "krabi-kbv-airport-phuket-pickup": {
    id: "krabi-kbv-airport-phuket-pickup",
    title: "Krabi International Airport {KBV} To Phuket Hotel Drop Private",
    shortDescription: "Private airport transfer from Krabi Airport to your Phuket hotel",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "3.75 Hrs",
    rating: 4.9,
    reviews: 356,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6600,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 6800,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7000,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable Pick-Up – Always on time, professional staff wait inside exit gate no. 15 with your name card.",
      "24/7 Service – Available day and night. Night-time pick-up available (12:00 AM – 6:00 AM) with a minimal surcharge.",
      "Flexible Luggage Options – Choose from Sedan, Mini SUV, or Mini Van based on your baggage needs.",
      "Real-Time Support – Instant assistance via Call or WhatsApp at +66 6 274 30 007",
      "Easy Rescheduling – Change your pick-up date/time up to 48 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Krabi Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
If you have a visa, you do not need to go to the Immigration Department; you can collect your checked baggage directly from the carousel.
After collecting your baggage, proceed to Exits 15 and 16.
Our guide will be waiting for you outside Exits 15 and 16, and will have an identification card with your name on it.
If you cannot find your identification card or our guide, please contact our support staff at +91 7061710810 (call and WhatsApp). Please send a photo of your current location via WhatsApp so our airport team can assist you immediately.
After meeting our guide, if you need to use the restroom, you must go to the airport. This is your private car; This will take you directly from the airport to your hotel in Phuket, without any stops along the way.
The distance from Krabi International Airport to your Phuket hotel is 180 km and takes approximately 3 hours and 45 minutes by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible for such delays.
Baggage Reminder: After your trip, please ensure you unload all your luggage from your vehicle. We will not be responsible for any luggage left behind.
No-Show Policy: If your flight is cancelled or delayed, you must inform us. If you do not inform us and do not arrive within 3 hours of the deadline, the booking will be considered a no-show and no refund will be given.
Free Cancellation: Free cancellation is available up to 48 hours before the pick-up time.
Date Change: Any changes to the scheduled date must be made at least 48 hours before the pick-up time.`,
    about: `Krabi International Airport
Address: 133 Phet Kasem Rd, Nuea Khlong, Nuea Khlong District, Krabi 81130

The distance from Krabi International Airport to Phuket is 180 kilometers and it takes about 3 hours and 15 minutes to travel by car.

Arrival Instructions – Krabi Airport:
Upon arrival at Krabi Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Exit Gate No.15
Our guide will be waiting for you inside Exit Gate No. 15, holding a name card with your name on it.
If you do not see your name card or are unable to locate our guide, please contact our support staff at +66 6 274 30 007 (Call & WhatsApp). Kindly send a photo of your current location via WhatsApp so that our airport team can assist you promptly.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +66 6 274 30 007 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Phuket, you will not get a refund."
    ]
  },
  "krabi-phuket-kbv-airport-dropoff": {
    id: "krabi-phuket-kbv-airport-dropoff",
    title: "Phuket Hotel to Krabi International Airport {KBV} Private",
    shortDescription: "Private transfer from your Phuket hotel to Krabi Airport",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "3 Hrs",
    rating: 4.8,
    reviews: 234,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6800,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7500,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 175 km from Phuket Hotel to Krabi Airport.",
      "Travel Time: Around 3 Hours under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Distance & Travel Time: The journey from your Phuket hotel to Krabi International Airport is ~175 km and takes about 3 hours under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight time.
Departure Planning: With a 3-hour drive + 3-hour airport buffer, we recommend leaving your hotel at least 6 hours before your scheduled departure.
Traffic & Weather: Delays may occur due to traffic or rain. Please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by sending a WhatsApp message to +66 63 370 1999 at least 24 hours in advance.
Support Contact: Support Staff (Call & WhatsApp): +66 6 274 30 007`,
    about: `Phuket Hotel → Krabi International Airport

Distance: 175 kilometers
Travel Time: Approximately 3 Hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Phuket hotel to Krabi International Airport is 175 km, and it takes about 3 Hours to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +66 63 370 1999 at least 24 hours in advance."
    ]
  },
  "krabi-hotel-kbv-airport": {
    id: "krabi-hotel-kbv-airport",
    title: "Krabi Hotel to Krabi International Airport {KBV} Drop Private",
    shortDescription: "Private transfer from your Krabi hotel to Krabi Airport",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "45 Mins",
    rating: 4.9,
    reviews: 445,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 2400,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 2800,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 3000,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 25 km from Krabi Hotel to Krabi Airport.",
      "Travel Time: Around 45 minutes under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Krabi Airport Transfer Guidelines
Distance & Travel Time: Your hotel to Krabi International Airport is ~25 km and takes about 45 minutes under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight.
Departure Planning: With a 45 Minutes drive + 3-hour airport buffer, we recommend leaving your hotel at least 4 hours before departure
Traffic & Weather: Delays can occur due to traffic or rain. Please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by emailing support@pattayacitytourcoltd.com at least 24 hours in advance.
Support Contact: Support Staff (Call & WhatsApp): +66 6 274 30 007`,
    about: `Krabi Hotel → Krabi International Airport

Distance: 25 kilometers
Travel Time: Approximately 45 minutes by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from your Krabi hotel to Krabi International Airport is 25 km, and it takes about 45 minutes to travel.",
      "Please plan to reach the airport at least 3 hours before your flight time.",
      "Delays may occur due to traffic or rain, so it is important to leave for the airport on time.",
      "Please check out of your hotel and be ready in the hotel lobby at your scheduled pick-up time.",
      "The driver will wait for you for 10–15 minutes only.",
      "If you are late, the driver will leave, your booking will be treated as a no-show, and no refund will be provided.",
      "If you wish to change your pick-up time, you can do so free of charge by sending a WhatsApp message to +66 63 370 1999 at least 24 hours in advance."
    ]
  },
  "krabi-to-phuket": {
    id: "krabi-to-phuket",
    title: "Krabi Hotel To Phuket Hotel Drop Private",
    shortDescription: "Private transfer from your Krabi hotel to Phuket hotel",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "3 Hrs",
    rating: 4.9,
    reviews: 312,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6800,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7900,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Comfortable private car transfer",
      "Approx. 180 km journey – 3 hours travel time",
      "Door-to-door service from your Krabi hotel to Phuket hotel",
      "No stops during the trip for a faster journey",
      "Professional driver with local route knowledge"
    ],
    description: `Driver Waiting Time: The driver will wait in the hotel lobby for a maximum of 10–15 minutes only.
Travel Distance & Duration: The distance from Krabi to Phuket is approximately 180 km and takes about 3 hours by car.
No-Show Policy: In case of delay or no-show, no refund will be provided.
No Stops During Transfer: There are no halts during the journey. Please ensure you have eaten and used the restroom before departure from your Krabi hotel.
Free Cancellation: Allowed up to 48 hours before the pick-up time.
Date Changes: Any changes to the scheduled date must be made at least 48 hours before the pick-up time.
Important Notes: We are not responsible for delays caused by bad weather.
Support Contact: +66 6 337 01 999 (Call & WhatsApp).`,
    about: `Krabi Hotel to Phuket Hotel
The distance from Krabi to Phuket is 180 kilometers and it takes about 3 hours and 15 minutes to travel by car.`,
    baggagePolicy: [
      "Sedan Car: Max 2 large bags + 3 handbags",
      "Mini SUV Car: Max 4 large bags + 4 handbags",
      "Mini Van: Max 10 large bags + 10 handbags",
      "⚠️ Important Notice: If your baggage exceeds the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Krabi to Phuket is 180 km and takes about 3 hours.",
      "The road from Krabi to Phuket is hilly, and sometimes it may take longer due to rain.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking, and you will not get any refund.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "You can change the booking date 48 hours in advance for free.",
      "If you want to cancel the booking, you can do it 48 hours in advance. If you cancel the booking less than 48 hours before, no refund will be given."
    ]
  },
  "krabi-phuket-city-tour": {
    id: "krabi-phuket-city-tour",
    title: "Krabi Hotel to Phuket City Tour 4 Hours to Phuket Hotel Private",
    shortDescription: "Private 4-hour Phuket city tour followed by hotel drop-off",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "7 Hrs Total",
    rating: 4.9,
    reviews: 189,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 9500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 9900,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 10900,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Comfortable private car transfer",
      "Approx. 180 km journey – 3 hours travel time",
      "4-hour Phuket City Tour included",
      "Visit Chalong Temple, Phuket Old Town, Honey Farm, Tiger Kingdom",
      "Door-to-door service from your Krabi hotel to Phuket hotel"
    ],
    description: `Krabi Hotel to Phuket City Tour to Phuket Hotel Transfer
Driver Waiting Time: The driver will wait in the hotel lobby for a maximum of 10–15 minutes only.
Travel Distance & Duration: The distance from Krabi to Phuket is approximately 180 km and takes about 3 hours by car.
No-Show Policy: In case of delay or no-show, no refund will be provided.
No Stops During Transfer: There are no halts during the journey. Please ensure you have eaten and used the restroom before departure from your Krabi hotel.
Free Cancellation: Allowed up to 48 hours before the pick-up time.
Date Changes: Any changes to the scheduled date must be made at least 48 hours before the pick-up time.
Important Notes: We are not responsible for delays caused by bad weather.
Support Contact: +66 6 337 01 999 (Call & WhatsApp).

Phuket City Tour Details:
Tour Duration: 4 hours
Itinerary: Chalong Temple, Phuket Old Town, Honey Farm, and Tiger Kingdom (Ticket to Tiger Kingdom is not included in the package).
Please manage your time accordingly to cover all locations within the 4 hours.
Overtime Charges: If the tour exceeds 4 hours, the driver will charge 500 THB per additional hour, payable directly.`,
    about: `Krabi to Phuket with City Tour
The distance from Krabi to Phuket is 180 kilometers and it takes about 3 hours to travel by car. The 4-hour Phuket city tour adds to the journey for a total of approximately 7 hours.`,
    baggagePolicy: [
      "Sedan Car: Max 2 large bags + 3 handbags",
      "Mini SUV Car: Max 4 large bags + 4 handbags",
      "Mini Van: Max 10 large bags + 10 handbags",
      "⚠️ Important Notice: If your baggage exceeds the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Krabi to Phuket is 180 km and takes about 3 hours.",
      "The road from Krabi to Phuket is hilly, and sometimes it may take longer due to rain.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking, and you will not get any refund.",
      "The distance from Krabi to Phuket is 3 hours, and if you want to do a 4-hour Phuket city tour on the way, you will have a total of 7 hours. If it takes longer, the driver will charge you 500 Thai baht for 1 hour, which you will have to pay.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "You can change the booking date 48 hours in advance for free.",
      "If you want to cancel the booking, you can do it 48 hours in advance. If you cancel the booking less than 48 hours before, no refund will be given."
    ]
  },
  "krabi-hkt-airport-pickup": {
    id: "krabi-hkt-airport-pickup",
    title: "Phuket International Airport {HKT} to Krabi Hotel Private",
    shortDescription: "Private airport transfer from Phuket Airport to your Krabi hotel",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "2.5 Hrs",
    rating: 4.8,
    reviews: 278,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7200,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7700,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable Pick-Up – Always on time, professional staff wait exit gate no. 2 with your name card.",
      "24/7 Service – Available day and night. Night-time pick-up available (12:00 AM – 6:00 AM) with a minimal surcharge.",
      "Flexible Luggage Options – Choose from Sedan, Mini SUV, or Mini Van based on your baggage needs.",
      "Real-Time Support – Instant assistance via Call or WhatsApp at +66 6 274 30 007",
      "Easy Rescheduling – Change your pick-up date/time up to 72 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Phuket International Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
After collecting your baggage, proceed to the exit gate.
International Arrivals: Our guide will be waiting outside Exit 2 with a name card.
Domestic Arrivals: Our guide will be waiting outside Exit A with a name card.
Our guide will be waiting for you inside the exit gate, and will have an identification card with your name on it.
If you cannot find your identification card or our guide, please contact our support staff at +91 7061710810 (call and WhatsApp). Please send a photo of your current location via WhatsApp so our airport team can assist you immediately.
After meeting our guide, if you need to use the restroom, you must go to the airport. This is your private car; It will take you directly from the airport to your hotel in Krabi, without any stops along the way.
The distance from Phuket International Airport to your Krabi hotel is 149 km and takes approximately 2 hours and 30 minutes by car.
Weather and Traffic: Bad weather or heavy traffic may cause delays. We will not be responsible for such delays.
Baggage Reminder: After your trip, please ensure you unload all your luggage from your vehicle. We will not be responsible for any luggage left behind.
No-Show Policy: If your flight is cancelled or delayed, you must inform us. If you do not inform us and do not arrive within 3 hours of the deadline, the booking will be considered a no-show and no refund will be given.
Free Cancellation: Free cancellation is available up to 72 hours before the pick-up time.
Date Change: Any changes to the scheduled date must be made at least 72 hours before the pick-up time.
Support Staff Contact (Call/WhatsApp): +91 7061710810`,
    about: `Phuket International Airport
Address: 222, Mai Khao, Thalang District, Phuket 83110

The distance from Phuket International Airport to Ao Nang is 149 kilometers and it takes about 2 hours and 30 minutes to travel by car.

Phuket International Airport Arrival Instructions:
1. Upon Arrival: Proceed directly to the Immigration Department to obtain your visa.
2. Baggage Claim: After completing immigration formalities, collect your checked luggage from the assigned baggage carousel.
3. Exit & Meet Your Guide: Once you have your luggage, proceed to the exit gate.
- International Arrivals: Our guide will be waiting outside Exit Gate No. 2, holding an ID card with your name.
- Domestic Arrivals: Our guide will be waiting outside Exit Gate No. 1, holding an ID card with your name.

If you cannot find your name card or guide: Please contact our support staff at +91 7061710810 (Call & WhatsApp). Send a photo of your current location via WhatsApp so our airport team can locate and assist you promptly.

Night Pick-Up Charges: For pick-ups between 12:00 AM – 6:00 AM, an additional 300 THB is payable directly to the driver.

Driver Waiting Time: Your driver will wait at the airport for up to 3 hours from your flight arrival time, as per your booking voucher.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +91 7061710810 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Krabi, you will not get a refund."
    ]
  },
  "krabi-hkt-airport-dropoff": {
    id: "krabi-hkt-airport-dropoff",
    title: "Krabi Hotel to Phuket International Airport {HKT} Drop Private",
    shortDescription: "Private transfer from your Krabi hotel to Phuket Airport",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "2.5 Hrs",
    rating: 4.8,
    reviews: 198,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7200,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7700,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Distance: Approx. 145 km from Krabi Hotel to Phuket Airport.",
      "Travel Time: Around 2.5 Hours under normal traffic conditions.",
      "Airport Reporting: Please reach the airport at least 3 hours before your flight for check-in and security clearance.",
      "Important Note: Traffic congestion or heavy rain may cause delays. We strongly recommend leaving for the airport on time to avoid last-minute stress."
    ],
    description: `Krabi Hotel → Phuket Airport Transfer
Distance & Travel Time: From your Krabi hotel to Phuket International Airport is ~145 km and takes about 2.5 hours under normal traffic.
Airport Arrival: Please plan to reach the airport at least 3 hours before your flight time.
Departure Planning: With a 2.5-hour drive + 3-hour airport buffer, we recommend leaving your hotel at least 5.5–6 hours before departure.
Traffic & Weather: Delays can occur due to traffic or rain. Please leave on time.
Pick-Up Readiness: Check out and be ready in the hotel lobby at your scheduled pick-up time.
Driver Waiting Time: The driver will wait 10–15 minutes. If you are late, the driver will leave; your booking will be treated as a no-show and no refund will be provided.
Change of Pick-Up Time: You can reschedule free of charge by sending a WhatsApp message to +66 63 370 1999 at least 24 hours in advance.
Support Contact: Support Staff (Call & WhatsApp): +66 6 274 30 007`,
    about: `Krabi Hotel → Phuket International Airport

Distance: 145 kilometers
Travel Time: Approximately 2.5 Hours by car
Travel Tip: Always leave early and plan to reach the airport at least 3 hours before your flight, as traffic or rain may cause delays.`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +91 7061710810 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Phuket, you will not get a refund."
    ]
  },
  "krabi-kbv-aonang-pickup": {
    id: "krabi-kbv-aonang-pickup",
    title: "Krabi International Airport {KBV} To Ao Nang Krabi Hotel Drop Private",
    shortDescription: "Private airport transfer from Krabi Airport to your Ao Nang hotel",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "45 Mins",
    rating: 4.9,
    reviews: 567,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 2400,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 2800,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 3000,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Reliable Pick-Up – Always on time, professional staff wait exit gate no. 15 & 16 with your name card.",
      "24/7 Service – Available day and night. Night-time pick-up available (12:00 AM – 6:00 AM) with a minimal surcharge.",
      "Flexible Luggage Options – Choose from Sedan, Mini SUV, or Mini Van based on your baggage needs.",
      "Real-Time Support – Instant assistance via Call or WhatsApp at +66 6 274 30 007",
      "Easy Rescheduling – Change your pick-up date/time up to 48 hours in advance.",
      "Other charges – All toll tax and fuel are included in this trip"
    ],
    description: `Upon arrival at Krabi Airport, go directly to the Immigration Department and obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
If you have a visa, you do not need to go to the Immigration Department; you can collect your checked baggage directly from the carousel.
After collecting your baggage, proceed to Exit 15 & 16.
Our guide will be waiting for you outside Exit 15 & 16, and will have an identification card with your name on it.
If you cannot find your identification card or our guide, please contact our support staff at +91 7061710810 (call and WhatsApp). Please send a photo of your current location via WhatsApp so our airport team can assist you immediately.
After meeting our guide, if you need to use the restroom, you must go to the airport. This is your private car; It will take you directly from the airport to your hotel in Krabi, without any stops along the way.
Krabi International Airport is 25 km from Ao Nang Krabi Hotel and takes approximately 45 minutes by car.
Weather and Traffic: Delays may occur due to bad weather or heavy traffic. We will not be responsible for such delays.
Baggage Reminder: After your trip, please ensure you unload all your luggage from your vehicle. We will not be responsible for any luggage left behind.
No-Show Policy: If your flight is cancelled or delayed, you must inform us. If you do not inform us and do not arrive within 3 hours of the deadline, the booking will be considered a no-show and no refund will be given.
Free Cancellation: Free cancellation is available up to 48 hours before the pick-up time.
Date Change: Any changes to the scheduled date must be made at least 48 hours before the pick-up time.`,
    about: `Krabi International Airport to Ao Nang

Distance: 25 kilometers
Travel Time: Approximately 45 minutes by car

Arrival Instructions – Krabi Airport:
Upon arrival at Krabi Airport, proceed directly to Immigration to obtain your visa.
After completing immigration formalities, collect your checked baggage from the designated carousel.
Once you have your luggage, head towards Exit Gate No. 15 & 16.
Our guide will be waiting for you outside Exit Gate No. 15 & 16, holding a name card with your name on it.
If you do not see your name card or are unable to locate our guide, please contact our support staff at +66 6 274 30 007 (Call & WhatsApp).`,
    baggagePolicy: [
      "Sedan Car: Maximum capacity – 2 large bags and 3 hand bags",
      "Mini SUV Car: Maximum capacity – 4 large bags and 4 hand bags",
      "Mini Van: Maximum capacity – 10 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pick-ups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the airport for up to 3 hours from your flight's arrival time, as mentioned in your voucher.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "If your flight is canceled or delayed, no one will be charged separately.",
      "If your flight is cancelled, you can send information about the new flight on this WhatsApp number +91 7061710810 and get a new booking voucher for which there is no charge.",
      "If your flight is cancelled and you are not going to Krabi, you will not get a refund."
    ]
  },
  "krabi-phuket-to-krabi": {
    id: "krabi-phuket-to-krabi",
    title: "Phuket Hotel To Krabi Hotel Drop Private",
    shortDescription: "Private transfer from your Phuket hotel to Krabi hotel",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "3 Hrs",
    rating: 4.9,
    reviews: 423,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 6800,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 7000,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 7900,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Comfortable private car transfer",
      "Approx. 180 km journey – 3 hours travel time",
      "Door-to-door service from your Phuket hotel to Krabi hotel",
      "No stops during the trip for a faster journey",
      "Professional driver with local route knowledge"
    ],
    description: `Driver Waiting Time: The driver will wait in the hotel lobby for a maximum of 10–15 minutes only.
Travel Distance & Duration: The distance from Phuket to Krabi is approximately 180 km and takes about 3 hours by car.
No-Show Policy: In case of delay or no arrival, no refund will be provided.
No Stops During Transfer: No halts are permitted during the journey. Please ensure you have eaten and used the restroom before departure.
Important Note: We are not responsible for delays caused by bad weather.
Free Cancellation: Up to 72 hours before the scheduled pick-up time.
Date Changes: Must be made at least 72 hours before the scheduled pick-up time.
Support Contact: +91 7061710810 (Call & WhatsApp)`,
    about: `Phuket Hotel to Krabi Hotel
The distance from Phuket to Krabi is 180 kilometers and it takes about 3 hours and 15 minutes to travel by car.`,
    baggagePolicy: [
      "Sedan Car: Max 2 large bags + 3 handbags",
      "Mini SUV Car: Max 4 large bags + 4 handbags",
      "Mini Van: Max 10 large bags + 10 handbags",
      "⚠️ Important Notice: If your baggage exceeds the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Phuket to Krabi is 180 km and takes about 3 hours.",
      "The route from Phuket to Krabi is hilly, and sometimes it may take longer due to rain.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking, and you will not get any refund.",
      "You can change the booking date 72 hours in advance for free.",
      "If you want to cancel the booking, you can do so 72 hours in advance. If you cancel the booking less than 72 hours in advance, no refund will be given."
    ]
  },
  "krabi-phuket-city-tour-krabi": {
    id: "krabi-phuket-city-tour-krabi",
    title: "Phuket Hotel to Phuket City Tour 4 Hours to Krabi Hotel Private",
    shortDescription: "Private 4-hour Phuket city tour followed by Krabi hotel drop-off",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "7 Hrs Total",
    rating: 4.9,
    reviews: 156,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 9500,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 9900,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 10900,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Comfortable private car transfer",
      "Approx. 180 km journey – 3 hours travel time",
      "4-hour Phuket City Tour included",
      "Visit Chalong Temple, Phuket Old Town, Honey Farm, Tiger Kingdom",
      "Door-to-door service from your Phuket hotel to Krabi hotel"
    ],
    description: `Phuket Hotel to Phuket City Tour to Krabi Hotel Transfer
Driver Waiting Time: The driver will wait in the hotel lobby for a maximum of 10–15 minutes only.
Travel Distance & Duration: The distance from Phuket to Krabi is approximately 180 km and takes about 3 hours by car.
No-Show Policy: In case of delay or no-show, no refund will be provided.
No Stops During Transfer: There are no halts during the journey. Please ensure you have eaten and used the restroom before departure from your Phuket hotel.
Free Cancellation: Allowed up to 72 hours before the pick-up time.
Date Changes: Any changes to the scheduled date must be made at least 72 hours before the pick-up time.
Important Notes: We are not responsible for delays caused by bad weather.
Support Contact: +91 7061710810 (Call & WhatsApp).

Phuket City Tour Details:
Tour Duration: 4 hours
Itinerary: Chalong Temple, Phuket Old Town, Honey Farm, and Tiger Kingdom (Ticket to Tiger Kingdom is not included in the package).
Please manage your time accordingly to cover all locations within the 4 hours.
Overtime Charges: If the tour exceeds 4 hours, the driver will charge 500 THB per additional hour, payable directly.`,
    about: `Phuket ↔ Krabi Transfer & Tour Policy
Distance & Duration:
Distance: Approx. 180 km
Travel Time: About 3 hours
Route: Hilly roads – travel time may be longer during rain or bad weather.
Note: We are not responsible for delays caused by weather conditions.

Tour Options During Transfer:
Phuket City Tour (4 hours) + Transfer to Krabi
Total duration: 7 hours from pick-up time.
Extra time beyond 7 hours: 500 THB per hour (payable directly to the driver).`,
    baggagePolicy: [
      "Sedan Car: Max 2 large bags + 3 handbags",
      "Mini SUV Car: Max 4 large bags + 4 handbags",
      "Mini Van: Max 10 large bags + 10 handbags",
      "⚠️ Important Notice: If your baggage exceeds the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Phuket to Krabi is 180 km and takes about 3 hours.",
      "The route from Phuket to Krabi is hilly, and sometimes it may take longer due to rain.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking, and you will not get any refund.",
      "The distance from Phuket to Krabi is 3 hours, and if you want to take a 4-hour Phuket city tour on the way, you will have a total of 7 hours. If it takes longer, the driver will charge you 500 Thai baht for 1 hour, which you have to pay.",
      "You can change the booking date 72 hours in advance for free.",
      "If you want to cancel the booking, you can do so 72 hours in advance. If you cancel the booking less than 72 hours in advance, no refund will be given."
    ]
  },
  "krabi-phuket-krabi-city-tour": {
    id: "krabi-phuket-krabi-city-tour",
    title: "Phuket Hotel to Krabi City Tour 6 Hours to Krabi Hotel Drop Private",
    shortDescription: "Private 6-hour Krabi city tour followed by Krabi hotel drop-off",
    location: "Krabi, Thailand",
    city: "krabi",
    duration: "9 Hrs Total",
    rating: 4.9,
    reviews: 98,
    vehicles: [
      {
        id: "sedan",
        name: "Sedan Car",
        capacity: "1 - 3",
        bigBags: 2,
        handBags: 3,
        price: 13600,
        image: vehicleImages.sedan
      },
      {
        id: "suv",
        name: "Mini SUV",
        capacity: "1 - 4",
        bigBags: 4,
        handBags: 4,
        price: 12800,
        image: vehicleImages.suv
      },
      {
        id: "van",
        name: "Mini Van",
        capacity: "1 - 10",
        bigBags: 10,
        handBags: 10,
        price: 14700,
        image: vehicleImages.van
      }
    ],
    highlights: [
      "Comfortable private car transfer",
      "Approx. 180 km journey – 3 hours travel time",
      "6-hour Krabi City Tour included",
      "Visit Emerald Pool, Hot Spring Waterfalls, Tiger Cave Temple",
      "Door-to-door service from your Phuket hotel to Krabi hotel"
    ],
    description: `Phuket Hotel to Krabi City Tour to Krabi Hotel Transfer
Driver Waiting Time: The driver will wait in the hotel lobby for a maximum of 10–15 minutes only.
Travel Distance & Duration: Phuket to Krabi is approximately 180 km and takes about 3 hours by car.
No-Show Policy: In case of delay or no-show, no refund will be provided.
No Stops During Transfer: There are no halts during the journey. Please ensure you have eaten and used the restroom before departure from your Phuket hotel.
Important Notes: We are not responsible for delays caused by bad weather.
Free Cancellation: Allowed up to 72 hours before the pick-up time.
Date Changes: Any changes to the scheduled date must be made at least 72 hours before the pick-up time.
Support Contact: +91 7061710810 (Call & WhatsApp)

Krabi City Tour - Tour Duration: 6 hours
Itinerary: Emerald Pool - Hot Spring Waterfalls - Tiger Cave Temple
(National Park fee not included – 600 THB per person)
Time Management: Please plan your visit so all locations can be covered within the 6-hour limit.
Overtime Charges: If the tour exceeds 6 hours, 500 THB per additional hour (payable directly to the driver).`,
    about: `Phuket ↔ Krabi Transfer & Tour Policy
Distance & Duration:
Distance: Approx. 180 km
Travel Time: About 3 hours
Route: Hilly roads – travel time may be longer during rain or bad weather.
Note: We are not responsible for delays caused by weather conditions.

Tour Options During Transfer:
Krabi City Tour (6 hours) + Transfer to Krabi
Total duration: 9 hours from pick-up time.
Extra time beyond 9 hours: 500 THB per hour (payable directly to the driver).`,
    baggagePolicy: [
      "Sedan Car: Max 2 large bags + 3 handbags",
      "Mini SUV Car: Max 4 large bags + 4 handbags",
      "Mini Van: Max 10 large bags + 10 handbags",
      "⚠️ Important Notice: If your baggage exceeds the allowed limit for your selected vehicle, an additional charge of 500 THB per extra bag may apply."
    ],
    cancellationPolicy: [
      "For pickups scheduled between 12:00 AM and 6:00 AM, an additional night-time surcharge of 300 THB must be paid directly to the driver.",
      "The driver will wait at the hotel for 10-15 minutes only.",
      "Free cancellation is available up to 72 hours prior to the scheduled pick-up time.",
      "Changes to the pick-up date can also be made up to 72 hours in advance of the scheduled time."
    ],
    termsConditions: [
      "The distance from Phuket to Krabi is 180 km and takes about 3 hours.",
      "The route from Phuket to Krabi is hilly, and sometimes it may take longer due to rain.",
      "If there is any delay due to bad weather, we will not be responsible for it.",
      "If you cancel the booking at the time of pickup for any reason, it will be considered a no-show booking, and you will not get any refund.",
      "The distance from Phuket to Krabi is 3 hours, and if you want to take a 6-hour Krabi city tour on the way, you will have a total of 9 hours. If it takes longer, the driver will charge you 500 Thai baht for 1 hour, which you have to pay.",
      "You can change the booking date 72 hours in advance for free.",
      "If you want to cancel the booking, you can do so 72 hours in advance. If you cancel the booking less than 72 hours in advance, no refund will be given."
    ]
  }
};
