import React from 'react'

const Person = ({ data }) => {
  const { name, age, city } = data;
  return (
    <div>{name}, {age} - {city}</div>
  )
}

export default Person