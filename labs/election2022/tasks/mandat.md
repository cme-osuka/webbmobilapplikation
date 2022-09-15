# Mandat

Skriv en funktion `mandates` som tar emot en sträng `party` (partiförkortning) som argument. Hitta respektive partiförkortning under `partiMandat` i datan och logga dess namn och antal mandat till konsollen.

*tips: svårt att minnas vad för metoder det finns på en array? Ta en titt på dokumentationen - [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)* 

**Exempel**
```
mandates("C"); // => "Centerpartiet: 24"
```

## Alla partiers mandat

Skriv en funktion `allMandates`. Hitta samtliga partiers mandat och skriv ut dessa i konsollen på sättet som visas i exemplet nedan.

**Exempel**
```
allMandates(); 
// => "M: 67, S: 108, L: 16, C: 24 ..."
```

## Mandat per block

Skriv en funktion `calculateMandates` som tar emot en array `parties` som argument. Baserat på partierna som skickas in som argument i arrayen, räkna ut antalet mandat de partierna har sammanlagt.

**Exempel**
```
calculateMandates(["C", "L", "KD"]); 
// => "C, L, KD: 59 av 349 totalt"
```
