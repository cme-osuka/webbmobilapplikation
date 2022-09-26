import React, { useRef } from "react";

function Ref() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`Du har klickat på knappen ${ref.current} gånger`);
  }

  return (
    <div>
      <p>{ref.current}</p>
      <button onClick={handleClick}>Klicka på mig!</button>
    </div>
  );
}

export default Ref;
