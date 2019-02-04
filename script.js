"use strict";
$(document).ready(function () {
  var timer = null;
  var time = 0;
  $("ul").css({ 'display': 'none' })
  $(`.power`).click(function () {
    $("ul").css({ 'display': 'flex' })
    console.log('hello!')
    $(`.screen`).toggleClass(`unclicked`);
    if ($(`.screen`).hasClass(`unclicked`)) {
      $("ul").css({ 'display': 'none' })
      location.reload();
    }
    $(`.card`).toggleClass(`onoff`);
    time = 120;
    showTimer();
    clearInterval(timer);
    timer = setInterval(showTimer, 1000);
    StartMemGame();
  });
  $('.reset').click(function () {
    clearInterval(timer);
    timer = setInterval(showTimer, 1000);
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


      $(event.target).toggleClass("facedDown show open");             // the event (which is the click) is targeted by the toggle class function to flip over the card starting from the face-down class
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
            $('.show').toggleClass("facedDown show open");

            showCards = [];
          }
        }


        setTimeout(compare, 800);           // run compare function here
      }

      const checkWin = () => {
        if (matches === 8) {
          youWin();
          clearInterval(timer);
        }
      }
    });
  }

  function showTimer() {
    if (time < 0) {
      clearInterval(timer);
      return;
    } else if (time == 0 && matches < 8) {
      youLose();
      clearInterval(timer);
    }
    function pad(value) {
      return (value < 10 ? `0` : ``) + value;
    }
    $(`.timer`).text(Math.floor(time / 60) + `:` + pad(time % 60));
    time--;
  }
  function getRandomWord() {
    var words = ["From Older Pete Wrigley: Why is it that when you miss somebody so much that your heart is ready to disintegrate, you always hear the saddest song ever on the radio?", "From Don Wrigley: C'mon Pete, we gotta kill Bob while he's still alive!", "From Bus Driver Stu Benedict: Carrot-top Judas... THOU HAST FORSAKEN ME!", "From Artie: Worry not, boy. Worry not... for I am Artie, the strongest man in the world", "From Endless Mike Hellstrom: I am the Doctor of Death, and I have come to cure you of your life.", "From Younger Pete Wrigley: Read it and weep, fungus-lick!", "From Younger Pete Wrigley: Hey, Blowhole, wherever you are, in forty-five minutes I'm going to be famous. And you know what you're going to be? A blowhole!", "From Artie, The Strongest Man in the World: Soon you will be like Cheese Boy: melty, melty, melty!", "From Older Pete Wrigley: She's a girl, and she's my friend, but she's not my girlfriend.", "Mr. Throneberry: Aloha maku maku. Don Ho will not emerge from the Valley of Darkness.", "From Artie, The Strongest Man in the World: Begone with you pulpy, before I fold you into some type of brochure!", "From Monica: I am so sick and tired of hearing lucky this and lucky that. Why don't you take your lucky necklace stuff it down your lucky mouth before I push you down this lucky hill and make you poop in your lucky underpants.", "Mr. Slurm: Congratulations, Mr. Wrigley... you're dead.", "From Fran 'Pit Stain': We've all got our problems, Wrigley. Mine happens to be glandular, yours happens to be my fist!", "From English Teacher: They shreked Shrek! And I just used a noun as a verb, what's wrong with me?", "Trivia: This show started out as a series of one-minute shorts that aired during commercial breaks on Nickelodeon between 1990-1993.", "Trivia: Only Mike Maronna appears in all 39 episodes. Little Pete is not in 'Yellow Fever'", "Trivia: According to one of the show's creators, the show was originally going to be about a boy named Pete and his dog named Pete, but they changed the dog to a younger brother when they realized a dog 'wasn't exciting enough.'", "Trivia: The idea for Pete and Pete's mom having a metal plate in her head came from the story of baseball player and coach Don Zimmer who had to have a metal plate put in his head after receiving a blow to the head by a ball in the 1950's.", "Trivia: The names of the slushies that the Petes, and the baseball team they belong to, drink are all named after Biblical figures. Flavors mentioned include Grape Judas, Lime Balthazar and the addictive Orange Lazarus.", "Trivia: Toby Huss's character of Artie, the Strongest Man in the World, was initially created at No Shame Theatre at the University of Iowa in Iowa City.", "Trivia: According to Danny Tamberelli, Little Pete's famous arm tattoo, Petunia, was achieved with an adhesive patch. However, when supplies of the stick-on began to dwindle, they advised Tamberelli to protect the adhesive from water during shooting periods. Eventually, the producers began applying the tattoo with a stencil.", "Trivia: Almost everything in the world of Pete and Pete is created and manufactured by the KrebStar Company. Products include Lady Krebstick deodorant, Kreben Up soda, Kreb Zeppelin the world famous rock and roll band, the board game Krebtego, and the Wrigley family's car is a Krebrolet.", "Trivia: Danny Tamberelli and Michael C. Maronna remained close friends even after the show ended, co-hosting a podcast together called 'The Adventures of Danny and Mike.'"];
    return words[Math.floor(words.length * Math.random())].toUpperCase();
  }
  function youWin() {
    console.log(`you win!`);
    $(".modal").toggle(function (e) {    // toggles on the victory modal
      $(".modal-header").append(`<h1>You Won! Now begins the Age of Pete! Your completion time was: ${120 - time} seconds.</h1>`);
      const victory = `"${getRandomWord()}"`
      $(".victory-msg").append(victory);
      // e.preventDefault();
      let dataModal = $(this).attr("data-modal");
      $("#" + dataModal).css({ "display": "block" });
      // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
    }); 
    resetButtonClickModal();
  }
  function youLose() {
    $(".modal").toggle(function (e) {
      console.log("you lose");
      $(".modal-header").append("<h1>You Lose!</h1>");
      let dataModal = $(this).attr("data-modal");
      $("#" + dataModal).css({ "display": "block" });
    });
    resetButtonClickModal();

  }
  function resetButtonClickModal() {
    $(".reset-modal, .poweroff-modal").click(function () {
      $(".modal").css({ "display": "none" });
      $("body").css({ "overflow-y": "auto" });
      location.reload(); //Prevent double scrollbar.
    });
  }
});






