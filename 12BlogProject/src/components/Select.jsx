import React, { useId } from 'react'

const Select = React.forwardRef(function Select(
  {
    options,
    label,
    className = "",
    ...props
  },
  ref
) {
  const id = useId()

  return (
    <div className="w-full">

      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="
            block mb-2 pl-1
            text-[#5f4b44]
            font-medium
          "
        >
          {label}
        </label>
      )}

      {/* Select */}
      <div className="relative">

        <select
          {...props}
          id={id}
          ref={ref}
          className={`
            w-full
            px-4 py-3
            rounded-2xl
            bg-[#fffaf5]
            border border-[#eaded3]
            text-[#5f4b44]
            outline-none
            appearance-none
            shadow-sm
            transition-all duration-300
            focus:ring-2
            focus:ring-[#d6a5a5]
            focus:border-transparent
            hover:shadow-md
            ${className}
          `}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Arrow */}
        <div
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            pointer-events-none
            text-[#b08968]
            text-sm
          "
        >
        </div>

      </div>
    </div>
  )
})

export default Select