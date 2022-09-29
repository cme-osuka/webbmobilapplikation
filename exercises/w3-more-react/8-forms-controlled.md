# Forms: Controlled

När man pratar om Forms i React, så brukar de antingen vara `Controlled` eller `Uncontrolled`. Det vill säga att React *kontrollerar* vad som visas i exempelvis ett input-fält med ett state eller där React *inte kontrollerar* och man låter elementet i DOM'en styra värdet. 

Implementera en `Controlled` form med starter-koden här nedan. Dokumentation: [Reactjs.org Forms](https://reactjs.org/docs/forms.html)

```jsx
import { useState } from 'react'

const App = () => {

  return (
    <div>
      <h2>Controlled form</h2>
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
