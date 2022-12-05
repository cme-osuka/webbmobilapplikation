import "./App.css";
import List from "./List";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>En lista</h1>
        <List>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </List>
        <h1>Räknare</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
