import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CreditCard, Calendar, MapPin, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqCategories = [
    {
      icon: Calendar,
      title: "Booking & Reservations",
      faqs: [
        {
          question: "How do I book a tour or activity?",
          answer: "Booking with Yellodae is simple! Browse our activities, select your preferred date and number of participants, and proceed to checkout. You'll receive a confirmation email with all the details within minutes."
        },
        {
          question: "Can I modify or cancel my booking?",
          answer: "Yes, you can modify or cancel your booking subject to our cancellation policy. Most tours offer free cancellation up to 24-48 hours before the activity. Check the specific tour's cancellation policy for details."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 2-3 days in advance for popular tours, especially during peak season. However, many of our activities accept last-minute bookings based on availability."
        },
        {
          question: "Do I need to print my booking confirmation?",
          answer: "No, printing is not required. You can show your booking confirmation on your mobile device. We'll also send you a voucher via email that you can present to our tour guides."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payments & Pricing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and various local payment methods depending on your region."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, the price you see is the price you pay. All taxes and fees are included in our displayed prices. Some activities may have optional add-ons that are clearly marked."
        },
        {
          question: "Can I pay in my local currency?",
          answer: "Yes! We support multiple currencies including INR, USD, EUR, GBP, and AED. You can select your preferred currency from the currency selector in our header."
        },
        {
          question: "When will I be charged?",
          answer: "Your card will be charged immediately upon booking confirmation. For some high-value bookings, we may offer installment payment options."
        }
      ]
    },
    {
      icon: MapPin,
      title: "Tours & Activities",
      faqs: [
        {
          question: "What is included in the tour price?",
          answer: "Each tour listing clearly states what's included. Typically, this covers transportation, guide services, entrance fees, and sometimes meals. Check the 'What's Included' section on each tour page."
        },
        {
          question: "Are your tours suitable for children?",
          answer: "Many of our tours are family-friendly with special rates for children. Each tour page indicates age restrictions and family suitability. Some adventure activities have minimum age requirements."
        },
        {
          question: "What languages are tours conducted in?",
          answer: "Most of our tours are conducted in English. Select tours offer guides in other languages including Thai, Chinese, Japanese, and Arabic. Check the tour details for available languages."
        },
        {
          question: "What should I bring on the tour?",
          answer: "We provide a detailed packing list in your confirmation email. Generally, bring comfortable clothes, sun protection, water, and your camera. Specific items depend on the activity type."
        }
      ]
    },
    {
      icon: Shield,
      title: "Safety & Insurance",
      faqs: [
        {
          question: "Are the tours safe?",
          answer: "Safety is our top priority. All our partner operators are licensed and insured. Our adventure activities follow strict safety protocols and use certified equipment."
        },
        {
          question: "Do you provide travel insurance?",
          answer: "We recommend purchasing travel insurance for your trip. While we don't sell insurance directly, we can recommend trusted providers. Some premium packages include basic coverage."
        },
        {
          question: "What happens in case of bad weather?",
          answer: "Weather-dependent activities may be rescheduled or refunded if conditions are unsafe. We'll notify you as early as possible and offer alternatives or full refunds."
        }
      ]
    },
    {
      icon: Phone,
      title: "Support & Assistance",
      faqs: [
        {
          question: "How can I contact customer support?",
          answer: "You can reach us via email at support@yellodae.com, through our contact form, or by phone during business hours. We aim to respond to all inquiries within 24 hours."
        },
        {
          question: "What if I have an emergency during my tour?",
          answer: "Each booking includes emergency contact numbers for our local teams. Our guides are trained in first aid and emergency procedures. 24/7 support is available for active bookings."
        },
        {
          question: "Can I leave a review after my tour?",
          answer: "Absolutely! We encourage reviews and will send you a feedback link after your tour. Your reviews help other travelers and help us improve our services."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about bookings, payments, tours, and more.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${index}-${faqIndex}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <Link to="/contact-us">
                <Button size="lg">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
