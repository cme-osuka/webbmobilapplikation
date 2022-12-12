
const p = "The quick brown fox jumps over the lazy dog."

test("Testing that replace works as expected", () => {
  expect(p.replace("The", "Ze")).toBe("Ze quick brown fox jumps over the lazy dog.")
})

test("Testing if replace is case sensitive", () => {
  expect(p.replace("The", "Ze")).not.toBe("Ze quick brown fox jumps over ze lazy dog.")
})