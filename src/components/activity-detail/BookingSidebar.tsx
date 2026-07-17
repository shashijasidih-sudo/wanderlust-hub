import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PricingCalculator from "./PricingCalculator";
import CustomerSupport from "./CustomerSupport";

type PricingProps = React.ComponentProps<typeof PricingCalculator>;

interface BookingSidebarProps {
  pricing: PricingProps;
  ready?: boolean;
}

const PricingSkeleton = () => (
  <Card aria-busy="true" aria-label="Loading booking widget">
    <CardHeader className="space-y-2">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-8 w-40" />
    </CardHeader>
    <CardContent className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-14 w-full rounded-md" />
      <Skeleton className="h-4 w-3/4" />
    </CardContent>
  </Card>
);

const SupportSkeleton = () => (
  <Card aria-busy="true" aria-label="Loading support panel" className="bg-primary/5 border-primary/20">
    <CardHeader className="pb-2 px-3 pt-3">
      <Skeleton className="h-4 w-20" />
    </CardHeader>
    <CardContent className="space-y-2 p-3">
      <Skeleton className="h-3 w-3/4" />
      <div className="grid grid-cols-2 gap-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </CardContent>
  </Card>
);

const SidebarSkeleton = () => (
  <div className="space-y-6 min-h-[520px]">
    <PricingSkeleton />
    <SupportSkeleton />
  </div>
);

interface ErrorBoundaryState { hasError: boolean; }
class SidebarBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: unknown) {
    console.error("BookingSidebar failed to render:", error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const BookingSidebarFallback = () => (
  <div className="space-y-6 min-h-[520px]">
    <Card className="border-amber-200 bg-amber-50">
      <CardHeader>
        <p className="font-semibold text-sm">Booking temporarily unavailable</p>
      </CardHeader>
      <CardContent className="space-y-2 text-xs text-muted-foreground">
        <p>We couldn't load the booking widget. Please refresh the page or reach us on WhatsApp to book.</p>
        <a
          href="https://wa.me/917061710810"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 rounded-md bg-primary text-primary-foreground px-3 py-2 text-xs font-semibold"
        >
          WhatsApp Us
        </a>
      </CardContent>
    </Card>
    <CustomerSupport />
  </div>
);

const BookingSidebar = ({ pricing, ready = true }: BookingSidebarProps) => {
  if (!ready || !pricing?.activityName) return <SidebarSkeleton />;
  return (
    <SidebarBoundary fallback={<BookingSidebarFallback />}>
      <Suspense fallback={<SidebarSkeleton />}>
        <div className="space-y-6">
          <PricingCalculator {...pricing} />
          <CustomerSupport />
        </div>
      </Suspense>
    </SidebarBoundary>
  );
};

export default BookingSidebar;
