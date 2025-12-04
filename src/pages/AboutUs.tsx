import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Heart, Globe } from "lucide-react";
import bangkokImg from "@/assets/city-bangkok.jpg";
import phuketImg from "@/assets/city-phuket.jpg";
import krabiImg from "@/assets/city-krabi.jpg";
import pattayaImg from "@/assets/city-pattaya.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const cities = [
  { name: "Bangkok", image: bangkokImg, link: "/bangkok", country: "Thailand" },
  { name: "Phuket", image: phuketImg, link: "/phuket", country: "Thailand" },
  { name: "Krabi", image: krabiImg, link: "/krabi", country: "Thailand" },
  { name: "Pattaya", image: pattayaImg, link: "/pattaya", country: "Thailand" },
];

const values = [
  {
    icon: Users,
    title: "Small Group Tours",
    description: "Intimate experiences with like-minded travelers"
  },
  {
    icon: Heart,
    title: "Budget-Friendly",
    description: "Quality experiences without breaking the bank"
  },
  {
    icon: Globe,
    title: "Local Connections",
    description: "Authentic cultural encounters at every destination"
  },
  {
    icon: MapPin,
    title: "Curated Experiences",
    description: "Handpicked activities for unforgettable journeys"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img 
          src={heroBeach} 
          alt="Beautiful travel destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Yellodae</h1>
            <p className="text-xl md:text-2xl opacity-90">Your Gateway to Unforgettable Adventures</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <span className="text-primary font-bold text-xl">Yellodae</span> is a boutique tour operator dedicated to crafting meaningful and memorable travel experiences across <strong className="text-foreground">Thailand, Singapore, and Dubai</strong>. We focus on delivering <strong className="text-foreground">budget-friendly</strong>, <strong className="text-foreground">small-group tours</strong> that allow travelers to explore comfortably while truly connecting with each destination. From cultural encounters to thrilling activities, our curated experiences are designed to make every journey unique and fulfilling.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Yellodae was founded on a simple belief: <strong className="text-foreground">travel planning should be easy, flexible, and enjoyable</strong>. We understand that not everyone wants the pressure of booking months in advance or navigating countless options on their own. That's why we created a platform where travelers can conveniently book their preferred activities and tours—<strong className="text-foreground">without the stress, without the overwhelm</strong>.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With Yellodae, discovering the world becomes smoother, smarter, and far more enjoyable. We're here to make sure your next adventure starts with excitement, not exhaustion.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Yellodae?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Blocks Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Explore Our Destinations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover amazing activities and tours in our featured cities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city.name}
                to={city.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
                    <span className="text-sm opacity-80 mb-1">{city.country}</span>
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <span className="mt-2 text-sm bg-primary/80 px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Tours
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;