import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactUs = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const { firstName, lastName, email, phone, subject, message } = formData;
    if (!firstName || !email || !subject || !message) {
      toast.error("Please fill in all required fields (First Name, Email, Subject, Message)");
      return;
    }

    setIsSubmitting(true);

    const htmlContent = `
      <h2>New Contact Enquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: {
          to: "support@yellodae.com",
          subject: subject || "Contact Enquiry",
          html: htmlContent,
          replyTo: email,
        },
      });

      if (error) throw error;

      if (data.success) {
        toast.success("Message sent successfully ✅");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      toast.error("Something went wrong ❌");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance with your booking? We're here to help make your travel experience unforgettable.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about our tours, need help with a booking, or want to share feedback, 
                  our team is ready to assist you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:support@yellodae.com" className="hover:text-primary transition-colors">
                          support@yellodae.com
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">For Booking and Travel Related Queries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us / WhatsApp Us</h3>
                      <p className="text-muted-foreground">+91 7061710810</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Locations</h3>
                      <p className="text-muted-foreground">Noida, Patna, India</p>
                      <p className="text-muted-foreground">Bangkok, Thailand</p>
                      <p className="text-muted-foreground">Dubai, UAE</p>
                      <p className="text-muted-foreground">Singapore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM (IST)</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name <span className="text-destructive">*</span></label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email <span className="text-destructive">*</span></label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject <span className="text-destructive">*</span></label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Booking enquiry, tour query, feedback..." 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message <span className="text-destructive">*</span></label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry — include tour names, travel dates, number of travellers, etc." 
                      rows={5}
                    />
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg" 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your message will be sent to support@yellodae.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
