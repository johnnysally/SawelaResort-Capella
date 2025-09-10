"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SawelaDetails() {
  const highlights = [
    {
      title: "Oceanfront Suites",
      description: "All 120 suites feature panoramic ocean views and private balconies with premium furnishings",
    },
    {
      title: "Adults-Only Sanctuary",
      description: "Peaceful environment designed exclusively for relaxation, romance, and sophisticated experiences",
    },
    {
      title: "Michelin-Star Dining",
      description: "Three world-class restaurants featuring locally-sourced ingredients and innovative cuisine",
    },
    {
      title: "Wellness Retreat",
      description: "Award-winning spa with 12 treatment rooms, meditation pavilions, and holistic wellness programs",
    },
    {
      title: "Private Beach Access",
      description: "Exclusive 500-meter stretch of pristine white sand beach with luxury cabanas and water sports",
    },
    {
      title: "Personalized Service",
      description: "Dedicated concierge service and 24/7 room service ensuring every need is anticipated",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Serene Elegance Awaits</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nestled along a pristine coastline, Sawela Resort embodies tranquil luxury. With its minimalist design and
              breathtaking ocean views, this sanctuary offers an intimate escape where serenity meets sophistication.
            </p>
            <div className="space-y-4">
              {highlights.slice(0, 3).map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
              src="/sawela-oceanview-suite-with-private-balcony.jpg"
              alt="Sawela Resort oceanview suite"
              className="rounded-2xl luxury-shadow w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl luxury-shadow max-w-xs">
              <h4 className="font-serif text-lg font-bold text-foreground mb-2">Ocean Suite</h4>
              <p className="text-sm text-muted-foreground">Starting from $850/night</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.slice(3).map((highlight, index) => (
            <Card key={index} className="luxury-shadow hover-lift border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
