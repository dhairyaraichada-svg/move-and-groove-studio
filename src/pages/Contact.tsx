import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const danceStyles = [
  "Classical Dance",
  "Semi-Classical",
  "Bollywood",
  "Hip-Hop",
  "Contemporary",
  "Freestyle",
  "Dance Fitness",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    danceStyle: "",
    ageGroup: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted! 🎉",
      description:
        "Thank you for your interest! We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      danceStyle: "",
      ageGroup: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to start your dance journey? Reach out to us for enquiries,
              free trials, or any questions. We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Let's <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our classes? Want to book a free trial?
                  We're here to help you take the first step in your dance
                  journey.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform block"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform block"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-muted-foreground">Quick Response</p>
                  </div>
                </a>

                <a
                  href="mailto:info@vcandance.com"
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform block"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-muted-foreground">info@vcandance.com</p>
                  </div>
                </a>

                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-muted-foreground">
                      V can Dance Studio
                      <br />
                      Dance Academy Address
                      <br />
                      City, State - PIN Code
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Studio Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9 AM - 8 PM
                      <br />
                      Sunday: 10 AM - 2 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold mb-2">
                Book a Free Trial
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Preferred Dance Style</Label>
                    <Select
                      value={formData.danceStyle}
                      onValueChange={(value) =>
                        setFormData({ ...formData, danceStyle: value })
                      }
                    >
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {danceStyles.map((style) => (
                          <SelectItem key={style} value={style}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Age Group</Label>
                    <Select
                      value={formData.ageGroup}
                      onValueChange={(value) =>
                        setFormData({ ...formData, ageGroup: value })
                      }
                    >
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kids">Kids (5-12)</SelectItem>
                        <SelectItem value="teens">Teens (13-18)</SelectItem>
                        <SelectItem value="adults">Adults (18+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dance experience or any questions..."
                    rows={4}
                    className="bg-muted/50 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find <span className="gradient-text">Us</span>
            </h2>
            <p className="text-muted-foreground">
              Visit our studio and experience the magic of dance in person.
            </p>
          </div>

          <div className="aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5959509350987!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V can Dance Studio Location"
            />
          </div>
        </div>
      </section>

      {/* Quick WhatsApp CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Prefer a Quick Chat?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Message us on WhatsApp for instant responses to your queries.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
          >
            <a
              href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20joining%20dance%20classes%20at%20V%20can%20Dance."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
