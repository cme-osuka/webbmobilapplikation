import { useState } from "react";

function SpecialCalculator() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [math, setMath] = useState("+");

  function calculate() {
    if (math === "+") return left + right;
    if (math === "-") return left - right;
    if (math === "*") return left * right;
    if (math === "/") return left / right;
  }

  return (
    <div>
      <button onClick={() => setLeft(left + 1)}>{left}</button>
      <select value={math} onChange={(event) => setMath(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={() => setRight(right + 1)}>{right}</button>
      <p>= {calculate()}</p>
    </div>
  );
}

export default SpecialCalculator;