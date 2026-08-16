import BlogArticleLayout from "@/components/BlogArticleLayout";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import heroAsset from "@/assets/thailand-movies-featured.png.asset.json";
import imgKrabiBollywood from "@/assets/movie-krabi-bollywood-scene.jpg";
import imgMayaBayScene from "@/assets/movie-maya-bay-scene.jpg";
import imgJamesBondScene from "@/assets/movie-james-bond-island-scene.jpg";
import imgBangkokNeon from "@/assets/movie-bangkok-neon-scene.jpg";
import imgPhuketFriends from "@/assets/movie-phuket-friends-scene.jpg";
import imgKhaoLak from "@/assets/movie-khao-lak-scene.jpg";
import imgKrabiJungle from "@/assets/movie-krabi-jungle-scene.jpg";
import imgBangkokBridge from "@/assets/bangkok-bridge-twilight-1.jpg";

/* ---- Yellodae activity links assigned to each movie section ---- */
const KRABI_4_ISLANDS = "/thailand/krabi/4-island-tour-speedboat-with-transfer/";
const KRABI_4_ISLANDS_LONGTAIL = "/thailand/krabi/4-island-tour-longtail-boat-with-transfer/";
const KRABI_HONG_ISLAND = "/thailand/krabi/hong-island-tour-speedboat-with-transfer/";
const KRABI_THINGS = "/thailand/krabi/things-to-do/";
const KRABI_TRANSFERS = "/thailand/krabi-airport-transfers/";
const PHI_PHI = "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer/";
const PHI_PHI_MAYA = "/thailand/phuket/phi-phi-maya-bay-khai-island-speedboat-tour-with-transfer/";
const JAMES_BOND = "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer/";
const JAMES_BOND_CANOE = "/thailand/phuket/james-bond-island-sea-canoe-tour-with-transfer/";
const JAMES_BOND_KRABI = "/thailand/krabi/james-bond-island/";
const PHUKET_CITY = "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer/";
const PHUKET_THINGS = "/thailand/phuket/things-to-do/";
const PHUKET_TRANSFERS = "/thailand/phuket-airport-transfers/";
const BANGKOK_CITY = "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer/";
const BANGKOK_TEMPLES = "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour/";
const BANGKOK_CRUISE = "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-transfer/";
const BANGKOK_THINGS = "/thailand/bangkok/things-to-do/";
const BANGKOK_TRANSFERS = "/thailand/bangkok-airport-transfers/";
const SAMUI_HUB = "/thailand/koh-samui/";
const SAMUI_CRUISE = "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival/";

const faqs = [
  {
    question: "Which Bollywood movie was filmed in Thailand first?",
    answer:
      "Kaho Naa... Pyaar Hai is one of the landmark early Bollywood productions associated with Thailand, particularly Krabi, and helped establish the country's tropical locations in the imagination of Indian audiences.",
  },
  {
    question: "Which Bollywood movies were filmed in Phuket?",
    answer: "Films associated with Phuket include Veere Di Wedding and Dono, among other Indian productions.",
  },
  {
    question: "Which Bollywood movie was filmed in Krabi?",
    answer:
      "Several Bollywood productions have used Krabi. Kaho Naa... Pyaar Hai, Baar Baar Dekho and Housefull 2 are among the most useful examples for travellers.",
  },
  {
    question: "Which movie made James Bond Island famous?",
    answer: "The Man with the Golden Gun helped make Ko Tapu and Ko Khao Phing Kan famous as James Bond Island.",
  },
  {
    question: "Where was The Beach filmed?",
    answer: "The Beach was filmed in Thailand, with Maya Bay on Phi Phi Leh being its most famous filming location.",
  },
  {
    question: "Where was The Hangover Part II filmed?",
    answer: "The movie was filmed in Bangkok and also used locations in Krabi, including Phulay Bay.",
  },
  {
    question: "Was The Impossible filmed in Khao Lak?",
    answer:
      "Yes. Important filming took place in Khao Lak, Phang Nga, although some major water sequences were recreated elsewhere.",
  },
  {
    question: "Can I visit these movie locations?",
    answer:
      "Many of them can be visited as part of normal Thailand tourism experiences. However, access to beaches, national parks and marine areas can change due to environmental, safety or seasonal regulations. Always check current conditions before booking.",
  },
];

