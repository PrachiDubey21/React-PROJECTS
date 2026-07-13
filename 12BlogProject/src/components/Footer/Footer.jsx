import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-[#f5ebe0] border-t border-[#d8c3b5] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div>
            <div className="mb-5">
              <Logo width="120px" />
            </div>

            <p className="text-[#6d5c54] text-sm leading-7">
              A clean  blogging platform designed for sharing
              thoughts, stories, and creativity .
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#7b5e57] mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-[#6d5c54] hover:text-[#b08968] transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-[#7b5e57] mb-5">
              Support
            </h3>

            <ul className="space-y-3">
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-[#6d5c54] hover:text-[#b08968] transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-[#7b5e57] mb-5">
              Legal
            </h3>

            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-[#6d5c54] hover:text-[#b08968] transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[#8c6f65]">
            © 2026 YourBlog. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;