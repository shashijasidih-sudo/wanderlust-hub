import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-background/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-background/80 mb-6">
              Subscribe to get special offers, travel inspiration, and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Yellodae
            </h3>
            <p className="text-background/80 text-sm mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li><Link to="/about-us" className="hover:text-background transition-colors">About Us</Link></li>
            <li><Link to="/thailand" className="hover:text-background transition-colors">Trending Thailand Activities</Link></li>
            <li><Link to="/dubai" className="hover:text-background transition-colors">Trending Dubai Activities</Link></li>
            <li><a href="#singapore" className="hover:text-background transition-colors">Trending Singapore Activities</a></li>
            <li><Link to="/tour-packages" className="hover:text-background transition-colors">Tours & Packages</Link></li>
            <li><Link to="/thailand-smart-guides" className="hover:text-background transition-colors">Smart Destination Guides</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li><Link to="/contact-us" className="hover:text-background transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
          </ul>
        </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-background transition-colors">Cookie Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-background transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© 2024 Yellodae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
