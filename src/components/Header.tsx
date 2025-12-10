import { Menu, IndianRupee, Heart, ShoppingCart, User, ChevronDown, Ship, Anchor, Palmtree, Tent, Fish, Camera, TreePine, Droplet, Building2, Castle, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/yellodae-logo.png";
import SearchInput from "./SearchInput";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#EAF3FF' }}>
      {/* Top Bar */}
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="Yellodae Logo" className="h-14 w-14 object-contain" />
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
          <div className="hidden md:flex flex-1 mx-4">
            <SearchInput placeholder="Search destinations or activities..." />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                  <IndianRupee className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50">
                <DropdownMenuItem className="cursor-pointer">INR - Indian Rupee</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">EUR - Euro</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">GBP - British Pound</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">AED - UAE Dirham</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <SearchInput placeholder="Search destinations or activities..." />
        </div>

        {/* Navigation Bar - Desktop */}
        <nav className="hidden md:flex items-center gap-6 pb-3 border-t pt-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Activities to Do
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-xl z-50 min-w-[240px] p-2">
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Palmtree className="h-5 w-5 mr-3 text-primary" />
                <Link to="/thailand" className="w-full font-medium">Thailand (All Cities)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Building2 className="h-5 w-5 mr-3 text-primary" />
                <Link to="/bangkok" className="w-full font-medium">Bangkok</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Ship className="h-5 w-5 mr-3 text-primary" />
                <Link to="/pattaya" className="w-full font-medium">Pattaya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Fish className="h-5 w-5 mr-3 text-primary" />
                <Link to="/phuket" className="w-full font-medium">Phuket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Anchor className="h-5 w-5 mr-3 text-primary" />
                <Link to="/krabi" className="w-full font-medium">Krabi</Link>
              </DropdownMenuItem>
              <div className="h-px bg-border my-2" />
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Castle className="h-5 w-5 mr-3 text-primary" />
                <Link to="/dubai" className="w-full font-medium">Dubai</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <TreePine className="h-5 w-5 mr-3 text-primary" />
                <Link to="/singapore" className="w-full font-medium">Singapore</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Airport Transfers
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-xl z-50 min-w-[240px] p-2">
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Palmtree className="h-5 w-5 mr-3 text-primary" />
                <Link to="/thailand" className="w-full font-medium">Thailand</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Building2 className="h-5 w-5 mr-3 text-primary" />
                <Link to="/bangkok" className="w-full font-medium">Bangkok</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Fish className="h-5 w-5 mr-3 text-primary" />
                <Link to="/phuket" className="w-full font-medium">Phuket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Anchor className="h-5 w-5 mr-3 text-primary" />
                <Link to="/krabi" className="w-full font-medium">Krabi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Ship className="h-5 w-5 mr-3 text-primary" />
                <Link to="/pattaya" className="w-full font-medium">Pattaya</Link>
              </DropdownMenuItem>
              <div className="h-px bg-border my-2" />
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Castle className="h-5 w-5 mr-3 text-primary" />
                <Link to="/dubai" className="w-full font-medium">Dubai</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <TreePine className="h-5 w-5 mr-3 text-primary" />
                <a href="#singapore" className="w-full font-medium">Singapore</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/tour-packages" className="text-sm font-medium transition-colors hover:text-primary">
            Tours & Packages
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Smart Destinations
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-xl z-50 min-w-[260px] p-2">
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Palmtree className="h-5 w-5 mr-3 text-primary" />
                <Link to="/thailand-smart-guides" className="w-full font-medium">Thailand Smart Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <TreePine className="h-5 w-5 mr-3 text-primary" />
                <Link to="/singapore-smart-guides" className="w-full font-medium">Singapore Smart Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Castle className="h-5 w-5 mr-3 text-primary" />
                <Link to="/dubai-smart-guides" className="w-full font-medium">Dubai Smart Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Droplet className="h-5 w-5 mr-3 text-primary" />
                <Link to="/netherlands-smart-guides" className="w-full font-medium">Netherlands Smart Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Tent className="h-5 w-5 mr-3 text-primary" />
                <a href="#australia" className="w-full font-medium">Australia Smart Guides</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="https://www.barnip.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
            Travel Essentials
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Activities to Do
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 min-w-[200px]">
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Palmtree className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/thailand" className="w-full">Thailand (All Cities)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Building2 className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/bangkok" className="w-full">Bangkok</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Ship className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/pattaya" className="w-full">Pattaya</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Fish className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/phuket" className="w-full">Phuket</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Anchor className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/krabi" className="w-full">Krabi</Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Castle className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/dubai" className="w-full">Dubai</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <TreePine className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/singapore" className="w-full">Singapore</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Airport Transfers
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 min-w-[200px]">
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Palmtree className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/thailand" className="w-full">Thailand</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Building2 className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/bangkok" className="w-full">Bangkok</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Fish className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/phuket" className="w-full">Phuket</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Anchor className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/krabi" className="w-full">Krabi</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Ship className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/pattaya" className="w-full">Pattaya</Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Castle className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/dubai" className="w-full">Dubai</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <TreePine className="h-4 w-4 mr-2 text-primary" />
                  <a href="#singapore" className="w-full">Singapore</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/tour-packages" className="text-sm font-medium transition-colors hover:text-primary">
              Tours & Packages
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Smart Destinations
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 min-w-[200px]">
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Palmtree className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/thailand-smart-guides" className="w-full">Thailand Smart Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <TreePine className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/singapore-smart-guides" className="w-full">Singapore Smart Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Castle className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/dubai-smart-guides" className="w-full">Dubai Smart Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Droplet className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/netherlands-smart-guides" className="w-full">Netherlands Smart Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Tent className="h-4 w-4 mr-2 text-primary" />
                  <a href="#australia" className="w-full">Australia Smart Guides</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="https://www.barnip.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
              Travel Essentials
            </a>
            <div className="flex items-center gap-2 pt-2 border-t">
              <Button variant="ghost" size="icon">
                <IndianRupee className="h-5 w-5" />
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
