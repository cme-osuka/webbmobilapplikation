import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const fileRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    console.log(`Vi submittade med namnet: ${name}`);
    console.log("fileInput", fileRef.current.files)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input type="text" ref={nameRef} />
        <input type="file" ref={fileRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UncontrolledForm;
