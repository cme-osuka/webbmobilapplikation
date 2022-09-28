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

  const deleteData = (id) => {
    if (!id) return;
    axios.delete(`http://localhost:3000/quotes/${id}`);
  }

  const updateAuthor = async (quoteObj) => {
    if (!quoteObj) return;

    const authorName = prompt("Vad heter den nya författaren?");
    if (!authorName) return;

    await axios.put(`http://localhost:3000/quotes/${quoteObj.id}`, { ...quoteObj, author: authorName });
    await getDataButWithAxios();
  }

  const updateQuoteAndAuthor = async (quoteObj) => {
    if (!quoteObj) return;

    const authorName = prompt("Vad heter den nya författaren?");
    if (!authorName) return;

    const newQuote = prompt("Vad är nya Quoten?");
    if (!newQuote) return;

    await axios.put(`http://localhost:3000/quotes/${quoteObj.id}`, { quote: newQuote, author: authorName });
    await getDataButWithAxios();
  }

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
      <button onClick={getDataButWithAxios}>Hämta quotes</button>
      {quotes.map(({ quote, author, id }, i) => (
        <p key={id}>
          <span onClick={() => updateQuoteAndAuthor({ quote, author, id })}>{author}</span>: {quote} <button onClick={() => deleteData(id)}>x</button>
        </p>
      ))}
    </div>
  );
}

export default App;