const BlogMoviesFilmedInThailand = () => (
  <BlogArticleLayout
    title="Bollywood to Hollywood: 15 Famous Movies Filmed in Thailand and the Real Places You Can Visit"
    description="Discover famous Bollywood and Hollywood movies filmed in Thailand, from Kaho Naa Pyaar Hai and The Beach to James Bond. Find the real locations and tours to visit them."
    heroImage={heroImg}
    heroAlt="Longtail boat beside limestone cliffs at Phi Phi Island, a famous Thailand movie location"
    author="Yellodae Travel Expert"
    date="Aug 16, 2026"
    readTime="15 min read"
    category="Thailand Travel Guide"
    keywords={[
      "movies filmed in Thailand",
      "Bollywood movies filmed in Thailand",
      "Bollywood shooting locations in Thailand",
      "movies shot in Phuket",
      "movies shot in Krabi",
      "movies shot in Bangkok",
      "Bollywood movies shot in Phuket",
      "Bollywood movies shot in Krabi",
      "Kaho Naa Pyaar Hai shooting location",
      "The Beach filming location Thailand",
      "James Bond Island movie",
      "Thailand movie locations",
      "Thailand filming locations",
      "movie tourism Thailand",
      "Thailand movie tour",
    ]}
    guidesLink="/thailand/destination-guides/"
    guidesLabel="Thailand Smart Guides"
    bodyClassName="text-black"
    inlineImages={[
      { src: imgKrabi, alt: "Longtail boats on a Krabi beach below limestone cliffs" },
      { src: imgSamui, alt: "Palm-lined beach in Koh Samui" },
      { src: imgPhuket, alt: "Phuket island viewpoint over the Andaman Sea" },
      { src: imgBangkok, alt: "Bangkok city skyline at night" },
      { src: imgMayaBay, alt: "Maya Bay on Phi Phi Leh, the filming location of The Beach" },
      { src: imgJamesBond, alt: "Ko Tapu, known worldwide as James Bond Island, in Phang Nga Bay" },
      { src: imgKrabiBeach, alt: "Traveller on a Krabi beach with limestone karsts behind" },
      { src: imgBangkokBridge, alt: "Bangkok bridge and river at twilight" },
    ]}
    cityHub={{ city: "Thailand", thingsToDoLink: PHUKET_THINGS, transfersLink: "/thailand/airport-transfers/" }}
    sections={[
      { type: "paragraph", content: "Have you ever watched a Bollywood or Hollywood movie and wondered, “Where is this beautiful place?”" },
      { type: "paragraph", content: "There is a good chance that the answer could be **Thailand**." },
      { type: "paragraph", content: "From the turquoise islands of Krabi and Phuket to the neon streets of Bangkok, Thailand has been used as a filming location for some of the most memorable Indian and international movies." },
      { type: "paragraph", content: "For Indian travellers, this creates an exciting opportunity." },
      { type: "paragraph", content: "You don't just have to watch your favourite movie." },
      { type: "paragraph", content: "**You can actually visit some of the places where those cinematic moments were created.**" },
      { type: "paragraph", content: "Imagine standing on the same tropical beach that appeared in a Bollywood song, cruising through the islands that became famous because of James Bond, visiting Bangkok locations seen in The Hangover Part II, or looking out over the landscapes that inspired scenes in Star Wars." },
      { type: "paragraph", content: "This style of travel is increasingly known as **film tourism** or **set-jetting** — travelling specifically to experience places seen on screen." },
      { type: "paragraph", content: "And Thailand is perfect for it." },
      { type: "paragraph", content: "In this guide, we'll take you through some of the most famous movies filmed in Thailand, the destinations associated with them, and the **real travel experiences you can book to explore those locations yourself.**" },

      { type: "heading", content: "Why Thailand Is So Popular in Movies" },
      { type: "paragraph", content: "Thailand gives filmmakers something very few countries can provide in such a compact area." },
      { type: "paragraph", content: "Within one country, a production can find:" },
      {
        type: "list",
        items: [
          "Tropical beaches",
          "Limestone cliffs",
          "Islands and lagoons",
          "Dense forests",
          "Modern skyscrapers",
          "Historic temples",
          "Traditional markets",
          "Luxury resorts",
          "Bustling city streets",
          "Remote rural landscapes",
        ],
      },
      { type: "paragraph", content: "For Bollywood filmmakers, Thailand also offers spectacular tropical settings that work particularly well for songs, romantic sequences, destination weddings and action scenes." },
      { type: "paragraph", content: "For Hollywood productions, Thailand can double as locations across Southeast Asia and even fictional worlds." },
      { type: "paragraph", content: "That is why destinations such as **Bangkok**, **Phuket**, **Krabi**, **Phang Nga**, **Khao Lak** and **Koh Samui** keep appearing on screen." },
      { type: "paragraph", content: "And for travellers, this creates a new way of exploring Thailand:" },
      { type: "paragraph", content: "**Don't just visit a destination. Visit the destination you remember from a movie.**" },

      { type: "heading", content: "1. Kaho Naa... Pyaar Hai — Krabi" },
      { type: "subheading", content: "The Bollywood Movie That Introduced a Generation to Thailand" },
      { type: "paragraph", content: "For many Indian travellers, the relationship between Bollywood and Thailand goes back to **Kaho Naa... Pyaar Hai**." },
      { type: "paragraph", content: "Released in 2000, the Hrithik Roshan and Ameesha Patel romantic drama became a phenomenon." },
      { type: "paragraph", content: "But apart from its music and story, the film also gave Indian audiences spectacular tropical scenery." },
      { type: "paragraph", content: "Several sequences were filmed in **Krabi and its surrounding islands**, showcasing the region's turquoise water, limestone formations and beaches." },
      { type: "paragraph", content: "The film's romantic island sequences helped make Thailand's southern coast look like the ultimate Bollywood escape." },
      { type: "subheading", content: "Why visit the real location?" },
      { type: "paragraph", content: "Krabi still looks remarkably cinematic." },
      { type: "paragraph", content: "The limestone cliffs rising dramatically from the Andaman Sea create a landscape that feels almost unreal." },
      { type: "paragraph", content: "For Indian honeymooners and Bollywood fans, this makes Krabi particularly special." },
      { type: "paragraph", content: "You aren't simply visiting another Thai beach. You're visiting scenery that became part of Indian pop culture." },
      { type: "cta-prominent", content: "Recommended experience: Krabi Four Islands / Island-Hopping Tour", link: KRABI_4_ISLANDS, linkText: "Book the Krabi 4 Islands Tour" },
      { type: "paragraph", content: "Look for an itinerary covering destinations such as:" },
      { type: "list", items: ["Phra Nang Beach", "Chicken Island", "Tup Island", "Poda Island"] },
      { type: "paragraph", content: "Depending on the exact tour, the itinerary can vary. You can also compare the [longtail boat version of the 4 Islands Tour](" + KRABI_4_ISLANDS_LONGTAIL + ")." },
      { type: "tip-box", content: "**Content Hook:** “Did you know Hrithik Roshan made Krabi famous for an entire generation of Indian travellers?”" },

      { type: "heading", content: "2. Baar Baar Dekho — Krabi" },
      { type: "subheading", content: "When Bollywood Romance Met Thailand" },
      { type: "paragraph", content: "Remember the dreamy song “Sau Aasmaan” from Baar Baar Dekho? The song features Sidharth Malhotra and Katrina Kaif against spectacular tropical scenery. Thailand was used for part of the film's production, with the song shoot taking place in **Krabi**. The combination of blue water, limestone cliffs and romantic landscapes is exactly the type of scenery that makes Krabi such a popular honeymoon destination." },
      { type: "subheading", content: "Why couples should visit" },
      { type: "paragraph", content: "If you're travelling to Thailand as a couple, the Krabi landscape is almost tailor-made for romantic travel. You can:" },
      {
        type: "list",
        items: [
          "Explore tropical islands",
          "Take a long-tail boat",
          "Swim in clear water",
          "Recreate your own Bollywood-style photographs",
          "Watch the sunset together",
        ],
      },
      { type: "cta-prominent", content: "Krabi Island Tour / Four Islands Tour", link: KRABI_4_ISLANDS_LONGTAIL, linkText: "Book the Krabi Island Tour" },
      { type: "paragraph", content: "This is an excellent product pairing because travellers can experience the same broad landscape that makes the movie's Thailand sequences so memorable. Prefer a quieter lagoon day? Try the [Hong Island Tour](" + KRABI_HONG_ISLAND + ")." },
      { type: "paragraph", content: "**SEO Angle:** Baar Baar Dekho shooting location in Thailand" },

      { type: "heading", content: "3. Housefull 2 — Krabi" },
      { type: "subheading", content: "Bollywood Comedy Meets Tropical Thailand" },
      { type: "paragraph", content: "The Housefull franchise has frequently used exotic international locations to add scale and glamour to its stories." },
      { type: "paragraph", content: "Housefull 2 included filming in Thailand, with **Krabi** providing spectacular resort and beach scenery." },
      { type: "paragraph", content: "One of the interesting aspects of these films is that Thailand doesn't merely appear as a background." },
      { type: "paragraph", content: "The destination becomes part of the visual identity of the movie." },
      { type: "paragraph", content: "The beaches, resorts and tropical landscapes communicate luxury, fun and escape." },
      { type: "cta-prominent", content: "Krabi Beach / Four Islands Tour", link: KRABI_4_ISLANDS, linkText: "Explore the Krabi Four Islands Tour" },
      { type: "paragraph", content: "For travellers interested in movie locations, this can be positioned as: **“Explore the same Krabi scenery that has appeared in Bollywood films.”** Browse more [things to do in Krabi](" + KRABI_THINGS + ")." },

      { type: "heading", content: "4. Student of the Year — Koh Samui" },
      { type: "subheading", content: "Bollywood's Glamorous Side of Thailand" },
      { type: "paragraph", content: "Koh Samui offers a completely different visual identity from Krabi." },
      { type: "paragraph", content: "Instead of dramatic limestone cliffs dominating the landscape, Koh Samui gives filmmakers:" },
      { type: "list", items: ["Palm-lined beaches", "Luxury resorts", "Tropical coastline", "Romantic sunsets"] },
      { type: "paragraph", content: "This makes it particularly attractive for Bollywood songs and glamorous sequences." },
      { type: "paragraph", content: "The song **“Radha”** from **Student of the Year** was filmed at the Banyan Tree property in Koh Samui." },
      { type: "paragraph", content: "For fans of Bollywood's colourful, glamorous aesthetic, Koh Samui is therefore an interesting movie-inspired destination." },
      { type: "cta-prominent", content: "Koh Samui Sightseeing Tour or Ang Thong Marine Park Tour", link: SAMUI_HUB, linkText: "See Koh Samui experiences" },
      { type: "paragraph", content: "For honeymooners, combine the movie-location story with: **Luxury resort + beach + island experience + sunset** — for example the [White Orchid River Cruise](" + SAMUI_CRUISE + ")." },
      { type: "tip-box", content: "**Travel Tip:** Koh Samui is geographically separate from Phuket and should be planned as a separate destination rather than as a Phuket day trip." },

      { type: "heading", content: "5. Veere Di Wedding — Phuket" },
      { type: "subheading", content: "When Phuket Became the Ultimate Girls' Trip" },
      { type: "paragraph", content: "Veere Di Wedding brought a very different energy to Thailand. The film was shot partly in **Phuket**, with resort, beach and celebration sequences giving the destination a glamorous holiday atmosphere. The Phuket portions are especially relevant for Indian travellers because the destination has become increasingly popular for:" },
      {
        type: "list",
        items: [
          "Girls' trips",
          "Bachelor/bachelorette holidays",
          "Couples",
          "Honeymoons",
          "Family holidays",
          "Luxury vacations",
        ],
      },
      { type: "subheading", content: "Why Phuket?" },
      { type: "paragraph", content: "Because Phuket gives you almost everything in one destination. You can have a resort holiday in the morning, go island hopping in the afternoon and enjoy nightlife in the evening." },
      { type: "cta-prominent", content: "Phuket City Tour or Phuket Island / Phi Phi Island Tour", link: PHUKET_CITY, linkText: "Book the Phuket City Tour" },
      { type: "paragraph", content: "For a Veere Di Wedding-style itinerary: **Phuket resort → beach → [island tour](" + PHI_PHI + ") → dinner → nightlife**" },

      { type: "heading", content: "6. Dono — Phuket & Bangkok" },
      { type: "subheading", content: "A Modern Bollywood Destination-Wedding Story" },
      { type: "paragraph", content: "If you're looking for a Bollywood film particularly relevant to today's honeymoon and destination-wedding audience, **Dono** is an excellent example." },
      { type: "paragraph", content: "The 2023 romantic drama takes place around a destination wedding, with Thailand featuring prominently in the story." },
      { type: "paragraph", content: "The film used **Phuket** and **Bangkok** for important sequences." },
      { type: "paragraph", content: "Phuket's resorts and coastal settings provide the romantic holiday atmosphere, while Bangkok gives the story a more urban dimension." },
      { type: "subheading", content: "Why this matters for Indian travellers" },
      { type: "paragraph", content: "Thailand isn't only a honeymoon destination. It is also popular for:" },
      { type: "list", items: ["Destination weddings", "Pre-wedding trips", "Friends' holidays", "Bachelor/bachelorette celebrations"] },
      { type: "cta-prominent", content: "Phuket Honeymoon Activities", link: PHUKET_THINGS, linkText: "Browse Phuket experiences" },
      { type: "paragraph", content: "Potential products:" },
      {
        type: "list",
        items: [
          "[Phuket City Tour](" + PHUKET_CITY + ")",
          "[Phi Phi Island Tour](" + PHI_PHI + ")",
          "[James Bond Island](" + JAMES_BOND + ")",
          "[Airport Transfer](" + PHUKET_TRANSFERS + ")",
          "Romantic experiences",
        ],
      },

      { type: "heading", content: "7. Ready — Bangkok" },
      { type: "subheading", content: "Salman Khan Takes Bollywood to Bangkok" },
      { type: "paragraph", content: "Salman Khan's Ready included filming in **Bangkok**, with locations such as the Ancient City, Rama VIII Bridge and Don Mueang Airport appearing in the production." },
      { type: "paragraph", content: "The Bangkok sequences also demonstrate something interesting about Thailand: it isn't just a beach destination." },
      { type: "paragraph", content: "Bangkok gives filmmakers:" },
      { type: "list", items: ["Modern architecture", "Bridges", "Busy streets", "Historic attractions", "Nightlife"] },
      { type: "paragraph", content: "And this is exactly why **Bangkok** works so well for Indian travellers who want a combination of shopping, food, sightseeing and entertainment." },
      { type: "cta-prominent", content: "Bangkok City Tour", link: BANGKOK_CITY, linkText: "Book the Bangkok City Tour" },
      { type: "paragraph", content: "Potential activity pairing:" },
      {
        type: "list",
        items: [
          "[Bangkok temples](" + BANGKOK_TEMPLES + ")",
          "Grand Palace",
          "Wat Arun",
          "[Chao Phraya River](" + BANGKOK_CRUISE + ")",
          "Chinatown",
          "Shopping",
        ],
      },
      { type: "tip-box", content: "**Content Hook:** “Before you visit Bangkok, revisit Salman Khan's Bangkok.”" },

      { type: "heading", content: "8. Ek Tha Tiger — Bangkok" },
      { type: "subheading", content: "When Bangkok Became an Action Movie" },
      { type: "paragraph", content: "Salman Khan and Katrina Kaif's Ek Tha Tiger was filmed across several international locations, including **Bangkok**." },
      { type: "paragraph", content: "The film's Thailand schedule included action sequences and urban locations. Bangkok's streets, buildings and dense city environment provide an ideal setting for spy and action stories. For fans, exploring Bangkok through this lens changes the way you look at the city. Instead of seeing only temples and shopping malls, you begin noticing:" },
      { type: "list", items: ["Streets", "Bridges", "Buildings", "Rivers", "Night-time cityscapes"] },
      { type: "cta-prominent", content: "Bangkok City & Temple Tour", link: BANGKOK_TEMPLES, linkText: "Book the Bangkok City & Temple Tour" },
      { type: "paragraph", content: "Add: **[Chao Phraya River Cruise](" + BANGKOK_CRUISE + ")** for an experience that combines Bangkok's cinematic cityscape with its cultural side." },

      { type: "heading", content: "9. Dhurandhar — Bangkok" },
      { type: "subheading", content: "A New Chapter in Bollywood's Thailand Connection" },
      { type: "paragraph", content: "Thailand's relationship with Indian cinema isn't limited to older movies. The 2025 action film **Dhurandhar** also used Bangkok for significant filming. Production reportedly constructed a large recreation of Karachi's Lyari neighbourhood in Bangkok. This is fascinating because it shows how Bangkok is not only being used for its real streets. It can also function as a giant production environment where filmmakers recreate completely different cities." },
      { type: "cta-prominent", content: "Bangkok City Tour", link: BANGKOK_CITY, linkText: "Book the Bangkok City Tour" },
      { type: "paragraph", content: "For the traveller: **See Bangkok's real streets after discovering how filmmakers transformed the city for cinema.** This is more of a **cinema + city sightseeing** connection than a literal movie-location tour. Explore more [things to do in Bangkok](" + BANGKOK_THINGS + ")." },

      { type: "heading", content: "10. The Beach — Maya Bay & Phi Phi" },
      { type: "subheading", content: "The Movie That Changed Maya Bay Forever" },
      { type: "paragraph", content: "Now we move from Bollywood to one of the most famous Thailand movies of all time." },
      { type: "paragraph", content: "**The Beach**, starring Leonardo DiCaprio, was filmed extensively in Thailand, including **Maya Bay on Phi Phi Leh**." },
      { type: "paragraph", content: "The movie's hidden-paradise storyline turned Maya Bay into one of the world's most recognisable beaches." },
      { type: "paragraph", content: "Today, millions of travellers associate the destination with the film." },
      { type: "subheading", content: "But there is an important lesson" },
      { type: "paragraph", content: "Maya Bay has also become a powerful example of why tourism needs to be managed carefully." },
      { type: "paragraph", content: "Thailand has introduced closures and visitor-management measures to allow the ecosystem to recover." },
      { type: "paragraph", content: "Rules around swimming, access and seasonal closures can change." },
      { type: "paragraph", content: "So don't plan a Maya Bay visit based solely on an old movie or Instagram Reel. Check current conditions and park regulations before travelling." },
      { type: "cta-prominent", content: "Phi Phi Island Tour from Phuket", link: PHI_PHI, linkText: "Book the Phi Phi Island Tour" },
      { type: "paragraph", content: "This is one of Yellodae's strongest movie-tourism opportunities. You can also choose the [Phi Phi + Maya Bay + Khai Island speedboat tour](" + PHI_PHI_MAYA + ")." },
      { type: "tip-box", content: "**Content Hook:** “You've seen Maya Bay on screen. Now see the real place.”" },

      { type: "heading", content: "11. The Man with the Golden Gun — James Bond Island" },
      { type: "subheading", content: "The Movie That Gave an Island a New Name" },
      { type: "paragraph", content: "Thailand's most famous movie-location story may belong to James Bond." },
      { type: "paragraph", content: "The Man with the Golden Gun was filmed partly in Thailand in the 1970s." },
      { type: "paragraph", content: "The dramatic limestone formations of **Phang Nga Bay**, particularly Ko Tapu and Ko Khao Phing Kan, became associated with James Bond." },
      { type: "paragraph", content: "Ko Tapu is now popularly known around the world as: **James Bond Island.**" },
      { type: "paragraph", content: "This is one of the clearest examples of film tourism transforming a real destination's global identity." },
      { type: "subheading", content: "What can you experience today?" },
      { type: "paragraph", content: "A typical Phang Nga Bay experience can include:" },
      { type: "list", items: ["Boat journey", "James Bond Island", "Limestone cliffs", "Canoeing or kayaking", "Sea caves", "Koh Panyee"] },
      { type: "cta-prominent", content: "James Bond Island Tour from Phuket", link: JAMES_BOND, linkText: "Book the James Bond Island Tour" },
      { type: "paragraph", content: "This should be one of the most prominent product links in the article. Prefer paddling? Choose the [James Bond Island Sea Canoe Tour](" + JAMES_BOND_CANOE + "), or depart from Krabi with the [Krabi James Bond Island Tour](" + JAMES_BOND_KRABI + ")." },

      { type: "heading", content: "12. Tomorrow Never Dies — Bangkok & Phang Nga" },
      { type: "subheading", content: "James Bond Returns to Thailand" },
      { type: "paragraph", content: "James Bond didn't stop with The Man with the Golden Gun." },
      { type: "paragraph", content: "Tomorrow Never Dies also used Thailand as a filming location." },
      { type: "paragraph", content: "Bangkok was used to represent parts of Vietnam, while **Phang Nga Bay** stood in for Vietnam's Ha Long Bay." },
      { type: "paragraph", content: "This is a perfect example of how filmmakers use Thailand's landscapes to represent other parts of Southeast Asia." },
      { type: "cta-prominent", content: "Bangkok City Tour", link: BANGKOK_CITY, linkText: "Book the Bangkok City Tour" },
      { type: "cta-prominent", content: "James Bond Island / Phang Nga Bay Tour", link: JAMES_BOND, linkText: "Book the Phang Nga Bay Tour" },
      { type: "paragraph", content: "This can be marketed as a two-part movie experience: **James Bond in Bangkok + James Bond in Phang Nga**" },

      { type: "heading", content: "13. The Hangover Part II — Bangkok & Krabi" },
      { type: "subheading", content: "Bangkok After Dark" },
      { type: "paragraph", content: "If you're looking for a movie that puts Bangkok directly into the spotlight, The Hangover Part II is one of the best examples." },
      { type: "paragraph", content: "The film was shot in Bangkok and Krabi." },
      { type: "paragraph", content: "The spectacular **Lebua at State Tower** became one of the movie's most recognisable locations." },
      { type: "paragraph", content: "The production also filmed at **Phulay Bay in Krabi**, which served as the wedding hotel." },
      { type: "paragraph", content: "This gives travellers two completely different experiences:" },
      { type: "subheading", content: "Bangkok" },
      { type: "list", items: ["Skyline", "Nightlife", "Street food", "Shopping"] },
      { type: "subheading", content: "Krabi" },
      { type: "list", items: ["Beaches", "Limestone cliffs", "Andaman Sea", "Luxury resorts"] },
      { type: "cta-prominent", content: "Bangkok City Tour", link: BANGKOK_CITY, linkText: "Book the Bangkok City Tour" },
      { type: "cta-prominent", content: "Krabi Island Tour", link: KRABI_4_ISLANDS, linkText: "Book the Krabi Island Tour" },
      { type: "paragraph", content: "This is an excellent opportunity to sell a **Bangkok + Krabi itinerary**." },

      { type: "heading", content: "14. The Impossible — Khao Lak" },
      { type: "subheading", content: "A Very Different Kind of Movie Tourism" },
      { type: "paragraph", content: "Not every movie location should be presented simply as a glamorous holiday destination." },
      { type: "paragraph", content: "The Impossible is based on the real experience of a family caught in the **2004 Indian Ocean tsunami**." },
      { type: "paragraph", content: "The movie filmed important scenes in **Khao Lak, Phang Nga**, including the Khao Lak Orchid Beach Resort area and other locations connected to the disaster." },
      { type: "paragraph", content: "This makes Khao Lak a destination with a much more emotional film connection." },
      { type: "subheading", content: "Why visit Khao Lak?" },
      { type: "paragraph", content: "Today, Khao Lak is known for its:" },
      { type: "list", items: ["Peaceful beaches", "Resorts", "Nature", "Sunsets", "Marine conservation experiences"] },
      { type: "paragraph", content: "The destination offers a quieter alternative to Phuket." },
      { type: "cta-prominent", content: "Khao Lak + Phang Nga Experience", link: JAMES_BOND_CANOE, linkText: "Explore Phang Nga Bay experiences" },
      { type: "paragraph", content: "This section should be written respectfully. The movie is not simply a reason to visit. Instead, use it to introduce the area's history before showing what Khao Lak is like today. Plan the trip with [Phuket airport transfers](" + PHUKET_TRANSFERS + ")." },

      { type: "heading", content: "15. Star Wars: Episode III — Krabi" },
      { type: "subheading", content: "Did You Know Krabi Went to a Galaxy Far, Far Away?" },
      { type: "paragraph", content: "This one surprises many travellers." },
      { type: "paragraph", content: "The spectacular landscapes of southern Thailand have been used to create fictional worlds." },
      { type: "paragraph", content: "Krabi's dramatic limestone scenery was associated with the landscapes used to represent **Kashyyyk**, the Wookiee homeworld, in Star Wars: Episode III – Revenge of the Sith." },
      { type: "paragraph", content: "Of course, travellers aren't going to find Wookiees waiting on the beach." },
      { type: "paragraph", content: "But the real Krabi landscape is impressive enough." },
      { type: "cta-prominent", content: "Krabi Four Islands Tour", link: KRABI_4_ISLANDS, linkText: "Book the Krabi Four Islands Tour" },
      { type: "paragraph", content: "Especially:" },
      { type: "list", items: ["Poda Island", "Phra Nang", "Railay", "Surrounding limestone formations"] },
      { type: "tip-box", content: "**Content Hook:** “Before you visit Krabi, see where Thailand became a Star Wars planet.”" },

      { type: "heading", content: "16. Bridget Jones: The Edge of Reason — Phuket & Bangkok" },
      { type: "subheading", content: "Phuket's Romantic Side on Screen" },
      { type: "paragraph", content: "Bridget Jones: The Edge of Reason included Thailand filming, with **Phuket** and **Bangkok** among the locations." },
      { type: "paragraph", content: "Phuket's beaches and resorts provided the perfect visual setting for the film's tropical escape." },
      { type: "paragraph", content: "This is another example of how Thailand has repeatedly been used to represent: **romance + luxury + escape.**" },
      { type: "cta-prominent", content: "Phuket City Tour or Phuket Beach & Island Experience", link: PHUKET_CITY, linkText: "Book the Phuket City Tour" },
      { type: "paragraph", content: "For couples, this can be positioned as: “Experience the Phuket side of Thailand that filmmakers have loved for decades.”" },

      { type: "heading", content: "Thailand's Movie Map: Where Should You Go?" },
      { type: "paragraph", content: "If you're a movie fan planning a Thailand holiday, here's the easiest way to organize your trip." },
      { type: "subheading", content: "Phuket" },
      { type: "paragraph", content: "Movies:" },
      { type: "list", items: ["The Beach", "Veere Di Wedding", "Dono", "Bridget Jones: The Edge of Reason", "The Hangover Part II"] },
      { type: "paragraph", content: "**Book:**" },
      {
        type: "list",
        items: [
          "[Phi Phi Island Tour](" + PHI_PHI + ")",
          "[Phuket City Tour](" + PHUKET_CITY + ")",
          "[James Bond Island Tour](" + JAMES_BOND + ")",
          "[Phuket Airport Transfer](" + PHUKET_TRANSFERS + ")",
        ],
      },
      { type: "subheading", content: "Krabi" },
      { type: "paragraph", content: "Movies:" },
      { type: "list", items: ["Kaho Naa... Pyaar Hai", "Baar Baar Dekho", "Housefull 2", "The Hangover Part II", "Star Wars: Episode III"] },
      { type: "paragraph", content: "**Book:**" },
      {
        type: "list",
        items: [
          "[Krabi Four Islands Tour](" + KRABI_4_ISLANDS + ")",
          "[Krabi Island-Hopping](" + KRABI_HONG_ISLAND + ")",
          "[Krabi Airport/Hotel Transfer](" + KRABI_TRANSFERS + ")",
        ],
      },
      { type: "subheading", content: "Khao Lak" },
      { type: "paragraph", content: "Movie:" },
      { type: "list", items: ["The Impossible"] },
      { type: "paragraph", content: "**Book:**" },
      {
        type: "list",
        items: [
          "Khao Lak sightseeing / nature experiences",
          "[Phang Nga experiences](" + JAMES_BOND_CANOE + ")",
        ],
      },
      { type: "subheading", content: "Bangkok" },
      { type: "paragraph", content: "Movies:" },
      { type: "list", items: ["The Hangover Part II", "Ready", "Ek Tha Tiger", "Dhurandhar", "Tomorrow Never Dies", "The Beach"] },
      { type: "paragraph", content: "**Book:**" },
      {
        type: "list",
        items: [
          "[Bangkok City Tour](" + BANGKOK_CITY + ")",
          "[Bangkok Temple Tour](" + BANGKOK_TEMPLES + ")",
          "[Chao Phraya River Cruise](" + BANGKOK_CRUISE + ")",
          "[Bangkok Airport Transfer](" + BANGKOK_TRANSFERS + ")",
        ],
      },
      { type: "subheading", content: "Koh Samui" },
      { type: "paragraph", content: "Movie:" },
      { type: "list", items: ["Student of the Year"] },
      { type: "paragraph", content: "Book:" },
      {
        type: "list",
        items: [
          "[Koh Samui Sightseeing](" + SAMUI_HUB + ")",
          "Ang Thong Marine Park",
          "[Koh Samui Island Experiences](" + SAMUI_CRUISE + ")",
        ],
      },

      { type: "heading", content: "Why Bollywood Makes Thailand Even More Special for Indian Travellers" },
      { type: "paragraph", content: "For an Indian traveller, a destination can feel completely different when you've already seen it on screen." },
      { type: "paragraph", content: "You've heard the song. You've watched the actors walk along the beach. You've seen the dramatic landscape behind the romantic scene." },
      { type: "paragraph", content: "And then you arrive in Thailand. Suddenly, the destination feels familiar." },
      { type: "paragraph", content: "That is the power of **film tourism**." },
      { type: "paragraph", content: "It turns: “I want to visit Thailand.” into: “I want to stand where my favourite movie was filmed.”" },
      { type: "paragraph", content: "This is particularly powerful for Indian travellers because Bollywood has been using Thailand's landscapes for decades." },
      { type: "paragraph", content: "From Hrithik Roshan's tropical romance in Kaho Naa... Pyaar Hai to Katrina Kaif and Sidharth Malhotra in Baar Baar Dekho, Salman Khan's Bangkok sequences, Veere Di Wedding's Phuket celebrations and the destination-wedding setting of Dono, Thailand has repeatedly appeared in Indian cinema." },

      { type: "heading", content: "How to Plan a Bollywood Movie-Inspired Thailand Trip" },
      { type: "paragraph", content: "If you're travelling from India and want to turn this into a real itinerary, you don't need to visit every filming location. Choose a region." },
      { type: "subheading", content: "Option 1: Phuket + Phi Phi" },
      { type: "paragraph", content: "Best for:" },
      { type: "list", items: ["Couples", "Beach lovers", "The Beach fans", "Island hopping"] },
      { type: "paragraph", content: "**Suggested experiences:**" },
      {
        type: "list",
        items: [
          "**Day 1:** Phuket arrival",
          "**Day 2:** [Phi Phi Island](" + PHI_PHI + ")",
          "**Day 3:** [Phuket City Tour](" + PHUKET_CITY + ")",
          "**Day 4:** [James Bond Island](" + JAMES_BOND + ")",
          "**Day 5:** Beach + departure",
        ],
      },
      { type: "subheading", content: "Option 2: Krabi Bollywood Trail" },
      { type: "paragraph", content: "Best for:" },
      { type: "list", items: ["Bollywood fans", "Couples", "Photography lovers"] },
      { type: "paragraph", content: "**Suggested experiences:**" },
      {
        type: "list",
        items: [
          "**Day 1:** Krabi arrival",
          "**Day 2:** [Four Islands Tour](" + KRABI_4_ISLANDS + ")",
          "**Day 3:** Railay + Phra Nang",
          "**Day 4:** Relaxation",
        ],
      },
      { type: "paragraph", content: "This lets you experience landscapes associated with several Bollywood productions." },
      { type: "subheading", content: "Option 3: Bangkok + Phuket" },
      { type: "paragraph", content: "Best for: movie fans, city lovers and beach lovers." },
      { type: "paragraph", content: "**Suggested itinerary:**" },
      { type: "paragraph", content: "**Bangkok** → Ready → Ek Tha Tiger → The Hangover Part II → Tomorrow Never Dies" },
      { type: "paragraph", content: "Then: **Phuket** → The Beach → Veere Di Wedding → Dono → James Bond Island" },
      { type: "paragraph", content: "This creates an incredible **Bollywood + Hollywood Thailand itinerary**." },

      { type: "heading", content: "Turn Your Thailand Holiday Into Your Own Movie" },
      { type: "paragraph", content: "You don't need to recreate a movie scene perfectly. You can create your own version." },
      { type: "paragraph", content: "Stand on a Krabi beach. Take a photograph at Maya Bay. Cruise through Phang Nga Bay. Walk through Bangkok at night. Watch the sunset in Phuket." },
      { type: "paragraph", content: "Then take home your own story." },
      { type: "paragraph", content: "Because the best part of film tourism isn't finding the exact camera angle. It's realizing: **The place you saw on screen is real.**" },
      { type: "paragraph", content: "And now you're standing there." },

      { type: "heading", content: "Frequently Asked Questions" },
      { type: "subheading", content: "Which Bollywood movie was filmed in Thailand first?" },
      { type: "paragraph", content: "Kaho Naa... Pyaar Hai is one of the landmark early Bollywood productions associated with Thailand, particularly Krabi, and helped establish the country's tropical locations in the imagination of Indian audiences." },
      { type: "subheading", content: "Which Bollywood movies were filmed in Phuket?" },
      { type: "paragraph", content: "Films associated with Phuket include Veere Di Wedding and Dono, among other Indian productions." },
      { type: "subheading", content: "Which Bollywood movie was filmed in Krabi?" },
      { type: "paragraph", content: "Several Bollywood productions have used Krabi. Kaho Naa... Pyaar Hai, Baar Baar Dekho and Housefull 2 are among the most useful examples for travellers." },
      { type: "subheading", content: "Which movie made James Bond Island famous?" },
      { type: "paragraph", content: "The Man with the Golden Gun helped make Ko Tapu and Ko Khao Phing Kan famous as James Bond Island." },
      { type: "subheading", content: "Where was The Beach filmed?" },
      { type: "paragraph", content: "The Beach was filmed in Thailand, with Maya Bay on Phi Phi Leh being its most famous filming location." },
      { type: "subheading", content: "Where was The Hangover Part II filmed?" },
      { type: "paragraph", content: "The movie was filmed in Bangkok and also used locations in Krabi, including Phulay Bay." },
      { type: "subheading", content: "Was The Impossible filmed in Khao Lak?" },
      { type: "paragraph", content: "Yes. Important filming took place in Khao Lak, Phang Nga, although some major water sequences were recreated elsewhere." },
      { type: "subheading", content: "Can I visit these movie locations?" },
      { type: "paragraph", content: "Many of them can be visited as part of normal Thailand tourism experiences. However, access to beaches, national parks and marine areas can change due to environmental, safety or seasonal regulations. Always check current conditions before booking." },

      { type: "heading", content: "Final Thoughts" },
      { type: "paragraph", content: "Thailand has been a backdrop for romance, comedy, action, adventure and even science fiction." },
      { type: "paragraph", content: "But for Indian travellers, the connection with Bollywood makes the experience even more personal." },
      { type: "paragraph", content: "You may recognize the beaches from Kaho Naa... Pyaar Hai. You may remember the tropical romance of Baar Baar Dekho." },
      { type: "paragraph", content: "You may recognize Phuket from Veere Di Wedding. You may see Bangkok differently after watching Ready or Ek Tha Tiger." },
      { type: "paragraph", content: "And when you finally reach Maya Bay or James Bond Island, you may suddenly realize: **“I've seen this place before.”**" },
      { type: "paragraph", content: "Only this time, you're not watching it on a screen. You're there." },
      { type: "paragraph", content: "**Plan your own movie-inspired Thailand journey with Yellodae Trails.**" },
      { type: "paragraph", content: "Explore Thailand's **activities**, **island tours**, **city tours** and **airport/hotel transfers** and build an itinerary around the places you've always wanted to see." },
      { type: "paragraph", content: "**Your favourite movie gave you the destination. Now it's your turn to create the story.**" },

      { type: "heading", content: "The Yellodae Product Mapping" },
      {
        type: "table",
        tableHeaders: ["Movie", "Destination", "Yellodae activity to attach"],
        tableRows: [
          ["Kaho Naa... Pyaar Hai", "Krabi", "[Krabi 4 Islands Tour](" + KRABI_4_ISLANDS + ")"],
          ["Baar Baar Dekho", "Krabi", "[Krabi Island Tour](" + KRABI_4_ISLANDS_LONGTAIL + ")"],
          ["Housefull 2", "Krabi", "[Krabi 4 Islands / Beach Tour](" + KRABI_4_ISLANDS + ")"],
          ["Student of the Year", "Koh Samui", "[Koh Samui Sightseeing / Ang Thong](" + SAMUI_HUB + ")"],
          ["Veere Di Wedding", "Phuket", "[Phuket City / Phi Phi Tour](" + PHUKET_CITY + ")"],
          ["Dono", "Phuket + Bangkok", "[Phuket Honeymoon Activities](" + PHUKET_THINGS + ") / [Bangkok City Tour](" + BANGKOK_CITY + ")"],
          ["Ready", "Bangkok", "[Bangkok City Tour](" + BANGKOK_CITY + ")"],
          ["Ek Tha Tiger", "Bangkok", "[Bangkok City + River Cruise](" + BANGKOK_CRUISE + ")"],
          ["Dhurandhar", "Bangkok", "[Bangkok City Tour](" + BANGKOK_CITY + ")"],
          ["The Beach", "Maya Bay / Phi Phi", "[Phi Phi Island Tour](" + PHI_PHI + ")"],
          ["The Man with the Golden Gun", "Phang Nga", "[James Bond Island Tour](" + JAMES_BOND + ")"],
          ["Tomorrow Never Dies", "Bangkok + Phang Nga", "[Bangkok](" + BANGKOK_CITY + ") + [James Bond Island](" + JAMES_BOND + ")"],
          ["The Hangover Part II", "Bangkok + Krabi", "[Bangkok City](" + BANGKOK_CITY + ") + [Krabi Tour](" + KRABI_4_ISLANDS + ")"],
          ["The Impossible", "Khao Lak", "[Khao Lak / Phang Nga Experience](" + JAMES_BOND_CANOE + ")"],
          ["Star Wars III", "Krabi", "[Krabi 4 Islands Tour](" + KRABI_4_ISLANDS + ")"],
          ["Bridget Jones 2", "Phuket + Bangkok", "[Phuket City / Beach Experience](" + PHUKET_CITY + ")"],
        ],
      },
      { type: "paragraph", content: "**Disclaimer:** Every individual attraction is not exactly the filming location and evidence only establishes that the province/destination was used. For example, Kaho Naa... Pyaar Hai has conflicting secondary sources about the exact Krabi islands used for particular sequences. The article above therefore deliberately says “Krabi and surrounding islands” rather than making an unnecessarily precise claim. For the Bollywood section, current location references support the Thailand connections for Kaho Naa... Pyaar Hai, Dono, Veere Di Wedding, Ek Tha Tiger, Ready and Baar Baar Dekho." },
    ]}
    relatedActivities={[
      { title: "Krabi 4 Islands Tour by Speedboat", link: KRABI_4_ISLANDS },
      { title: "Full Day Phi Phi Island Tour with Transfer", link: PHI_PHI },
      { title: "James Bond Island Speedboat Tour", link: JAMES_BOND },
      { title: "Phuket City Tour with Tiger Kingdom", link: PHUKET_CITY },
      { title: "Three Temples Bangkok City Tour", link: BANGKOK_CITY },
      { title: "Chao Phraya Princess Dinner Cruise", link: BANGKOK_CRUISE },
    ]}
  >
    <FaqJsonLd faqs={faqs} />
  </BlogArticleLayout>
);

export default BlogMoviesFilmedInThailand;
