import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(
            login({
              userData: {
                $id: userData.$id,
                name: userData.name,
                email: userData.email,
              },
            })
          );
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#fdf6f0]
        "
      >
        <div className="text-center">

          {/* Loader Circle */}
          <div
            className="
              w-16 h-16
              border-4
              border-[#e7d3c5]
              border-t-[#b08968]
              rounded-full
              animate-spin
              mx-auto
            "
          ></div>

          {/* Loading Text */}
          <p
            className="
              mt-6
              text-[#7b5e57]
              text-lg
              font-medium
              tracking-wide
            "
          >
            Loading your space...
          </p>

        </div>
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        bg-[#f8ede3]
      "
    >

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        className="
          flex-grow
          bg-[#fdf6f0]
        "
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;