# Ages

Skriv en funktion `getAges` som tar en array av objekt som argument. Returnera en ny array som innehåller ålderns (`age`) värde som är satt i objekten. Om det inte finns en ålder, ignorera objektet.

**Exempel**
```
let person1 = {name: "Ryan", age: 41};
let person2 = {name: "Carl", age: 19};
let person3 = {name: "Stevie"};
let personArray = [person1, person2, person3];

getAges(personArray) // => [41, 19];
```