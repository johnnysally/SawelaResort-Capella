import { useEffect, useState } from 'react';
import { ArrowDown, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import hero images
import breadcrumb from '@/assets/hero_section/breadcrumb.jpg';
import gallery1 from '@/assets/hero_section/gallery1.jpg.jpg';
import gallery4 from '@/assets/hero_section/gallery4.jpg.jpg';
import gallery6 from '@/assets/hero_section/gallery6.jpg.jpg';
import gallery10 from '@/assets/hero_section/gallery10.jpg.jpg';

// Hero slides data with images and corresponding content
const heroSlides = [
  {
    id: 1,
    image: breadcrumb,
    location: "Naivasha, Kenya",
    headline: {
      text1: "Where ",
      highlight1: "Luxury ",
      text2: "Meets ",
      highlight2: "Wild"
    },
    subtitle: "Experience the pinnacle of African hospitality at Sawela Lodge, where every moment is crafted to perfection amidst the breathtaking landscapes of Naivasha.",
    stats: [
      { number: "25+", label: "Luxury Suites" },
      { number: "50+", label: "Wildlife Species" },
      { number: "4.9", label: "Guest Rating" }
    ]
  },
  {
    id: 2,
    image: gallery1,
    location: "Lake Naivasha, Kenya",
    headline: {
      text1: "Discover ",
      highlight1: "Authentic ",
      text2: "Safari ",
      highlight2: "Elegance"
    },
    subtitle: "Immerse yourself in the raw beauty of Africa while enjoying world-class amenities and personalized service that defines true luxury hospitality.",
    stats: [
      { number: "100+", label: "Acres Wildlife" },
      { number: "12", label: "Unique Experiences" },
      { number: "24/7", label: "Concierge Service" }
    ]
  },
  {
    id: 3,
    image: gallery4,
    location: "Great Rift Valley, Kenya",
    headline: {
      text1: "Embrace ",
      highlight1: "Nature's ",
      text2: "Ultimate ",
      highlight2: "Sanctuary"
    },
    subtitle: "Wake up to breathtaking sunrises over Lake Naivasha and fall asleep to the symphony of African wildlife in your luxurious safari retreat.",
    stats: [
      { number: "365", label: "Days Paradise" },
      { number: "5★", label: "Luxury Rating" },
      { number: "∞", label: "Memories Created" }
    ]
  },
  {
    id: 4,
    image: gallery6,
    location: "Sawela Lodge, Kenya",
    headline: {
      text1: "Create ",
      highlight1: "Unforgettable ",
      text2: "Safari ",
      highlight2: "Memories"
    },
    subtitle: "From intimate dining under the stars to private game drives, every experience is tailored to exceed your expectations and create lifelong memories.",
    stats: [
      { number: "200+", label: "Bird Species" },
      { number: "15", label: "Safari Vehicles" },
      { number: "99%", label: "Guest Satisfaction" }
    ]
  },
  {
    id: 5,
    image: gallery10,
    location: "Exclusive Safari, Kenya",
    headline: {
      text1: "Indulge in ",
      highlight1: "Premium ",
      text2: "African ",
      highlight2: "Adventure"
    },
    subtitle: "Experience the perfect fusion of adventure and luxury with private game drives, gourmet dining, and spa treatments overlooking the pristine wilderness.",
    stats: [
      { number: "3", label: "Restaurants" },
      { number: "2", label: "Swimming Pools" },
      { number: "1", label: "Unforgettable Stay" }
    ]
  }
];

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax and Transition */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Luxury Safari Lodge - ${slide.headline.text1}${slide.headline.highlight1}${slide.headline.text2}${slide.headline.highlight2}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <div className={`inline-flex items-center space-x-2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">{currentHero.location}</span>
            <div className="flex items-center space-x-0.5 sm:space-x-1 ml-1 sm:ml-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-playfair font-bold leading-tight mb-4 sm:mb-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <span className="text-white">{currentHero.headline.text1}</span>
            <span className="text-gradient">{currentHero.headline.highlight1}</span>
            <span className="text-white">{currentHero.headline.text2}</span>
            <span className="text-gradient">{currentHero.headline.highlight2}</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {currentHero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-md sm:max-w-none mx-auto sm:mx-0 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4" onClick={() => window.dispatchEvent(new Event('openBooking'))}>
              Book Your Escape
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              Explore Experiences
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-md lg:max-w-xl mx-auto sm:mx-0 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {currentHero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-white mb-0.5 sm:mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="glass p-2 sm:p-3 rounded-full hover:bg-primary/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </button>
      </div>
      
      <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="glass p-2 sm:p-3 rounded-full hover:bg-primary/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentSlide 
                ? 'bg-primary shadow-glow scale-125' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <a href="#accommodations" className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Discover More</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
        </a>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 hidden md:block">
        <div className="animate-float">
          <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20"></div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-8 hidden md:block">
        <div className="animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-gradient-sunset rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};