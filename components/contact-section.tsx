"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    resort: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        resort: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Available 24/7 for reservations and assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@sawelakapela.com", "info@sawelakapela.com"],
      description: "We respond within 2 hours during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Paradise Bay Resort Complex", "Tropical Island, Pacific Ocean"],
      description: "Private island accessible by seaplane or yacht",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Reservations: 24/7", "Guest Services: 6:00 AM - 11:00 PM"],
      description: "Concierge available around the clock",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-pretty">
            Ready to experience luxury at its finest? Our dedicated team is here to help you plan the perfect getaway at
            Sawela or Kapela Resort. Contact us today to begin your journey to paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="luxury-shadow border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h4>
                  <p className="text-foreground/80">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="resort" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Resort
                      </label>
                      <select
                        id="resort"
                        name="resort"
                        value={formData.resort}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a resort</option>
                        <option value="sawela">Sawela Resort</option>
                        <option value="kapela">Kapela Resort</option>
                        <option value="both">Both Resorts</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full resize-none"
                      placeholder="Tell us about your dream vacation..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 hover-lift"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="luxury-shadow hover-lift border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-foreground/70 mt-2">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Find Us</h3>
          <Card className="luxury-shadow border-0 overflow-hidden">
            <div className="relative h-96 bg-muted">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-157.8583!3d21.2793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE2JzQ1LjUiTiAxNTfCsDUxJzI5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sawela & Kapela Resorts Location"
              ></iframe>

              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 luxury-shadow">
                <h4 className="font-semibold text-foreground mb-1">Paradise Bay Resort Complex</h4>
                <p className="text-sm text-foreground/70">Tropical Island, Pacific Ocean</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="luxury-shadow border-0 bg-primary/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">24/7 Guest Support</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              For current guests or urgent inquiries, our dedicated support team is available around the clock to ensure
              your experience is nothing short of perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 hover-lift"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 hover-lift bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Guest Services
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
