const filter = require('../filter');

test('filter function exists', () => {
  expect(filter).toBeDefined();
})

test('filter function returns the correct foods', () => {
  expect(filter(["Korv", "Sylta", "Pannkakor", "Chips", "Lingonsylt"])).toEqual(['Korv', 'Sylta', 'Chips']);
})
