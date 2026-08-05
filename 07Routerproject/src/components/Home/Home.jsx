import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="mx-auto w-full max-w-7xl px-4">

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 
      items-center bg-[#FFF5F7] border border-[#F3DDE3] rounded-2xl 
      p-6 sm:p-10 mt-6 shadow-sm">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start">

          <img
            src="https://i.pinimg.com/1200x/53/39/f9/5339f9d4136549a6e692c8457bf9b9f4.jpg"
            alt="image1"
            className="w-60 sm:w-80 md:w-96 h-auto rounded-2xl 
            shadow-lg border border-[#F3DDE3]"
          />

        </div>

        {/* Right Content */}
        <div className="text-center md:text-left space-y-6">

          <h2 className="text-3xl sm:text-5xl font-bold text-[#5A4A4A] 
          leading-tight">
            Download Now ✨

            <span className="block text-2xl mt-2 text-[#7A6A6A] font-medium">
              Your cute little app 💗
            </span>

          </h2>

          <p className="text-[#7A6A6A] text-sm sm:text-base">
            A soft and aesthetic experience designed to make your day better 🌸
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 font-medium 
            bg-[#D291BC] text-white rounded-xl hover:scale-105 transition 
            shadow-sm"
          >

            <svg
              fill="white"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
          
            </svg>

            &nbsp; Download now
          </Link>

        </div>

      </section>

      {/* Second Section */}
      <section className="flex flex-col items-center mt-16 space-y-6">
        
        <img
          src="https://i.pinimg.com/736x/8c/07/c4/8c07c4093c01dcc701380d448511657a.jpg"
          alt="image2"
          className="w-44 sm:w-64 md:w-72 h-auto rounded-2xl 
          shadow-md border border-[#F3DDE3]"
        />

        <h1 className="text-2xl sm:text-4xl font-semibold text-[#5A4A4A] text-center">
          Made with love 💗
        </h1>

        <p className="text-[#7A6A6A] text-sm sm:text-base text-center max-w-md">
          Designed with soft colors and a calming aesthetic to give you a peaceful and beautiful user experience ✨
        </p>

      </section>

    </div>
  );
}