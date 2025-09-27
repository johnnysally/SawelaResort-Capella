import { useState, useEffect, useRef } from 'react';
import { Wifi, Tv, Coffee, Bath, Bed, Users, Heart, Briefcase, Gift, Calendar, Clock, MapPin, Phone, Mail, Star, Check, Camera, Music, Utensils, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// Room images from rooms folder and conference images for categorization
import safariSuite from '@/assets/rooms/rooms1.jpg.jpg';
import deluxeVilla from '@/assets/rooms/deluxe-rooms1.jpg.jpg';
import presidentialLodge from '@/assets/rooms/deluxe-romms2.jpg.jpg';
// Conference images for Capella suites and conference facilities
import capellaSuite from '@/assets/conferences/conference1.jpg.jpg';
import capellaVilla from '@/assets/conferences/conference2.jpg.jpg';
import boardroom from '@/assets/conferences/conference3.jpg.jpg';
import conferenceHall from '@/assets/conferences/conference4.jpg.jpg';
// Special events images
import weddingEvent from '@/assets/specialevents/wedding1.jpg.jpg';
import corporateEvent from '@/assets/specialevents/team1.jpg.jpg';
import privateEvent from '@/assets/specialevents/wedding-venue-in-kenya6.jpg';
import weddingVenue from '@/assets/specialevents/wedding-venue-in-kenya8.jpg';
import teamBuilding from '@/assets/specialevents/team5.jpg.jpg';
import celebration from '@/assets/specialevents/wedding3.jpg.jpg';

const accommodations = [
  {
    id: 1,
    name: 'Safari Suite',
    description: 'Elegant suite with panoramic savanna views and premium amenities',
    price: 'From $450/night',
    guests: 2,
    image: safariSuite,
    amenities: ['King Size Bed', 'Private Balcony', 'Mini Bar', 'WiFi', '24/7 Service'],
  },
  {
    id: 2,
    name: 'Deluxe Safari Villa',
    description: 'Spacious villa perfect for families with private pool access',
    price: 'From $680/night',
    guests: 4,
    image: deluxeVilla,
    amenities: ['Two Bedrooms', 'Private Pool', 'Kitchen', 'Garden View', 'Concierge'],
  },
  {
    id: 3,
    name: 'Presidential Lodge',
    description: 'Ultimate luxury with private chef and exclusive safari experiences',
    price: 'From $1200/night',
    guests: 6,
    image: presidentialLodge,
    amenities: ['Three Bedrooms', 'Private Chef', 'Game Drive Vehicle', 'Spa Services', 'Butler'],
  },
  // Capella additions
  {
    id: 4,
    name: 'Capella Presidential Suite',
    description: 'Ultra-private suite in the Capella wing with lake views and butler service',
    price: 'From $2500/night',
    guests: 4,
    image: capellaSuite,
    amenities: ['Private Terrace', 'Butler', 'Infinity Pool', 'Private Dining'],
  },
  {
    id: 5,
    name: 'Capella Lake Villa',
    description: 'Secluded villa with private chef and exclusive suite amenities',
    price: 'From $1800/night',
    guests: 6,
    image: capellaVilla,
    amenities: ['Two Bedrooms', 'Private Chef', 'Garden View', 'Luxury Transfers'],
  },
  // Conference Facilities
  {
    id: 6,
    name: 'Executive Boardroom',
    description: 'Intimate boardroom perfect for executive meetings and strategic planning',
    price: 'From $200/day',
    guests: 12,
    image: boardroom,
    amenities: ['Video Conferencing', 'Smart Board', 'Premium WiFi', 'Catering Service', 'Lake Views'],
  },
  {
    id: 7,
    name: 'Capella Conference Hall',
    description: 'Grand conference hall ideal for large events, seminars, and corporate gatherings',
    price: 'From $500/day',
    guests: 100,
    image: conferenceHall,
    amenities: ['Multimedia Systems', 'Stage & Podium', 'Professional Lighting', 'Break-out Rooms', 'Full Catering'],
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
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 opacity-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
            <span className="text-foreground">Luxury</span>
            <span className="text-gradient"> Accommodations</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2 sm:px-4">
            Each suite is meticulously designed to offer the perfect blend of comfort and authentic African elegance, 
            ensuring every guest experiences the ultimate in luxury hospitality.
          </p>
        </div>

        {/* Room Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 opacity-100">
          {accommodations.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(index)}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 ${
                selectedRoom === index
                  ? 'bg-primary text-primary-foreground shadow-luxury'
                  : 'bg-card text-card-foreground hover:bg-primary/10 active:bg-primary/20'
              }`}
            >
              <span className="sm:hidden">
                {room.name.length > 12 
                  ? room.name.substring(0, 12) + '...'
                  : room.name
                }
              </span>
              <span className="hidden sm:inline">{room.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Room Display */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 lg:mb-12 opacity-100">
          {/* Room Image */}
          <div className="relative overflow-hidden rounded-lg lg:rounded-2xl shadow-luxury order-2 lg:order-1">
            <img
              src={accommodations[selectedRoom].image}
              alt={`${accommodations[selectedRoom].name} interior with luxury amenities`}
              className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="glass px-3 py-1.5 rounded-full text-sm font-medium">
                {accommodations[selectedRoom].price}
              </span>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-playfair font-bold mb-3 lg:mb-4 leading-tight">
                {accommodations[selectedRoom].name}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                {accommodations[selectedRoom].description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 py-3 sm:py-4 border-y border-border">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Up to {accommodations[selectedRoom].guests} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Luxury bedding</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Premium Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {accommodations[selectedRoom].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm leading-tight">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 opacity-100">
          {accommodations.map((room, index) => (
            <Card key={room.id} className="group overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} accommodation`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="btn-luxury text-sm">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-playfair font-semibold mb-2 line-clamp-2 leading-tight">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{room.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-primary">{room.price}</span>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{room.guests} guests</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Events Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 opacity-100">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-3 sm:mb-4 lg:mb-6">
              <span className="text-foreground">Special</span>
              <span className="text-gradient"> Events</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Create unforgettable memories with our comprehensive event planning services. From intimate celebrations 
              to grand corporate gatherings, we provide the perfect setting, professional coordination, and luxury amenities 
              for your special moments.
            </p>
          </div>

          {/* Event Statistics */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
            <Card className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">500+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Events Hosted</p>
            </Card>
            <Card className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">2000+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Happy Guests</p>
            </Card>
            <Card className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Star className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">4.9/5</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Event Rating</p>
            </Card>
            <Card className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">10+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Wedding Events */}
            <Card className="group overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={weddingEvent}
                  alt="Wedding celebrations at Sawela Lodge"
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-white border-0">
                    <Heart className="h-3 w-3 mr-1" />
                    Wedding
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Wedding Celebrations</h4>
                  <p className="text-white/90 text-sm">Romantic lakeside ceremonies with personalized planning</p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">Starting from</span>
                    <span className="text-lg font-bold text-foreground">$5,000</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Users className="h-3 w-3 mr-1" />
                    <span>50-200 guests</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Full day event</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Lakeside ceremony venues</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Bridal suite accommodations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Professional photography</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Customized catering menus</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Wedding coordination</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Floral arrangements</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 btn-luxury text-sm">Plan Wedding</Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Phone className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Corporate Events */}
            <Card className="group overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={corporateEvent}
                  alt="Corporate events at Sawela Lodge"
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary/90 text-white border-0">
                    <Briefcase className="h-3 w-3 mr-1" />
                    Corporate
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Corporate Retreats</h4>
                  <p className="text-white/90 text-sm">Team building in stunning natural settings</p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">Starting from</span>
                    <span className="text-lg font-bold text-foreground">$2,500</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Users className="h-3 w-3 mr-1" />
                    <span>10-150 attendees</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>1-3 days</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Executive conference facilities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Team building activities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Business lunch arrangements</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Accommodation packages</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>AV equipment & tech support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Transportation coordination</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 btn-luxury text-sm">Book Retreat</Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Mail className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Private Celebrations */}
            <Card className="group overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={privateEvent}
                  alt="Private celebrations at Sawela Lodge"
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent/90 text-white border-0">
                    <Gift className="h-3 w-3 mr-1" />
                    Private
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Private Celebrations</h4>
                  <p className="text-white/90 text-sm">Anniversaries, birthdays, and special milestones</p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">Starting from</span>
                    <span className="text-lg font-bold text-foreground">$1,500</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Users className="h-3 w-3 mr-1" />
                    <span>5-80 guests</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>4-12 hours</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Intimate venue settings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Personalized decoration</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Private chef experiences</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Guest accommodation deals</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Custom event themes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span>Professional photography</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 btn-luxury text-sm">Plan Celebration</Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Mail className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Comprehensive Event Planning Section */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold mb-4">
                  Complete Event Planning Services
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 max-w-3xl mx-auto">
                  Our dedicated event planning team brings over a decade of expertise in creating extraordinary experiences. 
                  From concept to execution, we handle every detail to ensure your event is flawless and memorable.
                </p>
              </div>

              {/* Service Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm sm:text-base mb-1">Timeline Planning</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Detailed scheduling and coordination</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm sm:text-base mb-1">Vendor Coordination</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Trusted network of professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Camera className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm sm:text-base mb-1">Design & Décor</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Custom themes and styling</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm sm:text-base mb-1">Catering Excellence</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Gourmet menus and service</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Music className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm sm:text-base mb-1">Entertainment</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Music, lighting, and activities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm sm:text-base mb-1">Logistics Support</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">Transportation and setup</p>
                  </div>
                </div>
              </div>

              {/* Contact and Booking Section */}
              <div className="text-center border-t border-primary/20 pt-6">
                <h5 className="text-lg sm:text-xl font-semibold mb-4">Ready to Plan Your Event?</h5>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto mb-4">
                  <Button className="btn-luxury flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Free Consultation
                  </Button>
                  <Button variant="outline" className="btn-ghost-luxury flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +254 123 456 789
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Available 24/7 for event planning consultations • Average response time: 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};