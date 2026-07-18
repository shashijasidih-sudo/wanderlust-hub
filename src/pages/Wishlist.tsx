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
import { toursData } from "@/data/tourData";
import { TOUR_ROUTES } from "@/data/tourRoutes";

interface WishlistRow {
  id: string;
  tour_slug: string;
  tour_name: string;
  tour_image: string | null;
  tour_price: number | null;
}

const Wishlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { formatPrice } = useCurrency();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistRow[]>([]);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { navigate("/auth/"); return; }

      const { data, error } = await supabase
        .from("wishlists")
        .select("*")
        .eq("user_id", session.user.id);

      if (error) {
        toast({ title: "Error", description: "Failed to load wishlist", variant: "destructive" });
      }
      setWishlistItems(data || []);
      setIsLoading(false);
    };
    init();
  }, [navigate, toast]);

  const handleRemove = async (tourSlug: string, title: string) => {
    try {
      await removeFromWishlist(tourSlug);
      setWishlistItems(prev => prev.filter(item => item.tour_slug !== tourSlug));
      toast({ title: "Removed from wishlist", description: `${title} has been removed.` });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  const resolveTour = (slug: string) => {
    // Try to find by exact route match or by trailing id
    const id = Object.keys(TOUR_ROUTES).find((k) => {
      const r = TOUR_ROUTES[k];
      return r === slug || r === `/${slug}` || r.endsWith(`/${slug}`);
    }) || (toursData[slug] ? slug : undefined);
    return id ? toursData[id] : undefined;
  };

  const resolveLink = (slug: string) => {
    const tour = resolveTour(slug);
    if (tour && TOUR_ROUTES[tour.id]) return TOUR_ROUTES[tour.id];
    return slug.startsWith("/") ? slug : `/${slug}`;
  };

  const handleViewTour = (slug: string) => {
    navigate(resolveLink(slug));
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-3 sm:px-4 py-6 md:py-12 mt-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
          <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" /> My Wishlist
        </h1>
        {wishlistItems.length === 0 ? (
          <Card className="p-8 text-center">
            <CardContent className="flex flex-col items-center gap-4 pt-6">
              <Heart className="h-16 w-16 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
              <p className="text-muted-foreground">Start exploring tours and save your favorites here!</p>
              <Button onClick={() => navigate("/thailand/")}>Discover Tours</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {wishlistItems.map((item) => {
              const tour = resolveTour(item.tour_slug);
              const img =
                tour?.heroImages?.[0]?.src ||
                tour?.galleryImages?.[0]?.src ||
                item.tour_image ||
                "/placeholder.svg";
              return (
                <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all flex flex-col">
                  <div className="relative h-32 sm:h-40 md:h-48 cursor-pointer bg-muted" onClick={() => handleViewTour(item.tour_slug)}>
                    <img
                      src={img}
                      alt={item.tour_name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1.5 right-1.5 md:top-2 md:right-2 bg-white/85 hover:bg-white rounded-full h-7 w-7 md:h-9 md:w-9"
                      onClick={(e) => { e.stopPropagation(); handleRemove(item.tour_slug, item.tour_name); }}
                    >
                      <Trash2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-destructive" />
                    </Button>
                  </div>
                  <CardContent className="p-3 md:p-4 flex-1 flex flex-col">
                    <h3
                      className="font-semibold text-sm md:text-lg mb-2 cursor-pointer hover:text-primary transition-colors line-clamp-2 flex-1"
                      onClick={() => handleViewTour(item.tour_slug)}
                    >
                      {item.tour_name}
                    </h3>
                    <div className="flex items-center justify-between gap-2 mt-auto flex-wrap">
                      {item.tour_price && <p className="text-sm md:text-lg font-bold text-primary">{formatPrice(item.tour_price)}</p>}
                      <Button size="sm" className="h-8 px-3 text-xs md:text-sm" onClick={() => handleViewTour(item.tour_slug)}>View</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
