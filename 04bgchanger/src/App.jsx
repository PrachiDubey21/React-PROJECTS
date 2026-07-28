import { useState } from 'react'


function App() {
  const [color , setColor] = useState("#C8A2C8"); // lilac

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      {/* Right-side panel */}
    <div className="fixed right-10 top-1/2 transform -translate-y-1/2 
    flex flex-col flex-wrap items-center gap-4 
    bg-white shadow-lg rounded-xl p-4">

      {/* buttons */}

      <button onClick={() => setColor("#FFB6C1")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#FFB6C1" }}>
          Baby Pink
        </button>

        <button onClick={() => setColor("#9CAF88")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#9CAF88" }}>
          Sage Green
        </button>

        <button onClick={() => setColor("#E6D3A3")}
        className="px-4 py-2 rounded-full text-white shadow-lg border"
        style={{ backgroundColor: "#E6D3A3" }}>
           Dark Cream
           </button>

        <button onClick={() => setColor("#FFD580")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#FFD580" }}>
          Light Orange
        </button>

        <button onClick={() => setColor("#ADD8E6")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#ADD8E6" }}>
          Light Blue
        </button>

        <button onClick={() => setColor("#722F37")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#722F37" }}>
          Wine
        </button>

        <button onClick={() => setColor("#90EE90")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{  backgroundColor: "#90EE90" }}>
         Light Green
        </button>

        <button onClick={() => setColor("#C4A484")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#C4A484" }}>
          Coffee
        </button>

        <button onClick={() => setColor("#00FFFF")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#00FFFF" }}>
         cyan
        </button>

        <button onClick={() => setColor("#E6E6FA")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#E6E6FA" }}>
          Leavender
        </button>

        <button onClick={() => setColor("#FF7F7F")}
          className="px-4 py-2 rounded-full text-white shadow-lg border"
          style={{ backgroundColor: "#FF7F7F" }}>
          Light Red
        </button>

    </div>

    </div>
  )
}


export default App
