"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, ChevronDown, 
  Briefcase, GraduationCap, Building2, HelpCircle, 
  MessageCircle, Send, PhoneCall, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden pb-20 md:pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B3B7A] text-white pt-24 pb-32 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8] mb-6 shadow-sm">
            Support Center
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            We're Here To <span className="text-[#38BDF8]">Help</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Have questions about our internship programs, enrollment process, or career opportunities? Our support team is ready to guide you throughout your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact-form">
              <Button size="lg" className="w-full sm:w-auto bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0B3B7A] rounded-full h-14 px-10 font-extrabold shadow-lg transition-transform hover:scale-105">
                Contact Support
              </Button>
            </a>
            <a href="#callback">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full h-14 px-10 font-bold backdrop-blur-sm">
                Talk To An Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM SUPPORT CARDS (Overlapping Hero) */}
      <section className="relative z-20 -mt-16 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <SupportCard icon={GraduationCap} title="Program Support" desc="Course details, enrollment & mentor sessions." />
            <SupportCard icon={Briefcase} title="Career Guidance" desc="Internship applications & recruitment help." />
            <SupportCard icon={Building2} title="Business Partnerships" desc="Corporate training & hiring collaborations." />
            <SupportCard icon={HelpCircle} title="Technical Assistance" desc="Platform access & offline material issues." />
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTACT & FORM SECTION */}
      <section className="py-16 bg-white w-full border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Callback */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-4">Get In Touch With Our Team</h2>
                <p className="text-gray-600 mb-8">Whether you're a student, professional, or business partner, we're happy to assist you.</p>
              </div>

              <div className="space-y-6">
                <ContactInfoBox 
                  title="Program Support" 
                  email="support@savvyintern.com" 
                  phone="+91 9876543210" 
                />
                <ContactInfoBox 
                  title="Business & Partnerships" 
                  email="partnerships@savvyintern.com" 
                  phone="+91 9876543211" 
                />
                <ContactInfoBox 
                  title="Careers & Recruitment" 
                  email="careers@savvyintern.com" 
                  phone="+91 9876543212" 
                />
              </div>

              {/* Callback Request Card (Premium Suggestion) */}
              <div id="callback" className="bg-gradient-to-br from-[#0B3B7A] to-blue-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden mt-8">
                <div className="absolute -right-6 -top-6 text-white/10">
                  <PhoneCall className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-2 relative z-10">Request A Callback</h3>
                <p className="text-blue-100 text-sm mb-6 relative z-10">Leave your number and an expert will call you back shortly.</p>
                <form className="space-y-4 relative z-10">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" />
                  <Button className="w-full bg-[#38BDF8] hover:bg-white text-[#0B3B7A] font-bold rounded-xl py-3 transition-colors">
                    Call Me Back
                  </Button>
                </form>
              </div>
            </div>

            {/* Right: Quick Contact Form */}
            <div id="contact-form" className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-2xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0B3B7A]">Send Us A Message</h3>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours.</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Mobile Number *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+91 XXX XXX XXXX" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Area Of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-600">
                      <option>Internship Programs</option>
                      <option>Corporate Training</option>
                      <option>Career Counseling</option>
                      <option>Partnerships</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Write your message here..." required></textarea>
                </div>

                <Button className="w-full bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white rounded-xl h-14 font-bold text-lg shadow-md transition-transform hover:scale-[1.01]">
                  Submit Request
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ANIMATED STATS & TRUST */}
      <section className="py-20 bg-[#0B3B7A] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedStat end={500} suffix="+" label="Learners Assisted" />
            <AnimatedStat end={95} suffix="%" label="Satisfaction Rate" />
            <AnimatedStat end={24} suffix="h" label="Avg Response Time" />
            <AnimatedStat end={30} suffix="+" label="Active Programs" />
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS & MAP */}
      <section className="py-24 bg-gray-50 w-full border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Visit Our Office</h2>
            <p className="text-gray-600 text-lg">Find us easily across our multiple locations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Address Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
                <div className="bg-[#38BDF8]/10 p-4 rounded-full flex-shrink-0">
                  <MapPin className="w-8 h-8 text-[#38BDF8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B3B7A] mb-3">Corporate Office</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    SAVVY INTERN HQ<br />
                    123 Innovation Drive, Tech Park<br />
                    Hyderabad, Telangana - 500001<br />
                    India
                  </p>
                  <Button variant="outline" className="rounded-full border-gray-200 text-[#0B3B7A] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] hover:border-[#38BDF8]/30">
                    Get Directions
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
                <div className="bg-[#0B3B7A]/5 p-4 rounded-full flex-shrink-0">
                  <Clock className="w-8 h-8 text-[#0B3B7A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B3B7A] mb-3">Office Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between w-48"><span className="font-semibold">Mon – Fri:</span> 9:00 AM – 6:00 PM</li>
                    <li className="flex justify-between w-48"><span className="font-semibold">Saturday:</span> 10:00 AM – 4:00 PM</li>
                    <li className="flex justify-between w-48 text-red-500"><span className="font-semibold text-gray-600">Sunday:</span> Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-inner h-[450px] relative">
              {/* Fallback Map Image or Iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.305206344915!2d78.474628!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find quick answers to common questions about our programs and services.</p>
          </div>

          <div className="space-y-4">
            <FaqItem 
              question="How do I enroll in an internship program?" 
              answer="You can browse our programs on the Courses page and submit an application form. Our advisory team will contact you with further details and next steps." 
            />
            <FaqItem 
              question="Are the programs completely online?" 
              answer="Yes, most of our programs are conducted entirely online, allowing learners to participate from anywhere while maintaining a flexible learning environment." 
            />
            <FaqItem 
              question="Will I receive a certificate?" 
              answer="Absolutely. Eligible participants receive a verified internship completion certificate after successfully completing all program requirements and projects." 
            />
            <FaqItem 
              question="How can I contact a mentor?" 
              answer="Mentor interactions are facilitated through scheduled live sessions, 1-on-1 meetings, and our program-specific dedicated communication channels (like Discord/Slack)." 
            />
            <FaqItem 
              question="Can businesses partner with SAVVY INTERN?" 
              answer="Yes! We welcome collaborations, hiring partnerships, and corporate engagement opportunities. Please reach out via our Partnerships contact info." 
            />
            <FaqItem 
              question="How quickly will support respond?" 
              answer="Our dedicated support team typically responds within 24–48 business hours, depending on the volume of inquiries." 
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button (Premium Suggestion) */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat With Us
        </span>
      </a>

    </main>
  );
}

// --- HELPER COMPONENTS ---

function SupportCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#38BDF8]/50 hover:-translate-y-1 transition-all group">
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/10 transition-colors">
        <Icon className="w-6 h-6 text-[#0B3B7A] group-hover:text-[#38BDF8]" />
      </div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ContactInfoBox({ title, email, phone }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
      <div className="bg-[#0B3B7A]/5 p-3 rounded-full mt-1">
        <Mail className="w-6 h-6 text-[#0B3B7A]" />
      </div>
      <div>
        <h4 className="font-extrabold text-gray-900 text-lg mb-1">{title}</h4>
        <p className="text-[#38BDF8] font-semibold mb-1 hover:underline cursor-pointer">{email}</p>
        <p className="text-gray-500 font-medium">{phone}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white hover:border-[#38BDF8]/50 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#38BDF8]' : ''}`} />
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

function AnimatedStat({ end, suffix, label }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-4">
      <div className="text-4xl md:text-5xl font-black text-[#38BDF8] mb-2 drop-shadow-sm">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold text-blue-100 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}