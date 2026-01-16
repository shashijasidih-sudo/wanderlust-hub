import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";

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
            <li><Link to="/thailand" className="hover:text-background transition-colors">Trending Thailand Activities</Link></li>
            <li><Link to="/dubai" className="hover:text-background transition-colors">Trending Dubai Activities</Link></li>
            <li><a href="#singapore" className="hover:text-background transition-colors">Trending Singapore Activities</a></li>
            <li><Link to="/thailand" className="hover:text-background transition-colors">Thailand Transfers</Link></li>
            <li><a href="#singapore" className="hover:text-background transition-colors">Singapore Transfers</a></li>
            <li><Link to="/dubai" className="hover:text-background transition-colors">Dubai Transfers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li><Link to="/thailand-smart-guides" className="hover:text-background transition-colors">Smart Destination Guides</Link></li>
            <li><Link to="/about-us" className="hover:text-background transition-colors">About Us</Link></li>
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
              <li><Link to="/disclaimer" className="hover:text-background transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* WhatsApp & Payment Methods Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-background/20">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-background/60 text-sm">We accept:</span>
            <div className="flex items-center gap-3">
              {/* Visa */}
              <div className="bg-white rounded px-2 py-1">
                <svg viewBox="0 0 48 16" className="h-5 w-auto">
                  <path fill="#1434CB" d="M19.5 1.5l-2.7 13h-2.2l2.7-13h2.2zm11.1 8.4l1.2-3.2.7 3.2h-1.9zm2.5 4.6h2l-1.8-13h-1.8c-.4 0-.8.2-1 .6l-3.5 12.4h2.5l.5-1.4h3l.1 1.4zm-6.8-4.2c0-3.4-4.7-3.6-4.7-5.1 0-.5.5-.9 1.4-.9.8 0 1.5.1 2.1.4l.4-1.8c-.5-.2-1.3-.4-2.3-.4-2.5 0-4.2 1.3-4.2 3.2 0 1.4 1.2 2.2 2.2 2.6 1 .5 1.3.8 1.3 1.2 0 .7-.8 1-1.5 1-.9 0-1.7-.2-2.4-.5l-.4 1.9c.6.3 1.6.5 2.7.5 2.6 0 4.4-1.3 4.4-3.3l.1.2zM12.5 1.5l-4.1 13H5.9L3.8 4.2c-.1-.5-.2-.6-.6-.8C2.6 3.1 1.6 2.8.5 2.6l.1-.5h4c.5 0 1 .4 1.1.9l1 5.2 2.5-6.1h2.3v-.6z"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded px-2 py-1">
                <svg viewBox="0 0 48 30" className="h-5 w-auto">
                  <circle fill="#EB001B" cx="15" cy="15" r="15"/>
                  <circle fill="#F79E1B" cx="33" cy="15" r="15"/>
                  <path fill="#FF5F00" d="M24 4.5a14.9 14.9 0 000 21 14.9 14.9 0 000-21z"/>
                </svg>
              </div>
              {/* PayPal */}
              <div className="bg-white rounded px-2 py-1">
                <svg viewBox="0 0 48 16" className="h-5 w-auto">
                  <path fill="#253B80" d="M17.2 4.9h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3h1.6c.2 0 .4-.2.5-.4l.4-2.5c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 4-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.5-.7-2.7-.7zm.4 3.2c-.2 1.3-1.1 1.3-2 1.3h-.5l.4-2.2c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.2.2.2.5.1.7z"/>
                  <path fill="#179BD7" d="M27.5 8h-1.6c-.1 0-.2.1-.3.2l-.1.5-.1-.2c-.4-.5-1.2-.7-2-.7-1.9 0-3.5 1.4-3.8 3.4-.2 1 .1 1.9.6 2.6.5.6 1.2.8 2 .8 1.4 0 2.2-.9 2.2-.9l-.1.5c0 .2.1.3.3.3h1.5c.2 0 .4-.2.5-.4l.9-5.7c0-.2-.1-.4-.1-.4zm-2.2 3.3c-.2 1-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.2-1.1.1-1 .9-1.7 1.9-1.7.5 0 .9.2 1.1.5.2.2.3.6.2 1.1z"/>
                  <path fill="#253B80" d="M36.8 8h-1.6c-.2 0-.3.1-.4.2l-2.3 3.4-1-3.3c-.1-.2-.3-.3-.5-.3h-1.6c-.2 0-.3.2-.3.4l1.8 5.4-1.7 2.4c-.1.2 0 .5.2.5h1.6c.2 0 .3-.1.4-.2l5.6-8c.1-.2 0-.5-.2-.5z"/>
                  <path fill="#179BD7" d="M41.7 4.9h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3h1.7c.2 0 .3-.1.3-.3l.4-2.6c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 4-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.5-.7-2.6-.7zm.4 3.2c-.2 1.3-1.1 1.3-2 1.3h-.5l.4-2.2c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.2.2.2.5.1.7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-background/60">
          <p>© 2026 Yellodae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
