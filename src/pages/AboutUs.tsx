import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlanTripCTA from "@/components/PlanTripCTA";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { MapPin, Users, Heart, Globe, Shield, Clock, Star, Sparkles, Award, Plane, Ticket, Car, Package, ShoppingBag, CheckCircle, Hotel, Compass, Briefcase, Instagram, Facebook, Mail } from "lucide-react";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";
import heroBeach from "@/assets/hero-thailand-beach.jpg";
import heroTemple from "@/assets/hero-thailand-temple.jpg";

const cities = [
  { name: "Bangkok", image: bangkokImg, link: "/thailand/bangkok", country: "Thailand", tours: "50+ Tours" },
  { name: "Phuket", image: phuketImg, link: "/thailand/phuket", country: "Thailand", tours: "40+ Tours" },
  { name: "Krabi", image: krabiImg, link: "/thailand/krabi", country: "Thailand", tours: "30+ Tours" },
  { name: "Pattaya", image: pattayaImg, link: "/thailand/pattaya", country: "Thailand", tours: "35+ Tours" },
];

const whatWeDo = [
  {
    icon: Globe,
    title: "Customized International & Domestic Packages",
    description: "End-to-end customized international tour packages and domestic holiday experiences tailored to your travel style."
  },
  {
    icon: Users,
    title: "Couples, Families & Group Holidays",
    description: "Holiday packages designed for couples, families, and groups with flexible itineraries and trusted partners."
  },
  {
    icon: Heart,
    title: "Honeymoon & Romantic Getaways",
    description: "Curated honeymoon tour packages and romantic getaways across Thailand, Andaman, Bali, Maldives and more."
  },
  {
    icon: Sparkles,
    title: "Budget-Friendly & Luxury Travel",
    description: "From smart budget-friendly travel packages to premium luxury travel experiences — your trip, your way."
  },
  {
    icon: Hotel,
    title: "Hotels, Transfers & Guided Tours",
    description: "Hotel bookings, private airport transfers, and expertly guided tours bundled into one seamless experience."
  },
  {
    icon: Compass,
    title: "Personalized Itinerary Planning",
    description: "Talk to our travel consultants for personalized itinerary planning and one-on-one travel consultation."
  }
];

const stats = [
  { number: "10,000+", label: "Happy Travelers" },
  { number: "500+", label: "Tour Packages" },
  { number: "20+", label: "Destinations" },
  { number: "4.9", label: "Average Rating", icon: Star }
];

const faqs = [
  { q: "What kind of travel packages does Yellodae Trails offer?", a: "Yellodae Trails offers customized international tour packages, domestic holiday packages, honeymoon getaways, family trips, and budget-friendly travel experiences across destinations like Thailand, Singapore, Vietnam, Andaman, and South Korea." },
  { q: "Can I customize my tour package with Yellodae Trails?", a: "Yes. Every itinerary on yellodae.com can be fully customized — from hotels and transfers to activities and duration — to match your budget, travel style, and interests." },
  { q: "Do you offer Thailand and Singapore tour packages?", a: "Absolutely. Thailand tour packages and Singapore holiday packages are among our most popular offerings, including activities, attraction tickets, transfers, and hotel bookings." },
  { q: "Do you arrange Andaman honeymoon and Vietnam travel packages?", a: "Yes. We design Andaman honeymoon packages and Vietnam travel experiences with handpicked stays, sightseeing, and private transfers for a stress-free journey." },
  { q: "Can I book hotels and airport transfers separately?", a: "Yes. Beyond full packages, you can book hotels, private airport transfers, and guided tours individually through Yellodae Trails." },
  { q: "How do I book a tour with Yellodae Trails?", a: "You can browse and book travel packages online at yellodae.com or speak with our travel experts for personalized itinerary planning and travel consultation." }
];

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Yellodae Trails | Smart Travel, Customized Tour Packages";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Yellodae Trails is a smart travel company in India offering customized international tour packages, domestic holidays, honeymoon trips & travel consultation via yellodae.com.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    return () => { document.title = "Yellodae"; };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBeach} alt="Travel destinations by Yellodae" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">About</span>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-primary">Yello</span>dae
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Smart Travel · Customized Tour Packages · Curated Holidays Across India & the World
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl shadow-2xl border border-border/50 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {stat.number}
                  </span>
                  {stat.icon && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                </div>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <img src={heroTemple} alt="Yellodae Trails customized tour packages" className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <Plane className="w-8 h-8 mb-2" />
                  <p className="font-bold text-lg">20+ Destinations</p>
                  <p className="text-sm opacity-90">India · Thailand · Singapore · Vietnam · Korea</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Smart Travel, <span className="text-primary">Personalized</span> for You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-bold text-xl">Yellodae Trails</span>, we believe in <strong className="text-foreground">smart travel</strong> — more than just visiting destinations, it's about discovering cultures, creating memories, and experiencing the world in a way that feels uniquely yours. Through our digital platform, <strong className="text-foreground">yellodae.com</strong>, we offer customized travel packages, international tour packages, and domestic holiday experiences designed for modern travelers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a passion for exploration and a commitment to excellence, Yellodae Trails is a growing <strong className="text-foreground">travel company in India</strong> focused on delivering seamless and personalized journeys. We simplify travel planning, making it easy for you to book trips, design itineraries, and explore the best destinations across the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for <strong className="text-foreground">Thailand tour packages</strong>, <strong className="text-foreground">Singapore holiday packages</strong>, <strong className="text-foreground">Vietnam travel experiences</strong>, <strong className="text-foreground">Andaman honeymoon packages</strong>, or unique destinations like <strong className="text-foreground">South Korea tours</strong>, our expert team ensures every detail is perfectly planned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-muted/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              End-to-End <span className="text-primary">Travel Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              At Yellodae Trails, we specialize in custom travel planning services that go beyond standard offerings — discover, compare, and book the best travel packages online with expert assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((reason, index) => (
              <div 
                key={index} 
                className="group relative bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Explore Destinations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Your <span className="text-primary">Adventure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover amazing activities and tours in our featured cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link key={city.name} to={city.link} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="aspect-[3/4] relative">
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-medium tracking-wider uppercase opacity-70 mb-1">{city.country}</span>
                    <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{city.tours}</span>
                    </div>
                    <div className="mt-4 overflow-hidden">
                      <span className="inline-flex items-center gap-2 text-sm bg-primary px-4 py-2 rounded-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                        Explore Tours <MapPin className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 bg-muted/50 px-6 py-4 rounded-full">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-muted-foreground">
              Trusted Travel Service Provider — Personalized Planning, Transparent Pricing & 24/7 Support
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Common Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-foreground font-semibold text-lg list-none">
                  {faq.q}
                  <span className="ml-4 text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA: Plan My Trip */}
      <PlanTripCTA />

      {/* Connect With Us / CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Connect With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Your Journey with <span className="text-primary">yellodae.com</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow Yellodae Trails on social media for travel inspiration, exclusive offers, and updates on the latest tour packages and travel deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/thailand" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              Explore Tour Packages <MapPin className="w-5 h-5" />
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold border-2 border-border hover:border-primary transition-colors">
              Talk to Our Experts
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.instagram.com/yellodaetrails" target="_blank" rel="noopener noreferrer" aria-label="Yellodae Trails on Instagram" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/yellodaetrails" target="_blank" rel="noopener noreferrer" aria-label="Yellodae Trails on Facebook" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="mailto:info@yellodae.com" aria-label="Email Yellodae Trails" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
