import TourBooking from "@/components/TourBooking";
import { massageCouponsFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import massageCouponHero from "@/assets/massage-coupon-hero.jpg";

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
  return <TourBooking tourData={tourData} />;
};

export default MassageCoupons;
