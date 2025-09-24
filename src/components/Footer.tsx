import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

export const Footer = () => {
  const footerLinks = {
    "Explore": [
      { name: "Accommodations", href: "#accommodations" },
      { name: "Experiences", href: "#experiences" },
      { name: "Dining", href: "#dining" },
      { name: "Wellness", href: "#wellness" },
      { name: "Gallery", href: "#gallery" },
      { name: "Capella Collection", href: "#capella" }
    ],
    "Services": [
      { name: "Spa & Wellness", href: "#wellness" },
      { name: "Conference Facilities", href: "#contact" },
      { name: "Wedding Venues", href: "#contact" },
      { name: "Airport Transfers", href: "#contact" },
      { name: "Safari Tours", href: "#experiences" },
      { name: "Cultural Experiences", href: "#experiences" }
    ],
    "Information": [
      { name: "About Us", href: "#about" },
      { name: "Sustainability", href: "#sustainability" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms & Conditions", href: "#terms" },
      { name: "Cancellation Policy", href: "#cancellation" },
      { name: "FAQ", href: "#faq" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Footer background - serene lake view at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-playfair font-bold text-gradient mb-4">
                Sawela Lodge
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Where luxury meets wild in the heart of Kenya's most beautiful landscape. 
                Experience the pinnacle of African hospitality at Lake Naivasha.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>+254 712 215 434</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>reservations@sawelalodge.com</span>
                </div>
                <div className="flex items-start space-x-3 text-white/80">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lake Naivasha, Nakuru County, Kenya</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xl font-semibold text-white mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-white/20 pt-12 pb-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-playfair font-bold text-white mb-4">
                Stay Connected
              </h4>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive offers, safari tips, and updates on our latest experiences.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-luxury whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © 2024 Sawela Lodge. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-white/60 hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-white/60 hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#accessibility" className="text-white/60 hover:text-primary transition-colors duration-300">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};