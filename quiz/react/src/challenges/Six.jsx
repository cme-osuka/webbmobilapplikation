import React, { useState } from 'react'

// Slutför följande komponent.
// Tanken är att den ska skriva ut för och efternamn som t.ex.
// "Hi, my name is: Oscar Nilsson" i p-taggen.
//
// Det saknas några delar för att den ska göra det.
// Identifiera de sakerna som saknas och fixa komponenten!

function Six() {
  // Ändra inte statet nedan
  const [input, setInput] = useState({})

  function handleInput(e) {
    const { name: inputName, value } = e.target;
    // Rör inte funktionen nedan
    setInput(input => ({ ...input, [inputName]: value}))
  }

  return (
    <div>
      <p data-testid="six-text">Hi, my name is: {input.firstName} {input.lastName}</p>
      <input onChange={handleInput} type="text" name="firstName" data-testid="six-firstName" />
      <input onChange={handleInput} type="text" name="lastName" data-testid="six-lastName" />
    </div>
  )
}

export default Six