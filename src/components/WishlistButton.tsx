import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabaseClient";
import { addToWishlist, removeFromWishlist, isInWishlist } from "@/services/wishlist";

interface WishlistButtonProps {
  tourSlug: string;
  tourName: string;
  tourImage?: string;
  tourPrice?: number;
  className?: string;
  size?: "sm" | "default";
}

const WishlistButton = ({ tourSlug, tourName, tourImage, tourPrice, className, size = "default" }: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      setIsReady(true);

      if (uid && tourSlug) {
        isInWishlist(tourSlug).then(setIsWishlisted);
      }
    };
    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (uid && tourSlug) {
        isInWishlist(tourSlug).then(setIsWishlisted);
      } else {
        setIsWishlisted(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [tourSlug]);

  const handleToggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!isReady) return;

    if (!userId) {
      toast({ title: "Please log in", description: "You need to be logged in to save tours to your wishlist.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      if (isWishlisted) {
        await removeFromWishlist(tourSlug);
        setIsWishlisted(false);
        toast({ title: "Removed from wishlist", description: `${tourName} has been removed from your wishlist.` });
      } else {
        await addToWishlist({ id: tourSlug, title: tourName });
        setIsWishlisted(true);
        toast({ title: "Added to wishlist", description: `${tourName} has been added to your wishlist.` });
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Something went wrong", variant: "destructive" });
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
      className={cn("rounded-full bg-white/80 hover:bg-white transition-colors", size === "sm" ? "h-8 w-8" : "h-10 w-10", className)}
    >
      <Heart color="red" fill={isWishlisted ? "red" : "none"} className={cn(size === "sm" ? "h-4 w-4" : "h-5 w-5")} />
    </Button>
  );
};

export default WishlistButton;
