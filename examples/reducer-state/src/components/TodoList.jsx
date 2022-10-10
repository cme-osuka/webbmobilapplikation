import React, { useState } from "react";
import { useTodosContext } from "../context/TodosContext";

function TodoList() {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useTodosContext();

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            dispatch({
              type: "edited",
              todo: {
                ...todo,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: "edited",
            todo: {
              ...todo,
              done: e.target.checked,
            },
          });
        }}
      />
      {todoContent}
      <button
        onClick={() =>
          dispatch({
            type: "deleted",
            id: todo.id,
          })
        }
      >
        Delete
      </button>
    </label>
  );
}

export default TodoList;
