# Input-validering med useEffect

Du ska i denna övningen, med hjälp av `useEffect` validera så att inputfältet innehåller mer än 5 tecken. Om den inte gör det, ska den skriva ut i **röd text** "Ej valid input". 

Detta ska du implementera med hjälp av en `useEffect`.

Du kan utgå från följande starter:

```jsx
import { useEffect, useState } from "react";

const InputValidationChallenge = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <h3>useEffect validering!</h3>
      <label>
        Skriv något! (Och validera så innehållet är längre än 5 tecken!)
        <input type="text" id="input" autoComplete="off" onChange={handleChange}>
      </label>
      <p style={isValid ? { color: "green" } : { color: "red" }}>{isValid ? "Valid input" : "Ej valid input"}</p>
    </div>
  )
};

export default InputValidationChallenge;
```

*Om du behöver mer av en utmaning, gör om det till ett lösenords-fält och försök validera följande krav:*

```
- Åtminstone 10 tecken
- En blandning av uppercase och lowercase
- En blandning av nummer och tecken
- Åtminstone ett specialtecken (! @ # ? ])
- Ej mer än 3 av samma tecken i följd
```
