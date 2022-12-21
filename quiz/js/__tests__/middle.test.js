const middle = require("../middle");

test("middle function exists", () => {
  expect(middle).toBeDefined();
})

test("middle function returns the correct value", () => {
  expect(middle(["1", "2", "3", "4", "5"])).toEqual("3");
  expect(middle(["A", "B", "C", "D", "E", "F", "G", "H", "I"])).toEqual("E");
})