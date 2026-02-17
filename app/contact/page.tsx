"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["1143 Mbundane", "Bulawayo, Zimbabwe"],
    action: null
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["071 317 3394"],
    action: "tel:+263713173394"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["favourpreschoolanddaycare@gmail.com"],
    action: "mailto:favourpreschoolanddaycare@gmail.com"
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: ["Monday - Friday", "7:00 AM - 5:30 PM"],
    action: null
  }
]

const admissionSteps = [
  {
    step: "1",
    title: "Inquire",
    description: "Contact us via WhatsApp or phone to express interest and ask questions."
  },
  {
    step: "2",
    title: "Visit",
    description: "Schedule a campus tour to see our facilities and meet our team."
  },
  {
    step: "3",
    title: "Apply",
    description: "Complete the application form and submit required documents."
  },
  {
    step: "4",
    title: "Enroll",
    description: "Pay registration fee and finalize enrollment for your preferred term."
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    program: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Generate WhatsApp message
    const message = `Hello Favour Preschool,

I would like to inquire about enrollment.

*Parent/Guardian:* ${formData.parentName}
*Child's Name:* ${formData.childName}
*Child's Age:* ${formData.childAge}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Program Interested:* ${formData.program}

*Message:*
${formData.message}

Please contact me with more information about admission.`

    const whatsappUrl = `https://wa.me/263713173394?text=${encodeURIComponent(message)}`
    
    // Simulate brief loading then redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions about enrollment? Want to schedule a visit? 
              Reach out to us - we&apos;re here to help!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  info.action ? (
                    <a 
                      key={i} 
                      href={info.action} 
                      className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-background relative">
        <DotsPattern className="top-10 right-10 opacity-50" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-card p-6 md:p-8 rounded-3xl shadow-sm border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Admission Inquiry</h2>
              <p className="text-muted-foreground mb-6">
                Fill out this form and we&apos;ll continue the conversation on WhatsApp.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    A WhatsApp chat window should have opened. If not, click below:
                  </p>
                  <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                    <Link 
                      href="https://wa.me/263713173394" 
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Open WhatsApp
                    </Link>
                  </Button>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        parentName: "",
                        childName: "",
                        childAge: "",
                        phone: "",
                        email: "",
                        program: "",
                        message: ""
                      })
                    }}
                    className="block mx-auto mt-4 text-sm text-primary hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 077 123 4567"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="childName">Child&apos;s Name *</Label>
                      <Input
                        id="childName"
                        required
                        value={formData.childName}
                        onChange={(e) => setFormData({...formData, childName: e.target.value})}
                        placeholder="Child's full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="childAge">Child&apos;s Age *</Label>
                      <Input
                        id="childAge"
                        required
                        value={formData.childAge}
                        onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                        placeholder="e.g. 3 years"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="program">Program of Interest *</Label>
                    <select
                      id="program"
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({...formData, program: e.target.value})}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
                    >
                      <option value="">Select a program</option>
                      <option value="Toddler (18 months - 3 years)">Toddler (18 months - 3 years)</option>
                      <option value="ECD A (3-4 years)">ECD A (3-4 years)</option>
                      <option value="ECD B (4-5 years)">ECD B (4-5 years)</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Any questions or specific requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      "Preparing WhatsApp..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Admission Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Admission Process</h2>
              <p className="text-muted-foreground mb-8">
                Getting started is easy! Follow these simple steps to enroll your child at Favour Preschool.
              </p>
              
              <div className="space-y-6">
                {admissionSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-primary/10 rounded-2xl">
                <h3 className="font-bold text-foreground mb-2">Quick Admission via WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Prefer to chat directly? Click below to start your admission conversation instantly.
                </p>
                <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A] text-white w-full">
                  <Link 
                    href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20admission%20at%20Favour%20Preschool.%20Please%20guide%20me%20through%20the%20process." 
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What documents are required for enrollment?",
                a: "You'll need your child's birth certificate, immunization records, and passport-sized photos. Parent/guardian ID is also required."
              },
              {
                q: "What are the school fees?",
                a: "Please contact us via WhatsApp or phone for current fee structure. We're happy to discuss payment plans."
              },
              {
                q: "Do you provide meals?",
                a: "Yes! We provide nutritious daily meals prepared in our on-site kitchen following health guidelines."
              },
              {
                q: "What is the student-teacher ratio?",
                a: "We maintain small class sizes with ratios that exceed recommended guidelines for individual attention."
              },
              {
                q: "When are applications open?",
                a: "We accept applications year-round. Current openings are for First Term and Second Term across all age groups."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
