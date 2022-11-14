# Typsäker datafetching

När vi hämtar data från APIer, så kan vi aldrig med säkerhet veta vad det är för data vi får. Det är inte heller något Typescript kan lösa åt oss - utan vi behöver se till att våra requests är s.k. "Typsäkra".

Normalt sett när vi hämtar data från ett API, med exempelvis Axios kan det se ut såhär:

```ts
async function fetchData(path: string): Promise<unknown> {
  const response = await axios.get(path);
  return response.data;
}
```

Där vi säger att den rätt generella funktionen `fetchData` tar emot parametern "path" av typen string, och returnerar ett Promise, som returnerar datatypen unknown när promisen är resolvas.

Om vi skulle använda den funktionen någon annanstans för att göra ett api-anrop, skulle det kunna se ut som exemplet nedan:

```js
async function getPerson() {
  const person = await fetchData("/person");
  return person;
}
```

Men raden `return person;` kommer ge oss ett typfel. Där vi behöver se till att datan vi hämtar faktiskt motsvarar den typen för att lösa typfelet. Med hjälp av s.k. "Typ-predikat" kan vi kolla så datan stämmer överens. 

```ts
type User = {
  name: string;
  id: string;
  email: string;
}

function isUser(user: any): user is User {
  return "id" in user && "name" in user && "email" in user;
}
```

Med hjälp av den funktionen kan vi typsäkra vårt anrop och se till att datan vi får matchar vår typ "User". (Eller den typen vi nu jobbar med)

### Ditt uppdrag

Skapa en enklare applikation som hämtar information om dagens datum från https://api.dryg.net/dagar/v2/, typsäkrar anropet med hjälp av typ-predikat och skriver ut dagens namnsdagar.

Tips: Börja med att studera data-strukturen du får från APIet och skriv en typ för denna. 

(Du kan läsa lite mer om Typ-predikat på: https://fettblog.eu/typescript-type-predicates/)