/**
 * Krabi activity SEO content sections.
 * Same shell as PattayaActivitySEO / BangkokActivitySEO for consistency.
 * Content sourced from krabi_info.docx brand brief.
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

const KrabiActivitySEO = ({ title, sections }: SEOProps) => (
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

const indianTravelerTips = (extras: string[] = []): string[] => [
  "Carry sunscreen, sunglasses, hats and lightweight cotton clothing for tropical weather",
  "Mention vegetarian meal preference at the time of booking — most operators arrange Indian-friendly options",
  "Pay in INR through Yellodae and carry a little Thai Baht for souvenirs and snacks",
  ...extras,
];

// ============== Activity-specific SEO content ==============

export const PhiPhiKrabiSpeedboatSEO = () => (
  <KrabiActivitySEO
    title="Phi Phi Island by Speedboat with Transfer from Krabi – Complete Guide"
    sections={[
      {
        heading: "Why Book Phi Phi Island by Speedboat from Krabi",
        body: [
          "The Phi Phi Island by Speedboat with Transfer from Krabi is one of Thailand's most popular island-hopping tours, covering Maya Bay, Monkey Beach, Viking Cave and snorkeling spots in a single full day.",
          "With hotel pickup, lunch and English-speaking guides included, it is ideal for couples, families, honeymooners and Indian travelers visiting Krabi for the first time. The speedboat lets you cover more islands than a longtail boat in the same day.",
        ],
      },
      {
        heading: "What's Included in the Tour",
        bullets: [
          "Hotel pickup and drop-off from major Krabi locations",
          "Speedboat transfers across the Andaman Sea",
          "Sightseeing at Maya Bay, Viking Cave, Monkey Beach, Loh Samah Bay",
          "Snorkeling stops with equipment provided",
          "Thai lunch, drinking water and refreshments",
          "Professional English-speaking guide and life jackets",
        ],
      },
      {
        heading: "Best Time to Visit",
        body: [
          "November to April offers calm seas, sunny weather and the best snorkeling visibility. Early morning departures help avoid crowds at Maya Bay.",
          "Tours still operate during the May–October monsoon season, but rough seas can lead to occasional cancellations.",
        ],
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: indianTravelerTips([
          "Carry swimwear, extra clothes and a waterproof phone cover for snorkeling",
          "Avoid touching coral reefs or feeding fish — Thailand enforces strict marine protection",
        ]),
      },
    ]}
  />
);

export const JamesBondIslandKrabiSEO = () => (
  <KrabiActivitySEO
    title="James Bond Island Sightseeing Tour by Long-Tailed Boat – Complete Guide"
    sections={[
      {
        heading: "Why Book the James Bond Island Long-Tailed Boat Tour",
        body: [
          "Cruise through the dramatic limestone karsts of Phang Nga Bay on a traditional Thai long-tailed boat. Visit the iconic James Bond Island (made famous by The Man with the Golden Gun), explore hidden sea caves and stop at the floating Muslim village of Koh Panyee.",
          "The slower long-tailed boat pace is perfect for photography, families and travelers who want a culturally rich, relaxed alternative to high-speed island tours.",
        ],
      },
      {
        heading: "What's Included in the Tour",
        bullets: [
          "Hotel pickup and drop-off (transfer option)",
          "Traditional long-tailed boat with experienced local boatmen",
          "Sightseeing at James Bond Island and limestone formations",
          "Visit to Koh Panyee floating village with lunch",
          "Mangrove forests, sea caves and limestone tunnels",
          "Drinking water, guide assistance and life jackets",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "November to April provides calm seas, bright skies and the best photography conditions. Morning departures are recommended for cooler weather and better lighting.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: indianTravelerTips([
          "Wear comfortable footwear for walking on wooden platforms at Koh Panyee",
          "Dress modestly when visiting the floating Muslim village",
          "Carry a waterproof bag for phones and cameras — light splashes are common",
        ]),
      },
    ]}
  />
);

export const HongIslandsLongtailSEO = () => (
  <KrabiActivitySEO
    title="Hong Island (Koh Hong) Tour by Long-Tailed Boat from Krabi – Complete Guide"
    sections={[
      {
        heading: "Why Book the Hong Island Long-Tailed Boat Tour",
        body: [
          "Hong Island is one of Krabi's most scenic islands, famous for its hidden emerald lagoon surrounded by towering limestone cliffs inside Than Bok Khorani National Park. The traditional long-tailed boat enters the lagoon through a narrow passage — a magical, secluded experience.",
          "Quieter than Phi Phi, this tour also covers Pakbia and Lao Lading Islands, ideal for honeymoon couples and families looking for relaxation, snorkeling and panoramic photography.",
        ],
      },
      {
        heading: "What's Included in the Tour",
        bullets: [
          "Hotel pickup and drop-off from Ao Nang and Krabi Town (transfer option)",
          "Traditional long-tailed boat with local crew",
          "Visit to Hong Island Lagoon, Pakbia Island and Lao Lading Island",
          "Snorkeling equipment, life jackets and seasonal fruits",
          "Drinking water and guide assistance",
          "Lunch (selected packages)",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "November to April delivers calm seas and vibrant turquoise water. Morning departures are best to reach Hong Lagoon before peak crowds. Tours still run during the green season (May–October), with lush scenery and fewer tourists.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: indianTravelerTips([
          "Wear flip-flops or waterproof footwear — boarding involves shallow water",
          "Pack waterproof phone covers for the lagoon entry",
          "Avoid touching coral reefs — the area is a protected marine park",
        ]),
      },
    ]}
  />
);

export const FourIslandsLongtailSEO = () => (
  <KrabiActivitySEO
    title="4 Islands Tour by Long-Tailed Boat from Krabi – Complete Guide"
    sections={[
      {
        heading: "Why Book the 4 Islands Long-Tailed Boat Tour",
        body: [
          "The 4 Islands Tour is the most popular island-hopping experience from Krabi, covering Phra Nang Cave Beach, Chicken Island, Tub Island sandbar and Poda Island — all close to the mainland for maximum beach time.",
          "Highlights include walking the natural sandbar that connects Tub, Mor and Chicken islands at low tide, snorkeling among colorful coral reefs and relaxing at one of Thailand's most beautiful cave beaches.",
        ],
      },
      {
        heading: "What's Included in the Tour",
        bullets: [
          "Hotel pickup and drop-off (transfer option)",
          "Traditional long-tailed boat with experienced local boatmen",
          "Visits to Phra Nang Cave Beach, Chicken Island, Tub Island and Poda Island",
          "Snorkeling equipment and life jackets",
          "Drinking water and seasonal fruits",
          "Lunch on the beach (full-day options)",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "November to April offers calm seas, excellent snorkeling visibility and ideal sandbar conditions at Tub Island. Low-tide morning departures provide the best sandbar walking experience.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: indianTravelerTips([
          "Wear flip-flops — you will step into shallow water while boarding",
          "Carry waterproof phone covers and a small towel",
          "Bring a little Thai Baht for coconut water and snacks at island stops",
        ]),
      },
    ]}
  />
);

export const HotSpringEmeraldPoolSEO = () => (
  <KrabiActivitySEO
    title="Emerald Pool, Hot Spring & Tiger Cave Temple Tour from Krabi – Complete Guide"
    sections={[
      {
        heading: "Why Book the Emerald Pool, Hot Spring & Tiger Cave Tour",
        body: [
          "A perfect break from island hopping — this land-based tour combines wellness, jungle exploration and cultural sightseeing in one day. Swim in the mineral-rich Emerald Pool inside Khao Phra Bang Khram Nature Reserve, soak in natural Krabi Hot Springs and visit the iconic Tiger Cave Temple.",
          "Ideal for families, couples, photographers and Indian travelers who want a refreshing mix of nature, relaxation and spirituality.",
        ],
      },
      {
        heading: "What's Included in the Tour",
        bullets: [
          "Hotel pickup and drop-off from Ao Nang and Krabi Town (transfer option)",
          "Air-conditioned vehicle through scenic countryside",
          "Guided jungle walk to Emerald Pool",
          "Krabi Hot Springs natural soaking pools",
          "Tiger Cave Temple visit (1,260-step viewpoint optional)",
          "Drinking water and guide assistance",
          "Lunch (full-day options)",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "November to April keeps trails dry and viewpoints clear. The green season (May–October) makes the rainforest even more vivid. Morning departures help avoid crowds at Emerald Pool and let you finish the temple climb before midday heat.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: indianTravelerTips([
          "Wear comfortable walking shoes for the jungle trail and temple steps",
          "Carry modest clothing covering shoulders and knees for the temple",
          "Pack swimwear, towel and insect repellent for the rainforest stops",
        ]),
      },
    ]}
  />
);

export const SevenIslandsLongtailSEO = () => (
  <KrabiActivitySEO
    title="Krabi 7 Islands Sunset Tour by Long-Tailed Boat with BBQ Dinner – Complete Guide"
    sections={[
      {
        heading: "Why Book the 7 Islands Sunset BBQ Tour",
        body: [
          "This magical evening tour combines snorkeling, sunset over Phra Nang Cave Beach, a beachside BBQ dinner and — when conditions allow — swimming with glowing bioluminescent plankton across seven scenic islands near Krabi.",
          "It's one of the most romantic and unique experiences in Krabi, perfect for honeymoon couples, families and Indian travelers wanting more than a daytime island hop.",
        ],
      },
      {
        heading: "What's Included in the Tour",
        bullets: [
          "Hotel pickup and drop-off (transfer option)",
          "Traditional long-tailed boat with experienced local crew",
          "Snorkeling at coral reefs near Chicken Island",
          "Beach time at Poda Island and Phra Nang Cave Beach",
          "Sunset viewing over the Andaman Sea",
          "Beachside BBQ dinner (vegetarian on request)",
          "Bioluminescent plankton swim — subject to sea and moon conditions",
        ],
      },
      {
        heading: "Best Time to Visit",
        body:
          "November to April delivers the clearest sunsets and calmest seas. Plankton sightings are most likely on darker nights with minimal moonlight, typically October to May.",
      },
      {
        heading: "Tips for Indian Travelers",
        bullets: indianTravelerTips([
          "Carry a light jacket or shawl — boat rides after sunset can be breezy",
          "Use waterproof phone covers for sunset and plankton photos",
          "Bring insect repellent for the evening beach stop",
        ]),
      },
    ]}
  />
);
