import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, Hotel, Plane, Ship, Users, X } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import phiPhi1 from "@/assets/phi-phi-1.jpg";
import pattayaBoats from "@/assets/pattaya-boats-beach-1.jpg";
import bangkokTemple from "@/assets/bangkok-temple-1.jpg";
import singaporeGardens from "@/assets/singapore-gardens-bay-night-1.jpg";
import singaporeFlyer from "@/assets/singapore-flyer-twilight-1.jpg";
import singaporeMarina from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import dubaiSkyline from "@/assets/dubai-skyline-night-1.jpg";
import dubaiDesert from "@/assets/dubai-desert-couple-1.jpg";
import dubaiCity from "@/assets/dubai-city-night-1.jpg";
import heroImage from "@/assets/hero-beach.jpg";

interface PackageInfo {
  id: number;
  title: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  image: string;
  highlights: string[];
}

const MailerLiteEmbed = ({ formId }: { formId: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Insert the MailerLite embedded div
    containerRef.current.innerHTML = `<div class="ml-embedded" data-form="${formId}"></div>`;
    
    // Re-trigger MailerLite to pick up the new embedded form
    const win = window as any;
    if (typeof win.ml === "function") {
      // MailerLite scans for new embedded forms on account init
      win.ml("account", "2066738");
    }
  }, [formId]);

  return <div ref={containerRef} className="min-h-[400px]" />;
};

