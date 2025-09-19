"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "San Francisco, CA",
      text: "Our honeymoon at Sawela Resort was absolutely magical. The attention to detail and warm hospitality made every moment special.",
      rating: 5,
      resort: "Sawela Resort",
    },
    {
      name: "The Johnson Family",
      location: "Austin, TX",
      text: "Kapela Resort exceeded all our expectations. The kids loved the activities while we enjoyed the luxury amenities. Perfect family vacation!",
      rating: 5,
      resort: "Kapela Resort",
    },
    {
      name: "Emma Rodriguez",
      location: "Miami, FL",
      text: "The spa treatments at Sawela were transformative. I left feeling completely rejuvenated and already planning my next visit.",
      rating: 5,
      resort: "Sawela Resort",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-cream-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
            Guest Experiences
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto text-pretty">
            Discover what makes our resorts truly special through the words of our cherished guests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="luxury-shadow hover-lift bg-gradient-to-br from-white via-cream-50 to-green-50 border-0"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-green-600 text-green-600" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-black mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Guest Info */}
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black">{testimonial.location}</p>
                  <p className="text-sm text-black font-medium mt-1">{testimonial.resort}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

