import "./App.css";
import Divider from "./components/Divider";

import One from "./challenges/One";
import Two from "./challenges/Two";
import Three from "./challenges/Three";
import Four from "./challenges/Four";
import Five from "./challenges/Five";
import Six from "./challenges/Six";

// Kommentera ut nästa steg
// efter hand som du löser uppgifterna.
const problems = [
  <One />,
  //<Two items={["Bedrock", "Graphite", "Flint"]} />,
  //<Three items={["Bedrock", 1, "Graphite", 2, "Flint", 3]} />,
  //<Four />,
  //<Five />,
  //<Six />,
];

// Du behöver inte röra följande kod
function App() {
  return (
    <div className="App">
      {problems.map((problem) => (
        <>
          {problem}
          <Divider />
        </>
      ))}
    </div>
  );
}

export default App;
