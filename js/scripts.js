// $(document).ready(function(event) {
//   event.preventDefault();
//
// });

var player1Total = 0;
var player2Total = 0


var player1TurnTotal = 0;
var player2TurnTotal = 0;



var Dice = {
  sides: 6,
  roll: function() {

    var randomNumber =
    Math.floor(Math.random() * this.sides) + 1;

    return randomNumber;
  }
}



$(document).ready(function(event){


$("#roll").click(function(){

  console.log(Dice.roll());

});

});
