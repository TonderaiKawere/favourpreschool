import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayfulShapes, ChildrenIllustration } from "@/components/decorative-elements"
import { GraduationCap, Heart, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <PlayfulShapes />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Gateway to Success</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Where Little 
              <span className="text-primary"> Minds </span>
              Blossom & 
              <span className="text-accent"> Grow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Favour Preschool and Daycare Center provides exceptional early childhood education in Mbundane, Bulawayo. We nurture your child&apos;s potential through play, learning, and love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20admission%20at%20Favour%20Preschool" target="_blank">
                  Apply via WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent">
                <Link href="/programs">
                  View Programs
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Graduates</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">4+</p>
                <p className="text-sm text-muted-foreground">Years of Care</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Programs</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Happy children learning at Favour Preschool"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Now Enrolling</p>
                  <p className="text-sm text-muted-foreground">Limited spaces</p>
                </div>
              </div>
            </div>
            
            {/* Background illustration */}
            <ChildrenIllustration className="absolute -z-10 -right-20 -bottom-20 w-80 h-80 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
