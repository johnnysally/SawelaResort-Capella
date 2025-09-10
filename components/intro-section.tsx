import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Users } from "lucide-react"

export default function IntroSection() {
  const features = [
    {
      icon: Star,
      title: "5-Star Luxury",
      description: "World-class amenities and exceptional service",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized globally for excellence in hospitality",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated concierge for every guest",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Welcome to Sawela</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            For over two decades, Sawela and Kapela Resorts have redefined luxury hospitality. Nestled in pristine
            locations, our resorts offer an unparalleled blend of natural beauty, sophisticated comfort, and world-class
            service that creates memories to last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="luxury-shadow hover-lift border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Two Resorts, One Extraordinary Experience
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Whether you choose the serene elegance of Sawela Resort or the vibrant luxury of Kapela Resort, you'll
              discover a world where every detail has been carefully crafted to exceed your expectations.
            </p>
            <p className="text-muted-foreground text-pretty">
              From our award-winning spas and gourmet restaurants to our pristine beaches and exclusive amenities, we
              invite you to experience the pinnacle of luxury hospitality.
            </p>
          </div>
          <div className="relative">
            <img
              src="/elegant-hotel-lobby-with-marble-floors-and-crystal.jpg"
              alt="Luxury hotel lobby"
              className="rounded-lg luxury-shadow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
