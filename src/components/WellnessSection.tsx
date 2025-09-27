import { Flower, Heart, Sparkles, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spaImage from '@/assets/spa-wellness.jpg';

export const WellnessSection = () => {
  const treatments = [
    {
      name: "African Sunset Massage",
      duration: "90 minutes",
      description:
        "Rejuvenating full-body massage using indigenous oils and traditional techniques",
      icon: Heart,
    },
    {
      name: "Baobab Body Ritual",
      duration: "120 minutes",
      description:
        "Complete wellness journey with exfoliation, wrap, and hydrating massage",
      icon: Sparkles,
    },
    {
      name: "Lake Naivasha Facial",
      duration: "75 minutes",
      description:
        "Purifying facial treatment using mineral-rich lake waters and local botanicals",
      icon: Flower,
    },
  ];

  const facilities = [
    "Infinity Pool with Lake Views",
    "Steam Room & Sauna", 
    "Meditation Garden",
    "Yoga Pavilion",
    "Fitness Center",
    "Private Treatment Suites",
  ];

  return (
    <section
      id="wellness"
      className="py-12 sm:py-16 lg:py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-gradient mb-4 sm:mb-6 leading-normal pb-2">
            Wellness & Spa
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Reconnect with your inner self in our tranquil wellness sanctuary.
            Experience healing treatments inspired by ancient African traditions
            and modern wellness practices that bring harmony to body, mind, and
            spirit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
              <img
                src={spaImage}
                alt="Serene spa treatment room with natural elements and lake views"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating card (hidden on small screens) */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 glass p-4 sm:p-6 rounded-lg sm:rounded-xl hidden sm:block">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-white mb-0.5 sm:mb-1">
                  4.9
                </div>
                <div className="text-xs sm:text-sm text-white/80">Spa Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-3 sm:mb-4 heading-safe">
                Signature Treatments
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-safe">
                Our spa treatments blend time-honored African healing traditions
                with contemporary wellness practices, creating unique experiences
                that restore balance to body, mind, and spirit.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {treatments.map((treatment) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={treatment.name}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground heading-safe line-clamp-2">
                          {treatment.name}
                        </h4>
                        <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                          <Timer className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="whitespace-nowrap">{treatment.duration}</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground text-safe">
                        {treatment.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-center text-foreground mb-6 sm:mb-8 heading-safe">
            Wellness Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility) => (
              <div
                key={facility}
                className="text-center p-4 sm:p-6 card-luxury"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground heading-safe">
                  {facility}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-luxury text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
            Book Spa Treatment
          </Button>
        </div>
      </div>
    </section>
  );
};