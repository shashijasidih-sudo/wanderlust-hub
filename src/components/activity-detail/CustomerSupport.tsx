import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CustomerSupport = () => {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle>Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Our customer support team is here to assist you with any questions or concerns.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Phone Support</p>
              <p className="text-sm text-muted-foreground">+66 123 456 789</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Email Support</p>
              <p className="text-sm text-muted-foreground">support@yellodae.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Live Chat</p>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Response Time</p>
              <p className="text-sm text-muted-foreground">Within 2 hours</p>
            </div>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">
          <MessageCircle className="mr-2 h-4 w-4" />
          Start Live Chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomerSupport;
