"use client";

import { 
  ArrowRight, Clock, Monitor, Award, 
  Code, Cpu, Database, Megaphone, PenTool, Shield, 
  CheckCircle2, FileText, PhoneCall, Rocket 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// --- STRICT TYPESCRIPT INTERFACES ---
interface StatBoxProps {
  number: string;
  label: string;
}

interface InternshipCardProps {
  title: string;
  image: string;
  duration: string;
  mode: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

interface ProcessStepProps {
  number: string;
  icon: React.ElementType;
  title: string;
}

interface BenefitCardProps {
  title: string;
  desc: string;
}

interface ListBenefitProps {
  title: string;
  desc: string;
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden scroll-smooth">
      
      {/* 1. HERO SECTION (With Premium Image Layout) */}
      <section className="bg-[#0B3B7A] text-white pt-20 pb-32 md:pt-28 md:pb-40 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8] w-fit mb-6">
                Launch Your Career
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 break-words">
                Industry-Focused <span className="text-[#38BDF8]">Internships</span>
              </h1>
              <p className="text-base md:text-xl text-blue-100 leading-relaxed mb-10">
                Gain practical experience, work on real-world projects, learn from industry mentors, and build the skills employers value most. Whether you're a student, fresher, or career switcher, our opportunities help you stand out.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="#opportunities">
                  <Button size="lg" className="w-full sm:w-auto bg-[#38BDF8] hover:bg-white text-[#0B3B7A] rounded-full h-14 px-10 font-extrabold shadow-lg transition-transform hover:scale-105 cursor-pointer">
                    Explore Opportunities
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full h-14 px-10 font-bold backdrop-blur-sm cursor-pointer">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Hero Image (LOCAL IMAGE) */}
            <div className="hidden lg:block relative">
              <div className="rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl relative z-10 h-[450px]">
                <img 
                  src="/careers-hero.jpg" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B7A]/80 via-transparent to-transparent"></div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#38BDF8]/30 rounded-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox number="500+" label="Learners Trained" />
          <StatBox number="30+" label="Programs" />
          <StatBox number="35+" label="Industry Mentors" />
          <StatBox number="100+" label="Projects Completed" />
        </div>
      </section>

      {/* 3. TRENDING OPPORTUNITIES (LOCAL IMAGES) */}
      <section id="opportunities" className="py-24 bg-gray-50/50 w-full pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Discover High-Demand Programs</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our internships are carefully designed to provide practical exposure, project experience, and industry-relevant learning across today's fastest-growing domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InternshipCard 
              title="Full Stack Web Development"
              image="/card-web.jpg"
              icon={Code} duration="8 Weeks" mode="Online"
              description="Work on modern web applications using HTML, CSS, JavaScript, React, APIs, and databases. Gain practical development experience."
              skills={["Frontend Development", "Backend Basics", "API Integration", "Git & GitHub", "Deployment"]}
            />
            <InternshipCard 
              title="Artificial Intelligence"
              image="/ai-course.jpg"
              icon={Cpu} duration="8 Weeks" mode="Online"
              description="Explore Artificial Intelligence, Prompt Engineering, AI Tools, Automation Workflows, and practical business applications."
              skills={["AI Fundamentals", "Generative AI", "Prompt Engineering", "AI Automation", "Business Use Cases"]}
            />
            <InternshipCard 
              title="Data Analytics"
              image="/data-science.jpg"
              icon={Database} duration="8 Weeks" mode="Online"
              description="Learn how organizations use data to drive decisions. Build dashboards, analyze datasets, and develop analytical thinking."
              skills={["Excel", "SQL", "Power BI", "Data Visualization", "Reporting"]}
            />
            <InternshipCard 
              title="Digital Marketing"
              image="/card-marketing.jpg"
              icon={Megaphone} duration="8 Weeks" mode="Online"
              description="Gain hands-on experience in SEO, content marketing, social media management, campaign planning, and digital growth."
              skills={["SEO", "Social Media Marketing", "Content Strategy", "Analytics", "Lead Generation"]}
            />
            <InternshipCard 
              title="UI/UX Design"
              image="/card-uiux.jpg"
              icon={PenTool} duration="6 Weeks" mode="Online"
              description="Design modern user experiences and interfaces using industry-standard tools while working on practical portfolio projects."
              skills={["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"]}
            />
            <InternshipCard 
              title="Cyber Security"
              image="/hacking.jpg"
              icon={Shield} duration="8 Weeks" mode="Online"
              description="Learn security fundamentals, threat awareness, network security concepts, and cybersecurity best practices."
              skills={["Cyber Security", "Network Security", "Risk Assessment", "Security Awareness", "Ethical Practices"]}
            />
          </div>
        </div>
      </section>

      {/* 4. INTERNSHIP PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Your journey to becoming industry-ready in 4 simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>
             <ProcessStep number="1" icon={FileText} title="Submit Application" />
             <ProcessStep number="2" icon={PhoneCall} title="Connect With Advisor" />
             <ProcessStep number="3" icon={CheckCircle2} title="Select Program" />
             <ProcessStep number="4" icon={Rocket} title="Start Learning" />
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE & BENEFITS */}
      <section className="py-24 bg-[#0B3B7A] text-white w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: 4 Key Benefits Cards */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">Why Choose SAVVY INTERN?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <BenefitCard title="Learn From Experts" desc="Receive guidance from experienced professionals who bring practical industry knowledge." />
                <BenefitCard title="Flexible Learning" desc="Access programs that fit your schedule. Learn from anywhere while balancing academics." />
                <BenefitCard title="Practical Projects" desc="Work on hands-on assignments that strengthen your portfolio." />
                <BenefitCard title="Accelerate Growth" desc="Develop technical skills, communication abilities, and professional confidence." />
              </div>
            </div>

            {/* Right: Benefits List (LOCAL IMAGE) */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-48 opacity-20 z-0">
                <img src="/benefits-bg.jpg" className="w-full h-full object-cover" alt="Office Collaboration" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B3B7A]"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8 text-[#38BDF8]">Benefits of Internships</h3>
                <ul className="space-y-6">
                  <ListBenefit title="Practical Industry Exposure" desc="Understand how real projects are executed in professional environments." />
                  <ListBenefit title="Skill Development" desc="Strengthen technical and professional competencies through guided learning." />
                  <ListBenefit title="Portfolio Enhancement" desc="Create meaningful projects that demonstrate your abilities." />
                  <ListBenefit title="Professional Networking" desc="Connect with mentors, peers, and professionals from diverse backgrounds." />
                  <ListBenefit title="Career Confidence" desc="Gain clarity about your interests, strengths, and career direction." />
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 w-full">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-6">Success Starts With Action</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Ready to gain practical experience and build valuable skills? Join SAVVY INTERN and take the next step toward your professional growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto bg-[#0B3B7A] hover:bg-[#38BDF8] hover:text-[#0B3B7A] text-white rounded-full h-14 px-10 font-bold shadow-lg cursor-pointer transition-colors">
                Apply Today
              </Button>
            </Link>
            <Link href="/support">
              {/* FIXED: Removed the dark/black colors and made it a clean, bright white button that glows blue on hover */}
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border-2 border-gray-200 text-[#0B3B7A] hover:border-[#38BDF8] hover:bg-blue-50/50 rounded-full h-14 px-10 font-bold cursor-pointer transition-all shadow-sm">
                Talk To An Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENTS (Fully Typed) ---

function StatBox({ number, label }: StatBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-3xl md:text-4xl font-black text-[#0B3B7A]">{number}</span>
      <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}

function InternshipCard({ title, image, duration, mode, icon: Icon, description, skills }: InternshipCardProps) {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group min-w-0">
      
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Floating Icon Box */}
        <div className="absolute bottom-4 left-4 h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform">
          <Icon className="h-6 w-6 text-[#0B3B7A]" />
        </div>
      </div>

      <div className="p-6 md:p-8 flex-grow flex flex-col pt-6">
        {/* Header Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
           <span className="flex items-center text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full"><Clock className="w-3.5 h-3.5 mr-1" /> {duration}</span>
           <span className="flex items-center text-xs font-bold bg-[#38BDF8]/10 text-[#0B3B7A] px-3 py-1 rounded-full border border-[#38BDF8]/20"><Monitor className="w-3.5 h-3.5 mr-1" /> {mode}</span>
           <span className="flex items-center text-xs font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200"><Award className="w-3.5 h-3.5 mr-1" /> Certificate</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-extrabold text-[#0B3B7A] leading-tight mb-4">{title} Intern</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 break-words">{description}</p>
        
        <div className="mt-auto">
          <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Key Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 pt-0 mt-auto">
        <Link href="/courses" className="block w-full">
          <Button className="w-full h-12 bg-white border-2 border-[#0B3B7A] text-[#0B3B7A] font-bold rounded-xl shadow-sm group-hover:bg-[#0B3B7A] group-hover:text-white transition-colors cursor-pointer flex items-center justify-center">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function ProcessStep({ number, icon: Icon, title }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center relative z-10 bg-white p-4">
      <div className="w-16 h-16 bg-[#0B3B7A] rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 text-white relative">
        <Icon className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#38BDF8] rounded-full flex items-center justify-center text-xs font-black border-2 border-white">
          {number}
        </div>
      </div>
      <h3 className="font-extrabold text-[#0B3B7A] text-lg text-center">{title}</h3>
    </div>
  );
}

function BenefitCard({ title, desc }: BenefitCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors">
      <h4 className="font-extrabold text-xl text-[#38BDF8] mb-3">{title}</h4>
      <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ListBenefit({ title, desc }: ListBenefitProps) {
  return (
    <li className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0 mt-1">
        <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
      </div>
      <div>
        <h4 className="font-bold text-white text-lg mb-1">{title}</h4>
        <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}