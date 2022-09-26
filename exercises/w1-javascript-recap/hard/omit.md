# Omit

Skriv en funktion `omit` som tar en array av objekt som första argument. Det andra argumentet `key` bör vara en sträng. Returnera en kopia av arrayen med alla objekt, men där du tar bort den givna `key`n från objektet.

**Exempel**
```
omit([
  {
    name: "Ryan",
    age: 41,
  },
  {
    name: "Bryan",
    age: 73
  }
], "age") // => [{name: "Ryan"}, {name: "Bryan"}]
```