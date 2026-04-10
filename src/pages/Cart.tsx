import { useCart, CartItem } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, ShoppingCart, ArrowRight, Car, Minus, Plus, Loader2, Ticket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

const TransferCartItem = ({ item, onRemove, onUpdateQuantity }: { 
  item: CartItem; 
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}) => {
  const { formatPrice } = useCurrency();
  return (
  <Card className="overflow-hidden">
    <CardContent className="p-2 md:p-0">
      <div className="flex items-start gap-2 md:flex-row">
        <div className="bg-primary/10 p-2 md:p-6 rounded md:rounded-none flex items-center justify-center shrink-0">
          <Car className="h-6 w-6 md:h-12 md:w-12 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <h3 className="font-semibold text-sm md:text-lg leading-tight truncate">{item.title}</h3>
              <p className="text-primary text-xs md:text-sm font-medium">{item.vehicleName}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(item.id)}
              className="text-destructive hover:bg-destructive/10 h-6 w-6 md:h-8 md:w-8 shrink-0"
            >
              <Trash2 className="h-3.5 w-3.5 md:h-5 md:w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-xs text-muted-foreground">
            <span>{item.capacity} · {item.numberOfPersons} pax</span>
            <span>{item.pickupDate ? format(new Date(item.pickupDate), "dd MMM") : "No date"} {item.pickupTime || ""}</span>
          </div>
          <p className="text-xs text-muted-foreground truncate mt-0.5">
            {item.pickupLocation} → {item.dropLocation}
          </p>
          
          <div className="mt-1.5 pt-1.5 border-t flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-6 w-6"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}>
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-5 text-center text-xs font-semibold">{item.quantity}</span>
              <Button variant="outline" size="icon" className="h-6 w-6"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Link to={`/${item.slug}`} className="text-primary text-xs hover:underline hidden sm:inline">
                Details
              </Link>
              <p className="text-sm md:text-lg font-bold text-primary">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  );
};

const ActivityCartItem = ({ item, onRemove, onUpdateQuantity }: { 
  item: CartItem; 
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}) => {
  const { formatPrice } = useCurrency();
  return (
  <Card className="overflow-hidden">
    <CardContent className="p-2 md:p-0">
      <div className="flex items-start gap-2 md:flex-row">
        <div className="bg-accent p-2 md:p-6 rounded md:rounded-none flex items-center justify-center shrink-0">
          <Ticket className="h-6 w-6 md:h-12 md:w-12 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <h3 className="font-semibold text-sm md:text-lg leading-tight truncate">{item.title}</h3>
              <p className="text-xs text-muted-foreground">Activity / Tour</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(item.id)}
              className="text-destructive hover:bg-destructive/10 h-6 w-6 md:h-8 md:w-8 shrink-0"
            >
              <Trash2 className="h-3.5 w-3.5 md:h-5 md:w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-xs text-muted-foreground">
            <span>{item.adults || 0} Adults, {item.children || 0} Children</span>
            <span>{item.selectedDate ? format(new Date(item.selectedDate), "dd MMM") : "No date"} {item.selectedTime || ""}</span>
          </div>
          
          <div className="mt-1.5 pt-1.5 border-t flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-6 w-6"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}>
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-5 text-center text-xs font-semibold">{item.quantity}</span>
              <Button variant="outline" size="icon" className="h-6 w-6"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Link to={`/${item.slug}`} className="text-primary text-xs hover:underline hidden sm:inline">
                Details
              </Link>
              <p className="text-sm md:text-lg font-bold text-primary">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  );
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, isLoading } = useCart();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/customer-information");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-muted-foreground">Loading your cart...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/thailand">
                <Button className="w-full">Browse Thailand Tours</Button>
              </Link>
              <Link to="/singapore">
                <Button variant="outline" className="w-full">Browse Singapore Activities</Button>
              </Link>
              <Link to="/dubai">
                <Button variant="outline" className="w-full">Browse Dubai Experiences</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-8">
        <div className="flex items-center justify-between mb-3 md:mb-8">
          <h1 className="text-xl md:text-3xl font-bold">Your Cart</h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearCart}
            className="text-destructive hover:bg-destructive/10 h-7 text-xs md:h-9 md:text-sm"
          >
            <Trash2 className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            Clear
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-2 md:space-y-4">
            {cartItems.map((item) => (
              item.itemType === 'activity' ? (
                <ActivityCartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              ) : (
                <TransferCartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              )
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-32">
              <CardHeader className="p-3 md:p-6 pb-1 md:pb-2">
                <CardTitle className="text-base md:text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-3 md:p-6 pt-1 md:pt-2 space-y-2 md:space-y-4">
                <div className="space-y-1">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs md:text-sm">
                      <span className="text-muted-foreground truncate mr-2">
                        {item.title} × {item.quantity}
                      </span>
                      <span className="shrink-0">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-2">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm mt-1">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span className="text-green-600">Included</span>
                  </div>
                </div>
                
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold text-base md:text-lg">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(getCartTotal())}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="default"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full" 
                  size="sm"
                  onClick={() => navigate(-1)}
                >
                  Continue Shopping
                </Button>
                
                <p className="text-[10px] md:text-xs text-muted-foreground text-center">
                  Secure checkout powered by trusted payment gateways
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
