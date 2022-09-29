# Forms: Uncontrolled

När man pratar om Forms i React, så brukar de antingen vara `Controlled` eller `Uncontrolled`. Det vill säga att React *kontrollerar* vad som visas i exempelvis ett input-fält med ett state eller där React *inte kontrollerar* och man låter elementet i DOM'en styra värdet. 

Implementera en `Uncontrolled` form med hjälp av startern nedan. Dokumentation: [Reactjs.org Uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)

```jsx
import { useState } from 'react'

const App = () => {

  return (
    <div>
      <h2>Uncontrolled</h2>
      <form>
          <div>
          Namn: <input />
        </div>
        <div>
          Efternamn: <input />
        </div>
        <div>
          Email: <input />
        </div>
        <div>
          Telefon: <input />
        </div>
        <div>
          <button type="submit">Skicka</button>
        </div>
      </form>
    </div>
  )
}

export default App
```
