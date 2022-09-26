import React, { useState } from "react";

function BigForm() {
  //const [name, setName] = useState("");
  //const [age, setAge] = useState(0);
  //const [maritalStatus, setMaritalStatus] = useState("single");
  //const [height, setHeight] = useState(175);

  const [state, setState] = useState({
    name: "",
    age: 0,
    maritalStatus: "single",
    height: 175,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const { value } = e.target;
    console.log({ [inputName]: value });

    setState((prevState) => ({ ...prevState, [inputName]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Maritalstatus:
        <input
          type="text"
          name="maritalstatus"
          value={state.maritalStatus}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={state.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Height:
        <input
          type="text"
          name="height"
          value={state.height}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BigForm;
