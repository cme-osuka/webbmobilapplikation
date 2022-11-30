import React, { useState } from 'react'
import './App.css'

function App() {

  // handleSubmit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    // don't do this
    // @ts-ignore
    const image = form.elements.namedItem("image").files[0];

    // data som t.ex. text, email, etc.
    const data = {
      email: "testcat@osuka.dev",
      description: "hello"
    };
    // När vi skickar bilder och filer förväntar sig Strapi
    // att vi skickar det i ett FormData-objekt
    const formData = new FormData();

    // Vi lägger till bilden med prefixet files.<fält-namnet i strapi>
    formData.append(`files.image`, image);
    // Och lägger till vårt objekt med email, description under data
    formData.append('data', JSON.stringify(data));

    await fetch("http://localhost:1337/api/cats", {
      method: "post",
      body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="text" name="description" />
        <input type="file" name="image" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
