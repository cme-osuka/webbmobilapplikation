# Customer feedback

![Bild](https://github.com/cme-osuka/webbmobilapplikation/blob/main/exercises/react-recap/images/feedback.png?raw=true)

## Del 1

Du ska skapa en applikation som kan ta emot feedback från kunder. Den kommer ha tre knappar, "Bra" (1 poäng), "Helt ok" (0 poäng) och Dåligt (-1 poäng). Den ska även visa statistik på hur många tryck som skett för varje knapp, samt total-siffra, ett snitt (mellan 1 och -1) och antalet positiva betyg.

## Del 2

När det fungerar, är det dags att refaktorera statistiken in till en egen komponent. Dina states bör fortfarande vara inuti Rot/App-komponenten. 

## Del 3 

Gör så att statistiken bara visas när det har givits feedback, och skriv ut exempelvis "Ingen feedback mottagen ännu."

## Del 4

Fortsätt refaktorera/bryta ut delar av applikationen. Skapa en egen `Button`-komponent för knappen som används för att sätta betyget. Samt en komponent `StatisticItem` för att visa en enskild statistik-rad inuti `Statistics`. Exempelvis:

```
// Statistics.jsx
<div>
  <StatisticItem text="Bra" value={...}>
  <StatisticItem text="Totalt" value={...}>
  <StatisticItem text="Positiva" value={...}>
</div>
```

**Applikationens state borde fortfarande vara i App-komponenten.**

## Förslag på fortsättning

Resten är upp till din fantasi! Du skulle till exempel kunna implementera en "kundservice–representant"-väljare där man kan välja en anställd att ge betyg till, och hålla reda på betygen som respektive person har - och det samlade betyget.

