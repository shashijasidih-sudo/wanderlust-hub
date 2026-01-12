import { TransferData } from "@/components/TransferBooking";

// Vehicle images for Singapore
const vehicleImages = {
  fiveSeater: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&auto=format&fit=crop",
  tenSeater: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
};

export const singaporeTransfersData: Record<string, TransferData> = {
  "singapore-airport-pickup": {
    id: "singapore-airport-pickup",
    title: "Private Singapore Changi Airport Pick Up to Hotel",
    shortDescription: "Private airport transfer from Changi Airport to your Singapore hotel",
    location: "Singapore",
    city: "singapore",
    duration: "Transfer",
    rating: 4.9,
    reviews: 567,
    vehicles: [
      {
        id: "5-seater",
        name: "5 Seater Vehicle",
        capacity: "1 - 5",
        bigBags: 4,
        handBags: 5,
        price: 4000,
        image: vehicleImages.fiveSeater
      },
      {
        id: "10-seater",
        name: "10 Seater Vehicle",
        capacity: "1 - 10",
        bigBags: 8,
        handBags: 10,
        price: 8000,
        image: vehicleImages.tenSeater
      }
    ],
    highlights: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance.",
      "Guests are kindly requested to be ready in the hotel lobby 15 minutes before the pickup time to avoid any delays.",
      "Please ensure to provide accurate details, including the hotel address, during the booking process to facilitate smooth arrangements.",
      "Please note that if the guest fails to report within the designated time, it will be considered a No Show.",
      "Images shown in this tour for representation only and cannot be matched with the exact vehicle.",
      "Kindly select your pick up timing for arrival: 2.5 hours after the flight landing time",
      "Waiting Time Policy for Private Transfers: 15 Minutes"
    ],
    description: `Start your worry-free Singapore visit with our airport Pick up service. Whether you're traveling solo, with family, or in a group, we cater to your unique travel needs. Our well-trained and polite team ensures reliable transfers with experienced drivers familiar with all Singapore routes. Provide accurate flight and pick-up details for a seamless and smooth service. Enjoy a stress-free start to your Singapore journey with us.

Transfers will be provided from below mentioned areas only:
• Geylang lor 1-22
• Little India
• Orchard
• Tanjong Pagar
• Chinatown
• Village Hotel Bugis`,
    about: `Singapore Changi Airport to Hotel Transfer

Our private airport pickup service offers comfortable and reliable transportation from Singapore Changi Airport to your hotel. Our experienced drivers are familiar with all Singapore routes and will ensure a smooth journey to your accommodation.`,
    baggagePolicy: [
      "5 Seater Vehicle: Maximum capacity – 4 large bags and 5 hand bags",
      "10 Seater Vehicle: Maximum capacity – 8 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, additional charges may apply."
    ],
    cancellationPolicy: [
      "All Cancellations made 72 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 72 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days."
    ],
    termsConditions: [
      "Children under 3 years will be considered as infant and entry will be free of cost.",
      "Children above age 3 will be considered as an adult and charged adult rate.",
      "In case of no-show, there will be no option for rescheduling or refund."
    ]
  },
  "singapore-airport-dropoff": {
    id: "singapore-airport-dropoff",
    title: "Private Singapore Hotel to Changi Airport Drop Off",
    shortDescription: "Private transfer from your Singapore hotel to Changi Airport",
    location: "Singapore",
    city: "singapore",
    duration: "Transfer",
    rating: 4.8,
    reviews: 489,
    vehicles: [
      {
        id: "5-seater",
        name: "5 Seater Vehicle",
        capacity: "1 - 5",
        bigBags: 4,
        handBags: 5,
        price: 4000,
        image: vehicleImages.fiveSeater
      },
      {
        id: "10-seater",
        name: "10 Seater Vehicle",
        capacity: "1 - 10",
        bigBags: 8,
        handBags: 10,
        price: 8000,
        image: vehicleImages.tenSeater
      }
    ],
    highlights: [
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance.",
      "Guests are kindly requested to be ready in the hotel lobby 15 minutes before the pickup time to avoid any delays.",
      "Please ensure to provide accurate details, including the hotel address, during the booking process to facilitate smooth arrangements.",
      "Please note that if the guest fails to report within the designated time, it will be considered a No Show.",
      "Images shown in this tour for representation only and cannot be matched with the exact vehicle.",
      "Waiting Time Policy for Private Transfers: 15 Minutes"
    ],
    description: `Enjoy stress-free airport drop off services at the end of your Singapore holiday. We offer shared and private transfers for all group sizes, with instant confirmation and printable vouchers. Provide your flight details and hotel address for a smooth booking process. An experienced driver will pick you up at your hotel and transfer you to Changi Airport on time.

Transfers will be provided from below mentioned areas only:
• Geylang lor 1-22
• Little India
• Orchard
• Tanjong Pagar
• Chinatown
• Village Hotel Bugis`,
    about: `Singapore Hotel to Changi Airport Transfer

Our private airport drop-off service offers comfortable and reliable transportation from your Singapore hotel to Changi Airport. Our experienced drivers ensure you reach the airport on time for your flight.`,
    baggagePolicy: [
      "5 Seater Vehicle: Maximum capacity – 4 large bags and 5 hand bags",
      "10 Seater Vehicle: Maximum capacity – 8 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, additional charges may apply."
    ],
    cancellationPolicy: [
      "All Cancellations made 96 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 96 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days."
    ],
    termsConditions: [
      "Children under 3 years will be considered as infant and entry will be free of cost.",
      "Children above age 3 will be considered as an adult and charged adult rate.",
      "In case of no-show, there will be no option for rescheduling or refund."
    ]
  },
  "singapore-airport-night-pickup": {
    id: "singapore-airport-night-pickup",
    title: "Private Singapore Changi Airport Night Pick Up to Hotel",
    shortDescription: "Private night transfer from Changi Airport to your Singapore hotel",
    location: "Singapore",
    city: "singapore",
    duration: "Night Transfer",
    rating: 4.9,
    reviews: 234,
    vehicles: [
      {
        id: "5-seater",
        name: "5 Seater Vehicle",
        capacity: "1 - 5",
        bigBags: 4,
        handBags: 5,
        price: 5000,
        image: vehicleImages.fiveSeater
      },
      {
        id: "10-seater",
        name: "10 Seater Vehicle",
        capacity: "1 - 10",
        bigBags: 8,
        handBags: 10,
        price: 10000,
        image: vehicleImages.tenSeater
      }
    ],
    highlights: [
      "Available for late-night and early-morning arrivals (10:00 PM - 6:30 AM)",
      "Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance.",
      "Guests are kindly requested to be ready in the hotel lobby 15 minutes before the pickup time to avoid any delays.",
      "Please ensure to provide accurate details, including the hotel address, during the booking process to facilitate smooth arrangements.",
      "Please note that if the guest fails to report within the designated time, it will be considered a No Show.",
      "Images shown in this tour for representation only and cannot be matched with the exact vehicle.",
      "Kindly select your pick up timing for arrival: 2.5 hours after the flight landing time",
      "Waiting Time Policy for Private Transfers: 15 Minutes"
    ],
    description: `Start your worry-free Singapore visit with our airport Pick up service. Whether you're traveling solo, with family, or in a group, we cater to your unique travel needs. Our well-trained and polite team ensures reliable transfers with experienced drivers familiar with all Singapore routes. Provide accurate flight and pick-up details for a seamless and smooth service. Enjoy a stress-free start to your Singapore journey with us.

Night Transfer Timings: 00:05, 00:30, 01:00, 01:30, 02:00, 02:30, 03:30, 04:00, 04:30, 05:00, 05:30, 06:00, 22:00, 22:30, 23:00, 23:30

Transfers will be provided from below mentioned areas only:
• Geylang lor 1-22
• Little India
• Orchard
• Tanjong Pagar
• Chinatown
• Village Hotel Bugis`,
    about: `Singapore Changi Airport Night Transfer

Our private night airport pickup service offers comfortable and reliable transportation from Singapore Changi Airport to your hotel during late-night and early-morning hours. Our experienced drivers are available 24/7 to ensure a smooth journey to your accommodation.`,
    baggagePolicy: [
      "5 Seater Vehicle: Maximum capacity – 4 large bags and 5 hand bags",
      "10 Seater Vehicle: Maximum capacity – 8 large bags and 10 hand bags",
      "⚠️ Important: If you are carrying more baggage than the allowed limit for your selected vehicle, additional charges may apply."
    ],
    cancellationPolicy: [
      "All Cancellations made 96 hours prior to the Tour departure time NO charges will be applicable",
      "If Cancellation made within 96 hours to your Tour departure time 100% charges will be applicable",
      "If eligible for Refund your Amount will be returned back to your Account within 7 working days."
    ],
    termsConditions: [
      "Children under 3 years will be considered as infant and entry will be free of cost.",
      "Children above age 3 will be considered as an adult and charged adult rate.",
      "In case of no-show, there will be no option for rescheduling or refund."
    ]
  }
};
