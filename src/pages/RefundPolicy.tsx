import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Yellodae, we want you to have a worry-free booking experience. This Refund Policy outlines the conditions under which you may be eligible for a refund on your tour bookings and the process to request one.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Standard Cancellation Policy</h2>
              <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-foreground font-medium">48+ hours before tour</span>
                  <span className="text-primary font-bold">100% Refund</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-foreground font-medium">24-48 hours before tour</span>
                  <span className="text-accent font-bold">50% Refund</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-foreground font-medium">Less than 24 hours</span>
                  <span className="text-destructive font-bold">No Refund</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">No-show</span>
                  <span className="text-destructive font-bold">No Refund</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Note: Some tours may have different cancellation policies. Please check the specific terms on your booking confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How to Request a Refund</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
                <li>
                  <strong className="text-foreground">Contact Us:</strong> Email us at refunds@yellodae.com with your booking reference number
                </li>
                <li>
                  <strong className="text-foreground">Provide Details:</strong> Include the reason for cancellation and your preferred refund method
                </li>
                <li>
                  <strong className="text-foreground">Confirmation:</strong> We will review your request and respond within 24-48 hours
                </li>
                <li>
                  <strong className="text-foreground">Processing:</strong> Approved refunds are processed within 5-10 business days
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Special Circumstances</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Full refunds may be provided regardless of timing in these situations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Tour Cancellation by Operator:</strong> If we or our partners cancel the tour</li>
                <li><strong className="text-foreground">Severe Weather:</strong> Tours cancelled due to unsafe weather conditions</li>
                <li><strong className="text-foreground">Medical Emergency:</strong> With valid medical documentation</li>
                <li><strong className="text-foreground">Government Restrictions:</strong> Travel bans or border closures</li>
                <li><strong className="text-foreground">Natural Disasters:</strong> Events affecting tour operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Non-Refundable Items</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following are generally non-refundable:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service fees and booking charges</li>
                <li>Insurance premiums</li>
                <li>Tickets for special events or festivals</li>
                <li>Custom or personalized tours (unless cancelled by us)</li>
                <li>Gift vouchers and promotional codes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Modification Instead of Cancellation</h2>
              <p className="text-muted-foreground leading-relaxed">
                We understand plans change. Instead of cancelling, you may be able to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>Reschedule your tour to a different date (subject to availability)</li>
                <li>Transfer your booking to another person</li>
                <li>Change to a different tour of equal or greater value</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Modification requests should be made at least 24 hours before the original tour date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Refund Methods</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Refunds will be processed using the original payment method:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Credit/Debit Card:</strong> 5-10 business days</li>
                <li><strong className="text-foreground">PayPal:</strong> 3-5 business days</li>
                <li><strong className="text-foreground">Bank Transfer:</strong> 7-14 business days</li>
                <li><strong className="text-foreground">Yellodae Credit:</strong> Instant (for future bookings)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you disagree with a refund decision, you may appeal by contacting our customer service team with additional supporting documentation. We will review your case within 5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund inquiries or to submit a refund request:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Email:</strong> refunds@yellodae.com<br />
                <strong className="text-foreground">Phone:</strong> +66 2 XXX XXXX<br />
                <strong className="text-foreground">Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (ICT)
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
