"use strict";
$(document).ready(function() {
let app = {
    cards: [card1, card2, card3],
    init: function() {
    app.turn(); 
},
turn: function(){
    $('.container').toggleClass('turn');   
}
}
});




// function turn1() {                      // function called turn
//     $('.card1').toggleClass('turn');                            // card class turned into jquery object using toggle class function to turn the card using on click function defined in HTML
// }
// function turn2() {
//    $('.card2').toggleClass('turn');
// }
// function turn3() {
//     $('.card3').toggleClass('turn');
// }
