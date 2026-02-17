import { BookOpen, Users, Monitor, Shield, Heart, Award } from "lucide-react"
import { DotsPattern } from "@/components/decorative-elements"

const features = [
  {
    icon: BookOpen,
    title: "Quality Curriculum",
    description: "Following national ECD standards with innovative teaching methods that make learning fun and engaging.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Dedicated educators with diplomas in Early Childhood Education and years of hands-on experience.",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Monitor,
    title: "ICT Integration",
    description: "Partnership with Kawerify Tech provides age-appropriate computer and digital literacy skills.",
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure premises with controlled access, safety protocols, and constant supervision.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Heart,
    title: "Nurturing Care",
    description: "A home-away-from-home atmosphere where every child feels loved, valued, and supported.",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Award,
    title: "Holistic Development",
    description: "Focus on academic, social, emotional, and physical development for well-rounded growth.",
    color: "bg-secondary/10 text-secondary"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted relative">
      <DotsPattern className="top-10 left-10 opacity-50" />
      <DotsPattern className="bottom-10 right-10 opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Parents Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Building Strong Foundations
          </h2>
          <p className="text-lg text-muted-foreground">
            At Favour Preschool, we believe every child deserves the best start in life. 
            Our comprehensive approach ensures your child thrives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
