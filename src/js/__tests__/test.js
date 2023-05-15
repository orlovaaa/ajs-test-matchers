import sortHeroes from '../app';

test('sort by health', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const heroesHealth = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortHeroes(heroes)).toEqual(heroesHealth);
});

test('sort by health not to be', () => {
  const heroes = [
    { name: 'мечник', health: 67 },
    { name: 'маг', health: 2 },
    { name: 'лучник', health: 100 },
  ];
  const heroesHealth = [
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 67 },
    { name: 'маг', health: 2 },
  ];
  expect(sortHeroes(heroes)).not.toBe(heroesHealth);
});
