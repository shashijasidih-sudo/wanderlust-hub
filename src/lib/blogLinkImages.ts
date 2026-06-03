// Maps blog/activity/transfer link paths to representative images.
// Used by BlogArticleLayout to show images in Related Guides, Recommended
// Activities and Explore City cards without requiring per-blog image edits.
//
// IMPORTANT: keyword rules are matched IN ORDER — list the most specific
// patterns (phi-phi, maya-bay, james-bond, doi-suthep, etc.) BEFORE the
// generic city fallbacks (bangkok, phuket, pattaya...) so related grids
// don't collapse into one repeating city photo.

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;

const THEMES = {
  // Cities
  bangkokCity: U("photo-1508009603885-50cf7c579365"),
  pattaya: U("photo-1552465011-b4e21bf6e79a"),
  phuket: U("photo-1589394815804-964ed0be2eb5"),
  krabi: U("photo-1537956965359-7573183d1f57"),
  chiangMai: U("photo-1598935898639-81586f7d2129"),
  kohSamui: U("photo-1504457047772-27faf1c00561"),
  singapore: U("photo-1525625293386-3f8f99389edd"),
  japan: U("photo-1493780474015-ba834fd0ce2f"),
  tokyo: U("photo-1542051841857-5f90071e7989"),
  kyoto: U("photo-1528360983277-13d401cdc186"),
  fuji: U("photo-1570459027562-4a916cc59679"),

  // Bangkok specifics
  bangkokTemple: U("photo-1563492065599-3520f775eeed"),
  watArun: U("photo-1528181304800-259b08848526"),
  grandPalace: U("photo-1552550049-db097c9480d1"),
  watPho: U("photo-1599447421416-3414500d18a5"),
  skywalk: U("photo-1508009603885-50cf7c579365"),
  baiyoke: U("photo-1573599852326-2d4da0bbe613"),
  bangkokNight: U("photo-1552465011-b4e21bf6e79a"),
  bangkokFood: U("photo-1559314809-0d155014e29e"),
  chinatown: U("photo-1555992336-fb0d29498b13"),
  damnoen: U("photo-1528181304800-259b08848526"),
  maeklong: U("photo-1528181304800-259b08848526"),
  ayutthaya: U("photo-1552465011-b4e21bf6e79a"),

  // Islands / sea
  phiPhi: U("photo-1537956965359-7573183d1f57"),
  mayaBay: U("photo-1552465011-b4e21bf6e79a"),
  jamesBond: U("photo-1528181304800-259b08848526"),
  phangNga: U("photo-1559128010-7c1ad6e1b6a5"),
  coralIsland: U("photo-1559827260-dc66d52bef19"),
  rachaIsland: U("photo-1505228395891-9a51e7e86bf6"),
  similan: U("photo-1559128010-7c1ad6e1b6a5"),
  speedboat: U("photo-1544551763-46a013bb70d5"),
  snorkel: U("photo-1535591273668-578e31182c4f"),
  scuba: U("photo-1582967788606-a171c1080cb0"),

  // Pattaya
  coralPattaya: U("photo-1559827260-dc66d52bef19"),
  alcazar: U("photo-1518684079-3c830dcef090"),
  sanctuaryTruth: U("photo-1563492065599-3520f775eeed"),
  nongnooch: U("photo-1545158535-c3f7168c28b6"),
  floatingMarket: U("photo-1528181304800-259b08848526"),

  // Krabi
  railayBeach: U("photo-1537956965359-7573183d1f57"),
  hongIsland: U("photo-1559128010-7c1ad6e1b6a5"),
  fourIsland: U("photo-1559827260-dc66d52bef19"),
  emeraldPool: U("photo-1571115332188-7c4d8a06a4ef"),

  // Chiang Mai
  doiSuthep: U("photo-1598935898639-81586f7d2129"),
  doiInthanon: U("photo-1570559716060-d4d7a0ac4f88"),
  chiangRai: U("photo-1528181304800-259b08848526"),
  elephantSanctuary: U("photo-1503066211613-c17ebc9daef0"),
  whiteTemple: U("photo-1563492065599-3520f775eeed"),
  nightBazaar: U("photo-1542315192-1f61a1792f33"),

  // Singapore
  marinaBay: U("photo-1525625293386-3f8f99389edd"),
  sentosa: U("photo-1473625247510-8ceb1760943f"),
  uss: U("photo-1582719471384-894fbb16e074"),
  gardensByBay: U("photo-1565967511849-76a60a516170"),
  singaporeZoo: U("photo-1549366021-9f761d450615"),

  // Japan
  disney: U("photo-1624601573012-efb68931cc8f"),
  shibuya: U("photo-1542051841857-5f90071e7989"),
  arashiyama: U("photo-1528360983277-13d401cdc186"),
  fushimi: U("photo-1493976040374-85c8e12f0c0e"),

  // Transfers
  airport: U("photo-1436491865332-7a61a109cc05"),
  taxi: U("photo-1556122071-e404cb6f31c0"),
  van: U("photo-1570125909232-eb263c188f7e"),
  bts: U("photo-1601471434954-e3b5d70d8e74"),
  ferry: U("photo-1502602898657-3e91760cbb34"),

  // Cruises / nightlife
  cruise: U("photo-1544551763-46a013bb70d5"),
  dinnerCruise: U("photo-1414235077428-338989a2e8c0"),
  nightlife: U("photo-1571266028243-d220bc9beed6"),

  // Themes
  couple: U("photo-1519741497674-611481863552"),
  family: U("photo-1601758124510-52d02ddb7cbd"),
  honeymoon: U("photo-1583394838336-acd977736f90"),
  itinerary: U("photo-1488646953014-85cb44e25828"),
  cost: U("photo-1554224155-6726b3ff858f"),
  monsoon: U("photo-1515694346937-94d85e41e6f0"),
  visa: U("photo-1450101499163-c8848c66ca85"),
  shopping: U("photo-1542315192-1f61a1792f33"),
  food: U("photo-1559314809-0d155014e29e"),
  indianFood: U("photo-1585937421612-70a008356fbe"),
  sim: U("photo-1512496015851-a90fb38ba796"),
  currency: U("photo-1580519542036-c47de6196ba5"),
  tipping: U("photo-1554224155-6726b3ff858f"),
  dress: U("photo-1490481651871-ab68de25d43d"),
  safety: U("photo-1521791136064-7986c2920216"),
  packing: U("photo-1488646953014-85cb44e25828"),

  // Park / nature
  safari: U("photo-1549366021-9f761d450615"),
  seaLife: U("photo-1535591273668-578e31182c4f"),
  zoo: U("photo-1549366021-9f761d450615"),
  beach: U("photo-1507525428034-b723cf961d3e"),
  waterfall: U("photo-1432405972618-c60b0225b8f9"),

  // Festivals
  fullMoon: U("photo-1533174072545-7a4b6ad7a6c3"),
  loyKrathong: U("photo-1414235077428-338989a2e8c0"),
  songkran: U("photo-1528181304800-259b08848526"),

  generic: U("photo-1528181304800-259b08848526"),
};

