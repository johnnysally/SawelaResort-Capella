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
      <div className="relative z-10 pt-4 sm:pt-12 lg:pt-16 pb-3 sm:pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            {/* Brand Section */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-1 sm:mb-3">
                <img 
                  src={logo} 
                  alt="Sawela Lodge Logo" 
                  className="h-5 w-auto sm:h-8 object-contain"
                />
                <h3 className="text-base sm:text-lg lg:text-xl font-playfair font-bold text-gradient">
                  Sawela Lodge
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-tight mb-2 sm:mb-4 hidden sm:block">
                Luxury meets wild at Lake Naivasha. Experience African hospitality.
              </p>
              
              {/* Compact Contact Info */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
                  <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" />
                  <span className="text-xs sm:text-sm">+254 712 215 434</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
                  <Mail className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" />
                  <span className="text-xs sm:text-sm truncate">reservations@sawelalodge.com</span>
                </div>
              </div>
            </div>

            {/* Links Sections - Compact layout */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{title}</h4>
                <ul className="space-y-0 sm:space-y-0.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-white/70 hover:text-primary transition-colors block leading-tight"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Social - Compact */}
          <div className="border-t border-white/20 pt-2 sm:pt-6 pb-2 sm:pb-4">
            <div className="text-center mb-2 sm:mb-4">
              <h4 className="text-sm sm:text-base font-playfair font-bold text-white mb-1 sm:mb-2">
                Stay Connected
              </h4>
              <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-sm mx-auto gap-1 sm:gap-2 px-2 sm:px-0 mb-2 sm:mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded bg-white/10 border border-white/20 text-white text-xs sm:text-sm placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button className="btn-luxury whitespace-nowrap text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2">
                  Subscribe
                </Button>
              </div>

              {/* Compact Social Links */}
              <div className="flex justify-center space-x-2 sm:space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all"
                    >
                      <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar - Ultra Compact */}
          <div className="border-t border-white/20 pt-2 sm:pt-4">
            <div className="flex flex-col xs:flex-row justify-between items-center space-y-1 xs:space-y-0 px-2">
              <div className="text-white/60 text-xs sm:text-sm">
                © 2025 Devs. All rights reserved.
              </div>
              <div className="flex space-x-2 sm:space-x-4 text-xs sm:text-sm">
                <a href="#privacy" className="text-white/60 hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#terms" className="text-white/60 hover:text-primary transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};