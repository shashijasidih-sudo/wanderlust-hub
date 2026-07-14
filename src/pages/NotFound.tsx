import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TOUR_ROUTES } from "@/data/tourRoutes";

const primaryDestinations = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Thailand", path: "/thailand", icon: "🇹🇭" },
  { name: "Singapore", path: "/singapore", icon: "🇸🇬" },
  { name: "Dubai", path: "/dubai", icon: "🇦🇪" },
  { name: "Contact Us", path: "/contact-us", icon: "✉️" },
];

const NotFound = () => {
  const location = useLocation();

  // Auto-recover stale/legacy activity URLs whose last segment matches a
  // known tour id (e.g. /thailand/phuket/phuket-simon-cabaret).
  const segments = location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  const canonicalTourRoute = lastSegment ? TOUR_ROUTES[lastSegment] : undefined;
  if (canonicalTourRoute && canonicalTourRoute !== location.pathname) {
    return <Navigate to={canonicalTourRoute} replace />;
  }

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Signal 404 to crawlers and prerenderers. SPA hosting always returns
          200 for the HTML shell, but noindex + prerender-status-code lets
          Googlebot and prerender services treat this as a true 404. */}
      <Helmet prioritizeSeoTags>
        <title>Page Not Found (404) | Yellodae Trails</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="relative mb-6">
            <h1 className="text-[120px] md:text-[160px] font-black text-primary/10 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-primary/40" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded">{location.pathname}</span> doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {primaryDestinations.map((dest) => (
                <Link
                  key={dest.path}
                  to={dest.path}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <span className="text-xl">{dest.icon}</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {dest.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
