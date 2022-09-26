# Quotes

![Bild](https://github.com/cme-osuka/webbmobilapplikation/blob/main/exercises/react-recap/images/quotes.png?raw=true)

Utvecklar-världen är full av anekdoter med tidlösa sanningar i form av korta "one-liners".

Ditt jobb är att bygga vidare på den här applikationen och lägga till en rad funktionaliteter:

```
import { useState } from "react";

function App() {
  const quotes = [
    "An organization that treats its programmers as morons will soon have programmers that are willing and able to act like morons only.",
    "Design and programming are human activities; forget that and all is lost.",
    "Before software can be reusable it first has to be usable.",
    "Premature optimization is the root of all evil in programming.",
    "You cannot teach beginners top-down programming, because they don't know which end is up.",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "Simple things should be simple, complex things should be possible.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live."
  ]

  return (
    <div>
      {quotes[0]}
    </div>
  )
}

export default App
```

## Del 1

Implementera en knapp man kan trycka på för att visa nästa `quote` i listan.

## Del 2

Implementera en knapp som gör att man kan rösta på den `quote` som visas. Där du även behöver skriva ut antalet röster följande `quote` har. Där du behöver hålla reda på svaren med hjälp av en av följande data-strukturer:

```
// som objekt
const votes = {0: 1, 1: 2, 2: 5, 3: 1}
// eller som en array
const votes = [1, 2, 5, 1]
```

**Tips: En const-variabel kanske inte är lämplig för att spara ett värde i React, använd istället en useState för att lagra datan**

## Del 3

Implementera en sista omgång funktionalitet där applikationen även visar den `quoten` med högst antal röster. Man ska inte kunna rösta på den. Är det lika mellan två `quotes` så räcker det med att bara du visar en av dom.

## Förslag på fortsättning

Du kan till exempel lägga till stöd för inmatning av egna quotes. Eller hitta något sätt att begränsa användaren så den bara kan rösta en gång totalt. (Till exempel genom localstorage)