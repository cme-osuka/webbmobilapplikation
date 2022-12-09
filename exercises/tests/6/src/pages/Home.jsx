import React from "react";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";

function Home() {
  const user = useRouteLoaderData("root");

  return (
    <div>
      <h1>Hej {user.name}</h1>
      <Link to="/repos">Repositories</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Home;
