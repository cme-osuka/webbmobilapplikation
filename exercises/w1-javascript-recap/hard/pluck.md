# Pluck

Skriv en funktion `pluck` som tar en array av objekt som argument och en sträng som andra argument. Välj och returnera värdena från objekten i arrayen baserat på det andra givna argumentet.

**Exempel**
```
const students = [{name: "Ryan", age: 41}, {name: "Bryan", age: 32}, {name: "Fryan", age: 55}]

pluck(students, "age") // => [41, 32, 55]
```