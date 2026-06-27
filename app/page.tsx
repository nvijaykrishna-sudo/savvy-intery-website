"use client";

import Link from "next/link";
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
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side Content */}
            <div className="flex flex-col space-y-8 z-10">
              <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1 text-sm font-medium text-[#0B3B7A] w-fit">
                <span className="flex h-2 w-2 rounded-full bg-[#38BDF8] mr-2"></span>
                Industry-Ready Programs
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B3B7A] leading-[1.1] text-balance">
                Elevate Your Skills with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3B7A] to-[#38BDF8]">
                  Industry-Focused
                </span> Internships
              </h1>
              
              <p className="text-lg text-gray-600 max-w-[600px] leading-relaxed text-pretty">
                Skip the boring tutorials. Build actual projects, get mentored by tech professionals, and walk away with the hands-on experience that companies are actually hiring for.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 pt-2">
                <StatBox number="30+" label="Internship Programs" />
                <StatBox number="70+" label="Workshops & Events" />
                <StatBox number="35+" label="Expert Mentors" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white rounded-full h-12 px-8 font-semibold shadow-lg cursor-pointer">
                  <Link href="/courses">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 border-2 border-[#0B3B7A] bg-transparent text-[#0B3B7A] hover:bg-[#0B3B7A] hover:text-white font-semibold transition-all cursor-pointer">
                  <Link href="#expert-form">
                    Talk To An Expert
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Premium 2D Animation */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-4">Most Popular Internships</h2>
            <p className="text-gray-600 text-lg">Hand-picked programs designed to give you an unfair advantage in today's highly competitive job market.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseCard 
                title="Full Stack Web Development Internship" 
                price="₹4,999" icon={Code}
                href="/courses/full-stack-development"
                details={["30 Hours Learning", "Live Mentor Support", "Industry Projects", "Internship Certificate", "Portfolio Development"]}
            />
            <CourseCard 
                title="Artificial Intelligence & Prompt Engineering" 
                price="₹4,999" icon={Cpu} 
                href="/courses/artificial-intelligence"
                details={["AI Fundamentals", "ChatGPT & Generative AI", "Real Case Studies", "Internship Certificate"]}
            />
            <CourseCard 
                title="Data Analytics Internship" 
                price="₹4,999" icon={BarChart} 
                href="/courses/data-science"
                details={["Excel", "SQL", "Power BI", "Dashboard Projects", "Internship Certificate"]}
            />
            <CourseCard 
                title="Digital Marketing Internship" 
                price="₹4,999" icon={Megaphone} 
                href="/courses/digital-marketing"
                details={["SEO", "Social Media Marketing", "Content Strategy", "Google Tools", "Internship Certificate"]}
            />
          </div>
        </div>
      </section>

      {/* 3. DISCOUNT OFFER SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#0B3B7A] to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-[#38BDF8] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-black text-xs tracking-widest uppercase mb-5 border border-[#38BDF8]/30">Limited Time Offer</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Save Up To <span className="text-[#38BDF8] underline decoration-[#38BDF8]/40 underline-offset-4">50%</span> On Selected Internships
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Take the leap today. Gain practical experience, connect with industry experts, and get certified. Your future self will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0B3B7A] font-extrabold rounded-full h-14 px-10 text-md shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <Link href="#expert-form">
                Claim Offer
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0B3B7A] bg-transparent rounded-full h-14 px-10 font-bold transition-all cursor-pointer">
              <Link href="/courses">
                View Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. TALK WITH OUR EXPERT */}
      <section id="expert-form" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B3B7A]/5 rounded-full blur-3xl"></div>
            
            <div className="z-10 space-y-6">
                <div className="h-14 w-14 bg-[#0B3B7A]/10 rounded-2xl flex items-center justify-center">
                    <MessageSquareQuote className="h-7 w-7 text-[#0B3B7A]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] leading-tight">Speak With Our<br/> Learning Advisor</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-[500px]">
                    Feeling stuck or unsure which career path to choose? Drop your details below. Our career advisors will hop on a quick call to help you map out the perfect plan for your goals.
                </p>
            </div>

            <Card className="border-gray-100 shadow-xl bg-white/90 backdrop-blur-lg rounded-2xl p-8 z-10">
                {/* 100% SECURE FORM FIX INTEGRATED HERE */}
                <form className="space-y-5" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const data = Object.fromEntries(formData.entries());

                  try {
                    const response = await fetch('/api/lead', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });

                    if (response.ok) {
                      alert("Inquiry submitted successfully!");
                      form.reset();
                    } else {
                      const responseText = await response.text();
                      console.error("Validation failed:", responseText);
                      alert("Something went wrong. Please check your inputs.");
                    }
                  } catch (error) {
                    console.error("Fetch error:", error);
                    alert("Network error. Please try again.");
                  }
                }}>
                    <input type="hidden" name="formType" value="program-inquiry" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Full Name" name="name" placeholder="E.g. Sai Krishna" required={true} />
                        <InputField label="Email Address" name="email" placeholder="sai@example.com" type="email" required={true} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Mobile Number" name="phone" placeholder="+91 98765 43210" type="tel" required={true} />
                        <InputField label="Area Of Interest" name="interest" placeholder="E.g. Web Development" />
                    </div>
                    <InputField label="Current Qualification" name="qualification" placeholder="E.g. B.Tech Final Year" />
                    
                    <Button type="submit" className="w-full h-12 bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white font-bold rounded-lg text-md mt-6 shadow-md cursor-pointer">
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
            <p className="text-gray-600 text-lg">Don't just take our word for it. Hear from students who stepped out of their comfort zones and jumpstarted their careers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReviewCard name="Sai Krishna" review="The internship helped me understand real-world web development workflows. I finally stopped watching tutorials and started actually coding!" />
            <ReviewCard name="Harika Reddy" review="The mentorship sessions were a total game changer. Having an expert look at my code helped me build a portfolio I am incredibly proud of." />
            <ReviewCard name="Praveen Kumar" review="I gained practical experience that my college classes completely missed. This is exactly what recruiters are looking for. Highly recommended!" />
            <ReviewCard name="Nikhil Sharma" review="Excellent mentors, structured learning, and project-based assignments. The absolute best way to become genuinely industry-ready." />
            <ReviewCard name="Ananya V." review="I went from being completely lost in code to building and deploying full-stack apps. The mentors here genuinely care about your success." />
            <ReviewCard name="Rohan M." review="The AI & Prompt Engineering track blew my mind. I actually landed a freelance client before I even finished the final week of the program!" />
            <ReviewCard name="Priya S." review="Working on real company projects makes all the difference. I finally have a resume and LinkedIn profile that recruiters respond to." />
            <ReviewCard name="Aditya K." review="This isn't just another boring online class. They teach you how to think like a real developer, handle errors, and actually get hired." />
          </div>
        </div>
      </section>

      {/* 6. CAREER READINESS PROGRAMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-4">Your Career Launchpad</h2>
            <p className="text-gray-600 text-lg">We don't just teach theory. Our programs are built to give you the exact skills, hands-on experience, and industry polish you need to confidently land your first job.</p>
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

      {/* 7. WHY CHOOSE SAVVY INTERN */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B7A] mb-12">Why Choose Savvy Intern</h2>
          
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

