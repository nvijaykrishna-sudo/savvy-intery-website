import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-gray-700">
          
          {/* Column 1: Company */}
          <div>
            <Link href="/" className="block mb-6">
              <Image 
                src="/SAAVY.png" 
                alt="Savvy Intern Logo" 
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </Link>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="hover:text-[#38BDF8] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#38BDF8] transition-colors">Careers</Link></li>
              <li><Link href="/support" className="hover:text-[#38BDF8] transition-colors">Contact Us</Link></li>
            </ul>
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
          <p className="text-sm">© {currentYear} SAVVY INTERN. All rights reserved.</p>
          
          <div className="flex gap-6">
            <SocialLink href="#" icon={LinkedinIcon} />
            <SocialLink href="#" icon={InstagramIcon} />
            <SocialLink href="#" icon={YoutubeIcon} />
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

const YoutubeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 7.1C2.5 7.1 2.3 5.5 3 4.8C3.8 3.9 4.8 3.9 5.2 3.8C9.1 3.5 12 3.5 12 3.5C12 3.5 14.9 3.5 18.8 3.8C19.2 3.9 20.2 3.9 21 4.8C21.7 5.5 21.5 7.1 21.5 7.1C21.5 7.1 21.8 8.8 21.8 10.5V13.5C21.8 15.2 21.5 16.9 21.5 16.9C21.5 16.9 21.7 18.5 21 19.2C20.2 20.1 19 20.1 18.5 20.2C15 20.5 12 20.5 12 20.5C12 20.5 9.1 20.5 5.2 20.2C4.8 20.1 3.8 20.1 3 19.2C2.3 18.5 2.5 16.9 2.5 16.9C2.5 16.9 2.2 15.2 2.2 13.5V10.5C2.2 8.8 2.5 7.1 2.5 7.1Z"/>
    <path d="M9.7 15.5L15.5 12L9.7 8.5V15.5Z"/>
  </svg>
)