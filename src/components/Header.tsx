import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Yellodae
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Things to Do
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Trending Activities
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Tours & Packages
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Smart Destinations
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Support
          </a>
        </nav>

        {/* Right side - Sign In & Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
            <User className="h-4 w-4" />
            Sign In
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Things to Do
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Trending Activities
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Tours & Packages
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Smart Destinations
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Support
            </a>
            <Button variant="outline" className="w-full mt-2">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
