import React, { useEffect, useState } from "react";

function EffectDependencies() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    registered: false,
  });

  useEffect(() => {
    console.log("Effekten har körts!");
  }, [state.name, state.registered]);

  const handleAdd = () => {
    setState((prevState) => ({ ...prevState, name: name }));
  };

  const handleRegister = () => {
    setState((prevState) => ({
      ...prevState,
      registered: true,
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{`name: ${state.name}, registered: ${state.registered}`}</p>
      <button onClick={handleAdd}>Spara namn</button>
      <button onClick={handleRegister}>
        {state.registered ? "Registrerad" : "Registrera"}
      </button>
    </div>
  );
}

export default EffectDependencies;
