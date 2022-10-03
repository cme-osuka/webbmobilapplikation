import React from 'react'
import QuoteList from '../components/QuoteList'
import { useQuotesContext } from "../contexts/QuotesContext";

function Home() {
  const { quotes, getQuotes } = useQuotesContext();

  return (
    <div>
      <h2>Home</h2>
      <QuoteList data={quotes} />
    </div>
  )
}

export default Home