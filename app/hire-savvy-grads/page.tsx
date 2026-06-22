"use client"; 

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2, Users, Briefcase, Zap, 
  MonitorPlay, Code, Palette, TrendingUp, 
  ChevronRight, Building2, Globe, Phone, Mail, 
  MessageSquare, Star, Megaphone, ChevronDown, ChevronUp
} from 'lucide-react';

export default function HireSavvyGradsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of candidates are available?",
      answer: "We provide access to Savvy Grads from various domains including technology, marketing, analytics, design, and business operations.",
    },
    {
      question: "Are candidates trained before joining?",
      answer: "Yes. Every Savvy Grad completes structured learning programs, rigorous assignments, and practical projects before becoming part of our talent network.",
    },
    {
      question: "Can startups hire Savvy Grads?",
      answer: "Absolutely. Startups, small businesses, and growing organizations can easily connect with suitable talent based on their specific requirements.",
    },
    {
      question: "Can we review portfolios before interviews?",
      answer: "Yes. Candidate portfolios and live project work are shared during the evaluation process so you can see their actual code/work.",
    },
    {
      question: "How quickly can we connect with candidates?",
      answer: "Depending on the role, candidate matching can begin within 24-48 hours after receiving your hiring requirements.",
    },
    {
      question: "Is there any obligation after submitting the form?",
      answer: "No. Submitting the hiring request simply allows our team to understand your requirements with zero upfront commitment.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden scroll-smooth pb-20 md:pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B3B7A] text-white pt-20 pb-28 md:pt-28 md:pb-36 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-[#38BDF8] rounded-full mix-blend-screen blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8] mb-6 shadow-sm tracking-widest uppercase">
            The Savvy Intery Talent Network
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 break-words">
            Hire <span className="text-[#38BDF8]">Savvy Grads</span> For Your Team
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
            Connect with motivated learners who have completed practical training, worked on real-world projects, and developed industry-relevant skills. Find candidates ready to contribute from day one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#hiring-form">
              <Button size="lg" className="w-full sm:w-auto bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0B3B7A] rounded-full h-14 px-10 font-extrabold shadow-lg transition-transform hover:scale-105">
                Hire Talent
              </Button>
            </a>
            <a href="#hiring-form">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full h-14 px-10 font-bold backdrop-blur-sm">
                Talk To Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS & IMPACT SECTION (Floating) */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest">Our Impact</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-gray-100">
            <StatBox number="500+" label="Learners Trained" />
            <StatBox number="300+" label="Internships Completed" />
            <StatBox number="100+" label="Live Projects" />
            <StatBox number="50+" label="Hiring Partners" />
            <StatBox number="95%" label="Completion Rate" />
          </div>
        </div>
      </section>

      {/* 3. COMPANY LOGOS (Trusted By) */}
      <section className="py-16 bg-white border-b border-gray-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">Trusted By Growing Businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <h2 className="text-2xl font-black text-gray-800">TechCorp</h2>
            <h2 className="text-2xl font-black text-gray-800">Innovate.io</h2>
            <h2 className="text-2xl font-black text-gray-800">GlobalStart</h2>
            <h2 className="text-2xl font-black text-gray-800">NexusData</h2>
            <h2 className="text-2xl font-black text-gray-800">CloudSync</h2>
          </div>
        </div>
      </section>

      {/* 4. WHY HIRE THROUGH US */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Why Hire Savvy Grads?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We focus on developing skilled individuals through structured mentorship and project-based learning, ensuring they become valuable contributors in modern workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <WhyCard 
              icon={Users} title="Pre-Trained Candidates"
              desc="Access Savvy Grads who have already completed structured learning programs and practical projects, reducing onboarding time and training costs."
            />
            <WhyCard 
              icon={Briefcase} title="Project-Based Experience"
              desc="Our learners gain hands-on experience through real-world assignments and portfolio projects, helping employers evaluate practical capabilities."
            />
            <WhyCard 
              icon={Zap} title="Industry-Relevant Skills"
              desc="Candidates are trained using current technologies, tools, and professional workflows strictly aligned with modern market requirements."
            />
            <WhyCard 
              icon={TrendingUp} title="Faster Hiring Process"
              desc="Connect directly with suitable candidates and streamline your recruitment process through our curated talent network."
            />
          </div>
        </div>
      </section>

      {/* 5. TALENT CATEGORIES */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-16 text-center">Talent Categories Available</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard 
              icon={Code} title="Technology"
              skills={["Full Stack Dev", "Frontend Dev", "Java Development", "AI & Gen AI", "Data Analytics", "Cyber Security"]}
            />
            <CategoryCard 
              icon={Megaphone} title="Marketing"
              skills={["Digital Marketing", "SEO", "Content Marketing", "Social Media"]}
            />
            <CategoryCard 
              icon={Palette} title="Design"
              skills={["UI/UX Design", "Graphic Design", "Product Design"]}
            />
            <CategoryCard 
              icon={Building2} title="Business"
              skills={["Business Dev", "Customer Success", "Operations", "Sales Support"]}
            />
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO & SUCCESS STORIES */}
      <section className="py-24 bg-[#0B3B7A] text-white w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Real Growth, Real Outcomes</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our candidates don't just learn theory; they build real projects. Here is a glimpse of what Savvy Grads achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <SuccessCard 
              name="Rahul" role="Web Developer"
              story="After completing the Full Stack Internship, Rahul built multiple portfolio projects and secured opportunities to work on live client websites."
            />
            <SuccessCard 
              name="Priya" role="Digital Marketer"
              story="Priya developed practical SEO skills through our program and successfully managed social media campaigns for local businesses."
            />
            <SuccessCard 
              name="Akhil" role="Data Analyst"
              story="Completed analytics projects using Excel, SQL, and Power BI, helping him build a strong portfolio and gain practical industry exposure."
            />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center max-w-4xl mx-auto shadow-xl">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-6 fill-current" />
            <p className="text-xl md:text-2xl font-medium italic text-white mb-6 leading-relaxed">
              "We hired two Full Stack Savvy Grads. Their project-based training was evident from day one. They required minimal onboarding and started contributing to our codebase almost immediately."
            </p>
            <p className="font-bold text-[#38BDF8] uppercase tracking-wider text-sm">Sarah Jenkins — Technical Recruiter, TechCorp</p>
          </div>
        </div>
      </section>

      {/* 7. RECRUITMENT PROCESS (4 Steps) */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Streamlined Recruitment Process</h2>
            <p className="text-gray-600 text-lg">Hire Savvy Grads in four simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
             <ProcessStep number="1" title="Submit Requirement" desc="Tell us about your company, role, and skill requirements." />
             <ProcessStep number="2" title="Talent Matching" desc="Our team identifies suitable candidates based on your needs." />
             <ProcessStep number="3" title="Interview & Eval" desc="Review portfolios, conduct interviews, and assess fit." />
             <ProcessStep number="4" title="Hire With Confidence" desc="Select the best candidate and begin onboarding." />
          </div>
        </div>
      </section>

      {/* 8. HIRE TALENT FORM & FAQ */}
      <section className="py-24 bg-white w-full" id="hiring-form">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Giant Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(11,59,122,0.1)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="bg-[#0B3B7A] p-8 md:p-10 text-white">
                <h3 className="text-3xl font-extrabold mb-2">Tell Us About Your Hiring Needs</h3>
                <p className="text-blue-100 font-medium">Submit your requirements and we'll match you with the perfect Savvy Grad.</p>
              </div>

              <form className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Company Name *" placeholder="e.g. Acme Corp" />
                  <InputField label="Hiring Contact Name *" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Official Email Address *" placeholder="john@acmecorp.com" type="email" />
                  <InputField label="Mobile Number *" placeholder="+91 98765 43210" type="tel" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Designation" placeholder="e.g. HR Manager" />
                  <InputField label="Company Website" placeholder="https://www.acmecorp.com" />
                </div>
                
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <InputField label="Industry" placeholder="e.g. FinTech, SaaS" />
                    <InputField label="Job / Internship Role *" placeholder="e.g. Frontend Developer" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <InputField label="Required Skills *" placeholder="e.g. React, Node.js" />
                    <InputField label="Number Of Openings" placeholder="e.g. 3" type="number" />
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Label className="font-bold text-gray-800 text-sm">Work Mode *</Label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center space-x-2 cursor-pointer bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#38BDF8] transition-all">
                        <input type="radio" name="workMode" value="Remote" className="accent-[#0B3B7A]" />
                        <span className="text-sm font-medium text-gray-700">Remote</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#38BDF8] transition-all">
                        <input type="radio" name="workMode" value="Hybrid" className="accent-[#0B3B7A]" />
                        <span className="text-sm font-medium text-gray-700">Hybrid</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#38BDF8] transition-all">
                        <input type="radio" name="workMode" value="Onsite" className="accent-[#0B3B7A]" />
                        <span className="text-sm font-medium text-gray-700">Onsite</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <Label className="font-bold text-gray-800 text-sm">Additional Requirements</Label>
                    <Textarea placeholder="Any specific requirements, shift timings, or stipend details..." className="min-h-[100px] border-gray-200 rounded-xl focus-visible:ring-[#0B3B7A] resize-none" />
                  </div>
                </div>

                <Button className="w-full h-14 bg-[#0B3B7A] hover:bg-[#38BDF8] hover:text-[#0B3B7A] text-white font-extrabold rounded-xl shadow-lg transition-all text-lg">
                  Submit Hiring Request
                </Button>
              </form>
            </div>

            {/* Right Column: FAQ & Trust Badge */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-extrabold text-[#0B3B7A] mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      <button 
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors"
                      >
                        <h4 className="font-bold text-gray-900 text-sm pr-4">{faq.question}</h4>
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                        )}
                      </button>
                      
                      {openFaq === index && (
                        <div className="px-5 pb-5 pt-1 bg-white">
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-[#0B3B7A] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Star className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-extrabold text-xl mb-2">Quality Assured</h4>
                  <p className="text-blue-200 text-sm font-medium leading-relaxed mb-6">Every candidate goes through rigorous technical assessments and mentor reviews before being recommended to you.</p>
                  <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" /> Zero Initial Placement Fees
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-6">Partner With Savvy Intery</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
            Build your team with skilled, motivated, and internship-ready talent. Let's help you find the right candidates faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#hiring-form">
              <Button size="lg" className="w-full sm:w-auto bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white rounded-full h-14 px-10 font-bold shadow-lg transition-transform hover:scale-105">
                Hire Savvy Grads
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING ACTION BUTTON */}
      <a href="#hiring-form" className="fixed bottom-6 right-6 z-50 md:hidden">
        <div className="bg-[#38BDF8] text-[#0B3B7A] p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white animate-bounce">
          <MessageSquare className="w-6 h-6" />
        </div>
      </a>
      <a href="#hiring-form" className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-2 bg-[#38BDF8] text-[#0B3B7A] hover:bg-[#0B3B7A] hover:text-white transition-colors px-6 py-3 rounded-full shadow-2xl font-bold border-2 border-white">
        Request Talent <ChevronRight className="w-4 h-4" />
      </a>

    </main>
  );
}

// --- HELPER COMPONENTS ---

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col gap-2 min-w-0 p-2">
      <span className="text-3xl md:text-4xl font-black text-[#0B3B7A] break-words">{number}</span>
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider break-words">{label}</span>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-start min-w-0">
      <div className="w-14 h-14 bg-[#0B3B7A]/5 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-[#0B3B7A]" />
      </div>
      <h3 className="text-xl font-extrabold text-[#0B3B7A] mb-4 break-words">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed break-words">{desc}</p>
    </div>
  );
}

function CategoryCard({ icon: Icon, title, skills }: any) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col min-w-0 hover:border-[#38BDF8] transition-colors">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#38BDF8]" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 break-words">{title}</h3>
      </div>
      <ul className="space-y-3 mt-auto">
        {skills.map((skill: string, i: number) => (
          <li key={i} className="flex items-start text-sm font-semibold text-gray-600 break-words">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] mr-2 flex-shrink-0 mt-0.5" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SuccessCard({ name, role, story }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col min-w-0">
      <p className="text-blue-50 font-medium leading-relaxed mb-8 flex-grow italic break-words">"{story}"</p>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
        <div className="w-12 h-12 bg-[#38BDF8] rounded-full flex items-center justify-center text-[#0B3B7A] font-black text-xl flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-white truncate">{name}</p>
          <p className="text-sm text-[#38BDF8] truncate">{role}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }: any) {
  return (
    <div className="flex flex-col items-center relative z-10 bg-gray-50 p-4 min-w-0">
      <div className="w-14 h-14 bg-[#0B3B7A] rounded-full flex items-center justify-center border-4 border-white shadow-md mb-4 text-white font-black text-xl flex-shrink-0">
        {number}
      </div>
      <h3 className="font-extrabold text-[#0B3B7A] text-lg text-center mb-2 break-words">{title}</h3>
      <p className="text-sm text-gray-600 font-medium text-center leading-relaxed break-words">{desc}</p>
    </div>
  );
}

function InputField({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-2">
      <Label className="font-bold text-gray-800 text-sm">{label}</Label>
      <Input type={type} placeholder={placeholder} className="h-12 border-gray-200 rounded-xl focus-visible:ring-[#0B3B7A] bg-gray-50/50 hover:bg-gray-50 transition-colors" />
    </div>
  );
}