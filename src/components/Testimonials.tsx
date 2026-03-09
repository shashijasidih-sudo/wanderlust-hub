import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    comment: "Booked Phi Phi Island tour and Bangkok temples through Yellodae — everything was perfectly arranged. Pickup was on time, guides were amazing, and the price was much better than what we found elsewhere. Will definitely book again for our Dubai trip!",
    initials: "PS",
    trip: "Thailand Trip",
  },
  {
    name: "James & Emily Carter",
    location: "London, United Kingdom",
    rating: 5,
    comment: "We were nervous about booking activities in Singapore online, but Yellodae made it effortless. Instant confirmations, great WhatsApp support, and the combo pass saved us nearly 35%. Best travel decision we made!",
    initials: "JC",
    trip: "Singapore Trip",
  },
  {
    name: "Rajesh Menon",
    location: "Kochi, India",
    rating: 5,
    comment: "Family trip to Dubai with 2 kids — Yellodae handled desert safari, Burj Khalifa tickets, and all airport transfers flawlessly. INR pricing with no hidden charges was a huge relief. The kids still talk about the dolphin show!",
    initials: "RM",
    trip: "Dubai Trip",
  },
  {
    name: "Akiko Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    comment: "Used Yellodae for my Phuket and Krabi itinerary. The James Bond Island speedboat tour was the highlight of my trip! Customer support replied within minutes even at midnight. Truly reliable service.",
    initials: "AT",
    trip: "Thailand Trip",
  },
  {
    name: "Ankit & Neha Patel",
    location: "Ahmedabad, India",
    rating: 5,
    comment: "Honeymoon in Thailand — booked Chao Phraya dinner cruise, floating market tour, and Pattaya nightlife package. Every single experience was top-notch. The private transfer service felt so premium. 100% recommend Yellodae!",
    initials: "AP",
    trip: "Thailand Honeymoon",
  },
  {
    name: "David Müller",
    location: "Berlin, Germany",
    rating: 5,
    comment: "Third time using Yellodae, this time for Singapore. Universal Studios, Night Safari, and Gardens by the Bay — all booked in 10 minutes. The e-tickets worked seamlessly at every venue. Price guarantee is real!",
    initials: "DM",
    trip: "Singapore Trip",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 md:py-16 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted by 10,000+ Happy Travelers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from Indian families, honeymooners & international explorers who booked with Yellodae
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto animate-slide-up">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-11 w-11 bg-primary text-primary-foreground">
                  <AvatarFallback className="text-sm font-bold">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {testimonial.trip}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Best Price Guarantee</h3>
            <p className="text-muted-foreground mb-4">
              Find a better price? We'll match it and give you an extra 5% off!
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>24/7 WhatsApp Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>Secure INR Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>Govt. Certified Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
