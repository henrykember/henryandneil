'use strict'


$(document).ready(function() {

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#gdinttitle").on("click", function(){
  $(".gdinterviews").addClass("active1"); 
});
$("#cginfinitetitle").on("click", function(){
  $(".cginfinite").addClass("active1"); 
});
$("#mixtitle").on("click", function(){
  $(".mixionary").addClass("active1"); 
});
$("#gdexptitle").on("click", function(){
  $(".gdexperience").addClass("active1"); 
});
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function(){
  $(".gdinterviews, .volvoembrace, .cginfinite, .mixionary, .gdexperience").removeClass("active1");
});

$("#gdinttitle, #cginfinitetitle, #mixtitle, #gdexptitle").on("click", function(){
  $("body").addClass("pause"); 
});

$(".close").on("click", function(){
  $("body").removeClass("pause");
});


//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close").on("click", function(){
//   $(".volvoembrace").removeClass("active1");
// });

// $("#volvoembracetitle").on("click", function(){
//   $("body").addClass("pause"); 
// });

// $(".close").on("click", function(){
//   $("body").removeClass("pause");
// });

// $(".open").on("click", function(){
//   $(".popup-overlay, .popup-content").addClass("active2");
// });

// //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close, .popup-overlay").on("click", function(){
//   $(".popup-overlay, .popup-content").removeClass("active2");
// });




});

