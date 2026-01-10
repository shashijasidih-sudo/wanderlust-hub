import { Menu, IndianRupee, Heart, ShoppingCart, User, ChevronDown, Ship, Anchor, Palmtree, Tent, Fish, Camera, TreePine, Droplet, Building2, Castle, Ticket, LogOut, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/yellodae-logo.png";
import SearchInput from "./SearchInput";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Logout Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      navigate("/");
    }
  };

  return (
    <header className="sticky top-14 md:top-16 z-50 w-full border-b" style={{ backgroundColor: '#EAF3FF' }}>
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
                <DropdownMenuItem className="cursor-pointer">₹ INR - Indian Rupee</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">฿ THB - Thai Baht</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">$ USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">د.إ AED - UAE Dirham</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">S$ SGD - Singapore Dollar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <ShoppingCart className="h-5 w-5" />
            </Button>
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
                    <Link to="/profile" className="flex items-center w-full">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/10" asChild>
                    <Link to="/my-bookings" className="flex items-center w-full">
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
                <Link to="/bangkok/transfers" className="w-full font-medium">Bangkok</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Fish className="h-5 w-5 mr-3 text-primary" />
                <Link to="/phuket/transfers" className="w-full font-medium">Phuket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Anchor className="h-5 w-5 mr-3 text-primary" />
                <Link to="/krabi/transfers" className="w-full font-medium">Krabi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Ship className="h-5 w-5 mr-3 text-primary" />
                <Link to="/pattaya/transfers" className="w-full font-medium">Pattaya</Link>
              </DropdownMenuItem>
              <div className="h-px bg-border my-2" />
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <Castle className="h-5 w-5 mr-3 text-primary" />
                <Link to="/dubai/transfers" className="w-full font-medium">Dubai</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded-md transition-colors px-3 py-3">
                <TreePine className="h-5 w-5 mr-3 text-primary" />
                <Link to="/singapore/transfers" className="w-full font-medium">Singapore</Link>
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
                  <Link to="/bangkok/transfers" className="w-full">Bangkok</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Fish className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/phuket/transfers" className="w-full">Phuket</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Anchor className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/krabi/transfers" className="w-full">Krabi</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Ship className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/pattaya" className="w-full">Pattaya</Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <Castle className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/dubai/transfers" className="w-full">Dubai</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                  <TreePine className="h-4 w-4 mr-2 text-primary" />
                  <Link to="/singapore/transfers" className="w-full">Singapore</Link>
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
            {user ? (
              <div className="flex flex-col gap-2 w-full">
                <Link to="/profile" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Link to="/my-bookings" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    My Bookings
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
