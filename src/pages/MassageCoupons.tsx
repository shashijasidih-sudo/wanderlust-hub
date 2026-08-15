import TourBooking from "@/components/TourBooking";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { massageCouponsFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import massageCouponHero from "@/assets/massage-coupon-hero.webp";

const MassageCoupons = () => {
  const tourData = {
    ...toursData["massage-coupons"],
    heroImages: [
      { src: massageCouponHero, title: "Traditional Thai Massage" }
    ],
    galleryImages: [
      { src: massageCouponHero, alt: "Health Land Thai Massage Experience" }
    ],
    faqs: massageCouponsFaqs,
  };
  const sheet = bangkokSheetContent["massage-coupons"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <TourBooking tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="massage-coupons" />} />;
};

export default MassageCoupons;
