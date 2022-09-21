import "./App.css";
import peopleData from "./data.json";
import Person from "./Person";

function App() {
  const people = peopleData;

  return (
    <div className="App">
      {people.map((p) => (
        <Person data={p} />
      ))}
    </div>
  );
}

export default App;
