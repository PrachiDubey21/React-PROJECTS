import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change of theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>

      <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>

        <div className="min-h-screen bg-[#FFF6F5] flex 
        items-center justify-center px-4">

          <div className="w-full max-w-md">

            {/* Theme Button */}

            <div className="flex justify-end mb-3">
              <ThemeBtn />
            </div>

            {/* Card */}
            <Card />

          </div>

        </div>

      </ThemeProvider>
      
    </>
  );
}

export default App;
