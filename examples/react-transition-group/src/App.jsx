import { useState } from "react";
import "./App.css";

import { CSSTransition } from "react-transition-group";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <CSSTransition
        classNames="text"
        timeout={500}
        unmountOnExit
        in={show}
        >
        <p>En text</p>
      </CSSTransition>
      <button onClick={() => setShow(!show)}>Toggla om texten visas</button>
    </div>
  );
}

export default App;
