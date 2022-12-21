const count = require("../count");

test("count function exists", () => {
  expect(count).toBeDefined();
})

test("count function returns the correct number of characters", () => {
  expect(count("ABCDEFG123")).toEqual(10);
})