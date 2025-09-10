"use client"

import { useState } from "react"

export default function KapelaGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/elegant-hotel-lobby-with-marble-floors-and-crystal.jpg",
      alt: "Family Suite with Ocean Balcony",
      title: "Family Suite",
      category: "Accommodations",
    },
    {
      src: "/sawela-private-beach-with-cabanas.jpg",
      alt: "Beachside Restaurant at Sunset",
      title: "Sunset Dining",
      category: "Dining",
    },
    {
      src: "/artem-verbo-rAyIvNqlwCY-unsplash.jpg",
      alt: "Water Sports Center",
      title: "Adventure Hub",
      category: "Activities",
    },
    {
      src: "/sawela-oceanview-suite-with-private-balcony.jpg",
      alt: "Kids Club Playground",
      title: "Kids Paradise",
      category: "Family Fun",
    },
    {
      src: "/barbare-kacharava-NSdtyyb2iGY-unsplash.jpg",
      alt: "Beach Volleyball Court",
      title: "Beach Sports",
      category: "Recreation",
    },
    {
      src: "/sawela-infinity-pool-overlooking-turquoise-ocean.jpg",
      alt: "Vibrant Pool Area with Swim-up Bar",
      title: "Pool Paradise",
      category: "Pools & Recreation",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Resort Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore the vibrant energy and endless possibilities that await you at Kapela Resort through our dynamic
            collection of spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer hover-lift"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-80 object-cover rounded-xl luxury-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm text-white/80 mb-1">{image.category}</p>
                  <p className="font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
