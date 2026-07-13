import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref,
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
                px-4 py-3
                rounded-2xl
                bg-[#fffaf5]
                text-[#5c4033]
                placeholder:text-[#b08968]
                 outline-none
                 focus:ring-2
                focus:ring-[#d6a5a5]
                transition-all duration-300
                shadow-sm
                w-full
               ${className} `}
               
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
