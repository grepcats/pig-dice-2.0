import { Player } from '../src/player.js';

describe('Player', function() {

  var reusablePlayer;

  beforeEach(function() {
   reusablePlayer = new Player(1, 17, 50);
  });

  it('should show how beforeEach() works', function() {
   console.log(reusablePlayer);
  });

  it('should create a player with 1 or 2, bank num, and total num', function() {
    expect(reusablePlayer.playerNum).toEqual(1);
    expect(reusablePlayer.bank).toEqual(17);
    expect(reusablePlayer.total).not.toEqual(5);
  });

  it('should change player given current player num', function() {
    var currentPlayer = reusablePlayer.changePlayer();
    expect(currentPlayer).toEqual(2);
    expect(currentPlayer).not.toEqual(1);
  });
});
