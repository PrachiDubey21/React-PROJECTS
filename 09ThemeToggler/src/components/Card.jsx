import React from "react";

export default function Card() {

  return (

    <div className="w-full max-w-md mx-auto my-10 p-2
     bg-white dark:bg-gray-800
     border border-[#FADADD] dark:border-gray-600
     rounded-2xl shadow-lg hover:shadow-xl 
     transition duration-300 overflow-hidden">

      {/* Image */}
      <a href="/">
        <img
          className="w-full h-64 object-cover rounded-xl"
          src="https://i.pinimg.com/736x/9e/ae/99/9eae99110eb372127921358f9545ed87.jpg"
          alt="flower"
        />
      </a>

      {/* Content */}
      <div className="px-6 py-5">

        {/* Title */}
        <a href="/">
          <h5 className="text-xl font-semibold 
          text-[#5A4A4A] dark:text-gray-200 leading-snug">
            Soft Blossom Garden 🌸
          </h5>
        </a>

        {/* Rating */}
        <div className="flex items-center mt-3 mb-5">

          <span className="text-[#F7B5A7] dark:text-yellow-300 text-base">
            ★★★★★
          </span>

          <span className="ml-3 text-sm font-medium 
          bg-[#FFE4E1] dark:bg-gray-700 
          text-[#D291BC] dark:text-yellow-200 
          px-3 py-1 rounded-full border border-[#FADADD]
           dark:border-gray-500">
            5.0
          </span>

        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">

          <span className="text-3xl font-bold 
          text-[#5A4A4A] dark:text-white">
            ₹499
          </span>

          <a
            href="/"
            className="bg-[#F7B5A7] hover:bg-[#f59c8c]
             dark:bg-yellow-400 dark:hover:bg-yellow-500
             text-white dark:text-gray-900
             text-sm font-medium px-5 py-2.5 rounded-lg 
             shadow-sm transition border border-transparent
             hover:border-[#FADADD] dark:hover:border-yellow-300"
          >
            Add 🌷
          </a>

        </div>

      </div>
      
    </div>
  );
}