export function Player(playerNum, bank, total) {
  this.playerNum = playerNum;
  this.bank = bank;
  this.total = total;
}

Player.prototype.changePlayer = function() {
  var currentPlayer;
  if (this.playerNum === 1)
  {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  return currentPlayer;
};

Player.prototype.updateTotal = function() {
  this.total = this.total + this.bank;
}
