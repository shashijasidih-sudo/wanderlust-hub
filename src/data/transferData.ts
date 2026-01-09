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
  }
};
