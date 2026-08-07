import React from 'react'
import { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  // Handle Submit
  const handleSubmit = (e) => {

    e.preventDefault();
    setUser({username , password})

    console.log("submitted")
  }

    return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4] px-4">

      <div className="bg-[#FFFFFF] border border-[#E8E8E8] shadow-xl rounded-3xl p-10 w-full max-w-md transition-all duration-300">

        <h2 className="text-3xl font-bold text-center text-[#4B4B4B] mb-2">
          Welcome Back 🌼
        </h2>
        
        <p className="text-center text-[#7A7A7A] text-sm mb-8">
          Please login to continue
        </p>

        <div className="mb-5">

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl border border-[#DCDCDC] bg-[#FAFAFA] text-[#4B4B4B] placeholder-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#F6E27A] focus:border-[#F6E27A] transition"
          />
        </div>

        <div className="mb-6">

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-[#DCDCDC] bg-[#FAFAFA] text-[#4B4B4B] placeholder-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#F6E27A] focus:border-[#F6E27A] transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#F6E27A] text-[#4B4B4B] font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-[#f3da5e] transition duration-300"
        >
          Submit
        </button>

        {/* Table
        <div className="mt-8 border border-[#E8E8E8] rounded-xl overflow-hidden shadow-sm">

          <table className="w-full text-left">

            <thead className="bg-[#FFF8CC] text-[#4B4B4B]">
              <tr>
                <th className="p-3 font-semibold">Username</th>
                <th className="p-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody className="text-[#6A6A6A]">
              <tr className="border-t hover:bg-[#FAFAFA] transition">
                <td className="p-3">Prachi</td>
                <td className="p-3">Logged In</td>
              </tr>
              <tr className="border-t hover:bg-[#FAFAFA] transition">
                <td className="p-3">Guest</td>
                <td className="p-3">Pending</td>
              </tr>
            </tbody>

          </table>

        </div> */}

      </div>

    </div>
  )
}

export default Login