//we are using context api here
//1. create a context , assign it to a variable and export it
//Every context is a provider(global variable) 
//we use it as a wrapper (just like we use fragments or divs)

import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (

    <UserContextProvider>
   <div className="min-h-screen bg-[#F4F4F4] flex flex-col items-center
    justify-center ">

        <Login />
        <Profile />

      </div>

    </UserContextProvider>

  )
}

export default App
