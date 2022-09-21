import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState({
    left: 0,
    right: 0,
  });
  const [history, setHistory] = useState([]);

  function handleClick(e) {
    const { name } = e.target;
    //setCounter((prevState) => ({ ...prevState, [name]: prevState[name]++ }));
    if (name === "left") {
      setCounter({
        left: counter.left + 1,
        right: counter.right,
      });
      setHistory([...history, "L"]);
    }
    if (name === "right") {
      setCounter({
        left: counter.left,
        right: counter.right + 1,
      });
      setHistory(history.concat("R"));
    }
  }

  return (
    <div className="App">
      <button name="left" onClick={handleClick}>
        {counter.left}
      </button>
      <button name="right" onClick={handleClick}>
        {counter.right}
      </button>
      <p>
        {history.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </p>
    </div>
  );
}

export default App;
