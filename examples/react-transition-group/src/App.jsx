import { useState } from "react";
import "./App.css";

import { CSSTransition } from "react-transition-group";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <CSSTransition classNames="dialog" timeout={500} unmountOnExit in={show}>
        <div className="dialog">
          <p>Min dialogruta</p>
          <button onClick={() => setShow(false)}>Stäng rutan</button>
        </div>
      </CSSTransition>
      <button onClick={() => setShow(true)}>Visa dialog</button>
    </div>
  );
}

export default App;
