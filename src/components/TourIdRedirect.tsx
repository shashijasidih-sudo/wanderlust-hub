import { Navigate, useLocation } from "react-router-dom";
import { TOUR_ROUTES } from "@/data/tourRoutes";

/**
 * Catches stale/legacy activity URLs (e.g. `/thailand/phuket/phuket-simon-cabaret`,
 * `/phuket/phuket-simon-cabaret`) whose last path segment matches a known tour id,
 * and permanently redirects them to the canonical route.
 * Returns null so React Router falls through to the NotFound route when no match.
 */
const TourIdRedirect = () => {
  const { pathname } = useLocation();
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  const last = segments[segments.length - 1];
  if (last && TOUR_ROUTES[last]) {
    return <Navigate to={TOUR_ROUTES[last]} replace />;
  }
  return null;
};

export default TourIdRedirect;
