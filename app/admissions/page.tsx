import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  ClipboardList, 
  FileText, 
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  HelpCircle,
  ArrowRight
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions | Favour Preschool & Daycare Center",
  description: "Join our Favour Preschool family. Learn about our admission process, requirements, fees, and how to enroll your child.",
}

const admissionSteps = [
  {
    step: 1,
    title: "Initial Inquiry",
    description: "Reach out to us via WhatsApp, phone, or visit our campus to learn more about our programs and availability.",
    icon: MessageCircle
  },
  {
    step: 2,
    title: "Campus Visit",
    description: "Schedule a tour to see our facilities, meet our staff, and experience the Favour Preschool environment.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Submit Application",
    description: "Complete the application form with your child's details, medical information, and parent contacts.",
    icon: ClipboardList
  },
  {
    step: 4,
    title: "Documentation",
    description: "Provide required documents including birth certificate, immunization records, and passport photos.",
    icon: FileText
  }
]

const requirements = [
  {
    category: "Age Requirements",
    items: [
      "Toddler Program: 18 months - 3 years",
      "ECD A: 3 - 4 years",
      "ECD B: 4 - 5 years"
    ]
  },
  {
    category: "Required Documents",
    items: [
      "Child's birth certificate (certified copy)",
      "Up-to-date immunization card",
      "4 passport-sized photos of child",
      "Parent/Guardian ID copy",
      "Proof of residence"
    ]
  },
  {
    category: "Health Requirements",
    items: [
      "Complete immunization record",
      "Medical clearance form (provided)",
      "List of any allergies or medical conditions",
      "Emergency contact information"
    ]
  }
]

const feeStructure = [
  {
    program: "Toddler Program",
    age: "18 months - 3 years",
    termFee: "Contact for current rates",
    includes: ["Full day care (7am - 5:30pm)", "2 nutritious meals", "Snacks", "Learning materials"]
  },
  {
    program: "ECD A",
    age: "3 - 4 years",
    termFee: "Contact for current rates",
    includes: ["Half or full day options", "Structured curriculum", "2 meals (full day)", "Art supplies included"]
  },
  {
    program: "ECD B",
    age: "4 - 5 years",
    termFee: "Contact for current rates",
    includes: ["School readiness program", "ICT classes included", "2 meals (full day)", "Graduation ceremony"]
  }
]

const faqs = [
  {
    question: "When can I enroll my child?",
    answer: "Enrollment is open year-round, subject to availability. We recommend applying early as spaces fill quickly, especially for the beginning of each term. The school year follows the Zimbabwe Ministry of Education calendar with three terms."
  },
  {
    question: "What are your operating hours?",
    answer: "We operate Monday to Friday from 7:00 AM to 5:30 PM. Half-day programs end at 12:30 PM. We are closed on weekends and public holidays. Extended hours may be arranged for special circumstances."
  },
  {
    question: "Do you provide meals?",
    answer: "Yes! Full-day students receive a nutritious mid-morning snack, lunch, and afternoon snack. Our menu is designed by nutrition guidelines and accommodates common dietary restrictions. Parents are informed of the weekly menu in advance."
  },
  {
    question: "What is your teacher-to-child ratio?",
    answer: "We maintain low ratios for personalized attention: Toddlers (1:6), ECD A (1:8), and ECD B (1:10). This ensures each child receives individual attention and support throughout the day."
  },
  {
    question: "Is there a trial period?",
    answer: "Yes, we offer a one-week trial period for new students. This allows your child to adjust to the new environment and helps us assess which class best suits their developmental stage."
  },
  {
    question: "How do you handle discipline?",
    answer: "We use positive discipline methods focused on redirection, natural consequences, and teaching problem-solving skills. Physical punishment is never used. We work closely with parents to maintain consistent behavioral expectations."
  }
]

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Admissions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6">
                Join Our Favour Family
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Taking the first step in your child&apos;s educational journey is exciting! 
                We&apos;ve made our admission process simple and welcoming. Let us help you 
                get started.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20admission%20for%20my%20child%20at%20Favour%20Preschool" target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Application via WhatsApp
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                >
                  <Link href="#process">
                    View Process
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero2.png"
                  alt="Happy children at Favour Preschool"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Open</div>
                    <div className="text-sm text-muted-foreground">Enrollment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="process" className="py-16 md:py-24 bg-muted relative scroll-mt-20">
        <DotsPattern className="top-10 right-10 opacity-30" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How to Apply</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Simple 4-Step Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;ve streamlined our admission process to make it easy for families to join our school community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Requirements</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              What You&apos;ll Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Prepare these items to ensure a smooth enrollment process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 pb-4 border-b border-border">
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Investment</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Program Fees
            </h2>
            <p className="text-lg text-muted-foreground">
              Quality education at accessible rates. Contact us for current fee schedules.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {feeStructure.map((fee, index) => (
              <div 
                key={index} 
                className={`bg-card rounded-2xl overflow-hidden border shadow-sm ${
                  index === 2 ? 'border-primary' : 'border-border'
                }`}
              >
                {index === 2 && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{fee.program}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{fee.age}</p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{fee.termFee}</span>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-foreground mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {fee.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <Button 
                    asChild 
                    className="w-full"
                    variant={index === 2 ? "default" : "outline"}
                  >
                    <Link href={`https://wa.me/263713173394?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(fee.program)}%20program%20at%20Favour%20Preschool`} target="_blank">
                      Inquire Now
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground text-sm mt-8">
            <Clock className="w-4 h-4 inline mr-1" />
            Fees are payable per term. Payment plans available upon request.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about admission and school life.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have more questions? We&apos;re here to help!
            </p>
            <Button asChild>
              <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20have%20some%20questions%20about%20admission%20at%20Favour%20Preschool" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Us on WhatsApp
              </Link>
            </Button>
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
              Ready to Begin Your Child&apos;s Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Join the Favour Preschool family today. We can not wait to welcome you and 
              your little one to our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-card text-foreground hover:bg-card/90"
              >
                <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20am%20ready%20to%20enroll%20my%20child%20at%20Favour%20Preschool" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Apply via WhatsApp
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">
                  Visit Our Campus
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
