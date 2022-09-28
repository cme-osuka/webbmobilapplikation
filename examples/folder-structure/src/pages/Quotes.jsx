import React, { useState, useEffect } from 'react'
import axios from "axios";
import Quote from "../components/Quote/Quote";
import Button from "../components/Button";
import fetchData from '../api/fetchData';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id) => {
    if (!id) return;
    axios.delete(`http://localhost:3000/quotes/${id}`);
  };

  const updateQuoteAndAuthor = async (quoteObj) => {
    if (!quoteObj) return;

    const authorName = prompt("Vad heter den nya författaren?");
    if (!authorName) return;

    const newQuote = prompt("Vad är nya Quoten?");
    if (!newQuote) return;

    await axios.put(`http://localhost:3000/quotes/${quoteObj.id}`, {
      quote: newQuote,
      author: authorName,
    });
    await getDataButWithAxios();
  };

  const getData = async () => {
    const { data } = await fetchData();
    setQuotes(data);
  };

  // Komponent: Button
  // Komponent: Quote

  return (
    <div className="App">
      <Button onClick={getData} text="Hämta quotes" />
      {quotes.map(({ quote, author, id }) => (
        <Quote
          author={author}
          quote={quote}
          onAuthorClick={() => updateQuoteAndAuthor({ quote, author, id })}
          onDelete={() => deleteData(id)}
        />
      ))}
    </div>
  );
}

export default Quotes