"use client";

import React, { useState, useEffect } from "react";

export function HeroAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      route: "Student → Intern",
      title: "Registration & Onboarding",
      description: "We map your ambitions to the perfect industry-focused track.",
      points: ["Program Shortlisting", "Profile Setup", "Skill Assessment", "Mentor Allocation"],
      quote: "Every expert was once a beginner.",
      emoji: "🗺️",
    },
    {
      id: "02",
      route: "Theory → Practice",
      title: "Complete Successfully",
      description: "Master practical skills by building real-world projects under expert guidance.",
      points: ["Live Masterclasses", "Real-world Projects", "Code Reviews", "Progress Tracking"],
      quote: "Experience is the best teacher.",
      emoji: "💻",
    },
    {
      id: "03",
      route: "Projects → Portfolio",
      title: "Get Certificates",
      description: "Earn industry-recognized credentials that make your resume undeniably strong.",
      points: ["Skill Verification", "Portfolio Building", "Performance Review", "Official Credentials"],
      quote: "Proof of your hard work and dedication.",
      emoji: "🎓",
    },
    {
      id: "04",
      route: "Intern → Professional",
      title: "Placement Assistance",
      description: "We connect you with top hiring partners and help you land your dream job.",
      points: ["Resume Engineering", "Mock Interviews", "Direct Referrals", "Offer Negotiation"],
      quote: "Your success is our ultimate goal.",
      emoji: "🎯",
    },
  ];

  // Auto-cycle through the steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 4500); // Slightly slower to let them admire the animation
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] font-sans">
      
      {/* Custom Keyframes for the premium color shifting */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}} />

      {/* Decorative Background Flare */}
      <div className="absolute top-10 right-10 -z-10 opacity-40 pointer-events-none w-40 h-40 bg-[#2EC1E3] blur-[80px] rounded-full mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-10 left-10 -z-10 opacity-30 pointer-events-none w-40 h-40 bg-[#A855F7] blur-[80px] rounded-full mix-blend-multiply"></div>

      <h3 className="text-sm font-bold tracking-widest text-[#0B3B7A] uppercase mb-6 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2EC1E3] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2EC1E3]"></span>
        </span>
        The Savvy Journey
      </h3>

      <div className="relative">
        {/* Animated SVG Progress Line */}
        <div className="absolute left-5 top-2 bottom-2 w-1 bg-gray-100 rounded-full overflow-hidden z-0 shadow-inner">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#2EC1E3] via-[#A855F7] to-[#0B3B7A] transition-all duration-1000 ease-out"
            style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <div 
                key={step.id} 
                onClick={() => setActiveStep(index)}
                className={`relative pl-14 pr-2 cursor-pointer transition-all duration-500 ease-out ${
                  isActive ? "opacity-100 scale-105 z-20 my-6" : "opacity-50 scale-95 hover:opacity-80 my-2"
                }`}
              >
                {/* Checkpoint Node */}
                <div className={`absolute left-[5px] top-4 flex items-center justify-center w-9 h-9 rounded-full border-2 z-10 transition-all duration-500 ${
                  isActive ? "bg-white border-transparent shadow-[0_0_20px_rgba(46,193,227,0.6)]" : 
                  isPast ? "bg-gradient-to-br from-[#2EC1E3] to-[#0B3B7A] border-transparent" : "bg-white border-gray-200"
                }`}>
                  {isPast ? (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : isActive ? (
                    // Inner animated ring for active state
                    <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-r from-[#2EC1E3] to-[#A855F7] animate-gradient">
                       <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0B3B7A] animate-pulse" />
                       </div>
                    </div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  )}
                </div>

                {/* Animated Gradient Border Wrapper */}
                <div className={`rounded-2xl transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? "p-[2px] bg-gradient-to-r from-[#2EC1E3] via-[#A855F7] to-[#0B3B7A] animate-gradient shadow-[0_10px_30px_-10px_rgba(46,193,227,0.7)]" 
                    : "p-[1px] bg-white border border-gray-100"
                }`}>
                  
                  {/* Inner White Card */}
                  <div className={`bg-white rounded-[14px] w-full h-full relative transition-colors duration-500 ${isActive ? "bg-opacity-95 backdrop-blur-xl" : ""}`}>
                    
                    {/* Active Card Subtle Background Glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-purple-50/30 opacity-60 rounded-[14px] pointer-events-none"></div>
                    )}

                    {/* Persistent Header */}
                    <div className={`relative z-10 p-4 flex items-center justify-between ${isActive ? "pb-2" : ""}`}>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-[#A855F7]" : "text-[#2EC1E3]"}`}>
                          {step.route}
                        </span>
                        {/* Shifting Text Gradient for Active Title */}
                        <h4 className={`font-extrabold transition-all duration-300 ${
                          isActive 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#0B3B7A] to-[#2EC1E3] text-xl" 
                            : "text-gray-600 text-base"
                        }`}>
                          {step.title}
                        </h4>
                      </div>
                      <span className={`text-3xl ml-2 drop-shadow-md transition-transform duration-500 ${isActive ? "scale-125 -rotate-6" : "scale-100 grayscale"}`}>
                        {step.emoji}
                      </span>
                    </div>

                    {/* Expandable Body (Accordion) */}
                    <div 
                      className={`relative z-10 transition-all duration-500 ease-in-out px-4 ${
                        isActive ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-2 mb-4">
                        {step.points.map((point, i) => (
                          <div key={i} className="flex items-center text-[11px] font-bold text-gray-800 bg-white border border-gray-100 shadow-sm px-2.5 py-1.5 rounded-lg hover:border-[#2EC1E3] transition-colors">
                            <svg className="w-3.5 h-3.5 text-[#2EC1E3] mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-l-4 border-gradient-to-b from-[#2EC1E3] to-[#A855F7] bg-gray-50/50 pl-3 py-2 rounded-r-lg mt-3">
                        <p className="text-xs italic text-gray-600 font-semibold">
                          "{step.quote}"
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}