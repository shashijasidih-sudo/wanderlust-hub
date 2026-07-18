import { Link } from "react-router-dom";
import { Sparkles, Ticket, Car, Package, ArrowRight, Star, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import collageImg from "@/assets/about-yellodae-collage.jpg";

const features = [
  {
    icon: Ticket,
    title: "Activities & Attraction Tickets",
    desc: "Skip-the-line tickets and curated tours across top destinations.",
  },
  {
    icon: Car,
    title: "Airport & Private Transfers",
    desc: "Reliable, fixed-price transfers — no haggling, no surprises.",
  },
  {
    icon: Package,
    title: "Complete Holiday Packages",
    desc: "Customised itineraries, hotels and flights designed around you.",
  },
];

const AboutYellodaeSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image with floating cards */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-full h-full bg-primary/15 rounded-3xl rotate-[-3deg]" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-500/15 rounded-3xl rotate-[3deg]" aria-hidden="true" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
              <img
                src={collageImg}
                alt="Plan smarter with Yellodae Trails — Thailand, Singapore, Dubai destinations"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating badge: rating */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-background/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 max-w-[45%]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="text-[10px] sm:text-xs">
                  <p className="font-bold leading-none">5.0 Rated</p>
                  <p className="text-muted-foreground text-[9px] sm:text-[10px] hidden sm:block">Google Reviews</p>
                </div>
              </div>

              {/* Floating badge: destinations */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-background/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 max-w-[55%]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[10px] sm:text-xs min-w-0">
                  <p className="font-bold leading-none">20+ Destinations</p>
                  <p className="text-muted-foreground text-[9px] sm:text-[10px] truncate hidden sm:block">India · Thailand · SG · Dubai</p>
                </div>
              </div>

              {/* Floating badge: trust */}
              <div className="absolute -bottom-3 left-3 sm:-bottom-4 sm:left-6 bg-primary text-primary-foreground rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xl flex items-center gap-1.5 sm:gap-2 max-w-[calc(100%-1.5rem)]">
                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <p className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">Trusted by 10,000+ travelers</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Yellodae
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Plan smarter with{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Yellodae Trails
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From <strong className="text-foreground">activities bookings</strong> to{" "}
              <strong className="text-foreground">airport transfers</strong> and complete{" "}
              <strong className="text-foreground">holiday packages</strong> for Thailand, Singapore, Dubai, and other top destinations — we make travel easy, affordable, and hassle-free.
            </p>

            <div className="space-y-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group flex items-start gap-4 bg-background border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base">{f.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl">
                <Link to="/about-us/">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-2">
                <Link to="/contact-us/">Plan My Trip</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYellodaeSection;
