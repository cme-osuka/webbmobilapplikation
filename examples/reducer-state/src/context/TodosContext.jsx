import { createContext, useReducer, useContext } from "react";
import { todoReducer } from "../reducers/todoReducer";

const initialTodos = [
  { id: 0, text: "Bli pro på React", done: true },
  { id: 1, text: "Bli pro på reducers", done: false },
  { id: 2, text: "Mata katten", done: false },
];

// 1. Skapa ett Context
export const TodosContext = createContext();

// 2. Skapa och Exportera en Provider
export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const providerValue = {
    todos,
    dispatch
  }

  return (
    <TodosContext.Provider value={providerValue}>
      {children}
    </TodosContext.Provider>
  )
}

// 3. Skapa en egen useContext
export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodosContext är utanför TodosProvidern");
  }

  return context;
}