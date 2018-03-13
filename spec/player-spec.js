import { Player } from '../src/player.js';
import { diceRoller } from '../src/pig-dice.js';

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

  it('should update a players total', function() {
    var highroller = new Player(1, 20, 50)
    highroller.updateTotal();
    expect(highroller.total).toEqual(70);
  });

  it('sets players bank value equal to roll value, unless roll eq 1', function() {
    var roll = diceRoller();
    var newBank = roll + reusablePlayer.bank;
    reusablePlayer.updateBank(roll);
    if (roll === 1)
    {
      expect(reusablePlayer.bank).toEqual(0);
    }
    else {
      expect(reusablePlayer.bank).toEqual(newBank);
      expect(reusablePlayer.bank).toMatch(/[1][9]|[2][0-3]/);
    }

  });
});
