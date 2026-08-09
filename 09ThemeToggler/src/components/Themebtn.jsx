import React from 'react'
import useTheme from '../contexts/Theme';

export default function ThemeBtn() {

     const {themeMode , lightTheme , darkTheme } = useTheme()

     const onChangebtn = (e) => {

        const darkModeStatus = e.currentTarget.checked

        if (darkModeStatus) {
            darkTheme()
        }
        else{
            lightTheme()
        }

     }
    
  return (

    <label className="relative inline-flex items-center cursor-pointer">

      <input
        type="checkbox"
        className="sr-only peer"
        value=""
        onChange={onChangebtn}
        checked={themeMode=== "dark"}
      />

      {/* Toggle Track */}
      <div className="w-14 h-7 bg-[#FDE2E4] rounded-full 
      peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#F7B5A7] 
      transition-all duration-300
      peer-checked:bg-[#F7B5A7]
      after:content-[''] after:absolute after:top-[3px] after:left-[3px]
      after:bg-white after:border after:border-[#FADADD]
      after:rounded-full after:h-5 after:w-5
      after:shadow-md after:transition-all
      peer-checked:after:translate-x-7">

      </div>

      {/* Label */}
      <span className="ml-3 text-sm font-medium text-[#5A4A4A] tracking-wide">
        Theme 🌸
      </span>

    </label>
  );
}

