import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  return (

    <header className="shadow-sm sticky z-50 top-0">

      <nav className="bg-[#FDF6F0] border-b border-[#F3DDE3] px-6 py-3">
        
        <div className="flex justify-between items-center mx-auto max-w-7xl">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">

            <img
              src="https://i.pinimg.com/1200x/74/b7/da/74b7da3db3fb531e6ddda10fa0bfdf08.jpg"
              alt="Logo"
              className="h-18 w-18 rounded-full object-cover 
              border border-[#F3DDE3]"
            />

            <span className="text-lg font-semibold text-[#5A4A4A]">
              MyApp 🌸
            </span>

          </Link>

          {/* Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">

            <li>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-[#D291BC]" : "text-[#6B5B5B]"
                  } hover:text-[#D291BC]`
                }
              >
                Home
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-[#D291BC]" : "text-[#6B5B5B]"
                  } hover:text-[#D291BC]`
                }
              >
                About
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-[#D291BC]" : "text-[#6B5B5B]"
                  } hover:text-[#D291BC]`
                }
              >
                Contact
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-[#D291BC]" : "text-[#6B5B5B]"
                  } hover:text-[#D291BC]`
                }
              >
                Github
              </NavLink>

            </li>

          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <Link
              to="#"
              className="text-[#5A4A4A] hover:bg-[#FADADD] px-4 py-2 
              rounded-lg text-sm transition"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="bg-[#D291BC] text-white px-4 py-2 rounded-lg 
              text-sm hover:opacity-90 transition shadow-sm"
            >
              Get started
            </Link>

          </div>

        </div>

      </nav>

    </header>
    
  );
}