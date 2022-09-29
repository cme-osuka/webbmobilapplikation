# Quotes (med Routing)

*Inte gjort `w2-react-recap/6-quotes-app.md` än? Börja med den och kom tillbaka till denna efter det!*

I en tidigare övning skapade vi en quotes-app med ett gäng utvecklar-anekdoter, där man kunde gå igenom en lista på quotes och rösta på sina favoriter.

Ditt uppdrag är nu att implementera Routing i denna applikationen, med hjälp av [React router](https://reactrouter.com/en/main). Är du osäker på hur du gör detta? Ta gärna tiden och gå genom [deras tutorial](https://reactrouter.com/en/main/start/tutorial), eftersom den uppdateras löpande - och tar runt en halvtimme-timme att klara.

Du behöver lägga till följande routes:

- `/` En lista på alla quotes
- `/quote/1` En enskild quote (och dess röster)
- `/create` Skapa/lägga till en ny quote
- `/about` En kort beskrivning av applikationen

Samt: 
- En Navbar med länkar till `Alla quotes`, `Skapa ny` och `Om appen`.
- En Footer som ska synas på botten oavsett vilken sida du är på.
- Länkarna på listan av alla quotes i `/` ska ta dig till en route med respektive quote. Trycker du på quote med id 5, ska du komma till `/quote/5`.
