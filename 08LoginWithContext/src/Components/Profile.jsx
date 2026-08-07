import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {

    return (

      <div className="bg-white border border-[#E8E8E8] shadow-md 
      rounded-xl px-6 py-4 text-center">

        <p className="text-[#7A7A7A] font-medium">Please login 🌼</p>

      </div>
    );

  }
   else {

    return (
      <div className="bg-white border border-[#E8E8E8] 
      shadow-md rounded-xl px-6 py-4 text-center">

        <p className="text-[#4B4B4B] font-semibold">
          Welcome, {user.username} ✨
        </p>

      </div>
      
    );
  }
}

export default Profile;
