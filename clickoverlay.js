'use strict'


$(document).ready(function() {

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function(){
  $(".popup-overlay, .popup-content").addClass("active1");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function(){
  $(".popup-overlay, .popup-content").removeClass("active1");
});

// $(".open").on("click", function(){
//   $(".popup-overlay, .popup-content").addClass("active2");
// });

// //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close, .popup-overlay").on("click", function(){
//   $(".popup-overlay, .popup-content").removeClass("active2");
// });




});