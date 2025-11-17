import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PolicyAccordion = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Policies</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cancellation">
            <AccordionTrigger>Cancellation Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• Free cancellation up to 24 hours before the activity start time</p>
              <p>• 50% refund for cancellations made 12-24 hours before start time</p>
              <p>• No refund for cancellations made less than 12 hours before start time</p>
              <p>• No-shows are non-refundable</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="booking">
            <AccordionTrigger>Booking Confirmation</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• You will receive instant confirmation upon booking</p>
              <p>• A confirmation email with your voucher will be sent immediately</p>
              <p>• Present your mobile or printed voucher to the guide</p>
              <p>• Booking reference number is required for check-in</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger>Payment Options</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• We accept all major credit cards (Visa, Mastercard, American Express)</p>
              <p>• Secure payment processing with SSL encryption</p>
              <p>• Full payment required at time of booking</p>
              <p>• Prices are in Indian Rupees (INR)</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modification">
            <AccordionTrigger>Modification & Changes</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• Date changes are subject to availability</p>
              <p>• Contact us at least 24 hours in advance to modify your booking</p>
              <p>• No charges for date changes made 24+ hours in advance</p>
              <p>• Changes made within 24 hours may incur a fee</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="weather">
            <AccordionTrigger>Weather & Safety</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• Tours operate rain or shine</p>
              <p>• In case of severe weather, we reserve the right to cancel or reschedule</p>
              <p>• Full refund or alternative date offered for operator cancellations</p>
              <p>• Safety is our top priority</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PolicyAccordion;
