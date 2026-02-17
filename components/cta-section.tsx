import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Applications are now open for First and Second Term across all age groups. 
            Limited spaces available - secure your child&apos;s place today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-card text-foreground hover:bg-card/90 text-lg px-8"
            >
              <Link 
                href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20admission%20at%20Favour%20Preschool.%20Please%20provide%20me%20with%20the%20enrollment%20details." 
                target="_blank"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Apply via WhatsApp
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 bg-transparent"
            >
              <Link href="tel:+263713173394" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us: 071 317 3394
              </Link>
            </Button>
          </div>
          
          <p className="text-primary-foreground/80 mt-8 text-sm">
            Visit us at 1143 Mbundane, Bulawayo, Zimbabwe
          </p>
        </div>
      </div>
    </section>
  )
}
