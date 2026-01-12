import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Heart, Globe, Shield, Clock, Star, Sparkles, Award, FileCheck, Building2, ExternalLink } from "lucide-react";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";
import heroBeach from "@/assets/hero-thailand-beach.jpg";
import heroTemple from "@/assets/hero-thailand-temple.jpg";
import yellodaeLogo from "@/assets/yellodae-logo.png";

const cities = [
  { name: "Bangkok", image: bangkokImg, link: "/bangkok", country: "Thailand", tours: "50+ Tours" },
  { name: "Phuket", image: phuketImg, link: "/phuket", country: "Thailand", tours: "40+ Tours" },
  { name: "Krabi", image: krabiImg, link: "/krabi", country: "Thailand", tours: "30+ Tours" },
  { name: "Pattaya", image: pattayaImg, link: "/pattaya", country: "Thailand", tours: "35+ Tours" },
];

const values = [
  {
    icon: Users,
    title: "Small Group Tours",
    description: "Intimate experiences with like-minded travelers for deeper connections"
  },
  {
    icon: Heart,
    title: "Budget-Friendly",
    description: "Premium quality experiences without breaking the bank"
  },
  {
    icon: Globe,
    title: "Local Connections",
    description: "Authentic cultural encounters guided by local experts"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with trusted partners"
  }
];

const stats = [
  { number: "10,000+", label: "Happy Travelers" },
  { number: "200+", label: "Curated Tours" },
  { number: "3", label: "Countries" },
  { number: "4.9", label: "Average Rating", icon: Star }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBeach} 
            alt="Beautiful travel destination" 
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Welcome to</span>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-primary">Yello</span>dae
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Your Gateway to Unforgettable Adventures in Southeast Asia & Beyond
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Main Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <img 
                  src={heroTemple} 
                  alt="Thailand Temple" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <Clock className="w-8 h-8 mb-2" />
                  <p className="font-bold text-lg">Since 2018</p>
                  <p className="text-sm opacity-90">Crafting memories</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Travel Made <span className="text-primary">Simple</span>, Memories Made <span className="text-primary">Forever</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-bold text-xl">Yellodae</span> is a boutique tour operator dedicated to crafting meaningful and memorable travel experiences across <strong className="text-foreground">Thailand, Singapore, and Dubai</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We focus on delivering <strong className="text-foreground">budget-friendly</strong>, <strong className="text-foreground">small-group tours</strong> that allow travelers to explore comfortably while truly connecting with each destination. From cultural encounters to thrilling activities, our curated experiences are designed to make every journey unique and fulfilling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded on a simple belief: <strong className="text-foreground">travel planning should be easy, flexible, and enjoyable</strong>. We created a platform where travelers can conveniently book their preferred activities—without the stress, without the overwhelm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-muted/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Yellodae <span className="text-primary">Difference</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We're not just another travel agency. We're your partners in creating memories that last a lifetime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
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
              <Link
                key={city.name}
                to={city.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-medium tracking-wider uppercase opacity-70 mb-1">{city.country}</span>
                    <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {city.tours}
                      </span>
                    </div>
                    <div className="mt-4 overflow-hidden">
                      <span className="inline-flex items-center gap-2 text-sm bg-primary px-4 py-2 rounded-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                        Explore Tours
                        <MapPin className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Trust Section */}
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
            {/* NIDHI Registration */}
            <a 
              href="/certificates/nidhi-certificate.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-green-500/30 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">NIDHI Registered</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ministry of Tourism, Government of India
              </p>
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
                <span className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                  View Certificate
                  <FileCheck className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* UDYAM MSME Registration */}
            <a 
              href="/certificates/udyam-certificate.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-green-500/30 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">UDYAM MSME Certified</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ministry of MSME, Government of India
              </p>
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
                <span className="inline-flex items-center gap-2 text-sm text-orange-600 font-medium">
                  View Certificate
                  <FileCheck className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* GST Registration */}
            <div className="group bg-background rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">GST Registered</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Goods & Services Tax, India
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground block mb-1">GSTIN:</span>
                  <span className="font-mono font-bold text-foreground text-lg tracking-wide">10BKOPM6410M2Z2</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <Shield className="w-4 h-4" />
                  Tax Compliant Business
                </span>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-muted/50 px-6 py-4 rounded-full">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-muted-foreground">
                All registrations are verifiable with respective government authorities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With Yellodae, discovering the world becomes smoother, smarter, and far more enjoyable. Your next adventure awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/thailand" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Thailand
              <MapPin className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact-us" 
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold border-2 border-border hover:border-primary transition-colors"
            >
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