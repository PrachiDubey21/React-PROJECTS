import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Componenets/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "prachi",
    age: 20
  }

  return (
    <>

   <h1 className="text-purple-300 bg-pink-200 p-4 rounded-md inline-block">
     heluuuuuu
     </h1>

      {/* //props */}
     {/* <Card someobj={myobj}/> */}
     <Card username="prachi"/>
     <Card/>
    </>
  )
}

export default App
