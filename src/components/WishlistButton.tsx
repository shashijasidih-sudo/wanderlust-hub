import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
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
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user && tourSlug) {
      isInWishlist(tourSlug).then(setIsWishlisted);
    } else {
      setIsWishlisted(false);
    }
  }, [tourSlug, user]);

  const handleToggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!user) {
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
      <Heart className={cn("transition-colors", size === "sm" ? "h-4 w-4" : "h-5 w-5", isWishlisted ? "fill-red-500 text-red-500" : "text-red-500")} />
    </Button>
  );
};

export default WishlistButton;
