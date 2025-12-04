import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve site performance and user experience.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies allow the website to remember choices you make (such as language or region preferences) and provide enhanced, personalized features.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies track your online activity to help advertisers deliver more relevant advertising. They may be set by us or third-party partners.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Google Analytics:</strong> For website traffic analysis</li>
                <li><strong className="text-foreground">Facebook Pixel:</strong> For social media marketing</li>
                <li><strong className="text-foreground">Payment Processors:</strong> For secure transaction processing</li>
                <li><strong className="text-foreground">Chat Services:</strong> For customer support functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings menu</li>
                <li><strong className="text-foreground">Cookie Consent Banner:</strong> Use our cookie consent tool when you first visit our site</li>
                <li><strong className="text-foreground">Third-Party Opt-Outs:</strong> Visit individual third-party websites to opt out of their cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that blocking certain cookies may impact your experience on our website and limit the services we can provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Different cookies have different lifespans. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period or until you delete them manually. Most of our cookies expire within 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Email:</strong> privacy@yellodae.com<br />
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

export default CookiePolicy;
