import React from "react";

// props:
// text: sträng
// onClick: en onclick-funktion

function Button(props) {
  return (
    <button
      style={{ backgroundColor: "green", borderRadius: "0" }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
