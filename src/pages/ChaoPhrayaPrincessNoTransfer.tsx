import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import ChaoPhrayaPrincessNoTransferSEO from "@/components/activity-detail/ChaoPhrayaPrincessNoTransferSEO";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { toursData } from "@/data/tourData";
import { chaoPhrayaPrincessFaqs } from "@/data/chaoPhrayaPrincessFaqs";
import cruiseNight2 from "@/assets/cruise-night-2.webp";
import cruiseShip1 from "@/assets/cruise-ship-1.webp";
import watArunTwilight1 from "@/assets/wat-arun-twilight-1.jpg";

const ChaoPhrayaPrincessNoTransfer = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-no-transfer"],
    heroImages: [
      { src: cruiseShip1, title: "Chao Phraya Princess Dinner Cruise" },
      { src: cruiseNight2, title: "River Cruise Experience" },
      { src: watArunTwilight1, title: "Bangkok River Views" }
    ],
    galleryImages: [
      { src: cruiseShip1, alt: "Luxury cruise ship" },
      { src: cruiseNight2, alt: "Princess cruise at night" },
      { src: watArunTwilight1, alt: "Wat Arun at twilight" }
    ],
    faqs: chaoPhrayaPrincessFaqs
  };
  return (
    <>
      <FaqJsonLd faqs={chaoPhrayaPrincessFaqs} id="faq-jsonld-cpp-no-transfer" />
      <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/chao-phraya-princess-dinner-cruise/",
        seoTitle: "Chao Phraya Princess Dinner Cruise Tickets (No Transfer) | Book in INR",
        seoDescription:
          "Book Chao Phraya Princess dinner cruise tickets in Bangkok with Indian or international buffet. Ticket-only option without transfers. Instant confirmation in INR.",
        whatsappTopic: "Chao Phraya Princess dinner cruise tickets",
        audience: "Best Value for Independent Travellers",
        area: "riverside",
        ctaHeadline: "Bangkok's Classic Dinner Cruise, Ticket Only",
        companionIntro:
          "The ticket-only version of Bangkok's best-known dinner cruise \u2014 ideal for Indian travellers already staying near the river.",
        tips: [
          "Reach River City Pier at least 30 minutes before departure.",
          "Choose the Indian buffet option while booking if you prefer familiar food.",
          "Grab drop-offs are easy at River City Pier \u2014 avoid peak traffic hours.",
          "Carry a light shrug; the open deck gets breezy.",
        ],
      }}
      extraContentBeforeReviews={<ChaoPhrayaPrincessNoTransferSEO />}
    />
    </>
  );
};

export default ChaoPhrayaPrincessNoTransfer;
