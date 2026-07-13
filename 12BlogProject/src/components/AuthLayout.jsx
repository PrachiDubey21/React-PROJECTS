import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? (
  <div className="w-full h-screen flex items-center justify-center bg-[#f7ede2]">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-[#d6b29c] border-t-[#c98c8c] rounded-full animate-spin"></div>

      <h1 className="mt-5 text-xl font-semibold text-[#7b5e57] tracking-wide">
        Loading...
      </h1>

      <p className="text-sm text-[#b08968] mt-1">
        Preparing your space
      </p>
    </div>
  </div>
) : (
  <>{children}</>
)
}