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
      text1: "We Look Forward to ",
      highlight1: "Welcoming You ",
      text2: "Through Our ",
      highlight2: "Doors"
    },
    subtitle: "Simple Pleasure of Just Being",
    supportingLines: [
      "Guarantee Maximum Comfort",
      "Leave time to explore the sights!"
    ],
    ctaText: "Book Your Stay"
  },
  {
    id: 2,
    image: gallery1,
    location: "Naivasha, Kenya",
    headline: {
      text1: "Spacious ",
      highlight1: "Stays ",
      text2: "in Naivasha, ",
      highlight2: "Kenya"
    },
    subtitle: "The best of Naivasha with our curated experiences",
    supportingLines: [
      "Travel + Leisure. Contemporary Luxury",
      "Highest Level of Personalised Service",
      "Tranquillity And Luxury"
    ],
    ctaText: "Explore Our Rooms"
  },
  {
    id: 3,
    image: gallery4,
    location: "Naivasha, Kenya",
    headline: {
      text1: "Whether it's for ",
      highlight1: "Business ",
      text2: "or ",
      highlight2: "Pleasure"
    },
    subtitle: "We Are Always in Tune With The Needs of Our Guests",
    supportingLines: [
      "Unlock The Captivating Secrets of Naivasha",
      "Spacious Rooms And Suites",
      "Large, Lush Lawns for Running Around—or Doing Nothing at All"
    ],
    ctaText: "Discover Naivasha"
  },
  {
    id: 4,
    image: gallery6,
    location: "Naivasha, Kenya",
    headline: {
      text1: "Exclusive Accommodation, ",
      highlight1: "Sensory Comforts, ",
      text2: "Intuitive Service, ",
      highlight2: "Good Food"
    },
    subtitle: "The Best of Both Worlds",
    supportingLines: [
      "Our Great Hospitality is Warm",
      "We Aim To Create A Unique And Memorable Experience for Each of Our Guests",
      "From Tranquil Rambles Through The Lush Surrounds, Dips in The Pool And Elegant Picnics"
    ],
    ctaText: "Plan Your Experience"
  },
  {
    id: 5,
    image: gallery10,
    location: "Naivasha, Kenya",
    headline: {
      text1: "Experience ",
      highlight1: "Unmatched ",
      text2: "Safari ",
      highlight2: "Luxury"
    },
    subtitle: "Where Every Detail is Crafted to Perfection",
    supportingLines: [
      "Immerse Yourself in Nature's Grandest Theater",
      "Personalized Service Beyond Expectations",
      "Create Memories That Last a Lifetime"
    ],
    ctaText: "Start Your Journey"
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

  // Auto-advance slides with systematic transition - image first, then content
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      // Image starts changing immediately (0ms delay)
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      // Content transition starts after image begins (slower, more graceful timing)
      setTimeout(() => setIsTransitioning(false), 3500); // Slower, more elegant cycle
    }, 7000); // Change slide every 7 seconds for more relaxed pace

    return () => clearInterval(interval);
  }, []); // Remove currentSlide dependency to prevent interval reset

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 3500); // Slower, more elegant manual timing
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 3500); // Slower, more elegant manual timing
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 3500); // Slower, more elegant direct navigation
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax and Modern Sliding Transition */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full`}
              style={{
                opacity: isActive ? 1 : 0,
                transition: 'opacity 2000ms ease-in-out',
                zIndex: isActive ? 2 : 1,
              }}
            >
              {/* Systematic image transition with prominent blur effect */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={`Luxury Safari Lodge - ${slide.headline.text1}${slide.headline.highlight1}${slide.headline.text2}${slide.headline.highlight2}`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isActive ? 'scale(1.01)' : 'scale(1)',
                    filter: isTransitioning && isActive ? 'blur(2px)' : 'blur(0px)',
                    transition: 'transform 7000ms ease-out, filter 1200ms ease-in-out',
                  }}
                />
              </div>
              
              {/* Subtle gradient overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.45) 100%)',
                  opacity: 1,
                }}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Location Badge with Systematic Transition */}
          <div 
            className={`inline-flex items-center space-x-2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 transition-all duration-1200 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isTransitioning ? 'opacity-92' : 'opacity-100'}`}
            style={{
              transitionDelay: isTransitioning ? '1000ms' : '0ms'
            }}
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">{currentHero.location}</span>
            <div className="flex items-center space-x-0.5 sm:space-x-1 ml-1 sm:ml-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Main Headline with Systematic Transition */}
          <div className="mb-4 sm:mb-6">
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-playfair font-bold leading-tight transition-all duration-1400 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
              style={{
                transitionDelay: isTransitioning ? '1300ms' : '0ms'
              }}
            >
              <span className="text-white">{currentHero.headline.text1}</span>
              <span className="text-gradient">{currentHero.headline.highlight1}</span>
              <span className="text-white">{currentHero.headline.text2}</span>
              <span className="text-gradient">{currentHero.headline.highlight2}</span>
            </h1>
          </div>

          {/* Subtitle with Systematic Transition */}
          <div className="mb-4 sm:mb-6">
            <p 
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed mx-auto px-2 sm:px-0 transition-all duration-1100 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isTransitioning ? 'opacity-88' : 'opacity-100'}`}
              style={{
                transitionDelay: isTransitioning ? '1700ms' : '0ms'
              }}
            >
              {currentHero.subtitle}
            </p>
          </div>

          {/* Supporting Lines with Systematic Transition */}
          <div 
            className={`max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0 transition-all duration-1000 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isTransitioning ? 'opacity-85' : 'opacity-100'}`}
            style={{
              transitionDelay: isTransitioning ? '2100ms' : '0ms'
            }}
          >
            {currentHero.supportingLines.map((line, index) => (
              <p 
                key={index} 
                className={`text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-2 last:mb-0 transition-all duration-900 ease-in-out ${
                  isTransitioning ? 'opacity-85' : 'opacity-100'
                }`}
                style={{
                  transitionDelay: isTransitioning ? `${2300 + index * 150}ms` : '0ms'
                }}
              >
                • {line}
              </p>
            ))}
          </div>

          {/* CTA Buttons with Systematic Transition */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-md sm:max-w-none mx-auto sm:mx-0 transition-all duration-1000 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isTransitioning ? 'opacity-88' : 'opacity-100'}`}
            style={{
              transitionDelay: isTransitioning ? '2800ms' : '0ms'
            }}
          >
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4 transform hover:scale-105 transition-transform duration-300" onClick={() => window.dispatchEvent(new Event('openBooking'))}>
              {currentHero.ctaText}
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4 transform hover:scale-105 transition-transform duration-300">
              Learn More
            </Button>
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
      <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-400 ${
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