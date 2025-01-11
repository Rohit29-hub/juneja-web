import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="font-bold text-xl">Juneja Education centre</span>
            </div>
            <p className="text-muted-foreground">
              Empowering careers through professional computer education and skill development.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-foreground">Courses</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-foreground">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+919871628871" className="text-muted-foreground hover:text-foreground">
                  +91 9871628871
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:junejaeducationcentre@gmail.com" className="text-muted-foreground hover:text-foreground">
                  junejaeducationcentre@gmail.com
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <Link href="https://www.google.com/maps?q=C-2/196, Nand Nagri, Delhi - 110093" className="text-muted-foreground hover:text-foreground" target="_blank">
                  C-2/196, Nand Nagri, Delhi - 110093 (Opposite Post Office)
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IT Expert Education Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
