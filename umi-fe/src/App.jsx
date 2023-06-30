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
import UISidebar from "./assets/components/UISidebar";

function App() {
  const [count, setCount] = useState(0);
  // react context
  return (
    <>
      <div class="header">
        <UIHeader />
      </div>
      
      <div class="content">
        <div class="viewport">
          <FGCard />
        </div>
        
        <div class="sidebar">
          <UISidebar />
        </div>
      </div>
    </>
  );
}

export default App;
