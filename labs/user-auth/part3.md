# Del 3 - "Integrera er Store i applikationen"

När ni har satt upp er Store och gjort så att användarens Token lagras vid inloggning, så ska vi skapa en profilsida som bara är tillgänglig för inloggade användare.

Profilsidan ska innehålla deras namn, email och ålder. 

Vi ska även göra det möjligt för vår användare att logga ut!

## Du behöver göra följande:
1. Utgå från applikationen vi skapade i tidigare delar
2. Lägg till en knapp för att logga ut (och ta bort token)
3. Skapa en profilsida som bara är tillgänglig om man är inloggad (Är man inte inloggad, ska man inte få lov att se innehållet på sidan)
4. På profilsidan ska ni hämta och visa information från `/me` om användaren. Lagra och läs den här datan i vår Store vi skapade tidigare.