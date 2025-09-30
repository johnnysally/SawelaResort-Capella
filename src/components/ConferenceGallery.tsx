"use client";

import React from "react";

// Import conference images
import conference1 from "@/assets/conferences/conference1.jpg.jpg";
import conference2 from "@/assets/conferences/conference2.jpg.jpg";
import conference3 from "@/assets/conferences/conference3.jpg.jpg";
import conference4 from "@/assets/conferences/conference4.jpg.jpg";
import conference5 from "@/assets/conferences/conference5.jpg.jpg";
import conference6 from "@/assets/conferences/conference6.jpg.jpg";
import conference7 from "@/assets/conferences/conference7.jpg.jpg";
import conference8 from "@/assets/conferences/conference8.jpg.jpg";

interface GalleryItem {
  title: string;
  image: string;
  price: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Executive Conference Hall",
    image: conference1,
    price: "$500 / Day",
  },
  {
    title: "Boardroom Meeting Space",
    image: conference2,
    price: "$250 / Day",
  },
  {
    title: "Outdoor Event Space",
    image: conference3,
    price: "$400 / Day",
  },
  {
    title: "Luxury Accommodation Suite",
    image: conference4,
    price: "$300 / Night",
  },
  {
    title: "Standard Double Room",
    image: conference5,
    price: "$180 / Night",
  },
  {
    title: "Deluxe Spa Room",
    image: conference6,
    price: "$220 / Night",
  },
  // Capella-specific conference & accommodation offerings
  {
    title: "Capella Private Pavilion",
    image: conference7,
    price: "$3,000 / Day",
  },
  {
    title: "Capella Presidential Suite",
    image: conference8,
    price: "$2,500 / Night",
  },
];

export default function ConferenceGallery() {
  return (
    <section className="my-10 xs:my-12 sm:my-16">
      <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold mb-6 xs:mb-8 md:mb-10 text-center">
        Conferences & Accommodation
      </h2>

      {/* Responsive container and grid */}
      <div className="max-w-7xl mx-auto px-2 xs:px-4 md:px-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 md:gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 xs:h-56 md:h-72 object-cover"
              />
              <div className="p-3 xs:p-4 text-center">
                <h3 className="text-base xs:text-lg md:text-xl font-semibold mb-1 xs:mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium text-sm xs:text-base">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
