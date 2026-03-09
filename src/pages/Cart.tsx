import { useCart, CartItem } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, ShoppingCart, ArrowRight, Car, Minus, Plus, Loader2, MapPin, Ticket } from "lucide-react";
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
    <CardContent className="p-0">
      <div className="flex flex-col md:flex-row">
        <div className="bg-primary/10 p-6 flex items-center justify-center md:w-32">
          <Car className="h-12 w-12 text-primary" />
        </div>
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-primary font-medium">{item.vehicleName}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(item.id)}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <span className="text-muted-foreground">Capacity:</span>
              <p className="font-medium">{item.capacity}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Passengers:</span>
              <p className="font-medium">{item.numberOfPersons}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Date:</span>
              <p className="font-medium">
                {item.pickupDate ? format(new Date(item.pickupDate), "dd MMM yyyy") : "Not set"}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Time:</span>
              <p className="font-medium">{item.pickupTime || "Not set"}</p>
            </div>
            <div className="col-span-2">
              <span className="text-muted-foreground">Route:</span>
              <p className="font-medium">{item.pickupLocation} → {item.dropLocation}</p>
            </div>
            {item.roomNo && (
              <div className="col-span-2">
                <span className="text-muted-foreground">Room/Flight No:</span>
                <p className="font-medium">{item.roomNo}</p>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Qty:</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to={`/${item.slug}`} className="text-primary text-sm hover:underline">
                View Details
              </Link>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  {formatPrice(item.price)} × {item.quantity}
                </p>
                <p className="text-xl font-bold text-primary">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
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
    <CardContent className="p-0">
      <div className="flex flex-col md:flex-row">
        <div className="bg-accent p-6 flex items-center justify-center md:w-32">
          <Ticket className="h-12 w-12 text-primary" />
        </div>
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Activity / Tour</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(item.id)}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <span className="text-muted-foreground">Adults:</span>
              <p className="font-medium">{item.adults || 0}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Children:</span>
              <p className="font-medium">{item.children || 0}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Date:</span>
              <p className="font-medium">
                {item.selectedDate ? format(new Date(item.selectedDate), "dd MMM yyyy") : "Not set"}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Time:</span>
              <p className="font-medium">{item.selectedTime || "Not set"}</p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Qty:</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to={`/${item.slug}`} className="text-primary text-sm hover:underline">
                View Details
              </Link>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  {formatPrice(item.price)} × {item.quantity}
                </p>
                <p className="text-xl font-bold text-primary">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, isLoading } = useCart();
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearCart}
            className="text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
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
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground truncate mr-2">
                        {item.title} × {item.quantity}
                      </span>
                      <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                    <span>₹{getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span className="text-green-600">Included</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4" 
                  size="lg"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full" 
                  onClick={() => navigate(-1)}
                >
                  Continue Shopping
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
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
