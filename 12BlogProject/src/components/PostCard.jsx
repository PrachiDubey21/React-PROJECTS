import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      
      <div
        className="
          group
          w-full
          bg-[#fffaf5]
          rounded-[28px]
          overflow-hidden
          shadow-[0_6px_25px_rgba(0,0,0,0.05)]
          hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]
          transition-all duration-300
          hover:-translate-y-1
        "
      >

        {/* Image Section */}
        <div className="relative bg-[#f5ebe0] p-4">

          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="
              w-full
              h-64
              object-contain
              rounded-[20px]
            "
          />

          {/* Small Floating Tag */}
          <div
            className="
              absolute
              top-6 left-6
              bg-[#f9d5d3]
              text-[#7b5e57]
              text-xs
              font-semibold
              px-3 py-1
              rounded-full
              tracking-wide
            "
          >
            Blog Post
          </div>
        </div>

        {/* Content */}
        <div className="p-6">

          <h2
            className="
              text-2xl
              font-bold
              text-[#5f4b44]
              leading-snug
              group-hover:text-[#b08968]
              transition duration-300
              line-clamp-2
            "
          >
            {title}
          </h2>

          {/* Decorative Line */}
          <div
            className="
              w-16 h-1
              bg-[#d6a5a5]
              rounded-full
              mt-5
            "
          ></div>

          {/* Read More */}
          <div
            className="
              mt-6
              text-[#b08968]
              font-medium
              text-sm
              tracking-wide
            "
          >
            Read Article →
          </div>

        </div>
      </div>

    </Link>
  );
}

export default PostCard;