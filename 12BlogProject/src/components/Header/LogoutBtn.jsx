import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        px-5 py-2
        rounded-xl
        bg-[#b08968]
        text-white
        font-medium
        shadow-sm
        hover:bg-[#9c6644]
        hover:shadow-md
        transition-all
        duration-300
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;