import React, { useState } from 'react'


// Lös den oändliga loopen!
// Jag har skapat en oändlig render-loop nedan
// som kommer göra att det kraschar. 
// Där tanken är att den bara ska uppdatera en gång!

function Five() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count => count + 1)
  }, [count])

  return (
    <div data-testid="five-count">{count}</div>
  )
}

export default Five