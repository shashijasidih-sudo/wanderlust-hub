import { Link } from "react-router-dom";
import { Sparkles, Ticket, Car, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Ticket, label: "Activities & Attractions" },
  { icon: Car, label: "Airport & Private Transfers" },
  { icon: Package, label: "Complete Holiday Packages" },
];

const AboutYellodaeSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-center">
          {/* Left: Heading */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Yellodae
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Plan smarter with{" "}
              <span className="text-primary">Yellodae Trails</span>
            </h2>
          </div>

          {/* Right: Description + features + CTA */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From <strong className="text-foreground">activities bookings</strong> to{" "}
              <strong className="text-foreground">airport transfers</strong> and complete{" "}
              <strong className="text-foreground">holiday packages</strong> for Thailand, Singapore, Dubai, and other top destinations — we make travel easy, affordable, and hassle-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 hover:border-primary/40 hover:shadow-sm transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/about-us">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/contact-us">Plan My Trip</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYellodaeSection;
