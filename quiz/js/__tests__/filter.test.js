const filter = require('../filter');

test('filter function exists', () => {
  expect(filter).toBeDefined();
})

test('filter function returns the correct number of characters', () => {
  expect(filter(['Pannkakor', 'Lingonsylt', 'Fläsksvålar'])).toEqual(['Korv', 'Sylta', 'Chips']);
})
