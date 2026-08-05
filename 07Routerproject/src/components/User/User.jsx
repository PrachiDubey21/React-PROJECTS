import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userid } = useParams()

  return (

    <div className="min-h-[70vh] flex items-center justify-center
     bg-[#FDF6F0] px-4">

      <div className="bg-white border border-[#F3DDE3] rounded-2xl 
      shadow-md p-8 text-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-[#5A4A4A] mb-4">
          User Profile 🌸
        </h1>

        <p className="text-lg text-[#7A6A6A]">
          WELCOME
        </p>

        <p className="text-2xl font-semibold text-[#D291BC] mt-2">
          {userid}
        </p>

        <div className="mt-6">

          <div className="h-[2px] w-16 bg-[#F3DDE3] mx-auto rounded-full">
          </div>

        </div>

        <p className="text-sm text-[#9A8A8A] mt-6">
          This is your personalized space 💗
        </p>

      </div>

    </div>

  )
}

export default User