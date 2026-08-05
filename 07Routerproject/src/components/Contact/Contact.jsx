import React from "react";

export default function Contact() {

  return (

    <div className="flex items-center justify-center min-h-[700px]
     bg-[#FFF5F7] py-10">

      <div className="max-w-6xl w-full mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Info Section */}
          <div className="p-8 bg-[#FDF6F0] rounded-3xl border
           border-[#F3DDE3] shadow-sm">

            <h1 className="text-3xl md:text-4xl font-bold text-[#5A4A4A]">
              Get in touch 💌
            </h1>

            <p className="text-lg text-[#7A6A6A] mt-3">
              We'd love to hear from you — let's create something beautiful
              together 🌸
            </p>

            {/* Address */}
            <div className="flex items-center mt-8 text-[#6B5E5E]">

              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#D291BC]"
              >

                <path d="M17.657 16.657L13.414 20.9a1.998 1.998
                 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

              </svg>

              <div className="ml-4 text-sm font-medium">
                Acme Inc, Street, State, Postal Code
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center mt-5 text-[#6B5E5E]">

              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#D291BC]"
              >

                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498
                 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            
              </svg>

              <div className="ml-4 text-sm font-medium">+44 1234567890</div>
           
            </div>

            {/* Email */}
            <div className="flex items-center mt-5 text-[#6B5E5E]">
              
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#D291BC]"
              >

                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 
                2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>

              <div className="ml-4 text-sm font-medium">info@acme.org</div>

            </div>

          </div>

          {/* Form Section */}
          <form className="p-8 bg-[#FDF6F0] rounded-3xl border 
          border-[#F3DDE3] shadow-sm flex flex-col justify-center">

            <input
              type="text"
              name="name"
              placeholder="Full Name 🌸"
              className="mt-2 py-3 px-4 rounded-xl bg-white border border-[#F3DDE3] text-[#5A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FADADD]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email 💌"
              className="mt-4 py-3 px-4 rounded-xl bg-white border border-[#F3DDE3] text-[#5A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FADADD]"
            />

            <input
              type="tel"
              name="tel"
              placeholder="Phone Number 📞"
              className="mt-4 py-3 px-4 rounded-xl bg-white border border-[#F3DDE3] text-[#5A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FADADD]"
            />

            <button
              type="submit"
              className="mt-6 py-3 px-6 rounded-full bg-[#FADADD] text-[#5A4A4A] font-semibold border border-[#F3DDE3] hover:shadow-md transition"
            >
              Send Message 💫
            </button>

          </form>

        </div>

      </div>

    </div>
    
  );
}
