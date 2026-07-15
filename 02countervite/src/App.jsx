//hooks
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //this hook gives 2 values (variable , method)
  let [counter , setcounter] = useState(15)

  //let counter = 10;

  const addValue = () => {
    console.log("value added : " , Math.random() );
    // counter = counter + 1;
    // setcounter(counter);
    setcounter(counter +1);

  }

  const removeValue = () => {
  if (counter > 0) setcounter(counter - 1);
  }
  
  return (
    <>
     
     <h1>CHAI AND PICHU</h1>
     <h2>Counter value : {counter}</h2>
     <br />
     <button
     onClick={addValue}>Add value </button>
     <br />
     <button
     onClick={removeValue}>Remove value  </button>
    </>
  )
}

export default App
