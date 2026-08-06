import pattayaBoatTour from "@/assets/floating-market-daylight-1.jpg";
import pattayaSailboat from "@/assets/pattaya-sailboat-1.jpg";
import pattayaBoatsBeach from "@/assets/pattaya-boats-beach-1.jpg";
import pattayaTropicalBeach from "@/assets/pattaya-tropical-beach-1.jpg";
import pattayaSpeedboat from "@/assets/pattaya-speedboat-1.jpg";
import pattayaIslandsBoats from "@/assets/floating-market-daylight-2.webp";
import alcazarShow1 from "@/assets/alcazar-show-1.jpg";
import pattayaNightlife1 from "@/assets/pattaya-nightlife-1.webp";
import pattayaNightlife2 from "@/assets/pattaya-nightlife-2.jpg";
import muayThai1 from "@/assets/muay-thai-1.jpg";
import imagine79Show1 from "@/assets/imagine79-show-1.webp";
import show69Pattaya1 from "@/assets/show69-pattaya-1.webp";
import show89Pattaya1 from "@/assets/show89-pattaya-1.webp";
import bigeyeShowPattaya1 from "@/assets/bigeye-show-pattaya-1.webp";

export interface PattayaActivity {
  title: string;
  price: number;
  image: string;
  slug: string;
}

export const regularActivities: PattayaActivity[] = [
  { title: "Discovery Pattaya City Tours with Floating Market - Join Tour", price: 2175, image: pattayaBoatTour, slug: "/thailand/pattaya/pattaya-floating-market-tour/" },
  { title: "Pattaya City Tour: Big Buddha Hill, Gems Museum and Gallery with Round Trip Transfer", price: 1208, image: pattayaSailboat, slug: "/thailand/pattaya/big-buddha-gems-gallery-tour/" },
  { title: "Coral Island Join Tour with Indian Lunch", price: 603.75, image: pattayaBoatsBeach, slug: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch/" },
  { title: "Nong Nooch Admission Fees with Show, Lunch and Round Trip Transfer from Pattaya", price: 3622.5, image: pattayaTropicalBeach, slug: "/thailand/pattaya/nong-nooch-tropical-garden-tickets/" },
  { title: "Pattaya Dolphinarium Admission Ticket with Transfer", price: 3650, image: pattayaSpeedboat, slug: "/thailand/pattaya/pattaya-dolphinarium-show-tickets/" },
  { title: "Muay Thai Pattaya Admission Ticket", price: 4830, image: muayThai1, slug: "/thailand/pattaya/muay-thai-boxing-show-pattaya/" },
  { title: "Pattaya Floating Market Guided Tour with Transfer", price: 3140, image: pattayaIslandsBoats, slug: "/thailand/pattaya/pattaya-floating-market-guided-tour/" },
  { title: "Lost in Nightlight - A Walking, Drinking, and Food Tasting Experience at Pattaya's Red Light District", price: 3745, image: pattayaNightlife1, slug: "/thailand/pattaya/pattaya-nightlife-walking-tour/" },
  { title: "Sunset Club and Pub Crawling Experience at Drinking Street in Pattaya", price: 6280, image: pattayaNightlife2, slug: "/thailand/pattaya/pattaya-pub-crawl-night-tour/" },
];

export const adultShowActivities: PattayaActivity[] = [
  { title: "Alcazar Show Pattaya Ticket with Transfer", price: 2420, image: alcazarShow1, slug: "/thailand/pattaya/alcazar-cabaret-show-with-transfer/" },
  { title: "Imagine 79 Show Pattaya with Transfer", price: 4000, image: imagine79Show1, slug: "/thailand/pattaya/79-show-pattaya-with-transfer/" },
  { title: "Show 69 in Pattaya with Transfer", price: 3800, image: show69Pattaya1, slug: "/thailand/pattaya/69-show-pattaya-with-transfer/" },
  { title: "Show 89 in Pattaya with Transfer", price: 6000, image: show89Pattaya1, slug: "/thailand/pattaya/89-show-pattaya-with-transfer/" },
  { title: "Big Eye Show in Pattaya with Transfer", price: 6000, image: bigeyeShowPattaya1, slug: "/thailand/pattaya/99-show-pattaya-big-eye-with-transfer/" },
];

export const allPattayaActivities: PattayaActivity[] = [...regularActivities, ...adultShowActivities];

export const pattayaCategories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences",
];
