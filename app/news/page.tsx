import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PlayfulShapes, DotsPattern } from "@/components/decorative-elements"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  MapPin,
  ArrowRight,
  Bell,
  Star,
  GraduationCap,
  PartyPopper,
  Palette,
  Music
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events | Favour Preschool & Daycare Center",
  description: "Stay updated with the latest news, events, and announcements from Favour Preschool and Daycare Center.",
}

const upcomingEvents = [
  {
    title: "Term 1 Open Day",
    date: "January 15, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Favour Preschool Campus",
    description: "Join us for our Term 1 Open Day! Tour our facilities, meet our teachers, and learn about our programs. Refreshments will be served.",
    category: "Open Day",
    icon: Star,
    featured: true
  },
  {
    title: "Parent-Teacher Consultations",
    date: "February 20, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Individual Classrooms",
    description: "One-on-one meetings with teachers to discuss your child's progress, achievements, and areas for development.",
    category: "Meeting",
    icon: Calendar,
    featured: false
  },
  {
    title: "Cultural Day Celebration",
    date: "March 15, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "School Grounds",
    description: "Celebrating Zimbabwe's rich cultural heritage! Children will showcase traditional dances, songs, and wear cultural attire.",
    category: "Celebration",
    icon: Music,
    featured: false
  },
  {
    title: "Art Exhibition",
    date: "April 10, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "School Hall",
    description: "Showcasing our young artists' creations from throughout the term. All families welcome to admire the creative works.",
    category: "Exhibition",
    icon: Palette,
    featured: false
  },
  {
    title: "Sports Fun Day",
    date: "May 25, 2026",
    time: "8:30 AM - 12:30 PM",
    location: "School Grounds",
    description: "A fun-filled morning of age-appropriate sports activities. Children participate in races, games, and team activities.",
    category: "Sports",
    icon: Star,
    featured: false
  },
  {
    title: "End of Year Graduation",
    date: "December 4, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "School Hall",
    description: "Our annual graduation ceremony for ECD B students moving on to primary school. A proud moment for children and families.",
    category: "Graduation",
    icon: GraduationCap,
    featured: true
  }
]

const recentNews = [
  {
    title: "ICT Program Expansion Success",
    date: "December 2025",
    image: "/g4.png",
    excerpt: "Our partnership with Kawerify Tech continues to flourish! This term, we expanded our ICT program to include more hands-on activities and educational games that help develop digital literacy skills in our young learners.",
    content: "The expanded program now includes weekly computer sessions for all ECD classes, with age-appropriate activities designed to build mouse skills, keyboard familiarity, and basic digital concepts."
  },
  {
    title: "New Playground Equipment Installed",
    date: "November 2025",
    image: "/g1.png",
    excerpt: "We are excited to announce the installation of new playground equipment designed specifically for our youngest learners. The new structures promote physical development while ensuring maximum safety.",
    content: "The new equipment includes a toddler-safe climbing structure, sensory play panels, and improved shaded areas for comfortable outdoor activities during hot weather."
  },
  {
    title: "2025 Graduation Ceremony Highlights",
    date: "December 2025",
    image: "/g3.png",
    excerpt: "Congratulations to our ECD B graduating class of 2025! The ceremony was filled with proud moments as our little graduates showcased their achievements and prepared for their next educational chapter.",
    content: "This year's graduation saw 18 students successfully complete their preschool education. Each child received a certificate of completion and performed songs and poems for their families."
  },
  {
    title: "Health and Nutrition Workshop",
    date: "October 2025",
    image: "/g2.png",
    excerpt: "We hosted a successful workshop for parents on childhood nutrition and healthy eating habits. The session provided practical tips for preparing nutritious meals and snacks.",
    content: "The workshop was led by a local nutritionist and covered topics including balanced diets for growing children, healthy lunchbox ideas, and managing picky eating."
  }
]

const announcements = [
  {
    title: "Term 1 2026 Registration Open",
    description: "Enrollment for the new school year is now open. Limited spaces available in all programs. Contact us early to secure your child's place.",
    urgent: true
  },
  {
    title: "Updated Operating Hours",
    description: "As of January 2026, our operating hours are 7:00 AM to 5:30 PM Monday through Friday. Early drop-off available from 6:30 AM upon request.",
    urgent: false
  },
  {
    title: "New WhatsApp Communication Channel",
    description: "Parents can now reach us directly via WhatsApp for quick inquiries, absence notifications, and general communication. Save our number: 071 317 3394",
    urgent: false
  }
]

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
        <PlayfulShapes />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Stay Updated</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 mb-6 text-balance">
              News & Events
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Keep up with the latest happenings at Favour Preschool. From exciting events 
              to important announcements, stay connected with our school community.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-6 h-6 text-primary-foreground" />
            <h2 className="text-xl font-bold text-primary-foreground">Important Announcements</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {announcements.map((announcement, index) => (
              <div 
                key={index} 
                className={`bg-primary-foreground/10 rounded-xl p-4 ${
                  announcement.urgent ? 'ring-2 ring-primary-foreground' : ''
                }`}
              >
                <div className="flex items-start gap-2">
                  {announcement.urgent && (
                    <span className="bg-primary-foreground text-primary text-xs font-bold px-2 py-0.5 rounded shrink-0">
                      NEW
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-primary-foreground text-sm mb-1">
                      {announcement.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-xs leading-relaxed">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-muted relative">
        <DotsPattern className="top-10 right-10 opacity-30" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Mark Your Calendar</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Upcoming Events
              </h2>
            </div>
          </div>
          
          {/* Featured Events */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {upcomingEvents.filter(e => e.featured).map((event, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl overflow-hidden border-2 border-primary shadow-lg"
              >
                <div className="bg-primary px-6 py-3">
                  <span className="text-primary-foreground font-semibold flex items-center gap-2">
                    <PartyPopper className="w-5 h-5" />
                    Featured Event
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <event.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Regular Events */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.filter(e => !e.featured).map((event, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <event.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {event.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Recent News
            </h2>
            <p className="text-lg text-muted-foreground">
              Highlights and stories from our school community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <article 
                key={index} 
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {news.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {news.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* School Calendar Download */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Stay Organized with Our School Calendar
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Download our complete school calendar with all term dates, holidays, 
                  events, and important deadlines. Plan ahead and never miss an important school activity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20school%20calendar%20for%202026" target="_blank">
                      Request Calendar via WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">2026 Term Dates</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-medium text-foreground">Term 1</span>
                    <span className="text-muted-foreground text-sm">Jan 13 - Apr 10</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-medium text-foreground">Term 2</span>
                    <span className="text-muted-foreground text-sm">May 4 - Aug 7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Term 3</span>
                    <span className="text-muted-foreground text-sm">Sep 7 - Dec 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Bell className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Never Miss an Update
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Join our WhatsApp broadcast list to receive instant updates about events, 
              announcements, and important school information directly to your phone.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-card text-foreground hover:bg-card/90"
            >
              <Link href="https://wa.me/263713173394?text=Hello%2C%20I%20would%20like%20to%20join%20the%20Favour%20Preschool%20WhatsApp%20broadcast%20list" target="_blank">
                <ArrowRight className="w-5 h-5 mr-2" />
                Join WhatsApp Updates
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
