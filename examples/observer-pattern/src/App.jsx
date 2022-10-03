import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import observable from "./Observable";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

observable.unsubscribe(logger);

function App() {
  function handleClick() {
    observable.notify("Användaren tryckte på knappen");
  }

  function handleToggle() {
    observable.notify("Användaren tryckte på checkboxen");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Klicka här!</button>
      <input onChange={handleToggle} type="checkbox" />
      <ToastContainer />
    </div>
  );
}

export default App;