function CourseCard({ title, price, icon: Icon, details, href }: any) {
  return (
    <Card className="border-gray-200 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(11,59,122,0.1)] transition-all duration-300 bg-white group flex flex-col justify-between hover:scale-[1.01]">
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
        <div className="px-7 pb-7 mt-auto">
            <Button asChild className="w-full h-12 bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white font-bold rounded-lg text-md transition-all group-hover:shadow-lg cursor-pointer">
              <Link href={href || "/courses"} className="w-full block">
                View Details
              </Link>
            </Button>
        </div>
    </Card>
  );
}

// 100% FIXED INPUT FIELD (Names added, CSS fixed to force dark text)
function InputField({ label, placeholder, type = "text", name, required = false }: any) {
    return (
        <div className="space-y-2">
            <Label className="font-semibold text-gray-700 text-sm">{label}</Label>
            <Input 
              type={type} 
              name={name}
              placeholder={placeholder} 
              required={required}
              className="h-11 border-gray-200 rounded-lg focus-visible:ring-[#0B3B7A] text-gray-900 bg-gray-50 placeholder:text-gray-400 hover:bg-gray-100 transition-colors" 
            />
        </div>
    );
}

function ReviewCard({ name, review }: any) {
  return (
    <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-[#38BDF8]/20 transition-colors">
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl"></div>
      
      <div className="flex text-orange-500 gap-1 mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-4.5 w-4.5 fill-current" />)}
      </div>
      
      <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative font-medium">"{review}"</p>
      
      <div className="flex items-center gap-4 mt-auto">
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