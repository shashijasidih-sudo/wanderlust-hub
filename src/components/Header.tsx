import { Search, Menu, DollarSign, Heart, ShoppingCart, User, ChevronDown, Ship, Anchor, Palmtree, Tent, Fish, Camera, TreePine, Droplet, Building2, Castle, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/yellodae-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    
    // Check if query is a city name
    if (query.includes('bangkok')) navigate('/bangkok');
    else if (query.includes('pattaya')) navigate('/pattaya');
    else if (query.includes('phuket')) navigate('/phuket');
    else if (query.includes('krabi')) navigate('/krabi');
    else if (query.includes('dubai')) navigate('/dubai');
    else if (query.includes('thailand')) navigate('/thailand');
    // Check for popular activities/destinations
    else if (query.includes('phi phi') || query.includes('phiphi')) navigate('/phi-phi-island');
    else if (query.includes('james bond')) navigate('/james-bond-island');
    else if (query.includes('temple') || query.includes('wat') || query.includes('buddha')) navigate('/bangkok');
    else if (query.includes('island') || query.includes('boat') || query.includes('cruise')) navigate('/phuket');
    else if (query.includes('massage') || query.includes('spa')) navigate('/massage-coupons');
    else if (query.includes('elephant')) navigate('/elephant-safari');
    else if (query.includes('tiger')) navigate('/selfie-tigers');
    else if (query.includes('skywalk')) navigate('/bangkok-skywalk');
    else if (query.includes('grand palace') || query.includes('emerald')) navigate('/bangkok-grand-palace-emerald');
    // Default to Bangkok for general searches
    else navigate('/bangkok');
  };

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
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search Destination or activities" 
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
          <form onSubmit={handleSearch} className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search Destination or activities" 
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
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
                <Link to="/thailand" className="w-full">Thailand (All Cities)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/bangkok" className="w-full">Bangkok</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/pattaya" className="w-full">Pattaya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/phuket" className="w-full">Phuket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/krabi" className="w-full">Krabi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/dubai" className="w-full">Dubai</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#singapore" className="w-full">Singapore</a>
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
                <Link to="/phi-phi-island" className="w-full flex items-center gap-2">
                  <Ship className="h-4 w-4" />
                  Phi Phi Island Tours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/james-bond-island" className="w-full flex items-center gap-2">
                  <Anchor className="h-4 w-4" />
                  James Bond Island Tours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/sentosa-island" className="w-full flex items-center gap-2">
                  <Palmtree className="h-4 w-4" />
                  Sentosa Island Tours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/desert-safari" className="w-full flex items-center gap-2">
                  <Tent className="h-4 w-4" />
                  Desert Safari
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/dolphin-show" className="w-full flex items-center gap-2">
                  <Fish className="h-4 w-4" />
                  Dolphin Show
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/selfie-tigers" className="w-full flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Selfie with Tigers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/elephant-safari" className="w-full flex items-center gap-2">
                  <TreePine className="h-4 w-4" />
                  Elephant Safari
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/hot-spring" className="w-full flex items-center gap-2">
                  <Droplet className="h-4 w-4" />
                  Hot Spring and Emeral Pool
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/bangkok-skywalk" className="w-full flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Bangkok Mahanakhon Skywalk
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/dhow-cruise" className="w-full flex items-center gap-2">
                  <Ship className="h-4 w-4" />
                  Dhow Night Cruise
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/atlantis-palm" className="w-full flex items-center gap-2">
                  <Castle className="h-4 w-4" />
                  Atlantis, The Palm
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/massage-coupons" className="w-full flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  Massage Coupons
                </Link>
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
                  <Link to="/phi-phi-island" className="w-full flex items-center gap-2">
                    <Ship className="h-4 w-4" />
                    Phi Phi Island Tours
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/james-bond-island" className="w-full flex items-center gap-2">
                    <Anchor className="h-4 w-4" />
                    James Bond Island Tours
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/sentosa-island" className="w-full flex items-center gap-2">
                    <Palmtree className="h-4 w-4" />
                    Sentosa Island Tours
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/desert-safari" className="w-full flex items-center gap-2">
                    <Tent className="h-4 w-4" />
                    Desert Safari
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/dolphin-show" className="w-full flex items-center gap-2">
                    <Fish className="h-4 w-4" />
                    Dolphin Show
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/selfie-tigers" className="w-full flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    Selfie with Tigers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/elephant-safari" className="w-full flex items-center gap-2">
                    <TreePine className="h-4 w-4" />
                    Elephant Safari
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/hot-spring" className="w-full flex items-center gap-2">
                    <Droplet className="h-4 w-4" />
                    Hot Spring and Emeral Pool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/bangkok-skywalk" className="w-full flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Bangkok Mahanakhon Skywalk
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/dhow-cruise" className="w-full flex items-center gap-2">
                    <Ship className="h-4 w-4" />
                    Dhow Night Cruise
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/atlantis-palm" className="w-full flex items-center gap-2">
                    <Castle className="h-4 w-4" />
                    Atlantis, The Palm
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/massage-coupons" className="w-full flex items-center gap-2">
                    <Ticket className="h-4 w-4" />
                    Massage Coupons
                  </Link>
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
