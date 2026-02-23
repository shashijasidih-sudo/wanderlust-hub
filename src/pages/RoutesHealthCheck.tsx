import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dubaiRoutes = [
  "/dubai", "/desert-safari", "/desert-safari-shisha", "/desert-safari-sharing",
  "/dhow-cruise", "/dhow-cruise-creek-lower", "/dhow-cruise-creek-upper",
  "/dhow-cruise-marina-lower", "/dhow-cruise-marina-upper", "/atlantis-palm",
  "/dubai-city-tour", "/dubai-city-tour-mall", "/global-village-dubai",
  "/abu-dhabi-city-tour", "/abu-dhabi-ferrari-world", "/dubai-aquarium-penguin",
  "/burj-khalifa-non-prime", "/burj-khalifa-prime", "/dubai-dolphin-show",
  "/miracle-garden-dubai", "/dubai-fountain-show", "/dubai-smart-guides",
  "/blog/airport-transfer-booking-dubai", "/blog/desert-safari-deals-dubai",
  "/dubai/transfers", "/dubai/airport-pickup-zone-1", "/dubai/airport-dropoff-zone-1",
  "/dubai/airport-pickup-zone-2", "/dubai/airport-dropoff-zone-2",
  "/dubai/airport-pickup-zone-3", "/dubai/airport-dropoff-zone-3",
  "/dubai/airport-pickup-zone-4", "/dubai/airport-dropoff-zone-4",
  "/dubai/airport-pickup-zone-5", "/dubai/airport-dropoff-zone-5",
];

const singaporeRoutes = [
  "/singapore", "/singapore-city-tour", "/night-safari-tickets",
  "/night-safari-transfer", "/night-safari-dinner", "/sentosa-4d-2-rides",
  "/sentosa-4d-3-rides", "/sentosa-cable-car", "/sentosa-wings-time",
  "/sentosa-sky-helix", "/singapore-river-cruise", "/gardens-by-the-bay",
  "/adventure-cove", "/singapore-flyer", "/river-safari",
  "/universal-studios-weekday", "/universal-studios-weekend",
  "/singapore-zoo", "/rainforest-wild-asia", "/big-bus-discover",
  "/big-bus-night", "/sentosa-island", "/singapore-smart-guides",
  "/blog/airport-transfer-booking-singapore", "/blog/sentosa-activities-singapore",
  "/singapore/transfers", "/singapore/airport-pickup",
  "/singapore/airport-dropoff", "/singapore/airport-night-pickup",
];

type RouteStatus = "pending" | "ok" | "error";

const RoutesHealthCheck = () => {
  const [results, setResults] = useState<Record<string, RouteStatus>>({});
  const [checking, setChecking] = useState(false);

  const checkRoutes = async () => {
    setChecking(true);
    const allRoutes = [...dubaiRoutes, ...singaporeRoutes];
    const newResults: Record<string, RouteStatus> = {};

    for (const route of allRoutes) {
      newResults[route] = "pending";
    }
    setResults({ ...newResults });

    for (const route of allRoutes) {
      try {
        const res = await fetch(window.location.origin + route, { method: "HEAD" });
        // SPA always returns 200 for any route, so we just check reachability
        newResults[route] = res.ok ? "ok" : "error";
      } catch {
        newResults[route] = "error";
      }
      setResults({ ...newResults });
    }
    setChecking(false);
  };

  useEffect(() => {
    checkRoutes();
  }, []);

  const okCount = Object.values(results).filter((s) => s === "ok").length;
  const errorCount = Object.values(results).filter((s) => s === "error").length;
  const pendingCount = Object.values(results).filter((s) => s === "pending").length;
  const total = dubaiRoutes.length + singaporeRoutes.length;

  const renderSection = (title: string, routes: string[]) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {routes.map((route) => {
          const status = results[route] || "pending";
          return (
            <div
              key={route}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${
                status === "ok"
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  : status === "error"
                  ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                  : "border-border bg-secondary/30"
              }`}
            >
              {status === "ok" && <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />}
              {status === "error" && <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />}
              {status === "pending" && <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0 animate-pulse" />}
              <code className="font-mono text-xs text-foreground truncate">{route}</code>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Routes Health Check</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Dubai & Singapore activity routes validation
            </p>
          </div>
          <Button onClick={checkRoutes} disabled={checking} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${checking ? "animate-spin" : ""}`} />
            Re-check
          </Button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-700 dark:text-green-400">{okCount}</p>
            <p className="text-xs text-green-600 dark:text-green-500">Reachable</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-red-700 dark:text-red-400">{errorCount}</p>
            <p className="text-xs text-red-600 dark:text-red-500">Errors</p>
          </div>
          <div className="bg-secondary/50 border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{pendingCount > 0 ? pendingCount : total}</p>
            <p className="text-xs text-muted-foreground">{pendingCount > 0 ? "Checking..." : "Total Routes"}</p>
          </div>
        </div>

        {renderSection(`Dubai Routes (${dubaiRoutes.length})`, dubaiRoutes)}
        {renderSection(`Singapore Routes (${singaporeRoutes.length})`, singaporeRoutes)}

        <div className="mt-6 p-4 bg-secondary/30 rounded-xl text-sm text-muted-foreground">
          <p><strong>Note:</strong> Since this is a single-page app, all routes return HTTP 200. This check validates that the route URL is reachable. To fully validate rendering, navigate to each route manually.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoutesHealthCheck;
