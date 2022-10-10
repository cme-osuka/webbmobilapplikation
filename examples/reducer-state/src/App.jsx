import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const initialTodos = [
  { id: 0, text: "Bli pro på React", done: true },
  { id: 1, text: "Bli pro på reducers", done: false },
  { id: 2, text: "Mata katten", done: false },
];
let nextId = 3;

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
