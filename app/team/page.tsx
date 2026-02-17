import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { teamMembers } from "@/lib/team-data"
import { ArrowRight, Award, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Favour Preschool & Daycare Center",
  description: "Meet the dedicated educators and staff who make Favour Preschool a nurturing place for your child's growth and development.",
}

const departments = [
  { name: "Leadership", icon: Award, color: "bg-primary" },
  { name: "Teaching", icon: Heart, color: "bg-accent" },
  { name: "ICT", icon: Users, color: "bg-secondary" },
  { name: "Support", icon: Heart, color: "bg-primary/70" },
] as const

export default function TeamPage() {
  const leadershipTeam = teamMembers.filter(m => m.department === "Leadership")
  const teachingTeam = teamMembers.filter(m => m.department === "Teaching")
  const ictTeam = teamMembers.filter(m => m.department === "ICT")
  const supportTeam = teamMembers.filter(m => m.department === "Support")

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6 text-balance">
              The Hearts Behind Favour Preschool
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our dedicated team of educators, administrators, and support staff work together 
              to create a nurturing environment where every child can thrive. Get to know the 
              people who make our school special.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{teamMembers.length}</div>
              <div className="text-muted-foreground text-sm md:text-base">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">50+</div>
              <div className="text-muted-foreground text-sm md:text-base">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">100%</div>
              <div className="text-muted-foreground text-sm md:text-base">Certified Staff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">1:8</div>
              <div className="text-muted-foreground text-sm md:text-base">Staff-to-Child Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-background relative">
        <DotsPattern className="top-10 left-10 opacity-30" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Leadership Team</h2>
              <p className="text-muted-foreground">Guiding our vision and mission</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative">
                    <div className="aspect-square md:aspect-auto md:h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">{member.role}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.shortBio}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      View Full Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Team */}
      <section className="py-16 md:py-24 bg-muted relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Teaching Staff</h2>
              <p className="text-muted-foreground">Nurturing young minds every day</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingTeam.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {member.shortBio}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{member.yearsExperience} years experience</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ICT Team */}
      <section className="py-16 md:py-24 bg-background relative">
        <DotsPattern className="bottom-10 right-10 opacity-30" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">ICT Team</h2>
              <p className="text-muted-foreground">Powered by Kawerify Tech</p>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mb-8">
            Our ICT program is delivered in partnership with{" "}
            <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              Kawerify Tech
            </a>
            , bringing digital literacy to our youngest learners.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ictTeam.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative">
                    <div className="aspect-square">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{member.role}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                      {member.shortBio}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Support Staff</h2>
              <p className="text-muted-foreground">The backbone of our daily operations</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTeam.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{member.shortBio}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Interested in Joining Our Team?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We are always looking for passionate educators who share our commitment to 
              nurturing young minds. If you believe in our mission, we would love to hear from you.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-card text-foreground hover:bg-card/90"
            >
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
