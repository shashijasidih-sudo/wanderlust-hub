import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingSteps from "@/components/BookingSteps";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const BookingConfirmed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <BookingSteps currentStep={3} />

            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-24 w-24 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-green-600">
                Booking Confirmed!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-2">
                Thank you for your booking.
              </p>
              
              <p className="text-muted-foreground mb-8">
                A confirmation email has been sent to your email address with all the booking details.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-2">What's Next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li>• Check your email for booking confirmation</li>
                  <li>• Save the booking reference for your records</li>
                  <li>• Our team will contact you 24 hours before pickup</li>
                  <li>• Have your ID ready at the time of pickup</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/my-bookings")}
                >
                  View My Bookings
                </Button>
                <Button
                  size="lg"
                  onClick={() => navigate("/")}
                >
                  Continue Exploring
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default BookingConfirmed;
