"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HomeHeroProps {
  onBookingClick: () => void
}

export default function HomeHero({ onBookingClick }: HomeHeroProps) {
  const images = [
    "/luxury-tropical-resort-with-infinity-pool-overlook.jpg",
    "/sawela-infinity-pool-overlooking-turquoise-ocean.jpg",
    "/barbare-kacharava-NSdtyyb2iGY-unsplash.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5s
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-lg">
          Welcome to Sawela
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Discover the ultimate luxury experience at Sawela and Kapela Resorts, where warm hospitality meets
          breathtaking beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg hover-lift drop-shadow-md"
          >
            Book Your Stay
          </Button>
          <Link href="#resorts">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg hover-lift bg-black/20 backdrop-blur-sm drop-shadow-md"
            >
              Explore Resorts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
