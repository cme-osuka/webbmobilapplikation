import React from "react";


const Item = (props) => {
  // Don't touch this
  if (typeof text === "string") {
    return <p data-testid="three-faulty-item">Inte ett nummer</p>
  }

  // Men detta går bra
  <p data-testid="three-item">{number}</p>
}


// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = () => {

  const numericItems = []

  return (
    <div>
      {
        numericItems.map()
      }
    </div>
  );
};

export default Three;
