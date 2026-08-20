import { Navigate, useLocation } from "react-router-dom";
import { LEGACY_REDIRECTS } from "@/data/legacyRedirects";

interface Props {
  fallback: React.ReactNode;
}

const normalize = (p: string) => {
  const path = p.toLowerCase();
  return path.endsWith("/") ? path : `${path}/`;
};

/** Catch-all: send known legacy/mistyped URLs to their live route, otherwise render the 404 page. */
const LegacyRedirectOrNotFound = ({ fallback }: Props) => {
  const { pathname, search, hash } = useLocation();
  const target = LEGACY_REDIRECTS[normalize(pathname)];
  if (target) return <Navigate to={`${target}${search}${hash}`} replace />;
  return <>{fallback}</>;
};

export default LegacyRedirectOrNotFound;
