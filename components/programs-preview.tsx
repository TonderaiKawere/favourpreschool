import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Baby, BookOpen, GraduationCap } from "lucide-react"

const programs = [
  {
    icon: Baby,
    title: "Toddler Program",
    age: "18 months - 3 years",
    description: "Sensory exploration, language development, and secure attachment in a warm, nurturing environment.",
    image: "/toddler.png",
    color: "bg-primary"
  },
  {
    icon: BookOpen,
    title: "ECD A Program",
    age: "3 - 4 years",
    description: "Foundation phase focusing on literacy, numeracy, social skills, and creative expression through play.",
    image: "/g5.png",
    color: "bg-accent"
  },
  {
    icon: GraduationCap,
    title: "ECD B Program",
    age: "4 - 5 years",
    description: "School readiness with structured learning, executive function skills, and primary school preparation.",
    image: "/g6.png",
    color: "bg-secondary"
  }
]

export function ProgramsPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Age-Appropriate Learning
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent">
            <Link href="/programs" className="flex items-center gap-2">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute bottom-4 left-4 ${program.color} text-primary-foreground px-3 py-1 rounded-full text-sm font-medium`}>
                  {program.age}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${program.color}/10 flex items-center justify-center`}>
                    <program.icon className={`w-5 h-5 ${program.color === "bg-primary" ? "text-primary" : program.color === "bg-accent" ? "text-accent" : "text-secondary"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{program.description}</p>
                <Link 
                  href="/programs" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
