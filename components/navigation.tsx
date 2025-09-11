"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  onBookingClick: () => void
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [hash, setHash] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash)

      const onHashChange = () => setHash(window.location.hash)
      window.addEventListener("hashchange", onHashChange)

      return () => {
        window.removeEventListener("hashchange", onHashChange)
      }
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ]

  const hotelItems = [
    { name: "Sawela Lodge", href: "/sawela" },
    { name: "Capella Resort", href: "/capella" },
    { name: "Sunset Villas", href: "/sunset" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href
    }
    return pathname === href
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Sawela Lodge
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Our Hotels Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isDropdownOpen
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Our Hotels <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg">
                  {hotelItems.map((hotel) => (
                    <Link
                      key={hotel.name}
                      href={hotel.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                    >
                      {hotel.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
              onClick={onBookingClick}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border luxury-shadow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                  isActive(item.href)
                    ? "text-primary bg-primary/20 font-semibold"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Our Hotels in mobile menu */}
            <div className="mt-2">
              <p className="px-3 py-2 text-sm font-semibold text-foreground">Our Hotels</p>
              {hotelItems.map((hotel) => (
                <Link
                  key={hotel.name}
                  href={hotel.href}
                  className="block px-5 py-2 text-base text-foreground hover:bg-muted hover:text-primary rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {hotel.name}
                </Link>
              ))}
            </div>

            <div className="px-3 py-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                onClick={() => {
                  onBookingClick()
                  setIsMenuOpen(false)
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
