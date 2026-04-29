import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Check } from "lucide-react";
import { toast } from "sonner";

const INTERESTS = [
  "Thailand Tour",
  "Singapore Holiday",
  "Vietnam Travel",
  "Andaman Honeymoon",
  "South Korea Tour",
  "Bali Getaway",
  "Maldives Honeymoon",
  "Domestic India Trip",
  "Group / Family Holiday",
  "Customised Itinerary",
];

const PlanTripCTA = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please share your name and email so we can reach out");
      return;
    }
    if (interests.length === 0) {
      toast.error("Pick at least one travel interest");
      return;
    }

    const params = new URLSearchParams({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      travelDate,
      interests: interests.join(","),
      subject: `Trip enquiry: ${interests.join(", ")}`,
    });

    navigate(`/contact-us?${params.toString()}#contact-form`);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/15 via-background to-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="bg-background rounded-3xl shadow-2xl border border-primary/20 overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left pitch */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-10">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/15 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Plan My Trip
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Let's design your <span className="underline decoration-2 underline-offset-4">perfect</span> getaway
              </h2>
              <p className="opacity-90 mb-6 leading-relaxed">
                Tell us where you'd love to go and our travel experts will craft a customised itinerary, handpicked stays, and the best deals for you — usually within 24 hours.
              </p>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Free travel consultation",
                  "Tailor-made international & domestic packages",
                  "Best price guarantee",
                  "24/7 on-trip support",
                ].map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                  I'm interested in
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => {
                    const active = interests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all ${
                          active
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-background text-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Full name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Phone / WhatsApp
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Approx. travel date
                  </label>
                  <Input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl text-base"
              >
                <Send className="w-4 h-4 mr-2" />
                Get My Free Trip Plan
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll take you to our contact page with your details prefilled. No spam — promise.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTripCTA;
