"use strict";
$(document).ready(function () {
    var timer = null;
    var time = 0;
    $(`.power`).click(function(){
        $(`.screen`).toggleClass(`unclicked`);
          time = 120;
          showTimer();
            // if $(“.screen”).toggleClass(“clicked”)
          clearInterval(timer);
        //   **** Adam clearInterval needs to be above timer =setInterval(...)
        $(".cards").css("opacity", "1");
          timer = setInterval(showTimer, 1000);
        });
        let app = {
            cards: [1,1,2,2,3,3,4,4,5,5,6,6],
            init: function() {
                app.shuffle();
                app.assignCards();
            },
            shuffle: function() {
                let random = 0;
                let temp = 0;
                for(let i = 1; i < app.cards.length; i++) {
                    random = Math.round(Math.random() * i);
                    temp = app.cards[i];
                    app.cards[i] = app.cards[random];
                    app.cards[random] = temp;
                }
                app.assignCards();
                console.log(app.cards);
            },
            assignCards: function() {
                $('.card').each(function(index) {
                    $(this).attr(`data-card-value`, app.cards[index]);
                })
                app.clickHandlers();
            },
            clickHandlers: function() {
                $('.card').on('click', function() {
                    $(this).html(`<p>`+$(this).data('cardValue')+`</p`).addClass(`selected`);
                    app.checkMatch();
                });
            },
            checkMatch: function() {
                if($('.selected').length === 2) {
                    if ($(`.selected`).first().data(`cardValue`) == $(`.selected`).last().data(`cardValue`)) {
                        $('.selected').each(function() {
                            $(this).animate({opacity: 0}).removeClass(`unmatched`);
                        });
                        $(`.selected`).each(function() {
                            $(this).removeClass('selected');
                        });
                        app.checkWin();
                    } else {
                        setTimeout(function(){
                            $(`.selected`).each(function() {
                            $(this).html(``).removeClass('selected');
                            });
                        }, 1000);
                    }
    
                }
            },
            checkWin: function() {
                if($(`.unmatched`).length === 0) {
                    $(`.container`).html(`<h1>you won!<h1>`);
                }
            }
        };
        app.init()
    function showTimer() {
          if (time < 0) {
            clearInterval(timer);
                return;
          }
          function pad(value) {
                return (value < 10 ? `0` : ``) + value;
          }
          $(`.timer`).text(Math.floor(time / 60) + `:` + pad(time % 60));
          time--;
        }
 })
// $(document).ready(function() {
    // let app = {
    //     cards: [1,1,2,2,3,3,4,4,5,5,6,6],
    //     init: function() {
    //         app.shuffle();
    //         app.assignCards();
    //     },
    //     shuffle: function() {
    //         let random = 0;
    //         let temp = 0;
    //         for(let i = 1; i < app.cards.length; i++) {
    //             random = Math.round(Math.random() * i);
    //             temp = app.cards[i];
    //             app.cards[i] = app.cards[random];
    //             app.cards[random] = temp;
    //         }
    //         app.assignCards();
    //         console.log(app.cards);
    //     },
    //     assignCards: function() {
    //         $('.card').each(function(index) {
    //             $(this).attr(`data-card-value`, app.cards[index]);
    //         })
    //         app.clickHandlers();
    //     },
    //     clickHandlers: function() {
    //         $('.card').on('click', function() {
    //             $(this).html(`<p>`+$(this).data('cardValue')+`</p`).addClass(`selected`);
    //             app.checkMatch();
    //         });
    //     },
    //     checkMatch: function() {
    //         if($('.selected').length === 2) {
    //             if ($(`.selected`).first().data(`cardValue`) == $(`.selected`).last().data(`cardValue`)) {
    //                 $('.selected').each(function() {
    //                     $(this).animate({opacity: 0}).removeClass(`unmatched`);
    //                 });
    //                 $(`.selected`).each(function() {
    //                     $(this).removeClass('selected');
    //                 });
    //                 app.checkWin();
    //             } else {
    //                 setTimeout(function(){
    //                     $(`.selected`).each(function() {
    //                     $(this).html(``).removeClass('selected');
    //                     });
    //                 }, 1000);
    //             }

    //         }
    //     },
    //     checkWin: function() {
    //         if($(`.unmatched`).length === 0) {
    //             $(`.container`).html(`<h1>you won!<h1>`);
    //         }
    //     }
    // };
    // app.init()
// })