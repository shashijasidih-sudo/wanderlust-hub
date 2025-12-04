import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Yellodae's website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yellodae provides tour booking services, travel planning assistance, and related travel services across Thailand, Singapore, and Dubai. We act as an intermediary between travelers and local tour operators, facilitating bookings and providing customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Booking and Reservations</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Prices are quoted in the currency displayed and may be subject to change</li>
                <li>Full payment or deposit is required to confirm your booking</li>
                <li>Booking confirmations will be sent via email</li>
                <li>It is your responsibility to verify all booking details upon receipt</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information during booking</li>
                <li>Ensure you have valid travel documents (passports, visas)</li>
                <li>Arrive at designated meeting points on time</li>
                <li>Follow safety instructions provided by tour guides</li>
                <li>Behave respectfully towards staff, guides, and fellow travelers</li>
                <li>Comply with local laws and customs of the destination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cancellations and Modifications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancellation and modification policies vary by tour and activity. Please refer to the specific terms for each booking. General guidelines include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Free cancellation up to 24-48 hours before the tour (varies by activity)</li>
                <li>Late cancellations may incur fees or forfeit full payment</li>
                <li>Modifications are subject to availability</li>
                <li>No-shows will not be refunded</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Liability Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yellodae acts as an agent for third-party service providers. While we carefully select our partners, we are not liable for any injury, loss, damage, accident, delay, or irregularity arising from the acts or omissions of these third parties. We strongly recommend purchasing comprehensive travel insurance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We shall not be held liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, civil unrest, or government actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of Yellodae or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Thailand. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangkok, Thailand.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Email:</strong> legal@yellodae.com<br />
                <strong className="text-foreground">Address:</strong> Yellodae Tours, Bangkok, Thailand
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
