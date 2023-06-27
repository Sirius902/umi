import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// localized strings json. ??implement language modification later. 
import T from "./assets/ref/loc/en.json"; 
// style json.
import S from "./assets/ref/style.json";
import TestIgnore from "./assets/components/TestIgnore";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <TestIgnore message={T.SPEC_CHAR_TEST} /> 
    </>
  );
}

export default App;
