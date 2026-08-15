import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { WatArunPhoPhraKaewSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { watArunPhoPhraKaewFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";

const BangkokWatArunPhoTraimit = () => {
  const baseTourData = toursData["bangkok-wat-arun-pho-traimit"];

  if (!baseTourData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Configuration Error</h1>
          <p className="text-muted-foreground">Tour data not found.</p>
        </div>
      </div>
    );
  }

  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: bangkokTemple3, title: "Wat Arun Temple at Twilight" },
      { src: bangkokCity1, title: "Bangkok City and River" },
      { src: bangkokTemple1, title: "Golden Pagoda Temple" }
    ],
    galleryImages: [
      { src: bangkokTemple3, alt: "Wat Arun at sunset" },
      { src: bangkokCity1, alt: "Bangkok cityscape" },
      { src: bangkokTemple1, alt: "Golden pagoda" }
    ],
    faqs: watArunPhoPhraKaewFaqs,
  };

  const sheet = bangkokSheetContent["bangkok-wat-arun-pho-traimit"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="bangkok-wat-arun-pho-traimit" />}
      config={{
        path: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour/",
        seoTitle: "Wat Arun, Wat Pho & Golden Buddha Tour Bangkok | Book in INR",
        seoDescription:
          "Book the Wat Arun, Wat Pho and Golden Buddha temple tour in Bangkok with transfers. Guided half-day heritage tour, instant confirmation and INR pricing for Indian travellers.",
        whatsappTopic: "the Wat Arun, Wat Pho & Golden Buddha tour",
        audience: "Ideal for First-Time Visitors",
        area: "riverside",
        ctaHeadline: "See Bangkok's Three Great Temples in One Morning",
        companionIntro:
          "Bangkok's most photographed temples in one guided half-day \u2014 here's what Indian travellers should wear, when to start and where to eat vegetarian nearby.",
        tips: [
          "Start by 8:00 AM to beat both the heat and tour buses.",
          "Cover shoulders and knees \u2014 sarongs are available on rent but queues are long.",
          "Carry small THB notes for the cross-river ferry and donations.",
          "Silom's Indian restaurants are a 15-minute ride from Wat Pho.",
        ],
      }}
      extraContentBeforeReviews={<WatArunPhoPhraKaewSEO />}
    />;
};

export default BangkokWatArunPhoTraimit;
