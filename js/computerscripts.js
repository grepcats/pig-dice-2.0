function computer() {
  this.bank = 0;
  this.score = 0;
}

function computerRoll() {
  var counter = 0;
  for (var i = 0; i <= 1 ; i++) {
    var roll = diceRoller();
    if (roll !== 1) {
      counter += roll;
      if (i === 1) {
        return counter;
      }
    } else {
      return 1;
    }
  }
};

function diceRoller() {
// math floor rounds down to whole number, math random generates random decimal between 0 and 1, e.g. 0.798987
var rollValue = Math.floor(Math.random()*6)+1;
return rollValue;
}

function playerTurn(x) {
  var currentPlayer;
  if (x === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
    return currentPlayer;
}

function rollAction(counter, roll) {
  if (roll === 1) {
    counter = 0;
  } else {
    counter = counter + roll;
  }
  return counter;
}

$(document).ready(function() {
  var player = 1;
  var roll = 0;
  var counter = 0;
  var bank1 = 0;
  var bank2 = 0;
  var score1 = 0;
  var score2 = 0;

  $("#bankTotal1").text(bank1);
  $("#halBank").text(bank2);
  $("#scoreTotal1").text(score1);
  $("#halScore").text(score2);
  $("#playerTurn").text("Player " + player + " turn");

  // ROLL UI
  $("#roll").click(function(){
    roll = diceRoller();
    $("#rollValue").text(roll);
    counter = rollAction(counter, roll);

    if (player === 1) {
      bank1 = counter;
      $("#bankTotal1").text(bank1);
    }

    if (roll === 1) {
      player = playerTurn(player);
      alert("You rolled a 1. It's Hal's turn.");
      bank1 = 0;
      var compTurn = computerRoll();
      if (compTurn === 1) {
        player = playerTurn(player);
        alert("Hal was unlucky. Your turn.")
      } else if (compTurn !== 1) {
        score2 = score2 + compTurn;
        $("#halScore").text(score2);
        alert("Hal scored " + compTurn + ". Your turn.")
        player = playerTurn(player);
        if (score2 >= 100) {
          $("#playerTurn").text("Hal WINS!");
          $("#winner").show();
          $("#restart").show();
          $("#hold").hide();
          $("#roll").hide();
        }
      }
    }
    $("#playerTurn").text("Player " + player + " turn");
  });

  // HOLD UI
  $("#hold").click(function(){
    if (player === 1) {
      score1 = score1 + counter;
      $("#scoreTotal1").text(score1);
      counter = 0;
    }
    bank1 = 0;
    $("#bankTotal1").text(bank1);

    compTurn = computerRoll();
    if (compTurn === 1) {
      player = playerTurn(player);
      alert("Hal was unlucky. Your turn.");
    } else if (compTurn !== 1) {
      score2 = score2 + compTurn;
      $("#halScore").text(score2);
      if (score2 >= 100) {
        $("#playerTurn").text("Hal WINS!");
        $("#winner").show();
        $("#restart").show();
        $("#hold").hide();
        $("#roll").hide();
      }
      player = playerTurn(player);
      alert("Hal rolled, it's your turn.");
    }

    if (score1 >= 100) {
      $("#playerTurn").text("Player 1 WINS!");
      $("#winner").show();
      $("#restart").show();
      $("#hold").hide();
      $("#roll").hide();

    } else if (score2 >= 100) {
      $("#playerTurn").text("Player 2 WINS!");
      $("#winner").show();
      $("#restart").show();
      $("#hold").hide();
      $("#roll").hide();
    }

    player = playerTurn(player);

  });

  $("#restart").click(function() {
    location.reload();
  });
});
