# Bygg en ersättare till Teams

Det har varit lite av ett running joke, efter vi haft ganska gott om problem med Teams - att bygga en bättre version av Teams. Därför är det en av de möjliga idéerna på vad ni kan bygga som grupparbete sista veckan!

Men att bygga ett helt teams är inget man gör på ett par dagar, så vi kommer fokusera på ett element av Teams: **nämligen Video-chatten**. Där ni ska bygga en så nära kopia av UI't ni kan, gärna med en fungerande chatt (det har vi ju satt upp med Node/Socket.io förut!) och med hjälp av verktyg som **Daily.co** så kommer detta nog inte vara något problem.

## Daily.co
Daily.co är ett enkelt alternativ för att göra det lättare att skapa videochatt-applikationer.

De tillhandahåller ett helper-bibliotek som gör det lättare att bygga Video-applikationer med React och Daily.co. Du hittar det på https://docs.daily.co/reference/daily-react

**Om möjligt, undvik att använda deras "prebuilt ui" och använd istället deras `<DailyVideo />`-komponent.**

## Dela upp det i delar innan ni börjar jobba, och dela upp ansvaret
Det är en del olika delar, och ni kan absolut sätta er ner och bygga varje del tillsammans. Jag skulle rekommendera att ni tittar på på de olika delarna och delar upp det mellan er i gruppen.

- Video-rutan (dvs. rendera själva video-rutorna)
- "Vilka är närvarande"-bubblorna
- Chatten
- Själva "ramen" som håller samtliga delar med Mute-knapp, stänga av video, dölja chatten, etc. (Alla andra val än de jag nämnde kan ni hoppa över, för att hålla storleken på scopet nere)

