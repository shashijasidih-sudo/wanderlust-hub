import { Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerSupport = () => {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader className="pb-2 px-3 pt-3">
        <CardTitle className="text-sm">Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 p-3 text-xs">
        <p className="text-muted-foreground text-xs">
          Our team is here to assist you.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 p-2 bg-background rounded-md">
            <Mail className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold text-xs">Email Support</p>
              <p className="text-[10px] text-muted-foreground">support@yellodae.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-background rounded-md">
            <Clock className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold text-xs">Response Time</p>
              <p className="text-[10px] text-muted-foreground">Within 2 hours</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerSupport;
