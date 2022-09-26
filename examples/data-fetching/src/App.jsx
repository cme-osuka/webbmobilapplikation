import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getDataButWithAxios();
  }, [])
  
  // not in use
  const postData = () => {
    axios.post("http://localhost:3000/quotes", {
      author: "Macke",
      quote: "lifes short, then u die",
    });
  };

  const getDataButWithAxios = async () => {
    const { data } = await axios.get("http://localhost:3000/quotes");
    setQuotes(data);
  };

  const getDataWithFetch = async () => {
    const response = await fetch("http://localhost:3000/quotes");
    const data = await response.json();
    setQuotes(data);

    // then-callbacks
    //fetch("http://localhost:3000/quotes/1")
    //  .then(response => response.json())
    //  .then(json => console.log(json));
  };

  return (
    <div className="App">
      <button onClick={postData}>Lägg till quote</button>
      <button onClick={getDataButWithAxios}>Hämta quotes</button>
      {quotes.map(({ quote, author, id }, i) => (
        <p key={id}>
          {author}: {quote}
        </p>
      ))}
    </div>
  );
}

export default App;
