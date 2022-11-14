import { createContext, useContext, useState } from "react";

interface Wish {
  text: string;
}

interface WishCtxInterface {
  wishes: Wish[];
  addWish: (wish: Wish) => void;
}

// 1. Skapa Context
const WishContext = createContext<WishCtxInterface | null>(null);

// 2. Skapar en Provider
export const WishProvider = ({ children }: { children?: React.ReactNode }) => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  function addWish(wish: Wish) {
    setWishes(prevWishes => ([
      ...prevWishes,
      wish
    ]))
  }

  return (
    <WishContext.Provider value={{ wishes, addWish }}>
      { children }
    </WishContext.Provider>
  )
}

// 3. Skapar en Hook
export const useWishes = () => {
  const contextValues = useContext(WishContext);
  
  if (!contextValues) {
    throw new Error("useWishes is used outside its context");
  }

  return contextValues;
}