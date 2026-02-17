import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Laptop, 
  TreePine, 
  BookOpen, 
  Utensils, 
  Palette,
  Bath,
  Lock,
  Sun,
  Wind,
  CheckCircle2
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Facilities | Favour Preschool & Daycare Center",
  description: "Explore our safe, modern, and child-friendly facilities designed to support learning and development at Favour Preschool.",
}

const facilities = [
  {
    title: "Modern Classrooms",
    description: "Three bright, spacious classrooms tailored to specific age groups with child-sized furniture, educational displays, and stimulating learning materials.",
    image: "/about.jpg",
    icon: BookOpen,
    features: [
      "Age-appropriate furniture",
      "Educational wall displays",
      "Natural lighting",
      "Temperature controlled",
      "Learning corners"
    ]
  },
  {
    title: "ICT Learning Center",
    description: "A dedicated technology corner equipped with child-friendly computers, educational software, and proper ergonomic furniture for young learners.",
    image: "/hero3.png",
    icon: Laptop,
    features: [
      "Child-safe computers",
      "Educational software",
      "Ergonomic seating",
      "Supervised access",
      "Digital literacy tools"
    ]
  },
  {
    title: "Outdoor Play Area",
    description: "A secure, covered outdoor space with age-appropriate climbing structures, slides, swings, and open play areas for physical development.",
    image: "/g1.png",
    icon: TreePine,
    features: [
      "Safety surfacing",
      "Climbing structures",
      "Shaded areas",
      "Secure fencing",
      "Open play space"
    ]
  },
  {
    title: "Reading Corner",
    description: "A cozy, inviting space filled with picture books, comfortable seating, and a calm atmosphere that encourages a love of reading.",
    image: "/g2.png",
    icon: BookOpen,
    features: [
      "Age-appropriate books",
      "Comfortable seating",
      "Quiet atmosphere",
      "Story time area",
      "Take-home library"
    ]
  },
  {
    title: "Dining Area",
    description: "A clean, hygienic space where children enjoy nutritious meals and learn important social skills during meal times.",
    image: "/g3.png",
    icon: Utensils,
    features: [
      "Hygienic environment",
      "Child-sized tables",
      "Nutritious meals",
      "Clean water access",
      "Handwashing stations"
    ]
  },
  {
    title: "Art & Craft Room",
    description: "A creative space equipped with art supplies, easels, and craft materials where children can express themselves through various artistic mediums.",
    image: "/g4.png",
    icon: Palette,
    features: [
      "Art supplies",
      "Display walls",
      "Craft materials",
      "Easels & tables",
      "Creative freedom"
    ]
  }
]

const safetyFeatures = [
  {
    icon: Lock,
    title: "Secure Perimeter",
    description: "Full perimeter fencing with controlled access gates that are always locked during school hours."
  },
  {
    icon: Shield,
    title: "Staff Supervision",
    description: "Trained staff maintain vigilant supervision at all times, both indoors and during outdoor activities."
  },
  {
    icon: Bath,
    title: "Child-Safe Bathrooms",
    description: "Bathrooms designed specifically for young children with safety features and regular cleaning."
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Shaded outdoor areas and covered play spaces protect children from harsh sun exposure."
  },
  {
    icon: Wind,
    title: "Ventilation",
    description: "Well-ventilated classrooms ensure fresh air circulation and a healthy learning environment."
  },
  {
    icon: CheckCircle2,
    title: "Health Standards",
    description: "Kitchen and food preparation areas meet all health department standards and regulations."
  }
]

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6 text-balance">
              A Safe Space to Learn, Play & Grow
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our campus is purposefully designed with young learners in mind - safe, stimulating, 
              and equipped with everything children need to thrive during their formative years.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-primary-foreground">
                Want to see our facilities in person?
              </h2>
              <p className="text-primary-foreground/90">
                Schedule a campus tour and experience our environment firsthand.
              </p>
            </div>
            <Button 
              asChild 
              size="lg"
              className="bg-card text-foreground hover:bg-card/90 shrink-0"
            >
              <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20campus%20tour%20at%20Favour%20Preschool" target="_blank">
                Book a Tour
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-muted relative">
        <DotsPattern className="top-10 left-10 opacity-30" />
        
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:gap-16">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2]"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                        <facility.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {facility.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {facility.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Safety First</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Your Child&apos;s Safety is Our Priority
            </h2>
            <p className="text-lg text-muted-foreground">
              Every aspect of our facility is designed with child safety in mind. 
              Parents can have peace of mind knowing their children are in a secure environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Additional Amenities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Everything Under One Roof
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Beyond our main facilities, we offer additional amenities that make 
                daily life easier for both children and parents.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Sandpit and water play area for sensory development",
                  "Dedicated nap room with comfortable rest mats",
                  "Parent waiting area with comfortable seating",
                  "Secure drop-off and pick-up zone",
                  "First aid station with trained staff",
                  "Storage cubbies for each child's belongings"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/g5.png"
                  alt="Outdoor play area"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/g6.png"
                  alt="Learning activities"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/g7.png"
                  alt="Creative activities"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/g8.png"
                  alt="Story time"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to See Our Facilities?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Schedule a visit to tour our campus and see firsthand how we create 
              a nurturing environment for your child&apos;s growth and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-card text-foreground hover:bg-card/90"
              >
                <Link href="/contact">
                  Schedule a Visit
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/admissions">
                  Learn About Admissions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
