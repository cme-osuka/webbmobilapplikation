import "./App.css";
import Container from "./components/PropsChildren";

// Default import
// import Button from "./components/Button";
// Named import
// import { Button } from "./components/Button";

import Parent from "./components/lifting-state/Parent";

function App() {
  return (
    <div id="exempel">
      <Parent />
    </div>
  );
}

export default App;
