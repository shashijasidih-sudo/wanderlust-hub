import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-to-bring">
            <AccordionTrigger>What should I bring for the tour?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We recommend bringing sunscreen, a hat, sunglasses, swimwear, a towel, waterproof bag 
              for your belongings, camera, and some cash for personal expenses. We provide snorkeling 
              equipment and life jackets.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="swimming-required">
            <AccordionTrigger>Do I need to know how to swim?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No, swimming is not mandatory. We provide life jackets for all guests during water 
              activities. However, basic swimming skills will enhance your snorkeling experience. 
              Our guides are always nearby to assist.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="weather-cancellation">
            <AccordionTrigger>What happens if the weather is bad?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Safety is our priority. If weather conditions are unsafe, we'll reschedule your tour 
              or provide a full refund. We monitor weather forecasts closely and will notify you 
              24 hours in advance if conditions require changes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="suitable-for-kids">
            <AccordionTrigger>Is this tour suitable for young children?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! This tour is family-friendly. Children aged 2-11 receive discounted pricing. 
              We provide child-sized life jackets and our guides are experienced with families. 
              The big boat offers more stability than speedboats, making it comfortable for younger guests.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="food-options">
            <AccordionTrigger>Are there vegetarian food options?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! Our Thai buffet lunch includes a variety of vegetarian dishes. Please 
              inform us of any dietary restrictions or allergies when booking, and we'll do our 
              best to accommodate your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pickup-areas">
            <AccordionTrigger>Which areas in Phuket do you provide pickup from?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We offer pickup from most hotels in Phuket including Patong, Kata, Karon, Kamala, 
              Rawai, and Phuket Town. Please provide your hotel name when booking. If your location 
              is outside our standard pickup zone, we'll contact you with alternative arrangements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="boat-capacity">
            <AccordionTrigger>How many people are on the big boat?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our big boats accommodate approximately 40-60 guests, providing ample space for 
              everyone to move around comfortably. This creates a social atmosphere while still 
              allowing for personal space and relaxation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="photography">
            <AccordionTrigger>Can I take photos during the tour?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Feel free to bring your camera or phone. We recommend a waterproof case for 
              water activities. Our guides can also take photos of your group at key locations. 
              Underwater cameras are available for rent onboard.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
