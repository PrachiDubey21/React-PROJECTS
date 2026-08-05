import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState();

    // useEffect(() => {

    //     fetch('https://api.github.com/users/PrachiDubey21')
    //      .then((response) => response.json())   
    //      .then((data) => {
    //     console.log(data);                 
    //     setData(data);    
    //      })   

    // } , [])

  return (

    <div className="flex justify-center items-center min-h-[80vh] 
    bg-[#FDF6F0] px-4">
      
      <div className="bg-white/70 backdrop-blur-md border 
      border-[#F3DDE3] rounded-2xl shadow-lg p-8 text-center max-w-sm w-full">

        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="git picture"
          className="h-28 w-28 rounded-full mx-auto object-cover 
          border-4 border-[#FADADD] shadow-md"
        />

        {/* Name */}
        <h2 className="mt-4 text-xl font-semibold text-[#5A4A4A]">
          {data.name || "GitHub User"}
        </h2>

        {/* Username */}
        <p className="text-sm text-[#7A6A6A]">
          @{data.login}
        </p>

        {/* Followers */}
        <div className="mt-6 bg-[#FFF0F5] border border-[#F3DDE3] 
        rounded-xl py-3">

          <p className="text-[#5A4A4A] font-medium">
            Followers 💗
          </p>

          <p className="text-2xl font-bold text-[#D291BC]">
            {data.followers}
          </p>
          
        </div>

      </div>

    </div>
  )
}

export default Github

export const GitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/PrachiDubey21");
  return response.json();
};