const PackageCard = ({ pkg, onBookNow }: { pkg: PackageInfo; onBookNow: (title: string) => void }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
    <div className="relative h-56 overflow-hidden">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <Badge className="absolute top-3 right-3 bg-yellow-500 text-white border-0">
        <Star className="h-3 w-3 mr-1 fill-white" />
        {pkg.rating}
      </Badge>
    </div>
    <CardContent className="p-5">
      <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-1">
        <MapPin className="h-3.5 w-3.5" />
        <span>{pkg.location}</span>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
        <Calendar className="h-3.5 w-3.5" />
        <span>{pkg.duration}</span>
      </div>
      <ul className="space-y-1 mb-4">
        {pkg.highlights.map((h, i) => (
          <li key={i} className="text-sm flex items-start gap-1.5">
            <span className="text-primary mt-0.5">✓</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString("en-IN")}/-</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Users className="h-3 w-3" /> per person
          </div>
        </div>
        <Button onClick={() => onBookNow(pkg.title)}>Book Now</Button>
      </div>
    </CardContent>
  </Card>
);

const thailandPackages: PackageInfo[] = [
  {
    id: 1,
    title: "4N/5D Phuket & Krabi",
    price: 20000,
    duration: "4 Nights / 5 Days",
    location: "Phuket & Krabi, Thailand",
    rating: 4.8,
    image: phiPhi1,
    highlights: ["Phi Phi Island Tour", "James Bond Island Visit", "Phuket City Tour", "Krabi Beach Activities", "Hotel & Breakfast Included"],
  },
  {
    id: 2,
    title: "4N/5D Pattaya & Bangkok",
    price: 14000,
    duration: "4 Nights / 5 Days",
    location: "Pattaya & Bangkok, Thailand",
    rating: 4.7,
    image: pattayaBoats,
    highlights: ["Coral Island Tour", "Bangkok Temple Visit", "Pattaya Nightlife", "Floating Market Tour", "Hotel & Breakfast Included"],
  },
  {
    id: 3,
    title: "4N/5D Bangkok & Phuket",
    price: 20000,
    duration: "4 Nights / 5 Days",
    location: "Bangkok & Phuket, Thailand",
    rating: 4.9,
    image: bangkokTemple,
    highlights: ["Grand Palace Visit", "Phi Phi Island Speedboat", "Bangkok City Tour", "Phuket Beach Activities", "Hotel & Breakfast Included"],
  },
];

const singaporePackages: PackageInfo[] = [
  {
    id: 4,
    title: "3N/4D Singapore",
    price: 18000,
    duration: "3 Nights / 4 Days",
    location: "Singapore",
    rating: 4.7,
    image: singaporeGardens,
    highlights: ["Gardens by the Bay", "Sentosa Island Tour", "Marina Bay Sands Visit", "City Sightseeing", "Hotel & Breakfast Included"],
  },
  {
    id: 5,
    title: "4N/5D Singapore",
    price: 22000,
    duration: "4 Nights / 5 Days",
    location: "Singapore",
    rating: 4.8,
    image: singaporeFlyer,
    highlights: ["Universal Studios", "Night Safari", "Singapore Flyer", "River Cruise", "Hotel & Breakfast Included"],
  },
  {
    id: 6,
    title: "5N/6D Singapore",
    price: 25000,
    duration: "5 Nights / 6 Days",
    location: "Singapore",
    rating: 4.9,
    image: singaporeMarina,
    highlights: ["Universal Studios", "Sentosa Full Day", "Gardens by the Bay", "Night Safari & Zoo", "Hotel & All Transfers Included"],
  },
];

const dubaiPackages: PackageInfo[] = [
  {
    id: 7,
    title: "3N/4D Dubai",
    price: 16000,
    duration: "3 Nights / 4 Days",
    location: "Dubai, UAE",
    rating: 4.7,
    image: dubaiSkyline,
    highlights: ["Desert Safari", "Burj Khalifa Visit", "Dubai Mall Tour", "Dhow Cruise Dinner", "Hotel & Breakfast Included"],
  },
  {
    id: 8,
    title: "4N/5D Dubai",
    price: 20000,
    duration: "4 Nights / 5 Days",
    location: "Dubai, UAE",
    rating: 4.8,
    image: dubaiDesert,
    highlights: ["Desert Safari", "Burj Khalifa Visit", "Dhow Cruise Dinner", "Abu Dhabi City Tour", "Hotel & Breakfast Included"],
  },
  {
    id: 9,
    title: "5N/6D Dubai",
    price: 22000,
    duration: "5 Nights / 6 Days",
    location: "Dubai, UAE",
    rating: 4.9,
    image: dubaiCity,
    highlights: ["Desert Safari", "Burj Khalifa & Dubai Mall", "Dhow Cruise Marina", "Abu Dhabi Full Day", "Hotel & All Transfers Included"],
  },
];

const SectionBlock = ({ title, icon, packages: pkgs, onBookNow }: { title: string; icon: React.ReactNode; packages: PackageInfo[]; onBookNow: (title: string) => void }) => (
  <section className="py-10">
    <div className="container px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        {icon} {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pkgs.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} onBookNow={onBookNow} />
        ))}
      </div>
    </div>
  </section>
);

const TourPackages = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTitle, setBookingTitle] = useState("");

  const handleBookNow = (title: string) => {
    setBookingTitle(title);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[420px] overflow-hidden">
          <img src={heroImage} alt="Tour Packages" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          <div className="relative container px-4 md:px-6 h-full flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Tours & Packages</h1>
              <p className="text-base md:text-lg mb-4 max-w-2xl mx-auto opacity-90">
                Curated holiday packages with hotels, transfers & activities — all at unbeatable prices
              </p>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">Best Value Guaranteed</Badge>
            </div>
          </div>
        </section>

        <SectionBlock title="Thailand Packages" icon={<Plane className="h-6 w-6 text-primary" />} packages={thailandPackages} onBookNow={handleBookNow} />
        <div className="border-t" />
        <SectionBlock title="Singapore Packages" icon={<Ship className="h-6 w-6 text-primary" />} packages={singaporePackages} onBookNow={handleBookNow} />
        <div className="border-t" />
        <SectionBlock title="Dubai Packages" icon={<Hotel className="h-6 w-6 text-primary" />} packages={dubaiPackages} onBookNow={handleBookNow} />

      </main>
      <Footer />

      {/* MailerLite Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Book: {bookingTitle}</DialogTitle>
          </DialogHeader>
          {bookingOpen && <MailerLiteEmbed formId="0WJ5rh" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourPackages;
