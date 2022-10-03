import React from "react";

function Presentational(props) {
  return (
    <ul>
      {props.data.map((quote, i) => <li key={quote.id}>{quote.quote}</li>)}
    </ul>
  );
}

export default Presentational;
