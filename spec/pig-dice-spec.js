import { diceRoller } from '../src/pig-dice.js';

describe('diceRoller', function() {
  it('should return a number between 1 and 6 inclusive', function() {
    var testNum = diceRoller();
    expect(testNum).not.toEqual(7);
    expect(testNum).toEqual(/[1-6]/);
  });
});
