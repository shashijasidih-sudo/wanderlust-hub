/**
 * SEO-focused, keyword-targeted FAQs per city.
 * Appended after booking FAQs on every activity page in that city.
 * Answers may contain inline HTML for internal links (rendered via dangerouslySetInnerHTML).
 *
 * Goals:
 *  - Rank for long-tail "things to do in <city>" / "best <activity> in <city>" intent
 *  - Enable FAQPage rich snippets (combined with booking FAQs in JSON-LD)
 *  - Distribute internal link equity to city hubs, blog hubs, and related activity pages
 */

export interface SeoFaq {
  question: string;
  /** May contain HTML — use <a href="/path">text</a> for internal links. */
  answer: string;
}

export type CityKey =
  | "bangkok"
  | "pattaya"
  | "phuket"
  | "krabi"
  | "singapore"
  | "dubai"
  | "abu dhabi"
  | "thailand"
  | "chiang mai"
  | "koh samui";

const link = (href: string, text: string) => `<a href="${href}" class="text-primary underline hover:no-underline">${text}</a>`;

export const cityseoFaqs: Record<string, SeoFaq[]> = {
  bangkok: [
    {
      question: "What are the best things to do in Bangkok for first-time visitors?",
      answer: `First-time visitors should explore the Grand Palace, Wat Arun and Wat Pho, take a Chao Phraya River dinner cruise, and try Bangkok's famous street food. Browse our full ${link("/bangkok-things-to-do", "Bangkok things to do")} list or read the ${link("/blog/bangkok-activities-guide", "Bangkok activities guide")} for itineraries.`,
    },
    {
      question: "How many days are enough to explore Bangkok?",
      answer: `3 to 4 days is ideal — enough time for temple tours, a river cruise, a floating market trip, and shopping. Combine it with a ${link("/pattaya-things-to-do", "Pattaya getaway")} or ${link("/phuket-things-to-do", "Phuket beach extension")} for a full Thailand itinerary.`,
    },
    {
      question: "Which Bangkok temples are must-visit?",
      answer: `The Grand Palace with the Emerald Buddha (Wat Phra Kaew), Wat Pho (Reclining Buddha) and Wat Arun (Temple of Dawn) are the top three. Book the ${link("/bangkok-three-temples", "Three Temples Tour")} or ${link("/bangkok-golden-marble-buddha", "Golden & Marble Buddha Tour")} to cover them with a guide.`,
    },
    {
      question: "Is Bangkok safe for solo travelers and families from India?",
      answer: "Yes, Bangkok is one of Asia's safest tourist cities. Stick to licensed tours, keep valuables in hotel safes, use Grab for transport, and avoid unmarked tuk-tuks at night. All Yellodae tours include licensed guides and verified hotel transfers.",
    },
    {
      question: "What is the best time to visit Bangkok?",
      answer: "November to February offers the coolest, driest weather. March to May is hot, and June to October is the green season with short showers but lower prices. Indoor attractions and cruises run year-round.",
    },
    {
      question: "How do I get from Bangkok to Pattaya or Phuket?",
      answer: `Pattaya is a 2-hour drive — book a ${link("/thailand/pattaya-transfers/", "Bangkok to Pattaya transfer")}. For Phuket, fly from BKK or DMK in around 90 minutes. We also offer ${link("/thailand/bangkok-airport-transfers/", "Bangkok airport transfers")} for all major routes.`,
    },
    {
      question: "Can I pay in INR for Bangkok tours?",
      answer: "Yes. Yellodae prices Bangkok activities in INR, USD, THB, AED and SGD. INR payments are processed securely via Razorpay with UPI, cards and net banking — no forex markup, all taxes inclusive.",
    },
  ],

  pattaya: [
    {
      question: "What are the top things to do in Pattaya?",
      answer: `Top experiences include Coral Island, Nong Nooch Tropical Garden, Alcazar Show, Sanctuary of Truth and Walking Street nightlife. See the full ${link("/pattaya-things-to-do", "Pattaya things to do")} list or our ${link("/blog/best-pattaya-activities", "best Pattaya activities guide")}.`,
    },
    {
      question: "Which is the best cabaret show in Pattaya?",
      answer: `${link("/alcazar-show-pattaya", "Alcazar Show")} is the most family-friendly and iconic ladyboy cabaret in Pattaya. For adults-only experiences, see ${link("/show-69-pattaya", "Show 69")} or ${link("/show-89-pattaya", "Show 89")}.`,
    },
    {
      question: "Is Pattaya good for families with kids?",
      answer: `Yes — try ${link("/coral-island-pattaya", "Coral Island")}, ${link("/nong-nooch-garden", "Nong Nooch Garden")}, ${link("/pattaya-dolphinarium", "Pattaya Dolphinarium")} and Cartoon Network Amazone. Adults-only shows are clearly marked on Yellodae and require minimum 2 PAX.`,
    },
    {
      question: "How far is Pattaya from Bangkok airport?",
      answer: `Pattaya is roughly 120 km (1.5–2 hours) from Suvarnabhumi (BKK) and 150 km from Don Mueang (DMK). Book a ${link("/pattaya-bkk-airport-pickup", "BKK to Pattaya transfer")} or ${link("/pattaya-dmk-airport-pickup", "DMK to Pattaya transfer")} in advance.`,
    },
    {
      question: "Is Coral Island worth visiting from Pattaya?",
      answer: `Yes. ${link("/coral-island-pattaya", "Coral Island (Koh Larn)")} is a 45-minute speedboat ride and offers white-sand beaches, snorkeling, parasailing and banana-boat rides. Best done as a full-day tour with included lunch.`,
    },
    {
      question: "What is the best time to visit Pattaya?",
      answer: "November to February has cool, dry weather perfect for beaches and shows. March to May is hot but ideal for water sports. Avoid mid-October peak monsoon for island trips.",
    },
    {
      question: "Are Pattaya nightlife tours safe?",
      answer: `Yes when booked with a guide. Our ${link("/pattaya-nightlife-walking", "Pattaya nightlife walking tour")} and ${link("/pattaya-pub-crawl", "pub crawl")} include English-speaking hosts, venue entries and safe transport — far safer than going solo on Walking Street.`,
    },
  ],

  phuket: [
    {
      question: "What are the must-do activities in Phuket?",
      answer: `Phi Phi Islands, James Bond Island, Phang Nga Bay, Old Phuket Town and Simon Cabaret are the top picks. Browse all ${link("/phuket-things-to-do", "Phuket activities")} or read our ${link("/blog/top-phuket-tours", "top Phuket tours guide")}.`,
    },
    {
      question: "Which is better — Phi Phi Islands by speedboat or big boat?",
      answer: `${link("/phi-phi-maya-khai-speedboat", "Speedboat tours")} are faster (covers more islands in a day), while ${link("/phi-phi-big-boat", "big boat ferries")} are smoother and better for seasickness. Families with kids or elderly often prefer the big boat.`,
    },
    {
      question: "Is James Bond Island worth visiting from Phuket?",
      answer: `Absolutely. ${link("/james-bond-island", "James Bond Island")} (Khao Phing Kan) in Phang Nga Bay is famous for its limestone karsts. The ${link("/james-bond-island-sea-canoe", "sea canoe tour")} adds hidden lagoon exploration.`,
    },
    {
      question: "How do I get from Phuket to Krabi?",
      answer: `By road it's a 3-hour drive (180 km). Book a ${link("/phuket-to-krabi", "Phuket to Krabi transfer")} or fly via Phuket airport. For day trips, see our ${link("/phuket-krabi-city-tour", "Phuket–Krabi city tour")}.`,
    },
    {
      question: "Is Phuket good for honeymoon couples?",
      answer: `Yes — combine a ${link("/phi-phi-island", "Phi Phi island day trip")}, sunset dinner cruise and Old Phuket Town walk. Patong is lively; Kata, Karon and Kamala beaches are quieter and more romantic.`,
    },
    {
      question: "What is the best month to visit Phuket?",
      answer: "November to April is the dry season with calm seas — best for island hopping. May to October is monsoon season; many small islands close in September–October due to rough seas.",
    },
    {
      question: "Are halal food and Muslim-friendly tours available in Phuket?",
      answer: `Yes. We offer a dedicated ${link("/phuket-muslim-friendly-tour", "Phuket Muslim-friendly tour")} with halal-certified meals, prayer breaks and family-friendly itineraries.`,
    },
  ],

  krabi: [
    {
      question: "What are the best things to do in Krabi?",
      answer: `4 Islands tour, Hong Islands, Railay Beach, Tiger Cave Temple and the Emerald Pool & Hot Springs are the top experiences. See all ${link("/krabi-things-to-do", "Krabi activities")}.`,
    },
    {
      question: "Which is better — 4 Islands or Hong Islands tour?",
      answer: `${link("/four-islands-speedboat", "4 Islands tour")} covers Phra Nang Cave, Tup, Chicken and Poda Islands — best for first-timers. ${link("/hong-islands-speedboat", "Hong Islands")} has the famous hidden lagoon and is less crowded.`,
    },
    {
      question: "Is the Emerald Pool worth visiting?",
      answer: `Yes — the ${link("/hot-spring-emerald-pool", "Emerald Pool & Hot Springs day tour")} also covers Tiger Cave Temple viewpoint and natural hot springs in Khlong Thom. A great inland alternative to island hopping.`,
    },
    {
      question: "How do I get from Krabi to Phuket?",
      answer: `Around 3 hours by road. Book a ${link("/krabi-to-phuket", "Krabi to Phuket transfer")} or combine with our ${link("/krabi-phuket-city-tour", "Phuket city tour from Krabi")}.`,
    },
    {
      question: "Where should I stay in Krabi?",
      answer: "Ao Nang is the main tourist hub with restaurants and easy boat access. Railay is more scenic but only reachable by longtail boat. Krabi Town is cheaper and good for budget travelers.",
    },
    {
      question: "What is the best time to visit Krabi?",
      answer: "November to March offers calm seas and dry weather — perfect for island tours. April–May is hot, June–October is monsoon with frequent boat cancellations.",
    },
    {
      question: "Can I do Krabi as a day trip from Phuket?",
      answer: `Yes — our ${link("/krabi-phuket-city-tour", "Krabi day tour from Phuket")} includes hotel pickup, Tiger Cave Temple, Emerald Pool and a seafood lunch.`,
    },
  ],

  singapore: [
    {
      question: "What are the top attractions in Singapore?",
      answer: `Marina Bay Sands, Gardens by the Bay, Sentosa Island, Universal Studios and Singapore Zoo top the list. Browse all ${link("/singapore-things-to-do", "Singapore activities")} or see our ${link("/blog/top-things-singapore", "top things to do in Singapore")} guide.`,
    },
    {
      question: "Is Universal Studios Singapore worth it?",
      answer: `Yes — book ${link("/universal-studios-weekday", "weekday tickets")} for shorter queues or ${link("/universal-studios-weekend", "weekend passes")}. Read our ${link("/blog/universal-studios-singapore", "Universal Studios Singapore guide")} for ride tips.`,
    },
    {
      question: "Singapore Zoo or Night Safari — which is better?",
      answer: `${link("/singapore-zoo", "Singapore Zoo")} is great by day for families with kids. ${link("/night-safari-tickets", "Night Safari")} is a unique nocturnal experience — many visitors do both. See our ${link("/blog/night-safari-singapore", "Night Safari Singapore guide")}.`,
    },
    {
      question: "How many days do I need in Singapore?",
      answer: `3 to 4 days covers Marina Bay, Sentosa, Gardens by the Bay, the Zoo and shopping. Combine with a ${link("/blog/singapore-summer-activities", "summer activities itinerary")} for outdoor experiences.`,
    },
    {
      question: "How do I get from Changi Airport to the city?",
      answer: `MRT takes ~40 minutes and costs around SGD 2.50. For comfort, book a ${link("/singapore-airport-pickup", "Singapore airport pickup")} or ${link("/singapore-airport-dropoff", "drop-off")} with us.`,
    },
    {
      question: "Is Singapore expensive for Indian tourists?",
      answer: `It's pricier than Thailand but mid-range with smart booking. Use a ${link("/blog/singapore-combo-pass", "Singapore combo pass")}, eat at hawker centers (S$5–8 meals), and book attractions online for discounts.`,
    },
    {
      question: "What is the best time to visit Singapore?",
      answer: "Singapore is warm year-round (26–32°C). February to April has the least rain. November–January is the wettest but greenest. Indoor attractions and Sentosa work in any season.",
    },
  ],

  dubai: [
    {
      question: "What are the must-do activities in Dubai?",
      answer: `Burj Khalifa, Desert Safari, Dubai Marina Cruise, Dubai Frame and Global Village are unmissable. See our ${link("/blog/best-dubai-activities", "best Dubai activities guide")}.`,
    },
    {
      question: "Is Desert Safari worth doing in Dubai?",
      answer: `Absolutely — choose ${link("/desert-safari", "premium Desert Safari")} with BBQ dinner and shows, or ${link("/desert-safari-sharing", "sharing safari")} for budget travelers. Read our ${link("/blog/dubai-desert-safari", "Desert Safari guide")}.`,
    },
    {
      question: "Burj Khalifa Prime or Non-Prime — which is better?",
      answer: `${link("/burj-khalifa-prime", "Prime hours")} (sunset) give the best views but cost more. ${link("/burj-khalifa-non-prime", "Non-prime tickets")} are cheaper and perfect for daytime panoramas.`,
    },
    {
      question: "How is Dubai Marina Cruise different from Dhow Cruise Creek?",
      answer: `${link("/dhow-cruise-marina-upper", "Marina Cruise")} sails past modern skyscrapers; ${link("/dhow-cruise-creek-upper", "Creek Cruise")} shows old Dubai. Read the ${link("/blog/dubai-marina-cruise", "Marina Cruise guide")} to choose.`,
    },
    {
      question: "What is the best time to visit Dubai?",
      answer: "November to March is ideal — cool 20–28°C weather, perfect for outdoor activities and desert safaris. Avoid June–August (40°C+) unless sticking to indoor malls and attractions.",
    },
    {
      question: "How do I get around Dubai easily?",
      answer: `Dubai Metro is cheap and clean. For airport transfers and city tours, book ${link("/dubai-transfers", "Dubai transfers")} in advance to avoid surge pricing on Careem/Uber.`,
    },
    {
      question: "Is Dubai family-friendly?",
      answer: `Yes — try ${link("/atlantis-palm", "Atlantis Aquaventure")}, ${link("/dubai-aquarium-penguin", "Dubai Aquarium")}, ${link("/abu-dhabi-ferrari-world", "Ferrari World")} and the ${link("/miracle-garden-dubai", "Miracle Garden")}. All are stroller-friendly with kid-priced tickets.`,
    },
  ],
};

cityseoFaqs["abu dhabi"] = cityseoFaqs.dubai;
cityseoFaqs.thailand = cityseoFaqs.bangkok;
cityseoFaqs["chiang mai"] = cityseoFaqs.bangkok;
cityseoFaqs["koh samui"] = cityseoFaqs.phuket;

export const getSeoFaqsForCity = (city?: string): SeoFaq[] => {
  if (!city) return [];
  return cityseoFaqs[city.toLowerCase()] ?? [];
};
