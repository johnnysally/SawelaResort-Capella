import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import breadcrumbImage from '@/assets/hero_section/breadcrumb.jpg';
import logo from '@/assets/logo.png.png';

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
          src={breadcrumbImage}
          alt="Footer background - luxury resort breadcrumb view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-6 sm:pt-16 lg:pt-20 pb-4 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 lg:gap-12 mb-6 sm:mb-10 lg:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-4">
                <img 
                  src={logo} 
                  alt="Sawela Lodge Logo" 
                  className="h-6 w-auto sm:h-10 object-contain"
                />
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-playfair font-bold text-gradient">
                  Sawela Lodge
                </h3>
              </div>
              <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed mb-3 sm:mb-6 hidden sm:block">
                Where luxury meets wild in the heart of Kenya's most beautiful landscape. 
                Experience the pinnacle of African hospitality at Lake Naivasha.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3 text-white/80">
                  <Phone className="h-3 w-3 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-xs xs:text-sm sm:text-base">+254 712 215 434</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-white/80">
                  <Mail className="h-3 w-3 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-xs xs:text-sm sm:text-base truncate">reservations@sawelalodge.com</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3 text-white/80 sm:hidden">
                  <MapPin className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs">Lake Naivasha, Kenya</span>
                </div>
                <div className="hidden sm:flex items-start space-x-2 sm:space-x-3 text-white/80">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs xs:text-sm sm:text-base">Lake Naivasha, Nakuru County, Kenya</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="hidden sm:block">
                <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">{title}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs xs:text-sm sm:text-base text-white/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Mobile Compact Links */}
            <div className="sm:hidden col-span-full">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Quick Links</h4>
                  <div className="space-y-1">
                    <a href="#accommodations" className="block text-xs text-white/70">Accommodations</a>
                    <a href="#dining" className="block text-xs text-white/70">Dining</a>
                    <a href="#experiences" className="block text-xs text-white/70">Experiences</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Services</h4>
                  <div className="space-y-1">
                    <a href="#wellness" className="block text-xs text-white/70">Spa & Wellness</a>
                    <a href="#contact" className="block text-xs text-white/70">Conferences</a>
                    <a href="#experiences" className="block text-xs text-white/70">Safari Tours</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-white/20 pt-4 sm:pt-10 lg:pt-12 pb-3 sm:pb-8">
            <div className="text-center mb-4 sm:mb-8">
              <h4 className="text-base xs:text-xl sm:text-2xl font-playfair font-bold text-white mb-2 sm:mb-4">
                Stay Connected
              </h4>
              <p className="text-xs xs:text-sm sm:text-base text-white/80 mb-3 sm:mb-6 max-w-2xl mx-auto px-2 hidden sm:block">
                Subscribe to our newsletter for exclusive offers, safari tips, and updates on our latest experiences.
              </p>
              <div className="flex flex-col sm:flex-row max-w-sm sm:max-w-md mx-auto gap-2 sm:gap-3 px-4 sm:px-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs xs:text-sm sm:text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-luxury whitespace-nowrap text-xs xs:text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-3">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 sm:space-x-6 mb-4 sm:mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-3 w-3 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-3 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 px-2">
              <div className="text-white/60 text-xs xs:text-xs sm:text-sm text-center sm:text-left">
                © 2025 Devs. All rights reserved.
              </div>
              <div className="hidden sm:flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs xs:text-xs sm:text-sm">
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