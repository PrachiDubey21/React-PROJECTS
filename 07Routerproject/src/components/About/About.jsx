import React from "react";

export default function About() {

  return (

    <div className="py-16 bg-[#FFF5F7]">

      <div className="max-w-7xl mx-auto px-6 text-[#5A4A4A]">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">

            <div className="rounded-3xl overflow-hidden border 
            border-[#F3DDE3] shadow-md w-[280px] md:w-[320px]">

              <img
                src="https://i.pinimg.com/736x/97/f9/0c/97f90ce3b58465adca83c71c45113db3.jpg"
                alt="about"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* Text Section */}
          <div className="md:w-1/2 space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold leading-snug">

              <span className="text-[#D291BC]">Passionate</span> React
              Development 💗
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#6B5E5E]">
              We love building things that feel simple, beautiful, and
              meaningful ✨ Every little detail matters to us — from soft colors
              to smooth interactions — because good design should feel like a
              warm hug.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-[#6B5E5E]">
              This space is all about creativity, growth, and a sprinkle of fun
              🌸 Whether it's writing code or designing interfaces, we enjoy
              making experiences that feel calm, friendly, and just a little
              magical.
            </p>

            {/* Cute Button */}
            <button className="mt-4 px-6 py-2 rounded-full bg-[#FADADD] text-[#5A4A4A] font-medium border border-[#F3DDE3] hover:shadow-md transition">
              Explore More 💫
            </button>
          </div>

        </div>

      </div>
      
    </div>
  );
}
