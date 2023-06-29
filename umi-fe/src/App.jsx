import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// localized strings json. ??implement language modification later. 
import T from "./assets/ref/loc/en.json"; 
// style json.
import S from "./assets/ref/style.json";
import TestIgnore from "./assets/components/TestIgnore";
import FGCard from "./assets/components/FGCard";
import UIHeader from "./assets/components/UIHeader";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <UIHeader />
      <div>
      
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br />
      <FGCard />
  
      <TestIgnore message={T.SPEC_CHAR_TEST} /> 
    </>
  );
}

export default App;
