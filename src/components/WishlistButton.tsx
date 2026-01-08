import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  tourSlug: string;
  tourName: string;
  tourImage?: string;
  tourPrice?: number;
  className?: string;
  size?: "sm" | "default";
}

const WishlistButton = ({
  tourSlug,
  tourName,
  tourImage,
  tourPrice,
  className,
  size = "default"
}: WishlistButtonProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkWishlistStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
        const { data } = await supabase
          .from("wishlists")
          .select("id")
          .eq("user_id", session.user.id)
          .eq("tour_slug", tourSlug)
          .maybeSingle();
        setIsInWishlist(!!data);
      }
    };

    checkWishlistStatus();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUserId(session.user.id);
      } else {
        setUserId(null);
        setIsInWishlist(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [tourSlug]);

  const handleToggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!userId) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to save tours to your wishlist.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      if (isInWishlist) {
        const { error } = await supabase
          .from("wishlists")
          .delete()
          .eq("user_id", userId)
          .eq("tour_slug", tourSlug);

        if (error) throw error;

        setIsInWishlist(false);
        toast({
          title: "Removed from wishlist",
          description: `${tourName} has been removed from your wishlist.`,
        });
      } else {
        const { error } = await supabase
          .from("wishlists")
          .insert({
            user_id: userId,
            tour_slug: tourSlug,
            tour_name: tourName,
            tour_image: tourImage,
            tour_price: tourPrice,
          });

        if (error) throw error;

        setIsInWishlist(true);
        toast({
          title: "Added to wishlist",
          description: `${tourName} has been added to your wishlist.`,
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleWishlist}
      disabled={isLoading}
      className={cn(
        "rounded-full bg-white/80 hover:bg-white transition-colors",
        size === "sm" ? "h-8 w-8" : "h-10 w-10",
        className
      )}
    >
      <Heart
        className={cn(
          "transition-colors",
          size === "sm" ? "h-4 w-4" : "h-5 w-5",
          isInWishlist ? "fill-red-500 text-red-500" : "text-gray-600"
        )}
      />
    </Button>
  );
};

export default WishlistButton;
