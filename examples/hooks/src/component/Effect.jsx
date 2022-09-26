import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Den här effecten har körts!");
    document.title = `Räknare: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Du har klickat på knappen {count} gånger</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Öka</button>
    </div>
  );
}

export default Effect;
