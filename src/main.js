import { diceRoller } from './pig-dice.js';
import { Player } from './player.js';

$(document).ready(function(){
  var player1 = new Player(1, 0, 0);
  var player2 = new Player(2, 0, 0);
  var player = 1;
  var currentPlayer;
  $("#playerTurn").html("<h3>Player " + player + " Turn</h3>")

  //Roll Logic
  $("#roll").click(function() {
    var rollValue = diceRoller();
    // determine player
    if (player === 1) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }
    // update bank and change player
    if (rollValue === 1) {
      currentPlayer.updateBank(rollValue);
      $("#bankTotal" + player).text(currentPlayer.bank);
      player = currentPlayer.changePlayer();
      $("#playerTurn").html("<h3>Player " + player + " Turn</h3>")
    } else {
      currentPlayer.updateBank(rollValue);
      $("#bankTotal" + player).text(currentPlayer.bank);
    }
    // debugger
  });

  //HOLD
  $("#hold").click(function(){
    currentPlayer.updateTotal();
    currentPlayer.bank = 0;
    $("#bankTotal" + player).text(currentPlayer.bank);
    $("#scoreTotal" + player).text(currentPlayer.total);
    player = currentPlayer.changePlayer();
    $("#playerTurn").html("<h3>Player " + player + " Turn</h3>")
  });

  //hook up hold functionality and adding to total






}); // doc ready
