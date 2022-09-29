# Telefonbok (fortsättning)

*Inte gjort `4-telefon-bok.md` än? Börja med den och kom tillbaka till denna efter det!*

I en tidigare övning skapade vi en enklare telefonbok, där vi kunde lägga till ett namn och ett nummer till personen i en liten telefonbok.

Detta sparade vi tidigare rakt upp och ner i vårt state, som återställs varje gång vi laddar om sidan. *Inte jätteoptimalt*!

Det kan vi lösa genom att bygga en egen server med `node`, `express` och en databas, *vilket kan ta sin tid*. Men som tur är finns det verktyg som [json-server](https://github.com/typicode/json-server) som låter oss använda en `json`-fil som databas och skapar ett REST-api runt den åt oss på bara några sekunder. **Perfekt för oss Frontendare!**

## Telefonbok & json-server

1. Skapa en db.json och starta en server med hjälp av `json-server`
2. När du skapar en ny användare, lägg till den på servern innan du uppdaterar ditt state.
3. När applikationen startar ska den hämta alla personer från servern och populera ditt state.

**Kom ihåg att läsa dokumentationen!**