import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Disclaimer</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. General Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on the Yellodae website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Tour and Activity Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tour descriptions, itineraries, prices, and availability are subject to change without prior notice. Images and photographs used on our website are for illustrative purposes and may not represent the exact experience. Actual experiences may vary based on weather conditions, local regulations, and other factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yellodae acts as an intermediary between customers and third-party tour operators, hotels, and service providers. We are not responsible for the actions, omissions, or negligence of these third parties. Any disputes arising from services provided by third parties should be directed to the respective service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Yellodae be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services, or any conduct or content of any third party on our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Travel Risks</h2>
              <p className="text-muted-foreground leading-relaxed">
                Travel inherently involves certain risks. Customers are responsible for their own safety and well-being during tours and activities. We recommend obtaining appropriate travel insurance to cover unexpected events, medical emergencies, trip cancellations, and other potential issues that may arise during travel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Pricing Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices displayed on our website are subject to change and may vary based on currency fluctuations, seasonal demand, and availability. The final price will be confirmed at the time of booking. Any promotional offers or discounts are subject to specific terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. User Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for verifying all booking details, including dates, times, and requirements. It is the user's responsibility to ensure they have valid travel documents, visas, and meet any health requirements for their chosen destination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on this page. We encourage users to review this disclaimer periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Disclaimer, please contact us at:
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

export default Disclaimer;
