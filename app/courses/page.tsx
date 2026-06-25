"use client";

import Link from "next/link";
import { BookOpen, Clock, Users, ArrowRight, PlayCircle } from "lucide-react";
import { courses } from "@/lib/courses";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      
      {/* Header Section */}
      <section className="bg-[#0B3B7A] py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <div className="inline-flex items-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8] mb-6">
            Industry-Ready Programs
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Online <span className="text-[#38BDF8]">Management & Tech</span> Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Carefully curated online placement programs for college students and working professionals.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0B3B7A]">Trending Courses</h2>
            <p className="text-gray-600 mt-2">Explore our most popular career tracks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Free LMS Banner */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="bg-gradient-to-r from-[#0B3B7A] to-blue-800 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Explore Free LMS</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 relative z-10">
            Become a valued member of SAVVY INTERN and enjoy unlimited access to our vast library of top-rated Video Courses.
          </p>
          <Button className="bg-[#38BDF8] hover:bg-white text-[#0B3B7A] font-bold rounded-full px-8 py-6 text-lg relative z-10 shadow-lg transition-transform hover:scale-105 cursor-pointer">
            Subscribe Now
          </Button>
        </div>
      </section>

    </main>
  );
}

// Reusable Course Card Component
function CourseCard({ course }: { course: any }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#38BDF8]/30 transition-all group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0B3B7A] shadow-sm">
          {course.level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-[#0B3B7A] mb-2 line-clamp-2 min-h-[56px] group-hover:text-[#38BDF8] transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-2 font-medium">
          <Users className="w-4 h-4 text-[#38BDF8]" /> {course.instructor}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-600 mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100">
          <div className="flex items-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-[#38BDF8]" /> {course.lectures} Lectures
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#38BDF8]" /> {course.weeks} Weeks
          </div>
        </div>

        {/* Bottom Bar: Price & Button FIXED (Removed asChild to stop the crash) */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-xl font-black text-gray-900">
            ₹{course.price}
          </div>
          
          <Link href={`/courses/${course.id}`}>
            <Button className="bg-white border-2 border-[#0B3B7A] text-[#0B3B7A] hover:bg-[#0B3B7A] hover:text-white rounded-full font-bold transition-colors cursor-pointer group-hover:bg-[#0B3B7A] group-hover:text-white flex items-center">
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}