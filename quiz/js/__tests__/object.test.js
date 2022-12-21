const printName = require('../object')

const person = {
  firstName: "Oscar",
  lastName: "Nilsson",
  age: 30
}

test('printName function exists', () => {
  expect(printName).toBeDefined()
})

test('printName function returns the correct name', () => {
  expect(printName(person.firstName, person.lastName)).toEqual('Oscar Nilsson');
})