import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Qualified teachers with Early Childhood Education diplomas",
  "Small class sizes for individual attention",
  "ICT curriculum in partnership with Kawerify Tech",
  "Nutritious daily meals prepared on-site",
  "Safe, secure, and clean facilities",
  "Annual educational tours and field trips",
  "Regular parent-teacher collaboration",
  "Cultural celebrations and community events"
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/g1.png"
                    alt="Children playing outdoors"
                    width={300}
                    height={250}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/g2.png"
                    alt="Learning activities"
                    width={300}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/g3.png"
                    alt="Graduation ceremony"
                    width={300}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/g4.png"
                    alt="ICT learning"
                    width={300}
                    height={250}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>
          
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Favour Difference</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              More Than Just Daycare
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Since 2021, we&apos;ve been committed to providing exceptional early childhood education 
              that prepares children for success. Our holistic approach nurtures the whole child 
              - academically, socially, emotionally, and physically.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
