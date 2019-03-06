
$(document).ready( function() {
  var choice = undefined
  var array = ["rock", "paper", "scissors"]
 $('.choice_image').on('click', function() {
  //set choice variable 
  choice = this.id
 //image appears for user choice
  $("#user_choice_image").text(choice)
   //computer chooses 
   
   //opponent image appears
   //result determined
   //result appears
   //User_record updates
   //Opponent's record updates
 });


});