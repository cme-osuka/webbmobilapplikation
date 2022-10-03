import React from "react";

function Quote(props) {
  return (
    <div>
      <h3>{props.data.quote}</h3>
      <span>{props.data.author}</span>
    </div>
  );
}

export default Quote;
