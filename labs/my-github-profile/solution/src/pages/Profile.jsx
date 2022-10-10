import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'

function Profile() {
  const user = useRouteLoaderData("root");

  return (
    <div>
      <img src={user.avatar_url} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}

export default Profile