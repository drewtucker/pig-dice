// $(document).ready(function(event) {
//   event.preventDefault();
//
// });


var dice = {
  sides: 6,
  roll: function() {

    var randomNumber =
    Math.floor(Math.random() * this.sides) + 1;

    return randomNumber;
  }
}

console.log(dice.roll());
