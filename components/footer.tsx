import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <div>
                <span className="font-bold text-lg">Favour</span>
                <span className="block text-xs opacity-80 -mt-1">Preschool & Daycare</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Gateway to Success - Nurturing young minds through quality early childhood education in Mbundane, Bulawayo since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm opacity-90">1143 Mbundane, Bulawayo, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+263713173394" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  071 317 3394
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:favourpreschoolanddaycare@gmail.com" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors break-all">
                  favourpreschoolanddaycare@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Operating Hours</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="text-sm font-medium">Monday - Friday</span>
                  <span className="block text-sm opacity-90">7:00 AM - 5:30 PM</span>
                </div>
              </li>
              <li className="text-sm opacity-80 mt-2">
                We are closed on weekends and public holidays.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="opacity-80">
              &copy; {currentYear} Favour Preschool and Daycare Center. All rights reserved.
            </p>
            <p className="opacity-80">
              Built by{" "}
              <a 
                href="https://kawerifytech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Kawerify Tech
              </a>
              {" "}- our faithful partner for over 3 years, helping manage our socials.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
