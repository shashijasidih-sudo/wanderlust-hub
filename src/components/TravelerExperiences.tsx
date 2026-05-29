import { MessageCircle, MapPin, Plane } from "lucide-react";
import tigerPark from "@/assets/travelers/tiger-park-phuket.jpg";
import phuketTemple from "@/assets/travelers/phuket-temple-family.jpg";
import phiPhiBoat from "@/assets/travelers/phi-phi-boat-family.jpg";
import phuketPickupBhutani from "@/assets/travelers/phuket-airport-pickup-bhutani.jpg";
import phiPhiCouple from "@/assets/travelers/phi-phi-speedboat-couple.jpg";
import krabiEmerald from "@/assets/travelers/krabi-emerald-pool-family.jpg";
import phuketPatong from "@/assets/travelers/phuket-patong-beach-family.jpg";
import luxuryVan from "@/assets/travelers/thailand-luxury-van-transfer.jpg";
import phiPhiFerry from "@/assets/travelers/phi-phi-ferry-father-daughter.jpg";
import dubaiBurjFamily from "@/assets/travelers/dubai-burj-khalifa-family.jpg";
import dubaiGiraffe from "@/assets/travelers/dubai-giraffe-safari.jpg";
import dubaiFrame from "@/assets/travelers/dubai-frame-family.jpg";
import dubaiBurjArab from "@/assets/travelers/dubai-burj-al-arab-family.jpg";
import dubaiDhow1 from "@/assets/travelers/dubai-dhow-cruise-night.jpg";
import dubaiDhow2 from "@/assets/travelers/dubai-marina-dhow-cruise.jpg";
import dubaiBurjNight from "@/assets/travelers/dubai-burj-khalifa-night.jpg";
import dubaiBeach from "@/assets/travelers/dubai-jbr-beach-sunset.jpg";
import phuketMittalPickup from "@/assets/travelers/phuket-airport-pickup-mittal.jpg";
import phuketMittalTransfer from "@/assets/travelers/phuket-private-transfer-mittal.jpg";
import phiPhiHarbourHotel from "@/assets/travelers/phi-phi-harbour-view-hotel.jpg";
import bangkokVanPickup from "@/assets/travelers/bangkok-van-pickup-family.jpg";
import streetFoodCrepe from "@/assets/travelers/thailand-street-food-crepe.jpg";
import mangoStickyRice from "@/assets/travelers/thailand-mango-sticky-rice.jpg";
import pattayaAlangka from "@/assets/travelers/pattaya-alangka-cruise-couple.jpg";
import phuketArrivalSolo from "@/assets/travelers/phuket-airport-arrival-solo.jpg";
import phuketWelcomeTraveler from "@/assets/travelers/phuket-airport-welcome-traveler.jpg";
import alangkaZone2 from "@/assets/travelers/alangka-cruise-zone-2-boarding.jpg";
import bangkokGoldenBuddha from "@/assets/travelers/bangkok-golden-buddha-couple.jpg";
import thaiFootMassage from "@/assets/travelers/thai-foot-massage-experience.jpg";

type Item = {
  src: string;
  caption: string;
  location: string;
  tag: "Pickup" | "Activity" | "Itinerary" | "Confirmation";
};

const items: Item[] = [
  { src: phuketMittalPickup, caption: "Mittal family received at Phuket Airport with name placard — smooth, on-time pickup", location: "Phuket Airport", tag: "Pickup" },
  { src: dubaiBurjFamily, caption: "Mehta family lighting up the night at Burj Khalifa — itinerary perfectly timed for the fountain show", location: "Downtown Dubai", tag: "Itinerary" },
  { src: phiPhiCouple, caption: "Romantic Phi Phi speedboat ride for our honeymoon guests — life jackets on, smiles wider than the sea", location: "Phi Phi Islands, Phuket", tag: "Activity" },
  { src: phuketPickupBhutani, caption: "Mrs. Arushi Bhutani welcomed at Phuket International — airport-to-Centara Anda Dhevi transfer confirmed", location: "Phuket International Airport", tag: "Confirmation" },
  { src: luxuryVan, caption: "Private VIP minivan transfer arranged for a family of three — snacks, comfort and 5-star service", location: "Thailand intercity transfer", tag: "Pickup" },
  { src: dubaiFrame, caption: "Family photo at Dubai Frame — entry passes and timing coordinated end-to-end", location: "Zabeel Park, Dubai", tag: "Itinerary" },
  { src: tigerPark, caption: "Unforgettable Tiger Park encounter in Phuket — booked, ticketed and confirmed via WhatsApp", location: "Tiger Park, Phuket", tag: "Activity" },
  { src: dubaiDhow1, caption: "Marina Dhow Cruise boarding confirmed for our Indian family — sunset sailing in style", location: "Dubai Marina", tag: "Confirmation" },
  { src: phuketTemple, caption: "Family selfie at a Phuket hilltop temple — full itinerary mapped, no rush, no stress", location: "Phuket", tag: "Itinerary" },
  { src: dubaiGiraffe, caption: "Up close with giraffes at Dubai Safari Park — kids loved every minute", location: "Dubai Safari Park", tag: "Activity" },
  { src: krabiEmerald, caption: "Krabi Emerald Pool day trip — guide, transfers and entry tickets sorted in one booking", location: "Krabi, Thailand", tag: "Activity" },
  { src: dubaiBurjArab, caption: "Iconic Burj Al Arab photo stop — coordinated as part of our Dubai city tour itinerary", location: "Jumeirah, Dubai", tag: "Itinerary" },
  { src: phiPhiBoat, caption: "Phi Phi ferry transfer for our family of three — comfortable seats, picture-perfect skies", location: "Andaman Sea, Thailand", tag: "Activity" },
  { src: phuketMittalTransfer, caption: "Mr. Himanshu Kumar Mittal — private cab confirmation captured at Phuket Airport, 21 Sep 8:03 PM", location: "Phuket → Kata Beach", tag: "Confirmation" },
  { src: dubaiDhow2, caption: "Evening dhow cruise dinner all set — buffet, music and Dubai Creek lights included", location: "Dubai Creek", tag: "Activity" },
  { src: phuketPatong, caption: "Patong Beach photo stop — Phuket sightseeing day perfectly paced for kids and parents", location: "Patong, Phuket", tag: "Itinerary" },
  { src: dubaiBurjNight, caption: "Burj Khalifa night view from the fountain plaza — At The Top tickets pre-booked", location: "Downtown Dubai", tag: "Activity" },
  { src: phiPhiFerry, caption: "Father–daughter moment on the Phi Phi ferry deck — every transfer pre-arranged", location: "Phi Phi route, Thailand", tag: "Pickup" },
  { src: dubaiBeach, caption: "Sunset stroll at JBR Beach — chill evening slotted into the Dubai itinerary", location: "JBR, Dubai", tag: "Itinerary" },
];

