"use strict";
$(document).ready(function () {
  var timer = null;
  var time = 0;
  $(`.power`).click(function () {
    console.log('hello!')
    $(`.screen`).toggleClass(`unclicked`);
    if ($(`.screen`).hasClass(`unclicked`)) {
      location.reload();
    }
    $(`.card`).toggleClass(`onoff`);
    time = 120;
    showTimer();
    // if $(“.screen”).toggleClass(“clicked”)
    clearInterval(timer);
    //   **** Adam clearInterval needs to be above timer =setInterval(...)
    timer = setInterval(showTimer, 1000);
    StartMemGame();
  });
  $('.reset').click(function () {
    location.reload();
  })
  let matches = 0;                                // number of matches between the cards starts at 0
  function StartMemGame() {
    // Shuffles cards**************************
    const randomize = () => {                   // where the cards are "shuffled" through the ul and li elements in the HTML
      let deck = $('ul');                     // going through the desk of cards
      let cards = $('ul li').length;          // going through each individual card

      for (let i = 1; i < cards; i++) {
        let a = Math.floor(Math.random() * cards); // i starts at 1 and will increment adding a new individual, random card to the deck (appending its index to the array)
        $('li', deck).eq(a).appendTo(deck);
      }
    }
    // End of shuffle cards function********************************
    randomize();                              // randomize function is called
    let showCards = [];
    let clickedCard;


    $(document.body).on("click", "li.card", function (event) {         // This function happens in the document (HTMLs) body and attaches the on click event to each listed card 


      $(event.target).toggleClass("face-down show open");             // the event (which is the click) is targeted by the toggle class function to flip over the card starting from the face-down class
      clickedCard = $(event.target).attr("class");                    // the clicked card is set equal to the on click event and uses the .attr method to return it to the FIRST matched class attribute
      showCards.push(clickedCard);                                    // adding the clicked cards to the end of the array(show cards) when clicked and flipped back over

      if (showCards.length === 2) {                                   // just compares the length of the two cards clicked making sure it is just two cards before comparison is run

        const compare = () => {                                       // the compare function is declared
          if (showCards[0] === showCards[1]) {
            $(".show").css({ 'background': '' }).animate({ opacity: 0 }, { duration: 800 });    // if the showCards array equals the showCards clicked(so just one card) then show the second background from css, call the animate set in css to flip and lower the opactiy to 0 over the duration specified
            // $(".show").toggleClass("show blank open");                                   // they toggled instead between a black card and the cards they needed to replace
            showCards = [];
            matches++;                                                                  // the showCards array will reset and the matches will increment by 1 pair
            checkWin();
          } else {
            $('.show').toggleClass("face-down show open");

            showCards = [];
          }
        }


        setTimeout(compare, 800);           // run compare function here
      }

      const checkWin = () => {
        if (matches === 8) {
          console.log(`you win!`);
          // $('.container').html('<h1>You win!</h1>');
          console.log(time);
        }
      }
      // function resetCards() {
      //   let x = $(`.peteandpete-deck li`)
      //     for (let onoff of x) {
      //       onoff.classname = `onoff`
      //     }
      // }
    });
  }

  function showTimer() {
    if (time < 0) {
      clearInterval(timer);
      return;
    }
    else if (time == 0 && matches < 8) {
      console.log(`you lose`)
    }
    function pad(value) {
      return (value < 10 ? `0` : ``) + value;
    }
    $(`.timer`).text(Math.floor(time / 60) + `:` + pad(time % 60));
    time--;
  }
})