// Path keyword → image. Order matters; most specific first.
const KEYWORD_MAP: { test: RegExp; img: string }[] = [
  // Phi Phi / Andaman islands
  { test: /maya-bay/, img: THEMES.mayaBay },
  { test: /phi-phi/, img: THEMES.phiPhi },
  { test: /james-bond/, img: THEMES.jamesBond },
  { test: /phang-nga/, img: THEMES.phangNga },
  { test: /similan/, img: THEMES.similan },
  { test: /racha/, img: THEMES.rachaIsland },
  { test: /coral-island|coral-pattaya/, img: THEMES.coralIsland },
  { test: /speedboat/, img: THEMES.speedboat },
  { test: /snorkel/, img: THEMES.snorkel },
  { test: /scuba|diving/, img: THEMES.scuba },

  // Krabi specifics
  { test: /railay/, img: THEMES.railayBeach },
  { test: /hong-island/, img: THEMES.hongIsland },
  { test: /four-island|4-island/, img: THEMES.fourIsland },
  { test: /emerald-pool|krabi-jungle/, img: THEMES.emeraldPool },

  // Pattaya specifics
  { test: /alcazar/, img: THEMES.alcazar },
  { test: /sanctuary-of-truth/, img: THEMES.sanctuaryTruth },
  { test: /nong-?nooch/, img: THEMES.nongnooch },
  { test: /floating-market/, img: THEMES.floatingMarket },
  { test: /damnoen/, img: THEMES.damnoen },
  { test: /maeklong/, img: THEMES.maeklong },

  // Bangkok temples/landmarks
  { test: /grand-palace/, img: THEMES.grandPalace },
  { test: /wat-arun/, img: THEMES.watArun },
  { test: /wat-pho/, img: THEMES.watPho },
  { test: /three-temples|emerald-buddha|golden-buddha|marble-temple|temple/, img: THEMES.bangkokTemple },
  { test: /skywalk|mahanakhon/, img: THEMES.skywalk },
  { test: /baiyoke/, img: THEMES.baiyoke },
  { test: /chinatown|yaowarat/, img: THEMES.chinatown },
  { test: /ayutthaya/, img: THEMES.ayutthaya },

  // Chiang Mai / North
  { test: /doi-suthep/, img: THEMES.doiSuthep },
  { test: /doi-inthanon/, img: THEMES.doiInthanon },
  { test: /chiang-rai|white-temple|golden-triangle|long-neck/, img: THEMES.whiteTemple },
  { test: /elephant/, img: THEMES.elephantSanctuary },
  { test: /night-bazaar/, img: THEMES.nightBazaar },

  // Singapore
  { test: /universal-studios|uss/, img: THEMES.uss },
  { test: /gardens-by-the-bay/, img: THEMES.gardensByBay },
  { test: /marina-bay/, img: THEMES.marinaBay },
  { test: /sentosa/, img: THEMES.sentosa },
  { test: /singapore-zoo|night-safari/, img: THEMES.singaporeZoo },

  // Japan
  { test: /mount-fuji|fuji/, img: THEMES.fuji },
  { test: /disney/, img: THEMES.disney },
  { test: /shibuya|tokyo/, img: THEMES.tokyo },
  { test: /fushimi-inari/, img: THEMES.fushimi },
  { test: /arashiyama|bamboo/, img: THEMES.arashiyama },
  { test: /kyoto/, img: THEMES.kyoto },
  { test: /japan/, img: THEMES.japan },

  // Festivals
  { test: /full-moon/, img: THEMES.fullMoon },
  { test: /half-moon/, img: THEMES.fullMoon },
  { test: /loy-krathong/, img: THEMES.loyKrathong },
  { test: /songkran/, img: THEMES.songkran },

  // Cruises & shows
  { test: /chao-phraya|dinner-cruise|white-orchid|princess|cruise/, img: THEMES.dinnerCruise },
  { test: /nightlife|walking-street|bangla/, img: THEMES.nightlife },

  // Parks
  { test: /safari-world|safari/, img: THEMES.safari },
  { test: /sea-life|ocean-world|aquarium|madame-tussauds/, img: THEMES.seaLife },
  { test: /waterfall/, img: THEMES.waterfall },

  // Transfers
  { test: /airport-transfer|suvarnabhumi|don-mueang|dmk|bkk-to|hkt-to|krabi-airport|airport/, img: THEMES.airport },
  { test: /ferry|speed-?ferry/, img: THEMES.ferry },
  { test: /grab|taxi/, img: THEMES.taxi },
  { test: /bts|mrt/, img: THEMES.bts },
  { test: /van|private-transfer|minibus/, img: THEMES.van },

  // Audience / theme
  { test: /honeymoon/, img: THEMES.honeymoon },
  { test: /couple/, img: THEMES.couple },
  { test: /family|kids/, img: THEMES.family },
  { test: /itinerary|day-itinerary|days-trip/, img: THEMES.itinerary },
  { test: /cost|budget|price/, img: THEMES.cost },
  { test: /monsoon|best-time|cheapest-time|when-to-visit/, img: THEMES.monsoon },
  { test: /visa/, img: THEMES.visa },
  { test: /shopping/, img: THEMES.shopping },
  { test: /indian-food|jain-food|vegetarian/, img: THEMES.indianFood },
  { test: /food/, img: THEMES.food },
  { test: /sim-card|esim/, img: THEMES.sim },
  { test: /currency|exchange|baht/, img: THEMES.currency },
  { test: /tipping/, img: THEMES.tipping },
  { test: /dress-code/, img: THEMES.dress },
  { test: /safety/, img: THEMES.safety },
  { test: /packing/, img: THEMES.packing },
  { test: /beach/, img: THEMES.beach },

  // City fallbacks (LAST)
  { test: /pattaya/, img: THEMES.pattaya },
  { test: /phuket/, img: THEMES.phuket },
  { test: /krabi/, img: THEMES.krabi },
  { test: /chiang-mai/, img: THEMES.chiangMai },
  { test: /koh-samui|koh-phangan/, img: THEMES.kohSamui },
  { test: /singapore/, img: THEMES.singapore },
  { test: /bangkok/, img: THEMES.bangkokCity },
];

