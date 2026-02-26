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
            <li><Link to="/quick-pay" className="hover:text-background transition-colors">Pay Now</Link></li>
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
            href="https://wa.me/917061710810"
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
            <div className="flex items-center gap-3 flex-wrap">
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
              {/* Razorpay */}
              <div className="bg-white rounded px-2 py-1">
                <svg viewBox="0 0 100 24" className="h-5 w-auto">
                  <path fill="#072654" d="M7.4 6.2L0 24h5.7l1.5-3.8h6.2L9.1 6.2H7.4zm.8 10.5l2.1-5.3 1.2 5.3H8.2z"/>
                  <path fill="#3395FF" d="M22 6.2l-7.4 17.8h5.7l1.5-3.8h6.2L23.7 6.2H22zm.8 10.5l2.1-5.3 1.2 5.3h-3.3z"/>
                  <path fill="#072654" d="M35 6.2v17.8h4.8V6.2H35zM47.5 6.2L41.2 24h5l6.3-17.8h-5zM60 6.2h-8v17.8h4.8v-6h3.2c4 0 6.4-2.4 6.4-5.9 0-3.5-2.4-5.9-6.4-5.9zm-.5 8h-2.7v-4.3h2.7c1.5 0 2.2.8 2.2 2.1 0 1.4-.7 2.2-2.2 2.2zM76 6.2l-4.8 9.5V6.2h-4.8V24h4.5l4.8-9.5V24h4.8V6.2H76zM90 6.2v10.6l-5.5-10.6h-4.8V24h4.5V13.4L89.7 24h4.8V6.2H90z"/>
                </svg>
              </div>
              {/* RuPay */}
              <div className="bg-white rounded px-2 py-1">
                <svg viewBox="0 0 80 24" className="h-5 w-auto">
                  <path fill="#097A44" d="M5 4h8c3 0 5 2 5 5s-2 5-5 5h-3v6H5V4zm5 7h2c1 0 2-.5 2-2s-1-2-2-2H10v4z"/>
                  <path fill="#F37021" d="M20 10h5v10h-5z"/>
                  <path fill="#097A44" d="M28 4h5v16h-5zM36 4h5v6l4-6h6l-5 7 6 9h-6l-4-6-1 1v5h-5V4z"/>
                  <path fill="#F37021" d="M55 4c5 0 8 3.5 8 8s-3 8-8 8-8-3.5-8-8 3-8 8-8zm0 12c2 0 3-1.5 3-4s-1-4-3-4-3 1.5-3 4 1 4 3 4z"/>
                  <path fill="#097A44" d="M65 4h5l3 10 3-10h5l-5 16h-6z"/>
                </svg>
              </div>
              {/* UPI */}
              <div className="bg-white rounded px-2 py-1">
                <svg viewBox="0 0 60 24" className="h-5 w-auto">
                  <path fill="#097A44" d="M8 4v12c0 2 1.5 4 4 4s4-2 4-4V4h-3v12c0 .5-.5 1-1 1s-1-.5-1-1V4H8z"/>
                  <path fill="#F37021" d="M20 4h6c3 0 5 2 5 5s-2 5-5 5h-3v6h-3V4zm3 7h2c1 0 2-.5 2-2s-1-2-2-2h-2v4z"/>
                  <path fill="#097A44" d="M34 4h3v16h-3z"/>
                  <rect fill="#097A44" x="42" y="4" width="16" height="16" rx="2"/>
                  <path fill="white" d="M46 8h8l-4 8z"/>
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
