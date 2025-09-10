"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Waves, Music } from "lucide-react"

export default function KapelaDetails() {
  const highlights = [
    {
      title: "Family-Friendly Luxury",
      description:
        "200 spacious suites designed for families and couples with connecting rooms and kid-friendly amenities",
    },
    {
      title: "Multiple Pool Complex",
      description: "5 themed pools including adults-only infinity pool, kids' water park, and swim-up bars",
    },
    {
      title: "Adventure Activities",
      description: "Comprehensive water sports, tennis courts, beach volleyball, and guided island excursions",
    },
    {
      title: "Entertainment Program",
      description: "Daily activities, live shows, cultural performances, and kids' club with supervised activities",
    },
    {
      title: "All-Inclusive Dining",
      description: "5 restaurants and 4 bars featuring international cuisine and premium beverages",
    },
    {
      title: "Kids Paradise",
      description: "Dedicated children's areas with playground, mini-golf, and age-appropriate entertainment",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "All-Inclusive Experience",
      description: "Unlimited dining, premium beverages, and activities with our comprehensive package",
      color: "bg-primary/5 text-primary",
    },
    {
      icon: Waves,
      title: "Water Adventure",
      description: "Complimentary water sports including snorkeling, jet skiing, and sailing",
      color: "bg-secondary/5 text-secondary",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Nightly shows, live music, and cultural performances in our amphitheater",
      color: "bg-primary/5 text-primary",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Vibrant Luxury Awaits</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the energy of paradise at Kapela Resort. This dynamic destination combines luxury
              accommodations with exciting activities, world-class entertainment, and vibrant social spaces perfect for
              families and adventure seekers.
            </p>
            <div className="space-y-4">
              {highlights.slice(0, 3).map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/kelvin-zyteng-8qYCxWkdSOc-unsplash.jpg"
              alt="Capella family suite"
              className="rounded-2xl luxury-shadow w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl luxury-shadow max-w-xs">
              <h4 className="font-serif text-lg font-bold text-foreground mb-2">Family Suite</h4>
              <p className="text-sm text-muted-foreground">Starting from $650/night</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 mb-16">
          {highlights.slice(3).map((highlight, index) => (
            <Card key={index} className="luxury-shadow hover-lift border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`luxury-shadow hover-lift border-0 ${feature.color.split(" ")[0]}`}>
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${feature.color.split(" ")[0]}/20 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color.split(" ")[1]}`} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
