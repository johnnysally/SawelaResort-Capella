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
    <section ref={sectionRef} id="accommodations" className="section-padding bg-gradient-earth">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-foreground">Luxury</span>
            <span className="text-gradient"> Accommodations</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each suite is meticulously designed to offer the perfect blend of comfort and authentic African elegance, 
            ensuring every guest experiences the ultimate in luxury hospitality.
          </p>
        </div>

        {/* Room Selection Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {accommodations.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedRoom === index
                  ? 'bg-primary text-primary-foreground shadow-luxury'
                  : 'bg-card text-card-foreground hover:bg-primary/10'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Featured Room Display */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Room Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-luxury">
            <img
              src={accommodations[selectedRoom].image}
              alt={`${accommodations[selectedRoom].name} interior with luxury amenities`}
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-6 left-6">
              <span className="glass px-4 py-2 rounded-full text-sm font-medium">
                {accommodations[selectedRoom].price}
              </span>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-playfair font-bold mb-4">
                {accommodations[selectedRoom].name}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {accommodations[selectedRoom].description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex items-center space-x-6 py-4 border-y border-border">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Up to {accommodations[selectedRoom].guests} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Luxury bedding</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="font-semibold mb-4">Premium Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {accommodations[selectedRoom].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="btn-luxury flex-1" onClick={() => window.dispatchEvent(new Event('openBooking'))}>
                Book This Suite
              </Button>
              <Button variant="outline" className="btn-ghost-luxury flex-1">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* All Rooms Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {accommodations.map((room, index) => (
            <Card key={room.id} className="group overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} accommodation`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="btn-luxury">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{room.price}</span>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{room.guests} guests</span>
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