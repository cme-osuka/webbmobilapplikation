# En lite trevligare tabell!

1. Utgå från föregående tabell eller skapa en komponent som tar en `array` *inte ett objekt längre* som en prop och renderar ett `<table>`-element.
2. I tabellen, lägg till åtminstone tre kolumner: `image`, `name` och `description`. 
3. Rendera ut datan du får med hjälp av ett `GET`-anrop till `https://api.punkapi.com/v2/beers`
4. Lägg till en `input` som ska agera sökfält till din tabell. När input-fältet är tomt ska samtliga öl-sorter visas. När du skriver något i fältet ska du kunna söka/filtrera resultaten och bara visa de som innehåller din "söktext". 