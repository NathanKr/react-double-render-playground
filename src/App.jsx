import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const now = new Date().getTime();
  console.log(`rendered : ${now}`);

  return (
    <div className="App">
      <p>
        App component is double rendered by React on development mode for
        version &lt; 17.0 . Check the console
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
