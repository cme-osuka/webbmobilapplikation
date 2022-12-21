const map = require('../map');

test('map function exists', () => {
  expect(map).toBeDefined();
})

test('map function returns the correct list', () => {
  expect(map(['Sill', 'Julmust', 'Korv', 'Janssons', 'Svill'])).toEqual(['JulSill', 'JulJulmust', 'JulKorv', 'JulJanssons', 'JulSvill']);
})