import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Yellodae ("we", "us", or "our"). Yellodae is a registered tour operator (NIDHI ID: EBR000108, UDYAM MSME: UDYAM-BR-26-0210753, GSTIN: 10BKOPM6410M2Z2) providing tour booking, private transfer, and travel planning services across Thailand, Singapore, Dubai, and other destinations. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (yellodae.com) and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We collect information that you provide directly to us when using our services, including:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Personal Identification:</strong> Full name, email address, phone number, nationality</li>
                <li><strong className="text-foreground">Booking Details:</strong> Tour/activity selections, travel dates, number of adults and children, special requirements, pickup/drop-off locations</li>
                <li><strong className="text-foreground">Payment Information:</strong> Processed securely through Razorpay and other third-party payment gateways. We do not store your full card details on our servers.</li>
                <li><strong className="text-foreground">Account Information:</strong> If you create an account — your profile data, booking history, wishlist items, and cart contents</li>
                <li><strong className="text-foreground">Communication Records:</strong> Messages, emails, and WhatsApp conversations when you contact us at Query@yellodae.com or +91 7061710810</li>
                <li><strong className="text-foreground">Automatically Collected Data:</strong> IP address, browser type, device information, pages visited, referral URLs, and cookies for analytics and site improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and manage your tour bookings, private transfer reservations, and activity tickets</li>
                <li>Send booking confirmations, vouchers, and itinerary details via email</li>
                <li>Communicate with you about your reservations, cancellations, modifications, and travel-related inquiries</li>
                <li>Process payments securely through our payment partners (Razorpay)</li>
                <li>Provide customer support via email, phone, and WhatsApp</li>
                <li>Send promotional offers, newsletters, and travel inspiration (only with your consent)</li>
                <li>Improve our website, tour offerings, and overall user experience</li>
                <li>Maintain your wishlist and shopping cart across sessions</li>
                <li>Comply with legal and regulatory obligations under Indian and international law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Information Sharing and Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with the following trusted third parties strictly for service fulfilment:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Tour Operators & Guides:</strong> Local tour operators in Thailand, Singapore, Dubai, and other destinations who fulfil the booked activities</li>
                <li><strong className="text-foreground">Private Transfer Providers:</strong> Vehicle and driver services for airport pickups, drop-offs, and intercity transfers</li>
                <li><strong className="text-foreground">Payment Processors:</strong> Razorpay and associated banking partners for secure payment processing</li>
                <li><strong className="text-foreground">Email & Marketing:</strong> Newsletter and promotional email services (only if you've opted in)</li>
                <li><strong className="text-foreground">Hosting & Infrastructure:</strong> Supabase for secure data storage and authentication</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All third parties are contractually obligated to keep your information confidential and use it solely for the purposes for which it was shared.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, remember your currency preferences, maintain your login session, and analyse website traffic. You can manage cookie preferences through your browser settings. For more details, please refer to our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. These include encrypted data transmission (SSL/TLS), secure authentication via Supabase, and adherence to PCI-DSS standards through our payment processors. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, including maintaining your booking history and account. Booking records are retained for a minimum of 3 years for legal and tax compliance purposes. You may request deletion of your account and associated data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data (subject to legal retention requirements)</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Withdraw consent for data processing where applicable</li>
                <li>Lodge a complaint with a relevant data protection authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. Tour bookings involving minors must be made by a parent or legal guardian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
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

export default PrivacyPolicy;
