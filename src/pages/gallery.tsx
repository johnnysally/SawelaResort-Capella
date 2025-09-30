import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Grid, Filter, X } from 'lucide-react';

// Gallery Images
import gallery2 from '@/assets/gallery/gallery2.jpg.jpg';
import gallery5 from '@/assets/gallery/gallery5.jpg.jpg';
import gallery7 from '@/assets/gallery/gallery7.jpg.jpg';
import gallery8 from '@/assets/gallery/gallery8.jpg.jpg';
import gallery9 from '@/assets/gallery/gallery9.jpg.jpg';
import gallery11 from '@/assets/gallery/gallery11.jpg.jpg';
import gallery12 from '@/assets/gallery/gallery12.jpg.jpg';

// Room Images
import rooms1 from '@/assets/rooms/rooms1.jpg.jpg';
import rooms2 from '@/assets/rooms/rooms2.jpg.jpg';
import deluxeRooms1 from '@/assets/rooms/deluxe-rooms1.jpg.jpg';
import deluxeRomms from '@/assets/rooms/deluxe-romms.jpg.jpg';
import deluxeRomms2 from '@/assets/rooms/deluxe-romms2.jpg.jpg';
import deluxeRomms3 from '@/assets/rooms/deluxe-romms3.jpg.jpg';
import deluxeRomms4 from '@/assets/rooms/deluxe-romms4.jpg.jpg';
import deluxeRomms5 from '@/assets/rooms/deluxe-romms5.jpg.jpg';
import deluxeRomms6 from '@/assets/rooms/deluxe-romms6.jpg.jpg';
import deluxeRomms7 from '@/assets/rooms/deluxe-romms7.jpg.jpg';
import deluxeRomms8 from '@/assets/rooms/deluxe-romms8.jpg.jpg';
import deluxeRomms9 from '@/assets/rooms/deluxe-romms9.jpg.jpg';

// Services Images
import service from '@/assets/services/service.jpg.jpg';
import service1 from '@/assets/services/service1.jpg.jpg';
import service3 from '@/assets/services/service3.jpg.jpg';

// Hero Section Images
import breadcrumb from '@/assets/hero_section/breadcrumb.jpg';
import gallery1Hero from '@/assets/hero_section/gallery1.jpg.jpg';
import gallery4Hero from '@/assets/hero_section/gallery4.jpg.jpg';
import gallery6Hero from '@/assets/hero_section/gallery6.jpg.jpg';
import gallery10Hero from '@/assets/hero_section/gallery10.jpg.jpg';

// Conference Images
import conference1 from '@/assets/conferences/conference1.jpg.jpg';
import conference2 from '@/assets/conferences/conference2.jpg.jpg';
import conference3 from '@/assets/conferences/conference3.jpg.jpg';
import conference4 from '@/assets/conferences/conference4.jpg.jpg';
import conference5 from '@/assets/conferences/conference5.jpg.jpg';
import conference6 from '@/assets/conferences/conference6.jpg.jpg';
import conference7 from '@/assets/conferences/conference7.jpg.jpg';
import conference8 from '@/assets/conferences/conference8.jpg.jpg';
import conference9 from '@/assets/conferences/conference9.jpg.jpg';
import conference10 from '@/assets/conferences/conference10.jpg.jpg';
import conferenceKenya from '@/assets/conferences/conference-in-kenya6.jpg';

// Special Events Images
import wedding from '@/assets/specialevents/wedding.jpg.jpg';
import wedding1 from '@/assets/specialevents/wedding1.jpg.jpg';
import wedding2 from '@/assets/specialevents/wedding2.jpg.jpg';
import wedding3 from '@/assets/specialevents/wedding3.jpg.jpg';
import wedding4 from '@/assets/specialevents/wedding4.jpg.jpg';
import wedding6 from '@/assets/specialevents/wedding6.jpg.jpg';
import weddingVenue2 from '@/assets/specialevents/wedding-venue-in-kenya2.jpg';
import weddingVenue3 from '@/assets/specialevents/wedding-venue-in-kenya3.jpg';
import weddingVenue5 from '@/assets/specialevents/wedding-venue-in-kenya5.jpg';
import weddingVenue6 from '@/assets/specialevents/wedding-venue-in-kenya6.jpg';
import weddingVenue8 from '@/assets/specialevents/wedding-venue-in-kenya8.jpg';
import weddingVenue9 from '@/assets/specialevents/wedding-venue-in-kenya9.jpg';
import team1 from '@/assets/specialevents/team1.jpg.jpg';
import team2 from '@/assets/specialevents/team2.jpg.jpg';
import team4 from '@/assets/specialevents/team4.jpg.jpg';
import team5 from '@/assets/specialevents/team5.jpg.jpg';
import team6 from '@/assets/specialevents/team6.jpg.jpg';
import team7 from '@/assets/specialevents/team7.jpg.jpg';

