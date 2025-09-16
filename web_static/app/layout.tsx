import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Sawela & Capella Resorts | Luxury Hotel Experience",
  description:
    "Discover the ultimate luxury at Sawela and Kapela Resorts. Premium accommodations, world-class amenities, and unforgettable experiences await.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
