import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BookingCard from '@/components/BookingCard';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);
  const [isDiningOpen, setIsDiningOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDiningOpen, setMobileDiningOpen] = useState(false);
  const [mobileHotelsOpen, setMobileHotelsOpen] = useState(false);
  const location = useLocation();

  // Show proper hotel name in the navbar depending on current route
  const hotelName = location.pathname.startsWith('/capella') ? 'Capella Lodge' : 'Sawela Lodge';

  // Listen for a global event so other components can open the booking modal
  useEffect(() => {
    const handler = (() => setShowBooking(true)) as EventListener;
    window.addEventListener('openBooking', handler);
    return () => window.removeEventListener('openBooking', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    
    // Check on mount
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add ref for click outside detection
  const navRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdowns on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsDiningOpen(false);
        setIsHotelsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  // Handle dropdown clicks for mobile
  const handleDiningClick = () => {
    if (isMobile) {
      setIsDiningOpen(!isDiningOpen);
      setIsHotelsOpen(false);
    }
  };

  const handleHotelsClick = () => {
    if (isMobile) {
      setIsHotelsOpen(!isHotelsOpen);
      setIsDiningOpen(false);
    }
  };

  // Handle mobile dropdown toggles
  const toggleMobileDining = () => {
    setMobileDiningOpen(!mobileDiningOpen);
    setMobileHotelsOpen(false);
  };

  const toggleMobileHotels = () => {
    setMobileHotelsOpen(!mobileHotelsOpen);
    setMobileDiningOpen(false);
  };

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
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-warm' : 'glass-dark'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 mr-4 sm:mr-12">
              <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-gradient">
                <span className="hidden sm:inline">{hotelName}</span>
                <span className="sm:hidden">
                  {location.pathname.startsWith('/capella') ? 'Capella' : 'Sawela'}
                </span>
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
                        if (!isMobile) {
                          clearTimeout(diningTimeout);
                          setIsDiningOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMobile) {
                          diningTimeout = setTimeout(() => setIsDiningOpen(false), 200);
                        }
                      }}
                    >
                      <button
                        onClick={handleDiningClick}
                        className={`flex items-center space-x-2 ${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-5 w-5" />
                      </button>
                      {isDiningOpen && (
                        <div
                          className="absolute mt-3 w-80 bg-white shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-200"
                          onMouseEnter={() => {
                            if (!isMobile) {
                              clearTimeout(diningTimeout);
                            }
                          }}
                          onMouseLeave={() => {
                            if (!isMobile) {
                              diningTimeout = setTimeout(() => setIsDiningOpen(false), 200);
                            }
                          }}
                        >
                          {diningOptions.map((option) => (
                            <Link
                              key={option.name}
                              to={option.href}
                              className="block px-10 py-5 text-xl text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                              onClick={() => setIsDiningOpen(false)}
                            >
                              {option.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Use Link for full paths, anchor for hash fragments
                const isHashLink = item.href.includes('#');
                
                if (isHashLink) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                    >
                      {item.name}
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Our Hotels Dropdown */}
              <div
                className="relative group ml-10"
                onMouseEnter={() => {
                  if (!isMobile) {
                    clearTimeout(hotelsTimeout);
                    setIsHotelsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile) {
                    hotelsTimeout = setTimeout(() => setIsHotelsOpen(false), 200);
                  }
                }}
              >
                <button
                  onClick={handleHotelsClick}
                  className={`flex items-center space-x-2 ${linkColor} hover:text-primary transition-colors duration-300 font-semibold text-lg whitespace-nowrap`}
                >
                  <span>Our Hotels</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                {isHotelsOpen && (
                  <div
                    className="absolute mt-3 w-80 bg-white shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-200"
                    onMouseEnter={() => {
                      if (!isMobile) {
                        clearTimeout(hotelsTimeout);
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isMobile) {
                        hotelsTimeout = setTimeout(() => setIsHotelsOpen(false), 200);
                      }
                    }}
                  >
                    {hotelsOptions.map((hotel) => (
                      <Link
                        key={hotel.name}
                        to={hotel.href}
                        className="block px-10 py-5 text-xl text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {hotel.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden xl:flex items-center space-x-8 ml-8">
              <div
                className={`flex items-center space-x-3 text-sm ${contactColor} whitespace-nowrap`}
              >
                <Phone className="h-4 w-4" />
                <span>+254 712 215 434</span>
              </div>
              <Button
                className="btn-luxury text-sm px-5 py-2 whitespace-nowrap"
                onClick={() => window.dispatchEvent(new Event('openBooking'))}
              >
                Book Now
              </Button>
            </div>

            {/* Desktop Book Now Button (shown on lg, hidden on xl where full contact shows) */}
            <div className="hidden lg:flex xl:hidden">
              <Button
                className="btn-luxury text-sm px-5 py-2 whitespace-nowrap"
                onClick={() => window.dispatchEvent(new Event('openBooking'))}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${iconColor} hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-white/10`}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 z-50">
              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-b-xl mx-4 overflow-hidden">
                <div className="px-4 py-6 space-y-1">
                  {navItems.map((item) => {
                    if (item.dropdown) {
                      return (
                        <div key={item.name}>
                          <button
                            onClick={toggleMobileDining}
                            className="w-full flex items-center justify-between px-4 py-3 text-lg text-gray-800 font-semibold border-b border-gray-200 hover:bg-gray-50"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileDiningOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {mobileDiningOpen && (
                            <div className="pl-6 py-2 space-y-1">
                              {diningOptions.map((option) => (
                                <Link
                                  key={option.name}
                                  to={option.href}
                                  className="block px-4 py-3 text-base text-gray-600 hover:text-primary hover:bg-primary/5 rounded transition-all duration-200"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileDiningOpen(false);
                                  }}
                                >
                                  {option.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Use Link for full paths, anchor for hash fragments
                    const isHashLink = item.href.includes('#');
                    
                    if (isHashLink) {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-lg text-gray-800 hover:text-primary hover:bg-primary/5 rounded transition-all duration-200 font-semibold"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      );
                    }
                    
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-lg text-gray-800 hover:text-primary hover:bg-primary/5 rounded transition-all duration-200 font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  {/* Hotels Mobile */}
                  <div>
                    <button
                      onClick={toggleMobileHotels}
                      className="w-full flex items-center justify-between px-4 py-3 text-lg text-gray-800 font-semibold border-b border-gray-200 hover:bg-gray-50"
                    >
                      <span>Our Hotels</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileHotelsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileHotelsOpen && (
                      <div className="pl-6 py-2 space-y-1">
                        {hotelsOptions.map((hotel) => (
                          <Link
                            key={hotel.name}
                            to={hotel.href}
                            className="block px-4 py-3 text-base text-gray-600 hover:text-primary hover:bg-primary/5 rounded transition-all duration-200"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileHotelsOpen(false);
                            }}
                          >
                            {hotel.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contact Info Mobile */}
                  <div className="border-t border-gray-200 mt-4 pt-4 px-4">
                    <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                      <Phone className="h-4 w-4" />
                      <span>+254 712 215 434</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                      <Mail className="h-4 w-4" />
                      <span>reservations@sawelalodge.com</span>
                    </div>
                    <Button
                      className="btn-luxury w-full text-base py-3"
                      onClick={() => {
                        window.dispatchEvent(new Event('openBooking'));
                        setIsOpen(false);
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
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
