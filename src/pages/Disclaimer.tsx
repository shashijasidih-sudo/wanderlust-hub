import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Disclaimer</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. General Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on the Yellodae website (yellodae.com) is for general informational purposes only. Yellodae is a registered tour operator (NIDHI ID: EBR000108, UDYAM MSME: UDYAM-BR-26-0210753, GSTIN: 10BKOPM6410M2Z2). While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Tour and Activity Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tour descriptions, itineraries, inclusions, timings, prices, and availability displayed on our website are subject to change without prior notice. This applies to all our offerings including sightseeing tours, island tours, adventure activities, dinner cruises, shows, private transfers, and tour packages across Thailand, Singapore, Dubai, and other destinations. Images and photographs used on our website are for illustrative purposes and may not exactly represent the current experience. Actual experiences may vary based on weather conditions, seasonal changes, local regulations, operator schedules, and other factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yellodae acts as an intermediary between customers and third-party tour operators, transport providers, activity organisers, and service providers in Thailand, Singapore, Dubai, and other locations. We are not the direct provider of tours, transfers, or activities. We are not responsible for the actions, omissions, delays, or negligence of these third parties. Any disputes arising from services provided by third parties should be directed to the respective service provider, though we will assist in resolving issues wherever possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Pricing Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices displayed on our website are subject to change and may vary based on currency fluctuations, seasonal demand, availability, and operator pricing changes. We offer pricing in multiple currencies (INR, USD, EUR, GBP, AED, THB, SGD) — exchange rates are approximate and updated periodically. The final price will be confirmed at the time of booking and payment. Promotional offers, discounts, and coupon codes are subject to specific terms and validity periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Transfer Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Private airport transfers and intercity transfers are operated by local transport partners. Vehicle types, models, and specific drivers may vary from those depicted on the website. Transfer timings are estimates and may be affected by traffic conditions, road closures, or flight delays. Yellodae is not liable for delays caused by factors outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Smart Guides & Blog Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Smart Destination Guides and blog articles are provided for informational and educational purposes. While we endeavour to ensure accuracy, travel information, visa requirements, health advisories, and local regulations change frequently. Travellers should always verify current requirements with official government sources and embassies before travelling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites including WhatsApp, payment gateways (Razorpay), and social media platforms. We have no control over the content and practices of these external sites and cannot accept responsibility or liability for their respective privacy policies, content, or availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Yellodae, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from: (a) your access to or use of our services; (b) any conduct or content of any third party on our services; (c) tour cancellations or modifications by operators; (d) personal injury during tours or activities; (e) loss or damage to personal belongings during tours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Travel Risks & Insurance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Travel inherently involves certain risks. Adventure activities such as island tours, water sports, ATV rides, elephant safaris, and other outdoor activities carry additional risks. Customers are responsible for assessing their own fitness, health conditions, and suitability for chosen activities. We strongly recommend purchasing comprehensive travel insurance to cover unexpected events, medical emergencies, trip cancellations, flight delays, and loss of belongings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. User Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for verifying all booking details including dates, times, pickup locations, and participant requirements before confirming. It is the user's responsibility to ensure they have valid travel documents (passports, visas), meet health and vaccination requirements, and comply with entry regulations for their chosen destination (Thailand, Singapore, UAE, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on this page. We encourage users to review this disclaimer periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Disclaimer, please contact us at:
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

export default Disclaimer;
