import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { teamMembers, getTeamMember } from "@/lib/team-data"
import { ArrowLeft, Award, BookOpen, Briefcase, Quote, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const member = getTeamMember(id)
  
  if (!member) {
    return {
      title: "Team Member Not Found | Favour Preschool",
    }
  }

  return {
    title: `${member.name} - ${member.role} | Favour Preschool`,
    description: member.shortBio,
  }
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { id } = await params
  const member = getTeamMember(id)
  
  if (!member) {
    notFound()
  }

  const otherMembers = teamMembers.filter(m => m.id !== id).slice(0, 3)
  
  const departmentColors = {
    Leadership: "bg-primary text-primary-foreground",
    Teaching: "bg-accent text-accent-foreground",
    ICT: "bg-secondary text-secondary-foreground",
    Support: "bg-primary/70 text-primary-foreground",
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link 
            href="/team" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
            
            {/* Info */}
            <div className="lg:pt-8">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${departmentColors[member.department]}`}>
                {member.department}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-2">
                {member.name}
              </h1>
              
              <p className="text-xl text-primary font-semibold mb-6">
                {member.role}
              </p>
              
              {member.quote && (
                <div className="bg-muted rounded-2xl p-6 mb-8 relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
                  <p className="text-foreground italic pl-6 text-lg leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span>{member.yearsExperience} Years Experience</span>
                </div>
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Contact</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-muted relative">
        <DotsPattern className="top-10 right-10 opacity-30" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">About {member.name.split(" ")[0]}</h2>
            
            <div className="prose prose-lg max-w-none">
              {member.fullBio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Specialties */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Qualifications */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Qualifications</h3>
                </div>
                
                <ul className="space-y-3">
                  {member.qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-foreground">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Specialties */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Areas of Expertise</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="bg-muted text-foreground px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Meet Other Team Members</h2>
            <p className="text-muted-foreground">Get to know the rest of our dedicated staff</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherMembers.map((otherMember) => (
              <Link
                key={otherMember.id}
                href={`/team/${otherMember.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={otherMember.image}
                    alt={otherMember.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {otherMember.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{otherMember.role}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/team">View All Team Members</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
