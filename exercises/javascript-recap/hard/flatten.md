# Flatten

Skriv en funktion `flatten` som tar ett argument `value` som är en nästad array av valfritt djup. Din funktion ska iterera funktionen och returnera en ny array med `1` i djup, som inkluderar alla värden i den givna arrayen, oavsett hur djupt värdet ligger.

**Exempel**
```
flatten([[1], [2]]) // => [1, 2]
flatten([2, 3, [4, [5, 6], [7]]]) // => [2, 3, 4, 5, 6, 7]
flatten([1, 2, 3]) // => [1, 2, 3]
```