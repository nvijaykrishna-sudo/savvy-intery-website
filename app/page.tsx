"use client"; // REQUIRED for form state handling in Section 4

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Cpu,
  BarChart,
  Megaphone,
  Star,
  Zap,
  Target,
  Briefcase,
  Users,
  MessageSquareQuote,
  Clock3,
} from "lucide-react";
import { HeroAnimation } from "@/components/animations/HeroAnimation";

export default function HomePage() {
  // Form State for Section 4: Talk to Expert
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    areaOfInterest: "",
    qualification: "",
  });

  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side Content */}
            <div className="flex flex-col space-y-8 z-10">
              <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1 text-sm font-medium text-[#0B3B7A] w-fit">
                <span className="flex h-2 w-2 rounded-full bg-[#38BDF8] mr-2 animate-pulse"></span>
                Industry-Ready Programs
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B3B7A] leading-[1.1] text-balance">
                Elevate Your Skills with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3B7A] to-[#38BDF8]">
                  Industry-Focused
                </span> Internships
              </h1>
              
              <p className="text-lg text-gray-600 max-w-[600px] leading-relaxed text-pretty">
                Learn practical skills, work on real-world projects, gain industry exposure, and build confidence through expert-led internship programs designed for future professionals.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 pt-2">
                <StatBox number="30+" label="Internship Programs" />
                <StatBox number="70+" label="Industry Workshops & Events" />
                <StatBox number="35+" label="Expert Mentors" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white rounded-full h-12 px-8 font-semibold shadow-lg">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-gray-200 hover:bg-gray-50 text-[#0B3B7A] font-semibold hover:border-[#0B3B7A]/20">
                  Talk To An Expert
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Premium 3D Animation */}
            <div className="relative w-full h-full min-h-[400px] md:min-h-[550px] flex items-center justify-center">
               <HeroAnimation />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TOP BEST SELLING PROGRAMS */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-4">Most Popular Internship Programs</h2>
            <p className="text-gray-600 text-lg">Industry-relevant internship programs designed to help students gain practical experience and build career-ready skills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseCard 
                title="Full Stack Web Development Internship" 
                price="₹4,999" icon={Code}
                details={["30 Hours Learning", "Live Mentor Support", "Industry Projects", "Internship Certificate", "Portfolio Development"]}
            />
            <CourseCard 
                title="Artificial Intelligence & Prompt Engineering" 
                price="₹4,999" icon={Cpu} 
                details={["AI Fundamentals", "ChatGPT & Generative AI", "Real Case Studies", "Internship Certificate"]}
            />
            <CourseCard 
                title="Data Analytics Internship" 
                price="₹4,999" icon={BarChart} 
                details={["Excel", "SQL", "Power BI", "Dashboard Projects", "Internship Certificate"]}
            />
            <CourseCard 
                title="Digital Marketing Internship" 
                price="₹4,999" icon={Megaphone} 
                details={["SEO", "Social Media Marketing", "Content Strategy", "Google Tools", "Internship Certificate"]}
            />
          </div>
        </div>
      </section>

      {/* 3. DISCOUNT OFFER SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#0B3B7A] to-blue-800 text-white relative overflow-hidden">
        {/* Premium Background Visuals */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-black text-xs tracking-widest uppercase mb-5 border border-[#38BDF8]/30">Limited Time Offer</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Save Up To <span className="text-[#38BDF8] underline decoration-[#38BDF8]/40 underline-offset-4">50%</span> On Selected Internship Programs
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Start learning today and gain practical experience with expert mentorship and certification. Don't miss out on accelerating your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0B3B7A] font-extrabold rounded-full h-14 px-10 text-md shadow-2xl transition-all hover:scale-105">
              Claim Offer
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full h-14 px-10 font-semibold hover:border-white">
              View Programs
            </Button>
          </div>
        </div>
      </section>

      {/* 4. TALK WITH OUR EXPERT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B3B7A]/5 rounded-full blur-[80px]"></div>
            
            <div className="z-10 space-y-6">
                <div className="h-14 w-14 bg-[#0B3B7A]/10 rounded-2xl flex items-center justify-center">
                    <MessageSquareQuote className="h-7 w-7 text-[#0B3B7A]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] leading-tight">Speak With Our<br/> Learning Advisor</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-[500px]">
                    Not sure which internship program is right for you? Connect with our experts and get personalized guidance based on your interests and career goals.
                </p>
            </div>

            <Card className="border-gray-100 shadow-xl bg-white/90 backdrop-blur-lg rounded-2xl p-8 z-10">
                <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Full Name" placeholder="sai krishna" />
                        <InputField label="Email Address" placeholder="sai@example.com" type="email" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Mobile Number" placeholder="+91 98765 43210" type="tel" />
                        <InputField label="Area Of Interest" placeholder="Web Development" />
                    </div>
                    <InputField label="Current Qualification" placeholder="B.Tech Final Year" />
                    
                    <Button className="w-full h-12 bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white font-bold rounded-lg text-md mt-6 shadow-md">
                        Submit Inquiry
                    </Button>
                </form>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. LEARNER REVIEWS */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-4">What Our Learners Say</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it. Hear from the students who have elevated their careers with Savvy Intery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReviewCard name="Sai Krishna" review="The internship helped me understand real-world web development workflows and boosted my confidence significantly." />
            <ReviewCard name="Harika Reddy" review="The mentorship sessions were extremely valuable and helped me build a strong portfolio." />
            <ReviewCard name="Praveen Kumar" review="I gained practical experience that traditional classroom learning never provided. Highly recommended!" />
            <ReviewCard name="Nikhil Sharma" review="Excellent mentors, structured learning, and project-based assignments. The best way to become industry-ready." />
          </div>
        </div>
      </section>

      {/* 6. CAREER READINESS PROGRAMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-4">Career Readiness Programs</h2>
            <p className="text-gray-600 text-lg">Our programs focus on skill development, project experience, professional communication, portfolio building, and industry exposure to prepare learners for future career opportunities.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ReadinessCard 
                icon={Zap} title="Skill Development"
                details={["Practical Learning", "Industry Projects", "Mentor Guidance"]}
            />
            <ReadinessCard 
                icon={Target} title="Professional Development"
                details={["Resume Building", "LinkedIn Optimization", "Interview Preparation"]}
            />
            <ReadinessCard 
                icon={Briefcase} title="Internship Experience"
                details={["Real-World Assignments", "Team Collaboration", "Project Documentation"]}
            />
            <ReadinessCard 
                icon={Users} title="Career Support"
                details={["Career Guidance Sessions", "Industry Insights", "Learning Roadmaps"]}
            />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE SAVVY INTERY */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-12">Why Choose Savvy Intery</h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Badge text="Industry-Relevant Curriculum" />
            <Badge text="Expert Mentors" />
            <Badge text="Practical Projects" />
            <Badge text="Flexible Learning" />
            <Badge text="Internship Certification" />
            <Badge text="Community Access" />
            <Badge text="Career Guidance" />
            <Badge text="Live Sessions" />
          </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENTS ---

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col gap-1.5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm min-w-[160px] flex-1">
      <span className="text-3xl font-extrabold text-[#0B3B7A]">{number}</span>
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}

function CourseCard({ title, price, icon: Icon, details }: any) {
  return (
    <Card className="border-gray-200 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(11,59,122,0.1)] transition-all duration-300 bg-white group cursor-pointer flex flex-col justify-between hover:scale-[1.01]">
      <CardContent className="p-7">
        <div className="h-14 w-14 bg-[#0B3B7A]/5 group-hover:bg-[#0B3B7A]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-inner">
          <Icon className="h-7 w-7 text-[#0B3B7A]" />
        </div>
        <h3 className="font-extrabold text-xl mb-2 text-gray-950 leading-snug line-clamp-2 min-h-[56px] group-hover:text-[#0B3B7A] transition-colors">{title}</h3>
        <p className="text-[#38BDF8] text-2xl font-black mb-6 tracking-tight">{price}</p>
        
        <ul className="space-y-3 mb-8">
            {details.map((detail: string, i: number) => (
                <li key={i} className="flex items-center text-sm font-medium text-gray-600">
                    <CheckCircle2 className="h-4.5 w-4.5 mr-2.5 text-[#38BDF8]" />
                    {detail}
                </li>
            ))}
        </ul>
      </CardContent>
        <div className="px-7 pb-7">
            <Button className="w-full h-12 bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white font-bold rounded-lg text-md transition-all group-hover:shadow-lg">View Details</Button>
        </div>
    </Card>
  );
}

function InputField({ label, placeholder, type = "text" }: any) {
    return (
        <div className="space-y-2">
            <Label className="font-semibold text-gray-700 text-sm">{label}</Label>
            <Input type={type} placeholder={placeholder} className="h-11 border-gray-200 rounded-lg focus-visible:ring-[#0B3B7A]" />
        </div>
    );
}

function ReviewCard({ name, review }: any) {
  return (
    <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
      
      <div className="flex text-orange-500 gap-1 mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-4.5 w-4.5 fill-current" />)}
      </div>
      
      <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative font-medium">"{review}"</p>
      
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[#0B3B7A]/10 flex items-center justify-center font-extrabold text-[#0B3B7A] text-lg border-2 border-white shadow-md">
          {name.charAt(0)}
        </div>
        <p className="font-extrabold text-[#0B3B7A] text-lg">{name}</p>
      </div>
    </div>
  );
}

function ReadinessCard({ icon: Icon, title, details }: any) {
  return (
    <Card className="p-7 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-lg flex flex-col hover:border-[#38BDF8]/20 hover:scale-[1.01] transition-all">
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
            <div className="h-12 w-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center shadow-inner">
                <Icon className="h-6 w-6 text-[#38BDF8]" />
            </div>
            <h3 className="font-extrabold text-[#0B3B7A] text-lg leading-tight">{title}</h3>
        </div>
        <ul className="space-y-2.5">
            {details.map((detail: string, i: number) => (
                <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="h-4 w-4 mr-2.5 text-[#38BDF8] flex-shrink-0" />
                    {detail}
                </li>
            ))}
        </ul>
    </Card>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-5 py-3 bg-white border border-gray-100 text-[#0B3B7A] font-bold rounded-full text-sm shadow-sm hover:shadow-lg hover:text-[#38BDF8] transition-all cursor-pointer">
      {text}
    </span>
  );
}