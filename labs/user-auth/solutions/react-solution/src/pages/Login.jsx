import React, { useState } from 'react'
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try { 
      const response = await axios.post("http://localhost:8080/auth", {
        email: email,
        password: password
      })

      return response.data.token;
    } catch (axiosError) {
      const status = axiosError.response.data.status;
      const message = axiosError.response.data.message;

      if (status === "error") {
        setError(message);
      }
    }
  }

  const handleSubmit = async () => {
    await login();
    // navigera till Home
  }

  return (
    <div>
      <p>{error}</p>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Logga in</button>
    </div>
  )
}

export default Login