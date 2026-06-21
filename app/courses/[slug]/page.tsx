import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/lib/courses";
import { 
  Clock, PlayCircle, Star, Users, CheckCircle2, 
  MonitorPlay, Layers, GraduationCap, HelpCircle, UserCheck, Trophy, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Made this an async Server Component (Removed "use client" from the top)
export default async function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Safely await the params Promise to get the slug
  const { slug } = await params;

  // 3. Find the course using the real slug string
  const course = courses.find((c) => c.id === slug);

  if (!course) {
    notFound();
  }

  // Fallback dynamic data
  const dynamicAboutText = `Our ${course.title} internship offers a fantastic opportunity to dive deep into the field and gain hands-on experience with cutting-edge technologies. You'll acquire the essential skills needed to build robust solutions. This practical experience will not only enhance your technical abilities but also make you highly attractive to employers. Through this internship, you'll develop a career-ready skill set with expert guidance and exposure to real-world applications. You'll be well-equipped to take on high-demand roles and make an impact in the fast-evolving industry. This internship is your gateway to unlocking exciting career opportunities and advancing in the world of ${course.title}.`;

  const defaultTopics = [
    "Introduction and Core Fundamentals",
    "Setting up the Development Environment",
    "Hands-on Practice with Real-world Scenarios",
    "Advanced Concepts and Best Practices",
    "Final Capstone Project Implementation"
  ];

  const defaultResults = [
    "Build and deploy scalable projects from scratch.",
    "Develop a strong, employer-ready portfolio.",
    "Master highly in-demand industry tools and techniques.",
    "Gain an industry-recognized internship completion certificate."
  ];

  const defaultFaqs = [
    { question: "Do I need prior experience?", answer: "Our programs accommodate beginners while providing deep insights for intermediate learners. We start with basics and progress to advanced topics." },
    { question: "Are the projects based on real-world scenarios?", answer: "Absolutely. You will work on real datasets and scenarios to solve actual business and technical problems." },
    { question: "Will I get an internship certificate?", answer: "Yes, upon successful completion of the course and your capstone project, you will receive a verified internship certificate." }
  ];

  return (
    <main className="min-h-screen bg-white pt-20 scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B3B7A] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-bold text-[#38BDF8]">
                <Star className="w-4 h-4 fill-current" /> Rating: 4.8
                <span className="mx-2 text-white/30">|</span>
                <Users className="w-4 h-4" /> {course.students} enrolled
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold">
                <div className="flex items-center gap-2"><Clock className="text-[#38BDF8]" /> {course.weeks} Weeks</div>
                <div className="flex items-center gap-2"><PlayCircle className="text-[#38BDF8]" /> {course.lectures} Lessons</div>
                <div className="flex items-center gap-2"><Trophy className="text-[#38BDF8]" /> {course.level}</div>
              </div>
            </div>

            <div className="lg:justify-self-end w-full max-w-md bg-white rounded-3xl p-8 text-gray-900 shadow-2xl border border-gray-100">
              <div className="text-[#0B3B7A] font-bold text-sm uppercase tracking-wider mb-2">Course Enrollment</div>
              <div className="text-4xl font-black text-gray-900 mb-6">
                ₹{course.price}/-
              </div>
              
              <div className="space-y-4 mb-8">
                <FeatureRow text="Lifetime Access" />
                <FeatureRow text="Access From Any Computer, Tablet or Mobile" />
                <FeatureRow text="Certificate of Completion" />
                <FeatureRow text="1-on-1 Mentorship Sessions" />
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-[#38BDF8] hover:bg-[#0B3B7A] text-[#0B3B7A] hover:text-white font-bold h-14 text-lg rounded-xl shadow-lg transition-all">
                  Book a Demo
                </Button>
                <Button variant="outline" className="w-full border-gray-200 text-[#0B3B7A] font-bold h-14 rounded-xl">
                  Enroll Now
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STICKY NAVIGATION BAR */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm hidden md:block">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex space-x-8 overflow-x-auto py-4 font-bold text-gray-600 text-sm uppercase tracking-wider">
            <li><a href="#about" className="hover:text-[#38BDF8] transition-colors">About</a></li>
            <li><a href="#topics" className="hover:text-[#38BDF8] transition-colors">Topics</a></li>
            <li><a href="#result" className="hover:text-[#38BDF8] transition-colors">Result</a></li>
            <li><a href="#faq" className="hover:text-[#38BDF8] transition-colors">FAQ</a></li>
            <li><a href="#instructor" className="hover:text-[#38BDF8] transition-colors">Instructors</a></li>
          </ul>
        </div>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column (Detailed Content) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Image Banner */}
              <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] border border-gray-100 shadow-sm relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* SECTION: ABOUT */}
              <section id="about" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <MonitorPlay className="w-8 h-8 text-[#38BDF8]" /> About the course
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {course.id === "artificial-intelligence" || course.id === "machine-learning-with-python" 
                      ? "Our AI with Python internship offers a fantastic opportunity to dive deep into the world of artificial intelligence and gain hands-on experience with cutting-edge technologies. By learning Python and its powerful AI libraries like TensorFlow, Keras, and PyTorch, you'll acquire the essential skills needed to build and deploy AI models. This practical experience will not only enhance your technical abilities but also make you highly attractive to employers in fields such as AI development, machine learning engineering, and data science. Through this internship, you'll develop a robust, career-ready skill set, mastering AI techniques such as neural networks, deep learning, and natural language processing. With expert guidance and exposure to real-world applications, you'll be well-equipped to take on high-demand roles and make an impact in the fast-evolving AI industry. This internship is your gateway to unlocking exciting career opportunities and advancing in the world of artificial intelligence."
                      : dynamicAboutText}
                  </p>
                </div>
              </section>

              {/* SECTION: TOPICS */}
              <section id="topics" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <Layers className="w-8 h-8 text-[#38BDF8]" /> Topics Covered
                </h2>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                  {defaultTopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="bg-[#0B3B7A]/10 text-[#0B3B7A] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">{topic}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: RESULT */}
              <section id="result" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-[#38BDF8]" /> Result / Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {defaultResults.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-[#38BDF8]/30 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-[#38BDF8]" /> FAQ
                </h2>
                <div className="space-y-4">
                  {defaultFaqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: INSTRUCTOR */}
              <section id="instructor" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-2 flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-[#38BDF8]" /> Instructors
                </h2>
                <p className="text-[#38BDF8] font-bold uppercase tracking-wider text-sm mb-8 ml-11">Learn from the Best</p>
                
                <div className="bg-[#0B3B7A] p-8 md:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8] rounded-full -mr-20 -mt-20 opacity-20 z-0"></div>
                  
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-md flex-shrink-0 relative z-10 bg-white">
                    <img src="https://ui-avatars.com/api/?name=Kranthi+Kunta&background=38BDF8&color=0B3B7A&size=200" alt="Kranthi Kunta" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="text-center md:text-left relative z-10 flex-grow text-white">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                      <h3 className="text-2xl font-extrabold">Kranthi Kunta</h3>
                      <span className="bg-[#38BDF8]/20 text-[#38BDF8] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                        Lead Mentor
                      </span>
                    </div>
                    <p className="text-blue-100 leading-relaxed mb-6 font-medium">
                      An industry expert with extensive experience bridging the gap between academic learning and corporate demands. Kranthi has successfully mentored hundreds of students, focusing heavily on hands-on deployment and real-world problem solving.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm text-blue-200 ml-2 font-medium">(Top Rated Mentor)</span>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column (Sidebar Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B3B7A] border-b border-gray-200 pb-4">Course Highlights</h3>
                
                <ul className="space-y-4 text-sm font-medium text-gray-700">
                  <li className="flex justify-between items-center"><span className="text-gray-500">Duration</span> <span>{course.weeks} weeks</span></li>
                  <li className="flex justify-between items-center"><span className="text-gray-500">Lessons</span> <span>{course.lectures}</span></li>
                  <li className="flex justify-between items-center"><span className="text-gray-500">Level</span> <span>{course.level}</span></li>
                  <li className="flex justify-between items-center"><span className="text-gray-500">Language</span> <span>English</span></li>
                  <li className="flex justify-between items-center"><span className="text-gray-500">Certificate</span> <span>Yes</span></li>
                </ul>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4 font-medium">Need help deciding?</p>
                  <Link href="/support">
                    <Button variant="outline" className="w-full border-[#0B3B7A] text-[#0B3B7A] hover:bg-[#0B3B7A] hover:text-white rounded-xl font-bold transition-colors">
                      Contact Support <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

// Helper component
function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 bg-green-100 p-1 rounded-full flex-shrink-0">
        <CheckCircle2 className="w-4 h-4 text-green-600" />
      </div>
      <span className="text-sm font-semibold text-gray-700">{text}</span>
    </div>
  );
}