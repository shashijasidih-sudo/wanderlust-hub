import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const TourPolicies = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Tour Information & Policies</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Inclusion */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            What's Included
          </h3>
          <ul className="space-y-2 ml-7">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Round-trip hotel transfer from Phuket (Normal Transfer)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Big boat ferry to Phi Phi Islands</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Professional English-speaking tour guide</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Thai buffet lunch with vegetarian options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Snorkeling equipment (mask and life jacket)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Soft drinks and fresh fruits on board</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>National park fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Travel insurance</span>
            </li>
          </ul>
        </div>

        {/* Exclusion */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <X className="h-5 w-5 text-destructive" />
            What's Not Included
          </h3>
          <ul className="space-y-2 ml-7">
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Personal expenses and souvenirs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Alcoholic beverages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Tips and gratuities (optional)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Underwater camera rental</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Speedboat upgrade (available at additional cost)</span>
            </li>
          </ul>
        </div>

        {/* Accordion for Policies */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="booking">
            <AccordionTrigger>Booking Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• Instant confirmation upon booking</p>
              <p>• Mobile or printed voucher accepted</p>
              <p>• Confirmation email sent immediately with booking details</p>
              <p>• Booking reference number required for check-in</p>
              <p>• Please arrive at pickup point 10 minutes before departure</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cancellation">
            <AccordionTrigger>Cancellation Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• Free cancellation up to 24 hours before the activity start time</p>
              <p>• 50% refund for cancellations made 12-24 hours before start time</p>
              <p>• No refund for cancellations made less than 12 hours before start time</p>
              <p>• No-shows are non-refundable</p>
              <p>• Refunds processed within 7-10 business days</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="child">
            <AccordionTrigger>Child Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              <p>• Children aged 2-11 years qualify for child pricing (30% discount)</p>
              <p>• Children under 2 years are free but must sit on parent's lap</p>
              <p>• Child pricing includes all amenities except separate seating for under 2s</p>
              <p>• Children must be accompanied by an adult at all times</p>
              <p>• Life jackets provided for all children during water activities</p>
              <p>• Valid ID proof of age may be required at check-in</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TourPolicies;
