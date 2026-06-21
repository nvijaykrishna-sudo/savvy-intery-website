"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for a sleek sticky header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Careers", href: "/careers" },
    { name: "Hire Talent", href: "/hire-talent" },
    { name: "About Us", href: "/about" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-3"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* NEW IMAGE LOGO - Resized to be much smaller */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/SAAVY.png" 
            alt="Savvy Intern Logo" 
            width={70}  // Reduced base width
            height={70} // Match width for a square logo ratio
            className="object-contain w-14 md:w-16 h-auto" // Strictly limits size via Tailwind
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-gray-600 hover:text-[#38BDF8] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions - Button Routing Fixed & No Console Errors */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" className="font-bold text-[#0B3B7A] hover:text-[#38BDF8] hover:bg-transparent p-0">
            <Link href="/support" className="px-4 py-2 w-full h-full flex items-center">
              Talk To An Expert
            </Link>
          </Button>
          
          <Button className="bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white font-bold rounded-full p-0">
            <Link href="/courses" className="px-6 py-2 w-full h-full flex items-center">
              Explore Programs
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-[#0B3B7A]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col px-4 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-base font-bold text-gray-800 hover:text-[#38BDF8] py-2 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Actions - Button Routing Fixed */}
          <div className="flex flex-col gap-3 pt-2">
            <Button variant="outline" className="w-full border-gray-200 text-[#0B3B7A] font-bold p-0">
              <Link href="/support" onClick={() => setIsOpen(false)} className="px-4 py-2 w-full h-full flex items-center justify-center">
                Talk To An Expert
              </Link>
            </Button>
            
            <Button className="w-full bg-[#0B3B7A] text-white font-bold p-0">
              <Link href="/courses" onClick={() => setIsOpen(false)} className="px-4 py-2 w-full h-full flex items-center justify-center">
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}