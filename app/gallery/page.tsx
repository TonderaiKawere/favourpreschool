"use client"

import Image from "next/image"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes } from "@/components/decorative-elements"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/hero.png",
    alt: "Happy children learning together",
    category: "classroom"
  },
  {
    src: "/about.jpg",
    alt: "Our bright and colorful classroom",
    category: "classroom"
  },
  {
    src: "/g1.png",
    alt: "Children enjoying outdoor playtime",
    category: "outdoor"
  },
  {
    src: "/g2.png",
    alt: "Hands-on learning activities",
    category: "activities"
  },
  {
    src: "/g3.png",
    alt: "Graduation ceremony celebration",
    category: "events"
  },
  {
    src: "/g4.png",
    alt: "ICT learning with Kawerify Tech",
    category: "activities"
  },
  {
    src: "/g5.png",
    alt: "Arts and crafts session",
    category: "activities"
  },
  {
    src: "/g6.png",
    alt: "Story time with teacher",
    category: "classroom"
  },
  {
    src: "/g7.png",
    alt: "Music and movement class",
    category: "activities"
  },
  {
    src: "/g8.png",
    alt: "Healthy snack time",
    category: "daily"
  }
]

const categories = [
  { id: "all", label: "All Photos" },
  { id: "classroom", label: "Classroom" },
  { id: "outdoor", label: "Outdoor" },
  { id: "activities", label: "Activities" },
  { id: "events", label: "Events" },
  { id: "daily", label: "Daily Life" }
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6">
              Moments of Joy & Learning
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Take a glimpse into life at Favour Preschool. These are the moments that make 
              our school special - filled with laughter, discovery, and growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Tabs */}
      <section className="py-8 bg-muted sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      
      {/* Visit CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a visit to our campus and see our facilities in person. 
            We&apos;d love to show you around and answer any questions.
          </p>
          <a
            href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20Favour%20Preschool%20to%20see%20the%20facilities."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
