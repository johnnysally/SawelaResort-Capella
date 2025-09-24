import { useEffect, useState } from 'react';
import { ArrowDown, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={heroImage}
          alt="Luxury Safari Lodge at sunset with dramatic African landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <div className={`inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Naivasha, Kenya</span>
            <div className="flex items-center space-x-1 ml-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight mb-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Where </span>
            <span className="text-gradient">Luxury </span>
            <span className="text-white">Meets </span>
            <span className="text-gradient">Wild</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Experience the pinnacle of African hospitality at Sawela Lodge, where every moment is crafted to perfection amidst the breathtaking landscapes of Naivasha.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button size="lg" className="btn-luxury text-lg px-8 py-4">
              Book Your Escape
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-lg px-8 py-4">
              Explore Experiences
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-xl transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-white mb-1">25+</div>
              <div className="text-sm text-white/70">Luxury Suites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/70">Wildlife Species</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-white mb-1">4.9</div>
              <div className="text-sm text-white/70">Guest Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <a href="#accommodations" className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <div className="animate-float">
          <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20"></div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-8 hidden lg:block">
        <div className="animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-gradient-sunset rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};