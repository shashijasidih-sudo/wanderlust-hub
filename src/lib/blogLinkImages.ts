// Maps blog/activity/transfer link paths to representative images.
// Used by BlogArticleLayout to show images in Related Guides, Recommended
// Activities and Explore City cards without requiring per-blog image edits.

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;

// Themed fallbacks
const THEMES = {
  bangkokCity: U("photo-1508009603885-50cf7c579365"),
  bangkokTemple: U("photo-1563492065599-3520f775eeed"),
  bangkokNight: U("photo-1552465011-b4e21bf6e79a"),
  bangkokFood: U("photo-1559314809-0d155014e29e"),
  bangkokShopping: U("photo-1542315192-1f61a1792f33"),
  airport: U("photo-1436491865332-7a61a109cc05"),
  taxi: U("photo-1556122071-e404cb6f31c0"),
  cruise: U("photo-1544551763-46a013bb70d5"),
  skywalk: U("photo-1508009603885-50cf7c579365"),
  watArun: U("photo-1563492065599-3520f775eeed"),
  grandPalace: U("photo-1552550049-db097c9480d1"),
  safari: U("photo-1549366021-9f761d450615"),
  seaLife: U("photo-1535591273668-578e31182c4f"),
  couple: U("photo-1519741497674-611481863552"),
  family: U("photo-1601758124510-52d02ddb7cbd"),
  honeymoon: U("photo-1519741497674-611481863552"),
  itinerary: U("photo-1528181304800-259b08848526"),
  cost: U("photo-1554224155-6726b3ff858f"),
  monsoon: U("photo-1515694346937-94d85e41e6f0"),
  visa: U("photo-1488646953014-85cb44e25828"),
  shopping: U("photo-1542315192-1f61a1792f33"),
  food: U("photo-1559314809-0d155014e29e"),
  sim: U("photo-1512496015851-a90fb38ba796"),
  tipping: U("photo-1554224155-6726b3ff858f"),
  dress: U("photo-1604608672516-f1b9b1d1c1d2"),
  pattaya: U("photo-1552465011-b4e21bf6e79a"),
  phuket: U("photo-1589394815804-964ed0be2eb5"),
  generic: U("photo-1528181304800-259b08848526"),
};

// Path keyword → image
const KEYWORD_MAP: { test: RegExp; img: string }[] = [
  { test: /grand-palace/, img: THEMES.grandPalace },
  { test: /wat-arun/, img: THEMES.watArun },
  { test: /wat-pho|temple|three-temples|emerald-buddha|golden-buddha|marble/, img: THEMES.bangkokTemple },
  { test: /skywalk|mahanakhon|baiyoke/, img: THEMES.skywalk },
  { test: /safari/, img: THEMES.safari },
  { test: /sea-life|madame-tussauds|ocean-world/, img: THEMES.seaLife },
  { test: /chao-phraya|cruise|princess|dinner-cruise|white-orchid/, img: THEMES.cruise },
  { test: /airport-transfer|suvarnabhumi|don-mueang|dmk|bkk-to/, img: THEMES.airport },
  { test: /grab|taxi|bts/, img: THEMES.taxi },
  { test: /pattaya/, img: THEMES.pattaya },
  { test: /phuket/, img: THEMES.phuket },
  { test: /honeymoon/, img: THEMES.honeymoon },
  { test: /couple/, img: THEMES.couple },
  { test: /family/, img: THEMES.family },
  { test: /itinerary|day-itinerary/, img: THEMES.itinerary },
  { test: /cost|budget|price/, img: THEMES.cost },
  { test: /monsoon|best-time|cheapest-time/, img: THEMES.monsoon },
  { test: /visa/, img: THEMES.visa },
  { test: /shopping/, img: THEMES.shopping },
  { test: /food|indian-food/, img: THEMES.food },
  { test: /sim-card|currency/, img: THEMES.sim },
  { test: /tipping|safety/, img: THEMES.tipping },
  { test: /dress-code/, img: THEMES.dress },
  { test: /things-to-do/, img: THEMES.bangkokCity },
  { test: /bangkok/, img: THEMES.bangkokCity },
];

export const getBlogLinkImage = (link: string, fallback?: string): string => {
  const l = link.toLowerCase();
  for (const { test, img } of KEYWORD_MAP) {
    if (test.test(l)) return img;
  }
  return fallback || THEMES.generic;
};

export const getCityImage = (city: string): { thingsToDo: string; transfers: string } => {
  const c = city.toLowerCase();
  const cityImg =
    c.includes("bangkok") ? THEMES.bangkokCity :
    c.includes("pattaya") ? THEMES.pattaya :
    c.includes("phuket") ? THEMES.phuket :
    THEMES.generic;
  return { thingsToDo: cityImg, transfers: THEMES.airport };
};