const tagIcon = (t: Item["tag"]) => {
  if (t === "Pickup" || t === "Confirmation") return <Plane className="h-3 w-3" />;
  if (t === "Itinerary") return <MapPin className="h-3 w-3" />;
  return <MessageCircle className="h-3 w-3" />;
};

const TravelerExperiences = () => {
  { src: dubaiBeach, caption: "Sunset stroll at JBR Beach — chill evening slotted into the Dubai itinerary", location: "JBR, Dubai", tag: "Itinerary" },
  { src: phiPhiHarbourHotel, caption: "Check-in confirmed at Phi Phi Harbour View Hotel — stay, transfers and island tour booked together", location: "Phi Phi Island, Thailand", tag: "Confirmation" },
  { src: bangkokVanPickup, caption: "Happy family received in Bangkok — private VIP van pickup arranged hotel-to-hotel", location: "Bangkok, Thailand", tag: "Pickup" },
  { src: streetFoodCrepe, caption: "Street-food crepe tasting in Phuket — local food walk added to the itinerary on guest request", location: "Phuket Night Market", tag: "Activity" },
  { src: mangoStickyRice, caption: "Authentic Thai mango sticky rice — the must-try dessert moment on our food trail", location: "Thailand street market", tag: "Activity" },
  { src: pattayaAlangka, caption: "Couple all set to board the Alangka Cruise in Pattaya — dinner cruise tickets pre-booked", location: "Pattaya Beach", tag: "Confirmation" },
  { src: phuketArrivalSolo, caption: "Solo traveler welcomed at Phuket International — meet & greet plus private cab handled by our team", location: "Phuket Airport", tag: "Pickup" },
  { src: phuketWelcomeTraveler, caption: "Smooth arrival at Phuket Airport — luggage trolley, customs and onward transfer all coordinated", location: "Phuket International Airport", tag: "Pickup" },
  { src: alangkaZone2, caption: "Boarding passes for Alangka Cruise Zone 2 — confirmed seats and easy boarding in Pattaya", location: "Pattaya Pier", tag: "Confirmation" },
  { src: bangkokGoldenBuddha, caption: "Blessings at Bangkok's Golden Buddha (Wat Traimit) — temple circuit thoughtfully planned", location: "Wat Traimit, Bangkok", tag: "Itinerary" },
  { src: thaiFootMassage, caption: "Traditional Thai foot massage session — wellness add-on slotted right after the city tour", location: "Bangkok wellness studio", tag: "Activity" },
];

const tagIcon = (t: Item["tag"]) => {
  if (t === "Pickup" || t === "Confirmation") return <Plane className="h-3 w-3" />;
  if (t === "Itinerary") return <MapPin className="h-3 w-3" />;
  return <MessageCircle className="h-3 w-3" />;
};

const TravelerExperiences = () => {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
            <MessageCircle className="h-3.5 w-3.5" /> Real moments, real guests
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Real Traveler Experiences</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Airport pickups, activity bookings, itinerary coordination and happy WhatsApp moments — straight from our Indian families travelling across Thailand, Dubai &amp; Singapore.
          </p>
        </div>

        <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
          {items.map((item, i) => (
            <figure
              key={i}
              className="mb-3 md:mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide bg-background/90 backdrop-blur text-primary px-2 py-1 rounded-full shadow">
                  {tagIcon(item.tag)} {item.tag}
                </span>
              </div>
              <figcaption className="p-3 md:p-3.5">
                <p className="text-xs md:text-sm text-foreground leading-snug">{item.caption}</p>
                <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {item.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Photos shared by happy Yellodae Trails guests. Published with permission.
        </p>
      </div>
    </section>
  );
};

export default TravelerExperiences;
