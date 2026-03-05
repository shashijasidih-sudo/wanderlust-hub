import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Heart, Globe, Shield, Clock, Star, Sparkles, Award, FileCheck, Building2, ExternalLink, Plane, Ticket, Car, Package, ShoppingBag, CheckCircle } from "lucide-react";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";
import heroBeach from "@/assets/hero-thailand-beach.jpg";
import heroTemple from "@/assets/hero-thailand-temple.jpg";

const cities = [
  { name: "Bangkok", image: bangkokImg, link: "/bangkok", country: "Thailand", tours: "50+ Tours" },
  { name: "Phuket", image: phuketImg, link: "/phuket", country: "Thailand", tours: "40+ Tours" },
  { name: "Krabi", image: krabiImg, link: "/krabi", country: "Thailand", tours: "30+ Tours" },
  { name: "Pattaya", image: pattayaImg, link: "/pattaya", country: "Thailand", tours: "35+ Tours" },
];

const whyBookReasons = [
  {
    icon: Ticket,
    title: "Affordable Activity Prices",
    description: "Get competitive prices for Thailand activities, Singapore attraction tickets, and Dubai activities without paying for unnecessary inclusions."
  },
  {
    icon: Package,
    title: "Flexible Travel Planning",
    description: "Choose individual activities instead of full packages and build your own travel itinerary."
  },
  {
    icon: Car,
    title: "Reliable Private Transfers",
    description: "Book private airport transfers, hotel transfers, and intercity transfers for safe and comfortable transportation."
  },
  {
    icon: Globe,
    title: "Customized Travel Packages",
    description: "Our experts design customized international tour packages that match your budget, travel style, and interests."
  },
  {
    icon: ShoppingBag,
    title: "Travel Essentials Guidance",
    description: "We recommend travel essentials for international travel that help you pack smarter and travel more comfortably."
  },
  {
    icon: Shield,
    title: "Trust & Certifications",
    description: "NIDHI affiliated and Ministry of Tourism approved, ensuring professional standards and reliable travel services."
  }
];

const stats = [
  { number: "10,000+", label: "Happy Travelers" },
  { number: "200+", label: "Curated Tours" },
  { number: "3", label: "Countries" },
  { number: "4.9", label: "Average Rating", icon: Star }
];

const faqs = [
  { q: "Can I book only activities instead of full tour packages?", a: "Yes. Yellodae allows travelers to book individual activities and attraction tickets instead of buying full tour packages." },
  { q: "Do you offer Thailand activities booking online?", a: "Yes. You can easily complete Thailand activities booking directly through Yellodae." },
  { q: "Can I book Singapore attraction tickets before my trip?", a: "Yes. Yellodae allows travelers to pre-book Singapore attraction tickets to avoid queues and get better prices." },
  { q: "Do you offer Dubai activities online booking?", a: "Yes. We provide convenient Dubai activities online booking for many popular attractions and experiences." },
  { q: "Do you provide airport transfers?", a: "Yes. We offer private airport transfers, hotel transfers, and intercity transportation." },
  { q: "Do you create customized tour packages?", a: "Yes. Our team designs customized international tour packages tailored to your travel preferences and budget." }
];

const AboutUs = () => {
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
              Your Smart Travel Platform for Affordable International Experiences
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
                <img src={heroTemple} alt="Thailand Temple" className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <Plane className="w-8 h-8 mb-2" />
                  <p className="font-bold text-lg">3 Countries</p>
                  <p className="text-sm opacity-90">Thailand · Singapore · Dubai</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Explore More, <span className="text-primary">Spend Less</span>, Plan <span className="text-primary">Smarter</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-bold text-xl">Yellodae</span> is a smart travel platform created to help Indian travelers book affordable international activities, attraction tickets, and private transfers in top destinations like <strong className="text-foreground">Thailand, Singapore, and Dubai</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in <strong className="text-foreground">Thailand activities booking</strong>, <strong className="text-foreground">Singapore attraction tickets</strong>, and <strong className="text-foreground">Dubai activities online booking</strong>, allowing travelers to easily plan their experiences before arriving at their destination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Instead of purchasing expensive bundled packages, Yellodae allows you to <strong className="text-foreground">select only the activities you want</strong> and create your own personalized travel itinerary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In addition to activities, we provide <strong className="text-foreground">reliable private airport transfers, hotel transfers, and intercity transportation</strong>, ensuring a smooth and comfortable travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Yellodae */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-muted/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Book With <span className="text-primary">Yellodae</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Smart, affordable, and flexible travel planning for Indian travelers exploring the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBookReasons.map((reason, index) => (
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

      {/* Credentials & Trust */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Verified & Trusted
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Credentials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Yellodae is a government-registered and verified tour operator, ensuring complete trust and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/certificates/nidhi-certificate.pdf" target="_blank" rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-green-500/30 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">NIDHI Affiliated</h3>
              <p className="text-sm text-muted-foreground mb-4">Ensuring financial discipline and structured business operations</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">NIDHI ID:</span>
                  <span className="font-mono font-semibold text-foreground">EBR000108</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Issue Date:</span>
                  <span className="font-semibold text-foreground">10/03/2025</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium">View Certificate <FileCheck className="w-4 h-4" /></span>
              </div>
            </a>

            <a href="/certificates/udyam-certificate.pdf" target="_blank" rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-green-500/30 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Ministry of Tourism Approved</h3>
              <p className="text-sm text-muted-foreground mb-4">Recognized travel service provider maintaining professional standards</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">UDYAM No:</span>
                  <span className="font-mono font-semibold text-foreground text-xs">UDYAM-BR-26-0210753</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Enterprise Type:</span>
                  <span className="font-semibold text-foreground">Micro</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-orange-600 font-medium">View Certificate <FileCheck className="w-4 h-4" /></span>
              </div>
            </a>

            <div className="group bg-background rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-medium">Active</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">GST Registered</h3>
              <p className="text-sm text-muted-foreground mb-4">Goods & Services Tax, India</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground block mb-1">GSTIN:</span>
                  <span className="font-mono font-bold text-foreground text-lg tracking-wide">10BKOPM6410M2Z2</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <Shield className="w-4 h-4" /> Tax Compliant Business
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-muted/50 px-6 py-4 rounded-full">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-muted-foreground">All registrations are verifiable with respective government authorities</span>
            </div>
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our mission is simple — help travelers explore more while spending less and planning smarter. Your next adventure awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/thailand" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              Explore Thailand <MapPin className="w-5 h-5" />
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold border-2 border-border hover:border-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
