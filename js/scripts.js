// $(document).ready(function(event) {
//   event.preventDefault();
//
// });


var Player = {
  playerNumber: function(number) {
    this.number = number;
  },
  playerTotal: function(points) {
    this.score += points;
  },
  score: 0
};


var Dice = {
  sides: 6,
  roll: function() {

    var randomNumber =
    Math.floor(Math.random() * this.sides) + 1;

    return randomNumber;
  }
}

console.log(Dice.roll());
