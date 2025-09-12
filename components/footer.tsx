import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Sawela Resort", href: "#sawela" },
    { name: "Capella Resort", href: "#kapela" },
    { name: "Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const resortInfo = [
    { name: "Accommodations", href: "#" },
    { name: "Dining", href: "#" },
    { name: "Spa & Wellness", href: "#" },
    { name: "Activities", href: "#" },
    { name: "Events", href: "#" },
    { name: "Special Offers", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gradient-to-br from-white via-white to-[#8B5E3C] text-[#4B2E20] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#5C4033]">Sawela & Capella</h3>
            <p className="text-[#4B2E20] mb-6 text-pretty">
              Experience luxury beyond imagination at our two extraordinary resorts. Where elegance meets paradise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-[#8B5E3C]/20 text-[#4B2E20] hover:text-[#8B5E3C]"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#5C4033]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#4B2E20] hover:text-[#8B5E3C] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resort Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#5C4033]">Resort Information</h4>
            <ul className="space-y-2">
              {resortInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="text-[#4B2E20] hover:text-[#8B5E3C] transition-colors duration-200"
                  >
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#5C4033]">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#8B5E3C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#4B2E20] text-sm">Paradise Bay Resort Complex</p>
                  <p className="text-[#4B2E20] text-sm">Tropical Island, Pacific Ocean</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#8B5E3C] flex-shrink-0" />
                <p className="text-[#4B2E20] text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#8B5E3C] flex-shrink-0" />
                <p className="text-[#4B2E20] text-sm">info@sawelacapella.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8B5E3C]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#4B2E20]/80 text-sm">
              © 2024 Sawela & Capella Resorts. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#4B2E20]/80 hover:text-[#8B5E3C] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#4B2E20]/80 hover:text-[#8B5E3C] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#4B2E20]/80 hover:text-[#8B5E3C] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
