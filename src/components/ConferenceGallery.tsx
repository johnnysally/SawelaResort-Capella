"use client";

import React from "react";

interface GalleryItem {
  title: string;
  image: string;
  price: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Executive Conference Hall",
    image: "https://source.unsplash.com/800x600/?conference,hall",
    price: "$500 / Day",
  },
  {
    title: "Boardroom Meeting Space",
    image: "https://source.unsplash.com/800x600/?meeting,room",
    price: "$250 / Day",
  },
  {
    title: "Outdoor Event Space",
    image: "https://source.unsplash.com/800x600/?outdoor,event",
    price: "$400 / Day",
  },
  {
    title: "Luxury Accommodation Suite",
    image: "https://source.unsplash.com/800x600/?hotel,room",
    price: "$300 / Night",
  },
  {
    title: "Standard Double Room",
    image: "https://source.unsplash.com/800x600/?resort,bedroom",
    price: "$180 / Night",
  },
  {
    title: "Deluxe Spa Room",
    image: "https://source.unsplash.com/800x600/?spa,room",
    price: "$220 / Night",
  },
  // Capella-specific conference & accommodation offerings
  {
    title: "Capella Private Pavilion",
    image: "https://source.unsplash.com/800x600/?pavilion,luxury",
    price: "$3,000 / Day",
  },
  {
    title: "Capella Presidential Suite",
    image: "https://source.unsplash.com/800x600/?presidential,suite",
    price: "$2,500 / Night",
  },
];

export default function ConferenceGallery() {
  return (
    <section className="my-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        Conferences & Accommodation
      </h2>

      {/* ✅ Container with spacing and max width */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"  // 🔥 Increased height from h-56 → h-72
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
