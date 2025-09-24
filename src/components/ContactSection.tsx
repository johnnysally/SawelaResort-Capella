import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 712 215 434', '+254 020 221 4960'],
      href: 'tel:+254712215434'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['reservations@sawelalodge.com', 'info@sawelalodge.com'],
      href: 'mailto:reservations@sawelalodge.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Naivasha, Kenya', 'Rift Valley Province'],
      href: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['24/7 Reception', 'Concierge Services'],
      href: null
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-gradient-earth">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-foreground">Get in</span>
            <span className="text-gradient"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to embark on your luxury safari adventure? Our dedicated team is here to craft 
            the perfect experience tailored to your dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-3xl font-playfair font-bold mb-8">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 border-0 shadow-warm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {info.href && idx === 0 ? (
                              <a href={info.href} className="hover:text-primary transition-colors duration-300">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Map placeholder */}
            <Card className="p-6 border-0 shadow-warm">
              <div className="bg-gradient-primary rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm opacity-80">Click to view location</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="p-8 border-0 shadow-luxury">
              <h3 className="text-3xl font-playfair font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell us about your preferred dates, group size, and any special requirements..."
                  />
                </div>

                <Button type="submit" className="btn-luxury w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Quick Response Guarantee:</strong> We typically respond to all inquiries within 2 hours 
                  during business hours. For urgent booking requests, please call us directly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};