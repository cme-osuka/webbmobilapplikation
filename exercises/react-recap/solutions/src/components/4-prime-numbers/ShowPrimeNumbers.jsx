import { useState, useEffect } from "react";

function ShowPrimeNumbers({ limit }) {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  useEffect(() => {
    const newPrimeNumbers = [];

    for (let n = 2; n <= limit; n++) {
      let isNPrime = true;
      for (let index = 0; index < newPrimeNumbers.length && isNPrime; index++) {
        if (n % newPrimeNumbers[index] === 0) isNPrime = false;
      }
      if (isNPrime) newPrimeNumbers.push(n);
    }

    setPrimeNumbers(newPrimeNumbers);
  }, [limit]);

  return (
    <div>
      <p>Här är alla primtal upp till {limit}</p>
      <p>
        {primeNumbers.map((number) => (
          <span style={{ padding: "0 3px" }} key={number}>
            {number}
          </span>
        ))}
      </p>
    </div>
  );
}

export default ShowPrimeNumbers;
