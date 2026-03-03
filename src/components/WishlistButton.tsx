import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
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

const WISHLIST_KEY = "wishlist_items";

function getLocalWishlist(): string[] {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"); } catch { return []; }
}
function setLocalWishlist(slugs: string[]) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(slugs));
}

const WishlistButton = ({ tourSlug, tourName, tourImage, tourPrice, className, size = "default" }: WishlistButtonProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setIsInWishlist(getLocalWishlist().includes(tourSlug));
  }, [tourSlug]);

  const handleToggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!user) {
      toast({ title: "Please log in", description: "You need to be logged in to save tours to your wishlist.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    const current = getLocalWishlist();
    if (isInWishlist) {
      setLocalWishlist(current.filter(s => s !== tourSlug));
      setIsInWishlist(false);
      toast({ title: "Removed from wishlist", description: `${tourName} has been removed from your wishlist.` });
    } else {
      setLocalWishlist([...current, tourSlug]);
      setIsInWishlist(true);
      toast({ title: "Added to wishlist", description: `${tourName} has been added to your wishlist.` });
    }
    setIsLoading(false);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleWishlist}
      disabled={isLoading}
      className={cn("rounded-full bg-white/80 hover:bg-white transition-colors", size === "sm" ? "h-8 w-8" : "h-10 w-10", className)}
    >
      <Heart className={cn("transition-colors", size === "sm" ? "h-4 w-4" : "h-5 w-5", isInWishlist ? "fill-red-500 text-red-500" : "text-gray-600")} />
    </Button>
  );
};

export default WishlistButton;
