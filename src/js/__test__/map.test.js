import ErrorRepository from '../map';

test('Check 100', () => {
  const map = new ErrorRepository();
  expect(() => {
    map.add(100, 'There are no more resources');
    map.translate(100);
  }).not.toThrow();
});

test('Check 100 #2', () => {
  const expected = 'There are no more resources';
  const map = new ErrorRepository();
  map.add(100, 'There are no more resources');
  expect(map.translate(100)).toEqual(expected);
});

test('Check Error throw', () => {
  const map = new ErrorRepository();
  map.add(100, 'There are no more resources');
  map.add(200, "You can't attack your friend");
  map.add(300, "You can't do this. Your level is too low");
  expect(() => {
    map.translate(500);
  }).toThrow();
});
