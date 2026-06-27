import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Updated to md:grid-cols-3 since we removed the Programs column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-gray-700">
          
          {/* Column 1: Company */}
          <div>
            <Link href="/" className="block mb-6 cursor-pointer">
              <Image 
                src="/SAAVY.png" 
                alt="Savvy Intern Logo" 
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Column 2: Support & Legal */}
          <div>
            <h4 className="font-bold text-[#0B3B7A] mb-6">Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/support" className="hover:text-[#38BDF8] transition-colors cursor-pointer">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-[#38BDF8] transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#38BDF8] transition-colors cursor-pointer">Terms & Conditions</Link></li>
              <li><Link href="/refunds" className="hover:text-[#38BDF8] transition-colors cursor-pointer">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Updated with Real Data) */}
          <div>
            <h4 className="font-bold text-[#0B3B7A] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-[#38BDF8]" />
                <a href="mailto:Support@savvyintern.com" className="hover:text-[#38BDF8] cursor-pointer">Support@savvyintern.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-[#38BDF8]" />
                <a href="tel:+916366755052" className="hover:text-[#38BDF8] cursor-pointer">+91 6366755052</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-[#38BDF8] mt-1" />
                <span>Jeevan Bima Nagar,<br/> Bangalore - 560075</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
          <p className="text-sm">© {currentYear} SAVVY INTERN. All rights reserved.</p>
          
          <div className="flex gap-6">
            <SocialLink 
              href="https://www.linkedin.com/posts/savvy-intern_were-live-on-linkedin-welcome-to-the-activity-7414994890700283904-2Y7z?utm_source=share&utm_medium=member_ios&rcm=ACoAADISSDEB8QdDMhjQ54qh7KErdeL-VLpf0A8" 
              icon={LinkedinIcon} 
            />
            <SocialLink 
              href="https://www.instagram.com/savvy_intern?igsh=MWo0dHJjamRwYWxnMQ%3D%3D&utm_source=qr" 
              icon={InstagramIcon} 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper wrapper for social icons (Added cursor-pointer)
function SocialLink({ href, icon: Icon }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#38BDF8] transition-colors p-2 bg-white rounded-full shadow border border-gray-100 hover:shadow-lg cursor-pointer">
            <Icon className="h-5 w-5" />
        </a>
    )
}

// Custom SVGs
const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)