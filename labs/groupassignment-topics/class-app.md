# Bygg en bättre klass-app!

Under kursernas gång har vi kämpat med egenbyggda lösningar som väntelistan, till Teams handuppräckning och dyl. Allt på olika plattformar och nya hemsidor. Vi har länkar och Git-repon i mängder. Hur ska man kunna hålla reda på allt!?

Det kan ni lösa, genom att bygga en klass-app som har all den funktionaliteten samlat i en plats! Och om det är en portal ni bygger för desktop eller om ni vill fortsätta bygga främst för mobiler är upp till er. En app vi hade behövt!

Och vad för funktionalitet ni vill inkludera är helt upp till er, men jag har en kort lista på förslag:
- Waiting-list (exempel finns från vår waitinglist på cme-osuka)
- Grupp-lista (Skapa och gå med för t.ex. gruppuppgifter, självstudier, hackathons)
- Länk-databas (kategorier? dokumentation? bra paket-rekommendationer?)
- Feed på senaste uppdaterade Repon från de i klassen

## Möjlighet: Bygg ett riktigt verktyg
Detta är ett verktyg som med tillräckligt med kärlek, tid och energi kan komma väl till nytta till inte bara er och de som går på er skola - utan för många andra som har samma problem som vi haft.

## Bygg med separata klasser in mind!
Det är lätt att bygga en applikation där alla är samlade, men om vi skulle ha tänker att man håller isär klasser redan från början så kan det bli lättare att göra det tillgängligt för andra skolor och klasser.

## Backend
För att kunna hålla reda på användare, waiting-list och allt som behövs - rekommenderar jag att ni sätter upp en enklare form av databas. Antingen om ni väljer att skriva en själva i Express eller t.ex. med ett CMS som Strapi.

Med lite krux kan du även skriva Express-liknande kod i Strapi (bygger på Koa, Express 2.0), för t.ex. Socket.io-stöd :)

## Exempel: Superapp - en app med flera appar!
Ett vanligare fenomen med appar som har olika typer av funktionalitet, är att man bygger en s.k. Superapp. En app som så gott som innehåller flera olika appar i samma representerade som ikoner på en huvudskärm.

Detta är ett exempel på hur ni skulle kunna bygga det, och det gör att ni kan bygga de olika delarna helt separat från varandra om ni är flera stycken i er grupp. De kan alltså vara så gott som skilda.

Ett bildexempel är som denna designen:

![image](https://cdn.dribbble.com/users/1179762/screenshots/17340912/media/964c7c0df88831c40f3ca01938cf544f.png?compress=1&resize=1000x750&vertical=top)

## Dela upp det i delar innan ni börjar jobba, och dela upp ansvaret
Det är en del olika delar, och ni kan absolut sätta er ner och bygga varje del tillsammans. Jag skulle rekommendera att ni tittar på på de olika delarna och delar upp det mellan er i gruppen.