import "./App.css";

function Square() {
  return <button className="square">{/* Todo */}</button>;
}

function Board() {

  const handleClick = () => {}

  return (
    <div>
      <div className="status">Next up: X</div>
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="reset">
        <button>Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
