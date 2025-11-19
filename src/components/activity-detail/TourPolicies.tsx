import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { TourData } from "@/data/tourData";

interface TourPoliciesProps {
  tourData: TourData;
}

const TourPolicies = ({ tourData }: TourPoliciesProps) => {
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
            {tourData.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusion */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <X className="h-5 w-5 text-destructive" />
            What's Not Included
          </h3>
          <ul className="space-y-2 ml-7">
            {tourData.exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Accordion for Policies */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="booking">
            <AccordionTrigger>Booking Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              {tourData.bookingPolicy.map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
              <p>• Booking reference number required for check-in</p>
              <p>• Please arrive at pickup point 10 minutes before departure</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cancellation">
            <AccordionTrigger>Cancellation Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              {tourData.cancellationPolicy.map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="child">
            <AccordionTrigger>Child Policy</AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground">
              {tourData.childPolicy.map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TourPolicies;
