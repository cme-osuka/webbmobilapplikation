# Din egna dröm-kurs

Du har fått i uppgift att bygga en egen kurs och behöver bygga en kurs-applikation för att visa vilka kurser du ska undervisa och hur många övningar det finns i varje.

## Struktur

```
const course = {
  id: 1,
  name: "Deno Web3 super developer course",
  parts: [
    {
      name: "Fundamentals of Deno",
      exercises: 13,
      id: 1
    },
    {
      name: "Why you need Web3",
      exercises: 4,
      id: 2
    },
    {
      name: "Props is good fun!",
      exercises: 10,
      id: 3
    },
    {
      name: "Complex state is complex",
      exercises: 7,
      id: 4
    },
  ]
}

return <Course course={course} />
```

## Course-komponent

Du behöver skapa en komponent `Course` som skriver ut informationen från kursen ovan. Strukturellt skulle det kunna se ut ungefär såhär:

```
App
  Course
    Header
    Content
      Part
      Part
      Part
      ...
```

Där `Course` innehåller komponenterna som definierats i strukturen ovan, som är ansvariga för att skriva ut kursnamnet och dess delar. Och skulle kunna se ut såhär:

![Bild](https://github.com/cme-osuka/webbmobilapplikation/blob/main/exercises/react-recap/images/dreamcourses.png?raw=true)

*Där komponenten ska fungera på samma sätt oavsett hur många delar en kurs har*, så se till att den fungerar om du lägger till eller tar bort en del av en kurs.

**Och dubbelkolla så det inte finns några fel i konsollen!**

## Antalet övningar

Skriv även ut antalet övningar kursen innehåller, som borde visa rätt antal oavsett hur många delar en kurs har och om du skulle ta bort eller lägga till en del av en kurs.

## Antalet övningar, fast med Reduce

Om du inte redan gjort det, räkna ut summan med hjälp av array-metoden **reduce**.

Här kan du behöva använda `google` för att hitta hur reduce används.

## Lägg till stöd för obestämt antal kurser


```
const courses = [{
  id: 1,
  name: "Deno Web3 super developer course",
  parts: [
    {
      name: "Fundamentals of Deno",
      exercises: 13,
      id: 1
    },
    {
      name: "Why you need Web3",
      exercises: 4,
      id: 2
    },
    {
      name: "Props is good fun!",
      exercises: 10,
      id: 3
    },
    {
      name: "Complex state is complex",
      exercises: 7,
      id: 4
    },
  ]
},
{
  id: 2,
  name: "Hologram app developer",
  parts: [
    {
      name: "Fundamentals of Holograms",
      exercises: 5,
      id: 1
    },
    {
      name: "Essential physics",
      exercises: 7,
      id: 2
    },
    {
      name: "3d modeling",
      exercises: 8,
      id: 3
    },
    {
      name: "Why this is a bad idea",
      exercises: 12,
      id: 4
    },
  ]
}]

return (
  <div>
    // Kurserna här
  </div>
)
```

## Refaktorera ut Course-komponenten

Om du har skapat Course-komponenten i samma fil, kan jag även rekommendera att bryta ut den till en egen fil `Course.jsx` som du sedan importerar i din `App`-komponent.