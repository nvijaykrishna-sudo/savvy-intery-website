"use client"; 

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // This logs the error so you can see it behind the scenes
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl">⚠️</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3B7A] mb-4">
        Oops! Something went wrong.
      </h2>
      <p className="text-gray-600 mb-8 max-w-md text-lg font-medium">
        We hit a slight snag while loading this page. Don't worry, it's not your fault!
      </p>
      <Button 
        onClick={() => reset()}
        className="bg-[#38BDF8] hover:bg-[#0B3B7A] text-white font-bold rounded-full px-10 h-14 shadow-lg transition-colors text-lg"
      >
        Try Again
      </Button>
    </div>
  );
}