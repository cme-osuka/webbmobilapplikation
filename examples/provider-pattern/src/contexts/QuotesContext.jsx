import { createContext, useContext, useState } from "react";

// 1. createContext
export const QuotesContext = createContext();

// 2. Exportera Provider
export function QuotesProvider({ children }) {
  const [data, setData] = useState([
    {
      id: 1,
      quote: "When nothing goes right, go left",
      author: "Aleks",
    },
    {
      id: 2,
      quote: "It is what it is",
      author: "Katerina",
    },
    {
      id: 3,
      quote: "Happy wife happy life",
      author: "Macke",
    },
    {
      id: 4,
      quote: "Jag skriver React, alltså finns jag",
      author: "Petter",
    },
  ])

  function getQuotes() {
    // fetch
    setData([{}, {}, {}])
  }

  const providerValue = {
    quotes: data,
    getQuotes,
  }

  return (
    <QuotesContext.Provider value={providerValue}>
      { children }
    </QuotesContext.Provider>
  )
}


// 3. egen useContext-hook
export function useQuotesContext() {
  const context = useContext(QuotesContext);

  if (!context) {
    throw new Error("useQuotesContext är utanför QuotesProvidern");
  }

  return context;
}