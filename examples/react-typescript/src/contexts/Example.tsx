import { createContext, useContext, useState } from "react";

interface ExampleCtxInterface {
  users: User[];
  updateUsers: (array: User[]) => void;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

interface ProviderProps {
  children?: React.ReactNode;
}

// del 1
const ExampleContext = createContext<ExampleCtxInterface | null>(null);

// del 2
export const ExampleProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  function updateUsers(array: User[]) {
    setUsers(array)
  }

  return (
    <ExampleContext.Provider value={{ users, updateUsers, setUsers }}>
      {children}
    </ExampleContext.Provider>
  )
}

// del 3
export const useExampleContext = () => {
  const contextValue = useContext(ExampleContext);

  return contextValue;
}
