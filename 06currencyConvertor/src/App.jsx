//used custom hooks
//called api
//used component resuability


import { useState , } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";


function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * (currencyInfo[to] || 0));
  };

  const bgUrl = "https://i.pinimg.com/1200x/8c/6a/72/8c6a7242ab6c58d5fbe104807158234a.jpg";

  return (

    <div
      className="w-full h-screen flex justify-center items-center bg-cover
       bg-center"
     
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}

    >

      <div className="w-full px-4">

        <div
          className="w-full max-w-md mx-auto rounded-2xl p-6
          bg-[#f5f5dc]/95 backdrop-blur-md shadow-2xl 
          border border-[#cde7d8]"
        >
        
          <h1 className="text-[#355f4a] text-3xl font-bold text-center mb-6 tracking-tight">
            Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
        
            {/* From */}
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>

            {/* Swap */}
            <div className="relative w-full flex justify-center my-3">
              <button
                type="button"
                className="z-10 rounded-full 
                bg-[#a8d5ba] text-[#1f3d2b]
                px-5 py-1.5 text-sm font-semibold
                shadow-md hover:bg-[#94c9ab]
                transition-all duration-200 tracking-wide"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To */}
            <div className="w-full mt-3 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert */}
            <button
              type="submit"
              className="w-full bg-[#a8d5ba] text-[#1f3d2b]
              px-4 py-3 rounded-xl font-semibold text-lg
              shadow-lg hover:bg-[#94c9ab]
              transition-all duration-200 tracking-wide"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
           
            </button>

          </form>

        </div>

      </div>
      
    </div>
  );
}

export default App; 