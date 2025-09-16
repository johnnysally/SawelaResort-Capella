"use client"

import { useState } from "react"

export default function SawelaGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/sawela-infinity-pool-overlooking-turquoise-ocean.jpg",
      alt: "Infinity Pool Overlooking Ocean",
      title: "Infinity Pool",
      category: "Pools & Recreation",
    },
    {
      src: "/sawela-elegant-restaurant-with-ocean-views.jpg",
      alt: "Elegant Restaurant with Ocean Views",
      title: "Ocean Restaurant",
      category: "Dining",
    },
    {
      src: "/sawela-luxury-spa-treatment-room.jpg",
      alt: "Luxury Spa Treatment Room",
      title: "Spa Sanctuary",
      category: "Wellness",
    },
    {
      src: "/sawela-private-beach-with-cabanas.jpg",
      alt: "Private Beach with Cabanas",
      title: "Private Beach",
      category: "Beach & Water",
    },
    {
      src: "/sawela-presidential-suite-living-area.jpg",
      alt: "Presidential Suite Living Area",
      title: "Presidential Suite",
      category: "Accommodations",
    },
    {
      src: "/sawela-oceanview-suite-with-private-balcony.jpg",
      alt: "Oceanview Suite with Private Balcony",
      title: "Oceanview Suite",
      category: "Accommodations",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-100 to-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Resort Gallery
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto text-pretty">
            Discover the beauty and elegance that awaits you at Sawela Resort through our curated collection of spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-200/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
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
            className="fixed inset-0 bg-gradient-to-b from-green-200/95 to-cream-100/95 z-50 flex items-center justify-center p-4"
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
                className="absolute top-4 right-4 text-white bg-green-600/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-700 transition-colors"
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
