const axios = require("axios");

let token;

async function login(email, password) {
  const response = await axios.post("http://localhost:8080/auth", {
    email: email,
    password: password
  })

  console.log(response.status);

  token = response.data.token;
}

async function getUserData(token) {
  const response = await axios.get("http://localhost:8080/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });


  console.log(response.data);
}

async function doEverything() {
  await login("bob@example.cm", "bob123");
  await getUserData(token);
}

doEverything();
