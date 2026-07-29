import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { DestinationKey, detectDestinationFrom, normalizeSlug } from "./recoUtils";

const RecommendedActivities = lazy(() => import("./RecommendedActivities"));
const TravelEssentialsSection = lazy(() => import("./TravelEssentialsSection"));
const RecommendedTransfers = lazy(() => import("./RecommendedTransfers"));
const TravelGuidesSection = lazy(() => import("./TravelGuidesSection"));
const CompleteYourTrip = lazy(() => import("./CompleteYourTrip"));

interface Props {
  /** Extra destination hints (slugs / titles) from bookings, wishlist etc., in priority order. */
  hints?: Array<string | null | undefined>;
  /** Slugs already in the cart / booked — never recommended again. */
  excludeSlugs?: Array<string | null | undefined>;
  /** Complete Your Trip only shows on Payment Success, My Bookings and Wishlist. */
  showCompleteYourTrip?: boolean;
}

/**
 * Lazy, below-the-fold recommendation block.
 * Rendered immediately above the existing "Real Traveler Experiences" section.
 */
const TripRecommendations = ({ hints = [], excludeSlugs = [], showCompleteYourTrip = false }: Props) => {
  const { cartItems } = useCart();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [visible]);

  const destination: DestinationKey | null = useMemo(
    () =>
      detectDestinationFrom([
        ...cartItems.flatMap((i) => [i.slug, i.title, i.pickupLocation, i.dropLocation]),
        ...hints,
      ]),
    [cartItems, hints]
  );

  const exclude = useMemo(() => {
    const set = new Set<string>();
    cartItems.forEach((i) => set.add(normalizeSlug(i.slug)));
    excludeSlugs.forEach((s) => s && set.add(normalizeSlug(s)));
    set.delete("");
    return set;
  }, [cartItems, excludeSlugs]);

  return (
    <div ref={ref} className="bg-background">
      {visible && (
        <Suspense fallback={null}>
          <RecommendedActivities destination={destination} exclude={exclude} />
          <TravelEssentialsSection destination={destination} />
          <RecommendedTransfers destination={destination} exclude={exclude} />
          <TravelGuidesSection destination={destination} />
          {showCompleteYourTrip && <CompleteYourTrip destination={destination} exclude={exclude} />}
        </Suspense>
      )}
    </div>
  );
};

export default TripRecommendations;
