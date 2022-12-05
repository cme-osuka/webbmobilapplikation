import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>
        Increment
      </button>
      <p>Current value is: {value}</p>
    </>
  );
};

export default Counter;
