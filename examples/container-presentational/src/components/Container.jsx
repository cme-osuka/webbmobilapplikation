import React, { useState, useEffect } from "react";
import Presentational from "./Presentational";

function Container() {
  const [quotes, setQuotes] = useState([]);

  function getQuotes() {
    setQuotes([
      {
        id: 1,
        quote: "When nothing goes right, go left",
        author: "Aleks",
      },
      {
        id: 2,
        quote: "It is what it is",
        author: "Katerina",
      },
      {
        id: 3,
        quote: "Happy wife happy life",
        author: "Macke",
      },
      {
        id: 4,
        quote: "Jag skriver React, alltså finns jag",
        author: "Petter",
      },
    ]);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div>
      <Presentational data={quotes} />
    </div>
  );
}

export default Container;
