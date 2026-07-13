import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

//DOESNT WORK HERE (INCORRECT SYNTAX)
// const reactElement = {

//     type: 'a',

//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },

//     children: 'click me to visit google'
// }

const anotheruser = "pichu";

//this react element gets by default injected by babel(transpiler)
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click here to visit google",
  anotheruser,
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,

  // anotherElement

  // reactElement
);