// Additional Assets
import diningExperience from '@/assets/dining-experience.jpg';
import heroImage from '@/assets/hero-image.jpg';
import roomLuxury from '@/assets/room-luxury.jpg';
import spaWellness from '@/assets/spa-wellness.jpg';

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  // General Gallery
  { id: 1, src: gallery2, category: 'Gallery', title: 'Lodge Exterior', description: 'Beautiful exterior view of Sawela Lodge' },
  { id: 2, src: gallery5, category: 'Gallery', title: 'Natural Beauty', description: 'Stunning natural surroundings' },
  { id: 3, src: gallery7, category: 'Gallery', title: 'Scenic Views', description: 'Breathtaking landscape views' },
  { id: 4, src: gallery8, category: 'Gallery', title: 'Lodge Ambiance', description: 'Relaxing lodge atmosphere' },
  { id: 5, src: gallery9, category: 'Gallery', title: 'Wildlife Moments', description: 'Amazing wildlife encounters' },
  { id: 6, src: gallery11, category: 'Gallery', title: 'Lodge Facilities', description: 'Premium lodge amenities' },
  { id: 7, src: gallery12, category: 'Gallery', title: 'Guest Experience', description: 'Memorable guest moments' },
  
  // Accommodations
  { id: 8, src: rooms1, category: 'Accommodations', title: 'Safari Suite', description: 'Elegant safari-themed accommodation' },
  { id: 9, src: rooms2, category: 'Accommodations', title: 'Lake View Room', description: 'Stunning lake view accommodations' },
  { id: 10, src: deluxeRooms1, category: 'Accommodations', title: 'Deluxe Room', description: 'Luxurious deluxe accommodations' },
  { id: 11, src: deluxeRomms, category: 'Accommodations', title: 'Presidential Suite', description: 'Ultimate luxury suite experience' },
  { id: 12, src: deluxeRomms2, category: 'Accommodations', title: 'Executive Villa', description: 'Premium villa accommodation' },
  { id: 13, src: deluxeRomms3, category: 'Accommodations', title: 'Family Suite', description: 'Perfect for family stays' },
  { id: 14, src: deluxeRomms4, category: 'Accommodations', title: 'Honeymoon Haven', description: 'Romantic getaway suite' },
  { id: 15, src: deluxeRomms5, category: 'Accommodations', title: 'Garden Villa', description: 'Serene garden-view accommodation' },
  { id: 16, src: deluxeRomms6, category: 'Accommodations', title: 'Luxury Lodge', description: 'Premium lodge experience' },
  { id: 17, src: deluxeRomms7, category: 'Accommodations', title: 'Safari Villa', description: 'Authentic safari accommodation' },
  { id: 18, src: deluxeRomms8, category: 'Accommodations', title: 'Lake Suite', description: 'Exclusive lake-front suite' },
  { id: 19, src: deluxeRomms9, category: 'Accommodations', title: 'Luxury Retreat', description: 'Private luxury retreat' },
  
  // Services & Experiences
  { id: 20, src: service, category: 'Services', title: 'Safari Experience', description: 'Guided wildlife safari adventures' },
  { id: 21, src: service1, category: 'Services', title: 'Nature Walks', description: 'Scenic nature walk experiences' },
  { id: 22, src: service3, category: 'Services', title: 'Lake Activities', description: 'Water-based recreational activities' },
  
  // Scenic Views
  { id: 23, src: breadcrumb, category: 'Scenic Views', title: 'Lake Naivasha', description: 'Spectacular lake panorama' },
  { id: 24, src: gallery1Hero, category: 'Scenic Views', title: 'Sunrise Vista', description: 'Beautiful sunrise over the valley' },
  { id: 25, src: gallery4Hero, category: 'Scenic Views', title: 'Landscape Beauty', description: 'Stunning landscape photography' },
  { id: 26, src: gallery6Hero, category: 'Scenic Views', title: 'Natural Wonder', description: 'Amazing natural formations' },
  { id: 27, src: gallery10Hero, category: 'Scenic Views', title: 'Wildlife Habitat', description: 'Natural wildlife habitat views' },
  
  // Conference & Events
  { id: 28, src: conference1, category: 'Conference', title: 'Executive Boardroom', description: 'Professional meeting facilities' },
  { id: 29, src: conference2, category: 'Conference', title: 'Conference Hall', description: 'Large event and conference space' },
  { id: 30, src: conference3, category: 'Conference', title: 'Meeting Room', description: 'Intimate meeting space setup' },
  { id: 31, src: conference4, category: 'Conference', title: 'Event Space', description: 'Flexible event hosting area' },
  { id: 32, src: conference5, category: 'Conference', title: 'Seminar Room', description: 'Educational seminar facilities' },
  { id: 33, src: conference6, category: 'Conference', title: 'Workshop Area', description: 'Interactive workshop space' },
  { id: 34, src: conference7, category: 'Conference', title: 'Training Center', description: 'Professional training facilities' },
  { id: 35, src: conference8, category: 'Conference', title: 'Business Hub', description: 'Modern business meeting hub' },
  { id: 36, src: conference9, category: 'Conference', title: 'Corporate Suite', description: 'Executive corporate facilities' },
  { id: 37, src: conference10, category: 'Conference', title: 'Convention Center', description: 'Large convention facilities' },
  { id: 38, src: conferenceKenya, category: 'Conference', title: 'Kenya Conference', description: 'Premium conference in Kenya' },
  
  // Special Events - Weddings
  { id: 39, src: wedding, category: 'Special Events', title: 'Wedding Ceremony', description: 'Beautiful wedding celebrations at the lodge' },
  { id: 40, src: wedding1, category: 'Special Events', title: 'Lakeside Wedding', description: 'Romantic lakeside wedding ceremonies' },
  { id: 41, src: wedding2, category: 'Special Events', title: 'Wedding Reception', description: 'Elegant wedding reception setups' },
  { id: 42, src: wedding3, category: 'Special Events', title: 'Wedding Decor', description: 'Stunning wedding decoration arrangements' },
  { id: 43, src: wedding4, category: 'Special Events', title: 'Wedding Venue', description: 'Perfect wedding venue settings' },
  { id: 44, src: wedding6, category: 'Special Events', title: 'Wedding Photography', description: 'Memorable wedding moments captured' },
  { id: 45, src: weddingVenue2, category: 'Special Events', title: 'Wedding Venue Kenya', description: 'Premier wedding venues in Kenya' },
  { id: 46, src: weddingVenue3, category: 'Special Events', title: 'Outdoor Wedding', description: 'Beautiful outdoor wedding settings' },
  { id: 47, src: weddingVenue5, category: 'Special Events', title: 'Garden Wedding', description: 'Lush garden wedding ceremonies' },
  { id: 48, src: weddingVenue6, category: 'Special Events', title: 'Wedding Pavilion', description: 'Elegant wedding pavilion venues' },
  { id: 49, src: weddingVenue8, category: 'Special Events', title: 'Wedding Setup', description: 'Professional wedding setup services' },
  { id: 50, src: weddingVenue9, category: 'Special Events', title: 'Wedding Arch', description: 'Beautiful wedding arch decorations' },
  
  // Special Events - Corporate & Team Building
  { id: 51, src: team1, category: 'Special Events', title: 'Team Building', description: 'Corporate team building activities' },
  { id: 52, src: team2, category: 'Special Events', title: 'Corporate Retreat', description: 'Executive corporate retreat sessions' },
  { id: 53, src: team4, category: 'Special Events', title: 'Business Meeting', description: 'Professional business meeting setups' },
  { id: 54, src: team5, category: 'Special Events', title: 'Conference Setup', description: 'Corporate conference arrangements' },
  { id: 55, src: team6, category: 'Special Events', title: 'Team Activities', description: 'Engaging team building exercises' },
  { id: 56, src: team7, category: 'Special Events', title: 'Corporate Events', description: 'Professional corporate event hosting' },
  
  // Dining & Wellness
  { id: 57, src: diningExperience, category: 'Dining', title: 'Bush Dining', description: 'Unique outdoor dining experience' },
  { id: 58, src: heroImage, category: 'Lodge', title: 'Lodge Overview', description: 'Complete lodge experience' },
  { id: 59, src: roomLuxury, category: 'Accommodations', title: 'Luxury Amenities', description: 'Premium room amenities' },
  { id: 60, src: spaWellness, category: 'Wellness', title: 'Spa & Wellness', description: 'Relaxing spa treatments' },
];

