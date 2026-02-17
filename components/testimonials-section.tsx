import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Favour Preschool has been a blessing for our family. My daughter has grown so much in confidence and is now reading at an advanced level!",
    author: "Mrs. Moyo",
    role: "Parent of ECD B Graduate"
  },
  {
    quote: "The teachers are incredibly caring and dedicated. I can see the love they have for the children. The ICT program is an amazing bonus!",
    author: "Mr. Ncube",
    role: "Parent of ECD A Student"
  },
  {
    quote: "We were worried about leaving our toddler, but Mrs. Mlambo made the transition so smooth. Our son loves going to school every day.",
    author: "Mrs. Dube",
    role: "Parent of Toddler"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-muted-foreground">
            The trust parents place in us is something we treasure deeply. 
            Here&apos;s what they have to say about the Favour experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
