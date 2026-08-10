import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { TigerKingdomSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { tigerKingdomFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import tiger1 from "@/assets/tiger-1.webp";
import bigBuddha from "@/assets/phuket-big-buddha-1.webp";
import watChalong from "@/assets/phuket-wat-chalong-1.webp";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketNightMarket from "@/assets/phuket-night-market-1.webp";
import elephant1 from "@/assets/elephant-1.jpg";

const timings = [
  "Morning: 07:30 – 13:00",
  "Late Morning: 10:00 – 16:00",
  "Afternoon: 13:00 – 18:30",
];

const itinerarySteps = [
  "Meet the adorable giant cats and have a fun time with them, and get a chance to click interesting pictures with them!",
  "Make amazing memories with the elephants and do not forget to capture these memories with your camera.",
  "One of the must-see locations in Phuket is the Big Buddha.",
  "Do not miss the jaw-dropping panoramic view from the Big Buddha Viewpoint.",
  "Worship and pay respect while visiting the Chalong Temple.",
  "The Perfect spot for the Cashew nut lover is the Cashew Nut Factory in Phuket.",
  "A visit to the honey farm will give insights into how honey is created.",
  "Catch a coffee break and relax!",
  "Want to bring back some souvenirs? The next stop is the perfect place for you to get them",
];

const TourItinerarySection = () => (
  <div className="min-w-0">
    <h3 className="text-sm md:text-base font-semibold mb-2 text-foreground">Tour Itinerary</h3>
    <p className="text-sm md:text-base text-muted-foreground mb-2">
      There are three timings available for this tour:
    </p>
    <ul className="space-y-1 mb-3">
      {timings.map((t) => (
        <li key={t} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
          <span className="text-primary mt-1 text-xs">•</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
    <p className="text-sm md:text-base text-muted-foreground">
      Visitors aged 17 and up will get to meet one size tiger (Smallest, Small, Medium, or Big Tiger).
    </p>
    <p className="text-sm md:text-base text-muted-foreground mb-3">
      Children aged from 4–16 are allowed to visit the smallest tiger with an adult accompanying them.
    </p>
    <h4 className="text-sm md:text-base font-semibold mb-2 text-foreground">Itinerary</h4>
    <ol className="space-y-2">
      {itinerarySteps.map((step, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
            {idx + 1}
          </span>
          <span className="text-sm md:text-base text-muted-foreground">{step}</span>
        </li>
      ))}
    </ol>
  </div>
);

const SelfieWithTigers = () => {
  const baseTourData = toursData["selfie-tigers"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: tigerKingdomFaqs,
    description: {
      ...baseTourData.description,
      whatToExpect:
        "Get ready for an exciting half-day tour that takes you through the wonders of Phuket! Explore the city's must-visit spots, starting with the awe-inspiring Big Buddha and its stunning viewpoint. Next, admire the beauty of Chalong Temple, Phuket's largest and most visited temple, built in the early 19th century. Then, head to the Cashew Factory, where you can taste cashew nut juice and sample different flavors of this popular snack. Don’t miss the Honey Farm, where you can enjoy free samples of all things honey. The highlight of your tour will be meeting majestic tigers up close—an unforgettable experience! Capture these incredible moments with your loved ones, and make sure to take plenty of pictures to preserve the happy memories. Book this exciting half-day tour and spend your day in Phuket creating memories that will last a lifetime!",
    },
    inclusions: [
      "Visit Tiger",
      "Round Trip Transfer",
      "Insurance",
      "English Speaking Guide",
      "Soft Drink",
      "Big Buddha",
      "Big Buddha Viewpoint",
      "Chalong Temple",
      "Cashew Factory",
      "Honey Farm",
      "Picture with Elephant",
      "A Visit to the Souvenir Shop",
    ],
    heroImages: [
      { src: tiger1, title: "Tiger Kingdom Phuket Experience" },
      { src: bigBuddha, title: "Big Buddha & Panoramic Viewpoint" },
      { src: watChalong, title: "Chalong Temple, Phuket" },
      { src: phuketIslandView, title: "Phuket City Tour Viewpoints" },
    ],
    galleryImages: [
      { src: tiger1, alt: "Majestic tiger at Tiger Kingdom Phuket" },
      { src: bigBuddha, alt: "Big Buddha Phuket viewpoint" },
      { src: watChalong, alt: "Wat Chalong temple Phuket" },
      { src: elephant1, alt: "Photo with elephant in Phuket" },
      { src: phuketIslandView, alt: "Karon viewpoint Phuket city tour" },
      { src: phuketNightMarket, alt: "Phuket Old Town streets" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      contentAfterOverview={<TourItinerarySection />}
      config={{
        path: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer/",
        seoTitle: "Tiger Kingdom Phuket Tickets with City Tour & Transfers | INR",
        seoDescription: "Book Tiger Kingdom Phuket tickets with a city tour and hotel transfers. Photo session with tigers, Big Buddha and Old Town. Instant confirmation in INR.",
        whatsappTopic: "Tiger Kingdom Phuket with city tour",
        audience: "Great for Couples & Photographers",
        area: "city",
        ctaHeadline: "Tiger Photos, Big Buddha & Phuket Old Town in One Day",
        companionIntro: "A photo-first half day — here's what to wear, which tiger size to pick and how the city stops are sequenced.",
        tips: [
          "Choose smallest/medium tigers for the best photos with kids over 12.",
          "Avoid bright red or loose flowing clothing inside enclosures.",
          "Bring a sarong for the Big Buddha stop.",
          "Morning slots are cooler and less crowded.",
        ],
      }}
      extraContentBeforeReviews={<TigerKingdomSEO />}
    />
  );
};

export default SelfieWithTigers;
