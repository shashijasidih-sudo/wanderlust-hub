/**
 * Pattaya activity SEO content sections.
 * Uses the same visual shell as BangkokActivitySEO for consistency.
 * Content sourced from Pattaya_info.docx brand brief.
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SEOSection {
  heading: string;
  body?: string | string[];
  bullets?: string[];
}

interface SEOProps {
  title: string;
  sections: SEOSection[];
}

const renderBody = (body?: string | string[]) => {
  if (!body) return null;
  const paras = Array.isArray(body) ? body : [body];
  return paras.map((p, i) => (
    <p key={i} className={i === 0 ? "" : "mt-3"}>
      {p}
    </p>
  ));
};

const PattayaActivitySEO = ({ title, sections }: SEOProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-8 text-muted-foreground leading-relaxed">
      {sections.map((s, i) => (
        <section key={i}>
          <h3 className="text-lg font-semibold text-foreground mb-3">{s.heading}</h3>
          {renderBody(s.body)}
          {s.bullets && (
            <ul className="list-disc pl-6 mt-2 space-y-1">
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </CardContent>
  </Card>
);

// ============== Activity-specific SEO content ==============

export const CoralIslandPattayaSEO = () => (
  <PattayaActivitySEO
    title="Coral Island Pattaya (Koh Larn) Tour with Speedboat – Complete Guide"
    sections={[
      {
        heading: "Why Book the Coral Island Pattaya Tour (Koh Larn)",
        body: [
          "The Coral Island Pattaya Tour (Koh Larn) is one of the most popular beach experiences near Pattaya, offering crystal-clear waters, white sandy beaches, and exciting water sports. Located just 7 km off the coast of Pattaya, Koh Larn is famous for its tropical beauty and vibrant marine life.",
          "This tour is perfect for travelers looking to escape the busy city and enjoy a relaxing beach day combined with adventure activities like parasailing, jet skiing, and snorkeling. Booking the speedboat option ensures fast transfers, organized itineraries and optional water-sport packages — ideal for Indian travelers thanks to INR payment options.",
        ],
      },
      {
        heading: "What's Included in the Coral Island Pattaya Tour",
        bullets: [
          "Speedboat transfers to Koh Larn",
          "Beach access and leisure time",
          "Parasailing, jet ski and banana boat (optional add-ons)",
          "Snorkeling opportunities",
          "Indian buffet lunch (selected packages)",
          "Hotel pickup and drop-off",
        ],
      },
      {
        heading: "Best Time to Visit",
        body: [
          "The best time to visit Coral Island Pattaya is between November and February when the weather is pleasant and sea conditions are calm.",
          "Morning tours starting around 9:00 AM are ideal for avoiding crowds and enjoying water sports before peak hours.",
        ],
      },
      {
        heading: "Transfer vs No-Transfer Option",
        bullets: [
          "Transfer option: includes hotel pickup/drop — best for convenience.",
          "No-transfer option: reach Bali Hai Pier independently.",
        ],
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Carry swimwear, sunscreen and sunglasses.",
          "Choose combo packages for better pricing.",
          "Vegetarian lunch options are available.",
          "Carry extra clothes for water activities.",
        ],
      },
      {
        heading: "Timings",
        bullets: [
          "Pickup: 8:00 AM – 9:00 AM",
          "Island visit: 10:00 AM – 3:00 PM",
          "Return: around 4:00 PM",
        ],
      },
    ]}
  />
);

export const AlcazarShowPattayaSEO = () => (
  <PattayaActivitySEO
    title="Alcazar Cabaret Show Pattaya – Tickets, Timings & Travel Guide"
    sections={[
      {
        heading: "Why Book the Alcazar Cabaret Show Pattaya",
        body: [
          "The Alcazar Cabaret Show Pattaya is one of Thailand's most famous evening entertainment experiences and a must-watch cultural performance. Known for its spectacular costumes, synchronized choreography and world-class stage production, the show blends Thai artistry with international music and dance.",
          "Located in central Pattaya, Alcazar attracts thousands of visitors weekly with performances inspired by Korean, Chinese, Bollywood, Western pop and traditional Thai cultures. Booking online ensures preferred VIP seating and confirmed entry — and lets Indian travelers pay securely in INR.",
        ],
      },
      {
        heading: "What's Included in the Alcazar Cabaret Show Ticket",
        bullets: [
          "Entry ticket to Alcazar Cabaret Show",
          "Standard or VIP seating options",
          "60–75 minute live stage performance",
          "Themed acts: Thai classical, Bollywood, K-pop, Western cabaret",
          "Optional post-show photography with performers (small tip)",
        ],
      },
      {
        heading: "Best Time to Visit",
        body: [
          "Evening performances are scheduled at 6:30 PM, 8:00 PM and 9:30 PM. The 8:00 PM show is the most popular slot, fitting perfectly after dinner and before exploring Walking Street.",
          "Families often prefer the earlier 6:30 PM show, while couples and groups gravitate to later performances. Since the show is indoors, it runs in any weather.",
        ],
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body:
          "Transfer packages include hotel pickup/drop-off — recommended for first-time visitors and families. The no-transfer option works well for travelers staying centrally, with easy access via taxi, tuk-tuk or Grab/Bolt.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Book VIP seats for the best stage visibility and photography angles.",
          "Arrive at least 20 minutes before showtime.",
          "Plan dinner at nearby Indian restaurants before the 8:00 PM slot.",
          "Smart casual attire is recommended for the air-conditioned theater.",
          "Combine with a Walking Street visit for a complete Pattaya nightlife evening.",
        ],
      },
    ]}
  />
);

export const NongNoochGardenSEO = () => (
  <PattayaActivitySEO
    title="Nong Nooch Tropical Garden Pattaya – Tickets, Shows & Travel Guide"
    sections={[
      {
        heading: "Why Book Nong Nooch Tropical Garden Pattaya",
        body: [
          "Nong Nooch Tropical Garden Pattaya is one of Thailand's most beautiful botanical attractions, spanning over 500 acres of landscaped gardens, themed zones, cultural exhibits and live performances just outside Pattaya city.",
          "Unlike a regular botanical park, Nong Nooch combines French-style gardens, a Stonehenge replica, cactus and orchid collections, dinosaur valley, palm gardens and an elevated skywalk with traditional Thai cultural shows and elephant performances — making it one of Pattaya's most diverse sightseeing experiences.",
        ],
      },
      {
        heading: "What's Included in Nong Nooch Tickets",
        bullets: [
          "Entry to all themed garden zones",
          "Elevated skywalk viewing platform",
          "Thai cultural show (dance, music, battle reenactments)",
          "Elephant show",
          "Optional buffet lunch and air-conditioned hotel transfer",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "The best time to visit is in the morning between 9:00 AM and 12:00 PM when temperatures are cooler and the gardens are less crowded. November to February offers the most pleasant weather, but the park operates year-round.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body:
          "Nong Nooch Garden is 25–30 minutes from central Pattaya, so the transfer option is highly recommended. The no-transfer option suits travelers with private transport or flexible schedules.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Allocate at least half a day to enjoy the gardens, skywalk and live performances.",
          "Wear comfortable walking shoes — the park covers a large area.",
          "Carry sunscreen, hats and sunglasses for outdoor zones.",
          "Vegetarian buffet options are available inside the park.",
          "Plan around show timings (cultural show ~10:30 AM and 1:30 PM).",
        ],
      },
    ]}
  />
);

export const PattayaFloatingMarketSEO = () => (
  <PattayaActivitySEO
    title="Pattaya Floating Market – Tickets, Boat Ride & Travel Guide"
    sections={[
      {
        heading: "Why Book the Pattaya Floating Market",
        body: [
          "The Pattaya Floating Market is one of the most vibrant cultural attractions in the city — a heritage-themed market along Sukhumvit Road with wooden houses, floating vendors and cultural performances.",
          "The market is divided into four regional zones representing Thailand's North, Northeast, Central and South. Each zone showcases local architecture, crafts, costumes and cuisine, making the visit both entertaining and educational.",
        ],
      },
      {
        heading: "What's Included",
        bullets: [
          "Entry to four regional Thai cultural zones",
          "Traditional wooden market houses & wooden bridges",
          "Floating boat vendors and souvenir shops",
          "Cultural performance stages",
          "Optional canal boat ride",
          "Optional Thai costume photo experience",
          "Selected packages include hotel transfer",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Mornings between 10:00 AM and 12:30 PM are best for cooler weather and quieter walkways. Late afternoon visits between 4:00 PM and 6:30 PM offer beautifully illuminated market views.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body:
          "The market is 15–20 minutes from central Pattaya. Transfer packages are ideal for families and combo itineraries with Underwater World; no-transfer packages suit travelers with flexible schedules.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Allocate 2–3 hours to fully explore the canals and cultural zones.",
          "Wear comfortable footwear — wooden bridges connect different sections.",
          "Vegetarian options like fruits, coconut ice cream and fried noodles are widely available.",
          "Take the canal boat ride for the best photography angles.",
        ],
      },
    ]}
  />
);

export const PattayaBigBuddhaGemsSEO = () => (
  <PattayaActivitySEO
    title="Pattaya City Tour: Big Buddha Hill & Gems Gallery – Travel Guide"
    sections={[
      {
        heading: "Why Book the Big Buddha Hill & Gems Gallery Tour",
        body: [
          "This guided half-day Pattaya city tour combines two of the area's most iconic stops: Big Buddha Hill (Wat Phra Yai) for panoramic views of Pattaya Bay, and the world-famous Gems Gallery and Museum showcasing Thai gemstone craftsmanship.",
          "The tour is ideal for first-time visitors who want a relaxed introduction to Pattaya's spiritual and cultural side, with round-trip hotel transfer included.",
        ],
      },
      {
        heading: "What's Included",
        bullets: [
          "Round-trip hotel transfer in air-conditioned vehicle",
          "Visit to Big Buddha Hill (Wat Phra Yai)",
          "Panoramic Pattaya Bay viewpoints",
          "Guided tour of the Gems Gallery and Museum",
          "English-speaking guide",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Morning departures (8:30 AM – 9:00 AM) are best — cooler temperatures, better light for photography and a smooth flow through the gallery before peak crowds.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Dress modestly for the temple — covered shoulders and knees.",
          "There is no obligation to purchase at the Gems Gallery; the visit is purely informational.",
          "Carry water and a hat for the open viewpoint at Big Buddha Hill.",
        ],
      },
    ]}
  />
);

export const PattayaDolphinariumSEO = () => (
  <PattayaActivitySEO
    title="Pattaya Dolphinarium – Tickets, Shows & Family Guide"
    sections={[
      {
        heading: "Why Book the Pattaya Dolphinarium",
        body:
          "Pattaya Dolphinarium is a fully air-conditioned indoor venue offering interactive dolphin and seal shows with photo opportunities and educational presentations. It's one of the most family-friendly indoor attractions in the city — perfect for hot afternoons or rainy weather.",
      },
      {
        heading: "What's Included",
        bullets: [
          "Entry ticket to the Dolphinarium",
          "45–60 minute interactive dolphin and seal show",
          "Educational marine-life presentations",
          "Optional photo session with dolphins (additional cost)",
          "Selected packages include hotel pickup and drop-off",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Morning shows are ideal for families, while afternoon shows pair well with a Coral Island morning trip. Check show timings at the entrance and arrive 15 minutes early.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Photography without flash is allowed during the show.",
          "Vegetarian snacks are available at nearby cafes.",
          "INR payments are supported through trusted booking platforms.",
        ],
      },
    ]}
  />
);

export const MuayThaiPattayaSEO = () => (
  <PattayaActivitySEO
    title="Muay Thai Pattaya Live Show – Tickets & Stadium Guide"
    sections={[
      {
        heading: "Why Book the Muay Thai Pattaya Experience",
        body:
          "Muay Thai is Thailand's national sport and a must-see cultural experience. The Pattaya stadium hosts professional fighters in an electric atmosphere, beginning with the traditional Wai Kru ritual and progressing through multiple rounds of authentic Muay Thai action.",
      },
      {
        heading: "What's Included",
        bullets: [
          "Entry ticket to the Muay Thai stadium",
          "Multiple live Muay Thai bouts",
          "Traditional Wai Kru opening ceremony",
          "Selected packages include hotel transfer",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Evening performances are the most popular and pair well with dinner on Walking Street or a beachside meal afterwards.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Smart casual attire is recommended.",
          "Photography is allowed during the matches.",
          "The show is suitable for older children and adults.",
          "INR payments are supported through trusted booking platforms.",
        ],
      },
    ]}
  />
);

export const PattayaNightlifeWalkingSEO = () => (
  <PattayaActivitySEO
    title="Lost in Nightlight Pattaya – Walking, Drinking & Food Tasting Guide"
    sections={[
      {
        heading: "Why Book the Lost in Nightlight Pattaya Walking Tour",
        body: [
          "The Lost in Nightlight tour is one of Pattaya's most unique nightlife experiences — a guided evening walk through Walking Street and the Red Light District with curated food stops, beverage tastings and insider commentary.",
          "Unlike exploring nightlife independently, this guided experience helps travelers discover hidden bars, authentic street food vendors and entertainment zones with safety support and local context.",
        ],
      },
      {
        heading: "What's Included",
        bullets: [
          "Guided walking tour of Pattaya nightlife district",
          "Walking Street entertainment zones",
          "Local Thai street food tasting stops",
          "Beverage tastings (soft drinks or alcoholic, depending on package)",
          "Local guide with cultural insights",
          "Safe small-group exploration",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Tours run between 7:30 PM and 10:30 PM. Earlier slots offer a relaxed introduction; later slots are more energetic with brighter lights and louder music.",
      },
      {
        heading: "Transfer vs No-Transfer Option",
        body:
          "The transfer option includes hotel pickup/drop, useful for late-night returns. The no-transfer option suits travelers staying near Walking Street.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Wear comfortable walking footwear.",
          "Carry valid ID for packages with alcoholic tastings.",
          "Vegetarian tasting options are available at most stops.",
          "Photography is allowed throughout the nightlife district.",
        ],
      },
    ]}
  />
);

export const PattayaPubCrawlSEO = () => (
  <PattayaActivitySEO
    title="Sunset Club & Pub Crawl Pattaya – Drinking Street Experience Guide"
    sections={[
      {
        heading: "Why Book the Sunset Club & Pub Crawl Experience",
        body:
          "The Sunset Club & Pub Crawl is the ultimate Pattaya nightlife experience — starting with sunset cocktails at a rooftop venue and progressing through a curated pub crawl across Drinking Street's best bars and music venues.",
      },
      {
        heading: "What's Included",
        bullets: [
          "Sunset rooftop drink experience",
          "Guided pub crawl across multiple venues",
          "Welcome drinks at participating bars (selected packages)",
          "Live music and entertainment access",
          "Local guide and small-group experience",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Tours start around sunset (~6:00 PM) and run into the late evening. Weekends are livelier; weekdays are more relaxed.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Carry valid ID — required at most venues.",
          "Smart casual attire is recommended.",
          "Combine with a daytime Coral Island trip for a full Pattaya day-and-night itinerary.",
          "INR payments are supported online before arrival.",
        ],
      },
    ]}
  />
);

export const PattayaFloatingMarketGuidedSEO = () => (
  <PattayaActivitySEO
    title="Pattaya Floating Market Guided Tour – Cultural Experience Guide"
    sections={[
      {
        heading: "Why Book the Guided Floating Market Tour",
        body:
          "The guided version of the Pattaya Floating Market visit adds an English-speaking local guide who walks you through the four regional Thai cultural zones, explains the architecture and crafts of each region, and helps you navigate the canal boat ride and food stalls.",
      },
      {
        heading: "What's Included",
        bullets: [
          "Entry to the floating market complex",
          "English-speaking guide",
          "Walk-through of the four regional cultural zones",
          "Cultural performance access",
          "Optional canal boat ride",
          "Hotel pickup and drop-off (selected packages)",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "Mornings (10:00 AM – 12:30 PM) for cooler weather and easier walking; late afternoons (4:00 PM – 6:30 PM) for illuminated market views.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: [
          "Wear comfortable walking footwear.",
          "Vegetarian street food (noodles, fruits, coconut desserts) is widely available.",
          "Carry sunscreen and a hat for daytime visits.",
          "Take the canal boat ride for the best photo angles.",
        ],
      },
    ]}
  />
);
