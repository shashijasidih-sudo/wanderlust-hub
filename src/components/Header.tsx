import { Search, Menu, DollarSign, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/yellodae-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="Yellodae Logo" className="h-10 w-10 object-contain" />
            <div 
              className="text-2xl font-bold"
              style={{
                color: 'rgb(25, 25, 112)'
              }}
            >
              Yellodae
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search Destination or activities" 
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <DollarSign className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign Up / Login
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

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search Destination or activities" 
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Navigation Bar - Desktop */}
        <nav className="hidden md:flex items-center gap-6 pb-3 border-t pt-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Things to Do
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-lg z-50">
              <DropdownMenuItem className="cursor-pointer">
                <a href="#thailand" className="w-full">Thailand</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#singapore" className="w-full">Singapore</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#dubai" className="w-full">Dubai</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Trending Activities
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-lg z-50">
              <DropdownMenuItem className="cursor-pointer">
                <a href="#phi-phi-island" className="w-full">Phi Phi Island Tours</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#james-bond-island" className="w-full">James Bond Island Tours</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#sentosa-island" className="w-full">Sentosa Island Tours</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#desert-safari" className="w-full">Desert Safari</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#dolphin-show" className="w-full">Dolphin Show</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#selfie-tigers" className="w-full">Selfie with Tigers</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#elephant-safari" className="w-full">Elephant Safari</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#hot-spring" className="w-full">Hot Spring and Emeral Pool</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#bangkok-skywalk" className="w-full">Bangkok Mahanakhon Skywalk</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#dhow-cruise" className="w-full">Dhow Night Cruise</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#atlantis-palm" className="w-full">Atlantis, The Palm</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#massage-coupons" className="w-full">Massage Coupons</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Tours & Packages
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Smart Destinations
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Things to Do
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50">
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#thailand" className="w-full">Thailand</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#singapore" className="w-full">Singapore</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#dubai" className="w-full">Dubai</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Trending Activities
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50">
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#phi-phi-island" className="w-full">Phi Phi Island Tours</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#james-bond-island" className="w-full">James Bond Island Tours</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#sentosa-island" className="w-full">Sentosa Island Tours</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#desert-safari" className="w-full">Desert Safari</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#dolphin-show" className="w-full">Dolphin Show</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#selfie-tigers" className="w-full">Selfie with Tigers</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#elephant-safari" className="w-full">Elephant Safari</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#hot-spring" className="w-full">Hot Spring and Emeral Pool</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#bangkok-skywalk" className="w-full">Bangkok Mahanakhon Skywalk</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#dhow-cruise" className="w-full">Dhow Night Cruise</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#atlantis-palm" className="w-full">Atlantis, The Palm</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#massage-coupons" className="w-full">Massage Coupons</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Tours & Packages
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Smart Destinations
            </a>
            <div className="flex items-center gap-2 pt-2 border-t">
              <Button variant="ghost" size="icon">
                <DollarSign className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="default" className="w-full">
              <User className="h-4 w-4 mr-2" />
              Sign Up / Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
