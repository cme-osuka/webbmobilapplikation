import React, { useContext } from 'react'
import { QuotesContext } from "../contexts/QuotesContext";
import Quote from '../components/Quote'

function SingleQuote() {
  const quotes = useContext(QuotesContext);

  const id = 1;
  const quote = quotes.find(quote => quote.id === id);

  return (
    <div>
      <h2>Single Quote</h2>
      <Quote data={quote} />
    </div>
  )
}

export default SingleQuote