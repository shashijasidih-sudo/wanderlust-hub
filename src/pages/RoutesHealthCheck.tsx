import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dubaiRoutes = [
  "/dubai", "/dubai/desert-safari", "/dubai/desert-safari-shisha", "/dubai/desert-safari-sharing",
  "/dubai/dhow-cruise", "/dubai/dhow-cruise-creek-lower-deck", "/dubai/dhow-cruise-creek-upper-deck",
  "/dubai/dhow-cruise-marina-lower-deck", "/dubai/dhow-cruise-marina-upper-deck", "/dubai/atlantis-aquaventure",
  "/dubai/city-tour", "/dubai/city-tour-mall", "/dubai/global-village",
  "/dubai/abu-dhabi-city-tour", "/dubai/abu-dhabi-ferrari-world", "/dubai/aquarium-penguin",
  "/dubai/burj-khalifa-non-prime", "/dubai/burj-khalifa-prime", "/dubai/dolphin-show",
  "/dubai/miracle-garden", "/dubai/fountain-show", "/dubai/destination-guides",
  "/blog/airport-transfer-booking-dubai", "/blog/desert-safari-deals-dubai",
  "/dubai/budget-airport-transfers", "/dubai/airport-pickup-zone-1", "/dubai/airport-dropoff-zone-1",
  "/dubai/airport-pickup-zone-2", "/dubai/airport-dropoff-zone-2",
  "/dubai/airport-pickup-zone-3", "/dubai/airport-dropoff-zone-3",
  "/dubai/airport-pickup-zone-4", "/dubai/airport-dropoff-zone-4",
  "/dubai/airport-pickup-zone-5", "/dubai/airport-dropoff-zone-5",
];

const singaporeRoutes = [
  "/singapore", "/singapore/singapore-city-tour", "/singapore/night-safari-singapore-tickets-and-transfers",
  "/singapore/night-safari-singapore-tickets-and-transfers-transfer", "/singapore/night-safari-singapore-tickets-and-transfers-dinner", "/singapore/sentosa-4d-adventureland-tickets",
  "/singapore/sentosa-4d-3-rides", "/singapore/sentosa-cable-car-tickets-and-transfers", "/singapore/wings-of-time-show-sentosa-tickets",
  "/singapore/skyhelix-sentosa-tickets", "/singapore/singapore-river-cruise-tickets-and-transfers", "/singapore/gardens-by-the-bay-tickets-and-transfers",
  "/singapore/adventure-cove-waterpark-tickets", "/singapore/singapore-flyer-tickets-and-transfers", "/singapore/river-wonders-singapore-tickets",
  "/singapore/universal-studios-singapore-weekday-tickets", "/singapore/universal-studios-singapore-weekend-tickets",
  "/singapore/singapore-zoo-tickets", "/singapore/rainforest-wild-asia-tickets", "/singapore/big-bus-hop-on-hop-off-singapore-city-tour",
  "/singapore/big-bus-night-city-tour-singapore", "/singapore/sentosa-island", "/singapore/destination-guides",
  "/blog/airport-transfer-booking-singapore", "/blog/sentosa-activities-singapore",
  "/singapore/budget-airport-transfers", "/singapore/airport-pickup",
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
