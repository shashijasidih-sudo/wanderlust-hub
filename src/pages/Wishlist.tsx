import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Loader2, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";

interface WishlistItem {
  id: string; tour_slug: string; tour_name: string;
  tour_image: string | null; tour_price: number | null; created_at: string;
}

const Wishlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) { navigate("/auth"); return; }
    // Placeholder — GET /api/wishlists
    setWishlistItems([]);
    setIsLoading(false);
  }, [user, navigate]);

  const handleRemoveFromWishlist = async (id: string, tourName: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    toast({ title: "Removed from wishlist", description: `${tourName} has been removed from your wishlist.` });
  };

  const handleViewTour = (slug: string) => {
    navigate(slug.startsWith('/') ? slug : `/${slug}`);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12 mt-16">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Heart className="h-8 w-8 text-primary" /> My Wishlist
        </h1>
        {wishlistItems.length === 0 ? (
          <Card className="p-8 text-center">
            <CardContent className="flex flex-col items-center gap-4 pt-6">
              <Heart className="h-16 w-16 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
              <p className="text-muted-foreground">Start exploring tours and save your favorites here!</p>
              <Button onClick={() => navigate("/thailand")}>Discover Tours</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-card-hover transition-all">
                <div className="relative h-48">
                  <img src={item.tour_image || "/placeholder.svg"} alt={item.tour_name} className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300" onClick={() => handleViewTour(item.tour_slug)} />
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full" onClick={() => handleRemoveFromWishlist(item.id, item.tour_name)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 cursor-pointer hover:text-primary transition-colors line-clamp-2" onClick={() => handleViewTour(item.tour_slug)}>{item.tour_name}</h3>
                  <div className="flex items-center justify-between">
                    {item.tour_price && <p className="text-lg font-bold text-primary">INR {item.tour_price.toLocaleString('en-IN')}</p>}
                    <Button size="sm" onClick={() => handleViewTour(item.tour_slug)}>View Tour</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
