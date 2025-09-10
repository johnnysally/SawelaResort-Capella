import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Globe, Users, Star, Shield } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Exceptional Service",
      description: "We believe every guest deserves personalized attention and care that exceeds expectations.",
    },
    {
      icon: Globe,
      title: "Sustainable Luxury",
      description: "Committed to environmental responsibility while maintaining the highest standards of luxury.",
    },
    {
      icon: Users,
      title: "Cultural Authenticity",
      description:
        "Celebrating local traditions and creating authentic experiences that connect guests to our heritage.",
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Continuously evolving our services and amenities to set new standards in hospitality.",
    },
  ]

  const teamMembers = [
    {
      name: "Elena Rodriguez",
      position: "Chief Executive Officer",
      image: "/team-elena-rodriguez-ceo.jpg",
      bio: "With over 20 years in luxury hospitality, Elena has led the transformation of Sawela & Kapela into world-renowned destinations.",
      achievements: "Former VP at Four Seasons, MBA from Cornell",
    },
    {
      name: "Marcus Chen",
      position: "Resort Director - Sawela",
      image: "/team-marcus-chen-sawela-director.jpg",
      bio: "Marcus brings a passion for creating serene, adult-focused experiences that define the Sawela Resort experience.",
      achievements: "15 years luxury resort management, Certified Hospitality Administrator",
    },
    {
      name: "Isabella Santos",
      position: "Resort Director - Kapela",
      image: "/professional-woman-resort-director.jpg",
      bio: "Isabella specializes in family hospitality and adventure tourism, making Kapela the perfect destination for all ages.",
      achievements: "Expert in family resort operations, Adventure Tourism Certified",
    },
    {
      name: "Chef Antoine Dubois",
      position: "Executive Chef",
      image: "/team-chef-antoine-dubois.jpg",
      bio: "Michelin-starred chef Antoine creates culinary masterpieces that blend international cuisine with local flavors.",
      achievements: "Michelin Star recipient, James Beard Award nominee",
    },
    {
      name: "Dr. Amara Patel",
      position: "Wellness Director",
      image: "/team-dr-amara-patel-wellness.jpg",
      bio: "Dr. Patel oversees our award-winning spa programs, integrating traditional healing with modern wellness practices.",
      achievements: "PhD in Holistic Medicine, Certified Ayurveda Practitioner",
    },
    {
      name: "James Mitchell",
      position: "Guest Experience Manager",
      image: "/team-james-mitchell-guest-experience.jpg",
      bio: "James ensures every guest interaction reflects our commitment to exceptional service and memorable experiences.",
      achievements: "Hospitality Excellence Award, Customer Service Leadership Certified",
    },
  ]

  const milestones = [
    { year: "2001", event: "Sawela Resort opens with 80 oceanfront suites" },
    { year: "2005", event: "Awarded 'Best Luxury Resort' by Travel & Leisure" },
    { year: "2010", event: "Kapela Resort launches as premier family destination" },
    { year: "2015", event: "Achieved carbon-neutral certification" },
    { year: "2018", event: "Expanded to 320 total suites across both resorts" },
    { year: "2023", event: "Recognized as 'World's Leading Resort Brand'" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-white to-[#D2B48C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            For over two decades, we have been crafting extraordinary experiences that redefine luxury hospitality.
            Discover the passion, vision, and dedication behind Sawela and Kapela Resorts.
          </p>
        </div>

        {/* History & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">A Legacy of Excellence</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Founded in 2001 with a vision to create unparalleled luxury experiences, Sawela and Kapela Resorts have
              become synonymous with exceptional hospitality. Our journey began with a simple belief: that every guest
              deserves to feel extraordinary.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              From our first property, Sawela Resort, designed as an adults-only sanctuary of tranquility, to the
              vibrant family paradise of Kapela Resort, we have consistently pushed the boundaries of what luxury
              hospitality can be.
            </p>
            <p className="text-muted-foreground text-pretty">
              Today, we stand proud as award-winning destinations that have welcomed guests from over 80 countries,
              creating memories that last a lifetime while maintaining our commitment to sustainability and community.
            </p>
          </div>
          <div className="relative">
            <img
              src="/about-resort-founders-vintage-photo.jpg"
              alt="Resort founders and early days"
              className="rounded-lg luxury-shadow w-full h-auto"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="luxury-shadow hover-lift border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="luxury-shadow hover-lift border-0">
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-secondary/10 text-secondary border-secondary/20">
                          {milestone.year}
                        </Badge>
                        <p className="text-foreground font-medium">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">Meet Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="luxury-shadow hover-lift border-0 overflow-hidden group">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-secondary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.achievements}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-20 text-center bg-background rounded-2xl p-12 luxury-shadow">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">World Travel Awards</p>
                <p className="text-sm text-muted-foreground">Leading Resort Brand 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Green Globe Certified</p>
                <p className="text-sm text-muted-foreground">Sustainable Tourism Leader</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Forbes Travel Guide</p>
                <p className="text-sm text-muted-foreground">Five-Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