// Hash a path to a stable "rotation" so similar links don't all hit the same fallback.
const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const FALLBACK_POOL = [
  THEMES.bangkokTemple,
  THEMES.beach,
  THEMES.cruise,
  THEMES.itinerary,
  THEMES.shopping,
  THEMES.food,
  THEMES.snorkel,
  THEMES.couple,
  THEMES.family,
  THEMES.airport,
];

export const getBlogLinkImage = (link: string, fallback?: string): string => {
  const l = link.toLowerCase();
  for (const { test, img } of KEYWORD_MAP) {
    if (test.test(l)) return img;
  }
  if (fallback) return fallback;
  return FALLBACK_POOL[hash(l) % FALLBACK_POOL.length];
};

export const getCityImage = (city: string): { thingsToDo: string; transfers: string } => {
  const c = city.toLowerCase();
  const cityImg =
    c.includes("bangkok") ? THEMES.bangkokCity :
    c.includes("pattaya") ? THEMES.pattaya :
    c.includes("phuket") ? THEMES.phuket :
    c.includes("krabi") ? THEMES.krabi :
    c.includes("chiang") ? THEMES.chiangMai :
    c.includes("samui") ? THEMES.kohSamui :
    c.includes("singapore") ? THEMES.singapore :
    c.includes("japan") || c.includes("tokyo") || c.includes("kyoto") ? THEMES.japan :
    THEMES.generic;
  return { thingsToDo: cityImg, transfers: THEMES.airport };
};
