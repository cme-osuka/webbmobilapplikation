import "./App.css";
import Home from "./pages/Home";
import SingleQuote from "./pages/SingleQuote";
import { QuotesProvider } from "./contexts/QuotesContext"

function App() {
  return (
    <div className="App">
      <QuotesProvider>
        <Home />
        <SingleQuote />
      </QuotesProvider>
    </div>
  );
}

export default App;
