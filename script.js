"use strict";
$(document).ready(function () {
    $(".power").click(function(){
        $(".screen").toggleClass("clicked");
    });
});



//     let clicked = true
//     $(".power").click(function() {
//         console.log("clicked")
//         $(".screen").css("background", "url(http://www.sprinklesandbooze.com/wp/wp-content/uploads/2012/11/pete-and-pete.jpeg)");
//         let clicked = false;
//         console.log(clicked);
//     })
//     if ($(window).width() < 820 && clicked == false) {
//         $(".power").click(function() {
//         console.log('working')
//         $(".screen").css("background-color", "#000000");
//         })

//     // let image = clicked ? "rgb(83, 104, 46)": "url(http://www.sprinklesandbooze.com/wp/wp-content/uploads/2012/11/pete-and-pete.jpeg)";
//     // $(".screen").css(image);
//     // clicked = !clicked;
//     // console.log('hello')
// }