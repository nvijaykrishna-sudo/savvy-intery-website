"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, Target, Eye, BookOpen, TrendingUp, 
  Award, ShieldCheck, Lightbulb, Users, CheckCircle2, 
  Quote, GraduationCap, Briefcase, Code 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden scroll-smooth pb-20 md:pb-0">
      {/* NO Navbar or Footer imported here - Prevents the Double Header bug! */}

      {/* 1. HERO SECTION */}
      <section className="bg-[#0B3B7A] text-white pt-20 pb-28 md:pt-28 md:pb-36 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8] mb-6 shadow-sm">
            Empowering Future Professionals
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 break-words">
            Practical Learning <span className="text-[#38BDF8]">Beyond Theory</span>
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
            Our mission is to help students, fresh graduates, and aspiring professionals gain practical skills, industry exposure, and real-world experience through internship-focused programs. We bridge the gap between academic knowledge and workplace expectations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0B3B7A] rounded-full h-14 px-10 font-extrabold shadow-lg transition-transform hover:scale-105">
                Explore Programs
              </Button>
            </Link>
            <Link href="/support">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full h-14 px-10 font-bold backdrop-blur-sm">
                Connect With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & OUR STORY (Split Section) */}
      <section className="py-24 bg-white w-full border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] flex items-center gap-3">
                <BookOpen className="text-[#38BDF8] w-8 h-8 flex-shrink-0" /> About SAVVY INTERN
              </h2>
              <h3 className="text-xl font-bold text-gray-900">Building Skills. Creating Opportunities.</h3>
              <p className="text-gray-600 leading-relaxed">
                SAVVY INTERN is an innovative learning and internship platform dedicated to helping learners develop industry-relevant skills through practical training and guided internship experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our programs are designed to prepare individuals for today's evolving professional landscape by combining structured learning, expert mentorship, and hands-on projects. We focus on creating meaningful learning experiences that encourage growth, confidence, and career readiness.
              </p>
            </div>

            <div className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] flex items-center gap-3">
                <TrendingUp className="text-[#38BDF8] w-8 h-8 flex-shrink-0" /> Our Story
              </h2>
              <h3 className="text-xl font-bold text-gray-900">Why SAVVY INTERN Was Created</h3>
              <p className="text-gray-600 leading-relaxed">
                Many learners complete their education without gaining practical exposure to real-world work environments. SAVVY INTERN was established to solve this challenge by creating opportunities for individuals to learn through experience.
              </p>
              <div className="bg-[#0B3B7A]/5 p-6 rounded-2xl border border-[#0B3B7A]/10 mt-6">
                <p className="font-bold text-[#0B3B7A] text-lg italic">
                  "Our goal is simple: To make practical learning accessible, engaging, and impactful for every learner."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEET OUR VISIONARY (Photo Removed, Quote Focus) */}
      <section className="bg-[#0B3B7A] py-24 w-full">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">Meet Our Visionary</h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-14 rounded-3xl relative shadow-2xl">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[#38BDF8] opacity-50" />
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed italic mb-8 relative z-10 font-medium">
              "Success begins when learning meets action. At SAVVY INTERN, we strive to create opportunities that help learners transform knowledge into practical skills and meaningful growth. Our leadership believes that knowledge becomes valuable only when it is applied."
            </p>
            <div className="flex flex-col items-center justify-center border-t border-white/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-1">Founder & CEO</h3>
              <p className="text-[#38BDF8] font-semibold tracking-wide uppercase text-sm">Savvy Intern</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-24 bg-white text-gray-900 w-full border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-[#38BDF8]/30 transition-colors">
              <Eye className="w-12 h-12 text-[#38BDF8] mb-6" />
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-4">Our Vision</h2>
              <h3 className="text-lg text-gray-900 font-bold mb-4">Creating Career-Ready Learners for Tomorrow</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to become a trusted platform that empowers learners through practical education, mentorship, and industry-focused experiences. We aspire to build a future where every learner has access to opportunities that help them grow professionally, develop confidence, and unlock their full potential.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-[#38BDF8]/30 transition-colors">
              <Target className="w-12 h-12 text-[#38BDF8] mb-6" />
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-4">Our Mission</h2>
              <h3 className="text-lg text-gray-900 font-bold mb-4">Transforming Learning Into Real-World Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver high-quality internship programs, skill development opportunities, and mentorship experiences that prepare learners for professional success. We are committed to helping individuals learn, apply, and grow through practical experiences that make a lasting impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ValueCard icon={BookOpen} title="Learning With Purpose" desc="We believe education should create meaningful outcomes and practical value." />
            <ValueCard icon={TrendingUp} title="Continuous Growth" desc="We encourage curiosity, adaptability, and lifelong learning." />
            <ValueCard icon={Award} title="Excellence In Everything" desc="We strive to deliver high-quality learning experiences and support." />
            <ValueCard icon={ShieldCheck} title="Integrity & Trust" desc="We build relationships based on transparency, honesty, and accountability." />
            <ValueCard icon={Lightbulb} title="Innovation & Creativity" desc="We embrace new ideas, technologies, and approaches that improve learning outcomes." />
            <ValueCard icon={Users} title="Student-Centric Approach" desc="Every decision we make is focused on helping learners succeed." />
          </div>
        </div>
      </section>

      {/* 6. TIMELINE & IMPACT (ANIMATED STATS) */}
      <section className="py-24 bg-white w-full border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            
            {/* Left: Timeline */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-10">Our Journey</h2>
              <div className="space-y-8 border-l-4 border-[#38BDF8] ml-3 pl-8 relative">
                <TimelineItem year="2024" title="Idea & Vision" desc="The blueprint for a practical learning platform was born." />
                <TimelineItem year="2025" title="Platform Launch & First 100" desc="SAVVY INTERN officially launched, training our first batch of students." />
                <TimelineItem year="2026" title="Program Expansion" desc="Expanded our internship tracks to cover AI, Data, and Marketing." />
                <TimelineItem year="Future" title="Global Learning Community" desc="Aiming to connect learners and mentors across the globe." />
              </div>
            </div>

            {/* Right: Animated Stats */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-2 gap-8">
                <AnimatedStat end={500} suffix="+" label="Learners Trained" />
                <AnimatedStat end={30} suffix="+" label="Learning Programs" />
                <AnimatedStat end={35} suffix="+" label="Industry Mentors" />
                <AnimatedStat end={95} suffix="%" label="Learner Satisfaction" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US & MENTORS (Photos Removed, Domain Focus) */}
      <section className="py-24 bg-gray-50 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">Why Choose SAVVY INTERN?</h2>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-20">
            <FeatureBadge text="Industry-Relevant Programs" />
            <FeatureBadge text="Expert Mentorship" />
            <FeatureBadge text="Practical Project Experience" />
            <FeatureBadge text="Flexible Learning Environment" />
            <FeatureBadge text="Career Development Support" />
            <FeatureBadge text="Internship Certification" />
          </div>

          {/* Mentors Showcase (Replaced with Domain Expertise) */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center text-[#0B3B7A] mb-10">Guided By Industry Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-[#0B3B7A]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3B7A] mb-3">Tech Leadership</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Senior Software Engineers and Architects guiding our Full Stack, AI, and Cloud computing cohorts.
                </p>
                <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full">
                  50+ Mentors
                </span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-[#0B3B7A]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3B7A] mb-3">Data & Analytics</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Data Scientists and Analysts teaching you how to draw actionable insights from raw numbers.
                </p>
                <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full">
                  30+ Mentors
                </span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-[#0B3B7A]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3B7A] mb-3">Business Strategy</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Product Managers and Marketing Heads ensuring you understand the business context of your work.
                </p>
                <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full">
                  20+ Mentors
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-[#0B3B7A] text-white w-full border-t border-white/10 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Join The SAVVY INTERN Community</h2>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed font-medium">
            Become part of a growing network of learners, mentors, and professionals dedicated to continuous learning and personal growth. Together, let's build skills, create opportunities, and shape successful futures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto bg-[#38BDF8] hover:bg-white text-[#0B3B7A] rounded-full h-14 px-10 font-extrabold shadow-lg transition-colors">
                Start Learning
              </Button>
            </Link>
            <Link href="/support">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 hover:bg-white/10 text-white rounded-full h-14 px-10 font-bold transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENTS ---

function ValueCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#38BDF8]/30 transition-all text-center group">
      <div className="w-16 h-16 mx-auto bg-gray-50 group-hover:bg-[#38BDF8]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors">
        <Icon className="w-8 h-8 text-[#0B3B7A] group-hover:text-[#38BDF8] transition-colors" />
      </div>
      <h3 className="text-xl font-extrabold text-[#0B3B7A] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function TimelineItem({ year, title, desc }: any) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-[#38BDF8] rounded-full"></div>
      <h4 className="text-xl font-black text-[#38BDF8] mb-1">{year}</h4>
      <h5 className="text-lg font-bold text-gray-900 mb-2">{title}</h5>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function FeatureBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center p-3 bg-white border border-gray-200 shadow-sm rounded-full hover:border-[#38BDF8] transition-colors cursor-default">
      <CheckCircle2 className="h-5 w-5 text-[#38BDF8] mr-3 flex-shrink-0" />
      <span className="font-semibold text-gray-700 text-sm">{text}</span>
    </div>
  );
}

// Custom Safe Animated Counter Component
function AnimatedStat({ end, suffix, label }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps
    
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
    <div className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="text-3xl md:text-5xl font-black text-[#38BDF8] mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}