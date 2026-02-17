import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { Heart, Target, Eye, Users, Award, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/team-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Favour Preschool & Daycare Center",
  description: "Learn about our story, mission, and the dedicated team at Favour Preschool and Daycare Center in Mbundane, Bulawayo.",
}

const values = [
  {
    icon: Heart,
    title: "Child-Centered Nurturing",
    description: "Every child is unique. We tailor our approach to meet individual needs and learning styles."
  },
  {
    icon: Award,
    title: "Educational Excellence",
    description: "Continuous improvement through evidence-based practices and regular curriculum updates."
  },
  {
    icon: Users,
    title: "Community Partnership",
    description: "Parents are partners in education. We maintain open communication and collaboration."
  },
  {
    icon: BookOpen,
    title: "Innovative Learning",
    description: "Blending traditional methods with new approaches, including ICT integration."
  }
]

const featuredTeam = teamMembers.slice(0, 4)

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6">
              Building Dreams, One Child at a Time
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Founded in 2021 by J and L Nyambuya, Favour Preschool began with a simple mission: 
              provide quality, loving care for the children of Mbundane, Bulawayo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Our beautiful classroom"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                From Kitchen Tables to Classrooms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                It started at kitchen tables and neighborhood gatherings, listening to the challenges 
                of working parents who wanted the best for their children but struggled to find quality, 
                reliable care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In 2022, we transformed our passion into a formal institution, registering Favour 
                Preschool and Daycare Center. Our first graduation ceremony that December proved that 
                Mbundane&apos;s children deserved exceptional early education right in their neighborhood.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In 2024, our partnership with Kawerify Tech brought ICT education to our students, 
                preparing them for a technology-driven future while maintaining our core values of 
                nurturing care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted relative">
        <DotsPattern className="top-10 right-10 opacity-50" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional early childhood education that nurtures the whole child - 
                academically, socially, emotionally, and physically - while creating a safe, 
                loving environment where every child can thrive and reach their full potential.
              </p>
            </div>
            
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To evolve into Favour Primary School, offering a continuous, seamless educational 
                journey from 18 months through Grade 7. We envision a campus that maintains our 
                core values while providing Mbundane&apos;s children with a complete educational pathway.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision and interaction at Favour Preschool.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Meet Our Dedicated Staff
            </h2>
            <p className="text-lg text-muted-foreground">
              The quality of any institution is measured by its people. We are blessed with a team 
              whose dedication forms our foundation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeam.map((member) => (
              <Link 
                key={member.id} 
                href={`/team/${member.id}`}
                className="group bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/team" className="inline-flex items-center gap-2">
                Meet the Entire Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Campus</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                Safe, Modern Facilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our campus is designed specifically for young learners, with safety and development in mind.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Three bright, well-ventilated classrooms tailored to specific age groups",
                  "Dedicated ICT corner with child-appropriate furniture and equipment",
                  "Covered outdoor play area with age-appropriate structures",
                  "Secure sandpit and water play area for sensory development",
                  "Child-friendly bathrooms with safety features",
                  "Kitchen meeting health department standards",
                  "Perimeter fencing and controlled access gates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/g1.png"
                  alt="Outdoor play area"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/g2.png"
                  alt="Classroom"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/g3.png"
                  alt="ICT corner"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/g4.png"
                  alt="Learning activities"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
