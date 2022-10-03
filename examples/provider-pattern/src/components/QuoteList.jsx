import React from "react";
import Quote from "./Quote";

function QuoteList(props) {
  return (
    <div>
      {props.data.map((quote) => (
        <Quote key={quote.id} data={quote} />
      ))}
    </div>
  );
}

export default QuoteList;
