import { useState, useEffect, useRef } from 'react';
import { Wifi, Tv, Coffee, Bath, Bed, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import roomLuxury from '@/assets/room-luxury.jpg';

const accommodations = [
  {
    id: 1,
    name: 'Safari Suite',
    description: 'Elegant suite with panoramic savanna views and premium amenities',
    price: 'From $450/night',
    guests: 2,
    image: roomLuxury,
    amenities: ['King Size Bed', 'Private Balcony', 'Mini Bar', 'WiFi', '24/7 Service'],
  },
  {
    id: 2,
    name: 'Deluxe Safari Villa',
    description: 'Spacious villa perfect for families with private pool access',
    price: 'From $680/night',
    guests: 4,
    image: roomLuxury,
    amenities: ['Two Bedrooms', 'Private Pool', 'Kitchen', 'Garden View', 'Concierge'],
  },
  {
    id: 3,
    name: 'Presidential Lodge',
    description: 'Ultimate luxury with private chef and exclusive safari experiences',
    price: 'From $1200/night',
    guests: 6,
    image: roomLuxury,
    amenities: ['Three Bedrooms', 'Private Chef', 'Game Drive Vehicle', 'Spa Services', 'Butler'],
  },
  // Capella additions
  {
    id: 4,
    name: 'Capella Presidential Suite',
    description: 'Ultra-private suite in the Capella wing with lake views and butler service',
    price: 'From $2500/night',
    guests: 4,
    image: roomLuxury,
    amenities: ['Private Terrace', 'Butler', 'Infinity Pool', 'Private Dining'],
  },
  {
    id: 5,
    name: 'Capella Lake Villa',
    description: 'Secluded villa with private chef and exclusive suite amenities',
    price: 'From $1800/night',
    guests: 6,
    image: roomLuxury,
    amenities: ['Two Bedrooms', 'Private Chef', 'Garden View', 'Luxury Transfers'],
  },
];

export const AccommodationsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} id="accommodations" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-earth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 xl:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">Luxury</span>
            <span className="text-gradient"> Accommodations</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2 xs:px-3 sm:px-4">
            Each suite is meticulously designed to offer the perfect blend of comfort and authentic African elegance, 
            ensuring every guest experiences the ultimate in luxury hospitality.
          </p>
        </div>

        {/* Room Selection Tabs */}
        <div className={`flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 lg:gap-4 mb-6 xs:mb-7 sm:mb-8 lg:mb-10 xl:mb-12 px-2 xs:px-3 sm:px-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {accommodations.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(index)}
              className={`px-2 py-1.5 xs:px-2.5 xs:py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-md xs:rounded-lg lg:rounded-xl text-xs xs:text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
                selectedRoom === index
                  ? 'bg-primary text-primary-foreground shadow-luxury'
                  : 'bg-card text-card-foreground hover:bg-primary/10 active:bg-primary/20'
              }`}
            >
              <span className="hidden xs:hidden sm:inline">{room.name}</span>
              <span className="xs:hidden sm:hidden">
                {room.name.split(' ').length > 2 
                  ? room.name.split(' ')[0] + ' ' + room.name.split(' ')[1].substring(0, 3) + '...'
                  : room.name.length > 10 
                    ? room.name.substring(0, 10) + '...'
                    : room.name
                }
              </span>
              <span className="hidden xs:inline sm:hidden">
                {room.name.split(' ').length > 2 
                  ? room.name.split(' ').slice(0, 2).join(' ')
                  : room.name
                }
              </span>
            </button>
          ))}
        </div>

        {/* Featured Room Display */}
        <div className={`grid lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 xl:gap-12 items-center mb-6 xs:mb-7 sm:mb-8 lg:mb-12 xl:mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Room Image */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-luxury order-2 lg:order-1">
            <img
              src={accommodations[selectedRoom].image}
              alt={`${accommodations[selectedRoom].name} interior with luxury amenities`}
              className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6">
              <span className="glass px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full text-xs xs:text-xs sm:text-sm font-medium">
                {accommodations[selectedRoom].price}
              </span>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2 px-2 xs:px-1 sm:px-0">
            <div>
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight">
                {accommodations[selectedRoom].name}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
                {accommodations[selectedRoom].description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 py-2.5 xs:py-3 sm:py-4 border-y border-border">
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <Users className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-xs xs:text-xs sm:text-sm font-medium">Up to {accommodations[selectedRoom].guests} guests</span>
              </div>
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <Bed className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-xs xs:text-xs sm:text-sm font-medium">Luxury bedding</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-semibold mb-2.5 xs:mb-3 sm:mb-4">Premium Amenities</h4>
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3">
                {accommodations[selectedRoom].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-1.5 xs:space-x-2">
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs xs:text-xs sm:text-sm leading-tight">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-2.5 sm:gap-3 lg:gap-4 pt-3 xs:pt-4 sm:pt-5 lg:pt-6">
              <Button className="btn-luxury flex-1 text-xs xs:text-sm sm:text-base py-2 xs:py-2.5 sm:py-3 px-4" onClick={() => window.dispatchEvent(new Event('openBooking'))}>
                Book This Suite
              </Button>
              <Button variant="outline" className="btn-ghost-luxury flex-1 text-xs xs:text-sm sm:text-base py-2 xs:py-2.5 sm:py-3 px-4">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* All Rooms Grid */}
        <div className={`grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 xl:gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {accommodations.map((room, index) => (
            <Card key={room.id} className="group overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} accommodation`}
                  className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 xs:bottom-3 xs:left-3 sm:bottom-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="btn-luxury text-xs xs:text-xs sm:text-sm px-2 py-1 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1.5">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-3 xs:p-4 sm:p-5 lg:p-6">
                <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-playfair font-semibold mb-1.5 xs:mb-2 line-clamp-2 leading-tight">{room.name}</h3>
                <p className="text-muted-foreground text-xs xs:text-xs sm:text-sm mb-2.5 xs:mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{room.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs xs:text-sm sm:text-base lg:text-lg font-semibold text-primary">{room.price}</span>
                  <div className="flex items-center space-x-1 text-xs xs:text-xs sm:text-sm text-muted-foreground">
                    <Users className="h-3 w-3 xs:h-3 xs:w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{room.guests} guests</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};