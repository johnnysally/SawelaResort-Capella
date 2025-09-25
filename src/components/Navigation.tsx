import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingCard from '@/components/BookingCard';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);
  const [isDiningOpen, setIsDiningOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Accommodations & Conferences', href: '/accommodations' },
    { name: 'Dining', href: '/#dining', dropdown: true },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  const diningOptions = [
    { name: 'Tea & Breakfast', href: '/dining/tea-breakfast' },
    { name: 'Bar', href: '/dining/bar' },
    { name: 'Restaurant', href: '/dining/restaurant' },
    { name: 'Our Foods', href: '/dining/our-foods' },
    { name: 'Dining Areas', href: '/dining/areas' },
  ];

  const hotelsOptions = [
    { name: 'Capella Lodge', href: '/capella' },
    { name: 'Sawela Lodge', href: '/sawela' },
  ];

  const linkColor = isScrolled ? 'text-black' : 'text-[#FFFDD0]';
  const iconColor = isScrolled ? 'text-black' : 'text-[#FFFDD0]';
  const contactColor = isScrolled ? 'text-black' : 'text-[#FFFDD0]';

  let diningTimeout: NodeJS.Timeout;
  let hotelsTimeout: NodeJS.Timeout;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-warm' : 'glass-dark'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0 mr-12">
              <h1 className="text-3xl font-playfair font-bold text-gradient whitespace-nowrap">
                Sawela Lodge
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => {
                        clearTimeout(diningTimeout);
                        setIsDiningOpen(true);
                      }}
                      onMouseLeave={() => {
                        diningTimeout = setTimeout(() => setIsDiningOpen(false), 200);
                      }}
                    >
                      <a
                        href={item.href}
                        className={`flex items-center space-x-2 ${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-5 w-5" />
                      </a>
                      {isDiningOpen && (
                        <div
                          className="absolute mt-3 w-80 bg-white shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-200"
                          onMouseEnter={() => clearTimeout(diningTimeout)}
                          onMouseLeave={() => {
                            diningTimeout = setTimeout(() => setIsDiningOpen(false), 200);
                          }}
                        >
                          {diningOptions.map((option) => (
                            <a
                              key={option.name}
                              href={option.href}
                              className="block px-10 py-5 text-xl text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                            >
                              {option.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Our Hotels Dropdown */}
              <div
                className="relative group ml-10"
                onMouseEnter={() => {
                  clearTimeout(hotelsTimeout);
                  setIsHotelsOpen(true);
                }}
                onMouseLeave={() => {
                  hotelsTimeout = setTimeout(() => setIsHotelsOpen(false), 200);
                }}
              >
                <button
                  className={`flex items-center space-x-2 ${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                >
                  <span>Our Hotels</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                {isHotelsOpen && (
                  <div
                    className="absolute mt-3 w-80 bg-white shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-200"
                    onMouseEnter={() => clearTimeout(hotelsTimeout)}
                    onMouseLeave={() => {
                      hotelsTimeout = setTimeout(() => setIsHotelsOpen(false), 200);
                    }}
                  >
                    {hotelsOptions.map((hotel) => (
                      <a
                        key={hotel.name}
                        href={hotel.href}
                        className="block px-10 py-5 text-xl text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {hotel.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info & CTA (with spacing from Our Hotels) */}
            <div className="hidden lg:flex items-center space-x-14 ml-12">
              <div
                className={`flex items-center space-x-3 text-base ${contactColor} whitespace-nowrap`}
              >
                <Phone className="h-5 w-5" />
                <span>+254 712 215 434</span>
              </div>
              <Button
                className="btn-luxury text-lg px-8 py-3 whitespace-nowrap"
                onClick={() => setShowBooking(!showBooking)}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${iconColor} hover:text-primary transition-colors duration-300`}
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-2 glass rounded-xl mt-2 mb-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-lg ${linkColor} hover:text-primary transition-colors duration-300 font-semibold whitespace-nowrap`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Dining Options Mobile */}
                <div className="px-3 py-2">
                  <span
                    className={`${linkColor} font-semibold block mb-2 text-lg whitespace-nowrap`}
                  >
                    Dining Options
                  </span>
                  {diningOptions.map((option) => (
                    <a
                      key={option.name}
                      href={option.href}
                      className="block px-4 py-4 text-lg text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                    >
                      {option.name}
                    </a>
                  ))}
                </div>

                {/* Hotels Mobile */}
                <div className="px-3 py-2">
                  <span
                    className={`${linkColor} font-semibold block mb-2 text-lg whitespace-nowrap`}
                  >
                    Our Hotels
                  </span>
                  {hotelsOptions.map((hotel) => (
                    <a
                      key={hotel.name}
                      href={hotel.href}
                      className="block px-4 py-4 text-lg text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                    >
                      {hotel.name}
                    </a>
                  ))}
                </div>

                {/* Contact Info Mobile */}
                <div className="px-3 py-2 border-t border-border mt-2 pt-4">
                  <div className="flex items-center space-x-3 text-base text-muted-foreground mb-3 whitespace-nowrap">
                    <Phone className="h-5 w-5" />
                    <span>+254 712 215 434</span>
                  </div>
                  <div className="flex items-center space-x-3 text-base text-muted-foreground mb-4 whitespace-nowrap">
                    <Mail className="h-5 w-5" />
                    <span>reservations@sawelalodge.com</span>
                  </div>
                  <Button
                    className="btn-luxury w-full text-lg py-3 whitespace-nowrap"
                    onClick={() => setShowBooking(!showBooking)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* BookingCard Modal */}
      {showBooking && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <BookingCard onClose={() => setShowBooking(false)} />
        </div>
      )}
    </>
  );
};
