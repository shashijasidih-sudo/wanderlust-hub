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
  }
};
