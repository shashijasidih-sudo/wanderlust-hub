import { Menu, IndianRupee, Heart, ShoppingCart, User, ChevronDown, Ship, Anchor, Palmtree, Tent, Fish, Camera, TreePine, Droplet, Building2, Castle, Ticket, LogOut, CalendarDays, ShieldCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/yellodae-logo.png";
import SearchInput from "./SearchInput";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { useCurrency, CURRENCIES } from "@/contexts/CurrencyContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { cartCount } = useCart();
  const { currency, setCurrency, currencySymbol } = useCurrency();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const menuItemClass = "cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3 flex items-center w-full";
  const mobileMenuItemClass = "cursor-pointer hover:bg-primary/10 flex items-center w-full";

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#EAF3FF' }}>
      {/* Top Bar */}
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="Yellodae Logo" className="h-14 w-14 object-contain" />
            <div className="text-2xl font-bold" style={{ color: 'rgb(25, 25, 112)' }}>
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
                {CURRENCIES.map(c => (
                  <DropdownMenuItem
                    key={c.code}
                    className={`cursor-pointer ${currency === c.code ? "bg-primary/10 font-semibold" : ""}`}
                    onClick={() => setCurrency(c.code)}
                  >
                    {c.symbol} {c.code} - {c.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.email?.split('@')[0] || 'My Account'}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border shadow-lg z-50 min-w-[180px]" align="end">
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/10" asChild>
                    <Link to="/user-profile" className="flex items-center w-full">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/10" asChild>
                    <Link to="/user-bookings" className="flex items-center w-full">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/10" asChild>
                    <Link to="/wishlist" className="flex items-center w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/10" asChild>
                    <Link to="/settings" className="flex items-center w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  {user.email === "admin@yellodae.com" && (
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10" asChild>
                      <Link to="/admin" className="flex items-center w-full">
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer hover:bg-destructive/10 text-destructive" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Sign Up / Login
                </Button>
              </Link>
            )}
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
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/thailand">
                  <Palmtree className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Thailand (All Cities)</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/bangkok">
                  <Building2 className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Bangkok</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/pattaya">
                  <Ship className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Pattaya</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/phuket">
                  <Fish className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Phuket</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/krabi">
                  <Anchor className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Krabi</span>
                </Link>
              </DropdownMenuItem>
              <div className="h-px bg-border my-2" />
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/dubai">
                  <Castle className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Dubai</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/singapore">
                  <TreePine className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Singapore</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Private Transfers
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-xl z-50 min-w-[240px] p-2">
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/thailand/transfers">
                  <Palmtree className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Thailand</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/bangkok/transfers">
                  <Building2 className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Bangkok</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/phuket/transfers">
                  <Fish className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Phuket</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/krabi/transfers">
                  <Anchor className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Krabi</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/pattaya/transfers">
                  <Ship className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Pattaya</span>
                </Link>
              </DropdownMenuItem>
              <div className="h-px bg-border my-2" />
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/dubai/transfers">
                  <Castle className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Dubai</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/singapore/transfers">
                  <TreePine className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Singapore</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="https://www.barnip.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
            Must Have Travel Items
          </a>
          <Link to="/tour-packages" className="text-sm font-medium transition-colors hover:text-primary">
            Tours & Packages
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Smart Destinations
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border shadow-xl z-50 min-w-[260px] p-2">
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/thailand-smart-guides">
                  <Palmtree className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Thailand Smart Guides</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/singapore-smart-guides">
                  <TreePine className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Singapore Smart Guides</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/dubai-smart-guides">
                  <Castle className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Dubai Smart Guides</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <Link to="/netherlands-smart-guides">
                  <Droplet className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Netherlands Smart Guides</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={menuItemClass}>
                <a href="#australia">
                  <Tent className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Australia Smart Guides</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/thailand" onClick={() => setIsMenuOpen(false)}>
                    <Palmtree className="h-4 w-4 mr-2 text-primary" />
                    Thailand (All Cities)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/bangkok" onClick={() => setIsMenuOpen(false)}>
                    <Building2 className="h-4 w-4 mr-2 text-primary" />
                    Bangkok
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/pattaya" onClick={() => setIsMenuOpen(false)}>
                    <Ship className="h-4 w-4 mr-2 text-primary" />
                    Pattaya
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/phuket" onClick={() => setIsMenuOpen(false)}>
                    <Fish className="h-4 w-4 mr-2 text-primary" />
                    Phuket
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/krabi" onClick={() => setIsMenuOpen(false)}>
                    <Anchor className="h-4 w-4 mr-2 text-primary" />
                    Krabi
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/dubai" onClick={() => setIsMenuOpen(false)}>
                    <Castle className="h-4 w-4 mr-2 text-primary" />
                    Dubai
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/singapore" onClick={() => setIsMenuOpen(false)}>
                    <TreePine className="h-4 w-4 mr-2 text-primary" />
                    Singapore
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Private Transfers
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 min-w-[200px]">
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/thailand/transfers" onClick={() => setIsMenuOpen(false)}>
                    <Palmtree className="h-4 w-4 mr-2 text-primary" />
                    Thailand
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/bangkok/transfers" onClick={() => setIsMenuOpen(false)}>
                    <Building2 className="h-4 w-4 mr-2 text-primary" />
                    Bangkok
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/phuket/transfers" onClick={() => setIsMenuOpen(false)}>
                    <Fish className="h-4 w-4 mr-2 text-primary" />
                    Phuket
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/krabi/transfers" onClick={() => setIsMenuOpen(false)}>
                    <Anchor className="h-4 w-4 mr-2 text-primary" />
                    Krabi
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/pattaya/transfers" onClick={() => setIsMenuOpen(false)}>
                    <Ship className="h-4 w-4 mr-2 text-primary" />
                    Pattaya
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/dubai/transfers" onClick={() => setIsMenuOpen(false)}>
                    <Castle className="h-4 w-4 mr-2 text-primary" />
                    Dubai
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/singapore/transfers" onClick={() => setIsMenuOpen(false)}>
                    <TreePine className="h-4 w-4 mr-2 text-primary" />
                    Singapore
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/tour-packages" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Tours & Packages
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Smart Destinations
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 min-w-[200px]">
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/thailand-smart-guides" onClick={() => setIsMenuOpen(false)}>
                    <Palmtree className="h-4 w-4 mr-2 text-primary" />
                    Thailand Smart Guides
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/singapore-smart-guides" onClick={() => setIsMenuOpen(false)}>
                    <TreePine className="h-4 w-4 mr-2 text-primary" />
                    Singapore Smart Guides
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/dubai-smart-guides" onClick={() => setIsMenuOpen(false)}>
                    <Castle className="h-4 w-4 mr-2 text-primary" />
                    Dubai Smart Guides
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <Link to="/netherlands-smart-guides" onClick={() => setIsMenuOpen(false)}>
                    <Droplet className="h-4 w-4 mr-2 text-primary" />
                    Netherlands Smart Guides
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={mobileMenuItemClass}>
                  <a href="#australia">
                    <Tent className="h-4 w-4 mr-2 text-primary" />
                    Australia Smart Guides
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="https://www.barnip.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
              Must Have Travel Items
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
            {user ? (
              <div className="flex flex-col gap-2 w-full">
                <Link to="/user-profile" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Link to="/user-bookings" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    My Bookings
                  </Button>
                </Link>
                <Link to="/settings" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </Link>
                <Link to="/wishlist" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Button>
                </Link>
                <Button variant="destructive" className="w-full justify-start" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </div>
            ) : (
              <Link to="/auth" className="w-full">
                <Button variant="default" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign Up / Login
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
