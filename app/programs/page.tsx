import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { Button } from "@/components/ui/button"
import { Baby, BookOpen, GraduationCap, Monitor, Palette, Music, TreePine, Users, Clock, CheckCircle2, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs | Favour Preschool & Daycare Center",
  description: "Explore our Toddler, ECD A, and ECD B programs designed for children 18 months to 5 years at Favour Preschool in Bulawayo.",
}

const programs = [
  {
    icon: Baby,
    title: "Toddler Program",
    age: "18 months - 3 years",
    teacher: "Mrs. F Mlambo",
    image: "/toddler.png",
    color: "primary",
    description: "Our Toddler program creates a warm, nurturing environment where your little ones feel safe and loved while beginning their educational journey.",
    highlights: [
      "Sensory exploration activities",
      "Language development through songs and stories",
      "Secure attachment building",
      "Basic routine establishment",
      "Fine and gross motor skill development",
      "Social interaction with peers"
    ],
    schedule: "7:00 AM - 5:30 PM"
  },
  {
    icon: BookOpen,
    title: "ECD A Program",
    age: "3 - 4 years",
    teacher: "Miss Charmaine",
    image: "/g5.png",
    color: "accent",
    description: "Our foundation phase focuses on building essential skills through play-based learning, creative expression, and structured activities that prepare children for more formal education.",
    highlights: [
      "Phonics and pre-reading activities",
      "Introduction to numbers and patterns",
      "Creative arts and crafts",
      "Music and movement",
      "Social skills development",
      "Beginning ICT exposure"
    ],
    schedule: "7:00 AM - 5:30 PM"
  },
  {
    icon: GraduationCap,
    title: "ECD B Program",
    age: "4 - 5 years",
    teacher: "Mrs. L Nyambuya",
    image: "/g6.png",
    color: "secondary",
    description: "Our school readiness program ensures children are fully prepared for primary school with advanced academic skills, independence, and confidence.",
    highlights: [
      "Advanced literacy and numeracy",
      "Executive function skills",
      "Problem-solving activities",
      "Structured ICT curriculum",
      "Primary school preparation",
      "Graduation ceremony"
    ],
    schedule: "7:00 AM - 5:30 PM"
  }
]

const extracurricular = [
  { icon: Palette, title: "Arts & Crafts", description: "Daily creative sessions developing fine motor skills and imagination" },
  { icon: Music, title: "Music & Movement", description: "Rhythm, coordination, and self-expression through song and dance" },
  { icon: TreePine, title: "Nature Exploration", description: "Gardening and outdoor activities teaching responsibility and appreciation" },
  { icon: Monitor, title: "ICT Program", description: "Age-appropriate digital literacy in partnership with Kawerify Tech" },
  { icon: Users, title: "Dramatic Play", description: "Role-playing activities fostering imagination and social skills" },
  { icon: GraduationCap, title: "Educational Tours", description: "Annual field trips to farms, museums, and libraries" }
]

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6">
              Age-Appropriate Learning Pathways
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From toddlers taking their first steps in education to children preparing for primary school, 
              we offer carefully designed programs that meet each developmental stage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Detail */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className={`absolute top-4 left-4 bg-${program.color} text-primary-foreground px-4 py-2 rounded-full font-medium`}>
                      {program.age}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`w-14 h-14 rounded-2xl bg-${program.color}/10 flex items-center justify-center mb-4`}>
                    <program.icon className={`w-7 h-7 text-${program.color}`} />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{program.title}</h2>
                  <p className="text-muted-foreground mb-1">Led by <span className="font-medium text-foreground">{program.teacher}</span></p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{program.schedule}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                  
                  <h4 className="font-semibold text-foreground mb-3">Program Highlights:</h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link 
                      href={`https://wa.me/263713173394?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(program.title)}%20for%20my%20child.%20Please%20provide%20more%20information.`}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Inquire About This Program
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Four Pillars */}
      <section className="py-16 md:py-24 bg-background relative">
        <DotsPattern className="top-10 left-10 opacity-50" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Four Pillars of Development
            </h2>
            <p className="text-lg text-muted-foreground">
              Our educational approach ensures we nurture the whole child, not just academic skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Academic Excellence",
                description: "Foundation literacy, numeracy, and critical thinking through evidence-based methods."
              },
              {
                number: "02",
                title: "Experiential Learning",
                description: "Educational tours and hands-on activities that bring concepts to life."
              },
              {
                number: "03",
                title: "Holistic Enrichment",
                description: "Arts, music, physical play, and drama for well-rounded development."
              },
              {
                number: "04",
                title: "Future Skills",
                description: "ICT integration preparing children for technology-driven education."
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <span className="text-4xl font-bold text-primary/20">{pillar.number}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Extracurricular */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Beyond the Classroom</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Extracurricular Activities
            </h2>
            <p className="text-lg text-muted-foreground">
              Education at Favour extends far beyond traditional academics with enriching activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <activity.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our programs and secure your child&apos;s place 
            at Favour Preschool.
          </p>
          <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90">
            <Link 
              href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20enroll%20my%20child%20at%20Favour%20Preschool.%20Please%20provide%20enrollment%20details."
              target="_blank"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Apply via WhatsApp
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
