import React, { useState } from 'react'

type Props = {}

const StateExample = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<User>({ name: "", age: 0 });
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div>
      <p>{ info.name }</p>
      <ul>
        { users.map((user) => (
          <li>{user.name}: {user.age}</li>
        ))}
      </ul>
    </div>
  )
}