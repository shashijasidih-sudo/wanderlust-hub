import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Seo from "@/components/seo/Seo";
import thailand from "@/assets/hero-thailand-beach.jpg";
import singapore from "@/assets/singapore-city-night.webp";
import dubai from "@/assets/dubai-skyline-night-1.jpg";
import japan from "@/assets/japan-mount-fuji-1.webp";

const destinations = [
  { name: "Thailand", path: "/thailand/destination-guides/", image: thailand, description: "Island tours, city experiences, travel budgets and airport transfers." },
  { name: "Singapore", path: "/singapore/destination-guides/", image: singapore, description: "Attraction guides, Sentosa experiences and itineraries for Indian travellers." },
  { name: "Dubai", path: "/dubai/destination-guides/", image: dubai, description: "Desert safaris, Dubai attractions, cruises and practical travel guides." },
  { name: "Japan", path: "/japan/destination-guides/", image: japan, description: "Mount Fuji, Tokyo and Kyoto guides, with trip costs and planning advice." },
];

export default function TravelBlog() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Travel Blog & Destination Guides | Yellodae" description="Explore Yellodae travel guides for Thailand, Singapore, Dubai and Japan: activities, itineraries, costs and transfers for Indian travellers." path="/blog/" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-3">Travel Blog & Destination Guides</h1>
        <p className="text-muted-foreground mb-8">Travel inspiration and practical planning for your next destination.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map(destination => (
            <Link key={destination.path} to={destination.path} className="group overflow-hidden rounded-lg border bg-card text-card-foreground">
              <div className="aspect-[4/3] overflow-hidden"><SafeImage src={destination.image} alt={destination.name} className="h-full w-full object-cover" /></div>
              <div className="p-4"><h2 className="font-semibold text-lg">{destination.name}</h2><p className="text-sm text-muted-foreground mt-2">{destination.description}</p></div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}