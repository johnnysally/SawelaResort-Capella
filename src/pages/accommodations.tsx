import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Wifi,
  Coffee,
  Bath,
  ArrowDown,
  Star,
  MapPin,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// ✅ Import room images from rooms folder
import suiteImg from "@/assets/rooms/rooms1.jpg.jpg";
import villaImg from "@/assets/rooms/deluxe-rooms1.jpg.jpg";
import honeymoonImg from "@/assets/rooms/deluxe-romms.jpg.jpg";
import heroImg from "@/assets/rooms/rooms2.jpg.jpg";

// ✅ Import the new ConferenceGallery component
import ConferenceGallery from "@/components/ConferenceGallery";

const rooms = [
  {
    title: "Luxury Safari Suite",
    description:
      "A spacious suite with panoramic views of the Great Rift Valley, private balcony, and handcrafted interiors inspired by African art.",
    image: suiteImg,
    price: "KSh 25,000 / night",
    features: ["King Bed", "Private Balcony", "Valley View", "24/7 Butler"],
  },
  {
    title: "Executive Villa",
    description:
      "Perfect for families and groups, this villa combines elegance and privacy with modern amenities and warm hospitality.",
    image: villaImg,
    price: "KSh 40,000 / night",
    features: ["2 Bedrooms", "Private Pool", "Kitchenette", "Personal Chef"],
  },
  {
    title: "Honeymoon Haven",
    description:
      "Romantic setting with ambient lighting, jacuzzi, and bespoke services tailored for couples seeking an unforgettable escape.",
    image: honeymoonImg,
    price: "KSh 30,000 / night",
    features: ["Jacuzzi", "Candlelit Dining", "Personal Concierge", "Spa Access"],
  },
  // Capella offerings merged into accommodations page
  {
    title: "Capella Presidential Suite",
    description:
      "An ultra-luxury suite in the Capella wing with private terrace, lake views, and dedicated butler service.",
    image: suiteImg,
    price: "KSh 300,000 / night",
    features: ["Private Terrace", "Lake View", "Butler Service", "Private Pool"],
  },
  {
    title: "Capella Lake Villa",
    description:
      "Secluded villa with private chef, infinity pool and direct access to exclusive Capella amenities.",
    image: villaImg,
    price: "KSh 220,000 / night",
    features: ["2 Bedrooms", "Private Chef", "Infinity Pool", "Private Guide"],
  },
];

export default function AccommodationsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <main className="flex-1">
        {/* ✅ Hero Section with Navbar inside */}
        <section
          id="accommodations-hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Parallax */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <img
              src={heroImg}
              alt="Luxury Safari Lodge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* ✅ Navbar on top of hero with no gap */}
          <div className="absolute top-0 left-0 w-full z-30">
            <Navigation />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl">
              {/* Location Badge */}
              <div
                className={`inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Naivasha, Kenya
                </span>
                <div className="flex items-center space-x-1 ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3 w-3 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight mb-6 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <span className="text-white">Luxurious </span>
                <span className="text-gradient">Accommodations</span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-8 transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Experience unmatched comfort and modern safari elegance in every
                stay.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <Button size="lg" className="btn-luxury text-lg px-8 py-4" onClick={() => window.dispatchEvent(new Event('openBooking'))}>
                  Book Your Stay
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-ghost-luxury text-lg px-8 py-4"
                >
                  Explore Villas
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#rooms"
              className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm mb-2 font-medium">Discover Rooms</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </section>

        {/* ✅ Rooms Showcase */}
        <section
          id="rooms"
          className="container mx-auto grid gap-12 lg:grid-cols-3 mt-20"
        >
          {rooms.map((room, idx) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-luxury"
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-semibold shadow-warm">
                  {room.price}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-playfair font-bold mb-2">
                  {room.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {room.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="btn-luxury w-full" onClick={() => window.dispatchEvent(new Event('openBooking'))}>Book Now</Button>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ✅ Insert ConferenceGallery Section */}
        <ConferenceGallery />

        {/* ✅ Luxury Amenities Section with bottom spacing */}
        <section className="container mx-auto mt-32 mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-center mb-12"
          >
            Luxury Amenities
          </motion.h2>
          <div className="grid gap-8 lg:grid-cols-3 text-center">
            <div className="card-luxury flex flex-col items-center">
              <Wifi className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Connectivity</h3>
              <p className="text-muted-foreground">
                High-speed Wi-Fi, smart TVs, and modern in-room technology.
              </p>
            </div>
            <div className="card-luxury flex flex-col items-center">
              <Coffee className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Gourmet Service</h3>
              <p className="text-muted-foreground">
                Enjoy barista-grade coffee and curated in-room dining.
              </p>
            </div>
            <div className="card-luxury flex flex-col items-center">
              <Bath className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Spa & Relaxation</h3>
              <p className="text-muted-foreground">
                Luxury baths, spa packages, and wellness-focused amenities.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
