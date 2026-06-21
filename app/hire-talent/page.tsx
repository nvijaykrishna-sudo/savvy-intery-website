"use client";

import { 
  CheckCircle2, Users, Briefcase, Zap, 
  MonitorPlay, Code, Palette, TrendingUp, 
  ChevronRight, Building2, Globe, Phone, Mail, 
  MessageSquare, Star, Megaphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HireFromUsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden scroll-smooth pb-20 md:pb-0">
      {/* NO Navbar or Footer imports! We keep it clean to avoid double-headers. */}

      {/* 1. HERO SECTION */}
      <section className="bg-[#0B3B7A] text-white pt-20 pb-28 md:pt-28 md:pb-36 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8] mb-6 shadow-sm">
            Partner With SAVVY INTERN
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 break-words">
            Hire Skilled, <span className="text-[#38BDF8]">Internship-Ready</span> Talent
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
            Connect with motivated learners who have completed practical training, worked on real-world projects, and developed industry-relevant skills. Whether you're a startup or an enterprise, find candidates ready to contribute from day one.
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
            <StatBox number="300+" label="Internship Completions" />
            <StatBox number="100+" label="Projects Delivered" />
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
            {/* Placeholder Logos - Easy to replace with real images later */}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Why Hire Through SAVVY INTERN?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We focus on developing skilled individuals through structured mentorship and project-based learning, ensuring they become valuable contributors in modern workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <WhyCard 
              icon={Users} title="Pre-Trained Candidates"
              desc="Access candidates who have already completed structured learning programs and practical projects, reducing onboarding time and training costs."
            />
            <WhyCard 
              icon={Briefcase} title="Project-Based Experience"
              desc="Our learners gain hands-on experience through real-world assignments and portfolio projects, helping employers evaluate practical capabilities."
            />
            <WhyCard 
              icon={Zap} title="Industry-Relevant Skills"
              desc="Candidates are trained using current technologies, tools, and professional workflows aligned with market requirements."
            />
            <WhyCard 
              icon={TrendingUp} title="Faster Hiring Process"
              desc="Connect directly with suitable candidates and streamline your recruitment process through our vast talent network."
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
      <section className="py-24 bg-[#0B3B7A] text-white w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Real Growth, Real Outcomes</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our candidates don't just learn theory; they build real projects. Here is a glimpse of what they achieve.
            </p>
          </div>

          {/* Success Stories Grid */}
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

          {/* Recruiter Testimonial */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center max-w-4xl mx-auto">
            <Star className="w-8 h-8 text-orange-400 mx-auto mb-6 fill-current" />
            <p className="text-xl md:text-2xl font-medium italic text-white mb-6 leading-relaxed">
              "We hired two Full Stack developers from SAVVY INTERN. Their project-based training was evident from day one. They required minimal onboarding and started contributing to our codebase almost immediately."
            </p>
            <p className="font-bold text-[#38BDF8]">Sarah Jenkins — Technical Recruiter, TechCorp</p>
          </div>
        </div>
      </section>

      {/* 7. RECRUITMENT PROCESS (4 Steps) */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Streamlined Recruitment Process</h2>
            <p className="text-gray-600 text-lg">Hire top talent in four simple steps.</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Left Column: FAQ */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-extrabold text-[#0B3B7A]">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <FAQItem q="What types of candidates are available?" a="We provide access to learners from various domains including technology, marketing, analytics, design, and business operations." />
                <FAQItem q="Are candidates trained before joining?" a="Yes. Candidates complete structured learning programs, assignments, and practical projects before becoming part of our talent network." />
                <FAQItem q="Can startups hire through SAVVY INTERN?" a="Absolutely. Startups, small businesses, and growing organizations can connect with suitable talent based on their requirements." />
                <FAQItem q="Can we review portfolios before interviews?" a="Yes. Candidate portfolios and project work can be shared during the evaluation process." />
                <FAQItem q="How quickly can we connect with candidates?" a="Depending on the role, candidate matching can begin shortly after receiving your hiring requirements." />
                <FAQItem q="Is there any obligation after submitting the form?" a="No. Submitting the hiring request simply allows our team to understand your requirements." />
              </div>
            </div>

            {/* Right Column: Giant Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(11,59,122,0.1)] border border-gray-100 overflow-hidden">
                <div className="bg-[#0B3B7A] p-8 md:p-10 text-white">
                  <h3 className="text-3xl font-extrabold mb-2">Tell Us About Your Hiring Needs</h3>
                  <p className="text-blue-100">Submit your requirements and we'll find the perfect match.</p>
                </div>
                
                <form className="p-8 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Company Name *</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="TechCorp Inc." required />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Hiring Contact Name *</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Designation</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="HR Manager" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Official Email Address *</label>
                      <input type="email" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Mobile Number *</label>
                      <input type="tel" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Company Website</label>
                      <input type="url" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="https://company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Industry</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="E-commerce" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Job / Internship Role *</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="Frontend Developer" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700 text-sm">Required Skills *</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="React, Next.js, Tailwind CSS" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Number Of Openings</label>
                      <input type="number" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" placeholder="1" min="1" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-gray-700 text-sm">Work Mode</label>
                      <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all bg-white">
                        <option>Remote</option>
                        <option>Hybrid</option>
                        <option>Onsite</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700 text-sm">Additional Requirements</label>
                    <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all" rows={4} placeholder="Any specific requirements..."></textarea>
                  </div>

                  <Button className="w-full h-14 bg-[#0B3B7A] hover:bg-[#38BDF8] hover:text-[#0B3B7A] text-white font-extrabold rounded-xl shadow-lg transition-all text-lg">
                    Submit Hiring Request
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-6">Partner With SAVVY INTERN</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Build your team with skilled, motivated, and internship-ready talent. Let's help you find the right candidates faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#hiring-form">
              <Button size="lg" className="w-full sm:w-auto bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white rounded-full h-14 px-10 font-bold shadow-lg">
                Hire Talent Now
              </Button>
            </a>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-200 text-[#0B3B7A] hover:bg-gray-50 rounded-full h-14 px-10 font-bold">
              Schedule A Discussion
            </Button>
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

// --- HELPER COMPONENTS (Bulletproof layout to prevent mixed letters) ---

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
      <p className="text-gray-600 leading-relaxed break-words">{desc}</p>
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
      <p className="text-blue-50 leading-relaxed mb-8 flex-grow italic break-words">"{story}"</p>
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
      <p className="text-sm text-gray-600 text-center leading-relaxed break-words">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: any) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 min-w-0">
      <h4 className="font-bold text-gray-900 mb-3 break-words leading-relaxed">{q}</h4>
      <p className="text-gray-600 text-sm leading-relaxed break-words">{a}</p>
    </div>
  );
}