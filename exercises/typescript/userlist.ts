

// Med följande exempel-data, definiera typen User och använd typen i koden.

type User = unknown;

const users: unknown[] = [
  {
    name: "Ryan Dahl",
    age: 25,
    favoriteFood: "Nuggets"
  },
  {
    name: "Bryan Dahl",
    age: 31,
    favoriteFood: "Brunkål"
  }
]

function person(user: unknown) {
  console.log(`${user.name} is ${user.age} years old and loves ${user.favoriteFood}`)
}

users.forEach(person)