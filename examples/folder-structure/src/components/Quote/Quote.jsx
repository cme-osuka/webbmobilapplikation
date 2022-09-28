import React from "react";
import Button from "../Button";

// Att flytta ut:
// onAuthorClick
// 

// onDelete
// 

function Quote(props) {
  return (
    <p>
      <span onClick={props.onAuthorClick}>{props.author}</span>
      <span>: {props.quote}</span>
      <Button onClick={props.onDelete} text="x" />
    </p>
  );
}

export default Quote;
