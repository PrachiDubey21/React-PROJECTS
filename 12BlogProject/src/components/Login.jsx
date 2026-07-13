import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      // Create session
      const session = await authService.login(data);

      if (session) {
        // Get logged in user
        const userData = await authService.getCurrentUser();

        if (userData) {
          // Store only serializable data in Redux
          dispatch(
            authLogin({
              userData: {
                $id: userData.$id,
                name: userData.name,
                email: userData.email,
              },
            }),
          );

          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7ede2] px-4">
      <div
        className="
        w-full 
        max-w-md 
        bg-[#fffaf5]
        rounded-[32px]
        p-10
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      "
      >
        
        <h2 className="text-3xl font-bold text-center text-[#5c4033]">
          Welcome Back
        </h2>

        <p className="text-center text-[#9c7b6b] mt-2 mb-8">
          Sign in to continue 
        </p>

        {error && (
          <div className="mb-5 bg-[#f8d7da] text-[#842029] px-4 py-3 rounded-2xl text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <Button
              type="submit"
              className="
              w-full
              mt-3
              bg-[#b08968]
              hover:bg-[#9c7b6b]
              text-white
              py-3
              rounded-2xl
              text-base
              font-semibold
            "
            >
              Sign In
            </Button>
          </div>
        </form>

        <p className="text-center text-[#8d6e63] mt-8 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="
            text-[#d6a5a5]
            font-semibold
            hover:text-[#c38e8e]
            transition
          "
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
