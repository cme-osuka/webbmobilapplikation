# Telefonbok!

Vi ska skapa en rätt enkel telefonbok! Och till en början kommer vi bara lägga till namn till telefonboken.

Så vi kan börja med just det, att **lägga till en person**. Och om ni vill, kan ni använda följande som start-punkt. Där `personName` är till för att **kontrollera** inputfältet i exemplet.

```jsx
import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Ryan Dahl' }
  ]) 
  const [personName, setPersonName] = useState('')

  return (
    <div>
      <h2>Telefonbok</h2>
      <form>
        <div>
          namn: <input />
        </div>
        <div>
          <button type="submit">lägg till</button>
        </div>
      </form>
      <h2>Nummer</h2>
      ...
    </div>
  )
}

export default App
```

*Kom ihåg att HTML-forms kräver att du förhindrar default-beteendet!*

### Del 2

Gör så att användaren inte kan lägga till redan existerande namn i telefonboken. Javascript-arrayer har ett flertal metoder (som alla finns väl dokumenterade på MDN) för detta ändamålet. *Minns du när vi jämförde objekt med objekt och såg hur object equality fungerade? Kan vara något att ha i åtanke för den här!*

**Om användaren redan finns**, skriv ut med en `alert` att en person med det namnet redan existerar och förhindra att denne läggs till i telefonboken. 

### Del 3

Gör så att användaren kan lägga till ett nummer (*Är ju rätt bra att kunna, va?*) i telefonboken utöver namnet. 

### Del 4

Om du gjort övningarna i ordning, bör du vara mästare på att filtrera vid detta laget! **Lägg till ett sökfält som du kan filtrera listan av personer i telefonboken med, med hjälp av deras namn**. Skriver du in exempelvis "R" så borde alla resultat som innehåller "R" visas. 

Gör även så det blir *case-insensitive*!

*Vad händer om du lägger input-fältet inuti formen och trycker enter? Blir det tokigt?*