import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  //kommentarer: uncontrolled från förra exemplet
  //const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    //const name = nameRef.current.value;
    console.log(`Vi submittade med namnet: ${name}`);
  };

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ControlledForm;
