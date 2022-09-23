# Laboration Tic Tac Toe

Det är dags för en fredags-labb! Denna gången kommer vi bygga något de flesta frontendare bygger åtminstone en gång - **Tic Tac Toe**! (*Ni har säkert byggt en redan!*)

Vi kommer bygga den med React, där jag har skapat en liten starter-app för de som vill slippa tänka på CSS och fokusera på att öva på React. I starter-appen finns de komponenter du behöver för att bygga den här applikationen: `App`, `Board` och `Square`. 

När du fått ihop det - var inte rädd för att låta kreativiteten ta över, om det så är att lägga till easter eggs, gå crazy med styling eller vad du nu kan hitta på!

![Bild](https://github.com/cme-osuka/webbmobilapplikation/blob/main/labs/tic-tac-toe/images/tictactoe.png?raw=true)


## Tips: Hitta en vinnare

För att hitta en vinnare i spelet, behöver du ett sätt att titta på brädet och se ifall någon har fått tre i rad. Här har jag lånat ett exempel från Reacts dokumentation på hur de räknar ut vinnaren i Tic Tac Toe. Den fungerar på det viset att den tar en array `squares` och kollar efter möjliga rader som skulle innebära att en person vinner. 

```js
/* Deras representation av brädet, i en array
[
  0, 1, 2 <-- Övre raden
  3, 4, 5 <-- Raden i mitten
  6, 7, 8 <-- Undre raden
]
[
  "O", null, "X",
  "X", "X", "O",
  "O", null, null
]
*/

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

## Bonus: Historik
Var det för lätt? Implementera så det blir det möjligt att gå tillbaks i tiden, till ett föregående drag! 