import { useState , useCallback , useEffect , useRef  } from 'react'

import './App.css'

function App() {

  const [length , setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // using ref hook
  const passRef = useRef(null)


  //password generator function
  const PasswordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789"
    }

    if(charAllowed){
      str += "!@$%^&*(){}[]:?*~`"
    }

    //generate password
    for (let index = 1; index <= length; index++) {
  
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }
    , 
   [length , numberAllowed , charAllowed
    , setPassword
  ])

  //copying values 
  const copyPasswordToClipBoard = useCallback( () => {
    passRef.current?.select()
     window.navigator.clipboard.writeText(password)
  } , 
 
  [password])

  //call of function with dependencies
  useEffect( () => {PasswordGenerator()} ,
  
      [length , numberAllowed , charAllowed
     , PasswordGenerator] )

  return (
    <>

       {/* heading */}
     <h1 className="text-4xl text-center text-[#5a4b81] pt-14 font-bold">
      Password Generator
      </h1>


       {/* main div bar */}
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg 
      px-4 mt-12 pt-8 pb-8 my-8 bg-[#9b8bcc] text-[#2e1a47] text-lg font-bold">

         {/* small div bar */}
       <div className="flex shadow rounded-lg overflow-hidden mb-4">

         {/* placeholder */}
        <input 
        type="text" 
        value={password}
        className="outline-none w-full bg-[#FFFDD0] py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passRef}
        />

          {/* copy button */}
        <button 
        onClick={copyPasswordToClipBoard}
        className="bg-[#2e1a47] text-[#FFFDD0] px-4 hover:bg-[#5a4b81]
        transition"> Copy
        </button>

       </div>

       {/* bottom div bar */}
       <div className="flex text-sm pt-4 gap-x-5">

        {/* Range bar */}
          <div className="flex items-center gap-x-1">
          
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer accent-[#5a4b81]"
          onChange={(e) => {setLength(e.target.value)}}
          />

          <label className="text-lg "
          > Length: {length}</label>
          
         </div>

         {/* checkbox -> 1 */}
         <div className="flex items-center gap-x-1">
          
          <input 
          type = "checkbox"
          defaultChecked = {numberAllowed}
          id = "numberInput"
          className="w-5 h-5 accent-[#5a4b81] cursor-pointer"
          onChange = { () => { 
            setnumberAllowed ((prev) => !prev);
           }}
          />

           <label className="text-lg "
          > Numbers</label>
          
          </div>

           {/* checkbox -> 2 */}
         <div className="flex items-center gap-x-1">
          
          <input 
          type = "checkbox"
          defaultChecked = {charAllowed}
          id = "numberInput"
          className="w-5 h-5 accent-[#5a4b81] cursor-pointer"
          onChange = { () => { 
            setcharAllowed ((prev) => !prev);
           }}
          />

           <label className="text-lg "
          > Characters</label>
          
          </div>

        
      </div>

      </div>

    </>
  )
}

export default App
