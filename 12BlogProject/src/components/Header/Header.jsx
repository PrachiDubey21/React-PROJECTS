import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f5ebe0]/80 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="bg-[#f8edeb] p-2 rounded-2xl shadow-sm">
                <Logo width="78px" />
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="
                        px-5 py-2
                        rounded-full
                        text-sm
                        font-medium
                        text-[#6b4f4f]
                        hover:bg-[#ddb7ab]
                        hover:text-[#fff]
                        transition-all
                        duration-300
                      "
                    >
                      {item.name}
                    </button>
                  </li>
                ),
            )}

            {/* Logout */}
            {authStatus && (
              <li className="ml-2">
                <div
                  className="
                    bg-[#b08968]
                    text-white
                    rounded-full
                    px-1
                    py-1
                    shadow-sm
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <LogoutBtn />
                </div>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;