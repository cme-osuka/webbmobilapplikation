# Telefonbok!

*Inte gjort `6-telefon-bok-forts.md` än? Börja med den och kom tillbaka till denna efter det!*

Så nu kan vi lägga till användare på vår server, och det sparas i vår json-databas med hjälp av json-server. Fantastiskt!

Men tänk om någon skulle vilja uppdatera sitt nummer? Eller byter namn? *Eller båda?* Eller helt enkelt bli mer hemlig och ta bort sig från telefon-listan?

**json-server** innehåller inte bara metoder för att läsa och skriva data, utan även resterande CRUD-operationer i form av ett REST-api. Där vi med de andra HTTP-verben kan ändra och ta bort resurser på servern.

## Telefonbok & json-server

1. Lägg till möjligheten att ta bort en person ur listan, förslagsvis med en liten knapp vid sidan om personen. Gör så att användaren får ett meddelande som frågar "Är du säker?" innan den tas bort.
2. Lägg till möjligheten att ändra en användares nummer och namn.

*Kan det finnas några metoder på window-objektet som kan hjälpa dig? Kolla på MDN!*