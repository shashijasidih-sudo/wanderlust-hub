import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Loader2, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCurrency } from "@/contexts/CurrencyContext";
import { supabase } from "@/lib/supabaseClient";
import { removeFromWishlist } from "@/services/wishlist";

interface WishlistRow {
  id: string;
  product_id: string;
  title: string;
}

const Wishlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { formatPrice } = useCurrency();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistRow[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        navigate("/auth");
        return;
      }
      setUserId(session.user.id);

      const { data, error } = await supabase
        .from("wishlist")
        .select("*")
        .eq("user_id", session.user.id);

      if (error) {
        console.error("Error fetching wishlist:", error);
        toast({ title: "Error", description: "Failed to load wishlist", variant: "destructive" });
      }
      setWishlistItems(data || []);
      setIsLoading(false);
    };
    init();
  }, [navigate, toast]);

  const handleRemove = async (productId: string, title: string) => {
    try {
      await removeFromWishlist(productId);
      setWishlistItems(prev => prev.filter(item => item.product_id !== productId));
      toast({ title: "Removed from wishlist", description: `${title} has been removed from your wishlist.` });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
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
              <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all">
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-lg cursor-pointer hover:text-primary transition-colors line-clamp-2"
                      onClick={() => handleViewTour(item.product_id)}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button size="sm" onClick={() => handleViewTour(item.product_id)}>View</Button>
                    <Button size="sm" variant="ghost" onClick={() => handleRemove(item.product_id, item.title)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
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
