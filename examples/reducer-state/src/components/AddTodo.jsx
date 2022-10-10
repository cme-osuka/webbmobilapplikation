import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Lägg till"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(text);
          setText("");
        }}
      >
        Lägg till
      </button>
    </div>
  );
}

export default AddTodo;
