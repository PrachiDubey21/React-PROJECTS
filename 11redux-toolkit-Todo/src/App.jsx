import { useState } from 'react'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

   return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200
    ">
      
      <div className="
        w-full max-w-md
        bg-white/80 backdrop-blur-md
        p-6 rounded-2xl
        shadow-xl
      ">
        <h1 className="text-center text-pink-500 text-2xl font-semibold mb-4">
          🌸 My Todos 
        </h1>

        <AddTodo />
        <Todos />
      </div>

    </div>
  )
}

export default App
