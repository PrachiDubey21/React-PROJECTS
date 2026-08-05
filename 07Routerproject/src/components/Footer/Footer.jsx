import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="bg-[#FDF6F0] border-t border-[#F3DDE3] mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>

            <Link to="/" className="flex items-center gap-2">

              <img
                src="https://i.pinimg.com/1200x/74/b7/da/74b7da3db3fb531e6ddda10fa0bfdf08.jpg"
                alt="Logo"
                className="h-18 w-18 rounded-full object-cover border 
                border-[#F3DDE3]"
              />

              <span className="text-lg font-semibold text-[#5A4A4A]">
                MyApp 🌸
              </span>

            </Link>

            <p className="mt-4 text-sm text-[#7A6A6A] leading-relaxed">
              Hellooouuuuuu 💗
            </p>

          </div>

          {/* Resources */}
          <div>
            
            <h2 className="text-sm font-semibold text-[#5A4A4A] mb-4">
              Resources
            </h2>

            <ul className="space-y-2 text-[#7A6A6A]">

              <li>
                <Link to="/" className="hover:text-[#D291BC] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#D291BC] transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#D291BC] transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h2 className="text-sm font-semibold text-[#5A4A4A] mb-4">
              Follow us
            </h2>

            <ul className="space-y-2 text-[#7A6A6A]">

              <li>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D291BC] transition"
                >
                  GitHub
                </a>

              </li>

              <li>
                <Link to="/" className="hover:text-[#D291BC] transition">
                  Discord
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}
          <div>

            <h2 className="text-sm font-semibold text-[#5A4A4A] mb-4">Legal</h2>

            <ul className="space-y-2 text-[#7A6A6A]">

              <li>
                <Link to="#" className="hover:text-[#D291BC] transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="#" className="hover:text-[#D291BC] transition">
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-[#F3DDE3] flex flex-col 
        md:flex-row justify-between items-center text-sm text-[#7A6A6A]">
          <p>© 2026 MyApp. Made with 💗</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">

            <Link
              to="#"
              className="p-2 rounded-full border border-[#F3DDE3] hover:bg-[#FADADD] transition"
            >
              🌐
            </Link>

            <Link
              to="#"
              className="p-2 rounded-full border border-[#F3DDE3] hover:bg-[#FADADD] transition"
            >
              💻
            </Link>

            <Link
              to="#"
              className="p-2 rounded-full border border-[#F3DDE3] hover:bg-[#FADADD] transition"
            >
              📷
            </Link>

          </div>

        </div>

      </div>
      
    </footer>
  );
}
