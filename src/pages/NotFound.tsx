import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const suggestedDestinations = [
  { name: "Thailand Tours", path: "/thailand", icon: "🇹🇭" },
  { name: "Dubai Tours", path: "/dubai", icon: "🇦🇪" },
  { name: "Singapore Tours", path: "/singapore", icon: "🇸🇬" },
  { name: "Bangkok Activities", path: "/bangkok", icon: "🏛️" },
  { name: "Phuket Activities", path: "/phuket", icon: "🏖️" },
  { name: "Pattaya Activities", path: "/pattaya", icon: "🎡" },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Auto-redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  // Try to suggest a relevant destination based on the URL
  const path = location.pathname.toLowerCase();
  let suggestedRedirect = "/";
  let suggestedLabel = "Home";
  if (path.includes("dubai") || path.includes("desert") || path.includes("dhow") || path.includes("burj") || path.includes("abu-dhabi")) {
    suggestedRedirect = "/dubai";
    suggestedLabel = "Dubai Tours";
  } else if (path.includes("singapore") || path.includes("sentosa") || path.includes("universal") || path.includes("night-safari")) {
    suggestedRedirect = "/singapore";
    suggestedLabel = "Singapore Tours";
  } else if (path.includes("bangkok") || path.includes("temple") || path.includes("grand-palace")) {
    suggestedRedirect = "/bangkok";
    suggestedLabel = "Bangkok Activities";
  } else if (path.includes("phuket") || path.includes("phi-phi") || path.includes("james-bond")) {
    suggestedRedirect = "/phuket";
    suggestedLabel = "Phuket Activities";
  } else if (path.includes("pattaya") || path.includes("coral") || path.includes("alcazar")) {
    suggestedRedirect = "/pattaya";
    suggestedLabel = "Pattaya Activities";
  } else if (path.includes("krabi") || path.includes("four-island") || path.includes("hong-island")) {
    suggestedRedirect = "/krabi";
    suggestedLabel = "Krabi Activities";
  } else if (path.includes("thai")) {
    suggestedRedirect = "/thailand";
    suggestedLabel = "Thailand Tours";
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Big 404 */}
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
          <p className="text-muted-foreground mb-2 max-w-md mx-auto">
            The page <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded">{location.pathname}</span> doesn't exist or has been moved.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Redirecting to home in <span className="font-bold text-primary">{countdown}s</span>
          </p>

          {/* Smart suggestion */}
          {suggestedRedirect !== "/" && (
            <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-xl inline-block">
              <p className="text-sm text-muted-foreground mb-2">Were you looking for?</p>
              <Button onClick={() => navigate(suggestedRedirect)} className="gap-2">
                <MapPin className="h-4 w-4" />
                {suggestedLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Button variant="outline" size="lg" onClick={() => navigate("/")}>
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>

          {/* Destination grid */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {suggestedDestinations.map((dest) => (
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
