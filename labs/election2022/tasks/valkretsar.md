# Valkretsar

Skriv en funktion `listDistricts`. Ta fram namnet på samtliga valkretsar från datan och skriv ut dessa i konsollen.

**Exempel**
```
listDistricts()
// "Stockholms kommun, Stockholms län, Uppsala län, Södermanlands län, ..."
```

## Röstresultat i en valkrets

Skriv en funktion `districtResults` som tar emot en sträng `districtName` som argument. Baserat på vilken valkrets `districtName` som passas in till funktionen, ta fram antalet röster för varje parti och skriv ut dessa i konsollen.

*Skulle den inte hitta det valda distriktet i datan, kolla så du har skrivit rätt. Är det rätt case? Finns det något du kan göra för att det ska bli case-insensitive?`

**Exempel**
```
districtResults("Södermanlands län")
// => "Södermanlands län"
// => "M: 34 407 (19,2%)"
// => "C: 10 690 (6,0%)"
// => "L: 6 457 (3,6%)"
// => ...
```

Bonus: Rangordna resultaten där den med flest röster hamnar överst, och den med minst kommer sist i listan.

## Partiresultat valkretsar

Skriv en funktion `partyResults` som tar emot en sträng `party` (partiförkortning) som argument. Baserat på partiförkortningen som passas till funktionen, ta fram partiets resultat i samtliga valkretsar och skriv ut det i konsollen.

**Exempel**
```
partyResults("MP");
// => "Resultat för MP per valkrets:"
// => "Stockholms kommun: 58 155 (10,1%)"
// => "Stockholms län: 40 141 (5,1%)"
// => "Uppsala län: 16 003 (6,7%)"
// => "Södermanlands län: 7 090 (4,0%)"
```

Bonus: Testa sedan att implementera så den baserat på % rangordnar resultaten, där valkretsen med högst procent skrivs ut först och den lägsta sist.
