import React, { useState } from "react";
import { useTodosContext } from "../context/TodosContext";

let nextId = 3;

function AddTodo() {
  const [text, setText] = useState("");
  const { dispatch } = useTodosContext();

  return (
    <div>
      <input
        placeholder="Lägg till"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text: text,
            id: nextId++,
          });
          setText("");
        }}
      >
        Lägg till
      </button>
    </div>
  );
}

export default AddTodo;
