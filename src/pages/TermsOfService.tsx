import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Yellodae's website (yellodae.com) and services, you agree to be bound by these Terms of Service. Yellodae is a registered tour operator (NIDHI ID: EBR000108, UDYAM MSME: UDYAM-BR-26-0210753, GSTIN: 10BKOPM6410M2Z2) providing tour booking, private transfer, and travel planning services. If you do not agree with any part of these terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yellodae provides the following services across Thailand, Singapore, Dubai, and other destinations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Tour and activity bookings (sightseeing tours, adventure activities, shows, island tours, cruises, etc.)</li>
                <li>Private airport transfers and intercity transfers</li>
                <li>Curated tour packages with accommodation and activities</li>
                <li>Smart destination guides and travel planning resources</li>
                <li>Massage coupon bookings and other ancillary travel services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We act as an intermediary between travellers and local tour operators, facilitating bookings and providing customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Booking and Reservations</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All bookings are subject to availability and confirmation by the respective tour operator or service provider</li>
                <li>Prices are displayed in multiple currencies (INR, USD, EUR, GBP, AED, THB, SGD) and may fluctuate based on exchange rates</li>
                <li>Full payment is required at the time of booking unless otherwise specified</li>
                <li>Booking confirmations and vouchers will be sent to your registered email address</li>
                <li>It is your responsibility to verify all booking details — including dates, timings, pickup locations, and number of participants — upon receipt of confirmation</li>
                <li>Child pricing applies where specified; age requirements vary by activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payments are processed securely through Razorpay. We accept:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Credit and debit cards (Visa, Mastercard, RuPay)</li>
                <li>UPI payments</li>
                <li>Net banking</li>
                <li>Other payment methods supported by Razorpay</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Custom payments can also be made via our Quick Pay feature. All prices include applicable taxes unless stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete personal information during booking</li>
                <li>Ensure all travellers have valid travel documents (passports, visas, vaccination certificates)</li>
                <li>Arrive at designated meeting/pickup points on time as specified in your booking confirmation</li>
                <li>Follow safety instructions provided by tour guides and operators</li>
                <li>Behave respectfully towards staff, guides, fellow travellers, and local communities</li>
                <li>Comply with local laws, customs, and regulations of the destination country</li>
                <li>Ensure physical fitness requirements are met for adventure activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cancellations, Modifications & Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancellation and modification policies vary by tour and activity. General guidelines:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Free cancellation may be available up to 24–48 hours before the tour (varies by activity)</li>
                <li>Late cancellations may incur charges or result in forfeiture of full payment</li>
                <li>No-shows will not be refunded</li>
                <li>Modifications (date changes, participant changes) are subject to availability and may incur additional charges</li>
                <li>Refunds, where applicable, will be processed within 7–14 business days to the original payment method</li>
                <li>For private transfers, cancellations within 12 hours of the scheduled pickup are non-refundable</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please check the specific cancellation policy on each tour/activity page before booking. For cancellation requests, contact us at Query@yellodae.com or WhatsApp +91 7061710810.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Liability Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yellodae acts as an intermediary for third-party tour operators, transport providers, and activity organisers. While we carefully vet our partners, we are not directly liable for any injury, loss, damage, accident, delay, or irregularity arising from the acts, omissions, or negligence of these third-party providers. We strongly recommend all travellers purchase comprehensive travel insurance covering medical emergencies, trip cancellations, and personal belongings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yellodae shall not be held liable for failure or delay in performing obligations due to circumstances beyond our reasonable control, including but not limited to: natural disasters, extreme weather, pandemics, civil unrest, government restrictions, airline cancellations, or actions by regulatory authorities. In such cases, we will work with you to reschedule or provide alternative arrangements where possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may create an account on Yellodae to manage bookings, save wishlists, and track your booking history. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Yellodae reserves the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website — including text, graphics, photographs, logos (Yellodae brand), tour descriptions, smart guides, and blog articles — is the property of Yellodae or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or commercially use any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Governing Law & Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our services shall first be attempted to be resolved through amicable negotiation. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Email:</strong> Query@yellodae.com<br />
                <strong className="text-foreground">Phone / WhatsApp:</strong> +91 7061710810<br />
                <strong className="text-foreground">Registered Entity:</strong> Yellodae (UDYAM-BR-26-0210753)<br />
                <strong className="text-foreground">Offices:</strong> Noida & Patna, India | Bangkok, Thailand | Dubai, UAE | Singapore
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
