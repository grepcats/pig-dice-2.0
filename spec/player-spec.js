import { player } from '../src/player.js';

describe('player', function() {
  it('should create a player with 1 or 2, bank num, and total num', function() {
    var testPlayer = new player(1, 0, 0);
    expect(testPlayer.playerNum).toEqual(1);
    expect(testPlayer.bank).toEqual(0);
    expect(testPlayer.total).not.toEqual(5);
  });
});
