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
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-7">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-playfair font-bold text-gradient mb-6 leading-normal pb-2">
            Wellness & Spa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Reconnect with your inner self in our tranquil wellness sanctuary.
            Experience healing treatments inspired by ancient African traditions
            and modern wellness practices that bring harmony to body, mind, and
            spirit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={spaImage}
                alt="Serene spa treatment room with natural elements and lake views"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating card (hidden on small screens) */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-xl hidden sm:block">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-white mb-1">
                  4.9
                </div>
                <div className="text-sm text-white/80">Spa Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-4 heading-safe">
                Signature Treatments
              </h3>
              <p className="text-muted-foreground text-safe">
                Our spa treatments blend time-honored African healing traditions
                with contemporary wellness practices, creating unique experiences
                that restore balance to body, mind, and spirit.
              </p>
            </div>

            <div className="space-y-6">
              {treatments.map((treatment) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={treatment.name}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground heading-safe">
                          {treatment.name}
                        </h4>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Timer className="h-4 w-4" />
                          <span>{treatment.duration}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm text-safe">
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
        <div className="mb-12">
          <h3 className="text-3xl font-playfair font-bold text-center text-foreground mb-8 heading-safe">
            Wellness Facilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility}
                className="text-center p-6 card-luxury"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground heading-safe">
                  {facility}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-luxury">
            Book Spa Treatment
          </Button>
        </div>
      </div>
    </section>
  );
};