import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";

const BookingSummary = () => {
  const { cartItems, getCartTotal } = useCart();
  const { formatPrice } = useCurrency();

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Card className="sticky top-4">
      <Accordion type="multiple" defaultValue={["booking", "payment"]} className="w-full">
        <AccordionItem value="booking" className="border-none">
          <CardHeader className="pb-0">
            <AccordionTrigger className="hover:no-underline py-0">
              <CardTitle className="text-lg">Booking Detail</CardTitle>
            </AccordionTrigger>
          </CardHeader>
          <AccordionContent>
            <CardContent className="pt-4 space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id} className="space-y-2">
                  <p className="font-semibold text-sm">
                    {index + 1}. {item.title}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{item.vehicleName} ({item.capacity} person) × {item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total Price</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payment" className="border-none">
          <CardHeader className="pb-0 pt-2">
            <AccordionTrigger className="hover:no-underline py-0">
              <CardTitle className="text-lg">Payment</CardTitle>
            </AccordionTrigger>
          </CardHeader>
          <AccordionContent>
            <CardContent className="pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Taxi Price</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Pay Amount</span>
                <span>₹{getCartTotal().toLocaleString()}</span>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default BookingSummary;
