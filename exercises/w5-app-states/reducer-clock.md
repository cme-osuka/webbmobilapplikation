# Reducer Clock

Med hjälp av en `reducer`-funktion och `useReducer` ska ni implementera en tidtagar-komponent som användaren kan använda för att ta tiden.

Skapa en komponent som innehåller tre knappar, `start`, `stop`, `reset` och en text-tagg som visar sekunder sen den startade `0s` och `running` när klockan är startad. (Och `not running` om klockan inte är startad).

När klockan är startad, ska tiden på skärmen "ticka" och öka varje sekund.

Bonus: Formattera tiden som `00:01` ex.

[Reactjs.org useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

Förslag på följande actions:
```js
{ type: "start" }
{ type: "stop" }
{ type: "reset" }
{ type: "tick" }
```