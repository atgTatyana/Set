import Team from '../Team';
import Character from '../Character';

const pandas = new Team();
const daemon = new Character('DDD', 'Daemon');
const magician = new Character('MMM', 'Magician');
const undead = new Character('UUU', 'Undead');

test('testing function add', () => {
  const result = pandas.add(magician);
  expect(result).toEqual([
    {
      name: 'MMM', type: 'Magician', health: 100, level: 1,
    },
  ]);
});

test('testing function add with Error', () => {
  expect(() => { pandas.add(magician); }).toThrowError('Такой персонаж уже существует в команде');
});

test('testing function addAll', () => {
  const result = pandas.addAll(magician, daemon, undead, daemon, magician);
  expect(result).toEqual([
    {
      name: 'MMM', type: 'Magician', health: 100, level: 1,
    },
    {
      name: 'DDD', type: 'Daemon', health: 100, level: 1,
    },
    {
      name: 'UUU', type: 'Undead', health: 100, level: 1,
    },
  ]);
});

test('testing function toArray', () => {
  const result = pandas.toArray();
  expect(result).toEqual([
    {
      name: 'MMM', type: 'Magician', health: 100, level: 1,
    },
    {
      name: 'DDD', type: 'Daemon', health: 100, level: 1,
    },
    {
      name: 'UUU', type: 'Undead', health: 100, level: 1,
    },
  ]);
});
