import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems(prevItems => [...prevItems, {
      title: todoInput,
      complete: false,
      id: Date.now()
    }])
  }

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      
      {items.map(item => (
        <div key={item.id}>
          <p>{item.title} ({item.complete ? "done" : "not done"})</p>
          <button onClick={() => handleDelete(item.id)}>x</button>
        </div>
      ))}
        <input
          name="todo-input"
          type="text"
          data-testid="inputfield"
          onChange={e => setTodoInput(e.target.value)}
        />
        <button onClick={handleAdd}>Submit</button>
    </div>
  );
}

export default App;