const categories = ['All', 'Gallery', 'Accommodations', 'Services', 'Scenic Views', 'Conference', 'Special Events', 'Dining', 'Wellness', 'Lodge'];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedDetailsImage, setSelectedDetailsImage] = useState<GalleryItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Camera className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-3" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">
                <span className="text-foreground">Photo</span>
                <span className="text-gradient"> Gallery</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the beauty of Sawela Lodge through our comprehensive photo collection featuring 
              accommodations, experiences, conference facilities, and the stunning natural surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 sm:py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base font-medium text-foreground">Filter by Category:</span>
            </div>
            <Badge variant="secondary" className="text-xs sm:text-sm">
              {filteredItems.length} images
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs sm:text-sm transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 xs:py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden" onClick={() => setSelectedImage(item)}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-36 xs:h-44 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="mb-1 xs:mb-2 text-xs">{item.category}</Badge>
                    <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-white mb-0.5 xs:mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2">{item.description}</p>
                  </div>
                </div>
                <div className="p-2 xs:p-3 flex justify-center bg-white">
                  <button
                    className="btn-luxury text-xs xs:text-sm px-3 xs:px-4 py-1.5 rounded shadow hover:bg-primary/90 transition-colors duration-200"
                    onClick={e => { e.stopPropagation(); setSelectedDetailsImage(item); }}
                  >
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg xs:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4 text-white" />
            </Button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="lazy"
              className="w-full h-auto max-h-[60vh] xs:max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <Badge className="mb-1 xs:mb-2">{selectedImage.category}</Badge>
              <h2 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1 xs:mb-2">{selectedImage.title}</h2>
              <p className="text-xs xs:text-sm sm:text-base text-white/90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      {/* Details Modal (Sawela Lodges style) */}
      {selectedDetailsImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/2 w-full flex-shrink-0 bg-gray-100 flex items-center justify-center">
              <img
                src={selectedDetailsImage.src}
                alt={selectedDetailsImage.title}
                loading="lazy"
                className="w-full h-48 xs:h-64 sm:h-80 object-cover md:rounded-l-lg md:rounded-tr-none rounded-t-lg"
              />
            </div>
            {/* Details section */}
            <div className="md:w-1/2 w-full p-3 xs:p-6 flex flex-col justify-between">
              <div>
                <Badge className="mb-1 xs:mb-2">{selectedDetailsImage.category}</Badge>
                <h2 className="text-lg xs:text-2xl font-bold mb-1 xs:mb-2 text-primary font-playfair">{selectedDetailsImage.title}</h2>
                {/* Star rating (static 5 stars for demo) */}
                <div className="flex items-center mb-2 xs:mb-3">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="10 1.5 12.59 7.36 18.9 7.97 14 12.26 15.18 18.45 10 15.27 4.82 18.45 6 12.26 1.1 7.97 7.41 7.36 10 1.5"/></svg>
                  ))}
                </div>
                <p className="text-xs xs:text-base text-gray-700 mb-2 xs:mb-4">{selectedDetailsImage.description}</p>
                <div className="text-xs text-gray-400 mb-2 xs:mb-4">Image ID: {selectedDetailsImage.id}</div>
              </div>
              <Button className="btn-luxury w-full py-2 xs:py-3 text-base xs:text-lg mt-1 xs:mt-2">Book Now</Button>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setSelectedDetailsImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;