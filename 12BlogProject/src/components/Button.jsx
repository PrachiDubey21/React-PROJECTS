import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#b08968]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        px-5 py-2.5
        rounded-xl
        font-medium
        tracking-wide
        transition-all duration-300
        hover:scale-[1.02]
        hover:shadow-lg
        active:scale-95
        ${bgColor}
        ${textColor}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}