import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-gray-700">
          
          {/* Column 1: Company (Links Removed) */}
          <div>
            <Link href="/" className="block mb-6">
              <Image 
                src="/SAAVY.png" 
                alt="Savvy Intery Logo" 
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="font-bold text-[#0B3B7A] mb-6">Programs</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/courses" className="hover:text-[#38BDF8] transition-colors">All Programs</Link></li>
              <li><Link href="/courses" className="hover:text-[#38BDF8] transition-colors">Internship Tracks</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div>
            <h4 className="font-bold text-[#0B3B7A] mb-6">Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/support" className="hover:text-[#38BDF8] transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#38BDF8] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refunds" className="hover:text-[#38BDF8] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-[#0B3B7A] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-[#38BDF8]" />
                <a href="mailto:support@savvyintern.com" className="hover:text-[#38BDF8]">support@savvyintern.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-[#38BDF8]" />
                <a href="tel:+919876543210" className="hover:text-[#38BDF8]">+91 9876543210</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-[#38BDF8] mt-1" />
                <span>Hyderabad, Telangana,<br/> India - 500001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
          <p className="text-sm">© {currentYear} SAVVY INTERY. All rights reserved.</p>
          
          <div className="flex gap-6">
            <SocialLink href="#" icon={LinkedinIcon} />
            <SocialLink href="#" icon={InstagramIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper wrapper for social icons
function SocialLink({ href, icon: Icon }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#38BDF8] transition-colors p-2 bg-white rounded-full shadow border border-gray-100 hover:shadow-lg">
            <Icon className="h-5 w-5" />
        </a>
    )
}

// Custom SVGs (YouTube completely removed)
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